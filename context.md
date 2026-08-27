# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-27
- Tâche prévue : **rang 3 — les 27 interpolations JSX des 5 fichiers `client/public/` réservés**. ✅ **Exécutée.**
- **1 PR ouverte** :
  - **#330** — https://github.com/taffrand-gif/canalizador-norte-reparos/pull/330 — branche `loop/2026-08-27-cnr-interpolations-5-fichiers` — 6 commits, **5 fichiers de production** + `SEO_PLAN.md`
- Branche partie de `github/main` = `122407645c`.

### 🟢 ÉVÉNEMENT MAJEUR DU RUN — le stock de PR est vide
`gh pr list --state open` rend **0 PR ouverte sur les 4 repos**. Sur CNR, **les 17 PR #309 → #329 ont toutes mergé** (présence de `(#N)` vérifiée une par une dans `git log github/main`, méthode squash-safe). Le run précédent en comptait 11 ouvertes et en faisait un blocage.

➡️ Conséquence immédiate : **le rang 3 s'est débloqué tout seul**, sans consommer de GO. Il n'attendait pas un arbitrage, il attendait un merge.

### Le correctif du rang 3
Les 5 fichiers traités sont exactement ceux que **#326** (23/08, mergée) avait écartés de son périmètre *au motif de la réservation par PR*. Correctif rejoué **à l'identique**, sans réanalyse : `ACTIVE_CONFIG` → `shared/serviceConfig.ts` L115 (`= plumberieConfig` L39) → `phone` L43 `+351928484451`, `whatsappNumber` L44 `351928484451`.

**Témoin R8** (motif `\{[^{}\n]*\b(config|ACTIVE_CONFIG)\.[^{}\n]*\}`, hors `<script>` et hors commentaires) : **27 → 0**. Sur tout `client/public/` (4693 fichiers), `${…}` hors `<script>` : **21 → 0**.

**Extension assumée du périmètre de #326** : #326 ne traitait que les `<a>` ; ce run traite en plus les *props* d'éléments JSX inconnus (`phone={ACTIVE_CONFIG.phone}` sur `<EmotionalHero>` / `<GuaranteeBox>`), 3 par fichier.

⚠️ **Ne corrige pas le rang 1** : les balises `<EmotionalHero>`, `<GuaranteeBox>`, `<PainPointSection>` restent des éléments inconnus ⇒ leur contenu reste **invisible en production**. Symptôme mesuré : les 4 pages d'urgence ne portent **aucun `<h1>`**.

## ✅ Gate merge — aucun gate actif
Aucune mention d'attente de merge dans le `context.md` lu ce run. Aucun gate réécrit. 0 PR ouverte, la #330 a été ouverte.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Entre le 06/08 et le 09/08, « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. **Ne jamais réécrire un gate de ce type.**

## 📏 Re-mesure du 2026-08-27 — périmètre PRODUCTION explicite
Périmètre : `client/ server/ shared/ public/ api/ src/`, **hors `.md`**, hors `_archive/ _audit/ _backlog/ docs/` — **5344 fichiers**. Motif large = fenêtre de **60 caractères** (pas « même ligne » : le HTML est minifié).

| Prédicat | Occurrences | Fichiers |
|---|---:|---:|
| `orçamento`↔`gratuit` (fenêtre 60c) | **4701** | **2037** |
| `Orçamento gratuito` littéral | 2867 | 1434 |
| `orçamento (é\|sempre) gratuito` | 583 | 559 |
| `Atendimento 24h` | 408 | 254 |
| **`raio de 100 km`** | **22** | **16** |
| corruption `*Parranj*` | 164 | 68 |
| `10 anos` | 62 | 49 |
| `Você` | 48 | 39 |
| `12 anos` | 26 | 14 |
| `Garantia de 2 Anos` | 22 | 9 |

