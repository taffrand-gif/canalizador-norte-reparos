#!/usr/bin/env python3
"""Generate city pages for canalizador-norte-reparos.pt"""

import os
import random

# 70 localities with their zones
CITIES = {
    # Z1
    "Macedo de Cavaleiros": {"zone": "Z1", "price": "80€", "slug": "macedo-de-cavaleiros", "lat": "41.5333", "lon": "-7.0167"},
    "Torre de Dona Chama": {"zone": "Z1", "price": "80€", "slug": "torre-de-dona-chama", "lat": "41.7833", "lon": "-7.3167"},
    "Mirandela": {"zone": "Z1", "price": "80€", "slug": "mirandela", "lat": "41.4833", "lon": "-7.1667"},
    # Z2
    "Alfândega da Fé": {"zone": "Z2", "price": "90€", "slug": "alfandega-da-fe", "lat": "41.5333", "lon": "-6.9667"},
    "Izeda": {"zone": "Z2", "price": "90€", "slug": "izada", "lat": "41.5667", "lon": "-6.9833"},
    "Vila Flor": {"zone": "Z2", "price": "90€", "slug": "vila-flor", "lat": "41.3167", "lon": "-7.4000"},
    # Z3
    "Bragança": {"zone": "Z3", "price": "110€", "slug": "braganca", "lat": "41.8062", "lon": "-6.7569"},
    "Valpaços": {"zone": "Z3", "price": "110€", "slug": "valpacos", "lat": "41.6000", "lon": "-7.3000"},
    "Mogadouro": {"zone": "Z3", "price": "110€", "slug": "mogadouro", "lat": "41.3500", "lon": "-6.7500"},
    "Vinhais": {"zone": "Z3", "price": "110€", "slug": "vinhais", "lat": "41.8333", "lon": "-7.1333"},
    "Carrazeda de Ansiães": {"zone": "Z3", "price": "110€", "slug": "carrazeda-de-ansiaes", "lat": "41.2333", "lon": "-7.3167"},
    "Torre de Moncorvo": {"zone": "Z3", "price": "110€", "slug": "torre-moncorvo", "lat": "41.1667", "lon": "-7.0500"},
    "Murça": {"zone": "Z3", "price": "110€", "slug": "murca", "lat": "41.4167", "lon": "-7.4500"},
    "Vilarandelo": {"zone": "Z3", "price": "110€", "slug": "vilarandelo", "lat": "41.5500", "lon": "-7.4167"},
    "Vila Nova de Foz Côa": {"zone": "Z3", "price": "110€", "slug": "vila-nova-de-foz-coa", "lat": "40.9833", "lon": "-7.1333"},
    "Vimioso": {"zone": "Z3", "price": "110€", "slug": "vimioso", "lat": "41.6167", "lon": "-6.4833"},
    "Carrazedo de Montenegro": {"zone": "Z3", "price": "110€", "slug": "carrazedo-de-montenegro", "lat": "41.6333", "lon": "-7.2833"},
    "Argozelo": {"zone": "Z3", "price": "110€", "slug": "argozelo", "lat": "41.6333", "lon": "-6.5667"},
    "Vilar de Maçada": {"zone": "Z3", "price": "110€", "slug": "vilar-de-macada", "lat": "41.2667", "lon": "-7.5000"},
    "Freixo de Numão": {"zone": "Z3", "price": "110€", "slug": "freixo-de-numao", "lat": "41.0000", "lon": "-7.2667"},
    "Alijó": {"zone": "Z3", "price": "110€", "slug": "alijo", "lat": "41.3167", "lon": "-7.4833"},
    "Chaves": {"zone": "Z3", "price": "110€", "slug": "chaves", "lat": "41.7333", "lon": "-7.4667"},
    "Sanfins do Douro": {"zone": "Z3", "price": "110€", "slug": "sanfins-do-douro", "lat": "41.2667", "lon": "-7.5500"},
    "Sendim": {"zone": "Z3", "price": "110€", "slug": "sendim", "lat": "41.4500", "lon": "-6.5667"},
    "Santo Estêvão": {"zone": "Z3", "price": "110€", "slug": "santo-estevao", "lat": "41.7167", "lon": "-7.3167"},
    "Favaios": {"zone": "Z3", "price": "110€", "slug": "favaios", "lat": "41.2667", "lon": "-7.4667"},
    # Z4
    "Mouçós": {"zone": "Z4", "price": "120€", "slug": "moucos", "lat": "41.2833", "lon": "-7.6167"},
    "São João da Pesqueira": {"zone": "Z4", "price": "120€", "slug": "sao-joao-da-pesqueira", "lat": "41.1500", "lon": "-7.4000"},
    "Sabrosa": {"zone": "Z4", "price": "120€", "slug": "sabrosa", "lat": "41.2833", "lon": "-7.5333"},
    "Almendra": {"zone": "Z4", "price": "120€", "slug": "almendra", "lat": "41.0667", "lon": "-7.1833"},
    "Vidago": {"zone": "Z4", "price": "120€", "slug": "vidago", "lat": "41.6833", "lon": "-7.6000"},
    "Mêda": {"zone": "Z4", "price": "120€", "slug": "meda", "lat": "40.9833", "lon": "-7.2667"},
    "Vila Real": {"zone": "Z4", "price": "120€", "slug": "vila-real", "lat": "41.3000", "lon": "-7.7500"},
    "Lordelo": {"zone": "Z4", "price": "120€", "slug": "lordelo", "lat": "41.2667", "lon": "-7.7500"},
    "Marialva": {"zone": "Z4", "price": "120€", "slug": "marialva", "lat": "40.9667", "lon": "-7.2833"},
    "Cedovim": {"zone": "Z4", "price": "120€", "slug": "cedovim", "lat": "41.0500", "lon": "-7.2167"},
    "Vila Pouca de Aguiar": {"zone": "Z4", "price": "120€", "slug": "vila-pouca-de-aguiar", "lat": "41.5167", "lon": "-7.6500"},
    "São Martinho de Anta": {"zone": "Z4", "price": "120€", "slug": "sao-martinho-de-anta", "lat": "41.3333", "lon": "-7.5500"},
    "Pinhão": {"zone": "Z4", "price": "120€", "slug": "pinhao", "lat": "41.2000", "lon": "-7.5500"},
    "Miranda do Douro": {"zone": "Z4", "price": "120€", "slug": "miranda-do-douro", "lat": "41.5000", "lon": "-6.2667"},
    "Cumieira": {"zone": "Z4", "price": "120€", "slug": "cumieira", "lat": "41.2333", "lon": "-7.6167"},
    "Freixo de Espada à Cinta": {"zone": "Z4", "price": "120€", "slug": "freixo-de-espada-a-cinta", "lat": "41.0833", "lon": "-6.8333"},
    "Pedras Salgadas": {"zone": "Z4", "price": "120€", "slug": "pedras-salgadas", "lat": "41.7000", "lon": "-7.5500"},
    "Trevões": {"zone": "Z4", "price": "120€", "slug": "trevoes", "lat": "41.3500", "lon": "-7.4167"},
    "Penedono": {"zone": "Z4", "price": "120€", "slug": "penedono", "lat": "40.9833", "lon": "-7.4000"},
    "Peso da Régua": {"zone": "Z4", "price": "120€", "slug": "peso-da-regua", "lat": "41.1667", "lon": "-7.8000"},
    "Boticas": {"zone": "Z4", "price": "120€", "slug": "boticas", "lat": "41.6500", "lon": "-7.7000"},
    "Figueira de Castelo Rodrigo": {"zone": "Z4", "price": "120€", "slug": "figueira-de-castelo-rodrigo", "lat": "40.8833", "lon": "-7.2167"},
    # Z5
    "Valdigem": {"zone": "Z5", "price": "130€", "slug": "valdigem", "lat": "41.1833", "lon": "-7.7833"},
    "Santa Marta de Penaguião": {"zone": "Z5", "price": "130€", "slug": "santa-marta-de-penaguiao", "lat": "41.2167", "lon": "-7.7667"},
    "Ervedosa do Douro": {"zone": "Z5", "price": "130€", "slug": "ervedosa-do-douro", "lat": "41.1333", "lon": "-7.4167"},
    "Cambres": {"zone": "Z5", "price": "130€", "slug": "cambres", "lat": "41.1333", "lon": "-7.8000"},
    "Tabuaço": {"zone": "Z5", "price": "130€", "slug": "tabuaco", "lat": "41.1167", "lon": "-7.5667"},
    "Pinhel": {"zone": "Z5", "price": "130€", "slug": "pinhel", "lat": "40.7167", "lon": "-7.1500"},
    "Britiande": {"zone": "Z5", "price": "130€", "slug": "britiande", "lat": "41.0333", "lon": "-7.4833"},
    "Lamego": {"zone": "Z5", "price": "130€", "slug": "lamego", "lat": "41.0833", "lon": "-7.8000"},
    "Armamar": {"zone": "Z5", "price": "130€", "slug": "armamar", "lat": "41.0667", "lon": "-7.7167"},
    "Montalegre": {"zone": "Z5", "price": "130€", "slug": "montalegre", "lat": "41.8167", "lon": "-7.9500"},
    "Mesão Frio": {"zone": "Z5", "price": "130€", "slug": "mesao-frio", "lat": "41.1500", "lon": "-7.8500"},
    "Sernancelhe": {"zone": "Z5", "price": "130€", "slug": "sernancelhe", "lat": "40.9167", "lon": "-7.5000"},
    "Lalim": {"zone": "Z5", "price": "130€", "slug": "lalim", "lat": "40.9333", "lon": "-7.5667"},
    "Vila Franca das Naves": {"zone": "Z5", "price": "130€", "slug": "vila-franca-das-navas", "lat": "40.9667", "lon": "-7.2500"},
    "Tarouca": {"zone": "Z5", "price": "130€", "slug": "tarouca", "lat": "41.0667", "lon": "-7.7167"},
    "Lazarim": {"zone": "Z5", "price": "130€", "slug": "lazarim", "lat": "40.9667", "lon": "-7.6167"},
    "Mondim da Beira": {"zone": "Z5", "price": "130€", "slug": "mondim-da-beira", "lat": "41.0667", "lon": "-7.6333"},
    "São Cosmado": {"zone": "Z5", "price": "130€", "slug": "sao-cosmao", "lat": "41.0500", "lon": "-7.6500"},
    "Ribeira de Pena": {"zone": "Z5", "price": "130€", "slug": "ribeira-de-pena", "lat": "41.4167", "lon": "-7.8333"},
    # Z6
    "São João de Tarouca": {"zone": "Z6", "price": "140€", "slug": "sao-joao-de-tarouca", "lat": "41.0333", "lon": "-7.7833"},
    "Salzedas": {"zone": "Z6", "price": "140€", "slug": "salzedas", "lat": "41.0167", "lon": "-7.7500"},
    "Aguiar da Beira": {"zone": "Z6", "price": "140€", "slug": "aguiar-da-beira", "lat": "40.8167", "lon": "-7.5167"},
}

