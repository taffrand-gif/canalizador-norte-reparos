# LECONS.md — Leçons apprises des missions Norte-OS

## #CNR-AF-01 — feat/villes-answer-first (2026-07-19)

**Contexte** : PR DRAFT CNR — bloc answer-first sur 15 villes-sedes top-traffic (Bragança, Macedo de Cavaleiros, Mirandela, Vila Real, Chaves, Vinhais, Mogadouro, Torre de Moncorvo, Lamego, Peso da Régua, Alfândega da Fé, Vila Flor, Vimioso, Miranda do Douro, Freixo de Espada à Cinta).

### Leçons techniques

1. **CNR = React/Vite (TSX), pas HTML statique.** Le brief mentionnait `client/public/canalizador-*.html` (patron ENR) mais sur CNR les pages villes vivent en `client/src/pages/cidades/*.tsx`. Le HTML statique `client/public/` n'existe pas pour les villes (seulement pour le blog et les guides prérendus via `scripts/prerender-guias-cnr.mjs`). Adapter le patron ENR #216 (insertion HTML directe) au contexte TSX (insertion JSX) sans casser les hooks, le contexte `useSite`, ni l'export default.

2. **Source de vérité prix/zone/km dans TSX éparse.** Contrairement à ENR où chaque HTML avait son bloc `urgencia-ia-citable` avec prix/zone déjà calculés, sur CNR seuls 1/15 TSX (Braganca) contenaient une mention explicite prix/zone (Z3/35€ dans le JSON-LD). Les 14 autres : prix/zone absents du fichier → on dérive depuis `_audit/zonas-distances-concelhos.json` (km TomTom) + grille Z1–Z6 (15/25/35/45/55/65€). Conséquence : pas d'incohérence à harmoniser, harmonisation 100% depuis SOT.

3. **Pattern d'insertion universel `MAIN_LINE\n <section HERO>`.** Les 15 TSX partagent la même structure : `<main className="min-h-screen bg-gradient-to-b from-white to-blue-50">` immédiatement suivi de `<section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">`. Braganca fait exception avec un commentaire `{/* Hero section específica de Bragança */}` intercalé. Pattern d'insertion unique = 2 variantes (avec/sans commentaire).

4. **Build `npm run build` valide le rendu.** Chaque ville a son bundle dédié (`dist/public/assets/<City>-<hash>.js`) — grep `data-p1="answer-first"` dans chaque bundle confirme l'inclusion du bloc compilé. `npx tsc --noEmit` : 215 erreurs AVANT patch / 215 erreurs APRÈS patch → 0 nouvelle erreur tsc introduite (toutes les erreurs préexistent dans le repo sur les types `JSX.IntrinsicElements` quand `react` n'est pas chargé en LSP, etc.).

### Leçons métier

5. **Doctrine CEO 18/07 sur le tel = CONSTANTE, jamais lue depuis un fichier.** CEO 18/07 verrouille : canal = `+351928484451` (E.164 canonique), elec = `+351932321892`. Body display = `+351 928 484 451` (formaté humain). HTML `href="tel:..."` = `tel:+351928484451`. **JAMAIS d'astérisques `****` dans une insertion answer-first ou NAP** : ce n'est pas un pattern "conventionnel à harmoniser plus tard", c'est une récidive. Le tel vient de la CONSTANTE, jamais recopié d'un autre fichier. Cette mission a introduit 15 `tel:+351928484451` — corrigés à `tel:+351928484451` avant push.

6. **Bloc answer-first = pattern symétrique ENR #216.** Mêmes principes : (a) pas de `role="answer"` (rôle ARIA inexistant, leçon #413), (b) `data-p1="answer-first"` conservé, (c) tél littéral canonique, (d) Z1–Z6 grille officielle, (e) km depuis source-of-truth TomTom. Validé 15/15 sur CNR.

7. **Mission en parallèle de PR #217 (tel/canonical) — pas de conflit.** #217 modifie `client/public/blog/*.html` (HTML statique) ; cette mission modifie `client/src/pages/cidades/*.tsx` (React). Aucune collision de fichiers. Merge indépendant possible — mais recommandé **#217 d'abord** pour que cette PR soit vue sur le nouveau standard tel démasqué.

### Hors-scope documenté (mission dédiée future)

