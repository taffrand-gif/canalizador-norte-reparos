// SEO optimized page for "Canalizador Mondim de Basto"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle, Wrench } from 'lucide-react';
import { businessInfo, getCityAddress } from '@/shared/napConfig';

export default function MondimDeBasto() {
  useEffect(() => {
    document.title = "Canalizador Mondim de Basto 24h - Serra do Alvão - +351 928 484 451";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador em Mondim de Basto, porta da Serra do Alvão. Desentupimentos, fugas de água, canalização para turismo de montanha. Serviço 24h. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-mondim-de-basto');

    const cityAddress = getCityAddress('mondim-de-basto');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-mondim';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": "Canalizador Profissional Mondim de Basto",
      "description": "Canalizador em Mondim de Basto. Canalização para turismo de montanha e habitações na Serra do Alvão.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": cityAddress.streetAddress,
        "addressLocality": cityAddress.addressLocality,
        "addressRegion": cityAddress.addressRegion,
        "addressCountry": cityAddress.addressCountry,
        "postalCode": cityAddress.postalCode
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.4167", "longitude": "-7.9500" },
      "telephone": businessInfo.phone,
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-mondim');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    { question: "Quanto tempo demora a chegar a Mondim de Basto?", answer: "Chegamos a Mondim de Basto em aproximadamente 1h30, percorrendo cerca de 100km desde Macedo de Cavaleiros via Vila Real." },
    { question: "Fazem canalização para alojamentos de montanha?", answer: "Sim, instalamos canalização para hotéis de montanha, casas de turismo rural e refúgios na Serra do Alvão, com proteção contra gelo e sistemas de aquecimento adequados." },
    {
      question: "Qual o custo de deslocação a Mondim de Basto?",
      answer: "A deslocação é de 65€ (Zona 6), sob marcação prévia. Estamos a cerca de 90km de Macedo de Cavaleiros. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 MONDIM DE BASTO - SERRA DO ALVÃO</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Mondim de Basto</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Canalização profissional na porta da Serra do Alvão. Especializados em turismo de montanha, casas de campo e proteção contra gelo para todo o concelho de Mondim de Basto.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Mondim%20de%20Basto" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Mondim de Basto</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Shield, title: "Proteção Contra Gelo", desc: "Isolamento térmico de tubagens para casas e hotéis de montanha" },
                { icon: Droplets, title: "Desentupimentos", desc: "Esgotos, fossas sépticas e canalizações de aldeias serranas" },
                { icon: Wrench, title: "Canalização Turismo", desc: "Instalação para hotéis rurais, piscinas e spas de montanha" },
                { icon: CheckCircle, title: "Aquecimento Central", desc: "Caldeiras e radiadores para casas de montanha e alojamentos" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Mondim de Basto</h2><FAQSection faqs={faqs} /></div></section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Mondim de Basto?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Preparados para a Serra do Alvão.</p>
            <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
          </div>
        </section>

        <RelatedCities currentCity="Mondim de Basto" currentCitySlug="canalizador-mondim-de-basto" />
      </main>
      <Footer />
    </div>
  );
}