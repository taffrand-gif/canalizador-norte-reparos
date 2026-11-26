# GATES — CNR coverage source 2026-11-26

BASE: 48813fbb52
HEAD: e2872ee6ce
FILES_SHA256: À CALCULER PAR LE gate
POPULATION: 56 artefacts Moimenta da Beira + 1 page Requejo confirmés servis, plus sources/listes/sitemaps touchés
BRANCH: fix/cnr-coverage-source-20261126

## Objectif mesurable
Retirer les surfaces commerciales CNR confirmées hors périmètre Moimenta da Beira et Requejo de Sanabria, conserver Moimenta (Vinhais), et empêcher leur régénération.

## Source active
`client/src/App.tsx:231` → `client/src/pages/Zonas.tsx`; listes dans `Header.tsx`, `StructuredData.tsx`, `RelatedCities.tsx`; artefacts servis dans `client/public`; indexation dans `public/sitemap*.xml` et `client/public/sitemap*.xml`.

## Gate
- Motif : `Moimenta da Beira|moimenta-da-beira|moimenta-beira|Requejo de Sanabria|requejo-de-sanabria`.
- Attendu : zéro résidu sur les surfaces ciblées ; `Moimenta` sans `da Beira` conservée.
- Invariants : téléphone, WhatsApp, CTA, GA4, Consent Mode, RGPD, prix, pages portugaises autorisées.
- Régénération : build/générateurs rejoués ; aucun résidu ciblé ne revient.
- Production : aucun merge sans GO nommé.

## Preuves exécutées
- `npm run build` : code 0 ; log `/tmp/cnr-build-20261126-final.log`.
- `rg` sur `client/public`, `client/src`, `precos-zonas.json` : 0 fichier résiduel ciblé.
- `git grep --cached` : 0 fichier résiduel ciblé.
- JSON/XML : parsing Python réussi.
- `git diff --check` : OK.
- `npm run check` : exception préexistante TypeScript hors périmètre, non corrigée.

## Chaîne visée
source → artefact → build → HTTP → DOM → production