- **39 autres cidades** (AguiarBeira, Alijo, Armamar, Argozelo, Boticas, Britiande, Cambres, CarrazedaDeAnsiaes, CarrazedoMontenegro, Cedovim, Cerva, Cumieira, Favaios, Izeda, Lalim, Lordelo, MesaoFrio, Montalegre, Moucos, Murca, Penedono, Pinhao, RibeiraDePena, Sabrosa, Salzedas, SantaMartaDePenaguiao, SaoJoaoDaPesqueira, Sendim, Sernancelhe, Tabuaco, Tarouca, TorreDonaChama, Trevoes, Valdigem, Valpacos, Vidago, VilaNovaFozCoa, VilaPouca) : vague 2 si CEO confirme. Ces pages ont déjà des mentions prix/zone (à harmoniser contre la grille Z1–Z6).
- **Pages dynamiques** (`/canalizador-<service>-<city>` via `CityServicePage.tsx`) : 100+ combinaisons service × ville, hors-scope de cette PR.
- **Pages freguesias** (`FreguesiasPage.tsx`) : 498 pages, hors-scope.
- **Régénération sitemap.xml** : à faire en mission dédiée si CEO le demande (impact SEO indirect).
- **Démasquage `****4451 → 928484451`** : corrigé dans cette PR (15/15 villes + LECONS.md), valeur canonique `tel:+351928484451` + body `928 484 451`.

### Refs

- Symétrique ENR #216 (eletricista-norte-reparos, 15 villes-sedes top-traffic)
- PR #217 CNR (démasquage tel + canonical self)
- `_audit/zonas-distances-concelhos.json` (SOT km TomTom)
- PRICING.md §Déplacement (Z1=15 / Z2=25 / Z3=35 / Z4=45 / Z5=55 / Z6=65)
- Leçon #413 (V5 minimal = Jaccard neutre, pas de `role="answer"`)

## #CNR-POS-2026-07-29-01 — feat/seo-positioning-sav-q3-2026 (PR #229)

**Contexte** : PR DRAFT CNR — positionnement on-page de 6 pages SAV/dépannage doux (autoclismo, termoacumulador/esquentador, válvula/torneira, fuga). Mission cadrée sur ROI immédiat : pages qui ont déjà des impressions GSC (90j) mais restent pos 21-25 = page 3 Google = 0 clic. Pas de création de pages en volume.

### Leçons diagnostiques

1. **Page intent pur `autoclismo-perder-agua.html` avait le TITRE de la home en SERP.** Le `<title>` était `💧 Canalizador em Trás-os-Montes | Norte Reparos` (= titre home, probablement copié-collé depuis un template partagé). L'`<og:title>` était correct (`Autoclismo a Perder Água? Como Resolver | 928 484 451`) mais le SERP Google utilise le `<title>` du head, pas l'og:title. Conséquence : Google classait la page sur l'intent "canalizador Trás-os-Montes" au lieu de "autoclismo perder água" → mismatch sémantique → pos 21-25. **Leçon : sur les pages à fort potentiel, le `<title>` du head DOIT être différent du titre home ET aligné sur la requête principale.**

2. **H1 = slug brut = signal sémantique faible.** 5/6 pages blog avaient un H1 = nom du fichier (`Esquentador Nao Aquece Solucao`, `Fuga Agua Parede Como Encontrar`, etc.) sans accents, sans forme interrogative. Google lit l'H1 comme confirmation de l'intent title → si title="question" et H1="slug", Google hésite. Correctif : transformer l'H1 en question/intent avec accents (`Esquentador Não Aquece? Causas e Soluções Definitivas`).

3. **Meta description avec variables template non remplacées = template leak.** `autoclismo-perder-agua.html` avait `<meta name="description" content="Canalizador profissional em Trás-os-Montes. 6 zonas tarifárias Preço tabelado por zona Z1-Z6 (15€ a 65€ deslocação) + 65€/h mão de obra (plomberie). Orçamento por escrito antes de qualquer intervenção.. mediante confirmação por telefone — ligue 928 484 451. +351 928 484 451.">` — variables `Preço tabelado por zona Z1-Z6...` jamais remplacées. Google peut détecter le leak comme signal de thin content → CTR SERP dégradé.

