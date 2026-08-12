# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-12
- Tâche prévue : **R12 — file de tâches loop, rang 1 : `client/src/components/PriceTable.tsx`** (4 occurrences).
- Tâche réellement exécutée : **R4/R11 — violation détectée en lecture DANS LE MÊME FICHIER, traitée en priorité** (règle R11/R12).
- Branche : `loop/2026-08-12-canalizador-norte-reparos-r12-pricetable` (depuis `github/main`, **en worktree**)
- Commits : `16e73033d9` (`PriceTable.tsx`), puis le commit `SEO_PLAN.md`
- PR ouverte : https://github.com/taffrand-gif/canalizador-norte-reparos/pull/290
- Résultat : ✅ 2 commits, 2 fichiers (1 par commit). Le bloc « Exemplos Reais » de la homepage annonçait **« Deslocação (Trás-os-Montes) : 80 € »** (grille canonique **Z1 = 15 €**, écart **+433 %**) et **« Deslocação (Bragança) : 110 € »** (**Z3 = 35 €**, écart **+214 %**). Les deux contredisaient **le tableau de zones rendu par le même composant** (L57-64, depuis `config.pricingZones`) : la page affichait « Bragança … 35 € » et « Deslocação (Bragança) : 110 € » à 40 lignes d'écart. Valeurs corrigées **verbatim** depuis `PRICING-CANONIQUE.md` / `shared/siteConfig.ts` L136-148 / `precos-zonas.json` (`"Bragança": 3`). Totaux dérivés `145€ - 210€` et `175€ - 240€` **retirés, non recalculés** (patron mergé PR #240 CU et PR #268 EU). Témoins R8 : `80€` 1→0 · `110€` 1→0 · `145€ - 210€` 1→0 · `175€ - 240€` 1→0 · `15€` 0→1 · `35€` 0→1 · `65€ - 130€` 4→4 · `Deslocação` 4→4 (contrôle positif). Source duale : **aucune**. `./node_modules/.bin/tsc --noEmit` : 0 erreur sur le fichier, **total 215** (baseline conforme).

## ✅ Gate merge — aucun gate actif
Vérifié au run du 11/08 : #269 (CNR), #295 (ENR), #240 (CU), #200 (EU) **toutes MERGED**. Aucun gate réécrit ce run.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Une PR en attente ne gèle pas le repo. Entre le 06/08 et le 09/08, la mention « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production** sur un backlog de 73 tâches. **Ne jamais réécrire un gate de ce type.**

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-12

Recompte effectué en début de run sur `github/main`.

