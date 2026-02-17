// Page SEO optimisée para "Canalizador Macedo de Cavaleiros"
// Conteúdo 100% único, conforme políticas Google

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import { useSite } from '@/contexts/SiteContext';
import { useEffect } from 'react';

export default function MacedoCavaleiros() {
  const { config } = useSite();

  useEffect(() => {
    document.title = "Canalizador em MacedoCavaleiros - Norte Reparos - +351 928 484 451";
    
    // Meta description otimizada
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador profissional em Macedo de Cavaleiros, Trás-os-Montes. Serviços de desentupimento, reparação de fugas, instalação sanitários e aquecimento central. Urgências 24h, orçamento gratuito.');
    // Meta keywords SEO
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'canalizador urgente macedo de cavaleiros, canalizador 24 horas macedo de cavaleiros, canalizador macedo de cavaleiros, canalizador profissional macedo de cavaleiros, desentupimento macedo de cavaleiros, fuga água macedo de cavaleiros, reparação canalização macedo de cavaleiros, instalação sanitários macedo de cavaleiros, canalizador trás-os-montes');
    
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://norte-reparos.com/canalizador-macedo-de-cavaleiros');
    
    // Schema.org LocalBusiness para Macedo de Cavaleiros
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://norte-reparos.com/#organization",
      "name": "Norte Reparos — Canalizador em Macedo de Cavaleiros",
      "image": "/images/hero/hero-plumber-portugal.png",
      "description": "Canalizador profissional em Macedo de Cavaleiros, Trás-os-Montes. Desentupimentos, reparação de fugas e instalação sanitária.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Macedo de Cavaleiros",
        "addressRegion": "Trás-os-Montes",
        "addressCountry": "PT",
        "postalCode": "5340"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.5386",
        "longitude": "-6.9611"
      },
      "telephone": config.phone,
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€",
      "areaServed": {
        "@type": "City",
        "name": "Macedo de Cavaleiros"
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "41.5386",
          "longitude": "-6.9611"
        },
        "geoRadius": "20000"
      },
      "sameAs": [
        `https://wa.me/${config.whatsapp}?text=${encodeURIComponent("Olá, preciso de um canalizador em Trás-os-Montes. Podem dar-me um orçamento?")}`
      ]
    });
    document.head.appendChild(schemaScript);
    
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
        {/* Hero section específica de Macedo de Cavaleiros */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <nav className="mb-6 text-blue-200">
                <a href="/" className="hover:text-white">Norte Reparos</a> &gt; 
                <a href="/servicos" className="hover:text-white mx-2">Serviços</a> &gt; 
                <span className="ml-2">Macedo de Cavaleiros</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Canalizador Profissional em <span className="text-orange-400">Macedo de Cavaleiros</span>
              </h1>
              
              <p className="text-xl mb-8">
                Serviços de canalizador certificado em Macedo de Cavaleiros e arredores. 
                Especialistas em águas termais e sistemas de aquecimento para a região.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${config.phone}`}
                  className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  📞 Canalizador Macedo de Cavaleiros: {config.phone}
                </a>
                <a
                  href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Macedo de Cavaleiros`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  💬 WhatsApp para Macedo de Cavaleiros
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo específico de Macedo de Cavaleiros */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Especialistas em Sistemas de Água para Agricultura em Macedo de Cavaleiros
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-blue-600">🚜</span>
                      Conhecimento em Sistemas de Irrigação
                    </h3>
                    <p className="text-gray-600">
                      Macedo de Cavaleiros é famosa pela sua agricultura e pecuária. Especializamo-nos em:
                      sistemas de canalização para propriedades agrícolas, irrigação de culturas,
                      tratamento de água para gado, e instalações resistentes
                      às exigências do ambiente rural.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-blue-600">🏘️</span>
                      Experiência em Propriedades Rurais
                    </h3>
                    <p className="text-gray-600">
                      Trabalhamos em propriedades rurais de Macedo de Cavaleiros, incluindo quintas,
                      herdades e explorações agrícolas. Conhecemos as particularidades das canalizações
                      em zonas rurais e utilizamos técnicas adaptadas para preservar
                      a funcionalidade dos sistemas de água em ambientes agrícolas.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Cobertura em <span className="text-blue-600">Macedo de Cavaleiros</span>
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      'Centro Histórico', 'Santa Maria Maior', 'Madalena', 'Santa Cruz',
                      'Bairro da Estação', 'Bairro do Calvário', 'Urbanização do Pinheiro',
                      'Zona Industrial', 'Vila Verde', 'Tronco', 'Ala', 'Vilarinho'
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">📍</span>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      ⏱️ Serviços Específicos para Macedo de Cavaleiros
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center justify-between">
                        <span>Sistemas de irrigação agrícola</span>
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

        {/* FAQ específica de Macedo de Cavaleiros */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Perguntas sobre <span className="text-blue-600">Canalizador em Macedo de Cavaleiros</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Como lidam com os sistemas de irrigação para agricultura em Macedo de Cavaleiros?
                </h3>
                <p className="text-gray-600">
                  Utilizamos materiais específicos resistentes aos fertilizantes e produtos agrícolas,
                  como tubos de polietileno de alta densidade e componentes em PVC. Realizamos
                  tratamentos anti-entupimento específicos para as características únicas
                  da água de irrigação na região de Macedo de Cavaleiros.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Trabalham em propriedades com sistemas de água para gado em Macedo de Cavaleiros?
                </h3>
                <p className="text-gray-600">
                  Sim, temos experiência em quintas, herdades e propriedades com sistemas de água para gado.
                  Especializamo-nos em sistemas de filtragem, bombeamento e tratamento
                  de água para consumo animal, garantindo a qualidade e segurança dos sistemas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Qual a resposta para urgências nas zonas rurais de Macedo de Cavaleiros?
                </h3>
                <p className="text-gray-600">
                  Atendemos todo o concelho, incluindo freguesias rurais como
                  Ala, Vilarinho, Podence e outras. Temos veículos
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
              Canalizador em <span className="text-orange-300">Macedo de Cavaleiros</span> - Conhecimento Local
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Conhecemos as particularidades da água e canalização de Macedo de Cavaleiros.
              Desde o centro histórico até às propriedades agrícolas e zonas rurais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href={`tel:${config.phone}`}
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 {config.phone} (Macedo de Cavaleiros)
              </a>
              <a
                href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Macedo de Cavaleiros`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                💬 WhatsApp para Macedo de Cavaleiros
              </a>
            </div>
            
            <p className="text-orange-200">
              🚜 <strong>Especialistas em sistemas agrícolas</strong> • 🏰 <strong>Património histórico</strong> • 🐄 <strong>Zonas rurais</strong>
            </p>
            
            {/* Cross-link subtil */}
            <div className="mt-12 p-4 bg-white/20 rounded-xl max-w-md mx-auto">
              <p className="text-lg">
                ⚡ <strong>Precisa de um eletricista em Macedo de Cavaleiros?</strong> Recomendamos:{' '}
                <a href="https://staff-seekers.com/eletricista-macedo-de-cavaleiros" className="underline font-bold">
                  staff-seekers.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingButtons />
    </>
  );
}