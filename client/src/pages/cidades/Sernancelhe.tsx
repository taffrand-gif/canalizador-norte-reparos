// SEO optimized page for "Canalizador Sernancelhe"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle, Wrench } from 'lucide-react';

export default function Sernancelhe() {
  useEffect(() => {
    document.title = "Canalizador Sernancelhe 24h - Canalização e Desentupimentos - +351 928 484 451";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) { metaDescription = document.createElement('meta'); metaDescription.setAttribute('name', 'description'); document.head.appendChild(metaDescription); }
    metaDescription.setAttribute('content', 'Canalizador em Sernancelhe disponível 24h. Canalização para casas de granito, turismo religioso, desentupimentos e fugas. Terra da castanha. Orçamento gratuito.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://norte-reparos.com/canalizador-sernancelhe');
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-sernancelhe';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org", "@type": "Plumber",
      "name": "Canalizador Profissional Sernancelhe",
      "description": "Canalizador em Sernancelhe. Canalização para casas de granito e turismo religioso.",
      "address": { "@type": "PostalAddress", "addressLocality": "Sernancelhe", "addressRegion": "Viseu", "addressCountry": "PT" },
      "geo": { "@type": "GeoCoordinates", "latitude": "40.9000", "longitude": "-7.5000" },
      "telephone": "+351928484451", "openingHours": "Mo-Su 00:00-23:59", "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);
    return () => { const s = document.getElementById('schema-sernancelhe'); if (s) s.remove(); };
  }, []);

  const faqs = [
    { question: "Quanto tempo demora a chegar a Sernancelhe?", answer: "Chegamos a Sernancelhe em aproximadamente 1h10 a 1h20, percorrendo cerca de 80km desde Macedo de Cavaleiros." },
    { question: "Fazem canalização para igrejas e edifícios religiosos?", answer: "Sim, temos experiência em canalização para edifícios religiosos e patrimoniais, com cuidado especial na preservação das estruturas de granito centenárias." },
    {
      question: "Qual o custo de deslocação a Sernancelhe?",
      answer: "A deslocação a Sernancelhe é de 40€, sob marcação prévia. Estamos a cerca de 100km de Macedo de Cavaleiros. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 SERNANCELHE - TERRA DA CASTANHA</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Sernancelhe</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Canalização profissional em Sernancelhe, terra da castanha e do turismo religioso. Servimos casas de granito, igrejas e alojamentos de todo o concelho.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Sernancelhe" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Sernancelhe</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Wrench, title: "Canalização Patrimonial", desc: "Modernização de redes de água em igrejas e edifícios históricos" },
                { icon: Droplets, title: "Desentupimentos", desc: "Esgotos, fossas sépticas e canalizações antigas de granito" },
                { icon: Shield, title: "Reparação de Fugas", desc: "Deteção e reparação em casas tradicionais e quintas" },
                { icon: CheckCircle, title: "Aquecimento Central", desc: "Caldeiras e radiadores para casas de montanha e turismo rural" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Sernancelhe</h2><FAQSection faqs={faqs} /></div></section>
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Sernancelhe?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos toda a terra da castanha.</p>
            <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
          </div>
        </section>
        <RelatedCities currentCity="Sernancelhe" currentCitySlug="canalizador-sernancelhe" />
      </main>
      <Footer />
    </div>
  );
}