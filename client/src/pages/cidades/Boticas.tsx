// SEO optimized page for "Canalizador Boticas"
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle, Wrench } from 'lucide-react';
import { businessInfo, getCityAddress } from '@/shared/napConfig';
import { getCidadesProximas } from '@/data/cidadesProximas';

export default function Boticas() {
 useEffect(() => {
 document.title = "Canalizador Boticas 24h | 928 484 451";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Canalizador em Boticas disponível 24h. Desentupimentos, fugas de água, aquecimento central e canalização agrícola. Terra do Vinho dos Mortos. Orçamento gratuito.');

 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-boticas');

 const cityAddress = getCityAddress('boticas');
 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.id = 'schema-boticas';
 schemaScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Plumber",
 "name": "Canalizador Profissional Boticas",
 "description": "Canalizador em Boticas. Serviço 24h, aquecimento central e canalização para explorações agrícolas.",
 "address": {
 "@type": "PostalAddress",
 "streetAddress": cityAddress.streetAddress,
 "addressLocality": cityAddress.addressLocality,
 "addressRegion": cityAddress.addressRegion,
 "addressCountry": cityAddress.addressCountry,
 "postalCode": cityAddress.postalCode
 },
 "geo": { "@type": "GeoCoordinates", "latitude": "41.6833", "longitude": "-7.6667" },
 "telephone": businessInfo.phone,
 "openingHours": "Mo-Su 00:00-23:59",
 "priceRange": "€€"
 });
 document.head.appendChild(schemaScript);

 // FAQ Schema
 const faqSchema = document.createElement('script');
 faqSchema.type = 'application/ld+json';
 faqSchema.setAttribute('data-faq-schema', 'true');
 faqSchema.text = JSON.stringify({
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
 });
 document.head.appendChild(faqSchema);

 return () => {
 const existingSchema = document.getElementById('schema-boticas');
 if (existingSchema) existingSchema.remove();
 };
 }, []);

 const cidadesProximas = getCidadesProximas('boticas');

 const faqs = [
 { question: "Quanto tempo demora a chegar a Boticas?", answer: "Chegamos a Boticas em aproximadamente 1h15 a 1h30, percorrendo cerca de 90km desde Macedo de Cavaleiros via Chaves." },
 { question: "Fazem canalização para adegas de Vinho dos Mortos?", answer: "Sim, instalamos redes de água e drenagem para adegas tradicionais, incluindo as famosas caves do Vinho dos Mortos, com materiais adequados ao ambiente húmido subterrâneo." },
 {
 question: "Qual o custo de deslocação a Boticas?",
 answer: "A deslocação é de 65€ (Zona 6), sob marcação prévia. Estamos a cerca de 95km de Macedo de Cavaleiros. Inclui todo o concelho."
 }];

 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-grow">
 <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
 <div className="container text-center text-white">
 <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 BOTICAS - TERRA DO VINHO DOS MORTOS</span>
 <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Boticas</h1>
 <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Canalização profissional em Boticas e todo o concelho. Experiência em aquecimento central para casas de montanha e canalização para adegas e explorações agrícolas do Barroso.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
 <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Boticas" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
 </div>
 </div>
 </section>

 <section className="py-16 bg-gray-50">
 <div className="container">
 <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Boticas</h2>
 <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
 {[
 { icon: Wrench, title: "Aquecimento Central", desc: "Caldeiras a pellets e gasóleo para casas de montanha e turismo rural" },
 { icon: Droplets, title: "Desentupimentos", desc: "Esgotos, fossas sépticas e canalizações de adegas subterrâneas" },
 { icon: Shield, title: "Proteção Contra Gelo", desc: "Isolamento de tubagens para prevenir danos nos invernos rigorosos" },
 { icon: CheckCircle, title: "Canalização Agrícola", desc: "Redes de água para explorações pecuárias e terrenos agrícolas" },
 ].map((service, index) => (
 <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
 <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
 <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Boticas</h2><FAQSection faqs={faqs} /></div></section>

 <section className="py-16 bg-blue-600 text-white">
 <div className="container text-center">
 <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Boticas?</h2>
 <p className="text-xl mb-8 opacity-90">Ligue agora. Serviço profissional no coração do Barroso.</p>
 <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
 </div>
 </section>
 {/* Cidades Próximas - Internal Linking */}
 <CidadesProximas
 currentCity="Boticas"
 cidades={cidadesProximas}
 serviceType="canalizador"
 />

 

 <RelatedCities currentCity="Boticas" currentCitySlug="canalizador-boticas" />
 </main>
 <Footer />
 </div>
 );
}