# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-11
- Tâche exécutée : **R12 — file de tâches loop, rang 2 : `client/src/components/Diagnostico.tsx`** (composant rendu sur la homepage, `client/src/pages/OptimizedHome.tsx` L38).
- Branche : `loop/2026-08-11-canalizador-norte-reparos-r12-diagnostico` (depuis `github/main`, **en worktree**)
- Commits : `641dd3405d` (`Diagnostico.tsx`), puis `74044aadcd` (`SEO_PLAN.md`)
- PR ouverte : https://github.com/taffrand-gif/canalizador-norte-reparos/pull/280
- Résultat : ✅ 2 commits, 2 fichiers (1 par commit). Le bloc de résultat du diagnostic affichait « ✅ Técnico **Atendimento 24h** em {ville} » — claim de disponibilité permanente **et** artefact de purge automatisée (chaîne grammaticalement cassée). Remplacé par « Técnico **ao seu domicílio** em {ville} », verbatim de `shared/siteConfig.ts` L124/L159. Témoins R8 : `Técnico Atendimento 24h` 1→0 · `Atendimento 24h` 1→0 · `ao seu domicílio` 0→1 · `value: 'urgente'` 1→1 (clé de lookup intacte). Compteur R12 du fichier **6 → 5** (résiduel hors périmètre). `./node_modules/.bin/tsc --noEmit` : 0 erreur sur le fichier, **total 215** (baseline conforme).

## ✅ Gate merge — CADUC, vérifié ce run
Le `context.md` du 06/08 portait « Attente GO merge Philippe (R7) » en citant la PR **#269**. Vérification `gh pr view` ce run : **#269 MERGED**, ainsi que **#295** (ENR) et **#240** (CU). **Le gate est caduc et a été effacé.**

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Une PR en attente ne gèle pas le repo. Entre le 06/08 et le 09/08, la mention « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production** sur un backlog de 73 tâches. **Ne jamais réécrire un gate de ce type.** La conformité à R7 est déjà assurée par « le loop ne merge jamais ».

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-11

Recompte effectué en début de run sur `github/main` (script ci-dessous).

| Rang | Composant | Occurrences R12 | Statut |
|---|---|---|---|
| — | `FAQLocal.tsx` | 0 | ✅ PR #240 (mergée) |
| — | `InnovativeHero.tsx` | 0 | ✅ run 04/08 |
| — | `FAQ.tsx` | 3 | ✅ PR #268 — résiduel hors périmètre |
| — | `OptimizedServices.tsx` | 7 | ✅ PR #269 (**mergée**) — résiduel = 3 clés de service + `gratuito` |
| — | `Footer.tsx` | 5 | ✅ **CLOS ce run** — voir ci-dessous |
| — | `Diagnostico.tsx` | 6 → 5 | ✅ **PR #280 (ce run)** — résiduel = saisie utilisateur |
| **1** | **`PriceTable.tsx`** | **4** | ⏳ **PROCHAINE TÂCHE** |
| 1 | `OrcamentoGratuitoBadge.tsx` | 4 | ⏳ à faire |
| 1 | `Contactos.tsx` | 4 | ⏳ à faire — 2 artefacts « Disponível Atendimento 24h/7d » (L167, L234) |
| 4 | `TrustBanner.tsx` | 2 | ⏳ à faire — L5 `'Disponível Atendimento 24h/7d'` |
| 4 | `SEOHead.tsx` | 2 | ⏳ à faire |
| 4 | `CalculadorPreco.tsx` | 2 | ⏳ à faire |
| 4 | `Blog.tsx` | 2 | ⏳ à faire |
| 8 | `Equipa.tsx` | 1 | ⏳ à faire |
| — | Header, PremiumBar, StatsCounters, Trabalhos, LatestBlog, Garantias, Testimonials, GoogleReviews, ZonaIntervencao, ScrollToTop | 0 | rien à faire (R12) |

**`Footer.tsx` — entrée CLOSE, ne pas la rouvrir.** Après la PR du 10/08, le compteur est descendu à 5 — mais **les 5 occurrences résiduelles sont toutes à l'intérieur du panneau « Urgência imediata? »** qui pointe vers `canalizador-urgente.pt` et `eletricista-urgente.pt` (les mots `urgente` sont dans les URL des sites frères). C'est **le maillage de séparation d'intent**, pas une violation : le purger casserait la segmentation.

Script de recomptage (à relancer en début de run) :
```bash
for c in $(grep "^import" client/src/pages/OptimizedHome.tsx | sed -E "s|.*components/([A-Za-z]+)['\"].*|\1|" | grep -v import); do
  f=client/src/components/$c.tsx
  [ -f "$f" ] && echo "$c $(grep -oiE '24h|24 horas|urgent[ea]|urgência|emergênci[ao]s?|grátis|gratuit[ao]|domingo|7/7|24/7|7 dias' "$f" | wc -l | tr -d ' ')"
done | sort -k2 -rn
```
⚠️ Le compteur inclut `grátis`/`gratuito` et les URL des sites frères, qui ne sont **pas** des violations. **Toujours lire les lignes avant de patcher, et clore explicitement une entrée dont le résiduel est hors périmètre** — sinon le rang 1 est repris à chaque run.

