#!/usr/bin/env python3
import os
import re

def fix_imports_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern pour trouver les imports avec guillemets inversés
    pattern = r"import.*from \\'@/components/RelatedCities\\';"
    
    # Remplacer par la version correcte
    new_content = re.sub(pattern, "import RelatedCities from '@/components/RelatedCities';", content)
    
    if content != new_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed: {filepath}")
        return True
    return False

def main():
    base_dir = "/Users/admin/.openclaw/workspace/sites/norte-reparos/main"
    pages_dir = os.path.join(base_dir, "client/src/pages/cidades")
    
    if not os.path.exists(pages_dir):
        print(f"Directory not found: {pages_dir}")
        return
    
    fixed_count = 0
    for filename in os.listdir(pages_dir):
        if filename.endswith('.tsx'):
            filepath = os.path.join(pages_dir, filename)
            if fix_imports_in_file(filepath):
                fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()