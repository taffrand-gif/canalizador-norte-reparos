#!/usr/bin/env python3
"""
Script pour générer les 15 pages service+ville manquantes pour Norte-Reparos.com
"""

import os
import json
import random
from datetime import datetime

# Configuration du site
SITE_CONFIG = {
    "color": "#2193b0",
    "tel": "+351 928 484 451",
    "whatsapp": "https://wa.me/351928484451",
    "base": "Macedo de Cavaleiros",
    "domain": "norte-reparos.com",
    "badge_text": "Câmara térmica VEVOR • Ridgid FlexShaft K9-306 • Deteção UV Fluoresceína • Endoscópio HD"
}

# Zones et tarifs
ZONES = {
    "Macedo": {"zone": 1, "deslocacao": 15, "km": 0, "min": 0},
    "Bragança": {"zone": 3, "deslocacao": 30, "km": 27, "min": 25},
    "Mirandela": {"zone": 2, "deslocacao": 20, "km": 30, "min": 25},
    "Vila Real": {"zone": 5, "deslocacao": 45, "km": 90, "min": 75},
    "Chaves": {"zone": 6, "deslocacao": 50, "km": 100, "min": 80},
    "Lamego": {"zone": 5, "deslocacao": 45, "km": 110, "min": 90},
    "Mogadouro": {"zone": 3, "deslocacao": 30, "km": 50, "min": 45}
}

