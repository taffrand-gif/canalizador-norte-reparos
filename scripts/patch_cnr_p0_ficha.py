#!/usr/bin/env python3
"""
PATCHER P0 CNR — purge 'ficha eletrotecnica' faux claim.

Stratégie :
- Pour 639 fichiers FAQPage : remplacer la chaîne de réponse fake par une formulation honnête.
  La chaîne exacte (638 fichiers) : "Emitimos fichas eletrotécnicas em conformidade com a legislação aplicável, através de técnico habilitado."
  Variante (1 fichier equipa.html) : "Sim. Emitimos fichas eletrotécnicas em conformidade avec a legislação aplicável, através de técnico habilitado."
  Nouveau texte (canonique) : "Emitimos fatura com NIF e orçamento por escrito antes de qualquer intervenção. Para serviços de eletricidade e certificação DGEG, consulte eletricista-norte-reparos.pt."
- Pour 4 fichiers corpo sem a FAQ exata : patch ciblé par regex du paragraphe corpo.
- Pour 4 fichiers multi-occurrences corpo : patch du residual corpo.

GARDE :
- Ne pas toucher arquivos de electricista (ENR/EU) ou canalizador-urgente (CU).
- Chaque bloco JSON-LD modifié doit rester parsable via json.loads.
- Préserver toute la structure environnante.
- PAS de sed blanket : patch ciblé par chaîne EXACTE.

Usage : python3 patch_cnr_p0.py [--vague N --total VAGUES] [--dry-run]
"""
import re, subprocess, sys, os, json, argparse

REPO = '/Users/admin/work/Sites/canalizador-norte-reparos/.worktrees/t_f7016bfa'
REMOTE = 'github/main'
SUBDIR = 'client/public/'

# Nouvelle réponse canonique (honnête, factuelle, redirige vers ENR)
NEW_ANSWER = 'Emitimos fatura com NIF e orçamento por escrito antes de qualquer intervenção. Para serviços de eletricidade e certificação DGEG, consulte eletricista-norte-reparos.pt.'

# Réponse fake exacte (638 fichiers)
OLD_ANSWER_EXACT = 'Emitimos fichas eletrotécnicas em conformidade com a legislação aplicável, através de técnico habilitado.'
# Variante (1 fichier equipa.html)
OLD_ANSWER_VARIANT = 'Sim. Emitimos fichas eletrotécnicas em conformidade com a legislação aplicável, através de técnico habilitado.'

# === Patches corpo (paragraphes hors-FAQ) ===

# Patch 1 : 3 fichiers tecnologia-* (paragraph "A Norte Reparos é uma empresa inscrita na (Direção-Geral...")
TECNOLOGIA_OLD = re.compile(
    r'A Norte Reparos [eé] uma empresa inscrita na \(Dire[çc][ãa]o-Geral de Energia e Geologia\) para a emiss[ãa]o de fichas eletrot[eé]cnicas assinadas por t[eé]cnicos com experi[eê]ncia, conforme exig[eê]ncia legal para instala[çc][õo]es el[eé]tricas\. Para servi[çc]os de canaliza[çc][ãa]o \([^)]+\), a n[ãa]o [eé] exigida[^\.]*\.[^<]*',
    re.UNICODE
)

# Patch 2 : 1 fichier sobre.html (1 card "Emissão de fichas eletrotécnicas em conformidade...")
SOBRE_OLD_CARD = 'Emissão de fichas eletrotécnicas em conformidade com a legislação aplicável, através de técnico com experiência'
SOBRE_OLD_UL = 'Emissão de fichas eletrotécnicas em conformidade com a legislação aplicável, através de técnico com experiência'

# Patch 3 : 3 arquivos multi (avaliacoes-clientes, equipa, testemunhos)
# Padrão do corpo "Canalizador profissional com experiência, com fichas eletrotécnicas emitidas em conformidade com a..."
RESIDUAL_OLD_1 = 'Canalizador profissional com experiência, com fichas eletrotécnicas emitidas em conformidade com a e seguro de responsabilidade civil.'

# Patch 4 : testemunhos.html "...fichas eletrotécnicas em conformidade com a." (no final de um <p>)
RESIDUAL_OLD_2 = re.compile(r'fichas eletrot[eé]cnicas em conformidade com a\.')

# Patch 5 : equipa.html corpo "...emitimos fichas eletrotécnicas em conformidade com a legislação aplicável, através de técnico habilitado."
# (résiduel après FAQ patched)

# Patch 6 : equipa.html corpo no <p> após "...multímetro Fluke) e emitimos fichas eletrotécnicas em conformidade..."
RESIDUAL_OLD_3 = 'emitimos fichas eletrotécnicas em conformidade com a legislação aplicável, através de técnico habilitado.'


