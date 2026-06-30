#!/usr/bin/env python3
"""
M7 — Cleanup des fragments FAQPage / body laissés par le bot purge R12.
Leçon #267 : filet R8 obligatoire, motifs décomposés, contexte d'assertion,
dry-run --check avant write.

Une seule passe idempotente par fichier.
Idempotence : si on rejoue le script, les occurrences déjà remplacées ne matchent plus.
"""

from __future__ import annotations
import re, sys, json, argparse
from pathlib import Path

ROOT = Path("/Users/admin/work/Sites/canalizador-norte-reparos")
CANDIDATES_GLOB = "client/public/*.html"

# ─────────────────────────────────────────────────────────────────────────────
# RÈGLES DE REMPLACEMENT (motif → remplacement)
# Idempotence : le remplacement ne doit PLUS contenir le motif.
# Chaque règle documente :
#   - motif (regex)
#   - remplacement (str)
#   - contexte d'assertion (caractères AVANT/APRÈS acceptables, ex: délimiteur JSON-LD ou balise HTML)
#   - pourquoi (référence AGENTS.md / R12)
# ─────────────────────────────────────────────────────────────────────────────

# 1. FAQPage QUESTION — variantes
FAQ_QUESTION_RULES = [
    # Variante V1.1 — la plus cassée : "Atendem urgencias Atendimento... 928 484 451, ?" → on retire le bot inséré,
    # en gardant "Atendem urgencias?" (énoncé court conforme R12 — pas de délai, pas de claim)
    {
        "name": "faq_q_atendem_bot_v1",
        "pattern": r'"name"\s*:\s*"Atendem urgencias Atendimento mediante confirma[cç][aã]o por telefone — ligue 928 484 451,\s*\?"',
        "repl":    '"name": "Atendem urg\u00eancias em Tr\u00e1s-os-Montes?"',
        "reason":  "R12 Transparence Radicale \u00a71: pas de d\u00e9lai chiffr\u00e9, pas de claim public \"prioritaire\"/\"im\u00e9diate\". Question courte conforme.",
        "apply_in": "faq_q",
    },
    # Variante V1.2 — avec "garantimos aten\u00e7\u00e3o imediata" (R145 violation)
    {
        "name": "faq_q_atendem_bot_v2_imediata",
        "pattern": r'"name"\s*:\s*"Atendem urgencias Atendimento mediante confirma[cç][aã]o por telefone — ligue 928 484 451, garantimos aten[cç][aã]o imediata [àa] sua chamada\?"',
        "repl":    '"name": "Atendem urg\u00eancias em Tr\u00e1s-os-Montes?"',
        "reason":  "R145: \"imediata\" est un d\u00e9lai chiffr\u00e9 (cach\u00e9 derri\u00e8re \"imediata\") \u2014 interdit. On ram\u00e8ne \u00e0 \u00e9nonc\u00e9 court.",
        "apply_in": "faq_q",
    },
    # Variante V1.3 — double mention
    {
        "name": "faq_q_atendem_bot_v3_double",
        "pattern": r'"name"\s*:\s*"Atendem urgencias Atendimento mediante confirma[cç][aã]o por telefone — ligue 928 484 451, garantimos aten[cç][aã]o mediante confirma[cç][aã]o por telefone\?"',
        "repl":    '"name": "Atendem urg\u00eancias em Tr\u00e1s-os-Montes?"',
        "reason":  "Double mention bot \u2014 ramen\u00e9 \u00e0 un \u00e9nonc\u00e9 court.",
        "apply_in": "faq_q",
    },
    # Variante V2 — sans 'Atendimento', pr\u00e9-existant (probablement aussi bot mais \u00e0 valider)
    {
        "name": "faq_q_atendem_pre_v1",
        "pattern": r'"name"\s*:\s*"Atendem urgencias mediante confirma[cç][aã]o por telefone — ligue 928 484 451,\s*\?"',
        "repl":    '"name": "Atendem urg\u00eancias em Tr\u00e1s-os-Montes?"',
        "reason":  "Idem V1 \u2014 m\u00eame sch\u00e9ma de bot.",
        "apply_in": "faq_q",
    },
    {
        "name": "faq_q_atendem_pre_v2",
        "pattern": r'"name"\s*:\s*"Atendem urgencias mediante confirma[cç][aã]o por telefone — ligue 928 484 451, garantimos aten[cç][aã]o mediante confirma[cç][aã]o por telefone\?"',
        "repl":    '"name": "Atendem urg\u00eancias em Tr\u00e1s-os-Montes?"',
        "reason":  "Idem V1.3 \u2014 double mention bot.",
        "apply_in": "faq_q",
    },
]

