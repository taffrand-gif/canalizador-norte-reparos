# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-23
- Tâche prévue : rang 1 de la file du 22/08 — les 19 pages statiques servant du JSX brut — **annoncé bloqué faute de §NAP**.
- Tâche réellement exécutée : **le rang 1, débloqué**. Le blocage était une **erreur de qualification**, levée sans consommer de GO.
- **1 PR ouverte** :
  - **#326** — https://github.com/taffrand-gif/canalizador-norte-reparos/pull/326 — branche `loop/2026-08-23-cnr-jsx-brut-cta` — 14 commits, **13 fichiers de production** + `SEO_PLAN.md`

### 1. Le rang 1 n'était pas bloqué : les expressions cassées nomment leur propre source
Le `context.md` du 22/08 écrivait : « la valeur de substitution du téléphone n'est pas sourçable, et #142 interdit de la recopier depuis un HTML ». **C'est faux, et ça a coûté un run.**

| Expression servie en clair | Chaîne de résolution | Valeur |
|---|---|---|
| `ACTIVE_CONFIG.phone` | `shared/serviceConfig.ts` L115 `= plumberieConfig` (L39) → **L43** | `+351928484451` |
| `ACTIVE_CONFIG.whatsappNumber` | `shared/serviceConfig.ts` **L44** | `351928484451` |
| `config.phone` | `useSite()` → `client/src/contexts/SiteContext.tsx` L11 `getCurrentSiteConfig()` → `shared/siteConfig.ts` L253 → L104 → **L109** | `928 484 451` |
| `config.whatsapp` | `shared/siteConfig.ts` **L110** | `351928484451` |

Les deux sources concordent sur le même numéro, à un format d'affichage près. **Résoudre une référence vers le module de configuration que l'expression désigne elle-même n'est pas une invention** : #142 vise la recopie depuis un **HTML**, pas la lecture du module cité par le code. Quatre commandes ont suffi à remonter la chaîne.

**Périmètre** : 18 fichiers porteurs du défaut, **moins 5 réservés par des PR ouvertes** (`fuga-agua-urgente`, `cano-rebentado`, `esquentador-avariado`, `cheiro-mau-canalizacao`, `blog/arranjo-caldeira-esquentador-manutencao`) → **13 traités**.
- **Témoin R8** (`\{[^{}\n]*\b(config|ACTIVE_CONFIG)\.[^{}\n]*\}`, hors `<script>` et hors commentaires) : **78 → 3** sur les 13 fichiers ; **105 → 30** sur tout `client/public/`. Les 3 résiduels = `{ borderColor: config.colors.primary }`, autre famille.
- Contrôle de bloc dupliqué passé **avant** patch : `<h1>` ×1 partout, `<main>` 1/1 ou 0/0.
- Contrôle d'exhaustivité : liste des `${…}` sans correspondance = **vide**.

### 2. 🔴 Le défaut restant est plus grave que celui qui vient d'être corrigé
Ces mêmes pages contiennent des **balises de composants JSX brutes** : `<FAQSection />`, `<Breadcrumbs />`, `<CidadesProximas />`, `<RelatedCities />`, `<Phone />`, `<Accordion>`, et sur les pages non traitées `<EmotionalHero>`, `<PainPointSection>`, `<GuaranteeBox>`. Le navigateur les traite en **éléments inconnus** : leurs attributs sont ignorés et **des blocs entiers de contenu ne s'affichent pas du tout** — sur `fuga-agua-urgente.html`, c'est tout le hero.
🛑 **Non corrigeable sans invention** : il faudrait reconstruire le HTML rendu. **GO Philippe requis.** C'est le nouveau rang 1.

### 3. Ce que la correction ne fait pas
14 des liens corrigés donnent `tel:928484451` **sans indicatif**, parce que c'est exactement ce que le composant rendait (`tel:${config.phone.replace(/\s/g,'')}`, sans préfixe littéral dans le gabarit). Les 10 autres portaient `+351` en dur et donnent `tel:+351928484451`. **Reproduction fidèle plutôt qu'amélioration non sourcée.** Uniformiser les deux formes est légitime mais demande un arbitrage d'une ligne.

