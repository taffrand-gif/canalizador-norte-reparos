
## Application approuvée — 2026-11-27

GO explicite reçu : `GO lot claims legacy CNR`.

Le dry-run v2 a prévu exactement : 1 832 fichiers parcourus, 488 fichiers modifiés, 5 claims `500.000 €`, 413 délais chiffrés et 873 blocs de témoignages legacy. L’application `node scripts/apply-static-local-claims-cnr.mjs --apply` a été exécutée uniquement sur cette population.

Preuves après application et rebuild :

- `npm run build` : exit 0.
- `npm run lint:sitemap-parity` : PASS — parité exacte 3 214 `<loc>`, 455 236 bytes.
- Contrôle source et `dist` : les motifs interdits ciblés sont absents.
- Dry-run post-application : zéro changement attendu.
- `git diff --check` : PASS.
- Aucun merge, aucune PR Ready et aucun déploiement Production.

Statut : `PARTIEL` jusqu’au contrôle DOM de la nouvelle Preview Vercel. Les erreurs TypeScript préexistantes ne sont pas traitées dans ce lot.


## Preview Vercel — contrôle post-commit — 2026-11-27

- Déploiement exact : `dpl_8hPVTGqqfSeJtuhiwTonNNu3dG3b`.
- Commit contrôlé : `be51dafdef5979b54618db31f752cceb83466da0`.
- URL Preview : `https://canalizador-norte-reparos-3kp5h1d1b-filipes-projects-4b992c3d.vercel.app/`.
- État Vercel : `READY` ; cible Production non utilisée.
- Le fetch public reçoit le SSO Vercel ; le DOM a été contrôlé dans le navigateur authentifié, sans désactiver la protection.
- Racine : téléphone `928 484 451`, liens téléphone/WhatsApp, équipements de détection visibles ; aucun signal DGEG/TRIESP observé.
- `/canalizador-moimenta.html` : délai affiché comme confirmé par téléphone, téléphone/WhatsApp présents, RC autorisée `Seguro de responsabilidade civil profissional até 50.000 €.` visible ; aucun texte legacy ciblé observé.
- `/canalizador-chaves.html` : Chaves conservée, téléphone/WhatsApp présents, RC autorisée visible, équipements FLIR/Ridgid présents ; aucun texte legacy ciblé observé.
- Preuve applicative : `node scripts/apply-static-local-claims-cnr.mjs` retourne `dry-run`, `changedFiles=0`, `obsoleteInsurance=0`, `numericArrival=0`, `testimonialBlocks=0`.
- Contrôle direct du regex exact sur la population : `TOTAL 0 FILES 0` pour les trois textes legacy ciblés.

### Anomalie de contrôle non masquée

La sortie JSON de `node scripts/audit-static-local-claims-cnr.mjs` signale encore 20 occurrences `testimonialText` sur quatre fichiers, alors que le regex exact rejoué directement et le dry-run applicatif retournent zéro. Cette incohérence entre l’auditeur et le contrôle direct est `À REVOIR` ; elle empêche le statut `PASS_COMPLET` tant que le script d’audit n’est pas expliqué ou corrigé. Aucun merge ni déploiement Production n’est autorisé par cette preuve.

Statut du lot après Preview : `PARTIEL` — Preview READY et DOM contrôlé ; anomalie d’audit à résoudre.