# 2. FAQPage ANSWER — variantes
FAQ_ANSWER_RULES = [
    # V3.1 — "Sim, Atendimento mediante confirma\u00e7\u00e3o por telefone — ligue 928 484 451, incluindo..." (1135)
    # Le bot a laiss\u00e9 \"Atendimento\" devant. On nettoie en gardant le t\u00e9l\u00e9phone + suite.
    {
        "name": "faq_a_sim_atendimento",
        "pattern": r'"text"\s*:\s*"Sim,\s*Atendimento mediante confirma[cç][aã]o por telefone — ligue 928 484 451,\s*',
        "repl":    '"text": "Sim, mediante confirma\u00e7\u00e3o por telefone — ligue 928 484 451. ',
        "reason":  "Bot a ajout\u00e9 'Atendimento' et une virgule pendante. R\u00e9\u00e9criture propre, garde le t\u00e9l (NAP 928 484 451) qui est utile au schema.",
        "apply_in": "faq_a",
    },
    # V3.2 — "30-90 min para emerg\u00eancias, mediante confirma\u00e7\u00e3o por telefone — ligue 928 484 451, garantimos..." (757)
    # Le 30-90 min EST un d\u00e9lai chiffr\u00e9 \u2014 R145 violation. On le retire.
    {
        "name": "faq_a_30_90min_r145",
        "pattern": r'"text"\s*:\s*"30-90 min para emerg\u00eancias, mediante confirma[cç][aã]o por telefone — ligue 928 484 451,\s*',
        "repl":    '"text": "Sob marcação, mediante confirmação por telefone — ligue 928 484 451. ',
        "reason":  "R145 (jamais de d\u00e9lai chiffr\u00e9) \u2014 '30-90 min' est interdit. On le retire, on garde le NAP + formulation neutre.",
        "apply_in": "faq_a",
    },
    # V3.3 — "Sim, mediante confirma\u00e7\u00e3o por telefone — ligue 928 484 451,  incluindo..." (608)
    # bot laisse double espace + virgule pendante
    {
        "name": "faq_a_sim_double_space",
        "pattern": r'"text"\s*:\s*"Sim, mediante confirma[cç][aã]o por telefone — ligue 928 484 451,  +',
        "repl":    '"text": "Sim, mediante confirmação por telefone — ligue 928 484 451. ',
        "reason":  "Nettoyage virgule pendante + double espace.",
        "apply_in": "faq_a",
    },
    # V3.4 — "30-90 min para emerg\u00eancias, mediante confirma\u00e7\u00e3o por telefone — ligue 928 484 451,  incluindo..." (563)
    {
        "name": "faq_a_30_90min_double_space_r145",
        "pattern": r'"text"\s*:\s*"30-90 min para emerg\u00eancias, mediante confirma[cç][aã]o por telefone — ligue 928 484 451,  +',
        "repl":    '"text": "Sob marcação, mediante confirmação por telefone — ligue 928 484 451. ',
        "reason":  "R145 (d\u00e9lai chiffr\u00e9) + virgule pendante.",
        "apply_in": "faq_a",
    },
    # V3.5 — "Norte Reparos -, mediante confirma\u00e7\u00e3o por telefone — ligue 928 484 451, ," (57)
    {
        "name": "faq_a_norte_virgula_virgula",
        "pattern": r'"text"\s*:\s*"Norte Reparos -,?\s*mediante confirma[cç][aã]o por telefone — ligue 928 484 451,  *,',
        "repl":    '"text": "Norte Reparos \u2014 mediante confirmação por telefone — ligue 928 484 451. ',
        "reason":  "Double virgule, pr\u00e9fixe bot 'Norte Reparos -,' \u2014 rentre dans le rang.",
        "apply_in": "faq_a",
    },
    # V3.6 — "Sim, mediante confirma\u00e7\u00e3o por telefone — ligue 928 484 451, garantimos aten\u00e7\u00e3o imediata" (48)
    # 'imediata' = R145 violation
    {
        "name": "faq_a_imediata_r145",
        "pattern": r'"text"\s*:\s*"Sim, mediante confirma[cç][aã]o por telefone — ligue 928 484 451, garantimos aten[cç][aã]o imediata [àa] sua chamada\s+',
        "repl":    '"text": "Sim, mediante confirmação por telefone — ligue 928 484 451. ',
        "reason":  "R145: 'imediata' est un d\u00e9lai chiffr\u00e9. On retire la promesse, on garde le NAP.",
        "apply_in": "faq_a",
    },
    # V3.7 — "30-90 min para emerg\u00eancias, ... garantimos aten\u00e7\u00e3o imediata" (31)
    {
        "name": "faq_a_30_90min_imediata",
        "pattern": r'"text"\s*:\s*"30-90 min para emerg\u00eancias, mediante confirma[cç][aã]o por telefone — ligue 928 484 451, garantimos aten[cç][aã]o imediata [àa] sua chamada\s+',
        "repl":    '"text": "Sob marcação, mediante confirmação por telefone — ligue 928 484 451. ',
        "reason":  "R145 double (30-90 min + imediata).",
        "apply_in": "faq_a",
    },
    # V3.8 — Dispon\u00edvel mediante confirma\u00e7\u00e3o ... 928 484 451, . (dans body/CTA aussi)
    {
        "name": "faq_a_disponivel",
        "pattern": r'"text"\s*:\s*"[^"]*?[Dd]ispon[ií]vel mediante confirma[cç][aã]o por telefone — ligue 928 484 451,  *',
        "repl":    '"text": "Sob marcação, mediante confirmação por telefone — ligue 928 484 451. ',
        "reason":  "'Dispon\u00edvel' pr\u00e9fixe bot qui ne rime pas \u2014 \u00e9nonc\u00e9 neutre.",
        "apply_in": "faq_a",
    },
    # V3.9 — Chegamos em m\u00e9dia / Baseado em Tr\u00e1s-os-Montes ... 928 484 451,  ... (body)
    {
        "name": "faq_a_chegamos_baseado",
        "pattern": r'"text"\s*:\s*"Chegamos em m[eé]dia [^"]*?[Dd]ispon[ií]vel mediante confirma[cç][aã]o por telefone — ligue 928 484 451,\s*',
        "repl":    '"text": "Chegamos conforme a zona tarifária, mediante confirmação por telefone — ligue 928 484 451. ',
        "reason":  "Body CTA cass\u00e9 \u2014 nettoy\u00e9, conforme R12 (pas de d\u00e9lai chiffr\u00e9).",
        "apply_in": "faq_a",
    },
    {
        "name": "faq_a_baseado_distrito",
        "pattern": r'"text"\s*:\s*"Baseado em Tr[aá]s-os-Montes, chegamos [^"]*?[Aa]tendimento mediante confirma[cç][aã]o por telefone — ligue 928 484 451,  *',
        "repl":    '"text": "Baseado em Trás-os-Montes, atendimento mediante confirmação por telefone — ligue 928 484 451. ',
        "reason":  "Nettoyage virgule pendante.",
        "apply_in": "faq_a",
    },
    # V3.10 — Atendimento ... 928 484 451, 7 dias por semana (1 × 8 villes cibles)
    {
        "name": "faq_a_7dias_por_semana",
        "pattern": r'"text"\s*:\s*"Atendimento mediante confirma[cç][aã]o por telefone — ligue 928 484 451,\s*7 dias por semana,\s*em\s+',
        "repl":    '"text": "Atendimento mediante confirmação por telefone — ligue 928 484 451, 7 dias por semana, em ',
        "reason":  "Virgule pendante apr\u00e8s le t\u00e9l\u00e9phone \u2014 corrig\u00e9e.",
        "apply_in": "faq_a",
    },
    # V3.11 — Atendimento ... 928 484 451, (virgule pendante) suivie d'espace (fallback)
    {
        "name": "faq_a_atendimento_hang",
        "pattern": r'"text"\s*:\s*"([^"]*?)Atendimento mediante confirma[cç][aã]o por telefone — ligue 928 484 451,\s+',
        "repl":    '"text": "\\1Atendimento mediante confirmação por telefone — ligue 928 484 451. ',
        "reason":  "Virgule pendante g\u00e9n\u00e9rique dans ANSWER \u2014 remplac\u00e9e par un point propre.",
        "apply_in": "faq_a",
    },
    # V3.12 — ... 928 484 451, , ... (double virgule)
    {
        "name": "faq_a_double_virgula",
        "pattern": r'928 484 451,\s*,',
        "repl":    '928 484 451.',
        "reason":  "Double virgule bot \u2014 normalis\u00e9e en point.",
        "apply_in": "faq_a",
    },
    # V3.13 — 'urg\u00eancias mediante confirma\u00e7\u00e3o ... 928 484 451, .' (3 occurrences body)
    {
        "name": "faq_a_urgencias_body",
        "pattern": r'"text"\s*:\s*"Sim, urg[eê]ncias mediante confirma[cç][aã]o por telefone — ligue 928 484 451,\.\s*',
        "repl":    '"text": "Sim, urgências mediante confirmação por telefone — ligue 928 484 451. ',
        "reason":  "Point apr\u00e8s virgule pendante \u2014 corrig\u00e9.",
        "apply_in": "faq_a",
    },
]

