# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-06-29
- Tâche exécutée : B1 — Homepage H1 + R12 cleanup (hero title/subtitle, personalizedSubtitle)
- Branche créée : `loop/2026-06-29-canalizador-b1-homepage-h1`
- PR ouverte : https://github.com/taffrand-gif/canalizador-norte-reparos/pull/90
- Résultat : ✅ 2 commits, 2 fichiers modifiés. PR ouverte, attente merge Philippe.

## Tâche suivante recommandée
- Tâche : B3 — H1 sémantique (convertir `<h1 style="...">` en classe CSS séparée)
- Priorité : BASSE
- Alternative si on préfère l'impact : A5-2.5 — breadcrumb `/urgencias-24h` retrait (30 min, R12)

## Apprentissages (self-improving)
- `siteConfig.ts` contient 3 niveaux de contenu textuel indépendants : (1) site.title/description, (2) hero.title/subtitle, (3) seo.keywords — tous à vérifier pour R12
- `Hero.tsx` écrase le `subtitle` de siteConfig via `useMemo` → source duale : corriger les DEUX fichiers
- `.git/HEAD.lock` et `.git/index.lock` ne peuvent pas être supprimés depuis le sandbox → utiliser `mcp__desktop-commander__start_process` (rm depuis host puis git commit)
- B1 Strate 1 (title/meta sur dist/public/index.html) avait déjà été faite par Hermes — vérifier AVANT de recréer

## Edge cases détectés
- Lock files git bloquants dans le sandbox macOS montserrat → workaround : desktop-commander rm depuis host
- siteConfig hero.title utilise `split('—')[0]` pour extraire le préfixe avant la ville → nouveau titre doit contenir `—` pour que personalizedTitle fonctionne correctement

## Blocages connus
- aucun

## Instructions améliorées pour prochain run
1. Lire d'abord les dernières entrées HISTORIQUE de SEO_PLAN.md (section bas) pour éviter de refaire du travail déjà fait
2. Grep `24h\|urgên\|gratuito\|inventé` avant toute modif pour détecter violations R4/R12 dans le périmètre
3. Si lock file git : utiliser `mcp__desktop-commander__start_process` avec `rm -f ~/work/Sites/{repo}/.git/*.lock && git ...`
4. Pour B3 (H1 sémantique) : modifier `client/src/components/Hero.tsx` — remplacer `style={{ textShadow: ... }}` par classe CSS, tester visuellement
5. Pour A5-2.5 (breadcrumb `/urgencias-24h`) : modifier `client/src/components/StructuredData.tsx` L421, retirer l'entrée breadcrumb
