// Page SEO optimisée para "Canalizador Mirandela"
// Conteúdo 100% único, conforme políticas Google

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import { useSite } from '@/contexts/SiteContext';
import { useEffect } from 'react';

export default function Mirandela() {
  const { config } = useSite();

  useEffect(() => {
    document.title = "Canalizador em Mirandela | Desentupimento e Reparação | Norte Reparos";
    
    // Meta description otimizada
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador profissional em Mirandela, Trás-os-Montes. Serviços de desentupimento, reparação de fugas, instalação sanitários e aquecimento central. Urgências 24h, orçamento gratuito.');
    
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://norte-reparos.com/canalizador-mirandela');
    
    // Schema.org LocalBusiness para Mirandela
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://norte-reparos.com/#organization",
      "name": "Norte Reparos — Canalizador em Mirandela",
      "image": "https://norte-reparos.com/images-optimized/hero/hero-plumber-portugal.jpg",
      "description": "Canalizador profissional em Mirandela, Trás-os-Montes. Desentupimentos, reparação de fugas e instalação sanitária.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mirandela",
        "addressRegion": "Trás-os-Montes",
        "addressCountry": "PT",
        "postalCode": "5370"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.4879",
        "longitude": "-7.1790"
      },
      "telephone": config.phone,
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€",
      "areaServed": {
        "@type": "City",
        "name": "Mirandela"
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "41.4879",
          "longitude": "-7.1790"
        },
        "geoRadius": "20000"
      },
      "sameAs": [
        `https://wa.me/${config.whatsappNumber}`
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
        {/* Hero section específica de Mirandela */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <nav className="mb-6 text-blue-200">
                <a href="/" className="hover:text-white">Norte Reparos</a> &gt; 
                <a href="/servicos" className="hover:text-white mx-2">Serviços</a> &gt; 
                <span className="ml-2">Mirandela</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Canalizador Profissional em <span className="text-orange-400">Mirandela</span>
              </h1>
              
              <p className="text-xl mb-8">
                Serviços de canalizador certificado em Mirandela e arredores. 
                Especialistas em sistema de água e sistemas de aquecimento para a região.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${config.phone}`}
                  className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  📞 Canalizador Mirandela: {config.phone}
                </a>
                <a
                  href={`https://wa.me/${config.whatsappNumber}?text=Olá, preciso de um canalizador em Mirandela`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  💬 WhatsApp para Mirandela
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo específico de Mirandela */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Especialistas em Sistemas de Água em Mirandela
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-blue-600">🏭</span>
                      Conhecimento em Indústria Alimentar
                    </h3>
                    <p className="text-gray-600">
                      Mirandela é famosa pela sua produção de azeite e indústria alimentar. Especializamo-nos em:
                      sistemas de canalização para lagares de azeite, fábricas de processamento alimentar,
                      tratamento de águas residuais industriais, e instalações resistentes
                      aos produtos químicos utilizados na região.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-blue-600">🏘️</span>
                      Experiência em Edifícios Antigos
                    </h3>
                    <p className="text-gray-600">
                      Trabalhamos no centro histórico de Mirandela, incluindo a zona da
                      Praça da República, Avenida Nossa Senhora do Amparo e edifícios próximos ao Rio Tua.
                      Conhecemos as particularidades das canalizações antigas em zonas de produção de azeite
                      e utilizamos técnicas não invasivas para preservar o património industrial.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Cobertura em <span className="text-blue-600">Mirandela</span>
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      'Centro Histórico', 'Praça da República', 'Avenida Nossa Senhora do Amparo', 'Bairro da Estação',
                      'Zona Industrial', 'Urbanização do Pinheiro', 'Bairro do Calvário', 'Santa Cruz',
                      'Vila Verde', 'Tronco', 'Aguieiras', 'Avantos'
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">📍</span>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      ⏱️ Serviços Específicos para Mirandela
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center justify-between">
                        <span>Sistemas para lagares de azeite</span>
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

        {/* FAQ específica de Mirandela */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Perguntas sobre <span className="text-blue-600">Canalizador em Mirandela</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Como lidam com os resíduos oleosos das indústrias alimentares de Mirandela?
                </h3>
                <p className="text-gray-600">
                  Utilizamos separadores de gordura específicos para lagares de azeite e fábricas alimentares,
                  com tubos de polipropileno reforçado e componentes em aço inoxidável. Realizamos
                  tratamentos anti-corrosão específicos para os resíduos oleosos característicos
                  da região de Mirandela, famosa pela sua produção de azeite.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Trabalham em lagares de azeite e fábricas alimentares em Mirandela?
                </h3>
                <p className="text-gray-600">
                  Sim, temos experiência em lagares de azeite, fábricas de processamento alimentar
                  e propriedades com sistemas de água industriais. Especializamo-nos em sistemas
                  de filtragem, bombeamento e tratamento de águas residuais oleosas,
                  garantindo a qualidade e segurança dos sistemas de produção.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Qual a resposta para urgências nas zonas rurais de Mirandela?
                </h3>
                <p className="text-gray-600">
                  Atendemos todo o concelho, incluindo freguesias rurais como
                  Aguieiras, Avantos, Carvalhais, Cedães e outras. Temos veículos
                  equipados para acessar propriedades rurais e lagares de azeite,
                  e mantemos stock de materiais para intervenções rápidas em qualquer local.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Canalizador em <span className="text-orange-300">Mirandela</span> - Conhecimento Local
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Conhecemos as particularidades da água e canalização de Mirandela.
              Desde o centro histórico até às indústrias alimentares e propriedades rurais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href={`tel:${config.phone}`}
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 {config.phone} (Mirandela)
              </a>
              <a
                href={`https://wa.me/${config.whatsappNumber}?text=Olá, preciso de um canalizador em Mirandela`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                💬 WhatsApp para Mirandela
              </a>
            </div>
            
            <p className="text-orange-200">
              🏭 <strong>Especialistas em indústria alimentar</strong> • 🏰 <strong>Património histórico</strong> • 🚜 <strong>Zonas rurais</strong>
            </p>
            
            {/* Cross-link subtil */}
            <div className="mt-12 p-4 bg-white/20 rounded-xl max-w-md mx-auto">
              <p className="text-lg">
                ⚡ <strong>Precisa de um eletricista em Mirandela?</strong> Recomendamos:{' '}
                <a href="https://staff-seekers.com/eletricista-mirandela" className="underline font-bold">
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