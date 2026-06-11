import React from 'react';
// Design: Professional Service Layout
// FAQ section with accordion for questions/answers
// - Bold headings with thick borders
// - Accordion with clear expand/collapse
// - SEO-optimized Q&A content
import { useSite } from '@/contexts/SiteContext';
import { useEffect, useMemo } from 'react';
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger} from '@/components/ui/accordion';
function FAQ() {
 const { config } = useSite();
 const faqs = useMemo(() => [
 {
 question: 'Quanto custa um canalizador urgente em Bragança?',
 answer: 'O custo de um canalizador urgente em Bragança varia entre €60-150 dependendo do serviço. Arranjo de fugas de água custa €80-120, desentupimentos €60-100, instalação de esquentadores €100-150. Deslocação urgente: €15. Orçamento grátis pelo 928 484 451.'},
 {
 question: 'Quanto tempo demora a chegar um canalizador urgente?',
 answer: 'Resposta rápida garantida. Serviço disponível Atendimento 24h/7d, 7 dias por semana. Serviço disponível Atendimento 24h/7d, 7 dias por semana, incluindo fins de semana e feriados.'},
 {
 question: 'O que fazer em caso de fuga de água urgente?',
 answer: 'Em caso de fuga de água urgente: 1) Feche a torneira geral da água, 2) Desligue a eletricidade se a água estiver perto de tomadas, 3) Contenha a água com baldes e toalhas, 4) Ligue imediatamente para 928 484 451. Resolvemos o problema rapidamente.'},
 {
 question: 'Como desentupir uma sanita entupida rapidamente?',
 answer: 'Para desentupir uma sanita: 1) Use uma ventosa grande fazendo movimentos de sucção, 2) Tente água quente (não fervente) com detergente, 3) Use bicarbonato de sódio + vinagre (1 chávena cada). Se não funcionar Atendimento prioritário, ligue 928 484 451. Evite produtos químicos agressivos.'},
 {
 question: 'Canalizador trabalha aos fins de semana e feriados?',
 answer: 'Sim, o serviço de canalizador urgente está disponível Atendimento 24h/7d, 7 dias por semana, incluindo sábados, domingos e feriados. Não há majoração de preço aos fins de semana. Ligue 928 484 451 a qualquer hora.'},
 {
 question: 'Quanto custa arranjar uma fuga de água?',
 answer: 'Arranjar uma fuga de água custa entre €80-150 em Bragança. Preços: torneira a pingar (€30-50), cano rebentado (€80-120), fuga escondida (€150-300). Inclui mão de obra e materiais básicos. Deslocação urgente: €15. Orçamento grátis pelo 928 484 451.'},
 {
 question: 'Como detetar uma fuga de água escondida?',
 answer: 'Sinais de fuga escondida: 1) Conta de água inexplicavelmente alta, 2) Manchas húmidas em paredes ou teto, 3) Cheiro a mofo persistente, 4) Som de água correndo quando tudo está fechado, 5) Medidor de água girando com tudo fechado. Para deteção profissional com câmera térmica, ligue 928 484 451.'},
 {
 question: 'Qual a garantia do trabalho de canalizador?',
 answer: 'Oferecemos garantia de 6 meses em todos os trabalhos de arranjo e 12 meses em instalações novas. Se o problema voltar no período de garantia, voltamos gratuitamente. Garantia cobre mão de obra e materiais utilizados. Certificado de garantia fornecido após conclusão do serviço.'},
 {
 question: 'O que está incluído no serviço de canalizador?',
 answer: 'O serviço inclui: diagnóstico do problema, mão de obra especializada, materiais básicos (juntas, vedantes), limpeza após intervenção, garantia do trabalho realizado. Não incluído: peças de substituição caras (esquentadores, caldeiras), obras de alvenaria. Orçamento detalhado antes de iniciar.'},
 {
 question: 'Aceitam pagamento com cartão e MB WAY?',
 answer: 'Sim, aceitamos pagamento por multibanco, MB WAY, transferência bancária, e dinheiro. Pagamento apenas após conclusão do serviço e sua total satisfação. Fatura fornecida. Sem IVA (Art. 53º CIVA).'},
 ], []);
 // Inject FAQPage Schema
 useEffect(() => {
 const schemaId = 'faq-schema';
 let script = document.getElementById(schemaId) as HTMLScriptElement;
 
 if (!script) {
 script = document.createElement('script');
 script.id = schemaId;
 script.type = 'application/ld+json';
 document.head.appendChild(script);
 }
 const faqSchema = {
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
 script.textContent = JSON.stringify(faqSchema);
 return () => {
 const existingScript = document.getElementById(schemaId);
 if (existingScript) {
 existingScript.remove();
 }
 };
 }, [faqs]);
 return (
 <section id="faq" className="py-20 bg-gray-50">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 {/* Header - Removed duplicate H2 (already in OptimizedHome.tsx) */}
 {/* Accordion */}
 <Accordion type="single" collapsible className="space-y-4">
 {faqs.map((faq, index) => (
 <AccordionItem
 key={index}
 value={`item-${index}`}
 className="border-4 bg-white px-6 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)]"
 style={{ borderColor: config.colors.primary }}
 >
 <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
 {faq.answer}
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 {/* CTA */}
 <div className="mt-12 text-center p-8 border-4 bg-white" style={{ borderColor: config.colors.primary }}>
 <p className="text-lg font-bold mb-4">Não encontrou a resposta que procurava?</p>
 <p className="text-gray-600 mb-6">
 Entre em contacto connosco. A nosso trabalho está pronta para esclarecer todas as suas dúvidas.
 </p>
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white shadow-[3px_3px_0_0_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
 style={{ backgroundColor: config.colors.primary }}
 >
 📞 Ligue: {config.phone}
 </a>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(FAQ);
