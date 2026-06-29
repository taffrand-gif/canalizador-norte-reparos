// SEO optimizada para "Canalizador Torre de Dona Chama"
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

export default function TorreDonaChama() {
  const faqs = [
    {
      question: "Qual o preço de canalizador em Torre de Dona Chama?",
      answer: "Em Torre de Dona Chama, a deslocação é de 15€ (Zona 1 — zona de cobertura prioritária a partir de Macedo de Cavaleiros). A mão de obra é 65€/h. Exemplos de preços completos: desentupimento de lavatório 75-145€, reparação de fuga de água 85-175€, substituição de sifão 50-110€. O preço é sempre comunicado antes de qualquer intervenção."
    },
    {
      question: "Fazem urgências de canalizações 24h em Torre de Dona Chama?",
      answer: "Sim, atendemos urgências de fugas de água e desentupimentos 24h por dia, 7 dias por semana em Torre de Dona Chama. Por estar na nossa Zona 1, ficamos a menos de 20 minutos de distância. Ligue 928 484 451 para atendimento imediato."
    },
    {
      question: "Fazem desentupimentos em Torre de Dona Chama?",
      answer: "Sim, fazemos desentupimentos de esgotos, lavatórios, sanitas e ralos em Torre de Dona Chama e toda a zona de Mirandela. Usamos máquinas de alta pressão adequadas para casas de granito com canalizações antigas. Orçamento gratuito antes de qualquer trabalho."
    },
    {
      question: "Reparam fugas de água ao fim de semana em Torre de Dona Chama?",
      answer: "Sim, atendemos fugas de água em Torre de Dona Chama 24h, incluindo fins de semana e feriados. O acréscimo noturno/fim de semana é de 50% sobre a mão de obra e deslocação — sempre informado antes de avançar."
    },
    {
      question: "Que zonas cobrem a partir de Torre de Dona Chama?",
      answer: "A partir de Torre de Dona Chama cobrimos toda a área envolvente: Frechas, Lamas de Orelhão, Romeu, Avantos, Suçães, Abambres e toda a zona norte do concelho de Mirandela. Estamos disponíveis 24h incluindo fins de semana e feriados."
    }
  ];

  useEffect(() => {
    document.title = '🔧 Canalizador Torre de Dona Chama — 24h | 928 484 451';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador em Torre de Dona Chama. Desentupimentos, fugas de água, instalações sanitárias. Zona 1 — deslocação 15€. Urgências 24h. Ligue 928 484 451.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'canalizador torre de dona chama, canalizador urgente torre de dona chama, desentupimento torre de dona chama, fuga agua torre de dona chama, canalizador mirandela, canalizador trás-os-montes');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-torre-de-dona-chama');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-canalizador-torre-de-dona-chama';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Canalizador Profissional — Torre de Dona Chama",
      "image": "/images-optimized/hero/hero-plumber-portugal.jpg",
      "description": "Canalizador profissional em Torre de Dona Chama, Mirandela. Desentupimentos, fugas de água e urgências 24h. Zona 1 — deslocação 15€.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Torre de Dona Chama",
        "addressRegion": "Bragança",
        "addressCountry": "PT",
        "postalCode": "5370-600"
      },
      "telephone": businessInfo.phone,
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€",
      "areaServed": { "@type": "Place", "name": "Torre de Dona Chama, Mirandela" }
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
      const s1 = document.getElementById('schema-canalizador-torre-de-dona-chama');
      if (s1) document.head.removeChild(s1);
      const s2 = document.querySelector('script[data-faq-schema]');
      if (s2) document.head.removeChild(s2);
    };
  }, []);

  const cidadesProximas = getCidadesProximas('torre-de-dona-chama');

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
                { label: 'Mirandela', href: '/canalizador-mirandela' },
                { label: 'Torre de Dona Chama', href: '/canalizador-torre-de-dona-chama' }
              ]} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Canalizador em{' '}
                <span className="text-blue-300">Torre de Dona Chama</span>
              </h1>
              <p className="text-xl mb-4 text-gray-200">
                Zona 1 — a menos de 20 minutos da nossa base em Macedo de Cavaleiros.
                Urgências 24h, desentupimentos e fugas de água. Deslocação 15€.
              </p>
              <p className="text-base mb-8 text-gray-300">
                Cobrimos Torre de Dona Chama e toda a zona de Mirandela.
                Disponíveis 24h incluindo fins de semana e feriados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="bg-white text-blue-800 hover:bg-blue-50 font-bold px-8 py-4 rounded-lg text-lg transition-colors text-center"
                >
                  🔧 Ligar agora: {businessInfo.phoneFormatted}
                </a>
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}?text=Olá, preciso de um canalizador em Torre de Dona Chama`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors text-center"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Serviços de Canalizações em{' '}
              <span className="text-blue-600">Torre de Dona Chama</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="text-3xl mb-4">🚰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Desentupimentos</h3>
                <p className="text-gray-600 mb-4">
                  Esgotos, lavatórios, sanitas e ralos. Máquinas de alta pressão
                  adequadas para casas de granito com canalizações antigas.
                </p>
                <ul className="space-y-1 text-sm text-gray-500">
                  <li>✓ Esgotos interiores e exteriores</li>
                  <li>✓ Sanitas e lavatórios</li>
                  <li>✓ Câmaras de inspeção</li>
                  <li>✓ Fossas e sistemas de drenagem</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="text-3xl mb-4">💧</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fugas de Água 24h</h3>
                <p className="text-gray-600 mb-4">
                  Fugas visíveis e escondidas em paredes ou pavimentos.
                  Deteção sem destruição desnecessária.
                </p>
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
                <p className="text-gray-600 mb-4">
                  Especialistas em casas de granito e quintas da zona de Torre de Dona Chama
                  e vale do Tuela.
                </p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Conhecemos Torre de Dona Chama
                </h2>
                <p className="text-gray-600 mb-4">
                  Torre de Dona Chama é uma das freguesias mais ativas do concelho de Mirandela,
                  com um parque habitacional diversificado — casas de granito tradicionais no centro
                  histórico, quintas no vale do Tuela e habitações mais recentes nas zonas de expansão.
                </p>
                <p className="text-gray-600 mb-4">
                  Conhecemos bem as particularidades hidráulicas desta zona: canalizações antigas
                  em casas de pedra que acumulam calcário, sistemas de bombagem em propriedades rurais,
                  e fossas sépticas que requerem manutenção periódica nos invernos frios do interior.
                </p>
                <p className="text-gray-600">
                  A nossa base em Macedo de Cavaleiros fica a menos de 20km — a zona mais próxima
                  de todo o nosso território de serviço. Deslocação 15€ (Zona 1).
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Cobertura em{' '}
                  <span className="text-blue-600">Torre de Dona Chama</span>
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    'Torre de Dona Chama', 'Frechas', 'Lamas de Orelhão',
                    'Romeu', 'Avantos', 'Suçães', 'Abambres', 'Vale do Tuela'
                  ].map((area) => (
                    <div key={area} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="text-blue-500">🔧</span>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Distância da base</span>
                    <span className="font-bold text-blue-700">&lt; 20 km</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Deslocação</span>
                    <span className="font-bold text-blue-700">15€ (Zona 1)</span>
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
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Perguntas sobre{' '}
              <span className="text-blue-600">Canalizador em Torre de Dona Chama</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <FAQSection faqs={faqs} />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Canalizador em{' '}
              <span className="text-blue-300">Torre de Dona Chama</span>
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Zona 1 — deslocação 15€. Orçamento gratuito. Garantia de 12 meses.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={`tel:${businessInfo.phone}`}
                className="bg-white text-blue-800 hover:bg-blue-50 font-bold px-10 py-4 rounded-lg text-lg transition-colors"
              >
                🔧 {businessInfo.phoneFormatted}
              </a>
              <a
                href={`https://wa.me/${businessInfo.whatsapp}?text=Olá, preciso de um canalizador em Torre de Dona Chama`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </section>

        <CidadesProximas currentCity="Torre de Dona Chama" cidades={cidadesProximas} serviceType="canalizador" />
        <RelatedCities currentCity="TorreDonaChama" currentCitySlug="canalizador-torre-de-dona-chama" />
      </main>
      <Footer />
    </>
  );
}
