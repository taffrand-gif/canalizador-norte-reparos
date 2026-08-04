# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-04
- Tâche exécutée : **R12/R145 violation active (priorité R11/R12)** — hero de la homepage. Aucune tâche codable `⏳ À FAIRE` ne restait au SEO_PLAN (cf. run du 30/07) ; conformément à §Instructions #11, le run a cherché une violation active par la **méthode d'audit par point d'entrée** et en a trouvé une **sur le H1 lui-même**.
- Branche créée : `loop/2026-08-04-canalizador-norte-reparos-r12-hero-homepage` (worktree depuis `github/main`)
- Commits : `2a161d2ba` (`shared/serviceConfig.ts`), `9a5da389d` (`client/src/components/InnovativeHero.tsx`), `b4c7e6128` (`SEO_PLAN.md` HISTORIQUE) — 3 commits, 1 fichier chacun.
- PR ouverte : https://github.com/taffrand-gif/canalizador-norte-reparos/pull/263
- Résultat : ✅ Témoins R8 `serviceConfig.ts` : `Atendimento prioritário` 1→0 · `Água a Pingar` 1→0 · `Cano Rebentado` 1→0 · `Preço dito antes de sair` 1→0 · `24h/7d` 2→1 (résiduel `commonProblems[]`, non consommé) · `Orçamento por escrito em 48h` 0→1. Témoins R8 `InnovativeHero.tsx` : `Atendimento 24h` 1→0 · `24h/7 dias garantida` 1→0 · `Orçamento por escrito em 48h` 0→1. `npx tsc --noEmit` : **0 erreur** sur les 2 fichiers patchés. Attente GO merge Philippe (R7).

