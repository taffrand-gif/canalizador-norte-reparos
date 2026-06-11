// SEO optimizada para "Canalizador Vinhais"
// 100% unique content, zone Z3, preço 110€
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

export default function Vinhais() {
  const { config } = useSite();

  useEffect(() => {
    document.title = "Canalizador Vinhais 💧 24h | 928 484 451";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador urgente em Vinhais. Desentupimentos e arranjos, orçamento sem compromisso. Ligue: 928 484 451');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-vinhais');

    const cityAddress = getCityAddress('vinhais');
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-vinhais';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Canalizador Profissional — Vinhais",
      "address": { "@type": "PostalAddress", "streetAddress": cityAddress.streetAddress, "addressLocality": cityAddress.addressLocality, "addressRegion": cityAddress.addressRegion, "addressCountry": cityAddress.addressCountry, "postalCode": cityAddress.postalCode },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.8333", "longitude": "-7.1333" },
      "telephone": businessInfo.phone,
      "openingHours": "Mo-Su 00:00-23:59"
    });
    document.head.appendChild(schemaScript);

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-faq-schema', 'true');
    faqSchema.text = JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
    });
    document.head.appendChild(faqSchema);

    return () => { document.head.removeChild(schemaScript); document.head.removeChild(faqSchema); };
  }, []);

  const cidadesProximas = getCidadesProximas('vinhais');
  const faqs = [
    { question: "Qual o preço de canalizador em Vinhais?", answer: "Desde 110€ em Vinhais. Desentupimentos, arranjo de fugas, instalação sanitários. Orçamento sem compromisso." },
    { question: "Fazem urgências em Vinhais?", answer: "Sim, atendimento Atendimento 24h/7d, 7 dias por semana em Vinhais. Ligue +351 928 484 451." },
    { question: "Atendem aldeias rurais de Vinhais?", answer: "Sim, servimos todo o conselho incluindo aldeias de montanha e propriedades isoladas." },
    { question: "Têm câmara termográfica?", answer: "Sim, utilizamos FLIR e geofone para deteção precisa de fugas sem demolição." },
    { question: "Fornecem factura com NIF?", answer: "Sim, todas as intervenções incluem factura com NIF para efeitos fiscais e de seguro." },
  ];

  return (
    <>
      <SEOHeadEnhanced citySlug="vinhais" pageType="city" />
      <StructuredData />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Breadcrumbs items={[{ label: 'Canalizador', href: '/' }, { label: 'Trás-os-Montes', href: '/tras-os-montes' }, { label: 'Vinhais', href: '/canalizador-vinhais' }]} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Canalizador Profissional em <span className="text-orange-400">Vinhais</span></h1>
              <p className="text-xl mb-8">Serviços de canalização certificados em Vinhais e arredores. Resolução rápida, preço justo, garantia de 12 meses.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:+351${config.phone.replace(/\s/g, "")}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">📞 {config.phone}</a>
                <a href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Vinhais`} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Vinhais — Terra da Castanha e da Alheña</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 mb-4">
                Vinhais é um município de montanha no distrito de Bragança, conhecido pela produção de castanha e mel. A festa da Alheña atrai milhares de visitantes anualmente, celebrando as tradições transmontanas.
              </p>
              <p className="text-gray-700 mb-4">
                A economia assenta na pastorícia e na exploração florestal. Os invernos rigorosos testam severamente as canalizações das habitações, e muitas propriedades têm sistemas de água com historial de congelamento e roturas.
              </p>
              <p className="text-gray-700">
                As aldeias dispersas criam necessidades específicas de manutenção de sistemas de água partilhados. A altitude elevada e o clima continental extremo exigem materiais e técnicas adaptados.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Serviços de Canalização em Vinhais</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">🔧 Desentupimentos</h3>
                  <p className="text-gray-600">WC, lavatórios, fossas sépticas. Equipamento Ridgid K9-102 para desentupimentos profundos em zonas rurais.</p>
                  <p className="text-blue-600 font-bold mt-3">desde 110€</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">💧 Arranjo de Fugas</h3>
                  <p className="text-gray-600">Deteção com geofone e câmara termográfica FLIR. Reparação sem demolição. Fatura com NIF para seguro.</p>
                  <p className="text-blue-600 font-bold mt-3">desde 110€</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">🔥 Esquentadores</h3>
                  <p className="text-gray-600">Instalação e reparação de esquentadores. Substituição de termostatos. Certificação profissional.</p>
                  <p className="text-blue-600 font-bold mt-3">desde 110€</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">🆕 Canalização Nova</h3>
                  <p className="text-gray-600">Instalação completa com proteção contra geadas. Tubagem em PPR, isolamento térmico. Garantia 12 meses.</p>
                  <p className="text-blue-600 font-bold mt-3">desde 110€</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Porquê Escolher-nos em Vinhais</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">🏆 Serviço Certificado</h3>
                <p className="text-gray-600">Fatura com NIF, garantia escrita de 12 meses, preço combinado antes da intervenção.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">⚡ Rápido e Eficiente</h3>
                <p className="text-gray-600">Resposta rápida em Vinhais. Atendimento 24h para urgências.</p>
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
            <h2 className="text-3xl font-bold mb-6">Canalizador em <span className="text-orange-300">Vinhais</span></h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Intervenção rápida, preço justo, garantia de 12 meses.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href={`tel:+351${config.phone.replace(/\s/g, "")}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">📞 {config.phone}</a>
              <a href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Vinhais`} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Vinhais</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <CidadesProximas currentCity="Vinhais" cidades={cidadesProximas} serviceType="canalizador" />
        <RelatedCities currentCity="Vinhais" currentCitySlug="canalizador-vinhais" />
      </main>
      <Footer />
    </>
  );
}