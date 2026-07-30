# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-07-30
- Tâche exécutée : **R12 violation (priorité R11/R12)** — purge des claims urgence/`24h/7d` dans `client/src/components/FAQLocal.tsx`, composant rendu sur la **homepage** (`client/src/pages/OptimizedHome.tsx` L80). Détectée en lecture pré-B2, corrigée en premier conformément à la règle R11/R12 du protocole loop.
- Branche créée : `loop/2026-07-30-canalizador-norte-reparos-r12-faqlocal` (depuis `github/main`)
- Commits : `e4e7a488d` (client/src/components/FAQLocal.tsx), puis 1 commit `SEO_PLAN.md` (HISTORIQUE)
- PR ouverte : https://github.com/taffrand-gif/canalizador-norte-reparos/pull/240
- Résultat : ✅ 2 commits, 2 fichiers (1 par commit, atomique). Témoins R8 sur `FAQLocal.tsx` : `Atendimento 24h/7d` 4→0 · `urgência` 3→0 · `Urgência` 1→0 · `urgentes` 1→0 · `emergências` 1→0 · `24h` 4→0 · `Orçamento por escrito em 48h` 0→4. `npx tsc --noEmit` : 0 erreur sur `FAQLocal.tsx` (215 erreurs pré-existantes ailleurs, inchangées). Prix existants non touchés (hors périmètre R12) ; seule la majoration « Urgência noturna: +50% » retirée car claim d'urgence. Attente GO merge Philippe (R7).

