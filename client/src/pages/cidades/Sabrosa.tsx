// SEO optimized page for "Canalizador Sabrosa"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle, Wrench } from 'lucide-react';

export default function Sabrosa() {
  useEffect(() => {
    document.title = "Canalizador Sabrosa 24h - Canalização no Douro - +351 928 484 451";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador em Sabrosa, terra de Fernão de Magalhães. Canalização para quintas do Douro, desentupimentos, fugas de água. Serviço 24h. Orçamento gratuito.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-sabrosa');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-sabrosa';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": "Canalizador Profissional Sabrosa",
      "description": "Canalizador em Sabrosa. Canalização para quintas do Douro e habitações na terra de Fernão de Magalhães.",
      "address": { "@type": "PostalAddress", "addressLocality": "Sabrosa", "addressRegion": "Vila Real", "addressCountry": "PT" },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.2667", "longitude": "-7.5667" },
      "telephone": "+351928484451",
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('schema-sabrosa');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const faqs = [
    { question: "Quanto tempo demora a chegar a Sabrosa?", answer: "Chegamos a Sabrosa em aproximadamente 1 hora, percorrendo cerca de 70km desde Macedo de Cavaleiros pelo IP4." },
    { question: "Fazem canalização para casas históricas?", answer: "Sim, temos experiência em modernizar a canalização de casas históricas e solares, preservando a arquitetura original enquanto instalamos tubagens modernas." },
    {
      question: "Qual o custo de deslocação a Sabrosa?",
      answer: "A deslocação a Sabrosa é de 35€. Chegamos em aproximadamente 65-75 minutos. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 SABROSA - TERRA DE FERNÃO DE MAGALHÃES</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Sabrosa</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Canalização profissional na terra de Fernão de Magalhães, no coração do Douro. Servimos quintas vinícolas, casas históricas e habitações de todo o concelho de Sabrosa.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Sabrosa" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Sabrosa</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Droplets, title: "Canalização Quintas do Douro", desc: "Redes de água para quintas vinícolas, caves e sistemas de rega" },
                { icon: Shield, title: "Renovação Casas Históricas", desc: "Modernização de canalização em solares e casas de granito" },
                { icon: Wrench, title: "Desentupimentos", desc: "Esgotos, fossas sépticas e canalizações antigas entupidas" },
                { icon: CheckCircle, title: "Instalação Sanitários", desc: "Casas de banho completas para turismo rural e habitações" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Sabrosa</h2><FAQSection faqs={faqs} /></div></section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Sabrosa?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos todo o concelho no Douro.</p>
            <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
          </div>
        </section>

        <RelatedCities currentCity="Sabrosa" currentCitySlug="canalizador-sabrosa" />
      </main>
      <Footer />
    </div>
  );
}