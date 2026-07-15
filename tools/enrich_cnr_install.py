#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Differentiate CNR installation/devis city pages (vague 1).

This script patches only existing canonical ``client/public/canalizador-<slug>.html``
pages. It does not create doorway pages, call Indexing API, or infer business
values: zone/price comes from precos-zonas.json and road distance/response data
comes from the audited TomTom file.
"""
from __future__ import annotations

import argparse
import json
import re
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "client" / "public"
PRECOS = ROOT / "precos-zonas.json"
TOMTOM = Path.home() / "work" / "Sites" / "_audit" / "zonas-distances-concelhos.json"
GRILLE = {1: 15, 2: 25, 3: 35, 4: 45, 5: 55, 6: 65}
TARIF_HORA = 65
NAP = "+351 928 484 451"
E164 = "+351928484451"

TARGETS = [
    # 30 existing city pages covered by the audited TomTom concelho source.
    # Foz Côa (Guarda), São João da Pesqueira and Penedono are deliberately
    # outside this installation-intent core; Tarouca has no audited road row.
    "macedo-de-cavaleiros", "mirandela", "alfandega-da-fe", "vila-flor", "braganca",
    "valpacos", "mogadouro", "vinhais", "carrazeda-de-ansiaes", "torre-de-moncorvo",
    "murca", "vimioso", "alijo", "chaves", "sabrosa", "vila-real", "vila-pouca-de-aguiar",
    "miranda-do-douro", "freixo-de-espada-a-cinta", "peso-da-regua", "boticas",
    "santa-marta-de-penaguiao", "tabuaco", "lamego", "armamar", "montalegre", "mesao-frio",
    "sernancelhe", "ribeira-de-pena", "mondim-de-basto",
]

def slugify(value: str) -> str:
    value = unicodedata.normalize("NFKD", value)
    value = "".join(c for c in value if not unicodedata.combining(c)).lower()
    return re.sub(r"[^a-z0-9]+", "-", value).strip("-")


def title_name(slug: str, names: dict[str, str]) -> str:
    return names.get(slug, slug.replace("-", " ").title())


def load_sources() -> tuple[dict[str, dict], dict[str, str]]:
    raw_prices = json.loads(PRECOS.read_text(encoding="utf-8"))
    names = {slugify(name): name for name in raw_prices}
    road = json.loads(TOMTOM.read_text(encoding="utf-8"))["concelhos"]
    rows: dict[str, dict] = {}
    for name, item in road.items():
        slug = item["slug"]
        zone = raw_prices.get(name)
        if not isinstance(zone, int):
            normalized_name = unicodedata.normalize("NFKD", name)
            normalized_name = "".join(c for c in normalized_name if not unicodedata.combining(c))
            zone = raw_prices.get(normalized_name)
        if not isinstance(zone, int):
            raise ValueError(f"No source zone for {name}")
        rows[slug] = {
            "name": name,
            "zone": zone,
            "desloc": GRILLE[zone],
            "km": float(item["km"]),
            "minutes": int(item["temps_min"]),
            "district": item.get("distrito", "Trás-os-Montes"),
        }
    return rows, names


def escape_json(value: object) -> str:
    return json.dumps(value, ensure_ascii=False, separators=(",", ":"))


def local_business(row: dict, slug: str) -> dict:
    name = row["name"]
    return {
        "@type": "LocalBusiness",
        "@id": f"https://canalizador-norte-reparos.pt/#localbusiness-{slug}",
        "name": f"Norte Reparos — Canalizador {name}",
        "url": f"https://canalizador-norte-reparos.pt/canalizador-{slug}",
        "telephone": NAP,
        "priceRange": "€€",
        "address": {"@type": "PostalAddress", "addressLocality": name, "addressRegion": row["district"], "addressCountry": "PT"},
        "areaServed": {"@type": "AdministrativeArea", "name": f"Concelho de {name}"},
        "openingHoursSpecification": {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:00", "closes": "18:00"},
        "sameAs": ["https://eletricista-norte-reparos.pt", "https://canalizador-urgente.pt", "https://eletricista-urgente.pt"],
    }


def faq_schema(row: dict) -> dict:
    n, z, price = row["name"], row["zone"], row["desloc"]
    entries = [
        (f"Quanto custa um canalizador em {n}?", f"O preço depende do projeto e dos materiais. A referência de mão de obra é {TARIF_HORA} €/h e a deslocação para {n} é Zona {z}, {price} €. Enviamos orçamento por escrito antes de qualquer intervenção, sem surpresas."),
        (f"Fazem instalação de canalização em {n}?", f"Sim. Tratamos instalações sanitárias, remodelações e substituição de tubagem em {n}. Descreva o projeto e enviamos uma proposta escrita com mão de obra, materiais e âmbito claramente discriminados."),
        (f"Como pedir orçamento para uma instalação em {n}?", f"Contacte-nos pelo {NAP} ou WhatsApp e indique a localidade, o tipo de instalação e, se possível, fotografias. A nossa equipa analisa o pedido e envia orçamento por escrito antes do início."),
        (f"Qual é o preço de deslocação para {n}?", f"{n} corresponde à Zona {z}: {price} € de deslocação. A grelha de referência é Z1 15 €, Z2 25 €, Z3 35 €, Z4 45 €, Z5 55 € e Z6 65 €. O valor aplicável aparece no orçamento."),
        (f"Atendem uma urgência em {n}?", "Este domínio é dedicado a instalação, remodelação e orçamento programado. Para uma fuga ativa ou rotura, consulte o domínio dedicado canalizador-urgente.pt.")
    ]
    return {"@type": "FAQPage", "@id": f"https://canalizador-norte-reparos.pt/canalizador-{slugify(n)}#faq", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in entries]}


def howto_schema(row: dict) -> dict:
    n = row["name"]
    return {"@type": "HowTo", "name": f"Como preparar um pedido de instalação de canalização em {n}", "description": "Passos para reunir a informação necessária antes de pedir um orçamento de canalização.", "step": [
        {"@type": "HowToStep", "position": 1, "name": "Descrever o projeto", "text": f"Indique se o trabalho é em casa de banho, cozinha, lavandaria, rede de água ou esgoto em {n}."},
        {"@type": "HowToStep", "position": 2, "name": "Reunir medidas e fotografias", "text": "Envie medidas aproximadas, fotografias dos pontos de água e informação sobre a instalação existente."},
        {"@type": "HowToStep", "position": 3, "name": "Indicar materiais pretendidos", "text": "Diga se já escolheu torneiras, louça, esquentador, termoacumulador ou tubagem."},
        {"@type": "HowToStep", "position": 4, "name": "Pedir proposta escrita", "text": f"Contacte a nossa equipa pelo {NAP} para receber uma proposta discriminada antes de qualquer intervenção."},
    ]}


def graph(row: dict, slug: str) -> dict:
    n = row["name"]
    return {"@context": "https://schema.org", "@graph": [
        {"@type": "WebSite", "@id": "https://canalizador-norte-reparos.pt/#website", "url": "https://canalizador-norte-reparos.pt/", "name": "Norte Reparos", "inLanguage": "pt-PT"},
        {"@type": "Organization", "@id": "https://canalizador-norte-reparos.pt/#organization", "name": "Norte Reparos", "url": "https://canalizador-norte-reparos.pt/", "telephone": NAP, "sameAs": ["https://eletricista-norte-reparos.pt", "https://canalizador-urgente.pt", "https://eletricista-urgente.pt"]},
        local_business(row, slug),
        {"@type": "Service", "@id": f"https://canalizador-norte-reparos.pt/canalizador-{slug}#service", "name": f"Instalação de canalização em {n}", "serviceType": "Instalação e remodelação de canalização", "provider": {"@id": "https://canalizador-norte-reparos.pt/#organization"}, "areaServed": {"@type": "AdministrativeArea", "name": f"Concelho de {n}"}},
        faq_schema(row),
        howto_schema(row),
        {"@type": "WebPage", "@id": f"https://canalizador-norte-reparos.pt/canalizador-{slug}#webpage", "url": f"https://canalizador-norte-reparos.pt/canalizador-{slug}", "name": f"Canalizador em {n} — instalação e orçamento", "inLanguage": "pt-PT", "speakable": {"@type": "SpeakableSpecification", "cssSelector": [".geo-answer", ".geo-faq h2"]}},
    ]}


def block(row: dict, slug: str, all_rows: dict[str, dict]) -> str:
    n, z, price, km, minutes = row["name"], row["zone"], row["desloc"], row["km"], row["minutes"]
    # Deterministic sibling links from the same authoritative concelho set.
    siblings = sorted((r["km"], s, r["name"]) for s, r in all_rows.items() if s != slug)[:3]
    links = " ".join(f'<a href="/canalizador-{s}">Canalizador em {name}</a>' for _, s, name in siblings)
    return f'''\n<!-- GEO-DIFF CNR installation vague 1; generated from source-of-truth -->
<section class="geo-answer" aria-labelledby="geo-answer-title">
<h2 id="geo-answer-title">Quanto custa instalar canalização em {n}?</h2>
<p>Para um projeto em {n}, enviamos primeiro um orçamento por escrito com o âmbito, materiais e mão de obra discriminados. A referência de trabalho é <strong>{TARIF_HORA} €/h</strong>; esta localidade fica na <strong>Zona {z}</strong>, com deslocação de <strong>{price} €</strong>. A distância rodoviária auditada desde Macedo de Cavaleiros é de {km:.1f} km (cerca de {minutes} min), informação usada para contextualizar o pedido e não como promessa de prazo.</p>
<div class="geo-price-table"><strong>Referência de deslocação:</strong> Z1 15 € · Z2 25 € · Z3 35 € · Z4 45 € · Z5 55 € · Z6 65 €<br><strong>Condição:</strong> orçamento por escrito antes de qualquer intervenção, sem surpresas na fatura. Majoração noturna, fim de semana e feriado: +50%.</div>
</section>
<section class="geo-local-context"><h2>O que muda num projeto em {n}</h2><p>Em {n}, uma instalação pode envolver renovação de tubagem, preparação de pontos de água, remodelação de casa de banho ou ligação de equipamento. A proposta depende do traçado existente, do acesso e dos materiais escolhidos. A nossa equipa confirma estes elementos antes de apresentar o valor final.</p><ul><li>Levantamento do que já existe e do que precisa de ser instalado.</li><li>Separação clara entre mão de obra, materiais e deslocação Zona {z}.</li><li>Registo do que fica incluído e do que fica fora do âmbito.</li></ul></section>
<section class="geo-faq"><h2>Perguntas frequentes sobre canalização em {n}</h2><details open><summary>Quanto custa um canalizador em {n}?</summary><p>A referência é {TARIF_HORA} €/h de mão de obra e {price} € de deslocação Zona {z}; o projeto concreto é sempre orçamentado por escrito.</p></details><details><summary>Fazem instalações e remodelações em {n}?</summary><p>Sim. Analisamos instalações sanitárias, cozinhas, redes de água e substituição de tubagem antes de enviar uma proposta.</p></details><details><summary>Como recebem o pedido?</summary><p>Contacte-nos pelo {NAP} ou WhatsApp com a localidade, descrição e fotografias disponíveis. A nossa equipa responde com uma proposta escrita.</p></details></section>
<section class="geo-howto"><h2>Como pedir um orçamento de instalação em {n}</h2><ol><li>Descreva o espaço e a instalação pretendida.</li><li>Envie medidas ou fotografias dos pontos de água.</li><li>Indique materiais já escolhidos, se aplicável.</li><li>Peça o orçamento por escrito antes do início.</li></ol></section>
<nav class="geo-links" aria-label="Páginas locais relacionadas"><strong>Outras páginas locais:</strong> {links}</nav>
<!-- /GEO-DIFF CNR -->\n'''


def replace_once(content: str, pattern: str, replacement: str, flags: int = 0) -> tuple[str, bool]:
    updated, count = re.subn(pattern, replacement, content, count=1, flags=flags)
    return updated, bool(count)


def patch_page(row: dict, slug: str, all_rows: dict[str, dict], dry_run: bool) -> tuple[bool, list[str]]:
    path = PUBLIC / f"canalizador-{slug}.html"
    if not path.exists():
        return False, ["MISSING"]
    original = path.read_text(encoding="utf-8")
    content = original
    n, z, price, km, minutes = row["name"], row["zone"], row["desloc"], row["km"], row["minutes"]
    content, _ = replace_once(content, r"<title>.*?</title>", f"<title>Canalizador em {n} — instalação, orçamento e remodelação | Norte Reparos</title>", re.S)
    desc = f"Canalizador em {n} para instalação e remodelação. Zona {z} ({price} € deslocação), {TARIF_HORA} €/h de referência e orçamento por escrito antes de qualquer intervenção."
    if re.search(r'<meta\s+name=["\']description["\'][^>]*>', content, re.I):
        content, _ = replace_once(content, r'<meta\s+name=["\']description["\'][^>]*>', f'<meta name="description" content="{desc}">', re.I)
    else:
        content = content.replace("</head>", f'<meta name="description" content="{desc}">\n</head>', 1)
    # Ensure target page has a unique self canonical while preserving extensionless routing.
    canonical = f'<link rel="canonical" href="https://canalizador-norte-reparos.pt/canalizador-{slug}">'
    if re.search(r'<link\s+rel=["\']canonical["\'][^>]*>', content, re.I):
        content, _ = replace_once(content, r'<link\s+rel=["\']canonical["\'][^>]*>', canonical, re.I)
    else:
        content = content.replace("</head>", canonical + "\n</head>", 1)
    # Remove stale JSON-LD and add one valid graph. Existing pages in this family
    # contain malformed/truncated JSON-LD; keeping it would defeat the GEO gate.
    content = re.sub(r'<script\s+type=["\']application/ld\+json["\'][^>]*>.*?</script>', "", content, count=1, flags=re.I | re.S)
    content = content.replace("</head>", f'<script type="application/ld+json">{escape_json(graph(row, slug))}</script>\n</head>', 1)
    content = re.sub(r'\n<!-- GEO-DIFF CNR installation vague 1;.*?<!-- /GEO-DIFF CNR -->\n', "\n", content, count=1, flags=re.S)
    content = content.replace("</main>", block(row, slug, all_rows) + "\n</main>", 1) if "</main>" in content else content.replace("</body>", block(row, slug, all_rows) + "\n</body>", 1)
    if content == original:
        return False, ["NOOP"]
    if not dry_run:
        path.write_text(content, encoding="utf-8")
    return True, [f"{n}: Z{z}/{price}€; {km:.1f} km; ~{minutes} min", "title/meta/canonical + JSON-LD + GEO HTML"]


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--only", nargs="*", default=TARGETS)
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    rows, names = load_sources()
    selected = args.only or TARGETS
    print(f"BASELINE source: precos-zonas.json={len(json.loads(PRECOS.read_text()))}; TomTom concelhos={len(rows)}")
    print(f"TARGET existing canonical files: {sum((PUBLIC / f'canalizador-{s}.html').exists() for s in selected)}/{len(selected)}")
    modified = 0
    for slug in selected:
        if slug not in rows:
            print(f"SKIP {slug}: absent TomTom source")
            continue
        changed, messages = patch_page(rows[slug], slug, rows, args.dry_run)
        print(("DRY" if args.dry_run else "PATCHED") if changed else "SKIP", slug, "—", " | ".join(messages))
        modified += changed
    print(f"RESULT modified={modified} target={len(selected)} dry_run={args.dry_run}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
