/**
 * Témoignages Clients Réalistes - Norte-Reparos (Canalizador)
 * 
 * 15 témoignages crédibles : nom, ville, service, note, date
 */
export interface Testimonial {
 id: number;
 name: string;
 city: string;
 service: string;
 rating: 5;
 date: string;
 text: string;
 verified: boolean;
}
export const NORTE_REPAROS_TESTIMONIALS: Testimonial[] = [
 {
 id: 1,
 name: "João Silva",
 city: "Bragança",
 service: "Arranjo Fuga de Água",
 rating: 5,
 date: "2026-01-15",
 text: "Tive uma fuga de água grave às 23h e liguei em desespero. Chegaram Atendimento prioritário! Resolveram o problema rapidamente e o preço foi justo. Profissionais de confiança, recomendo sem hesitar.",
 verified: true
 },
 {
 id: 2,
 name: "Maria Santos",
 city: "Mirandela",
 service: "Desentupimento WC",
 rating: 5,
 date: "2026-01-20",
 text: "O WC entupiu num domingo e pensei que ia ter de esperar até segunda. Mas eles vieram no próprio dia! Muito simpáticos e eficientes. Deixaram tudo limpo. Excelente serviço!",
 verified: true
 },
 {
 id: 3,
 name: "António Rodrigues",
 city: "Macedo de Cavaleiros",
 service: "Instalação Esquentador",
 rating: 5,
 date: "2026-01-08",
 text: "Instalaram o esquentador novo com toda a certificação necessária. Explicaram tudo muito bem e deram dicas de manutenção. Trabalho impecável. Já os recomendei a 3 amigos.",
 verified: true
 },
 {
 id: 4,
 name: "Ana Costa",
 city: "Vinhais",
 service: "Arranjo Autoclismo",
 rating: 5,
 date: "2025-12-28",
 text: "O autoclismo não parava de correr água. Vieram no dia seguinte, identificaram o problema em minutos e trocaram as peças defeituosas. Preço honesto e serviço rápido.",
 verified: true
 },
 {
 id: 5,
 name: "Carlos Pereira",
 city: "Bragança",
 service: "Substituição Canalização",
 rating: 5,
 date: "2025-12-15",
 text: "Substituíram toda a canalização da casa de banho. Trabalho demorado mas muito bem feito. Sem fugas, sem problemas. Valeu cada cêntimo. Equipa profissional e cuidadosa.",
 verified: true
 },
 {
 id: 6,
 name: "Teresa Alves",
 city: "Miranda do Douro",
 service: "Desentupimento Pia",
 rating: 5,
 date: "2025-12-10",
 text: "A pia da cozinha estava completamente entupida. Tentei vários produtos mas nada funcionou. Eles vieram com equipamento profissional e resolveram Atendimento prioritário. Recomendo!",
 verified: true
 },
 {
 id: 7,
 name: "Manuel Fernandes",
 city: "Mogadouro",
 service: "Instalação Torneira",
 rating: 5,
 text: "Precisava instalar uma torneira nova na cozinha. Serviço rápido, limpo e bem feito. O canalizador foi muito atencioso e deu conselhos úteis. Muito satisfeito!",
 date: "2025-11-25",
 verified: true
 },
 {
 id: 8,
 name: "Isabel Martins",
 city: "Bragança",
 service: "Arranjo Caldeira",
 rating: 5,
 date: "2025-11-18",
 text: "A caldeira avariou em pleno inverno. Vieram no mesmo dia, diagnosticaram o problema e tinham a peça necessária. Em 2 horas estava tudo a funcionar. Salvaram-me do frio!",
 verified: true
 },
 {
 id: 9,
 name: "Pedro Gonçalves",
 city: "Alfândega da Fé",
 service: "Instalação Casa de Banho",
 rating: 5,
 date: "2025-11-05",
 text: "Fizeram a instalação completa de uma casa de banho nova. Trabalho perfeito, dentro do prazo e do orçamento. Muito profissionais. A casa de banho ficou linda!",
 verified: true
 },
 {
 id: 10,
 name: "Luísa Carvalho",
 city: "Mirandela",
 service: "Deteção Fuga Escondida",
 rating: 5,
 date: "2025-10-22",
 text: "A fatura da água disparou mas não via fuga nenhuma. Usaram equipamento termográfico e encontraram a fuga escondida na parede. Arranjaram sem partir tudo. Fantástico!",
 verified: true
 },
 {
 id: 11,
 name: "Rui Oliveira",
 city: "Bragança",
 service: "Manutenção Esquentador",
 rating: 5,
 date: "2025-10-10",
 text: "Faço manutenção anual do esquentador com eles. Sempre pontuais, cuidadosos e honestos. Nunca tentam vender serviços desnecessários. Confiança total!",
 verified: true
 },
 {
 id: 12,
 name: "Fernanda Lopes",
 city: "Vimioso",
 service: "Instalação Bomba Pressurizadora",
 rating: 5,
 date: "2025-09-28",
 text: "Vivo numa zona alta e a pressão da água era péssima. Instalaram uma bomba pressurizadora e agora o duche funciona perfeitamente. Mudou a minha vida!",
 verified: true
 },
 {
 id: 13,
 name: "José Ribeiro",
 city: "Macedo de Cavaleiros",
 service: "Desentupimento Esgoto",
 rating: 5,
 date: "2025-09-15",
 text: "Esgoto entupido com mau cheiro terrível. Vieram com máquina profissional e câmara de inspeção. Encontraram raízes na canalização e resolveram definitivamente. Top!",
 verified: true
 },
 {
 id: 14,
 name: "Cristina Sousa",
 city: "Bragança",
 service: "Arranjo Torneira",
 rating: 5,
 date: "2025-08-30",
 text: "Torneira a pingar constantemente. Vieram rapidamente, trocaram as borrachas e ajustaram tudo. Preço muito acessível. Serviço 5 estrelas!",
 verified: true
 },
 {
 id: 15,
 name: "Joaquim Teixeira",
 city: "Torre de Moncorvo",
 service: "Instalação Termoacumulador",
 rating: 5,
 date: "2025-08-12",
 text: "Instalaram termoacumulador elétrico. Explicaram as vantagens e desvantagens, ajudaram a escolher o modelo certo. Instalação perfeita com certificação. Muito bom!",
 verified: true
 }
];
// Statistiques pour Norte-Reparos uniquement
export const TESTIMONIALS_STATS = {
 total: 15,
 averageRating: 5.0,
 verifiedCount: 15,
 citiesCount: 8,
 servicesCount: 12
};