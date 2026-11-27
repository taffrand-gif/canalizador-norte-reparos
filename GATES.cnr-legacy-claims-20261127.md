# GATES — Audit claims legacy CNR — 2026-11-27

## Objectif

Mesurer sans modifier la population HTML statique CNR qui peut contenir des délais d’arrivée chiffrés, des témoignages non documentés ou des claims commerciaux incompatibles avec la source métier.

## Population

- `client/public/canalizador-*.html`
- `client/public/perguntas-frequentes-canalizador-*.html`
- `client/src/data/cityContent.ts`
- Exclusions : `dist/`, `node_modules/`, `_audit/`, `_archive/`, rapports historiques et fichiers non servis.

## Invariants

- Audit strictement read-only.
- Aucun fichier HTML supprimé ou réécrit dans ce lot.
- Aucun délai chiffré présenté comme promesse ; formulation autorisée : fenêtre confirmée par téléphone selon la situation opérationnelle.
- Aucun avis, client, projet ou résultat inventé.
- Témoignages éventuels uniquement anonymes et explicitement documentés.
- CNR : aucun DGEG, TRIESP, Ficha, Termo ou wallbox.
- RC autorisée uniquement sous la formulation métier validée : `Seguro de responsabilidade civil profissional até 50.000 €.`
- Source métier : `/Users/admin/work/Sites/_governance/20-BUSINESS-FACTS.json`.

## Contrôles obligatoires

- inventaire déterministe des fichiers et motifs ;
- export JSON reproductible ;
- `git diff --check` ;
- worktree propre hors des fichiers explicitement ajoutés au lot ;
- aucune modification Production, aucun merge.

## Statut initial

`PARTIEL` — audit à exécuter. Toute correction massive ou suppression de claims nécessitera un gate de correction séparé et un GO explicite de Filipe si la population dépasse un fichier ou touche au contenu métier.

## Résultats audit — 2026-11-27

Commande exécutée : `node scripts/audit-static-local-claims-cnr.mjs` avec validation `node --check`, puis synthèse JSON déterministe.

| Motif | Fichiers | Occurrences | Décision |
|---|---:|---:|---|
| `Tempo médio: … minutos` | 413 | 413 | À remplacer par la fenêtre confirmée par téléphone, dans un lot source/générateur dédié |
| Initiales `JM/MS/RP` | 488 | 873 | À retirer ou qualifier ; aucun avis inventé autorisé |
| Textes de témoignage legacy | 451 | 887 | À retirer ou remplacer uniquement par contenu documenté |
| RC `50.000 €` | 1 090 | 1 090 | Autorisé par la source métier, conserver la formulation prudente |
| RC obsolète `500.000 €` | 5 | 5 | Correction obligatoire dans le lot claims |
| DGEG/TRIESP/Ficha/Termo/wallbox | 0 | 0 | Conforme au périmètre plomberie CNR |
| Adresse personnelle détectée | 0 | 0 | Conforme |

Population auditée : 1 832 fichiers HTML. Aucun fichier servi n’a été modifié par l’auditeur. Une correction de cette ampleur est bloquée jusqu’à un gate de correction séparé et un GO explicite de Filipe.
