# X-WELLKNOWN-CU-EU + X-CONTENT-ORPHELIN — Signal registre 02/09/2026

> **Statut** : SIGNAL — non encore inscrit dans SEO_PLAN.md tableau CHANTIERS:BEGIN
> (R3 prudent sur les fichiers de doctrine partagée multi-repos).
> **Action** : Filipe relit, arbitre, intègre au registre.
> **Post-mortem CEO 02/09** : PR #317 (CU X-MAIL) mergée 14:31, mon patch était
> `public/.well-known/ai-plugin.json` qui répond 404 en prod. Leçons L#035
> (curl prod-live) + L#036 (racine servie = type de dépôt). 3 commits orphelins
> arrivant sur fichiers jamais servis, et un signal GEO absent sur CU/EU.

## X-WELLKNOWN-CU-EU

**Problème** : CU et EU n'exposent aucun `.well-known/` à la racine. CNR/ENR servent
`/.well-known/ai-plugin.json` (description IA-friendly OpenAI/Claude/Perplexity) et
`/.well-known/security.txt` (RFC 9116 disclosure) en 200. CU/EU = statique, ces
fichiers n'existent pas à la racine, donc 404.

**Test curl** (live, 02/09) :
```
curl -sIL https://canalizador-urgente.pt/.well-known/ai-plugin.json → 404
curl -sIL https://canalizador-urgente.pt/.well-known/security.txt    → 404
curl -sIL https://eletricista-urgente.pt/.well-known/ai-plugin.json → 404
curl -sIL https://eletricista-urgente.pt/.well-known/security.txt    → 404

curl -sIL https://canalizador-norte-reparos.pt/.well-known/ai-plugin.json → 200
curl -sIL https://canalizador-norte-reparos.pt/.well-known/security.txt    → 200
curl -sIL https://eletricista-norte-reparos.pt/.well-known/ai-plugin.json → 200
curl -sIL https://eletricista-norte-reparos.pt/.well-known/security.txt    → 200
```

**Pourquoi c'est un signal GEO** :
- CU + EU sont cités par Perplexity rang 1 sur le secteur urgence plomberie/élec
- OpenAI/Claude/Google bots consultent `/.well-known/ai-plugin.json` pour comprendre
  ce qu'un site expose aux LLMs (knowledge graph builder Perplexity 2026)
- `security.txt` RFC 9116 = canal formel de disclosure (sécurité + réputation)

**Périmètre proposé** (à confirmer avec Filipe) :
1. Créer `public/.well-known/ai-plugin.json` CU (sur le modèle CNR/ENR, métier
   plomberie urgente 928 484 451)
2. Créer `public/.well-known/ai-plugin.json` EU (métier élec urgente 932 321 892)
3. Créer `public/.well-known/security.txt` CU et EU (RFC 9116, Expires 2027)
4. Vérifier rewrite `vercel.json` (statique — `/(.*) → /$1.html` peut interférer —
   test avec fichier test avant déploiement)
5. Probe prod après merge pour confirmer 200 sur les 4 chemins

**STOP validation Philippe requis** : touche ce qui est exposé publiquement,
signal GEO concret, 4 fichiers à créer (2 par site). Hors scope X-MAIL.

## X-CONTENT-ORPHELIN

**Problème** : 3 sources MD dans `content/blog/` CNR répondent 404 en prod :
- `content/blog/desentupir-ralo-chuveiro.md`
- `content/blog/maquina-lavar-nao-drena.md`
- `content/blog/torneira-goteja.md`

Le build React+Vite ne les ingère pas (rootDir=client, pas de watcher sur
`content/`). Aucun lien symbolique vers `client/public/blog/<slug>.html`.
Scripts d'optimisation d'images (`optimize-images`) ne les traitent pas. Statut :
**sources MD orphelines** — ni générées, ni référencées, ni servies.

**Découverte** : L#035 (curl prod-live) post-X-GAR-6M PR #382. Le patch a modifié
ces 3 fichiers (`Garantia de 6 meses → 12 meses`), aucun impact prod parce qu'ils
ne servent à rien. La trace reste dans git, ce qui est OK pour la traçabilité.

**Périmètre à scanner** : peut s'étendre sur les 4 sites. Besoin d'un script
`tools/list-content-orphans.py` qui :
1. Liste tous `content/**/*.md` du repo
2. Pour chaque fichier : calcule le slug attendu (`<basename>` ou conversion)
3. curl `https://<site>/blog/<slug>.html` (ou racine directe)
4. Marque orphelin si 404

**Décision recommandée** : supprimer les fichiers orphelins (gain clarté git,
branche moins polluée). Ou laisser en l'état avec annotation « OBSOLETE: not served
in prod — see PR #382 ». À trancher.

## PRs liées

- #380 (CNR X-MAIL) — MERGED 14:31 02/09
- #437 (ENR X-MAIL) — MERGED 14:31 02/09
- #317 (CU X-MAIL) — MERGED 14:31 02/09 — ⚠️ no-op prod
- #366 (EU X-MAIL) — MERGED 14:31 02/09 — ⚠️ no-op prod
- #382 (CNR X-GAR-6M) — PR ouverte 02/09
- #449 (ENR X-GAR-6M) — PR ouverte 02/09

## Suite séquence post-merge

1. X-DUP (436 canonicals Jaccard) — différenciation PUIS canonisation
2. X-R12 (17 fichiers « mesma pessoa »)
3. **X-WELLKNOWN-CU-EU** (créer 4 fichiers prod)
4. **X-CONTENT-ORPHELIN** (lister + nettoyer 4 sites)
5. Balises déséq (chantier A #371 + déséq CNR/ENR/CU/EU)

## Leçons CEO capturées 02/09

- **L#035** : tout patch doit passer un `curl -sIL -o /dev/null -w '%{http_code}'
  sur le chemin prod avant merge. CNR #382 a détecté 3 fichiers orphelins grâce
  à ce gate.
- **L#036** : racine servie dépend du type de dépôt. React+Vite → `client/public/`.
  Statique (CU/EU) → racine. Pas de mémo fixe, le curl tranche.
- **L#037** : quand un gate est sur le périmètre du patch, il peut valider un cas sain
  ET un cas cassé (L#030 leçon symétrique). Toujours publier le split
  production / hors-production avec son compte, pas un compte agrégé.

---
*Signal rédigé 02/09/2026 par CEO dans le chat et transcrit ici pour
intégration au registre SEO_PLAN.md après arbitrage.*