## ✅ Gate merge — aucun gate actif
Vérifié ce run : **aucune mention d'attente de merge**. Aucun gate réécrit. 10 PR étaient ouvertes ; la #326 a été ouverte quand même.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Entre le 06/08 et le 09/08, « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. **Ne jamais réécrire un gate de ce type.**

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-23

| Rang | Cible | Statut |
|---|---|---|
| — | 13 pages à JSX brut — CTA téléphone/WhatsApp morts | ✅ **traité ce run (#326)** |
| **1** | 🔴 **Balises de composants JSX brutes dans `client/public/`** — `<FAQSection />`, `<Breadcrumbs />`, `<CidadesProximas />`, `<RelatedCities />`, `<EmotionalHero>`, `<GuaranteeBox>`… **des blocs entiers de contenu sont invisibles en production** | 🛑 **GO requis.** Reconstruire le HTML rendu = invention (R4). **Plus gros défaut de contenu identifié à ce jour sur ce repo.** |
| **2** | **Les 5 fichiers `client/public/` réservés par des PR ouvertes** — même défaut d'interpolation, 27 occurrences | ⏸ **à reprendre dès merge** de #325/#323/#320/#319/#318/#316/#315/#314/#311/#309. Correctif identique, table de résolution ci-dessus. **Aucun GO nécessaire.** |
| **3** | **Corruption de prose `repar`→`arranj` — ~240 occurrences restantes** | ⏳ **GO périmètre requis.** Inclut `Parranjo` = `Preparação`. **Un GO d'une ligne débloque les 523 des 4 repos.** |
| **4** | **`components/StructuredData.tsx` L323** — `raio de 100 km` restant | ⏸ **bloqué par la PR #319 ouverte** (elle corrige L365, pas L323). |
| **5** | **`grep -rn 'gratuit' client/src` = 110** | ⏳ prédicat `PRICING.md` L51-53. Plus gros gisement de conformité. Ventiler par famille. |
| **6** | **27 fichiers morts sans violation** (~4000 lignes de bundle) | ⏳ dont `ComponentShowcase.tsx` (1375 L), `PartnershipsPage.tsx` (424 L), `blog/AutomacaoResidencialGuia.tsx` (344 L, **encore de l'électricité**), 9 `pages/urgencias/*.tsx`, 8 `hooks/`. Retrait de confort — GO souhaitable. |
| 7 | `shared/videoData.ts` L156 `Garantia de 2 Anos` | ⏳ fichier **vivant**, garantie non sourcée (R11). |
| 8 | `{ borderColor: config.colors.primary }` ×3 — `transparence-prix.html` | ⏳ cosmétique, résoudre depuis `siteConfig.ts` comme le reste. Peu de valeur. |
| 9 | `shared/serviceConfig.ts`, `shared/seoKeywords.ts`, `client/src/data/` | ⏳ angle mort permanent |
| — | `PriceTable.tsx` · `OrcamentoGratuitoBadge.tsx` | ⏸ **STATUÉES** — arbitrage d'offre |
| — | `TrustBanner.tsx` · `SEOHead.tsx` · `CalculadorPreco.tsx` · `Blog.tsx` · `Equipa.tsx` | ⏸ à requalifier en lecture — `24h/7 dias` est **autorisé** par R145 |

## Tâche suivante recommandée
1. **Rang 2 dès qu'une des PR bloquantes merge** — 27 occurrences, correctif déjà écrit et prouvé, zéro GO. **Le meilleur rapport effort/valeur de la file.**
2. **Rang 5 — le prédicat `gratuit`** (110 occurrences), ventilé par famille.
3. **Rang 6 — les 27 morts sans violation**, avec le prédicat portant sur **tout le dépôt**.
4. **`10 anos` vs `12 anos de experiência`** : 7 occurrences de `12 anos` contre les `10 anos` de `faqData.ts`, aucune sourcée (R11).
5. **`StructuredData.tsx` L323** dès #319 mergée. ⚠️ #319 ne corrige **qu'une** des deux occurrences — vérifier le diff, pas le titre.
6. **Poser à Philippe la question du rang 1** en une ligne, et celle de l'uniformisation `tel:` avec/sans `+351`.

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — « valeur non sourçable » doit être PROUVÉ en remontant la chaîne de définition, jamais déduit de l'absence d'un §NAP.** Le rang 1 est resté bloqué un run entier pour un motif faux : la valeur était dans le dépôt depuis le début, dans le fichier même que l'expression cassée nomme. ➡️ **Avant d'écrire « bloqué faute de source », résoudre le symbole** : `grep -rn "SYMBOLE *=" shared/`, puis l'import du composant, puis le contexte, puis la fonction. **Distinguer « aucune source » de « source pas encore cherchée ».**
- 🔴 **NOUVEAU — remplacer une interpolation sans remplacer son ENVELOPPE laisse le lien cassé.** `href={`tel:${X}`}` ne se répare pas en substituant `${X}` : on obtient `href={`tel:928484451`}`, toujours invalide. **La bonne unité de correction est l'attribut entier.** Même famille que « le bon niveau n'est ni la chaîne ni la page, c'est le bloc ».
- 🔴 **NOUVEAU — un élément HTML inconnu est plus destructeur qu'une interpolation cassée, et invisible à tous les compteurs.** Une interpolation cassée affiche du texte laid ; une balise `<FAQSection />` **supprime la section**. ➡️ **Contrôle à passer sur les 4 repos** : `grep -oE '<[A-Z][A-Za-z]+[ />]' client/public/**/*.html | sort -u`.
- 🔴 **Le contrôle des PR ouvertes a écarté 5 des 18 fichiers, soit 28 % du périmètre.** 5ᵉ run consécutif où `gh pr view <n> --json files` évite un conflit. À faire **avant** de calculer le périmètre, pas avant de committer.
- 🔴 **Un marqueur non substitué peut laisser les balises PARFAITEMENT ÉQUILIBRÉES.** Le grep des délimiteurs non résolus n'est pas redondant avec le contrôle d'équilibre : il est **complémentaire**. Passer les deux, systématiquement.
- 🔴 **Élargir le motif d'un contrôle coûte une commande et change l'ordre de grandeur.** `##…##` rendait 4 occurrences ; ajouter `${…}` en a rendu 72 de plus, sur un défaut bien plus grave. **Quand un contrôle trouve quelque chose, élargir sa famille avant de refermer.**
- 🔴 **Qualifier `${…}` exige d'exclure les `<script>` ET les commentaires HTML.** Sans ces deux exclusions le contrôle est inexploitable.
- 🔴 **Avant de patcher une chaîne, vérifier qu'elle ne vit pas dans un BLOC DUPLIQUÉ.** Contrôle passé ce run sur les 13 fichiers : tous propres.
- 🔴 **Un prédicat de code mort doit porter sur TOUT le dépôt, jamais sur un sous-arbre.**
- 🔴 **La signature d'une corruption de batch, c'est le MOT INEXISTANT**, pas la chaîne cherchée. `grep -rIoE '[[:alpha:]]*<lemme>[[:alpha:]]*' | sort | uniq -c`. **Reste à passer sur** `urgência`, `rápido`, `garantia`, `gratuito`.
- 🔴 **Tout batch de substitution doit ancrer ses motifs sur `\b` et livrer le compte des non-mots qu'il crée.**
- 🔴 **Quand un défaut récidive, chercher le GÉNÉRATEUR, pas la page.**
- 🔴 **Un motif de violation dans un commentaire qui CITE la règle est un faux positif systématique.**
- 🔴 **La contamination croisée plomberie ↔ électricité va dans les deux sens.** Mais un grep cross-métier brut produit des faux positifs en masse — ne l'appliquer qu'aux **pages autonomes**.
- 🔴 **Une baseline se remesure sur un arbre intact dans le même run.** `tsc --noEmit` = **215** (confirmé 2 runs). *(Non remesuré ce run : aucun `.ts`/`.tsx` touché.)*
- 🔴 **Un titre de PR ne dit pas ce que la PR couvre.**
- 🔴 **Le compteur R12 sur-compte** : R145 **autorise** `24h/7 dias`.
- 🔴 **Une PR mergée peut DISPARAÎTRE de `main`.** Chercher `(#N)` dans `git log --oneline` (`merge-base --is-ancestor` est faux sur un squash).
- **Ne pas sur-purger.** R4 se viole dans les deux sens : inventer **et** effacer ce qui est vrai. Corollaire vu ce run : **reproduire fidèlement > améliorer sans source** (`tel:` sans indicatif conservé tel quel).

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Sandbox `mcp__workspace__bash` : `git fetch` OK, **`git push` impossible** (`could not read Username`). **Répartition reconfirmée ce run** : lecture / grep / parsing Python / **écriture de fichiers** → sandbox ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process`.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Un `--body-file` de PR doit être écrit sous `~/work/Sites/_worktrees/` (monté des deux côtés), jamais dans `/tmp`.
- 🔴 **Un worktree n'est PAS un dépôt git vu depuis le sandbox** : `git show`/`git diff`/`git log` y échouent et rendent des **compteurs à zéro** qui ressemblent à un résultat. ➡️ **Tout témoin se compte en Python sur le CONTENU des fichiers**, jamais via `git` depuis le sandbox. Appliqué ce run.
- 🔴 **`git worktree add … -b X <remote>/main` puis `git switch -c Y <remote>/main` conserve les modifications non commitées** : manière propre de scinder un run en 2 PR sans `stash` (interdit R-WT).
- **`tsc` dans un worktree** : `ln -sfn <checkout>/node_modules ./node_modules` avant, **et retirer le lien avant le commit**.
- 🔴 **Toujours diffuser contre `github/main`** sur ce repo : `origin/main` peut être très en retard. Les deux remotes pointent vers la même URL mais `origin` n'est pas rafraîchi.
- 🔴 **`grep -P` n'existe pas sur macOS** ; **zsh ne fait pas de word-splitting** ; **`set -e` + glob vide fait avorter le script**. Pour tout motif non trivial : **Python**.
- 🔴 **`git commit -m` multiligne est fragile en zsh** → `git commit -F -` avec heredoc. Corps de PR : `--body-file`, jamais `--body` inline.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Vérifié ce run : checkout partagé sur `feat/cnr-rankpush-esgoto-entupido-round4-t_04a81831` avec 2 répertoires non suivis — **non touché**. Aucun `context.md` ne *prescrit* de `reset --hard`.

## Blocages connus
1. 🛑 **NOUVEAU RANG 1 — balises de composants JSX brutes servies en production** : des blocs entiers de contenu sont invisibles sur les pages de `client/public/`. Reconstruire le HTML rendu = invention (R4). **GO Philippe.**
2. ⏸ **27 occurrences d'interpolation restantes** sur 5 fichiers réservés par des PR ouvertes. **Pas un blocage de fond** : correctif prouvé, il suffit d'attendre un merge.
3. 🛑 **GO périmètre — corruption de prose `repar`→`arranj`** : 523 occurrences / 258 fichiers sur les 4 repos.
4. 🛑 **`Você` — 184 occurrences / 161 fichiers sur les 4 repos** (CNR 40/35). `LECONS.md` le classe dans le corpus **INTERDIT**. GO requis. ℹ️ **Chercher les doublons avant de dépenser un arbitrage** — 4 occurrences sont tombées sur CU sans consommer le GO parce qu'elles vivaient dans un bloc mort.
5. 🛑 **`components/SEOHeadEnhanced.tsx` L202 `"geoRadius": "20000"`** — `GeoCircle` **par ville**, distincte du rayon d'entreprise. Toute valeur serait une invention (R4). **Arbitrage Philippe.**
6. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** (`shared/serviceConfig.ts` L67) : le renommer **change l'offre affichée** → GO. **Même question sur ENR : un seul arbitrage débloque les 2 repos.**
7. 🛑 **Batch `Atendimento 24h`** (192 occurrences) — attente GO.
8. 🛑 **Batch FAQ (~815 fichiers)** et **batch prix (~73)** de la PR #240 — périmètre parké. Rappel d'une ligne.
9. ⚠️ **`10 anos` vs `12 anos de experiência`** — contradiction toujours en production, aucune des deux sourcée.
10. ⏸ **`StructuredData.tsx` L323** — bloqué par la PR #319 ouverte.
11. ⚠️ **La cause racine reste inconnue** pour le batch `repar`→`arranj`, pour les duplications de corps de page (CU 2 copies, ENR 3), **et pour l'extraction de pages statiques qui laisse du JSX non compilé**. **Trois défauts distincts issus de la même chaîne de génération : elle mérite un audit dédié.**
12. ℹ️ **Un §NAP dans `AGENTS.md` reste souhaitable** — mais ce n'était **pas** le préalable annoncé le 22/08. Le rappeler comme confort, pas comme blocage.
