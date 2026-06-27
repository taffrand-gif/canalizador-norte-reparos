// SEO: canalizador urgente distrito de Porto
// Type: urgente — Geo-neutre (regra 5 AGENTS.md)
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import StructuredData from '@/components/StructuredData';
import { useSite } from '@/contexts/SiteContext';
import FAQSection from '@/components/FAQSection';
import { businessInfo } from '@/shared/napConfig';
import { useEffect } from 'react';


export default function UrgentePorto() {
  const { config } = useSite();

  useEffect(() => {
    document.title = "💧 Canalizador Urgente Distrito de Porto — 24h";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Canalizador urgente em todo o distrito de Porto. 24h/7d.");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-urgente-distrito-de-porto');

    // JSON-LD géo-neutre (sem streetAddress — regra 5)
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": "Canalizador Profissional",
      "areaServed": [
        { "@type": "City", "name": "Trás-os-Montes" },
        { "@type": "AdministrativeArea", "name": "Porto" }
      ],
      "telephone": businessInfo.phone,
      "openingHours": "Mo-Su 00:00-23:59"
    });
    document.head.appendChild(schema);
    return () => { document.head.removeChild(schema); };
  }, []);
  const faqs = [
    { question: 'Qual o prazo de chegada em Trás-os-Montes?', answer: 'Atendimento prioritário 24h/7d em Trás-os-Montes e arredores. Ligue 928 484 451.' },
    { question: 'Quanto custa uma urgência em Trás-os-Montes?', answer: 'O preço é combinado antes da intervenção. Sem surpresas. Fatura com NIF incluída.' },
    { question: 'Trabalham aos fins de semana em Trás-os-Montes?', answer: 'Sim, atendimento 24 horas, 7 dias por semana, incluindo feriados.' },
    { question: 'Têm equipamento profissional?', answer: 'Sim, câmara termográfica FLIR, geofone, máquina de desentupimento Ridgid K9-102.' },
    { question: 'Cobrem freguesias vizinhas de Trás-os-Montes?', answer: 'Sim, servimos Trás-os-Montes e todas as freguesias e aldeias do concelho.' }
  ];
  return (
    <>
      <SEOHeadEnhanced pageType="urgency" />
      <StructuredData />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-red-50">
        <section className="bg-gradient-to-r from-red-600 to-orange-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
    <Breadcrumbs items={[
      { label: 'Canalizador', href: '/' },
      { label: 'Urgente', href: '/canalizador-urgente' },
      { label: 'Trás-os-Montes', href: '/canalizador-urgente-distrito-de-porto' }
    ]} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Canalizador Urgente no Distrito de Porto</h1>
              <p className="text-xl mb-8">
                Atendimento 24h/7d em Trás-os-Montes (Porto). Orçamento sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:+351${config.phone.replace(/\s/g, "")}`}
                   className="bg-white text-red-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg">
                  📞 Ligar Agora
                </a>
                <a href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador urgente em Trás-os-Montes`}
                   target="_blank" rel="noopener noreferrer"
                   className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-lg text-lg">
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Urgências Cobertas em Trás-os-Montes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow"><h3 className="font-bold mb-2">🔧 Fugas de Água</h3><p>Deteção com câmara termográfica, reparação imediata.</p></div>
              <div className="bg-white p-6 rounded-xl shadow"><h3 className="font-bold mb-2">🚽 Desentupimentos</h3><p>Máquina profissional, resolução sem demolição.</p></div>
              <div className="bg-white p-6 rounded-xl shadow"><h3 className="font-bold mb-2">🔥 Esquentadores</h3><p>Reparação urgente, peças de substituição disponíveis.</p></div>
              <div className="bg-white p-6 rounded-xl shadow"><h3 className="font-bold mb-2">💧 Canos Rebentados</h3><p>Corte de água, reparação definitiva no momento.</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-700 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Urgência em Trás-os-Montes?</h2>
          <p className="text-xl mb-8">Ligue agora — atendimento imediato 24h/7d.</p>
          <a href={`tel:+351${config.phone.replace(/\s/g, "")}`} className="bg-white text-red-700 font-bold px-8 py-4 rounded-lg text-lg">📞 {config.phone}</a>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
