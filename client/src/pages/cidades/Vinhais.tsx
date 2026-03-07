// SEO optimized page for "Canalizador Vinhais"
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle } from 'lucide-react';
import { businessInfo, getCityAddress } from '@/shared/napConfig';
import { getCidadesProximas } from '@/data/cidadesProximas';

export default function Vinhais() {
  useEffect(() => {
    document.title = "Canalizador Urgente Vinhais 💧 24h | 928 484 451";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Problema de canalização em Vinhais? Servimos todo o concelho incluindo Montesinho. Orçamento sem compromisso. Ligue: 928 484 451');

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
      "@type": "Plumber",
      "name": "Canalizador Profissional Vinhais",
      "description": "Canalizador profissional em Vinhais. Serviço 24h, desentupimentos, fugas de água.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": cityAddress.streetAddress,
        "addressLocality": cityAddress.addressLocality,
        "addressRegion": cityAddress.addressRegion,
        "addressCountry": cityAddress.addressCountry,
        "postalCode": cityAddress.postalCode
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.8333", "longitude": "-7.0000" },
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
      const existingSchema = document.getElementById('schema-vinhais');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const cidadesProximas = getCidadesProximas('vinhais');

  const faqs = [
    { question: "Quanto tempo demora a chegar a Vinhais?", answer: "Chegamos a Vinhais em aproximadamente 45-60 minutos. Temos veículo 4x4 para aceder às aldeias mais isoladas." },
    {
      question: "Qual o custo de deslocação a Vinhais?",
      answer: "A deslocação é de 35€ (Zona 3). Chegamos em aproximadamente 55-60 minutos. Inclui todo o concelho."
    },
    { question: "Trabalham no Parque Natural de Montesinho?", answer: "Sim, cobrimos todas as aldeias do Parque Natural de Montesinho, incluindo as mais remotas." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 VINHAIS E PARQUE DE MONTESINHO</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Vinhais</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Servimos todo o concelho de Vinhais, incluindo as aldeias do Parque Natural de Montesinho. Veículo 4x4 para acessos difíceis.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Vinhais" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Vinhais</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Droplets, title: "Desentupimentos 24h", desc: "WC, lavatórios, esgotos, fossas sépticas" },
                { icon: Shield, title: "Reparação de Fugas", desc: "Deteção e reparação de fugas de água" },
                { icon: CheckCircle, title: "Esquentadores", desc: "Instalação e reparação de esquentadores e caldeiras" },
                { icon: Droplets, title: "Canalização Rural", desc: "Casas de aldeia, quintas, explorações agrícolas" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Vinhais</h2><FAQSection faqs={faqs} /></div></section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Vinhais?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Chegamos a qualquer aldeia do concelho.</p>
            <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
          </div>
        </section>

        {/* Related Cities - Maillage interno SEO */}
        {/* Cidades Próximas - Internal Linking */}
        <CidadesProximas
          currentCity="Vinhais"
          cidades={cidadesProximas}
          serviceType="canalizador"
        />

        
        <RelatedCities 
          currentCity="Vinhais" 
          currentCitySlug="canalizador-vinhais" 
        />
      </main>
      <Footer />
    </div>
  );
}
