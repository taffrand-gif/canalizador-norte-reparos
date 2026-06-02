// Configuração para Norte-Reparos - Canalizador
// Site canalizador-norte-reparos.pt
// Preços sem IVA - Grille tarifaire Z1-Z6

export type SiteId = 'norte-reparos';

export interface SiteConfig {
  id: SiteId;
  name: string;
  title: string;
  description: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  serviceType: string;
  domain: string;

  // Design tokens
  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    accent: string;
  };

  // Hero section
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ogImage: string;
  };

  // Services for calculator
  services: Array<{
    id: string;
    label: string;
    basePrice: number;
  }>;

  // Pricing Zones - Grille definitive 70 localités
  pricingZones: Array<{
    zone: string;
    name: string;
    cities: string;
    price: string;
  }>;

  // Company info
  company: {
    fullName: string;
    shortDescription: string;
    longDescription: string;
    coverage: string;
    yearEstablished: string;
  };

  // SEO
  seo: {
    keywords: string[];
    ogImage: string;
  };

  // Testimonials for social proof
  testimonials: Array<{
    id: string;
    name: string;
    location: string;
    service: string;
    rating: number;
    text: string;
  }>;

  // Real stories / case studies
  stories: Array<{
    title: string;
    location: string;
    situation: string;
    emotion: string;
    solution: string;
  }>;

  // Service metadata for dynamic routing
  serviceName: string;
  serviceSlug: string;
}

// Grille tarifaire definitive (mémoriser)
// Z1: 0-30km → deslocação 15€ | desde 80€
// Z2: 31-41km → deslocação 25€ | desde 90€
// Z3: 42-79km → deslocação 45€ | desde 110€
// Z4: 80-99km → deslocação 55€ | desde 120€
// Z5: 100-119km → deslocação 65€ | desde 130€
// Z6: 120km+ → deslocação 75€ | desde 140€

