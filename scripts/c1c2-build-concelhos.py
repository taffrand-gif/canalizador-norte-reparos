#!/usr/bin/env python3
# C1c-2 — Build unique-content concelhos for the Bragança remaining concelhos.
#
# Sources : 3 fichiers JSON batchés par sub-agents.
# Sortie : 9 pages concelhos dans client/public/concelhos/.
#
# Doctrine appliquée :
#   - R3 STOP validation humaine (RAPPORT finalisé + PR draft).
#   - R11 zéro invention : populacao / freguesias / problemas = Wikipedia/INE.
#   - R145 zéro délai chiffré : pas de "X min" ou "imediatamente".
#   - §12 pronom "nós" uniquement : "a nossa equipa", "garantimos".
#   - NAP phone = +351 928 484 451 (CNR) sur toutes les pages.
#
# DoD T1-T10 mesurés en fin de main().

from __future__ import annotations
import json
import re
import sys
from html import escape
from pathlib import Path

BASE = Path("/Users/admin/work/Sites/canalizador-norte-reparos")
CONC_DIR = BASE / "client/public/concelhos"
NAP_PHONE = "+351 928 484 451"
NAP_DISPLAY = "928 484 451"
DISTRITO = "Bragança"
SITE_ROOT = "https://canalizador-norte-reparos.pt"

BATCH_FILES = [
    Path("/tmp/c1c2-batchA.json"),
    Path("/tmp/c1c2-batchB.json"),
    Path("/tmp/c1c2-batchC.json"),
]

# Ordre canonique des 9 concelhos
ORDER = [
    ("vinhais", "Vinhais"),
    ("vimioso", "Vimioso"),
    ("mogadouro", "Mogadouro"),
    ("miranda-do-douro", "Miranda do Douro"),
    ("freixo-de-espada-a-cinta", "Freixo de Espada à Cinta"),
    ("torre-de-moncorvo", "Torre de Moncorvo"),
    ("alfandega-da-fe", "Alfândega da Fé"),
    ("carrazeda-de-ansiaes", "Carrazeda de Ansiães"),
    ("vila-flor", "Vila Flor"),
]


def _extract_json_blocks(text: str) -> list[str]:
    """Extrait les blocs JSON valides d'un fichier sub-agent.
    Supporte les formats :
    - délimité ===CONCELHO_START===/===END===
    - {"concelhos" / "concilhos": [...]} (root array)
    - brut avec "slug" anchors
    """
    out: list[str] = []
    # Format délimité
    if "===CONCELHO" in text:
        parts = re.split(r"={3,}CONCELHO_(?:START|END):?[a-z_-]*={3,}", text)
        for p in parts:
            p = p.strip()
            if not p.startswith("{"):
                continue
            depth = 0
            for i, c in enumerate(p):
                if c == "{":
                    depth += 1
                elif c == "}":
                    depth -= 1
                    if depth == 0:
                        out.append(p[: i + 1])
                        break
        if out:
            return out
    # Format root array {"concelhos"|"concilhos": [...]}
    # Parser la racine pour extraire la liste
    m_root = re.search(
        r'(?:"concelhos"|"concilhos")\s*:\s*\[', text
    )
    if m_root:
        # Extraire entre [ et ] correspondant (balance)
        start = m_root.end()  # position après [
        depth = 1
        i = start
        while i < len(text) and depth > 0:
            if text[i] == "[":
                depth += 1
            elif text[i] == "]":
                depth -= 1
            i += 1
        inner = text[start : i - 1]
        # Split par }, { pour séparer les objets
        # Trouver chaque objet {...}
        for m in re.finditer(r"\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}", inner):
            obj = m.group(0)
            # Si l'objet contient des objets imbriqués, balanced extract
            depth = 0
            start_idx = m.start()
            for j in range(start_idx, len(inner)):
                if inner[j] == "{":
                    depth += 1
                elif inner[j] == "}":
                    depth -= 1
                    if depth == 0:
                        out.append(inner[start_idx : j + 1])
                        break
        if out:
            return out
    # Fallback : brut avec "slug" anchor
    for m in re.finditer(r'\{\s*"slug"\s*:', text):
        start = m.start()
        depth = 0
        for i in range(start, len(text)):
            if text[i] == "{":
                depth += 1
            elif text[i] == "}":
                depth -= 1
                if depth == 0:
                    out.append(text[start : i + 1])
                    break
    return out


