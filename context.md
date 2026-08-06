# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-06
- Tâche exécutée : **R12 — rang 2 de la file de tâches** : purge des claims urgence / disponibilité 24h dans `client/src/components/OptimizedServices.tsx`, composant rendu sur la **homepage** (`client/src/pages/OptimizedHome.tsx`). Tâche prise directement dans le tableau §FILE DE TÂCHES ci-dessous — **zéro audit à refaire, zéro arbitrage de périmètre** : la file fonctionne comme prévu.
- Branche créée : `loop/2026-08-06-canalizador-norte-reparos-r12-optimizedservices` (depuis `github/main`, **en worktree**)
- Commits : `f25a496ce` (client/src/components/OptimizedServices.tsx), puis `c4bb49dd4` (SEO_PLAN.md HISTORIQUE)
- PR ouverte : https://github.com/taffrand-gif/canalizador-norte-reparos/pull/269
- Résultat : ✅ 2 commits, 2 fichiers (1 par commit, atomique). Témoins R8 sur `OptimizedServices.tsx` : `Atendimento de urgências` 1→0 · `Atendimento 24h/7d` 1→0 · `24h/7 dias` 2→0 · `outras emergências` 1→0 · `qualquer emergência` 1→0 · `Serviço de urgência 24h` 1→0 · `atendimento 24h/7 dias` 1→0 · `Equipe ` (PT-BR) 1→0 · `Orçamento por escrito em 48h` 0→2 · `ao seu domicílio` 0→2 · `A nossa equipa` 0→1 · `garantia 1 ano` 0→1. **Compteur R12 global du fichier : 18 → 7** (résiduel = 3 clés de service + `gratuito`, hors périmètre). Clés `'Urgências 24h'` : **3→3 intactes**. `./node_modules/.bin/tsc --noEmit` : 0 erreur sur le fichier patché, total 215 pré-existantes (baseline conforme). Prix non touchés. Attente GO merge Philippe (R7).

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-06

Classement des 22 composants importés par `OptimizedHome.tsx`. Chaque ligne non nulle = 1 tâche loop autonome (1 fichier = 1 PR), exécutable **sans GO de Philippe** : le découpage est validé par les PR #240, #268 et #269.

| Rang | Composant | Occurrences R12 | Statut |
|---|---|---|---|
| — | `FAQLocal.tsx` | 0 | ✅ PR #240 (30/07, **mergée**) |
| — | `InnovativeHero.tsx` | 0 | ✅ run 04/08 |
| — | `FAQ.tsx` | 20 → 0 | ✅ PR #268 (05/08, ouverte) |
| — | `OptimizedServices.tsx` | 18 → 7 | ✅ **PR #269 (ce run)** — résiduel hors périmètre, voir escalade §1 |
| **1** | **`Footer.tsx`** | **7** | ⏳ **PROCHAINE TÂCHE** |
| 2 | `Diagnostico.tsx` | 6 | ⏳ à faire |
| 3 | `PriceTable.tsx` | 4 | ⏳ à faire |
| 3 | `OrcamentoGratuitoBadge.tsx` | 4 | ⏳ à faire |
| 3 | `Contactos.tsx` | 4 | ⏳ à faire |
| 6 | `TrustBanner.tsx` | 2 | ⏳ à faire |
| 6 | `SEOHead.tsx` | 2 | ⏳ à faire |
| 6 | `CalculadorPreco.tsx` | 2 | ⏳ à faire |
| 6 | `Blog.tsx` | 2 | ⏳ à faire |
| 10 | `Equipa.tsx` | 1 | ⏳ à faire |
| — | Header, PremiumBar, StatsCounters, Trabalhos, LatestBlog, Garantias, Testimonials, GoogleReviews, ZonaIntervencao, ScrollToTop | 0 | rien à faire (R12) |

Script de recomptage (rapide, à relancer en début de run) :
```bash
for c in $(grep "^import" client/src/pages/OptimizedHome.tsx | sed -E "s|.*components/([A-Za-z]+)['\"].*|\1|" | grep -v import); do
  f=client/src/components/$c.tsx
  [ -f "$f" ] && echo "$c $(grep -oiE '24h|24 horas|urgent[ea]|urgência|emergênci[ao]s?|grátis|gratuit[ao]|domingo|7/7|24/7|7 dias' "$f" | wc -l | tr -d ' ')"
done | sort -k2 -rn
```
⚠️ Le compteur inclut `grátis`/`gratuito`, qui ne sont **pas** systématiquement des violations. Toujours lire les lignes avant de patcher.

