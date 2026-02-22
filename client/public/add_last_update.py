#!/usr/bin/env python3
import os
import re
import glob
from datetime import datetime

def add_last_update_to_html_files():
    """Ajoute 'Última atualização' après le premier <h1> dans les sections content"""
    
    # Date actuelle au format portugais
    date_str = "22 de fevereiro de 2026"
    update_html = f'<p style="font-size:12px;color:#999;margin:5px 0 15px">📅 Última atualização: {date_str}</p>'
    
    # Trouver tous les fichiers HTML
    html_files = []
    html_files.extend(glob.glob("*.html"))
    html_files.extend(glob.glob("blog/*.html"))
    
    # Filtrer les doublons
    html_files = list(set(html_files))
    
    print(f"Trouvé {len(html_files)} fichiers HTML")
    
    for file_path in html_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Vérifier si c'est un article blog avec déjà une date 📅
            if 'blog/' in file_path:
                # Chercher une ligne existante avec 📅
                date_pattern = r'(<p[^>]*>📅[^<]*</p>)'
                match = re.search(date_pattern, content)
                if match:
                    # Remplacer la date existante
                    new_date_line = f'<p style="font-size:12px;color:#999;margin:5px 0 15px">📅 Última atualização: {date_str}</p>'
                    content = re.sub(date_pattern, new_date_line, content, count=1)
                    print(f"✓ Mise à jour date blog: {file_path}")
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    continue
            
            # Pour les fichiers normaux, chercher le premier <h1> dans une section content
            # Pattern pour trouver <h1> dans <section class="content"> ou <article class="content">
            pattern = r'(<(section|article)[^>]*class="[^"]*content[^"]*"[^>]*>.*?<h1[^>]*>.*?</h1>)'
            
            match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
            
            if match:
                # Insérer après le </h1>
                h1_end_pattern = r'(<(section|article)[^>]*class="[^"]*content[^"]*"[^>]*>.*?<h1[^>]*>.*?</h1>)'
                
                def replace_h1(match_obj):
                    return match_obj.group(0) + '\n' + update_html
                
                content = re.sub(h1_end_pattern, replace_h1, content, count=1, flags=re.DOTALL | re.IGNORECASE)
                
                # Écrire le fichier modifié
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                print(f"✓ Ajouté: {file_path}")
            else:
                # Essayer une approche plus simple: chercher juste le premier <h1> (pas dans header)
                h1_pattern = r'(<h1[^>]*>.*?</h1>)'
                header_pattern = r'<header[^>]*>.*?</header>'
                
                # Exclure les h1 dans header
                header_content = re.search(header_pattern, content, re.DOTALL | re.IGNORECASE)
                if header_content:
                    # Chercher après le header
                    after_header = content[header_content.end():]
                    h1_match = re.search(h1_pattern, after_header, re.DOTALL | re.IGNORECASE)
                    if h1_match:
                        # Remplacer le premier h1 après header
                        start_pos = header_content.end() + h1_match.start()
                        end_pos = header_content.end() + h1_match.end()
                        
                        new_content = content[:end_pos] + '\n' + update_html + content[end_pos:]
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"✓ Ajouté (après header): {file_path}")
                    else:
                        print(f"✗ Pas de h1 trouvé (après header): {file_path}")
                else:
                    print(f"✗ Pas de section content trouvée: {file_path}")
                    
        except Exception as e:
            print(f"✗ Erreur avec {file_path}: {e}")

if __name__ == "__main__":
    # Changer de répertoire
    os.chdir("/Users/admin/projects/norte-reparos/client/public")
    add_last_update_to_html_files()