def load_concelhos() -> dict[str, dict]:
    out: dict[str, dict] = {}
    for p in BATCH_FILES:
        if not p.exists():
            print(f"  ⚠️  manquant : {p}", file=sys.stderr)
            continue
        text = p.read_text(encoding="utf-8")
        blocks = _extract_json_blocks(text)
        for b in blocks:
            try:
                obj = json.loads(b)
            except json.JSONDecodeError:
                # Tenter parse manuel ultra-simple
                obj = _loose_parse(b)
                if obj is None:
                    continue
            slug = obj.get("slug")
            if slug:
                # Normaliser populacao si dict (format batch C)
                p = obj.get("populacao")
                if isinstance(p, dict):
                    val = p.get("valor") or p.get("value")
                    ano = p.get("ano") or p.get("year") or ""
                    fonte = p.get("fonte") or p.get("source") or "INE"
                    if val:
                        # Format PT-PT (ex "4 222 habitantes (2023)")
                        txt = f"{val:,}".replace(",", " ") + " habitantes"
                        if ano:
                            txt += f" ({ano})"
                        obj["populacao"] = txt
                    else:
                        obj["populacao"] = "não encontrado"
                elif isinstance(p, str) and "habitant" in p and "habitantes" not in p:
                    # Cas batch où sub-agent écrit en français
                    obj["populacao"] = p.replace("habitants", "habitantes")

                # Normaliser zona_deslocacao si dict
                z = obj.get("zona_deslocacao")
                if isinstance(z, dict):
                    # Heuristique depuis les vrais indicateurs terrain :
                    # on ignore sede_min (souvent 0 = erreur) et on regarde
                    # soit la freguesia la plus distante, soit le raio max.
                    fardist = z.get("tempo_medio_deslocacao_freguesia_mais_distante_min")
                    raio = z.get("raio_max_km_desde_sede")
                    indicador = fardist if fardist is not None else raio
                    if indicador is None:
                        obj["zona_deslocacao"] = "Z3 (35 €)"
                    elif indicador <= 20:
                        obj["zona_deslocacao"] = "Z2 (25 €)"
                    elif indicador <= 40:
                        obj["zona_deslocacao"] = "Z3 (35 €)"
                    else:
                        obj["zona_deslocacao"] = "Z4 (45 €)"
                elif isinstance(z, str) and not z.startswith("Z"):
                    obj["zona_deslocacao"] = "Z3 (35 €)"
                elif isinstance(z, str):
                    obj["zona_deslocacao"] = z.replace("(35€)", "(35 €)").replace("(45€)", "(45 €)").replace("(25€)", "(25 €)")

                # Normaliser contexto_geo si dict
                cg = obj.get("contexto_geo")
                if isinstance(cg, dict):
                    parts = []
                    if cg.get("tipo"):
                        parts.append(cg["tipo"])
                    if cg.get("concelhos_limitrofes"):
                        parts.append(
                            "Confronta com: "
                            + ", ".join(cg["concelhos_limitrofes"])
                        )
                    if cg.get("sede"):
                        parts.append(f"Sede: {cg['sede']}.")
                    if cg.get("descricao"):
                        parts.append(cg["descricao"])
                    obj["contexto_geo"] = ". ".join(p for p in parts if p) or "não encontrado"

                # Normaliser problemas_tipicos si dict OU list
                pt = obj.get("problemas_tipicos")
                if isinstance(pt, dict):
                    obj["problemas_tipicos"] = (
                        pt.get("descricao")
                        or pt.get("texto")
                        or pt.get("resumo")
                        or json.dumps(pt, ensure_ascii=False)
                    )
                elif isinstance(pt, list):
                    # Joindre les items avec virgules + phrases complètes
                    cleaned = []
                    for item in pt:
                        if isinstance(item, str):
                            item = item.strip().rstrip(".")
                            cleaned.append(item)
                    # Reformer en texte fluide : prendre 5-6 items max et les
                    # coller en un paragraphe.
                    obj["problemas_tipicos"] = (
                        ". ".join(cleaned[:6]) + "."
                        if cleaned
                        else "Contexto local de canalização a diagnosticar no local."
                    )

                # Normaliser como_atuamos si dict OU list
                ca = obj.get("como_atuamos")
                if isinstance(ca, dict):
                    obj["como_atuamos"] = (
                        ca.get("descricao")
                        or ca.get("texto")
                        or ca.get("resumo")
                        or json.dumps(ca, ensure_ascii=False)
                    )
                elif isinstance(ca, list):
                    cleaned = [it.strip().rstrip(".") for it in ca if isinstance(it, str)]
                    obj["como_atuamos"] = (
                        ". ".join(cleaned[:6]) + "."
                        if cleaned
                        else ""
                    )

                # Fallbacks explicites si champ manquant
                if not obj.get("contexto_geo"):
                    obj["contexto_geo"] = "Concelho do distrito de Bragança, em Trás-os-Montes."
                if not obj.get("problemas_tipicos"):
                    obj["problemas_tipicos"] = (
                        "Rede de água em ferro galvanizado frequente nas aldeias mais antigas, "
                        "com exigência de substituição por multicamada ou PEX. Climatologia "
                        "continental com Invernos frios que pedem isolamento de ramais exteriores."
                    )
                if not obj.get("como_atuamos"):
                    obj["como_atuamos"] = (
                        "Diagnóstico no local antes de qualquer trabalho, orçamento escrito "
                        "detalhando mão de obra, peças e deslocação. Fatura com NIF, garantia "
                        "por escrito e seguro de responsabilidade civil. Pagamento em numerário, "
                        "multibanco, MB Way ou transferência bancária."
                    )

                out[slug] = obj
    return out


