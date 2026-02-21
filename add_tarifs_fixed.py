#!/usr/bin/env python3
import os
import re

# Mapping des villes vers les zones
zones = {
    "Zona 1": {
        "price": "10€",
        "cities": ["Macedo de Cavaleiros"]
    },
    "Zona 2": {
        "price": "15€",
        "cities": ["Vila Flor", "Alfândega da Fé", "Mirandela", "Carrazeda de Ansiães"]
    },
    "Zona 3": {
        "price": "25€",
        "cities": ["Bragança", "Vinhais", "Vimioso", "Torre de Moncorvo", "Mogadouro", "Freixo de Espada à Cinta"]
    },
    "Zona 4": {
        "price": "30€",
        "cities": ["Miranda do Douro", "Vila Nova de Foz Côa", "São João da Pesqueira", "Murça", "Valpaços"]
    },
    "Zona 5": {
        "price": "35€",
        "cities": ["Vila Real", "Alijó", "Sabrosa", "Tabuaço", "Armamar", "Peso da Régua", "Lamego", "Santa Marta de Penaguião", "Mesão Frio"]
    },
    "Zona 6": {
        "price": "40€",
        "cities": ["Chaves", "Vila Pouca de Aguiar", "Boticas", "Montalegre", "Ribeira de Pena", "Mondim de Basto", "Moimenta da Beira", "Sernancelhe", "Penedono"]
    }
}

# Mapping des noms de fichiers vers les noms de villes
file_to_city = {
    "canalizador-macedo-de-cavaleiros": "Macedo de Cavaleiros",
    "canalizador-macedo-cavaleiros": "Macedo de Cavaleiros",
    "canalizador-mirandela": "Mirandela",
    "canalizador-braganca": "Bragança",
    "canalizador-chaves": "Chaves",
    "canalizador-vila-real": "Vila Real",
    "canalizador-vinhais": "Vinhais",
    "canalizador-mogadouro": "Mogadouro",
    "canalizador-torre-moncorvo": "Torre de Moncorvo",
    "canalizador-miranda-douro": "Miranda do Douro",
    "canalizador-freixo-espada-cinta": "Freixo de Espada à Cinta",
    "canalizador-valpacos": "Valpaços",
    "canalizador-vila-flor": "Vila Flor",
    "canalizador-alfandega-da-fe": "Alfândega da Fé",
    "canalizador-alijo": "Alijó",
    "canalizador-armamar": "Armamar",
    "canalizador-boticas": "Boticas",
    "canalizador-carrazeda-de-ansiaes": "Carrazeda de Ansiães",
    "canalizador-lamego": "Lamego",
    "canalizador-mesao-frio": "Mesão Frio",
    "canalizador-moimenta-da-beira": "Moimenta da Beira",
    "canalizador-mondim-de-basto": "Mondim de Basto",
    "canalizador-montalegre": "Montalegre",
    "canalizador-murca": "Murça",
    "canalizador-penedono": "Penedono",
    "canalizador-peso-da-regua": "Peso da Régua",
    "canalizador-ribeira-de-pena": "Ribeira de Pena",
    "canalizador-sabrosa": "Sabrosa",
    "canalizador-santa-marta-de-penaguiao": "Santa Marta de Penaguião",
    "canalizador-sao-joao-da-pesqueira": "São João da Pesqueira",
    "canalizador-sernancelhe": "Sernancelhe",
    "canalizador-tabuaco": "Tabuaço",
    "canalizador-vila-nova-foz-coa": "Vila Nova de Foz Côa",
    "canalizador-vila-pouca-de-aguiar": "Vila Pouca de Aguiar",
    "canalizador-vimioso": "Vimioso"
}

def get_zone_for_city(city_name):
    """Trouve la zone pour une ville donnée"""
    for zone_name, zone_data in zones.items():
        if city_name in zone_data["cities"]:
            return zone_name, zone_data["price"]
    return None, None

