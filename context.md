# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-21
- Tâche prévue : rang 3 de la file du 20/08 — audit systématique du code mort.
- Tâches réellement exécutées : **la tâche prévue**, puis une **violation découverte en cours de route** qui a pris la priorité (R11/R12).
- **2 PR ouvertes** :
  - **#322** — https://github.com/taffrand-gif/canalizador-norte-reparos/pull/322 — branche `loop/2026-08-21-cnr-audit-code-mort` — 11 commits, 10 fichiers retirés
  - **#323** — https://github.com/taffrand-gif/canalizador-norte-reparos/pull/323 — branche `loop/2026-08-21-cnr-liens-corrompus` — 46 commits, 45 fichiers, **54 liens internes morts réparés**

### 1. Audit du code mort (PR #322) — la méthode prescrite était fausse
🔴 **Le prédicat écrit dans le `context.md` du 20/08 aurait cassé la production.** « Grepper le nom d'export sur `client/src` + `shared` » sort **50 fichiers morts**, dont `blog/EsquentadorNaoAquece.tsx`, `blog/FugaAguaComoDetarReparar.tsx`, `blog/ManutencaoCanalizacaoChecklistAnual.tsx`, `blog/QuantoCustaCanalizadorPortugal.tsx` et `blog/SanitaEntupidaMetodos.tsx` — **tous consommés par `scripts/prerender-guias-cnr.mjs`**, hors du périmètre grepé.
➡️ **Prédicat corrigé** : le grep porte sur **tout le dépôt** (5509 fichiers, hors `node_modules`/`.git`/`dist`) ; les mentions dans `SEO_PLAN.md`/`context.md`/`AGENTS.md` ne comptent **pas** comme consommateurs. Résultat : **37 morts**, dont **13 porteurs de motifs**.
Requalification en lecture → **2 faux positifs écartés** : `DashboardLayout.tsx` (les « délais » étaient les classes CSS `min-w-0`) et `SEO/AnswerFirstFAQSchema.tsx` (le `garantimos` était **une citation de la règle dans un commentaire**). `data/faqData.ts` non touché : pris par la PR #319.
**10 retraits, 3 familles** : (a) placeholders `A confirmar` servis en clair, dont **deux témoignages clients fabriqués** (`UrgenciaFugaAgua.tsx` L209, `SocialProofNotification.tsx` : João/Bragança, Maria/Mirandela, Ana/Vila Real) ; (b) gratuité et garanties non sourcées ; (c) **contenu ÉLECTRICITÉ sur un site de PLOMBERIE** (`PoupancaEnergiaInverno.tsx`, `ProtecaoSobrecargas.tsx` — ce dernier servait `avaliação gratuita` **dans un JSON-LD FAQPage**). Deux fichiers étaient des **secondes sources de vérité** sur une URL déjà pré-rendue.
- **Témoins R8** (`client/src` + `shared`, avant mesuré sur worktree `github/main` **intact**) : `A confirmar` **195→179** · `gratuit` **121→110** · `% dos` **41→40** · `Garantia de 2 Anos` **2→1** · `garantimos intervenções rápidas` **1→0** · `99% dos problemas` **1→0** · `90% das avarias` **4→0**.
- **`npx tsc --noEmit` : 212 sur la branche, 215 sur `github/main` intact → 0 régression.** Baseline **215 reconfirmée** (2ᵉ run consécutif).

### 2. 🔴 Batch `repar`→`arranj` sans limite de mot (PR #323) — les 4 repos sont touchés
Trouvé en requalifiant `pages/CityPage.tsx` : « a nosso trabalho está **parranjada** ». `p|repar|ada` → `p`+`arranj`+`ada`. Un batch a remplacé la sous-chaîne `repar` par `arranj` **sans `\b`**.
**523 occurrences / 258 fichiers** sur les 4 repos — CNR 296/138 · ENR 164/81 · CU 33/19 · EU 30/20.
Formes : `parranjar` 221 (`preparar`) · `arranjacao` 113 (`reparacao`) · `parranjo` 96 (`preparação`) · `parranjada/o/os/as` 41 · `parranjou` 14 · `parranja` 8 · `parranjamos` 2 · `arranjacoes` 2.
⚠️ **Sous-ensemble grave : les `href`.** Les fichiers cibles ont gardé leur nom correct sur le disque **et les sitemaps déclarent la forme correcte** → ce sont des **404 internes durs**, pas un renommage. Réparé ici **uniquement** ce dont la cible corrigée a été vérifiée présente sur le disque.
- **Témoin R8** `(href|src|content)="…(parranjar|arranjacao)…"` : **68 → 14**. Résiduel = fichiers pris par une PR ouverte + liens sans cible sous aucune forme (`/arranjacao-fugas-agua`).

