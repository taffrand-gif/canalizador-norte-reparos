#!/usr/bin/env python3
"""Version rapide N1: 'git archive' en flux par repo, parse canonical, classifie."""
import subprocess, re, html as htmlmod, urllib.parse, json, sys, os

repos = [
    ('CNR', '/Users/admin/work/Sites/canalizador-norte-reparos', 'github/main', 'client/public/', 'canalizador-norte-reparos.pt'),
    ('ENR', '/Users/admin/work/Sites/eletricista-norte-reparos', 'origin/main', 'client/public/', 'eletricista-norte-reparos.pt'),
    ('CU',  '/Users/admin/work/Sites/canalizador-urgente',         'origin/main', '',             'canalizador-urgente.pt'),
    ('EU',  '/Users/admin/work/Sites/eletricista-urgente',         'origin/main', '',             'eletricista-urgente.pt'),
]

attr_re = re.compile(r'''([:\w-]+)\s*=\s*([\"'])(.*?)\2''', re.I | re.S)
link_re = re.compile(r'<link\b[^>]*>', re.I | re.S)

def expected_url(path, prefix, domain):
    rel = path[len(prefix):] if prefix and path.startswith(prefix) else path
    rel = rel.lstrip('/')
    if rel == 'index.html': suffix = '/'
    elif rel.endswith('/index.html'): suffix = '/' + rel[:-10]
    elif rel.lower().endswith('.html'): suffix = '/' + rel[:-5]
    else: suffix = '/' + rel
    return 'https://' + domain + suffix

def classify(canonical, expected, domain):
    if not canonical: return 'MISSING'
    cp = urllib.parse.urlsplit(canonical.strip())
    ep = urllib.parse.urlsplit(expected)
    if cp.scheme.lower() not in ('http', 'https') or not cp.netloc:
        return 'INVALID'
    host = (cp.hostname or '').lower()
    ehost = (ep.hostname or '').lower()
    if host != ehost: return 'CROSS-DOMAIN'
    if (cp.path or '/') == (ep.path or '/') and (cp.query or '') == (ep.query or ''):
        return 'SELF'
    return 'CROSS-PAGE'

def canonicals(blob):
    text = blob.decode('utf-8', 'replace')
    vals = []
    for tag in link_re.findall(text):
        attrs = {m[1].lower(): htmlmod.unescape(m[3].strip()) for m in attr_re.finditer(tag)}
        rel = {x.lower() for x in re.split(r'\s+', attrs.get('rel', '')) if x}
        if 'canonical' in rel:
            vals.append(attrs.get('href', ''))
    return vals

def archive_paths(ref, cwd, prefix):
    args = ['ls-tree', '-r', '-z', '--name-only', ref]
    if prefix: args += ['--', prefix]
    p = subprocess.run(['git', *args], cwd=cwd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
    return [x.decode('utf-8') for x in p.stdout.split(b'\0') if x and x.lower().endswith(b'.html')]

def git_show(ref, path, cwd):
    p = subprocess.run(['git', 'show', f'{ref}:{path}'], cwd=cwd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
    return p.stdout

def main(repo_filter=None):
    data = {}
    for label, cwd, ref, prefix, domain in repos:
        if repo_filter and label != repo_filter: continue
        print(f'-> {label} {ref}', file=sys.stderr)
        paths = archive_paths(ref, cwd, prefix)
        rows = []
        for path in paths:
            try:
                vals = canonicals(git_show(ref, path, cwd))
            except Exception:
                vals = []
            expected = expected_url(path, prefix, domain)
            cls = classify(vals[0] if vals else '', expected, domain)
            rows.append((path, expected, vals[0] if vals else '', cls))
        counts = {c: sum(1 for r in rows if r[3] == c) for c in ('SELF', 'CROSS-PAGE', 'CROSS-DOMAIN', 'MISSING', 'INVALID')}
        data[label] = {
            'cwd': cwd, 'ref': ref, 'domain': domain,
            'files': len(paths), 'canonical_tags': sum(1 for r in rows if r[2]),
            'counts': counts,
            'rows': rows,
        }
    return data

if __name__ == '__main__':
    filter_arg = None
    if '--repo' in sys.argv:
        filter_arg = sys.argv[sys.argv.index('--repo') + 1]
    data = main(filter_arg)
    print(json.dumps({
        k: {
            'files': v['files'],
            'canonical_tags': v['canonical_tags'],
            'counts': v['counts'],
            'commit': subprocess.run(['git','rev-parse',v['ref']], cwd=v['cwd'], stdout=subprocess.PIPE).stdout.decode().strip(),
        }
        for k, v in data.items()
    }, ensure_ascii=False, indent=2))