## Tâche suivante recommandée
- **`PriceTable.tsx`** (4 occurrences) — 1 fichier = 1 PR.
- ⚠️ Composant de **prix** : appliquer la règle « séparer prix et claims d'urgence ». Les montants sont du contenu pré-existant **hors périmètre R12** ; seuls les **qualificatifs** sautent (« Deslocação urgente: €15 » → « Deslocação: €15 », le montant reste).
- Vocabulaire de remplacement validé, à reprendre **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159 → « Canalizador para instalação e remodelação », « Orçamento por escrito em 48h », « garantia 1 ano », « Instalação, remodelação e projetos ao seu domicílio », « equipamento profissional de diagnóstico ». Pronoms autorisés : `AGENTS.md` §12.
- Candidat en binôme : les jumelles `PriceTable.tsx` / `Contactos.tsx` existent aussi sur `eletricista-norte-reparos` — **traiter les 2 repos dans le même run** (écart de propagation observé : ~20 min en binôme contre 6 à 14 jours sinon).

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — le compteur R12 brut est un indicateur, pas un verdict.** `Footer.tsx` sortait à 5 après purge : les 5 occurrences étaient les URL des sites frères dans le panneau de segmentation d'intent. Purger au compteur aurait cassé le maillage. **Corollaire opérationnel : clore explicitement une entrée de la file quand son résiduel est hors périmètre**, sinon chaque run reprend le même rang 1 et croit avoir du travail.
- 🔴 **La règle « vérifier qu'une chaîne n'est pas une CLÉ D'OBJET » s'est re-déclenchée.** Dans `Diagnostico.tsx`, `value: 'urgente'` (L19) est consommé à L49 (`if (urgency === 'urgente')`) : le renommer aurait cassé silencieusement le message WhatsApp, **sans erreur TypeScript**. Contrôle systématique avant tout patch `.tsx` : `grep -c "'<chaîne>'" <fichier>` stable avant/après, et chercher les usages de la valeur.
- 🔴 **Ne pas sur-purger.** « receba estimativa imediata » (L61) est littéralement vrai (widget client-side) et hors périmètre R12 ; la saisie utilisateur « É URGENTE — agora » est un **input du visiteur**, pas un claim de l'entreprise. R4 se viole dans les deux sens : inventer **et** effacer ce qui est vrai.
- 🔎 **Gisement mesuré ce run : `Atendimento 24h` = 192 occurrences dans `client/src/`.** Artefacts de la même purge automatisée (« Disponível Atendimento 24h/7d », « Resposta mediante contacto Atendimento 24h/7d », « Trabalham Atendimento 24h/7d? »). Les plus exposés : `ServicesSlider.tsx`, `Contactos.tsx`, `TrustBanner.tsx`, `GuaranteeBox.tsx`, `FloatingCTA.tsx`, `SEO/FAQSchema.tsx`, `CityServicePage.tsx`, `FreguesiasPage.tsx`, `Servicos.tsx`, `Dicas.tsx`. **Batch → GO Philippe.** Gisement propre : les chaînes sont grammaticalement cassées, donc les corriger n'invente rien.
- 🔴 **Leçon transverse du run, venue de `canalizador-urgente` — un batch de conformité peut corrompre la RÈGLE qu'il applique.** Sur CU, le commit `fb9dd2415` a substitué `relatório técnico` → `orçamento por escrito` sur 2003 fichiers **y compris `AGENTS.md`**, désarmant le ruling qu'il prétendait appliquer. **Règle proposée pour les 4 repos : tout batch de substitution doit exclure explicitement `AGENTS.md`, `SEO_PLAN.md`, `context.md`, `CLAUDE.md`.** Et : **avant d'escalader une contradiction de doctrine, lancer `git log -S "<fragment>" -- AGENTS.md`** — la réponse est souvent dans l'historique, pas chez Philippe.
- **Le contrôle de sanité `tsc` = 215 erreurs est indispensable.** `npx tsc` résout vers un paquet npm homonyme (compilateur Turbo C) qui sort en code 1 sans rien typer → faux négatif silencieux. Utiliser **`./node_modules/.bin/tsc --noEmit`**. Dans un worktree : `ln -sfn ~/work/Sites/canalizador-norte-reparos/node_modules ./node_modules`, puis `rm -f ./node_modules` **avant** le commit.
- **Séparer prix et claims d'urgence** lors d'une purge R12 : seuls les qualificatifs relèvent de R12, les montants restent.
- « Orçamento grátis » / « WhatsApp Grátis » / « Projeto hidráulico gratuito » : **non-violations confirmées**. Ne pas re-flaguer.
- **Réutiliser le vocabulaire déjà validé** (`shared/siteConfig.ts` + pronoms `AGENTS.md` §12) plutôt qu'en écrire : garantit R4 sans arbitrage.
- `Hero.tsx` écrase le `subtitle` de siteConfig via `useMemo` → source duale, patcher les DEUX fichiers. Idem `serviceConfig.ts` ↔ `InnovativeHero.tsx`.
- A5-2, B1, B2, B3 sont TERMINÉS — ne pas les rouvrir.

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Le sandbox `mcp__workspace__bash` n'a ni `gh` ni credentials en écriture (`git push` → « could not read Username »), mais `git fetch` **y fonctionne** (repos publics) et il lit/grep parfaitement les fichiers montés. **Répartition confirmée ce run** : lecture / grep / scripts d'analyse → `mcp__workspace__bash` ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process` (host, `gh` authentifié `taffrand-gif`, scopes `repo`+`workflow`).
- **Le `/tmp` du sandbox et le `/tmp` du host sont DEUX systèmes de fichiers distincts.** Les worktrees doivent être créés **sous `~/work/Sites/`** (monté des deux côtés). Convention : `~/work/Sites/_worktrees/loop-YYYY-MM-DD/{cnr,enr,cu,eu}`.
- **Les commandes `git` ne fonctionnent PAS depuis le sandbox dans un worktree** : le fichier `.git` d'un worktree contient un chemin absolu **host** qui ne résout pas côté sandbox. Dans un worktree : grep/lecture au sandbox, **tout `git` via desktop-commander**.
- 🔴 **`set -e` + zsh : un glob sans correspondance (`rm -f .git/*.lock`) fait AVORTER tout le script** (« no matches found »). Utiliser `setopt null_glob` ou renoncer à `set -e` sur cette ligne. A coûté un run de pré-flight ce run.
- Ce repo a **3 remotes** : `origin` et `github` pointent tous deux vers GitHub, `local` pointe vers un `/tmp` disparu → `git fetch --all` sort en erreur. **Utiliser `git fetch github`, jamais `--all`.**
- Corps de PR long : fichier + `gh pr create --body-file`, jamais `--body` inline (échappement zsh).
- Untracked `.worktrees/`, `DESIGN.md`, `_audit/`, `_indexing/` à la racine (autres automations) — inoffensifs, ne jamais les committer/supprimer.

## Blocages connus
1. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** (`shared/serviceConfig.ts` L67) : `<h3>` sur la homepage, **clé de lookup** dans 3 tables d'`OptimizedServices.tsx`, repris dans 9 `description` de `shared/seoKeywords.ts` et ~20 pages `client/src/pages/cidades/*.tsx`. Le renommer **change l'offre affichée** → GO Philippe. **Même question ouverte sur ENR : un seul arbitrage débloque les 2 repos.**
2. **M0 / faux avis `GoogleReviews.tsx`** : violation R11 **ACTIVE en prod** (6 avis inventés + schema `Review`/`aggregateRating`), risque légal (DECO / Portal da Queixa) + E-E-A-T. Décision attendue **depuis le 29/06/2026** — point le plus ancien et le plus grave du backlog. ⚠️ Sort à 0 au grep R12 : c'est un compteur R12, pas R11.
3. **Gisement `client/public/` + `dist/public/`** (~25k + ~41k hits R12) : régénération build, GO Philippe.
4. **Gisement `Atendimento 24h` — 192 occurrences dans `client/src/`** : batch, GO Philippe (voir §Apprentissages).
5. **Branche `backup/main-cleanurls-pre-2026-07-30`** : 2 commits cleanUrls non poussés (`f393410a3`, `b88dec8de`). Décision attendue — ne pas la supprimer tant que non tranché.
6. `C1-C4 — Backlinks` : seule tâche `SEO_PLAN.md` ouverte, **action externe** non exécutable par le loop.

## Instructions améliorées pour prochain run
1. **Pré-flight** : `setopt null_glob` puis `rm -f ~/work/Sites/canalizador-norte-reparos/.git/*.lock` — jamais sous `set -e` sans null_glob.
2. **Worktree obligatoire** sous `~/work/Sites/_worktrees/loop-YYYY-MM-DD/cnr`, depuis `github/main`. **Jamais `/tmp`, jamais la copie principale, jamais `reset --hard`/`stash`/`clean`** (R-WT). Le checkout partagé est sale en permanence et posé sur une branche d'une autre automation.
3. **Recompter la file de tâches** en début de run et **clore les entrées dont le résiduel est hors périmètre** avant de choisir la cible.
4. **Lire les lignes avant de patcher.** Vérifier qu'une chaîne n'est pas une clé d'objet ni une URL.
5. `tsc` : `./node_modules/.bin/tsc --noEmit`, total attendu **215**. Un total différent = tsc n'a pas tourné.
6. **Traiter la jumelle sur `eletricista-norte-reparos` dans le MÊME run.**
7. **Vérifier que `context.md` est bien arrivé sur `main`** en fin de run : `git show github/main:context.md | head -6` doit afficher la date du jour.
8. Nettoyer : `git worktree remove ~/work/Sites/_worktrees/loop-YYYY-MM-DD/cnr` puis `git worktree prune`. Si le retrait échoue, **laisser en place et le signaler** — ne jamais forcer.
