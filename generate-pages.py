#!/usr/bin/env python3
"""Generate service+ville, innovative, and problem pages for Norte-Reparos."""
import os

PHONE = "928 484 451"
PHONE_INTL = "+351928484451"
WA = "https://wa.me/351928484451"
SITE = "norte-reparos.com"
BRAND = "Norte Reparos"
COLOR = "#0e7490"
FB = "https://www.facebook.com/nortereparoscanalizador"
OUT = "client/public"

def page_html(slug, title, desc, keywords, h1, intro, sections, faq, internal_links, schema_type="Plumber", city=None):
    """Generate a full HTML page."""
    faq_html = ""
    faq_schema = ""
    if faq:
        faq_html = '<section class="faq"><h2>Perguntas Frequentes</h2>\n'
        faq_items = []
        for q, a in faq:
            faq_html += f'<details><summary>{q}</summary><p>{a}</p></details>\n'
            faq_items.append(f'{{"@type":"Question","name":"{q}","acceptedAnswer":{{"@type":"Answer","text":"{a}"}}}}')
        faq_html += '</section>\n'
        faq_schema = f''',{{
"@type": "FAQPage",
"mainEntity": [{",".join(faq_items)}]
}}'''

    sections_html = ""
    for sh2, content in sections:
        sections_html += f'<section><h2>{sh2}</h2>\n{content}\n</section>\n'

    links_html = ""
    if internal_links:
        links_html = '<nav class="related"><h2>Serviços Relacionados</h2><ul>\n'
        for text, href in internal_links:
            links_html += f'<li><a href="/{href}">{text}</a></li>\n'
        links_html += '</ul></nav>\n'

    area_served = ""
    if city:
        area_served = f'"areaServed":{{"@type":"City","name":"{city}"}},'

    return f'''<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{desc}" />
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{desc}" />
<meta property="og:url" content="https://{SITE}/{slug}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="pt_PT">
<meta property="og:site_name" content="{BRAND} - Canalizador Profissional" />
<meta name="keywords" content="{keywords}" />
<link rel="canonical" href="https://{SITE}/{slug}">
<link rel="stylesheet" href="/styles.css">
<script type="application/ld+json">
[{{
"@context":"https://schema.org",
"@type":"{schema_type}",
"name":"Canalizador Profissional Trás-os-Montes",
"telephone":"{PHONE_INTL}",
"url":"https://{SITE}/{slug}",
"address":{{"@type":"PostalAddress","addressLocality":"{city or 'Macedo de Cavaleiros'}","addressRegion":"Trás-os-Montes","addressCountry":"PT"}},
{area_served}
"description":"{desc}",
"priceRange":"€€",
"paymentAccepted":"Dinheiro, Multibanco, MB Way, Transferência Bancária",
"currenciesAccepted":"EUR",
"sameAs":["{FB}"]
}}{faq_schema}]
</script>
</head>
<body>
<main>
<nav class="breadcrumb" aria-label="Breadcrumb">
<a href="/">Início</a> &rsaquo; <span>{h1}</span>
</nav>

<article>
<h1>{h1}</h1>
<p class="intro">{intro}</p>

<div class="cta-box">
<a href="tel:{PHONE_INTL}" class="btn-phone">📞 Ligar Agora: {PHONE}</a>
<a href="{WA}" class="btn-whatsapp" target="_blank" rel="noopener">💬 WhatsApp</a>
</div>

{sections_html}
{faq_html}

<div class="cta-box">
<h2>Precisa de Ajuda? Contacte-nos!</h2>
<p>Orçamento sem compromisso. Respondemos em menos de 30 minutos.</p>
<a href="tel:{PHONE_INTL}" class="btn-phone">📞 {PHONE}</a>
<a href="{WA}" class="btn-whatsapp" target="_blank" rel="noopener">💬 WhatsApp</a>
</div>

{links_html}
</article>
</main>

<footer>
<p>&copy; 2026 {BRAND} — Canalizador Profissional em Trás-os-Montes</p>
<p><a href="/">Início</a> | <a href="/areas-atuacao">Áreas de Atuação</a> | <a href="/orcamento">Orçamento</a></p>
</footer>
</body>
</html>'''


# Will be continued in next chunk - page definitions
