// SEO optimized page for "Canalizador Lamego"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle, Wrench } from 'lucide-react';

export default function Lamego() {
  useEffect(() => {
    document.title = "Canalizador Urgente Lamego 💧 24h | 928 484 451";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Fuga de água em Lamego? Reparação urgente no próprio dia. Canalização profissional, orçamento gratuito. Ligue: 928 484 451');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://norte-reparos.com/canalizador-lamego');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-lamego';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": "Canalizador Profissional Lamego",
      "description": "Canalizador em Lamego. Renovação de canalização em edifícios históricos e caves de espumante.",
      "address": { "@type": "PostalAddress", "addressLocality": "Lamego", "addressRegion": "Viseu", "addressCountry": "PT" },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.1000", "longitude": "-7.8167" },
      "telephone": "+351928484451",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-lamego');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    { question: "Quanto tempo demora a chegar a Lamego?", answer: "Chegamos a Lamego em aproximadamente 1h15 a 1h30, percorrendo cerca de 90km desde Macedo de Cavaleiros pela A4 e A24." },
    { question: "Fazem renovação de canalização em edifícios históricos?", answer: "Sim, somos especializados em modernizar a canalização de edifícios antigos e patrimônio classificado, como os que rodeiam o Santuário de Nossa Senhora dos Remédios, preservando a estrutura original." },
    {
      question: "Qual o custo de deslocação a Lamego?",
      answer: "A deslocação a Lamego é de 35€. Chegamos em aproximadamente 75-90 minutos. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 LAMEGO - CIDADE DO SANTUÁRIO E ESPUMANTE</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Lamego</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Canalização profissional em Lamego, cidade histórica do Douro. Especializados em renovação de plomberie antiga, caves de espumante e edifícios patrimoniais.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Lamego" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Lamego</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Wrench, title: "Renovação Plomberie Antiga", desc: "Modernização de canalização em edifícios históricos e patrimônio" },
                { icon: Droplets, title: "Caves de Espumante", desc: "Redes de água e drenagem para caves com controlo de humidade" },
                { icon: Shield, title: "Desentupimentos Urbanos", desc: "Esgotos, colunas de prédios antigos e redes pluviais" },
                { icon: CheckCircle, title: "Instalação Sanitários", desc: "Casas de banho modernas em edifícios antigos e hotéis" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Lamego</h2><FAQSection faqs={faqs} /></div></section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Lamego?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Especialistas em canalização patrimonial.</p>
            <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
          </div>
        </section>

        <RelatedCities currentCity="Lamego" currentCitySlug="canalizador-lamego" />
      </main>
      <Footer />
    </div>
  );
}