# 3. Body hors FAQPage JSON-LD (le plus gros volume)
BODY_RULES = [
    # B1 — 'Atendimento mediante confirma\u00e7\u00e3o por telefone — ligue 928 484 451, '
    {
        "name": "body_atendimento_hang",
        "pattern": r'([Aa]tendimento|[Aa]tendemos|[Aa]tende)\s*mediante confirma[cç][aã]o por telefone — ligue 928 484 451,\s+',
        "repl":    r'\1 mediante confirmação por telefone — ligue 928 484 451. ',
        "reason":  "Virgule pendante + espace \u2014 corrig\u00e9s. Conforme R12 et R145 (pas de claim 'imediata'/'priorit\u00e1ria' ici).",
        "apply_in": "body",
    },
    # B2 — 'Dispon\u00edvel mediante confirma\u00e7\u00e3o por telefone — ligue 928 484 451, '
    {
        "name": "body_disponivel_hang",
        "pattern": r'([Dd]ispon[ií]vel)\s*mediante confirma[cç][aã]o por telefone — ligue 928 484 451,\s+',
        "repl":    r'\1 mediante confirmação por telefone — ligue 928 484 451. ',
        "reason":  "Virgule pendante + 'Dispon\u00edvel' devenu faux claim \u2014 garde mais corrige la ponctuation.",
        "apply_in": "body",
    },
    # B3 — 'Atendemos urgenc\u00ecias ... 928 484 451, '
    {
        "name": "body_atendemos_urgencias_hang",
        "pattern": r'Atendemos urgenc(?:ias|ia)\s*Atendimento mediante confirma[cç][aã]o por telefone — ligue 928 484 451,\s+',
        "repl":    'Atendemos urgências mediante confirmação por telefone — ligue 928 484 451. ',
        "reason":  "Double mention bot + virgule pendante.",
        "apply_in": "body",
    },
    # B4 — 'Atendemos Atendimento ...' (double mot)
    {
        "name": "body_atendemos_duplo",
        "pattern": r'Atendemos\s+Atendimento\s+mediante confirma[cç][aã]o por telefone — ligue 928 484 451,\s+',
        "repl":    'Atendimento mediante confirmação por telefone — ligue 928 484 451. ',
        "reason":  "Double pr\u00e9fixe 'Atendemos Atendimento' \u2014 nettoy\u00e9.",
        "apply_in": "body",
    },
    # B5 — 'Ligue 928 484 451, ' suivi d'espace avant autre contenu (CTA en double)
    {
        "name": "body_ligue_hang",
        "pattern": r'(Ligue [+]?351\s*928 484 451),\s+(?=[A-Za-z\u00c0-\u00ff])',
        "repl":    r'\1. ',
        "reason":  "CTA avec virgule pendante \u2014 remplac\u00e9e par un point.",
        "apply_in": "body",
    },
    # B6 — qualquer '928 484 451, ' suivi d'un caract\u00e8re alphab\u00e9tique minuscule (generic)
    {
        "name": "body_tel_comma_hang_generic",
        "pattern": r'(?<!\d)(928 484 451),\s+(?=[a-z\u00e0-\u00bf])',
        "repl":    r'\1. ',
        "reason":  "G\u00e9n\u00e9rique: virgule pendante apr\u00e8s NAP quand suivie d'une minuscule. On am\u00e9liore la lisibilit\u00e9.",
        "apply_in": "body",
    },
    # B7 — fragments PRÉ-EXISTANTS : "..., ligue 928 484 451, garantimos atenção..."
    #      'garantimos atenção imediata' = R145 violation (délai chiffré caché)
    #      'garantimos atenção mediante confirmação por telefone' = double mention bot-like pré-existante
    {
        "name": "body_pre_existing_imediata",
        "pattern": r'(ligue\s+928\s+484\s+451),\s+garantimos aten[cç][aã]o imediata [àa] sua chamada',
        "repl":    r'\1',
        "reason":  "Fragment pré-existant: 'garantimos atenção imediata à sua chamada' est une violation R145 (délai chiffré 'imediata'). On retire la promesse, on garde le NAP cliquable.",
        "apply_in": "body",
    },
    {
        "name": "body_pre_existing_garantimos_attencao_med_conf",
        "pattern": r'(ligue\s+928\s+484\s+451),\s+garantimos aten[cç][aã]o mediante confirma[cç][aã]o por telefone',
        "repl":    r'\1',
        "reason":  "Fragment pré-existant: double mention 'garantimos atenção mediante confirmação por telefone' identique à celle du bot — on retire pour avoir un CTA direct.",
        "apply_in": "body",
    },
    # B8 — fragment pré-existant très répandu : "..., ligue 928 484 451, +9..." (suivi d'autre mention tél)
    {
        "name": "body_pre_existing_tel_comma_number",
        "pattern": r'(ligue\s+928\s+484\s+451),\s+(?=[+0-9])',
        "repl":    r'\1',
        "reason":  "Virgule pendante avant +351 928 484 451 (autre mention) — on retire la virgule.",
        "apply_in": "body",
    },
]

