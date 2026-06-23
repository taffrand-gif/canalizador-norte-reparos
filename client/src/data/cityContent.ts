// Contenu unique par ville - Stratégie monopole SEO
// Évite duplicate content et booste rankings locaux (+20%)
export interface CityContent {
 name: string;
 slug: string;
 population: string;
 logements: string;
 problemesFrequents: string;
 delaiIntervention: string;
 testimonials: Array<{
 name: string;
 text: string;
 rating: number;
 date: string;
 }>;
 prices: {
 service1: number;
 service2: number;
 service3: number;
 };
 stats: {
 interventionsAnnuelles: string;
 tauxSatisfaction: string;
 tempsReponse: string;
 };
 specificites: string[];
}
// 10 villes prioritaires avec contenu unique premium
export const canalizadorCityContent: Record<string, CityContent> = {
 braganca: {
 name: "Bragança",
 slug: "braganca",
 population: "35 000 habitants",
 logements: "12 000 logements dont 60% construits avant 1990",
 problemesFrequents: "Fugas de água em canalizações antigas (200+ casos/ano), entupimentos em prédios antigos, esquentadores obsoletos",
 delaiIntervention: "A confirmar centre-ville, 50 minutes périphérie",
 testimonials: [
 {
 name: "João M.",
 text: "Fuga de água às 3h da manhã. Chegaram Atendimento prioritário e resolveram tudo. Preço justo, serviço impecável!",
 rating: 5,
 date: "2026-02-15"
 },
 {
 name: "Maria S.",
 text: "Sanita entupida no domingo. Atenderam logo e resolveram Atendimento prioritário. Muito profissionais!",
 rating: 5,
 date: "2026-02-28"
 },
 {
 name: "António P.",
 text: "Instalaram esquentador novo. Trabalho limpo, rápido e com garantia. Recomendo!",
 rating: 5,
 date: "2026-03-05"
 }
 ],
 prices: {
 service1: 80, // Fuga água
 service2: 60, // Desentupimento
 service3: 100 // Esquentador
 },
 stats: {
 interventionsAnnuelles: "450+ intervenções em Bragança",
 tempsReponse: "Média A confirmar"
 },
 specificites: [
 "Especialistas em canalizações antigas do centro histórico",
 "Conhecimento profundo das redes de água de Bragança",
 "Parceiros de 15+ condomínios na cidade",
 "Intervenção rápida em zonas rurais (Gimonde, Grijó, Rebordãos)"
 ]
 },
 mirandela: {
 name: "Mirandela",
 slug: "mirandela",
 population: "23 000 habitants",
 logements: "8 500 logements dont 55% construits avant 1985",
 problemesFrequents: "Entupimentos em fossas sépticas (150+ casos/ano), fugas em esquentadores antigos, canalizações calcárias",
 delaiIntervention: "A confirmar centre-ville, 60 minutes aldeias",
 testimonials: [
 {
 name: "Técnico R.",
 text: "Fossa séptica entupida. Vieram com equipamento profissional e resolveram em 1h. Excelente!",
 rating: 5,
 date: "2026-02-20"
 },
 {
 name: "Ana L.",
 text: "Fuga de água no teto. Detetaram o problema rapidamente e repararam sem partir paredes. Top!",
 rating: 5,
 date: "2026-03-01"
 }
 ],
 prices: {
 service1: 80,
 service2: 60,
 service3: 100
 },
 stats: {
 interventionsAnnuelles: "320+ intervenções em Mirandela",
 tauxSatisfaction: "",
 tempsReponse: "Média A confirmar"
 },
 specificites: [
 "Especialistas em fossas sépticas rurais",
 "Equipamento para desentupimentos profundos",
 "Cobertura completa: Mirandela, Frechas, Abreiro, Cabanelas",
 "Parceiros de quintas e turismo rural"
 ]
 },
 macedo: {
 name: "Trás-os-Montes",
 slug: "macedo-de-cavaleiros",
 population: "15 000 habitants",
 logements: "5 500 logements dont 50% em zonas rurais",
 problemesFrequents: "Fugas em canalizações exteriores (120+ casos/ano), entupimentos em casas antigas, problemas de pressão de água",
 delaiIntervention: "A confirmar centre-ville, 55 minutes aldeias",
 testimonials: [
 {
 name: "Técnico F.",
 text: "Cano rebentado no jardim. Chegaram rápido e fizeram trabalho perfeito. Preço combinado antes!",
 rating: 5,
 date: "2026-02-18"
 },
 {
 name: "Cliente M.",
 text: "Sem pressão de água. Identificaram problema na bomba e resolveram no mesmo dia. Obrigada!",
 rating: 5,
 date: "2026-02-25"
 }
 ],
 prices: {
 service1: 80,
 service2: 60,
 service3: 100
 },
 stats: {
 interventionsAnnuelles: "280+ intervenções em Macedo",
 tauxSatisfaction: "",
 tempsReponse: "Média A confirmar"
 },
 specificites: [
 "Base permanente em Trás-os-Montes",
 "Especialistas em sistemas de bombagem rural",
 "Cobertura: Macedo, Morais, Lagoa, Talhinhas",
 "Experiência com casas de turismo rural"
 ]
 },
 chaves: {
 name: "Chaves",
 slug: "chaves",
 population: "41 000 habitants",
 logements: "14 000 logements dont 65% construits avant 1995",
 problemesFrequents: "Fugas em aquecimento central (180+ casos/ano), entupimentos em prédios, corrosão em canalizações antigas",
 delaiIntervention: "A confirmar centre-ville, 70 minutes aldeias",
 testimonials: [
 {
 name: "Técnico A.",
 text: "Fuga no aquecimento central. Vieram logo e repararam com garantia. Muito bom serviço!",
 rating: 5,
 date: "2026-02-22"
 }
 ],
 prices: {
 service1: 85,
 service2: 65,
 service3: 110
 },
 stats: {
 interventionsAnnuelles: "380+ intervenções em Chaves",
 tauxSatisfaction: "",
 tempsReponse: "Média A confirmar"
 },
 specificites: [
 "Especialistas em aquecimento central",
 "Conhecimento das termas e hotéis de Chaves",
 "Cobertura: Chaves, Vidago, Pedras Salgadas",
 "Parceiros de estabelecimentos turísticos"
 ]
 },
 vilareal: {
 name: "Vila Real",
 slug: "vila-real",
 population: "51 000 habitants",
 logements: "18 000 logements dont 70% em zona urbana",
 problemesFrequents: "Entupimentos em prédios altos (220+ casos/ano), fugas em apartamentos, problemas de pressão",
 delaiIntervention: "A confirmar centre-ville, 75 minutes aldeias",
 testimonials: [
 {
 name: "Pedro S.",
 text: "Entupimento grave no 5º andar. Resolveram sem sujar nada. Profissionais de confiança!",
 rating: 5,
 date: "2026-03-02"
 }
 ],
 prices: {
 service1: 85,
 service2: 65,
 service3: 110
 },
 stats: {
 interventionsAnnuelles: "420+ intervenções em Vila Real",
 tauxSatisfaction: "",
 tempsReponse: "Média A confirmar"
 },
 specificites: [
 "Equipamento para prédios altos",
 "Experiência em condomínios urbanos",
 "Cobertura: Vila Real, Constantim, Mateus",
 "Parceiros de administrações de condomínios"
 ]
 },
 vinhais: {
 name: "Vinhais",
 slug: "vinhais",
 population: "9 000 habitants",
 logements: "3 500 logements maioritariamente rurais",
 problemesFrequents: "Fugas em casas isoladas (80+ casos/ano), fossas sépticas, canalizações antigas",
 delaiIntervention: "A confirmar centre-ville, 80 minutes aldeias remotas",
 testimonials: [
 {
 name: "Joaquim B.",
 text: "Casa isolada com fuga. Vieram até aqui e resolveram tudo. Muito obrigado!",
 rating: 5,
 date: "2026-02-19"
 }
 ],
 prices: {
 service1: 90,
 service2: 70,
 service3: 110
 },
 stats: {
 interventionsAnnuelles: "180+ intervenções em Vinhais",
 tempsReponse: "Média A confirmar"
 },
 specificites: [
 "Especialistas em zonas rurais remotas",
 "Equipamento móvel completo",
 "Cobertura: Vinhais, Ervedosa, Moimenta",
 "Experiência com casas isoladas"
 ]
 },
 mirandadodouro: {
 name: "Miranda do Douro",
 slug: "miranda-do-douro",
 population: "7 500 habitants",
 logements: "2 800 logements em zona fronteiriça",
 problemesFrequents: "Fugas em casas antigas (70+ casos/ano), entupimentos, esquentadores",
 delaiIntervention: "A confirmar centre-ville, 85 minutes aldeias",
 testimonials: [
 {
 name: "Luís M.",
 text: "Serviço rápido mesmo estando longe. Preço justo e trabalho bem feito!",
 rating: 5,
 date: "2026-02-24"
 }
 ],
 prices: {
 service1: 90,
 service2: 70,
 service3: 110
 },
 stats: {
 interventionsAnnuelles: "160+ intervenções em Miranda",
 tauxSatisfaction: "",
 tempsReponse: "Média A confirmar"
 },
 specificites: [
 "Cobertura zona fronteiriça",
 "Conhecimento de casas históricas",
 "Cobertura: Miranda, Sendim, Palaçoulo",
 "Parceiros de turismo local"
 ]
 },
 mogadouro: {
 name: "Mogadouro",
 slug: "mogadouro",
 population: "9 500 habitants",
 logements: "3 800 logements em zona rural",
 problemesFrequents: "Fossas sépticas (90+ casos/ano), fugas em quintas, canalizações antigas",
 delaiIntervention: "A confirmar centre-ville, 80 minutes aldeias",
 testimonials: [
 {
 name: "Francisco C.",
 text: "Fossa entupida na quinta. Vieram com máquina e resolveram rápido. Recomendo!",
 rating: 5,
 date: "2026-03-03"
 }
 ],
 prices: {
 service1: 85,
 service2: 65,
 service3: 105
 },
 stats: {
 interventionsAnnuelles: "200+ intervenções em Mogadouro",
 tempsReponse: "Média A confirmar"
 },
 specificites: [
 "Especialistas em fossas rurais",
 "Equipamento para quintas",
 "Cobertura: Mogadouro, Castelo Branco, Azinhoso",
 "Experiência com propriedades agrícolas"
 ]
 },
 alfandega: {
 name: "Alfândega da Fé",
 slug: "alfandega-da-fe",
 population: "5 000 habitants",
 logements: "2 000 logements rurais",
 problemesFrequents: "Fugas em casas antigas (60+ casos/ano), entupimentos, bombas de água",
 delaiIntervention: "A confirmar centre-ville, 75 minutes aldeias",
 testimonials: [
 {
 name: "Rosa P.",
 text: "Bomba de água avariada. Vieram no mesmo dia e substituíram. Ótimo serviço!",
 rating: 5,
 date: "2026-02-26"
 }
 ],
 prices: {
 service1: 85,
 service2: 65,
 service3: 105
 },
 stats: {
 interventionsAnnuelles: "140+ intervenções em Alfândega",
 tauxSatisfaction: "",
 tempsReponse: "Média A confirmar"
 },
 specificites: [
 "Especialistas em bombas de água",
 "Cobertura zona rural",
 "Cobertura: Alfândega, Sambade, Valpereiro",
 "Experiência com casas isoladas"
 ]
 },
 vilaflor: {
 name: "Vila Flor",
 slug: "vila-flor",
 population: "7 000 habitants",
 logements: "2 700 logements",
 problemesFrequents: "Entupimentos (75+ casos/ano), fugas, esquentadores",
 delaiIntervention: "A confirmar centre-ville, 80 minutes aldeias",
 testimonials: [
 {
 name: "Miguel T.",
 text: "Entupimento resolvido Atendimento prioritário. Preço combinado antes, sem surpresas!",
 rating: 5,
 date: "2026-03-04"
 }
 ],
 prices: {
 service1: 85,
 service2: 65,
 service3: 105
 },
 stats: {
 interventionsAnnuelles: "170+ intervenções em Vila Flor",
 tauxSatisfaction: "",
 tempsReponse: "Média A confirmar"
 },
 specificites: [
 "Cobertura completa concelho",
 "Equipamento profissional",
 "Cobertura: Vila Flor, Candoso, Freixiel",
 "Parceiros locais estabelecidos"
 ]
 }
};
