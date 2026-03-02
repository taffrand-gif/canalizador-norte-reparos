// SEO optimized page for "Canalizador Vila Real"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle, Wrench } from 'lucide-react';

export default function VilaReal() {
  useEffect(() => {
    document.title = "Canalizador Urgente Vila Real 💧 24h | 928 484 451";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Torneira a pingar em Vila Real? A nossa equipa resolve hoje. Desentupimentos, fugas, esquentadores. Orçamento gratuito. Ligue: 928 484 451');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-vila-real');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-vila-real';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": "Canalizador Profissional Vila Real",
      "description": "Canalizador profissional em Vila Real. Serviço 24h, desentupimentos, fugas de água, canalização urbana.",
      "address": { "@type": "PostalAddress", "addressLocality": "Vila Real", "addressRegion": "Vila Real", "addressCountry": "PT" },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.3000", "longitude": "-7.7500" },
      "telephone": "+351928484451",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-vila-real');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    { question: "Quanto tempo demora a chegar a Vila Real?", answer: "Chegamos a Vila Real em aproximadamente 1h15 a partir de Macedo de Cavaleiros, percorrendo cerca de 85km pela A4 e IP4." },
    { question: "Fazem trabalhos em prédios e apartamentos em Vila Real?", answer: "Sim, temos vasta experiência em canalização de prédios urbanos, incluindo reparação de colunas de água, substituição de tubagens antigas e desentupimentos em edifícios de vários andares." },
    {
      question: "Qual o custo de deslocação a Vila Real?",
      answer: "A deslocação a Vila Real é de 35€. Chegamos em aproximadamente 60-70 minutos. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 VILA REAL - CAPITAL DE DISTRITO</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Vila Real</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Serviço de canalização profissional na capital de distrito. Cobrimos toda a zona urbana e freguesias rurais de Vila Real com equipamento especializado para redes modernas e antigas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Vila%20Real" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Vila Real</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Droplets, title: "Desentupimentos Urbanos", desc: "Esgotos, colunas de prédios, redes pluviais e sanitárias da cidade" },
                { icon: Shield, title: "Reparação de Fugas em Edifícios", desc: "Deteção eletrónica de fugas em apartamentos e condomínios" },
                { icon: Wrench, title: "Canalização Nova e Remodelações", desc: "Instalação completa para construções novas e remodelações urbanas" },
                { icon: CheckCircle, title: "Esquentadores e Caldeiras", desc: "Instalação e manutenção de sistemas de aquecimento central" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Vila Real</h2><FAQSection faqs={faqs} /></div></section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Vila Real?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Serviço profissional na capital de distrito.</p>
            <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
          </div>
        </section>

        <RelatedCities currentCity="Vila Real" currentCitySlug="canalizador-vila-real" />
      </main>
      <Footer />
    </div>
  );
}