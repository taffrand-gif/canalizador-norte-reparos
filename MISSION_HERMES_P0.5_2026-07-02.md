# MISSION HERMES P0.5 — CNR (canalizador-norte-reparos) — 2026-07-02

> Suite du batch P0 prix/zones OSRM (branche `fix/prix-zones-osrm`, PR draft #127).
> Audit CEO complet : `~/work/Sites/PLAN_ACTION_CEO_2026-07-02.md`. Arbitrages Q1-Q4 du
> `BRIEF_HERMES_PRIX_ZONES_OSRM.md` §4bis restent valables (idempotent, pas de dist/, dry-run).

## Constat (grep vérifié + triangulé leçon #298, 02/07)

| KO sur ce repo | Compte |
|---|---|
| Badge `data-zone` ≠ zonas-data.json | **58** |
| Badge ≠ JSON-LD "Deslocação Zona X" (page interne contradictoire) | **211** |
| JSON-LD prix deslocação ≠ grille | **4** |
| Doublons nommage : `<service>-<loc>.html` sans préfixe | **157** (vs 308 préfixées, états divergents) |
| Pages "Chegada em ~XX min" (décision D1 Filipe pendante) | **1873** |

Cas témoins : `fuga-agua-chaves.html` (doublon, était Z6), `canalizador-fuga-agua-chaves.html` (badge 45€ mais body "Deslocação Zona 4: 40€" + "70 minutos").

## Cause racine
Le batch P0 a normalisé le **badge zone-info seul**. Title, meta, OG, H1, body,
FAQ et JSON-LD sont restés sur l'ancienne grille → pages internes contradictoires.

## Tâche P0.5 — normalisation PAGE ENTIÈRE (même branche)

Pour chaque page localité (source unique : `~/work/Sites/norte-os-marketing/prototypes/zonas-data.json`, Z1=15€ … Z6=65€) réécrire ENSEMBLE :
1. `<title>`, `meta description`, `og:title`, `og:description`
2. H1 + badge `zone-info` + `data-zone`
3. Toute mention body `Zona X` / `deslocação XX€` / "Deslocação Zona X: XX€"
4. JSON-LD : `priceRange`, l'Offer **Deslocação** (price + description), réponses FAQPage
5. FAQ `<details>` (montants + zone)

⚠️ Ne PAS toucher les Offers JSON-LD de **service** (110€/150€/280€ = prix prestation, pas deslocação).
⚠️ Taux horaire : 65€/h canalização · 70€/h eletricidade. Majoration +50% s'applique aussi à la deslocação.
⚠️ R145 : zone-block only (Q3). Purge globale "mediante confirmação" = mission séparée (décision D2 Filipe pendante).
⚠️ **Doublons (P0.5c)** : avant le batch, auditer les 157 pages non préfixées → proposer canonical/301/suppression à Filipe. Sinon la moitié du parc rate le patch.
⚠️ **D1 pendante** : ne pas toucher "Chegada em ~XX min" tant que Filipe n'a pas tranché (ENR = 0, CNR = 1873, incohérence inter-sites).

## Procédure (R3/R12)
1. Dry-run : re-mesurer les 58 + 211 KO avec résolution slug (strip préfixes service) → liste exacte.
2. Prototype **1 page** (choisir un cas contradictoire, ex. `canalizador-fossa-septica-vila-pouca-de-aguiar.html` (badge Z5 vs JSON-LD Z3)) → diff → **GO Filipe (D5)**.
3. Vagues ≤100 fichiers, grep AVANT/APRÈS par vague, commits `fix(cnr): P0.5 vague N`.
4. Vérif finale : badge≠json = 0, badge≠JSON-LD = 0 → PR draft → ready for review.

## Après merge (rappel file ROI master)
P0.3 faux avis → P0.1 résidus → M1 maillage → M2 différenciation intent.
