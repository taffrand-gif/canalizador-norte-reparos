<!-- SOURCE D'ADRESSAGE.
     Le dispatch ne lit QUE le bloc entre les ancres
     CHANTIERS:BEGIN / CHANTIERS:END. Tout le reste de ce fichier
     est de la documentation : lisible, non adressable, sans effet
     sur l'ordonnancement — quels que soient son titre, sa date ou
     sa position.
     N'y écrire aucune trace de run : les traces vont dans
     JOURNAL.md. L'état lu et l'état écrit ne sont jamais le même
     fichier. -->

# 📄 SEO_PLAN.md — Mémoire vivante du projet

> **Fichier de coordination multi-IA / multi-agents / multi-harnais**
> Toute IA travaillant sur ce repo DOIT lire ce fichier avant toute action.
> Toute modification du projet DOIT être consignée ici.

**Propriétaire** : Philippe Braganca (Filipe)
**Site** : https://canalizador-norte-reparos.pt
**Repo** : `taffrand-gif/canalizador-norte-reparos` (working copy locale : `~/work/Sites/canalizador/`)
**Branche prod** : `main` | **Branche dev** : `seo-2026-q3` (à créer)
**NAP** : +351 928 484 451 | Norte Reparos | Trás-os-Montes
**Doctrine site** : A+ COMPLÈTE v2 (déjà déployée 28/06/2026)
**AGENTS.md** : verrouillé 14/06/2026 — lire `AGENTS.md` AVANT toute action
**Dernière MAJ** : 2026-07-02 21h45 BST — **✅ SESSION 03/07 CLOSE : 0 PR ouvert sur CNR (SEO_PLAN sync #124 mergée) + 14 PRs loop R12 cleanup sur CU/EU toutes mergées** (squash, --delete-branch). CNR/ENR = sites installation, 0 PR ouvert cette session (SEO_PLAN synchronisé 02/07 via PRs #108 #109 CNR, #95 #96 ENR). Cross-sites : ~2500 fichiers R12 INTERDIT cleanés sur CU/EU. Sites prod HTTP 200. Leçons #307-#311 codées. **Gisement restant CNR** : client/public+dist/public regénération build (~25k hits R12) + SEO duplicate content. **Prochain chat** : reprendre sur gisement CNR/ENR.

---

## 🗺️ ROADMAP MONOPOLE — TODO ce repo (CNR) — owner exécution : **Hermes**

<!-- CHANTIERS:BEGIN -->
<!--
  Registre CNR — mesuré sur github/main @ d5c043f410, 2026-08-30 11h.
  L'ordre des lignes A_FAIRE EST l'ordre de dispatch.

  ══ RÈGLES EN TÊTE DE REGISTRE ═════════════════════════════════════════
  1. CONTRÔLE POSITIF OBLIGATOIRE, sans exception et pour tout le monde.
     Tout prédicat sort un contrôle positif dans la MÊME commande que son
     compte. Un zéro seul ne prouve rien : il peut être une absence de
     violation ou un outil cassé, et rien ne les distingue. Éprouvé quatre
     fois le 30/08 (voir §PIÈGES D'OUTIL).

  2. UN PRÉDICAT SE QUALIFIE PAR SON PÉRIMÈTRE AUTANT QUE PAR SON MOTIF.
     Compter sur l'ARBRE SERVI, et DIRE lequel. Un motif qui matche sa
     propre documentation gonfle le compte et fait patcher la doctrine :
     22 des 32 occurrences de X-GAR étaient des `.md` citant la règle.

  3. UN PRÉDICAT TROP ÉTROIT N'EST PAS QU'UN SOUS-COMPTE : il ampute
     l'éventail des réponses possibles. X-EXP a été arbitré entre 10 et 12
     alors que la bonne réponse, 20, était déjà décidée — et mécaniquement
     exclue de la mesure qui servait à trancher.

  4. UN GATE ÉNONCE LES FORMATS QU'IL BALAIE — troisième axe, au même
     titre que le motif et le périmètre. Nos gates téléphone ne lisent que
     du HTML : un numéro croisé (plomberie sous la rubrique électricité) a
     survécu des mois dans un `.json` sans qu'aucun ne le voie. Un gate
     aveugle à un format ne rend pas un compte faux, il rend un compte
     JUSTE SUR UN PÉRIMÈTRE QUI NE DIT PAS CE QU'IL EXCLUT — et c'est
     indétectable de l'intérieur.
     Mesuré : le même motif téléphone borné à `*.html` sur CNR manque
     **303 fichiers de production** — 141 `.tsx`, 130 `.md`, 13 `.ts`,
     8 `.txt`, **5 `.json`**, dont `client/public/.well-known/ai-plugin.json`.
     `measure.py` rejoue tout prédicat borné SANS restriction d'arbre et
     ventile par extension ce qui matche ailleurs.

  5. UN FICHIER CORRIGÉ PEUT SURVIVRE SOUS UN NOM VOISIN — quatrième axe.
     `og-image.png.bak-57645` répond 200 sur ENR et EU et sert les faux
     avis « 4.9 (127 reviews) » que la PR d'à côté venait de retirer. Ni
     un format oublié ni un arbre oublié : un SUFFIXE. Le gate cherchait
     `og-image.png`, la copie s'appelait autrement. Sur EU, c'est **#348,
     la PR qui corrigeait l'image**, qui a laissé l'ancienne derrière elle.
     Vérifié : md5 et taille diffèrent de l'image corrigée sur les deux
     dépôts.
     ➡️ Un motif ancré sur `\.bak$` ne suffit pas — le suffixe peut être
     décoré, et de PLUSIEURS segments. Le quantificateur compte :
     `([-._][A-Za-z0-9]+)?` n'en autorise qu'un et rend **2** fichiers sur
     les 4 dépôts ; `([-._][A-Za-z0-9]+)*` en rend **8**.
     `sitemap-dynamic.xml.bak-2026-08-12` en a trois segments,
     `concelhos.json.bak-pre-zones-fix-2026-07-16` en a six.
     ➡️ Corollaire de méthode : après toute PR qui corrige un fichier,
     chercher les VOISINS de son nom, pas seulement son contenu.
     ➡️ Et — règle générale, la plus coûteuse de la journée :
     **CORRIGER UN MOTIF DANS L'OUTIL NE CORRIGE PAS LES CONCLUSIONS DÉJÀ
     TIRÉES AVEC L'ANCIEN.** Le recensement se REJOUE sur tout le parc
     après tout élargissement de motif, et les conclusions antérieures
     sont invalidées EXPLICITEMENT, jamais laissées en place. Cinq
     occurrences le 30/08 : le « 404 diagnóstico » propagé depuis un
     fichier de 5 jours, X-EXP clos avec un prédicat étroit, X-GAR annoncé
     à 0 par un `\s` inopérant, le balayage `.bak` arrêté au cas signalé,
     et le compte X-R12 gonflé par les archives.

     ➡️ Corollaire sur les gardes : **une garde qui se satisfait d'une
     correspondance PARTIELLE laisse passer le cas qu'elle couvre.**
     `patch_ignore` sortait au premier motif présent — il voyait `*.bak`,
     concluait « déjà ignoré » et laissait `*.bak-*` absent. Mesure de ce
     que ce comportement masquait : 13 motifs manquants sur CU, 16 sur CNR.
     Une garde vérifie chaque élément, jamais l'ensemble d'un bloc.

     Inventaire au 30/08 (8 fichiers tracés, dont 6 servis en 200) :
       CNR  client/public/sitemap-{dynamic,plain,priority}.xml.bak-2026-08-12
            → 200, 3528 + 4620 + 201 = **8349 URLs crawlables orphelines**
              sur le dépôt dont le goulot est l'indexation
            public/sitemap.xml.bak-2-4bis → 404, tracé
       ENR  client/public/og-image.png.bak-57645 → 200
       CU   data/concelhos.json.bak-pre-zones-fix-2026-07-16 → 200
            ⚠️ Ce n'est PAS une grille tarifaire périmée — comparaison
            champ à champ avec le fichier en vigueur : `price` diffère sur
            **0** concelho, `zone` sur **17 sur 34**. Le nom du fichier
            disait vrai.
            Ce que la copie porte réellement, c'est une INCOHÉRENCE INTERNE
            que la reclassification a levée : la zone n'y détermine plus la
            déslocation. En vigueur, une valeur par zone —
            Z1=15 · Z2=25 · Z3=35 · Z4=45 · Z5=55 · Z6=65. Dans la copie,
            **5 zones sur 6 portent plusieurs déslocations** (Z4 en a
            quatre : 35, 45, 55, 65). Exemple : `alfandega-da-fe` y est en
            Z2 avec 35 € alors que Z2 vaut 25 € — en vigueur, Z3 et 35 €.
            Danger : 17 classements contradictoires servis en JSON à une
            machine, à côté du fichier juste.
       EU   og-image.png.bak-57645 → 200
            robots.txt.backup-2026-06-27 → 404, tracé

     ⚠️ **`.vercelignore` n'est PAS en cause.** CU porte déjà `*.bak`,
     `*.pre-fix-*` et `*.backup-*`, et sert quand même son `.bak-pre-...` :
     non parce que l'exclusion serait inopérante, mais parce que le nom ne
     matche **aucun** des trois motifs — il ne finit pas par `.bak`, et
     `bak-pre-zones-fix` n'est ni `pre-fix-` ni `backup-`. Les motifs
     existants n'ont jamais rien attrapé. Ne pas conclure que
     `.vercelignore` ne marche pas : conclure que des motifs fermés à
     droite ne couvrent pas des suffixes décorés.
     Conséquence sur l'outil : `patch_ignore` ajoute les motifs MANQUANTS
     un par un ; un test global aurait vu `*.bak` présent, conclu « déjà
     ignoré » et laissé `*.bak-*` absent.

  6. ARTEFACTS D'OUTILLAGE — jamais du contenu, quel que soit leur
     emplacement : `.patch .diff .orig .rej .bak .log`, et tout ce qui vit
     sous `_archive*`, `_prototype/`, `_reports/`, `_audit/`, `_backlog/`,
     `_indexing/`. Critère : **un humain ou un modèle peut-il lire ce
     fichier comme une affirmation de l'entreprise ?** Un `.patch`, non.
     Un `.json` servi en 200 et lu par ChatGPT, oui.
     Effet mesuré : X-R12 compte 99 fichiers bruts sur 4 repos et **17 en
     production** — sur CU, 66 des 78 sont deux répertoires `_archive*`.
     C'est cette asymétrie (CU 78 contre 3/9/9 ailleurs) qui trahissait
     l'inflation : un compte hors norme sur un seul repo interroge le
     périmètre avant d'interroger le repo.

  7. UN CORRECTIF DE CONFIGURATION SE TESTE SUR LA PREVIEW, JAMAIS SUR LA
     CONFIANCE — et le merge ne prouve rien : seul le curl sur le domaine
     réel le fait, après bascule en production.
     Cas fondateur, 30/08 : la première version du blocage `.md` passait
     par les **rewrites**. Le raisonnement « la première règle qui matche
     gagne » était exact mais hors sujet — **les rewrites ne sont pas
     évalués avant les fichiers statiques**. Un `PRICING.md` présent sur le
     disque aurait continué d'être servi quelle que soit la position de la
     règle. Seuls les **redirects** passent avant :
       {"source": "/(.*)\\.md", "destination": "/", "statusCode": 410}
     Et `410` vaut mieux que `404` : il dit à Google que la ressource est
     définitivement retirée, pas introuvable. Précédent dans le même
     fichier : {"source": "/es", "statusCode": 410}.
     ➡️ Une règle de configuration peut être syntaxiquement valide,
     correctement placée, et sans aucun effet. Rien dans le fichier ne le
     dit — seule la preview le dit.

  8. ON REMPLACE UNE LOCUTION PAR UNE LOCUTION — jamais un match large par
     une chaîne fixe. **Si un motif peut capturer des mots qu'on ne compte
     pas réécrire, il est FAUX — même quand son compteur de cible est
     juste.** Le compteur mesure ce qu'on trouve, pas ce qu'on détruira.
     Cas réel mesuré sur ENR, 30/08 :
       « ✅ Orçamento correções antes de começar »
         → « ✅ estimativa sem custo »
     Ce segment ne contenait ni « grátis » ni « gratuito ». La fenêtre de
     40 caractères a avalé « correções antes de começar », et la chaîne
     fixe l'a effacé. Le motif restant vivant dans le corpus le montre :
     `Orçamento reparação gratuit`, `Orçamento do serviço à parte,
     gratuit`, `Orçamento por escrito, gratuit` — autant de segments dont
     la substitution naïve détruirait le milieu.
     ➡️ Avant tout batch : lister les FORMES CAPTURÉES
     (`git grep -o` + `sort | uniq -c`) et vérifier que chacune supporte le
     remplacement. Une forme qui ne le supporte pas sort du périmètre, elle
     ne se force pas.

  9. UNE CLASSE DE CARACTÈRES N'EST PAS UNE ÉCHAPPÉE — cinquième piège
     ERE, et le plus durable de tous parce qu'il laisse un compteur
     plausible. Dans `[^<>\n]`, `\n` n'est pas un saut de ligne : c'est le
     backslash ET la lettre `n`. La classe exclut donc `<`, `>`, `\` et
     **n** — n'importe quel mot contenant un « n » casse le motif.
     Vérifié : `orcamento personalizado gratuito` ne matche PAS
     `orcamento[^<>\n]{0,40}gratuit`.
     Effet sur X-ORC, à `5d87e82e29` :
       classe cassée              CNR  42 · ENR  14 · CU 196 · EU 34
       classe corrigée `[^<>]`    CNR 262 · ENR 200 · CU 196 · EU 34
       + variante `gr[áa]tis`     CNR 344 · ENR 205 · CU 250 · EU 49
     Un facteur 6 sur CNR, et 121 fichiers supplémentaires portés par la
     seule variante `grátis` — qu'aucune correction de classe n'aurait
     rattrapée. **Corriger un motif et élargir un vocabulaire sont deux
     corrections distinctes ; il faut les deux.**
     `measure.py` refuse désormais tout motif contenant `\n`, `\t` ou `\r`.

 10. UN CORRECTIF SE MESURE SUR CHAQUE DÉPÔT, JAMAIS SUR UN REPRÉSENTANT.
     Contre-exemple, mesuré le 30/08 sur le même correctif — remplacer la
     classe cassée `[^<>\n]` par `[^<>]` :
       CU   196 → 196   la correction ne rapporte **RIEN**
       CNR   42 → 262   la correction rapporte **220 fichiers**
     Validé sur CU seul, on concluait que le défaut était imaginaire.
     Validé sur CNR seul, on manquait les 61 fichiers que CU ne devait
     qu'à la variante `grátis`. **Aucun dépôt n'est représentatif des
     autres**, et ce n'est pas une question de taille : c'est le contenu
     qui diffère.
     Antécédent de la même famille : l'extrapolation inter-repos du 25/08
     s'était révélée fausse d'un facteur 30 entre sites d'installation et
     sites d'urgence.

 11. LE PROMPT EST LE POINT UNIQUE DE DÉFAILLANCE — et le seul artefact
     non versionné de la chaîne. Outillage, registre, prédicats, listes
     blanches : tout vit dans les dépôts et passe par une PR. Le prompt
     vit dans la configuration de la tâche planifiée — hors git,
     modifiable sans trace, sans revue.
     Le 30/08, après deux jours de corrections, il portait encore
     l'adressage par numéro de ligne, `context.md` comme file de tâches et
     le gate merge relu comme ordre d'arrêt. **Réactiver la tâche en
     l'état annulait tout le travail, et rien dans les dépôts ne l'aurait
     montré.**
     Le cas concret, dans son détail, parce que c'est lui qui rend la
     règle utile : le 30/08 les FICHIERS étaient corrigés (split plan /
     journal), l'OUTIL était corrigé (dispatch par ID, six invariants,
     19 contrôles verts), le REGISTRE était corrigé (chantiers à ID,
     prédicats reproductibles) — et l'instruction qui pilote les trois
     portait encore l'adressage par numéro de ligne. Trois périmètres
     audités, conformes, et un quatrième que personne ne regardait.
     ➡️ **L'ARTEFACT QUI PILOTE N'EST PRESQUE JAMAIS DANS LE PÉRIMÈTRE
     QU'ON VIENT D'AUDITER.** C'est ce qui le rend invisible : on vérifie
     ce qu'on a corrigé, et l'instruction n'a jamais fait partie du lot.
     ➡️ Généralisation : **on corrige les données et on oublie
     l'instruction qui les lit.** Après tout audit, se demander ce qui
     LIT ce qu'on vient de corriger, et si cet artefact est versionné.
     ➡️ Copie versionnée dans `.loop/PROMPT.md`. Premier acte de chaque
     run : `python3 .loop/check_prompt.py --recu <prompt-reçu>`.
     Divergence = **refus de démarrer**, pas un avertissement.

 12. UN CONTRÔLE AMBIGU EST PIRE QU'UN CONTRÔLE ABSENT — il produit de
     fausses certitudes dans les deux sens.
     Un garde-fou qui refuse tout ressemble à un garde-fou cassé, et
     l'erreur peut être du côté de celui qui teste. **Arrivé DEUX FOIS en
     une heure, à celui-là même qui avait formulé la règle 1** — ce n'est
     pas un exemple théorique :
       · 1er essai : `check_prompt.py` rend `exit=2` sur les trois cas,
         conforme compris. Cause : fichier passé en positionnel.
       · 2e essai, après correction de l'outil : `exit=4` sur les quatre
         cas. Cause : `for c in "--recu f.md|libellé"` — **zsh ne fait pas
         de word-splitting**, l'option et sa valeur arrivent comme un seul
         argument.
     Les deux fois, la garde avait raison et allait être déclarée en
     panne. **Le doute s'est déplacé sur l'outil de contrôle, alors qu'il
     aurait aussi bien pu se déplacer sur ce qu'il contrôle — le prompt.**
     ➡️ Avant de conclure qu'un contrôle est cassé : lire son `--help` et
     vérifier son invocation. Un refus uniforme est un symptôme ambigu —
     il signale aussi bien un outil défaillant qu'un outil bien défendu.
     ➡️ Symétrique exact de la règle 1 : un zéro uniforme et un refus
     uniforme demandent tous deux un contrôle positif pour être
     interprétés.
     ➡️ **Charge à l'OUTIL, pas seulement à celui qui teste** : un outil de
     contrôle doit rendre son propre mauvais usage évident. Codes de
     sortie distincts (`0` conforme · `1` divergence · `3` fichier absent ·
     `4` appel malformé) et message qui dit « ce n'est PAS un refus de
     conformité, rien n'a été comparé ».
     ➡️ **La leçon écrite ne protège pas — seul le code qui refuse le
     fait.** Le piège zsh est consigné dans les leçons du dépôt depuis des
     semaines ; il a frappé trois fois le 30-31/08, sur deux personnes.
     C'est pourquoi il est désormais détecté par `.loop/argguard.py`,
     appelé par les trois outils : toute valeur d'argument contenant
     elle-même une option est refusée avant tout verdict.

 13. UNE FENÊTRE DE N CARACTÈRES DOIT EXCLURE LA PONCTUATION FORTE.
     Sans `.!?` dans la classe, la fenêtre traverse une frontière de phrase
     et relie deux propositions sans rapport — elle FABRIQUE des
     violations. Cas ENR, 31/08 : `[Oo]r[çc]amento[^<>]{0,40}gratuit`
     reliait « orçamento final no local. » à « Fornecemos diagnóstico
     gratuito » de la phrase SUIVANTE, laquelle relève justement de
     l'exclusion doctrinale.
     Mesuré à `5d87e82e29` / `774f18d45f` :
       CNR 346 → **160**   (186 faux positifs)
       ENR 207 → **20**    (187 faux positifs)
       CU  251 → 251 · EU 51 → 51   (aucun — règle 10 encore)
     Sur ENR, **90 % du compte était faux** et le prédicat semblait sain.
     ➡️ **Symétrique exact de la règle 8** : une fenêtre trop permissive
     INVENTE des violations quand on compte, et DÉTRUIT le texte voisin
     quand on substitue. Même cause, deux dégâts opposés — c'est pourquoi
     un prédicat de comptage et un prédicat de substitution ont la même
     exigence de bornage.
     ➡️ `measure.py` refuse toute fenêtre `[^…]{0,N}` avec N ≥ 8 dont la
     classe n'exclut pas `.`, `!`, `?`. Échappatoire explicite :
     `--fenetre-sans-ponctuation` — assumée, jamais par défaut.

  ── Le recensement et la liste blanche I6 sont DEUX périmètres distincts,
     à ne jamais confondre :
       served.json      « cette PR change-t-elle ce qu'un visiteur reçoit ? »
       hors production  « ce fichier contient-il une affirmation fausse ? »
     `server/reviewAutomation.ts` n'est pas servi — une PR qui ne
     toucherait que lui est refusée par I6, à raison — mais la garantie
     fausse qu'il contient doit être corrigée. Elle compte au recensement.
  ═══════════════════════════════════════════════════════════════════════

  Chaque chantier porte la commande qui produit son compte. Un compte sans
  prédicat n'est pas exécutable : un batch lancé sur un prédicat plus large
  que prévu corrompt du contenu sain (précédent repar->arranj, 523 mots).

  Convention de dédup (I4) : toute PR traitant un chantier DOIT porter
  [ID:<X>] dans son titre ou son corps. ⚠️ Les PR #349, #350 et #352 du
  30/08 ne le font pas : I4 ne peut pas les voir. Tant que la convention
  n'est pas tenue à l'ouverture, la dédup repose sur la seule colonne PR,
  renseignée à la main.

  ⚠️ La colonne PR signifie « chantier CLOS par cette PR », pas « touché
  par ». Y inscrire une PR partielle rendrait le chantier non
  dispatchable alors qu'il reste du travail.
-->
| ID | Chantier | Prio | Statut | PR | Gate | Prédicat (reproductible) |
|---|---|---|---|---|---|---|
| X-DUP | **436 pages village quasi dupliquées** — différenciation PUIS canonisation | HAUTE | EN_COURS | #372 (MESURE) | 🛑 **INTERDIT de toucher aux canonicals tant que Jaccard > 0.15.** Différencier d'abord, canoniser ensuite. Canoniser des pages encore identiques fige la duplication au lieu de la lever. **PR #372 (DRAFT) mesure livrée 31/08 : 1808 fichiers · 2000 paires · p50=0.236 p99=0.985 · frac ≥ 0.15 = 0.74 (FAIL).** Le chantier reste ouvert : différentiation requise avant canonisation, attente GO Philippe. | Mesurer la similarité Jaccard par paire sur le corpus village avant toute écriture. Condition de passage à la canonisation : **Jaccard ≤ 0.15**. |
| X-R12 | « mesma pessoa » / « mesmo técnico » servis en production | HAUTE | A_FAIRE | — | — | `mesma pessoa\|mesmo t[ée]cnico` · **production CNR 2, dont ZÉRO servi** — `public/.well-known/ai-plugin.json` vit dans la racine `public/`, **jamais servie** (prod rend `client/public/`, vérifié 02/09 sur 2 témoins) ; `tools/verify-busca-fuga-pilot.py` est un faux positif (regex de DÉTECTION `pronoun/solo`). **Travail servi : 0 fichier.** `client/public/` de CNR est déjà conforme. `AGENTS.md` CNR ne porte aucune prescription. Contrôle positif `mesm` = 836. Voir X-PUB0 : le recensement compte la racine comme production, ce qui gonfle ce chantier. |
| X-MAIL | Email `privaterelay.appleid.com` publié comme contact | HAUTE | FAIT | #380 | — | `privaterelay\.appleid\.com` · **production CNR 3, dont 2 servis** — servis : `client/public/.well-known/ai-plugin.json` · `client/public/.well-known/security.txt`. NON servi : `public/.well-known/ai-plugin.json` (racine, voir X-PUB0). **Travail servi : 2 fichiers.** Contrôle positif `appleid` = 4. | **CLOS 02/09** : #380 CNR · #437 ENR · #317 CU · #366 EU tous MERGED ; résiduel `privaterelay` dans `client/public/` de main = 0. |
| X-ORC | « orçamento gratuito / grátis » | HAUTE | EN_COURS | #375 (OPEN, non-draft) | vague 1/4 CNR. **#363 CLOSED, remplacée par #375.** v1 `a9555d3c4f` (274 f.) ratait `content/blog/` ; v2 Hermes (66 f.) l'a couvert mais a **introduit une cicatrice syntaxique** dans `public/blog/blog-custos-reparacao-canalizacao.html` (« o estimativa por escrito » — article orphelin + verbe mangé) et a validé « CIBLE = 0 » sur un périmètre excluant les violations restantes. v3 (23 f.) ferme le résiduel production : `shared/seoKeywords.ts` (10 meta descriptions servies), `shared/videoData.ts` (keywords + transcript JSON-LD), `llms.txt`, la cicatrice v2, et **19 pages PAA** (h1 + og:title + og:description + FAQ JSON-LD) — arbitrage : le slug/canonical/og:url `*-orcamento-gratis` est CONSERVÉ (URL indexée, changement irréversible), seul le contenu servi est corrigé. Gate v3 : prédicat officiel **hors slug = 0 en production** ; canonical 19 / sitemap 17 / redirects vercel.json 4 inchangés ; `tsc --noEmit` 212 erreurs avant = 212 après, 0 sur les fichiers touchés ; NAP 73 lignes retirées = 73 ajoutées. ⚠️ **Résiduel non traité** : cicatrice `">>` préexistante (1 occ., `canalizador-mêda-*.html` l. 28) et 53 occ. HORS_PRODUCTION (JOURNAL.md 20, SEO_PLAN.md 9, context.md 8, `_archive/` 5, `_prototype/` 9, `_reports/` 2, `.loop/measure.py` 1) — non servis HTTP, purge non requise. | `[Oo]r[çc]amento[^<>.!?]{0,40}(gratuit\|gr[áa]tis)` · fenêtre 40 c, sans traverser de balise. **Mesuré @ `5d87e82e29` : CNR 344 · ENR 205 · CU 250 · EU 49 = 848 fichiers.** ⛔ EXCLUSION : `(diagn[óo]stico\|an[áa]lise\|avalia[çc][ãa]o\|inspe[çc][ãa]o)[^<>.!?]{0,30}gratuit` — **CNR 265 · ENR 289 · CU 3 · EU 4**, non violantes. |
| X-GEN | JSX non compilé servi en production — 22 CNR · 3 CU · 3 EU | HAUTE | A_VERIFIER | — | **livrable du 1er run = identification du GÉNÉRATEUR, pas un patch** | `=\{[a-zA-Z_$]\|=\{\{` · compléments `\]\.map\(\|\)\.map\(\(` et `dangerouslySetInnerHTML` · périmètre `client/public/*.html` (CNR, ENR) et `*.html` racine (CU, EU) · contrôle+ `<html` → 4897 / 4186 / 2487 / 2397. ⛔ **NE PAS utiliser `=\{` seul** : 4171 f. sur ENR — il matche le JS du bandeau RGPD. |
| X-JSX | Résidus JSX servis | HAUTE | FAIT | #348 | — | clos le 30/08 |
| X-CONF | Placeholder « A confirmar » | HAUTE | FAIT | #349 | — | clos le 30/08 |
| X-GAR | Garantie → 12 meses | HAUTE | FAIT | #356 | — | clos le 30/08, **0 en production** |
| X-EXP | Ancienneté → 20 anos | HAUTE | FAIT | #357 | — | clos sur CNR le 30/08. **ENR : EN_COURS, PR #411.** |
| X-MORT | 27 fichiers morts (~4000 lignes) | BASSE | HORS_CODE | — | — | confort, pas une violation |
| C1 | Backlinks — actions externes | BASSE | HORS_CODE | — | — | hors code |
| C2 | Backlinks — annuaires artisans | BASSE | HORS_CODE | — | — | hors code |
| C3 | Backlinks — emails mairies | BASSE | HORS_CODE | — | — | hors code |
| C4 | Backlinks — échange de liens | BASSE | HORS_CODE | — | — | hors code |
<!--
  CLOS le 2026-08-30 (ne pas rouvrir sans mesure) :
    Você            161 -> 0 fichiers
    Parranj         corruption -> 0
    Atendimento 24h la disponibilité 24h/7 est VRAIE — jamais une violation
    rang 1 « 0 h1 » symptôme réparé, les 10 pages ont leur h1 en prod

  §PIÈGES D'OUTIL — quatre faux négatifs SILENCIEUX, tous le 30/08, tous
  rendant 0 sans la moindre erreur. C'est la raison d'être de la règle 1.

    1. `\s` n'est pas interprété par `git grep -E` sur ce poste.
       `[Gg]arantia\s+(de\s+)?2\s+[Aa]nos` -> 0
       `[Gg]arantia (de )?2 [Aa]nos`       -> 32
       Écrire les espaces littéralement.

    2. `(?:...)` n'existe pas en ERE POSIX. `git grep -E` l'avale sans
       broncher et rend 0. Utiliser un groupe capturant `(...)`.
       Repéré parce que le total disait 91 et la ventilation 0 — une
       CONTRADICTION INTERNE, pas une vérification. Sans les deux
       chiffres dans la même commande, le zéro passait.

    3. Périmètre implicite : le même motif rend 32 sur le dépôt entier et
       8 sur l'arbre servi. Voir règle 2.

    4. `\|` échappé dans une cellule de prédicat cassait le découpage des
       colonnes du registre : X-JSX et X-ORC disparaissaient sans un mot.
       Corrigé — une ligne mal formée fait désormais ÉCHOUER le dispatch
       au lieu d'être ignorée.

    5. `\n` redevient un vrai saut de ligne en transitant par du JSON et
       casse la classe `[^<>\n]`. Erreur franche ici, pas un zéro :
       doubler l'échappement dans un fichier de lot.

    6. zsh ne fait PAS de word-splitting : `$REG` contenant
       `--registry /chemin` est passé comme UN seul argument, et argparse
       le rejette. Brancher explicitement plutôt qu'interpoler une
       variable d'options. Déjà dans les leçons du repo — coûte un run
       à chaque oubli.

  §BRUIT FABRIQUÉ PAR NOS PROPRES PATCHES
  Un correctif de masse crée du bruit pour les prédicats suivants. Le
  bandeau RGPD injecté fin août rend `=\{` inutilisable comme motif : il
  matche `setItem(KEY,v);var p={};for(...` sur la quasi-totalité des
  fichiers (4171 sur ENR). Avant d'adopter un motif, vérifier qu'aucun
  patch récent ne l'a rendu ubiquitaire.

  Outil : `.loop/measure.py` applique la règle 1 mécaniquement — il refuse
  de rendre un compte dont le contrôle positif est à zéro.
-->
| X-PUB0 | Racine `public/` non servie mais déclarée servie | HAUTE | A_FAIRE | — | — | `git ls-tree -r --name-only <remote>/main -- public/` · **37 fichiers CNR** (ENR 40), **7 chemins en commun** avec `client/public/` (ENR 12), aucun servi. Prod vérifiée 02/09, 2 témoins, empreintes exactes : `/robots.txt` = `client/public/` (828 o) ≠ racine (764 o) ; `/.well-known/ai-plugin.json` = `client/public/` (1135 o) ≠ racine (1641 o). `served.json` les déclarait servis — corrigé, mais les fichiers restent : ils font gonfler tout recensement et un agent qui les lit croit patcher de la prod. **Traverse X-R12 et X-MAIL** : à traiter comme famille propre, pas dans un chantier hôte. Décision à prendre : supprimer, ou marquer hors-production dans `measure.py`. |
<!-- CHANTIERS:END -->

> Roadmap phasée maître : `~/work/Sites/MONOPOLE_SEO_2026Q3.md` §ROADMAP PHASÉE. Ici = todos concrets CNR. Claude+Filipe conçoivent, Hermes coche.

- [x] **M0** — ~~Retirer faux avis `GoogleReviews.tsx` + schema `Review`/`aggregateRating` associé → placeholder honnête (R11 ACTIF prod).~~ ✅ **FAIT 2026-07-01** (PR #106) + **re-vérifié 2026-08-17** (t_616986a8) : placeholder en prod, 0 occurrence `aggregateRating`, fichiers `Testimonials.tsx`/`EmergencyTestimonials.tsx` absents. Bloqué jusqu'à collecte d'avis RÉELS (M4).
- [ ] **M0** — Purger 4 fichiers résiduels services FAUX (bas risque).
- [x] **M1** — Maillage descendant des hubs `concelhos/` + `distritos/` : 32/32 hubs avec `zone-grid` vers des pages locales/concelhos primaires (vague finale : 6 hubs Vila Real × 14 liens, PR draft t_92de926d, 2026-08-03). Le volet remontant breadcrumb/latéral des ~3441 pages localité reste un chantier séparé en vagues R15. Localités RÉELLES only (R11/R5).
- [ ] **M2** — Fix `shared/seoKeywords.ts` : retirer `urgente`/`24h`/`resposta prioritária` (stop cannibalisation domaine urgente) → pilote `canalizador×Bragança`, livrable `keyword-map.csv`.
- [ ] **M3** — (schema LocalBusiness/areaServed/FAQPage déjà présents ✅) → **créer** pages `preço-canalizador-<ville>-2026` datées citables (4 districts, tableau Z1-Z6 + 65€/h + date visible, schema Offer) + **retirer** `streetAddress` de `contactos.html` (SAB). Détail : master §M3 DESIGN.
- [ ] **M4** — Actif « Observatório de preços » (agrège pages prix M3, citable/outreach) ; Review schema **BLOQUÉ** tant que 0 avis réel → lancer boucle collecte (WhatsApp/n8n après job). Détail : master §M4 DESIGN.

---

## 🆕 P0 — Prix/zones OSRM (CNR) — dry-run 04/07/2026

> **Mission en cours** (doctrine doc-only, pattern #327) : consigner ici le périmètre P0 avant toute modification code.
> **Source de vérité** : `~/work/Sites/norte-os-marketing/prototypes/zonas-data.json` (914) + `~/Documents/ObsidianVault/NORTE-OS/Methodologie/GRILLE-ZONES-OFFICIELLE-2026-06-24.md` (fallback concelho).
> **Barème** : Z1=15€ · Z2=25€ · Z3=35€ · Z4=45€ · Z5=55€ · Z6=65€ (déplacement) · MO 65€/h canal · majoration +50% MO+dép.
> **R145** : limité au bloc `<div class="zone-info">` (R145 hors-bloc zone = mission séparée, `mediante confirmação` pending Filipe).
> **Doctrine** : normalisation idempotente depuis source, **jamais inventer une zone pour NO_RESOL**.
> **Artefacts** : `~/work/Sites/_audit/phase0-dryrun/` + `~/work/Sites/_audit/phase0.5-rescan/`.

### Counts CNR (lecture seule dry-run)

| Couche | Pages | OK | NO-OP | AJUSTER | INCOHERENT | NO_RESOL |
|---|---:|---:|---:|---:|---:|---:|
| `client/public/canalizador-*.html` (villages/aldeias) | 1808 | 482 | 0 | 1203 | 10 | 113 |
| `public/canalizador-*.html` (villes-sèdes principales) | 116 | 1 | 15 | 46 | 18 | 36 |
| **TOTAL CNR** | **1924** | **483** | **15** | **1249** | **28** | **149** |

### Villes-sèdes (focus critique — fort trafic / haute valeur)

| Ville | Zone OSRM | Badge actuel | Statut |
|---|---|---|---|
| Macedo de Cavaleiros | Z1 | Z1 | ✓ NO-OP |
| Mirandela | Z2 | Z2 | ✓ NO-OP |
| **Bragança** | Z2 | **Z4** | ❌ AJUSTER |
| **Chaves** | Z4 | **Z5** | ❌ AJUSTER (∆Z=−1) |
| **Vila Real** | Z4 | **Z5** | ❌ AJUSTER |
| **Lamego** | Z6 | **Z5** | ❌ AJUSTER |

### Plan d'attaque CNR

- [ ] PR #1 `canalizador-.html` (rewrite 301 dans vercel.json, rm ×2 fichiers, retirer 5 `<a>` vides hubs concelhos)
- [ ] Branche `fix/prix-zones-osrm` (CNR) + prototype `public/canalizador-chaves.html` → STOP diff Filipe → GO batch R15
- [ ] Vague 0 villes-sèdes (75 pages) : patch idempotent depuis source
- [ ] Vague 1 : INCOHERENT CU+EU (360) si pertinent
- [ ] Vague 2-N : AJUSTER restant (1174 + amortissement INCOHERENT = ~1200) en vagues ≤95 fichiers
- [ ] Mission M-NO_RESOL séparée (149 localités) — décision Filipe par catégorie (hors-zone / typo / cassé)

### Liens artefacts

- Audit complet : `~/work/Sites/_audit/phase0-dryrun/CNR_audit.{csv,json}`
- Audit villes-sèdes : `~/work/Sites/_audit/phase0.5-rescan/CNR_public_audit.{csv,json}`
- NO_RESOL consolidés : `~/work/Sites/_audit/phase0-no-resol/CNR.txt` (149 lignes)

---

## 🏆 STRATÉGIE MONOPOLE SERP/GEO → voir `~/work/Sites/MONOPOLE_SEO_2026Q3.md`

> Plan maître cross-sites (établi 30/06/2026). Objectif: occuper **plusieurs surfaces d'un seul résultat** par requête (Local Pack + 2 domaines organic + AI Overview + PAA + image pack + étoiles).
> Priorités: **P0** purge services FAUX eletricista-norte + différenciation des 2 domaines/métier → **P1** double organic (GBP exclu) → **P2** GEO (pages prix datées + entity + llms.txt) → **P3** qualité pSEO hub-and-spoke → **P4** SERP features.
> ⚠️ Risques: doorway/PBN (intent urgence≠installation obligatoire), scaled-content (signal local unique/page), trust (services FAUX cassent E-E-A-T). Véracité R11/R12 prime.

---

## 🎯 VISION — Ce qu'on veut devenir

**Objectif business** : être la **référence plomberie** sur Trás-os-Montes (Bragança, Vila Real, Mirandela, Chaves) via SEO + GEO pur.

**Marché cible** : 4 districts, ~120 000 habitants, ~36 000 interventions/an potentielles.

**Cible SEO** :
- Top 5 Google sur "canalizador Bragança" / "canalizador Vila Real" / "canalizador Mirandela" / "canalizador Chaves" d'ici 12 mois
- Cité par Google AI Overview sur "prix canalisateur Bragança 2026"
- Cité par ChatGPT/Perplexity sur 3+ requêtes d'ici 12 mois

**Cible business** : 50-100 appels/mois d'ici 6 mois (vs ~5 actuellement).

**Périmètre site** : Installation, projets, devis. PAS d'urgence (c'est `canalizador-urgente.pt` qui gère ça).

**Promesse homepage** : "Installation, remodelação, orçamento em 48h, garantia 1 ano" (ton posé, méthode).

---


## 📊 ÉTAT ACTUEL (au 29/06/2026)

### Forces SEO/GEO (à PROTÉGER, ne pas casser)
- ✅ **3535 fichiers HTML** dans `dist/public/` (énorme pour la longue traîne)
- ✅ **Schema.org Plumber** complet sur homepage (NAP, areaServed 12 villes, priceRange, logo, image, openingHours)
- ✅ **Pages /zonas/ déjà en place** : `canalizador-braganca.html`, etc. avec prix concrets ("35€ deslocação + 80-140€/h, a partir de 115€")
- ✅ **Robots.txt** : 15+ crawlers IA explicitement autorisés (R10 verrouillée)
- ✅ **9 sitemaps** dont `sitemap-pages.xml`, `sitemap-blog.xml`, `sitemap-images.xml`
- ✅ **Vercel.json** : 3500+ rewrites/redirects avec gestion des accents (alfândega-da-fé → alfandega-da-fe)
- ✅ **Doctrine A+ COMPLÈTE v2** déployée (vague 2 patch R12 28/06 13h06)
- ✅ **NAP cohérent** : 928 484 451 (jamais inverser avec 932)

### Faiblesses SEO/GEO (à corriger)
- 🟠 Homepage n'a pas de **H1 sémantique unique** (injecté en CSS inline, mauvais pour SEO)
- 🟠 Pas de **différenciation d'intention** vs `canalizador-urgente.pt` (mots-clés en commun)
- 🟠 Pages /zonas/ n'ont pas toutes un **schema.org FAQPage** (GEO non optimal)

### Interdits (RAPPELS des 9 règles AGENTS.md + extensions)
- ❌ Jamais de `streetAddress` précise (géo-neutre, R5)
- ❌ Jamais de chantiers inventés (R11)
- ❌ Jamais de délais chiffrés inventés ("resposta em X minutos")
- ❌ Jamais d'avis/témoignages inventés
- ❌ Jamais `--force` sur `main` (R6)
- ❌ Jamais d'auto-merge (R7)
- ❌ Jamais de Disallow sur crawler IA sans validation (R10)

---

## 🗺️ ROADMAP — 3 phases

### 🟥 PHASE A — Finaliser `canalizador-urgente.pt` (S1-S2)
**Pourquoi** : ce site viole sa propre doctrine (Transparence Radicale). On perd des appels urgence → on les perd pour ce site aussi (cross-pollution).

**Mais cette phase concerne le REPO `canalizador-urgente`, pas celui-ci.**
Voir : `~/work/Sites/canalizador-urgente/SEO_PLAN.md`

### 🟧 PHASE B — Différencier les 4 homepages (S3)
**Pour ce repo** :
- **B1** : Réécrire homepage de `canalizador-norte-reparos` pour clarifier "installation/devis/méthode"
- **B2** : Ajouter `schema.org FAQPage` sur les pages /zonas/ existantes (Bragança, Vila Real, etc.)
- **B3** : Convertir le H1 inline CSS en balisage HTML sémantique

### 🟨 PHASE C — Backlinks externes (continu S5+)
- C1. Inscription pages jaunes Portugal (page.pt) — 5 min
- C2. Inscription annuaires artisans — 10 min × 3
- C3. Emails mairies Trás-os-Montes — 1/semaine
- C4. Échange liens avec artisans locaux (carreleurs, peintres)

---

## 📋 TODO DÉTAILLÉE pour ce repo (`canalizador-norte-reparos`)

### 🟧 B1 — Homepage "installation/devis/méthode" (S3)

|**Statut** : 🟡 **À RE-SCOPER** (cible atteinte pour user / React, mais static H1 SSR = autre texte)
|**Priorité** : HAUTE
|**Effort** : ~30 min (re-scope + micro-patch conditionnel `client/index.html:223`)
|**Risque** : MOYEN (toucher `client/index.html` peut régresser le LCP de PR #253)

|**Branche** : `seo-2026-q3` (à créer depuis `main`)

|**Fichiers à modifier (max 3)** :
|1. `dist/public/index.html` — H1 + meta description + premier paragraphe
|2. Schema.org JSON-LD sur la homepage (déjà présent, à compléter)
|3. (optionnel) Sitemap si nouvelle page

|**Règles à respecter** :
|- R3 : STOP validation Philippe avant commit
|- R4 : Zéro invention (pas de prix inventés, pas de témoignages)
|- R5 : Géo-neutre (pas d'adresse précise)
|- R8 : Témoin R8 avant/après (grep `canalizador-norte-reparos` dans le repo)
|- R9 : Grille validation 2 colonnes (technique + conformité)

|**Critère GO/STOP** :
|- ✅ GO si : H1 unique "Instalação e remodelação em Trás-os-Montes" (différent de -urgente), meta description réécrite, schema.org validé
|- 🛑 STOP si : risque de casser un rewrite Vercel ou de modifier 3516 fichiers d'un coup

|**H1 cible (à valider avec Philippe)** :
```html
<h1>Canalizador para instalação e remodelação em Trás-os-Montes</h1>
```

|**Méta description cible** :
```
Canalizador para instalação, remodelação e projetos em Trás-os-Montes. Orçamento em 48h, garantia 1 ano. Atendemos Bragança, Vila Real, Mirandela, Chaves.
```

#### 🔁 Révision 2026-08-31 (Hermes t_76aedefc — ligne 541 revisitée)

**Constat mesuré sur `main` (HEAD `992198dfbe`)** :
1. **PR #90 (30/06/2026, B1)** : `shared/siteConfig.ts` + `client/src/components/Hero.tsx` modifiés — `heroTitle` = "Canalizador para instalação e remodelação — Trás-os-Montes" ✅
2. **PR #253 (03/08/2026, LCP fix)** : `client/index.html:223` reçoit un `<h1 id="lcp-fast-h1">Água a Pingar? Cano Rebentado?</h1>` static SSR (LCP < 2.5s) ❌
3. **Route live `/` → `OptimizedHome` → `InnovativeHero`** (import depuis `@/../../shared/serviceConfig`), **PAS** `Hero.tsx`. Donc `Hero.tsx` (cible B1) est sur **dead-code path**.
4. **B1 cible en place pour l'utilisateur** : `shared/serviceConfig.ts:56` `heroTitle: 'Canalizador para instalação e remodelação — Trás-os-Montes'` ✅

**Pourquoi 🟡 et pas ✅** :
- Googlebot en mode "first byte only" (sans JS) voit le static H1 `Água a Pingar? Cano Rebentado?` — **PAS la cible B1**.
- Googlebot en mode "rendered" voit `Canalizador para instalação e remodelação — Trás-os-Montes` via `InnovativeHero` + `shared/serviceConfig`.
- **2 H1 différents servis selon le client crawler** = ambiguïté SEO que la doctrine R12 (1 H1 unique, installation ≠ urgente) cherche justement à éliminer.

**Pourquoi pas un patch unilatéral `client/index.html:223`** :
- Le static H1 est **painté sur le premier byte** (LCP 4.2s → < 2.5s, gain mesuré sur mobile). Régresser cette perf pour unifier la H1 = perdre des appels urgence sur le canal conversion #1.
- R3 : décision métier (SEO vs LCP) → GO Philippe obligatoire.
- R7 : ne pas toucher `client/index.html` sans validation explicite du trade-off LCP ↔ SEO.

**Re-scope proposé** (à valider Philippe avant exécution) :
- **Option α** : patcher `client/index.html:223` pour aligner le static H1 sur la cible (`Canalizador para instalação e remodelação — Trás-os-Montes`). Risque : régression LCP si Lighthouse mobile n'aime pas le texte plus long. **Gain SEO maximal**, perte perf à mesurer.
- **Option β** : conserver le static H1 marketing `Água a Pingar? Cano Rebentado?` + laisser Googlebot rendu JS gagner (déjà cible atteinte via `InnovativeHero`). Risque : 0. **Gain SEO partiel** (Googlebot first-byte ≠ cible), gain perf conservé.
- **Option γ** : pré-rendre la cible B1 dans le static H1 + conserver le hero marketing via JS swap (cohabitation). Plus complexe, à chiffrer.

**Périmètre Kanban (t_76aedefc) : 0 PR ouvert, 0 merge.** Ce chantier attend un GO explicite de Philippe sur α/β/γ avant toute exécution. Tant que le choix n'est pas fait, B1 reste **🟡 À RE-SCOPER** et le précédent statut `✅ FAIT` (ligne 520) est **obsolète** (mensonger au sens "ce que voit Google n'est pas la cible").

**LEÇON #PROVISOIRE (à numéroter après validation)** :
> Quand une page a un static H1 SSR (LCP optimization) ET un React hero hydraté, l'audit SEO doit mesurer l'écart entre les deux textes. Un "✅ FAIT" dans SEO_PLAN sur la base du hero hydraté seul est trompeur : Googlebot first-byte rendra le SSR. Toujours cocher **les deux** avant de marquer un chantier SEO homepage terminé.

---

### 🟧 B2 — Schema.org FAQPage sur pages /zonas/ existantes (S4)

**Statut** : ✅ FAIT (PR #83+#84, 29/06/2026, vérifié 2026-09-05 Hermes t_95e6de16) — FAQPage sur **8/8 villes** (Bragança, Vila Real, Mirandela, Chaves, Miranda do Douro, Mogadouro, Vinhais, Lamego) avec 5 questions/réponses honnêtes par ville. Critère GO évalué ✅ : 3+ FAQ cohérentes avec contenu présent, prix conformes à la grille Z1-Z6 publiée (R11/R12).
**Priorité** : MOYENNE
**Effort** : ~30 min/ville × 8 villes = 4h
**Risque** : BAS (ajout, pas modification)

**Branche** : `seo-2026-q3`

**Fichiers à modifier (max 8)** :
- `dist/public/canalizador-braganca.html`
- `dist/public/canalizador-vila-real.html`
- `dist/public/canalizador-mirandela.html`
- `dist/public/canalizador-chaves.html`
- `dist/public/canalizador-miranda-do-douro.html`
- `dist/public/canalizador-mogadouro.html`
- `dist/public/canalizador-vinhais.html`
- `dist/public/canalizador-lamego.html`

**Ajout à faire** : bloc `<script type="application/ld+json">` avec `@type: FAQPage` contenant 3-5 questions/réponses honnêtes par ville.

**Règles** :
- Pas d'invention : pas de prix inventés (utiliser ceux déjà affichés sur la page)
- Pas de témoignages inventés
- Questions issues de vraies demandes clients (à confirmer avec Philippe)

**Critère GO/STOP** :
- ✅ GO si : 3+ FAQ cohérentes avec le contenu déjà présent
- 🛑 STOP si : aucune FAQ honnête possible (dans ce cas, NE PAS ajouter de FAQ inventée — le vide honnête est meilleur que le faux, R11)

---

### 🟧 B3 — H1 sémantique (correction HTML) (S4)

**Statut** : ✅ Fait (2026-07-29, cowork-loop — homepage `Hero.tsx`). Volet "8 fichiers /zonas/" sans objet : aucun répertoire `zonas/` dans ce repo (vérifié) et 0 `<h1 ... style=` restant dans `client/src/` après patch.
**Priorité** : BASSE (cosmétique SEO)
**Effort** : ~1h
**Risque** : BAS (refactoring CSS)

**Branche** : `seo-2026-q3`

**Action** : convertir `<h1 style="font-size:...">` en `<h1 class="hero-title">` + classe CSS séparée.

**À faire sur** : 1 fichier (homepage) pour valider le pattern, puis 8 fichiers /zonas/ si OK.

**Critère GO/STOP** :
- ✅ GO si : rendu visuel identique, code HTML plus propre
- 🛑 STOP si : changement visuel détecté

---

### 🟨 C1-C4 — Backlinks (continu, S5+)

**Statut** : ⏳ À FAIRE
**Priorité** : HAUTE (c'est ce qui fera la différence en SEO)
**Effort** : 30 min/semaine
**Risque** : NUL (action externe)

**À documenter dans ce fichier** au fur et à mesure (voir section HISTORIQUE).

---

## 🛡️ RÈGLES DU PROJET (rappel)

### Règles AGENTS.md (verrouillées 14/06/2026)
- **R1** : OpenClaw gère l'infra (Vercel/GitHub) via API sous double confirmation
- **R2** : Tokens = scope approprié, écriture activée
- **R3** : STOP validation Philippe avant chaque étape modifiante
- **R4** : Zéro faux contenu (pas d'avis/prix/délais/marques inventés)
- **R5** : Géo-neutre (pas d'adresse précise)
- **R6** : Pas de `--force` sur main
- **R7** : Pas d'auto-merge
- **R8** : Témoins de contrôle obligatoires
- **R9** : Grille validation 2 colonnes

### Règles R10 (robots.txt) — verrouillée
- Crawlers IA OUVERTS par défaut
- Ne JAMAIS Disallow un crawler IA sans validation Philippe

### Règles SEO/GEO spécifiques à ce repo
- Pas de différenciation d'intention ici (c'est "installation" uniquement)
- Pas de mot "urgente" sur ce site (c'est `canalizador-urgente.pt` qui le porte)
- Pas de prix inventés : utiliser UNIQUEMENT les prix déjà validés dans les pages /zonas/ ("35€ deslocação + 80-140€/h, a partir de 115€")

### Règles de travail
- **Toute IA** travaillant sur ce repo DOIT mettre à jour ce fichier après action
- **Branche par défaut pour dev** : `seo-2026-q3` (à créer)
- **Branche prod** : `main` — jamais toucher sans STOP validation
- **Témoin R8** : `grep -r "canalizador" dist/public/ | wc -l` AVANT et APRÈS toute modif homepage

---

## 🤖 RÈGLES DE COORDINATION MULTI-IA (lecture obligatoire)

### Quand plusieurs agents travaillent EN PARALLÈLE sur le même projet

**Scénario** : Claude travaille sur `canalizador-urgente` (A1 = refonte homepage) + Codex travaille sur `eletricista-urgente` (A1 = refonte homepage) en même temps.

**Règles de coordination** :

1. **Verrouillage logique par tâche** : avant de commencer une tâche, l'agent ajoute une ligne dans HISTORIQUE avec statut `⏳ En cours`
2. **Autres agents lisent HISTORIQUE** en premier : si statut `⏳ En cours` sur la même tâche → attendre ou prendre une autre tâche
3. **Pas de concurrence sur le même fichier** : si A1 d'`canalizador-urgente/index.html` est en cours, un autre agent ne peut pas le modifier
4. **Chaque agent met à jour HISTORIQUE** AVANT et APRÈS son action
5. **Branches Git séparées** par agent (recommandé) : `agent-claude-A1`, `agent-codex-A1` etc.
6. **Merge vers main/main/proto** : uniquement après STOP validation Philippe (R7)

### Format de log complet (à utiliser pour toute action)

```markdown
| 2026-06-29 | claude-minimax-m3 | A1 | Lecture de l'existant homepage | R3 (mode lecture seule avant modif) | 1 fichier, 150 lignes analysées | ✅ Fait |
| 2026-06-29 | claude-minimax-m3 | A1 | Création branche `prototype-home-v2` | R6 (pas de --force) + R7 (branche dédiée) | Branche créée, HEAD: abc1234 | ✅ Fait |
| 2026-06-29 | claude-minimax-m3 | A1 | Patch H1 homepage (1 fichier) | Doctrine §12.1 (H1 unique) | +3 lignes, -2 lignes, fichier validé | ⏳ En cours |
| 2026-06-29 | claude-minimax-m3 | A1 | Commit `feat(R12,#170): refonte H1` | Référence leçon #170 dans le commit | 1 commit, abc5678 | 🛑 STOP - attente Philippe |
```

### Champs obligatoires

| Champ | Règle |
|---|---|
| **DATE** | ISO `YYYY-MM-DD` |
| **AGENT** | Identifiant unique persistant (`hermes-mini`, `claude-code-cli`, etc.) |
| **TÂCHE** | Référence SEO_PLAN.md (`A1`, `B2`, `C1`...) |
| **ACTION** | Verbe à l'infinitif + objet court |
| **JUSTIFICATION** | Réf règle AGENTS.md (R3, R6, R12...) OU raison métier |
| **RÉSULTAT** | Chiffres concrets : fichiers touchés, lignes, hashes |
| **STATUT** | 1 des 5 valeurs ci-dessus |

### Anti-conflits : qui peut faire quoi

| Tâche | Agent autorisé | Condition |
|---|---|---|
| Lecture/audit | Tous | Aucune |
| Patch homepage | 1 seul agent à la fois | Statut `⏳ En cours` dans HISTORIQUE |
| Patch page /zonas/ | 1 par ville | Pas 2 agents sur la même ville |
| Backlink externe | N'importe | Coordination humaine (Philippe) |
| Commit sur branche perso | Agent propriétaire | Tag `agent-{name}-{task}` |
| Merge vers main | Philippe uniquement | R7 — STOP validation obligatoire |

---

## 📝 NOTES pour les futures IA

### Contexte à savoir
- Philippe est l'unique décisionnaire (pas d'équipe)
- Pas de budget, pas de GBP, pas d'avis Google
- 4 sites distincts mais liés (Norte Reparos = marque parente, 2 -urgente = satellites)
- Le "monopole local" prendra 9-15 mois, pas 2-3

### Pièges à éviter
- ❌ Ne PAS ajouter de "urgente" sur ce site (c'est le job de `canalizador-urgente.pt`)
- ❌ Ne PAS modifier `vercel.json` (3516 rewrites, R6 = risque catastrophe)
- ❌ Ne PAS inventer de témoignages ou chantiers (R4 + R11)
- ❌ Ne PAS promettre des délais chiffrés type "30min" (R12)
- ❌ Ne PAS toucher à `norte-reparos.com` (stale, redirige vers .pt)

### Questions en suspens
- Faut-il créer une page "Sobre" avec l'histoire de Philippe ? (à demander)
- Faut-il une page "Blog" plus active ? (actuellement 0 articles visibles)
- Faut-il ajouter un schema.org `BreadcrumbList` sur les pages /zonas/ ? (probablement oui)

### Pour toute question
1. Lire AGENTS.md (9 règles verrouillées)
2. Lire ce fichier SEO_PLAN.md
3. Si doute : **STOP et demander à Philippe** (R3)

---

| 2026-08-31 | Hermes (t_76aedefc) | **Audit B1 ligne 541 — STOP critère revisité** | Constat mesuré : B1 (H1 cible "Canalizador para instalação e remodelação em Trás-os-Montes") **est en place pour l'utilisateur** via `shared/serviceConfig.ts:56` + `InnovativeHero.tsx` (route `/`), MAIS `client/index.html:223` static SSR H1 = `Água a Pingar? Cano Rebentado?` (PR #253 du 03/08/2026, LCP 4.2s → < 2.5s). Googlebot first-byte voit le SSR ≠ cible B1. Statut précédent `✅ FAIT` (ligne 520) marqué obsolète → nouveau statut `🟡 À RE-SCOPER` + 3 options α/β/γ proposées (SEO ↔ LCP trade-off, R3 GO Philippe obligatoire). `Hero.tsx` (cible B1 PR #90) sur dead-code path : route live = `OptimizedHome` → `InnovativeHero`. Aucune modification de code, scope strict = 1 entrée SEO_PLAN. | R3 (STOP Philippe), R7 (0 merge sans GO), R12 (1 H1 unique installation ≠ urgente), R16 (0 régression LCP) | 0 fichier code modifié, 1 entrée SEO_PLAN réécrite (+30/-22 lignes), 1 ligne HISTORIQUE ajoutée. LECON documentée : static SSR H1 vs React hero hydraté = double audit obligatoire avant statut FAIT. | 🛑 STOP - attente GO Philippe sur α/β/γ |
| 2026-06-29 | Hermes | A3 satellite cross-ref | Référence à l'A3 Doctrine §12 étendue sur les 2 sites `-urgente` (570 fichiers canalizador-urgente PR #48 + 266 fichiers eletricista-urgente PR #35). Backlink `canalizador-norte-reparos.pt` cité dans tous les blocs Doctrine insérés. Aucune action requise sur ce repo `canalizador` lui-même (pas de page service satellite). | Suivi cross-site via PRs upstream | Pas de modification locale | ✅ Fait (cross-ref) |
| 2026-06-29 | Hermes (mode loupe parent-side) | **A4 satellite cross-ref** | Référence à l'A4 Doctrine §12 sur pages courtes des 2 sites `-urgente` (1827 fichiers canalizador-urgente PR #49 + 1642 arquivos eletricista-urgente PR #36). Backlink `canalizador-norte-reparos.pt` cité dans 1827 blocs Doctrine (canal-urgente). Aucune action locale requise. | Suivi cross-site via PRs upstream. **Leçons #211-#213 documentées** : git add silencieux + case-sensitive subagent + mode loupe parent-side. **Dette A4-BIS élec** : 180 orçamento grátis + 271 typo `+351932321892` + 2 régressions mineures | Pas de modification locale | ✅ Fait (cross-ref) |
| 2026-06-29 | Hermes (Sub-A→Sub-D audit + cleanup) | **Audit PROD + R7-bis PR #68** | Audit Sub-B a flaggé 27 violations R11/R12 sur ce repo (incluant 6 × "Desde X€" sur Bragança). PR #46 a été nettoyée (Option B) : revert 8 .tsx non validés (NAP/NIF/email hors périmètre), gardé uniquement la suppression des 3 sitemap `.bak-2-4bis` (3434 lignes). Commit `e41e10312` pushé, **PR #72 draft** ouverte. **PR #68 (A5-1a R12 élec, 4175 fichiers) mergée hier 21h07 par Philippe via UI** — c'est R7-bis violée par Philippe lui-même (pas un bug externe). Aucune action de merge prise par Hermes pour PR #72 (R7 respectée). | Témoin R8 : counts bak 3/3 supprimés, PR #72 = draft. Backup `/tmp/BACKLOG-NORTE-REPAROS-2026-06-28.md` documente l'état complet | ⏸ PR #72 en attente review Philippe |
| 2026-06-29 | Hermes (mode loupe parent-side) | **A4-BIS satellite cross-ref** | Référence à l'A4-BIS cleanup résiduel sur eletricista-urgente (271 fichiers typo téléphone PR #39 + 184 fichiers SEO cleanup PR #38). Backlink `canalizador-norte-reparos.pt` cité dans tous les blocs Doctrine (total cumul A3+A4+A4-BIS = 4757 fichiers Doctrine §12 sur 2 sites). Aucune action locale requise. | Suivi cross-site via PRs upstream. **Leçons #214-#215 documentées** : suppression branche avant merge = perte → récupérer depuis reflog ; `merge_commit_sha` API peut être trompeur pour PR draft. **Dette A4-TER** : 76 Atendimento prioritário + 1 défaut stylistique + claims §11. | Pas de modification locale | ✅ Fait (cross-ref) |
| 2026-06-30 | Hermes | B1 (Strate 1 — cosmétique) | Patch `client/index.html` L18-19 : title "Canalizador Profissional" → "Canalizador para instalação e remodelação" + meta description sans NAP, villes explicites (Bragança, Vila Real, Mirandela, Chaves). Scope = 1 fichier source (Option A validée Philippe). | R3 (STOP validation), R12 (doctrine installation ≠ urgente), R15 (1 fichier < 100 fichiers), R16 (build vert requis) | 1 fichier modifié, 2 lignes changées, 0 régression attendue. Détection **10 violations schema.org** dans StructuredData.tsx → backlog A5-2 créé (R5/R11/R12). | 🛑 STOP - PR ouverte, attente GO merge |
| 2026-06-30 | Hermes | A5-2.1 (R5 géo-neutre) | Patch `client/src/components/StructuredData.tsx` : retrait `streetAddress` + `postalCode` + blocs `geo`/`geoMidpoint` avec lat/lng Macedo précises (6 blocs Plumber + Organization). Conservé propriétés larges (`addressLocality: 'Trás-os-Montes'`, `addressRegion`, `addressCountry: 'PT'`, `geoRadius: '130000'`). | R3, R5 (géo-neutre strict), R15 (1 fichier -24 lignes), R16 (tsc + build verts) | 1 fichier modifié, -24 lignes, 8 violations A5-2 restantes, build 4.07s, bundle réduit. **Grep `napConfig` = 50 fichiers** (blast radius évité, scope borné). | ✅ Fait (PR #74 mergée R7-bis squash → bf8124c51) |
| 2026-06-30 | Hermes | A5-2.4 (R12 slogans 24h/7d) | Patch `client/src/components/StructuredData.tsx` : retrait slogans "24h/7d" + "urgências" dans Plumber.slogan (L46), cityServiceSchema.description (L191), Organization.slogan (L332), FAQ horaire (L344). Slogan R12 uniforme "Orçamento por escrito • Trás-os-Montes • Resposta por telefone". | R3, R12 (différenciation installation ≠ urgente), R145 (pas de délai chiffré), R15 (1 fichier +4/-4), R16 (build 4.89s) | 1 fichier modifié, +4/-4 lignes, 4 violations A5-2 résolues (#1 #5 #7 #8), 6 restantes. | ✅ Fait (PR #76 mergée R7-bis squash → fd0636e72) |
| 2026-06-30 | Hermes | A5-2.3 (FAQ schema R145 + R12 grille) | Patch `client/src/components/StructuredData.tsx` : 2 FAQ patchées. L347-353 remplace question "urgência" (R145 violation) par "Como é feito o orçamento?" (R12 réponse). L363-369 remplace "à partir de 60€" (R12 violation) par grille officielle 65€/h + Z1-Z6 + majoration +50%. | R3, R4 (pas d'invention, prix = grille AGENTS.md R12 §1), R12 (Transparence Radicale), R145 (pas de délai chiffré), R15 (1 fichier +3/-3), R16 (build 4.46s) | 1 fichier modifié, +3/-3 lignes, 2 violations A5-2 résolues (#8 #9), 2 restantes (#6 reviewsSchema, #10 breadcrumb). | ✅ Fait (PR #78 mergée R7-bis squash → 48456ca35) |
| 2026-06-29 | Hermes (mode loop) | **fix siteConfig hourlyRate 70→65** | PR #80 — shared/siteConfig.ts hourlyRate: 70 → 65 (4 occurrences, source tarifaire Doctrine §12 corrigée) | Session 29/06/2026 session 3 | ✅ Fait (squash 2ea9bd0) |
| 2026-06-29 | Hermes (mode loop) | **fix public/ orçamento grátis** | PR #81 — 93 fichiers public/ orçamento grátis → orçamento por escrito (195 remplacements, R11 ZÉRO INVENTION) | Session 29/06/2026 session 3 | ✅ Fait (squash 88dfa1e) |
| 2026-06-29 | Hermes (mode loop) | **fix reviewsSchema StructuredData** | PR #82 — client/src/components/StructuredData.tsx reviewsSchema supprimé (R11 avis fictifs en JSON-LD) | Session 29/06/2026 session 3 | ✅ Fait (squash 226afec) |
| 2026-06-29 | Hermes (mode loop) | **B2 FAQPage schema.org pages villes** | PR #83 — FAQPage JSON-LD injecté sur 8 pages villes : Bragança, Vila Real*, Mirandela, Chaves, Miranda do Douro, Mogadouro, Vinhais, Lamego. *Vila Real = markdown frontmatter, FAQPage non injecté. | Session 29/06/2026 session 3 | ✅ Fait (squash 338455c) |
| 2026-06-29 | Hermes (mode loop) | **fix canalizador-vila-real.html gratuito** | PR #84 — canalizador-vila-real.html (fichier markdown frontmatter) : 2× orçamento gratuito → orçamento por escrito dans description YAML | Session 29/06/2026 session 3 | ✅ Fait (squash a111445) |
| 2026-06-29 | cowork-loop | **B1 homepage H1 + R12 cleanup** | 2 fichiers, 2 commits : (1) `shared/siteConfig.ts` — hero.title "Água a Pingar?" → "Canalizador para instalação e remodelação — Trás-os-Montes", hero.subtitle et site title/description retrait 24h/7d (R12). (2) `client/src/components/Hero.tsx` — personalizedSubtitle "24h/7d" → "Instalação e remodelação ao seu domicílio em {city}. Orçamento por escrito, garantia 1 ano." Grep avant: 24h/7d = 2 occurrences. Grep après: 0 occurrences. Branch: loop/2026-06-29-canalizador-b1-homepage-h1 | R12 (différenciation installation≠urgente), R4 (zéro invention), R8 (témoins 2→0) | ⏳ PR ouverte — attente merge Philippe |
| 2026-08-31 | Hermes (t_6554f9b3) | **X-DUP phase MESURE — PR #372 DRAFT** | Script `jaccard_measure.py` (seed=42) sur 1808 fichiers `canalizador-*.html`, échantillon 2000 paires : **Jaccard p50=0.236 · p99=0.985 · max=0.995 · frac ≥ 0.15 = 0.74 → ~1 209 000 paires dupliquées sur 1 633 528** (gate 🛑 SEO_PLAN FAIL). Token median 202/page = signal local faible, pattern template + permutation nom du village. PR #372 DRAFT (2 fichiers `.loop/t_6554f9b3/` : script + rapport JSON, +309/-0). **Aucun .html modifié (R4)**, **0 merge sans GO (R7)**, **chantier reste EN_COURS**. Suite = plan différenciation + re-mesure + canonisation conditionnelle. | R4 (zéro invention — read-only), R7 (PR DRAFT, pas de merge), R11 (counts vérifiables : 1808 via `ls`, 2000 via `random.sample(seed=42)`), gate SEO_PLAN §X-DUP (Jaccard ≤ 0.15) | 2 fichiers créés (script 250 LOC + JSON 2978 octets), 1 commit pushé (`c1f055ecc9`), PR #372 DRAFT ouverte — https://github.com/taffrand-gif/canalizador-norte-reparos/pull/372 | ⏸ PR #372 DRAFT — attente GO Philippe pour phase DIFFERENCIATION |
| 2026-09-05 | Hermes (t_7b30ae47) | **B1 recheck SEO_PLAN ligne 541 — close-on-arrival** | Re-contrôle 05/09 sur main `23b146de96` (post-rejoue #388 + #387) : `shared/serviceConfig.ts:56` `heroTitle` cible B1 ✅ toujours en place ; `client/index.html:223` static H1 `Água a Pingar? Cano Rebentado?` ✅ toujours painté first-byte (PR #253 préservée, LCP < 2.5s) ; route `/` → `OptimizedHome` → `InnovativeHero` ✅ (Hero.tsx dead-code). `gh pr list --search "B1 OR homepage OR H1"` = 0 PR draft B1. Aucune PR mergée sur `client/index.html` depuis 31/08. Compteur `vercel.json` recompte R11 : **3676 lignes, ~55 rewrites** (le « 3516 fichiers » ligne 542 = approximation arrondie du fichier complet, le vrai risque R6 = toucher `vercel.json` lui-même). Constat 31/08 (lignes 554-580) reste valide, chantier **🟡 À RE-SCOPER** maintenu, α/β/γ toujours pendants. Aucun PR ouvert, aucun code modifié (R3 + R7 strictes). | R3 (STOP Philippe, 0 exécution sans GO α/β/γ), R7 (0 PR sans GO), R11 (recompte vercel.json: 55 rewrites vs « 3516 fichiers » approximationnel), R12 (1 H1 unique installation ≠ urgente), R16 (0 régression LCP) | 0 fichier code modifié, +1 ligne HISTORIQUE SEO_PLAN, 1 close-on-arrival kanban. Leçon : re-contrôler les claims chiffrés avant d'agir (R11 + leçon #447) ; « 3516 fichiers d'un coup » = métonymie pour `vercel.json` complet, pas un nombre littéral de rewrites. | 🛑 STOP - attente GO Philippe sur α/β/γ (inchangé) |
| 2026-09-05 | Hermes (t_95e6de16) | **Audit B2 ligne 612 — STOP critère évalué ✅ GO** | Audit `dist/public/canalizador-{braganca,vila-real,mirandela,chaves,miranda-do-douro,mogadouro,vinhais,lamego}.html` (build output Vite statique 11/08/2026, source `client/src/pages/cidades/*.tsx`) : **8/8 villes ont une FAQPage JSON-LD avec 5 questions/réponses honnêtes chacune** (prix/hora=Z3=35€·Z2=25€·Z5=55€·Z6=65€ cohérents avec la grille Z1-Z6 publiée et les pages TSX ; aucun preço inventado, R11). Vila Real = 5 questions présentes (la note "7/8 villes + fix markdown" sur ligne 586 était obsolète, le fix PR #84 a tenu). Wording ligne 586 corrigé "8/8 villes". **0 PR ouvert, 0 merge (chantier déjà livré PR #83+#84)**, scope strict = 2 entrées SEO_PLAN patchées en local (uncommitted, R6/R7). **LEÇON** : une stat "✅ FAIT" datée reste vivante — il faut l'auditer au build dist le plus récent, pas se fier au wording historique. Les chantiers "déjà livrés" restent auditablement vérifiables (`@graph` JSON-LD → node `@type:FAQPage` → `mainEntity.length`). | R3 (0 merge sans GO — déjà mergé upstream), R4 (audit = lecture seule, 0 invention), R7 (patch SEO_PLAN local non committé), R11 (prix = grille publiée), R12 (Transparence Radicale) | 0 fichier code modifié, 1 ligne SEO_PLAN statut resserrée (+1/-1), 1 ligne HISTORIQUE ajoutée, FAQ counts vérifiés 8/8 × 5 = 40 questions honnêtes | ✅ Fait (audit clôturé) |
| 2026-09-06 | Hermes (t_aa9a714d) | **T2-URGENT GSC gap 'desentupir sifão chão cozinha' pos 9.4 — PR DRAFT rank-push (état ⏸ → ✅ après GO)** | Diagnostic : query `desentupir sifão chão cozinha` (28 impr / 0 clics / pos 9.4 sur 28j) ne matchait pas la page `/blog/desentupir-sifao-chao` (H1 générique `Sifão de Chão: 6 Métodos Eficazes`, mention `cozinha` = 2 occurrences, 1 section corpo). Stratégie : **renforcement** (pas de nouvelle page — éviter cannibalisation, la page rankait déjà top10 sur la variante bathroom). Patch `public/blog/desentupir-sifao-chao.html` (+48/-15) : (1) titre + meta + H1 élargis `da Cozinha ou Casa de Banho` (alignés sur la query GSC) ; (2) nouvelle `<h2>0. Sifão de chão da cozinha: o que é diferente` avec causes spécifiques (gordura, detergente, restos sólidos) + paragraphe dishwasher/lava-louça interaction ; (3) HowToStep 1 élargi pour mentionner cozinha ; (4) FAQPage +2 questions (`Porque é que o sifão de chão da cozinha entope mais do que o da casa de banho?` + `O sifão de chão da cozinha está ligado ao mesmo tubo de esgoto que a máquina de lavar loiça?`) ; (5) section FAQ visible dupliquée en miroir (8 questions dans `<h3>`) ; (6) Article schema `headline`+`description` + `dateModified: 2026-09-06`. **Validation** : node JSON-LD parser → 3 blocs OK (HowTo 7 steps / FAQPage 8 questions / Article) ; python html.parser → 0 erreur tag, stack vide ; grep `cozinha` = 42 occurrences (vs 2 avant) ; pricing/délai/zone inchangés (R4, R11, R12 préservés — grille Z1-Z6/65€h intacte) ; canonical inchangé (R6) ; 0 invention (R4). Branch: `fix/cnr-rankpush-desentupir-sifao-chao-cozinha-t_aa9a714d`. **PR draft attendue GO Philippe** (R7), mesure J+7 via gsc-trajectoire-cron.sh : win si pos < 4, rollback possible si pos > 10. | R3 (PR draft, attente GO), R4 (0 invention prix/zone/délai — grille inchangée), R6 (canonical inchangé), R7 (PR draft sans merge), R11 (pricing = grille PRICING.md), R12 (Transparence Radicale — 0 slogan 24h/7d ajouté, 1 mention "Chamamos 24 horas" pré-existante non touchée) | 1 fichier HTML modifié (+48/-15), 1 ligne HISTORIQUE SEO_PLAN ajoutée, 0 régression schéma (FAQ 6→8 questions, HowTo inchangé sauf step 1 élargi) | ⏸ PR DRAFT — attente GO Philippe (mesure J+7) |
**Dernière MAJ : 2026-06-30 18h00 BST — **Loops Hermes ramas #2+#3 terminées** : 8→2 branches CNR (6 safe-drop avec preuve cherry-pick `-X ours`). Trésor majeur : `fix/bloc-cd-tsx-sweep` droppée car **3 composants React jamais importés dans App.tsx** = 715 lignes de code mort (ChatWidget +333, DiagnosticoInterativo +239, OptimizedFAQ +143). `fix/lockfile-npm` safe-drop (npm au lieu de pnpm). Branche courante `fix/a5-1-r12-can` (ad009a4e1) **dry-rebase -X theirs SAFE** : 2 commits préservés (1 fichier, +32/-2). Local main=3752f905e, origin/main=ecd711a5f (25 ahead local). Disque 3 GB libérés. Tag archive=`23ae84980`. Détails section bas.
**Prochaine action prévue** : (1) **Décision Philippe** branche `fix/a5-1-r12-can` (rebase + drop vs continuer) — dry-rebase -X theirs SAFE confirmé. (2) SEO_PLAN.md dirty → commit/éditer. (3) A5-2.5 (breadcrumb `/urgencias-24h` retirer, 30 min, safe) ou A5-3 (bandeau URGÊNCIA homepage). (4) P0 Cloudflare 301 toujours bloqué (token account-scoped insuffisant pour Page Rules API sur Free plan — leçon #192). (5) **Clone local CNR pointe sur `taffrand-gif/norte-reparos`** (repo déplacé, remote pas MAJ — à fixer si on rebuilde).
 (docs(seo-plan): MAJ 2026-06-30 18h00 BST — loops Hermes #2+#3 ramas terminées)
