# STRUCTURE — `canalizador` (canalizador-norte-reparos.pt)

> Repo **canonical** du standard React/Vite NORTE-OS. `eletricista-norte-reparos` en dérive.
> Doc = ce qui EXISTE et est prouvé sur disque (2026-06-22). Pas un idéal.
> **PROD** : projet Vercel `norte-reparos-clean`, branche `main`, domaine `canalizador-norte-reparos.pt`. Remote = source de vérité.

---

## 1. Stack

React 18 + TypeScript + Vite (SPA) · Wouter (routing) · TailwindCSS · esbuild (bundle serveur) · Drizzle (schéma).
Build = **npm** (voir §7). Déploiement = **push Git** (jamais API/CLI Vercel).

## 2. Arborescence réelle

```
canalizador/
├── client/src/
│ ├── components/ composants UI partagés (front). Contiennent le conditionnel tél — voir §6
│ ├── contexts/ React contexts
│ ├── data/ contenu éditorial : cityContent.ts, cidadesProximas.ts
│ ├── hooks/ TOUS les hooks (client/src/_core fusionné ici — choix 1A)
│ ├── lib/ utilitaires bas niveau
│ ├── pages/ pages racine + blog/ + cidades/ + CityServicePage.tsx (template villes)
│ ├── shared/ composants partagés FRONT uniquement
│ ├── utils/
│ └── App.tsx table de routes (dont la route dynamique ville — voir §4)
├── shared/ DONNÉES + CONFIG lues par build/server/drizzle. NE PAS déplacer
│ ├── serviceConfig.ts ← CITIES[] (liste des villes, SOURCE) + autres configs
│ ├── cityServiceMatrix.ts ← SERVICES[] + getCityServiceData() (moteur ville×service)
│ ├── siteConfig.ts ← config site (nom, phone flat, SEO de base)
│ ├── seoKeywords.ts serviceConfig images.ts videoData.ts topicClusters.ts const.ts types.ts
│ └── _core/errors.ts (helper erreurs — voir §9)
├── content/ drizzle/ public/ server/
├── scripts/ generate-sitemap.ts, generate-favicons, optimize-images.js
├── vite.config.ts vercel.json package.json tsconfig.json components.json
└── package-lock.json (lockfile npm — PAS de pnpm, voir §7)
```

## 3. Le moteur de pages-villes (équivalent React du « master R13 »)

**Il n'existe AUCUN fichier `.tsx` par ville.** Les pages ville×service sont générées par UN template + DEUX listes de données. C'est le pattern data-driven à préserver.

| Pièce | Fichier | Rôle |
|---|---|---|
| Liste des villes | `shared/serviceConfig.ts` → `CITIES[]` | 98 entrées `{ name, slug, district, parentCity? }` |
| Liste des services | `shared/cityServiceMatrix.ts` → `SERVICES_NORTE_REPAROS[]` | `{ slug, name, basePrice, icon, description }` (fugas-agua, desentupimentos, esquentadores…) |
| Combinateur | `shared/cityServiceMatrix.ts` → `getCityServiceData(serviceSlug, citySlug)` + `calculatePriority()` | retourne `{ city, service, url, priority }`, URL = `/{serviceSlug}-{citySlug}` |
| Template (rendu) | `client/src/pages/CityServicePage.tsx` | une seule page React |
| Route | `client/src/App.tsx` → `<Route path="/:service-:city" component={CityServicePage} />` | route dynamique unique (lazy) |
| Sitemap | `scripts/generate-sitemap.ts` | énumère les combos ville×service |

Pages = `CITIES × SERVICES`. Ajouter une ville crée donc toutes ses pages-service d'un coup.

## 4. Ajouter une ville (procédure prouvée)

1. Éditer `shared/serviceConfig.ts` → ajouter un objet à `CITIES[]` :
 ```ts
 { name: 'Nova Vila', slug: 'nova-vila', district: 'Bragança' }
 ```
 (`slug` = nom en minuscules, sans accent, tirets. `parentCity` optionnel : si absent = ville majeure, priorité sitemap boostée.)
