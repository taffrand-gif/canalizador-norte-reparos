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
 const localFaqs = isPlumber ? [
 {
 question: 'A Norte Reparos faz instalação de canalização em Mirandela?',
 answer: 'Sim, a Norte Reparos faz instalação e remodelação de canalização em Mirandela e em todo o distrito de Bragança, ao domicílio. Orçamento por escrito antes de qualquer intervenção.'},
 {
 question: 'Quanto custa um canalizador em Bragança para desentupimento?',
 answer: 'Aplicamos a grelha única: 70 €/h + 30 € de deslocação em dias úteis (09h–18h) e 100 €/h + 50 € de deslocação à noite, aos fins de semana e feriados. Valores TTC, IVA incluído. Toda a hora iniciada é devida. A deslocação é cobrada quando é efetuada.'},
 {
 question: 'Fazem arranjo de fugas de água?',
 answer: 'Sim, estamos disponíveis em toda a região de Trás-os-Montes. Arranjamos todo o tipo de fugas de água: torneiras, autoclismos, canalizações enterradas e tubagens visíveis. Preço segundo a grelha única: 70 €/h + 30 € de deslocação em dias úteis (09h–18h) e 100 €/h + 50 € de deslocação à noite, aos fins de semana e feriados, IVA incluído.'},
 {
 question: 'Trabalham em Miranda do Douro e na zona raiana?',
 answer: 'Sim, prestamos serviço de instalação e remodelação de canalização em Miranda do Douro e em toda a zona raiana: substituição de tubagens, remodelação de casas de banho e instalação de equipamentos. Orçamento por escrito antes de qualquer intervenção. Ligue 928 484 451.'},
 {
 question: 'Instalam esquentadores em Vila Flor e Carrazeda de Ansiães?',
 answer: 'Sim, fazemos instalação e substituição de esquentadores a gás em Vila Flor, Carrazeda de Ansiães e todas as localidades do distrito de Bragança. Mão de obra segundo a grelha única, IVA incluído: 70 €/h + 30 € de deslocação em dias úteis, das 09h às 18h, e 100 €/h + 50 € de deslocação à noite, aos fins de semana e feriados; o equipamento é orçamentado à parte. A nossa equipa realiza intervenções em esquentadores elétricos e a gás, com a habilitação necessária.'},
 {
 question: 'Qual o canalizador mais perto de Mogadouro?',
 answer: 'A Norte Reparos é o canalizador profissional em Mogadouro. Cobrimos toda a região e todas as suas freguesias. Serviço ao domicílio, com orçamento por escrito antes de qualquer intervenção.'},
 ] : [
 {
 question: 'Qual o canalizador mais perto de Mogadouro?',
 answer: 'A Norte Reparos é o canalizador profissional em Mogadouro. Cobrimos toda a região e todas as suas freguesias. Serviço ao domicílio, com orçamento por escrito antes de qualquer intervenção.'},
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