## 🔴 DÉCOUVERTE STRUCTURANTE — B1 avait patché un fichier non rendu
La route `/` est `App.tsx` L139 → `OptimizedHome` → `InnovativeHero`, dont le H1 et le sous-titre viennent de **`shared/serviceConfig.ts`** (`ACTIVE_CONFIG = plumberieConfig`, L115) — **pas** de `shared/siteConfig.ts`, et **pas** de `Hero.tsx` (qui n'est importé que par `client/src/pages/Home.tsx`, page **non routée**).

Conséquence : B1 (29/06, marquée ✅ Fait) et B3 (29/07, marquée ✅ Fait) ont patché `siteConfig.ts` et `Hero.tsx`. **Le H1 réellement servi à Google est resté inchangé pendant 5 semaines** : `Água a Pingar? Cano Rebentado?` + `Atendimento prioritário — 24h/7d`.

➡️ **Règle nouvelle, à appliquer sur les 4 repos** : une tâche « homepage » se résout depuis la **route**, jamais depuis le nom de fichier cité dans la fiche SEO_PLAN. Séquence : `grep -n 'Route path=\"/\"' client/src/App.tsx` → composant page → `grep -n '^import' <page>` → composants → grep R12 sur chacun.
➡️ **Corollaire** : un statut `✅ Fait` dans SEO_PLAN ne prouve pas que la prod a changé. Vérifier la chaîne de rendu, pas le grep du fichier nommé.

## Tâche suivante recommandée
Le SEO_PLAN reste sans tâche codable (`C1-C4 Backlinks` = action externe). Continuer la purge R12 des composants de la homepage, **1 fichier = 1 PR**, dans cet ordre de rentabilité (audit par point d'entrée réalisé ce run, sur `github/main`) :

| Composant (importé par `OptimizedHome.tsx`) | Hits R12 |
|---|---|
| `SEOHead.tsx` L15 — génère le `<title>` `"${serviceType} 24h ${city} \| Urgências Trás-os-Montes"` | **le plus rentable** : titre de toutes les pages ville |
| `OptimizedServices.tsx` | 7× `24h`, 5× `urgência`, 2× `emergênc` |
| `CalculadorPreco.tsx` | 15× `urgente`, 2× `urgência` |
| `FAQ.tsx` | 8× `urgente`, 4× `24h`, 2× `grátis` |
| `Footer.tsx` | 4× `urgente`, 1× `24h`, 1× `imediat` |
| `Diagnostico.tsx` | 4× `urgente`, 1× `24h`, 1× `imediat` |
| `TrustBanner.tsx` | 1× `24h`, 1× `gratuito` |
| `PriceTable.tsx` | 3× `urgência`, 1× `imediat` |
| `OrcamentoGratuitoBadge.tsx` | 1× `24h`, 3× `gratuito` |
| `Contactos.tsx` | 3× `24h` |

Priorité recommandée : **`SEOHead.tsx`**, puis `OptimizedServices.tsx`.

## 🛑 À arbitrer par Philippe
1. **`businessName: 'Canalizador Profissional 24h'`** (`shared/serviceConfig.ts` L42) — violation R12 **et** valeur injectée dans `LocalBusiness.name` du JSON-LD de quasi toutes les pages (`useSEO.tsx` L162/L243/L294, `CityServicePage.tsx` L53) + `og:site_name` (L59). Le modifier = **changement de NAP cross-site** (cf. `KIT_CITATIONS_NAP_2026-07-01.md`). Aucun équivalent validé n'existe dans `siteConfig.ts`. **Le loop n'y touchera pas sans GO + valeur cible fournie par Philippe.**
2. **M0 / faux avis `GoogleReviews.tsx`** : violation R11 **ACTIVE en prod** (6 avis inventés + schema `Review`/`aggregateRating`). Décision A/B/C/D attendue **depuis le 29/06/2026** — point le plus ancien et le plus grave du backlog. Inchangé.
3. **Gisement `client/public/` + `dist/public/`** (~25k + ~41k hits R12) : régénération build, GO de périmètre requis. Inchangé.
4. **Branche `backup/main-cleanurls-pre-2026-07-30`** (2 commits cleanUrls non poussés) : pousser en PR ou supprimer ? Non tranché. Ne pas supprimer tant que non tranché.

## Apprentissages (self-improving)
- 🔴 **Résoudre la homepage par la route, pas par le nom de fichier** (voir §Découverte structurante). C'est l'erreur la plus coûteuse du cycle : 5 semaines de H1 non conforme malgré 2 tâches marquées ✅ Fait.
- 🔴 **L'indentation de ce repo est de 1 espace.** Un patch par chaîne exacte construit en recopiant une sortie `sed`/terminal (qui normalise l'espacement) échoue en `count()==0`. **Toujours `python3 -c "print(repr(ligne))"` avant de construire le motif de remplacement.** A coûté un aller-retour ce run.
- **Vérifier l'usage d'un tableau de config avant de dépenser un commit dessus** : `commonProblems[]` et `services[]` de `serviceConfig.ts` contiennent des termes d'urgence mais ne sont consommés nulle part (`commonProblems`) ou une seule fois (`services` → `OptimizedServices.tsx` L69).
- **Vérifier `gh pr list` avant de patcher** : 5 PR Hermes ouvertes (#258→#262) sur des pages `desentupimento`/blog — aucun recouvrement avec les fichiers de ce run, vérifié avant patch.
- Le backlog PR du 30/07 (#229→#240) a été **entièrement traité** : ces PR ne sont plus ouvertes. Le goulot merge signalé aux runs précédents s'est résorbé.
- Réutiliser le vocabulaire déjà validé (`siteConfig.ts` L108/L123/L124) garantit R4 sans arbitrage : « Canalizador para instalação e remodelação — Trás-os-Montes », « Orçamento por escrito em 48h », « garantia 1 ano », « ao seu domicílio ».
- « WhatsApp Grátis » (CTA) : **non-violation** confirmée. Ne pas re-flaguer.
- A5-2, B1, B2, B3 sont marqués TERMINÉS — mais **B1/B3 n'ont pas eu d'effet en prod** (voir §Découverte). Ne pas les rouvrir formellement ; leur objet est traité par la PR #263.

## Edge cases détectés
- Le sandbox `mcp__workspace__bash` **n'a ni `gh` ni credentials Git en écriture**, et son montage FUSE **interdit la suppression de fichiers** (`rm` → `Operation not permitted`), ce qui casse tout `git commit` (impossible de retirer `.git/index.lock`). ➡️ **Tout git/gh/npx doit passer par `mcp__desktop-commander__start_process`** (host macOS, `gh` authentifié `taffrand-gif`). Le sandbox reste excellent pour les **grep/lecture**.
- Les outils `Read`/`Edit` de Cowork **ne peuvent pas atteindre `/tmp` sur l'hôte** (hors dossiers montés). Dans un worktree `/tmp/...`, patcher via un **script Python à chaîne exacte** lancé par desktop-commander (avec `assert count()==1` avant écriture) — c'est le pattern fiable, il échoue proprement au lieu de patcher à côté.
- `cat -A` n'existe pas sur macOS (BSD). Utiliser `python3 -c "print(repr(...))"` pour inspecter l'indentation.
- **Worktree obligatoire** : la copie de travail de ce repo est sale en permanence (`SEO_PLAN.md` modifié, `.worktrees/`, `DESIGN.md`, `_audit/`, `_indexing/` untracked) et posée sur une branche Hermes. Pattern : `git worktree add -q /tmp/cnr-wt -b <branche> github/main`.
- Le remote GitHub de ce repo s'appelle **`github`** (et aussi `origin`) ; `local` pointe vers `/tmp/cnr-m8-fix`. Toujours `git remote -v` d'abord.
- `npx tsc --noEmit` prend ~2 min et sort des centaines d'erreurs pré-existantes — filtrer sur le chemin exact des fichiers patchés (`grep -E "^shared/serviceConfig"`), ne jamais comparer les totaux.
- Corps de PR long : `cat > /tmp/pr-xxx.md <<'EOF'` puis `gh pr create --body-file`, jamais `--body` inline.

## Instructions améliorées pour prochain run
1. 🔴 **Résoudre la cible par la route** : `grep -n 'Route path' client/src/App.tsx` → page → `grep -n '^import' <page>` → composants → grep R12. **Ne jamais faire confiance au nom de fichier cité dans la fiche SEO_PLAN.**
2. **Séquence d'ouverture** : `git remote -v` → `git fetch github -q` → `git worktree add -q /tmp/cnr-wt -b loop/YYYY-MM-DD-... github/main` → **puis seulement** lire `context.md`/`SEO_PLAN.md`/`AGENTS.md` **depuis le worktree** (jamais depuis la copie de travail, qui est sur une branche Hermes).
3. **Répartition des outils** : grep/lecture → `mcp__workspace__bash` ; git/gh/npx/patch → `mcp__desktop-commander__start_process`.
4. **Patch** : script Python, chaîne exacte, `assert count()==1` avant écriture. `repr()` la ligne cible d'abord (indentation 1 espace).
5. **R8** : 1 motif par commande, avant ET après, sur le fichier patché nommément.
6. `npx tsc --noEmit 2>&1 | grep -E "^<chemin/exact>"` — jamais de comparaison de totaux.
7. `gh pr list --state open` avant de choisir la tâche et le vocabulaire (collisions Hermes).
8. **Prochaine cible recommandée : `client/src/components/SEOHead.tsx` L15** (`<title>` des pages ville).
9. NE PAS toucher `businessName` / `useSEO.tsx` L122 sans GO Philippe (NAP).
10. NE PAS toucher `client/public/` ni `dist/public/` sans GO de périmètre.
