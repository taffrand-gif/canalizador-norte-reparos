// SEO optimized page for "Canalizador São João da Pesqueira"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle, Wrench } from 'lucide-react';

export default function SaoJoaoDaPesqueira() {
  useEffect(() => {
    document.title = "Canalizador São João da Pesqueira 24h - Douro Vinhateiro - +351 928 484 451";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) { metaDescription = document.createElement('meta'); metaDescription.setAttribute('name', 'description'); document.head.appendChild(metaDescription); }
    metaDescription.setAttribute('content', 'Canalizador em São João da Pesqueira, coração do Douro. Canalização para quintas vinícolas, caves de vinho, desentupimentos 24h. Orçamento gratuito.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://norte-reparos.com/canalizador-sao-joao-da-pesqueira');
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-pesqueira';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org", "@type": "Plumber",
      "name": "Canalizador Profissional São João da Pesqueira",
      "description": "Canalizador em São João da Pesqueira. Canalização para quintas vinícolas e caves do Douro.",
      "address": { "@type": "PostalAddress", "addressLocality": "São João da Pesqueira", "addressRegion": "Viseu", "addressCountry": "PT" },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.1500", "longitude": "-7.4000" },
      "telephone": "+351928484451", "openingHours": "Mo-Su 00:00-23:59", "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);
    return () => { const s = document.getElementById('schema-pesqueira'); if (s) s.remove(); };
  }, []);

  const faqs = [
    { question: "Quanto tempo demora a chegar a São João da Pesqueira?", answer: "Chegamos a São João da Pesqueira em aproximadamente 45-55 minutos, percorrendo cerca de 55km desde Macedo de Cavaleiros." },
    { question: "Fazem canalização para adegas e caves de vinho?", answer: "Sim, instalamos redes de água completas para adegas, caves de vinificação e armazéns de envelhecimento, com materiais resistentes à humidade e aos ácidos do vinho." },
    { question: "Cobrem as quintas nos socalcos do Douro?", answer: "Sim, servimos todas as quintas do concelho, incluindo as situadas nos socalcos do Douro com acessos difíceis. Temos veículo preparado para terrenos acidentados." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 SÃO JOÃO DA PESQUEIRA - CORAÇÃO DO DOURO</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em São João da Pesqueira</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Canalização profissional no coração do Douro Vinhateiro. Servimos quintas, caves de vinho, alojamentos turísticos e habitações de São João da Pesqueira.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20São%20João%20da%20Pesqueira" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em São João da Pesqueira</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Droplets, title: "Canalização Vinícola", desc: "Redes de água para adegas, caves e sistemas de lavagem de cubas" },
                { icon: Shield, title: "Reparação de Fugas", desc: "Deteção e reparação em quintas, casas de granito e edifícios" },
                { icon: Wrench, title: "Desentupimentos", desc: "Esgotos, fossas sépticas e canalizações de quintas e adegas" },
                { icon: CheckCircle, title: "Instalação Sanitários", desc: "Casas de banho para turismo rural e alojamentos do Douro" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - São João da Pesqueira</h2><FAQSection faqs={faqs} /></div></section>
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em São João da Pesqueira?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Especialistas no Douro Vinhateiro.</p>
            <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
          </div>
        </section>
        <RelatedCities currentCity="São João da Pesqueira" currentCitySlug="canalizador-sao-joao-da-pesqueira" />
      </main>
      <Footer />
    </div>
  );
}