# Services et descriptions
SERVICES = {
    "esquentadores": {
        "name": "Esquentadores/Caldeiras",
        "title_prefix": "Esquentadores",
        "meta_prefix": "Reparação e instalação de esquentadores",
        "h1_prefix": "Esquentadores em",
        "intro_templates": [
            "Problemas com o seu esquentador em {ville}? A nossa equipa especializada em aquecimento resolve qualquer avaria com equipamento profissional.",
            "Esquentador sem água quente em {ville}? Intervenho rapidamente desde {base} com diagnóstico preciso e peças originais.",
            "Instalação ou reparação de esquentadores em {ville} com garantia. Trabalho com todas as marcas: Junkers, Bosch, Vaillant, Ariston.",
            "Aquecimento central avariado em {ville}? Diagnóstico gratuito e reparação urgente com técnicos certificados."
        ],
        "services": [
            "🔧 Reparação urgente de esquentadores (água fria, falhas de ignição, pressão baixa)",
            "🔄 Substituição de resistências, termostatos, válvulas e trocadores de calor",
            "🏠 Instalação de novos esquentadores (elétricos, a gás, instantâneos)",
            "📊 Diagnóstico com manómetro digital e analisador de gases",
            "🧹 Limpeza e manutenção preventiva para prolongar vida útil",
            "⚡ Reparação de caldeiras e sistemas de aquecimento central"
        ],
        "advantages": [
            "✅ Técnicos especializados em aquecimento",
            "✅ Peças originais com garantia 2 anos",
            "✅ Diagnóstico gratuito em {ville}",
            "✅ Atendimento urgente 24h",
            "✅ Equipamento profissional (manómetros, analisadores)"
        ],
        "price_base": 80,
        "price_range": "80-150€"
    },
    "fugas-agua": {
        "name": "Fugas de Água",
        "title_prefix": "Fugas de Água",
        "meta_prefix": "Reparação urgente de fugas de água",
        "h1_prefix": "Fugas de Água em",
        "intro_templates": [
            "Fuga de água em {ville}? Deteção e reparação urgente com tecnologia de última geração. Evite danos na sua propriedade.",
            "Humidade nas paredes ou contador a girar em {ville}? Localizo a fuga com câmara térmica e endoscópio HD.",
            "Reparação profissional de fugas em {ville}. Trabalho limpo, sem destruir paredes sempre que possível.",
            "Emergência de água em {ville}? Atendo em {min} minutos desde {base} com equipamento de deteção avançado."
        ],
        "services": [
            "🔍 Deteção de fugas ocultas com câmara térmica VEVOR",
            "📹 Inspeção com endoscópio HD (até 10m de profundidade)",
            "💧 Reparação de tubos de cobre, PVC e PEX sem destruição",
            "🚿 Substituição de torneiras, misturadores e válvulas",
            "🏠 Localização de fugas em paredes, pavimentos e tetos",
            "📊 Relatório técnico com fotos antes/depois"
        ],
        "advantages": [
            "✅ Tecnologia de deteção não destrutiva",
            "✅ Resolução em 90% dos casos sem quebrar paredes",
            "✅ Garantia 5 anos nas reparações",
            "✅ Atendimento urgente 24h em {ville}",
            "✅ Equipamento premium (VEVOR, Ridgid, endoscópio)"
        ],
        "price_base": 70,
        "price_range": "70-120€"
    },
    "canalizacao-nova": {
        "name": "Canalização Nova",
        "title_prefix": "Canalização Nova",
        "meta_prefix": "Instalação de canalização nova",
        "h1_prefix": "Canalização Nova em",
        "intro_templates": [
            "Reforma ou obra nova em {ville}? Instalação profissional de canalização com materiais de qualidade e certificação.",
            "Canalização antiga em {ville}? Substituição completa com tubos PEX ou multicamada para maior durabilidade.",
            "Projeto de canalização para sua casa em {ville}. Desde o esboço até à execução final com garantia.",
            "Instalação de canalização nova em {ville} com técnicas modernas que evitam futuros problemas."
        ],
        "services": [
            "🏗️ Instalação completa de canalização nova (água fria/quente)",
            "🔧 Substituição de tubos antigos (chumbo, ferro, PVC antigo)",
            "🚽 Ligação de sanitas, lavatórios, chuveiros e cozinhas",
            "💡 Projeto e dimensionamento correto da rede hidráulica",
            "📐 Instalação com tubos PEX, multicamada ou cobre",
            "📋 Certificação final e manual de utilização"
        ],
        "advantages": [
            "✅ Materiais certificados (Kite Mark, WRAS)",
            "✅ Garantia 10 anos na instalação",
            "✅ Projeto personalizado para sua casa em {ville}",
            "✅ Execução limpa e organizada",
            "✅ Cumprimento do Regulamento Geral das Edificações"
        ],
        "price_base": 100,
        "price_range": "100-200€"
    },
    "desentupimentos": {
        "name": "Desentupimentos",
        "title_prefix": "Desentupimentos",
        "meta_prefix": "Desentupimentos urgentes",
        "h1_prefix": "Desentupimentos em",
        "intro_templates": [
            "Entupimento em {ville}? Máquina Ridgid profissional resolve em minutos. Atendo urgências 24h.",
            "Sanita, ralo ou esgoto entupido em {ville}? Intervenho rapidamente com equipamento de alta pressão.",
            "Desentupimentos profissionais em {ville} sem produtos químicos. Preservo suas tubagens.",
            "Problema de entupimento em {ville}? Câmara de inspeção identifica a causa exata."
        ],
        "services": [
            "🚽 Desentupimento de sanitas e autoclismos",
            "🚿 Limpeza de ralos de chuveiros, banheiras e lava-loiças",
            "🏠 Desentupimento da rede geral de esgotos",
            "📹 Inspeção com câmara para diagnóstico preciso",
            "💪 Máquina Ridgid K-6200 (até 60 metros)",
            "🧹 Limpeza profunda com jato de alta pressão"
        ],
        "advantages": [
            "✅ Máquina Ridgid profissional (3.500€)",
            "✅ Sem produtos químicos que danificam tubos",
            "✅ Câmara de inspeção incluída",
            "✅ Atendimento urgente 24h em {ville}",
            "✅ Garantia 6 meses no serviço"
        ],
        "price_base": 60,
        "price_range": "60-90€"
    },
    "instalacao-casa-banho": {
        "name": "Instalação Casa de Banho",
        "title_prefix": "Instalação Casa de Banho",
        "meta_prefix": "Instalação completa de casa de banho",
        "h1_prefix": "Instalação Casa de Banho em",
        "intro_templates": [
            "Reforma da casa de banho em {ville}? Instalação completa com acabamento profissional e garantia.",
            "Nova casa de banho em {ville}? Desde a canalização até aos acabamentos finais.",
            "Substituição de sanita, lavatório ou chuveiro em {ville}? Instalação rápida e limpa.",
            "Projeto de casa de banho em {ville} com otimização de espaço e funcionalidade."
        ],
        "services": [
            "🚽 Instalação completa de sanitas (suspensas ou de pé)",
            "🚿 Colocação de chuveiros, banheiras e bases de duche",
            "💧 Instalação de lavatórios e móveis de casa de banho",
            "🔧 Ligação de toda a canalização (água fria/quente)",
            "📐 Acabamentos em silicone profissional e rejunte",
            "💡 Instalação de espelhos, prateleiras e acessórios"
        ],
        "advantages": [
            "✅ Acabamento profissional tipo hotel",
            "✅ Garantia 3 anos na instalação",
            "✅ Materiais de qualidade (Roca, Sanindusa, Grohe)",
            "✅ Respeito pelos prazos combinados",
            "✅ Limpeza total após conclusão"
        ],
        "price_base": 150,
        "price_range": "150-300€"
    }
}