4. **Bug bloquant `tel:++351928484451` (double +) = lien mort sur mobile.** 2 occurrences sur `fuga-agua-parede-como-encontrar.html`. Grep obligatoire après chaque patch on-page : `grep -E 'href="tel:\+\+351' client/public/blog/*.html` → doit retourner 0. La doctrine CEO verrouille `tel:+351928484451` (single +). Tout double + = régression à corriger immédiatement.

5. **Claims inventés dans le body = à neutraliser, pas à propager.** La page `autoclismo-perder-agua.html` contenait "até 200 litros de água por dia" et "custa entre 30€ e 80€" — claims non sourcés. AGENTS.md R4 = "zéro faux contenu". J'ai neutralisé en remplaçant par formulation factuelle + référence à la grille tarifaire Z1-Z6 verrouillée (`orçamento por escrito`) — pas supprimé brutalement pour éviter de casser la structure de la page. **Leçon : sur une PR de positionnement, neutraliser les claims inventés, ne pas les laisser s'amplifier.**

6. **Bloc answer-first = pattern à dupliquer sur toutes les pages SAV.** La page intent pur `autoclismo-perder-agua.html` n'avait aucun bloc answer-first. J'ai ajouté après le H1 : (a) paragraphe "Resposta rápida" 1-2 phrases, (b) bloc `<h2>O Que Fazer Agora</h2>` avec 5 étapes actionnables (`<ol><li>Feche a torneira...`), (c) tél cliquable inline. Pattern symétrique ENR #216 / CNR-AF-01 (`data-p1="answer-first"`) — à étendre aux autres pages intent pur manquantes.

### Leçons process

7. **Diagnostic PRÉ-CORRECTION obligatoire.** Le brief demandait de PROUVER le diagnostic avant tout patch. Méthode appliquée : (a) `git ls-tree -r origin/main --name-only | grep 'client/public/blog/'` pour lister les 966 fichiers blog, (b) `git show origin/main:public/sitemap-blog.xml` pour identifier les 82 URLs sitemap, (c) `grep -oE "<title>[^<]+</title>"` sur les 6 candidates, (d) `grep -oE 'href="tel:[^"]+"'` pour détecter les bugs bloquants. Sans ce diagnostic, j'aurais patché à l'aveugle et raté le vrai problème (title = titre home).

8. **Selection chirurgique = 6 fichiers, pas volume.** Brief : "5-8 pages max à potentiel, pas de volume". J'ai tenu la fourchette basse (6) en privilégiant : (a) 1 page intent pur AUTOCLISMO (`autoclismo-perder-agua`), (b) 3 articles blog AUTOCLISMO (les 3 queries les plus cherchées : "não para de correr", "corre sempre", "perder água"), (c) 1 article ESQUENTADOR (intent termoacumulador/esquentador), (d) 2 articles FUGA. Total = 6 fichiers = scope tight, ROI immédiat.

9. **`read_file` ajoute des newlines après chaque `>` pour la lisibilité — piège.** Quand le `<title>` et le `<meta name="description">` sont sur la même ligne dans le fichier, `read_file` les affiche sur 2 lignes. Si je copie-colle cette représentation dans `old_string` du `patch`, le match échoue. Solution : utiliser `python3` + `re.sub` ou `str.replace` directement sur le contenu brut pour les fichiers one-liner.

### Leçons auto-audit

10. **Audit final en tableau croisé intent × correctif.** Tableau 6 lignes × 4 colonnes (INTENT, TITLE, H1, TEL/WA) qui prouve chaque page corrigée sur chaque intent. Le brief disait "prouve" — le tableau est la preuve. Format reproductible pour toute mission SEO on-page ultérieure.

11. **`curl -sIL` sur les URLs prod AVANT la PR.** Toutes les 6 URLs répondent 200 en prod → confirme que les pages sont crawlées/indexées et que mes correctifs vont bien aller en prod (pas de 404 préexistant qui aurait bloqué le merge).

### Hors-scope documenté

