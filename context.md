# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-07-29
- Tâche exécutée : **B3 — H1 sémantique** (SEO_PLAN.md §B3, priorité BASSE) — extraction du `style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}` inline du H1 homepage vers une classe CSS `.hero-title-shadow`.
- Branche créée : `loop/2026-07-29-canalizador-norte-reparos-b3-h1-semantique`
- Commits : `c3b14c8f0` (client/src/index.css), `ad9d4c551` (client/src/components/Hero.tsx), `3ab71bbae` (SEO_PLAN.md)
- PR ouverte : https://github.com/taffrand-gif/canalizador-norte-reparos/pull/230
- Résultat : ✅ 3 commits, 3 fichiers (1 par commit, atomique). Témoins R8 : `textShadow` Hero.tsx 1→0 ; `hero-title-shadow` index.css 0→1 ; `<h1 ... style=` dans `client/src/` 1→0. Critère GO/STOP §B3 (rendu visuel identique) respecté — même valeur d'ombre, aucun utilitaire Tailwind ne définit `text-shadow`, pas de conflit de spécificité. `npx tsc --noEmit` : 0 erreur nouvelle. Attente GO merge Philippe (R7).

## Tâche suivante recommandée
- **B3 est TERMINÉ — ne pas le rouvrir.** Le volet « puis 8 fichiers `/zonas/` » de la fiche B3 est sans objet : aucun répertoire `zonas/` n'existe dans ce repo (vérifié), et il reste 0 `<h1 ... style=` dans `client/src/` après ce run.
- Tâche : **B2 — FAQ homepage** (SEO_PLAN.md, statut ⏳ À FAIRE, ligne ~428). Critère GO/STOP verrouillé : GO seulement si 3+ FAQ **cohérentes avec le contenu déjà présent** ; STOP si aucune FAQ honnête n'est possible (le vide honnête > le faux, R11). Lire d'abord `client/src/components/FAQLocal.tsx` (existe déjà) pour ne pas dupliquer.
- Priorité : MOYENNE
- Alternative si B2 = STOP : ouvrir le chantier **R12 `client/src/components/`** (voir Blocages §2) — mais celui-ci demande un GO de périmètre explicite de Philippe, il ne rentre pas dans un commit atomique de loop.

## Apprentissages (self-improving)
- `client/src/index.css` **n'utilise pas `@layer`** : une règle ajoutée en fin de fichier s'applique normalement, sans précaution de cascade Tailwind.
- Tailwind (version de ce repo) **ne fournit aucune utilitaire `text-shadow`** → extraire une ombre inline vers une classe custom est sans risque de conflit de spécificité.
- **B3 pattern réutilisable sur les 3 autres sites** : si un H1 y porte encore un `style={{ textShadow }}` inline, la même recette s'applique (classe `.hero-title-shadow` dans le CSS global + `className` en tête de liste).
- `siteConfig.hero.title` contient toujours l'em-dash « — » nécessaire à `personalizedTitle.split('—')` (revérifié ce run, non touché).
- `Hero.tsx` écrase le `subtitle` de siteConfig via `useMemo` → source duale : toute retouche de la copy hero doit patcher les DEUX fichiers.
- « WhatsApp Grátis » (CTA Hero.tsx) : **non-violation** confirmée (canal de messagerie gratuit par nature ≠ claim commercial). Ne pas re-flaguer.
- A5-2 est TERMINÉ — ne pas rouvrir.

## Edge cases détectés
- **`mcp__desktop-commander__edit_block` échoue sur `Hero.tsx`** : l'indentation réelle du fichier diffère de celle retournée par les outils de lecture (match à 76 % seulement). Workaround fiable : `perl -0pi -e "s/…/…/"` avec motif échappé, puis vérification obligatoire par `git diff`.
- Le sandbox `mcp__workspace__bash` **n'a ni `gh` ni credentials Git** → impossible d'y pousser ou d'y ouvrir une PR. Tout git/gh doit passer par `mcp__desktop-commander__start_process` (host macOS, `gh` authentifié `taffrand-gif` via keyring).
- Sorties verbeuses : chaîner des commandes courtes avec `| tail -N` pour rester sous la limite de tokens.
- Untracked `.worktrees/`, `DESIGN.md`, `_audit/QW-P0-1-FIX-2026-07-17/`, `_indexing/` toujours présents à la racine (autre automation) — inoffensifs, à ignorer systématiquement, ne jamais les committer/supprimer.

## Blocages connus
1. **Divergence `main` local ↔ `github/main`** (nouveau, 2026-07-29) : `main` local a 2 commits d'avance non poussés (`f393410a3` « chore: force Vercel re-deploy of cleanUrls fix », `b88dec8de` « fix(vercel): set cleanUrls to false ») et 20 de retard. `git merge --ff-only github/main` échoue. **Contournement appliqué et à reconduire : créer les branches loop directement depuis `github/main`** (`git checkout -b <branche> github/main`), jamais depuis `main` local — R6 respectée, aucun historique réécrit. À arbitrer par Philippe : ces 2 commits cleanUrls doivent-ils être poussés ou abandonnés ?
2. **Gisement R12 non traité dans `client/src/components/`** : ~28 `urgente`, 29 `urgência`, 16 `24h/7d`, 18 `grátis`, 13 `gratuito` répartis sur 20+ fichiers (`UrgencyTimer.tsx`, `EmotionalHero.tsx`, `ExitIntentPopup.tsx`, `PriceTable.tsx`, `FAQLocal.tsx`, `TrustBanner.tsx`, `Diagnostico.tsx`…). Sur un site 100 % installation c'est une cannibalisation de l'intent `canalizador-urgente.pt`. **Trop large pour un commit atomique de loop → demande un GO de périmètre explicite de Philippe.** `Hero.tsx` et `shared/siteConfig.ts` sont propres.
3. PR #203 (R12 seo.keywords, run du 16/07) — vérifier son statut de merge.

## Instructions améliorées pour prochain run
1. **Toujours créer la branche loop depuis `github/main`**, pas depuis `main` local (divergence connue, cf. Blocages §1). Commande : `git checkout -b loop/YYYY-MM-DD-{site}-{tache} github/main`.
2. Lire d'abord les dernières entrées HISTORIQUE de SEO_PLAN.md (la plus récente = 2026-07-29 B3) avant de choisir une tâche.
3. Avant toute tâche, grep `24h|urgente|urgência|emergência|grátis|gratuito` **sur le fichier cible précis** (pas sur tout `components/`, sinon on ouvre un chantier de 20 fichiers qui ne rentre pas dans un commit atomique). Si le fichier cible est propre → exécuter la tâche prévue et signaler le gisement large dans la PR.
4. Vérifier le build avec `npx tsc --noEmit` après patch : le repo a des erreurs TS **pré-existantes** (`ForfaitsGrid`, `GoogleReviews`, `QuoteForm`, `StructuredData`) — ne pas les confondre avec une régression, comparer fichier par fichier.
5. Utiliser `perl -0pi -e` (pas `edit_block`) pour les patchs sur `Hero.tsx`, puis vérifier par `git diff`.
6. Si lock file git : `rm -f ~/work/Sites/{repo}/.git/*.lock` (note : `zsh` renvoie « no matches found » quand il n'y en a pas — c'est normal, pas une erreur).
7. A5-2 est TERMINÉ — ne pas chercher de nouvelles violations A5-2 dans `StructuredData.tsx`.
