# Guide d'Optimisation des Images - Norte Reparos

## Installation

```bash
# Installer sharp pour l'optimisation des images
npm install --save-dev sharp

# Ou avec pnpm
pnpm add -D sharp
```

## Utilisation du Composant OptimizedImage

### Exemple Basique

```tsx
import OptimizedImage from '@/components/OptimizedImage';

<OptimizedImage
  src="/images/hero.jpg"
  alt="Description de l'image"
  width={1920}
  height={1080}
/>
```

### Image Prioritaire (LCP)

Pour les images "above-the-fold" critiques pour le LCP:

```tsx
<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero image"
  width={1920}
  height={1080}
  priority={true}  // Désactive lazy loading, charge immédiatement
  sizes="100vw"    // Image pleine largeur
/>
```

### Image dans une Grille Responsive

```tsx
<OptimizedImage
  src="/images/service.jpg"
  alt="Service de canalização"
  width={400}
  height={300}
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### Image CDN manuscdn.com

Le composant détecte automatiquement les URLs manuscdn et applique les optimisations:

```tsx
<OptimizedImage
  src="https://private-us-east-1.manuscdn.com/sessionFile/..."
  alt="Image depuis CDN"
  width={800}
  height={600}
/>
```

## Génération des Images Optimisées

### Script Automatique

```bash
# Générer toutes les versions WebP et responsive
npm run optimize-images

# Le script traite automatiquement:
# - Conversion en WebP (qualité 80)
# - Génération de 4 tailles: 320w, 640w, 1024w, 1920w
# - Préservation de la qualité (pas d'upscaling)
```

### Structure de Sortie

```
client/public/images-optimized/
├── hero/
│   ├── hero-plumber-portugal.webp
│   ├── hero-plumber-portugal-320w.webp
│   ├── hero-plumber-portugal-640w.webp
│   ├── hero-plumber-portugal-1024w.webp
│   └── hero-plumber-portugal-1920w.webp
└── services/
    ├── service-desentupimentos.webp
    ├── service-desentupimentos-320w.webp
    └── ...
```

## Composant CityHero

Pour les pages de villes, utilisez le composant réutilisable:

```tsx
import CityHero from '@/components/CityHero';

<CityHero
  cityName={city.name}
  phone={config.phone}
  interventionsCount={500}
  onPhoneClick={handlePhoneClick}
  serviceName={config.name}
/>
```

## Paramètres du Composant OptimizedImage

| Paramètre | Type | Défaut | Description |
|-----------|------|--------|-------------|
| `src` | string | - | URL de l'image (locale ou CDN) |
| `alt` | string | - | Texte alternatif (obligatoire) |
| `width` | number | - | Largeur en pixels |
| `height` | number | - | Hauteur en pixels |
| `priority` | boolean | false | Charge immédiatement (pour LCP) |
| `objectFit` | string | 'cover' | Mode d'ajustement CSS |
| `sizes` | string | '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw' | Attribut sizes pour srcset |
| `className` | string | '' | Classes CSS additionnelles |

## Bonnes Pratiques

### 1. Toujours Définir width et height

```tsx
// ✅ BON - Évite le CLS
<OptimizedImage
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
/>

// ❌ MAUVAIS - Peut causer du CLS
<OptimizedImage
  src="/image.jpg"
  alt="Description"
/>
```

### 2. Utiliser priority pour les Images LCP

```tsx
// ✅ BON - Hero image (LCP)
<OptimizedImage
  src="/hero.jpg"
  alt="Hero"
  priority={true}
  sizes="100vw"
/>

// ✅ BON - Images en dessous du fold
<OptimizedImage
  src="/service.jpg"
  alt="Service"
  priority={false}  // ou omis (défaut)
/>
```

### 3. Adapter sizes au Layout

```tsx
// Image pleine largeur
sizes="100vw"

// Image dans une grille 3 colonnes
sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"

// Image sidebar (25% de la largeur)
sizes="(max-width: 768px) 100vw, 25vw"
```

### 4. Alt Text Descriptif

```tsx
// ✅ BON - Descriptif et contextualisé
<OptimizedImage
  src="/plumber.jpg"
  alt="Canalizador profissional reparando fuga de água em Vila Real"
/>

// ❌ MAUVAIS - Trop générique
<OptimizedImage
  src="/plumber.jpg"
  alt="Image"
/>
```

## Migration des Composants Existants

### Avant (img standard)

```tsx
<img
  src="/images/hero.jpg"
  alt="Hero"
  className="w-full h-full object-cover"
  loading="lazy"
/>
```

### Après (OptimizedImage)

```tsx
<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  className="w-full h-full"
  objectFit="cover"
/>
```

### Avant (background-image CSS)

```tsx
<div
  className="hero"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  {/* contenu */}
</div>
```

### Après (OptimizedImage)

```tsx
<div className="relative hero">
  <OptimizedImage
    src={heroImage}
    alt="Hero background"
    width={1920}
    height={1080}
    priority={true}
    sizes="100vw"
    className="absolute inset-0"
    objectFit="cover"
  />
  <div className="relative z-10">
    {/* contenu */}
  </div>
</div>
```

## Performance

### Gains Attendus

- **LCP**: Amélioration de 50-60% (WebP + srcset + preload)
- **CLS**: Réduction de 75% (dimensions explicites)
- **Bande passante**: Réduction de 70% (WebP + responsive)

### Exemple Concret

| Appareil | Avant | Après | Économie |
|----------|-------|-------|----------|
| Mobile | 500KB (JPEG 1920w) | 20KB (WebP 320w) | 96% |
| Tablet | 500KB (JPEG 1920w) | 50KB (WebP 640w) | 90% |
| Desktop | 500KB (JPEG 1920w) | 150KB (WebP 1920w) | 70% |

## Dépannage

### Images ne se chargent pas

Vérifiez que les fichiers WebP existent:
```bash
ls -la client/public/images-optimized/
```

Si manquants, exécutez:
```bash
npm run optimize-images
```

### Erreur "sharp not found"

Installez sharp:
```bash
npm install --save-dev sharp
```

### Images floues sur mobile

Vérifiez l'attribut `sizes`:
```tsx
// Assurez-vous que sizes correspond au layout
sizes="(max-width: 640px) 100vw, 50vw"
```

## Checklist de Migration

- [ ] Installer sharp: `npm install -D sharp`
- [ ] Exécuter optimize-images: `npm run optimize-images`
- [ ] Remplacer les `<img>` par `<OptimizedImage>` dans:
  - [ ] Hero.tsx
  - [ ] ServicesSlider.tsx ✅
  - [ ] CompanyInfo.tsx ✅
  - [ ] OptimizedServices.tsx ✅
  - [ ] CityPage.tsx
  - [ ] Pages cidades/ (utiliser CityHero)
  - [ ] Blog pages
- [ ] Ajouter width/height à toutes les images
- [ ] Définir priority=true pour les images LCP
- [ ] Tester sur mobile/tablet/desktop
- [ ] Valider avec Lighthouse (score > 90)

## Support

Pour toute question ou problème, consultez:
- Documentation OptimizedImage.tsx
- Rapport d'optimisation: OPTIMISATION_IMAGES_RAPPORT.md