# 4. Dangling DGEG (toutes zones : JSON-LD + body)
DGREG_RULES = [
    {
        "name": "dgeg_dangling_atraves",
        "pattern": r'em conformidade com a,\s+(atrav[eé]s|atraves)\s+de\s+t[eé]cnico habilitado',
        "repl":    'em conformidade com a legisla\u00e7\u00e3o aplic\u00e1vel, atrav\u00e9s de t\u00e9cnico habilitado',
        "reason":  "Fragment 'em conformidade com a DGEG' \u2014 le mot 'DGEG' a \u00e9t\u00e9 retir\u00e9 par un patch ant\u00e9rieur, laissant 'em conformidade com a,' en suspens. On bascule sur la formule g\u00e9n\u00e9rique R12 'legisla\u00e7\u00e3o aplic\u00e1vel' (d\u00e9cision Filipe 30/06).",
        "apply_in": "all",
    },
    {
        "name": "dgeg_dangling_emitidas",
        "pattern": r'em conformidade com a,\s+emitidas\s+com',
        "repl":    'em conformidade com a legislação aplicável, emitidas com',
        "reason":  "Idem.",
        "apply_in": "all",
    },
    {
        "name": "dgeg_dangling_emitidas_por",
        "pattern": r'em conformidade com a,\s+emitidas por\s+t[eé]cnico habilitado',
        "repl":    'em conformidade com a legislação aplicável, emitidas por técnico habilitado',
        "reason":  "Idem — variante 'emitidas por' (vs 'através de') : 4 occurrences dans equipa.html + sobre.html",
        "apply_in": "all",
    },
    {
        "name": "dgeg_dangling_atraves_experiencia",
        "pattern": r'em conformidade com a,\s+(atrav[eé]s|atraves)\s+de\s+t[eé]cnico\s+com\s+experi[eê]ncia',
        "repl":    'em conformidade com a legislação aplicável, através de técnico com experiência',
        "reason":  "Idem — variante 'através de técnico com experiência' (vs 'habilitado')",
        "apply_in": "all",
    },
]

