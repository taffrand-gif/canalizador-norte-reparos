#!/usr/bin/env python3
import os
import re
import json
import glob

def enrich_schema_org():
    """Enrichit le JSON-LD Schema.org avec des propriétés supplémentaires"""
    
    # Propriétés à ajouter
    additional_properties = '''"priceRange": "€€",
"openingHoursSpecification": {
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
  "opens": "00:00",
  "closes": "23:59"
},
"paymentAccepted": "Dinheiro, Multibanco, MB Way, Transferência Bancária",
"currenciesAccepted": "EUR"'''
    
    # Trouver toutes les pages ville (canalizador-*.html)
    city_pages = glob.glob("canalizador-*.html")
    
    # Exclure les pages "urgente" et autres non-standard
    city_pages = [p for p in city_pages if "urgente" not in p and "vs-" not in p]
    
    print(f"Trouvé {len(city_pages)} pages ville à enrichir")
    
    for file_path in city_pages:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Chercher le script JSON-LD
            # Pattern pour trouver le script Schema.org
            schema_pattern = r'(<script type="application/ld\+json">\s*\{.*?"@type":\s*"Plumber".*?\}\s*</script>)'
            
            match = re.search(schema_pattern, content, re.DOTALL | re.IGNORECASE)
            
            if match:
                schema_block = match.group(1)
                
                # Extraire le JSON
                json_start = schema_block.find('{')
                json_end = schema_block.rfind('}') + 1
                json_str = schema_block[json_start:json_end]
                
                # Parser le JSON
                try:
                    schema_data = json.loads(json_str)
                    
                    # Vérifier si c'est bien un Plumber
                    if schema_data.get("@type") == "Plumber":
                        # Ajouter les propriétés manquantes
                        schema_data["priceRange"] = "€€"
                        schema_data["paymentAccepted"] = "Dinheiro, Multibanco, MB Way, Transferência Bancária"
                        schema_data["currenciesAccepted"] = "EUR"
                        
                        # Ajouter openingHoursSpecification
                        schema_data["openingHoursSpecification"] = {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                            "opens": "00:00",
                            "closes": "23:59"
                        }
                        
                        # Convertir en JSON avec indentation
                        new_json_str = json.dumps(schema_data, indent=2, ensure_ascii=False)
                        
                        # Recréer le bloc script
                        new_schema_block = f'<script type="application/ld+json">\n{new_json_str}\n</script>'
                        
                        # Remplacer dans le contenu
                        new_content = content.replace(schema_block, new_schema_block)
                        
                        # Écrire le fichier
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        
                        print(f"✓ Schema enrichi: {file_path}")
                        
                        # Vérifier les propriétés ajoutées
                        with open(file_path, 'r', encoding='utf-8') as f:
                            updated_content = f.read()
                            if '"priceRange": "€€"' in updated_content:
                                print(f"  → priceRange ajouté")
                            if '"openingHoursSpecification"' in updated_content:
                                print(f"  → openingHoursSpecification ajouté")
                            if '"paymentAccepted"' in updated_content:
                                print(f"  → paymentAccepted ajouté")
                    else:
                        print(f"✗ Pas un Plumber: {file_path}")
                        
                except json.JSONDecodeError as e:
                    print(f"✗ JSON invalide dans {file_path}: {e}")
            else:
                print(f"✗ Pas de Schema.org trouvé: {file_path}")
                
        except Exception as e:
            print(f"✗ Erreur avec {file_path}: {e}")

if __name__ == "__main__":
    os.chdir("/Users/admin/projects/norte-reparos/client/public")
    enrich_schema_org()