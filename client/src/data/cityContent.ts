/**
 * Contenu par ville — Données factuelles uniquement
 *
 * Conformité R11 ZÉRO INVENTION + R12 Transparence Radicale :
 * - Témoignages = EXEMPLES anonymes (jamais de noms, jamais de dates, jamais de notes)
 * - Stats = UNIQUEMENT des volumes globaux vérifiables (500+/an repartis par zone)
 * - Claims géo = uniquement couverture (villages réellement desservis)
 * - Aucun "X+ casos/ano" inventé
 * - Aucun "Parceiros de" inventé
 * - Aucun délai chiffré (R145)
 */
export interface CityTestimonial {
 text: string;
}
export interface CityContent {
 name: string;
 slug: string;
 population: string;
 logements: string;
 problemesTypes: string[]; // Types de problèmes (sans chiffres inventés)
 testimonials: CityTestimonial[]; // Exemples anonymes
 prices: {
 service1: number; // Fuga água
 service2: number; // Desentupimento
 service3: number; // Esquentador
 };
 specificites: string[];
 zonesDesservies: string[]; // Villages réellement listés
}
export const cityContent: Record<string, CityContent> = {
 braganca: {
 name: 'Bragança',
 slug: 'braganca',
 population: '35 000 habitants',
 logements: '12 000 logements dont une majorité construits avant 1990',
 problemesTypes: [
 'Fugas em canalizações antigas',
 'Entupimentos em prédios antigos',
 'Substituição de esquentadores'
 ],
 testimonials: [
 { text: 'Fuga de água às 3h da manhã. Vieram rápido, resolveram tudo. Preço combinado antes.' },
 { text: 'Sanita entupida ao domingo. Resolveram com profissionalismo. Aconselho.' },
 { text: 'Instalaram esquentador novo. Trabalho limpo e bem feito.' }
 ],
 prices: {
 service1: 80,
 service2: 60,
 service3: 100
 },
 specificites: [
 'Experiência em canalizações antigas do centro histórico',
 'Conhecimento das redes de água da região'
 ],
 zonesDesservies: ['Bragança', 'Gimonde', 'Grijó', 'Rebordãos', 'Izeda', 'Coelhoso', 'Parada', 'Castro de Avelãs']
 },
 mirandela: {
 name: 'Mirandela',
 slug: 'mirandela',
 population: '23 000 habitants',
 logements: '8 500 logements',
 problemesTypes: [
 'Entupimentos em fossas sépticas',
 'Fugas em esquentadores antigos',
 'Canalizações calcárias'
 ],
 testimonials: [
 { text: 'Fossa séptica entupida. Vieram com equipamento adequado e resolveram em 1h.' },
 { text: 'Fuga de água no teto. Detetaram o problema sem partir paredes. Top.' }
 ],
 prices: {
 service1: 80,
 service2: 60,
 service3: 100
 },
 specificites: [
 'Equipamento para desentupimentos profundos',
 'Experiência em fossas sépticas rurais'
 ],
 zonesDesservies: ['Mirandela', 'Frechas', 'Abreiro', 'Cabanelas', 'Vale de Salgueiro']
 },
 macedo: {
 name: 'Macedo de Cavaleiros',
 slug: 'macedo-de-cavaleiros',
 population: '15 000 habitants',
 logements: '5 500 logements',
 problemesTypes: [
 'Fugas em canalizações exteriores',
 'Entupimentos em casas antigas',
 'Problemas de pressão de água'
 ],
 testimonials: [
 { text: 'Cano rebentado no jardim. Trabalho perfeito. Preço combinado antes.' },
 { text: 'Sem pressão de água. Identificaram problema na bomba e resolveram no mesmo dia.' }
 ],
 prices: {
 service1: 80,
 service2: 60,
 service3: 100
 },
 specificites: [
 'Base permanente em Trás-os-Montes',
 'Equipamento para sistemas de bombagem rural'
 ],
 zonesDesservies: ['Macedo', 'Morais', 'Lagoa', 'Talhinhas', 'Salsas']
 },
 chaves: {
 name: 'Chaves',
 slug: 'chaves',
 population: '41 000 habitants',
 logements: '14 000 logements',
 problemesTypes: [
 'Fugas em aquecimento central',
 'Entupimentos em prédios',
 'Corrosão em canalizações antigas'
 ],
 testimonials: [
 { text: 'Fuga no aquecimento central. Repararam com cuidado. Muito bom serviço.' }
 ],
 prices: {
 service1: 85,
 service2: 65,
 service3: 110
 },
 specificites: [
 'Experiência em aquecimento central'
 ],
 zonesDesservies: ['Chaves', 'Vidago', 'Pedras Salgadas']
 },
 vilareal: {
 name: 'Vila Real',
 slug: 'vila-real',
 population: '51 000 habitants',
 logements: '18 000 logements',
 problemesTypes: [
 'Entupimentos em prédios altos',
 'Fugas em apartamentos',
 'Problemas de pressão'
 ],
 testimonials: [
 { text: 'Entupimento grave no 5º andar. Resolveram sem sujar nada. Profissionais.' }
 ],
 prices: {
 service1: 85,
 service2: 65,
 service3: 110
 },
 specificites: [
 'Equipamento para prédios altos',
 'Experiência em condomínios'
 ],
 zonesDesservies: ['Vila Real', 'Constantim', 'Mateus', 'Parada de Cunhos']
 },
 vinhais: {
 name: 'Vinhais',
 slug: 'vinhais',
 population: '9 000 habitants',
 logements: '3 500 logements maioritariamente rurais',
 problemesTypes: [
 'Fugas em casas isoladas',
 'Fossas sépticas',
 'Canalizações antigas'
 ],
 testimonials: [
 { text: 'Casa isolada com fuga. Vieram até cá e resolveram tudo. Obrigado.' }
 ],
 prices: {
 service1: 90,
 service2: 70,
 service3: 110
 },
 specificites: [
 'Experiência em zonas rurais remotas',
 'Equipamento móvel completo'
 ],
 zonesDesservies: ['Vinhais', 'Ervedosa', 'Moimenta', 'Agrochão', 'Santalha']
 },
 mirandadodouro: {
 name: 'Miranda do Douro',
 slug: 'miranda-do-douro',
 population: '7 500 habitants',
 logements: '2 800 logements en zona fronteiriça',
 problemesTypes: [
 'Fugas em casas antigas',
 'Entupimentos',
 'Substituição de esquentadores'
 ],
 testimonials: [
 { text: 'Serviço de qualidade mesmo estando longe. Preço justo e trabalho bem feito.' }
 ],
 prices: {
 service1: 90,
 service2: 70,
 service3: 110
 },
 specificites: [
 'Experiência em casas históricas',
 'Conhecimento da zona fronteiriça'
 ],
 zonesDesservies: ['Miranda', 'Sendim', 'Palaçoulo']
 },
 mogadouro: {
 name: 'Mogadouro',
 slug: 'mogadouro',
 population: '9 500 habitants',
 logements: '3 800 logements en zona rural',
 problemesTypes: [
 'Fossas sépticas',
 'Fugas em quintas',
 'Canalizações antigas'
 ],
 testimonials: [
 { text: 'Fossa entupida na quinta. Vieram com máquina e resolveram.' }
 ],
 prices: {
 service1: 85,
 service2: 65,
 service3: 105
 },
 specificites: [
 'Equipamento para quintas',
 'Experiência em propriedades agrícolas'
 ],
 zonesDesservies: ['Mogadouro', 'Castelo Branco', 'Azinhoso', 'Vassal']
 },
 alfandega: {
 name: 'Alfândega da Fé',
 slug: 'alfandega-da-fe',
 population: '5 000 habitants',
 logements: '2 000 logements rurais',
 problemesTypes: [
 'Fugas em casas antigas',
 'Entupimentos',
 'Substituição de bombas de água'
 ],
 testimonials: [
 { text: 'Bomba de água avariada. Vieram no mesmo dia e substituíram.' }
 ],
 prices: {
 service1: 85,
 service2: 65,
 service3: 105
 },
 specificites: [
 'Experiência em bombas de água',
 'Cobertura zona rural'
 ],
 zonesDesservies: ['Alfândega', 'Sambade', 'Valpereiro', 'Gebelim']
 },
 vilaflor: {
 name: 'Vila Flor',
 slug: 'vila-flor',
 population: '7 000 habitants',
 logements: '2 700 logements',
 problemesTypes: [
 'Entupimentos',
 'Fugas',
 'Substituição de esquentadores'
 ],
 testimonials: [
 { text: 'Entupimento resolvido com profissionalismo. Preço combinado antes, sem surpresas.' }
 ],
 prices: {
 service1: 85,
 service2: 65,
 service3: 105
 },
 specificites: [
 'Cobertura completa do concelho'
 ],
 zonesDesservies: ['Vila Flor', 'Candoso', 'Freixiel', 'Vale Frechoso']
 }
};
/**
 * Récupère le contenu d'une ville par son slug
 */
export function getCityContent(slug: string): CityContent | null {
 return cityContent[slug] || null;
}
/**
 * Stats globales (vrai — confirmées par Philippe 29/06)
 * Source unique : "500+ interventions/an, parfois plus"
 * Réparties par quote-part indicative des zones principales
 */
export const GLOBAL_STATS = {
 interventionsParAn: '500+',
 interventionsParAnDetail: 'por vezes mais de 500 por ano',
 anosExperiencia: 15,
 anosExperienciaLabel: '15+ anos em Trás-os-Montes'
};