ALL_RULES = FAQ_QUESTION_RULES + FAQ_ANSWER_RULES + BODY_RULES + DGREG_RULES


def _decode_git_path(raw: str) -> str:
    """Décode un chemin git output. Avec `git -c core.quotePath=false`, les accents
    sortent DÉJÀ en UTF-8 décodés : on enlève juste les guillemets de protection."""
    s = raw.strip()
    if len(s) >= 2 and s.startswith('"') and s.endswith('"'):
        s = s[1:-1]
    return s


def get_dirty_files() -> list[Path]:
    """Liste les fichiers modifiés via `git -c core.quotePath=false diff --name-only`."""
    import subprocess
    r = subprocess.run(
        ["git", "-C", str(ROOT), "-c", "core.quotePath=false",
         "diff", "--name-only", "HEAD"],
        capture_output=True, text=True, check=True,
    )
    out = []
    for ln in r.stdout.splitlines():
        path = _decode_git_path(ln)
        if path and (ROOT / path).exists():
            out.append(ROOT / path)
    return out


def apply_rules_to_content(content: str, rules: list[dict]) -> tuple[str, dict]:
    """Applique les règles, retourne (nouveau contenu, stats par règle)."""
    stats = {}
    new = content
    for rule in rules:
        try:
            new_after, n = re.subn(rule["pattern"], rule["repl"], new)
        except re.error as e:
            stats[rule["name"]] = {"error": str(e)}
            continue
        stats[rule["name"]] = {"replacements": n, "reason": rule["reason"]}
        new = new_after
    return new, stats


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true", help="Dry-run, n'\u00e9crit rien")
    ap.add_argument("--limit", type=int, default=0, help="Limite \u00e0 N fichiers (0 = tous)")
    ap.add_argument("--rule", action="append", default=None,
                    help="Filtre la liste aux règles nommées (peut être répété, ex: --rule R1 --rule R2)")
    args = ap.parse_args()

    if args.rule:
        global ALL_RULES
        ALL_RULES = [r for r in ALL_RULES if r["name"] in args.rule]
        if not ALL_RULES:
            print(f"Règle {args.rule!r} introuvable.", file=sys.stderr)
            sys.exit(2)

    files = get_dirty_files()
    if args.limit:
        files = files[: args.limit]

    print(f"# Fichiers \u00e0 traiter : {len(files)}")
    print(f"# R\u00e8gles actives : {len(ALL_RULES)}")
    if args.check:
        print("# MODE --check : aucune \u00e9criture, affichage des compteurs uniquement")
    print()

    totals = {}
    files_with_change = 0
    files_no_change = 0
    total_repl = 0
    files_skipped_read_error = 0

    for fpath in files:
        try:
            content = fpath.read_text(encoding="utf-8", errors="replace")
        except Exception as e:
            files_skipped_read_error += 1
            continue

        new_content, stats = apply_rules_to_content(content, ALL_RULES)

        n_total = sum(s.get("replacements", 0) for s in stats.values() if isinstance(s.get("replacements"), int))
        if n_total > 0:
            files_with_change += 1
            total_repl += n_total
        else:
            files_no_change += 1

        if not args.check and n_total > 0:
            fpath.write_text(new_content, encoding="utf-8")

        for rule_name, st in stats.items():
            if isinstance(st.get("replacements"), int) and st["replacements"] > 0:
                totals.setdefault(rule_name, 0)
                totals[rule_name] += st["replacements"]

    print(f"## R\u00e9sum\u00e9")
    print(f"- Fichiers modifi\u00e9s : {files_with_change}")
    print(f"- Fichiers sans changement : {files_no_change}")
    print(f"- Fichiers skipp\u00e9s (read error) : {files_skipped_read_error}")
    print(f"- Total replacements : {total_repl}")
    print()
    print("## Par r\u00e8gle")
    for rule_name, n in sorted(totals.items(), key=lambda kv: -kv[1]):
        reason = next((r["reason"] for r in ALL_RULES if r["name"] == rule_name), "")
        print(f"  {n:6d} \u00d7 {rule_name}")
        print(f"           \u2192 {reason[:100]}")


if __name__ == "__main__":
    main()
