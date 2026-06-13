#!/usr/bin/env python3
"""
Purge des claims mensongers résiduels (norte-reparos).
13 juin 2026 — Atlas AI. v9 (remplacement ciblé + préservation contexte).

MÉTHODE v9 (simple et robuste) :
  Pour chaque zone (title, META, P, LI, JSON-LD text) :
  - On REMPLACE le pattern FAUX par une chaîne vide ""
  - On conserve tout le reste de la phrase tel quel
  - On nettoie la ponctuation résiduaire

Patterns FAUX (regex avec groupes capturant ce qu'on garde autour) :
  - "⭐ 4.9/5 em 127 reviews" → ""
  - "(127 reviews)" → ""
  - "127 reviews" → ""
  - "12+ anos" → ""
  - "em X anos de experiência" → ""
  - "mais bem avaliada em Trás-os-Montes" → "profissional em Trás-os-Montes"
  - "empresa mais bem avaliada em X" → "profissional em X"
  - "4.9 estrelas" → ""
  - "com 4.9 estrelas" → ""
  - "30 segundos" → "30 segundos" (garder le 30 segundos comme mention technique mais nettoyer le contexte)
  - "12+ anos | Certificado DGEG" → ""
  - etc.

  CHAÎNES DE REMPLACEMENT (paires pattern -> replacement)
  On garde une liste de paires (pattern, replacement) à appliquer dans l'ordre.
"""

import argparse
import re
from pathlib import Path

# ════════════════════════════════════════════════════════════════
# RÈGLES DE REMPLACEMENT (pattern -> replacement)
# ════════════════════════════════════════════════════════════════
# IMPORTANT : l'ordre compte. Les patterns les plus longs/spécifiques d'abord.