# Villes par service
PAGES_TO_CREATE = [
    # Esquentadores/Caldeiras
    ("esquentadores", "Chaves"),
    ("esquentadores", "Lamego"),
    ("esquentadores", "Macedo"),
    ("esquentadores", "Mogadouro"),
    
    # Fugas de Água
    ("fugas-agua", "Chaves"),
    ("fugas-agua", "Lamego"),
    ("fugas-agua", "Macedo"),
    
    # Canalização Nova
    ("canalizacao-nova", "Chaves"),
    ("canalizacao-nova", "Lamego"),
    ("canalizacao-nova", "Macedo"),
    
    # Desentupimentos
    ("desentupimentos", "Chaves"),
    ("desentupimentos", "Lamego"),
    ("desentupimentos", "Macedo"),
    
    # Instalação Casa de Banho
    ("instalacao-casa-banho", "Bragança"),
    ("instalacao-casa-banho", "Vila Real")
]

def generate_slug(service, ville):
    """Génère le slug de la page"""
    service_slug = service.replace(" ", "-").lower()
    ville_slug = ville.lower().replace(" ", "-").replace("ç", "c").replace("ã", "a").replace("é", "e").replace("ê", "e")
    return f"{service_slug}-{ville_slug}.html"

def get_zone_info(ville):
    """Récupère les informations de zone pour une ville"""
    ville_key = ville.split()[0] if " " in ville else ville
    for key, info in ZONES.items():
        if ville_key in key:
            return info
    # Fallback pour les villes non listées
    return {"zone": 4, "deslocacao": 35, "km": 70, "min": 60}

def generate_unique_content(service_info, ville, zone_info):
    """Génère du contenu unique pour chaque page"""
    import random
    
    # Sélection aléatoire d'un template d'intro
    intro_template = random.choice(service_info["intro_templates"])
    intro = intro_template.format(ville=ville, base=SITE_CONFIG["base"], min=zone_info["min"])
    
    # Génération de variations pour les services
    services = service_info["services"].copy()
    if random.random() > 0.5:
        services.append("📞 Atendimento personalizado e orçamento gratuito")
    
    # Génération de variations pour les avantages
    advantages = [adv.format(ville=ville) for adv in service_info["advantages"]]
    
    # Prix ajusté selon la zone
    price_adjusted = service_info["price_base"] + zone_info["deslocacao"]
    price_range = f"{price_adjusted}-{price_adjusted + 70}€"
    
    return {
        "intro": intro,
        "services": services,
        "advantages": advantages,
        "price_range": price_range,
        "price_adjusted": price_adjusted
    }

