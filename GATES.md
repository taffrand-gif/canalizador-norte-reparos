# GATES. CNR coverage deletion 2026-11-25

BASE: origin/main
POPULATION: 14 HTML files explicitly authorized for deletion
SCOPE: confirmed Spain, Moimenta/Tavira/Viseu hors couverture, excluding Vila Verde da Raia (Chaves) and Vila Nova da Rainha (Macedo de Cavaleiros)
EXCLUDED: Chaves, ValpaMdos, reserved CNR PAA pages, all other files
INVARIANTS: no sitemap or generator edits in this deletion step; no production; no merge
CHECKS: exact manifest, git diff --check, deleted paths only, generators inspected before PR
STATUS: pending validation

## Intégration SEO/GEO/AEO 2026-11-27
BASE_EFFECTIVE: b65fb5d5d2
OBJECTIF: conserver la population géographique prouvée et appliquer la présentation neutre du prototype CNR.
POPULATION_SUPPLÉMENTAIRE: 5 fichiers source du commit f34ac27ce7, plus ce gate.
INVARIANTS: Moimenta de Vinhais, Chaves et Vila Nova da Rainha conservées ; aucune adresse privée, aucun délai ou équipement non sourcé ; téléphone/WhatsApp et séparation plomberie conservés.
SOURCE: _governance/20-BUSINESS-FACTS.json ; client/src/App.tsx et composants du prototype ; sitemaps/générateurs du commit de base.
PREUVES: manifest exact, scan des fichiers présents, JSON-LD parseable, canonical, CTA, sitemap/XML, git diff --check, build si possible.
STATUT: PARTIEL — intégration non rejouée ; aucun merge, Ready ou Production.
