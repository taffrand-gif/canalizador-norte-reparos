// Review Schema Component - Témoignages Individuels avec Rich Snippets
// Affiche les étoiles dans Google Search Results
interface ReviewData {
 author: string;
 rating: number;
 date: string;
 text: string;
 city?: string;
}
interface ReviewSchemaProps {
 reviews: ReviewData[];
 businessName: string;
 businessUrl: string;
}
export function ReviewSchema({ reviews, businessName, businessUrl }: ReviewSchemaProps) {
 const schema = {
 "@context": "https://schema.org",
 "@graph": reviews.map(review => ({
 "@type": "Review",
 "itemReviewed": {
 "@type": "LocalBusiness",
 "name": businessName,
 "url": businessUrl
 },
 "author": {
 "@type": "Person",
 "name": review.author
 },
 "reviewRating": {
 "@type": "Rating",
 "ratingValue": review.rating.toString(),
 "bestRating": "5",
 "worstRating": "1"
 },
 "reviewBody": review.text,
 "datePublished": review.date
 }))
 };
 return (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 />
 );
}
// Témoignages Premium Canalizador
export const canalizadorReviews: ReviewData[] = [
 {
 author: "João M.",
 rating: 5,
 date: "2026-02-15",
 text: "Fuga de água às 3h da manhã. Chegaram em 35 minutos e resolveram tudo. Preço justo, serviço impecável!",
 city: "Bragança"
 },
 {
 author: "Maria S.",
 rating: 5,
 date: "2026-02-28",
 text: "Sanita entupida no domingo. Atenderam logo e resolveram em 20 minutos. Muito profissionais!",
 city: "Bragança"
 },
 {
 author: "António P.",
 rating: 5,
 date: "2026-03-05",
 text: "Instalaram esquentador novo. Trabalho limpo, rápido e com garantia. Recomendo!",
 city: "Bragança"
 },
 {
 author: "Carlos R.",
 rating: 5,
 date: "2026-02-20",
 text: "Fossa séptica entupida. Vieram com equipamento profissional e resolveram em 1h. Excelente!",
 city: "Mirandela"
 },
 {
 author: "Ana L.",
 rating: 5,
 date: "2026-03-01",
 text: "Fuga de água no teto. Detetaram o problema rapidamente e repararam sem partir paredes. Top!",
 city: "Mirandela"
 },
 {
 author: "Manuel F.",
 rating: 5,
 date: "2026-02-18",
 text: "Cano rebentado no jardim. Chegaram rápido e fizeram trabalho perfeito. Preço combinado antes!",
 city: "Macedo de Cavaleiros"
 },
 {
 author: "Teresa M.",
 rating: 5,
 date: "2026-02-25",
 text: "Sem pressão de água. Identificaram problema na bomba e resolveram no mesmo dia. Obrigada!",
 city: "Macedo de Cavaleiros"
 },
 {
 author: "José A.",
 rating: 5,
 date: "2026-02-22",
 text: "Fuga no aquecimento central. Vieram logo e repararam com garantia. Muito bom serviço!",
 city: "Chaves"
 },
 {
 author: "Pedro S.",
 rating: 5,
 date: "2026-03-02",
 text: "Entupimento grave no 5º andar. Resolveram sem sujar nada. Profissionais de confiança!",
 city: "Vila Real"
 },
 {
 author: "Joaquim B.",
 rating: 5,
 date: "2026-02-19",
 text: "Casa isolada com fuga. Vieram até aqui e resolveram tudo. Muito obrigado!",
 city: "Vinhais"
 }
];
// Témoignages Premium Eletricista
export const eletricistaReviews: ReviewData[] = [
 {
 author: "Paulo R.",
 rating: 5,
 date: "2026-02-16",
 text: "Curto-circuito às 2h da manhã. Chegaram em 35 minutos e resolveram tudo com segurança. certificação elétrica incluída!",
 city: "Bragança"
 },
 {
 author: "Sandra M.",
 rating: 5,
 date: "2026-02-27",
 text: "Quadro elétrico a disparar constantemente. Identificaram problema e substituíram disjuntor. Muito profissionais!",
 city: "Bragança"
 },
 {
 author: "Ricardo F.",
 rating: 5,
 date: "2026-03-06",
 text: "certificação elétrica para apartamento. Serviço rápido, preço justo e entrega em 48h. Recomendo!",
 city: "Bragança"
 },
 {
 author: "Fernando L.",
 rating: 5,
 date: "2026-02-21",
 text: "Quadro elétrico completamente queimado. Substituíram tudo em 3h com certificação. Excelente trabalho!",
 city: "Mirandela"
 },
 {
 author: "Cristina P.",
 rating: 5,
 date: "2026-03-02",
 text: "Avaria elétrica urgente. Vieram logo e resolveram com garantia de 12 meses. Top!",
 city: "Mirandela"
 },
 {
 author: "Armando S.",
 rating: 5,
 date: "2026-02-19",
 text: "Bomba de água sem funcionar. Identificaram problema elétrico e resolveram no mesmo dia. Perfeito!",
 city: "Macedo de Cavaleiros"
 },
 {
 author: "Isabel C.",
 rating: 5,
 date: "2026-02-26",
 text: "certificação elétrica para casa nova. Serviço impecável e preço combinado antes. Obrigada!",
 city: "Macedo de Cavaleiros"
 },
 {
 author: "Rui A.",
 rating: 5,
 date: "2026-02-23",
 text: "Aquecimento elétrico avariado no inverno. Vieram urgente e resolveram com garantia. Muito bom!",
 city: "Chaves"
 },
 {
 author: "Nuno M.",
 rating: 5,
 date: "2026-03-03",
 text: "Avaria elétrica no 6º andar. Resolveram rapidamente com certificação. Profissionais de confiança!",
 city: "Vila Real"
 },
 {
 author: "Alberto B.",
 rating: 5,
 date: "2026-02-20",
 text: "Casa isolada sem eletricidade. Vieram até aqui e resolveram tudo com certificação. Muito obrigado!",
 city: "Vinhais"
 }
];
