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
 question: 'Quanto custa um canalizador em Bragança?',
 answer: 'O preço segue a grelha única: 70 €/h + 30 € de deslocação em dias úteis (09h–18h) e 100 €/h + 50 € de deslocação à noite, aos fins de semana e feriados. Valores TTC, IVA incluído. Toda a hora iniciada é devida. Orçamento por escrito antes de qualquer intervenção: 928 484 451.'},
 {
 question: 'O que fazer em caso de fuga de água?',
 answer: 'Em caso de fuga de água: 1) Feche a torneira geral da água, 2) Desligue a eletricidade se a água estiver perto de tomadas, 3) Contenha a água com baldes e toalhas, 4) Ligue 928 484 451.'},
 {
 question: 'Como desentupir uma sanita entupida?',
 answer: 'Para desentupir uma sanita: 1) Use uma ventosa grande fazendo movimentos de sucção, 2) Tente água quente (não fervente) com detergente, 3) Use bicarbonato de sódio + vinagre (1 chávena cada). Se não funcionar, ligue 928 484 451. Evite produtos químicos agressivos.'},
 {
 question: 'Quanto custa arranjar uma fuga de água?',
 answer: 'O preço depende do diagnóstico e do tempo de intervenção. Aplicamos a grelha única: 70 €/h + 30 € de deslocação em dias úteis (09h–18h) e 100 €/h + 50 € de deslocação à noite, aos fins de semana e feriados. Valores TTC, IVA incluído. Toda a hora iniciada é devida. Com uma descrição detalhada e fotografias úteis podemos dar uma estimativa indicativa à distância. Orçamento por escrito pelo 928 484 451.'},
 {
 question: 'Como detetar uma fuga de água escondida?',
 answer: 'Sinais de fuga escondida: 1) Conta de água inexplicavelmente alta, 2) Manchas húmidas em paredes ou teto, 3) Cheiro a mofo persistente, 4) Som de água correndo quando tudo está fechado, 5) Medidor de água girando com tudo fechado. Para deteção profissional (câmara endoscópica, fluoresceína e detetor de humidade), ligue 928 484 451.'},
 {
 question: 'Qual a garantia do trabalho de canalizador?',
 answer: 'Nos equipamentos e peças aplica-se a garantia do fabricante. Antes de qualquer intervenção recebe um orçamento por escrito com o trabalho a realizar.'},
 {
 question: 'O que está incluído no serviço de canalizador?',
 answer: 'O serviço inclui: diagnóstico do problema, mão de obra especializada, materiais básicos (juntas, vedantes), limpeza após intervenção. Não incluído: peças de substituição caras (esquentadores, caldeiras), obras de alvenaria. Orçamento detalhado antes de iniciar.'},
 {
 question: 'Aceitam pagamento com cartão e MB WAY?',
 answer: 'Sim, aceitamos pagamento por multibanco, MB WAY, transferência bancária, e dinheiro. Pagamento apenas após conclusão do serviço e sua total satisfação. Fatura fornecida. Valores TTC, IVA incluído.'},
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
 Entre em contacto connosco. A nossa equipa está pronta para esclarecer todas as suas dúvidas.
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