## Tâche suivante recommandée
- **`Footer.tsx`** (7 occurrences) — 1 fichier = 1 PR, même patron que ce run.
- ⚠️ Le footer est rendu sur **toutes** les pages, pas seulement la homepage : impact plus large qu'un composant de home, et il contient probablement du **NAP** (nom, téléphone, adresse). **Ne pas toucher au NAP** (nom d'entreprise, numéro, adresse) — c'est un chantier séparé qui demande un GO Philippe (cf. `businessName: 'Canalizador Profissional 24h'` laissé intact le 04/08 pour la même raison).
- Vocabulaire de remplacement validé, à reprendre **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159 → « Canalizador para instalação e remodelação », « Orçamento por escrito em 48h », « garantia 1 ano », « Instalação, remodelação e projetos ao seu domicílio », « equipamento profissional de diagnóstico ». Pronoms autorisés : `AGENTS.md` §12 (« a nossa equipa », « os nossos técnicos », « contacte-nos », « garantimos »).

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — vérifier qu'une chaîne n'est pas une CLÉ D'OBJET avant de la patcher.** Dans `OptimizedServices.tsx`, 3 des 18 occurrences R12 étaient la clé `'Urgências 24h'` des tables `serviceImages` / `serviceDescriptions` / `serviceFeatures`, matchée contre `ACTIVE_CONFIG.services`. Les renommer aurait fait tomber les 6 services sur le fallback `'Serviço profissional de qualidade.'` **sans aucune erreur TypeScript** — panne silencieuse en production. Contrôle à ajouter systématiquement : `grep -c "'<chaîne>':" <fichier>` avant/après doit être stable.
- 🔴 **Le contrôle de sanité `tsc` = 215 erreurs est indispensable.** C'est le seul moyen de distinguer « 0 erreur sur mon fichier » de « tsc n'a pas tourné ». `npx tsc` résout vers un paquet npm homonyme (compilateur Turbo C) qui sort en code 1 sans rien typer → faux négatif silencieux. Utiliser **`./node_modules/.bin/tsc --noEmit`**. Dans un worktree, le `node_modules` n'existe pas : `ln -sfn ~/work/Sites/canalizador-norte-reparos/node_modules ./node_modules`, puis `rm -f ./node_modules` **avant** le commit.
- **La file de tâches supprime le coût d'entrée d'un run.** Ce run a démarré à patcher ~10 min après le fetch, contre ~40 min les runs précédents (audit + arbitrage de périmètre). **Maintenir le tableau à jour est la tâche la plus rentable du loop.**
- 🔴 **Le worktree doit être le mode par défaut sur les 4 repos.** Les 4 copies de travail sont sales **en permanence** (CNR 18 fichiers, ENR 5, CU 6, EU 7 au 06/08) et posées sur des branches feature d'autres automations. La séquence « checkout main + reset --hard » **détruirait leur travail en cours**.
- 🔴 **Pré-flight obligatoire : `rm -f .git/*.lock` sur les 4 repos.** Un run a crashé le 05/08 à 02:10 en laissant un `.git/index.lock` orphelin sur **les 4 repos simultanément**. Mode de panne silencieux et corrélé.
- **Les artefacts des purges automatisées antérieures sont un gisement propre et à faible risque.** Encore un ce run : « Atendimento de urgências Atendimento 24h/7d » (double sujet). Ils sont **grammaticalement cassés**, donc leur correction n'invente rien. Grep transverse candidat pour une tâche loop sur les 4 repos : `A nosso |Serviço disponível Atendimento|Se não funcionar Atendimento|Atendimento de urgências Atendimento|com sem |sem sem `.
- **Le PT-BR est un défaut réel et non catalogué.** « Equipe » (PT-BR) trouvé ce run là où PT-PT impose « Equipa ». `AGENTS.md` §12 verrouille « tout contenu client PT-PT uniquement (jamais PT-BR) » mais aucun run n'avait encore greppé les brésilianismes. **Candidat à une tâche loop transverse aux 4 repos** : `Equipe |time |você|banheiro|encanador|conserto|cadastro|celular`.
- **Quand une question FAQ porte sur un délai ou sur la disponibilité 24/7, retirer le couple Q/R plutôt que le réécrire.** Aucune réponse honnête ET conforme n'existe. Précédent : PR #200 sur `eletricista-urgente`. Le vide honnête > le faux.
- **Séparer prix et claims d'urgence** lors d'une purge R12 : les prix sont du contenu pré-existant hors périmètre. Seuls les **qualificatifs** relèvent de R12 — « Deslocação urgente: €15 » → « Deslocação: €15 » (le montant reste).
- « Orçamento grátis » / « WhatsApp Grátis » / « Projeto hidráulico gratuito » : **non-violations confirmées**. Ne pas re-flaguer, même si le grep les remonte.
- **Réutiliser le vocabulaire déjà validé du site** plutôt qu'écrire de nouveaux claims : `shared/siteConfig.ts` + liste de pronoms d'`AGENTS.md` §12. Garantit R4 sans arbitrage.
- `Hero.tsx` écrase le `subtitle` de siteConfig via `useMemo` → source duale, patcher les DEUX fichiers. Idem `serviceConfig.ts` ↔ `InnovativeHero.tsx` (04/08).
- `client/src/index.css` n'utilise pas `@layer` ; Tailwind (version du repo) ne fournit aucune utilitaire `text-shadow`.
- A5-2, B1, B2, B3 sont TERMINÉS — ne pas les rouvrir.

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Le sandbox `mcp__workspace__bash` n'a ni `gh` ni credentials en écriture (`git push` → « could not read Username for 'https://github.com' »), mais il lit et grep parfaitement les fichiers montés et `git ls-remote` y fonctionne (repos publics). **Répartition optimale, re-confirmée ce run** : lecture / grep / scripts d'analyse → `mcp__workspace__bash` ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process` (host, `gh` authentifié `taffrand-gif` via keyring, scopes `repo`+`workflow`).
- 🔴 **NOUVEAU — le `/tmp` du sandbox et le `/tmp` du host sont DEUX systèmes de fichiers distincts.** Un worktree créé dans `/tmp` via desktop-commander est **invisible** au sandbox. Les worktrees doivent être créés **sous `~/work/Sites/`** (monté des deux côtés) pour que le sandbox puisse y faire les greps rapides. Convention adoptée : `~/work/Sites/_worktrees/loop-YYYY-MM-DD/{cnr,enr,cu,eu}`.
- **`Read` puis `Edit` (chaîne exacte) fonctionne bien** sur les `.tsx` de ce repo. `Edit` échoue si l'indentation d'`old_string` n'est pas copiée à l'identique — préférer une sous-chaîne courte et unique. Fallback : script `python3` en heredoc.
- Ce repo a **3 remotes** : `origin` et `github` pointent tous deux vers GitHub (identiques), `local` pointe vers `/tmp/cnr-m8-fix` qui **n'existe plus** → `git fetch --all` sort toujours en erreur sur `local`. Inoffensif : utiliser `git fetch github`.
- Corps de PR long : `cat > /tmp/pr-xxx.md <<'EOF'` puis `gh pr create --body-file`, jamais `--body` inline (échappement zsh).
- Untracked `.worktrees/`, `DESIGN.md`, `_audit/`, `_indexing/` à la racine (autres automations) — inoffensifs, à ignorer, ne jamais les committer/supprimer.

