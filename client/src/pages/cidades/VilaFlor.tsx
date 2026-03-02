// SEO optimized page for "Canalizador Vila Flor"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle, Wrench } from 'lucide-react';

export default function VilaFlor() {
  useEffect(() => {
    document.title = "Canalizador Vila Flor 24h - Canalização e Desentupimentos - +351 928 484 451";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador em Vila Flor disponível 24h. Desentupimentos, reparação de fugas, canalização para adegas e quintas vinícolas. A 25km de Macedo de Cavaleiros.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-vila-flor');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-vila-flor';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": "Canalizador Profissional Vila Flor",
      "description": "Canalizador profissional em Vila Flor. Serviço 24h, desentupimentos, canalização para adegas e quintas.",
      "address": { "@type": "PostalAddress", "addressLocality": "Vila Flor", "addressRegion": "Bragança", "addressCountry": "PT" },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.3000", "longitude": "-7.1500" },
      "telephone": "+351928484451",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-vila-flor');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    { question: "Quanto tempo demora a chegar a Vila Flor?", answer: "Chegamos a Vila Flor em apenas 20-25 minutos. É uma das localidades mais próximas da nossa base em Macedo de Cavaleiros." },
    { question: "Fazem canalização para adegas e caves de vinho?", answer: "Sim, instalamos redes de água e drenagem para adegas, caves vinícolas e lagares de azeite, com materiais resistentes aos ácidos do processo de vinificação." },
    {
      question: "Qual o custo de deslocação a Vila Flor?",
      answer: "A deslocação a Vila Flor é de 20€. Chegamos em aproximadamente 30-40 minutos. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 VILA FLOR - TERRA DO VINHO E AZEITE</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Vila Flor</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Canalização profissional para Vila Flor e todo o concelho. Experiência em redes de água para adegas, quintas vinícolas e lagares de azeite da região.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Vila%20Flor" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Vila Flor</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Droplets, title: "Desentupimentos 24h", desc: "Esgotos domésticos, fossas sépticas e canalizações de adegas" },
                { icon: Shield, title: "Canalização para Adegas", desc: "Redes de água e drenagem para caves vinícolas e lagares de azeite" },
                { icon: Wrench, title: "Reparação de Tubagens Antigas", desc: "Substituição de canos em ferro e chumbo por materiais modernos" },
                { icon: CheckCircle, title: "Instalação Sanitários", desc: "Montagem completa de casas de banho e cozinhas" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Vila Flor</h2><FAQSection faqs={faqs} /></div></section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Vila Flor?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Chegamos em menos de 25 minutos.</p>
            <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
          </div>
        </section>

        <RelatedCities currentCity="Vila Flor" currentCitySlug="canalizador-vila-flor" />
      </main>
      <Footer />
    </div>
  );
}