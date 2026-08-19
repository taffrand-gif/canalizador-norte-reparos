# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-19
- Tâche prévue : `context.md` du 14/08, **tâche recommandée n°3** — « auditer `StructuredData.tsx` et `client/src/data/faqData.ts` **indépendamment du compteur** — sur CNR ce contrôle n'a **jamais** été fait en entier ».
- Tâche réellement exécutée : **la tâche prévue.** L'audit a rapporté **8 violations réelles**, dont une dans le JSON-LD.
- Branche (depuis `github/main`, **en worktree**) : `loop/2026-08-19-cnr-audit`
- Commits : 3 (2 fichiers de production, **1 par commit**, + `SEO_PLAN.md`)
- PR ouverte : **#319** — https://github.com/taffrand-gif/canalizador-norte-reparos/pull/319
- **PR jumelle ENR : #351** (même prédicat `gratuit`, même divergence de rayon)
- Résultat : ✅ 2 fichiers. **Et deux blocages de la liste qui n'en étaient pas.**

### 1. `client/src/components/StructuredData.tsx` — rayon 100 km → 130 km
`AGENTS.md` §12 L116, **verrouillé le 30/06 par Philippe** : « rayon **~130 km** autour de Macedo de Cavaleiros ».
Le JSON-LD était **le seul endroit du repo** à dire 100 km. Le reste de CNR disait déjà 130 km : `CidadesProximas.tsx` L55 · `ZonaIntervencao.tsx` L30/L37 · `Urgencia.tsx` L47/L349/L427 · `PrecoCanalizadorDesentupimentoUrgente.tsx` L80 · `QuantoCustaCanalizadorHoraPortugal.tsx` L56/L237.
Transplant **verbatim du jumeau ENR** (`StructuredData.tsx` L365) → zéro invention (R4).

### 2. `client/src/data/faqData.ts` — 7 promesses de gratuité
`PRICING.md` L51-53 (verrouillé) interdit **littéralement** « orçamento gratuito », « visita gratuita », « deslocacao gratuita » — parce que la deslocação est facturée (Z1-Z6). **Aucun compteur R12 ne teste ce prédicat.**
L17 `Deslocação incluída nas zonas próximas` → `A deslocação tem preço tabelado por zona (Z1 a Z6)` (source `PRICING.md` L46) · L59 / L71 / L89 / L125 / L140 / L164 : `gratuito|gratuita|gratuitas|gratuitos` retirés **sans nier le service rendu**.
L17 est la plus grave : **contradiction de prix en production** — la FAQ « Quanto custa chamar um canalizador em Bragança? » annonçait la deslocação incluse alors que la grille Z1-Z6 la facture.

- **Témoins R8** : `gratuit*` **6→0** · `Deslocação incluída` **1→0** · `Z1 a Z6` **0→1** · `24h/7d` **1→1** (contrôle positif) · `€` **32→32** (grille intacte) · `raio de 100 km` **1→0** · `raio de 130 km` **0→1**.
- Contrôle d'ouverture `grep -rn 'A confirmar-' client/src` = **0** ✅ (aucune régression type PR #300).
- `git diff --numstat` : **1/1 + 7/7** — une ligne remplacée pour une, aucun bloc supprimé.

## ✅ Gate merge — aucun gate actif
Vérifié ce run sur les 4 `context.md` : **aucune mention d'attente de merge**. Aucun gate réécrit.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Une PR en attente ne gèle pas le repo. Entre le 06/08 et le 09/08, la mention « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. **Ne jamais réécrire un gate de ce type.**

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-19

**La file par compteur R12 n'est plus le bon instrument sur ce repo.** Trois runs successifs ont montré que ses rangs sont majoritairement des **non-violations** (R145 autorise `24h/7 dias`) et qu'elle **ne voit ni le JSON-LD, ni les fichiers de données, ni les prédicats de `PRICING.md`**. Ce run l'a confirmé une 3ᵉ fois : les 8 violations trouvées étaient **toutes invisibles au compteur**.