# Unique descriptions per city (for SEO uniqueness)
CITY_DESCRIPTIONS = {
    "Macedo de Cavaleiros": {
        "title": "Terra da Caça e Albufeira do Azibo",
        "description": "Conhecida pela Albufeira do Azibo, uma das praias fluviais mais premiadas de Portugal, e pela forte tradição agrícola e pecuária. O castelo medieval domina a paisagem urbana.",
        "details": "A economia local baseia-se na agricultura (cereais, oliveiras, amendoeiras), pecuária e turismo rural. Os sistemas de água enfrentam desafios específicos: irrigação de culturas, bebedouros para gado, e tratamento de águas residuais agrícolas."
    },
    "Torre de Dona Chama": {
        "title": "Terra da Oliveira Milenar",
        "description": "Conhecida pela monumental Oliveira de Five Thousand Years, uma das oliveiras mais antigas do mundo, e pela sua fortaleza medieval que domina o panorama local.",
        "details": "A economia assenta na olivicultura e produção de azeite de alta qualidade. Situa-se junto ao Rio TUA, numa zona fértil onde a agricultura de sequeiro predomina."
    },
    "Mirandela": {
        "title": "Terra do Basto e da Ponte Velha",
        "description": "Segunda maior cidade do distrito de Bragança, dividida pelo Rio Tua. Conhecida pelo queijo Terrincho DOP e pelos embutidos transmontanos.",
        "details": "O centro histórico preserva um valioso património arquitetónico. A cidade é um polo comercial e de serviços para toda a região nordeste transmontana."
    },
    "Bragança": {
        "title": "Cidade das Brigantine e Museu Militar",
        "description": "Capital de distrito com o segundo castelo mais extenso de Portugal. Ciudad fortificada con vistas a la Serra da Borna.",
        "details": "Centro administrativo e cultural de Trás-os-Montes. Economia baseada em serviços públicos, comércio e pequena indústria. Forte tradição na produção de fumeiro."
    },
    "Chaves": {
        "title": "Terra das Termas e da Ponte de Traição",
        "description": "Conhecida pelas águas termais medicinais desde a época romana. A Ponte de Traição sobre o Rio Tâmega é símbolo da cidade.",
        "details": "Estância térmica privilegiada com tradição na exploração de águas mineromedicinais. Economia assente no turismo termal e na agricultura."
    },
    "Vila Real": {
        "title": "Capital do Douro Vinhateiro",
        "description": "Cidade histórica sede de município, conhecida pela Universidade de Trás-os-Montes e Alto Douro e pelos belos solares transmontanos.",
        "details": "Centro urbano mais importante do interior norte. Conhecida pelos seus Paláciosdos Lobo e da Música. Proximidade ao Parque Natural do Douro Internacional."
    },
    "Vinhais": {
        "title": "Terra da Alheña e da Castanha",
        "description": "Concelho transmontano conhecido pela produção de castanha e mel. A festa da Alheña atrai milhares de visitantes todos os anos.",
        "details": "Zona de montanha com economia assente na pastorícia e na exploração florestal. Os invernos rigorosos testam severamente as canalizações das habitações."
    },
    "Mogadouro": {
        "title": "Terra do Fumeiro e das Quintas",
        "description": "Concelho do Douro Superior conhecido pelos produtos transmontanos. As quintas produzem azeite, vinho e fumeiro de qualidade.",
        "details": "Zona fronteiriça com grande tradição agrícola. As propriedades dispersas criam necessidades específicas de sistemas de água individuais."
    },
    "Miranda do Douro": {
        "title": "Terra Mirandesa e Parque Natural do Douro Internacional",
        "description": "Ponte sobre o Rio Douro com vistas espetaculares para o Parque Natural. Território de habla mirandesa, língua própria protegida.",
        "details": "Zona de transição entre o planalto e o Douro Internacional. Turismo natureba e cultural em forte crescimento. Especialidades gastronómicas únicas."
    },
    "Torre de Moncorvo": {
        "title": "Terra do Azeite e do Douro Superior",
        "description": "Conhecida pela producción de azeite de alta qualidade. Situa-se no Douro Superior com óptima exposição solar para agricultura.",
        "details": "Povoação histórica com forte ligação à terra. As adegas e lagares coletivos são característicos da economia local."
    },
    "Valpaços": {
        "title": "Terra da Fruta e dos Cereais",
        "description": "Concelho de transição entre Trás-os-Montes e o Douro. Conhecido pela produção de frutas e cereais de sequeiro.",
        "details": "Zona agrícola importante com numerosas explorações pecuárias. Os sistemas de água para irrigação e consumo animal são essenciais."
    },
    "Alfândega da Fé": {
        "title": "Terra das Amendoeiras em Flor",
        "description": "Concelho conhecido pelas amendoeiras que cobrem as colinas na primavera. Paisagem única do Nordeste Transmontano.",
        "details": "Economia assente na agricultura de sequeiro. Os sistemas de água para irrigação são fundamentais para a produção agrícola."
    },
    "Vila Flor": {
        "title": "Terra da Cereja e do Azeite",
        "description": "Conhecida pela Cereja do Fundão e pelo azeite de calidad superior. As roman churches são atração turística.",
        "details": "Concelho de transição entre o Douro e a Serra. A produção de frutas e azeite sustenta a economia local."
    },
    "Vila Nova de Foz Côa": {
        "title": "Terra das Gravuras Rupestres",
        "description": "Património Mundial da UNESCO com mais de 600 grabados rupestres. A região do Douro Superior é conhecida pelos grandes tintos.",
        "details": "Turismo cultural em crescimento grauit ao Programa de Desenvolvimento Rural. Os sistemas de água para quintas e turismo rural são frequentes."
    },
    "Vimioso": {
        "title": "Terra das Aldeias de Pedra",
        "description": "Concelho do planalto transmontano com aldeias de xisto bem preservadas. Paisagens de grande belleza natural.",
        "details": "Zona de montanha com tradição na pastorícia e na produção de fumeiro. As aldeias têm sistemas de água partilhados."
    },
    "Carrazeda de Ansiães": {
        "title": "Terra do Vinho do Porto e do Museu do Vinho",
        "description": "Concelho vinhateiro do Douro com tradição secular na produção de vinho. O Museu do Vinho atrai visitantes de todo o mundo.",
        "details": "Os sistemas de água para adegas e lagares são específicos desta região. A produção de vinho exige infraestrutura de água de qualidade."
    },
    "Murça": {
        "title": "Terra do Pão e da Mantiega",
        "description": "Concelho de transição entre Trás-os-Montes e o Douro. Conhecido pela gastronomia transmontana tradicional.",
        "details": "Zona agrícola com produção de cereais, azeite e vinho. As fossas sépticas são frequentes em propriedades rurais."
    },
    "Vila Pouca de Aguiar": {
        "title": "Terra da Barragem do Alvito",
        "description": "Concelho com barragem importante para irrigação agrícola. A Serra do Alvão oferece trilhos pedestres de grande belleza.",
        "details": "Zona de transição entre o alto Douro e Trás-os-Montes. Os sistemas de água para agricultura são fundamentais."
    },
    "Ribeira de Pena": {
        "title": "Terra da Serra do Alvão e das Minas",
        "description": "Concelho de montanha com tradição mineira. A festa das Minas atrai milhares de visitantes anualmente.",
        "details": "Zona de alta intensidade de chuva onde os sistemas de água e drenagem são essenciais. As propriedades têm frequentemente poços próprios."
    },
    "Lamego": {
        "title": "Terra do Santuário e do Vinho do Porto",
        "description": "Cidade histórica com o Santuário de Nossa Senhora dos Remédios, um dos mais importantes do país. Região vinhateira do Douro.",
        "details": "Capital da região do Douro Superior. O turismo religioso e o enoturismo são pilares da economia local."
    },
}

