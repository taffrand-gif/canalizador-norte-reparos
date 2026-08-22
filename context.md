# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-22
- Tâche prévue : rang 2 de la file du 21/08 — marqueurs de gabarit `##style##` / `##endstyle##`.
- Tâche réellement exécutée : **la tâche prévue**, exécutée en entier. Le rang 1 (corruption de prose `repar`→`arranj`) reste bloqué faute de GO périmètre.
- **1 PR ouverte** :
  - **#324** — https://github.com/taffrand-gif/canalizador-norte-reparos/pull/324 — branche `loop/2026-08-22-cnr-style-markers` — 4 commits, 3 fichiers de production + `SEO_PLAN.md`

### 1. Les marqueurs `##style##` (PR #324) — dont un qui servait tout le CSS en clair
`client/public/contactos.html` L2 portait le marqueur de gabarit `##style##` **à la place de `<style>`** : la feuille de style n'était jamais ouverte, **tout le CSS était servi comme texte visible en haut de la money page Contactos**, et le `</style>` de L9 fermait un bloc inexistant. Marqueur résiduel `##endstyle##` (L8) retiré. Même défaut et même correctif que CU #270 et EU #313.
`sobre.html` L21 et `calculadora-de-preco.html` L21 portaient un `##endstyle##` résiduel **à l'intérieur** du bloc `<style>` ouvert L12 — ligne de CSS invalide livrée au parseur.
⚠️ **Ces deux-là étaient DÉJÀ ÉQUILIBRÉS 2/2.** Le contrôle d'équilibre des balises — celui qui avait tout trouvé sur CU et EU — ne les sortait pas.
- **Témoins R8** (tout le dépôt hors `.git`/`node_modules`/`dist`, docs exclus) : `##[a-zA-Z_]{3,}##` **4 → 0** · `contactos.html` `<style>`/`</style>` **1/2 → 2/2** · les deux autres **2/2 → 2/2**.
- Contrôle PR ouvertes avant patch : **137 fichiers** pris par 9 PR, **aucun des 3 fichiers cibles**.

