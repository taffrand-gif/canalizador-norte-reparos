# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-14
- Tâche prévue : **file de tâches loop, rang 1 — `Contactos.tsx`** (binôme ENR).
- Tâche réellement exécutée : **2 PR — (1) une régression R11/R12 détectée au contrôle d'ouverture, traitée en priorité, (2) la tâche prévue, requalifiée en R145.**
- Branches (depuis `github/main`, **en worktree**) :
  - `loop/2026-08-14-canalizador-norte-reparos-r11-restaure-pr300` → **PR #301** — 12 commits (11 fichiers de production + `SEO_PLAN.md`)
  - `loop/2026-08-14-canalizador-norte-reparos-r145-resposta-24h` → **PR #302** — 4 commits (3 fichiers de production + `SEO_PLAN.md`)

### 🔴 PR #301 — la PR #300 avait été mergée PUIS PERDUE
Le contrôle d'ouverture prescrit ici même (`grep -rn 'A confirmar-' client/src` doit valoir **0**) est ressorti à **17**, sur les **mêmes 11 fichiers** que la PR #300 du 13/08. Or `gh pr view 300` déclare `state=MERGED, mergedAt=2026-08-13T01:33:15Z`.
Diagnostic : le merge commit `5b187a3430` **n'est ancêtre d'aucune branche** (`git merge-base --is-ancestor 5b187a3430 github/main` → faux ; `git branch -a --contains` → vide). **`main` a été réécrit après le 13/08 01:33 UTC**, ce qui a silencieusement annulé la restauration.
Audit de contrôle sur les **25 dernières PR mergées** : **#300 est la seule perdue** (24/25 ancêtres de `main`) → **incident isolé, pas systémique**. Audit équivalent mené sur ENR (12 dernières PR) : **aucune perte**.
Restauration **verbatim** : `git checkout 5b187a3430 -- <fichier>`, après avoir vérifié que les 11 fichiers de `github/main` sont **identiques au parent du merge perdu** (`a6ff2ae0f4`) — ré-application exacte, sans conflit.
Témoins R8 : `A confirmar-` **17→0** · `min-w-` **19→33** · `min-h-` **137→140** · `z-50` **28→31** · `A confirmar` total **234→217** (contrôle positif : la purge de contenu n'est pas défaite).

### PR #302 — R145, et une requalification doctrinale
Texte verrouillé de R145 (`~/.openclaw/workspace/AGENTS.md` §12) : « **24h/7 dias OK**, *resposta rápida* / *resposta prioritária* **BANNIS** ».
➡️ Sur les 4 occurrences annoncées pour `Contactos.tsx`, **une seule est une violation réelle** : `Resposta em 24h` (L193). `Disponível Atendimento 24h/7d` (L167), `Atendimento 24h/7d` (L234) et `7 dias por semana, incluindo feriados` (L237) sont des claims de **disponibilité**, explicitement autorisés.
🔎 Le compteur de la file **sous-estimait le périmètre** : `Resposta em 24h` existe en **3** exemplaires, pas 2 — `pages/Zonas.tsx` L155 n'y figurait pas.
Traitement : `OrcamentoGratuitoBadge.tsx` L15 → `Orçamento por escrito em 48h` (verbatim `siteConfig.ts` L108/L124) · `Contactos.tsx` L192-194 → **retrait du `<p>`** · `Zonas.tsx` → 3 substitutions (span, hero `Intervenção rápida`, **meta description** `Serviço rápido`).
Témoins R8 : `Resposta em 24h` **3→0** · `Intervenção rápida` **30→29** · `Serviço rápido` **2→1** · `Orçamento por escrito em 48h` **5→8**. `tsc` : **0 erreur** sur les fichiers patchés.
## ✅ Gate merge — aucun gate actif
Vérifié ce run : aucune mention d'attente dans les 4 `context.md`. Aucun gate réécrit.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Une PR en attente ne gèle pas le repo. Entre le 06/08 et le 09/08, la mention « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production** sur un backlog de 73 tâches. **Ne jamais réécrire un gate de ce type.**

🆕 **Corollaire découvert ce run** : le statut `MERGED` de l'API GitHub **n'est pas une preuve de présence en production**. Voir §Contrôles obligatoires.
## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-13

Recompte effectué en début de run sur `github/main`. **Compteurs inchangés depuis le 12/08** (le run a porté sur une régression hors file).

| Rang | Composant | Occ. R12 | Statut |
|---|---|---|---|
| — | `FAQLocal.tsx`, `InnovativeHero.tsx` | 0 | ✅ |
| — | `FAQ.tsx` (3) · `OptimizedServices.tsx` (7) · `Footer.tsx` (5) · `Diagnostico.tsx` (5) | — | ✅ résiduel hors périmètre |
| — | `PriceTable.tsx` | 4 | ⏸ **STATUÉE** — arbitrage d'offre requis. Ne pas repatcher au compteur. |
| — | **`OrcamentoGratuitoBadge.tsx`** | **4** | ⏸ **STATUÉE ce run, sans patch** — voir ci-dessous |
| **1** | **`Contactos.tsx`** | **4** | ⏳ **PROCHAINE TÂCHE — binôme ENR, fichier quasi identique** |
| 3 | `TrustBanner.tsx` | 2 | ⏳ à faire — L5 `'Disponível Atendimento 24h/7d'` |
| 3 | `SEOHead.tsx` · `CalculadorPreco.tsx` · `Blog.tsx` | 2 | ⏳ à faire |
| 7 | `Equipa.tsx` | 1 | ⏳ à faire |
| — | Header, PremiumBar, StatsCounters, Trabalhos, LatestBlog, Garantias, Testimonials, GoogleReviews, ZonaIntervencao, ScrollToTop | 0 | rien à faire (R12) |

### ⏸ `OrcamentoGratuitoBadge.tsx` — statué en lecture, **1 seule violation réelle sur 4**
- L1, L5, L14 : `Gratuito` / `GRATUITO` — **non-violations confirmées** (doctrine : « Orçamento grátis » ne se re-flague pas).
- **L15 : `Sem compromisso • Resposta em 24h`** — ✅ **violation réelle**, promesse de délai, **au-dessus de la ligne de flottaison de la homepage**.
- 🔗 **Ligne strictement identique sur ENR** (`OrcamentoGratuitoBadge.tsx` L15). **Binôme évident, à traiter dans le même run.**

## Tâche suivante recommandée
1. **`TrustBanner.tsx`** (rang 3) — L5 `'Disponível Atendimento 24h/7d'`. ⚠️ **À requalifier d'abord** : d'après le texte verrouillé de R145, `24h/7d` est **autorisé** — cette entrée est probablement une **non-violation**, comme 3 des 4 lignes de `Contactos.tsx`. **Statuer en lecture avant de patcher.**
2. **Repasser toute la file au filtre R145.** Le compteur de la file agrège `24h|24 horas|urgent|urgência|emergência|7 dias|prioritári` — or **seuls `prioritári`, `rápid` et les délais chiffrés sont interdits**. Plusieurs rangs restants sont vraisemblablement vides de violations réelles. **Une passe de requalification vaut plusieurs runs de patch.**
3. **Auditer `StructuredData.tsx` et `client/src/data/faqData.ts`** indépendamment du compteur — sur ENR, CU et EU, c'est là qu'étaient les violations les plus graves. Sur CNR ce contrôle n'a **jamais** été fait en entier.
4. **Batch R145 `rápida`/`rápido`/`prioritári` — 130 occurrences dans `client/src/`.** GO Philippe requis. Le patron validé est : ventiler par variante → prototyper sur 1 page → demander le GO en un tap.
5. Vocabulaire de remplacement validé, **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159. Pronoms : `AGENTS.md` §12. **Privilégier le RETRAIT** quand la ligne n'a pas d'équivalent honnête.
## Apprentissages (self-improving)
- 🔴 **NOUVEAU — une PR mergée peut DISPARAÎTRE de `main`.** PR #300 : `state=MERGED`, merge commit ancêtre d'aucune branche. `main` a été réécrit après coup et la correction a été annulée sans aucun signal. ➡️ **Contrôle à passer en fin de run sur chaque PR déclarée mergée : `git merge-base --is-ancestor <mergeCommit> <remote>/main`.** Le statut `MERGED` seul ne prouve rien.
- 🔴 **NOUVEAU — le compteur de la file mélange DEUX règles et sur-compte.** Le texte verrouillé de R145 autorise `24h/7 dias` ; seuls `resposta rápida`, `resposta prioritária` et les **délais chiffrés** sont interdits. Sur `Contactos.tsx`, **1 violation réelle sur 4 annoncées**. ➡️ **Requalifier chaque occurrence contre le texte verrouillé AVANT de patcher.** R4 se viole aussi en effaçant du contenu vrai.
- 🔴 **NOUVEAU — le compteur de la file n'est pas exhaustif non plus.** Il ratait `pages/Zonas.tsx` (le compteur ne parcourt que les composants importés par `OptimizedHome.tsx`). ➡️ **Après avoir identifié le motif exact, le grepper sur TOUT `client/src/` avant de figer le périmètre.**
- 🔴 **NOUVEAU — la divergence de rayon est tranchée par la doctrine.** `AGENTS.md` §12 (verrouillé 30/06 par Philippe) : « rayon **~130 km** autour de Macedo de Cavaleiros ». **ENR (130 km) est conforme ; c'est CNR (100 km) qui diverge.** Non patché — changer un rayon affiché est une décision d'offre. Signalé dans la PR #302. **1 tap tranche les 2 repos.**
- ⚠️ **NOUVEAU — la baseline `tsc` a dérivé : 322, plus 215.** Mesurée à l'identique sur `github/main` intact et sur les branches. Le contrôle de sanité reste valable, **la constante est mise à jour ici : total attendu = 322**.
- 🔴 **Le contrôle d'ouverture `grep -rn 'A confirmar-' client/src` = 0 a payé une seconde fois.** C'est lui qui a détecté la perte de la PR #300. **Le conserver en tête de run.**
- 🔴 **NOUVEAU — une purge de conformité peut casser le CODE, pas seulement le texte.** Le motif `<N> min` vise « chegamos em 20 min » mais matche aussi `border-2 min-h-32`. ➡️ **Toute purge par motif court doit exclure les chaînes `className` et le répertoire `client/src/components/ui/`, ou être restreinte aux nœuds de texte.** Contrôle à passer en début de run : `grep -rn 'A confirmar-' client/src` doit retourner **0**.
- 🔴 **NOUVEAU — le titre d'une PR de batch n'est pas une mesure de son étendue.** PR #215 annonçait « 1 .ts » et portait 11 fichiers corrompus. ➡️ **Vérifier `git show --stat`, jamais le titre.**
- 🔴 **NOUVEAU — le repo jumeau est une source de vérité pour restaurer VERBATIM.** `git log -S` a buté sur un import initial (pas de pre-image reconstructible). Le jumeau ENR, non affecté, a fourni les 17 valeurs exactes sur les lignes homologues. **Zéro invention (R4).** Réutilisé une seconde fois le même run sur ENR (transplant d'une réponse JSON-LD). ➡️ **Réflexe à généraliser : avant de déclarer une valeur irrécupérable, regarder le jumeau.**
- 🔴 **NOUVEAU — le binôme cross-repo est aussi un détecteur de PÉRIMÈTRE.** Le scan des 4 repos a donné **CNR 17 / ENR 0 / CU 0 / EU 0** : la purge n'avait frappé qu'un repo. Une passe, une certitude.
- 🔴 **NOUVEAU (venu d'ENR ce run) — le compteur R12 ne voit pas le JSON-LD.** Sur ENR, `StructuredData.tsx` affichait **0** au compteur et portait pourtant un claim 24h/7d **et** un prix inventé, dans la surface que Google lit. ➡️ **Contrôle à ajouter en début de run sur CNR aussi : auditer `StructuredData.tsx` indépendamment du compteur.** (Sur CNR, la réponse « horário » est déjà conforme — c'est elle qui a servi de source à ENR.)
- 🔴 **NOUVEAU (venu d'ENR ce run) — un doublon `X e X` est une signature de purge**, au même titre qu'un suffixe orphelin. Motif de détection : `(\b\w[\w\s]{4,}\b) e \1`.
- ⚠️ **À vérifier au prochain run — divergence CNR/ENR sur le rayon de couverture.** `StructuredData.tsx` de CNR annonce « raio de **100 km** », celui d'ENR « **130 km** », pour la même région. Le `PRICING.md` de CU parle d'un rayon route **~130 km** depuis Macedo de Cavaleiros. ➡️ **C'est peut-être CNR qu'il faut corriger, pas ENR. Un seul arbitrage tranche les 2 repos.**
- **Le compteur R12 brut est un indicateur, pas un verdict.** Clore explicitement les entrées dont le résiduel est hors périmètre, sinon chaque run reprend le même rang 1.
- **Vérifier qu'une chaîne n'est pas une CLÉ D'OBJET** : `value: 'urgente'` dans `Diagnostico.tsx` est consommé par `if (urgency === 'urgente')` — le renommer casse le message WhatsApp **sans erreur TypeScript**.
- **Ne pas sur-purger.** R4 se viole dans les deux sens : inventer **et** effacer ce qui est vrai.
- **Vérifier si les occurrences sont derrière un ternaire statiquement faux** avant de patcher au compteur (`config.id === 'norte-reparos'` est **vrai** ici, donc c'est la branche électricité qui est morte).
- 🔎 **Gisement mesuré le 11/08 : `Atendimento 24h` = 192 occurrences dans `client/src/`.** Artefacts de purge, grammaticalement cassés. **Batch → GO Philippe.**
- 🔴 **Un batch de conformité peut corrompre la RÈGLE qu'il applique** (leçon CU, `fb9dd2415`). **Tout batch de substitution doit exclure `AGENTS.md`, `SEO_PLAN.md`, `context.md`, `CLAUDE.md`.** Et **avant d'escalader une contradiction de doctrine : `git log -S "<fragment>" -- AGENTS.md`.**
- **`npx tsc` est un piège** (résout vers un paquet npm homonyme, sort en erreur sans rien typer). Utiliser **`./node_modules/.bin/tsc --noEmit`**, total attendu **215**. Dans un worktree : `ln -sfn ~/work/Sites/canalizador-norte-reparos/node_modules ./node_modules`, puis `rm -f ./node_modules` **avant** le commit.
- A5-2, B1, B2, B3 sont TERMINÉS — ne pas les rouvrir.

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Sandbox `mcp__workspace__bash` : ni `gh` ni credentials en écriture (`git push` → « could not read Username ») ; `git fetch` y fonctionne (repos publics) et la lecture/grep y est excellente. **Répartition confirmée ce run encore** : lecture / grep / scripts Python → sandbox ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process` (host, `gh` authentifié `taffrand-gif`).
- 🔴 **`git diff origin/main..HEAD` sur CE repo peut sortir un diff énorme** : `origin` et `github` pointent tous deux vers GitHub mais `origin/main` peut être très en retard. **Toujours diffusion contre `github/main`.**
- ⚠️ **Le sandbox ne peut pas supprimer les `.git/objects/*.lock`** — `git fetch` émet des warnings d'unlink mais **réussit**.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Worktrees sous `~/work/Sites/_worktrees/loop-YYYY-MM-DD/{cnr,enr,cu,eu}` — **lisibles depuis le sandbox**, ce qui permet grep/parsing rapides sur l'état exact de `<remote>/main`.
- **Les commandes `git` ne fonctionnent PAS depuis le sandbox dans un worktree** (le `.git` contient un chemin absolu host).
- 🔴 **`grep -P` n'existe pas sur macOS** — un `grep -P` dans une chaîne `&&` fait échouer tout le reste de la commande (un commit a été silencieusement sauté ce run). **Utiliser Python pour tout motif non trivial.**
- 🔴 **`git commit -m` avec un message multiligne contenant des backticks/parenthèses est fragile en zsh.** Utiliser `git commit -F -` avec un heredoc `<<'MSG'`.
- 🔴 **`set -e` + zsh : un glob sans correspondance fait AVORTER tout le script.** Utiliser `setopt null_glob`.
- Corps de PR long : fichier + `gh pr create --body-file`, jamais `--body` inline.
- Untracked `.worktrees/`, `DESIGN.md`, `_audit/`, `_indexing/` à la racine (autres automations) — inoffensifs, ne jamais les committer/supprimer.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Vérifié ce run : aucun `context.md` des 4 repos ne *prescrit* de `reset --hard` — les 2 mentions trouvées (CU, EU) sont des **interdictions**. Rien à corriger.

## Blocages connus
1. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** (`shared/serviceConfig.ts` L67) : `<h3>` homepage, **clé de lookup** dans 3 tables d'`OptimizedServices.tsx`, repris dans 9 `description` de `shared/seoKeywords.ts` et ~20 pages `client/src/pages/cidades/*.tsx`. Le renommer **change l'offre affichée** → GO Philippe. **Même question sur ENR : un seul arbitrage débloque les 2 repos.** Se tranche avec la question `PriceTable.tsx`.
2. 🛑 **Batch `Atendimento 24h`** (192 occurrences dans `client/src/`) — attente GO.
3. 🛑 **Batch FAQ (~815 fichiers)** et **batch prix (~73)** demandés dans PR #240 : décision de périmètre parkée par Philippe. Rappel d'une ligne, ne pas relancer à chaque run.
4. ⚠️ **Rayon de couverture 100 km (CNR) vs 130 km (ENR)** — voir Apprentissages. Arbitrage à 1 tap, débloque les 2 repos.