2. Aucune autre édition de routing/template requise : la route `/:service-:city` + `CityServicePage.tsx` rendent automatiquement chaque `/{service}-{slug}`.
3. Régénérer le sitemap : `npx tsx scripts/generate-sitemap.ts` (ou le script npm équivalent).
4. Vérifier en local (§7) puis push → déploiement auto.

**Ajouter un service** = ajouter un objet à `SERVICES_NORTE_REPAROS[]` dans `cityServiceMatrix.ts` (même logique, multiplie sur toutes les villes). Périmètre métier = canalisation uniquement.

## 5. Conventions verrouillées (Filipe, 2026-06-22)

- **1A — hooks unifiés** : un seul `client/src/hooks/`. `client/src/_core` a été fusionné dedans. (≠ `shared/_core`, voir §9.)
- **2A — deux `shared/` distincts, frontière nette (PAS de fusion)** :
 - `shared/` (racine) = données/config lues par build + server + drizzle. **Déplacer = casser les imports build.**
 - `client/src/shared/` = composants partagés du front uniquement.

## 6. ⚠️ Piège : numéro de téléphone 928 / 932

Deux niveaux, à ne pas confondre :

1. **Identité du site** : `shared/siteConfig.ts` → `phone: '928 484 451'` (littéral plat, propre à ce repo plombier).
2. **Conditionnel partagé** : les composants UI partagés (`Diagnostico.tsx`, `Garantias.tsx`, `CalculadorPreco.tsx`, `Tarifas.tsx`, `WhyWePublishPrices.tsx`, `server/emailAutoResponse.ts`…) contiennent :
 ```ts
 const isPlumber = config.id === 'norte-reparos';
 const phone = isPlumber ? '928484451' : '932321892';
 ```
 → C'est pourquoi le littéral **`932` apparaît dans CE repo plombier** : c'est la branche électricien du composant partagé, jamais affichée ici.

🔴 **Ne JAMAIS remplacer `932` en aveugle (search-replace global).** Ça casse la branche `else` du ternaire (régression réelle déjà survenue, cf. execution-log #98). Corriger un display-text en dur = OK ; toucher au ternaire `isPlumber ? … : …` = NON sans intention claire.

## 7. Build & déploiement (réalité Vercel)

- Vercel exécute `npm install --legacy-peer-deps` puis `npm run build` (preuve : build log Vercel). Lockfile = **`package-lock.json`**.
- **Pas de `pnpm-lock.yaml` ni de champ `packageManager`** (étaient stale, Vercel les ignore — retirés).
- `npm run build` = `vite build` + `esbuild server/index.ts … --outdir=dist`. `prebuild` lance `optimize-images`.
- Scripts utiles : `npm run check` (tsc), `npm run lint`, `npm run dev` (Vite --host).
- **Vérifier avant push** : `npm install --legacy-peer-deps && npm run build` en local. Vert obligatoire.
- Déploiement = `git push` sur `main`. Jamais d'API/CLI Vercel pour déployer le code.

## 8. Hygiène repo

- Pas de `vercel.json.backup-*` (utiliser git).
- Pas de data brute en racine.
- Un seul trigger deploy : `.vercel-deploy-trigger`.

## 9. Divergences connues (signalées, NON corrigées — décision Filipe requise)

- `shared/localities_70.py` : fichier **Python dans un dossier TS** (`shared/`). Parasite probable (artefact de génération). À déplacer hors repo ou dans `scripts/` — non touché.
- `shared/_core/errors.ts` existe encore : c'est un `_core` **racine** (≠ `client/src/_core` qui, lui, a bien été fusionné par 1A). La règle 1A ne le visait pas. À clarifier si on veut un seul emplacement.
- Divergence vs `eletricista-norte-reparos` dans `shared/` : ici `videoData.ts` + `topicClusters.ts` + `localities_70.py` ; là-bas `blogArticles.ts` + `napConfig.ts`. Normal (contenu propre à chaque métier) mais à garder en tête lors d'une synchro de structure.

## 10. Hors périmètre de ce repo

- Sites statiques `*-urgente` : voir leur `STRUCTURE.md` (template R13 HTML).
- `microsites` : monorepo, 1 dossier/site.
- `fabric` : outil tiers, exclu.
