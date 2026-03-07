// Page SEO optimisée para "Canalizador Valpaços"
// 100% unique content, conforme políticas Google

import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import { useSite } from '@/contexts/SiteContext';
import { useEffect } from 'react';
import FAQSection from '@/components/FAQSection';
import { businessInfo, getCityAddress } from '@/shared/napConfig';
import { getCidadesProximas } from '@/data/cidadesProximas';

export default function Valpacos() {
  const { config } = useSite();

  useEffect(() => {
    document.title = "Canalizador Urgente Valpaços 💧 24h | 928 484 451";
    
    // Optimized meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Esquentador avariado em Valpaços? A nossa equipa repara hoje. Desentupimentos e fugas, orçamento gratuito. Ligue: 928 484 451');
    // SEO meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'canalizador urgente valpaços, canalizador 24 horas valpaços, canalizador valpaços, canalizador profissional valpaços, desentupimento valpaços, fuga água valpaços, reparação canalização valpaços, instalação sanitários valpaços, canalizador trás-os-montes');
    
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-valpacos');
    
    // Schema.org LocalBusiness para Valpaços
    const cityAddress = getCityAddress('valpacos');
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://canalizador-norte-reparos.pt/#organization",
      "name": "Canalizador Profissional — Canalizador em Valpaços",
      "image": "/images/hero/hero-plumber-portugal.png",
      "description": "Canalizador profissional em Valpaços, Trás-os-Montes. Desentupimentos, reparação de fugas e instalação sanitária.",
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
        "latitude": "41.6075",
        "longitude": "-7.3108"
      },
      "telephone": businessInfo.phone,
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€",
      "areaServed": {
        "@type": "City",
        "name": "Valpaços"
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "41.6075",
          "longitude": "-7.3108"
        },
        "geoRadius": "20000"
      },
      "sameAs": [
        `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent("Olá, preciso de um canalizador em Trás-os-Montes. Podem dar-me um orçamento?")}`
      ]
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
  const faqs = [
    {
      question: "Qual o custo de deslocação a Valpaços?",
      answer: "A deslocação é de 45€ (Zona 4). Chegamos em aproximadamente 50-60 minutos. Inclui todo o concelho."
    },
    {
      question: "Fazem urgências 24 horas em Valpaços?",
      answer: "Sim, atendemos urgências de canalização 24 horas por dia, 7 dias por semana em Valpaços. Ligue +351 928 484 451 para assistência imediata."
    },
    {
      question: "Fornecem serviço de canalização em Valpaços?",
      answer: "Sim, emitimos serviço de canalização certificado para venda, arrendamento e legalização de imóveis em Valpaços e todo o concelho."
    }
  ];

    
    return () => {
      document.head.removeChild(schemaScript);
      document.head.removeChild(faqSchema);
    };
  }, [config]);

  const cidadesProximas = getCidadesProximas('valpacos');

  return (
    <>
      <SEOHead />
      <StructuredData />
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        {/* Hero section específica de Valpaços */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
                            <Breadcrumbs items={[
                { label: 'Canalizador', href: '/' },
                { label: 'Trás-os-Montes', href: '/tras-os-montes' },
                { label: 'Valpacos', href: '/canalizador-valpacos' }
              ]} />
<h1 className="text-4xl md:text-5xl font-bold mb-6">
                Canalizador Profissional em <span className="text-orange-400">Valpaços</span>
              </h1>
              
              <p className="text-xl mb-8">
                Serviços de canalizador certificado em Valpaços e arredores. 
                Especialistas em águas termais e sistemas de aquecimento para a região.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:+351${config.phone.replace(/\s/g, "")}`}
                  className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  📞 Canalizador Valpaços: {config.phone}
                </a>
                <a
                  href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Valpaços`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  💬 WhatsApp para Valpaços
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo específico de Valpaços */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Especialistas em Sistemas de Água para Viticultura em Valpaços
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-blue-600">🍇</span>
                      Conhecimento em Sistemas para Vinhas
                    </h3>
                    <p className="text-gray-600">
                      Valpaços é famosa pela sua produção de vinho e azeite. Especializamo-nos em:
                      sistemas de canalização para adegas e lagares,
                      tratamento de água para rega de vinhas, e instalações resistentes
                      aos produtos utilizados na viticultura.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-blue-600">🏘️</span>
                      Experiência em Propriedades Vinícolas
                    </h3>
                    <p className="text-gray-600">
                      Trabalhamos em adegas e propriedades vinícolas de Valpaços, incluindo
                      quintas históricas e modernas. Conhecemos as particularidades das canalizações
                      para processamento de vinho e utilizamos técnicas especializadas
                      para preservar a qualidade dos produtos.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Cobertura em <span className="text-blue-600">Valpaços</span>
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      'Centro Histórico', 'Santa Maria Maior', 'Madalena', 'Santa Cruz',
                      'Bairro da Estação', 'Bairro do Calvário', 'Urbanização do Pinheiro',
                      'Zona Industrial', 'Vila Verde', 'Tronco', 'Carrazedo de Montenegro', 'Jou'
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">📍</span>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      ⏱️ Serviços Específicos para Valpaços
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center justify-between">
                        <span>Sistemas para adegas e lagares</span>
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

        {/* FAQ específica de Valpaços */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Perguntas sobre <span className="text-blue-600">Canalizador em Valpaços</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Como lidam com os sistemas de água para vinhas em Valpaços?
                </h3>
                <p className="text-gray-600">
                  Utilizamos materiais específicos resistentes aos produtos fitossanitários,
                  como tubos de polietileno e componentes em aço inoxidável. Realizamos
                  tratamentos anti-corrosão específicos para as características únicas
                  da água de rega na região vinícola de Valpaços.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Trabalham em adegas e lagares em Valpaços?
                </h3>
                <p className="text-gray-600">
                  Sim, temos experiência em adegas, lagares e propriedades com produção de vinho e azeite.
                  Especializamo-nos em sistemas de filtragem, bombeamento e tratamento
                  de água para processamento agrícola, garantindo a qualidade e segurança dos sistemas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Qual a resposta para urgências nas zonas rurais de Valpaços?
                </h3>
                <p className="text-gray-600">
                  Atendemos todo o concelho, incluindo freguesias rurais como
                  Carrazedo de Montenegro, Jou, Possacos e outras. Temos veículos
                  equipados para acessar propriedades rurais e mantemos stock
                  de materiais para intervenções rápidas em qualquer local.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Canalizador em <span className="text-orange-300">Valpaços</span> - Conhecimento Local
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Conhecemos as particularidades da água e canalização de Valpaços.
              Desde o centro histórico até às adegas e propriedades vinícolas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href={`tel:+351${config.phone.replace(/\s/g, "")}`}
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 {config.phone} (Valpaços)
              </a>
              <a
                href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Valpaços`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                💬 WhatsApp para Valpaços
              </a>
            </div>
            
            <p className="text-orange-200">
              🍇 <strong>Especialistas em viticultura</strong> • 🏰 <strong>Património histórico</strong> • 🚜 <strong>Zonas rurais</strong>
            </p>
            
            {/* Cross-link subtil */}
            <div className="mt-12 p-4 bg-white/20 rounded-xl max-w-md mx-auto">
              <p className="text-lg">
                ⚡ <strong>Precisa de um eletricista em Valpaços?</strong> Recomendamos:{' '}
                <a href="https://eletricista-norte-reparos.pt/eletricista-valpacos" className="underline font-bold">
                  eletricista-norte-reparos.pt
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Related Cities - Maillage interno SEO */}
        
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Valpaços</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>
        {/* Cidades Próximas - Internal Linking */}
        <CidadesProximas
          currentCity="Valpacos"
          cidades={cidadesProximas}
          serviceType="canalizador"
        />

        

        <RelatedCities 
          currentCity="Valpacos" 
          currentCitySlug="canalizador-valpacos" 
        />
      </main>
      
      <Footer />
</>
  );
}