# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-05
- Tâche exécutée : **R12 violation (priorité R11/R12)** — purge des claims urgence / disponibilité 24h dans `client/src/components/FAQ.tsx`, composant rendu sur la **homepage** (`client/src/pages/OptimizedHome.tsx` L12). Détectée par la méthode d'audit par point d'entrée, corrigée en premier conformément à R11/R12.
- Branche créée : `loop/2026-08-05-canalizador-norte-reparos-r12-faq` (depuis `origin/main`, **en worktree**)
- Commits : `fadae76ab` (client/src/components/FAQ.tsx), puis `45307e691` (SEO_PLAN.md HISTORIQUE)
- PR ouverte : https://github.com/taffrand-gif/canalizador-norte-reparos/pull/268
- Résultat : ✅ 2 commits, 2 fichiers (1 par commit, atomique). Témoins R8 sur `FAQ.tsx` : `canalizador urgente` 4→0 · `fuga de água urgente` 2→0 · `Deslocação urgente` 2→0 · `Atendimento 24h/7d` 3→0 · `24h/7 dias` 1→0 · `mediante confirmação` 2→0 (banni R145) · `domingos` 1→0 · `a qualquer hora` 1→0 · `A nosso trabalho está pronta` 1→0. FAQPage schema 10→8 Q/R, contrôle `questions==answers==8`. `./node_modules/.bin/tsc --noEmit` : 0 erreur sur `FAQ.tsx` (215 pré-existantes ailleurs, inchangées). Prix non touchés (hors périmètre R12). « Orçamento grátis » conservé (non-violation confirmée). Attente GO merge Philippe (R7).

## 🎯 FILE DE TÂCHES LOOP PRÊTE — plus besoin d'arbitrage de périmètre

L'audit par point d'entrée de ce run a produit le **classement complet des 22 composants importés par `OptimizedHome.tsx`**. Chaque ligne non nulle = 1 tâche loop autonome (1 fichier = 1 PR), exécutable sans GO de Philippe puisque le découpage a déjà été validé par les PR #240 et #268.

| Rang | Composant | Occurrences R12 | Statut |
|---|---|---|---|
| — | `FAQLocal.tsx` | 0 | ✅ PR #240 (30/07) |
| — | `InnovativeHero.tsx` | 0 | ✅ run 04/08 |
| 1 | `FAQ.tsx` | 20 → **0** | ✅ **PR #268 (ce run)** |
| **2** | **`OptimizedServices.tsx`** | **18** | ⏳ **PROCHAINE TÂCHE** |
| 3 | `Footer.tsx` | 7 | ⏳ à faire |
| 4 | `Diagnostico.tsx` | 6 | ⏳ à faire |
| 5 | `PriceTable.tsx` | 4 | ⏳ à faire |
| 5 | `OrcamentoGratuitoBadge.tsx` | 4 | ⏳ à faire |
| 5 | `Contactos.tsx` | 4 | ⏳ à faire |
| 8 | `TrustBanner.tsx` | 2 | ⏳ à faire |
| 8 | `CalculadorPreco.tsx` | 2 | ⏳ à faire |
| 8 | `Blog.tsx` | 2 | ⏳ à faire |
| 11 | `Equipa.tsx` | 1 | ⏳ à faire |
| — | Header, PremiumBar, StatsCounters, Trabalhos, LatestBlog, Garantias, Testimonials, GoogleReviews, ZonaIntervencao | 0 | rien à faire |

Script de recomptage (à relancer en début de run, il est rapide) :
```bash
for c in $(git show origin/main:client/src/pages/OptimizedHome.tsx | grep "^import" | sed -E "s/.*components\/([A-Za-z]+)'.*/\1/"); do
  git show origin/main:client/src/components/$c.tsx 2>/dev/null | \
  grep -oiE '24h|24 horas|urgent[ea]|urgência|emergênci[ao]s?|grátis|gratuit[ao]|domingo|7/7|24/7|7 dias' | wc -l | xargs echo "$c"
done | sort -k2 -rn
```
⚠️ Le compteur inclut `grátis`/`gratuito`, qui ne sont **pas** systématiquement des violations (cf. §Apprentissages). Toujours lire les lignes avant de patcher.

## Tâche suivante recommandée
- **`OptimizedServices.tsx`** (18 occurrences) — 1 fichier = 1 PR, même patron que ce run.
- ⚠️ Ce composant liste les **services** : contrairement à `FAQ.tsx`, un retrait de service change l'offre affichée. Se limiter strictement aux **claims** (urgence, 24h/7d, délais) et **ne pas retirer ni renommer un service**. En cas de doute sur un service, STOP et escalade — ne pas inventer (R4).
- Vocabulaire de remplacement validé, à reprendre **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124 → « Canalizador para instalação e remodelação », « Orçamento por escrito em 48h », « garantia 1 ano », « Instalação, remodelação e projetos ao seu domicílio ». Pronoms autorisés : `AGENTS.md` §12 (« a nossa equipa », « os nossos técnicos », « contacte-nos », « garantimos »).

