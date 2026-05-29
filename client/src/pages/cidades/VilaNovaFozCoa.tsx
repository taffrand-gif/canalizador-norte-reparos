// SEO optimized page for "Canalizador Vila Nova de Foz Côa"
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

export default function VilaNovaFozCoa() {
 useEffect(() => {
 document.title = "Canalizador Vila Nova Foz Côa 24h | 928 484 451";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Canalizador em Vila Nova de Foz Côa, terra das gravuras rupestres UNESCO. Canalização para museus, quintas do Douro, desentupimentos 24h. Orçamento gratuito.');

 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-vila-nova-foz-coa');

 const cityAddress = getCityAddress('vila-nova-foz-coa');

 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.id = 'schema-foz-coa';
 schemaScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Plumber",
 "name": "Canalizador Profissional Vila Nova de Foz Côa",
 "description": "Canalizador em Vila Nova de Foz Côa. Canalização para museus, quintas do Douro e habitações.",
 "address": {
 "@type": "PostalAddress",
 "streetAddress": cityAddress.streetAddress,
 "addressLocality": cityAddress.addressLocality,
 "addressRegion": cityAddress.addressRegion,
 "addressCountry": cityAddress.addressCountry,
 "postalCode": cityAddress.postalCode
 },
 "geo": { "@type": "GeoCoordinates", "latitude": "41.0833", "longitude": "-7.1333" },
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
 const existingSchema = document.getElementById('schema-foz-coa');
 if (existingSchema) existingSchema.remove();
 };
 }, []);

 const cidadesProximas = getCidadesProximas('vila-nova-foz-coa');

 const faqs = [
 { question: "Quanto tempo demora a chegar a Vila Nova de Foz Côa?", answer: "Chegamos a Vila Nova de Foz Côa em aproximadamente 50-60 minutos, percorrendo cerca de 55km desde Macedo de Cavaleiros." },
 { question: "Fazem canalização para equipamentos culturais?", answer: "Sim, temos experiência em canalização para museus e espaços culturais, incluindo sistemas de climatização e controlo de humidade essenciais para a preservação de acervos." },
 {
 question: "Qual o custo de deslocação a Vila Nova de Foz Côa?",
 answer: "A deslocação é de 65€ (Zona 6). Chegamos em aproximadamente 50-60 minutos. Inclui todo o concelho."
 }];

 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-grow">
 <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
 <div className="container text-center text-white">
 <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 VILA NOVA DE FOZ CÔA - GRAVURAS UNESCO</span>
 <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Vila Nova de Foz Côa</h1>
 <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Canalização profissional na terra das gravuras rupestres UNESCO. Servimos museus, quintas do Douro, alojamentos turísticos e habitações de todo o concelho.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
 <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Vila%20Nova%20de%20Foz%20Côa" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
 </div>
 </div>
 </section>

 <section className="py-16 bg-gray-50">
 <div className="container">
 <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Vila Nova de Foz Côa</h2>
 <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
 {[
 { icon: Droplets, title: "Canalização Cultural", desc: "Redes de água para museus, centros interpretativos e espaços culturais" },
 { icon: Shield, title: "Quintas do Douro", desc: "Canalização para quintas vinícolas, caves e sistemas de rega" },
 { icon: Wrench, title: "Desentupimentos", desc: "Esgotos, fossas sépticas e canalizações antigas do concelho" },
 { icon: CheckCircle, title: "Arranjo de Fugas", desc: "Deteção e arranjo urgente de fugas em casas e quintas" },
 ].map((service, index) => (
 <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
 <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
 <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Vila Nova de Foz Côa</h2><FAQSection faqs={faqs} /></div></section>

 <section className="py-16 bg-blue-600 text-white">
 <div className="container text-center">
 <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Vila Nova de Foz Côa?</h2>
 <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos a terra das gravuras UNESCO.</p>
 <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
 </div>
 </section>
 {/* Cidades Próximas - Internal Linking */}
 <CidadesProximas
 currentCity="Vila Nova de Foz Côa"
 cidades={cidadesProximas}
 serviceType="canalizador"
 />

 

 <RelatedCities currentCity="Vila Nova de Foz Côa" currentCitySlug="canalizador-vila-nova-foz-coa" />
 </main>
 <Footer />
 </div>
 );
}