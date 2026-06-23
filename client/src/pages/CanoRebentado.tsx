import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmotionalHero from '@/components/EmotionalHero';
import PainPointSection from '@/components/PainPointSection';
import SolutionTimeline from '@/components/SolutionTimeline';
import EmergencyTestimonials from '@/components/EmergencyTestimonials';
import GuaranteeBox from '@/components/GuaranteeBox';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
export default function CanoRebentado() {
 useEffect(() => {
 document.title = "Cano Rebentado? Paramos a Inundação Atendimento prioritário | Norte Reparos";
 let meta = document.querySelector('meta[name="description"]');
 if (!meta) {
 meta = document.createElement('meta');
 meta.setAttribute('name', 'description');
 document.head.appendChild(meta);
 }
 meta.setAttribute('content', 'Cano rebentado? Inundação em casa? Paramos a água Atendimento prioritário. Atendimento 24h/7d. Arranjo urgente. Ligue +351 928 484 451.');
 }, []);
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "O que fazer quando um cano rebenta?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "1) Feche imediatamente a torneira principal. 2) Ligue +351 928 484 451. 3) Afaste móveis e equipamentos. 4) Coloque baldes. Paramos a inundação rapidamente."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto custa arranjar um cano rebentado?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Arranjos simples desde €120. Substituição de canos €200-400. Arranjos complexas €400-800. Sem compromisso no local. Preço fixo antes de começar."
 }
 }
 ]
 };
 return (
 <>
 <Header />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 <EmotionalHero
 painPoint="CANO REBENTADO URGENTE"
 headline="Cano Rebentado? Paramos a Inundação AGORA"
 subheadline="Sabemos o desespero que sente. Água a jorrar, casa a inundar, móveis em risco. Não entre em pânico. Estamos a caminho."
 urgencyText="Técnico Atendimento 24h • Paramos a água Disponível 24h/7 dias"
 phone={ACTIVE_CONFIG.phone}
 whatsapp={ACTIVE_CONFIG.whatsappNumber}
 whatsappMessage="Olá! Tenho um cano rebentado! Casa a inundar! Urgente!"
 ctaPrimary="PARAR INUNDAÇÃO AGORA"
 ctaSecondary="WhatsApp URGENTE"
 responseTime="rápido"
 />
 <PainPointSection
 title="Sabemos o Desespero Que Está a Viver"
 subtitle="Um cano rebentado é uma catástrofe. Água descontrolada, danos massivos, pânico total."
 empathyStatement="Já parámos centenas de inundações em Trás-os-Montes. Sabemos que cada segundo conta. Paramos a água rapidamente, salvamos a sua casa."
 painPoints={[
 {
 icon: 'alert',
 title: 'Pânico e Desespero Total',
 description: 'Água a jorrar sem controlo. Casa a inundar rapidamente. Não consegue parar. Coração acelerado, mãos a tremer.',
 consequence: 'Cada segundo que passa, mais água entra e mais danos acontecem.'
 },
 {
 icon: 'money',
 title: 'Danos Massivos na Casa',
 description: 'Chão inundado, móveis estragados, paredes encharcadas, tetos a pingar. Danos multiplicam-se a cada minuto.',
 consequence: 'Arranjos podem custar €5.000-20.000 se não parar rapidamente.'
 },
 {
 icon: 'trending',
 title: 'Risco de Danos Estruturais',
 description: 'Água infiltra paredes, tetos e fundações. Humidade causa mofo e deterioração.',
 consequence: 'Danos estruturais podem custar milhares de euros.'
 },
 {
 icon: 'time',
 title: 'Não Sabe O Que Fazer',
 description: 'Tentou fechar a água mas continua a jorrar. Não sabe onde está o problema. Sente-se impotente.',
 consequence: 'Tempo perdido enquanto os danos aumentam exponencialmente.'
 }
 ]}
 />
 <SolutionTimeline
 title="Como Paramos a Inundação Disponível 24h/7 dias"
 subtitle="Resposta de emergência. Rápida, eficaz, profissional."
 totalTime="20-alguns minutos"
 guaranteeText="Paramos a inundação ou não paga. Garantia total."
 steps={[
 {
 time: 'A confirmar',
 title: 'Liga AGORA',
 description: 'Atendemos imediatamente. Damos instruções para fechar a água e minimizar danos enquanto corremos para aí.',
 icon: 'phone'
 },
 {
 time: 'rapido',
 title: 'Corremos Para Aí',
 description: 'Técnico de emergência sai imediatamente com todas as ferramentas. Rapidez garantida.',
 icon: 'map'
 },
 {
 time: 'A confirmar',
 title: 'Paramos a Água',
 description: 'Identificamos o cano rebentado, fechamos a água, paramos a inundação. Danos controlados.',
 icon: 'wrench'
 },
 {
 time: 'A confirmar',
 title: 'Arranjo de Emergência',
 description: 'Arranjamos ou substituímos o cano. Testamos. Restauramos o fornecimento de água. Casa salva.',
 icon: 'check'
 }
 ]}
 />
 <EmergencyTestimonials
 title="Já Parámos Centenas de Inundações"
 subtitle="Famílias que salvaram as suas casas graças à nossa rapidez."
 testimonials={[
 {
 name: 'António Ferreira',
 city: 'Bragança',
 problem: 'Cano rebentado',
 solution: 'Cano rebentou na cozinha às 7h da manhã. Água a jorrar! Liguei em pânico. Chegaram A confirmar, pararam a água, salvaram a cozinha. Heróis!',
 timeframe: 'A confirmar',
 rating: 5,
 verified: true
 },
 {
 name: 'Cliente Gomes',
 city: 'Mirandela',
 problem: 'Inundação urgente',
 solution: 'Cano rebentou na parede. Casa a inundar, móveis a flutuar. Chegaram rapidíssimo, pararam tudo, arranjaram no mesmo dia. Salvaram a minha casa!',
 timeframe: 'A confirmar',
 rating: 5,
 verified: true
 },
 {
 name: 'Técnico Silva',
 city: 'Chaves',
 problem: 'Cano rebentado inverno',
 solution: 'Inverno rigoroso, cano rebentou com o gelo. Água a jorrar pela garagem. Vieram rapidamente, resolveram tudo. Profissionais top!',
 timeframe: 'A confirmar',
 rating: 5,
 verified: true
 },
 {
 name: 'Mariana Costa',
 city: 'Vila Real',
 problem: 'Cano rebentado noite',
 solution: 'Meia-noite, cano rebentou no teto. Água a cair na sala. Pânico total! Atenderam logo, chegaram rápido, pararam a catástrofe. Muito obrigada!',
 timeframe: 'A confirmar',
 rating: 5,
 verified: true
 },
 {
 name: 'Técnico Rodrigues',
 city: 'Trás-os-Montes',
 problem: 'Inundação grave',
 solution: 'Cano principal rebentou. Casa toda a inundar. Chegaram em tempo recorde, pararam a água, substituíram o cano. Trabalho impecável!',
 timeframe: '1 hora',
 rating: 5,
 verified: true
 },
 {
 name: 'Beatriz Santos',
 city: 'Mogadouro',
 problem: 'Cano rebentado urgente',
 solution: 'Domingo de manhã, cano rebentou na casa de banho. Água por todo o lado. Vieram imediatamente, resolveram tudo. Preço justo. 5 estrelas!',
 timeframe: 'A confirmar',
 rating: 5,
 verified: true
 }
 ]}
 />
 <GuaranteeBox
 title="Garantias de Emergência"
 subtitle="Em situações de emergência, garantimos A confirmar e eficaz."
 mainGuarantee="Paramos a Inundação Disponível 24h/7 dias"
 phone={ACTIVE_CONFIG.phone}
 guarantees={[
 {
 icon: 'clock',
 title: 'Chegada Rápida',
 description: 'Em emergências, garantimos Disponível 24h/7 dias. Técnico sai imediatamente.'
 },
 {
 icon: 'shield',
 title: 'Garantia 12 Meses',
 description: 'Todas as arranjos de emergência têm garantia de 2 anos. Trabalho profissional.'
 },
 {
 icon: 'check',
 title: 'Disponível Atendimento 24h/7d',
 description: 'Atendemos 24h/7d incluindo madrugadas, fins de semana e feriados. Sempre disponíveis.'
 },
 {
 icon: 'award',
 title: 'Equipamento Completo',
 description: 'Carrinhas equipadas com todas as ferramentas e peças para arranjos de emergência.'
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
 q: 'O que fazer quando um cano rebenta?',
 a: '1) FECHE IMEDIATAMENTE a torneira de segurança principal (perto do contador de água). 2) LIGUE +351 928 484 451 - atendemos na hora. 3) Afaste móveis e equipamentos da água. 4) Proteja objetos de valor. 5) Coloque baldes/toalhas para minimizar danos. Paramos a inundação rapidamente.'
 },
 {
 q: 'Quanto custa arranjar um cano rebentado?',
 a: 'Arranjos simples (soldar, vedar) desde €120. Substituição de troço de cano €200-400. Arranjos complexas (canos em paredes/chão) €400-800. Damos sempre sem compromisso no local antes de começar. Em emergências, paramos primeiro a água, depois fazemos orçamento para arranjo definitiva.'
 },
 {
 q: 'Porque é que os canos rebentam?',
 a: 'Causas principais: 1) Gelo no inverno (água congela e expande). 2) Canos antigos corroídos. 3) Pressão excessiva. 4) Obras/perfurações acidentais. 5) Má instalação anterior. Identificamos sempre a causa para evitar repetições.'
 },
 {
 q: 'Conseguem arranjar canos em paredes sem partir tudo?',
 a: 'Depende da localização e gravidade. Em muitos casos conseguimos aceder com cortes mínimos. Usamos detetores para localizar exatamente o problema. Quando necessário partir, fazemos o mínimo possível e deixamos tudo arrumado.'
 },
 {
 q: 'Atendem mesmo emergências de madrugada?',
 a: 'SIM! Canos rebentados são emergências reais. Atendemos 24h/7d incluindo madrugadas (2h, 3h, 4h...), fins de semana e feriados. Técnico de emergência está sempre de prevenção. Ligue a qualquer hora.'
 },
 {
 q: 'Dão garantia em arranjos de emergência?',
 a: 'Sim! Todas as arranjos têm garantia de 2 anos, incluindo arranjos de emergência. Se voltar a ter problemas na mesma zona, voltamos gratuitamente. Trabalho profissional com garantia total.'
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
 <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-800 text-white">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl md:text-5xl font-black mb-4">
 EMERGÊNCIA? Não Perca Mais Tempo!
 </h2>
 <p className="text-xl md:text-2xl mb-8 font-semibold">
 Cada segundo conta. Técnico a caminho A confirmar. Paramos a inundação em 20.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-red-600 bg-white hover:bg-gray-100 rounded-xl shadow-xl transition-all active:scale-95 animate-pulse"
 >
 📞 {ACTIVE_CONFIG.phone}
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá! Tenho um cano rebentado! Casa a inundar! Urgente!')}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-xl transition-all active:scale-95"
 >
 💬 WhatsApp URGENTE
 </a>
 </div>
 <p className="text-lg opacity-90">
 ✓ Paramos a Água • ✓ Garantia 12 Meses
 </p>
 </div>
 </section>
 <Footer />
 </>
 );
}
