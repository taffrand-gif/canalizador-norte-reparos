// Configuração para Norte-Reparos - Canalizador
// Site canalizador-norte-reparos.pt
// Preços sem IVA - NOVA GRELHA TARIFÁRIA 2026
// Grelha única: 70€/h + 30€ (dias úteis 9h–17h) · 100€/h + 50€ (noite, fins de semana, feriados)

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

 // Pricing Zones - NOVA GRELHA 2026
 pricingZones: Array<{
 zone: string;
 name: string;
 cities: string;
 price: string;
 time: string;
 }>;

 // Pricing config
 urgencyMultiplier: number; // fator mão de obra noite/fim de semana/feriado (100/70)
 hourlyRate: number; // 70€/h (dias úteis)

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

// GRELHA TARIFÁRIA 2026
// Grelha única 2026-09-23: dias úteis 9h–17h = 70€/h + deslocação 30€ ;
// noite (17h–9h), fins de semana, feriados = 100€/h + deslocação 50€. Cada hora começada é devida.

export const siteConfig: SiteConfig = {
 id: 'norte-reparos',
 name: 'Canalizador Profissional',
 title: 'Canalizador para instalação e remodelação em Trás-os-Montes | Norte Reparos',
 description: 'Canalizador para instalação e remodelação em Trás-os-Montes. Orçamento por escrito em 48h, garantia 1 ano. Bragança, Vila Real, Mirandela, Chaves.',
 phone: '928 484 451',
 whatsapp: '351928484451',
 whatsappMessage: 'Olá, preciso de um canalizador em Trás-os-Montes. Podem dar-me um orçamento?',
 email: 'contacto@canalizador-norte-reparos.pt',
 serviceType: 'Canalizador',
 domain: 'canalizador-norte-reparos.pt',
 colors: {
 primary: '#1e3a8a',
 primaryDark: '#1e293b',
 primaryLight: '#1e40af',
 accent: '#b91c1c',
 },

 hero: {
 title: 'Canalizador para instalação e remodelação — Trás-os-Montes',
 subtitle: 'Instalação, remodelação e projetos ao seu domicílio. Orçamento por escrito em 48h, garantia 1 ano.',
 backgroundImage: '/images-optimized/hero/hero-plumber-portugal.jpg',
 ogImage: '/images-optimized/hero/hero-plumber-portugal.jpg'
 },

 services: [
 { id: 'fuga-agua', label: 'Arranjo Fuga Água', basePrice: 70 },
 { id: 'desentupimento', label: 'Desentupimento', basePrice: 70 },
 { id: 'esquentador', label: 'Instalação Esquentador', basePrice: 70 },
 { id: 'substituicao', label: 'Substituição Canalização', basePrice: 70 },
 ],

 // Pricing Zones - NOVA GRELHA 2026
 pricingZones: [
 // Grelha única 2026-09-23 — deslocação independente da localidade
 { zone: 'DIA', name: 'Dias úteis 9h–17h', cities: 'Todas as localidades servidas', price: '30€', time: 'Mão de obra 70€/h' },
 { zone: 'NOITE', name: 'Noite (17h–9h), fins de semana e feriados', cities: 'Todas as localidades servidas', price: '50€', time: 'Mão de obra 100€/h' },
 ],

 // NOVO: Urgência + Taxa Horária
 urgencyMultiplier: 100 / 70, // 100€/h noite / fim de semana / feriado
 hourlyRate: 70, // 70€/h dias úteis

 company: {
 fullName: 'Canalizador Profissional',
 shortDescription: 'Serviço de canalização ao seu domicílio em Trás-os-Montes. Não temos loja — vamos até si.',
 longDescription: 'A Norte Reparos é uma empresa de canalizações que serve toda a região de Trás-os-Montes e Norte de Portugal. Com mais de 20 anos de experiência no terreno, intervimos ao seu domicílio com equipamento profissional de diagnóstico — câmara térmica FLIR, câmara endoscópica de 30 metros e ferramentas calibradas Ridgid. Não temos loja — vamos até si. A sua zona é a nossa zona de trabalho.',
 coverage: 'Trás-os-Montes — Distrito de Bragança, Vila Real, Guarda e Viseu',
 yearEstablished: '2015'
 },

 seo: {
 keywords: [
 'canalizador bragança', 'canalizador mirandela', 'canalizador macedo de cavaleiros',
 'canalizador instalação bragança', 'canalizador instalação mirandela', 'canalizador chaves',
 'canalizador vila real', 'canalizador vinhais', 'canalizador miranda do douro',
 'canalizador mogadouro', 'canalizador torre de moncorvo', 'canalizador trás-os-montes',
 'desentupimento bragança', 'desentupimento mirandela', 'desentupir sanita bragança',
 'desentupir wc mirandela', 'fuga de água bragança', 'fuga de água mirandela',
 'esquentador bragança', 'esquentador mirandela', 'sanita entupida', 'wc entupido',
 'cano rebentado', 'canalizador profissional trás-os-montes',
 'desentupimento canalização bragança', 'canalizador remodelação mirandela', 'reparação fuga de água',
 'cano entupido macedo de cavaleiros', 'arranjo caldeira trás-os-montes',
 'desentupir sanita preço', 'canalizador perto de mim bragança',
 'desentupimento esgotos bragança', 'arranjo autoclismo',
 'canalizador instalação chaves', 'desentupimento sanitário mirandela',
 'fuga água parede bragança', 'arranjo esquentador vila real',
 'orçamento canalizador trás-os-montes', 'desentupimento remodelação vila real',
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
 // R11 ZÉRO INVENTION — témoignages fictifs purgés 2026-07-01 (voir M5-AUDIT-AVIS-REELS-2026-07-01.md)
 ] as Array<{ id: string; name: string; location: string; service: string; rating: number; text: string }>,

 // Real stories for RealStories component
 stories: [
 {
 title: 'Fuga de água às 3h da manhã',
 location: 'Bragança',
 situation: 'Cliente acordou com água a inundar a cozinha. Não sabia onde estava a fuga.',
 emotion: 'Pânico total às 3h da manhã',
 solution: 'Chegámos Atendimento prioritário, detetámos a fuga com câmara e reparámos sem quebrar azulejos.'
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
 return zoneData ? zoneData.price : '30€';
}

// Helper function to get zone for a city
export function getZoneForCity(cityName: string): string {
 void cityName; // preço único: a deslocação não depende da localidade
 return 'DIA';
}

export function getCurrentSiteConfig(): SiteConfig {
 return siteConfig;
}