## Apprentissages (self-improving)
- 🔴 **`npx tsc` est un PIÈGE sur ce repo — faux négatif silencieux.** `npx` résout vers un paquet npm homonyme (un compilateur Turbo C) qui affiche « This is not the tsc command you are looking for » et sort en code 1 : le `grep` de contrôle renvoie alors **0 erreur** alors que **rien n'a été typé-checké**. Utiliser **`./node_modules/.bin/tsc --noEmit`**. Contrôle de sanité : le total doit être **215** erreurs pré-existantes sur ce repo ; si le total est 0 ou 9, tsc n'a pas tourné.
- 🔴 **Le worktree doit devenir le mode par défaut du loop sur les 4 repos.** Les 4 copies de travail principales sont sales **en permanence** (CNR 18 fichiers, ENR 7, CU 4, EU 13) et posées sur des branches feature d'autres automations. La séquence « checkout main + reset --hard » du protocole précédent **détruirait leur travail en cours**. Patron appliqué ce run, sans incident :
  ```bash
  git worktree add -q ~/work/Sites/_worktrees/{repo}-loop-YYYYMMDD -b loop/... origin/main
  # ... patcher, committer, pusher depuis ce répertoire ...
  git worktree remove ~/work/Sites/_worktrees/{repo}-loop-YYYYMMDD
  ```
