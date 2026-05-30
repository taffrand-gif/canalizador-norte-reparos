// FAQSchema - Featured Snippets pour Google
// Affiche les FAQ directement dans les résultats (+10% visibilité)
interface FAQ {
 question: string;
 answer: string;
}
interface FAQSchemaProps {
 faqs: FAQ[];
}
export function FAQSchema({ faqs }: FAQSchemaProps) {
 const schema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqs.map(faq => ({
 "@type": "Question",
 "name": faq.question,
 "acceptedAnswer": {
 "@type": "Answer",
 "text": faq.answer
 }
 }))
 };
 return (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 />
 );
}
// FAQ Premium pour Canalizador
export const canalizadorFAQs: FAQ[] = [
 {
 question: "Quanto custa reparar uma fuga de água em Bragança?",
 answer: "O preço médio para reparar uma fuga de água em Bragança é de €80. Inclui deslocação, diagnóstico e reparação simples. Sem custos ocultos. Garantia 6 meses."
 },
 {
 question: "Quanto tempo demora a chegar em caso de urgência?",
 answer: "Chegamos em 40 minutos no centro de Bragança e até 60 minutos nas aldeias circundantes. Serviço 24h/7 dias incluindo feriados."
 },
 {
 question: "Trabalham 24 horas por dia?",
 answer: "Sim, trabalhamos 24h/7 dias por semana, incluindo fins de semana e feriados. Ligue 928 484 451 a qualquer hora."
 },
 {
 question: "Têm garantia nos serviços?",
 answer: "Sim, todos os nossos serviços têm garantia de 6 meses. Se o problema voltar, reparamos gratuitamente."
 },
 {
 question: "Aceitam pagamento com cartão?",
 answer: "Sim, aceitamos dinheiro, cartão multibanco e transferência bancária. Pagamento após conclusão do serviço."
 },
 {
 question: "Quanto custa desentupir uma sanita?",
 answer: "Desentupimento de sanita custa €60 em Bragança. Inclui deslocação e equipamento profissional. Resolvemos 95% dos casos em menos de 30 minutos."
 },
 {
 question: "Fazem sem compromisso?",
 answer: "Sim, o orçamento é sempre gratuito e sem compromisso. Só paga se aprovar o serviço."
 },
 {
 question: "Cobram deslocação?",
 answer: "Não, a deslocação está incluída no preço do serviço dentro do raio de 50km de Bragança."
 },
 {
 question: "Quanto custa instalar um esquentador?",
 answer: "Instalação de esquentador custa €100 em Bragança (sem o equipamento). Inclui ligação de gás, água e teste de segurança."
 },
 {
 question: "São certificados?",
 answer: "Sim, somos canalizadores certificados com mais de 10 anos de experiência em Trás-os-Montes. Todos os trabalhos cumprem as normas portuguesas."
 },
 {
 question: "Atendem em que cidades?",
 answer: "Atendemos em Bragança, Mirandela, Macedo de Cavaleiros, Chaves, Vila Real, Vinhais, Miranda do Douro, Mogadouro e todas as aldeias num raio de 100km."
 },
 {
 question: "O que fazer em caso de fuga de água urgente?",
 answer: "1) Feche a torneira de segurança principal 2) Desligue a eletricidade se houver água perto de tomadas 3) Ligue-nos imediatamente: 928 484 451. Chegamos em 40 minutos."
 },
 {
 question: "Fazem reparações em domingo?",
 answer: "Sim, trabalhamos todos os dias incluindo domingos e feriados. O preço é o mesmo, sem acréscimos noturnos ou de fim de semana."
 },
 {
 question: "Quanto custa substituir uma torneira?",
 answer: "Substituição de torneira custa entre €40-60 (sem o equipamento). Inclui remoção da antiga, instalação da nova e teste de fugas."
 },
 {
 question: "Resolvem entupimentos graves?",
 answer: "Sim, temos equipamento profissional (mola elétrica, máquina de pressão) para resolver entupimentos graves em canos, esgotos e fossas."
 },
 {
 question: "Dão fatura?",
 answer: "Sim, emitimos fatura com ou sem IVA conforme necessário. Somos empresa registada."
 },
 {
 question: "Quanto tempo dura a garantia?",
 answer: "Todos os serviços têm garantia de 6 meses. Peças e equipamentos seguem a garantia do fabricante (normalmente 2 anos)."
 },
 {
 question: "Fazem inspeção de canalizações?",
 answer: "Sim, fazemos inspeção completa de canalizações com câmara de vídeo para detetar fugas ocultas, entupimentos e problemas estruturais."
 },
 {
 question: "Trabalham com seguradoras?",
 answer: "Sim, trabalhamos com as principais seguradoras. Fornecemos relatório detalhado e fatura para reembolso."
 },
 {
 question: "Como posso pagar?",
 answer: "Aceitamos dinheiro, multibanco, transferência bancária e MBWay. Pagamento após conclusão e aprovação do serviço."
 }
];
