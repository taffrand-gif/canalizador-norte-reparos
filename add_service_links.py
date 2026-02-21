#!/usr/bin/env python3
"""Add internal links to service pages in city page footers - Norte-Reparos"""
import os, glob

SITE_DIR = "/Users/admin/projects/norte-reparos/client/public"

SERVICE_LINKS_BLOCK = """<h3 style="color:#333">💧 Serviços Especializados</h3>
<p style="font-size:15px;line-height:2">
<a href="/desentupimentos-profissionais-tras-os-montes" style="color:#2193b0;text-decoration:none">Desentupimentos</a> • <a href="/detecao-fugas-agua-camera" style="color:#2193b0;text-decoration:none">Deteção Fugas</a> • <a href="/reparacao-esquentadores-caldeiras" style="color:#2193b0;text-decoration:none">Esquentadores</a> • <a href="/instalacao-casa-banho-completa" style="color:#2193b0;text-decoration:none">Casa de Banho</a> • <a href="/canalizacao-nova-construcao" style="color:#2193b0;text-decoration:none">Canalização Nova</a> • <a href="/manutencao-preventiva-canalizacao" style="color:#2193b0;text-decoration:none">Manutenção Preventiva</a>
</p>"""

count = 0
for f in sorted(glob.glob(os.path.join(SITE_DIR, "canalizador-*.html"))):
    fname = os.path.basename(f)
    if "urgente" in fname:
        continue
    
    with open(f, "r", encoding="utf-8") as fh:
        content = fh.read()
    
    if "Serviços Especializados" in content:
        print(f"  = {fname} (already has links)")
        continue
    
    if '<h3 style="color:#333">📝 Artigos Úteis</h3>' in content:
        content = content.replace(
            '<h3 style="color:#333">📝 Artigos Úteis</h3>',
            SERVICE_LINKS_BLOCK + '\n<h3 style="color:#333">📝 Artigos Úteis</h3>'
        )
    elif '<p style="text-align:center;margin-top:15px"><a href="/" style="color:#2193b0' in content:
        content = content.replace(
            '<p style="text-align:center;margin-top:15px"><a href="/" style="color:#2193b0',
            SERVICE_LINKS_BLOCK + '\n<p style="text-align:center;margin-top:15px"><a href="/" style="color:#2193b0'
        )
    else:
        print(f"  ⚠️ {fname} - no insertion point found")
        continue
    
    with open(f, "w", encoding="utf-8") as fh:
        fh.write(content)
    count += 1
    print(f"  ✅ {fname}")

print(f"\n🔗 Added service links to {count} city pages")