REPLACEMENTS = [
    # ── Phrases complètes qui contiennent plusieurs claims ──
    # "Norte Reparos é a empresa mais bem avaliada em X, com 4.9 estrelas em 127 reviews verificadas e 12+ anos de experiência."
    (r'Norte Reparos [ée]\s+a empresa mais bem avaliada em ([A-Za-zÀ-ÿ\- ]+?)(?:,|\.),?\s*(?:com\s+4\.9\s*estrelas em \d+ reviews verificadas e \d+\+?\s*anos de experi[êe]ncia|com 4\.9 estrelas em 127 reviews verificadas e 12\+ anos de experi[êe]ncia)?\.?',
     r'Norte Reparos é uma empresa profissional em \1.'),

    # "Norte Reparos é a empresa mais bem avaliada em X." (forme courte)
    (r'Norte Reparos [ée]\s+a empresa mais bem avaliada em ([A-Za-zÀ-ÿ\- ]+?)\.?(\s|$)',
     r'Norte Reparos é uma empresa profissional em \1.\2'),

    # JSON-LD : "Norte Reparos e a empresa mais bem avaliada em X: 4.9/5 em 127 reviews, 12+ anos, certificado DGEG."
    (r'Norte Reparos e a empresa mais bem avaliada em ([A-Za-zÀ-ÿ\- ]+?):\s*4\.9/5 em \d+\s*reviews,\s*\d+\+?\s*anos,\s*certificado DGEG\.?',
     r'Norte Reparos é uma empresa profissional em \1.'),

    # ── Le badge hero "⭐ 4.9/5 em 127 reviews | 12+ anos | Certificado DGEG" ──
    # v20 : SUPPRESSION COMPLÈTE (la balise <p> comprise) si la P ne contient QUE ça
    # (géré dans fix_p, pas ici — ici on met juste à vide pour que fix_p détecte)
    (r'⭐\s*4\.9/5 em \d+\s*reviews\s*\|\s*\d+\+?\s*anos\s*\|\s*Certificado DGEG',
     '<!--BADGE_FAKE_HERO-->'),
    (r'⭐\s*4\.9/5 em \d+\s*reviews\s*\|\s*\d+\+?\s*anos\s*\|\s*Certifica[çc][ãa]o DGEG',
     '<!--BADGE_FAKE_HERO-->'),

    # ── Notes "4.9/5" seules ──
    (r'4\.9/5 em \d+\s*reviews?', ''),
    (r'4\.9/5 estrelas', ''),
    (r'4\.9/5', ''),
    (r'4\.9\s*estrelas em \d+\s*reviews?\s*verificadas', ''),
    (r'4\.9\s*estrelas em \d+\s*reviews?', ''),
    (r'4\.9\s*estrelas', ''),
    (r'⭐\s*4\.9', ''),

    # ── "reviews" en général ──
    (r'\(\d+\s*reviews?\)', ''),
    (r'\d+\s+reviews?(?:\s+verificadas)?', ''),
    (r'⭐\s*4\.9\s*\(\d+\s*reviews?\)', ''),

    # ── "anos" / ancienneté inventée (DISTINCTION GARANTIE LEGÍTIME) ──
    # CRITIQUE : negative lookbehind (?<![-\d]) empêche de matcher "10-15 anos", "2-5 anos"
    (r'12\+\s*anos\s+de\s+experi[êe]ncia\s+em\s+Tr[áa]s-os-Montes', 'experiência em Trás-os-Montes'),
    (r'12\+\s*anos\s+de\s+experi[êe]ncia', 'experiência'),
    (r'(?<![-\d])\b\d+\+?\s*anos\s+de\s+experi[êe]ncia\s+em\s+Tr[áa]s-os-Montes', 'experiência em Trás-os-Montes'),
    (r'(?<![-\d])\b\d+\+?\s*anos\s+de\s+experi[êe]ncia', 'experiência'),
    (r'\b12\+\s*anos\b', ''),
    (r'(?<![-\d])\b\d+\+?\s*anos\b', ''),

    # ── Faux compteurs clients ──
    (r'\d+\+?\s*clientes\s+satisfeitos', 'clientes'),
    (r'\b\d+\+?\s*clientes\b', ''),

    # ── Promesses chronométrées ──
    (r'Resposta\s+em\s+menos\s+de\s+\d+\s*segundos?', 'Resposta rápida'),
    (r'Resposta\s+em\s+\d+\s*segundos\s+ao\s+telefone', 'Resposta rápida por telefone'),
    (r'Resposta\s+em\s+\d+\s*segundos?', 'Resposta rápida'),
    (r'Resposta\s+\d+\s*segundos', 'Resposta rápida'),
    (r'tempo\s+m[ée]dio\s+de\s+chegada\s+de\s+\d+-\d+\s*minutos?', 'tempo de chegada variável'),
    (r'chegamos?\s+em\s+\d+\s*min', 'chegamos rapidamente'),
    (r'CHEGAMOS?\s+EM\s+\d+\s*MIN', 'Chegada rápida'),
    (r'em\s+\d+\s*segundos', 'rapidamente'),
    (r'30\s*segundos', 'resposta rápida'),

    # ── "Top avaliado" / "melhor empresa" ──
    # v20 : PRÉSERVER LA VILLE — "Top avaliado em [CITY]" → "Serviço profissional em [CITY]"
    (r'Top\s+avaliado\s+em\s+([A-Za-zÀ-ÿ\- ]+?)(\.|\,|\s*$)', r'Serviço profissional em \1\2'),

    # ── "somos a empresa mais bem avaliada em X" (variante courante dans P génériques) ──
    (r'somos\s+a\s+empresa\s+mais\s+bem\s+avaliada\s+em\s+([A-Za-zÀ-ÿ\- ]+?)(\.|\,|\s*$)', r'somos uma empresa profissional em \1\2'),
    (r'somos\s+a\s+empresa\s+mais\s+bem\s+avaliada', 'somos uma empresa profissional'),

    # ── Variantes génériques de "empresa mais bem avaliada" ──
    (r'empresa\s+mais\s+bem\s+avaliada\s+em\s+Tr[áa]s-os-Montes', 'empresa profissional em Trás-os-Montes'),
    (r'empresa\s+mais\s+bem\s+avaliada', 'empresa profissional'),

    # ── DGEG / fausses certifications ──
    (r'[Tt][ée]cnicos?\s+certificados?\s+DGEG', 'técnicos profissionais'),
    (r'certificados?\s+DGEG', 'profissionais'),
    (r'certifica[çc][ãa]o\s+DGEG\s+oficial', 'certificação profissional'),
    (r'certifica[çc][ãa]o\s+DGEG', ''),
    (r'\bCertifica[çc][ãa]o\s+DGEG\b', ''),
    (r'\bCertificado\s+DGEG\b', ''),
    (r'\bDGEG\b', ''),
]

