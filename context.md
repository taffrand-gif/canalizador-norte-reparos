# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-07-16
- Tâche exécutée : R12 violation (priorité) — purge mots-clés `urgente`/`24h/7d`/`emergência`/`domingo` dans `shared/siteConfig.ts` → `seo.keywords` (détectée en lecture pré-B3, corrigée en premier conformément à la règle R11/R12 du protocole loop)
- Branche créée : `loop/2026-07-16-canalizador-norte-reparos-r12-seo-keywords`
- Commits : `c5f59cd7a` (fix shared/siteConfig.ts), `9d5d92009` (docs SEO_PLAN.md HISTORIQUE)
- PR ouverte : https://github.com/taffrand-gif/canalizador-norte-reparos/pull/203
- Résultat : ✅ 2 commits, 2 fichiers modifiés (1 par commit, atomique). 8 chaînes de mots-clés urgence/24h remplacées par équivalents installation/remodelação honnêtes, 0 doublon (42/42 uniques). Grep témoins avant/après : 8 patterns 1-2→0 occurrences chacun. PR ouverte, attente GO merge Philippe (R7 — jamais d'auto-merge).

## Tâche suivante recommandée
- Tâche : **B3 — H1 sémantique** (reportée cette itération, non traitée car R12 primait) : dans `client/src/components/Hero.tsx` L50, le H1 utilise `style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}` inline — extraire en classe CSS séparée (ex. `.hero-title-shadow` dans un fichier CSS existant ou nouveau bloc `<style>`/Tailwind arbitrary value documenté). Pure cosmétique SEO/code-quality, risque bas.
- Priorité : BASSE (cosmétique)
- Fichier : `client/src/components/Hero.tsx` (ligne 50 au moment de ce run — vérifier le numéro de ligne exact avant patch, le fichier a pu bouger)
- Critère GO/STOP (SEO_PLAN.md §B3) : rendu visuel identique obligatoire, sinon STOP.

## Apprentissages (self-improving)
- `siteConfig.ts` contient 3 niveaux de contenu textuel indépendants : (1) site.title/description, (2) hero.title/subtitle, (3) seo.keywords — **seo.keywords était le seul niveau encore non audité/corrigé** ; c'est maintenant fait (ce run). Les 2 autres niveaux (title/description, hero.title/subtitle) avaient déjà été nettoyés lors du run B1 du 29/06 (24h/7d retiré).
- Le gisement "P6" documenté dans SEO_PLAN.md (audit 01/07) pointait vers un fichier `shared/seoKeywords.ts` qui **n'existe pas** dans ce repo (vérifié par Glob, 0 résultat) — la source vivante réelle consommée par `SEOHeadEnhanced.tsx` (meta keywords sur toutes les pages) est `shared/siteConfig.ts` → `config.seo.keywords`. **Corriger cette référence dans SEO_PLAN.md** si un futur audit reparle de "seoKeywords.ts".
- `Hero.tsx` écrase le `subtitle` de siteConfig via `useMemo` → source duale : si on retouche la copy hero, corriger les DEUX fichiers.
- `siteConfig.hero.title` contient toujours l'em-dash "—" nécessaire à `personalizedTitle.split('—')` (vérifié ce run, non touché) — ne pas le perdre lors d'un futur patch B3/hero.
- "WhatsApp Grátis" (bouton CTA Hero.tsx L88, et ~47 fichiers du repo) a été **examiné et jugé non-violation** : ça décrit le canal de messagerie (WhatsApp est gratuit par nature, contrairement à "orçamento grátis" qui avait été corrigé en R11 le 29/06 PR #81 car c'était un claim commercial sur le prix). Ne pas re-flaguer sans nouvel élément.
- A5-2 est TERMINÉ (toutes violations 1-10 résolues, cf. SEO_PLAN.md A5-2.1/.3/.4/.5 ✅) — ne pas rouvrir cette investigation.

## Edge cases détectés
- `mcp__desktop-commander__start_process` peut renvoyer une erreur "output exceeds maximum allowed tokens" sur `git checkout main && git pull` si la sortie est verbeuse (ex. après un fetch avec beaucoup de refs) — préférer chaîner des commandes courtes avec `--short`/`| tail -N` pour rester sous la limite.
- Le sandbox `mcp__workspace__bash` peut se bloquer temporairement ("RPC error: process ... already running") — dans ce cas, basculer sur l'outil `Grep` natif (accès direct au filesystem monté) pour les vérifications grep avant/après plutôt que d'insister sur le sandbox.
- Untracked `.worktrees/` et `DESIGN.md` toujours présents à la racine (appartiennent à une autre automation concurrente) — confirmés inoffensifs, à ignorer systématiquement, ne jamais les committer/supprimer.

## Blocages connus
- aucun

## Instructions améliorées pour prochain run
1. Lire d'abord les dernières entrées HISTORIQUE de SEO_PLAN.md (section bas, la plus récente = 2026-07-16 R12 seo.keywords) pour éviter de refaire du travail déjà fait.
2. Pour B3 : lire `client/src/components/Hero.tsx` en entier avant de patcher (le fichier a pu changer depuis ce run), confirmer que le H1 inline `style={{ textShadow: ... }}` est toujours à la même ligne, extraire en classe CSS (vérifier s'il existe déjà un fichier CSS/Tailwind config pertinent avant d'en créer un nouveau), tester que le rendu visuel ne change pas (screenshot ou lecture attentive du shadow value).
3. Avant toute tâche, toujours grep `24h\|urgente\|urgência\|emergência\|grátis\|gratuito` dans le périmètre visé pour détecter les violations R4/R11/R12 — cette itération a trouvé une violation active dans `shared/siteConfig.ts` non détectée par les runs précédents car ils avaient audité `hero.title/subtitle` et `site.title/description` mais pas `seo.keywords`.
4. Si lock file git : utiliser `mcp__desktop-commander__start_process` avec `rm -f ~/work/Sites/{repo}/.git/*.lock && git ...`.
5. A5-2 est TERMINÉ — ne pas chercher de nouvelles violations A5-2 dans StructuredData.tsx (toutes résolues).