def get_target_files():
    """Liste tous les fichiers client/public/ qui contiennent le claim. Use -z pour éviter les escapes d'accents (cf. leçon #474)."""
    proc = subprocess.run(['git','-C',REPO,'grep','-lzE','ficha[s]? eletrot[eé]cnica',REMOTE,'--',f'{SUBDIR}*.html'],
                         capture_output=True)
    # Split on NUL
    raw = proc.stdout.split(b'\x00')
    files = sorted(set(f.decode('utf-8').replace(f'{REMOTE}:','') for f in raw if f and f != b''))
    return files


def patch_file(path, dry_run=True):
    """Applique les patches. Retourne (nb_patches, errors)."""
    full = os.path.join(REPO, path)
    with open(full, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    patches = []

    # === Patch FAQPage : remplacement des 2 réponses fake ===
    if OLD_ANSWER_EXACT in content:
        content = content.replace(OLD_ANSWER_EXACT, NEW_ANSWER)
        patches.append('FAQ_EXACT')
    if OLD_ANSWER_VARIANT in content:
        content = content.replace(OLD_ANSWER_VARIANT, NEW_ANSWER)
        patches.append('FAQ_VARIANT')

    # === Patch tecnologia-* (paragraphe corpo) ===
    if 'tecnologia-' in path:
        # Replace the whole paragraph: capture até próximo </p>
        # Pattern greedy até </p> ou final do bloco
        m = re.search(
            r'<p>A Norte Reparos [^\n]*?inscrita na \(Dire[çc][ãa]o-Geral de Energia e Geologia\)[^\n]*?</p>',
            content, re.UNICODE | re.DOTALL)
        if m:
            new_p = '<p>A Norte Reparos é uma empresa profissional de canalização em Trás-os-Montes. Emitimos fatura com NIF e orçamento por escrito antes de qualquer intervenção. Para serviços de eletricidade e certificação DGEG, consulte eletricista-norte-reparos.pt.</p>'
            content = content.replace(m.group(0), new_p)
            patches.append('TECNOLOGIA_P')

    # === Patch sobre.html — toutes les variantes FAQPage & corpo ===
    if path.endswith('sobre.html'):
        # Card "Fatura oficial + relatório técnico..."
        if SOBRE_OLD_CARD in content:
            content = content.replace(SOBRE_OLD_CARD,
                'Fatura com NIF e relatório técnico em todos os trabalhos')
            patches.append('SOBRE_CARD')
        if SOBRE_OLD_UL in content:
            content = content.replace(SOBRE_OLD_UL,
                'Fatura com NIF, relatório técnico e orçamento por escrito antes de qualquer intervenção')
            patches.append('SOBRE_UL')
        # FAQPage variante "técnico com experiência" (vs "técnico habilitado")
        sobre_faq_variant = 'Emitimos fichas eletrotécnicas em conformidade com a legislação aplicável, através de técnico com experiência.'
        if sobre_faq_variant in content:
            content = content.replace(sobre_faq_variant, NEW_ANSWER)
            patches.append('SOBRE_FAQ_VARIANT')

    # === Patch perguntas-frequentes.html — FAQ avec application spécifique ===
    if path.endswith('perguntas-frequentes.html'):
        # Question "Emitem fichas eletrotécnicas?" avec réponse différente
        # La réponse dit "venda de imóvel, aumento de potência ou instalação nova" — toutes choses élec
        pf_q = '"name":"Emitem fichas eletrotécnicas?"'
        if pf_q in content:
            # Trouver la réponse associée (text après "acceptedAnswer")
            m = re.search(r'\{\s*"@type"\s*:\s*"Question"\s*,\s*"name"\s*:\s*"Emitem fichas eletrot[eé]cnicas\?"\s*,\s*"acceptedAnswer"\s*:\s*\{\s*"@type"\s*:\s*"Answer"\s*,\s*"text"\s*:\s*"([^"]+)"', content)
            if m:
                # Garder la question, mais remplacer la réponse
                new_qa = '{"@type":"Question","name":"Emitem fichas eletrotécnicas?","acceptedAnswer":{"@type":"Answer","text":"' + NEW_ANSWER + '"}}'
                content = content.replace(m.group(0), new_qa)
                patches.append('PERGUNTAS_FAQ')
        # Aussi patcher le body si une autre occurrence existe
        if 'Emitimos fichas eletrotécnicas em conformidade com a legislação aplicável' in content:
            # Mais le FAQ ci-dessus doit déjà l'avoir gérée
            pass

    # === Patch equipa.html — meta descriptions + corpo ===
    if path.endswith('equipa.html'):
        # Meta og:description et twitter:description
        meta_old = 'profissionais com experiência em Trás-os-Montes, com equipamento profissional de diagnóstico e fichas eletrotécnicas em conformidade com a.'
        meta_new = 'profissionais com experiência em Trás-os-Montes, com equipamento profissional de diagnóstico (FLIR, Ridgid, Fluke). Fatura com NIF e orçamento por escrito antes de qualquer intervenção.'
        if meta_old in content:
            content = content.replace(meta_old, meta_new)
            patches.append('EQUIPA_META')
        # Corpo "<p>...e emitimos fichas eletrotécnicas..."
        corpo_old = 'e emitimos fichas eletrotécnicas em conformidade com a legislação aplicável, através de técnico habilitado.'
        corpo_new = 'e emitimos fatura com NIF e orçamento por escrito antes de qualquer intervenção. Para serviços de eletricidade e certificação DGEG, consulte eletricista-norte-reparos.pt.'
        if corpo_old in content:
            content = content.replace(corpo_old, corpo_new)
            patches.append('EQUIPA_CORPO_OLD')

    # === Patch residuals multi-occurrence ===
    if RESIDUAL_OLD_1 in content:
        content = content.replace(RESIDUAL_OLD_1,
            'Canalizador profissional com experiência, seguro de responsabilidade civil, e fatura com NIF em todos os trabalhos.')
        patches.append('RESIDUAL_1')

    if 'testemunhos.html' in path:
        # "fichas eletrotécnicas em conformidade com a." at end of <p>
        new_content, n = re.subn(
            r'(mediante confirmação por telefone[^<]*?)\s*fichas eletrot[eé]cnicas em conformidade com a\.',
            r'\1 Para serviços de eletricidade e certificação DGEG, consulte eletricista-norte-reparos.pt.',
            content)
        if n:
            content = new_content
            patches.append(f'TESTEMUNHOS_RESIDUAL({n})')

    if 'equipa.html' in path:
        # "<p>Operamos...emitimos fichas eletrotécnicas..."
        new_content, n = re.subn(
            r'(e )emitimos fichas eletrot[eé]cnicas em conformidade com a legisla[çc][ãa]o aplic[áa]vel, atrav[ée]s de t[ée]cnico habilitado\.',
            r'\1emitimos fatura com NIF e orçamento por escrito antes de qualquer intervenção. Para serviços de eletricidade e certificação DGEG, consulte eletricista-norte-reparos.pt.',
            content)
        if n:
            content = new_content
            patches.append(f'EQUIPA_CORPO({n})')

    if content == original:
        return 0, ['NO_PATCH_APPLIED']

    # Vérifier JSON-LD parse
    errors = []
    if not dry_run:
        # Parse all JSON-LD blocks
        for m in re.finditer(r'<script type="application/ld\+json">([^<]+)</script>', content):
            try:
                json.loads(m.group(1))
            except Exception as e:
                errors.append(f'JSON_LD_PARSE_FAIL: {e}')

    if not dry_run:
        with open(full, 'w', encoding='utf-8') as f:
            f.write(content)

    return len(patches), patches + errors


def split_into_vagues(files, n_vagues=7):
    """Split files into vagues of ~95 files each."""
    size = (len(files) + n_vagues - 1) // n_vagues
    return [files[i:i+size] for i in range(0, len(files), size)]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--vague', type=int, default=0, help='0 = all, otherwise 1-indexed')
    ap.add_argument('--total-vagues', type=int, default=7)
    ap.add_argument('--dry-run', action='store_true', default=True)
    ap.add_argument('--apply', dest='dry_run', action='store_false')
    ap.add_argument('--files', type=str, default=None, help='Specific file to test')
    args = ap.parse_args()

    if args.files:
        n, info = patch_file(args.files, dry_run=args.dry_run)
        print(f'{args.files}: {n} patches')
        for i in info:
            print(f'  - {i}')
        return

    files = get_target_files()
    print(f'Total files: {len(files)}')

    vagues = split_into_vagues(files, args.total_vagues)
    print(f'Split into {len(vagues)} vagues of ~{len(vagues[0])} files each')

    if args.vague == 0:
        target_vagues = list(range(1, len(vagues)+1))
    else:
        target_vagues = [args.vague]

    for v_num in target_vagues:
        if v_num > len(vagues):
            continue
        v_files = vagues[v_num-1]
        print(f'\n=== VAGUE {v_num}/{len(vagues)} ({len(v_files)} files) ===')
        total_patches = 0
        all_errors = []
        for f in v_files:
            n, info = patch_file(f, dry_run=args.dry_run)
            total_patches += n
            for e in info:
                if 'JSON_LD_PARSE_FAIL' in e:
                    all_errors.append(f'{f}: {e}')
        print(f'  Total patches applied: {total_patches}')
        if all_errors:
            print(f'  ERRORS:')
            for e in all_errors:
                print(f'    {e}')


if __name__ == '__main__':
    main()