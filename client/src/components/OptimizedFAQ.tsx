import React, { useState } from 'react';
const faqItems = [
 {
 question: "Quanto custa chamar um canalizador em Trás-os-Montes?",
 answer: "O valor depende do tipo de serviço. Oferecemos sem compromisso e sem compromisso. Para serviços básicos como desentupimentos simples, os preços começam em €60. Para arranjos mais complexas, o valor é avaliado no local."
 },
 {
 question: "Fazem serviço de urgência ao fim de semana?",
 answer: "Sim, estamos disponíveis 24 horas por dia, 7 dias por semana, incluindo fins de semana e feriados, para urgências de canalização como fugas de água graves, entupimentos totais e outros problemas urgentes."
 },
 {
 question: "Quanto tempo demora uma arranjo de fuga de água?",
 answer: "A maioria das arranjos são resolvidas no próprio dia. Fugas mais complexas que exigem abertura de paredes ou substituição de canalizações extensas podem demorar até 48 horas. Utilizamos equipamento de deteção de fugas para localização precisa."
 },
 {
 question: "Fazem instalação de aquecimento central?",
 answer: "Sim, instalamos e fazemos manutenção de sistemas de aquecimento central, caldeiras, esquentadores e radiadores. Trabalhamos com marcas como Vaillant, Junkers, Bosch e outras de qualidade."
 },
 {
 question: "Quais são as zonas que servem?",
 answer: "Servimos toda a região de Trás-os-Montes: Vila Real, Bragança, Chaves, Mirandela, Lamego, Régua, Montalegre, Valpaços, Mogadouro, Torre de Moncorvo, Alfândega da Fé e arredores."
 }
];
const OptimizedFAQ: React.FC = () => {
 const [openIndex, setOpenIndex] = useState<number | null>(0);
 const toggleFAQ = (index: number) => {
 setOpenIndex(openIndex === index ? null : index);
 };
 return (
 <div className="space-y-4">
 {faqItems.map((item, index) => (
 <div
 key={index}
 className="border border-gray-200 rounded-xl overflow-hidden bg-white"
 itemScope
 itemType="https://schema.org/Question"
 >
 <button
 className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
 onClick={() => toggleFAQ(index)}
 aria-expanded={openIndex === index}
 >
 <h3 
 className="text-lg font-semibold text-gray-900"
 itemProp="name"
 >
 {item.question}
 </h3>
 <span className="text-blue-600 text-xl">
 {openIndex === index ? '−' : '+'}
 </span>
 </button>
 
 {openIndex === index && (
 <div 
 className="px-6 pb-6 pt-2 border-t border-gray-100"
 itemScope
 itemType="https://schema.org/Answer"
 itemProp="acceptedAnswer"
 >
 <div 
 className="text-gray-600 leading-relaxed"
 itemProp="text"
 >
 {item.answer}
 </div>
 
 {/* Informations supplémentaires */}
 {index === 0 && (
 <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
 <p className="text-sm text-blue-800">
 <strong>💡 Dica:</strong> Para evitar custos elevados, faça manutenção preventiva regular das suas canalizações.
 </p>
 </div>
 )}
 
 {index === 1 && (
 <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
 <p className="text-sm text-orange-800">
 <strong>🚨 Emergência:</strong> Em caso de fuga de água grave, feche a torneira geral da casa antes de nos contactar.
 </p>
 </div>
 )}
 </div>
 )}
 </div>
 ))}
 
 {/* Schema.org FAQPage */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqItems.map(item => ({
 "@type": "Question",
 "name": item.question,
 "acceptedAnswer": {
 "@type": "Answer",
 "text": item.answer
 }
 }))
 })
 }}
 />
 
 {/* Section contact supplémentaire */}
 <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-white rounded-2xl border border-blue-200">
 <h3 className="text-xl font-bold text-gray-900 mb-4">
 Precisa de ajuda urgente com canalização?
 </h3>
 <p className="text-gray-600 mb-4">
 Não que o problema piore. Contacte-nos agora para atendimento imediato.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <a
 href="tel:+351928484451"
 className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
 >
 <span>📞</span>
 <span>Ligar Agora (24h)</span>
 </a>
 <a
 href={`https://wa.me/351928484451?text=${encodeURIComponent("Olá, preciso de um canalizador em Trás-os-Montes. Podem dar-me um orçamento?")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
 >
 <span>💬</span>
 <span>WhatsApp Urgente</span>
 </a>
 </div>
 <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
 <p className="text-sm text-orange-800">
 ⚠️ <strong>Precisa de um eletricista?</strong> Recomendamos: <a href="https://eletricista-norte-reparos.pt" className="underline font-semibold">eletricista-norte-reparos.pt</a>
 </p>
 </div>
 </div>
 </div>
 );
};
export default OptimizedFAQ;