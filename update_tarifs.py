#!/usr/bin/env python3
import os
import re

# Mapping des villes vers les zones
zones = {
    "Zona 1": {"price": "10€", "cities": ["Macedo de Cavaleiros"]},
    "Zona 2": {"price": "15€", "cities": ["Vila Flor", "Alfândega da Fé", "Mirandela", "Carrazeda de Ansiães"]},
    "Zona 3": {"price": "25€", "cities": ["Bragança", "Vinhais", "Vimioso", "Torre de Moncorvo", "Mogadouro", "Freixo de Espada à Cinta"]},
    "Zona 4": {"price": "30€", "cities": ["Miranda do Douro", "Vila Nova de Foz Côa", "São João da Pesqueira", "Murça", "Valpaços"]},
    "Zona 5": {"price": "35€", "cities": ["Vila Real", "Alijó", "Sabrosa", "Tabuaço", "Armamar", "Peso da Régua", "Lamego", "Santa Marta de Penaguião", "Mesão Frio"]},
    "Zona 6": {"price": "40€", "cities": ["Chaves", "Vila Pouca de Aguiar", "Boticas", "Montalegre", "Ribeira de Pena", "Mondim de Basto", "Moimenta da Beira", "Sernancelhe", "Penedono"]}
}

# Mapping des fichiers
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
    for zone_name, zone_data in zones.items():
        if city_name in zone_data["cities"]:
            return zone_name, zone_data["price"]
    return None, None

def generate_tarif_section(city_name, zone_name, price):
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

def update_file(filepath, city_name):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if "Taxa de Deslocação" in content:
            print(f"  ⚠️  Déjà présent")
            return False
        
        # Chercher le footer
        footer_pos = content.find('<footer class="footer">')
        if footer_pos == -1:
            footer_pos = content.find('<footer')
        
        if footer_pos == -1:
            print(f"  ❌ Footer non trouvé")
            return False
        
        zone_name, price = get_zone_for_city(city_name)
        if not zone_name:
            print(f"  ❌ Zone non trouvée pour {city_name}")
            return False
        
        tarif_section = generate_tarif_section(city_name, zone_name, price)
        new_content = content[:footer_pos] + tarif_section + content[footer_pos:]
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"  ✅ Ajouté ({zone_name}, {price})")
        return True
        
    except Exception as e:
        print(f"  ❌ Erreur: {str(e)}")
        return False

def main():
    public_dir = "/Users/admin/.openclaw/workspace/sites/norte-reparos/main/client/public"
    
    print("Mise à jour des pages villes...")
    updated = 0
    
    for filename, city_name in file_to_city.items():
        filepath = os.path.join(public_dir, f"{filename}.html")
        if os.path.exists(filepath):
            print(f"\n📄 {filename}.html -> {city_name}")
            if update_file(filepath, city_name):
                updated += 1
        else:
            print(f"\n⚠️  Non trouvé: {filepath}")
    
    print(f"\n✅ {updated} pages mises à jour sur {len(file_to_city)}")

if __name__ == "__main__":
    main()