| Rang | Composant | Occurrences R12 | Statut |
|---|---|---|---|
| — | `FAQLocal.tsx` | 0 | ✅ PR #240 (mergée) |
| — | `InnovativeHero.tsx` | 0 | ✅ run 04/08 |
| — | `FAQ.tsx` | 3 | ✅ PR #268 — résiduel hors périmètre |
| — | `OptimizedServices.tsx` | 7 | ✅ PR #269 (mergée) — résiduel = 3 clés de service + `gratuito` |
| — | `Footer.tsx` | 5 | ✅ CLOS 10/08 — résiduel = URL des sites frères (maillage d'intent) |
| — | `Diagnostico.tsx` | 5 | ✅ PR #280 — résiduel = saisie utilisateur |
| — | **`PriceTable.tsx`** | **4** | ⏸ **STATUÉE ce run — arbitrage d'offre requis, voir ci-dessous. Ne pas repatcher au compteur.** |
| **1** | **`OrcamentoGratuitoBadge.tsx`** | **4** | ⏳ **PROCHAINE TÂCHE** |
| 1 | `Contactos.tsx` | 4 | ⏳ à faire — 2 artefacts « Disponível Atendimento 24h/7d » (L167, L234) |
| 4 | `TrustBanner.tsx` | 2 | ⏳ à faire — L5 `'Disponível Atendimento 24h/7d'` |
| 4 | `SEOHead.tsx` | 2 | ⏳ à faire |
| 4 | `CalculadorPreco.tsx` | 2 | ⏳ à faire |
| 4 | `Blog.tsx` | 2 | ⏳ à faire |
| 8 | `Equipa.tsx` | 1 | ⏳ à faire |
| — | Header, PremiumBar, StatsCounters, Trabalhos, LatestBlog, Garantias, Testimonials, GoogleReviews, ZonaIntervencao, ScrollToTop | 0 | rien à faire (R12) |

Script de recomptage (à relancer en début de run) :
```bash
for c in $(grep "^import" client/src/pages/OptimizedHome.tsx | sed -E "s|.*components/([A-Za-z]+)['\"].*|\1|" | grep -v import); do
  f=client/src/components/$c.tsx
  [ -f "$f" ] && echo "$c $(grep -oiE '24h|24 horas|urgent[ea]|urgência|emergênci[ao]s?|grátis|gratuit[ao]|domingo|7/7|24/7|7 dias' "$f" | wc -l | tr -d ' ')"
done | sort -k2 -rn
```
⚠️ Le compteur inclut `grátis`/`gratuito` et les URL des sites frères, qui ne sont **pas** des violations. **Toujours lire les lignes avant de patcher.**

## ⏸ `PriceTable.tsx` — entrée STATUÉE, décision d'une ligne attendue

Les 4 occurrences R12 sont : L15 `service: "Fuga de Água / Urgência"`, L115 `"Urgência em Bragança num Domingo."` (×2 : `Urgência` + `Domingo`), L118 `Intervenção Urgência:`.

**Elles ne sont pas des claims inventés.** `shared/siteConfig.ts` L153 verrouille `urgencyMultiplier: 1.5 // +50% pour urgence / fim de semana`, et `StructuredData.tsx` L340 énonce en production « Majoração noite/fim-de-semana/feriado : +50% ». La majoration week-end est **canonique sur CNR** : l'exemple du dimanche décrit une **modalité tarifaire réelle**, pas une promesse de disponibilité.

Le retirer relève donc d'un arbitrage **d'offre** (CNR expose-t-il la majoration urgence, ou la renvoie-t-il entièrement à `canalizador-urgente.pt` ?), pas d'un correctif de conformité.

➡️ **Décision demandée** : si la majoration reste affichée → **clore `PriceTable.tsx` définitivement**. Si elle part → même arbitrage que le blocage n°1 (`'Urgências 24h'` dans `serviceConfig.ts`) : **les deux se tranchent ensemble**.

## Tâche suivante recommandée
1. **`OrcamentoGratuitoBadge.tsx`** (4) — ⚠️ vérifier d'abord si les occurrences sont `grátis`/`gratuito`, **non-violations confirmées** : l'entrée pourrait se clore sans patch.
2. Sinon **`Contactos.tsx`** (4) — 2 artefacts « Disponível Atendimento 24h/7d » (L167, L234), défaut grammaticalement cassé donc corrigeable sans rien inventer. **Jumelle sur ENR (4 occ) — traiter les 2 repos dans le même run** (écart de propagation : ~20 min en binôme contre 6 à 14 jours sinon).
- Vocabulaire de remplacement validé, à reprendre **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159. Pronoms autorisés : `AGENTS.md` §12.

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — un composant de prix doit être audité contre sa propre source de vérité AVANT d'être audité au compteur R12.** Le compteur pointait 4 qualificatifs discutables ; la lecture a trouvé **2 prix faux sur une money page**, bien plus graves, dans le même fichier. **Lire le fichier bat compter le fichier.**
- 🔴 **NOUVEAU — une contradiction interne à un même composant est le signal le moins cher qui existe.** Le tableau de zones et les exemples chiffrés vivaient à 40 lignes d'écart et se contredisaient depuis des mois. ➡️ **Contrôle à ajouter : sur tout composant qui rend `config.pricingZones`, vérifier que les montants écrits en dur dans le même fichier concordent avec la grille.** Candidats immédiats : `CalculadorPreco.tsx`, `PriceTransparency.tsx`, `WhyWePublishPrices.tsx`.
- 🔴 **NOUVEAU (venu d'ENR ce run) — une branche `isPlumber ? A : B` sur un repo mono-config est du code MORT, pas une variante.** `getCurrentSiteConfig()` retourne une constante. Sur ENR, les 9 occurrences R12 de `FAQLocal.tsx` étaient toutes dans la branche jamais rendue. **Le même motif `config.id === 'norte-reparos'` existe ici dans 10 composants** (`Diagnostico`, `OptimizedServices`, `Garantias`, `EquipamentoProfissional`, `WhyWePublishPrices`, `PriceTransparency`…) — sur CNR la condition est **vraie**, donc c'est la branche **`: [...]` (électricité)** qui est morte ici. ➡️ **Avant de patcher au compteur : vérifier si les occurrences sont derrière un ternaire statiquement faux.** Gisement de code mort probable, et il gonfle les compteurs de la file.
- Le patron « retirer le total dérivé plutôt que le recalculer » (#240, #268) s'applique aussi quand c'est le **composant** qui est faux et non le total : il évite d'avoir à arbitrer une somme.
- **Le compteur R12 brut est un indicateur, pas un verdict** (leçon `Footer.tsx` du 10/08). **Clore explicitement une entrée dont le résiduel est hors périmètre**, sinon chaque run reprend le même rang 1.
- **La règle « vérifier qu'une chaîne n'est pas une CLÉ D'OBJET »** : dans `Diagnostico.tsx`, `value: 'urgente'` est consommé par `if (urgency === 'urgente')` — le renommer casse le message WhatsApp **sans erreur TypeScript**.
- **Ne pas sur-purger.** R4 se viole dans les deux sens : inventer **et** effacer ce qui est vrai.
- 🔎 **Gisement mesuré le 11/08 : `Atendimento 24h` = 192 occurrences dans `client/src/`.** Artefacts de purge automatisée, grammaticalement cassés donc corrigeables sans rien inventer. **Batch → GO Philippe.**
- 🔴 **Un batch de conformité peut corrompre la RÈGLE qu'il applique** (leçon CU, commit `fb9dd2415`). **Tout batch de substitution doit exclure explicitement `AGENTS.md`, `SEO_PLAN.md`, `context.md`, `CLAUDE.md`.** Et **avant d'escalader une contradiction de doctrine : `git log -S "<fragment>" -- AGENTS.md`.**
- **Le contrôle de sanité `tsc` = 215 erreurs est indispensable.** `npx tsc` résout vers un paquet npm homonyme et sort en code 1 sans rien typer → faux négatif silencieux. Utiliser **`./node_modules/.bin/tsc --noEmit`**. Dans un worktree : `ln -sfn ~/work/Sites/canalizador-norte-reparos/node_modules ./node_modules`, puis `rm -f ./node_modules` **avant** le commit.
- « Orçamento grátis » / « WhatsApp Grátis » / « Projeto hidráulico gratuito » : **non-violations confirmées**. Ne pas re-flaguer.
- `Hero.tsx` écrase le `subtitle` de siteConfig via `useMemo` → source duale, patcher les DEUX fichiers. Idem `serviceConfig.ts` ↔ `InnovativeHero.tsx`.
- A5-2, B1, B2, B3 sont TERMINÉS — ne pas les rouvrir.

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Le sandbox `mcp__workspace__bash` n'a ni `gh` ni credentials en écriture (`git push` → « could not read Username »), mais `git fetch` y fonctionne (repos publics) et il lit/grep parfaitement les fichiers montés. **Répartition confirmée ce run encore** : lecture / grep / scripts d'analyse → `mcp__workspace__bash` ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process` (host, `gh` authentifié `taffrand-gif`).
- ⚠️ **Le sandbox ne peut pas supprimer les `.git/objects/*.lock`** (« Operation not permitted ») — `git fetch` émet des warnings d'unlink mais **réussit**. Ne pas s'en alarmer, pré-flight host-side.
- **Le `/tmp` du sandbox et le `/tmp` du host sont DEUX systèmes de fichiers distincts.** Worktrees sous `~/work/Sites/_worktrees/loop-YYYY-MM-DD/{cnr,enr,cu,eu}`.
- **Les commandes `git` ne fonctionnent PAS depuis le sandbox dans un worktree** (le `.git` contient un chemin absolu host). Dans un worktree : grep/lecture au sandbox, **tout `git` via desktop-commander**.
- 🔴 **`set -e` + zsh : un glob sans correspondance fait AVORTER tout le script.** Utiliser `setopt null_glob`.
- Ce repo a **3 remotes** : `origin` et `github` pointent tous deux vers GitHub, `local` pointe vers un `/tmp` disparu → `git fetch --all` sort en erreur. **Utiliser `git fetch github`, jamais `--all`.**
- Corps de PR long : fichier + `gh pr create --body-file`, jamais `--body` inline.
- L'outil `Edit` (chemin host `/Users/admin/work/Sites/...`) fonctionne parfaitement dans un worktree et gère les accents — c'est la voie la plus sûre pour patcher, plus que `sed`.
- Untracked `.worktrees/`, `DESIGN.md`, `_audit/`, `_indexing/` à la racine (autres automations) — inoffensifs, ne jamais les committer/supprimer.

## Blocages connus
1. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** (`shared/serviceConfig.ts` L67) : `<h3>` sur la homepage, **clé de lookup** dans 3 tables d'`OptimizedServices.tsx`, repris dans 9 `description` de `shared/seoKeywords.ts` et ~20 pages `client/src/pages/cidades/*.tsx`. Le renommer **change l'offre affichée** → GO Philippe. **Même question ouverte sur ENR : un seul arbitrage débloque les 2 repos.** ➡️ **Se tranche désormais avec la question `PriceTable.tsx` ci-dessus — même sujet : CNR expose-t-il l'intent urgence ?**
2. 🛑 **Batch `Atendimento 24h`** (192 occurrences dans `client/src/`) — attente GO.
3. 🛑 **Batch FAQ (~815 fichiers)** et **batch prix (~73)** demandés dans PR #240 : décision de périmètre parkée par Philippe. Rappel d'une ligne, ne pas relancer à chaque run.