## ✅ Gate merge — aucun gate actif
Vérifié ce run : **aucune mention d'attente de merge** dans les 4 `context.md`. Aucun gate réécrit.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Une PR en attente ne gèle pas le repo — ce run a ouvert **2 PR sur ce repo** pendant que 8 autres restaient ouvertes. Entre le 06/08 et le 09/08, la mention « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. **Ne jamais réécrire un gate de ce type.**

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-21

| Rang | Cible | Statut |
|---|---|---|
| — | 10 fichiers morts · 45 fichiers à liens corrompus | ✅ **traités ce run (#322, #323)** |
| **1** | **Corruption de prose `repar`→`arranj` — ~240 occurrences restantes sur CNR** | ⏳ **GO périmètre requis.** Inclut `Parranjo` = `Preparação`, restauration *probable* (contextes sans ambiguïté) mais **pas prouvable par un fichier sur disque** → hors R4 sans arbitrage. **Un GO d'une ligne débloque les 523 des 4 repos.** |
| **2** | **`##style##` / `##endstyle##` — marqueurs de gabarit non substitués** | ⏳ **PROCHAINE TÂCHE SANS GO.** `client/public/contactos.html` L2+L8, `sobre.html` L21, `calculadora-de-preco.html` L21. Sur CU/EU le même défaut faisait **servir tout le CSS comme texte visible** ; correctif validé et mergeable tel quel (PR #270/#313). |
| **3** | **`components/StructuredData.tsx` L323** — `raio de 100 km` restant | ⏸ **toujours bloqué par la PR #319 ouverte** (elle corrige L365, pas L323). |
| **4** | **`grep -rn 'gratuit' client/src` = 110** | ⏳ prédicat `PRICING.md` L51-53. Plus gros gisement de conformité du repo. Ventiler par famille. |
| **5** | **27 fichiers morts sans violation** (~4000 lignes de bundle) | ⏳ dont `ComponentShowcase.tsx` (1375 L), `PartnershipsPage.tsx` (424 L), `blog/AutomacaoResidencialGuia.tsx` (344 L, **encore de l'électricité**), 9 `pages/urgencias/*.tsx`, 8 `hooks/`. Retrait de confort — GO souhaitable. |
| 6 | `shared/videoData.ts` L156 `Garantia de 2 Anos` | ⏳ fichier **vivant**, garantie non sourcée (R11). |
| 7 | `shared/serviceConfig.ts`, `shared/seoKeywords.ts`, `client/src/data/` | ⏳ angle mort permanent |
| — | `PriceTable.tsx` · `OrcamentoGratuitoBadge.tsx` | ⏸ **STATUÉES** — arbitrage d'offre |
| — | `TrustBanner.tsx` · `SEOHead.tsx` · `CalculadorPreco.tsx` · `Blog.tsx` · `Equipa.tsx` | ⏸ à requalifier en lecture — `24h/7 dias` est **autorisé** par R145 |

## Tâche suivante recommandée
1. **Rang 2 — les marqueurs `##style##`** : 3 fichiers, correctif déterministe déjà validé sur CU et EU, aucun GO.
2. **Rang 5 — les 27 morts sans violation**, avec le prédicat **corrigé** (tout le dépôt).
3. **Rang 4 — le prédicat `gratuit`** (110 occurrences).
4. **`10 anos` vs `12 anos de experiência`** : 7 occurrences de `12 anos` subsistent contre les `10 anos` de `faqData.ts`, aucune sourcée (R11).
5. **`StructuredData.tsx` L323** dès #319 mergée. ⚠️ #319 ne corrige **qu'une** des deux occurrences — vérifier le diff, pas le titre.
6. Vocabulaire de remplacement validé **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159. Pronoms : `AGENTS.md` §12. **Privilégier le RETRAIT.**

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — un prédicat de code mort doit porter sur TOUT le dépôt, jamais sur un sous-arbre.** Les consommateurs vivent aussi dans `scripts/`, les configs de build, les manifestes de pré-rendu. Le prédicat `client/src` + `shared` produisait **13 faux positifs sur 50**, dont 5 auraient cassé le pré-rendu. ➡️ **C'est la seconde fois en deux runs qu'une méthode écrite dans un `context.md` se révèle fausse à l'exécution : la vérifier fait partie de l'exécuter.**
- 🔴 **NOUVEAU — la signature d'une corruption de batch, c'est le MOT INEXISTANT, pas la chaîne cherchée.** Personne ne pense à grepper `parranjar`. En revanche `grep -rIoE '[[:alpha:]]*<lemme>[[:alpha:]]*' | sort | uniq -c` sort les formes légitimes **et**, juste en dessous, les non-mots. Une commande a révélé 523 corruptions sur 4 repos. ➡️ **À passer sur les autres lemmes réécrits par batch** : `urgência`, `rápido`, `garantia`, `gratuito`.
- 🔴 **NOUVEAU — tout batch de substitution doit ancrer ses motifs sur des limites de mot, et livrer le compte des non-mots qu'il crée.** `repar`→`arranj` sans `\b` a produit des `href` morts et du texte affiché aux utilisateurs. Même accident que la leçon « un batch peut corrompre la doctrine » (`fb9dd2415`, CU), mais appliqué au contenu.
- 🔴 **NOUVEAU — un lien corrompu est invisible à l'audit de conformité ET à l'audit de sitemap.** Le sitemap était correct, la page existait, seul le `href` était faux. ➡️ **Contrôle dédié à ajouter : résoudre chaque lien interne contre le disque.**
- 🔴 **NOUVEAU — quand un défaut récidive, chercher le GÉNÉRATEUR, pas la page.** Sur CU/EU le NAP parasite avait été nettoyé 5 fois page par page ; il était écrit en dur dans deux scripts Python. ➡️ **Avant de nettoyer une occurrence en série, grepper le motif dans `tools/`, `scripts/` et la chaîne de build.**
- 🔴 **NOUVEAU — un motif de violation dans un commentaire qui CITE la règle est un faux positif systématique** (`AnswerFirstFAQSchema.tsx` déclenche sur `garantimos` parce que son en-tête documente l'interdiction). Exclure les lignes de commentaire avant de rapporter.
- 🔴 **NOUVEAU — `A confirmar` apparaît à l'intérieur de témoignages fabriqués**, pas seulement comme placeholder d'affichage. Le grep doit être lu **avec son contexte de ligne**, jamais compté seul.
- 🔴 **La contamination croisée plomberie ↔ électricité va dans les deux sens** (ENR portait de la plomberie, PR #358 ; CNR porte de l'électricité, 3 fichiers). ⚠️ **Mais attention** : sur ENR/CNR les composants **partagés** branchent sur `shared/serviceConfig.ts` et mentionnent légitimement l'autre métier — **un grep cross-métier brut produit des faux positifs en masse**. Ne l'appliquer qu'aux **pages autonomes**, jamais aux composants pilotés par config.
- 🔴 **Une baseline se remesure sur un arbre intact dans le même run, jamais recopiée d'un `context.md`.** `tsc --noEmit` = **215** (confirmé 2 runs).
- 🔴 **Un titre de PR ne dit pas ce que la PR couvre** (#319). **Vérifier les PR ouvertes AVANT de patcher** : `gh pr view <n> --json files --jq '.files[].path'`. **3 runs consécutifs** que ça évite un conflit — à garder en ouverture systématique.
- 🔴 **Le compteur R12 sur-compte** : R145 **autorise** `24h/7 dias`. Requalifier chaque occurrence contre le texte verrouillé **avant** de patcher.
- 🔴 **Une PR mergée peut DISPARAÎTRE de `main`.** Chercher `(#N)` dans `git log --oneline` (`merge-base --is-ancestor` est faux sur un squash).
- **Ne pas sur-purger.** R4 se viole dans les deux sens : inventer **et** effacer ce qui est vrai.

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Sandbox `mcp__workspace__bash` : `git fetch` OK (repos publics), **`git push` impossible** (`could not read Username`). **Répartition reconfirmée ce run** : lecture / grep / parsing Python / **écriture de fichiers** → sandbox ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process`.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Worktrees sous `~/work/Sites/_worktrees/loop-YYYY-MM-DD/` — lisibles depuis le sandbox via son montage.
- 🔴 **NOUVEAU — `git worktree add … -b <branche> <remote>/main` puis `git switch -c <autre> <remote>/main` conserve les modifications non commitées** : c'est la manière propre de scinder un run en 2 PR thématiques sans `stash` (interdit R-WT).
- **`tsc` dans un worktree** : `ln -sfn <checkout>/node_modules ./node_modules` avant, **et retirer le lien avant le commit**.
- 🔴 **Toujours diffuser contre `github/main`** : `origin/main` peut être très en retard sur ce repo.
- 🔴 **`grep -P` n'existe pas sur macOS** ; **zsh ne fait pas de word-splitting** ; **`set -e` + glob vide fait avorter le script**. Pour tout motif non trivial : **Python**.
- 🔴 **`git commit -m` multiligne est fragile en zsh** → `git commit -F -` avec `printf` ou heredoc. Corps de PR : `--body-file`, jamais `--body` inline.
- 🔴 **Un scanner qui tokenise sur `\w` rate les fichiers dont le nom contient une espace.** Vu sur ENR : `pages/QuantoTempoDemoraT rocarQuadroEletrico.tsx` était compté comme mort alors qu'`App.tsx` L89 l'importe. **Seul fichier source avec une espace sur les 4 repos** — contrôle : `find . -type f -name "* *"`.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Vérifié ce run : checkout partagé sur `feat/t_45ec27ae-esgoto-entupido-round3` — **non touché**. Aucun `context.md` ne *prescrit* de `reset --hard`.

## Blocages connus
1. 🛑 **GO périmètre — corruption de prose `repar`→`arranj`** : 523 occurrences / 258 fichiers sur les 4 repos. La partie « liens » est livrée ; la partie « prose » attend un arbitrage sur `Parranjo`→`Preparação`.
2. 🛑 **`Você` — 184 occurrences / 161 fichiers sur les 4 repos** (CNR 40/35). `LECONS.md` le classe dans le **corpus INTERDIT** (marqueur pt-BR sur sites pt-PT). GO requis.
3. 🛑 **`components/SEOHeadEnhanced.tsx` L202 `"geoRadius": "20000"`** — `GeoCircle` **par ville**, distincte du rayon d'entreprise. `AGENTS.md` ne verrouille aucun rayon par ville → toute valeur serait une invention (R4). **Arbitrage Philippe.**
4. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** (`shared/serviceConfig.ts` L67) : le renommer **change l'offre affichée** → GO. **Même question sur ENR : un seul arbitrage débloque les 2 repos.**
5. 🛑 **Batch `Atendimento 24h`** (192 occurrences) — attente GO.
6. 🛑 **Batch FAQ (~815 fichiers)** et **batch prix (~73)** de la PR #240 — périmètre parké. Rappel d'une ligne.
7. ⚠️ **`10 anos` vs `12 anos de experiência`** — contradiction toujours en production, aucune des deux sourcée.
8. ⏸ **`StructuredData.tsx` L323** — bloqué par la PR #319 ouverte.
9. ⚠️ **La cause racine du batch `repar`→`arranj` n'est pas identifiée.** Les formes corrompues arrivent avec la création des fichiers (`git log -S` ne remonte pas au script). **Retrouver le script pour s'assurer qu'il n'est pas rejoué.**