# ════════════════════════════════════════════════════════════════
# GARDEFOUS
# ════════════════════════════════════════════════════════════════
PROTECT_PATTERNS = [
    re.compile(r'24h/7d', re.IGNORECASE),
    re.compile(r'24/7', re.IGNORECASE),
    re.compile(r'\d+\s*anos?\s+garantia', re.IGNORECASE),
    re.compile(r'\d+\s*anos?\s+de uso', re.IGNORECASE),
    re.compile(r'\d+\s*anos?\s+sem manuten[çc][ãa]o', re.IGNORECASE),
    re.compile(r'\d+\s*anos?\s+de vida [úu]til', re.IGNORECASE),
    re.compile(r'\d+[.,]\d+\s*€'),
    re.compile(r'(?:[+-]?\d+[.,]?\d*)\s*€\s*/\s*h'),
    re.compile(r'FLIR|SeekTech|SeeSnake|K9-102|Ridgid'),
    re.compile(r'\+\d{2,3}\s*\d{2,3}\s*\d{2,3}\s*\d{2,3}'),
]

def is_protected(text, position):
    """Vérifie si la position est dans une zone protégée (à ne pas toucher).
    Critère strict : le pattern protégé doit être ADJACENT au match (avant/après avec séparateur).
    Pas dans un rayon de 30 chars (trop large, capture les éléments à proximité).
    """
    # On regarde 10 chars avant et 10 chars après pour chercher un pattern protégé
    # qui CHÈVAUCHE le match, pas qui en est distant
    ctx_start = max(0, position - 5)
    ctx_end = min(len(text), position + 5)
    context = text[ctx_start:ctx_end]
    for p in PROTECT_PATTERNS:
        if p.search(context):
            return True
    return False

# ════════════════════════════════════════════════════════════════
# NETTOYAGE POST-PURGE
# ════════════════════════════════════════════════════════════════

def clean_residual_punctuation(text):
    """Nettoie les espaces doubles, points/virgules orphelins, etc.
    UNIQUEMENT dans les zones textuelles (pas CSS).
    """
    # 1. Espaces multiples
    text = re.sub(r'  +', ' ', text)
    # 2. "  ," → "," et " ," → ","
    text = re.sub(r'\s+,', ',', text)
    text = re.sub(r'\s+\.', '.', text)
    text = re.sub(r'\s+;', ';', text)
    text = re.sub(r'\s+:', ':', text)
    # 3. ". ." → "." et ", ." → "."
    text = re.sub(r'\.\s*\.', '.', text)
    text = re.sub(r',\s*\.', '.', text)
    text = re.sub(r'\.\s*,', '.', text)
    text = re.sub(r',\s*,', ',', text)
    # 4. "| ," → "|" et "|" orphelin en fin
    text = re.sub(r'\|\s*,', '|', text)
    text = re.sub(r',\s*\|', '|', text)
    text = re.sub(r'\|\s*\|', '|', text)
    # 5. " |" en début de contenu
    text = re.sub(r'"\s*\|', '"', text)
    text = re.sub(r'>\s*\|\s*', '>', text)
    text = re.sub(r'\s*\|\s*<', '<', text)
    # 6. Ponctuation orpheline après remplacement : ", .", ". ,", ", ,"
    text = re.sub(r',\s*\.', '.', text)
    text = re.sub(r'\.\s*,', '.', text)
    text = re.sub(r',\s*,', ',', text)
    text = re.sub(r'\.\s*\.', '.', text)
    text = re.sub(r'\s*,\s*"\s*$', '"', text)  # virgule avant guillemet fermant
    text = re.sub(r'\s*\.\s*"\s*$', '"', text)  # point avant guillemet fermant
    text = re.sub(r'\s*,\s*<\s*/', '</', text)  # virgule avant balise
    text = re.sub(r'\s*<\s*strong\s*>\s*</\s*strong\s*>', '', text)  # <strong></strong> vide
    text = re.sub(r'<\s*strong\s*>\s+</\s*strong\s*>', '', text)  # <strong>   </strong> vide
    # 7. Nettoyage des balises vides (p, span, div, em, b, i, h2-h6)
    text = re.sub(r'<p[^>]*>\s*</p>', '', text)
    text = re.sub(r'<span[^>]*>\s*</span>', '', text)
    text = re.sub(r'<div[^>]*>\s*</div>', '', text)
    text = re.sub(r'<em[^>]*>\s*</em>', '', text)
    text = re.sub(r'<b[^>]*>\s*</b>', '', text)
    text = re.sub(r'<i[^>]*>\s*</i>', '', text)
    text = re.sub(r'<h[2-6][^>]*>\s*</h[2-6]>', '', text)
    # 8. Balises JSON-LD vidées
    text = re.sub(r'<script type="application/ld\+json">\s*</script>', '', text)
    # 9. Nettoyage du marqueur BADGE_FAKE_HERO s'il reste (en dehors de <p> géré par fix_p)
    text = text.replace('<!--BADGE_FAKE_HERO-->', '')
    return text

