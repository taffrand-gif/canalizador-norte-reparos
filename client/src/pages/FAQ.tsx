// Page FAQ dédiée - Norte Reparos (Canalizador)
// 18-20 questions en portugais PT-PT avec Schema.org FAQPage JSON-LD
// Design accordéon avec useState pour open/close
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { useSite } from '@/contexts/SiteContext';
import { ChevronDown, ChevronUp, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';
export default function FAQPage() {
 const { config } = useSite();
 const [openIndex, setOpenIndex] = useState<number | null>(null);
 const toggleAccordion = (index: number) => {
 setOpenIndex(openIndex === index ? null : index);
 };
 // 20 questions pour canalizador (Norte-Reparos)
 const faqs = [
 {
 question: "Quanto custa um canalizador em Trás-os-Montes?",
 answer: "Os preços variam conforme o serviço: desentupimentos simples a partir de 60€, arranjo de fugas de água a partir de 85€, instalação de sanitários a partir de 150€. Oferecemos sem compromisso sem compromisso. Contacte-nos para uma avaliação precisa."
 },
 {
 question: "Como funciona o sem compromisso?",
 answer: "Basta contactar-nos por telefone, WhatsApp ou formulário online. Deslocamo-nos gratuitamente à sua casa para avaliar o problema, apresentamos um orçamento detalhado e só avançamos com o trabalho após sua aprovação. Sem custos ocultos."
 },
 {
 question: "Tem canalizador urgente Atendimento 24h/7d?",
 answer: "Sim! Temos serviço de urgência Atendimento 24h/7d, 7 dias por semana, incluindo fins de semana e feriados. Em caso de fuga de água, cano rebentado ou entupimento grave, ligue +351 928 484 451 para intervenção imediata."
 },
 {
 question: "Quanto tempo demora a chegar em caso de urgência?",
 answer: "Na zona de Trás-os-Montes e arredores (até 20km): A confirmar. Para outras localidades do distrito: A confirmar a 1 hora. Temos veículos equipados para deslocações rápidas em toda a região."
 },
 {
 question: "Fazem desentupimentos à noite ou fim de semana?",
 answer: "Sim, trabalhamos Atendimento 24h/7d. Não importa se é meia-noite, domingo ou feriado - temos equipas de piquete sempre disponíveis para emergências. O preço de urgência aplica-se fora do horário comercial."
 },
 {
 question: "Quais os serviços de canalização que oferecem?",
 answer: "Desentupimentos (esgotos, sanitas, lava-loiças), arranjo de fugas de água, instalação e arranjo de caldeiras/esquentadores, canalização nova (obra), aquecimento central, instalação de sanitários, inspeção por câmara, manutenção preventiva."
 },
 {
 question: "Arranjam caldeiras e esquentadores?",
 answer: "Sim, somos especialistas em arranjo de caldeiras, esquentadores e termoacumuladores de todas as marcas (Vaillant, Bosch, Junkers, etc.). Fazemos manutenção anual obrigatória e arranjo de avarias com peças originais."
 },
 {
 question: "Instalam canalização nova em obra?",
 answer: "Sim, fazemos instalação completa de canalização em obras novas, remodelações ou ampliações. Trabalhamos com materiais de qualidade (tubos PPR, cobre, PVC) e cumprimos todas as normas técnicas."
 },
 {
 question: "Quais cidades servem no distrito de Bragança?",
 answer: "Servimos todo o distrito: Bragança, Mirandela, Trás-os-Montes, Chaves, Vila Flor, Vinhais, Miranda do Douro, Mogadouro, Torre de Moncorvo, Alfândega da Fé, Freixo de Espada à Cinta, e todas as aldeias circundantes."
 },
 {
 question: "Qual é o raio de ação máximo?",
 answer: "Atendemos num raio de 100km a partir de Trás-os-Montes. Para localidades mais distantes, aplicamos uma taxa de deslocação adicional (consultar). Cobrimos praticamente todo o Nordeste Transmontano."
 },
 {
 question: "Quanto tempo demora um desentupimento normal?",
 answer: "A maioria dos desentupimentos simples (sanita, lava-loiça) resolve-se A confirmar. Casos mais complexos (esgotos entupidos, raízes nas tubagens) podem levar 2-3 horas. Usamos equipamento profissional (hidrojateamento, sondas)."
 },
 {
 question: "Dão garantia no trabalho realizado?",
 answer: "Sim, damos garantia de 12 meses em todos os trabalhos realizados. A garantia cobre mão de obra e materiais fornecidos por nós. Em caso de problema relacionado, voltamos gratuitamente para resolver."
 },
 {
 question: "Quais métodos de pagamento aceitam?",
 answer: "Aceitamos dinheiro, multibanco, transferência bancária, MB WAY e cheque. Para serviços superiores a 500€, podemos acordar pagamento faseado. Emitimos fatura-recibo com IVA à taxa legal."
 },
 {
 question: "Fazem manutenção preventiva de canalização?",
 answer: "Sim, recomendamos manutenção preventiva anual para evitar problemas graves. Inclui inspeção por câmara, limpeza de sifões, verificação de pressão, deteção de fugas ocultas e limpeza de caldeira/esquentador."
 },
 {
 question: "Quais são os sinais de problemas na canalização?",
 answer: "Cheiros a esgoto, água a demorar a escoar, manchas de humidade nas paredes, aumento anormal da conta da água, sons de água a correr quando não está a usar, água quente que não aquece, pressão baixa nas torneiras."
 },
 {
 question: "Quando devo chamar um canalizador?",
 answer: "Ao primeiro sinal: entupimentos, fugas visíveis, água quente que não funciona, cheiros desagradáveis, humidades. Não que piore - problemas pequenos tornam-se caros se não tratados atempadamente."
 },
 {
 question: "Usam equipamento profissional?",
 answer: "Sim, trabalhamos com equipamento de última geração: câmaras de inspeção Ridgid SeeSnake, máquinas de desentupir K9-102, detetores de fugas por ultrassons, máquinas de soldar PPR, ferramentas específicas para cada intervenção."
 },
 {
 question: "São canalizadores certificados?",
 answer: "Sim, temos certificação profissional e formação contínua. Trabalhamos de acordo com as normas NP EN 806 (instalações de água) e legislação portuguesa. Todos os técnicos têm curso profissional de canalizador."
 },
 {
 question: "Fazem serviços para empresas e condomínios?",
 answer: "Sim, atendemos particulares, empresas, restaurantes, hotéis, escolas, ginásios e condomínios. Para condomínios, oferecemos contratos de manutenção anual com visitas programadas e desconto em intervenções."
 },
 {
 question: "Como posso prevenir entupimentos?",
 answer: "Não deitar óleos/gordura no lava-loiça, usar redes nos ralos, não deitar produtos sanitários na sanita, fazer limpeza periódica dos sifões, instalar dissectores de gordura em cozinhas profissionais, inspecionar anualmente."
 }
 ];
 // Schema.org FAQPage JSON-LD
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
 return (
 <>
 <SEOHead 
 title="Perguntas Frequentes | Norte Reparos | Canalizador Trás-os-Montes"
 description="Respostas às 20 perguntas mais comuns sobre serviços de canalização: preços, urgências 24h, desentupimentos, arranjo caldeiras, zonas servidas. Canalizador certificado em Bragança."
 canonical="/faq"
 />
 
 {/* Schema.org JSON-LD */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
 />
 <Header />
 
 <main className="min-h-screen bg-gray-50">
 {/* Hero Section */}
 <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Perguntas Frequentes sobre <span className="text-yellow-300">Canalização</span>
 </h1>
 <p className="text-xl mb-8">
 Encontre respostas para as 20 dúvidas mais comuns sobre os nossos serviços de canalizador em Trás-os-Montes
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
 >
 <Phone size={20} />
 Ligar: {config.phone}
 </a>
 <a
 href={`https://wa.me/351928484451`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 bg-green-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
 >
 <MessageCircle size={20} />
 WhatsApp
 </a>
 </div>
 </div>
 </div>
 </section>
 {/* FAQ Accordion */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <div className="mb-12 text-center">
 <h2 className="text-3xl font-bold text-gray-900 mb-4">
 20 Perguntas sobre Serviços de Canalização
 </h2>
 <p className="text-gray-600">
 Clique em cada pergunta para ver a resposta detalhada
 </p>
 </div>
 <div className="space-y-4">
 {faqs.map((faq, index) => (
 <div
 key={index}
 className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
 >
 <button
 onClick={() => toggleAccordion(index)}
 className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
 >
 <span className="text-lg font-semibold text-gray-900 pr-4">
 <span className="text-blue-600 mr-2">{index + 1}.</span>
 {faq.question}
 </span>
 <span className="flex-shrink-0">
 {openIndex === index ? (
 <ChevronUp className="text-blue-600" size={24} />
 ) : (
 <ChevronDown className="text-gray-400" size={24} />
 )}
 </span>
 </button>
 
 {openIndex === index && (
 <div className="px-6 pb-6">
 <div className="pt-4 border-t border-gray-100">
 <p className="text-gray-700 leading-relaxed">
 {faq.answer}
 </p>
 </div>
 </div>
 )}
 </div>
 ))}
 </div>
 {/* Internal Links Section */}
 <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
 <h3 className="text-2xl font-bold text-gray-900 mb-6">
 Mais Informações Úteis
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <h4 className="font-bold text-gray-800 mb-3">📍 Serviços por Cidade</h4>
 <ul className="space-y-2">
 <li><Link href="/canalizador-braganca" className="text-blue-600 hover:underline">Canalizador Bragança</Link></li>
 <li><Link href="/canalizador-mirandela" className="text-blue-600 hover:underline">Canalizador Mirandela</Link></li>
 <li><Link href="/canalizador-chaves" className="text-blue-600 hover:underline">Canalizador Chaves</Link></li>
 <li><Link href="/canalizador-macedo-de-cavaleiros" className="text-blue-600 hover:underline">Canalizador Trás-os-Montes</Link></li>
 <li><Link href="/canalizador-vinhais" className="text-blue-600 hover:underline">Canalizador Vinhais</Link></li>
 </ul>
 </div>
 <div>
 <h4 className="font-bold text-gray-800 mb-3">🔧 Nossos Serviços</h4>
 <ul className="space-y-2">
 <li><Link href="/servicos" className="text-blue-600 hover:underline">Todos os Serviços</Link></li>
 <li><Link href="/blog/custo-canalizador-tras-os-montes-precos" className="text-blue-600 hover:underline">Preços Canalizador</Link></li>
 <li><Link href="/blog/desentupir-wc-metodos-caseiros" className="text-blue-600 hover:underline">Desentupir WC</Link></li>
 <li><Link href="/blog/arranjacao-caldeira-esquentador-manutencao" className="text-blue-600 hover:underline">Arranjo Caldeira</Link></li>
 <li><Link href="/blog" className="text-blue-600 hover:underline">Blog com Dicas</Link></li>
 </ul>
 </div>
 </div>
 </div>
 {/* CTA Section */}
 <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-xl p-8 text-center">
 <h3 className="text-2xl font-bold mb-4">
 Ainda tem dúvidas? Fale connosco!
 </h3>
 <p className="mb-6 text-blue-100">
 Estamos disponíveis Atendimento 24h/7d para esclarecer todas as suas questões sobre canalização
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
 >
 <Phone size={20} />
 Ligar Agora: {config.phone}
 </a>
 <a
 href={`https://wa.me/351928484451`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 bg-green-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
 >
 <MessageCircle size={20} />
 WhatsApp Urgente
 </a>
 </div>
 <p className="mt-6 text-sm text-blue-200">
 Disponível 24h/7 dias garantida durante o dia • Urgências Atendimento 24h/7d
 </p>
 </div>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 );
}
