// Page SEO optimisée para "Canalizador Chaves"
// 100% unique content, conforme políticas Google

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { useEffect } from 'react';
import { businessInfo, getCityAddress } from '@/shared/napConfig';

export default function Chaves() {
  const { config } = useSite();

  useEffect(() => {
    document.title = "Canalizador Urgente Chaves 💧 24h | 928 484 451";
    
    // Optimized meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Cano entupido em Chaves? Intervenção rápida com equipamento Ridgid. Orçamento sem compromisso. Ligue agora: 928 484 451');
    // SEO meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'canalizador urgente chaves, canalizador 24 horas chaves, canalizador chaves, canalizador profissional chaves, desentupimento chaves, fuga água chaves, reparação canalização chaves, instalação sanitários chaves, canalizador trás-os-montes');
    
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-chaves');
    
    // Schema.org LocalBusiness para Chaves
    const cityAddress = getCityAddress('chaves');
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://canalizador-norte-reparos.pt/#organization",
      "name": "Canalizador Profissional — Canalizador em Chaves",
      "image": "/images/hero/hero-plumber-portugal.png",
      "description": "Canalizador profissional em Chaves, Trás-os-Montes. Desentupimentos, reparação de fugas e instalação sanitária.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": cityAddress.streetAddress,
        "addressLocality": cityAddress.addressLocality,
        "addressRegion": cityAddress.addressRegion,
        "addressCountry": cityAddress.addressCountry,
        "postalCode": cityAddress.postalCode
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.7402",
        "longitude": "-7.4687"
      },
      "telephone": businessInfo.phone,
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€",
      "areaServed": {
        "@type": "City",
        "name": "Chaves"
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "41.7402",
          "longitude": "-7.4687"
        },
        "geoRadius": "20000"
      },
      "sameAs": [
        `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent("Olá, preciso de um canalizador em Trás-os-Montes. Podem dar-me um orçamento?")}`
      ]
    });
    document.head.appendChild(schemaScript);
  const faqs = [
    {
      question: "Qual o custo de deslocação a Chaves?",
      answer: "A deslocação a Chaves é de 40€, sob marcação prévia. Estamos a cerca de 100km de Macedo de Cavaleiros. Inclui todo o concelho."
    },
    {
      question: "Fazem urgências 24 horas em Chaves?",
      answer: "Sim, atendemos urgências de canalização 24 horas por dia, 7 dias por semana em Chaves. Ligue +351 928 484 451 para assistência imediata."
    },
    {
      question: "Fornecem serviço de canalização em Chaves?",
      answer: "Sim, emitimos serviço de canalização certificado para venda, arrendamento e legalização de imóveis em Chaves e todo o concelho."
    }
  ];

    
    return () => {
      document.head.removeChild(schemaScript);
    };
  }, [config]);

  return (
    <>
      <SEOHead />
      <StructuredData />
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        {/* Hero section específica de Chaves */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <nav className="mb-6 text-blue-200">
                <a href="/" className="hover:text-white">Canalizador Profissional</a> &gt; 
                <a href="/servicos" className="hover:text-white mx-2">Serviços</a> &gt; 
                <span className="ml-2">Chaves</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Canalizador Profissional em <span className="text-orange-400">Chaves</span>
              </h1>
              
              <p className="text-xl mb-8">
                Serviços de canalizador certificado em Chaves e arredores. 
                Especialistas em águas termais e sistemas de aquecimento para a região.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${config.phone}`}
                  className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  📞 Canalizador Chaves: {config.phone}
                </a>
                <a
                  href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Chaves`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  💬 WhatsApp para Chaves
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Chaves - Conteúdo Único */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Sobre Chaves - Cidade das Águas Termais
            </h2>
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-gray-700 mb-4">
                Chaves, situada no Alto Tâmega, é uma das cidades mais antigas de Portugal, fundada pelos romanos
                como "Aquae Flaviae". Com cerca de 41.000 habitantes, é conhecida mundialmente pelas suas águas
                termais hipersalinas, que brotam a 73°C, sendo das mais quentes da Europa. O Castelo de Chaves
                e a Ponte Romana são testemunhos da rica história milenar da cidade.
              </p>
              <p className="text-gray-700 mb-4">
                A presença de águas termais cria desafios únicos para os sistemas de canalização locais. A elevada
                concentração de minerais (especialmente sódio, cloreto e bicarbonato) exige materiais resistentes
                à corrosão. Muitos hotéis, termas e propriedades particulares utilizam estas águas, necessitando
                de sistemas especializados de filtragem e tratamento.
              </p>
              <p className="text-gray-700">
                O clima de Chaves é um dos mais rigorosos de Portugal, com invernos muito frios (frequentemente
                abaixo de -5°C) e verões quentes. Esta amplitude térmica extrema exige canalizações com isolamento
                reforçado e sistemas anticongelamento. A cidade é também um importante centro agrícola, conhecido
                pelo presunto de Chaves e vinhos da região.
              </p>
            </div>
          </div>
        </section>

        {/* Bairros Servidos em Chaves */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Bairros e Zonas Servidas em Chaves
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Centro Histórico</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Praça de Camões</li>
                  <li>• Rua Direita</li>
                  <li>• Zona do Castelo</li>
                  <li>• Ponte Romana</li>
                  <li>• Jardim Público</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Zonas Residenciais</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Santa Maria Maior</li>
                  <li>• Madalena</li>
                  <li>• Santa Cruz/Trindade</li>
                  <li>• Bairro da Estação</li>
                  <li>• Urbanização do Pinheiro</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Zonas Termais</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Termas de Chaves</li>
                  <li>• Hotéis Termais</li>
                  <li>• Zona de Vidago (próxima)</li>
                  <li>• Pedras Salgadas (próxima)</li>
                  <li>• Zona Industrial</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Porquê Escolher-nos em Chaves */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Porquê Escolher-nos em Chaves
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600">♨️</span>
                  Especialistas em Águas Termais
                </h3>
                <p className="text-gray-600">
                  Somos especialistas em sistemas de canalização para águas termais hipersalinas. Utilizamos
                  tubagens de polipropileno PP-R, aço inoxidável AISI 316L e componentes resistentes à corrosão
                  por minerais. Trabalhamos com hotéis termais, spas e propriedades que utilizam as águas de
                  Chaves, garantindo durabilidade e segurança dos sistemas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600">❄️</span>
                  Proteção Contra Frio Extremo
                </h3>
                <p className="text-gray-600">
                  Chaves regista as temperaturas mais baixas de Portugal continental. Instalamos isolamentos
                  térmicos de alta densidade, cabos de aquecimento elétrico em tubagens exteriores, caixas
                  de contador aquecidas e válvulas anticongelamento. Prevenimos ruturas por gelo que causam
                  prejuízos significativos durante os meses de inverno rigoroso.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600">🏰</span>
                  Preservação do Património Romano
                </h3>
                <p className="text-gray-600">
                  No centro histórico de Chaves, com mais de 2000 anos de história, utilizamos técnicas
                  arqueológicas de intervenção. Trabalhamos próximo à Ponte Romana, Castelo e termas romanas,
                  respeitando as camadas arqueológicas. Utilizamos câmaras de inspeção e deteção eletrónica
                  para evitar escavações desnecessárias em zonas protegidas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600">🏨</span>
                  Experiência em Hotelaria Termal
                </h3>
                <p className="text-gray-600">
                  Trabalhamos com os principais hotéis e unidades termais de Chaves. Conhecemos os requisitos
                  específicos de sistemas de água quente a alta temperatura, circuitos de água termal,
                  piscinas aquecidas e sistemas de climatização. Garantimos conformidade com normas de
                  saúde pública e turismo termal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo específico de Chaves */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Especialistas em Sistemas de Água em Chaves
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-blue-600">♨️</span>
                      Conhecimento em Águas Termais
                    </h3>
                    <p className="text-gray-600">
                      Chaves é famosa pelas suas águas termais. Especializamo-nos em:
                      sistemas de canalização para propriedades com águas termais,
                      tratamento de água mineral natural, e instalações resistentes
                      aos minerais específicos da região.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-blue-600">🏘️</span>
                      Experiência em Edifícios Antigos
                    </h3>
                    <p className="text-gray-600">
                      Trabalhamos no centro histórico de Chaves, incluindo a zona da
                      Praça de Camões, Rua Direita e edifícios próximos ao Castelo.
                      Conhecemos as particularidades das canalizações antigas e
                      utilizamos técnicas não invasivas para preservar o património.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Cobertura em <span className="text-blue-600">Chaves</span>
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      'Centro Histórico', 'Santa Maria Maior', 'Madalena', 'Santa Cruz',
                      'Bairro da Estação', 'Bairro do Calvário', 'Urbanização do Pinheiro',
                      'Zona Industrial', 'Vila Verde da Raia', 'Tronco'
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">📍</span>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      ⏱️ Serviços Específicos para Chaves
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center justify-between">
                        <span>Sistemas para águas termais</span>
                        <span className="font-bold text-blue-600">Especialidade</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Canalização em granito</span>
                        <span className="font-bold text-blue-600">Experiência</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Aquecimento para invernos frios</span>
                        <span className="font-bold text-blue-600">Frequentemente</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testemunhos Locais de Chaves */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              O Que Dizem os Nossos Clientes em Chaves
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Hotel termal na zona das Caldas com problema no sistema de água termal. Vieram
                  preparados com materiais resistentes aos minerais. Resolveram sem interromper
                  o serviço aos hóspedes. Profissionais de excelência!"
                </p>
                <p className="text-gray-900 font-bold">António P.</p>
                <p className="text-gray-600 text-sm">Zona das Termas de Chaves</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Casa antiga na Rua Direita com canalização em granito. Fizeram a reparação
                  respeitando a estrutura histórica. Trabalho cuidadoso e com atenção ao detalhe.
                  Recomendo vivamente!"
                </p>
                <p className="text-gray-900 font-bold">Isabel C.</p>
                <p className="text-gray-600 text-sm">Rua Direita, Centro Histórico</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Rutura de cano por gelo em janeiro na Madalena. Atenderam a urgência mesmo
                  com neve e -7°C. Instalaram proteção anticongelamento. Nunca mais tive problemas!"
                </p>
                <p className="text-gray-900 font-bold">Manuel F.</p>
                <p className="text-gray-600 text-sm">Bairro da Madalena</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ específica de Chaves */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Perguntas sobre <span className="text-blue-600">Canalizador em Chaves</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Como lidam com as águas termais de Chaves nas canalizações?
                </h3>
                <p className="text-gray-600">
                  Utilizamos materiais específicos resistentes aos minerais das águas termais,
                  como tubos de polipropileno e componentes em aço inoxidável. Realizamos
                  tratamentos anti-calcário específicos para as características únicas
                  das águas da região de Chaves.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Trabalham em propriedades com piscinas termais em Chaves?
                </h3>
                <p className="text-gray-600">
                  Sim, temos experiência em hotéis, termas e propriedades com piscinas termais.
                  Especializamo-nos em sistemas de filtragem, bombeamento e tratamento
                  de águas termais, garantindo a qualidade e segurança dos sistemas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Qual a resposta para urgências nas zonas rurais de Chaves?
                </h3>
                <p className="text-gray-600">
                  Atendemos todo o concelho, incluindo freguesias rurais como
                  Vila Verde da Raia, Oura, Madalena e outras. Temos veículos
                  equipados para acessar propriedades rurais e mantemos stock
                  de materiais para intervenções rápidas em qualquer local.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section with Schema.org - Chaves Specific */}
        <section className="py-16 bg-gray-50">
          <FAQSection
            title="Perguntas Frequentes sobre Canalizador em Chaves"
            faqs={[
              {
                question: "Atendem as termas e estabelecimentos de águas de Chaves?",
                answer: "Sim, temos experiência especializada em sistemas de água para termas, hotéis termais e estabelecimentos que utilizam as águas de Chaves. Conhecemos as particularidades mineralógicas da água local."
              },
              {
                question: "Como lidam com as temperaturas frias de Chaves nos sistemas de água?",
                answer: "Instalamos proteções contra gelo, isolamento térmico especializado e sistemas anticongelamento adaptados ao clima rigoroso de Chaves, onde as temperaturas podem descer abaixo de zero."
              },
              {
                question: "Trabalham em edifícios históricos do centro de Chaves?",
                answer: "Sim, temos experiência em trabalhar em edifícios históricos e protegidos do centro de Chaves. Utilizamos técnicas que preservam a integridade dos imóveis históricos e respeitamos as regulamentações específicas."
              },
              {
                question: "Qual o tempo de resposta para urgências em Chaves?",
                answer: "No centro da cidade: 15-30 minutos. Para aldeias circundantes e zonas rurais: 45-60 minutos. Temos equipa disponível 24 horas para toda a região."
              }
            ]}
          />
        </section>

        {/* CTA final */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Canalizador em <span className="text-orange-300">Chaves</span> - Conhecimento Local
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Conhecemos as particularidades da água e canalização de Chaves.
              Desde o centro histórico até às termas e propriedades rurais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href={`tel:${config.phone}`}
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 {config.phone} (Chaves)
              </a>
              <a
                href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Chaves`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                💬 WhatsApp para Chaves
              </a>
            </div>
            
            <p className="text-orange-200">
              ♨️ <strong>Especialistas em águas termais</strong> • 🏰 <strong>Património histórico</strong> • 🚜 <strong>Zonas rurais</strong>
            </p>
            
            {/* Cross-link subtil */}
            <div className="mt-12 p-4 bg-white/20 rounded-xl max-w-md mx-auto">
              <p className="text-lg">
                ⚡ <strong>Precisa de um eletricista em Chaves?</strong> Recomendamos:{' '}
                <a href="https://staff-seekers.com/canalizador-chaves" className="underline font-bold">
                  staff-seekers.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Related Cities - Maillage interno SEO */}
        
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Chaves</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <RelatedCities 
          currentCity="Chaves" 
          currentCitySlug="canalizador-chaves" 
        />
      </main>
      
      <Footer />
</>
  );
}