| Rang | Cible | Statut |
|---|---|---|
| — | `StructuredData.tsx` · `faqData.ts` | ✅ **traités ce run (PR #319)** |
| **1** | **`client/src/components/SEO/FAQSchema.tsx` L62** — « deslocação **incluída** … raio de **50km de Bragança** » | ⏳ **PROCHAINE TÂCHE.** Double violation (contredit Z1-Z6 **et** invente un rayon). ⚠️ **Le fichier est du CODE MORT** (aucun importeur ; seul `AnswerFirstFAQSchema` est consommé) → traiter comme **retrait de code mort**, pas comme patch. **Binôme ENR** (L70), mais là-bas le fichier est pris par la PR #350 |
| 2 | Passer `grep -rn 'gratuit' client/src` + `grep -rn 'raio de' client/src` sur **tout** le repo | ⏳ le prédicat `PRICING.md` L51-53 n'a été passé que sur `faqData.ts` |
| 3 | `client/src/pages/**` — auditer les **données** (`data/`, `shared/`) comme on a audité `faqData.ts` | ⏳ le gisement était là, pas dans les composants |
| — | `PriceTable.tsx` · `OrcamentoGratuitoBadge.tsx` | ⏸ **STATUÉES** — arbitrage d'offre. Ne pas repatcher au compteur |
| — | `TrustBanner.tsx` · `SEOHead.tsx` · `CalculadorPreco.tsx` · `Blog.tsx` · `Equipa.tsx` | ⏸ **à requalifier en lecture avant tout patch** — `24h/7 dias` est **autorisé** par R145 ; ces rangs sont vraisemblablement vides de violations réelles |

## Tâche suivante recommandée
1. **`SEO/FAQSchema.tsx`** — voir rang 1. Décider retrait de code mort vs correction.
2. **Passer le prédicat `gratuit` sur tout `client/src/`** (pas seulement `faqData.ts`) et sur `client/public/`. Sur CU le même prédicat a donné **38 fichiers + 1 page** (PR #267).
3. **Auditer `shared/serviceConfig.ts`, `shared/seoKeywords.ts` et `client/src/data/`** — mêmes familles que `faqData.ts`, mêmes angles morts.
4. **`10 anos de experiência em Bragança`** (`faqData.ts` L164) — claim non sourcé, famille R11. À arbitrer ou à retirer.
5. **Batch R145 `rápida`/`rápido`/`prioritári` — 130 occurrences dans `client/src/`.** GO Philippe requis. Patron validé : ventiler → prototyper sur 1 page → GO en un tap.
6. Vocabulaire de remplacement validé, **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159. Pronoms : `AGENTS.md` §12. **Privilégier le RETRAIT** quand la ligne n'a pas d'équivalent honnête.

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — un « arbitrage en attente » peut être une décision DÉJÀ PRISE que personne n'est allé relire.** Le rayon 100 vs 130 km figurait en blocage n°4 depuis 3 runs comme « arbitrage à 1 tap ». Il était **verrouillé dans `AGENTS.md` §12 depuis le 30/06**. ➡️ **Avant d'inscrire un blocage comme « arbitrage requis », grepper la valeur dans `AGENTS.md` et `PRICING.md`.** Même famille que le gate R7 fantôme : *une question qu'on croit ouverte parce qu'on n'a pas relu la réponse.*
- 🔴 **NOUVEAU — `PRICING.md` porte des interdictions verbatim qu'aucun compteur ne teste.** L51-53 bannit `gratuito / gratuita` **par construction** (la deslocação est facturée). Prédicat de grep trivial, **jamais passé sur `client/src/` en 2 mois** : **6 occurrences ici, 2 sur ENR, 38 fichiers + 1 page sur CU**. ➡️ **Ajouter `grep -c 'gratuit'` au contrôle d'ouverture des 4 repos.**
- 🔴 **NOUVEAU — une divergence de doctrine se grep sur la VALEUR, jamais depuis un fichier.** Le `context.md` du 14/08 concluait « ENR est conforme » après avoir lu `StructuredData.tsx` seul ; la PR #351 montre qu'ENR avait **aussi** un 100 km dans `faqData.ts`. **Un contrôle mono-fichier ne clôt rien.**
- 🔴 **Les fichiers de DONNÉES sont l'angle mort permanent.** `faqData.ts` n'est ni un composant (invisible au compteur) ni du HTML (invisible aux greps de `public/`). Il portait 7 violations. ➡️ **`client/src/data/` et `shared/` doivent être audités comme des pages.**
- 🟢 **Le binôme cross-repo tient une 3ᵉ fois.** Même prédicat, même divergence, 2 PR, ~20 min d'écart de propagation contre 6 à 14 jours en traitement séparé. **À reconduire systématiquement.**
- 🔴 **Une PR mergée peut DISPARAÎTRE de `main`** (PR #300, `state=MERGED`, merge commit ancêtre d'aucune branche). ➡️ **Contrôle de fin de run : `git merge-base --is-ancestor <mergeCommit> <remote>/main`.** Le statut `MERGED` seul ne prouve rien.
- 🔴 **Le compteur de la file mélange DEUX règles et sur-compte.** R145 autorise `24h/7 dias` ; seuls `resposta rápida`, `resposta prioritária` et les **délais chiffrés** sont interdits. **Requalifier chaque occurrence contre le texte verrouillé AVANT de patcher.**
- 🔴 **Le compteur n'est pas exhaustif non plus** : il ne parcourt que les composants importés par `OptimizedHome.tsx`. **Une fois le motif identifié, le grepper sur TOUT `client/src/`.**
- 🔴 **Vérifier les PR ouvertes AVANT de patcher un fichier.** A évité 3 conflits ce run (#311 sur la garantie, #350 et #342 côté ENR). `gh pr view <n> --json files` en début de run.
- 🔴 **Une purge de conformité peut casser le CODE, pas seulement le texte.** Toute purge par motif court doit exclure les chaînes `className` et `client/src/components/ui/`.
- 🔴 **Un batch de conformité peut corrompre la RÈGLE qu'il applique** (leçon CU, `fb9dd2415`). **Tout batch doit exclure `AGENTS.md`, `SEO_PLAN.md`, `context.md`, `CLAUDE.md`.** Avant d'escalader une contradiction de doctrine : `git log -S "<fragment>" -- AGENTS.md`.
- **Ne pas sur-purger.** R4 se viole dans les deux sens : inventer **et** effacer ce qui est vrai. Ce run : le service rendu (diagnóstico, análise) est conservé, seule la **gratuité** est retirée.
- **Vérifier qu'une chaîne n'est pas une CLÉ D'OBJET** avant de la renommer (`value: 'urgente'` dans `Diagnostico.tsx`).
- **`npx tsc` est un piège.** Utiliser `./node_modules/.bin/tsc --noEmit`. Baseline mesurée le 14/08 : **322**.
- A5-2, B1, B2, B3 sont TERMINÉS — ne pas les rouvrir.

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Sandbox `mcp__workspace__bash` : `git fetch` OK (repos publics), **`git push` impossible** (`could not read Username` — le credential helper pointe `/opt/homebrew/bin/gh`, absent du sandbox). **Répartition confirmée ce run** : lecture / grep / parsing Python → sandbox ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process`.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Worktrees sous `~/work/Sites/_worktrees/loop-YYYY-MM-DD/{cnr,enr,cu,eu}` — **lisibles depuis le sandbox**, ce qui permet grep/parsing rapides sur l'état exact de `<remote>/main`.
- **Les commandes `git` ne fonctionnent PAS depuis le sandbox dans un worktree** (le `.git` contient un chemin absolu host). En revanche **l'écriture de fichiers depuis le sandbox fonctionne** — utilisée ce run pour la substitution de masse sur EU.
- 🔴 **`git diff origin/main..HEAD` sur CE repo peut sortir un diff énorme** : `origin` et `github` pointent tous deux vers GitHub mais `origin/main` peut être très en retard. **Toujours diffuser contre `github/main`.**
- 🔴 **`gh pr diff <n>` peut dépasser la limite de sortie de l'outil** (65 k caractères). Préférer `gh pr view <n> --json files --jq '.files[].path'`.
- 🔴 **zsh ne fait PAS de word-splitting** : `for p in "a b"; do set -- $p; done` échoue silencieusement. Écrire les paires en dur ou utiliser des tableaux.
- 🔴 **`grep -P` n'existe pas sur macOS** — dans une chaîne `&&` il fait échouer tout le reste. **Utiliser Python pour tout motif non trivial.**
- 🔴 **`git commit -m` multiligne avec backticks/parenthèses est fragile en zsh.** Utiliser `git commit -F -` avec un heredoc `<<'MSG'`.
- 🔴 **`set -e` + zsh : un glob sans correspondance fait AVORTER tout le script.** Utiliser `setopt null_glob`.
- Corps de PR long : fichier + `gh pr create --body-file`, jamais `--body` inline.
- Untracked `.worktrees/`, `_audit/`, `_indexing/` à la racine (autres automations) — inoffensifs, ne jamais les committer/supprimer.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Vérifié ce run : aucun `context.md` des 4 repos ne *prescrit* de `reset --hard` — les mentions trouvées sont des **interdictions**. Rien à corriger.

## Blocages connus
1. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** (`shared/serviceConfig.ts` L67) : `<h3>` homepage, **clé de lookup** dans 3 tables d'`OptimizedServices.tsx`, repris dans 9 `description` de `shared/seoKeywords.ts` et ~20 pages `client/src/pages/cidades/*.tsx`. Le renommer **change l'offre affichée** → GO Philippe. **Même question sur ENR : un seul arbitrage débloque les 2 repos.**
2. 🛑 **Batch `Atendimento 24h`** (192 occurrences dans `client/src/`) — attente GO.
3. 🛑 **Batch FAQ (~815 fichiers)** et **batch prix (~73)** demandés dans PR #240 : décision de périmètre parkée par Philippe. Rappel d'une ligne, ne pas relancer à chaque run.
4. ✅ **REFERMÉ — rayon de couverture 100 vs 130 km.** Ce n'était pas un arbitrage : `AGENTS.md` §12 le verrouille à ~130 km depuis le 30/06. Appliqué dans la PR #319.
5. ⚠️ **`10 anos de experiência em Bragança`** (`faqData.ts` L164) — claim non sourcé, famille R11. Sourcer ou retirer.
