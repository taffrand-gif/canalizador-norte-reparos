// SEO optimized page for "Canalizador Alfândega da Fé"
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
export default function AlfandegaDaFe() {
 useEffect(() => {
 document.title = "Canalizador Alfândega da Fé 💧 24h | 928 484 451";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Problema de canalização em Alfândega da Fé? A 30km de Macedo, chegamos rápido. Orçamento sem compromisso. Ligue: 928 484 451');
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-alfandega-da-fe');
 const cityAddress = getCityAddress('alfandega-da-fe');
 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.id = 'schema-alfandega-da-fe';
 schemaScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Plumber",
 "name": "Canalizador Profissional Alfândega da Fé",
 "description": "Canalizador profissional em Alfândega da Fé. Serviço 24h para desentupimentos, fugas e canalização agrícola.",
 "address": {
 "@type": "PostalAddress",
 "streetAddress": cityAddress.streetAddress,
 "addressLocality": cityAddress.addressLocality,
 "addressRegion": cityAddress.addressRegion,
 "addressCountry": cityAddress.addressCountry,
 "postalCode": cityAddress.postalCode
 },
 "geo": { "@type": "GeoCoordinates", "latitude": "41.3500", "longitude": "-6.9667" },
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
 const existingSchema = document.getElementById('schema-alfandega-da-fe');
 if (existingSchema) existingSchema.remove();
 };
 }, []);
 const cidadesProximas = getCidadesProximas('alfandega-da-fe');
 const faqs = [
 { question: "Quanto tempo demora a chegar a Alfândega da Fé?", answer: "Chegamos a Alfândega da Fé em apenas 25-30 minutos. É uma das cidades mais próximas da nossa sede em Macedo de Cavaleiros." },
 { question: "Fazem canalização para lagares e quintas agrícolas?", answer: "Sim, temos experiência em instalação de redes de água para lagares de azeite, armazéns de amêndoa e explorações agrícolas típicas da região." },
 {
 question: "Qual o custo de deslocação a Alfândega da Fé?",
 answer: "A deslocação é de 25€ (Zona 2). Chegamos em aproximadamente 25-30 minutos. Inclui todo o concelho."
 }
 ];
 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-grow">
 <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
 <div className="container text-center text-white">
 <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 ALFÂNDEGA DA FÉ - TERRA DAS AMÊNDOAS</span>
 <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Alfândega da Fé</h1>
 <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Serviço rápido de canalização a apenas 30km de Macedo. Especializados em redes de água para quintas, lagares de azeite e habitações do concelho de Alfândega da Fé.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
 <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Alfândega%20da%20Fé" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
 </div>
 </div>
 </section>
 <section className="py-16 bg-gray-50">
 <div className="container">
 <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Alfândega da Fé</h2>
 <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
 {[
 { icon: Droplets, title: "Desentupimentos Rápidos", desc: "Esgotos, fossas sépticas, canalizações entupidas em casas e quintas" },
 { icon: Shield, title: "Canalização para Lagares", desc: "Redes de água e drenagem para lagares de azeite e armazéns agrícolas" },
 { icon: Wrench, title: "Arranjo de Fugas", desc: "Deteção e arranjo de fugas em casas antigas e canalizações rurais" },
 { icon: CheckCircle, title: "Instalação de Esquentadores", desc: "Montagem e arranjo de esquentadores para casas de aldeia" },
 ].map((service, index) => (
 <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
 <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
 <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
 </div>
 ))}
 </div>
 </div>
 </section>
 <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Alfândega da Fé</h2><FAQSection faqs={faqs} /></div></section>
 <section className="py-16 bg-blue-600 text-white">
 <div className="container text-center">
 <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Alfândega da Fé?</h2>
 <p className="text-xl mb-8 opacity-90">Ligue agora. Estamos a apenas 30 minutos de distância.</p>
 <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
 </div>
 </section>
 {/* Cidades Próximas - Internal Linking */}
 <CidadesProximas
 currentCity="Alfândega da Fé"
 cidades={cidadesProximas}
 serviceType="canalizador"
 />
 
 <RelatedCities currentCity="Alfândega da Fé" currentCitySlug="canalizador-alfandega-da-fe" />
 </main>
 <Footer />
 </div>
 );
}