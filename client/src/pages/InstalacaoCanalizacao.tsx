// Page Service Dédié: Instalação de Canalização Nova em Trás-os-Montes
// Optimizada para SEO com keywords: canalização nova, instalação sanitários

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import StructuredData from '@/components/StructuredData';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useEffect } from 'react';

export default function InstalacaoCanalizacao() {
  const { config } = useSite();

  useEffect(() => {
    document.title = "Instalação de Canalização Nova em Trás-os-Montes | Sanitários, Cozinhas, Casas de Banho";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Instalação de canalização nova em Trás-os-Montes: sanitários, cozinhas, casas de banho completas. Projeto personalizado, materiais de qualidade, garantia no serviço. Orçamento gratuito.');
  }, [config]);

  // Schema.org Service JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Instalação de Canalização Nova em Trás-os-Montes",
    "description": "Serviço profissional de instalação de canalização nova para sanitários, cozinhas e casas de banho em Trás-os-Montes.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Norte Reparos - Canalizador Profissional",
      "telephone": ACTIVE_CONFIG.phone,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Trás-os-Montes",
        "addressCountry": "PT"
      }
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.5378,
        "longitude": -6.9603
      },
      "geoRadius": "100000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Instalação de Canalização",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instalação de Casa de Banho Completa"
          },
          "price": "800",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instalação de Cozinha Nova"
          },
          "price": "600",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Substituição de Canalização Antiga"
          },
          "price": "400",
          "priceCurrency": "EUR"
        }
      ]
    }
  };

  return (
    <>
      <SEOHeadEnhanced pageType="service" />
      <StructuredData customSchema={serviceSchema} />
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instalação de <span className="text-orange-400">Canalização Nova</span> em Trás-os-Montes
            </h1>
            <p className="text-xl mb-8 max-w-3xl">
              Instalação completa de canalização nova para sanitários, cozinhas e casas de banho. 
              Projeto personalizado, materiais de primeira qualidade e garantia no serviço.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 Orçamento: {ACTIVE_CONFIG.phone}
              </a>
              <a
                href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de instalar canalização nova em Trás-os-Montes. Podem dar-me um orçamento?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                💬 WhatsApp para Orçamento
              </a>
            </div>
          </div>
        </section>

        {/* Service details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left column: Service description */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Instalação de Sanitários e Canalização Nova
                </h2>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p>
                    Especializados em <strong>instalação de canalização nova</strong> e <strong>instalação de sanitários</strong> em toda a região de Trás-os-Montes. 
                    Trabalhamos com materiais de qualidade e seguimos as normas mais recentes de segurança e eficiência.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Processo de Trabalho</h3>
                  <ol className="space-y-4 list-decimal pl-5">
                    <li><strong>Projeto:</strong> Planeamento detalhado da instalação conforme necessidades</li>
                    <li><strong>Preparação:</strong> Demolição controlada e preparação do espaço</li>
                    <li><strong>Instalação:</strong> Colocação de tubos, conexões e acessórios</li>
                    <li><strong>Montagem:</strong> Instalação de sanitários, torneiras e acessórios</li>
                    <li><strong>Testes:</strong> Verificação de estanquidade e funcionamento</li>
                    <li><strong>Acabamentos:</strong> Revestimentos e limpeza final</li>
                  </ol>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Materiais Utilizados</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-blue-500 text-xl">🛠️</span>
                      <span><strong>Tubos PPR:</strong> Polipropileno random para água quente e fria</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-500 text-xl">🔩</span>
                      <span><strong>Tubos PVC:</strong> Para sistemas de drenagem e esgotos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-500 text-xl">🚰</span>
                      <span><strong>Sanitários de qualidade:</strong> WC, lavatórios, bidés, banheiras</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-500 text-xl">💧</span>
                      <span><strong>Torneiras e misturadores:</strong> Marcas reconhecidas com garantia</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-500 text-xl">🔧</span>
                      <span><strong>Sistemas de fixação:</strong> Suportes e ancoragens profissionais</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vantagens da Canalização Nova</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      <span><strong>Maior eficiência:</strong> Menor consumo de água e energia</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      <span><strong>Prevenção de fugas:</strong> Materiais modernos evitam problemas futuros</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      <span><strong>Valorização do imóvel:</strong> Instalações modernas aumentam o valor</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      <span><strong>Conformidade legal:</strong> Cumprimento das normas atuais</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      <span><strong>Garantia prolongada:</strong> Materiais com garantia de fábrica</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Right column: Pricing and coverage */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Preços Indicativos</h3>
                
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Casa de Banho Completa</h4>
                      <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">€800 - €2.500</span>
                    </div>
                    <p className="text-gray-600">Inclui WC, lavatório, chuveiro/banheira, canalização</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Cozinha Nova</h4>
                      <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">€600 - €1.800</span>
                    </div>
                    <p className="text-gray-600">Lava-loiça, máquina de lavar, esgoto, água quente/fria</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Substituição de Canalização Antiga</h4>
                      <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">€400 - €1.200</span>
                    </div>
                    <p className="text-gray-600">Troca de tubos antigos por novos (por divisão)</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Instalação de Sanitários Individuais</h4>
                      <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">€150 - €400</span>
                    </div>
                    <p className="text-gray-600">WC, lavatório ou bidé (inclui mão de obra)</p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    💡 <strong>Nota:</strong> Os preços variam conforme dimensões, materiais escolhidos e complexidade da instalação. 
                    Orçamento personalizado gratuito.
                  </p>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Zonas de Atuação</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Macedo de Cavaleiros", "Bragança", "Mirandela", "Chaves",
                    "Valpaços", "Vinhais", "Miranda do Douro", "Mogadouro",
                    "Torre de Moncorvo", "Freixo de Espada à Cinta"
                  ].map((city, idx) => (
                    <div key={idx} className="bg-gray-100 px-4 py-2 rounded-lg text-center">
                      {city}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section with Schema.org */}
        <section className="py-16 bg-gray-50">
          <FAQSection
            title="Perguntas Frequentes sobre Instalação de Canalização"
            faqs={[
              {
                question: "Quanto tempo demora instalar uma casa de banho completa?",
                answer: "Depende da complexidade, mas geralmente demora entre 3 a 7 dias úteis. Inclui preparação, instalação, testes e acabamentos."
              },
              {
                question: "Preciso de licença para instalar canalização nova?",
                answer: "Para obras maiores, sim. Nós tratamos de toda a burocracia, incluindo projetos e licenciamentos necessários junto da câmara municipal."
              },
              {
                question: "Oferecem garantia na instalação de canalização nova?",
                answer: "Sim, oferecemos garantia de 3 anos na mão de obra e 1 ano nos materiais fornecidos por nós. Para materiais com garantia de fábrica superior, aplicamos essa garantia."
              }
            ]}
          />
        </section>

        {/* Internal links to city pages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Instalação de Canalização em Toda a Região
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <a href="/canalizador-macedo-de-cavaleiros" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-blue-600 font-bold">Macedo de Cavaleiros</div>
                <div className="text-sm text-gray-600">Sanitários novos</div>
              </a>
              <a href="/canalizador-braganca" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-blue-600 font-bold">Bragança</div>
                <div className="text-sm text-gray-600">Cozinhas completas</div>
              </a>
              <a href="/canalizador-mirandela" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-blue-600 font-bold">Mirandela</div>
                <div className="text-sm text-gray-600">Casas de banho</div>
              </a>
              <a href="/canalizador-chaves" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-blue-600 font-bold">Chaves</div>
                <div className="text-sm text-gray-600">Projeto personalizado</div>
              </a>
              <a href="/canalizador-valpacos" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-blue-600 font-bold">Valpaços</div>
                <div className="text-sm text-gray-600">Materiais qualidade</div>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Precisa de Instalar Canalização Nova em Trás-os-Montes?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto