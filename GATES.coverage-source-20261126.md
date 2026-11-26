# GATES — CNR coverage source 2026-11-26

BASE: 48813fbb52
HEAD: 48813fbb52
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

## Chaîne visée
source → artefact → build → HTTP → DOM → production
