#!/usr/bin/env python3
"""Gate conformité — pilote CNR anti-doorway 10 pages busca-de-fuga.
Modèle adapté de tools/verify-money-pages-pilot.py (ENR, commit 089445ab1a).
"""
from pathlib import Path
import json, re, subprocess, urllib.request, urllib.error

FILES = [
    'client/public/busca-de-fuga-alfandega-da-fe.html',
    'client/public/busca-de-fuga-alijo.html',
    'client/public/busca-de-fuga-braganca.html',
    'client/public/busca-de-fuga-chaves.html',
    'client/public/busca-de-fuga-lamego.html',
    'client/public/busca-de-fuga-macedo-de-cavaleiros.html',
    'client/public/busca-de-fuga-miranda-do-douro.html',
    'client/public/busca-de-fuga-mirandela.html',
    'client/public/busca-de-fuga-mogadouro.html',
    'client/public/busca-de-fuga-peso-da-regua.html',
]

# Source-of-truth: zonas-data.json + grille officielle
# Z1=15€ · Z2=25€ · Z3=35€ · Z4=45€ · Z5=55€ · Z6=65€
expected = {
    'Alfândega da Fé': (2, '25€', ['alfandega-da-fe']),
    'Alijó':          (4, '45€', ['alijo']),
    'Bragança':       (2, '25€', ['braganca']),
    'Chaves':         (4, '45€', ['chaves']),
    'Lamego':         (6, '65€', ['lamego']),
    'Macedo de Cavaleiros': (1, '15€', ['macedo-de-cavaleiros']),
    'Miranda do Douro': (5, '55€', ['miranda-do-douro']),
    'Mirandela':      (2, '25€', ['mirandela']),
    'Mogadouro':      (3, '35€', ['mogadouro']),
    'Peso da Régua':  (5, '55€', ['peso-da-regua']),
}

source = json.loads(Path('/Users/admin/work/Sites/norte-os-marketing/prototypes/zonas-data.json').read_text())

print('PRICE TRACE')
for city, (zone, price, slugs) in expected.items():
    actual = source.get(city)
    assert actual == zone, f'{city}: source={actual} expected={zone}'
    matched = [p for p in FILES if any(slug in Path(p).stem for slug in slugs)]
    for p in matched:
        text = Path(p).read_text(encoding='utf-8')
        assert price in text, f'{p}: prix {price} manquant'
        assert '65€/h' in text, f'{p}: 65€/h manquant (CNR barème)'
        assert 'Orçamento por escrito antes de qualquer intervenção' in text, f'{p}: phrase budget manquant'
    print(f'{city:25} Z{zone} {price:4}  source=ok   files={len(matched)}')

patterns = {
    'pronoun/solo':  r'(?i)\b(mesma pessoa|sozinh[oa]|contacte-me|falar comigo|eu faço|eu sou)\b',
    'precise address': r'(?i)streetAddress',
    'fake review':   r'(?i)aggregateRating|reviewCount|\b[45][,.][0-9]\s*/\s*5\b|⭐⭐⭐⭐⭐',
    'urgency false': r'(?i)\b(resposta imediata|resposta imediata|24 horas|24h)\b',
}

print('\nDOCTRINE (R11/R12 — gréppé sur les 10 fichiers)')
fail = False
for label, pat in patterns.items():
    hits = []
    for p in FILES:
        text = Path(p).read_text(encoding='utf-8')
        for m in re.finditer(pat, text):
            hits.append((Path(p).stem, m.group(0)))
    print(f'  {label:20} : {len(hits)} hits')
    if hits:
        print('    ', hits[:10])
        fail = True
if fail:
    raise SystemExit('FAIL doctrine')


hrefs = set()
for p in FILES:
    text = Path(p).read_text(encoding='utf-8')
    for href in re.findall(r'href=["\']([^"\']+)', text, re.I):
        if href.startswith('/') and not href.startswith('//') and href not in {'/', '/styles.css'}:
            hrefs.add(href)

print(f'\nHREF DIRECT STATUS ({len(hrefs)} hrefs distincts)')
bad = []
for href in sorted(hrefs):
    url = 'https://canalizador-norte-reparos.pt' + href
    # Verify against prod (production)
    try:
        req = urllib.request.Request(url, method='HEAD', headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=20) as r:
            code = r.status
            final = r.geturl()
    except urllib.error.HTTPError as e:
        code = e.code
        final = e.geturl()
    except Exception as e:
        code = -1
        final = str(e)
    ok = (code == 200) and (final.rstrip('/') == url.rstrip('/'))
    marker = 'OK' if ok else 'KO'
    print(f'  [{marker}] {code} {href}  final={final[:80]}')
    if not ok:
        bad.append((href, code, final))

# Allow '/' to be 308 (extensionless) and any hrefs known external
if bad:
    print(f'\n{len(bad)} hrefs KO — listing first:')
    for b in bad[:20]:
        print(' ', b)
    raise SystemExit(f'FAIL {len(bad)} hrefs non-200 or redirected')

print(f'\nPASS hrefs={len(hrefs)} all 200 direct, doctrine 0, prices OK')