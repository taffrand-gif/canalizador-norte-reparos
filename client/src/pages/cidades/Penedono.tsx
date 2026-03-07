// SEO optimized page for "Canalizador Penedono"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle, Wrench } from 'lucide-react';
import { businessInfo, getCityAddress } from '@/shared/napConfig';

export default function Penedono() {
  useEffect(() => {
    document.title = "Canalizador Penedono 24h - Canalização Profissional - +351 928 484 451";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) { metaDescription = document.createElement('meta'); metaDescription.setAttribute('name', 'description'); document.head.appendChild(metaDescription); }
    metaDescription.setAttribute('content', 'Canalizador em Penedono disponível 24h. Canalização para casas medievais de granito, desentupimentos, fugas de água. Terra do castelo. Orçamento gratuito.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-penedono');

    const cityAddress = getCityAddress('penedono');
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-penedono';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org", "@type": "Plumber",
      "name": "Canalizador Profissional Penedono",
      "description": "Canalizador em Penedono. Canalização para casas medievais de granito e habitações rurais.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": cityAddress.streetAddress,
        "addressLocality": cityAddress.addressLocality,
        "addressRegion": cityAddress.addressRegion,
        "addressCountry": cityAddress.addressCountry,
        "postalCode": cityAddress.postalCode
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "40.9833", "longitude": "-7.3833" },
      "telephone": businessInfo.phone, "openingHours": "Mo-Su 00:00-23:59", "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);
    return () => { const s = document.getElementById('schema-penedono'); if (s) s.remove(); };
  }, []);

  const faqs = [
    { question: "Quanto tempo demora a chegar a Penedono?", answer: "Chegamos a Penedono em aproximadamente 1h05 a 1h15, percorrendo cerca de 75km desde Macedo de Cavaleiros." },
    { question: "Fazem canalização em casas medievais de granito?", answer: "Sim, somos especializados em instalar canalização moderna em casas de granito centenárias, respeitando a arquitetura medieval enquanto garantimos conforto moderno." },
    {
      question: "Qual o custo de deslocação a Penedono?",
      answer: "A deslocação é de 65€ (Zona 6), sob marcação prévia. Estamos a cerca de 90km de Macedo de Cavaleiros. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 PENEDONO - CASTELO MEDIEVAL</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Penedono</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Canalização profissional em Penedono, terra do castelo medieval e do granito. Especializados em modernizar casas antigas preservando o carácter histórico.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Penedono" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Penedono</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Wrench, title: "Canalização em Granito", desc: "Instalação moderna em casas medievais preservando a estrutura original" },
                { icon: Droplets, title: "Desentupimentos", desc: "Esgotos, fossas sépticas e canalizações antigas entupidas" },
                { icon: Shield, title: "Instalação Sanitários", desc: "Casas de banho completas em casas antigas e turismo rural" },
                { icon: CheckCircle, title: "Reparação de Fugas", desc: "Deteção e reparação urgente de fugas em casas de pedra" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Penedono</h2><FAQSection faqs={faqs} /></div></section>
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Penedono?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Especialistas em casas de granito.</p>
            <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
          </div>
        </section>
        <RelatedCities currentCity="Penedono" currentCitySlug="canalizador-penedono" />
      </main>
      <Footer />
    </div>
  );
}