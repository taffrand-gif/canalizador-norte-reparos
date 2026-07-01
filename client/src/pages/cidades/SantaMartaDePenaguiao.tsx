// SEO optimizada para "Canalizador Santa Marta de Penaguião"
// 100% unique content, zone Z5, preço 130€
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import StructuredData from '@/components/StructuredData';
import { useSite } from '@/contexts/SiteContext';
import FAQSection from '@/components/FAQSection';
import { businessInfo, getCityAddress } from '@/shared/napConfig';
import { useEffect } from 'react';
import { getCidadesProximas } from '@/data/cidadesProximas';

export default function SantaMartaPenaguião() {
 const { config } = useSite();

 useEffect(() => {
 document.title = "Canalizador Santa Marta de Penaguião 💧 24h | 928 484 451";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Canalizador urgente em Santa Marta de Penaguião. Desentupimentos e arranjos, orçamento sem compromisso. Ligue: 928 484 451');

 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-santa-marta-de-penaguiao');

 const cityAddress = getCityAddress('santa-marta-de-penaguiao');
 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.id = 'schema-santa-marta-de-penaguiao';
 schemaScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 "name": "Canalizador Profissional — Santa Marta de Penaguião",
 "address": {
 "@type": "PostalAddress",
 "streetAddress": cityAddress.streetAddress,
 "addressLocality": cityAddress.addressLocality,
 "addressRegion": cityAddress.addressRegion,
 "addressCountry": cityAddress.addressCountry,
 "postalCode": cityAddress.postalCode
 },
 "geo": { "@type": "GeoCoordinates", "latitude": "41.2167", "longitude": "-7.7667" },
 "telephone": businessInfo.phone,
 "openingHours": "Mo-Su 00:00-23:59"
 });
 document.head.appendChild(schemaScript);

 const faqSchema = document.createElement('script');
 faqSchema.type = 'application/ld+json';
 faqSchema.setAttribute('data-faq-schema', 'true');
 faqSchema.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqs.map(faq => ({
 "@type": "Question",
 "name": faq.question,
 "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
 }))
 });
 document.head.appendChild(faqSchema);

 return () => {
 document.head.removeChild(schemaScript);
 document.head.removeChild(faqSchema);
 };
 }, []);

 const cidadesProximas = getCidadesProximas('santa-marta-de-penaguiao');

 const faqs = [
 { question: "Qual o preço de canalizador em Santa Marta de Penaguião?", answer: "Desde 130€ em Santa Marta de Penaguião. Desentupimentos, arranjo de fugas, instalação sanitários. Orçamento sem compromisso." },
 { question: "Fazem urgências em Santa Marta de Penaguião?", answer: "Sim, Atendimento 24h/7d, 7 dias por semana em Santa Marta de Penaguião. Ligue +351 928 484 451." },
 { question: "Atendem propriedades rurais?", answer: "Sim, servimos todo o conselho incluindo propriedades rurais e aldeias isoladas." },
 { question: "Têm câmara termográfica para deteção de fugas?", answer: "Sim, utilizamos câmara termográfica FLIR e geofone para localização precisa de fugas sem demolição." },
 { question: "Fornecem factura com NIF?", answer: "Sim, todas as intervenções incluem factura com NIF para efeitos fiscais e de seguro." },
 ];

 return (
 <>
 <SEOHeadEnhanced citySlug="santa-marta-de-penaguiao" pageType="city" />
 <StructuredData />
 <Header />
 <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
 <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl">
 <Breadcrumbs items={[
 { label: 'Canalizador', href: '/' },
 { label: 'Trás-os-Montes', href: '/tras-os-montes' },
 { label: 'Santa Marta de Penaguião', href: '/canalizador-santa-marta-de-penaguiao' }
 ]} />
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Canalizador Profissional em <span className="text-orange-400">Santa Marta de Penaguião</span>
 </h1>
 <p className="text-xl mb-8">
 Serviços de canalização certificados em Santa Marta de Penaguião e arredores.
 Resolução rápida, preço justo, garantia de 12 meses.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <a href={`tel:+351${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">
 📞 Canalizador Santa Marta de Penaguião: {config.phone}
 </a>
 <a href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Santa Marta de Penaguião`}
 target="_blank" rel="noopener noreferrer"
 className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
 💬 WhatsApp
 </a>
 </div>
 </div>
 </div>
 </section>

 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
 Santa Marta de Penaguião — Terra do Douro e do Vinho Verde
 </h2>
 <div className="max-w-4xl mx-auto">
 <p className="text-gray-700 mb-4">
 Concelho do Douro com tradição na produção de vinho verde e azeite. As paisagens são marcadas pelos vinhedos e olivais.
 </p>
 <p className="text-gray-700">
 Zona de grande tradição vinícola e olivícola. A produção de vinho e azeite exige sistemas de água de qualidade.
 </p>
 </div>
 </div>
 </section>

 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-5xl mx-auto">
 <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
 Serviços de Canalização em Santa Marta de Penaguião
 </h2>
 <div className="grid md:grid-cols-2 gap-6">
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">🔧 Desentupimentos</h3>
 <p className="text-gray-600">WC, lavatórios, esgotos, fossas sépticas. Equipamento Ridgid K9-102 para desentupimentos profundos.</p>
 <p className="text-blue-600 font-bold mt-3">sob orçamento</p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">💧 Arranjo de Fugas</h3>
 <p className="text-gray-600">Deteção com geofone e câmara termográfica FLIR. Reparação sem demolição. Fatura com NIF para seguro.</p>
 <p className="text-blue-600 font-bold mt-3">sob orçamento</p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">🔥 Esquentadores</h3>
 <p className="text-gray-600">Instalação e reparação de esquentadores a gás. Substituição de termostatos e termopares. Certificação profissional.</p>
 <p className="text-blue-600 font-bold mt-3">sob orçamento</p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">🆕 Canalização Nova</h3>
 <p className="text-gray-600">Instalação completa de canalizações novas. Tubagem em PPR, conexões estanhadas, válvulas de corte. Garantia 12 meses.</p>
 <p className="text-blue-600 font-bold mt-3">sob orçamento</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 <section className="py-16 bg-blue-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Porquê Escolher-nos em Santa Marta de Penaguião</h2>
 <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">🏆 Serviço Certificado</h3>
 <p className="text-gray-600">Fatura com NIF, garantia escrita de 12 meses, preço combinado antes da intervenção.</p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">⚡ Rápido e Eficiente</h3>
 <p className="text-gray-600">Disponível 24h/7 dias em Santa Marta de Penaguião. Atendimento 24h para urgências.</p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">🔍 Equipamento Profissional</h3>
 <p className="text-gray-600">Ridgid K9-102, câmara termográfica FLIR, geofone para tubagens enterradas.</p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">🛡️ Garantia 12 Meses</h3>
 <p className="text-gray-600">Todas as intervenções têm garantia escrita de 12 meses, peças e mão de obra.</p>
 </div>
 </div>
 </div>
 </section>

 <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-6">Canalizador em <span className="text-orange-300">Santa Marta de Penaguião</span></h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">Intervenção rápida, preço justo, garantia de 12 meses.</p>
 <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
 <a href={`tel:+351${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">
 📞 {config.phone}
 </a>
 <a href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Santa Marta de Penaguião`}
 target="_blank" rel="noopener noreferrer"
 className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
 💬 WhatsApp
 </a>
 </div>
 <div className="mt-12 p-4 bg-white/20 rounded-xl max-w-md mx-auto">
 <p className="text-lg">
 ⚡ <strong>Precisa de eletricista?</strong> Visite:{' '}
 <a href="https://eletricista-norte-reparos.pt" className="underline font-bold">
 eletricista-norte-reparos.pt
 </a>
 </p>
 </div>
 </div>
 </section>

 <section className="py-16">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Santa Marta de Penaguião</h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>

 <CidadesProximas currentCity="Santa Marta de Penaguião" cidades={cidadesProximas} serviceType="canalizador" />
 <RelatedCities currentCity="Santa Marta de Penaguião" currentCitySlug="canalizador-santa-marta-de-penaguiao" />
 </main>
 <Footer />
 </>
 );
}
