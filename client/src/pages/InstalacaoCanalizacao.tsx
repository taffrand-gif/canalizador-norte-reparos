import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useEffect } from 'react';

const faqItems = [
 { question: "Quanto custa uma instalação de canalização nova?", answer: "O preço depende da dimensão do projeto. Para uma casa de banho completa, os valores começam em €800. Para canalização de uma casa inteira, entre €2.000 e €5.000. Oferecemos orçamento gratuito." },
 { question: "Quanto tempo demora uma instalação completa?", answer: "Uma casa de banho demora 2-5 dias. Uma casa completa pode demorar 1-3 semanas dependendo da complexidade. Trabalhamos de forma eficiente para minimizar o incómodo." },
 { question: "Que materiais utilizam na canalização nova?", answer: "Utilizamos materiais de primeira qualidade: tubos multicamada, PPR e PEX para água, PVC para esgotos. Todos os materiais têm certificação e garantia do fabricante." }
];

export default function InstalacaoCanalizacao() {
 useEffect(() => {
 document.title = "Instalação de Canalização Nova em Trás-os-Montes | Canalizador Profissional";
 let meta = document.querySelector('meta[name="description"]');
 if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
 meta.setAttribute('content', 'Instalação de canalização nova em Trás-os-Montes. Casas de banho, cozinhas, redes de água e esgotos. Materiais certificados, garantia. Ligue +351 928 484 451.');
 }, []);

 const serviceSchema = {
 "@context": "https://schema.org", "@type": "Service",
 "name": "Instalação de Canalização Nova", "provider": { "@type": "Plumber", "name": "Norte Reparos", "telephone": ACTIVE_CONFIG.phone },
 "areaServed": { "@type": "GeoCircle", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 41.4393, "longitude": -6.9603 }, "geoRadius": "100000" },
 "description": "Instalação profissional de canalização nova para casas, apartamentos e comércios em Trás-os-Montes."
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
 <h1 className="text-4xl md:text-5xl font-bold mb-6">Instalação de Canalização Nova em Trás-os-Montes</h1>
 <p className="text-xl mb-8 max-w-2xl mx-auto">Instalação profissional de redes de água e esgotos para construção nova e remodelação. Materiais certificados e garantia no trabalho.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href={`tel:${ACTIVE_CONFIG.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">📞 Ligar Agora</a>
 <a href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`} className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">💬 WhatsApp</a>
 </div>
 </div>
 </section>

 <section className="py-16 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Serviços de Instalação</h2>
 <div className="grid md:grid-cols-2 gap-8">
 {[
 { title: "Casas de Banho", desc: "Instalação completa de canalização para casas de banho novas ou remodeladas. Água quente e fria, esgotos, torneiras e sanitários.", icon: "🚿" },
 { title: "Cozinhas", desc: "Canalização para cozinhas: ligação de máquinas de lavar, lava-loiça, torneiras e sistemas de filtragem de água.", icon: "🍳" },
 { title: "Rede de Água Completa", desc: "Instalação de rede de água para casas novas ou substituição de canalização antiga. Tubos multicamada e PPR.", icon: "💧" },
 { title: "Rede de Esgotos", desc: "Instalação e ligação de redes de esgotos domésticos. Tubos PVC, caixas de visita e ligação à rede pública.", icon: "🏗️" }
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
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Preços Indicativos</h2>
 <div className="grid md:grid-cols-3 gap-6">
 {[
 { service: "Casa de banho completa", price: "Desde €800" },
 { service: "Cozinha completa", price: "Desde €500" },
 { service: "Casa inteira", price: "Desde €2.000" }
 ].map((item, i) => (
 <div key={i} className="p-6 bg-blue-50 rounded-xl text-center">
 <h3 className="font-bold text-gray-900 mb-2">{item.service}</h3>
 <p className="text-2xl font-bold text-blue-600">{item.price}</p>
 </div>
 ))}
 </div>
 <p className="text-center text-gray-500 mt-6 text-sm">* Preços indicativos. Orçamento final após visita ao local.</p>
 </div>
 </section>

 <section className="py-16 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Perguntas Frequentes</h2>
 <div className="space-y-4">
 {faqItems.map((item, i) => (
 <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-2">{item.question}</h3>
 <p className="text-gray-600">{item.answer}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">Precisa de Canalização Nova?</h2>
 <p className="text-xl mb-8">Peça já o seu orçamento gratuito. Respondemos em menos de 1 hora.</p>
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
 { name: "Macedo de Cavaleiros", href: "/canalizador-macedo-de-cavaleiros" },
 { name: "Bragança", href: "/canalizador-braganca" },
 { name: "Mirandela", href: "/canalizador-mirandela" },
 { name: "Torre de Moncorvo", href: "/canalizador-torre-moncorvo" },
 { name: "Vinhais", href: "/canalizador-vinhais" }
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