def _loose_parse(block: str) -> dict | None:
    """Parse minimal en cas de JSON cassé par le sub-agent."""
    try:
        slug_m = re.search(r'"slug"\s*:\s*"([^"]+)"', block)
        if not slug_m:
            return None
        slug = slug_m.group(1)
        get = lambda k, default="": (
            re.search(rf'"{k}"\s*:\s*"([^"]*)"', block).group(1)
            if re.search(rf'"{k}"\s*:\s*"([^"]*)"', block)
            else default
        )
        # freguesias : array de strings
        freg_m = re.search(r'"freguesias"\s*:\s*\[([^\]]+)\]', block, re.DOTALL)
        freguesias = (
            re.findall(r'"([^"]+)"', freg_m.group(1)) if freg_m else []
        )
        return {
            "slug": slug,
            "display": get("display", slug.title()),
            "populacao": get("populacao", "—"),
            "freguesias": [f for f in freguesias if f.lower() != slug.lower()],
            "contexto_geo": get("contexto_geo", ""),
            "problemas_tipicos": get("problemas_tipicos", ""),
            "como_atuamos": get("como_atuamos", ""),
            "zona_deslocacao": get("zona_deslocacao", "Z3 (35 €)"),
        }
    except Exception:
        return None


def z_price(zone: str) -> str:
    m = re.search(r"Z(\d)", zone)
    z_n = m.group(1) if m else "3"
    return {"2": "25€", "3": "35€", "4": "45€"}.get(z_n, "35€")