export const siteConfig: SiteConfig = {
  id: 'norte-reparos',
  name: 'Canalizador Profissional',
  title: 'Canalizador em Trás-os-Montes | Norte Reparos — Serviço ao Domicílio 24h',
  description: 'Canalizador profissional ao seu domicílio em Trás-os-Montes. Fugas de água, desentupimentos, urgências 24h. Orçamento gratuito. Ligue 928 484 451.',
  phone: '928 484 451',
  whatsapp: '351928484451',
  whatsappMessage: 'Olá, preciso de um canalizador em Trás-os-Montes. Podem dar-me um orçamento?',
  email: 'info@canalizador-norte-reparos.pt',
  serviceType: 'Canalizador',
  domain: 'canalizador-norte-reparos.pt',

  colors: {
    primary: '#1e3a8a',
    primaryDark: '#1e293b',
    primaryLight: '#1e40af',
    accent: '#b91c1c',
  },

  hero: {
    title: 'Água a Pingar? Cano Rebentado?',
    subtitle: 'Serviço ao domicílio em Trás-os-Montes — 24h/7d. Sem quebrar azulejos. Preço dito antes de sair.',
    backgroundImage: '/images-optimized/hero/hero-plumber-portugal.jpg',
    ogImage: '/images-optimized/hero/hero-plumber-portugal.jpg'
  },

  services: [
    { id: 'fuga-agua', label: 'Arranjo Fuga Água', basePrice: 80 },
    { id: 'desentupimento', label: 'Desentupimento', basePrice: 60 },
    { id: 'esquentador', label: 'Instalação Esquentador', basePrice: 150 },
    { id: 'substituicao', label: 'Substituição Canalização', basePrice: 120 },
  ],

  // Pricing Zones - 70 localités avec tarifs locaux
  pricingZones: [
    // Z1 - Macedo de Cavaleiros + 2km
    { zone: 'Z1', name: 'Macedo de Cavaleiros', cities: 'Macedo de Cavaleiros, Torre de Dona Chama, Mirandela', price: '80€' },
    // Z2 - 31-41km
    { zone: 'Z2', name: 'Zona 2', cities: 'Alfândega da Fé, Izeda, Vila Flor', price: '90€' },
    // Z3 - 42-79km
    { zone: 'Z3', name: 'Zona 3', cities: 'Bragança, Valpaços, Mogadouro, Vinhais, Carrazeda de Ansiães, Torre de Moncorvo, Murça, Vila Nova de Foz Côa, Vimioso, Carrazedo de Montenegro, Argozelo, Vilarandelo, Freixo de Numão, Alijó, Chaves, Sanfins do Douro, Sendim, Santo Estêvão, Favaios', price: '110€' },
    // Z4 - 80-99km
    { zone: 'Z4', name: 'Zona 4', cities: 'Mouçós, São João da Pesqueira, Sabrosa, Almendra, Vidago, Mêda, Vila Real, Lordelo, Marialva, Cedovim, Vila Pouca de Aguiar, São Martinho de Anta, Pinhão, Miranda do Douro, Cumieira, Freixo de Espada à Cinta, Pedras Salgadas, Trevões, Penedono, Peso da Régua, Boticas, Figueira de Castelo Rodrigo', price: '120€' },
    // Z5 - 100-119km
    { zone: 'Z5', name: 'Zona 5', cities: 'Valdigem, Santa Marta de Penaguião, Ervedosa do Douro, Cambres, Tabuaço, Pinhel, Britiande, Lamego, Armamar, Montalegre, Mesão Frio, Sernancelhe, Lalim, Vila Franca das Naves, Tarouca, Lazarim, Mondim da Beira, São Cosmado, Ribeira de Pena', price: '130€' },
    // Z6 - 120km+
    { zone: 'Z6', name: 'Zona 6', cities: 'São João de Tarouca, Salzedas, Aguiar da Beira', price: '140€' },
  ],

  company: {
    fullName: 'Canalizador Profissional',
    shortDescription: 'Serviço de canalização ao seu domicílio em Trás-os-Montes. Não temos loja — vamos até si.',
    longDescription: 'A Norte Reparos é uma empresa de canalizações que serve toda a região de Trás-os-Montes e Norte de Portugal. Com mais de 10 anos de experiência no terreno, intervimos ao seu domicílio com equipamento profissional de diagnóstico — câmara térmica FLIR, câmara endoscópica de 30 metros e ferramentas calibradas Ridgid. Não temos loja — vamos até si. A sua zona é a nossa zona de trabalho.',
    coverage: 'Trás-os-Montes — Distrito de Bragança, Vila Real, Guarda e Viseu',
    yearEstablished: '2015'
  },

  seo: {
    keywords: [
      'canalizador bragança', 'canalizador mirandela', 'canalizador macedo de cavaleiros',
      'canalizador urgente bragança', 'canalizador 24 horas mirandela', 'canalizador chaves',
      'canalizador vila real', 'canalizador vinhais', 'canalizador miranda do douro',
      'canalizador mogadouro', 'canalizador torre de moncorvo', 'canalizador trás-os-montes',
      'desentupimento bragança', 'desentupimento mirandela', 'desentupir sanita bragança',
      'desentupir wc mirandela', 'fuga de água bragança', 'fuga água urgente mirandela',
      'esquentador bragança', 'esquentador mirandela', 'sanita entupida', 'wc entupido',
      'cano rebentado', 'canalizador profissional trás-os-montes',
      'desentupimento urgente bragança', 'canalizador 24 horas mirandela', 'fuga de água urgente',
      'cano entupido macedo de cavaleiros', 'arranjo caldeira trás-os-montes',
      'desentupir sanita preço', 'canalizador perto de mim bragança',
      'desentupimento esgotos bragança', 'arranjo autoclismo',
      'canalizador urgente chaves', 'desentupimento sanitário mirandela',
      'fuga água parede bragança', 'arranjo esquentador vila real',
      'canalizador emergência 24h', 'desentupimento urgente domingo',
      'canalizador barato trás-os-montes', 'arranjo canalização antiga',
      'desentupimento pia cozinha', 'canalizador para aldeias remotas'
    ],
    ogImage: '/images-optimized/hero/hero-plumber-portugal.jpg'
  },

  // Service routing metadata
  serviceName: 'Canalizador',
  serviceSlug: 'canalizador',

  // Testimonials for Testimonials component
  testimonials: [
    { id: '1', name: 'António Santos', location: 'Bragança', service: 'Desentupimento', rating: 5, text: 'Resolveu o entupimento rapidamente. Profissional e eficiente.' },
    { id: '2', name: 'Maria Ferreira', location: 'Mirandela', service: 'Arranjo Fuga', rating: 5, text: 'Fuga de água resolvida no mesmo dia. Muito satisfeito.' },
    { id: '3', name: 'João Costa', location: 'Vila Real', service: 'Esquentador', rating: 5, text: 'Instalou o esquentador novo. Trabalho limpo e preço justo.' },
    { id: '4', name: 'Rosa Marques', location: 'Chaves', service: 'Canalização', rating: 5, text: 'Profissional confiável. Já recorri várias vezes.' },
    { id: '5', name: 'Pedro Almeida', location: 'Macedo de Cavaleiros', service: 'Urgência', rating: 5, text: 'Cano rebentou à meia-noite e veio rapidamente. Excelente serviço.' },
    { id: '6', name: 'Ana Rodrigues', location: 'Valpaços', service: 'Manutenção', rating: 5, text: 'Manutenção preventiva bem feita. Recomendo.' },
  ],

  // Real stories for RealStories component
  stories: [
    {
      title: 'Fuga de água às 3h da manhã',
      location: 'Bragança',
      situation: 'Cliente acordou com água a inundar a cozinha. Não sabia onde estava a fuga.',
      emotion: 'Pânico total às 3h da manhã',
      solution: 'Chegámos em 40 minutos, detetámos a fuga com câmara e reparámos sem quebrar azulejos.'
    },
    {
      title: 'Esquentador parado em pleno inverno',
      location: 'Mirandela',
      situation: 'Família de 4 pessoas sem água quente a -5°C.',
      emotion: 'Urgência extrema com crianças pequenas',
      solution: 'Diagnóstico rápido, peça substituída e água quente restaurada em 2 horas.'
    },
    {
      title: 'Entupimento crítico no restaurante',
      location: 'Vila Real',
      situation: 'Canos da cozinha totalmente entupidos. Restaurante encerrado.',
      emotion: 'Prejuízo enorme a cada hora fechada',
      solution: 'Máquina profissional Ridgid utilizada. Cano desobstruído em 1h. Restaurante abriu no dia seguinte.'
    }
  ]
};