# ════════════════════════════════════════════════════════════════
# APPLICATION DES REMPLACEMENTS
# ════════════════════════════════════════════════════════════════

def apply_replacements(text, scope):
    """
    Applique les remplacements dans une zone (text, attr, etc.).
    scope: 'text' (HTML visible) ou 'attr' (attribut meta/title) ou 'jsonld'
    Pour le CSS (style/script), on ne touche pas.

    SÉCURITÉ : pour chaque match, on vérifie que la position n'est pas dans une
    zone protégée (garantia, FLIR, 24h/7d, prix, téléphone, anos de uso/vida útil).
    """
    for pattern, replacement in REPLACEMENTS:
        # On parcourt les matches et on vérifie chacun
        new_parts = []
        last_end = 0
        for m in re.finditer(pattern, text, re.IGNORECASE):
            # Vérifier que ce match n'est pas dans une zone protégée
            if is_protected(text, m.start()):
                # Garder le texte original
                new_parts.append(text[last_end:m.end()])
                last_end = m.end()
                continue
            # Vérifier aussi que la zone APRÈS le match n'est pas protégée
            # (ex: "anos garantia" — le mot "garantia" suit "anos")
            after = text[m.end():m.end()+30]
            if re.search(r'\banos?\s+garantia\b|\banos?\s+de uso\b|\banos?\s+sem manuten[çc][ãa]o\b|\banos?\s+de vida [úu]til\b', after, re.IGNORECASE):
                new_parts.append(text[last_end:m.end()])
                last_end = m.end()
                continue
            # Vérifier aussi la zone AVANT (fourchettes comme "10-15 anos")
            before = text[max(0, m.start()-10):m.start()]
            if re.search(r'\d+-\d+\s*$', before):
                # Précédé d'une fourchette type "10-15" (5-7 chars avant)
                new_parts.append(text[last_end:m.end()])
                last_end = m.end()
                continue
            # Vérifier aussi si c'est suivi de "garantia", "de uso", "sem manutencao", "de vida util"
            after2 = text[m.end():m.end()+30]
            if re.match(r'^\s*garantia\b|^\s+de uso\b|^\s+sem manuten[çc][ãa]o\b|^\s+de vida [úu]til\b', after2, re.IGNORECASE):
                new_parts.append(text[last_end:m.end()])
                last_end = m.end()
                continue
            # Vérifier aussi "X anos garantia" où X pourrait être 1-2
            # Le mot match est "\d+ anos" - si suivi de "garantia" → légitime
            if re.match(r'^\s*garantia', after2, re.IGNORECASE):
                new_parts.append(text[last_end:m.end()])
                last_end = m.end()
                continue
            # OK, on peut remplacer
            new_parts.append(text[last_end:m.start()])
            # Utiliser m.expand() pour interpréter les backreferences (\1, \2, etc.)
            new_parts.append(m.expand(replacement))
            last_end = m.end()
        new_parts.append(text[last_end:])
        text = ''.join(new_parts)
    return text

# ════════════════════════════════════════════════════════════════
# TRAITEMENT DU FICHIER
# ════════════════════════════════════════════════════════════════