⚠️ **Ces chiffres ne sont pas comparables tels quels à ceux du 25/08** (3822 / 1723) : la fenêtre est plus large (60c contre « même ligne ») et le périmètre exclut désormais les `.md`. **Même ordre de grandeur, conclusion inchangée : le rang 2 est un batch de ~2000 fichiers.**

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-27

| Rang | Cible | Statut |
|---|---|---|
| — | 27 interpolations JSX des 5 fichiers réservés | ✅ **traité ce run (#330)** |
| **1** | 🔴 **`raio de 100 km` — 22 occ. / 16 fichiers.** **CONTRADICTION EN PRODUCTION** : `client/src/components/StructuredData.tsx` dit déjà **130 km** (L62, L96, L323, corrigé par #319 mergée), mais les jumeaux `client/public/` disent encore **100 km**. | 🟢 **AUCUN GO. Tâche du prochain run.** Valeur `130 km` **sourcée et déjà en production**. Fichiers : `areas-atuacao.html` (4), `sobre-mim.html` (3), `todas-perguntas-frequentes.html` (2), **`client/src/pages/Zonas.tsx` (1)**, `zonas.html`, `servicos.html`, `detecao-fugas-agua.html`, 6 pages `*-macedo-de-cavaleiros.html`, `blog/picheleiro-ou-canalizador-diferenca.html`, `blog/fuga-agua-urgente-braganca.html`. **Cas d'école source-duale : #319 a corrigé la source, pas les jumeaux.** |
| **2** | 🔴 **Balises de composants JSX brutes dans `client/public/`** — `<EmotionalHero>`, `<GuaranteeBox>`, `<PainPointSection>`, `<FAQSection />`, `<Breadcrumbs />`… **des blocs entiers de contenu sont invisibles en production.** Symptôme mesurable : **0 `<h1>`** sur les 4 pages d'urgence. | 🛑 **GO requis.** Reconstruire le HTML rendu = invention (R4). **Plus gros défaut de CONTENU du repo.** |
| **3** | 🔴 **Batch `orçamento`↔`gratuit` — 4701 occ. / 2037 fichiers.** Interdit **verbatim** par `PRICING.md` L51 | 🛑 **GO PÉRIMÈTRE requis.** Correctif prouvé et **mergé** (#327) : `Orçamento gratuito` → `Orçamento por escrito`. **Un GO d'une ligne débloque ~2000 fichiers.** |
| **4** | **Corruption de prose `*Parranj*` — 164 occ. / 68 fichiers** (dont `Parranjo` = `Preparação`) | ⏳ **GO périmètre requis.** #329 a mergé 9129 corrections de texte ; **cette famille-ci a survécu**. |
| **5** | **`10 anos` (62) vs `12 anos` (26) d'experiência** — contradiction en production, **aucune des deux sourcée** (R11) | ⏳ **Arbitrage d'une ligne** : lequel est vrai ? Puis substitution triviale. |
| **6** | **`Garantia de 2 Anos` — 22 occ. / 9 fichiers**, dont `shared/videoData.ts` L156 (**fichier vivant**) | ⏳ garantie non sourcée (R11). Contradiction possible avec « garantia 1 ano » de `serviceConfig.ts` L55 — **à vérifier avant purge**. |
| **7** | **`Você` — 48 occ. / 39 fichiers.** `LECONS.md` le classe INTERDIT (pt-BR) | ⏳ GO souhaitable ; substitution non triviale (accord verbal). |
| **8** | **27 fichiers morts sans violation** (~4000 lignes de bundle) | ⏳ Retrait de confort — GO souhaitable. |
| 9 | `{ borderColor: config.colors.primary }` ×3 + `` value={`item-${index}`} `` — `transparence-prix.html` | ⏳ cosmétique. Peu de valeur. Seuls `{…}` restants de `client/public/`. |
| 10 | `shared/serviceConfig.ts`, `shared/seoKeywords.ts`, `client/src/data/` | ⏳ angle mort permanent |
| — | `PriceTable.tsx` · `OrcamentoGratuitoBadge.tsx` | ⏸ **STATUÉES** — arbitrage d'offre |
| — | `TrustBanner.tsx` · `SEOHead.tsx` · `CalculadorPreco.tsx` · `Blog.tsx` · `Equipa.tsx` | ⏸ `24h/7 dias` est **autorisé** par R145 |

## Tâche suivante recommandée
1. 🟢 **`raio de 100 km` → `130 km`, 22 occ. / 16 fichiers.** **Aucun GO, valeur sourcée, correctif déterministe.** ⚠️ Traiter `client/src/pages/Zonas.tsx` **et** les 15 jumeaux `client/public/` dans le même run — sinon on refait exactement l'erreur de #319.
2. 🔴 **Poser à Philippe les DEUX GO d'une ligne** : rang 2 (JSX brut servi en production) et rang 3 (batch `orçamento~gratuit`, ~2000 fichiers, correctif déjà mergé en #327).
3. **Arbitrage `10 anos` vs `12 anos`** — une ligne de réponse débloque 88 occurrences.
4. Uniformisation `tel:` avec/sans `+351`.

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — un blocage « mécanique » n'est pas un arbitrage : il se re-teste à chaque run.** Le rang 3 attendait un **merge**, pas un GO. Trois runs l'ont reconduit comme « bloqué » ; une seule commande (`gh pr list --state open`) l'a levé. ➡️ **Toujours écrire, à côté d'un blocage, PAR QUOI il tombe** — un merge, un GO, une mesure. Un blocage sans condition de levée se reconduit indéfiniment.
- 🔴 **NOUVEAU — quand une PR corrige la source, vérifier immédiatement les jumeaux générés.** #319 a porté `100 km` → `130 km` dans `StructuredData.tsx`… et a laissé **22 occurrences de `100 km`** dans `client/public/`. La production **se contredit elle-même**. ➡️ **Toute PR qui touche une valeur de configuration doit compter la même valeur dans `client/public/` avant d'être déclarée close.**
- 🔴 **NOUVEAU — un `${…}` dans un `<script>` n'est pas un défaut.** Le compteur brut annonçait 21 occurrences sur 7 fichiers ; 6 d'entre elles (`calculadora-de-preco.html`) sont du **JavaScript valide**. Sans exclusion de `<script>`, le run patchait du code sain. ➡️ **Tout prédicat sur du HTML doit énoncer s'il exclut `<script>` et les commentaires.**
- 🔴 **NOUVEAU — un correctif rejoué à l'identique ne se réanalyse pas.** #326 avait consigné *pourquoi* 5 fichiers étaient exclus (réservation par PR). Le motif d'exclusion étant écrit, la reprise a coûté une mesure et un `sed`. ➡️ **Consigner le motif d'exclusion d'un périmètre le rend rejouable.**
- 🔴 **Un compteur de violation vaut ce que vaut son PÉRIMÈTRE, et le périmètre est presque toujours IMPLICITE.** **Ne jamais écrire « il en reste N » sans écrire sur quel arbre, avec quel motif et avec quelle fenêtre.** Ce run énonce les trois (5344 fichiers / hors `.md` / fenêtre 60c) — c'est pourquoi ses chiffres ne sont **pas** comparables à ceux du 25/08.
- 🔴 **Élargir le MOTIF et élargir l'ARBRE sont deux élargissements distincts, et il faut les deux.**
- 🔴 **Chercher le DISCRIMINANT DOCTRINAL dans la production avant de purger une famille.** La production contient souvent sa propre jurisprudence.
- 🔴 **Une famille peut relever d'un AUTRE arbitrage que celui sous lequel on l'a rangée.** **Router plutôt que purger.**
- 🔴 **Le couple SOURCE-DUALE se vérifie systématiquement** : toute chaîne de `client/src/pages/X.tsx` a un jumeau `client/public/x.html`. (Le rang 1 de ce run en est la preuve la plus coûteuse.)
- 🔴 **Une doctrine peut se RETOURNER, et le journal garde l'ancienne version.** **Dater le prédicat qu'on applique. La note la plus ancienne perd.**
- 🔴 **Ventiler par famille AVANT de choisir le périmètre.**
- 🔴 **Le contrôle « mot inexistant » se fait par DIFF D'ENSEMBLES DE MOTS**, pas par grep du lemme. ⚠️ Ce run : les « mots nouveaux » étaient des fragments de **percent-encodage** (`C3`, `A1`, `20de`) — **légitimes car à l'intérieur d'un `href`**. Le contrôle doit distinguer *prose visible* et *valeur d'attribut*.
- 🔴 **Remplacer une interpolation sans remplacer son ENVELOPPE laisse le lien cassé.** Unité de correction = l'attribut entier.
- 🔴 **Corriger une interpolation ne rend pas le bloc visible.** Le lien redevient cliquable, l'élément JSX inconnu qui l'enveloppe reste invisible. **Ne jamais laisser croire qu'un rang en corrige un autre.**
- 🔴 **Un élément HTML inconnu est plus destructeur qu'une interpolation cassée, et invisible à tous les compteurs.**
- 🔴 **Un marqueur non substitué peut laisser les balises PARFAITEMENT ÉQUILIBRÉES.** Équilibre et délimiteurs non résolus = deux contrôles **complémentaires**.
- 🔴 **Avant de patcher une chaîne, vérifier qu'elle ne vit pas dans un BLOC DUPLIQUÉ.**
- 🔴 **Un prédicat de code mort doit porter sur TOUT le dépôt, jamais sur un sous-arbre.**
- 🔴 **Tout batch de substitution doit ancrer ses motifs sur `\b`** et livrer le compte des non-mots qu'il crée.
- 🔴 **Quand un défaut récidive, chercher le GÉNÉRATEUR, pas la page.**
- 🔴 **Un motif de violation dans un commentaire ou un `.md` qui CITE la règle est un faux positif systématique.** (`PRICING.md` et `SEO_PLAN.md` remontent en tête de tous les compteurs — d'où l'exclusion des `.md` du périmètre de production.)
- 🔴 **Un titre de PR ne dit pas ce que la PR couvre.**
- 🔴 **Le compteur R12 sur-compte** : R145 **autorise** `24h/7 dias`.
- 🔴 **Une PR mergée peut DISPARAÎTRE de `main`.** Chercher `(#N)` dans `git log --oneline` (`merge-base --is-ancestor` est faux sur un squash). ✅ Vérifié ce run sur les 17 PR : toutes présentes.
- 🔴 **« valeur non sourçable » doit être PROUVÉ** en remontant la chaîne de définition. **Distinguer « aucune source » de « source pas encore cherchée ».**
- **Ne pas sur-purger.** R4 se viole dans les deux sens.

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Reconfirmé ce run : `git push --dry-run` depuis le sandbox → `could not read Username for 'https://github.com'`, et `gh` est absent du `PATH` du sandbox. **Répartition** : lecture / `git fetch` / grep / parsing Python / **écriture de fichiers** → sandbox ; `git` en écriture / `gh` / `tsc` → **host**. Le montage étant partagé, un `git fetch` lancé depuis le sandbox met bien à jour le vrai `.git`.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Worktrees et `--body-file` sous `~/work/Sites/_worktrees/` ou `~/work/Sites/_loop-<date>/` (montés des deux côtés), **jamais dans `/tmp`**. ⚠️ Le `--body-file` doit vivre **hors du worktree**, sinon il apparaît en fichier non suivi.
- 🔴 **Un worktree n'est PAS un dépôt git vu depuis le sandbox** : `git show`/`git diff`/`git log` y échouent et rendent des **compteurs à zéro** qui ressemblent à un résultat. **Tout témoin se compte en Python sur le CONTENU des fichiers.** ✅ Corollaire vérifié ce run : les comparaisons « avant » se lisent depuis le **checkout principal** via `git show github/main:<path>`, qui, lui, fonctionne.
- 🔴 **`grep -E` de macOS ne matche pas de façon fiable `ç`/`ã`/`õ`** ; `git grep -E` les matche. **Pour tout motif accentué : Python.**
- 🔴 **`grep -P` n'existe pas sur macOS** ; **zsh ne fait pas de word-splitting** ; **`set -e` + glob vide fait avorter le script**.
- 🔴 **`git commit -m` multiligne est fragile en zsh** → `printf … | git commit -F -`. Corps de PR : `--body-file`, jamais `--body` inline.
- **`tsc` dans un worktree** : `ln -sfn <checkout>/node_modules ./node_modules` avant, **et retirer le lien avant le commit**.
- 🔴 **Toujours diffuser contre `github/main`** sur ce repo : le remote s'appelle `github` (pas `origin`) et `origin/main` peut être très en retard. ⚠️ **CNR est le seul des 4 repos dans ce cas** — ENR, CU et EU utilisent `origin`.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Vérifié ce run : checkout partagé sur `main` avec 2 répertoires non suivis (`.worktrees/`, `_indexing/`) — **non touché**. Aucun `context.md` ne *prescrit* de `reset --hard`.

## Blocages connus
1. 🛑 **RANG 2 — balises de composants JSX brutes servies en production.** Reconstruire le HTML rendu = invention (R4). **Tombe par : GO Philippe.**
2. 🛑 **RANG 3 — batch `orçamento`↔`gratuit`, 4701 occ. / 2037 fichiers.** Correctif prouvé et mergé (#327), aucun risque technique. **Tombe par : GO périmètre.**
3. 🛑 **Corruption de prose `*Parranj*`, 164 occ. / 68 fichiers** (CNR seul). **Tombe par : GO périmètre.**
4. 🛑 **`Você` — 48 occ. / 39 fichiers.** `LECONS.md` le classe INTERDIT. **Tombe par : GO.**
5. 🛑 **`components/SEOHeadEnhanced.tsx` — `"geoRadius": "20000"`** — `GeoCircle` par ville. **Tombe par : arbitrage Philippe.**
6. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** (`shared/serviceConfig.ts` L67) : le renommer **change l'offre affichée**. **Tombe par : GO. Même question sur ENR — un seul arbitrage débloque les 2 repos.**
7. 🛑 **Batch `Atendimento 24h`** (408 occ. / 254 fichiers). **Tombe par : GO.**
8. 🛑 **Batch FAQ (~815 fichiers)** et **batch prix (~73)** de la PR #240 — périmètre parké par Philippe. Rappel d'une ligne, ne pas relancer.
9. ⚠️ **`10 anos` (62) vs `12 anos` (26)** — contradiction en production, aucune des deux sourcée. **Tombe par : une ligne de réponse.**
10. ⚠️ **`Garantia de 2 Anos` (22)** vs `garantia 1 ano` (`serviceConfig.ts` L55) — **seconde contradiction du même type**. À instruire avant purge.
11. ℹ️ **Un §NAP dans `AGENTS.md` reste souhaitable** — confort, pas blocage.
12. 🔴 **La cause racine reste inconnue** pour la corruption `*Parranj*`, pour les duplications de corps de page, et pour l'extraction de pages statiques qui laisse du JSX non compilé. **Trois défauts distincts issus de la même chaîne de génération.** Le volume (2037 fichiers `client/public` portant les mêmes chaînes) **désigne cette chaîne comme le générateur unique** de la plupart des défauts du repo. **Corriger le générateur vaut mieux que 2000 patchs.** ➡️ **C'est le seul chantier qui change l'ordre de grandeur du backlog.**
