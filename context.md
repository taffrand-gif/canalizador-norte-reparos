# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-25
- Tâche prévue : **rang 2 — `deslocação gratuita`**. ✅ **Exécutée.**
- Tâche additionnelle : **rang 6 — requalification en lecture** des familles `diagnóstico gratuito` et `voltamos gratuitamente`. ✅ **Verdict produit** (aucun patch n'en sort : le verdict *est* le livrable).
- **1 PR ouverte** :
  - **#328** — https://github.com/taffrand-gif/canalizador-norte-reparos/pull/328 — branche `loop/2026-08-25-cnr-deslocacao-gratuita` — 3 commits, **2 fichiers de production** + `SEO_PLAN.md`
- État de #327 (run du 24/08) : **toujours ouverte**.

### 1. Le correctif du rang 2
`PRICING.md` L53 interdit **verbatim** « deslocacao gratuita ». Occurrences de production : **2**, la même chaîne exacte, dans un **couple source-duale** (`client/src/pages/QuantoCustaArranjarAguaCastanha.tsx` L232 + son jumeau statique `client/public/quanto-custa-arranjar-agua-castanha.html` L221).

```
- Deslocação gratuita em Trás-os-Montes
+ Deslocação por zona Z1-Z6 (15-65€) em Trás-os-Montes
```

**Zéro invention** : chaîne transplantée **verbatim** de `server/index.ts` L74 et `client/src/pages/Urgencia.tsx` L81/L89, valeurs conformes au tableau `PRICING.md` (Z1 15€ … Z6 65€).

**Écarté délibérément** : `blog/CustoCanalizadorTrasOsMontesPrecos.tsx` L422/L471 — « Alguns profissionais incluem deslocação gratuita » décrit la **pratique du marché**, pas l'offre. Même précédent que `tutoriais online gratuitos` (24/08).

### 2. 🔴 DÉCOUVERTE MAJEURE — le prédicat `orçamento gratuito` était sous-compté de DEUX ORDRES DE GRANDEUR
Le `context.md` du 24/08 annonçait « **~27 restantes** ». Mesure de ce run, motif élargi `or[çc]amento…gratuit` (et l'inverse) sur **tout le dépôt** et non sur `client/src` seul :

| Mesure | Valeur |
|---|---|
| Famille large `orçamento`↔`gratuit` | **3822 occurrences / 1723 fichiers** |
| Forme littérale `Orçamento gratuito` | 1653 |
| **Formes variantes invisibles au grep littéral** | **2169** |

| Variante jamais comptée | Occ. |
|---|---|
| `orçamento é sempre gratuito` | **421** |
| `orçamento é gratuito` | 44 |
| `orçamentos são gratuitos` | 39 |
| `orçamento escrito é gratuito` | 38 |
| `orçamento personalizado gratuito` | 31 |
| `Orçamento 100% gratuito`, `Diagnóstico e orçamento 100% gratuitos`, `Orçamento sempre gratuito`… | ~25 formes distinctes |

**Deux élargissements distincts étaient nécessaires** : le motif large sur `client/src` seul n'aurait rien vu de spectaculaire ; le motif littéral sur tout le dépôt aurait raté 2169 occurrences.

➡️ **Le vrai reste est un batch de 1723 fichiers. GO PÉRIMÈTRE requis.** C'est désormais le plus gros défaut de conformité **mesuré** sur ce repo (le rang 1 reste le plus gros défaut de **contenu**).

### 3. Verdict de requalification — rang 6
- **`voltamos gratuitamente` : 27 occurrences** (et non 11 — le compteur du 24/08 ne balayait que `client/src`). **NON-violation de `PRICING.md` L51-53** : garantie de retour, pas promesse de prix sur l'intervention initiale. Forme conforme déjà en production : « Se a avaria voltar dentro de 12 meses, voltamos sem cobrar deslocação. Garantia escrita. » ➡️ **À router vers l'arbitrage GARANTIE (PR #311), pas vers le prédicat gratuité.**
- **`diagnóstico/análise/avaliação/inspeção gratuit*` : 404 occurrences** (395 `client/public`, 7 `client/src` — et non 12). **NON-violation** : la production porte elle-même le discriminant doctrinal — « Se diagnosticamos e não conseguimos resolver no mesmo dia, **a deslocação é cobrada mas o diagnóstico é gratuito** ». Le diagnostic (acte intellectuel) est gratuit, la deslocação est facturée : les deux énoncés coexistent sans fausse promesse. Les 6 « Sim, o diagnóstico no local é gratuito » sont couverts par le même discriminant. **Ne pas purger.**

## ✅ Gate merge — aucun gate actif
Vérifié ce run : **aucune mention d'attente de merge** dans ce `context.md`. Aucun gate réécrit. 10 PR étaient ouvertes ; la #328 a été ouverte quand même.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Entre le 06/08 et le 09/08, « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. **Ne jamais réécrire un gate de ce type.**

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-25

| Rang | Cible | Statut |
|---|---|---|
| — | `Orçamento gratuito` × 48 sur les 22 pages `pages/cidades/` | ✅ traité le 24/08 (#327, ouverte) |
| — | `Deslocação gratuita` × 2 (couple source-duale) | ✅ **traité ce run (#328)** |
| — | `voltamos gratuitamente` × 27 · `diagnóstico gratuit*` × 404 | ✅ **requalifiées NON-violations ce run** — sorties de la file de purge |
| **1** | 🔴 **Balises de composants JSX brutes dans `client/public/`** — `<FAQSection />`, `<Breadcrumbs />`, `<CidadesProximas />`… **des blocs entiers de contenu sont invisibles en production.** Confirmé ce run sur un fichier de plus (`quanto-custa-arranjar-agua-castanha.html` contient littéralement `{[ … ].map((item, index) => (…))}`) | 🛑 **GO requis.** Reconstruire le HTML rendu = invention (R4). **Plus gros défaut de CONTENU du repo.** |
| **2** | 🔴 **Batch `orçamento`↔`gratuit` — 3822 occ. / 1723 fichiers**, dont 421 × `orçamento é sempre gratuito`. Interdit **verbatim** par `PRICING.md` L51 | 🛑 **GO PÉRIMÈTRE requis.** **Plus gros défaut de CONFORMITÉ mesuré.** Ne peut pas se traiter en run de nuit. Correctif prouvé (#327) : `Orçamento gratuito` → `Orçamento por escrito`. **Un GO d'une ligne débloque 1723 fichiers.** |
| **3** | **Les 5 fichiers `client/public/` réservés par des PR ouvertes** — interpolation `${…}`, 27 occurrences | ⏸ **à reprendre dès merge** de #325/#323/#320/#319/#318/#316/#315/#314/#311/#309. Correctif identique à #326. **Aucun GO nécessaire.** |
| **4** | **Corruption de prose `repar`→`arranj` — ~240 occurrences restantes** | ⏳ **GO périmètre requis.** Inclut `Parranjo` = `Preparação`. **Un GO d'une ligne débloque les 523 des 4 repos.** |
| **5** | **`components/StructuredData.tsx` L323** — `raio de 100 km` restant | ⏸ **bloqué par la PR #319 ouverte** (elle corrige L365, pas L323). |
| **6** | **27 fichiers morts sans violation** (~4000 lignes de bundle) | ⏳ dont `ComponentShowcase.tsx` (1375 L), `PartnershipsPage.tsx` (424 L), `blog/AutomacaoResidencialGuia.tsx` (344 L, **encore de l'électricité**), 9 `pages/urgencias/*.tsx`, 8 `hooks/`. Retrait de confort — GO souhaitable. |
| 7 | `shared/videoData.ts` L156 `Garantia de 2 Anos` | ⏳ fichier **vivant**, garantie non sourcée (R11). |
| 8 | `{ borderColor: config.colors.primary }` ×3 — `transparence-prix.html` | ⏳ cosmétique. Peu de valeur. |
| 9 | `shared/serviceConfig.ts`, `shared/seoKeywords.ts`, `client/src/data/` | ⏳ angle mort permanent |
| — | `PriceTable.tsx` · `OrcamentoGratuitoBadge.tsx` | ⏸ **STATUÉES** — arbitrage d'offre |
| — | `TrustBanner.tsx` · `SEOHead.tsx` · `CalculadorPreco.tsx` · `Blog.tsx` · `Equipa.tsx` | ⏸ à requalifier en lecture — `24h/7 dias` est **autorisé** par R145 |

## Tâche suivante recommandée
1. 🔴 **Poser à Philippe les DEUX GO d'une ligne**, ce sont les deux seuls vrais déblocages restants :
   - rang 1 (JSX brut servi en production) ;
   - rang 2 (batch `orçamento~gratuit`, 1723 fichiers, correctif déjà prouvé par #327).
2. **Refaire la mesure « périmètre + motif élargis » sur les 3 autres repos.** Si CNR passe de 27 à 3822, ENR/CU/EU sont très probablement dans le même ordre de grandeur — leurs compteurs ont la même origine. **C'est la tâche à plus fort rendement du prochain run.**
3. **`10 anos` vs `12 anos de experiência`** : 7 occurrences de `12 anos`, aucune sourcée (R11).
4. **Rang 3 dès qu'une des 10 PR bloquantes merge.**
5. Uniformisation `tel:` avec/sans `+351`.

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — un compteur de violation vaut ce que vaut son PÉRIMÈTRE, et le périmètre est presque toujours IMPLICITE.** `client/src` a été le périmètre par défaut, jamais énoncé, de tous les runs précédents ; `client/public` porte **1700+ fichiers générés** avec les mêmes chaînes. ➡️ **Ne jamais écrire « il en reste N » sans écrire sur quel arbre et avec quel motif.** Ici : 27 annoncées → **3822** réelles.
- 🔴 **NOUVEAU — élargir le MOTIF et élargir l'ARBRE sont deux élargissements distincts, et il faut les deux.** Motif large sur `client/src` seul : rien de spectaculaire. Motif littéral sur tout le dépôt : 2169 occurrences ratées. **Croiser les deux axes avant de déclarer une famille traitée.**
- 🔴 **NOUVEAU — chercher le DISCRIMINANT DOCTRINAL dans la production avant de purger une famille.** La phrase « a deslocação é cobrada mas o diagnóstico é gratuito », déjà servie, tranche à elle seule **404 occurrences en non-violation**. Sans elle, la famille partait en purge injustifiée. **La production contient souvent sa propre jurisprudence.**
- 🔴 **NOUVEAU — une famille peut relever d'un AUTRE arbitrage que celui sous lequel on l'a rangée.** `voltamos gratuitamente` n'est pas une question de gratuité mais de **garantie** (PR #311). **Router plutôt que purger** : purger sous le mauvais prédicat, c'est trancher un arbitrage qui ne nous appartient pas.
- 🔴 **Le couple SOURCE-DUALE se vérifie systématiquement** : toute chaîne de `client/src/pages/X.tsx` a un jumeau `client/public/x.html`. Patcher l'un sans l'autre laisse la violation **servie en production**.
- 🔴 **Une doctrine peut se RETOURNER, et le journal garde l'ancienne version.** `gratuito` était certifié « non-violation » les 05/08-06/08 ; `PRICING.md` V2 du **11/08** l'interdit verbatim. **Dater le prédicat qu'on applique. La note la plus ancienne perd.**
- 🔴 **Ventiler par famille AVANT de choisir le périmètre** transforme un batch risqué en substitution triviale. **Chercher le sous-ensemble homogène.**
- 🔴 **Le contrôle « mot inexistant » se fait par DIFF D'ENSEMBLES DE MOTS**, pas par grep du lemme. Ce run : 2 mots nouveaux (`zona`, `Z`), tous deux réels. Coût : 4 lignes de Python.
- 🔴 **Une baseline `tsc` qui bouge n'est pas forcément une régression.** Comparer à `github/main` du run courant, jamais à une constante d'un `context.md` antérieur.
- 🔴 **« valeur non sourçable » doit être PROUVÉ** en remontant la chaîne de définition. **Distinguer « aucune source » de « source pas encore cherchée ».**
- 🔴 **Remplacer une interpolation sans remplacer son ENVELOPPE laisse le lien cassé.** Unité de correction = l'attribut entier.
- 🔴 **Un élément HTML inconnu est plus destructeur qu'une interpolation cassée, et invisible à tous les compteurs.**
- 🔴 **Le contrôle des PR ouvertes se fait AVANT de calculer le périmètre.** 7ᵉ run consécutif où `gh pr view <n> --json files` évite un conflit.
- 🔴 **Un marqueur non substitué peut laisser les balises PARFAITEMENT ÉQUILIBRÉES.** Équilibre et délimiteurs non résolus = deux contrôles **complémentaires**.
- 🔴 **Avant de patcher une chaîne, vérifier qu'elle ne vit pas dans un BLOC DUPLIQUÉ.**
- 🔴 **Un prédicat de code mort doit porter sur TOUT le dépôt, jamais sur un sous-arbre.** (Même racine que la leçon du périmètre implicite ci-dessus.)
- 🔴 **La signature d'une corruption de batch, c'est le MOT INEXISTANT**, pas la chaîne cherchée.
- 🔴 **Tout batch de substitution doit ancrer ses motifs sur `\b`** et livrer le compte des non-mots qu'il crée.
- 🔴 **Quand un défaut récidive, chercher le GÉNÉRATEUR, pas la page.**
- 🔴 **Un motif de violation dans un commentaire qui CITE la règle est un faux positif systématique.**
- 🔴 **Un titre de PR ne dit pas ce que la PR couvre.**
- 🔴 **Le compteur R12 sur-compte** : R145 **autorise** `24h/7 dias`.
- 🔴 **Une PR mergée peut DISPARAÎTRE de `main`.** Chercher `(#N)` dans `git log --oneline` (`merge-base --is-ancestor` est faux sur un squash).
- **Ne pas sur-purger.** R4 se viole dans les deux sens. Ce run : **3 non-purges motivées** (pratique du marché, garantie, discriminant doctrinal).

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Reconfirmé ce run : `git push --dry-run` depuis le sandbox → `could not read Username for 'https://github.com'`. Répartition : lecture / grep / parsing Python / **écriture de fichiers** → sandbox ; `git` en écriture / `gh` / `tsc` → host.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Worktrees et `--body-file` sous `~/work/Sites/_worktrees/` ou `~/work/Sites/_loop-<date>/` (montés des deux côtés), jamais dans `/tmp`. ⚠️ Le `--body-file` doit vivre **hors du worktree**, sinon il apparaît en fichier non suivi.
- 🔴 **Un worktree n'est PAS un dépôt git vu depuis le sandbox** : `git show`/`git diff`/`git log` y échouent et rendent des **compteurs à zéro** qui ressemblent à un résultat. **Tout témoin se compte en Python sur le CONTENU des fichiers.**
- 🔴 **`grep -E` de macOS ne matche pas de façon fiable `ç`/`ã`/`õ`** ; `git grep -E` les matche. **Pour tout motif accentué : Python.**
- 🔴 **`grep -P` n'existe pas sur macOS** ; **zsh ne fait pas de word-splitting** ; **`set -e` + glob vide fait avorter le script**.
- 🔴 **`git commit -m` multiligne est fragile en zsh** → `printf … | git commit -F -`. Corps de PR : `--body-file`, jamais `--body` inline.
- **`tsc` dans un worktree** : `ln -sfn <checkout>/node_modules ./node_modules` avant, **et retirer le lien avant le commit**.
- 🔴 **Toujours diffuser contre `github/main`** sur ce repo : le remote s'appelle `github` (pas `origin`) et `origin/main` peut être très en retard. ⚠️ **CNR est le seul des 4 repos dans ce cas** — ENR, CU et EU utilisent `origin`.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Vérifié ce run : checkout partagé sur `feat/cnr-rankpush-esgoto-entupido-round4-t_04a81831` avec 2 répertoires non suivis — **non touché**. Aucun `context.md` ne *prescrit* de `reset --hard`.

## Blocages connus
1. 🛑 **RANG 1 — balises de composants JSX brutes servies en production.** Reconstruire le HTML rendu = invention (R4). **GO Philippe.**
2. 🛑 **RANG 2 (NOUVEAU) — batch `orçamento`↔`gratuit`, 3822 occurrences / 1723 fichiers.** Correctif prouvé (#327), aucun risque technique, mais le volume impose un **GO périmètre**.
3. ⏸ **27 occurrences d'interpolation** sur 5 fichiers réservés par des PR ouvertes. **Pas un blocage de fond** : il suffit d'un merge.
4. 🛑 **GO périmètre — corruption de prose `repar`→`arranj`** : 523 occurrences / 258 fichiers sur les 4 repos.
5. 🛑 **`Você` — 184 occurrences / 161 fichiers sur les 4 repos** (CNR 40/35). `LECONS.md` le classe INTERDIT. GO requis.
6. 🛑 **`components/SEOHeadEnhanced.tsx` L202 `"geoRadius": "20000"`** — `GeoCircle` par ville. **Arbitrage Philippe.**
7. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** (`shared/serviceConfig.ts` L67) : le renommer **change l'offre affichée** → GO. **Même question sur ENR : un seul arbitrage débloque les 2 repos.**
8. 🛑 **Batch `Atendimento 24h`** (192 occurrences) — attente GO.
9. 🛑 **Batch FAQ (~815 fichiers)** et **batch prix (~73)** de la PR #240 — périmètre parké. Rappel d'une ligne.
10. ⚠️ **`10 anos` vs `12 anos de experiência`** — contradiction en production, aucune des deux sourcée.
11. ⏸ **`StructuredData.tsx` L323** — bloqué par la PR #319 ouverte.
12. ⚠️ **La cause racine reste inconnue** pour le batch `repar`→`arranj`, pour les duplications de corps de page, **et pour l'extraction de pages statiques qui laisse du JSX non compilé**. **Trois défauts distincts issus de la même chaîne de génération : elle mérite un audit dédié.** ➡️ Le volume découvert ce run (1723 fichiers `client/public` portant les mêmes chaînes) **désigne cette chaîne de génération comme le générateur unique** de la plupart des défauts du repo. **Corriger le générateur vaut mieux que 1723 patchs.**
13. ℹ️ **Un §NAP dans `AGENTS.md` reste souhaitable** — confort, pas blocage.
14. 🔴 **11 PR ouvertes, aucune n'a mergé depuis le 23/08.** Le rang 3 est bloqué mécaniquement par ce stock. **Un merge, n'importe lequel, débloque 27 occurrences de correctif déjà écrit.**
