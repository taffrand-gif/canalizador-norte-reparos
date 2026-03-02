import { CITIES } from './serviceConfig';

export interface Service {
  slug: string;
  name: string;
  basePrice: number;
  icon: string;
  description: string;
}

export interface CityServicePage {
  citySlug: string;
  cityName: string;
  serviceSlug: string;
  serviceName: string;
  url: string;
  priority: number;
}

export const SERVICES_NORTE_REPAROS: Service[] = [
  {
    slug: 'fugas-agua',
    name: 'Fugas de Água',
    basePrice: 80,
    icon: '💧',
    description: 'Deteção e reparação de fugas de água com equipamento profissional'
  },
  {
    slug: 'desentupimentos',
    name: 'Desentupimentos',
    basePrice: 65,
    icon: '🚰',
    description: 'Desentupimento de canalizações, WC, lavatórios e esgotos'
  },
  {
    slug: 'esquentadores',
    name: 'Esquentadores',
    basePrice: 150,
    icon: '🔥',
    description: 'Instalação, reparação e manutenção de esquentadores'
  },
  {
    slug: 'casas-banho',
    name: 'Casas de Banho',
    basePrice: 400,
    icon: '🚿',
    description: 'Remodelação completa de casas de banho'
  },
  {
    slug: 'canalizacao',
    name: 'Canalização',
    basePrice: 500,
    icon: '🔧',
    description: 'Instalação de canalização nova e remodelações'
  },
];

// Generate all city × service combinations
export function generateCityServiceMatrix(): CityServicePage[] {
  const matrix: CityServicePage[] = [];

  CITIES.forEach(city => {
    SERVICES_NORTE_REPAROS.forEach(service => {
      matrix.push({
        citySlug: city.slug,
        cityName: city.name,
        serviceSlug: service.slug,
        serviceName: service.name,
        url: `/${service.slug}-${city.slug}`,
        priority: calculatePriority(city, service),
      });
    });
  });

  return matrix;
}

function calculatePriority(city: any, service: Service): number {
  let priority = 0.7;

  // Boost for major cities (no parentCity = main city)
  if (!city.parentCity) {
    priority += 0.1;
  }

  // Boost for high-demand services
  if (['fugas-agua', 'desentupimentos'].includes(service.slug)) {
    priority += 0.05;
  }

  // Extra boost for Bragança, Mirandela, Macedo
  if (['braganca', 'mirandela', 'macedo-de-cavaleiros'].includes(city.slug)) {
    priority += 0.05;
  }

  return Math.min(priority, 0.9);
}

export function getCityServiceData(serviceSlug: string, citySlug: string) {
  const city = CITIES.find(c => c.slug === citySlug);
  const service = SERVICES_NORTE_REPAROS.find(s => s.slug === serviceSlug);

  if (!city || !service) return null;

  return {
    city,
    service,
    url: `/${serviceSlug}-${citySlug}`,
    priority: calculatePriority(city, service),
  };
}
