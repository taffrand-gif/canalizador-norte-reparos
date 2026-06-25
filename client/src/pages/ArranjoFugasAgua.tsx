import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useEffect } from 'react';
const faqItems = [
 { question: "Como detetar uma fuga de água escondida?", answer: "Sinais comuns incluem manchas de humidade, aumento inexplicável da conta de água, som de água a correr e bolhas na pintura. Utilizamos câmaras de inspeção e detetores acústicos para localização precisa." },
 { question: "Quanto custa arranjar uma fuga de água?", answer: "O preço varia entre €80 e €300 dependendo da complexidade. Fugas visíveis são mais económicas. Oferecemos sem compromisso e sem compromisso." },
 { question: "Fazem arranjo de fugas ao fim de semana?", answer: "Sim, estamos disponíveis 24h/7d incluindo fins de semana e feriados para urgências de fugas de água em toda a região de Trás-os-Montes." }
];
export default function ArranjacaoFugasAgua() {
 useEffect(() => {
 document.title = "Arranjo de Fugas de Água em Trás-os-Montes | Deteção e Arranjo 24h";
 let meta = document.querySelector('meta[name="description"]');
 if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
 meta.setAttribute('content', 'Arranjo de fugas de água em Trás-os-Montes. Deteção com câmara de inspeção, arranjo urgente 24h. Sem compromisso. Ligue +351 928 484 451.');
 }, []);
 const serviceSchema = {
 "@context": "https://schema.org", "@type": "Service",
 "name": "Arranjo de Fugas de Água", "provider": { "@type": "Plumber", "name": "Norte Reparos", "telephone": ACTIVE_CONFIG.phone },
 "areaServed": { "@type": "GeoCircle", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 41.4393, "longitude": -6.9603 }, "geoRadius": "100000" },
 "description": "Serviço profissional de deteção e arranjo de fugas de água em Trás-os-Montes."
 };
 return (
 <>
 <Header />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
 "@context": "https://schema.org", "@type": "FAQPage",
 "mainEntity": faqItems.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } }))
 }) }} />
 {/* Hero */}
 <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4">
 <div className="max-w-4xl mx-auto text-center">
 <h1 className="text-4xl md:text-5xl font-bold mb-6">Arranjo de Fugas de Água em Trás-os-Montes</h1>
 <p className="text-xl mb-8 max-w-2xl mx-auto">Deteção e arranjo profissional de fugas de água. Equipamento moderno, Disponível 24h/7 dias 24h/7d em toda a região.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href={`tel:${ACTIVE_CONFIG.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">📞 Ligar Agora</a>
 <a href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`} className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">💬 WhatsApp</a>
 </div>
 </div>
 </section>
 {/* Services */}
 <section className="py-16 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Os Nossos Serviços de Arranjo de Fugas</h2>
 <div className="grid md:grid-cols-2 gap-8">
 {[
 { title: "Deteção de Fugas", desc: "Utilizamos câmaras de inspeção CCTV e detetores acústicos para localizar fugas escondidas sem destruir paredes ou pavimentos.", icon: "🔍" },
 { title: "Arranjo de Canos", desc: "Arranjo e substituição de canos danificados, incluindo canos de cobre, PVC e polietileno. Trabalho limpo e garantido.", icon: "🔧" },
 { title: "Fugas em Casas de Banho", desc: "Arranjo de fugas em torneiras, autoclismos, bases de duche e banheiras. Substituição de vedantes e juntas.", icon: "🚿" },
 { title: "Fugas Urgentes 24h", desc: "Serviço de urgência disponível Atendimento 24h/7d para fugas graves que necessitam Intervenção mediante confirmação. Tempo de resposta rápido.", icon: "🚨" }
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
 {/* Process */}
 <section className="py-16 px-4 bg-gray-50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Como Funciona</h2>
 <div className="grid md:grid-cols-4 gap-6">
 {[
 { step: "1", title: "Contacto", desc: "Ligue ou envie mensagem WhatsApp" },
 { step: "2", title: "Diagnóstico", desc: "Inspeção no local com equipamento profissional" },
 { step: "3", title: "Orçamento", desc: "Sem compromisso e transparente" },
 { step: "4", title: "Arranjo", desc: "Trabalho rápido com garantia" }
 ].map((item, i) => (
 <div key={i} className="text-center p-4">
 <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">{item.step}</div>
 <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
 <p className="text-sm text-gray-600">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* Prices */}
 <section className="py-16 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Preços Indicativos</h2>
 <div className="grid md:grid-cols-3 gap-6">
 {[
 { service: "Arranjo torneira", price: "Desde €60" },
 { service: "Deteção de fuga", price: "Desde €100" },
 { service: "Substituição cano", price: "Desde €150" }
 ].map((item, i) => (
 <div key={i} className="p-6 bg-blue-50 rounded-xl text-center">
 <h3 className="font-bold text-gray-900 mb-2">{item.service}</h3>
 <p className="text-2xl font-bold text-blue-600">{item.price}</p>
 </div>
 ))}
 </div>
 <p className="text-center text-gray-500 mt-6 text-sm">* Preços indicativos. Orçamento final após inspeção no local.</p>
 </div>
 </section>
 {/* FAQ */}
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
 {/* CTA */}
 <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">Tem uma Fuga de Água? Não !</h2>
 <p className="text-xl mb-8">Contacte-nos agora para arranjo urgente. Sem compromisso.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href={`tel:${ACTIVE_CONFIG.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">📞 {ACTIVE_CONFIG.phone}</a>
 <a href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`} className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">💬 WhatsApp Urgente</a>
 </div>
 </div>
 </section>
 {/* Internal Links */}
 <section className="py-12 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h3 className="text-xl font-bold text-center mb-6 text-gray-900">Também servimos:</h3>
 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
 {[
 { name: "Bragança", href: "/canalizador-braganca" },
 { name: "Mirandela", href: "/canalizador-mirandela" },
 { name: "Chaves", href: "/canalizador-chaves" },
 { name: "Vila Real", href: "/canalizador-valpacos" },
 { name: "Mogadouro", href: "/canalizador-mogadouro" }
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
