#!/usr/bin/env python3
import re
import os

files_to_fix = [
    'client/src/components/ChatWidget.tsx',
    'client/src/components/NewsletterPopup.tsx',
    'client/src/components/PriceCalculator.tsx',
    'client/src/components/QuoteForm.tsx',
    'client/src/components/QuoteFormEnhanced.tsx',
    'client/src/components/TestimonialsSection.tsx'
]

def fix_file(filepath):
    print(f"\n🔧 Fixing {filepath}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Vérifier si ACTIVE_CONFIG est déjà importé
    if 'ACTIVE_CONFIG' not in content:
        # Ajouter l'import après les autres imports
        import_pattern = r"(import.*from ['\"]react['\"];?\n)"
        if re.search(import_pattern, content):
            content = re.sub(
                import_pattern,
                r"\1import { ACTIVE_CONFIG } from '@/shared/serviceConfig';\n",
                content,
                count=1
            )
    
    # Ajouter const gradient si pas présent
    if 'const { gradient }' not in content and 'const gradient' not in content:
        # Chercher le début du composant
        component_pattern = r"(export (?:default )?(?:const|function) \w+.*?\{)"
        if re.search(component_pattern, content):
            content = re.sub(
                component_pattern,
                r"\1\n  const { gradient } = ACTIVE_CONFIG;",
                content,
                count=1
            )
    
    # Remplacer bg-red-600 par style dynamique
    content = re.sub(
        r'className="([^"]*?)bg-red-600([^"]*?)"',
        r'className="\1\2" style={{backgroundColor: gradient.from}}',
        content
    )
    
    # Remplacer bg-red-700
    content = re.sub(
        r'className="([^"]*?)bg-red-700([^"]*?)"',
        r'className="\1\2" style={{backgroundColor: gradient.to}}',
        content
    )
    
    # Remplacer text-red-600
    content = re.sub(
        r'className="([^"]*?)text-red-600([^"]*?)"',
        r'className="\1\2" style={{color: gradient.from}}',
        content
    )
    
    # Remplacer bg-blue-600 (hardcodé)
    content = re.sub(
        r'className="([^"]*?)bg-blue-600([^"]*?)"',
        r'className="\1\2" style={{backgroundColor: gradient.from}}',
        content
    )
    
    # Remplacer bg-blue-700
    content = re.sub(
        r'className="([^"]*?)bg-blue-700([^"]*?)"',
        r'className="\1\2" style={{backgroundColor: gradient.to}}',
        content
    )
    
    # Nettoyer les doubles espaces dans className
    content = re.sub(r'className="(\s+)"', 'className=""', content)
    content = re.sub(r'className="\s+([^"]+)"', r'className="\1"', content)
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Fixed {filepath}")
        return True
    else:
        print(f"⏭️  No changes needed for {filepath}")
        return False

print("🎨 CORRECTION AUTOMATIQUE DES COULEURS")
print("=" * 50)

fixed_count = 0
for filepath in files_to_fix:
    if os.path.exists(filepath):
        if fix_file(filepath):
            fixed_count += 1
    else:
        print(f"❌ File not found: {filepath}")

print("\n" + "=" * 50)
print(f"✅ Correction terminée: {fixed_count}/{len(files_to_fix)} fichiers modifiés")
