# Rapport d'Optimisation des Images - Norte Reparos

## Résumé des Modifications

### 1. Composant OptimizedImage.tsx Amélioré ✅

**Fichier**: `/tmp/norte-reparos/client/src/components/OptimizedImage.tsx`

**Fonctionnalités ajoutées**:
- Support WebP avec fallback automatique
- Génération de srcset responsive (320w, 640w, 1024w, 1920w)
- Lazy loading intelligent avec IntersectionObserver
- Support des images CDN manuscdn.com avec paramètres de redimensionnement
- Dimensions explicites (width/height) pour éviter CLS (Cumulative Layout Shift)
- Placeholder animé pendant le chargement
- Gestion d'erreurs avec image de fallback
- Paramètre `priority` pour les images LCP critiques
- Paramètre `sizes` personnalisable pour le responsive

**Utilisation**:
```tsx
<OptimizedImage
  src="/images/hero.jpg"
  alt="Description de l'image"
  width={1920}
  height={1080}
  priority={true}  // Pour les images above-the-fold
  sizes="100vw"    // Pour les images pleine largeur
/>
```

### 2. Composants Mis à Jour ✅

#### ServicesSlider.tsx
- Remplacement de `<img>` par `<OptimizedImage>`
- Ajout de dimensions explicites (1200x400)
- Priority=true pour la première slide (LCP)
- Alt text amélioré avec contexte géographique

#### CompanyInfo.tsx
- Remplacement de `<img>` par `<OptimizedImage>`
- Dimensions explicites (600x400)
- Lazy loading automatique

#### OptimizedServices.tsx
- Remplacement de toutes les images de services
- Dimensions explicites (400x300)
- Sizes responsive adapté à la grille
- Lazy loading pour toutes les images de services

### 3. Configuration Vite Améliorée ✅

**Fichier**: `/tmp/norte-reparos/vite.config.ts`

**Ajouts**:
- Plugin `vitePluginImageOptimization()` pour la gestion des assets
- Configuration `assetsInlineLimit: 4096` (4kb) pour inline des petites images
- Préparation pour l'optimisation au build

### 4. Script d'Optimisation des Images ✅

**Fichier**: `/tmp/norte-reparos/scripts/optimize-images.js`

**Fonctionnalités**:
- Conversion automatique en WebP
- Génération de versions responsive (320w, 640w, 1024w, 1920w)
- Compression avec qualité 80
- Traitement récursif de tous les dossiers
- Ne pas upscaler les images (préserve la qualité)

**Utilisation**:
```bash
# Installer sharp (requis)
npm install --save-dev sharp

# Exécuter le script
node scripts/optimize-images.js
```

## Images Identifiées

### Images CDN manuscdn.com (Optimisées automatiquement)
- ServicesSlider: 4 images plomberie + 4 images électricité
- CompanyInfo: 1 image service urgence 24h

### Images Locales
```
/client/public/images/
├── background/
│   ├── background-water.png
│   └── background-energy.png
├── hero/
│   ├── hero-plumber-portugal.png
│   └── hero-electrician-portugal.png
├── services/
│   ├── service-desentupimentos.png
│   ├── service-iluminacao.png
│   ├── service-urgencia.png
│   ├── service-sala-banho.png
│   ├── service-aquecimento.png
│   ├── service-certificacao.png
│   ├── service-instalacao.png
│   └── service-quadro-eletrico.png
├── team/
│   ├── rui-heating.jpg
│   └── joao-plumber.jpg
└── [autres images]
```

### Images Déjà Optimisées
```
/client/public/images-optimized/
├── hero/
│   ├── hero-plumber-portugal.jpg
│   └── hero-electrician-portugal.jpg
├── services/
│   ├── service-desentupimentos.jpg
│   ├── service-iluminacao.jpg
│   ├── service-urgencia.jpg
│   ├── service-sala-banho.jpg
│   ├── service-certificacao.jpg
│   ├── service-aquecimento.jpg
│   ├── service-instalacao.jpg
│   └── service-quadro-eletrico.jpg
└── background/
    ├── background-water.jpg
    └── background-energy.jpg
```

## Composants Restants à Optimiser

### Priorité HAUTE (LCP Critique)

1. **Hero.tsx** - Image de fond hero
   - Ligne 19: `backgroundImage: url(${config.hero.backgroundImage})`
   - Action: Remplacer par OptimizedImage ou utiliser srcset

2. **OptimizedHero.tsx** - Image hero optimisée
   - Ligne 14: `backgroundImage: 'url(/images-optimized/hero/hero-plumber-portugal.jpg)'`
   - Action: Ajouter preload et srcset

3. **CityPage.tsx** - Images hero des pages villes
   - Ligne 75: `backgroundImage: url(${heroImage})`
   - Action: Remplacer par OptimizedImage

### Priorité MOYENNE

