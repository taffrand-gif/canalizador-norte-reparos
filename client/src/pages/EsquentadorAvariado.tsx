import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmotionalHero from '@/components/EmotionalHero';
import PainPointSection from '@/components/PainPointSection';
import SolutionTimeline from '@/components/SolutionTimeline';
import EmergencyTestimonials from '@/components/EmergencyTestimonials';
import GuaranteeBox from '@/components/GuaranteeBox';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
export default function EsquentadorAvariado() {
 useEffect(() => {
document.title = "Esquentador Avariado? Água Quente | Norte Reparos"
 let meta = document.querySelector('meta[name="description"]');
 if (!meta) {
 meta = document.createElement('meta');
 meta.setAttribute('name', 'description');
 document.head.appendChild(meta);
 }
 meta.setAttribute('content', 'Esquentador avariado? Sem água quente? Arranjamos ou substituímos em algumas horas. Atendimento 24h/7d. Ligue +351 928 484 451.');
 }, []);
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "Quanto custa arranjar um esquentador avariado?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Arranjos simples desde €80. Substituição de peças €120-200. Esquentador novo instalado desde €350. Sem compromisso no local."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto tempo demora a arranjar um esquentador?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Arranjos simples 1-2 horas. Substituição de peças 2-3 horas. Instalação de esquentador novo 3-4 horas. Água quente no mesmo dia."
 }
 }
 ]
 };
 return (
 <>
 <Header />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 <EmotionalHero
 painPoint="ESQUENTADOR AVARIADO"
 headline="Sem Água Quente? Chamenos Agora"
 subheadline="Sabemos o desconforto que sente. Banhos frios no inverno, louça por lavar, família a reclamar. Devolvemos o conforto hoje."
 urgencyText="Disponível 24h/7 dias"
 phone={ACTIVE_CONFIG.phone}
 whatsapp={ACTIVE_CONFIG.whatsappNumber}
 whatsappMessage="Olá! O meu esquentador avariou. Preciso de arranjo urgente!"
 ctaPrimary="REPARAR AGORA"
 ctaSecondary="WhatsApp Urgente"
 responseTime="A confirmar"
 />
 <PainPointSection
 title="Sabemos o Desconforto Que Está a Passar"
 subtitle="Viver sem água quente não é apenas inconveniente. É desconforto diário e stress familiar."
 empathyStatement="Já reparámos milhares de esquentadores em Trás-os-Montes. Sabemos que precisa de água quente HOJE. Chegamos Disponível 24h/7 dias, arranjamos em algumas horas."
 painPoints={[
 {
 icon: 'alert',
 title: 'Banhos Frios no Inverno',
 description: 'Acordar cedo, frio lá fora, entrar no duche e... água gelada. Tortura diária. Filhos recusam-se a tomar banho.',
 consequence: 'Desconforto extremo. Risco de constipações. Família infeliz.'
 },
 {
 icon: 'time',
 title: 'Rotina Familiar Destruída',
 description: 'Não consegue lavar louça, roupa acumula-se, casa de banho por limpar. Tudo depende de água quente.',
 consequence: 'Casa desorganizada. Stress aumenta a cada dia.'
 },
 {
 icon: 'money',
 title: 'Medo do Preço',
 description: 'Não sabe se é arranjo simples ou precisa esquentador novo. Medo de gastar €500-1000. Adia a chamada.',
 consequence: 'Problema piora. Arranjo fica mais cara. Desconforto continua.'
 },
 {
 icon: 'trending',
 title: 'Risco de Fuga de Gás',
 description: 'Esquentador faz barulhos estranhos, cheiro a gás, não acende bem. Preocupação com segurança da família.',
 consequence: 'Perigo real de fuga de gás ou intoxicação. Não pode ignorar.'
 }
 ]}
 />
 <SolutionTimeline
 title="Como Devolvemos Água Quente em algumas horas"
 subtitle="Diagnóstico rápido, arranjo eficaz, água quente garantida."
 totalTime="2-4 horas"
 guaranteeText="Água quente hoje ou não paga. Garantia do serviço."
 steps={[
 {
 time: 'A confirmar',
 title: 'Liga e Descreve',
 description: 'Atendemos, fazemos perguntas sobre os sintomas. Já sabemos o que pode ser. Parranjamos peças.',
 icon: 'phone'
 },
 {
 time: 'A confirmar',
 title: 'Chegamos Parranjados',
 description: 'Técnico especializado em esquentadores chega com ferramentas e peças comuns. Pronto para arranjar.',
 icon: 'map'
 },
 {
 time: 'A confirmar',
 title: 'Diagnóstico e Arranjo',
 description: 'Inspecionamos, identificamos o problema, arranjamos ou substituímos peças. Testamos tudo.',
 icon: 'wrench'
 },
 {
 time: 'A confirmar',
 title: 'Água Quente Garantida',
 description: 'Esquentador funciona perfeitamente. Testamos temperatura, pressão, segurança. Explicamos tudo.',
 icon: 'check'
 }
 ]}
 />
 <EmergencyTestimonials
 title="Já Devolvemos Água Quente a Milhares"
 subtitle="Famílias que recuperaram o conforto no mesmo dia."
 testimonials={[
 {
 name: 'Sandra Oliveira',
 city: 'Bragança',
 problem: 'Esquentador não acende',
 solution: 'Esquentador não acendia há 3 dias. Banhos frios horríveis. Vieram, descobriram que era a pilha e um sensor. Arranjaram Atendimento rápido. Água quente de volta!',
 timeframe: '1 hora',
 rating: 5,
 verified: true
 },
 {
 name: 'Miguel Teixeira',
 city: 'Mirandela',
 problem: 'Água não aquece',
 solution: 'Água saía morna, nunca quente. Substituíram a membrana e limparam o queimador. Agora funciona perfeitamente. Preço justo!',
 timeframe: '1h30',
 rating: 5,
 verified: true
 },
 {
 name: 'Cristina Lopes',
 city: 'Chaves',
 problem: 'Esquentador com fuga',
 solution: 'Esquentador a pingar água. Medo de estragar tudo. Vieram rápido, substituíram vedantes, testaram. Problema resolvido. Muito profissionais!',
 timeframe: '1 hora',
 rating: 5,
 verified: true
 },
 {
 name: 'Rui Fernandes',
 city: 'Vila Real',
 problem: 'Esquentador antigo',
 solution: 'Esquentador com 15 anos, sempre a avariar. Aconselharam substituir. Instalaram novo em algumas horas. Água quente perfeita. Vale cada cêntimo!',
 timeframe: '3 horas',
 rating: 5,
 verified: true
 },
 {
 name: 'Paula Marques',
 city: 'Trás-os-Montes',
 problem: 'Sem água quente urgente',
 solution: 'Inverno rigoroso, esquentador avariou. Família toda sem banho. Vieram no mesmo dia, arranjaram. Salvaram o nosso inverno!',
 timeframe: '2 horas',
 rating: 5,
 verified: true
 },
 {
 name: 'Vítor Sousa',
 city: 'Mogadouro',
 problem: 'Esquentador faz barulho',
 solution: 'Esquentador fazia barulho estranho, cheiro a gás. Preocupado com segurança. Vieram, limparam, ajustaram. Funciona silencioso agora. Top!',
 timeframe: '1h30',
 rating: 5,
 verified: true
 }
 ]}
 />
 <GuaranteeBox
 title="Garantias de Conforto"
 subtitle="Arranjamos com garantia total. Água quente garantida ou dinheiro de volta."
 mainGuarantee="Água Quente Hoje ou Não Paga"
 phone={ACTIVE_CONFIG.phone}
 guarantees={[
 {
 icon: 'shield',
 title: 'Garantia 12 Meses',
 description: 'Todas as arranjos e instalações têm garantia de 2 anos. Peças e mão de obra.'
 },
 {
 icon: 'check',
 title: 'Orçamento Gratuito',
 description: 'Diagnóstico e orçamento 100% gratuitos. Só paga se aprovar e arranjarmos.'
 },
 {
 icon: 'clock',
 title: 'Arranjo no Dia',
 description: 'Na maioria dos casos arranjamos no mesmo dia. Água quente em 2-4 horas.'
 },
 {
 icon: 'award',
 title: 'nossa equipa técnica',
 description: 'Especialistas em esquentadores de todas as marcas. Certificação de gás.'
 }
 ]}
 />
 {/* Price Transparency */}
 <section className="py-16 px-4 bg-white">
 <div className="max-w-5xl mx-auto">
 <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-gray-900">
 Preços Transparentes
 </h2>
 <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
 Sem surpresas. Preço fixo antes de começar. Só paga se aprovar.
 </p>
 <div className="grid md:grid-cols-3 gap-6">
 <div className="bg-blue-50 p-8 rounded-xl border-2 border-blue-200 text-center">
 <h3 className="text-2xl font-bold text-gray-900 mb-2">Arranjo Simples</h3>
 <div className="text-4xl font-black text-blue-600 mb-4">€80-120</div>
 <ul className="text-left text-gray-700 space-y-2">
 <li>✓ Substituição pilhas</li>
 <li>✓ Limpeza queimador</li>
 <li>✓ Ajustes simples</li>
 <li>✓ Garantia 1 ano</li>
 </ul>
 </div>
 <div className="bg-green-50 p-8 rounded-xl border-2 border-green-400 text-center relative">
 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
 MAIS COMUM
 </div>
 <h3 className="text-2xl font-bold text-gray-900 mb-2">Substituição Peças</h3>
 <div className="text-4xl font-black text-green-600 mb-4">€120-250</div>
 <ul className="text-left text-gray-700 space-y-2">
 <li>✓ Membrana</li>
 <li>✓ Termostato</li>
 <li>✓ Válvulas</li>
 <li>✓ Garantia do serviço</li>
 </ul>
 </div>
 <div className="bg-orange-50 p-8 rounded-xl border-2 border-orange-200 text-center">
 <h3 className="text-2xl font-bold text-gray-900 mb-2">Esquentador Novo</h3>
 <div className="text-4xl font-black text-orange-600 mb-4">€350-800</div>
 <ul className="text-left text-gray-700 space-y-2">
 <li>✓ Esquentador novo</li>
 <li>✓ Instalação completa</li>
 <li>✓ Remoção do antigo</li>
 <li>✓ Garantia do serviço</li>
 </ul>
 </div>
 </div>
 <p className="text-center text-gray-600 mt-8">
 * Preços incluem deslocação, mão de obra e IVA. Peças à parte quando necessário.
 </p>
 </div>
 </section>
 {/* FAQ Section */}
 <section className="py-16 px-4 bg-gray-50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-gray-900">
 Perguntas Frequentes
 </h2>
 <div className="space-y-6">
 {[
 {
 q: 'Quanto custa arranjar um esquentador avariado?',
 a: 'Arranjos simples (pilhas, limpeza) €80-120. Substituição de peças (membrana, termostato) €120-250. Esquentador novo instalado €350-800 dependendo do modelo. Damos sempre sem compromisso no local antes de começar. Só paga se aprovar.'
 },
 {
 q: 'Vale a pena arranjar ou comprar novo?',
 a: 'Depende da idade e estado. Esquentadores com menos de 8 anos: geralmente vale arranjar. Mais de 10 anos com avarias frequentes: melhor substituir. Fazemos diagnóstico honesto e aconselhamos a melhor opção para o seu caso e orçamento.'
 },
 {
 q: 'Quanto tempo demora a arranjar?',
 a: 'Arranjos simples 1-2 horas. Substituição de peças 2-3 horas. Instalação de esquentador novo 3-4 horas. Na maioria dos casos tem água quente no mesmo dia.'
 },
 {
 q: 'Trabalham com todas as marcas?',
 a: 'Sim! Arranjamos todas as marcas: Vulcano, Junkers, Roca, Cointra, Fagor, Ariston, etc. Temos peças das marcas principais em stock. nossa equipa técnica para todas as marcas.'
 },
 {
 q: 'Dão garantia na arranjo?',
 a: 'Sim! Arranjos têm garantia de 2 anos (peças e mão de obra). Instalações de esquentadores novos têm garantia de 2 anos nossa + garantia do fabricante. Se voltar a ter problemas, voltamos gratuitamente.'
 },
 {
 q: 'O que fazer se o esquentador não acende?',
 a: 'Verifique: 1) Pilhas (trocar por novas). 2) Gás aberto. 3) Água aberta. 4) Pressão de água suficiente. Se continuar sem acender, ligue +351 928 484 451. Pode ser membrana, termostato ou sensor. Diagnosticamos e arranjamos no mesmo dia.'
 }
 ].map((item, i) => (
 <div key={i} className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all">
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
 Recupere o Conforto Hoje
 </h2>
 <p className="text-xl md:text-2xl mb-8 font-semibold">
 Técnico especializado disponível. Água quente em algumas horas. Garantia total.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-blue-600 bg-white hover:bg-gray-100 rounded-xl shadow-xl transition-all active:scale-95"
 >
 📞 {ACTIVE_CONFIG.phone}
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá! O meu esquentador avariou. Preciso de arranjo urgente!')}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-xl transition-all active:scale-95"
 >
 💬 WhatsApp Urgente
 </a>
 </div>
 <p className="text-lg opacity-90">
 ✓ Orçamento Gratuito • ✓ Arranjo no Dia • ✓ Garantia 12 Meses
 </p>
 </div>
 </section>
 <Footer />
 </>
 );
}
