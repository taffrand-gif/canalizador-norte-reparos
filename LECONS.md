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