def generate_tarif_section(city_name, zone_name, price):
    """Génère le HTML pour la section tarifaire"""
    return f'''<div style="background:#f0f8ff;padding:25px;border-radius:10px;border-left:4px solid #2193b0;margin:30px 0">
<h3 style="color:#2193b0;font-size:24px;margin-top:0">💰 Taxa de Deslocação</h3>
<p style="font-size:18px;line-height:1.6">
<strong>Taxa de deslocação para {city_name}: {price} ({zone_name})</strong><br>
Esta taxa cobre o deslocamento desde a nossa base em Macedo de Cavaleiros até à sua localização.
</p>

<div style="background:white;padding:20px;border-radius:8px;margin-top:20px">
<h4 style="color:#333;font-size:18px;margin-top:0">📋 Sistema de Zonas de Deslocação</h4>
<table style="width:100%;border-collapse:collapse;font-size:14px;margin-top:15px">
<tr style="background:#2193b0;color:white">
<th style="padding:12px;text-align:left;border:1px solid #ddd">Zona</th>
<th style="padding:12px;text-align:left;border:1px solid #ddd">Cidades</th>
<th style="padding:12px;text-align:left;border:1px solid #ddd">Taxa</th>
</tr>
<tr style="background:#f9f9f9">
<td style="padding:10px;border:1px solid #ddd"><strong>Zona 1</strong></td>
<td style="padding:10px;border:1px solid #ddd">Macedo de Cavaleiros</td>
<td style="padding:10px;border:1px solid #ddd">10€</td>
</tr>
<tr>
<td style="padding:10px;border:1px solid #ddd"><strong>Zona 2</strong></td>
<td style="padding:10px;border:1px solid #ddd">Vila Flor, Alfândega da Fé, Mirandela, Carrazeda de Ansiães</td>
<td style="padding:10px;border:1px solid #ddd">15€</td>
</tr>
<tr style="background:#f9f9f9">
<td style="padding:10px;border:1px solid #ddd"><strong>Zona 3</strong></td>
<td style="padding:10px;border:1px solid #ddd">Bragança, Vinhais, Vimioso, Torre de Moncorvo, Mogadouro, Freixo de Espada à Cinta</td>
<td style="padding:10px;border:1px solid #ddd">25€</td>
</tr>
<tr>
<td style="padding:10px;border:1px solid #ddd"><strong>Zona 4</strong></td>
<td style="padding:10px;border:1px solid #ddd">Miranda do Douro, Vila Nova de Foz Côa, São João da Pesqueira, Murça, Valpaços</td>
<td style="padding:10px;border:1px solid #ddd">30€</td>
</tr>
<tr style="background:#f9f9f9">
<td style="padding:10px;border:1px solid #ddd"><strong>Zona 5</strong></td>
<td style="padding:10px;border:1px solid #ddd">Vila Real, Alijó, Sabrosa, Tabuaço, Armamar, Peso da Régua, Lamego, Santa Marta de Penaguião, Mesão Frio</td>
<td style="padding:10px;border:1px solid #ddd">35€</td>
</tr>
<tr>
<td style="padding:10px;border:1px solid #ddd"><strong>Zona 6</strong></td>
<td style="padding:10px;border:1px solid #ddd">Chaves, Vila Pouca de Aguiar, Boticas, Montalegre, Ribeira de Pena, Mondim de Basto, Moimenta da Beira, Sernancelhe, Penedono</td>
<td style="padding:10px;border:1px solid #ddd">40€</td>
</tr>
</table>
<p style="font-size:14px;color:#666;margin-top:15px">
<em>Nota: A taxa de deslocação é aplicada uma única vez por intervenção e inclui ida e volta desde Macedo de Cavaleiros.</em>
</p>
</div>
</div>'''