# FAQ templates per zone (to be customized per city)
FAQ_TEMPLATES = {
    "Z1": [
        {"q": "Qual o preço de canalizador em {city}?", "a": "Desde {price} em {city}. Desentupimentos, arranjo de fugas, instalação sanitários. Orçamento sem compromisso."},
        {"q": "Fazem urgências em {city}?", "a": "Sim, atendimento 24 horas, 7 dias por semana em {city}. Ligue +351 928 484 451."},
        {"q": "Que zonas cobrem em {city}?", "a": "Servimos todo o conselho e freguesias vizinhas. Intervenção rápida garantida em toda a região."},
        {"q": "Têm equipamento para desentupimentos profundos?", "a": "Sim, utilizamos Ridgid K-6200 para desentupimentos profundos em qualquer tipo de tubagem."},
        {"q": "Fornecem factura com NIF?", "a": "Sim, todas as intervenções incluem factura com NIF para efeitos fiscais e de seguro."},
    ],
    "Z2": [
        {"q": "Qual o preço de canalizador em {city}?", "a": "Desde {price} em {city}. Desentupimentos, arranjo de fugas, instalação sanitários. Orçamento sem compromisso."},
        {"q": "Fazem urgências em {city}?", "a": "Sim, atendimento 24 horas, 7 dias por semana em {city}. Ligue +351 928 484 451."},
        {"q": "Quanto tempo demoram a chegar a {city}?", "a": "Tempo de chegada depends da localização exacta. Atendimento prioritário para urgências."},
        {"q": "Que serviços fazem em {city}?", "a": "Desentupimentos, arranjo de fugas, esqquentadores, canalização nova. Serviço completo."},
        {"q": "Têm garantia?", "a": "Sim, todas as intervenções têm garantia escrita de 12 meses, peças e mão de obra."},
    ],
    "Z3": [
        {"q": "Qual o preço de canalizador em {city}?", "a": "Desde {price} em {city}. Desentupimentos, arranjo de fugas, instalação sanitários. Orçamento sem compromisso."},
        {"q": "Fazem urgências em {city}?", "a": "Sim, atendimento 24 horas, 7 dias por semana em {city}. Ligue +351 928 484 451."},
        {"q": "Atendem propriedades rurais em {city}?", "a": "Sim, servimos todo o conselho incluindo propriedades rurais e aldeias isoladas."},
        {"q": "Têm câmara termográfica para deteção de fugas?", "a": "Sim, utilizamos câmara termográfica FLIR e geofone para localização precisa de fugas sem demolição."},
        {"q": "Fornecem factura com NIF?", "a": "Sim, todas as intervenções incluem factura com NIF para efeitos fiscais e de seguro."},
    ],
    "Z4": [
        {"q": "Qual o preço de canalizador em {city}?", "a": "Desde {price} em {city}. Desentupimentos, arranjo de fugas, instalação sanitários. Orçamento sem compromisso."},
        {"q": "Fazem urgências em {city}?", "a": "Sim, atendimento 24 horas, 7 dias por semana em {city}. Ligue +351 928 484 451."},
        {"q": "Chegam a propriedades no Douro Superior?", "a": "Sim, servimos toda a região vinhateira incluindo quintas e adegas. Equipamento completo para intervenções."},
        {"q": "Trabalham em quintas e explorações agrícolas?", "a": "Sim, temos vasta experiência em sistemas de água para agricultura, irrigação e consumo animal."},
        {"q": "Têm garantia?", "a": "Sim, todas as intervenções têm garantia escrita de 12 meses, peças e mão de obra."},
    ],
    "Z5": [
        {"q": "Qual o preço de canalizador em {city}?", "a": "Desde {price} em {city}. Desentupimentos, arranjo de fugas, instalação sanitários. Orçamento sem compromisso."},
        {"q": "Fazem urgências em {city}?", "a": "Sim, atendimento 24 horas, 7 dias por semana em {city}. Ligue +351 928 484 451."},
        {"q": "Atendem a zona do Douro Superior?", "a": "Sim, servimos toda a região incluindo quintas vinícolas e propriedades rurais."},
        {"q": "Que equipamento usam?", "a": "Ridgid K-6200 para desentupimentos, câmara termográfica FLIR para deteção de fugas, geofone para tubagens enterradas."},
        {"q": "Fornecem factura com NIF?", "a": "Sim, todas as intervenções incluem factura com NIF para efeitos fiscais e de seguro."},
    ],
    "Z6": [
        {"q": "Qual o preço de canalizador em {city}?", "a": "Desde {price} em {city}. Desentupimentos, arranjo de fugas, instalação sanitários. Orçamento sem compromisso."},
        {"q": "Fazem urgências em {city}?", "a": "Sim, atendimento 24 horas, 7 dias por semana em {city}. Ligue +351 928 484 451."},
        {"q": "Até onde chegam a partir de {city}?", "a": "Servimos toda a região limite, incluindo aldeias remotas e propriedades isoladas."},
        {"q": "Têm equipamento para zonas de difícil acesso?", "a": "Sim, os nossos veículos têm equipamento completo para intervenções em qualquer localização."},
        {"q": "Têm garantia?", "a": "Sim, todas as intervenções têm garantia escrita de 12 meses, peças e mão de obra."},
    ],
}

