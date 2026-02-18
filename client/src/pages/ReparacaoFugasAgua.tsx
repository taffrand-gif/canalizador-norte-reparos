// Page Service Dédié: Reparação de Fugas de Água em Trás-os-Montes
// Optimizada para SEO com keywords: reparação fugas água, deteção fugas

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import StructuredData from '@/components/StructuredData';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useEffect } from 'react';

export default function ReparacaoFugasAgua() {
  const { config } = useSite();

  useEffect(() => {
    document.title = "Reparação de Fugas de Água em Trás-os-Montes | Deteção e Reparação Sem Quebra";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Serviço de reparação de fugas de água em Trás-os-Montes: deteção sem quebra, reparação urgente, equipamento especializado. Evite danos na propriedade, orçamento gratuito.');
  }, [config]);

  // Schema.org Service JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Reparação de Fugas de Água em Trás-os-Montes",
    "description": "Serviço profissional de deteção e reparação de fugas de água em canalizações, torneiras e sistemas hidráulicos em Trás-os-Montes.",
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
      "name": "Serviços de Reparação de Fugas",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deteção de Fugas sem Quebra"
          },
          "price": "80",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reparação de Fugas em Canalizações"
          },
          "price": "100",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Substituição de Torneiras e Válvulas"
          },
          "price": "60",
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
              Reparação de <span className="text-orange-400">Fugas de Água</span> em Trás-os-Montes
            </h1>
            <p className="text-xl mb-8 max-w-3xl">
              Deteção e reparação de fugas de água em canalizações, torneiras, autoclismos e sistemas hidráulicos. 
              Tecnologia de deteção sem quebra para minimizar danos na propriedade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 Urgência: {ACTIVE_CONFIG.phone}
              </a>
              <a
                href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("URGENTE: Tenho uma fuga de água em Trás-os-Montes. Podem ajudar?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                💬 WhatsApp Urgente
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
                  Deteção e Reparação de Fugas de Água
                </h2>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p>
                    Especializados em <strong>reparação de fugas de água</strong> e <strong>deteção de fugas</strong> em toda a região de Trás-os-Montes. 
                    Utilizamos tecnologia avançada para localizar fugas sem necessidade de quebrar paredes ou pisos.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Processo de Trabalho</h3>
                  <ol className="space-y-4 list-decimal pl-5">
                    <li><strong>Diagnóstico:</strong> Análise inicial dos sintomas e localização aproximada</li>
                    <li><strong>Deteção:</strong> Utilização de equipamento especializado (ultrassons, câmaras térmicas)</li>
                    <li><strong>Localização precisa:</strong> Identificação exata do ponto da fuga</li>
                    <li><strong>Reparação:</strong> Intervenção mínima para resolver o problema</li>
                    <li><strong>Teste:</strong> Verificação da estanquidade após reparação</li>
                    <li><strong>Prevenção:</strong> Recomendações para evitar futuras fugas</li>
                  </ol>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Equipamento Utilizado</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-blue-500 text-xl">🎯</span>
                      <span><strong>Deteção por ultrassons:</strong> Localiza fugas através do som da água</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-500 text-xl">🌡️</span>
                      <span><strong>Câmaras térmicas FLIR:</strong> Deteta diferenças de temperatura causadas por fugas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-500 text-xl">🎈</span>
                      <span><strong>Gás traçador:</strong> Gás inerte que revela o ponto exato da fuga</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-500 text-xl">📊</span>
                      <span><strong>Medidores de vazão:</strong> Avalia a quantidade de água perdida</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sinais de Fugas de Água</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <span className="text-red-500">⚠️</span>
                      <span>Conta de água mais alta sem razão aparente</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500">⚠️</span>
                      <span>Manchas de humidade nas paredes ou tetos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500">⚠️</span>
                      <span>Mofo ou bolor persistente</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500">⚠️</span>
                      <span>Som de água a correr quando todas as torneiras estão fechadas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500">⚠️</span>
                      <span>Pressão baixa na água</span>
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
                      <h4 className="text-lg font-semibold text-gray-900">Deteção de Fugas sem Quebra</h4>
                      <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">€80 - €150</span>
                    </div>
                    <p className="text-gray-600">Inclui diagnóstico com equipamento especializado</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Reparação de Fugas em Canalizações</h4>
                      <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">€100 - €300</span>
                    </div>
                    <p className="text-gray-600">Depende da complexidade e localização</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Substituição de Torneiras</h4>
                      <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">€60 - €120</span>
                    </div>
                    <p className="text-gray-600">Inclui mão de obra e material básico</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Reparação de Autoclismos</h4>
                      <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">€40 - €80</span>
                    </div>
                    <p className="text-gray-600">Substituição de válvulas e mecanismos</p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    💡 <strong>Vantagem:</strong> Em 80% dos casos conseguimos reparar fugas sem necessidade de obras. 
                    Economize em reparações estruturais.
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
            title="Perguntas Frequentes sobre Fugas de Água"
            faqs={[
              {
                question: "Como detetam fugas de água sem quebrar paredes?",
                answer: "Utilizamos equipamento de deteção por ultrassons, câmaras térmicas e gases traçadores. Estas tecnologias permitem localizar fugas com precisão sem necessidade de obras."
              },
              {
                question: "Quanto tempo demora a deteção de uma fuga?",
                answer: "A deteção demora geralmente 1-2 horas. A reparação depende da complexidade, mas muitas fugas simples são resolvidas no mesmo dia."
              },
              {
                question: "Oferecem garantia nas reparações de fugas?",
                answer: "Sim, oferecemos garantia de 2 anos em todas as reparações de fugas de água. Se o problema voltar dentro deste período, voltamos sem custos adicionais."
              }
            ]}
          />
        </section>

        {/* Internal links to city pages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Reparação de Fugas em Toda a Região
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <a href="/canalizador-macedo-de-cavaleiros" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-blue-600 font-bold">Macedo de Cavaleiros</div>
                <div className="text-sm text-gray-600">Deteção sem quebra</div>
              </a>
              <a href="/canalizador-braganca" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-blue-600 font-bold">Bragança</div>
                <div className="text-sm text-gray-600">Equipamento FLIR</div>
              </a>
              <a href="/canalizador-mirandela" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-blue-600 font-bold">Mirandela</div>
                <div className="text-sm text-gray-600">Reparação urgente</div>
              </a>
              <a href="/canalizador-chaves" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-blue-600 font-bold">Chaves</div>
                <div className="text-sm text-gray-600">Fugas em canalizações</div>
              </a>
              <a href="/canalizador-valpacos" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-blue-600 font-bold">Valpaços</div>
                <div className="text-sm text-gray-600">Torneiras e válvulas</div>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Tem uma Fuga de Água em Trás-os-Montes?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto-auto">
              Não ignore os sinais! Uma fuga de água pode causar danos estruturais graves e aumentar significativamente a conta de água. 
              Contacte-nos agora para uma deteção precisa e reparação eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="bg-white text-blue-700 hover:bg-gray