// Helper function to get local price by zone
export function getLocalPrice(zone: string): string {
  const zoneData = siteConfig.pricingZones.find(z => z.zone === zone);
  return zoneData ? zoneData.price : '80€';
}

// Helper function to get zone for a city
export function getZoneForCity(cityName: string): string {
  const lowerCity = cityName.toLowerCase();
  const zoneMap: Record<string, string> = {
    // Z1
    'macedo de cavaleiros': 'Z1', 'torre de dona chama': 'Z1', 'mirandela': 'Z1',
    // Z2
    'alfândega da fé': 'Z2', 'izeda': 'Z2', 'vila flor': 'Z2',
    // Z3
    'bragança': 'Z3', 'valpaços': 'Z3', 'mogadouro': 'Z3', 'vinhais': 'Z3',
    'carrazeda de ansiães': 'Z3', 'torre de moncorvo': 'Z3', 'murça': 'Z3',
    'vilarandelo': 'Z3', 'vila nova de foz côa': 'Z3', 'vimioso': 'Z3',
    'carrazedo de montenegro': 'Z3', 'argozelo': 'Z3', 'freixo de numão': 'Z3',
    'alijó': 'Z3', 'chaves': 'Z3', 'sanfins do douro': 'Z3', 'sendim': 'Z3',
    'santo estêvão': 'Z3', 'favaios': 'Z3',
    // Z4
    'mouçós': 'Z4', 'são joão da pesqueira': 'Z4', 'sabrosa': 'Z4',
    'almendra': 'Z4', 'vidago': 'Z4', 'mêda': 'Z4', 'vila real': 'Z4',
    'lordelo': 'Z4', 'marialva': 'Z4', 'cedovim': 'Z4', 'vila pouca de aguiar': 'Z4',
    'são martinho de anta': 'Z4', 'pinhão': 'Z4', 'miranda do douro': 'Z4',
    'cumieira': 'Z4', 'freixo de espada à cinta': 'Z4', 'pedras salgadas': 'Z4',
    'trevões': 'Z4', 'penedono': 'Z4', 'peso da régua': 'Z4', 'boticas': 'Z4',
    'figueira de castelo rodrigo': 'Z4',
    // Z5
    'valdigem': 'Z5', 'santa marta de penaguião': 'Z5', 'ervedosa do douro': 'Z5',
    'cambres': 'Z5', 'tabuaço': 'Z5', 'pinhel': 'Z5', 'britiande': 'Z5',
    'lamego': 'Z5', 'armamar': 'Z5', 'montalegre': 'Z5', 'mesão frio': 'Z5',
    'sernancelhe': 'Z5', 'lalim': 'Z5', 'vila franca das navas': 'Z5',
    'tarouca': 'Z5', 'lazarim': 'Z5', 'mondim da beira': 'Z5',
    'são cosmado': 'Z5', 'ribeira de pena': 'Z5',
    // Z6
    'são joão de tarouca': 'Z6', 'salzedas': 'Z6', 'aguiar da beira': 'Z6',
  };
  return zoneMap[lowerCity] || 'Z3';
}

export function getCurrentSiteConfig(): SiteConfig {
  return siteConfig;
}