def generate_html_page(service_key, ville):
    """Génère le HTML complet pour une page"""
    service_info = SERVICES[service_key]
    zone_info = get_zone_info(ville)
    content = generate_unique_content(service_info, ville, zone_info)
    
    slug = generate_slug(service_info["title_prefix"].lower(), ville)
    title = f"{service_info['title_prefix']} {ville} | Canalizador"
    meta_desc = f"{service_info['meta_prefix']} em {ville}. Atendimento urgente {zone_info['min']}min. +351 928 484 451"
    h1 = f"{service_info['h1_prefix']} {ville}"
    
    # Génération du FAQ
    faq_questions = [
        f"Quanto custa {service_info['name'].lower()} em {ville}?",
        f"Quanto tempo demora a intervenção em {ville}?",
        f"Tem garantia no serviço em {ville}?"
    ]
    
    faq_answers = [
        f"O preço para {service_info['name'].lower()} em {ville} varia entre {content['price_range']}, incluindo deslocação de {zone_info['deslocacao']}€. Orçamento gratuito.",
        f"Em {ville}, a maioria das intervenções demora entre 1-3 horas. Urgências são atendidas em {zone_info['min']} minutos.",
        f"Sim, todas as intervenções em {ville} têm garantia entre 6 meses e 10 anos, conforme o serviço."
    ]
    
    # Schema.org
    schema_plumber = {
        "@context": "https://schema.org",
        "@type": "Plumber",
        "name": f"{service_info['title_prefix']} {ville}",
        "telephone": SITE_CONFIG["tel"],
        "areaServed": {
            "@type": "City",
            "name": ville
        },
        "priceRange": content["price_range"]
    }
    
    schema_breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Página Inicial",
                "item": f"https://{SITE_CONFIG['domain']}/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": service_info["name"],
                "item": f"https://{SITE_CONFIG['domain']}/{service_key}.html"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": ville,
                "item": f"https://{SITE_CONFIG['domain']}/{slug}"
            }
        ]
    }
    
    schema_faq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": faq_questions[i],
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq_answers[i]
                }
            } for i in range(3)
        ]
    }
    
    # Génération du HTML
    html = f'''<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{meta_desc}">
<meta name="keywords" content="canalizador {ville.lower()}, {service_info['name'].lower()} {ville.lower()}, {service_info['title_prefix'].lower()} {ville.lower()}, trás-os-montes {ville.lower()}, reparação {ville.lower()}">
<link rel="canonical" href="https://{SITE_CONFIG['domain']}/{slug}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//fonts.gstatic.com">
<script type="application/ld+json">
{json.dumps(schema_plumber, indent=2, ensure_ascii=False)}
</script>
<script type="application/ld+json">
{json.dumps(schema_breadcrumb, indent=2, ensure_ascii=False)}
</script>
<script type="application/ld+json">
{json.dumps(schema_faq, indent=2, ensure_ascii=False)}
</script>
<style>
body {{
    margin: 0;
    font-family: Arial, sans-serif;
    color: #333;
    line-height: 1.6;
}}
.hero {{
    background: linear-gradient(135deg, {SITE_CONFIG['color']} 0%, #6dd5ed 100%);
    color: white;
    padding: 60px 20px;
    text-align: center;
}}
.hero h1 {{
    font-size: 42px;
    margin: 0 0 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}}
.hero p {{
    font-size: 20px;
    margin: 10px 0;
}}
.cta-hero {{
    display: inline-block;
    background: white;
    color: {SITE_CONFIG['color']};
    padding: 20px 50px;
    border-radius: 50px;
    font-size: 26px;
    font-weight: bold;
    text-decoration: none;
    margin: 20px 10px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    transition: transform 0.3s;
}}
.cta-hero:hover {{
    transform: translateY(-3px);
}}
.whatsapp-cta {{
    display: inline-block;
    background: #25D366;
    color: white;
    padding: 20px 50px;
    border-radius: 50px;
    font-size: 26px;
    font-weight: bold;
    text-decoration: none;
    margin: 20px 10px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    transition: transform 0.3s;
}}
.whatsapp-cta:hover {{
    transform: translateY(-3px);
}}
.content {{
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
}}
.urgence {{
    background: #fff3cd;
    border-left: 5px solid #ffc107;
    padding: 25px;
    margin: 30px 0;
    border-radius: 8px;
}}
.equipment {{
    background: #f0f8ff;
    border: 3px solid {SITE_CONFIG['color']};
    padding: 30px;
    border-radius: 10px;
    margin: 30px 0;
}}
.price-table {{
    background: #fafafa;
    padding: 30px;
    border-radius: 10px;
    margin: 30px 0;
    border: 2px solid #e0e0e0;
}}
.testimonial {{
    background: white;
    padding: 20px;
    margin: 15px 0;
    border-radius: 8px;
    border-left: 4px solid #FFD700;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}}
.footer {{
    background: #1a1a1a;
    color: white;
    padding: 30px;
    text-align: center;
}}
.premium-badge {{
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    border: 2px solid {SITE_CONFIG['color']};
    border-radius: 12px;
    padding: 20px 25px;
    margin: 25px 0;
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
}}
.service-grid {{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin: 30px 0;
}}
.service-card {{
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    transition: transform 0.3s;
}}
.service-card:hover {{
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}}
.floating-buttons {{
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    z-index: 1000;
}}
.floating-button {{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: transform 0.3s;
}}
.floating-button:hover {{
    transform: scale(1.1);
}}
.whatsapp-float {{
    background: #25D366;
    color: white;
}}
.phone-float {{
    background: {SITE_CONFIG['color']};
    color: white;
}}
.faq-section {{
    background: #f8f9fa;
    padding: 30px;
    border-radius: 10px;
    margin: 30px 0;
}}
.faq-item {{
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #dee2e6;
}}
.faq-question {{
    font-weight: bold;
    color: {SITE_CONFIG['color']};
    margin-bottom: 10px;
    font-size: 18px;
}}
.faq-answer {{
    color: #666;
    line-height: 1.6;
}}
@media (max-width: 768px) {{
    .hero h1 {{
        font-size: 32px;
    }}
    .cta-hero, .whatsapp-cta {{
        padding: 15px 30px;
        font-size: 20px;
        display: block;
        margin: 10px auto;
        width: 90%;
        max-width: 300px;
    }}
    .premium-badge {{
        flex-direction: column;
        text-align: center;
    }}
    .floating-buttons {{
        bottom: 20px;
        right: 20px;
    }}
}}
</style>
</head>
<body>
<div class="hero">
<h1>💧 {h1}</h1>
<div class="premium-badge">
<div style="font-size:40px">🔬</div>
<div>
<div style="color:{SITE_CONFIG['color']};font-weight:bold;font-size:18px;margin-bottom:3px">DIAGNÓSTICO PREMIUM — Tecnologia de Última Geração</div>
<div style="color:#ccc;font-size:14px">{SITE_CONFIG['badge_text']} — <a href="/tecnologia-premium" style="color:{SITE_CONFIG['color']};text-decoration:underline">Ver equipamento completo →</a></div>
</div>
</div>
<p>Disponível 24h | Equipamento Profissional | Chego em {zone_info['min']} minutos</p>
<a href="tel:{SITE_CONFIG['tel']}" class="cta-hero">📞 {SITE_CONFIG['tel']}</a>
<a href="{SITE_CONFIG['whatsapp']}?text=Preciso%20{service_info['name'].lower().replace(' ', '%20')}%20{ville}" class="whatsapp-cta">💬 WhatsApp</a>
</div>

<section class="content">
<div class="urgence">
<h2 style="margin:0 0 10px;color:#856404">⚠️ Urgência em {ville}?</h2>
<p style="font-size:18px;margin:0;color:#856404"><strong>Atendo em {zone_info['min']} minutos!</strong> Ligue agora: <a href="tel:{SITE_CONFIG['tel']}" style="color:#856404;font-weight:bold">{SITE_CONFIG['tel']}</a></p>
</div>

<h2>{service_info['name']} Profissionais em {ville}</h2>
<p style="font-size:18px;line-height:1.8">
{content['intro']}
</p>

<div class="equipment">
<h3 style="color:{SITE_CONFIG['color']};font-size:24px;margin:0 0 15px;text-align:center">
🔧 EQUIPAMENTO PROFISSIONAL
</h3>
<p style="font-size:16px;line-height:1.8;text-align:center;margin-bottom:20px">
Poucos canalizadores em {ville} têm este nível de equipamento. <strong>Resolvo o que outros não conseguem.</strong>
</p>
<ul style="font-size:16px;line-height:2">
<li>💪 <strong>Ridgid K-6200</strong> - Para desentupimentos profundos</li>
<li>📹 <strong>Câmara de Inspeção HD</strong> - Diagnóstico visual preciso</li>
<li>🔬 <strong>Câmara Térmica VEVOR</strong> - Deteção de fugas ocultas</li>
<li>🛠️ <strong>Ferramentas Profissionais</strong> - Trabalho de qualidade garantida</li>
</ul>
</div>

<h2>Serviços Especializados em {ville}</h2>
<div class="service-grid">
'''

    # Ajouter les services
    for i, service in enumerate(content['services'][:6]):
        html += f'''<div class="service-card">
<h3 style="color:{SITE_CONFIG['color']}">{service.split()[0]} {service.split()[1] if len(service.split()) > 1 else ''}</h3>
<p>{' '.join(service.split()[2:]) if len(service.split()) > 2 else service}</p>
<p style="font-size:14px;color:#666">Desde {content['price_adjusted'] + i*10}€</p>
</div>
'''

    html += f'''</div>

<div class="price-table">
<h3 style="color:#333;font-size:24px;text-align:center;margin:0 0 20px">💶 Preços em {ville} (2026)</h3>
<table style="width:100%;border-collapse:collapse">
<tr style="background:{SITE_CONFIG['color']};color:white">
<th style="padding:15px;text-align:left">Serviço</th>
<th style="padding:15px">Preço</th>
<th style="padding:15px">Tempo</th>
</tr>
<tr style="border-bottom:1px solid #ddd">
<td style="padding:15px">{service_info['name']} simples</td>
<td style="padding:15px;text-align:center"><strong>{content['price_range']}</strong></td>
<td style="padding:15px;text-align:center">1-2h</td>
</tr>
<tr style="background:#f9f9f9;border-bottom:1px solid #ddd">
<td style="padding:15px">{service_info['name']} complexo</td>
<td style="padding:15px;text-align:center"><strong>{content['price_adjusted'] + 50}-{content['price_adjusted'] + 120}€</strong></td>
<td style="padding:15px;text-align:center">2-4h</td>
</tr>
<tr style="border-bottom:1px solid #ddd">
<td style="padding:15px">+ Diagnóstico avançado</td>
<td style="padding:15px;text-align:center"><strong>+{zone_info['deslocacao']}€</strong></td>
<td style="padding:15px;text-align:center">+30 min</td>
</tr>
<tr style="background:#f9f9f9">
<td style="padding:15px">Serviço urgente 24h</td>
<td style="padding:15px;text-align:center"><strong>+30%</strong></td>
<td style="padding:15px;text-align:center">Chego em {zone_info['min']}min</td>
</tr>
</table>
<p style="font-size:14px;color:#666;margin-top:15px;text-align:center">
✅ Deslocação: {zone_info['deslocacao']}€ ({zone_info['km']}km) | ✅ Orçamento sem compromisso
</p>
</div>

<h2>Vantagens em {ville}</h2>
<div style="background:#f0f8ff;padding:30px;border-radius:10px;margin:30px 0">
<ul style="font-size:16px;line-height:2;margin:0;padding-left:20px">
'''

    # Ajouter les avantages
    for advantage in content['advantages']:
        html += f'<li>{advantage}</li>\n'

    html += f'''</ul>
</div>

<div style="background:#f0f8ff;padding:30px;border-radius:10px;margin:30px 0">
<h3 style="color:#333">💬 Clientes em {ville}</h3>
<div class="testimonial">
<div style="color:#FFD700;font-size:18px;margin-bottom:10px">⭐⭐⭐⭐⭐</div>
<p style="margin:0 0 10px">"Problema resolvido rapidamente em {ville}. Equipamento profissional e atendimento excelente. Recomendo!"</p>
<p style="font-size:14px;color:#999;margin:0">— Cliente satisfeito, {ville}</p>
</div>
<div class="testimonial">
<div style="color:#FFD700;font-size:18px;margin-bottom:10px">⭐⭐⭐⭐⭐</div>
<p style="margin:0 0 10px">"Já tinha tentado outros em {ville}. Este resolveu com tecnologia moderna. Preço justo e trabalho limpo."</p>
<p style="font-size:14px;color:#999;margin:0">— Outro cliente, {ville}</p>
</div>
</div>

<div class="faq-section">
<h3 style="color:#333;margin-top:0">❓ Perguntas Frequentes em {ville}</h3>
'''

    # Ajouter le FAQ
    for i in range(3):
        html += f'''<div class="faq-item">
<div class="faq-question">{faq_questions[i]}</div>
<div class="faq-answer">{faq_answers[i]}</div>
</div>
'''

    html += f'''</div>

<div style="text-align:center;padding:40px;background:#f5f5f5;border-radius:10px">
<h2 style="color:#333;margin:0 0 20px">{service_info['name']} em {ville}? Ligue JÁ!</h2>
<a href="tel:{SITE_CONFIG['tel']}" style="display:inline-block;background:{SITE_CONFIG['color']};color:white;padding:25px 50px;border-radius:50px;font-size:28px;font-weight:bold;text-decoration:none;margin:10px;box-shadow:0 6px 20px rgba(33,147,176,0.4)">📞 {SITE_CONFIG['tel']}</a>
<p style="margin-top:15px;font-size:16px;color:#666">Disponível 24h/7d | Chego em {zone_info['min']} minutos desde {SITE_CONFIG['base']}</p>
</div>
</section>

<footer class="footer">
<p><strong>{service_info['name']} Profissionais em {ville}</strong></p>
<p style="font-size:14px;opacity:0.7;margin-top:10px">💧 Equipamento Ridgid Profissional | 📹 Câmara Inspeção HD | 🔬 Tecnologia Térmica</p>

<div style="margin-top:40px;padding:25px;background:#f5f5f5;border-radius:10px">
<h3 style="color:#333;margin-top:0">🏙️ Canalizador Noutras Cidades</h3>
<p style="font-size:15px;line-height:2">
<a href="/canalizador-braganca.html" style="color:{SITE_CONFIG['color']};text-decoration:none">Bragança</a> • <a href="/canalizador-chaves.html" style="color:{SITE_CONFIG['color']};text-decoration:none">Chaves</a> • <a href="/canalizador-macedo-cavaleiros.html" style="color:{SITE_CONFIG['color']};text-decoration:none">Macedo</a> • <a href="/canalizador-mirandela.html" style="color:{SITE_CONFIG['color']};text-decoration:none">Mirandela</a> • <a href="/canalizador-mogadouro.html" style="color:{SITE_CONFIG['color']};text-decoration:none">Mogadouro</a> • <a href="/canalizador-torre-moncorvo.html" style="color:{SITE_CONFIG['color']};text-decoration:none">Torre de Moncorvo</a> • <a href="/canalizador-vila-real.html" style="color:{SITE_CONFIG['color']};text-decoration:none">Vila Real</a> • <a href="/canalizador-vinhais.html" style="color:{SITE_CONFIG['color']};text-decoration:none">Vinhais</a>
</p>
<h3 style="color:#333">📝 Artigos Úteis</h3>
<p style="font-size:15px;line-height:2">
<a href="/blog/fuga-agua-casa-o-que-fazer.html" style="color:{SITE_CONFIG['color']};text-decoration:none">Fuga de Água? O Que Fazer</a> • <a href="/blog/preco-canalizador-tras-os-montes.html" style="color:{SITE_CONFIG['color']};text-decoration:none">Preços Canalizador 2026</a> • <a href="/blog/blog-desentupir-sem-quimicos.html" style="color:{SITE_CONFIG['color']};text-decoration:none">Desentupir Sem Químicos</a>
</p>
<p style="text-align:center;margin-top:15px"><a href="/sobre-mim" style="color:{SITE_CONFIG['color']};text-decoration:none">Sobre Mim</a> • <a href="/" style="color:{SITE_CONFIG['color']};font-weight:700;text-decoration:none">← Página Inicial</a></p>
</div>
</footer>

<!-- Floating buttons -->
<div class="floating-buttons">
<a href="{SITE_CONFIG['whatsapp']}?text=Preciso%20{service_info['name'].lower().replace(' ', '%20')}%20{ville}" class="floating-button whatsapp-float" title="WhatsApp">
💬
</a>
<a href="tel:{SITE_CONFIG['tel']}" class="floating-button phone-float" title="Telefone">
📞
</a>
</div>

</body>
</html>'''
    
    return html, slug

