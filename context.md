# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-24
- Tâche prévue : rang 2 (les 5 fichiers `client/public/` réservés). **Toujours bloqué** — contrôle en début de run : **les 10 PR bloquantes sont encore toutes ouvertes**, aucune n'a mergé depuis le 23/08.
- Tâche réellement exécutée : **rang 5 — le prédicat `gratuit`, ventilé par famille**. La famille la plus grosse et la seule interdite *verbatim* a été traitée entièrement.
- **1 PR ouverte** :
  - **#327** — https://github.com/taffrand-gif/canalizador-norte-reparos/pull/327 — branche `loop/2026-08-24-cnr-gratuito-cidades` — 23 commits, **22 fichiers de production** + `SEO_PLAN.md`
- ✅ **#326 a mergé** (le run du 23/08 est en production : `git log --oneline -1 github/main` porte `(#326)`).

### 1. La page facturait la déslocation et promettait la gratuité dans la même phrase
Texte servi en production sur 22 pages ville :
> `Deslocação 55€ (Zona 5). Mão de obra 65€/h. Orçamento gratuito.`

`PRICING.md` L51-53 (R-canon-2026-08-11) interdit la formulation **verbatim** : « ❌ JAMAIS « orçamento gratuito » : la deslocacao est facturée, ce qui crée une fausse promesse ». **48 occurrences / 22 fichiers → 0.**

Substitution : `Orçamento gratuito` → `Orçamento por escrito`, ancrée sur `\b`. **Zéro invention** : la chaîne de remplacement est **déjà en production** dans ce repo (transplantée verbatim de `shared/siteConfig.ts` L108/L124 au run du 14/08) et énonce l'engagement `PRICING.md` #2.

### 2. 🔴 La doctrine s'était retournée, et le HISTORIQUE gardait l'ancienne version
Les entrées des **05/08 et 06/08** du HISTORIQUE écrivent noir sur blanc « `gratuito` = non-violation confirmée ». **C'est périmé** : `PRICING.md` V2 est daté du **11/08**, donc postérieur, et l'entrée du 20/08 traite déjà `orçamento é sempre gratuito` comme une violation. Un agent qui aurait lu le journal sans dater les prédicats aurait classé ce rang « déjà arbitré, ne pas toucher ».

### 3. Ce que la ventilation par famille a changé
Les **122** occurrences `gratuit` de `client/src` semblaient ingérables en un run. Ventilées :

| Famille | Occ. | Statut |
|---|---|---|
| `orçamento gratuito` | ~75 | **interdite verbatim** `PRICING.md` L51-53 → 48 traitées ce run (celles de `pages/cidades/`) |
| `voltamos gratuitamente` | 11 | ⏳ garantie de retour gratuit — claim distinct, à requalifier |
| `diagnóstico` / `análise` / `avaliação` / `auditoria` `gratuit*` | 12 | ⏳ même famille logique que `visita gratuita` (bannie) — à requalifier |
| `deslocação gratuita` | 3 | 🔴 **interdite verbatim** elle aussi — **prochaine cible évidente** |
| `tutoriais online gratuitos`, `soluções caseiras gratuitas` | 2 | ✅ **non-violations** — décrivent des ressources tierces, pas l'offre |
| divers (`projeto hidráulico gratuito`, `intervenção gratuita`, `de arranjo gratuito`…) | ~19 | ⏳ à ventiler |

Sur `pages/cidades/`, les 48 occurrences étaient **toutes la même chaîne exacte**, une seule forme distincte : aucune variante d'accord ni de casse, donc contrôle exhaustif en une commande.

## ✅ Gate merge — aucun gate actif
Vérifié ce run : **aucune mention d'attente de merge** dans ce `context.md`. Aucun gate réécrit. 10 PR étaient ouvertes ; la #327 a été ouverte quand même.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Entre le 06/08 et le 09/08, « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. **Ne jamais réécrire un gate de ce type.**

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-24