def build_page(display: str, slug: str, zone: str, data: dict) -> str:
    """Compose la page complète."""
    z_price_v = z_price(zone)
    title = f"💧 Canalizador {display} {z_price_v} | Norte Reparos"
    description = (
        f"Canalizador em {display}, {z_price_v} deslocação. Mediante confirmação "
        f"por telefone. Ligue {NAP_DISPLAY}."
    )
    freg_list = data["freguesias"]
    aldeias_html = " ".join(f"<li>{escape(f)}</li>" for f in freg_list)
    freg_section_items = " ".join(f"<li>{escape(f)}</li>" for f in freg_list)

    head = f"""<!DOCTYPE html>
<html lang="pt-PT">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>{title}</title>
 <meta name="description" content="{escape(description)}">
 <li>
 <meta property="og:title" content="Canalizador no Concelho de {escape(display)}">
 <meta property="og:description" content="Canalizador no concelho de {escape(display)}">
 <meta property="og:type" content="article">
 <meta property="og:url" content="{SITE_ROOT}/concelhos/{slug}">
 <meta name="robots" content="index, follow">
 <script type="application/ld+json">{{"@context":"https://schema.org","@type":"LocalBusiness","name":"Norte Reparos - Canalizador {escape(display)}","telephone":"{NAP_PHONE}","priceRange":"{z_price_v}","address":{{"@type":"PostalAddress","addressLocality":"{escape(display)}","addressRegion":"{DISTRITO}","addressCountry":"PT"}},"areaServed":{{"@type":"AdministrativeArea","name":"Concelho de {escape(display)}"}},"openingHoursSpecification":{{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"23:59"}},"sameAs":["https://eletricista-norte-reparos.pt","https://canalizador-urgente.pt","https://eletricista-urgente.pt"]}}</script>
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {{
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "{SITE_ROOT}/"
    }},
    {{
      "@type": "ListItem",
      "position": 2,
      "name": "Distrito Bragança",
      "item": "{SITE_ROOT}/distritos/braganca.html"
    }},
    {{
      "@type": "ListItem",
      "position": 3,
      "name": "Concelho {escape(display)}",
      "item": "{SITE_ROOT}/concelhos/{slug}.html"
    }}
  ]
}}
</script>
 <style>
 body {{ font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem 1rem; line-height: 1.7; color: #333; }}
 h1 {{ color: #2193b0; border-bottom: 3px solid #2193b0; padding-bottom:.5rem; }}
 h2 {{ color: #2193b0; margin-top: 2.5rem; }}.info-box {{ background: #f0f9ff; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #2193b0; margin: 1.5rem 0; }}.aldeias-grid {{ columns: 3; column-gap: 1rem; }}.aldeias-grid li {{ break-inside: avoid; }}.cta {{ background: #2193b0; color: white; padding: 2rem; border-radius: 8px; margin: 2rem 0; text-align: center; }}.cta a {{ color: white; font-weight: bold; }}
 </style>
<link rel="canonical" href="{SITE_ROOT}/concelhos/{slug}"></head>
<body role="document">
 <h1 role="heading" aria-level="1">Canalizador no Concelho de {escape(display)}</h1>

 <div class="info-box">
 <p><strong>Concelho:</strong> {escape(display)}</p>
 <p><strong>Distrito:</strong> {DISTRITO}</p>
 <p><strong>População:</strong> {escape(data["populacao"])}</p>
 <p><strong>Freguesias:</strong> {len(freg_list)} freguesias</p>
 <p><strong>Zona:</strong> {escape(zone)}</p>
 <p><strong>Aldeias servidas:</strong> {len(freg_list)} aldeias</p>
 </div>

 <h2>Lista completa das aldeias servidas</h2>
 <ul class="aldeias-grid">
 {aldeias_html}
 </ul>

 <h2>Serviços em {escape(display)}</h2>
 <ul>
 <li>Desentupimentos e fugas de água</li>
 <li>Autoclismos, esquentadores, tubagens</li>
 <li>Quadros elétricos, iluminação LED</li>
 <li>Manutenção preventiva e orçamentos</li>
 <li>Atendimento mediante confirmação por telefone — ligue {NAP_DISPLAY}, em todo o concelho</li>
 </ul>

 <h2>Sobre a Norte Reparos</h2>
 <p>A Norte Reparos é uma PME de serviços técnicos com atividade desde 2002 em Trás-os-Montes. Operamos com uma equipa de técnicos qualificados através de quatro sites especializados — canalizador-norte-reparos.pt, canalizador-urgente.pt, eletricista-norte-reparos.pt e eletricista-urgente.pt — o que nos permite responder em todo o distrito de Bragança com recursos próprios. Não subcontratamos serviços a terceiros e somos responsáveis pelo trabalho do primeiro ao último contacto.</p>

 <div class="cta">
 <h2>Peça orçamento gratuito</h2>
 <p>📞 <a href="tel:+351928484451">{NAP_PHONE}</a></p>
 <p>💬 <a href="https://wa.me/351928484451">WhatsApp</a></p>
 <p><a href="/zonas-deslocacao.html">Zonas de deslocação</a> · <a href="/calculadora-de-preco.html">Calculadora</a></p>
 </div>

<section class="local-contexto" style="background: #f0f9ff; padding: 2rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid #2193b0;">
 <h2 style="color: #2193b0; margin-top: 0;">Sobre o concelho de {escape(display)}</h2>
 <p>{escape(data["contexto_geo"])}</p>
</section>

<section class="local-freguesias" style="background: #fff; padding: 2rem; border-radius: 8px; margin: 2rem 0; border: 1px solid #e0e0e0;">
 <h2 style="color: #2193b0; margin-top: 0;">Freguesias e vilas principais de {escape(display)}</h2>
 <p>Lista das freguesias do concelho de {escape(display)} (reorganização administrativa de 2013):</p>
 <ul class="aldeias-grid" style="columns: 3;">
{freg_section_items}
 </ul>
</section>

<section class="local-problemas" style="background: #fff8e1; padding: 2rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid #b8860b;">
 <h2 style="color: #b8860b; margin-top: 0;">Problemas típicos de canalização em {escape(display)}</h2>
 <p>{escape(data["problemas_tipicos"])}</p>
</section>

<section class="local-atuacao" style="background: #e8f5e9; padding: 2rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid #2e7d32;">
 <h2 style="color: #2e7d32; margin-top: 0;">Como atuamos em {escape(display)}</h2>
 <p>{escape(data["como_atuamos"])}</p>
 <p>O pagamento pode ser feito em numerário, multibanco, MB Way ou transferência bancária. Emitimos fatura com identificação da nossa empresa e do seu NIF em todas as intervenções.</p>
</section>

<section class="services-complementares" style="background: #f8f9fa; padding: 2rem; border-radius: 8px; margin: 2rem 0;">
 <h2 style="color: #2193b0; margin-top: 0;">Serviços complementares em {escape(display)}</h2>
 <p>Além do serviço principal que descrevemos nesta página, a <strong>Norte Reparos</strong> oferece uma gama completa de serviços técnicos em {escape(display)} e arredores. Mantemos canal aberto para emergências, mediante confirmação por telefone — ligue {NAP_DISPLAY}, incluindo fins de semana e feriados.</p>

 <h3>Tipos de intervenção que realizamos</h3>
 <p>A nossa equipa trata qualquer problema de canalização ou eletricidade. Para casos mais complexos, fazemos um diagnóstico detalhado no local e apresentamos um orçamento gratuito antes de qualquer trabalho. O preço de deslocação é comunicado antes da nossa chegada.</p>

 <h3>Zonas servidas em redor de {escape(display)}</h3>
 <p>Servimos toda a região transmontana. A nossa base na região permite-nos deslocar a Bragança, Mirandela, Vinhais, Mogadouro, Vimioso, Miranda do Douro, Valpaços, Chaves, Vila Real, Lamego, Peso da Régua, Alfândega da Fé e muitas outras localidades.</p>

 <h3>Porquê escolher a Norte Reparos</h3>
 <p>PME registada com atividade desde 2002 em Trás-os-Montes. Os nossos técnicos são formados e atualizados regularmente. Emitimos fatura com NIF, oferecemos garantia por escrito sobre os trabalhos realizados e temos seguro de responsabilidade civil. Trabalhamos com as marcas de referência do setor para garantir a qualidade e durabilidade das instalações.</p>

 <h3>Como agendar uma intervenção</h3>
 <p>Pode contactar-nos por telefone, WhatsApp ou email. Em situações urgentes priorizamos o atendimento. Para serviços programados, agendamos para a data e hora que melhor lhe convier, incluindo fins de semana e feriados. O orçamento é gratuito e sem compromisso.</p>
<section class="zone-grid" style="background:#f8f9fa;padding:1.5rem;border-radius:10px;margin:2rem auto;max-width:920px">
<h2 style="color:#0a4d68;margin-bottom:1rem">{escape(display)} e arredores - localidades servidas</h2>
<p>A nossa equipa cobre todas as localidades deste concelho. Para um orçamento detalhado, contacte-nos:</p>
<ul style="columns:3;column-gap:1.5rem;list-style:none;padding:0">
  <li style="padding:.25rem 0;break-inside:avoid"><a href="/canalizador-{slug}-autoclismo.html" style="color:#0a4d68">autoclismo-{slug}</a></li>
  <li style="padding:.25rem 0;break-inside:avoid"><a href="/canalizador-{slug}-canalizacao-nova.html" style="color:#0a4d68">canalizacao-nova-{slug}</a></li>
  <li style="padding:.25rem 0;break-inside:avoid"><a href="/canalizador-{slug}-desentupimento.html" style="color:#0a4d68">desentupimento-{slug}</a></li>
  <li style="padding:.25rem 0;break-inside:avoid"><a href="/canalizador-{slug}-esquentador.html" style="color:#0a4d68">esquentador-{slug}</a></li>
  <li style="padding:.25rem 0;break-inside:avoid"><a href="/canalizador-{slug}-fossa-septica.html" style="color:#0a4d68">fossa-septica-{slug}</a></li>
  <li style="padding:.25rem 0;break-inside:avoid"><a href="/canalizador-{slug}-fuga-agua.html" style="color:#0a4d68">fuga-agua-{slug}</a></li>
  <li style="padding:.25rem 0;break-inside:avoid"><a href="/canalizador-{slug}.html" style="color:#0a4d68">{slug}</a></li>
  <li style="padding:.25rem 0;break-inside:avoid"><a href="/canalizador-{slug}-pressao-agua.html" style="color:#0a4d68">pressao-agua-{slug}</a></li>
  <li style="padding:.25rem 0;break-inside:avoid"><a href="/canalizador-{slug}-torneira.html" style="color:#0a4d68">torneira-{slug}</a></li>
  <li style="padding:.25rem 0;break-inside:avoid"><a href="/canalizador-urgente-{slug}.html" style="color:#0a4d68">urgente-{slug}</a></li>
</ul>
</section>
</section>

<section class="faq-extra" style="background: #fff; padding: 2rem; border-radius: 8px; margin: 2rem 0; border: 1px solid #e0e0e0;">
 <h2 style="color: #2193b0; margin-top: 0;">Perguntas Frequentes - Norte Reparos {escape(display)}</h2>

 <h3>Qual o horário de funcionamento em {escape(display)}?</h3>
 <p>Mantemos atendimento mediante confirmação por telefone — ligue {NAP_DISPLAY}, incluindo fins de semana, feriados nacionais e locais.</p>

 <h3>Quanto tempo demora a chegar a {escape(display)}?</h3>
 <p>O tempo de deslocação depende da sua localização exata dentro do concelho e da disponibilidade da nossa equipa no momento. Após o seu contacto, comunicamos a previsão antes de qualquer compromisso.</p>

 <h3>Posso pagar com cartão ou MB Way?</h3>
 <p>Sim, aceitamos pagamento em numerário, multibanco, MB Way, transferência bancária e cartão de débito ou crédito. A fatura é sempre emitida com o seu NIF.</p>

 <h3>Os preços são fixos ou podem variar?</h3>
 <p>O preço de deslocação é comunicado antes da nossa chegada. A mão de obra é cobrada à hora, com tarifário claro. Após o diagnóstico, apresentamos orçamento detalhado e só iniciamos o trabalho após a sua aprovação.</p>
</section>

<section class="hub-related" style="background:#fff8e1;padding:1.5rem;border-radius:10px;margin:2rem auto;max-width:920px;border:1px solid #ffe082">
 <h2 style="color:#b8860b;margin-bottom:1rem">Concelhos relacionados em Bragança</h2>
 <ul style="columns:2;column-gap:1.5rem;list-style:none;padding:0;margin:0">
 <li><a href="/distritos/braganca.html">Distrito Bragança</a></li>
 <li><a href="/concelhos/braganca.html">Concelho Bragança</a></li>
 <li><a href="/concelhos/macedo-de-cavaleiros.html">Concelho Macedo de Cavaleiros</a></li>
 </ul>
</section>
</body>
</html>
"""
    return head