## Tâche suivante recommandée
- ⚠️ **La série B est ÉPUISÉE sur ce repo.** B1 ✅ (29/06), B2 ✅ (PR #83+#84, 29/06), B3 ✅ (PR #230, 29/07). Il reste **0 tâche codable `⏳ À FAIRE`**. Seul `C1-C4 — Backlinks` est encore ouvert et c'est une **action externe** (outreach/annuaires), non exécutable par le loop.
- **SITE SANS TÂCHE LOOP DISPONIBLE — attente arbitrage Philippe** sur l'un des 3 chantiers ci-dessous (aucun ne rentre dans un commit atomique sans GO de périmètre) :
  1. **Chantier R12 `client/src/components/`** (le plus rentable SEO) : ~28 `urgente`, 29 `urgência`, 16 `24h/7d`, 18 `grátis`, 13 `gratuito` sur 20+ fichiers (`UrgencyTimer.tsx`, `EmotionalHero.tsx`, `ExitIntentPopup.tsx`, `PriceTable.tsx`, `TrustBanner.tsx`, `Diagnostico.tsx`…). **Suggestion de découpage loop-compatible** : 1 fichier = 1 PR, en commençant par les composants rendus sur la homepage (auditer les imports de `OptimizedHome.tsx`), qui sont les seuls à impacter la page la plus crawlée. Ce découpage rend le chantier exécutable par le loop sans GO global.
  2. **Gisement `client/public/` + `dist/public/`** (~25k + ~41k hits R12) : régénération build, chantier séparé, demande GO Philippe.
  3. **Roadmap MONOPOLE M0-M4** (fiches détaillées dans SEO_PLAN.md §ROADMAP) : M0 = retrait des faux avis `GoogleReviews.tsx` (R11 **ACTIF en prod**, légal + E-E-A-T). C'est la violation la plus grave encore ouverte sur ce repo, mais elle attend une décision A/B/C/D de Philippe depuis le 29/06.
- Priorité recommandée si GO : **1** (découpage 1 fichier = 1 PR), puis **3/M0**.

## Apprentissages (self-improving)
- 🔴 **Lire `context.md` et `SEO_PLAN.md` APRÈS `git checkout github/main`, JAMAIS avant.** Le repo local était laissé sur une branche feature (`feat/seo-positioning-sav-q3-2026`) portant un `context.md` daté du 16/07 qui recommandait B3 — déjà mergée depuis. ~15 min perdues sur une tâche fantôme. **C'est l'erreur la plus coûteuse de ce run.**
- 🔴 **Vérifier le statut d'une tâche dans sa propre fiche `### X — …`**, pas via `grep ⏳ SEO_PLAN.md` : les `⏳` matchent aussi les lignes HISTORIQUE et le glossaire des statuts (§524). C'est ce qui a fait croire au run du 29/07 que B2 était `⏳ À FAIRE` alors qu'il est `✅ FAIT` depuis le 29/06.
- 🔴 **Auditer par point d'entrée, pas fichier par fichier.** `FAQLocal.tsx` portait 4× `Atendimento 24h/7d` en production sur la homepage et avait échappé à **tous** les audits R12 précédents, parce que les runs auditaient `Hero.tsx` et `shared/siteConfig.ts` nommément. Méthode à appliquer : `grep -n "^import" client/src/pages/OptimizedHome.tsx` → grep R12 sur chaque composant importé.
- **Réutiliser le vocabulaire déjà validé du site** plutôt qu'écrire de nouveaux claims : `shared/siteConfig.ts` L108/L124 et `Hero.tsx` L22/L60/L94 fournissent « Orçamento por escrito em 48h », « garantia 1 ano », « ao domicílio », « instalação e remodelação ». Ça garantit R4 (zéro invention) sans arbitrage.
- **Séparer prix et claims d'urgence** lors d'une purge R12 : les prix (80-120€, 220€, 88€…) sont du contenu pré-existant hors périmètre — n'y toucher qu'avec une source de vérité (`PRICING.md` ne contient rien sur desentupimento/fugas/esquentadores, vérifié ce run). Seules les **majorations d'urgence** (« +50% ») relèvent de R12.
- **Les purges automatisées antérieures ont laissé des artefacts grammaticaux** : `com sem compromisso` (corrigé ce run, ×2). Un grep `com sem \|sem sem \|e e \|de de ` sur les 4 repos remonterait probablement d'autres résidus — **candidat à une tâche loop transverse à faible risque**.
- `client/src/index.css` n'utilise pas `@layer` : règle ajoutée en fin de fichier = s'applique normalement.
- Tailwind (version du repo) ne fournit aucune utilitaire `text-shadow`.
- `siteConfig.hero.title` contient l'em-dash « — » nécessaire à `personalizedTitle.split('—')` — ne pas le perdre.
- `Hero.tsx` écrase le `subtitle` de siteConfig via `useMemo` → source duale, patcher les DEUX fichiers.
- « WhatsApp Grátis » (CTA Hero.tsx) : **non-violation** confirmée. Ne pas re-flaguer.
- A5-2 est TERMINÉ — ne pas rouvrir. B3 est TERMINÉ — ne pas rouvrir.

## Edge cases détectés
- Le sandbox `mcp__workspace__bash` **n'a ni `gh` ni credentials Git en écriture** (`git ls-remote` en lecture fonctionne, `curl https://api.github.com` renvoie 000). Tout git/gh doit passer par `mcp__desktop-commander__start_process` (host macOS, `gh` authentifié `taffrand-gif` via keyring). **En revanche le sandbox est excellent et rapide pour tous les grep/lecture** sur les fichiers montés — répartition optimale : lecture/grep = sandbox, git/gh/build = desktop-commander.
- **Les outils `Read`/`Edit` fonctionnent parfaitement sur `FAQLocal.tsx`** (contrairement à l'avertissement du run précédent sur `Hero.tsx`). Le problème n'était pas l'indentation mais `edit_block` : préférer `Read` puis `Edit` (chaîne exacte), qui échoue proprement au lieu de patcher à côté. `perl -0pi -e` reste le fallback.
- Corps de PR long : passer par `cat > /tmp/pr-xxx.md <<'EOF'` puis `gh pr create --body-file`, jamais `--body` inline (échappement zsh).
- Untracked `.worktrees/`, `DESIGN.md`, `_audit/QW-P0-1-FIX-2026-07-17/`, `_indexing/` à la racine (autre automation) — inoffensifs, à ignorer, ne jamais les committer/supprimer.
- `npx tsc --noEmit` prend ~2 min sur ce repo et sort **215 erreurs pré-existantes** — filtrer sur le fichier patché (`| grep -i FAQLocal`) au lieu de comparer les totaux.

## Blocages connus
1. ✅ **RÉSOLU ce run — divergence `main` local ↔ `github/main`.** `main` local a été aligné sur `github/main` (`git reset --hard github/main`, opération **locale**, aucun `--force` distant, R6 respectée). Les 2 commits locaux non poussés sont **préservés** sur la branche `backup/main-cleanurls-pre-2026-07-30` (`f393410a3` « chore: force Vercel re-deploy of cleanUrls fix », `b88dec8de` « fix(vercel): set cleanUrls to false »). **Décision Philippe attendue** : pousser ces 2 commits cleanUrls en PR, ou supprimer la branche de backup ? Tant que non tranché, ne pas supprimer `backup/main-cleanurls-pre-2026-07-30`.
2. **Gisement R12 `client/src/components/`** — voir §Tâche suivante recommandée, chantier 1. Demande GO de périmètre, ou adoption du découpage 1 fichier = 1 PR proposé.
3. **M0 / faux avis `GoogleReviews.tsx`** : violation R11 **ACTIVE en prod** (6 avis inventés + schema `Review`/`aggregateRating`), risque légal (DECO / Portal da Queixa) + E-E-A-T. Décision A/B/C/D attendue de Philippe **depuis le 29/06/2026** — c'est le point le plus ancien et le plus grave du backlog.
4. PR #203 (R12 seo.keywords, run du 16/07) : **absente de la liste des PR ouvertes** → mergée ou fermée. Vérifié ce run, point clos.
5. PRs loop/draft ouvertes en attente de Philippe sur ce repo : #229, #232, #233, #235, #236, #237, #238, #239, **#240 (ce run)**. 9 PR ouvertes — **le goulot n'est plus la production de PR mais leur merge.** Signaler à Philippe.

## Instructions améliorées pour prochain run
1. 🔴 **Séquence d'ouverture obligatoire, dans cet ordre** :
   `git fetch github -q` → `git checkout main` → `git reset --hard github/main` (local, R6 OK) → **puis seulement** lire `context.md`, `SEO_PLAN.md`, `AGENTS.md`. Ne jamais lire l'état du loop depuis une branche feature.
2. **Créer la branche loop depuis `github/main`** : `git checkout -b loop/YYYY-MM-DD-{site}-{tache} github/main`.
3. **Choisir la tâche en lisant sa fiche `### X — …`** (statut en tête de fiche), pas via `grep ⏳`.
4. **Audit R12 par point d'entrée** : `grep -n "^import" client/src/pages/OptimizedHome.tsx`, puis grep `24h|urgente|urgência|emergência|grátis|gratuito` sur chaque composant importé. C'est ce qui aurait trouvé `FAQLocal.tsx` 4 runs plus tôt.
5. **Répartition des outils** : grep/lecture → `mcp__workspace__bash` (rapide, monté en lecture) ; git/gh/npx → `mcp__desktop-commander__start_process` (host, credentials).
6. Patch : `Read` puis `Edit` (chaîne exacte). Fallback `perl -0pi -e`. Toujours vérifier par `git diff --stat`.
7. `npx tsc --noEmit 2>&1 | grep -i {FichierPatché}` — ne pas comparer les totaux (215 erreurs pré-existantes).
8. PR : `cat > /tmp/pr-xxx.md <<'EOF'` + `gh pr create --body-file`.
9. Si lock file git : `rm -f ~/work/Sites/{repo}/.git/*.lock` (`zsh` dit « no matches found » s'il n'y en a pas — normal).
10. A5-2, B1, B2, B3 sont TERMINÉS — ne pas les rouvrir.
11. **Si aucune tâche codable n'est disponible** (cas de ce run) : ne pas forcer une tâche cosmétique. Chercher une violation R4/R11/R12 active par la méthode §4, la corriger, et signaler l'épuisement du backlog dans la PR + ici.
