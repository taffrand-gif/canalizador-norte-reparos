import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmotionalHero from '@/components/EmotionalHero';
import PainPointSection from '@/components/PainPointSection';
import SolutionTimeline from '@/components/SolutionTimeline';
import EmergencyTestimonials from '@/components/EmergencyTestimonials';
import GuaranteeBox from '@/components/GuaranteeBox';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
export default function SanitaEntupida() {
 useEffect(() => {
 document.title = "Sanita Entupida? Desentupimos em 20 Minutos | Norte Reparos";
 let meta = document.querySelector('meta[name="description"]');
 if (!meta) {
 meta = document.createElement('meta');
 meta.setAttribute('name', 'description');
 document.head.appendChild(meta);
 }
 meta.setAttribute('content', 'Sanita entupida? Desentupimos em 20 minutos sem partir nada. Disponível 24h. Sem cheiros, sem stress. Ligue +351 928 484 451.');
 }, []);
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "Como desentupir uma sanita entupida rapidamente?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Ligue para +351 928 484 451. Chegamos em 15-20 minutos com equipamento profissional. Desentupimos em 20-30 minutos sem partir nada. Garantia total."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto custa desentupir uma sanita?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Desentupimentos simples desde €60. Entupimentos graves €100-150. Sem compromisso. Preço fixo antes de começar. Sem surpresas."
 }
 }
 ]
 };
 return (
 <>
 <Header />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 <EmotionalHero
 painPoint="SANITA ENTUPIDA URGENTE"
 headline="Sanita Entupida? Desentupimos em 20 Minutos"
 subheadline="Sabemos o embaraço que sente. Visitas a chegar, casa de banho inutilizável, cheiro insuportável. Resolvemos já."
 urgencyText="Técnico Atendimento 24h • Desentupimos em 20 minutos"
 phone={ACTIVE_CONFIG.phone}
 whatsapp={ACTIVE_CONFIG.whatsappNumber}
 whatsappMessage="Olá! Tenho a sanita entupida. Preciso de ajuda urgente!"
 ctaPrimary="DESENTUPIR AGORA"
 ctaSecondary="WhatsApp Urgente"
 responseTime="15 minutos"
 />
 <PainPointSection
 title="Sabemos o Embaraço Que Está a Passar"
 subtitle="Uma sanita entupida não é só inconveniente. É vergonha, stress e urgência."
 empathyStatement="Já desentupimos milhares de sanitas em Trás-os-Montes. Sabemos que precisa de discrição e rapidez. Chegamos em 15 minutos, resolvemos sem drama."
 painPoints={[
 {
 icon: 'alert',
 title: 'Embaraço Total',
 description: 'Visitas a chegar, família em casa, só tem uma casa de banho. O pânico de alguém precisar e não poder usar.',
 consequence: 'Situação constrangedora que precisa resolver AGORA.'
 },
 {
 icon: 'trending',
 title: 'Cheiro Insuportável',
 description: 'O cheiro espalha-se pela casa. Abre janelas, usa ambientadores, mas nada resolve. Só desentupir acaba com o problema.',
 consequence: 'Casa toda fica com mau cheiro. Vizinhos podem notar.'
 },
 {
 icon: 'time',
 title: 'Não Pode Usar Casa de Banho',
 description: 'Família inteira sem poder usar a sanita. Tem que ir a cafés, vizinhos, shopping. Situação insustentável.',
 consequence: 'Vida familiar completamente desorganizada.'
 },
 {
 icon: 'money',
 title: 'Medo de Transbordar',
 description: 'Água a subir perigosamente. Medo de transbordar e alagar tudo. Não se atreve a puxar o autoclismo.',
 consequence: 'Risco de inundação e danos no chão e paredes.'
 }
 ]}
 />
 <SolutionTimeline
 title="Como Desentupimos em 20 Minutos"
 subtitle="Rápido, limpo, discreto. Sem partir nada, sem sujeira."
 totalTime="20-40 minutos"
 guaranteeText="Desentupimos ou não paga. Garantia 100% satisfação."
 steps={[
 {
 time: '0-5 min',
 title: 'Liga Sem Vergonha',
 description: 'Atendemos com discrição. Acontece a toda a gente. Damos dicas enquanto estamos a caminho.',
 icon: 'phone'
 },
 {
 time: '5-20 min',
 title: 'Chegamos Discretamente',
 description: 'Carrinha discreta, técnico profissional. Ninguém precisa saber. Trazemos todo o equipamento.',
 icon: 'map'
 },
 {
 time: '20-30 min',
 title: 'Desentupimos Rápido',
 description: 'Usamos equipamento profissional. Desentupimos sem partir, sem sujar. Testamos várias vezes.',
 icon: 'wrench'
 },
 {
 time: '30-40 min',
 title: 'Deixamos Impecável',
 description: 'Limpamos tudo, desinfetamos, testamos. Sanita funciona perfeitamente. Problema resolvido.',
 icon: 'check'
 }
 ]}
 />
 <EmergencyTestimonials
 title="Já Desentupimos Milhares de Sanitas"
 subtitle="Clientes satisfeitos que recuperaram a paz de espírito."
 testimonials={[
 {
 name: 'Sofia Martins',
 city: 'Bragança',
 problem: 'Sanita entupida',
 solution: 'Sábado à tarde, visitas a chegar em 2 horas, sanita entupida. Pânico! Chegaram em 15 minutos, resolveram em 20. Salvaram o meu jantar!',
 timeframe: '20 minutos',
 rating: 5,
 verified: true
 },
 {
 name: 'Ricardo Sousa',
 city: 'Mirandela',
 problem: 'Entupimento grave',
 solution: 'Sanita entupida há 2 dias. Outros canalizadores não conseguiram. Estes vieram com equipamento profissional e resolveram. Top!',
 timeframe: '45 minutos',
 rating: 5,
 verified: true
 },
 {
 name: 'Carla Fernandes',
 city: 'Chaves',
 problem: 'Sanita a transbordar',
 solution: 'Água a transbordar, pânico total. Atenderam logo, chegaram rápido, desentupirão sem sujar nada. Muito profissionais e simpáticos.',
 timeframe: '25 minutos',
 rating: 5,
 verified: true
 },
 {
 name: 'Paulo Dias',
 city: 'Vila Real',
 problem: 'Entupimento recorrente',
 solution: 'Sanita entupia toda a semana. Descobriram o problema real (raízes no cano). Resolveram definitivamente. Nunca mais entupiu!',
 timeframe: '1 hora',
 rating: 5,
 verified: true
 },
 {
 name: 'Inês Ribeiro',
 city: 'Macedo de Cavaleiros',
 problem: 'Sanita entupida noite',
 solution: 'Meia-noite, sanita entupida, bebé em casa. Atenderam, vieram na hora. Discretos, rápidos, eficientes. Muito obrigada!',
 timeframe: '30 minutos',
 rating: 5,
 verified: true
 },
 {
 name: 'Tiago Lopes',
 city: 'Mogadouro',
 problem: 'Entupimento urgente',
 solution: 'Domingo de manhã, casa cheia de família, sanita entupida. Vieram em 20 minutos, resolveram sem stress. Preço justo. Recomendo!',
 timeframe: '25 minutos',
 rating: 5,
 verified: true
 }
 ]}
 />
 <GuaranteeBox
 title="Garantias Que Dão Tranquilidade"
 subtitle="Desentupimos com garantia total. Sem riscos para si."
 mainGuarantee="Desentupimos ou Não Paga"
 phone={ACTIVE_CONFIG.phone}
 guarantees={[
 {
 icon: 'shield',
 title: 'Garantia 1 Ano',
 description: 'Se voltar a entupir no mesmo local em 1 ano, voltamos gratuitamente.'
 },
 {
 icon: 'check',
 title: 'Sem Partir Nada',
 description: 'Desentupimos sem partir sanita, azulejos ou canos. Trabalho limpo garantido.'
 },
 {
 icon: 'clock',
 title: 'Chegada em 15min',
 description: 'Garantimos chegada em 15-20 minutos em toda a região de Trás-os-Montes.'
 },
 {
 icon: 'award',
 title: 'Discrição Total',
 description: 'Carrinha discreta, serviço profissional. A sua privacidade é respeitada.'
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
 q: 'Como desentupir uma sanita entupida rapidamente?',
 a: 'A forma mais rápida e segura é ligar para profissionais: +351 928 484 451. Chegamos em 15-20 minutos com equipamento adequado (mola profissional, máquina de pressão). Desentupimos em 20-30 minutos sem partir nada. Métodos caseiros (desentupidor, arame) podem piorar o entupimento.'
 },
 {
 q: 'Quanto custa desentupir uma sanita?',
 a: 'Desentupimentos simples desde €60. Entupimentos mais graves €100-150. Entupimentos complexos (raízes, objetos) €150-250. Damos sempre sem compromisso antes de começar. Preço fixo, sem surpresas.'
 },
 {
 q: 'Partem a sanita para desentupir?',
 a: 'Não! Usamos equipamento profissional que desentope sem partir nada. Em 95% dos casos resolvemos sem remover a sanita. Só em casos extremos (objeto grande preso) pode ser necessário desmontar, mas avisamos antes.'
 },
 {
 q: 'Atendem urgências de madrugada?',
 a: 'Sim! Estamos disponíveis 24h/7d incluindo madrugadas, fins de semana e feriados. Sanitas entupidas não escolhem hora. Ligue a qualquer momento.'
 },
 {
 q: 'Porque é que a sanita entope sempre?',
 a: 'Causas comuns: papel higiénico em excesso, toalhitas (não são biodegradáveis!), objetos caídos, canos antigos, raízes de árvores. Fazemos inspeção completa e identificamos a causa para evitar repetições.'
 },
 {
 q: 'Dão garantia no desentupimento?',
 a: 'Sim! Garantia de 1 ano. Se voltar a entupir no mesmo local, voltamos gratuitamente. Se o problema for estrutural (canos antigos, raízes), avisamos e damos soluções definitivas.'
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
 <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl md:text-5xl font-black mb-4">
 Não Fique Mais Tempo Sem Casa de Banho
 </h2>
 <p className="text-xl md:text-2xl mb-8 font-semibold">
 Técnico Atendimento 24h. Chegamos em 15 minutos. Desentupimos em 20.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-blue-600 bg-white hover:bg-gray-100 rounded-xl shadow-xl transition-all active:scale-95"
 >
 📞 {ACTIVE_CONFIG.phone}
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá! Tenho a sanita entupida. Preciso de ajuda urgente!')}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-xl transition-all active:scale-95"
 >
 💬 WhatsApp Urgente
 </a>
 </div>
 <p className="text-lg opacity-90">
 ✓ Orçamento Gratuito • ✓ Sem Partir Nada • ✓ Garantia 1 Ano
 </p>
 </div>
 </section>
 <Footer />
 </>
 );
}