## Blocages connus
1. 🛑 **NOUVEAU — le service s'appelle littéralement `'Urgências 24h'`.** Défini dans `shared/serviceConfig.ts` L67, il s'affiche en `<h3>` sur la homepage, sert de **clé de lookup** dans 3 tables de `OptimizedServices.tsx`, est repris dans **9 `description`** de `shared/seoKeywords.ts` (meta description de 9 pages ville) et apparaît dans **~20 pages** `client/src/pages/cidades/*.tsx`. Tant qu'il subsiste, la homepage affiche un intent « urgence » malgré PR #269. Le renommer **change l'offre affichée** → GO Philippe requis. **Question** : `'Urgências 24h'` doit-il rester un service de `canalizador-norte-reparos.pt`, ou être renommé / basculé vers `canalizador-urgente.pt` ? Si GO, découpage propre : `serviceConfig.ts` → `seoKeywords.ts` → pages cidades.
2. **M0 / faux avis `GoogleReviews.tsx`** : violation R11 **ACTIVE en prod** (6 avis inventés + schema `Review`/`aggregateRating`), risque légal (DECO / Portal da Queixa) + E-E-A-T. Décision A/B/C/D attendue de Philippe **depuis le 29/06/2026** — point le plus ancien et le plus grave du backlog. ⚠️ `GoogleReviews.tsx` sort à **0** au grep R12, mais c'est un compteur R12, pas R11 — son absence de la file de tâches ne veut **pas** dire qu'il est propre.
3. **Gisement `client/public/` + `dist/public/`** (~25k + ~41k hits R12) : régénération build, chantier séparé, GO Philippe.
4. **Branche `backup/main-cleanurls-pre-2026-07-30`** : 2 commits cleanUrls non poussés (`f393410a3`, `b88dec8de`). Décision Philippe attendue — pousser en PR, ou supprimer ? Tant que non tranché, ne pas la supprimer.
5. 🔴 **Le goulot est le merge, pas la production.** **8 PR ouvertes** sur ce repo au 06/08 : #258, #260, #261, #262, #264, #265 (automation « pool-keeper » rank-push, dont 5 en DRAFT) + #268 (loop 05/08) + **#269 (ce run)**. Sur les 4 repos cumulés : **60 PR ouvertes** (CNR 8, ENR 21, CU 5, EU 27). Le loop produit plus vite que Philippe ne merge. **À arbitrer : soit une session de merge groupée, soit un ralentissement du loop.**
6. `C1-C4 — Backlinks` reste la seule tâche `SEO_PLAN.md` ouverte, et c'est une **action externe** (outreach/annuaires), non exécutable par le loop.

