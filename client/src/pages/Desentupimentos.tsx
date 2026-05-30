// Page Service Dédié: Desentupimentos em Trás-os-Montes
// Optimizada para SEO com keywords: desentupimentos, desentupir canos, desentupir sanita
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
 document.title = "Desentupimentos em Trás-os-Montes | Serviço Urgente 24h | Desentupir Canos, Sanita, Esgotos";
 
 // Update meta description
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Serviço de desentupimentos em Trás-os-Montes: desentupir canos, sanita, esgotos, pias e ralos. Urgências 24h, equipamento moderno, garantia no serviço. Sem compromisso.');
 }, [config]);
 // Schema.org Service JSON-LD
 const serviceSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 "name": "Desentupimentos em Trás-os-Montes",
 "description": "Serviço profissional de desentupimentos para canos, sanitas, esgotos, pias e ralos em Trás-os-Montes. Urgências 24 horas.",
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
 "@type": "GeoCircle",
 "geoMidpoint": {
 "@type": "GeoCoordinates",
 "latitude": 41.5378,
 "longitude": -6.9603
 },
 "geoRadius": "100000"
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
 "price": "60",
 "priceCurrency": "EUR"
 },
 {
 "@type": "Offer",
 "itemOffered": {
 "@type": "Service",
 "name": "Desentupimento de Pias e Lava-loiças"
 },
 "price": "50",
 "priceCurrency": "EUR"
 },
 {
 "@type": "Offer",
 "itemOffered": {
 "@type": "Service",
 "name": "Limpeza de Esgotos e Canalizações"
 },
 "price": "80",
 "priceCurrency": "EUR"
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
 Serviço de <span className="text-orange-400">Desentupimentos</span> em Trás-os-Montes
 </h1>
 <p className="text-xl mb-8 max-w-3xl">
 Desentupir canos, sanitas, esgotos, pias e ralos com equipamento moderno e técnicas não invasivas. 
 Urgências 24 horas, garantia no serviço e sem compromisso.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 Urgência 24h: {ACTIVE_CONFIG.phone}
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("URGENTE: Preciso de desentupir canos/sanita em Trás-os-Montes. Podem ajudar?")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp Urgente
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
 Desentupimentos Profissionais em Trás-os-Montes
 </h2>
 
 <div className="space-y-6 text-lg text-gray-700">
 <p>
 Especializados em <strong>desentupir canos</strong>, <strong>desentupir sanita</strong>, esgotos, pias e ralos em toda a região de Trás-os-Montes. 
 Utilizamos equipamento de alta pressão e câmaras de inspeção para diagnóstico preciso.
 </p>
 
 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Processo de Trabalho</h3>
 <ol className="space-y-4 list-decimal pl-5">
 <li><strong>Diagnóstico:</strong> Inspeção com câmaras para localizar o entupimento</li>
 <li><strong>Desentupimento:</strong> Utilização de máquinas de alta pressão (Ridgid K-6200)</li>
 <li><strong>Limpeza:</strong> Remoção completa dos resíduos e obstruções</li>
 <li><strong>Teste:</strong> Verificação do fluxo normal da água</li>
 <li><strong>Prevenção:</strong> Recomendações para evitar futuros entupimentos</li>
 </ol>
 
 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Equipamento Utilizado</h3>
 <ul className="space-y-3">
 <li className="flex items-center gap-3">
 <span className="text-blue-500 text-xl">⚙️</span>
 <span><strong>Máquinas de alta pressão Ridgid:</strong> Até 4000 PSI para desentupimentos profundos</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-blue-500 text-xl">📹</span>
 <span><strong>Câmaras de inspeção:</strong> Diagnóstico visual em tempo real</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-blue-500 text-xl">🔧</span>
 <span><strong>Ferramentas especializadas:</strong> Para diferentes tipos de canalizações</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="text-blue-500 text-xl">🧪</span>
 <span><strong>Produtos ecológicos:</strong> Limpeza sem danificar o meio ambiente</span>
 </li>
 </ul>
 </div>
 </div>
 
 {/* Right column: Pricing and coverage */}
 <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
 <h3 className="text-2xl font-bold text-gray-900 mb-6">Preços Indicativos</h3>
 
 <div className="space-y-6">
 <div className="border-b pb-4">
 <div className="flex justify-between items-center mb-2">
 <h4 className="text-lg font-semibold text-gray-900">Desentupimento de Sanita/WC</h4>
 <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">€60 - €120</span>
 </div>
 <p className="text-gray-600">Inclui diagnóstico, desentupimento e limpeza</p>
 </div>
 
 <div className="border-b pb-4">
 <div className="flex justify-between items-center mb-2">
 <h4 className="text-lg font-semibold text-gray-900">Desentupimento de Pias e Lava-loiças</h4>
 <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">€50 - €90</span>
 </div>
 <p className="text-gray-600">Para cozinhas e casas de banho</p>
 </div>
 
 <div className="border-b pb-4">
 <div className="flex justify-between items-center mb-2">
 <h4 className="text-lg font-semibold text-gray-900">Limpeza de Esgotos e Canalizações</h4>
 <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">€80 - €200</span>
 </div>
 <p className="text-gray-600">Para sistemas de drenagem externos</p>
 </div>
 
 <div className="border-b pb-4">
 <div className="flex justify-between items-center mb-2">
 <h4 className="text-lg font-semibold text-gray-900">Serviço de Urgência 24h</h4>
 <span className="bg-orange-100 text-orange-800 font-bold px-4 py-2 rounded-full">+30%</span>
 </div>
 <p className="text-gray-600">Para situações críticas fora do horário normal</p>
 </div>
 </div>
 
 <div className="mt-8 p-4 bg-blue-50 rounded-lg">
 <p className="text-blue-800 font-semibold">
 💡 <strong>Nota:</strong> Preços podem variar conforme a complexidade do serviço. 
 Sem compromisso no local.
 </p>
 </div>
 
 <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Zonas de Atuação</h3>
 <div className="grid grid-cols-2 gap-3">
 {[
 "Macedo de Cavaleiros", "Bragança", "Mirandela", "Chaves",
 "Valpaços", "Vinhais", "Miranda do Douro", "Mogadouro",
 "Torre de Moncorvo", "Freixo de Espada à Cinta"
 ].map((city, idx) => (
 <div key={idx} className="bg-gray-100 px-4 py-2 rounded-lg text-center">
 {city}
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* FAQ Section with Schema.org */}
 <section className="py-16 bg-gray-50">
 <FAQSection
 title="Perguntas Frequentes sobre Desentupimentos"
 faqs={[
 {
 question: "Quanto tempo demora um desentupimento?",
 answer: "Na maioria dos casos, resolvemos em 1-2 horas. Situações complexas podem demorar até 4 horas. Atendemos urgências 24h, incluindo fins de semana."
 },
 {
 question: "O equipamento de alta pressão danifica os canos?",
 answer: "Não. Utilizamos pressão controlada adequada ao tipo de canalização. As máquinas modernas permitem ajuste preciso para evitar danos."
 },
 {
 question: "Oferecem garantia nos desentupimentos?",
 answer: "Sim, oferecemos garantia de 6 meses em todos os serviços de desentupimento. Se o problema voltar dentro deste período, voltamos sem custos adicionais."
 }
 ]}
 />
 </section>
 {/* Internal links to city pages */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
 Serviço de Desentupimentos em Toda a Região
 </h2>
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
 <a href="/canalizador-macedo-de-cavaleiros" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Macedo de Cavaleiros</div>
 <div className="text-sm text-gray-600">Desentupimentos urgentes</div>
 </a>
 <a href="/canalizador-braganca" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Bragança</div>
 <div className="text-sm text-gray-600">Serviço 24 horas</div>
 </a>
 <a href="/canalizador-mirandela" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Mirandela</div>
 <div className="text-sm text-gray-600">Equipamento moderno</div>
 </a>
 <a href="/canalizador-chaves" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Chaves</div>
 <div className="text-sm text-gray-600">Desentupir canos</div>
 </a>
 <a href="/canalizador-valpacos" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
 <div className="text-blue-600 font-bold">Valpaços</div>
 <div className="text-sm text-gray-600">Sanitas e esgotos</div>
 </a>
 </div>
 </div>
 </section>
 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-6">
 Precisa de Desentupir Canos ou Sanita em Trás-os-Montes?
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Não que a situação piore! Contacte-nos agora para um serviço rápido e eficiente. 
 Atendemos urgências 24 horas por dia, incluindo fins de semana e feriados.
 </p>
 <div className="flex flex-col sm:flex-row gap-6 justify-center">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 {ACTIVE_CONFIG.phone}
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("URGENTE: Preciso de desentupir canos/sanita em Trás-os-Montes. Podem ajudar?")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp Urgente
 </a>
 </div>
 </div>
 </section>
 </main>
 
 <Footer />
 </>
 );
}