def main():
    """Fonction principale"""
    import json
    import os
    
    print("🚀 Génération des 15 pages service+ville pour Norte-Reparos.com")
    print("=" * 60)
    
    # Vérifier le répertoire de destination
    output_dir = os.path.expanduser("~/projects/norte-reparos/dist/public")
    os.makedirs(output_dir, exist_ok=True)
    
    created_pages = []
    
    for service_key, ville in PAGES_TO_CREATE:
        print(f"\n📄 Création: {service_key} - {ville}")
        
        # Générer la page
        html, slug = generate_html_page(service_key, ville)
        
        # Sauvegarder le fichier
        output_path = os.path.join(output_dir, slug)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(html)
        
        print(f"   ✅ Fichier créé: {slug}")
        print(f"   📍 Chemin: {output_path}")
        
        created_pages.append({
            "service": service_key,
            "ville": ville,
            "slug": slug,
            "path": output_path
        })
    
    # Générer un rapport
    print("\n" + "=" * 60)
    print("📊 RAPPORT DE CRÉATION")
    print("=" * 60)
    
    for page in created_pages:
        print(f"• {page['service']} - {page['ville']}: {page['slug']}")
    
    print(f"\n🎉 Total: {len(created_pages)} pages créées avec succès!")
    
    # Instructions pour Git
    print("\n📝 Pour commiter et pousser les changements:")
    print("cd ~/projects/norte-reparos")
    print("git add -A")
    print('git commit -m "SEO: 15 pages service+ville"')
    print("git push origin main")
    
    return created_pages

if __name__ == "__main__":
    main()