### 2. 🔴 DÉCOUVERTE — 19 pages statiques servent du JSX BRUT non compilé
Le contrôle élargi que le `context.md` du 21/08 demandait d'ajouter (`##…##`, puis `{{…}}`, `%%…%%`, `__…__`, `${…}`) a rendu **72 occurrences sur 19 fichiers** de `client/public/`, hors `<script>` et hors commentaires.
Ce sont des **pages complètes** (`<!DOCTYPE html>`, GA4 injecté le 04/08), donc servies telles quelles :
```html
<a href={`tel:${ACTIVE_CONFIG.phone}`}>📞 Ligar Agora</a>
<a href={`https://wa.me/${config.whatsapp}?text=…`}>…</a>
📞 Canalizador Miranda do Douro: {config.phone}
```
Le navigateur rend ça **littéralement** : **les CTA téléphone et WhatsApp sont morts, et `{config.phone}` s'affiche à la place du numéro.**
Money pages touchées : `fuga-agua-urgente`, `cano-rebentado`, `esquentador-avariado`, `cheiro-mau-canalizacao`, `arranjo-esquentadores`, `instalacao-canalizacao`, `canalizador-{miranda-douro,torre-moncorvo,freixo-espada-cinta,vila-nova-foz-coa}`, `quanto-tempo-demora-arranjar-fuga-agua`, `quanto-tempo-demora-desentupir-sanita`, `quanto-tempo-sem-agua-quente`, `quanto-custa-arranjar-agua-castanha`, `vale-pena-arranjar-vs-substituir`, `transparence-prix`, `blog/arranjo-caldeira-esquentador-manutencao`.
🛑 **Non corrigé, et c'est un blocage réel** : `AGENTS.md` de CNR **ne porte aucun §NAP**. La valeur de substitution du téléphone n'est pas sourçable, et #142 interdit de la recopier depuis un HTML. **Un §NAP dans `AGENTS.md` débloque les 19 pages.**
Les 2 hits `{{SLUG}}` / `{{LOCAL_BUSINESS_TYPE}}` sont **dans des commentaires HTML** → faux positifs écartés.

### 3. Contrôle croisé des 4 repos sur `comparacao.html` — CNR est le seul propre
Ce run a trouvé sur **CU deux copies complètes du corps de page** et sur **ENR trois** (`<h1>` ×3, `<main>` 3/1). **CNR : 1 `<h1>`, `<main>` 1/1, `<section>` 1/1 — propre.** Rien à faire ici, mais le motif est à resurveiller : la chaîne de génération duplique.

## ✅ Gate merge — aucun gate actif
Vérifié ce run : **aucune mention d'attente de merge** dans les 4 `context.md`. Aucun gate réécrit.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Une PR en attente ne gèle pas le repo — ce run a ouvert la #324 pendant que 9 autres restaient ouvertes. Entre le 06/08 et le 09/08, la mention « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. **Ne jamais réécrire un gate de ce type.**

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-22

| Rang | Cible | Statut |
|---|---|---|
| — | `##style##` ×4 sur 3 fichiers | ✅ **traité ce run (#324)** |
| **1** | 🔴 **19 pages statiques servant du JSX brut — CTA téléphone et WhatsApp morts** | 🛑 **GO d'une ligne : ajouter un §NAP à `AGENTS.md`.** 72 occurrences / 19 fichiers, dont 6 money pages. Le correctif est mécanique une fois la valeur sourcée. **Plus gros défaut de conversion identifié à ce jour sur ce repo.** |
| **2** | **Corruption de prose `repar`→`arranj` — ~240 occurrences restantes** | ⏳ **GO périmètre requis.** Inclut `Parranjo` = `Preparação`, restauration *probable* mais **pas prouvable par un fichier sur disque** → hors R4 sans arbitrage. **Un GO d'une ligne débloque les 523 des 4 repos.** |
| **3** | **`components/StructuredData.tsx` L323** — `raio de 100 km` restant | ⏸ **toujours bloqué par la PR #319 ouverte** (elle corrige L365, pas L323). |
| **4** | **`grep -rn 'gratuit' client/src` = 110** | ⏳ prédicat `PRICING.md` L51-53. Plus gros gisement de conformité du repo. Ventiler par famille. |
| **5** | **27 fichiers morts sans violation** (~4000 lignes de bundle) | ⏳ dont `ComponentShowcase.tsx` (1375 L), `PartnershipsPage.tsx` (424 L), `blog/AutomacaoResidencialGuia.tsx` (344 L, **encore de l'électricité**), 9 `pages/urgencias/*.tsx`, 8 `hooks/`. Retrait de confort — GO souhaitable. |
| 6 | `shared/videoData.ts` L156 `Garantia de 2 Anos` | ⏳ fichier **vivant**, garantie non sourcée (R11). |
| 7 | `shared/serviceConfig.ts`, `shared/seoKeywords.ts`, `client/src/data/` | ⏳ angle mort permanent |
| — | `PriceTable.tsx` · `OrcamentoGratuitoBadge.tsx` | ⏸ **STATUÉES** — arbitrage d'offre |
| — | `TrustBanner.tsx` · `SEOHead.tsx` · `CalculadorPreco.tsx` · `Blog.tsx` · `Equipa.tsx` | ⏸ à requalifier en lecture — `24h/7 dias` est **autorisé** par R145 |

## Tâche suivante recommandée
1. **Rang 1 si le §NAP arrive** — c'est le plus gros retour sur effort du repo : 6 money pages dont les deux CTA sont morts. Sinon, **poser la question en une ligne et passer au rang 4**.
2. **Rang 4 — le prédicat `gratuit`** (110 occurrences), ventilé par famille.
3. **Rang 5 — les 27 morts sans violation**, avec le prédicat **corrigé** (tout le dépôt).
4. **`10 anos` vs `12 anos de experiência`** : 7 occurrences de `12 anos` subsistent contre les `10 anos` de `faqData.ts`, aucune sourcée (R11).
5. **`StructuredData.tsx` L323** dès #319 mergée. ⚠️ #319 ne corrige **qu'une** des deux occurrences — vérifier le diff, pas le titre.
6. Vocabulaire de remplacement validé **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159. Pronoms : `AGENTS.md` §12. **Privilégier le RETRAIT.**

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — un marqueur non substitué peut laisser les balises PARFAITEMENT ÉQUILIBRÉES.** 2 des 3 fichiers de ce run étaient 2/2 ; le contrôle d'équilibre — celui qui avait tout trouvé sur CU et EU — les manquait tous les deux. ➡️ **Le grep des délimiteurs non résolus n'est pas redondant avec le contrôle d'équilibre : il est complémentaire. Passer les deux, systématiquement.**
- 🔴 **NOUVEAU — élargir le motif d'un contrôle coûte une commande et change l'ordre de grandeur.** `##…##` rendait 4 occurrences ; ajouter `${…}` et `{{…}}` en a rendu **72 de plus, sur un défaut bien plus grave**. ➡️ **Quand un contrôle trouve quelque chose, élargir sa famille avant de refermer.**
- 🔴 **NOUVEAU — qualifier `${…}` exige d'exclure les `<script>` ET les commentaires HTML.** Une template string JS est légitime ; un marqueur documenté dans un en-tête de gabarit aussi. Sans ces deux exclusions le contrôle est inexploitable (ici : 2 faux positifs sur 74).
- 🔴 **NOUVEAU — quand `AGENTS.md` ne porte pas la valeur canonique, le défaut n'est pas corrigeable sans invention.** Constaté sur CU le 21/08, reconfirmé sur CNR ce run. **Ajouter un §NAP à `AGENTS.md` est un préalable, pas un confort** : il débloque 19 pages d'un coup.
- 🔴 **NOUVEAU (leçon CU/ENR de ce run) — avant de patcher une chaîne, vérifier qu'elle ne vit pas dans un BLOC DUPLIQUÉ.** Sur CU, les 3 chaînes interdites vivaient toutes dans une copie périmée du corps de page ; les patcher une par une aurait « corrigé » le mort et laissé la page avec deux `<h1>`. **Le bon niveau de correction n'est ni la chaîne ni la page : c'est le bloc.**
- 🔴 **Un prédicat de code mort doit porter sur TOUT le dépôt, jamais sur un sous-arbre.** Les consommateurs vivent aussi dans `scripts/`, les configs de build, les manifestes de pré-rendu.
- 🔴 **La signature d'une corruption de batch, c'est le MOT INEXISTANT**, pas la chaîne cherchée. `grep -rIoE '[[:alpha:]]*<lemme>[[:alpha:]]*' | sort | uniq -c`. **Reste à passer sur** `urgência`, `rápido`, `garantia`, `gratuito`.
- 🔴 **Tout batch de substitution doit ancrer ses motifs sur `\b` et livrer le compte des non-mots qu'il crée.**
- 🔴 **Un lien corrompu est invisible à l'audit de conformité ET à l'audit de sitemap.** Contrôle dédié : résoudre chaque lien interne contre le disque.
- 🔴 **Quand un défaut récidive, chercher le GÉNÉRATEUR, pas la page.**
- 🔴 **Un motif de violation dans un commentaire qui CITE la règle est un faux positif systématique.**
- 🔴 **La contamination croisée plomberie ↔ électricité va dans les deux sens.** ⚠️ Mais un grep cross-métier brut produit des faux positifs en masse sur les composants pilotés par `shared/serviceConfig.ts` — ne l'appliquer qu'aux **pages autonomes**.
- 🔴 **Une baseline se remesure sur un arbre intact dans le même run.** `tsc --noEmit` = **215** (confirmé 2 runs).
- 🔴 **Un titre de PR ne dit pas ce que la PR couvre.** Vérifié encore ce run sur ENR : la PR #348, intitulée « supprime les promesses de délai (R145) », prend en fait `comparacao.html` — un fichier sans rapport avec son titre. **4ᵉ run consécutif** que le contrôle `gh pr view <n> --json files` évite un conflit.
- 🔴 **Le compteur R12 sur-compte** : R145 **autorise** `24h/7 dias`.
- 🔴 **Une PR mergée peut DISPARAÎTRE de `main`.** Chercher `(#N)` dans `git log --oneline` (`merge-base --is-ancestor` est faux sur un squash).
- **Ne pas sur-purger.** R4 se viole dans les deux sens : inventer **et** effacer ce qui est vrai.

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Sandbox `mcp__workspace__bash` : `git fetch` OK, **`git push` impossible** (`could not read Username`). **Répartition reconfirmée ce run** : lecture / grep / parsing Python / **écriture de fichiers** → sandbox ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process`.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Worktrees sous `~/work/Sites/_worktrees/loop-YYYY-MM-DD/` — lisibles depuis le sandbox via son montage.
- 🔴 **NOUVEAU — un worktree n'est PAS un dépôt git vu depuis le sandbox** : son `.git` est un fichier pointant vers un chemin macOS. `git show`, `git diff` et `git log` y **échouent silencieusement** depuis `mcp__workspace__bash` (`fatal: not a git repository`), et un `python3` qui lit leur stdout renvoie alors des compteurs **à zéro** qui ressemblent à un résultat. ➡️ **Tout « avant » mesuré par git se prend depuis le host**, jamais depuis le sandbox. Vérifié ce run : un témoin `3/2` avait été lu `0/0`.
- 🔴 **`git worktree add … -b X <remote>/main` puis `git switch -c Y <remote>/main` conserve les modifications non commitées** : manière propre de scinder un run en 2 PR thématiques sans `stash` (interdit R-WT).
- **`tsc` dans un worktree** : `ln -sfn <checkout>/node_modules ./node_modules` avant, **et retirer le lien avant le commit**.
- 🔴 **Toujours diffuser contre `github/main`** sur ce repo : `origin/main` peut être très en retard.
- 🔴 **`grep -P` n'existe pas sur macOS** ; **zsh ne fait pas de word-splitting** ; **`set -e` + glob vide fait avorter le script**. Pour tout motif non trivial : **Python**.
- 🔴 **`git commit -m` multiligne est fragile en zsh** → `git commit -F -` avec heredoc. Corps de PR : `--body-file`, jamais `--body` inline.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Vérifié ce run : checkout partagé sur `feat/t_45ec27ae-esgoto-entupido-round3` avec 2 fichiers non commités — **non touché**. Aucun `context.md` ne *prescrit* de `reset --hard`.

## Blocages connus
1. 🛑 **NOUVEAU — pas de §NAP dans `AGENTS.md`** : bloque les 19 pages à JSX brut (rang 1). **Le blocage le plus rentable à lever du repo.** Même manque déjà constaté sur CU le 21/08.
2. 🛑 **GO périmètre — corruption de prose `repar`→`arranj`** : 523 occurrences / 258 fichiers sur les 4 repos. La partie « liens » est livrée ; la partie « prose » attend un arbitrage sur `Parranjo`→`Preparação`.
3. 🛑 **`Você` — 184 occurrences / 161 fichiers sur les 4 repos** (CNR 40/35). `LECONS.md` le classe dans le **corpus INTERDIT**. GO requis. ℹ️ **4 occurrences sont tombées sur CU ce run sans consommer le GO**, parce qu'elles vivaient dans un bloc mort — **chercher les doublons avant de dépenser un arbitrage**.
4. 🛑 **`components/SEOHeadEnhanced.tsx` L202 `"geoRadius": "20000"`** — `GeoCircle` **par ville**, distincte du rayon d'entreprise. Toute valeur serait une invention (R4). **Arbitrage Philippe.**
5. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** (`shared/serviceConfig.ts` L67) : le renommer **change l'offre affichée** → GO. **Même question sur ENR : un seul arbitrage débloque les 2 repos.**
6. 🛑 **Batch `Atendimento 24h`** (192 occurrences) — attente GO.
7. 🛑 **Batch FAQ (~815 fichiers)** et **batch prix (~73)** de la PR #240 — périmètre parké. Rappel d'une ligne.
8. ⚠️ **`10 anos` vs `12 anos de experiência`** — contradiction toujours en production, aucune des deux sourcée.
9. ⏸ **`StructuredData.tsx` L323** — bloqué par la PR #319 ouverte.
10. ⚠️ **La cause racine du batch `repar`→`arranj` n'est pas identifiée**, et **celle des duplications de corps de page non plus** (CU 2 copies, ENR 3 copies, EU 5 pages à double groupe JSON-LD, tout cela trouvé ce run). **Trois défauts de duplication distincts en deux runs : la chaîne de génération de pages statiques mérite un audit dédié.**
