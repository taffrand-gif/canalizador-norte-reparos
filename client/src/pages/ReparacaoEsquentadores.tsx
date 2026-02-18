// Page Service Dédié: Reparação de Esquentadores e Caldeiras em Trás-os-Montes
// Optimizada para SEO com keywords: reparação esquentador, manutenção caldeira

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import StructuredData from '@/components/StructuredData';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useEffect } from 'react';

export default function ReparacaoEsquentadores() {
  const { config } = useSite();

  useEffect(() => {
    document.title = "Reparação de Esquentadores e Caldeiras em Trás-os-Montes | Manutenção, Reparação, Instalação";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Serviço de reparação de esquentadores e caldeiras em Trás-os-Montes: manutenção preventiva, reparação urgente, instalação nova. Técnicos certificados, peças originais, garantia no serviço.');
  }, [config]);

  // Schema.org Service JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Reparação de Esquentadores e Caldeiras em Trás-os-Montes",
    "description": "Serviço profissional de reparação, manutenção e instalação de esquentadores, caldeiras e sistemas de aquecimento em Trás-os-Montes.",
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
      "name": "Serviços de Reparação de Esquentadores",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reparação de Esquentador a Gás"
          },
          "price": "80",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manutenção Preventiva Anual"
          },
          "price": "60",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Substituição de Caldeira"
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
              Reparação de <span className="text-orange-400">Esquentadores e Caldeiras</span> em Trás-os-Montes
            </h1>
            <p className="text-xl mb-8 max-w-3xl">
              Reparação, manutenção e instalação de esquentadores, caldeiras e sistemas de aquecimento. 
              Técnicos certificados, peças originais e garantia no serviço.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 Urgência: {ACTIVE_CONFIG.phone}
              </a>
              <a
                href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("URGENTE: Esquentador/caldeira avariado em Trás-os-Montes. Podem ajudar?")}`}
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
                  Reparação e Manutenção de Esquentadores
                </h2>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p>
                    Especializados em <strong>reparação de esquentador</strong> e <strong>manutenção de caldeira</strong> em toda a região de Trás-os-Montes. 
                    Trabalhamos com todas as marcas: Junkers, Bosch, Vaillant, Ariston, Ferroli, Beretta, entre outras.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Processo de Trabalho</h3>
                  <ol className="space-y-4 list-decimal pl-5">
                    <li><strong>Diagnóstico:</strong> Análise do problema e identificação da avaria</li>
                    <li><strong>Orçamento:</strong> Proposta detalhada com preços transparentes</li>
                    <li><strong>Reparação:</strong> Substituição de peças defeituosas com originais</li>
                    <li><strong>Testes:</strong> Verificação de segurança e funcionamento</li>
                    <li><strong>Limpeza:</strong> Limpeza do equipamento e área de trabalho</li>
                    <li><strong>Documentação:</strong> Emissão de fatura e garantia</li>
                  </ol>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Problemas Comuns que Resolvemos</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-red-500">🔴</span>
                      <span><strong>Esquentador não acende:</strong> Problemas com ignição, piloto ou válvula de gás</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500">🔴</span>
                      <span><strong>Água não aquece:</strong> Resistência elétrica, trocador de calor ou termóstato</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500">🔴</span>
                      <span><strong>Vazamentos de água:</strong> Junta, válvula de segurança ou tubos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500">🔴</span>
                      <span><strong>Pressão baixa:</strong> Válvula de pressão ou obstruções</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500">🔴</span>
                      <span><strong>Ruídos estranhos:</strong> Calcário, bomba ou ventilador</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500">🔴</span>
                      <span><strong>Cheiro a gás:</strong> Vazamentos na instalação de gás</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Importância da Manutenção Preventiva</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      <span><strong>Segurança:</strong> Previne fugas de gás e monóxido de carbono</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      <span><strong>Economia:</strong> Equipamento eficiente consome menos energia</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      <span><strong>Durabilidade:</strong> Prolonga a vida útil do equipamento</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      <span><strong>Conforto:</strong> Evita falhas no fornecimento de água quente</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      <span><strong>Garantia:</strong> Mantém a validade da garantia do fabricante</span>
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
                      <h4 className="text-lg font-semibold text-gray-900">Reparação de Esquentador a Gás</h4>
                      <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">€80 - €200</span>
                    </div>
                    <p className="text-gray-600">Inclui diagnóstico, mão de obra e peças básicas</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Manutenção Preventiva Anual</h4>
                      <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">€60 - €120</span>
                    </div>
                    <p className="text-gray-600">Limpeza, verificação de segurança, ajustes</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Substituição de Caldeira</h4>
                      <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">€400 - €1.500</span>
                    </div>
                    <p className="text-gray-600">Depende do modelo e complexidade da instalação</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Instalação de Esquentador Novo</h4>
                      <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">€150 - €300</span>
                    </div>
                    <p className="text-gray-600">Mão de obra para instalação (equipamento à parte)</p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    ⚠️ <strong>Importante:</strong> Para questões de segurança com gás, nunca tente reparar sozinho. 
                    Contacte sempre um técnico certificado.
                  </p>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Marcas que Trabalhamos</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "Junkers", "Bosch", "Vaillant", 
                    "Ariston", "Ferroli", "Beretta",
                    "Baxi", "Saunier Duval", "Chaffoteaux"
                  ].map((brand, idx) => (
                    <div key={idx} className="bg-gray-100 px-3 py-2 rounded-lg text-center text-sm">
                      {brand}
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Zonas de Atuação</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Macedo de Cavaleiros", "Bragança", "Mirandela", "Chaves",
                    "Valpaços", "Vinhais", "Miranda do Douro", "Mogadouro"
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
            title="Perguntas Frequentes sobre Esquentadores e Caldeiras"
            faqs={[
              {
                question: "Com que frequência devo fazer manutenção ao esquentador?",
                answer: "Recomendamos manutenção preventiva anual. Para equipamentos com mais de 10 anos ou em zonas com água muito calcária, pode ser necessário a cada 6 meses."
              },
              {
                question: "É mais económico reparar ou substituir o esquentador?",
                answer: "Depende da idade e estado do equipamento. Geralmente, se tem mais de 10-12 anos e a reparação custa mais de 50% do valor de um novo, recomendamos substituição."
              },
              {
                question: "Oferecem garantia nas reparações?",
                answer: "Sim, oferecemos garantia de 1 ano na mão de obra e 6 meses nas peças substituídas. Para peças com garantia de fábrica superior, aplicamos essa garantia."
              }
            ]}
          />
        </section>

        {/* Internal links to city pages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Reparação de Esquentadores em Toda a Região
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <a href="/canalizador-macedo-de-cavaleiros" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-blue-600 font-bold">Macedo de Cavaleiros</div>
                <div className="text-sm text-gray-600">Esquentadores a gás</div>
              </a>
              <a href="/canalizador-braganca" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-blue-600 font-bold">Bragança</div>
                <div className="text-sm text-gray-600">Caldeiras</div>
              </a>
              <a href="/canalizador-mirandela" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-blue-600 font-bold">Mirandela</div>
                <div className="text-sm text-gray-600">Manutenção preventiva</div>
              </a>
              <a href="/canalizador-chaves" className="bg-white hover:bg-blue-50 border border-gray-300 rounded-lg p-4 text-center transition-colors">
                <div className="text-blue-600 font-bold">Chaves</div>
                <div className="text-sm