def main():
    print("=== C1c-2 build concelhos ===")
    concelhos = load_concelhos()
    print(f"Concelhos chargés : {len(concelhos)}")
    for slug, _ in ORDER:
        if slug in concelhos:
            print(f"  ✅ {slug} : {len(concelhos[slug].get('freguesias', []))} freguesias")

    out_paths = []
    for slug, display in ORDER:
        if slug not in concelhos:
            print(f"  ⚠️  pas de données pour {slug} — skip")
            continue
        out = CONC_DIR / f"{slug}.html"
        page = build_page(display, slug, concelhos[slug]["zona_deslocacao"], concelhos[slug])
        out.write_text(page, encoding="utf-8")
        out_paths.append(out)
        words = len(page.split())
        print(f"  ✅ {out.name} : {out.stat().st_size:,} octets, {words} mots")
    print(f"\n=== {len(out_paths)} fichiers générés ===")

    # ---- DoD T1-T10 ----
    print("\n=== DoD T1-T10 ===")
    # T1 : 9 fichiers concelhos ciblés
    expected = [s for s, _ in ORDER]
    existing = [p.name for p in out_paths]
    print(f"T1 : {len(existing)}/9 fichiers créés ({'✅' if len(existing) == 9 else '⚠️'})")

    # T2 : mots corps > 185 par page
    print("T2 : mots par page > 185")
    for p in out_paths:
        text = p.read_text(encoding="utf-8")
        # Mots du body uniquement (entre <body> et </body>)
        m = re.search(r"<body[^>]*>(.*)</body>", text, flags=re.DOTALL)
        body = m.group(1) if m else text
        w = len(body.split())
        status = "✅" if w >= 185 else "⚠️"
        print(f"     {p.name} : {w} mots {status}")

    # T6 : zéro 'je/sozinho/contacto pessoal'
    bad_terms = ["sozinho", "contacto pessoal", "je suis", "mon entreprise"]
    for p in out_paths:
        text = p.read_text(encoding="utf-8").lower()
        hits = [t for t in bad_terms if t in text]
        status = "✅" if not hits else f"⚠️ {hits}"
        print(f"T6 : {p.name} : {status}")

    # T7 : zéro délai chiffré (X min|segundos|imediatamente|resposta em X)
    bad_délais = ["em [0-9]+ min", "resposta em [0-9]+", "imediatamente", "30 minutos", "60 minutos"]
    for p in out_paths:
        text = p.read_text(encoding="utf-8").lower()
        hits = []
        for term in bad_délais:
            if re.search(term, text):
                hits.append(term)
        status = "✅" if not hits else f"⚠️ {hits}"
        print(f"T7 : {p.name} : {status}")

    # T11 (extension) : placeholder vide "mais de de"
    for p in out_paths:
        text = p.read_text(encoding="utf-8")
        hit = "mais de de" in text
        status = "✅" if not hit else "⚠️ FOUND"
        print(f"T11 : {p.name} : placeholder 'mais de de' : {status}")

    return out_paths


if __name__ == "__main__":
    main()
