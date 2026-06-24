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
 question: 'Existe canalizador disponível em Mirandela ao fim de semana?',
 answer: 'Sim, a Norte Reparos disponibiliza canalizador em Mirandela todos os dias da semana, incluindo sábados, domingos e feriados. O nosso serviço de urgência funciona Atendimento 24h/7d.'},
 {
 question: 'Quanto custa um canalizador em Bragança para desentupimento?',
 answer: 'O preço de um desentupimento em Bragança: sanita 80-120€, lavatório 100€, lava-loiça 110€ (sem IVA). Urgência noturna: +50%. Desentupimento com câmara de inspeção: 220€. Incluímos deslocação e diagnóstico no preço. Sem compromisso por telefone.'},
 {
 question: 'Fazem arranjo de fugas de água?',
 answer: 'Sim, estamos disponíveis em toda a região de Trás-os-Montes. Arranjamos todo o tipo de fugas de água: torneiras, autoclismos, canalizações enterradas e tubagens visíveis. Preços a partir de 88€ (colmatação fuga tubo, sem IVA).'},
 {
 question: 'Há canalizador de urgência em Miranda do Douro?',
 answer: 'Sim, prestamos serviço de canalização de urgência em Miranda do Douro e toda a zona raiana. Disponível Atendimento 24h/7d para emergências como fugas graves, canos rebentados ou entupimentos urgentes. Ligue 928 484 451.'},
 {
 question: 'Instalam esquentadores em Vila Flor e Carrazeda de Ansiães?',
 answer: 'Sim, fazemos instalação e substituição de esquentadores a gás em Vila Flor, Carrazeda de Ansiães e todas as localidades do distrito de Bragança. Preço de instalação: 100-200€ (sem IVA, sem equipamento). Incluímos certificação obrigatória e teste de segurança.'},
 {
 question: 'Qual o canalizador mais perto de Mogadouro?',
 answer: 'A Norte Reparos é o canalizador profissional em Mogadouro. Cobrimos toda a região e todas as suas freguesias. Serviço disponível Atendimento 24h/7d com sem compromisso.'},
 ] : [
 {
 question: 'Qual o canalizador mais perto de Mogadouro?',
 answer: 'A Norte Reparos é o canalizador profissional em Mogadouro. Cobrimos toda a região e todas as suas freguesias. Serviço disponível Atendimento 24h/7d com sem compromisso.'},
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
