#!/usr/bin/env python3
"""
Mesure de similarité entre pages ville×service.
- AVANT patch : baseline (templates identiques → similarité ~100%)
- APRÈS patch : vérifie < 85% entre paires ciblées
"""
import sys
import re
import os
from pathlib import Path
from difflib import SequenceMatcher

ROOT = Path("/tmp/claude-501/-Users-admin/1731e98f-3c55-40b4-b560-fe81e57e1322/scratchpad/cnr-diff")
TEMPLATE = (ROOT / "client/src/pages/CityServicePage.tsx").read_text()

# 10 villes stratégiques money (Bragança district + axes Macedo/Vila Real/Guarda)
CITIES = [
    "braganca",
    "mirandela",
    "macedo-de-cavaleiros",
    "miranda-do-douro",
    "vinhais",
    "mogadouro",
    "torre-de-moncorvo",
    "alfandega-da-fe",
    "freixo-de-espada-a-cinta",
    "vila-flor",
]
SERVICES = ["fugas-agua", "desentupimentos", "esquentadores", "casas-banho", "canalizacao"]


def normalize(s: str) -> str:
    """Strip les interpolations ${city.name} / ${service.name} et slots dynamiques pour comparer la STRUCTURE."""
    s = re.sub(r"\$\{[^}]+\}", "X", s)
    s = re.sub(r"\s+", " ", s)
    return s.strip()


def page_text(slug_service: str, slug_city: str, extra_block=None) -> str:
    """Reconstruit le texte rendu pour une page donnée (mêmes interpolations).

    Le template React utilise des expressions de la forme:
    - `{localContext.heroSubtitle}` (substitution)
    - `localContext.freguesias.length`
    - `localContext.answerFirst` etc.
    On les substitue par les valeurs réelles du dict extra_block.
    """
    city_name = slug_city.replace("-", " ").title()
    service_name = slug_service.replace("-", " ")
    t = TEMPLATE
    t = t.replace("{city.name}", city_name)
    t = t.replace("{service.name}", service_name.title())
    t = t.replace("{params.service}", slug_service)
    t = t.replace("{params.city}", slug_city)
    # Si extra_block est un dict avec les champs, on substitue
    if extra_block:
        # Substituer les références du template
        for field in ("heroSubtitle", "pricingHook", "answerFirst", "localParagraph", "distanceFromBase"):
            val = extra_block.get(field, "")
            if val:
                # Pattern simple: localContext.{field} (avec ou sans accolades)
                t = t.replace(f"localContext.{field}", val)
                t = t.replace(f"{{localContext.{field}}}", val)
        # Freguesias (utilisé pour le count et la liste)
        freg = extra_block.get("freguesias", "")
        if freg:
            t = t.replace("localContext.freguesias.length", str(freg.count(",") + 1))
            t = t.replace("localContext.freguesias", freg)
        # Append le bloc complet pour l'analyse de similarité (équivalent à ce qui sera rendu)
        t = t + "\n" + "\n".join(f"{k}: {v}" for k, v in extra_block.items() if v)
    return normalize(t)


def similar(a: str, b: str) -> float:
    return round(SequenceMatcher(None, a, b).ratio() * 100, 2)


