// Configuration for Norte-Reparos
// Zone d'intervention : rayon de 100 km autour de Macedo de Cavaleiros, district de Bragança, Portugal
// Sites en portugais uniquement — Tarifs sem IVA

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

  // Real Stories (Interventions)
  stories: Array<{
    title: string;
    location: string;
    situation: string;
    emotion: string;
    solution: string;
  }>;

  // Team / Avatars
  team: Array<{
    name: string;
    role: string;
    location: string;
    bio: string;
    quote: string;
    image: string; // path to image
  }>;

  // Pricing Zones
  pricingZones: Array<{
    name: string;
    cities: string;
    price: string;
    time: string;
  }>;
  
  // Testimonials
  testimonials: Array<{
    id: string;
    name: string;
    location: string;
    service: string;
    text: string;
    rating: number;
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
}

export const siteConfig: SiteConfig = {
  id: 'norte-reparos',
  name: 'Canalizador Profissional',
  title: 'Canalizador Urgente Trás-os-Montes 💧 24h | 928 484 451',
  description: 'Fuga de água ou entupimento? Chegamos em menos de 1h em Bragança, Macedo, Mirandela e Vila Real. Orçamento sem compromisso. Ligue agora: 928 484 451',
  phone: '928 484 451',
  whatsapp: '351928484451',
  whatsappMessage: 'Olá, preciso de um canalizador em Trás-os-Montes. Podem dar-me um orçamento?',
  email: 'info@canalizador-norte-reparos.pt',
  serviceType: 'Canalizador',
  domain: 'canalizador-norte-reparos.pt',
  
  colors: {
    primary: '#1e40af', // Blue 700
    primaryDark: '#1e3a8a', // Blue 900
    primaryLight: '#3b82f6', // Blue 500
    accent: '#dc2626', // Red 600 for urgent CTAs
  },
  
  hero: {
    title: 'Água a Pingar? Cano Rebentado?',
    subtitle: 'Canalizador em Bragança em 40 Minutos — 24h/7d. Sem quebrar azulejos. Preço dito antes de sair. Relatório para seguro incluído.',
    backgroundImage: '/images-optimized/hero/hero-plumber-portugal.jpg',
    ogImage: '/images-optimized/hero/hero-plumber-portugal.jpg',
  },
  
  services: [
    { id: 'fuga-agua', label: 'Reparação Fuga Água', basePrice: 80 },
    { id: 'desentupimento', label: 'Desentupimento', basePrice: 60 },
    { id: 'esquentador', label: 'Instalação Esquentador', basePrice: 150 },
    { id: 'substituicao', label: 'Substituição Canalização', basePrice: 120 },
  ],

  stories: [
    {
      title: "A Fuga Silenciosa",
      location: "Chaves",
      situation: "Mancha de humidade a crescer no teto da sala.",
      emotion: "Stress com os danos, medo do custo das obras.",
      solution: "Deteção térmica sem partir a parede. Reparação localizada."
    },
    {
      title: "A Água Gelada",
      location: "Miranda do Douro - Inverno",
      situation: "-4°C lá fora, o esquentador não arranca. Sem água quente para o banho dos miúdos.",
      emotion: "Urgência vital, desconforto, culpa pelos filhos.",
      solution: "Substituição do termopar ou desentupimento do injetor piloto. Intervenção prioritária."
    },
    {
      title: "O Lava-Loiça Entupido da Avó",
      location: "Valpaços",
      situation: "A água não escoa de todo, cheiro nauseabundo.",
      emotion: "Vergonha, impotência.",
      solution: "\"Dona Maria, acontece a toda a gente. Passamos o furet, limpamos, e fica resolvido em 15 min.\""
    },
    {
      title: "A Torneira que Pinga à Noite",
      location: "Mogadouro",
      situation: "Ploc... ploc... ploc... impossível dormir.",
      emotion: "Irritação, cansaço nervoso.",
      solution: "Troca das juntas cerâmicas. Silêncio restabelecido."
    }
  ],

  team: [],

  pricingZones: [
    { name: "Zona 1 (Sede)", cities: "Macedo de Cavaleiros e concelho", price: "15€", time: "< 30 min" },
    { name: "Zona 2 (Próximo)", cities: "Vila Flor, Alfândega da Fé, Mirandela, Carrazeda de Ansiães", price: "20€", time: "< 40 min" },
    { name: "Zona 3 (Distrito Bragança)", cities: "Bragança, Vinhais, Vimioso, Torre de Moncorvo, Mogadouro, Freixo de Espada à Cinta", price: "30€", time: "< 60 min" },
    { name: "Zona 4 (Miranda / Douro)", cities: "Miranda do Douro, Vila Nova de Foz Côa, São João da Pesqueira, Murça, Valpaços", price: "35€", time: "45-75 min" },
    { name: "Zona 5 (Vila Real / Douro)", cities: "Vila Real, Alijó, Sabrosa, Tabuaço, Armamar, Peso da Régua, Lamego, Santa Marta de Penaguião, Mesão Frio", price: "45€", time: "60-90 min" },
    { name: "Zona 6 (Limite 100km)", cities: "Chaves, Vila Pouca de Aguiar, Boticas, Montalegre, Ribeira de Pena, Mondim de Basto, Moimenta da Beira, Sernancelhe, Penedono", price: "50€", time: "Sob marcação" },
  ],
  
  testimonials: [
    {
      id: '1',
      name: 'João Silva',
      location: 'Bragança',
      service: 'Reparação Fuga de Água',
      text: 'Tive uma fuga de água grave às 23h e liguei em desespero. Chegaram em 25 minutos! Resolveram o problema rapidamente e o preço foi justo. Profissionais de confiança, recomendo sem hesitar.',
      rating: 5,
    },
    {
      id: '2',
      name: 'Maria Santos',
      location: 'Mirandela',
      service: 'Desentupimento WC',
      text: 'O WC entupiu num domingo e pensei que ia ter de esperar até segunda. Mas eles vieram no próprio dia! Muito simpáticos e eficientes. Deixaram tudo limpo. Excelente serviço!',
      rating: 5,
    },
    {
      id: '3',
      name: 'António Rodrigues',
      location: 'Macedo de Cavaleiros',
      service: 'Instalação Esquentador',
      text: 'Instalaram o esquentador novo com toda a certificação necessária. Explicaram tudo muito bem e deram dicas de manutenção. Trabalho impecável. Já os recomendei a 3 amigos.',
      rating: 5,
    },
  ],
  
  company: {
    fullName: 'Canalizador Profissional — Canalizador Profissional',
    shortDescription: 'Canalizador profissional ao seu serviço em Trás-os-Montes.',
    longDescription: 'A Canalizador Profissional presta serviços de canalização profissional em toda a região de Trás-os-Montes. Instalação, assistência e manutenção técnica de canalizações, com deslocação ao domicílio dos clientes, todos os dias do ano, incluindo fins de semana e feriados.',
    coverage: 'Trás-os-Montes — Distrito de Bragança e região',
    yearEstablished: '2015',
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
      // Mots-clés longue traîne SEO plomberie
      'desentupimento urgente bragança', 'canalizador 24 horas mirandela', 'fuga de água urgente',
      'cano entupido macedo de cavaleiros', 'reparação caldeira trás-os-montes',
      'desentupir sanita preço', 'canalizador perto de mim bragança',
      'desentupimento esgotos bragança', 'reparação autoclismo',
      'canalizador urgente chaves', 'desentupimento sanitário mirandela',
      'fuga água parede bragança', 'reparação esquentador vila real',
      'canalizador emergência 24h', 'desentupimento urgente domingo',
      'canalizador barato trás-os-montes', 'reparação canalização antiga',
      'desentupimento pia cozinha', 'canalizador para aldeias remotas'
    ],
    ogImage: '/images-optimized/hero/hero-plumber-portugal.jpg',
  },
};

// Helper function to get current site config
export function getCurrentSiteConfig(): SiteConfig {
  return siteConfig;
}
