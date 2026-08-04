// Page Service Dédié: Desentupimento em Trás-os-Montes
// Query money GSC: 'desentupimento' (vol 1600/mois, CPC 12.76€, pos=None — GAP t_e618703b)
// Optimizada para SEO com keywords: desentupimento, desentupimentos, desentupir canos, desentupir sanita
// R12: site instalação, NÃO urgência. Urgência real = canalizador-urgente.pt (partner).
// R5: zéro geoMidpoint (géo-neutre strict, cf. A5-2.1 PR #74).
// R4/R12: grille officielle PRICING.md (65€/h + Z1=15→Z6=65 + +50% noite/fim-de-semana/feriado).
// R145: zéro délai chiffré dans le contenu client.
// R11: équipement listado de forma genérica, sem claims de marca/modelo específicos.
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import StructuredData from '@/components/StructuredData';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useEffect } from 'react';
export default function Desentupimentos() {
 const { config } = useSite();
 useEffect(() => {
 document.title = "Desentupimento em Trás-os-Montes | Orçamento por Escrito | Desde 65€/h";

 // Update meta description
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Serviço de desentupimento em Trás-os-Montes: desentupir canos, sanita, esgotos, pias e ralos. Orçamento por escrito antes de qualquer intervenção. Desde 65€/h + deslocação por zona. Trás-os-Montes.');
 }, [config]);
 // Schema.org Service JSON-LD (aligné doctrine R5 + R12 + R4, cf. PR #74 + PR #78)
 // R5 : zéro geoMidpoint — couverture large seulement (areaServed = AdministrativeArea)
 // R12 : prix = grille officielle PRICING.md (65€/h + Z1-Z6), pas de forfait fixe inventé
 // R145 : pas de délai chiffré
 const serviceSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 "name": "Desentupimento em Trás-os-Montes",
 "description": "Serviço profissional de desentupimento de canos, sanitas, esgotos, pias e ralos em Trás-os-Montes. Orçamento por escrito antes de qualquer intervenção, sem surpresas na fatura.",
 "provider": {
 "@type": "LocalBusiness",
 "name": "Norte Reparos - Canalizador Profissional",
 "telephone": ACTIVE_CONFIG.phone,
 "address": {
 "@type": "PostalAddress",
 "addressRegion": "Trás-os-Montes",
 "addressCountry": "PT"
 }
 },
 "areaServed": {
 "@type": "AdministrativeArea",
 "name": "Trás-os-Montes"
 },
 "hasOfferCatalog": {
 "@type": "OfferCatalog",
 "name": "Serviços de Desentupimento",
 "itemListElement": [
 {
 "@type": "Offer",
 "itemOffered": {
 "@type": "Service",
 "name": "Desentupimento de Sanita/WC"
 },
 "priceSpecification": {
 "@type": "UnitPriceSpecification",
 "priceCurrency": "EUR",
 "price": "65",
 "unitText": "hora"
 }
 },
 {
 "@type": "Offer",
 "itemOffered": {
 "@type": "Service",
 "name": "Desentupimento de Pias e Lava-loiças"
 },
 "priceSpecification": {
 "@type": "UnitPriceSpecification",
 "priceCurrency": "EUR",
 "price": "65",
 "unitText": "hora"
 }
 },
 {
 "@type": "Offer",
 "itemOffered": {
 "@type": "Service",
 "name": "Limpeza de Esgotos e Canalizações"
 },
 "priceSpecification": {
 "@type": "UnitPriceSpecification",
 "priceCurrency": "EUR",
 "price": "65",
 "unitText": "hora"
 }
 }
 ]
 }
 };
 return (
 <>
 <SEOHeadEnhanced pageType="service" />
 <StructuredData customSchema={serviceSchema} />

 <Header />

 <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
 {/* Hero section */}
 <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
 <div className="container mx-auto px-4">
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Desentupimento em <span className="text-orange-400">Trás-os-Montes</span>
 </h1>
 <p className="text-xl mb-8 max-w-3xl">
 Desentupir canos, sanitas, esgotos, pias e ralos com equipamento profissional e técnicas não invasivas.
 Orçamento por escrito antes de qualquer intervenção, sem surpresas na fatura.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 Pedir Orçamento: {ACTIVE_CONFIG.phone}
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de um orçamento para desentupimento em Trás-os-Montes. Podem ajudar?")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp Orçamento
 </a>
 </div>
 </div>
 </section>
 {/* Service details */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 {/* Left column: Service description */}
 <div>
 <h2 className="text-3xl font-bold text-gray-900 mb-6">
 Desentupimento Profissional em Trás-os-Montes
 </h2>

 <div className="space-y-6 text-lg text-gray-700">
 <p>
 Especializados em <strong>desentupir canos</strong>, <strong>desentupir sanita</strong>, esgotos, pias e ralos em toda a região de Trás-os-Montes.
 Utilizamos equipamento profissional de alta pressão e câmaras de inspeção para diagnóstico preciso, sem partir paredes ou pavimentos.
 </p>

 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Processo de Trabalho</h3>
 <ol className="space-y-4 list-decimal pl-5">
 <li><strong>Diagnóstico:</strong> Inspeção inicial para localizar o entupimento e identificar a causa</li>
 <li><strong>Orçamento por escrito:</strong> Descrição do trabalho, materiais e prazo estimado antes de qualquer intervenção</li>
 <li><strong>Desentupimento:</strong> Utilização de máquinas de alta pressão adequadas ao tipo de canalização</li>
 <li><strong>Verificação:</strong> Teste de fluxo para confirmar a resolução completa</li>
 <li><strong>Recomendações:</strong> Conselho prático para evitar entupimentos futuros no mesmo ponto</li>
 </ol>

 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Equipamento Utilizado</h3>
 <ul className="space-y-3">
 <li className="flex items-center gap-3">
 <span className="text-blue-500 text-xl">⚙️</span>
 <span><strong>Máquinas de alta pressão profissionais:</strong> Adequadas a diferentes diâmetros e tipos de entupimento</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-blue-500 text-xl">📹</span>
 <span><strong>Câmaras de inspeção:</strong> Diagnóstico visual em tempo real, sem partir paredes</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-blue-500 text-xl">🔧</span>
 <span><strong>Ferramentas especializadas:</strong> Para diferentes tipos de canalizações e acessórios</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-blue-500 text-xl">🧪</span>
 <span><strong>Produtos não agressivos:</strong> Limpeza eficaz sem danificar tubagens nem o meio ambiente</span>
 </li>
 </ul>

 <p className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
 <strong>Quando é urgência real:</strong> se a sanita transborda, o esgoto recua, ou há água a alagar, contacte primeiro o serviço de urgência 24h. Para entupimentos pontuais, sem refluxo ativo, este serviço de desentupimento agendado é o indicado — orçamento por escrito, intervenção planeada, sem tarifa de urgência.
 </p>
 </div>
 </div>

 {/* Right column: Pricing and coverage */}
 <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
 <h3 className="text-2xl font-bold text-gray-900 mb-6">Preços (tabela oficial)</h3>

 <div className="space-y-4">
 <div className="border-b pb-4">
 <div className="flex justify-between items-center mb-2">
 <h4 className="text-lg font-semibold text-gray-900">Mão de obra</h4>
 <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">65 €/h</span>
 </div>
 <p className="text-gray-600">Tarifa horária do serviço de canalização (R12 — tabela oficial Norte Reparos).</p>
 </div>

 <div className="border-b pb-4">
 <h4 className="text-lg font-semibold text-gray-900 mb-2">Deslocação por zona (Z1 → Z6)</h4>
 <div className="grid grid-cols-3 gap-2 text-sm">
 <div className="bg-gray-50 px-2 py-1 rounded text-center"><strong>Z1</strong> · 15 €</div>
 <div className="bg-gray-50 px-2 py-1 rounded text-center"><strong>Z2</strong> · 25 €</div>
 <div className="bg-gray-50 px-2 py-1 rounded text-center"><strong>Z3</strong> · 35 €</div>
 <div className="bg-gray-50 px-2 py-1 rounded text-center"><strong>Z4</strong> · 45 €</div>
 <div className="bg-gray-50 px-2 py-1 rounded text-center"><strong>Z5</strong> · 55 €</div>
 <div className="bg-gray-50 px-2 py-1 rounded text-center"><strong>Z6</strong> · 65 €</div>
 </div>
 <p className="text-gray-600 mt-2">Distância rodoviária real desde Macedo de Cavaleiros (raio máximo ≈130 km).</p>
 </div>

 <div className="border-b pb-4">
 <div className="flex justify-between items-center mb-2">
 <h4 className="text-lg font-semibold text-gray-900">Majoração noite / fim de semana / feriado</h4>
 <span className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-full">+50 %</span>
 </div>
 <p className="text-gray-600">Aplica-se à mão de obra e à deslocação. Orçamento por escrito antes de qualquer trabalho.</p>
 </div>

 <div className="border-b pb-4">
 <h4 className="text-lg font-semibold text-gray-900 mb-2">Casos variáveis</h4>
 <p className="text-gray-600">Entupimentos complexos, raízes, colapsos de tubagem: sempre <strong>sob orçamento</strong> por escrito, após diagnóstico no local.</p>
 </div>
 </div>

 <div className="mt-8 p-4 bg-blue-50 rounded-lg">
 <p className="text-blue-800 font-semibold">
 💡 <strong>Sem surpresas na fatura:</strong> orçamento por escrito antes de qualquer trabalho, descrevendo a intervenção, os materiais e o prazo estimado.
 </p>
 </div>

 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Zonas de Atuação</h3>
 <div className="grid grid-cols-2 gap-3">
 {[
 "Macedo de Cavaleiros (Z1)", "Mirandela (Z2)", "Bragança (Z2)", "Chaves (Z4)",
 "Valpaços (Z4)", "Vinhais (Z4)", "Miranda do Douro (Z5)", "Mogadouro (Z3)",
 "Torre de Moncorvo (Z4)", "Freixo de Espada à Cinta (Z5)"
 ].map((city, idx) => (
 <div key={idx} className="bg-gray-100 px-4 py-2 rounded-lg text-center text-sm">
 {city}
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* FAQ Section with Schema.org — alignée query 'desentupimento' + R12 + R145 */}
 <section className="py-16 bg-gray-50">
 <FAQSection
 title="Perguntas Frequentes sobre Desentupimento"
 faqs={[
 {
 question: "Quanto custa um desentupimento em Trás-os-Montes?",
 answer: "O preço depende da duração da intervenção, da zona de deslocação e do tipo de entupimento. A nossa tabela oficial: 65 €/h de mão de obra, mais a deslocação por zona (Z1=15 € → Z6=65 €), com majoração de +50 % à noite, fim de semana e feriado. O orçamento é sempre por escrito, antes de qualquer trabalho, sem surpresas na fatura."
 },
 {
 question: "O desentupimento é urgente? Quando devo ligar para a urgência 24h?",
 answer: "O nosso serviço de desentupimento é agendado, com orçamento por escrito. Para situações com refluxo ativo, transbordo de sanita ou alagamento, contacte antes o serviço de urgência 24h — esse cenário é tratado em canal próprio, fora deste site de instalação."
 },
 {
 question: "É preciso partir paredes ou pavimentos para desentupir?",
 answer: "Na maioria dos casos, não. Usamos máquinas de alta pressão e câmaras de inspeção que permitem localizar e resolver o entupimento pelo interior da tubagem, sem obras. Em casos excecionais (colapso, raízes, tubagem partida), avaliamos no local e propomos a solução tecnicamente mais adequada, sempre com orçamento prévio."
 },
 {
 question: "Quanto tempo demora um desentupimento?",
 answer: "Depende da complexidade e da acessibilidade. Casos simples resolvem-se numa única visita. Casos com raízes, gordura acumulada ou tubagem parcialmente colapsada podem exigir mais tempo ou uma segunda intervenção — sempre confirmada por escrito."
 },
 {
 question: "Trabalham em toda a região de Trás-os-Montes?",
 answer: "Sim. A nossa cobertura vai de Macedo de Cavaleiros (Z1) até à periferia da região (Z5/Z6), num raio rodoviário de cerca de 130 km. Trabalhamos em Bragança, Mirandela, Chaves, Valpaços, Vinhais, Miranda do Douro, Mogadouro, Torre de Moncorvo, Freixo de Espada à Cinta, Lamego, Vila Real e concelhos envolventes."
 },
 {
 question: "Posso tentar desentupir sozinho antes de chamar um canalizador?",
 answer: "Sim, em casos simples. Para entupimentos de sanita, um desentupidor de borracha (ventosa) resolve muitas vezes. Para pias e lava-loiças, água quente com bicarbonato e vinagre pode ajudar. Se o entupimento voltar em poucos dias, se houver mais do que um ponto a drenar mal, ou se notar cheiros da canalização, vale a pena chamar um profissional para diagnóstico com câmara."
 }
 ]}
 />
 </section>
 {/* Internal links to dedicated city pages (R11/R5: pages réelles only, volées de l'inventaire live) */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
 Desentupimento por Concelho
 </h2>
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
 <a href="/canalizador-desentupimento-macedo-de-cavaleiros" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Macedo de Cavaleiros</div>
 <div className="text-sm text-gray-600">Z1 · sede operacional</div>
 </a>
 <a href="/canalizador-desentupimento-mirandela" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Mirandela</div>
 <div className="text-sm text-gray-600">Z2 · desentupimento profissional</div>
 </a>
 <a href="/canalizador-desentupimento-braganca" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Bragança</div>
 <div className="text-sm text-gray-600">Z2 · câmara de inspeção</div>
 </a>
 <a href="/canalizador-desentupimento-chaves" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Chaves</div>
 <div className="text-sm text-gray-600">Z4 · alta pressão</div>
 </a>
 <a href="/canalizador-desentupimento-valpacos" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Valpaços</div>
 <div className="text-sm text-gray-600">Z4 · saneamento</div>
 </a>
 <a href="/canalizador-desentupimento-mogadouro" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Mogadouro</div>
 <div className="text-sm text-gray-600">Z3 · esgotos e fossas</div>
 </a>
 <a href="/canalizador-desentupimento-vinhais" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Vinhais</div>
 <div className="text-sm text-gray-600">Z4 · zona rural</div>
 </a>
 <a href="/canalizador-desentupimento-miranda-do-douro" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Miranda do Douro</div>
 <div className="text-sm text-gray-600">Z5 · alta pressão</div>
 </a>
 <a href="/canalizador-desentupimento-torre-de-moncorvo" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Torre de Moncorvo</div>
 <div className="text-sm text-gray-600">Z4 · saneamento</div>
 </a>
 <a href="/canalizador-desentupimento-freixo-de-espada-a-cinta" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Freixo de Espada à Cinta</div>
 <div className="text-sm text-gray-600">Z5 · Douro Internacional</div>
 </a>
 <a href="/canalizador-desentupimento-lamego" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Lamego</div>
 <div className="text-sm text-gray-600">Z6 · Douro Sul</div>
 </a>
 <a href="/canalizador-desentupimento-vila-real" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Vila Real</div>
 <div className="text-sm text-gray-600">Z4 · capital distrito</div>
 </a>
 </div>
 <p className="text-center text-gray-600 mt-8 text-sm">
 Cobertura completa em ~34 concelhos de Trás-os-Montes e Douro. Procurou o seu concelho? Contacte-nos — confirmamos a zona e marcamos a visita.
 </p>
 </div>
 </section>
 {/* CTA Final — aligné R12 (não urgência) + R4 (orçamento por escrito) */}
 <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-6">
 Precisa de Desentupimento em Trás-os-Montes?
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Peça um orçamento por escrito, sem compromisso. Deslocação por zona, preço combinado antes do trabalho. Para refluxo ativo ou alagamento, contacte antes o serviço de urgência 24h.
 </p>
 <div className="flex flex-col sm:flex-row gap-6 justify-center">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 Pedir Orçamento: {ACTIVE_CONFIG.phone}
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de um orçamento para desentupimento em Trás-os-Montes. Podem ajudar?")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp Orçamento
 </a>
 </div>
 </div>
 </section>
 </main>

 <Footer />
 </>
 );
}