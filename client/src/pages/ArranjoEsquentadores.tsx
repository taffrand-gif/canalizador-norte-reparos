import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useEffect } from 'react';
const faqItems = [
 { question: "Com que frequência devo fazer manutenção ao esquentador?", answer: "Recomendamos manutenção anual para garantir eficiência e segurança. A limpeza do queimador e verificação do circuito de água prolongam a vida útil do equipamento em 5-10 anos." },
 { question: "Quando devo substituir o esquentador em vez de arranjar?", answer: "Se o esquentador tem mais de 15 anos, as arranjos são frequentes ou as peças já não existem, é mais económico substituir. Um esquentador novo é mais eficiente e seguro." },
 { question: "Arranjam todas as marcas de caldeiras?", answer: "Sim, arranjamos caldeiras e esquentadores de todas as marcas: Vaillant, Junkers/Bosch, Vulcano, Ariston, Baxi, Roca e outras. Temos peças originais em stock." }
];
export default function ArranjacaoEsquentadores() {
 useEffect(() => {
 document.title = "Arranjo de Esquentadores e Caldeiras em Trás-os-Montes | Manutenção 24h";
 let meta = document.querySelector('meta[name="description"]');
 if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
 meta.setAttribute('content', 'Arranjo de esquentadores e caldeiras em Trás-os-Montes. Manutenção, substituição, todas as marcas. Urgências 24h. Ligue +351 928 484 451.');
 }, []);
 const serviceSchema = {
 "@context": "https://schema.org", "@type": "Service",
 "name": "Arranjo de Esquentadores e Caldeiras", "provider": { "@type": "Plumber", "name": "Norte Reparos", "telephone": ACTIVE_CONFIG.phone },
 "areaServed": { "@type": "GeoCircle", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 41.4393, "longitude": -6.9603 }, "geoRadius": "100000" },
 "description": "Arranjo e manutenção profissional de esquentadores e caldeiras de todas as marcas em Trás-os-Montes."
 };
 return (
 <>
 <Header />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
 "@context": "https://schema.org", "@type": "FAQPage",
 "mainEntity": faqItems.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } }))
 }) }} />
 <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4">
 <div className="max-w-4xl mx-auto text-center">
 <h1 className="text-4xl md:text-5xl font-bold mb-6">Arranjo de Esquentadores e Caldeiras</h1>
 <p className="text-xl mb-8 max-w-2xl mx-auto">Manutenção e arranjo profissional de esquentadores e caldeiras de todas as marcas. Serviço rápido em Trás-os-Montes.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href={`tel:${ACTIVE_CONFIG.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">📞 Ligar Agora</a>
 <a href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`} className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">💬 WhatsApp</a>
 </div>
 </div>
 </section>
 <section className="py-16 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Os Nossos Serviços</h2>
 <div className="grid md:grid-cols-2 gap-8">
 {[
 { title: "Arranjo de Esquentadores", desc: "Diagnóstico e arranjo de avarias: não acende, água fria, fugas de gás, ruídos estranhos. Todas as marcas.", icon: "🔥" },
 { title: "Arranjo de Caldeiras", desc: "Arranjo de caldeiras murais e de chão. Problemas de pressão, aquecimento, erros no display, fugas.", icon: "♨️" },
 { title: "Manutenção Preventiva", desc: "Limpeza anual, verificação de segurança, ajuste de pressão e temperatura. Prolonga a vida útil do equipamento.", icon: "🔧" },
 { title: "Substituição de Equipamento", desc: "Instalação de esquentadores e caldeiras novos. Aconselhamento na escolha do equipamento mais adequado.", icon: "🆕" }
 ].map((service, i) => (
 <div key={i} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
 <span className="text-4xl mb-4 block">{service.icon}</span>
 <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
 <p className="text-gray-600">{service.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 <section className="py-16 px-4 bg-gray-50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Marcas que Arranjamos</h2>
 <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
 {["Vaillant", "Junkers", "Vulcano", "Ariston", "Baxi", "Roca"].map((brand, i) => (
 <div key={i} className="p-4 bg-white rounded-xl border border-gray-200 text-center font-semibold text-gray-700">{brand}</div>
 ))}
 </div>
 </div>
 </section>
 <section className="py-16 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Preços Indicativos</h2>
 <div className="grid md:grid-cols-3 gap-6">
 {[
 { service: "Manutenção anual", price: "Desde €80" },
 { service: "Arranjo avaria", price: "Desde €100" },
 { service: "Substituição completa", price: "Desde €400" }
 ].map((item, i) => (
 <div key={i} className="p-6 bg-blue-50 rounded-xl text-center">
 <h3 className="font-bold text-gray-900 mb-2">{item.service}</h3>
 <p className="text-2xl font-bold text-blue-600">{item.price}</p>
 </div>
 ))}
 </div>
 <p className="text-center text-gray-500 mt-6 text-sm">* Preços indicativos. Orçamento final após diagnóstico.</p>
 </div>
 </section>
 <section className="py-16 px-4 bg-gray-50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Perguntas Frequentes</h2>
 <div className="space-y-4">
 {faqItems.map((item, i) => (
 <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-2">{item.question}</h3>
 <p className="text-gray-600">{item.answer}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">Problemas com o Esquentador ou Caldeira?</h2>
 <p className="text-xl mb-8">Não fique sem água quente. Contacte-nos para arranjo rápida.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href={`tel:${ACTIVE_CONFIG.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">📞 {ACTIVE_CONFIG.phone}</a>
 <a href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`} className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">💬 WhatsApp</a>
 </div>
 </div>
 </section>
 <section className="py-12 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h3 className="text-xl font-bold text-center mb-6 text-gray-900">Também servimos:</h3>
 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
 {[
 { name: "Chaves", href: "/canalizador-chaves" },
 { name: "Bragança", href: "/canalizador-braganca" },
 { name: "Miranda do Douro", href: "/canalizador-miranda-douro" },
 { name: "Freixo de Espada à Cinta", href: "/canalizador-freixo-espada-cinta" },
 { name: "Valpaços", href: "/canalizador-valpacos" }
 ].map((city, i) => (
 <a key={i} href={city.href} className="p-3 bg-gray-50 rounded-lg text-center text-blue-600 hover:bg-blue-50 font-medium transition-colors">{city.name}</a>
 ))}
 </div>
 </div>
 </section>
 <Footer />
 </>
 );
}
