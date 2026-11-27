# Gate CNR — pages legacy fuite d’eau Chaves

Date : 2026-11-27
Statut courant : `PARTIEL`
Branche : `seo/coverage-geo-neutral-cnr-20261127`
Production : interdite dans ce lot

## Périmètre exact

- `client/public/canalizador-fuga-agua-chaves.html`
- `client/public/reparacao-fugas-fuga-agua-chaves.html`
- `client/public/detecao-fugas-agua-chaves.html`
- Aucun autre fichier de page ne doit être modifié.
- `vercel.json` est inclus uniquement pour retirer la règle 410 contradictoire de `/detecao-fugas-agua-chaves`.
- Aucun batch géographique.
- Aucun merge, aucune PR Ready, aucun déploiement Production.

## Objectif

Conserver trois intentions plomberie distinctes — recherche de fuite, réparation de fuite et détection de fuite — en supprimant les claims non sourcés, en rétablissant des canonicals cohérents et en conservant le tunnel téléphone/WhatsApp et les prix métier autorisés.

## Source de vérité

- `_governance/20-BUSINESS-FACTS.json`
- `_governance/30-CONTENT-DOCTRINE.md`
- CNR = plomberie ; DGEG/TRIESP et FLIR/Fluke/caméra thermique électricité ne doivent pas apparaître sur CNR.
- Prix : 70 €/h + 30 € jour ; 100 €/h + 50 € nuit/week-end/fériés ; TTC ; devis écrit avant intervention.

## Constats avant modification

- `canalizador-fuga-agua-chaves.html` : `noindex,follow`, claims FLIR, détection acoustique non sourcée, rapport assurance, précision/absence de travaux trop affirmatives, garantie fabricant, canonical self.
- `reparacao-fugas-fuga-agua-chaves.html` : canonical vers `/urgencia-canalizador-chaves`, claims `95%`, garantie fabricant, « resolução imediata » et équipements à reformuler ; page sans meta robots explicite.
- `detecao-fugas-agua-chaves.html` : canonical vers `/urgencia-canalizador-chaves`, claims FLIR, précision milimétrica, détection sans travaux et test de pression non sourcés ; JSON-LD dupliqué hérité. La Preview a ensuite révélé une règle Vercel 410 explicite sur cette URL.

## Invariants obligatoires après modification

- [x] `npm run build` exit 0 — preuve du 2026-11-27.
- [x] `npm run lint:sitemap-parity` PASS — `3214` URLs, `455236` octets.
- [x] `git diff --check` PASS.
- [x] Aucun `DGEG`/`TRIESP` sur ces pages CNR.
- [x] Aucun `FLIR`, `Fluke`, `câmara térmica` ou équivalent électricité sur ces pages CNR.
- [x] Aucun `95%`, `precisão milimétrica`, résultat garanti ou absence de travaux garantie.
- [x] Aucun `2 anos garantia` ni `Garantia do fabricante`.
- [x] Aucun rapport d’assurance, certification ou capacité non sourcée.
- [x] Canonical de chaque page cohérent avec sa propre URL.
- [x] `tel:+351928484451` présent sur chaque page.
- [x] `wa.me/351928484451` présent sur chaque page.
- [x] Prix métier et devis écrit présents ou reformulés selon la source métier.
- [x] Le diff ne touche que les trois pages, `vercel.json` pour le routage contradictoire, et ce gate.

## Preuves requises

- Contrôle déterministe source + `dist/public` des claims interdits, canonicals, CTA et JSON-LD : `PASS` sur les trois pages.
- Build, parité sitemap et diff check : `PASS` (`3214` URLs, `455236` octets).
- `vercel.json` valide en JSON ; règle 410 exacte absente : `PASS`.
- Contrôle des routes Preview HTTP 200 et canonicals.
- DOM Preview seulement si la protection Preview le permet ; sinon exception documentée.
- Production explicitement inchangée.

FINI = [commande: source+dist-check + npm run build + npm run lint:sitemap-parity + git diff --check + python3 -m json.tool vercel.json][population: 3 pages legacy fuite Chaves + règle Vercel exacte][commit: à créer][source: 20-BUSINESS-FACTS.json + 30-CONTENT-DOCTRINE.md][niveau: PARTIEL][production: inchangée][exceptions: HTTP Preview et DOM non vérifiés]