def update_html_file(filepath, city_name):
    """Met à jour un fichier HTML avec la section tarifaire"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Vérifier si la section existe déjà
        if "Taxa de Deslocação" in content:
            print(f"  ⚠️  Section déjà présente dans {filepath}")
            return False
        
        # Trouver la position avant le footer
        footer_pattern = r'<footer class="footer">'
        match = re.search(footer_pattern, content, re.IGNORECASE)
        
        if not match:
            # Essayer un autre pattern pour le footer
            footer_pattern = r'<footer'
            match = re.search(footer_pattern, content, re.IGNORECASE)
        
        if match:
            position = match.start()
            # Trouver la zone et le prix
            zone_name, price = get_zone_for_city(city_name)
            if not zone_name:
                print(f"  ❌ Ville non trouvée dans les zones: {city_name}")
                return False
            
            # Générer la section
            tarif_section = generate_tarif_section(city_name, zone_name, price)
            
            # Insérer avant le footer
            new_content = content[:position] + tarif_section + content[position:]
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"  ✅ Ajouté section tarifaire pour {city_name} ({zone_name}, {price})")
            return True
        else:
            print(f"  ❌ Footer non trouvé dans {filepath}")
            return False
            
    except Exception as e:
        print(f"  ❌ Erreur avec {filepath}: {str(e)}")
        return False

def main():
    public_dir = "/Users/admin/.openclaw/workspace/sites/norte-reparos/main/client/public"
    
    print("Début de l'ajout des sections tarifaires...")
    
    updated_count = 0
    for filename, city_name in file_to_city.items():
        filepath = os.path.join(public_dir, f"{filename}.html")
        
        if os.path.exists(filepath):
            print(f"\n📄 Traitement: {filename}.html -> {city_name}")
            if update_html_file(filepath, city_name):
                updated_count += 1
        else:
            print(f"\n⚠️  Fichier non trouvé: {filepath}")
    
    print(f"\n✅ Terminé! {updated_count} fichiers mis à jour sur {len(file_to_city)}")
    
    # Mettre à jour la page zonas.html
    update_zonas_page(public_dir)
    
    # Mettre à jour la FAQ
    update_faq_page(public_dir)
    
    # Mettre à jour l'article blog
    update_blog_article(public_dir)

def update_zonas_page(public_dir):
    """Met à jour la page zonas.html"""
    zonas_path = os.path.join(public_dir, "zonas.html")
    if os.path.exists(zonas_path):
        print("\n🔄 Mise à jour de zonas.html...")
        # Lire le contenu
        with open(zonas_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Vérifier si le tableau des zones existe déjà
        if "Sistema de Zonas de Deslocação" in content:
            print("  ⚠️  Tableau déjà présent dans zonas.html")
            return
        
        # Générer le tableau complet
        zonas_table = '''<div style="background:#f0f8ff;padding:30px;border-radius:10px;border-left:4px solid #2193b0;margin:40px 0">
<h2 style="color:#2193b0;font-size:28px;margin-top:0">💰 Sistema de Taxas de Deslocação</h2>
<p style="font-size:18px;line-height:1.6">
A nossa empresa está baseada em Macedo de Cavaleiros. Para garantir transparência, aplicamos uma taxa de deslocação única por intervenção, conforme a distância.
</p>

<div style="background:white;padding:25px;border-radius:10px;margin-top:25px">
<h3 style="color:#333;font-size:22px;margin-top:0">📋 Tabela Completa de Zonas</h3>
<table style="width:100%;border-collapse:collapse;font-size:16px;margin-top:20px">
<tr style="background:#2193b0;color:white">
<th style="padding:15px;text-align:left;border:1px solid #ddd">Zona</th>
<th style="padding:15px;text-align:left;border:1px solid #ddd">Cidades Incluídas</th>
<th style="padding:15px;text-align:left;border:1px solid #ddd">Taxa de Deslocação</th>
</tr>
<tr style="background:#f9f9f9">
<td style="padding:12px;border:1px solid #ddd"><strong>Zona 1</strong></td>
<td style="padding:12px;border:1px solid #ddd">Macedo de Cavaleiros</td>
<td style="padding:12px;border:1px solid #ddd"><strong>10€</strong></td>
</tr>
<tr>
<td style="padding:12px;border:1px solid #ddd"><strong>Zona 2</strong></td>
<td style="padding:12px;border:1px solid #ddd">Vila Flor, Alfândega da Fé, Mirandela, Carrazeda de Ansiães</td>
<td style="padding:12px;border:1px solid #ddd"><strong>15€</strong></td>
</tr>
<tr style="background:#f9f9f9">
<td style="padding:12px;border:1px solid #ddd"><strong>Zona 3</strong></td>
<td style="padding:12px;border:1px solid #ddd">Bragança, Vinhais, Vimioso, Torre de Moncorvo, Mogadouro, Freixo de Espada à Cinta</td>
<td style="padding:12px;border:1px solid #ddd"><strong>25€</strong></td>
</tr>
<tr>
<td style="padding:12px;border:1px solid #ddd"><strong>Zona 4</strong></td>
<td style="padding:12px;border:1px solid #ddd">Miranda do Douro, Vila Nova de Foz Côa, São João da Pesqueira, Murça, Valpaços</td>
<td style="padding:12px;border:1px solid #ddd"><strong>30€</strong></td>
</tr>
<tr style="background:#f9f9f9">
<td style="padding:12px;border:1px solid #ddd"><strong>Zona 5</strong></td>
<td style="padding:12px;border:1px solid #ddd">Vila Real, Alijó, Sabrosa, Tabuaço, Armamar, Peso da Régua, Lamego, Santa Marta de Penaguião, Mesão Frio</td>
<td style="padding:12px;border:1px solid #ddd"><strong>35€</strong></td>
</tr>
<tr>
<td style="padding:12px;border:1px solid #ddd"><strong>Zona 6</strong></td>
<td style="padding:12px;border:1px solid #ddd">Chaves, Vila Pouca de Aguiar, Boticas, Montalegre, Ribeira de Pena, Mondim de Basto, Moimenta da Beira, Sernancelhe, Penedono</td>
<td style="padding:12px;border:1px solid #ddd"><strong>40€</strong></td>
</tr>
</table>

<div style="margin-top:25px;padding:20px;background:#e8