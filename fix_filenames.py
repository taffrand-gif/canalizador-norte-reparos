#!/usr/bin/env python3
"""
Script pour corriger les noms de fichiers avec accents
"""

import os
import shutil

# Fichiers à renommer (ancien -> nouveau)
FILES_TO_RENAME = {
    "fugas-de-água-chaves.html": "fugas-agua-chaves.html",
    "fugas-de-água-lamego.html": "fugas-agua-lamego.html",
    "fugas-de-água-macedo.html": "fugas-agua-macedo.html",
    "canalização-nova-chaves.html": "canalizacao-nova-chaves.html",
    "canalização-nova-lamego.html": "canalizacao-nova-lamego.html",
    "canalização-nova-macedo.html": "canalizacao-nova-macedo.html",
    "instalação-casa-de-banho-braganca.html": "instalacao-casa-banho-braganca.html",
    "instalação-casa-de-banho-vila-real.html": "instalacao-casa-banho-vila-real.html"
}

def main():
    """Corriger les noms de fichiers"""
    public_dir = os.path.expanduser("~/projects/norte-reparos/dist/public")
    
    print("🔧 Correction des noms de fichiers...")
    
    for old_name, new_name in FILES_TO_RENAME.items():
        old_path = os.path.join(public_dir, old_name)
        new_path = os.path.join(public_dir, new_name)
        
        if os.path.exists(old_path):
            shutil.move(old_path, new_path)
            print(f"✅ Renommé: {old_name} -> {new_name}")
        else:
            print(f"⚠️  Fichier non trouvé: {old_name}")
    
    print("\n📋 Vérification des fichiers créés:")
    print("=" * 50)
    
    # Liste des fichiers demandés
    expected_files = [
        "esquentadores-chaves.html",
        "esquentadores-lamego.html",
        "esquentadores-macedo.html",
        "esquentadores-mogadouro.html",
        "fugas-agua-chaves.html",
        "fugas-agua-lamego.html",
        "fugas-agua-macedo.html",
        "canalizacao-nova-chaves.html",
        "canalizacao-nova-lamego.html",
        "canalizacao-nova-macedo.html",
        "desentupimentos-chaves.html",
        "desentupimentos-lamego.html",
        "desentupimentos-macedo.html",
        "instalacao-casa-banho-braganca.html",
        "instalacao-casa-banho-vila-real.html"
    ]
    
    for filename in expected_files:
        filepath = os.path.join(public_dir, filename)
        if os.path.exists(filepath):
            size = os.path.getsize(filepath)
            print(f"✅ {filename} ({size} bytes)")
        else:
            print(f"❌ {filename} (MANQUANT)")

if __name__ == "__main__":
    main()