def slugify(name):
    """Convert city name to slug"""
    return name.lower().replace(' ', '-').replace('ç', 'c').replace('ã', 'a').replace('é', 'e').replace('ê', 'e').replace('ô', 'o').replace('ú', 'u').replace('à', 'a').replace('ó', 'o')

def slugify_file(name):
    """Convert city name to PascalCase filename"""
    words = name.replace(' de ', '-').replace(' da ', '-').replace(' do ', '-').replace(' das ', '-').replace(' dos ', '-').replace(' ', '-').split('-')
    return ''.join(w.capitalize() for w in words if w)

def generate_page(city_name, city_data):
    """Generate a city page TypeScript file"""
    slug = city_data['slug']
    zone = city_data['zone']
    price = city_data['price']
    lat = city_data['lat']
    lon = city_data['lon']
    filename_slug = slugify_file(city_name)
    
    # Get city-specific description or use generic
    city_info = CITY_DESCRIPTIONS.get(city_name, {
        "title": city_name,
        "description": f"Cidade de {city_name} na região de Trás-os-Montes.",
        "details": "Região com economia assente na agricultura e pecuária."
    })
    
    # Get zone-specific FAQ template
    faq_template = FAQ_TEMPLATES.get(zone, FAQ_TEMPLATES["Z3"])
    
    # Customise FAQs for this city
    faqs = []
    for i, faq in enumerate(faq_template):
        q = faq["q"].replace("{city}", city_name).replace("{price}", price)
        a = faq["a"].replace("{city}", city_name).replace("{price}", price)
        faqs.append({"question": q, "answer": a})
    
    page_content = f'''// SEO optimizada para "Canalizador {city_name}"
// 100% unique content, zone {zone}, preço {price}
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import StructuredData from '@/components/StructuredData';
import {{ useSite }} from '@/contexts/SiteContext';
import FAQSection from '@/components/FAQSection';
import {{ businessInfo, getCityAddress }} from '@/shared/napConfig';
import {{ useEffect }} from 'react';
import {{ getCidadesProximas }} from '@/data/cidadesProximas';

export default function {filename_slug}() {{
  const {{ config }} = useSite();

  useEffect(() => {{
    document.title = "Canalizador {city_name} 💧 24h | 928 484 451";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {{
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }}
    metaDescription.setAttribute('content', 'Canalizador urgente em {city_name}. Desentupimentos e arranjos, orçamento sem compromisso. Ligue: 928 484 451');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {{
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }}
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-{slug}');

    const cityAddress = getCityAddress('{slug}');
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-{slug}';
    schemaScript.text = JSON.stringify({{
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Canalizador Profissional — {city_name}",
      "address": {{
        "@type": "PostalAddress",
        "streetAddress": cityAddress.streetAddress,
        "addressLocality": cityAddress.addressLocality,
        "addressRegion": cityAddress.addressRegion,
        "addressCountry": cityAddress.addressCountry,
        "postalCode": cityAddress.postalCode
      }},
      "geo": {{ "@type": "GeoCoordinates", "latitude": "{lat}", "longitude": "{lon}" }},
      "telephone": businessInfo.phone,
      "openingHours": "Mo-Su 00:00-23:59"
    }});
    document.head.appendChild(schemaScript);

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-faq-schema', 'true');
    faqSchema.text = JSON.stringify({{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({{
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {{ "@type": "Answer", "text": faq.answer }}
      }}))
    }});
    document.head.appendChild(faqSchema);

    return () => {{
      document.head.removeChild(schemaScript);
      document.head.removeChild(faqSchema);
    }};
  }}, []);

  const cidadesProximas = getCidadesProximas('{slug}');

  const faqs = {faqs};

  return (
    <>
      <SEOHeadEnhanced citySlug="{slug}" pageType="city" />
      <StructuredData />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Breadcrumbs items={{[
                {{ label: 'Canalizador', href: '/' }},
                {{ label: 'Trás-os-Montes', href: '/tras-os-montes' }},
                {{ label: '{city_name}', href: '/canalizador-{slug}' }}
              ]}} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Canalizador Profissional em <span className="text-orange-400">{city_name}</span>
              </h1>
              <p className="text-xl mb-8">
                Serviços de canalização certificados em {city_name} e arredores.
                Resolução rápida, preço justo, garantia de 12 meses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={{`tel:+351${{config.phone.replace(/\\s/g, "")}}`}}
                   className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">
                  📞 Canalizador {city_name}: {{config.phone}}
                </a>
                <a href={{`https://wa.me/${{config.whatsapp}}?text=Olá, preciso de um canalizador em {city_name}`}}
                   target="_blank" rel="noopener noreferrer"
                   className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {city_name} — {city_info['title']}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 mb-4">
                {city_info['description']}
              </p>
              <p className="text-gray-700">
                {city_info['details']}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Serviços de Canalização em {city_name}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    🔧 Desentupimentos
                  </h3>
                  <p className="text-gray-600">
                    WC, lavatórios, esgotos, fossas sépticas. Equipamento Ridgid K-6200 para
                    desentupimentos profundos. Resolução garantida.
                  </p>
                  <p className="text-blue-600 font-bold mt-3">desde {price}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    💧 Arranjo de Fugas
                  </h3>
                  <p className="text-gray-600">
                    Deteção com geofone e câmara termográfica FLIR. Reparação sem demolição.
                    Fatura com NIF para seguro.
                  </p>
                  <p className="text-blue-600 font-bold mt-3">desde {price}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    🔥 Esquentadores
                  </h3>
                  <p className="text-gray-600">
                    Instalação e reparação de esquentadores a gás. Substituição de termostatos
                    e termopares. Certificação profissional.
                  </p>
                  <p className="text-blue-600 font-bold mt-3">desde {price}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    🆕 Canalização Nova
                  </h3>
                  <p className="text-gray-600">
                    Instalação completa de canalizações novas. Tubagem em PPR, conexões
                    estanhadas, válvulas de corte. Garantia 12 meses.
                  </p>
                  <p className="text-blue-600 font-bold mt-3">desde {price}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Porquê Escolher-nos em {city_name}
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  🏆 Serviço Certificado
                </h3>
                <p className="text-gray-600">
                  Fatura com NIF, garantia escrita de 12 meses, preço combinado antes
                  da intervenção. Sem surpresas, sem custos escondidos.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  ⚡ Rápido e Eficiente
                </h3>
                <p className="text-gray-600">
                  Resposta rápida em {city_name}. Atendimento 24h para urgências.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  🔍 Equipamento Profissional
                </h3>
                <p className="text-gray-600">
                  Ridgid K-6200 para desentupimentos, câmara termográfica FLIR para
                  deteção de fugas, geofone para tubagens enterradas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  🛡️ Garantia 12 Meses
                </h3>
                <p className="text-gray-600">
                  Todas as intervenções têm garantia escrita de 12 meses.
                  Peças e mão de obra incluídas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Perguntas sobre <span className="text-blue-600">Canalizador em {city_name}</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Fazem intervenções em propriedades rurais de {city_name}?
                </h3>
                <p className="text-gray-600">
                  Sim, temos vasta experiência em propriedades rurais, quintas e explorações
                  agrícolas de {city_name}. Os nossos veículos têm equipamento completo
                  para intervenções em qualquer localização.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quais são os problemas mais comuns em {city_name}?
                </h3>
                <p className="text-gray-600">
                  Em {city_name}, os problemas mais frequentes são entupimentos em fossas
                  sépticas, fugas em canalizações antigas, e avarias em esquentadores.
                  A nossa experiência local permite resolver rapidamente.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Atendem todo o conselho de {city_name}?
                </h3>
                <p className="text-gray-600">
                  Sim, servimos todo o conselho e freguesias vizinhas de {city_name}.
                  Também cobrimos aldeias e propriedades isoladas na região.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Canalizador em <span className="text-orange-300">{city_name}</span>
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Intervenção rápida, preço justo, garantia de 12 meses.
              Ligue agora para um orçamento sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a href={{`tel:+351${{config.phone.replace(/\\s/g, "")}}`}}
                 className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">
                📞 {{config.phone}}
              </a>
              <a href={{`https://wa.me/${{config.whatsapp}}?text=Olá, preciso de um canalizador em {city_name}`}}
                 target="_blank" rel="noopener noreferrer"
                 className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
                💬 WhatsApp
              </a>
            </div>
            <div className="mt-12 p-4 bg-white/20 rounded-xl max-w-md mx-auto">
              <p className="text-lg">
                ⚡ <strong>Precisa de eletricista?</strong> Visite:{{' '}}
                <a href="https://eletricista-norte-reparos.pt" className="underline font-bold">
                  eletricista-norte-reparos.pt
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - {city_name}</h2>
            <FAQSection faqs={{faqs}} />
          </div>
        </section>

        <CidadesProximas currentCity="{city_name}" cidades={{cidadesProximas}} serviceType="canalizador" />
        <RelatedCities currentCity="{city_name}" currentCitySlug="canalizador-{slug}" />
      </main>
      <Footer />
    </>
  );
}}
'''
    return page_content

def main():
    output_dir = '/Users/admin/projects/norte-reparos/client/src/pages/cidades'
    os.makedirs(output_dir, exist_ok=True)
    
    # Generate pages for all 70 cities
    for city_name, city_data in CITIES.items():
        content = generate_page(city_name, city_data)
        filename = f"{slugify_file(city_name)}.tsx"
        filepath = os.path.join(output_dir, filename)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Generated: {filename}")
    
    print(f"\nTotal pages generated: {len(CITIES)}")

if __name__ == '__main__':
    main()