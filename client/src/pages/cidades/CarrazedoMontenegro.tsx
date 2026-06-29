// SEO optimizada para "Canalizador Carrazedo de Montenegro"
// Gerado: 2026-06-29 | Cowork (Claude Sonnet 4.6) — Norte Reparos
// STAGING — validação Filipe obrigatória antes de push para repo
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import FAQSection from '@/components/FAQSection';
import { businessInfo } from '@/shared/napConfig';
import { useEffect } from 'react';
import { getCidadesProximas } from '@/data/cidadesProximas';

export default function CarrazedoMontenegro() {
  const faqs = [
    {
      question: "Qual o preço de canalizador em Carrazedo de Montenegro?",
      answer: "Em Carrazedo de Montenegro, a deslocação é de 45€ (Zona 4). A mão de obra é 65€/h. Exemplos: desentupimento de lavatório 80-155€, reparação de fuga de água 90-185€, substituição de sifão 55-115€. O preço é sempre comunicado antes de qualquer intervenção, sem surpresas."
    },
    {
      question: "Fazem urgências de canalizações 24h em Carrazedo de Montenegro?",
      answer: "Sim, atendemos urgências de fugas de água e desentupimentos 24h por dia, 7 dias por semana em Carrazedo de Montenegro e toda a zona de Valpaços. Ligue 928 484 451 para atendimento imediato."
    },
    {
      question: "Fazem desentupimentos em Carrazedo de Montenegro?",
      answer: "Sim, fazemos desentupimentos de esgotos, lavatórios, sanitas e ralos em Carrazedo de Montenegro. Somos especialistas em habitações rurais e quintas com sistemas de rega e bombagem. Usamos máquinas de alta pressão. Orçamento gratuito antes de qualquer trabalho."
    },
    {
      question: "Reparam fugas de água ao fim de semana em Carrazedo de Montenegro?",
      answer: "Sim, atendemos fugas de água em Carrazedo de Montenegro 24h, incluindo fins de semana e feriados. O acréscimo noturno/fim de semana é de 50% sobre a mão de obra e deslocação — sempre informado antes de avançar."
    },
    {
      question: "Que zonas cobrem em Carrazedo de Montenegro?",
      answer: "A partir de Carrazedo de Montenegro cobrimos toda a área envolvente: Carrazedo de Montenegro, Fiães do Tâmega, Parada de Monteiros, Santa Leocádia de Gestaçô. Disponíveis 24h incluindo fins de semana e feriados."
    }
  ];

  useEffect(() => {
    document.title = '🔧 Canalizador Carrazedo de Montenegro — 24h | 928 484 451';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador em Carrazedo de Montenegro, Vila Real. Desentupimentos, fugas de água, instalações sanitárias. Deslocação 45€. Urgências 24h. Ligue 928 484 451.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'canalizador carrazedo de montenegro, canalizador urgente carrazedo, desentupimento carrazedo montenegro, fuga agua valpacos, canalizador valpacos, canalizador tras-os-montes');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-carrazedo-de-montenegro');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-canalizador-carrazedo-de-montenegro';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Canalizador Profissional — Carrazedo de Montenegro",
      "image": "/images-optimized/hero/hero-plumber-portugal.jpg",
      "description": "Canalizador profissional em Carrazedo de Montenegro, Vila Real. Desentupimentos, fugas de água e urgências 24h. Deslocação 45€.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Carrazedo de Montenegro",
        "addressRegion": "Vila Real",
        "addressCountry": "PT",
        "postalCode": "5430-060"
      },
      "telephone": businessInfo.phone,
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€",
      "areaServed": { "@type": "Place", "name": "Carrazedo de Montenegro, Vila Real" }
    });
    document.head.appendChild(schemaScript);

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-faq-schema', 'true');
    faqSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    });
    document.head.appendChild(faqSchema);

    return () => {
      const s1 = document.getElementById('schema-canalizador-carrazedo-de-montenegro');
      if (s1) document.head.removeChild(s1);
      const s2 = document.querySelector('script[data-faq-schema]');
      if (s2) document.head.removeChild(s2);
    };
  }, []);

  const cidadesProximas = getCidadesProximas('carrazedo-de-montenegro');

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">

        <section className="bg-gradient-to-r from-gray-900 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Breadcrumbs items={[
                { label: 'Canalizador', href: '/' },
                { label: 'Trás-os-Montes', href: '/canalizador-tras-os-montes' },
                { label: 'Valpaços', href: '/canalizador-valpacos' },
                { label: 'Carrazedo de Montenegro', href: '/canalizador-carrazedo-de-montenegro' }
              ]} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Canalizador em{' '}
                <span className="text-blue-300">Carrazedo de Montenegro</span>
              </h1>
              <p className="text-xl mb-4 text-gray-200">
                Sede de freguesia do concelho de Valpaços, no coração do Alto Tâmega transmontano. Urgências 24h, desentupimentos e fugas de água.
                Deslocação 45€.
              </p>
              <p className="text-base mb-8 text-gray-300">
                Cobrimos Carrazedo de Montenegro e toda a zona de Valpaços.
                Disponíveis 24h incluindo fins de semana e feriados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${businessInfo.phone}`} className="bg-white text-blue-800 hover:bg-blue-50 font-bold px-8 py-4 rounded-lg text-lg transition-colors text-center">
                  🔧 Ligar agora: {businessInfo.phoneFormatted}
                </a>
                <a href={`https://wa.me/${businessInfo.whatsapp}?text=Olá, preciso de um canalizador em Carrazedo de Montenegro`} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors text-center">
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Serviços de Canalizações em <span className="text-blue-600">Carrazedo de Montenegro</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="text-3xl mb-4">🚰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Desentupimentos</h3>
                <p className="text-gray-600 mb-4">Esgotos, lavatórios, sanitas e ralos. Especialistas em habitações rurais e quintas com sistemas de rega e bombagem.</p>
                <ul className="space-y-1 text-sm text-gray-500">
                  <li>✓ Esgotos interiores e exteriores</li>
                  <li>✓ Sanitas e lavatórios</li>
                  <li>✓ Câmaras de inspeção</li>
                  <li>✓ Alta pressão e sonda mecânica</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="text-3xl mb-4">💧</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fugas de Água 24h</h3>
                <p className="text-gray-600 mb-4">Fugas visíveis e escondidas. Deteção sem destruição desnecessária.</p>
                <ul className="space-y-1 text-sm text-gray-500">
                  <li>✓ Fugas em paredes e pavimentos</li>
                  <li>✓ Deteção sem destruição</li>
                  <li>✓ Tubagens PEX e PVC</li>
                  <li>✓ Urgências 24h/7 dias</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="text-3xl mb-4">🏡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instalações Sanitárias</h3>
                <p className="text-gray-600 mb-4">Casas de banho, cozinhas, esquentadores e termoacumuladores.</p>
                <ul className="space-y-1 text-sm text-gray-500">
                  <li>✓ Substituição de tubagens antigas</li>
                  <li>✓ Casas de banho e cozinhas</li>
                  <li>✓ Esquentadores e termoacumuladores</li>
                  <li>✓ Garantia 12 meses</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Canalizador em Carrazedo de Montenegro e arredores</h2>
                <p className="text-gray-600 mb-4">Carrazedo de Montenegro é uma sede de freguesia do concelho de Valpaços, no coração do Alto Tâmega transmontano. Conhecemos bem as particularidades hidráulicas desta zona: habitações rurais e quintas com sistemas de rega e bombagem, calcário nas canalizações e sistemas de drenagem que necessitam de manutenção regular.</p>
                <p className="text-gray-600 mb-4">Cobrimos Carrazedo de Montenegro e toda a área envolvente de Valpaços. Disponíveis 24h incluindo fins de semana e feriados.</p>
                <p className="text-gray-600">Deslocação 45€ (Zona 4). Mão de obra 65€/h. Orçamento gratuito antes de qualquer trabalho.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Cobertura em <span className="text-blue-600">Carrazedo de Montenegro</span></h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div key="Carrazedo de Montenegro" className="flex items-center gap-2 text-gray-700 text-sm"><span className="text-blue-500">🔧</span><span>Carrazedo de Montenegro</span></div>
                  <div key="Fiães do Tâmega" className="flex items-center gap-2 text-gray-700 text-sm"><span className="text-blue-500">🔧</span><span>Fiães do Tâmega</span></div>
                  <div key="Parada de Monteiros" className="flex items-center gap-2 text-gray-700 text-sm"><span className="text-blue-500">🔧</span><span>Parada de Monteiros</span></div>
                  <div key="Santa Leocádia de Gestaçô" className="flex items-center gap-2 text-gray-700 text-sm"><span className="text-blue-500">🔧</span><span>Santa Leocádia de Gestaçô</span></div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Distância da base</span>
                    <span className="font-bold text-blue-700">~65 km</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Deslocação</span>
                    <span className="font-bold text-blue-700">45€ (Zona 4)</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Disponibilidade</span>
                    <span className="font-bold text-blue-700">24h / 7 dias</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Perguntas sobre <span className="text-blue-600">Canalizador em Carrazedo de Montenegro</span></h2>
            <div className="max-w-3xl mx-auto"><FAQSection faqs={faqs} /></div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Canalizador em <span className="text-blue-300">Carrazedo de Montenegro</span></h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">Deslocação 45€. Orçamento gratuito. Garantia de 12 meses.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href={`tel:${businessInfo.phone}`} className="bg-white text-blue-800 hover:bg-blue-50 font-bold px-10 py-4 rounded-lg text-lg transition-colors">🔧 {businessInfo.phoneFormatted}</a>
              <a href={`https://wa.me/${businessInfo.whatsapp}?text=Olá, preciso de um canalizador em Carrazedo de Montenegro`} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <CidadesProximas currentCity="Carrazedo de Montenegro" cidades={cidadesProximas} serviceType="canalizador" />
        <RelatedCities currentCity="CarrazedoMontenegro" currentCitySlug="canalizador-carrazedo-de-montenegro" />
      </main>
      <Footer />
    </>
  );
}