def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else "before"
    # Paires à spot-check (template × variante)
    pairs = [
        ("fugas-agua", "braganca", "fugas-agua", "mirandela"),
        ("fugas-agua", "braganca", "fugas-agua", "miranda-do-douro"),
        ("desentupimentos", "mogadouro", "desentupimentos", "vinhais"),
        ("esquentadores", "torre-de-moncorvo", "esquentadores", "freixo-de-espada-a-cinta"),
    ]

    if mode == "before":
        print("=== BASELINE (template actuel, pas de bloc local) ===")
        for s1, c1, s2, c2 in pairs:
            t1 = page_text(s1, c1)
            t2 = page_text(s2, c2)
            print(f"  {s1}-{c1}  vs  {s2}-{c2}  =  {similar(t1, t2)}%")
        print()
        print("Moyenne similarité inter-villes (fugas-agua × 10 villes) :")
        s = "fugas-agua"
        scores = []
        for i, c1 in enumerate(CITIES):
            for c2 in CITIES[i + 1 :]:
                scores.append(similar(page_text(s, c1), page_text(s, c2)))
        if scores:
            print(f"  min={min(scores)}% max={max(scores)}% mean={sum(scores)/len(scores):.2f}%")
    else:
        print("=== APRÈS patch (avec bloc local unique) ===")
        # Le bloc local est injecté depuis shared/localContext.ts
        lc_path = ROOT / "shared/localContext.ts"
        if not lc_path.exists():
            print("ERREUR : shared/localContext.ts introuvable — patch non appliqué.")
            sys.exit(1)
        from_city = re.findall(r"slug:\s*'([^']+)'", lc_path.read_text())
        # On charge le contenu et on l'injecte par ville
        ctx_raw = lc_path.read_text()
        # extraction grossière des paragraphes par ville (entre `slug:` et la prochaine `},` ou `}`)
        # Note: prettier a converti les guillemets simples en doubles
        blocks = {}
        cur_slug = None
        cur = []
        for line in ctx_raw.splitlines():
            m = re.search(r'slug:\s*["\']([^"\']+)["\']', line)
            if m:
                if cur_slug:
                    blocks[cur_slug] = "\n".join(cur)
                cur_slug = m.group(1)
                cur = []
                continue
            if cur_slug:
                cur.append(line)
        if cur_slug:
            blocks[cur_slug] = "\n".join(cur)

        def extra(slug_city):
            """Construit le bloc local complet: localParagraph + answerFirst +
            heroSubtitle + pricingHook + freguesias + distanceFromBase.
            Retourne un dict pour injection dans le template."""
            b = blocks.get(slug_city, "")
            if not b:
                return {}

            def grab(field):
                # prettier convertit les chaînes multi-lignes avec guillemets simples en concat
                # de chaînes à guillemets doubles. On supporte les 2 formats.
                m = re.search(rf'{field}:\s*["\']([^"\']+(?:["\'][^"\']*["\'][^"\']*)*)["\']', b)
                if m:
                    return re.sub(r"\s+", " ", m.group(1)).strip("\"' ")
                return ""

            def grab_list(field):
                m = re.search(rf"{field}:\s*\[([^\]]+)\]", b)
                if m:
                    return m.group(1)
                return ""

            return {
                "localParagraph": grab("localParagraph"),
                "answerFirst": grab("answerFirst"),
                "heroSubtitle": grab("heroSubtitle"),
                "pricingHook": grab("pricingHook"),
                "freguesias": grab_list("freguesias"),
                "distanceFromBase": grab("distanceFromBase"),
            }

        for s1, c1, s2, c2 in pairs:
            t1 = page_text(s1, c1, extra(c1))
            t2 = page_text(s2, c2, extra(c2))
            print(f"  {s1}-{c1}  vs  {s2}-{c2}  =  {similar(t1, t2)}%")
        print()
        s = "fugas-agua"
        scores = []
        for i, c1 in enumerate(CITIES):
            for c2 in CITIES[i + 1 :]:
                scores.append(
                    similar(page_text(s, c1, extra(c1)), page_text(s, c2, extra(c2)))
                )
        if scores:
            print(
                f"Moyenne similarité inter-villes (fugas-agua × 10 villes) : min={min(scores)}% max={max(scores)}% mean={sum(scores)/len(scores):.2f}%"
            )
        # Vérif DoD : < 85% sur toutes les paires
        bad = [p for p, v in zip([(s1, c1, s2, c2) for s1, c1, s2, c2 in pairs], [similar(page_text(s1, c1, extra(c1)), page_text(s2, c2, extra(c2))) for s1, c1, s2, c2 in pairs]) if v >= 85]
        if bad:
            print(f"\n❌ DoD FAIL : {len(bad)} paire(s) >= 85% : {bad}")
            sys.exit(2)
        else:
            print("\n✅ DoD OK : toutes les paires spot-check < 85%")


if __name__ == "__main__":
    main()
