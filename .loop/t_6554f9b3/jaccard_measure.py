"""
Mesure Jaccard par paire sur le corpus village (canalizador-*.html).
Livrable X-DUP gate 🛑 : "Mesurer la similarité Jaccard avant toute écriture.
Condition de passage à la canonisation : Jaccard <= 0.15."

Aucun patch. Read-only. Sortie = rapport JSON + résumé console.
"""
from __future__ import annotations
import json
import os
import re
import sys
import html as html_lib
from pathlib import Path
from collections import Counter

ROOT = Path('/Users/admin/work/Sites/canalizador-norte-reparos')
SRC = ROOT / 'client' / 'public'
OUT = ROOT / '.loop' / 't_6554f9b3' / 'jaccard.json'

# Correspond au prédicat SEO_PLAN : corpus villages/aldeias (canalizador-*.html pages villes)
HUB_BLACKLIST = {'canalizador-aldeias.html', 'canalizador-aldeia-vicosa.html'}

TAG_RE = re.compile(r'<[^>]+>')
SCRIPT_RE = re.compile(r'<script[^>]*>.*?</script>', re.S | re.I)
STYLE_RE = re.compile(r'<style[^>]*>.*?</style>', re.S | re.I)
WORD_RE = re.compile(r'[a-záàâãéèêíïóôõúûçõã]+|[0-9]+')


def tokenize(html_text: str) -> frozenset[str]:
    body = SCRIPT_RE.sub(' ', html_text)
    body = STYLE_RE.sub(' ', body)
    body = TAG_RE.sub(' ', body)
    body = html_lib.unescape(body).lower()
    body = re.sub(r'[^\w\sáàâãéèêíïóôõúûç]+', ' ', body)
    toks = WORD_RE.findall(body)
    # retire tokens ultra-courts sans signal
    return frozenset(t for t in toks if len(t) >= 3)


def jaccard(a: frozenset, b: frozenset) -> float:
    if not a and not b:
        return 0.0
    inter = len(a & b)
    union = len(a | b)
    return inter / union if union else 0.0


def main():
    files = sorted([
        f for f in os.listdir(SRC)
        if f.startswith('canalizador-') and f.endswith('.html')
        and f not in HUB_BLACKLIST
    ])
    print(f'corpus aldeia : {len(files)} fichiers', file=sys.stderr)

    tokens = {}
    sizes = []
    for f in files:
        text = (SRC / f).read_text(encoding='utf-8', errors='ignore')
        toks = tokenize(text)
        tokens[f] = toks
        sizes.append(len(toks))

    if not sizes:
        print('corpus vide', file=sys.stderr)
        sys.exit(1)

    size_min, size_max = min(sizes), max(sizes)
    size_med = sorted(sizes)[len(sizes) // 2]

    # --- Sanity check : auto-Jaccard = 1.0 (vérif que le script fonctionne)
    sj = jaccard(tokens[files[0]], tokens[files[0]])
    assert sj == 1.0, f'self-jaccard != 1.0 → bug ({sj})'

    # --- Échantillonnage stratifié : 200 paires pour mesure stats (1810 × 1809 /2 ≈ 1.6M)
    import random
    random.seed(42)  # reproductibilité
    n = len(files)
    sample_n = min(2000, n * (n - 1) // 2)
    pairs = []
    seen_pairs = set()
    while len(pairs) < sample_n:
        i, j = random.sample(range(n), 2)
        if i > j:
            i, j = j, i
        key = (i, j)
        if key in seen_pairs:
            continue
        seen_pairs.add(key)
        pairs.append(key)

    print(f'échantillonnage : {len(pairs)} paires', file=sys.stderr)

    jaccards = []
    high_pairs = []  # paires au-dessus 0.15
    threshold = 0.15
    bucket = {'<0.15': 0, '0.15-0.30': 0, '0.30-0.50': 0, '0.50-0.70': 0, '>=0.70': 0}
    for i, j in pairs:
        s = jaccard(tokens[files[i]], tokens[files[j]])
        jaccards.append(s)
        if s < threshold:
            bucket['<0.15'] += 1
        elif s < 0.30:
            bucket['0.15-0.30'] += 1
        elif s < 0.50:
            bucket['0.30-0.50'] += 1
        elif s < 0.70:
            bucket['0.50-0.70'] += 1
        else:
            bucket['>=0.70'] += 1
        if s >= threshold:
            high_pairs.append((files[i], files[j], round(s, 3)))

    jaccards.sort()
    p50 = jaccards[len(jaccards) // 2]
    p90 = jaccards[int(len(jaccards) * 0.9)]
    p99 = jaccards[int(len(jaccards) * 0.99)]
    mean = sum(jaccards) / len(jaccards)

    # --- Estimation haute similarité pour N paires total
    n_pairs_total = n * (n - 1) // 2
    # p99 échantillon → si 95% des paires du sample sont au-dessus seuil, alors paires totales aussi
    above_frac = sum(1 for s in jaccards if s >= threshold) / len(jaccards)
    est_pairs_high = int(above_frac * n_pairs_total)

    report = {
        'corpus_files': n,
        'pairs_sampled': len(pairs),
        'pairs_total': n_pairs_total,
        'self_jaccard_check': sj,
        'jaccard_stats': {
            'min': round(min(jaccards), 4),
            'p50': round(p50, 4),
            'p90': round(p90, 4),
            'p99': round(p99, 4),
            'max': round(max(jaccards), 4),
            'mean': round(mean, 4),
        },
        'tokens_stats': {
            'min': size_min,
            'median': size_med,
            'max': size_max,
        },
        'gate_015': {
            'threshold': threshold,
            'frac_above': round(above_frac, 4),
            'est_pairs_total_above': est_pairs_high,
            'gate_verdict': (
                'FAIL — différentiation requise AVANT canonisation. '
                'Réouvrir 1810 fichiers et injecter du signal distinctif (VILLE unique '
                'par page, données locales vérifiables, NAP par zone).'
                if above_frac > 0.5
                else 'PASS — canonisation envisageable sous réserve de re-run après patch.'
            ),
        },
        'bucket_distribution': bucket,
        'top_20_high_pairs': high_pairs[:20],
    }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')

    print('\n=== RÉSUMÉ ===')
    print(f'corpus           : {n} pages')
    print(f'tokens min/med/max: {size_min} / {size_med} / {size_max}')
    print(f'jaccard min/p50/p90/p99/max: {min(jaccards):.3f} / {p50:.3f} / {p90:.3f} / {p99:.3f} / {max(jaccards):.3f}')
    print(f'jaccard moyen    : {mean:.3f}')
    print(f'frac >= 0.15     : {above_frac:.4f}  → ~{est_pairs_high:,} paires estimées sur {n_pairs_total:,}')
    print('distribution buckets :', bucket)
    print(f'rapport          : {OUT}')


if __name__ == '__main__':
    main()
