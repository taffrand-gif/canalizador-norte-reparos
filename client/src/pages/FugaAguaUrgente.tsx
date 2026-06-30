import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmotionalHero from '@/components/EmotionalHero';
import PainPointSection from '@/components/PainPointSection';
import SolutionTimeline from '@/components/SolutionTimeline';
import EmergencyTestimonials from '@/components/EmergencyTestimonials';
import GuaranteeBox from '@/components/GuaranteeBox';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
export default function FugaAguaUrgente() {
 useEffect(() => {
 document.title = "Fuga de Água Urgente? Paramos Atendimento mediante confirmação por telefone | Norte Reparos";
 let meta = document.querySelector('meta[name="description"]');
 if (!meta) {
 meta = document.createElement('meta');
 meta.setAttribute('name', 'description');
 document.head.appendChild(meta);
 }
 meta.setAttribute('content', 'Fuga de água em casa? Técnico a caminho Atendimento mediante confirmação por telefone. Paramos a fuga, evitamos danos maiores. Atendimento 24h/7d. Ligue +351 928 484 451.');
 }, []);
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "O que fazer quando tenho uma fuga de água urgente?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "1) Feche a torneira de segurança principal. 2) Ligue mediante confirmação para +351 928 484 451. 3) Coloque baldes para minimizar danos. 4) Afaste equipamentos da água. Disponível 24h/7 dias."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto custa arranjar uma fuga de água urgente?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Fugas simples desde €80. Fugas complexas €150-300. Sem compromisso no local. Preço fixo antes de começar. Sem surpresas na fatura."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto tempo demora a parar uma fuga de água?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Disponível 24h/7 dias. Paramos a fuga A confirmar na maioria dos casos. Arranjo completa em 1-2 horas dependendo da gravidade."
 }
 }
 ]
 };
 return (
 <>
 <Header />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 <EmotionalHero
 painPoint="FUGA DE ÁGUA URGENTE"
 headline="Fuga de Água? Paramos Disponível 24h/7 dias"
 subheadline="Sabemos o pânico que sente. Água a correr, danos a aumentar, conta de água a disparar. Não está sozinho. Estamos a caminho."
 urgencyText="Técnico Atendimento 24h • Chegamos Disponível 24h/7 dias"
 phone={ACTIVE_CONFIG.phone}
 whatsapp={ACTIVE_CONFIG.whatsappNumber}
 whatsappMessage="Olá! Tenho uma fuga de água urgente. Preciso de ajuda imediata!"
 ctaPrimary="PARAR FUGA AGORA"
 ctaSecondary="WhatsApp Urgente"
 responseTime="A confirmar"
 />
 <PainPointSection
 title="Sabemos Exatamente Como Se Sente"
 subtitle="Uma fuga de água não é apenas um problema técnico. É stress, pânico e medo dos danos."
 empathyStatement="Já ajudámos centenas de famílias em Trás-os-Montes na mesma situação. Sabemos que cada minuto conta. Por isso, respondemos Disponível 24h/7 dias."
 painPoints={[
 {
 icon: 'alert',
 title: 'Pânico e Stress Imediato',
 description: 'Água a correr sem parar. Não sabe onde está a torneira principal. Os filhos assustados. O coração acelerado.',
 consequence: 'Cada minuto que passa, mais água se perde e mais danos acontecem.'
 },
 {
 icon: 'money',
 title: 'Conta de Água Astronómica',
 description: 'Uma fuga pode desperdiçar 200-500 litros por hora. A conta no final do mês vai ser um choque.',
 consequence: 'Pode pagar €200-500 extra só em água desperdiçada.'
 },
 {
 icon: 'trending',
 title: 'Danos na Casa',
 description: 'Paredes húmidas, tetos manchados, chão inundado, móveis estragados. Os danos multiplicam-se rapidamente.',
 consequence: 'Arranjos podem custar €1000-5000 se não parar a fuga rapidamente.'
 },
 {
 icon: 'time',
 title: 'Não Consegue Dormir',
 description: 'O som da água a correr. A preocupação constante. Não consegue relaxar enquanto não resolver.',
 consequence: 'Stress afeta toda a família. Precisa de paz de espírito AGORA.'
 }
 ]}
 />
 <SolutionTimeline
 title="Como Paramos a Sua Fuga Disponível 24h/7 dias"
 subtitle="Processo rápido, eficiente e sem stress. Você relaxa, nós resolvemos."
 totalTime="30-alguns minutos"
 guaranteeText="Paramos a fuga ou não paga. Garantia 100% satisfação."
 steps={[
 {
 time: 'A confirmar',
 title: 'Liga e Relaxa',
 description: 'Atendemos mediante confirmação. Damos instruções para minimizar danos enquanto estamos a caminho.',
 icon: 'phone'
 },
 {
 time: 'A confirmar',
 title: 'Confirmamos a deslocação por telefone',
 description: 'técnico com experiência chega A confirmar com todas as ferramentas necessárias.',
 icon: 'map'
 },
 {
 time: 'A confirmar',
 title: 'Paramos a Fuga',
 description: 'Identificamos a origem, fechamos a água, paramos a fuga. Danos controlados.',
 icon: 'wrench'
 },
 {
 time: 'A confirmar',
 title: 'Arranjo Completa',
 description: 'Arranjamos definitivamente. Testamos. Limpamos. Garantia de 2 anos. Problema resolvido.',
 icon: 'check'
 }
 ]}
 />
 <EmergencyTestimonials
 title="Já Ajudámos Centenas em Situações Urgentes"
 subtitle="Pessoas reais, problemas reais, soluções reais. Leia o que dizem."
 testimonials={[]}
 />
 <GuaranteeBox
 title="Garantias Que Dão Paz de Espírito"
 subtitle="Não arriscamos a sua confiança. Todas as arranjos têm garantia total."
 mainGuarantee="Paramos a Fuga ou Não Paga"
 phone={ACTIVE_CONFIG.phone}
 guarantees={[
 {
 icon: 'shield',
 title: 'Garantia 12 Meses',
 description: 'Todas as arranjos têm garantia de 2 anos. Se voltar a ter problemas, voltamos grátis.'
 },
 {
 icon: 'check',
 title: '100% Satisfação',
 description: 'Se não ficar satisfeito com o serviço, devolvemos o dinheiro. Sem perguntas.'
 },
 {
 icon: 'clock',
 title: 'Chegada A confirmar',
 description: 'Garantimos chegada A confirmar em toda a região de Trás-os-Montes.'
 },
 {
 icon: 'award',
 title: 'nossa equipa técnica',
 description: 'Todos os técnicos têm formação e seguro de responsabilidade civil.'
 }
 ]}
 />
 {/* FAQ Section */}
 <section className="py-16 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-gray-900">
 Perguntas Frequentes
 </h2>
 <div className="space-y-6">
 {[
 {
 q: 'O que fazer quando tenho uma fuga de água urgente?',
 a: '1) Feche a torneira de segurança principal (normalmente perto do contador). 2) Ligue mediante confirmação para +351 928 484 451. 3) Coloque baldes para minimizar danos. 4) Afaste equipamentos da água. 5) Tire fotos para seguro se necessário. Disponível 24h/7 dias e paramos a fuga.'
 },
 {
 q: 'Quanto custa arranjar uma fuga de água urgente?',
 a: 'Fugas simples (torneiras, autoclismos) desde €80. Fugas em canos €150-250. Fugas complexas (paredes, chão) €250-400. Damos sempre sem compromisso no local antes de começar. Preço fixo, sem surpresas.'
 },
 {
 q: 'Atendem mesmo Atendimento 24h/7d?',
 a: 'Sim! Estamos disponíveis 24h/7d incluindo fins de semana, feriados e madrugadas. Fugas de água não escolhem hora, e nós também não. Ligue a qualquer hora.'
 },
 {
 q: 'Quanto tempo demora a parar uma fuga?',
 a: 'Disponível 24h/7 dias. Paramos a fuga A confirmar na maioria dos casos. Arranjo completa demora 1-2 horas dependendo da gravidade. O importante é parar a água rapidamente.'
 },
 {
 q: 'Têm equipamento para detetar fugas escondidas?',
 a: 'Sim! Usamos câmaras térmicas, detetores acústicos e equipamento de inspeção CCTV para encontrar fugas escondidas em paredes, tetos e chão sem destruir tudo.'
 },
 {
 q: 'Dão garantia na arranjo?',
 a: 'Sim! Todas as arranjos têm garantia de 2 anos. Se voltar a ter problemas na mesma zona, voltamos gratuitamente. Garantia 100% satisfação ou dinheiro de volta.'
 }
 ].map((item, i) => (
 <div key={i} className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all">
 <h3 className="font-bold text-xl text-gray-900 mb-3">{item.q}</h3>
 <p className="text-gray-700 leading-relaxed">{item.a}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* Final CTA */}
 <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl md:text-5xl font-black mb-4">
 Não Mais. Cada Minuto Conta.
 </h2>
 <p className="text-xl md:text-2xl mb-8 font-semibold">
 Técnico Atendimento 24h. Chegamos A confirmar. Paramos a fuga.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-red-600 bg-white hover:bg-gray-100 rounded-xl shadow-xl transition-all active:scale-95"
 >
 📞 {ACTIVE_CONFIG.phone}
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá! Tenho uma fuga de água urgente. Preciso de ajuda imediata!')}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-xl transition-all active:scale-95"
 >
 💬 WhatsApp Urgente
 </a>
 </div>
 <p className="text-lg opacity-90">
 ✓ Orçamento Gratuito • ✓ Garantia 12 Meses
 </p>
 </div>
 </section>
 <Footer />
 </>
 );
}
