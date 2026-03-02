// SEO optimized page for "Canalizador Ribeira de Pena"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle, Wrench } from 'lucide-react';

export default function RibeiraDePena() {
  useEffect(() => {
    document.title = "Canalizador Ribeira de Pena 24h - Canalização Rural - +351 928 484 451";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador em Ribeira de Pena disponível 24h. Canalização para turismo rural, casas junto à barragem, desentupimentos e fugas. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-ribeira-de-pena');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-ribeira-pena';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": "Canalizador Profissional Ribeira de Pena",
      "description": "Canalizador em Ribeira de Pena. Canalização para turismo rural e casas junto à barragem.",
      "address": { "@type": "PostalAddress", "addressLocality": "Ribeira de Pena", "addressRegion": "Vila Real", "addressCountry": "PT" },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.5167", "longitude": "-7.8000" },
      "telephone": "+351928484451",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-ribeira-pena');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    { question: "Quanto tempo demora a chegar a Ribeira de Pena?", answer: "Chegamos a Ribeira de Pena em aproximadamente 1h20 a 1h30, percorrendo cerca de 95km desde Macedo de Cavaleiros." },
    { question: "Fazem canalização para casas de turismo rural?", answer: "Sim, instalamos canalização completa para casas de turismo rural, incluindo sistemas de aquecimento, casas de banho modernas e piscinas junto à barragem." },
    {
      question: "Qual o custo de deslocação a Ribeira de Pena?",
      answer: "A deslocação a Ribeira de Pena é de 40€, sob marcação prévia. Estamos a cerca de 85km de Macedo de Cavaleiros. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 RIBEIRA DE PENA - BARRAGEM E TURISMO RURAL</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Ribeira de Pena</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Canalização profissional em Ribeira de Pena, junto à barragem. Especializados em turismo rural, casas de campo e habitações de todo o concelho.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Ribeira%20de%20Pena" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Ribeira de Pena</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Droplets, title: "Canalização Turismo Rural", desc: "Instalação completa para casas de campo, piscinas e alojamentos" },
                { icon: Shield, title: "Reparação de Fugas", desc: "Deteção e reparação de fugas em casas antigas e quintas" },
                { icon: Wrench, title: "Desentupimentos", desc: "Esgotos, fossas sépticas e canalizações rurais entupidas" },
                { icon: CheckCircle, title: "Esquentadores e Caldeiras", desc: "Instalação de aquecimento para casas de montanha e turismo" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Ribeira de Pena</h2><FAQSection faqs={faqs} /></div></section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Ribeira de Pena?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Cobrimos todo o concelho junto à barragem.</p>
            <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
          </div>
        </section>

        <RelatedCities currentCity="Ribeira de Pena" currentCitySlug="canalizador-ribeira-de-pena" />
      </main>
      <Footer />
    </div>
  );
}