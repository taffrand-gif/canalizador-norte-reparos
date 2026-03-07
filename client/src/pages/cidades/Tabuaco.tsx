// SEO optimized page for "Canalizador Tabuaço"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle, Wrench } from 'lucide-react';
import { businessInfo, getCityAddress } from '@/shared/napConfig';

export default function Tabuaco() {
  useEffect(() => {
    document.title = "Canalizador Tabuaço 24h - Quintas Vinícolas do Douro - +351 928 484 451";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) { metaDescription = document.createElement('meta'); metaDescription.setAttribute('name', 'description'); document.head.appendChild(metaDescription); }
    metaDescription.setAttribute('content', 'Canalizador em Tabuaço disponível 24h. Canalização para quintas vinícolas do Douro, desentupimentos, fugas de água, esquentadores. Orçamento gratuito.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-tabuaco');

    const cityAddress = getCityAddress('tabuaco');
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-tabuaco';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org", "@type": "Plumber",
      "name": "Canalizador Profissional Tabuaço",
      "description": "Canalizador em Tabuaço. Canalização para quintas vinícolas do Douro e habitações.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": cityAddress.streetAddress,
        "addressLocality": cityAddress.addressLocality,
        "addressRegion": cityAddress.addressRegion,
        "addressCountry": cityAddress.addressCountry,
        "postalCode": cityAddress.postalCode
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.1167", "longitude": "-7.5667" },
      "telephone": businessInfo.phone, "openingHours": "Mo-Su 00:00-23:59", "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);
    return () => { const s = document.getElementById('schema-tabuaco'); if (s) s.remove(); };
  }, []);

  const faqs = [
    { question: "Quanto tempo demora a chegar a Tabuaço?", answer: "Chegamos a Tabuaço em aproximadamente 55-65 minutos, percorrendo cerca de 65km desde Macedo de Cavaleiros." },
    { question: "Fazem canalização para quintas vinícolas?", answer: "Sim, instalamos redes de água para quintas vinícolas do Douro, incluindo caves de vinificação, sistemas de lavagem e drenagem de terrenos em socalcos." },
    {
      question: "Qual o custo de deslocação a Tabuaço?",
      answer: "A deslocação é de 55€ (Zona 5). Chegamos em aproximadamente 70-80 minutos. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 TABUAÇO - QUINTAS VINÍCOLAS DO DOURO</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Tabuaço</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Canalização profissional em Tabuaço, terra das quintas vinícolas do Douro. Servimos adegas, alojamentos turísticos e habitações de todo o concelho.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Tabuaço" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Tabuaço</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Droplets, title: "Canalização Vinícola", desc: "Redes de água para quintas, caves de vinificação e sistemas de lavagem" },
                { icon: Shield, title: "Reparação de Fugas", desc: "Deteção e reparação em quintas antigas e casas de granito" },
                { icon: Wrench, title: "Desentupimentos", desc: "Esgotos, fossas sépticas e canalizações de adegas" },
                { icon: CheckCircle, title: "Esquentadores e Caldeiras", desc: "Instalação de aquecimento para casas e alojamentos turísticos" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Tabuaço</h2><FAQSection faqs={faqs} /></div></section>
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Tabuaço?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos as quintas do Douro.</p>
            <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
          </div>
        </section>
        <RelatedCities currentCity="Tabuaço" currentCitySlug="canalizador-tabuaco" />
      </main>
      <Footer />
    </div>
  );
}