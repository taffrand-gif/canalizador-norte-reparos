// SEO optimized page for "Canalizador Santa Marta de Penaguião"
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle, Wrench } from 'lucide-react';
import { businessInfo, getCityAddress } from '@/shared/napConfig';
import { getCidadesProximas } from '@/data/cidadesProximas';

export default function SantaMartaDePenaguiao() {
  useEffect(() => {
    document.title = "Canalizador Santa Marta de Penaguião 24h - Vinho Verde e Douro - +351 928 484 451";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) { metaDescription = document.createElement('meta'); metaDescription.setAttribute('name', 'description'); document.head.appendChild(metaDescription); }
    metaDescription.setAttribute('content', 'Canalizador em Santa Marta de Penaguião. Canalização para quintas de vinho verde e Douro, desentupimentos, fugas de água 24h. Orçamento gratuito.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-santa-marta-de-penaguiao');

    const cityAddress = getCityAddress('santa-marta-penaguiao');
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-santa-marta';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org", "@type": "Plumber",
      "name": "Canalizador Profissional Santa Marta de Penaguião",
      "description": "Canalizador em Santa Marta de Penaguião. Canalização para quintas de vinho verde e Douro.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": cityAddress.streetAddress,
        "addressLocality": cityAddress.addressLocality,
        "addressRegion": cityAddress.addressRegion,
        "addressCountry": cityAddress.addressCountry,
        "postalCode": cityAddress.postalCode
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.2000", "longitude": "-7.7833" },
      "telephone": businessInfo.phone, "openingHours": "Mo-Su 00:00-23:59", "priceRange": "€€"
    });
    document.head.appendChild(schemaScript);

    // FAQ Schema
    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-faq-schema', 'true');
    faqSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
    document.head.appendChild(faqSchema);
    return () => { const s = document.getElementById('schema-santa-marta'); if (s) s.remove(); };
  }, []);

  const cidadesProximas = getCidadesProximas('santa-marta-penaguiao');

  const faqs = [
    { question: "Quanto tempo demora a chegar a Santa Marta de Penaguião?", answer: "Chegamos a Santa Marta de Penaguião em aproximadamente 1h10 a 1h20, percorrendo cerca de 80km desde Macedo de Cavaleiros pela A4 e A24." },
    { question: "Fazem canalização para adegas de vinho verde?", answer: "Sim, instalamos redes de água e drenagem para adegas de vinho verde e quintas do Douro, com materiais adequados ao processo de vinificação e armazenamento." },
    {
      question: "Qual o custo de deslocação a Santa Marta de Penaguião?",
      answer: "A deslocação é de 55€ (Zona 5). Chegamos em aproximadamente 65-75 minutos. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 SANTA MARTA DE PENAGUIÃO - VINHO VERDE E DOURO</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Santa Marta de Penaguião</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Canalização profissional na transição entre o vinho verde e o Douro. Servimos quintas vinícolas, adegas e habitações de todo o concelho de Santa Marta de Penaguião.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Santa%20Marta%20de%20Penaguião" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Santa Marta de Penaguião</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Droplets, title: "Canalização Vinícola", desc: "Redes de água para adegas de vinho verde e quintas do Douro" },
                { icon: Shield, title: "Desentupimentos", desc: "Esgotos, fossas sépticas e canalizações de quintas e adegas" },
                { icon: Wrench, title: "Arranjo de Fugas", desc: "Deteção e arranjo em casas antigas e quintas nos socalcos" },
                { icon: CheckCircle, title: "Esquentadores e Caldeiras", desc: "Instalação e manutenção de sistemas de aquecimento" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Santa Marta de Penaguião</h2><FAQSection faqs={faqs} /></div></section>
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Santa Marta de Penaguião?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos toda a zona vinícola.</p>
            <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
          </div>
        </section>
        {/* Cidades Próximas - Internal Linking */}
        <CidadesProximas
          currentCity="Santa Marta de Penaguião"
          cidades={cidadesProximas}
          serviceType="canalizador"
        />

        
        <RelatedCities currentCity="Santa Marta de Penaguião" currentCitySlug="canalizador-santa-marta-de-penaguiao" />
      </main>
      <Footer />
    </div>
  );
}