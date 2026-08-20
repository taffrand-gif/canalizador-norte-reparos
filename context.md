# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-20
- Tâche prévue : rang 1 de la file du 19/08 — `client/src/components/SEO/FAQSchema.tsx`, **à traiter en retrait de code mort**.
- Tâche réellement exécutée : **la tâche prévue**, plus la propagation qu'elle a fait apparaître.
- Branche (depuis `github/main`, **en worktree**) : `loop/2026-08-20-cnr-faqschema-deadcode`
- Commits : 5 (4 fichiers de production, **1 par commit**, + `SEO_PLAN.md`)
- PR ouverte : **#321** — https://github.com/taffrand-gif/canalizador-norte-reparos/pull/321
- Résultat : ✅ 1 fichier supprimé + 3 fichiers corrigés. **La tâche annoncée pour 1 violation en portait 10, et le contrôle du run précédent était faux.**

### 1. `client/src/components/SEO/FAQSchema.tsx` — supprimé (code mort)
Contrôle d'importeurs **avant** patch : `FAQSchema` → 0 importeur hors `AnswerFirstFAQSchema` (composant distinct, seul consommé) ; `canalizadorFAQs` → 0 consommateur (1 occurrence = sa définition). Le fichier portait **10 violations** et non 1 : `raio de 50km` + `deslocação está incluída` (L62, contredit Z1-Z6 de `PRICING.md` L46 **et** le rayon ~130 km) · `orçamento é sempre gratuito` (L58) et `reparamos gratuitamente` (L46), interdits verbatim par `PRICING.md` L51-53 · `Resolvemos 95% dos casos` (L54), statistique non sourcée · `12 anos de experiência` (L70), contredit les « 10 anos » de `faqData.ts` · `até A confirmar nas aldeias` (L38), placeholder non substitué servi en clair · 4 prix en dur doublonnant `PRICING.md`.
**Retrait plutôt que correction** : rien ne le consomme ; le corriger aurait maintenu une seconde source de vérité concurrente de `faqData.ts`.

### 2. Rayon verrouillé ~130 km — 3 fichiers (`AGENTS.md` L118, verrouillé le 30/06)
Le `context.md` du 19/08 écrivait « le JSON-LD était **le seul endroit du repo** à dire 100 km ». **C'était faux** : le grep de la valeur `raio de …km` sur tout `client/src/` en sortait **6 autres**. Corrigés ici : `pages/Zonas.tsx` L112 (`description` du JSON-LD `Service`) et L149 (paragraphe sous le H1) · `pages/FAQ.tsx` L57 · `components/ZonaIntervencao.tsx` L1 (commentaire qui contredisait le code du même fichier à L37). Graphie `raio de 130km` transplantée **verbatim** de `CidadesProximas.tsx` L55 → zéro invention (R4).

- **Témoins R8** (`client/src` + `shared`) : `raio de 50km` **1→0** · `raio de 100km` **3→0** · `raio de 130km` **1→4** · `95% dos casos` **1→0** · `12 anos de experiência` **8→7** · `canalizadorFAQs` **1→0** · `deslocação está incluída` **2→1** (résiduel = une *question* de FAQ dans `TransparencePrix.tsx` L104, pas un claim).
- `git diff --numstat` sur `Zonas.tsx` : **2/2** — une ligne remplacée pour une, aucun bloc supprimé.
- **`tsc --noEmit` : 215 sur la branche, 215 sur un worktree détaché `github/main` intact → 0 régression.**

## ✅ Gate merge — aucun gate actif
Vérifié ce run : **aucune mention d'attente de merge** dans les 4 `context.md`. Aucun gate réécrit.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Une PR en attente ne gèle pas le repo. Entre le 06/08 et le 09/08, la mention « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. **Ne jamais réécrire un gate de ce type.**

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-20

**Le compteur R12 reste le mauvais instrument sur ce repo** (4ᵉ confirmation). Ce run l'a montré autrement : les 10 violations retirées étaient dans un fichier que **rien n'importe** — invisible à tout compteur qui part de `OptimizedHome.tsx`.

