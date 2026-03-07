// SEO optimized page for "Canalizador Miranda do Douro"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle } from 'lucide-react';
import { businessInfo, getCityAddress } from '@/shared/napConfig';

export default function MirandaDouro() {
  useEffect(() => {
    document.title = "Canalizador Miranda do Douro 💧 24h | 928 484 451";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Cano rebentado em Miranda do Douro? Estamos aí hoje. Desentupimentos e reparações urgentes. Ligue agora: 928 484 451');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-miranda-douro');

    const cityAddress = getCityAddress('miranda-douro');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-miranda';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": "Canalizador Profissional Miranda do Douro",
      "description": "Canalizador profissional em Miranda do Douro. Serviço 24h, desentupimentos.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": cityAddress.streetAddress,
        "addressLocality": cityAddress.addressLocality,
        "addressRegion": cityAddress.addressRegion,
        "addressCountry": cityAddress.addressCountry,
        "postalCode": cityAddress.postalCode
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.4833", "longitude": "-6.2667" },
      "telephone": businessInfo.phone,
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-miranda');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    { question: "Quanto tempo demora a chegar a Miranda do Douro?", answer: "Chegamos a Miranda do Douro em aproximadamente 45-60 minutos. Cobrimos todo o concelho." },
    {
      question: "Qual o custo de deslocação a Miranda do Douro?",
      answer: "A deslocação é de 35€ (Zona 3). Chegamos em aproximadamente 60-70 minutos. Inclui todo o concelho."
    },
    { question: "Fazem desentupimentos de fossas sépticas?", answer: "Sim, fazemos limpeza e desentupimento de fossas sépticas em toda a Terra de Miranda." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 MIRANDA DO DOURO - TERRA DE MIRANDA</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Miranda do Douro</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Servimos toda a Terra de Miranda. De Sendim a Duas Igrejas. Desentupimentos e reparações 24h.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Miranda%20do%20Douro" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Miranda do Douro</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Droplets, title: "Desentupimentos 24h", desc: "WC, lavatórios, esgotos, fossas sépticas" },
                { icon: Shield, title: "Reparação de Fugas", desc: "Deteção e reparação de fugas de água" },
                { icon: CheckCircle, title: "Turismo Rural", desc: "Canalização para alojamento local e casas de férias" },
                { icon: Droplets, title: "Esquentadores", desc: "Instalação e reparação, essencial no inverno rigoroso" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Miranda do Douro</h2><FAQSection faqs={faqs} /></div></section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Miranda do Douro?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos toda a Terra de Miranda.</p>
            <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
          </div>
        </section>

        {/* Related Cities - Maillage interno SEO */}
        <RelatedCities 
          currentCity="Miranda do Douro" 
          currentCitySlug="canalizador-mirandadouro" 
        />
      </main>
      <Footer />
    </div>
  );
}