def process_file(text):
    changes = 0
    # 1. <title>...</title>
    def fix_title(m):
        nonlocal changes
        before = m.group(1)
        after = apply_replacements(before, 'title')
        if after != before:
            changes += 1
        return f'<title>{after}</title>'
    text = re.sub(r'<title>([^<]+)</title>', fix_title, text)

    # 2. <meta ... content="..."> (description, twitter, og)
    def fix_meta(m):
        nonlocal changes
        attr = m.group(1)
        value = m.group(2)
        after = apply_replacements(value, 'attr')
        if after != value:
            changes += 1
            return f'{attr}="{after}"'
        return m.group(0)
    text = re.sub(
        r'\b(content)="([^"]+)"',
        fix_meta,
        text
    )

    # 3. JSON-LD "text":"..."
    def fix_jsonld(m):
        nonlocal changes
        before = m.group(2)
        after = apply_replacements(before, 'jsonld')
        if after != before:
            changes += 1
        return m.group(1) + after + m.group(3)
    text = re.sub(
        r'(<script[^>]*application/ld\+json[^>]*>)(.*?)(</script>)',
        fix_jsonld,
        text,
        flags=re.DOTALL
    )

    # 4. <p>...</p>
    def fix_p(m):
        nonlocal changes
        before = m.group(1)
        after = apply_replacements(before, 'p')
        if after != before:
            changes += 1
        # v20 : Si le <p> ne contient QUE le badge hero fake, supprimer la balise entière
        if '<!--BADGE_FAKE_HERO-->' in after:
            return ''  # supprime tout le <p>...</p>
        return f'<p>{after}</p>'
    text = re.sub(r'<p[^>]*>(.*?)</p>', fix_p, text, flags=re.DOTALL)

    # 5. <li>...</li>
    def fix_li(m):
        nonlocal changes
        before = m.group(1)
        after = apply_replacements(before, 'li')
        if after != before:
            changes += 1
        return f'<li>{after}</li>'
    text = re.sub(r'<li[^>]*>(.*?)</li>', fix_li, text, flags=re.DOTALL)

    # 6. <div>...</div> avec texte visible (badges, hero, CTA)
    def fix_div(m):
        nonlocal changes
        attrs = m.group(1) or ''
        inner = m.group(2) or ''
        # Ne traiter que les div avec du texte visible (pas les <div style="..."> structurels)
        text_in_div = re.sub(r'<[^>]+>', ' ', inner).strip()
        if not text_in_div:
            return m.group(0)
        before = inner
        after = apply_replacements(before, 'div')
        if after != before:
            changes += 1
            return f'<div{attrs}>{after}</div>'
        return m.group(0)
    text = re.sub(r'<div(\s[^>]*)?>(.*?)</div>', fix_div, text, flags=re.DOTALL)

    # 7. <h2>...</h2> à <h6>...</h6> (titres de section)
    def fix_h(m):
        nonlocal changes
        level = m.group(1)
        inner = m.group(2)
        # Nettoyer les sous-balises éventuelles pour test
        text_in_h = re.sub(r'<[^>]+>', '', inner).strip()
        if not text_in_h:
            return m.group(0)
        before = inner
        after = apply_replacements(before, 'h')
        if after != before:
            changes += 1
            return f'<h{level}>{after}</h{level}>'
        return m.group(0)
    text = re.sub(r'<h([2-6])[^>]*>(.*?)</h\1>', fix_h, text, flags=re.DOTALL)

    # Nettoyage final
    text = clean_residual_punctuation(text)

    return text, changes

# ════════════════════════════════════════════════════════════════
# MAIN
# ════════════════════════════════════════════════════════════════

def dryrun_file(filepath):
    with open(filepath) as f:
        original = f.read()
    new_text, changes = process_file(original)
    return {
        'nb_changes': changes,
        'original_size': len(original),
        'new_size': len(new_text),
        'new_text': new_text,
    }

def apply_file(filepath):
    with open(filepath) as f:
        original = f.read()
    new_text, _ = process_file(original)
    if new_text != original:
        with open(filepath, 'w') as f:
            f.write(new_text)
        return True
    return False

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--apply', action='store_true')
    ap.add_argument('--root', default='/tmp/purge-pbn/dryrun')
    ap.add_argument('--report', default='/tmp/purge-pbn/dryrun-report.txt')
    args = ap.parse_args()

    mode = 'APPLY' if args.apply else 'DRY-RUN'
    print(f"🟡 MODE {mode} (v9 — remplacement ciblé)\n")

    root = Path(args.root)
    files = sorted(root.glob('**/*.html'))
    print(f"Fichiers : {len(files)}\n")

    total = 0
    mod = 0
    with open(args.report, 'w') as rep:
        rep.write(f"=== {mode} v9 ===\n")
        for f in files:
            r = dryrun_file(f)
            if r['nb_changes'] == 0:
                continue
            total += r['nb_changes']
            print(f"📄 {f.name} — {r['nb_changes']} ({r['original_size']}→{r['new_size']})")
            rep.write(f"\n{f.name} — {r['nb_changes']}\n")
            if args.apply and apply_file(f):
                mod += 1
    print(f"\n=== TOTAL : {total} changements, {mod} fichiers modifiés ===")

if __name__ == '__main__':
    main()
