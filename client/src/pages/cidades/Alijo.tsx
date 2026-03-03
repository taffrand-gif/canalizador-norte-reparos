// SEO optimized page for "Canalizador Alijó"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle, Wrench } from 'lucide-react';
import { businessInfo, getCityAddress } from '@/shared/napConfig';

export default function Alijo() {
  useEffect(() => {
    document.title = "Canalizador Alijó 24h - Canalização Quintas Douro - +351 928 484 451";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador em Alijó, coração do Douro Vinhateiro. Canalização para quintas, caves de vinho, turismo rural. Desentupimentos e fugas 24h. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-alijo');

    const cityAddress = getCityAddress('alijo');
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-alijo';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": "Canalizador Profissional Alijó",
      "description": "Canalizador em Alijó, Douro Vinhateiro. Canalização para quintas, caves e alojamentos turísticos.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": cityAddress.streetAddress,
        "addressLocality": cityAddress.addressLocality,
        "addressRegion": cityAddress.addressRegion,
        "addressCountry": cityAddress.addressCountry,
        "postalCode": cityAddress.postalCode
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.2833", "longitude": "-7.4667" },
      "telephone": businessInfo.phone,
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-alijo');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    { question: "Quanto tempo demora a chegar a Alijó?", answer: "Chegamos a Alijó em aproximadamente 50-60 minutos, percorrendo cerca de 60km desde Macedo de Cavaleiros pelo IP4 e N212." },
    { question: "Fazem canalização para quintas vinícolas do Douro?", answer: "Sim, somos especializados em redes de água para quintas do Douro, incluindo caves de vinificação, sistemas de lavagem de cubas e drenagem de terrenos em socalcos." },
    {
      question: "Qual o custo de deslocação a Alijó?",
      answer: "A deslocação a Alijó é de 35€. Chegamos em aproximadamente 60-70 minutos. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 ALIJÓ - DOURO VINHATEIRO</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Alijó</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Canalização especializada no coração do Douro Vinhateiro. Servimos quintas, caves de vinho, alojamentos turísticos e habitações de todo o concelho de Alijó.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Alijó" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Alijó</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Droplets, title: "Canalização para Caves", desc: "Redes de água para caves de vinificação, lavagem de cubas e drenagem" },
                { icon: Shield, title: "Reparação de Fugas", desc: "Deteção e reparação em quintas, casas de granito e edifícios antigos" },
                { icon: Wrench, title: "Canalização Turismo Rural", desc: "Instalação para hotéis rurais, piscinas e sistemas de aquecimento" },
                { icon: CheckCircle, title: "Desentupimentos 24h", desc: "Esgotos, fossas sépticas e canalizações de quintas e adegas" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Alijó</h2><FAQSection faqs={faqs} /></div></section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Alijó?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Especialistas no Douro Vinhateiro.</p>
            <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
          </div>
        </section>

        <RelatedCities currentCity="Alijó" currentCitySlug="canalizador-alijo" />
      </main>
      <Footer />
    </div>
  );
}