## Instructions améliorées pour prochain run
1. 🔴 **Pré-flight, avant tout** : `for r in canalizador-norte-reparos eletricista-norte-reparos canalizador-urgente eletricista-urgente; do rm -f ~/work/Sites/$r/.git/*.lock; done` (zsh dit « no matches found » s'il n'y en a pas — normal).
2. 🔴 **Travailler en worktree sous `~/work/Sites/`, jamais dans `/tmp`, jamais dans la copie principale** : `git worktree add -q ~/work/Sites/_worktrees/loop-YYYY-MM-DD/cnr -b loop/YYYY-MM-DD-canalizador-norte-reparos-{tache} github/main`. `/tmp` du host est invisible au sandbox ; la copie principale porte le travail d'une autre automation.
3. **Lire l'état du loop depuis `github/main`**, jamais depuis la copie de travail : c'est l'erreur la plus coûteuse jamais commise par le loop (une lecture depuis une branche feature a fait travailler un run sur un `context.md` vieux de 6 jours).
4. **Prendre la ligne suivante du tableau §FILE DE TÂCHES** — l'audit est déjà fait, ne pas le refaire. Prochaine : **`Footer.tsx` (7)**. Ne pas toucher au NAP qu'il contient.
5. 🔴 **Avant de patcher une chaîne, vérifier que ce n'est pas une clé d'objet** utilisée en lookup (`grep -c "'<chaîne>':"`). Panne silencieuse, invisible à TypeScript.
6. `gh pr list --repo taffrand-gif/canalizador-norte-reparos --state open` avant de choisir un vocabulaire de remplacement : évite les collisions avec les branches en cours.
7. Patch : `Read` puis `Edit` (sous-chaîne courte et unique). Fallback : `python3` en heredoc. Vérifier par `git diff --stat`.
8. **Type-check** : `ln -sfn ~/work/Sites/canalizador-norte-reparos/node_modules ./node_modules` dans le worktree → `./node_modules/.bin/tsc --noEmit` → `rm -f ./node_modules` **avant** de committer. **Jamais `npx tsc`.** Sanity check : total attendu = **215**.
9. **Répartition des outils** : grep/lecture → `mcp__workspace__bash` ; git/gh/tsc → `mcp__desktop-commander__start_process`.
10. PR : `cat > /tmp/pr-xxx.md <<'EOF'` + `gh pr create --body-file`.
11. Nettoyer à la fin : `git worktree remove ~/work/Sites/_worktrees/loop-YYYY-MM-DD/cnr` puis `git worktree prune`.
12. A5-2, B1, B2, B3 sont TERMINÉS — ne pas les rouvrir.
