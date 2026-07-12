#!/usr/bin/env python3
"""Gate unicité — pilote CNR anti-doorway 10 pages busca-de-fuga.
Modèle adapté de tools/audit-money-pages-pilot.py (ENR, commit 089445ab1a).
"""
from pathlib import Path
import html, json, re, unicodedata
from itertools import combinations

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

STOP = set('a ao aos as o os e em de da das do dos um uma uns umas para por com sem no na nos nas que se seu sua seus suas como mais ou é ser antes depois entre sobre esta este isto essa esse muito também quando onde qualquer cada não sim já também só também pelo pela pelos pelas ser tem têm sou somos seja sejam será serão foi foram era eram tem têm é são foi seja foram nosso nossa nossos nossas meu minha meus minhas'.split())


def visible_words(path):
    text = Path(path).read_text(encoding='utf-8')
    text = re.sub(r'<script\b.*?</script>|<style\b.*?</style>', ' ', text, flags=re.I | re.S)
    text = re.sub(r'<nav\b.*?</nav>|<footer\b.*?</footer>', ' ', text, flags=re.I | re.S)
    text = re.sub(r'<section class="related".*?</section>', ' ', text, flags=re.I | re.S)
    text = html.unescape(re.sub(r'<[^>]+>', ' ', text))
    words = []
    for w in re.findall(r"[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'-]+", text.lower()):
        w = ''.join(c for c in unicodedata.normalize('NFD', w) if unicodedata.category(c) != 'Mn')
        if len(w) >= 4 and w not in STOP:
            words.append(w)
    return set(words)


def min_shared_vocab(a_words, b_words):
    """Jaccard min-based: 2*|A∩B| / (|A|+|B|). Distinguishes pages with different total sizes."""
    inter = len(a_words & b_words)
    return 2 * inter / (len(a_words) + len(b_words)) if (len(a_words) + len(b_words)) else 0


def validate(path):
    text = Path(path).read_text(encoding='utf-8')
    h1 = re.findall(r'<h1\b[^>]*>(.*?)</h1>', text, re.I | re.S)
    jsonlds = re.findall(r'<script\b[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', text, re.I | re.S)
    for raw in jsonlds:
        json.loads(raw)
    return len(h1), len(jsonlds)


sets = {p: visible_words(p) for p in FILES}

print('PAIRWISE Jaccard unique visible words (stopwords removed, len≥4)')
print('Format: file_a | file_b | jaccard_pct% | min_based% | inter/union')
mx = (0, None)
mx_min = (0, None)
for a, b in combinations(FILES, 2):
    inter = len(sets[a] & sets[b])
    union = len(sets[a] | sets[b])
    jaccard = 100 * inter / union if union else 0
    min_based = 100 * min_shared_vocab(sets[a], sets[b])
    print(f'{Path(a).stem[:32]:32} | {Path(b).stem[:32]:32} | {jaccard:5.1f}% | {min_based:5.1f}% | {inter}/{union}')
    if jaccard > mx[0]:
        mx = (jaccard, (a, b))
    if min_based > mx_min[0]:
        mx_min = (min_based, (a, b))

print(f'\nMAX jaccard = {mx[0]:.1f}%  PAIR = {mx[1]}')
print(f'MAX min-based = {mx_min[0]:.1f}%  PAIR = {mx_min[1]}')

print('\nSTRUCTURE')
for p in FILES:
    h, j = validate(p)
    print(f'{p}: h1={h} jsonld={j} words={len(sets[p])}')

if mx[0] >= 50:
    raise SystemExit(f'FAIL uniqueness jaccard {mx[0]:.1f}% >= 50%')
if mx_min[0] >= 50:
    raise SystemExit(f'FAIL uniqueness min-based {mx_min[0]:.1f}% >= 50%')
if any(validate(p)[0] != 1 for p in FILES):
    raise SystemExit('FAIL h1 count')
print('\nPASS — unicité < 50% jaccard ET min-based, h1=1 sur 10 pages')