| Rang | Cible | Statut |
|---|---|---|
| — | `Orçamento gratuito` × 48 sur les 22 pages `pages/cidades/` | ✅ **traité ce run (#327)** |
| **1** | 🔴 **Balises de composants JSX brutes dans `client/public/`** — `<FAQSection />`, `<Breadcrumbs />`, `<CidadesProximas />`, `<RelatedCities />`, `<EmotionalHero>`, `<GuaranteeBox>`… **des blocs entiers de contenu sont invisibles en production** | 🛑 **GO requis.** Reconstruire le HTML rendu = invention (R4). **Plus gros défaut de contenu identifié à ce jour sur ce repo.** |
| **2** | **`deslocação gratuita` × 3** — interdite **verbatim** par `PRICING.md` L52 | ⏳ **aucun GO nécessaire, 3 occurrences, correctif du même type que #327.** Le meilleur rapport effort/valeur restant. Vérifier d'abord qu'aucune PR ouverte ne prend les fichiers. |
| **3** | **Les 5 fichiers `client/public/` réservés par des PR ouvertes** — interpolation `${…}`, 27 occurrences | ⏸ **à reprendre dès merge** de #325/#323/#320/#319/#318/#316/#315/#314/#311/#309. Correctif identique à #326, table de résolution dans le `context.md` du 23/08 (conservée dans l'HISTORIQUE `SEO_PLAN.md`). **Aucun GO nécessaire.** |
| **4** | **Le reste de `orçamento gratuito` hors `pages/cidades/`** — ~27 occ. | ⏳ **sans GO**, mais **la moitié est réservée par les PR #319/#311** et 2 fichiers sont **STATUÉS** (`OrcamentoGratuitoBadge.tsx`, `PriceTable.tsx`). Reprendre après merge. |
| **5** | **Corruption de prose `repar`→`arranj` — ~240 occurrences restantes** | ⏳ **GO périmètre requis.** Inclut `Parranjo` = `Preparação`. **Un GO d'une ligne débloque les 523 des 4 repos.** |
| **6** | **`voltamos gratuitamente` × 11 + `diagnóstico/análise/avaliação gratuit*` × 12** | ⏳ **requalification en lecture d'abord.** Ne sont pas interdits *verbatim* : `PRICING.md` bannit `orçamento`, `visita` et `deslocação`. Un `diagnóstico gratuito` réellement gratuit n'est pas une fausse promesse — **vérifier avant de purger, ne pas sur-purger (R4 se viole dans les deux sens).** |
| **7** | **`components/StructuredData.tsx` L323** — `raio de 100 km` restant | ⏸ **bloqué par la PR #319 ouverte** (elle corrige L365, pas L323). |
| **8** | **27 fichiers morts sans violation** (~4000 lignes de bundle) | ⏳ dont `ComponentShowcase.tsx` (1375 L), `PartnershipsPage.tsx` (424 L), `blog/AutomacaoResidencialGuia.tsx` (344 L, **encore de l'électricité**), 9 `pages/urgencias/*.tsx`, 8 `hooks/`. Retrait de confort — GO souhaitable. |
| 9 | `shared/videoData.ts` L156 `Garantia de 2 Anos` | ⏳ fichier **vivant**, garantie non sourcée (R11). |
| 10 | `{ borderColor: config.colors.primary }` ×3 — `transparence-prix.html` | ⏳ cosmétique. Peu de valeur. |
| 11 | `shared/serviceConfig.ts`, `shared/seoKeywords.ts`, `client/src/data/` | ⏳ angle mort permanent |
| — | `PriceTable.tsx` · `OrcamentoGratuitoBadge.tsx` | ⏸ **STATUÉES** — arbitrage d'offre |
| — | `TrustBanner.tsx` · `SEOHead.tsx` · `CalculadorPreco.tsx` · `Blog.tsx` · `Equipa.tsx` | ⏸ à requalifier en lecture — `24h/7 dias` est **autorisé** par R145 |

## Tâche suivante recommandée
1. **Rang 2 — `deslocação gratuita` × 3.** Interdite verbatim, correctif prouvé ce run, zéro GO, 3 occurrences. **À faire en premier, c'est un run court.**
2. **Rang 6 — requalifier `voltamos gratuitamente` et `diagnóstico gratuito` en LECTURE avant de décider.** Produire le verdict même si aucun patch n'en sort : le verdict est le livrable.
3. **Rang 3 dès qu'une des 10 PR bloquantes merge.**
4. **`10 anos` vs `12 anos de experiência`** : 7 occurrences de `12 anos`, aucune sourcée (R11).
5. **Poser à Philippe le rang 1** en une ligne, et l'uniformisation `tel:` avec/sans `+351`.

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — une doctrine peut se RETOURNER, et le journal garde l'ancienne version.** `gratuito` était certifié « non-violation confirmée » les 05/08 et 06/08 ; `PRICING.md` V2 du **11/08** l'interdit verbatim. ➡️ **Toujours dater le prédicat qu'on applique et le comparer à la date de la note qui dit le contraire. La note la plus ancienne perd.** Un agent qui fait confiance au journal sans le dater saute une violation active.
- 🔴 **NOUVEAU — ventiler par famille AVANT de choisir le périmètre transforme un batch risqué en substitution triviale.** 122 occurrences `gratuit` = ingérable ; le sous-ensemble `pages/cidades/` portait **une seule forme exacte** sur 48 occurrences. ➡️ **Chercher le sous-ensemble homogène** plutôt que de découper au hasard : c'est lui qui rend le contrôle exhaustif possible en une commande.
- 🔴 **NOUVEAU — le contrôle « mot inexistant » se fait par DIFF D'ENSEMBLES DE MOTS, pas par grep du lemme.** Réponse binaire et exhaustive (« 1 mot nouveau : `escrito` ») là où un grep du lemme ne prouve rien sur ce que la substitution a **créé**. Coût : 4 lignes de Python.
- 🔴 **NOUVEAU — une baseline `tsc` qui bouge n'est pas forcément une régression.** 215 → **212** ici s'explique par l'avancée de `main` (#326 mergée). ➡️ **Comparer à `github/main` du run courant**, jamais à la constante inscrite dans un `context.md` antérieur. Corollaire : ne pas inscrire de constante `tsc` dans un `context.md` sans la date du commit sur lequel elle a été mesurée.
- 🔴 **« valeur non sourçable » doit être PROUVÉ en remontant la chaîne de définition, jamais déduit de l'absence d'un §NAP.** Un rang est resté bloqué un run entier pour un motif faux. **Distinguer « aucune source » de « source pas encore cherchée ».**
- 🔴 **Remplacer une interpolation sans remplacer son ENVELOPPE laisse le lien cassé.** La bonne unité de correction est l'attribut entier.
- 🔴 **Un élément HTML inconnu est plus destructeur qu'une interpolation cassée, et invisible à tous les compteurs.** ➡️ Contrôle à passer sur les 4 repos : `grep -oE '<[A-Z][A-Za-z]+[ />]' client/public/**/*.html | sort -u`.
- 🔴 **Le contrôle des PR ouvertes doit se faire AVANT de calculer le périmètre**, pas avant de committer. 6ᵉ run consécutif où `gh pr view <n> --json files` évite un conflit — ce run, il a confirmé que `pages/cidades/` était libre, ce qui a **rendu le périmètre choisissable**.
- 🔴 **Un marqueur non substitué peut laisser les balises PARFAITEMENT ÉQUILIBRÉES.** Équilibre et délimiteurs non résolus sont deux contrôles **complémentaires**.
- 🔴 **Élargir le motif d'un contrôle coûte une commande et change l'ordre de grandeur.** Quand un contrôle trouve quelque chose, élargir sa famille avant de refermer.
- 🔴 **Avant de patcher une chaîne, vérifier qu'elle ne vit pas dans un BLOC DUPLIQUÉ.**
- 🔴 **Un prédicat de code mort doit porter sur TOUT le dépôt, jamais sur un sous-arbre.**
- 🔴 **La signature d'une corruption de batch, c'est le MOT INEXISTANT**, pas la chaîne cherchée. **Reste à passer sur** `urgência`, `rápido`, `garantia`, `gratuito`.
- 🔴 **Tout batch de substitution doit ancrer ses motifs sur `\b` et livrer le compte des non-mots qu'il crée.** Appliqué ce run, résultat : 1 mot nouveau, réel.
- 🔴 **Quand un défaut récidive, chercher le GÉNÉRATEUR, pas la page.**
- 🔴 **Un motif de violation dans un commentaire qui CITE la règle est un faux positif systématique.**
- 🔴 **La contamination croisée plomberie ↔ électricité va dans les deux sens.**
- 🔴 **Un titre de PR ne dit pas ce que la PR couvre.**
- 🔴 **Le compteur R12 sur-compte** : R145 **autorise** `24h/7 dias`.
- 🔴 **Une PR mergée peut DISPARAÎTRE de `main`.** Chercher `(#N)` dans `git log --oneline` (`merge-base --is-ancestor` est faux sur un squash). Vérifié ce run pour #326 : présente.
- **Ne pas sur-purger.** R4 se viole dans les deux sens : inventer **et** effacer ce qui est vrai. `tutoriais online gratuitos` a été explicitement **écarté** ce run pour cette raison.

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Répartition reconfirmée ce run : lecture / grep / parsing Python / **écriture de fichiers** → sandbox `mcp__workspace__bash` ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process`.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Un `--body-file` de PR doit être écrit sous `~/work/Sites/_worktrees/` (monté des deux côtés), jamais dans `/tmp`. ⚠️ **Et il faut le supprimer avant le push**, sinon il apparaît en fichier non suivi dans le worktree.
- 🔴 **Un worktree n'est PAS un dépôt git vu depuis le sandbox** : `git show`/`git diff`/`git log` y échouent et rendent des **compteurs à zéro** qui ressemblent à un résultat. ➡️ **Tout témoin se compte en Python sur le CONTENU des fichiers.**
- 🔴 **`grep -E` de macOS ne matche pas de façon fiable `ç`/`ã`/`õ` dans un motif étendu**, alors que `git grep -E` les matche. Ce run, un `grep -rnE` sur le worktree a rendu **0 résultat** là où `git grep` en rendait 48 — **un faux négatif silencieux**. ➡️ **Pour tout motif contenant un accent : Python, jamais `grep`.**
- 🔴 **`grep -P` n'existe pas sur macOS** ; **zsh ne fait pas de word-splitting** ; **`set -e` + glob vide fait avorter le script**.
- 🔴 **`git commit -m` multiligne est fragile en zsh** → `printf … | git commit -F -`. Corps de PR : `--body-file`, jamais `--body` inline.
- **Boucle de commits atomiques en zsh** : `for f in $(git diff --name-only); do git add "$f"; … git commit -F -; done` respecte « 1 fichier = 1 commit » sans 22 appels d'outil.
- **`tsc` dans un worktree** : `ln -sfn <checkout>/node_modules ./node_modules` avant, **et retirer le lien avant le commit**.
- 🔴 **Toujours diffuser contre `github/main`** sur ce repo : `origin/main` peut être très en retard.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Vérifié ce run : checkout partagé sur `feat/cnr-rankpush-esgoto-entupido-round4-t_04a81831` avec 2 répertoires non suivis — **non touché**. Aucun `context.md` ne *prescrit* de `reset --hard`.

## Blocages connus
1. 🛑 **RANG 1 — balises de composants JSX brutes servies en production** : des blocs entiers de contenu sont invisibles sur les pages de `client/public/`. Reconstruire le HTML rendu = invention (R4). **GO Philippe.**
2. ⏸ **27 occurrences d'interpolation restantes** sur 5 fichiers réservés par des PR ouvertes. **Pas un blocage de fond** : correctif prouvé (#326), il suffit d'attendre un merge.
3. 🛑 **GO périmètre — corruption de prose `repar`→`arranj`** : 523 occurrences / 258 fichiers sur les 4 repos.
4. 🛑 **`Você` — 184 occurrences / 161 fichiers sur les 4 repos** (CNR 40/35). `LECONS.md` le classe dans le corpus **INTERDIT**. GO requis. ℹ️ **Chercher les doublons avant de dépenser un arbitrage.**
5. 🛑 **`components/SEOHeadEnhanced.tsx` L202 `"geoRadius": "20000"`** — `GeoCircle` **par ville**, distincte du rayon d'entreprise. **Arbitrage Philippe.**
6. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** (`shared/serviceConfig.ts` L67) : le renommer **change l'offre affichée** → GO. **Même question sur ENR : un seul arbitrage débloque les 2 repos.**
7. 🛑 **Batch `Atendimento 24h`** (192 occurrences) — attente GO.
8. 🛑 **Batch FAQ (~815 fichiers)** et **batch prix (~73)** de la PR #240 — périmètre parké. Rappel d'une ligne.
9. ⚠️ **`10 anos` vs `12 anos de experiência`** — contradiction toujours en production, aucune des deux sourcée.
10. ⏸ **`StructuredData.tsx` L323** — bloqué par la PR #319 ouverte.
11. ⚠️ **La cause racine reste inconnue** pour le batch `repar`→`arranj`, pour les duplications de corps de page (CU 2 copies, ENR 3), **et pour l'extraction de pages statiques qui laisse du JSX non compilé**. **Trois défauts distincts issus de la même chaîne de génération : elle mérite un audit dédié.**
12. ℹ️ **Un §NAP dans `AGENTS.md` reste souhaitable** — confort, pas blocage.
13. 🔴 **10 PR ouvertes depuis le 21/08 au moins, aucune n'a mergé entre le 23/08 et le 24/08.** Le rang 3 est bloqué mécaniquement par ce stock. **Un merge, n'importe lequel, débloque 27 occurrences de correctif déjà écrit.**