| Rang | Cible | Statut |
|---|---|---|
| — | `SEO/FAQSchema.tsx` · `Zonas.tsx` · `FAQ.tsx` · `ZonaIntervencao.tsx` | ✅ **traités ce run (PR #321)** |
| **1** | **`components/StructuredData.tsx` L323** — `raio de 100 km` restant | ⏳ **PROCHAINE TÂCHE, mais BLOQUÉE tant que la PR #319 est ouverte** (elle corrige L365 du même fichier, pas L323). Reprendre **après merge de #319**. |
| **2** | **`grep -rn 'gratuit' client/src` = 123 occurrences** | ⏳ le prédicat `PRICING.md` L51-53 n'a été passé que sur `faqData.ts` et le code mort. **C'est le plus gros gisement mesuré du repo.** Ventiler par famille avant de patcher. |
| **3** | **Composants sans importeur** — chercher les autres `client/src/components/**` orphelins | ⏳ **nouveau rang, meilleur rapport effort/risque de la file** (0 risque prod, pas d'arbitrage d'offre). Méthode en §Apprentissages. |
| 4 | `shared/serviceConfig.ts`, `shared/seoKeywords.ts`, `client/src/data/` | ⏳ mêmes familles que `faqData.ts`, mêmes angles morts |
| — | `PriceTable.tsx` · `OrcamentoGratuitoBadge.tsx` | ⏸ **STATUÉES** — arbitrage d'offre. Ne pas repatcher au compteur |
| — | `TrustBanner.tsx` · `SEOHead.tsx` · `CalculadorPreco.tsx` · `Blog.tsx` · `Equipa.tsx` | ⏸ **à requalifier en lecture avant tout patch** — `24h/7 dias` est **autorisé** par R145 ; ces rangs sont vraisemblablement vides de violations réelles |

## Tâche suivante recommandée
1. **Rang 3 — l'audit des composants orphelins**, à faire en premier : c'est du retrait sans risque et le run de ce soir montre que le gisement y est dense. Méthode validée : pour chaque `client/src/components/**/*.tsx`, grepper son nom d'export sur `client/src` + `shared` ; 0 occurrence hors définition ⇒ code mort.
2. **Rang 2 — le prédicat `gratuit` sur tout `client/src/` (123) et `client/public/`.** Sur CU le même prédicat avait donné 38 fichiers + 1 page (PR #267).
3. **`StructuredData.tsx` L323** dès que #319 est mergée. ⚠️ **#319 ne corrige qu'une des deux occurrences du fichier** — ne pas la croire close sur son titre.
4. **`10 anos de experiência em Bragança`** (`faqData.ts` L164) — claim non sourcé, famille R11. À arbitrer ou retirer. Le « 12 anos » concurrent a disparu avec le code mort, mais **7 occurrences de `12 anos de experiência` subsistent ailleurs** : la contradiction 10 vs 12 est toujours en production.
5. **Batch R145 `rápida`/`rápido`/`prioritári` — 130 occurrences.** GO Philippe requis.
6. Vocabulaire de remplacement validé, **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159. Pronoms : `AGENTS.md` §12. **Privilégier le RETRAIT** quand la ligne n'a pas d'équivalent honnête.

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — une leçon écrite dans un `context.md` n'est pas une leçon appliquée.** Le run du 19/08 a écrit « une divergence de doctrine se grep sur la VALEUR, jamais depuis un fichier » **et**, dans le même fichier, a conclu « le JSON-LD était le seul endroit à dire 100 km » — conclusion mono-fichier. Le grep de `raio de …km` sortait **6 divergences restantes**. ➡️ **Quand un run corrige une valeur verrouillée, le contrôle de FIN de run est le grep de cette valeur sur tout `client/src/`, jamais la relecture du fichier patché.**
- 🔴 **NOUVEAU — le CODE MORT est un gisement de violations à part entière, et le meilleur rapport effort/risque de la file.** 10 violations retirées en une suppression : 0 risque de production (aucun importeur), 0 arbitrage d'offre, 0 vocabulaire à inventer. **Et il est invisible à tous les compteurs**, qui partent de `OptimizedHome.tsx`. ➡️ **Méthode d'ouverture** : pour chaque composant, `grep -rn "<NomExport>" client/src shared` ; si la seule occurrence est sa propre définition, c'est du code mort — le traiter avant tout patch au compteur.
- 🔴 **NOUVEAU — `tsc --noEmit` = 215, pas 322.** La baseline **322** inscrite le 14/08 est **fausse**. Mesurée ce run sur un worktree **détaché `github/main` intact** : 215. ➡️ Contrôle de sanité correct : **« total ≠ 215 ⇒ tsc n'a pas tourné »**. ➡️ Et plus généralement : **une baseline se remesure sur un arbre intact dans le même run, jamais recopiée d'un `context.md`.**
- 🔴 **Un titre de PR ne dit pas ce que la PR couvre.** #319 s'intitule « JSON-LD rayon 100→130 km » et ne corrige que L365 de `StructuredData.tsx` ; L323 du même fichier reste à 100 km. **Vérifier le diff, pas le titre.**
- 🔴 **Vérifier les PR ouvertes AVANT de patcher un fichier** — `gh pr view <n> --json files --jq '.files[].path'`. A évité un conflit ce run (#319), 3 au run précédent. **2 runs consécutifs : à garder en ouverture systématique.**
- 🔴 **`PRICING.md` porte des interdictions verbatim qu'aucun compteur ne teste** (L51-53 : `gratuito`/`gratuita`, la deslocação étant facturée Z1-Z6). **123 occurrences de `gratuit` subsistent dans `client/src/`.**
- 🔴 **Les fichiers de DONNÉES sont un angle mort permanent** (`client/src/data/`, `shared/`) : ni composants, ni HTML.
- 🔴 **Une PR mergée peut DISPARAÎTRE de `main`** (PR #300). Contrôle : `git merge-base --is-ancestor <mergeCommit> <remote>/main`. Le statut `MERGED` seul ne prouve rien. ⚠️ **Faux sur un merge en squash** — chercher plutôt `(#N)` dans `git log --oneline`.
- 🔴 **Le compteur R12 sur-compte** : R145 **autorise** `24h/7 dias` ; seuls `resposta rápida`, `resposta prioritária` et les délais chiffrés sont interdits. Requalifier chaque occurrence contre le texte verrouillé **avant** de patcher.
- 🔴 **Un batch de conformité peut corrompre la RÈGLE qu'il applique** (leçon CU, `fb9dd2415`). Tout batch doit exclure `AGENTS.md`, `SEO_PLAN.md`, `context.md`, `CLAUDE.md`. Avant d'escalader une contradiction de doctrine : `git log -S "<fragment>" -- AGENTS.md`.
- 🔴 **Avant d'inscrire un blocage comme « arbitrage requis », grepper la valeur dans `AGENTS.md` et `PRICING.md`** — le rayon 100 vs 130 km y était verrouillé depuis le 30/06 et a stagné 3 runs comme « arbitrage à 1 tap ».
- **Ne pas sur-purger.** R4 se viole dans les deux sens : inventer **et** effacer ce qui est vrai.
- **Vérifier qu'une chaîne n'est pas une CLÉ D'OBJET** avant de la renommer.
- A5-2, B1, B2, B3 sont TERMINÉS — ne pas les rouvrir.

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Sandbox `mcp__workspace__bash` : `git fetch` OK (repos publics), **`git push` impossible** (`could not read Username` — le credential helper pointe `/opt/homebrew/bin/gh`, absent du sandbox). **Répartition reconfirmée ce run** : lecture / grep / parsing Python / **écriture de fichiers** → sandbox ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process`.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Worktrees sous `~/work/Sites/_worktrees/loop-YYYY-MM-DD/{cnr,enr,cu,eu}` — **lisibles depuis le sandbox** via son montage, ce qui permet grep/parsing rapides sur l'état exact de `<remote>/main`.
- **Les commandes `git` ne fonctionnent PAS depuis le sandbox dans un worktree** (le `.git` contient un chemin absolu host). **L'écriture de fichiers, si.**
- **`tsc` dans un worktree** : `ln -sfn <checkout>/node_modules ./node_modules` avant, **et retirer le lien avant le commit** (sinon `node_modules` part dans le diff).
- 🔴 **Toujours diffuser contre `github/main`** : `origin/main` peut être très en retard sur ce repo (les deux remotes pointent pourtant vers GitHub).
- 🔴 `gh pr diff <n>` peut dépasser 65 k caractères → préférer `gh pr view <n> --json files --jq '.files[].path'`.
- 🔴 **`grep -P` n'existe pas sur macOS** ; **zsh ne fait pas de word-splitting** ; **`set -e` + glob vide fait avorter le script** (`setopt null_glob`). Pour tout motif non trivial : **Python**.
- 🔴 **`git commit -m` multiligne est fragile en zsh** → `git commit -F -` avec heredoc `<<'MSG'`. Corps de PR : `--body-file`, jamais `--body` inline.
- Untracked `.worktrees/`, `_audit/`, `_indexing/` à la racine (autres automations) — inoffensifs, ne jamais les committer/supprimer.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Vérifié ce run : le checkout partagé était sur `feat/t_45ec27ae-esgoto-entupido-round3` avec 2 dossiers non suivis — **non touché**. Aucun `context.md` des 4 repos ne *prescrit* de `reset --hard` ; les mentions trouvées sont des **interdictions**. Rien à corriger.

## Blocages connus
1. 🛑 **`components/SEOHeadEnhanced.tsx` L202 : `"geoRadius": "20000"` (20 km).** `GeoCircle` **par ville**, sémantiquement distincte du rayon d'entreprise autour de Macedo de Cavaleiros. `AGENTS.md` ne verrouille **aucun** rayon par ville → toute valeur serait une invention (R4). **Arbitrage Philippe** : 20 km est-il la couverture locale voulue, ou faut-il aligner sur 130 km ?
2. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** (`shared/serviceConfig.ts` L67) : `<h3>` homepage, **clé de lookup** dans 3 tables d'`OptimizedServices.tsx`, repris dans 9 `description` de `shared/seoKeywords.ts` et ~20 pages `cidades/*.tsx`. Le renommer **change l'offre affichée** → GO Philippe. **Même question sur ENR : un seul arbitrage débloque les 2 repos.**
3. 🛑 **Batch `Atendimento 24h`** (192 occurrences) — attente GO.
4. 🛑 **Batch FAQ (~815 fichiers)** et **batch prix (~73)** demandés dans PR #240 : décision de périmètre parkée par Philippe. Rappel d'une ligne, ne pas relancer à chaque run.
5. ⚠️ **`10 anos` vs `12 anos de experiência`** — la contradiction reste en production : 7 occurrences de `12 anos` subsistent, `faqData.ts` L164 dit `10 anos`, aucune des deux n'est sourcée (R11). Sourcer ou retirer.
6. ⏸ **`StructuredData.tsx` L323** — bloqué par la PR #319 ouverte, pas par un arbitrage. Reprendre après merge.
