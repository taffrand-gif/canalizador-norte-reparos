import React from 'react';
// FAQ adicionais orientadas para SEO local
// Perguntas direcionadas para pesquisas locais nas cidades de Trás-os-Montes
import { useSite } from '@/contexts/SiteContext';
// memo removed from 'react';
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger} from '@/components/ui/accordion';
function FAQLocal() {
 const { config } = useSite();
 const isPlumber = config.id === 'norte-reparos';
 const priceNote = 'Mão de obra: 70 € por hora em dias úteis (09h-18h), mais 30 € de deslocação; à noite, aos fins de semana e feriados: 100 € por hora, mais 50 € de deslocação. Valores TTC, IVA incluído. Cada hora iniciada é devida.';
 const availabilityNote = 'A disponibilidade é confirmada conforme a localização e a situação operacional.';
 const mogadouro = {
 question: 'Qual o canalizador mais perto de Mogadouro?',
 answer: `A Norte Reparos atende em Mogadouro, ao domicílio. ${availabilityNote} O orçamento por escrito é apresentado antes da intervenção.`};
 const localFaqs = isPlumber ? [
 {
 question: 'A Norte Reparos faz instalação de canalização em Mirandela?',
 answer: `Sim, a Norte Reparos faz instalação e remodelação de canalização em Mirandela, ao domicílio. ${availabilityNote} Antes da intervenção, apresentamos orçamento por escrito.`},
 {
 question: 'Quanto custa um canalizador em Bragança para desentupimento?',
 answer: `${priceNote} O valor final depende do diagnóstico e da intervenção; o orçamento por escrito é apresentado antes de começar.`},
 {
 question: 'Fazem arranjo de fugas de água?',
 answer: `Sim, atendemos fugas de água: torneiras, autoclismos, canalizações enterradas e tubagens visíveis. ${availabilityNote} ${priceNote}`},
 {
 question: 'Trabalham em Miranda do Douro?',
 answer: `Sim, prestamos serviço de instalação e remodelação de canalização em Miranda do Douro: substituição de tubagens, remodelação de casas de banho e instalação de equipamentos. ${availabilityNote} Ligue 928 484 451.`},
 {
 question: 'Instalam esquentadores em Vila Flor e Carrazeda de Ansiães?',
 answer: `Sim, a nossa equipa realiza intervenções em esquentadores elétricos e a gás, com a habilitação necessária, em Vila Flor e Carrazeda de Ansiães. O valor depende do equipamento e da instalação existente, e o orçamento por escrito é apresentado antes da intervenção. ${priceNote} ${availabilityNote}`},
 mogadouro,
 ] : [
 mogadouro,
 ];
 return (
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 Perguntas sobre Serviços na Sua Zona
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Informações úteis sobre os nossos serviços nas principais cidades de Trás-os-Montes
 </p>
 </div>
 <div className="max-w-4xl mx-auto">
 <Accordion type="single" collapsible className="space-y-4">
 {localFaqs.map((faq, index) => (
 <AccordionItem
 key={index}
 value={`local-${index}`}
 className="border-2 bg-white px-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
 style={{ borderColor: config.colors.primaryLight }}
 >
 <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-5">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="text-gray-700 pb-5 leading-relaxed">
 {faq.answer}
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </div>
 </div>
 </section>
 );
}
export default React.memo(FAQLocal);
