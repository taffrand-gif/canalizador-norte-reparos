
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