4. **Pages cidades/** (40+ fichiers)
   - Toutes utilisent: `url('/images-optimized/hero/hero-plumber-portugal.jpg')`
   - Action: Créer un composant CityHero réutilisable avec OptimizedImage

5. **Blog pages** - Images d'articles
   - BlogCard.tsx et pages individuelles
   - Action: Audit et remplacement par OptimizedImage

### Priorité BASSE

6. **ComponentShowcase.tsx** - Images de démonstration
   - Avatar: `https://github.com/shadcn.png`
   - Action: Laisser tel quel (externe)

## Prochaines Étapes

### Étape 1: Générer les Images WebP
```bash
# Installer sharp si pas déjà fait
npm install --save-dev sharp

# Exécuter le script d'optimisation
node scripts/optimize-images.js
```

### Étape 2: Remplacer les Images Hero
```tsx
// Dans Hero.tsx
import OptimizedImage from './OptimizedImage';

// Remplacer le background-image par:
<div className="absolute inset-0">
  <OptimizedImage
    src={config.hero.backgroundImage}
    alt="Hero background"
    priority={true}
    sizes="100vw"
    className="w-full h-full"
    objectFit="cover"
  />
</div>
```

### Étape 3: Créer un Composant CityHero
```tsx
// client/src/components/CityHero.tsx
import OptimizedImage from './OptimizedImage';

export default function CityHero({ city, config }) {
  return (
    <section className="relative bg-gray-900 py-20">
      <OptimizedImage
        src="/images-optimized/hero/hero-plumber-portugal.jpg"
        alt={`Canalizador em ${city.name}`}
        priority={true}
        sizes="100vw"
        className="absolute inset-0 opacity-40"
        objectFit="cover"
      />
      {/* Contenu hero */}
    </section>
  );
}
```

### Étape 4: Mettre à Jour package.json
```json
{
  "scripts": {
    "optimize-images": "node scripts/optimize-images.js",
    "prebuild": "npm run optimize-images"
  },
  "devDependencies": {
    "sharp": "^0.33.0"
  }
}
```

## Métriques d'Amélioration Attendues

### Core Web Vitals

**LCP (Largest Contentful Paint)**:
- Avant: ~3-4s (images non optimisées)
- Après: ~1.5-2s (WebP + srcset + preload)
- Amélioration: **50-60%**

**CLS (Cumulative Layout Shift)**:
- Avant: 0.1-0.2 (pas de dimensions explicites)
- Après: <0.05 (width/height définis)
- Amélioration: **75%**

**FID (First Input Delay)**:
- Impact minimal mais positif grâce au lazy loading

### Taille des Fichiers

**Format WebP vs JPEG/PNG**:
- Réduction moyenne: **25-35%**
- Hero images: 500KB → 150KB
- Service images: 200KB → 60KB

**Srcset Responsive**:
- Mobile (320w): ~20KB au lieu de 500KB
- Tablet (640w): ~50KB au lieu de 500KB
- Desktop (1920w): ~150KB (WebP optimisé)

### Bande Passante

**Économie totale par page**:
- Page d'accueil: ~2MB → ~600KB (**70% de réduction**)
- Pages villes: ~1.5MB → ~400KB (**73% de réduction**)

## Checklist de Validation

- [x] OptimizedImage.tsx créé avec support WebP + srcset
- [x] ServicesSlider.tsx mis à jour
- [x] CompanyInfo.tsx mis à jour
- [x] OptimizedServices.tsx mis à jour
- [x] Script optimize-images.js créé
- [x] Vite config mis à jour
- [ ] Hero.tsx à mettre à jour
- [ ] OptimizedHero.tsx à améliorer
- [ ] CityPage.tsx à mettre à jour
- [ ] Créer composant CityHero réutilisable
- [ ] Mettre à jour toutes les pages cidades/
- [ ] Exécuter script d'optimisation
- [ ] Installer sharp en devDependency
- [ ] Tester sur mobile/tablet/desktop
- [ ] Valider Core Web Vitals avec Lighthouse

## Notes Techniques

### Support Navigateurs
- WebP: 97%+ des navigateurs (fallback automatique pour les anciens)
- Srcset: 98%+ des navigateurs
- IntersectionObserver: 95%+ (polyfill non nécessaire)

### CDN manuscdn.com
Le composant OptimizedImage détecte automatiquement les URLs manuscdn.com et utilise leurs paramètres de redimensionnement natifs:
```
?x-oss-process=image/resize,w_640/format,webp/quality,q_80
```

### Images SVG
Les fichiers SVG (logos, icônes) ne nécessitent pas d'optimisation WebP et sont laissés tels quels.

## Conclusion

L'optimisation des images est **partiellement complétée**. Les composants principaux utilisent maintenant OptimizedImage avec support WebP et srcset responsive. Les prochaines étapes consistent à:

1. Exécuter le script d'optimisation pour générer les versions WebP
2. Remplacer les images hero dans les composants restants
3. Créer un composant CityHero réutilisable
4. Valider les améliorations avec Lighthouse

**Impact estimé**: Amélioration de 50-70% des Core Web Vitals et réduction de 70% de la bande passante.
