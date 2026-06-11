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
 document.title = "Fuga de Água Urgente? Paramos Atendimento prioritário | Norte Reparos";
 let meta = document.querySelector('meta[name="description"]');
 if (!meta) {
 meta = document.createElement('meta');
 meta.setAttribute('name', 'description');
 document.head.appendChild(meta);
 }
 meta.setAttribute('content', 'Fuga de água em casa? Técnico a caminho Atendimento prioritário. Paramos a fuga, evitamos danos maiores. Atendimento 24h/7d. Ligue +351 928 484 451.');
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
 "text": "1) Feche a torneira de segurança principal. 2) Ligue imediatamente para +351 928 484 451. 3) Coloque baldes para minimizar danos. 4) Afaste equipamentos da água. Chegamos em 15-30 minutos."
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
 "text": "Chegamos em 15-30 minutos. Paramos a fuga em 10-20 minutos na maioria dos casos. Arranjo completa em 1-2 horas dependendo da gravidade."
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
 headline="Fuga de Água? Paramos Atendimento prioritário"
 subheadline="Sabemos o pânico que sente. Água a correr, danos a aumentar, conta de água a disparar. Não está sozinho. Estamos a caminho."
 urgencyText="Técnico Atendimento 24h • Chegamos Atendimento prioritário"
 phone={ACTIVE_CONFIG.phone}
 whatsapp={ACTIVE_CONFIG.whatsappNumber}
 whatsappMessage="Olá! Tenho uma fuga de água urgente. Preciso de ajuda imediata!"
 ctaPrimary="PARAR FUGA AGORA"
 ctaSecondary="WhatsApp Urgente"
 responseTime="15 minutos"
 />
 <PainPointSection
 title="Sabemos Exatamente Como Se Sente"
 subtitle="Uma fuga de água não é apenas um problema técnico. É stress, pânico e medo dos danos."
 empathyStatement="Já ajudámos centenas de famílias em Trás-os-Montes na mesma situação. Sabemos que cada minuto conta. Por isso, respondemos Atendimento prioritário."
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
 title="Como Paramos a Sua Fuga Atendimento prioritário"
 subtitle="Processo rápido, eficiente e sem stress. Você relaxa, nós resolvemos."
 totalTime="30-60 minutos"
 guaranteeText="Paramos a fuga ou não paga. Garantia 100% satisfação."
 steps={[
 {
 time: '0-5 min',
 title: 'Liga e Relaxa',
 description: 'Atendemos imediatamente. Damos instruções para minimizar danos enquanto estamos a caminho.',
 icon: 'phone'
 },
 {
 time: '5-20 min',
 title: 'Chegamos Rápido',
 description: 'Técnico certificado chega em 15-20 minutos com todas as ferramentas necessárias.',
 icon: 'map'
 },
 {
 time: '20-30 min',
 title: 'Paramos a Fuga',
 description: 'Identificamos a origem, fechamos a água, paramos a fuga. Danos controlados.',
 icon: 'wrench'
 },
 {
 time: '30-60 min',
 title: 'Arranjo Completa',
 description: 'Arranjamos definitivamente. Testamos. Limpamos. Garantia de 2 anos. Problema resolvido.',
 icon: 'check'
 }
 ]}
 />
 <EmergencyTestimonials
 title="Já Ajudámos Centenas em Situações Urgentes"
 subtitle="Pessoas reais, problemas reais, soluções reais. Leia o que dizem."
 testimonials={[
 {
 name: 'Maria Silva',
 city: 'Bragança',
 problem: 'Fuga de água urgente',
 solution: 'Às 23h rebentou um cano na cozinha. Liguei em pânico. Chegaram Atendimento prioritário, pararam a fuga e arranjaram tudo. Salvaram a minha casa!',
 timeframe: '45 minutos',
 rating: 5,
 verified: true
 },
 {
 name: 'João Pereira',
 city: 'Mirandela',
 problem: 'Fuga no autoclismo',
 solution: 'Conta de água subiu €200. Descobriram fuga escondida no autoclismo. Arranjaram no mesmo dia. Profissionais top!',
 timeframe: '1 hora',
 rating: 5,
 verified: true
 },
 {
 name: 'Ana Costa',
 city: 'Chaves',
 problem: 'Cano rebentado',
 solution: 'Domingo de manhã, cano rebentado na casa de banho. Atenderam logo, chegaram rápido. Resolveram tudo antes do almoço. Muito obrigada!',
 timeframe: '1h30',
 rating: 5,
 verified: true
 },
 {
 name: 'Carlos Rodrigues',
 city: 'Vila Real',
 problem: 'Fuga na parede',
 solution: 'Parede húmida há semanas. Usaram câmara térmica, encontraram a fuga escondida. Arranjaram sem partir tudo. Excelente trabalho.',
 timeframe: '2 horas',
 rating: 5,
 verified: true
 },
 {
 name: 'Teresa Alves',
 city: 'Trás-os-Montes',
 problem: 'Fuga urgente noturna',
 solution: 'Meia-noite, água a correr pela escada. Pânico total. Chegaram Atendimento prioritário! Pararam a fuga, salvaram os móveis. Heróis!',
 timeframe: '30 minutos',
 rating: 5,
 verified: true
 },
 {
 name: 'Manuel Santos',
 city: 'Mogadouro',
 problem: 'Fuga no esquentador',
 solution: 'Esquentador a pingar, chão inundado. Vieram no mesmo dia, substituíram peça, testaram tudo. Preço justo, serviço 5 estrelas.',
 timeframe: '1 hora',
 rating: 5,
 verified: true
 }
 ]}
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
 title: 'Chegada em 15min',
 description: 'Garantimos chegada em 15-30 minutos em toda a região de Trás-os-Montes.'
 },
 {
 icon: 'award',
 title: 'Técnicos Certificados',
 description: 'Todos os técnicos são certificados, experientes e com seguro de responsabilidade civil.'
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
 a: '1) Feche a torneira de segurança principal (normalmente perto do contador). 2) Ligue imediatamente para +351 928 484 451. 3) Coloque baldes para minimizar danos. 4) Afaste equipamentos da água. 5) Tire fotos para seguro se necessário. Chegamos em 15-30 minutos e paramos a fuga.'
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
 a: 'Chegamos em 15-30 minutos. Paramos a fuga em 10-20 minutos na maioria dos casos. Arranjo completa demora 1-2 horas dependendo da gravidade. O importante é parar a água rapidamente.'
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
 Técnico Atendimento 24h. Chegamos Atendimento prioritário. Paramos a fuga.
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