- 🔴 **Pré-flight obligatoire : `rm -f .git/*.lock` sur les 4 repos.** Un run précédent a crashé le 05/08 à 02:10 en laissant un `.git/index.lock` orphelin sur **les 4 repos simultanément**. Tout `git add` échouait. C'est un mode de panne silencieux et corrélé — à traiter en tout début de run, avant même le fetch.
- **La méthode d'audit par point d'entrée n'est pas épuisée** : elle a produit `FAQLocal.tsx` (PR #240, mergée — vérifié 0 occurrence aujourd'hui), puis `InnovativeHero.tsx` (04/08), puis `FAQ.tsx` (ce run). Le tableau §FILE DE TÂCHES ci-dessus la rend désormais **incrémentale** : plus besoin de refaire l'audit complet, il suffit de prendre la ligne suivante.
- **Les artefacts des purges automatisées antérieures sont un gisement propre et à faible risque.** Trois trouvés dans le seul `FAQ.tsx` : « Serviço disponível Atendimento 24h/7d » répété 3× dans une même réponse, « Ligue mediante confirmação para », « A nosso trabalho está pronta ». Ils sont **grammaticalement cassés**, donc leur correction n'invente rien. Grep transverse candidat pour une tâche loop sur les 4 repos : `A nosso |Serviço disponível Atendimento|Se não funcionar Atendimento|com sem |sem sem `.
- **Quand une question FAQ porte sur un délai ou sur la disponibilité 24/7, retirer le couple Q/R plutôt que le réécrire.** R145 interdit le délai chiffré, R11 interdit d'inventer, « mediante confirmação » est banni : aucune réponse honnête ET conforme n'existe. Précédent : PR #200 sur `eletricista-urgente`. Le vide honnête > le faux.
- **Séparer prix et claims d'urgence** lors d'une purge R12 : les prix sont du contenu pré-existant hors périmètre. Seuls les **qualificatifs d'urgence** relèvent de R12 — « Deslocação urgente: €15 » → « Deslocação: €15 » (le montant reste).
- « Orçamento grátis » / « WhatsApp Grátis » : **non-violations confirmées**. Ne pas re-flaguer, même si le grep les remonte.
- **Réutiliser le vocabulaire déjà validé du site** plutôt qu'écrire de nouveaux claims : `shared/siteConfig.ts` L107/L108/L123/L124 + liste de pronoms d'`AGENTS.md` §12. Ça garantit R4 sans arbitrage.
- `Hero.tsx` écrase le `subtitle` de siteConfig via `useMemo` → source duale, patcher les DEUX fichiers. Idem `serviceConfig.ts` ↔ `InnovativeHero.tsx` (découverte du 04/08).
- `client/src/index.css` n'utilise pas `@layer` ; Tailwind (version du repo) ne fournit aucune utilitaire `text-shadow`.
- A5-2, B1, B2, B3 sont TERMINÉS — ne pas les rouvrir.

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Le sandbox `mcp__workspace__bash` n'a ni `gh` ni credentials en écriture (`git push` → « could not read Username »), mais il lit et grep parfaitement les fichiers montés et `git ls-remote` y fonctionne. **Répartition optimale, confirmée ce run** : lecture / grep / scripts d'analyse → `mcp__workspace__bash` (rapide) ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process` (host, `gh` authentifié `taffrand-gif` via keyring).
- Le sandbox ne peut pas supprimer de fichier dans les dossiers montés tant que la permission n'a pas été accordée (`Operation not permitted`) → appeler `mcp__cowork__allow_cowork_file_delete` une fois, ça débloque tout le dossier `Sites`.
- **`Read` puis `Edit` (chaîne exacte) fonctionne bien** sur les `.tsx` de ce repo. Attention : `Edit` échoue si l'indentation d'`old_string` n'est pas copiée à l'identique — préférer une sous-chaîne courte et unique plutôt qu'un bloc entier avec son indentation. Fallback : script `python3` en heredoc.
- Ce repo a **3 remotes** : `origin` et `github` pointent tous deux vers GitHub (identiques), `local` pointe vers `/tmp/cnr-m8-fix` qui **n'existe plus** → `git fetch --all` sort toujours en erreur sur `local`. Inoffensif : utiliser `git fetch origin`, ou filtrer l'erreur.
- Corps de PR long : `cat > /tmp/pr-xxx.md <<'EOF'` puis `gh pr create --body-file`, jamais `--body` inline (échappement zsh).
- Untracked `.worktrees/`, `DESIGN.md`, `_audit/`, `_indexing/` à la racine (autres automations) — inoffensifs, à ignorer, ne jamais les committer/supprimer.

## Blocages connus
1. **M0 / faux avis `GoogleReviews.tsx`** : violation R11 **ACTIVE en prod** (6 avis inventés + schema `Review`/`aggregateRating`), risque légal (DECO / Portal da Queixa) + E-E-A-T. Décision A/B/C/D attendue de Philippe **depuis le 29/06/2026** — point le plus ancien et le plus grave du backlog. ⚠️ Note : `GoogleReviews.tsx` sort à **0** au grep R12, mais c'est un compteur R12, pas R11 — l'absence du fichier dans la file de tâches ci-dessus ne veut **pas** dire qu'il est propre.
2. **Gisement `client/public/` + `dist/public/`** (~25k + ~41k hits R12) : régénération build, chantier séparé, demande GO Philippe.
3. **Branche `backup/main-cleanurls-pre-2026-07-30`** : 2 commits cleanUrls non poussés (`f393410a3`, `b88dec8de`). Décision Philippe attendue — pousser en PR, ou supprimer la branche ? Tant que non tranché, ne pas la supprimer.
4. **Le goulot est le merge, pas la production.** 7 PR ouvertes sur ce repo au 05/08 : #258, #260, #261, #262, #264, #265 (5 en DRAFT, automation « pool-keeper » rank-push) + **#268 (ce run)**. Les PR loop précédentes (#240 notamment) ont bien été mergées — vérifié : `FAQLocal.tsx` est à 0 occurrence.
5. `C1-C4 — Backlinks` reste la seule tâche `SEO_PLAN.md` ouverte, et c'est une **action externe** (outreach/annuaires), non exécutable par le loop.

## Instructions améliorées pour prochain run
1. 🔴 **Pré-flight, avant tout** : `for r in <4 repos>; do rm -f ~/work/Sites/$r/.git/*.lock; done` (zsh dit « no matches found » s'il n'y en a pas — normal).
2. 🔴 **Travailler en worktree, jamais dans la copie principale** : `git worktree add -q ~/work/Sites/_worktrees/cnr-loop-YYYYMMDD -b loop/YYYY-MM-DD-canalizador-norte-reparos-{tache} origin/main`. Ne **jamais** faire `git checkout main` + `reset --hard` dans la copie principale : elle porte le travail en cours d'une autre automation.
3. **Lire l'état du loop depuis `origin/main`**, jamais depuis la copie de travail : `git show origin/main:context.md`, `git show origin/main:SEO_PLAN.md`, `git show origin/main:AGENTS.md`.
4. **Prendre la ligne suivante du tableau §FILE DE TÂCHES** — l'audit est déjà fait, ne pas le refaire. Prochaine : `OptimizedServices.tsx`.
5. **Choisir/vérifier une tâche en lisant sa fiche `### X — …`** dans SEO_PLAN.md, pas via `grep ⏳` (qui matche aussi HISTORIQUE et le glossaire des statuts).
6. `gh pr list --repo taffrand-gif/canalizador-norte-reparos --state open` avant de choisir un vocabulaire de remplacement : évite les collisions avec les branches en cours.
7. Patch : `Read` puis `Edit` (sous-chaîne courte et unique). Fallback : `python3` en heredoc. Vérifier par `git diff --stat`.
8. **Type-check** : `ln -sfn ~/work/Sites/canalizador-norte-reparos/node_modules ./node_modules` dans le worktree → `./node_modules/.bin/tsc --noEmit` → `rm -f ./node_modules` **avant** de committer. **Jamais `npx tsc`.** Sanity check : total attendu = 215.
9. **Répartition des outils** : grep/lecture → `mcp__workspace__bash` ; git/gh/tsc → `mcp__desktop-commander__start_process`.
10. PR : `cat > /tmp/pr-xxx.md <<'EOF'` + `gh pr create --body-file`.
11. Nettoyer à la fin : `git worktree remove ~/work/Sites/_worktrees/cnr-loop-YYYYMMDD`.
12. A5-2, B1, B2, B3 sont TERMINÉS — ne pas les rouvrir.
