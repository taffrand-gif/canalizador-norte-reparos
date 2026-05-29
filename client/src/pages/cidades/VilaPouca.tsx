// SEO optimized page for "Canalizador Vila Pouca de Aguiar"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle, Wrench } from 'lucide-react';
import { businessInfo, getCityAddress } from '@/shared/napConfig';

export default function VilaPouca() {
 useEffect(() => {
 document.title = "Canalizador Vila Pouca Aguiar 24h | 928 484 451";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Canalizador em Vila Pouca de Aguiar. Especialista em canalização termal, redes de água quente, desentupimentos. Servimos Pedras Salgadas e todo o concelho. Orçamento gratuito.');

 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-vila-pouca-de-aguiar');

 const cityAddress = getCityAddress('vila-pouca-aguiar');

 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.id = 'schema-vila-pouca';
 schemaScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Plumber",
 "name": "Canalizador Profissional Vila Pouca de Aguiar",
 "description": "Canalizador em Vila Pouca de Aguiar. Canalização termal, redes de água quente e desentupimentos.",
 "address": {
 "@type": "PostalAddress",
 "streetAddress": cityAddress.streetAddress,
 "addressLocality": cityAddress.addressLocality,
 "addressRegion": cityAddress.addressRegion,
 "addressCountry": cityAddress.addressCountry,
 "postalCode": cityAddress.postalCode
 },
 "geo": { "@type": "GeoCoordinates", "latitude": "41.5000", "longitude": "-7.6333" },
 "telephone": businessInfo.phone,
 "openingHours": "Mo-Su 00:00-23:59",
 "priceRange": "€€"
 });
 document.head.appendChild(schemaScript);

 return () => {
 const existingSchema = document.getElementById('schema-vila-pouca');
 if (existingSchema) existingSchema.remove();
 };
 }, []);

 const faqs = [
 { question: "Quanto tempo demora a chegar a Vila Pouca de Aguiar?", answer: "Chegamos a Vila Pouca de Aguiar em aproximadamente 1h10 a 1h20, percorrendo cerca de 80km desde Macedo de Cavaleiros." },
 { question: "Fazem canalização para estabelecimentos termais?", answer: "Sim, temos experiência em redes de água termal, tubagens resistentes a águas minerais e sistemas de canalização para spas e termas, incluindo Pedras Salgadas." },
 {
 question: "Qual o custo de deslocação a Vila Pouca de Aguiar?",
 answer: "A deslocação é de 65€ (Zona 6), sob marcação prévia. Estamos a cerca de 90km de Macedo de Cavaleiros. Inclui todo o concelho."
 }];

 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-grow">
 <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
 <div className="container text-center text-white">
 <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 VILA POUCA DE AGUIAR - TERMAS E PEDRAS PRECIOSAS</span>
 <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Vila Pouca de Aguiar</h1>
 <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Canalização profissional na terra das termas e das pedras preciosas. Especializados em redes de água termal, canalização para spas e habitações de todo o concelho.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
 <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Vila%20Pouca%20de%20Aguiar" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
 </div>
 </div>
 </section>

 <section className="py-16 bg-gray-50">
 <div className="container">
 <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Vila Pouca de Aguiar</h2>
 <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
 {[
 { icon: Droplets, title: "Canalização Termal", desc: "Redes de água para termas, spas e estabelecimentos com águas minerais" },
 { icon: Shield, title: "Arranjo de Fugas", desc: "Deteção e arranjo de fugas em redes de água quente e fria" },
 { icon: Wrench, title: "Desentupimentos", desc: "Esgotos, canalizações com depósitos minerais e fossas sépticas" },
 { icon: CheckCircle, title: "Aquecimento Central", desc: "Instalação de caldeiras e radiadores para casas e hotéis" },
 ].map((service, index) => (
 <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
 <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
 <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Vila Pouca de Aguiar</h2><FAQSection faqs={faqs} /></div></section>

 <section className="py-16 bg-blue-600 text-white">
 <div className="container text-center">
 <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Vila Pouca de Aguiar?</h2>
 <p className="text-xl mb-8 opacity-90">Ligue agora. Especialistas em canalização termal.</p>
 <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
 </div>
 </section>

 <RelatedCities currentCity="Vila Pouca de Aguiar" currentCitySlug="canalizador-vila-pouca-de-aguiar" />
 </main>
 <Footer />
 </div>
 );
}