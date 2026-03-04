// Page SEO optimisée para "Canalizador Mirandela"
// 100% unique content, conforme políticas Google

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import { useSite } from '@/contexts/SiteContext';
import { useEffect } from 'react';
import FAQSection from '@/components/FAQSection';
import { businessInfo, getCityAddress } from '@/shared/napConfig';

export default function Mirandela() {
  const { config } = useSite();

  useEffect(() => {
    document.title = "Canalizador Urgente Mirandela 💧 24h | 928 484 451";
    
    // Optimized meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Entupimento urgente em Mirandela? Resolvemos hoje. Desentupimentos, fugas de água, orçamento sem compromisso. Ligue: 928 484 451');
    // SEO meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'canalizador urgente mirandela, canalizador 24 horas mirandela, canalizador mirandela, canalizador profissional mirandela, desentupimento mirandela, fuga água mirandela, reparação canalização mirandela, instalação sanitários mirandela, canalizador trás-os-montes');
    
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-mirandela');
    
    // Schema.org LocalBusiness para Mirandela
    const cityAddress = getCityAddress('mirandela');
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://canalizador-norte-reparos.pt/#organization",
      "name": "Canalizador Profissional — Canalizador em Mirandela",
      "image": "/images/hero/hero-plumber-portugal.png",
      "description": "Canalizador profissional em Mirandela, Trás-os-Montes. Desentupimentos, reparação de fugas e instalação sanitária.",
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
        "latitude": "41.4879",
        "longitude": "-7.1790"
      },
      "telephone": businessInfo.phone,
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
        `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent("Olá, preciso de um canalizador em Trás-os-Montes. Podem dar-me um orçamento?")}`
      ]
    });
    document.head.appendChild(schemaScript);
  const faqs = [
    {
      question: "Qual o custo de deslocação a Mirandela?",
      answer: "A deslocação a Mirandela é de 20€. Chegamos em aproximadamente 30-35 minutos. Inclui todo o concelho."
    },
    {
      question: "Fazem urgências 24 horas em Mirandela?",
      answer: "Sim, atendemos urgências de canalização 24 horas por dia, 7 dias por semana em Mirandela. Ligue +351 928 484 451 para assistência imediata."
    },
    {
      question: "Fornecem serviço de canalização em Mirandela?",
      answer: "Sim, emitimos serviço de canalização certificado para venda, arrendamento e legalização de imóveis em Mirandela e todo o concelho."
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
        {/* Hero section específica de Mirandela */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <nav className="mb-6 text-blue-200">
                <a href="/" className="hover:text-white">Canalizador Profissional</a> &gt; 
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
                  href={`tel:+351${config.phone.replace(/\s/g, "")}`}
                  className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  📞 Canalizador Mirandela: {config.phone}
                </a>
                <a
                  href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Mirandela`}
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

        {/* Sobre Mirandela - Conteúdo Único */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Sobre Mirandela - Terra dos Alheiras
            </h2>
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-gray-700 mb-4">
                Mirandela, conhecida como a "Terra dos Alheiras", é uma cidade histórica situada nas margens do Rio Tua,
                no coração de Trás-os-Montes. Com uma população de cerca de 23.000 habitantes, esta cidade combina
                tradição gastronómica com desenvolvimento industrial, sendo um importante centro de produção alimentar
                na região. A famosa Ponte Romana sobre o Rio Tua é um dos ex-libris da cidade.
              </p>
              <p className="text-gray-700 mb-4">
                A economia local é fortemente marcada pela indústria de enchidos e produtos alimentares, com destaque
                para a produção de alheiras, chouriças e presuntos. Esta especialização industrial cria necessidades
                específicas em termos de sistemas de canalização, especialmente no tratamento de águas residuais
                oleosas e na manutenção de sistemas de refrigeração industrial.
              </p>
              <p className="text-gray-700">
                O clima transmontano, com invernos rigorosos e verões quentes, exige sistemas de aquecimento robustos
                e canalizações preparadas para variações térmicas extremas. As propriedades junto ao Rio Tua requerem
                atenção especial à humidade e prevenção de infiltrações.
              </p>
            </div>
          </div>
        </section>

        {/* Bairros Servidos em Mirandela */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Bairros e Zonas Servidas em Mirandela
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Centro Histórico</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Praça da República</li>
                  <li>• Rua da República</li>
                  <li>• Avenida Nossa Senhora do Amparo</li>
                  <li>• Zona da Ponte Romana</li>
                  <li>• Rua 25 de Abril</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Zonas Residenciais</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bairro da Estação</li>
                  <li>• Urbanização do Pinheiro</li>
                  <li>• Bairro do Calvário</li>
                  <li>• Santa Cruz</li>
                  <li>• Bairro de São Francisco</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Zonas Industriais</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Zona Industrial de Mirandela</li>
                  <li>• Parque Empresarial</li>
                  <li>• Fábricas de Enchidos</li>
                  <li>• Lagares de Azeite</li>
                  <li>• Armazéns Frigoríficos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Porquê Escolher-nos em Mirandela */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Porquê Escolher-nos em Mirandela
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600">🏭</span>
                  Experiência em Indústria Alimentar
                </h3>
                <p className="text-gray-600">
                  Trabalhamos com as principais fábricas de enchidos e lagares de azeite de Mirandela.
                  Conhecemos os requisitos específicos de higiene industrial, sistemas de tratamento de
                  águas residuais oleosas e instalações de refrigeração. Utilizamos materiais certificados
                  para contacto alimentar e cumprimos todas as normas HACCP.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600">🌊</span>
                  Especialistas em Zonas Ribeirinhas
                </h3>
                <p className="text-gray-600">
                  As propriedades junto ao Rio Tua requerem soluções especiais contra humidade e infiltrações.
                  Instalamos sistemas de drenagem eficientes, impermeabilizações e bombas de águas pluviais
                  adaptadas ao nível freático elevado da zona ribeirinha. Prevenimos problemas de retorno
                  de esgotos em cheias.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600">❄️</span>
                  Preparados para Invernos Rigorosos
                </h3>
                <p className="text-gray-600">
                  Mirandela regista temperaturas negativas frequentes no inverno. Instalamos isolamentos
                  térmicos em tubagens exteriores, sistemas anticongelamento em contadores e proteções
                  especiais para esquentadores e caldeiras. Evitamos ruturas por gelo que são comuns
                  na região durante janeiro e fevereiro.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600">🏰</span>
                  Respeito pelo Património
                </h3>
                <p className="text-gray-600">
                  No centro histórico de Mirandela, trabalhamos com técnicas não invasivas que preservam
                  a arquitetura tradicional. Utilizamos equipamento de deteção de fugas sem quebras,
                  restauramos canalizações em granito e respeitamos as fachadas dos edifícios antigos
                  próximos à Ponte Romana e Praça da República.
                </p>
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

        {/* Testemunhos Locais de Mirandela */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              O Que Dizem os Nossos Clientes em Mirandela
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Tivemos uma fuga grave no nosso lagar de azeite na zona industrial. Vieram em menos
                  de 40 minutos e resolveram tudo sem parar a produção. Conhecem bem os sistemas para
                  indústria alimentar."
                </p>
                <p className="text-gray-900 font-bold">João M.</p>
                <p className="text-gray-600 text-sm">Zona Industrial de Mirandela</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Apartamento na Avenida Nossa Senhora do Amparo com canalização antiga. Fizeram
                  a substituição toda sem estragar as paredes. Trabalho impecável e preço justo."
                </p>
                <p className="text-gray-900 font-bold">Maria S.</p>
                <p className="text-gray-600 text-sm">Av. Nossa Senhora do Amparo</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Entupimento grave no restaurante junto à Ponte Romana. Atenderam a urgência
                  ao sábado à noite e resolveram antes da hora de jantar. Salvaram o nosso fim de semana!"
                </p>
                <p className="text-gray-900 font-bold">Carlos R.</p>
                <p className="text-gray-600 text-sm">Centro Histórico, junto à Ponte Romana</p>
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
                href={`tel:+351${config.phone.replace(/\s/g, "")}`}
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 {config.phone} (Mirandela)
              </a>
              <a
                href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Mirandela`}
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
                <a href="https://eletricista-norte-reparos.pt/eletricista-mirandela" className="underline font-bold">
                  eletricista-norte-reparos.pt
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Related Cities - Maillage interno SEO */}
        
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Mirandela</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <RelatedCities 
          currentCity="Mirandela" 
          currentCitySlug="canalizador-mirandela" 
        />
      </main>
      
      <Footer />
</>
  );
}