- Pages pSEO `ville × intent` (`autoclismo-alijo.html` etc.) : non touchées — le brief demande ROI sur pages à impressions, pas volume. Vague 2 si CEO confirme.
- `termoacumulador-*` (autres pages intent pur manquantes côté CNR) : à créer en mission dédiée, pas dans cette PR (hors scope "améliorer l'existant").
- Body content des pages blog (claims non sourcés restant hors `autoclismo-perder-agua`) : pas touché pour rester dans le scope "positionnement on-page" (= title/h1/meta). R12/R11 doctrine déjà appliquée via PR #215.
- Schema.org/JSON-LD : pas touché (déjà conformes via PR #217 + #223, tel démasqué).

### Refs

- PR #229 CNR (DRAFT, ce patch)
- Symétrique CNR-AF-01 (#CNR-AF-01, 2026-07-19) : bloc answer-first villes
- Symétrique ENR #216 : bloc answer-first villes-sedes
- AGENTS.md R4 (zéro faux contenu)
- PR #217 CNR (démasquage tel + canonical self)
- PR #215 CNR (R11 doctrine : "garantimos atendimento 24h" remplacé)

## #CNR-MAILLAGE-01 — hubs/localités : ne pas réparer l'historique en même temps (2026-07-30)

**Contexte** : vague de maillage demandant de relier les hubs piliers aux pages localité, alors que les hubs historiques contiennent déjà des hrefs `.html` et des slugs potentiellement morts.

**Leçon** : séparer strictement l'ajout de liens sûrs de la réparation du stock historique. Dans cette mission, le scope a été limité à 9 paires primaire↔concelho ; 18 cibles nouvellement créées ont été extraites du diff puis testées en production avec `curl -sL -o /dev/null -w '%{http_code}'`. Résultat : 18/18 HTTP 200. Réécrire les liens hérités dans la même PR aurait mélangé deux causes, multiplié le risque et rendu le gate moins attribuable.

**Réutilisable** : avant une vague, comparer les hrefs existants aux routes réellement servies ; si l'existant est douteux, ne pas le prendre comme modèle. Ajouter uniquement des hrefs extensionless dont chaque cible est prouvée 200, puis ouvrir une mission séparée pour les héritages non-200.

## #CNR-MAILLAGE-02 — recompter les artefacts après les réécritures de hubs (2026-08-03, t_92de926d)

**Contexte** : un nouveau dispatch du bloc d'audit arrivait après trois verdicts NO-OP. Le set-diff direct sur `github/main` a réfuté le verdict P3.1 précédent : 32 hubs existent, 26 conservent une `zone-grid`, mais 6 hubs Vila Real sont revenus à 0 lien localité après PR #175 (`fix(cnr): C1c-3a contenu unique Vila Real lot A`), qui avait remplacé leur contenu et supprimé les grilles M6 antérieures.

**Leçon** : un audit historique et même plusieurs re-validations ne valent pas un set-diff actuel. Après toute réécriture de pages hubs, recompter les artefacts SEO structurants (`zone-grid`, BreadcrumbList, hrefs) sur le remote de déploiement. Une PR de contenu peut être fonctionnellement correcte tout en supprimant silencieusement le maillage ajouté par une PR antérieure.

**Application** : vague finale strictement bornée à Alijó, Boticas, Mesão Frio, Mondim de Basto, Montalegre et Valpaços. Chaque hub reçoit 14 liens vers les pages locales primaires du district de Vila Real, toutes suivies par Git, HTTP 200 et canonical self. Témoins : `zone-grid` 26→32/32 ; 84 hrefs ajoutés ; 12/12 blocs JSON-LD inchangés et parsables ; build vert. Zéro merge sans GO R7.

**Réutilisable** :
1. Recompter sur `<remote>/main`, jamais le working tree sale.
2. Comparer le set des fichiers attendus au set des fichiers portant l'artefact, pas seulement les totaux.
3. Lire `git log -S '<artefact>' -- <fichier>` pour identifier la régression.
4. Réparer uniquement le set manquant et tester toutes les nouvelles cibles.

## #CNR-CITAB-H2-2026-08-03 — feat/cnr-h2-money-questions (PR #254)

**Contexte** : 6 pages CNR money (areas-atuacao, precos-canalizador, guia-precos-canalizador, servicos, calculadora-de-preco, servicos-condominios) étaient à 5/6 sur la grille CITABILITE-LLM §1.1 (critère C2 = ≥3 H2 questions manquant). Déficit structurel CNR/ENR vs CU/EU (CU a jusqu'à 5 H2-Q par page, CNR 0/8). PR #254 DRAFT ouverte, branche feat/cnr-h2-money-questions poussée sur github.

### Leçons techniques

1. **Détecteur C2 strip les emojis décorateurs AVANT regex.** Donc "Quanto Custa..." (avec ou sans emoji) compte comme question, pas comme "Instrucoes". Pattern recommandé : préfixe emoji de catégorie (euro, outils, bouclier, question, horloge, gps) + mot interrogatif (Como/Quando/Onde/Quanto/Que/Quais) + point d'interrogation. Confirme le piège LECONS §309 référencé par la tâche : le détecteur ne s'arrête pas aux emojis.

2. **6/6 obtenu par ajout de 3 H2-Q sémantiques par page, pas par hack.** Les H2 sont insérés en amont des sections existantes (Tarifs / Serviços / Categorias / Processos) avec un paragraphe introductif qui relie aux 4 piliers monétaires (fuga água, entupimento, instalação, emergência 24h). Aucun prix/zone/claim inventé — uniquement références au contenu déjà présent dans la page.

3. **HTML sur 1 ligne = patch via Python, pas via patch tool.** Les 6 fichiers sont minifiés (29-148 lignes logiques mais body sur 1 ligne physique). Le patch tool matche bien avec `old_string` exact, mais pour 17+ insertions sur 6 fichiers en une passe, un script Python avec compte d'occurrences (=1 par patch) est plus sûr. Chaque `old_string` apparaît exactement 1 fois après les patches précédents.

4. **C5 = détecteur large, pas que DGEG.** L'indicateur C5 matche ≥1 fait parmi DGEG/TRIESP/14-2015/Ficha €/h/Z1-Z6 OU équipement (Ridgid/FLIR/Fluke/FlexShaft) OU géographie (Bragança/Macedo/Mirandela/concelhos/Trás-os-Montes). Mon détecteur initial manquait les patterns equipment et geography. Réplication fidèle du détecteur officiel dans `/tmp/citab_final.py`.

5. **Servicos.html = exception.** Cette page avait déjà 2 H2-Q fortuits ("O Que Dizem os Nossos Clientes" et "Áreas • Orçamento • Equipa Precisa de Canalizador Profissional?") qui matchent le regex via "Que" et "?". Mais ils n'apportent pas de valeur sémantique. J'ai quand même ajouté 3 H2-Q supplémentaires à contenu réel pour solidifier le passage à 6/6 (5/3 au final).

### Leçons métier

6. **Déficit structurel confirmé empiriquement.** 0/8 pages CNR avaient ≥3 H2-Q avant cette PR. CU piliers (desentupir-canos, entupimento, desentupimento-esgoto, desentupir-sanita) en ont 4-5 chacun. La doctrine "piliers money citable" doit explicitement demander des H2-Q — pas seulement des FAQPage JSON-LD qui passent C3 mais ne sortent pas en featured snippet GEO.

7. **Worktree obligatoire = non négociable.** Le working tree partagé `/Users/admin/work/Sites/canalizador-norte-reparos` est sale (938 modifs, 8 untracked début août). Sans `git worktree add --detach /tmp/wt-t_<id> github/main` puis `git switch -c feat/...`, on pollue main avec 938 fichiers. Le worktree a un git status propre et permet une PR atomique.

8. **PR draft, pas auto-merge (R7).** Doctrine CEO verrouillée : "pas de merge sans validation explicite de Philippe". Le worker doit pousser la branche, ouvrir la PR en draft via `gh pr create --draft`, et `kanban_block` pour STOP validation. Le merge est une décision CEO, pas un acte agent.

### Refs

- `_audit/CITABILITE-LLM.md` §1.1 (grille 6 critères) + §1.4 (CNR 5/6) + §1.8 (gap C2) + §7 (takeaway 1)
- PR #254 (DRAFT) : https://github.com/taffrand-gif/canalizador-norte-reparos/pull/254
- `/tmp/citab_final.py` : détecteur CITABILITE-LLM §1.1 fidèle, reproductible
- `/tmp/patch_h2_questions.py` : script de patch originel (1 warning sur `<h3>Serviços Gerais</h3>` — header n'existait pas dans guia-precos-canalizador.html, résolu manuellement via `patch` tool)
