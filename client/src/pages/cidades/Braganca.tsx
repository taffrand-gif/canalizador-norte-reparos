// Page SEO optimisée para "Canalizador Bragança"
// 100% unique content, conforme políticas Google
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import { useSite } from '@/contexts/SiteContext';
import { useEffect } from 'react';
import FAQSection from '@/components/FAQSection';
import { businessInfo, getCityAddress } from '@/shared/napConfig';
import { getCidadesProximas } from '@/data/cidadesProximas';
export default function Braganca() {
 const { config } = useSite();
 useEffect(() => {
 document.title = "Canalizador Urgente Bragança 💧 24h | 928 484 451";
 
 // Optimized meta description
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Fuga de água em Bragança? Respondemos em 30 minutos. Desentupimentos e arranjos urgentes, orçamento sem compromisso. Ligue: 928 484 451');
 // SEO meta keywords
 let metaKeywords = document.querySelector('meta[name="keywords"]');
 if (!metaKeywords) {
 metaKeywords = document.createElement('meta');
 metaKeywords.setAttribute('name', 'keywords');
 document.head.appendChild(metaKeywords);
 }
 metaKeywords.setAttribute('content', 'canalizador urgente bragança, canalizador 24 horas bragança, canalizador bragança, canalizador profissional bragança, desentupimento bragança, fuga água bragança, arranjo canalização bragança, instalação sanitários bragança, canalizador trás-os-montes');
 
 
 // Canonical URL
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-bragança');
 
 // Schema.org LocalBusiness para Bragança
 const cityAddress = getCityAddress('braganca');
 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 "@id": "https://canalizador-norte-reparos.pt/#organization",
 "name": "Canalizador Profissional — Canalizador em Bragança",
 "image": "/images/hero/hero-plumber-portugal.png",
 "description": "Canalizador profissional em Bragança, Trás-os-Montes. Desentupimentos, arranjo de fugas e instalação sanitária.",
 "address": {
 "@type": "PostalAddress",
 "streetAddress": cityAddress.streetAddress,
 "addressLocality": cityAddress.addressLocality,
 "addressRegion": cityAddress.addressRegion,
 "addressCountry": cityAddress.addressCountry,
 "postalCode": cityAddress.postalCode
 },
 "geo": {
 "@type": "GeoCoordinates",
 "latitude": "41.8062",
 "longitude": "-6.7569"
 },
 "telephone": businessInfo.phone,
 "openingHours": "Mo-Su 00:00-23:59",
 "priceRange": "€€",
 "areaServed": {
 "@type": "City",
 "name": "Bragança"
 },
 "serviceArea": {
 "@type": "GeoCircle",
 "geoMidpoint": {
 "@type": "GeoCoordinates",
 "latitude": "41.8062",
 "longitude": "-6.7569"
 },
 "geoRadius": "20000"
 },
 "sameAs": [
 `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent("Olá, preciso de um canalizador em Trás-os-Montes. Podem dar-me um orçamento?")}`
 ]
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
 const faqs = [
 {
 question: "Qual o custo de deslocação a Bragança?",
 answer: "A deslocação a Bragança é de 35€ (Zona 3). Chegamos em aproximadamente 40 minutos. Inclui todo o concelho."
 },
 {
 question: "Fazem urgências 24 horas em Bragança?",
 answer: "Sim, atendemos urgências de canalização 24 horas por dia, 7 dias por semana em Bragança. Ligue +351 928 484 451 para assistência imediata."
 },
 {
 question: "Fornecem serviço de canalização em Bragança?",
 answer: "Sim, emitimos serviço de canalização certificado para venda, arrendamento e legalização de imóveis em Bragança e todo o concelho."
 }
 ];
 return () => {
 document.head.removeChild(schemaScript);
 document.head.removeChild(faqSchema);
 };
 }, [config]);
 const cidadesProximas = getCidadesProximas('braganca');
 return (
 <>
 <SEOHead />
 <StructuredData />
 
 <Header />
 
 <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
 {/* Hero section específica de Bragança */}
 <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl">
 <Breadcrumbs items={[
 { label: 'Canalizador', href: '/' },
 { label: 'Trás-os-Montes', href: '/tras-os-montes' },
 { label: 'Bragança', href: '/canalizador-braganca' }
 ]} />
 
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Canalizador Profissional em <span className="text-orange-400">Bragança</span>
 </h1>
 
 <p className="text-xl mb-8">
 Serviços de canalizador certificado em Bragança e arredores. 
 Especialistas em sistema de água e sistemas de aquecimento para a região.
 </p>
 
 <div className="flex flex-col sm:flex-row gap-4">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 Canalizador Bragança: {config.phone}
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Bragança`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp para Bragança
 </a>
 </div>
 </div>
 </div>
 </section>
 {/* Conteúdo específico de Bragança */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 <div>
 <h2 className="text-3xl font-bold text-gray-900 mb-6">
 Especialistas em Sistemas de Água em Bragança
 </h2>
 
 <div className="space-y-6">
 <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
 <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
 <span className="text-blue-600">♨️</span>
 Conhecimento em Águas Termais
 </h3>
 <p className="text-gray-600">
 Bragança possui águas com características minerais específicas.
 Especializamo-nos em sistemas de canalização adaptados à qualidade
 da água local, tratamento adequado, e instalações resistentes
 aos minerais presentes na região.
 </p>
 </div>
 
 <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
 <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
 <span className="text-blue-600">🏘️</span>
 Experiência em Edifícios Antigos
 </h3>
 <p className="text-gray-600">
 Trabalhamos no centro histórico de Bragança, incluindo a zona da
 Praça de Camões, Rua Direita e edifícios próximos ao Castelo.
 Conhecemos as particularidades das canalizações antigas e
 utilizamos técnicas não invasivas para preservar o património.
 </p>
 </div>
 </div>
 </div>
 
 <div>
 <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-200">
 <h3 className="text-2xl font-bold text-gray-900 mb-6">
 Cobertura em <span className="text-blue-600">Bragança</span>
 </h3>
 
 <div className="grid grid-cols-2 gap-4 mb-8">
 {[
 'Centro Histórico', 'Santa Maria Maior', 'Madalena', 'Santa Cruz',
 'Bairro da Estação', 'Bairro do Calvário', 'Urbanização do Pinheiro',
 'Zona Industrial', 'Vila Verde da Raia', 'Tronco'
 ].map((area) => (
 <div key={area} className="flex items-center gap-2 text-gray-700">
 <span className="text-blue-600">📍</span>
 <span>{area}</span>
 </div>
 ))}
 </div>
 
 <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
 <h4 className="text-lg font-bold text-gray-900 mb-3">
 ⏱️ Serviços Específicos para Bragança
 </h4>
 <ul className="space-y-2 text-gray-600">
 <li className="flex items-center justify-between">
 <span>Sistemas para sistema de água</span>
 <span className="font-bold text-blue-600">Especialidade</span>
 </li>
 <li className="flex items-center justify-between">
 <span>Canalização em granito</span>
 <span className="font-bold text-blue-600">Experiência</span>
 </li>
 <li className="flex items-center justify-between">
 <span>Aquecimento para invernos frios</span>
 <span className="font-bold text-blue-600">Frequentemente</span>
 </li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* FAQ específica de Bragança */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
 Perguntas sobre <span className="text-blue-600">Canalizador em Bragança</span>
 </h2>
 
 <div className="max-w-3xl mx-auto space-y-6">
 <div className="bg-white p-6 rounded-xl shadow-md">
 <h3 className="text-xl font-bold text-gray-900 mb-3">
 Como lidam com as sistema de água de Bragança nas canalizações?
 </h3>
 <p className="text-gray-600">
 Utilizamos materiais específicos resistentes aos minerais das sistema de água,
 como tubos de polipropileno e componentes em aço inoxidável. Realizamos
 tratamentos anti-calcário específicos para as características únicas
 das águas da região de Bragança.
 </p>
 </div>
 
 <div className="bg-white p-6 rounded-xl shadow-md">
 <h3 className="text-xl font-bold text-gray-900 mb-3">
 Trabalham em propriedades com piscinas água em Bragança?
 </h3>
 <p className="text-gray-600">
 Sim, temos experiência em hotéis, hidrologia e propriedades com piscinas água.
 Especializamo-nos em sistemas de filtragem, bombeamento e tratamento
 de sistema de água, garantindo a qualidade e segurança dos sistemas.
 </p>
 </div>
 
 <div className="bg-white p-6 rounded-xl shadow-md">
 <h3 className="text-xl font-bold text-gray-900 mb-3">
 Qual a resposta para urgências nas zonas rurais de Bragança?
 </h3>
 <p className="text-gray-600">
 Atendemos todo o concelho, incluindo freguesias rurais como
 Vila Verde da Raia, Oura, Madalena e outras. Temos veículos
 equipados para acessar propriedades rurais e mantemos stock
 de materiais para intervenções rápidas em qualquer local.
 </p>
 </div>
 </div>
 </div>
 </section>
 {/* CTA final */}
 <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-6">
 Canalizador em <span className="text-orange-300">Bragança</span> - Conhecimento Local
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Conhecemos as particularidades da água e canalização de Bragança.
 Desde o centro histórico até às hidrologia e propriedades rurais.
 </p>
 
 <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 📞 {config.phone} (Bragança)
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Bragança`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp para Bragança
 </a>
 </div>
 
 <p className="text-orange-200">
 ♨️ <strong>Especialistas em sistema de água</strong> • 🏰 <strong>Património histórico</strong> • 🚜 <strong>Zonas rurais</strong>
 </p>
 
 {/* Cross-link subtil */}
 <div className="mt-12 p-4 bg-white/20 rounded-xl max-w-md mx-auto">
 <p className="text-lg">
 ⚡ <strong>Precisa de um eletricista em Bragança?</strong> Recomendamos:{' '}
 <a href="https://eletricista-norte-reparos.pt/eletricista-braganca" className="underline font-bold">
 eletricista-norte-reparos.pt
 </a>
 </p>
 </div>
 </div>
 </section>
 {/* FAQ Schema Section */}
 <section className="py-16">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Bragança</h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 {/* Cidades Próximas - Internal Linking */}
 <CidadesProximas
 currentCity="Bragança"
 cidades={cidadesProximas}
 serviceType="canalizador"
 />
 {/* Related Cities - Maillage interno SEO */}
 <RelatedCities
 currentCity="Braganca"
 currentCitySlug="canalizador-braganca"
 />
 </main>
 
 <Footer />
</>
 );
}