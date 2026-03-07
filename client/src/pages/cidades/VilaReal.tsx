// SEO optimized page for "Canalizador Vila Real"
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { Phone, Droplets, Shield, CheckCircle, Wrench } from 'lucide-react';
import { businessInfo, getCityAddress } from '@/shared/napConfig';
import { getCidadesProximas } from '@/data/cidadesProximas';

export default function VilaReal() {
  useEffect(() => {
    document.title = "Canalizador Urgente Vila Real 💧 24h | 928 484 451";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Torneira a pingar em Vila Real? A nossa equipa resolve hoje. Desentupimentos, fugas, esquentadores. Orçamento gratuito. Ligue: 928 484 451');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-vila-real');

    const cityAddress = getCityAddress('vila-real');
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-vila-real';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": "Canalizador Profissional Vila Real",
      "description": "Canalizador profissional em Vila Real. Serviço 24h, desentupimentos, fugas de água, canalização urbana.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": cityAddress.streetAddress,
        "addressLocality": cityAddress.addressLocality,
        "addressRegion": cityAddress.addressRegion,
        "addressCountry": cityAddress.addressCountry,
        "postalCode": cityAddress.postalCode
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "41.3000", "longitude": "-7.7500" },
      "telephone": businessInfo.phone,
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€"
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

    return () => {
      const existingSchema = document.getElementById('schema-vila-real');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const cidadesProximas = getCidadesProximas('vila-real');

  const faqs = [
    { question: "Quanto tempo demora a chegar a Vila Real?", answer: "Chegamos a Vila Real em aproximadamente 1h15 a partir de Macedo de Cavaleiros, percorrendo cerca de 85km pela A4 e IP4." },
    { question: "Fazem trabalhos em prédios e apartamentos em Vila Real?", answer: "Sim, temos vasta experiência em canalização de prédios urbanos, incluindo reparação de colunas de água, substituição de tubagens antigas e desentupimentos em edifícios de vários andares." },
    {
      question: "Qual o custo de deslocação a Vila Real?",
      answer: "A deslocação é de 55€ (Zona 5). Chegamos em aproximadamente 60-70 minutos. Inclui todo o concelho."
    }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-plumber-portugal.jpg')` }}>
          <div className="container text-center text-white">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">💧 VILA REAL - CAPITAL DE DISTRITO</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Canalizador em Vila Real</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Serviço de canalização profissional na capital de distrito. Cobrimos toda a zona urbana e freguesias rurais de Vila Real com equipamento especializado para redes modernas e antigas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador%20em%20Vila%20Real" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        {/* Sobre Vila Real - Conteúdo Único */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Sobre Vila Real - Capital de Trás-os-Montes
            </h2>
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-gray-700 mb-4">
                Vila Real, capital do distrito homónimo, é uma cidade moderna de cerca de 51.000 habitantes,
                situada no coração de Trás-os-Montes. Conhecida como a "Corte de Trás-os-Montes", a cidade
                destaca-se pela sua universidade (UTAD), pelo magnífico Palácio de Mateus e pela proximidade
                à região vinícola do Douro. É um importante centro administrativo, comercial e universitário.
              </p>
              <p className="text-gray-700 mb-4">
                A cidade apresenta uma mistura única de arquitetura moderna e tradicional. Os bairros mais
                recentes, com prédios de vários andares, contrastam com o centro histórico de ruas estreitas
                e casas senhoriais. Esta diversidade arquitetónica cria desafios variados em canalização:
                desde sistemas modernos em condomínios até canalizações antigas em granito no centro histórico.
              </p>
              <p className="text-gray-700">
                A presença da UTAD traz uma população estudantil significativa, com necessidades específicas
                em residências universitárias e apartamentos partilhados. O clima transmontano, com invernos
                frios e verões quentes, exige sistemas de aquecimento central eficientes. A proximidade ao
                Douro influencia a humidade em certas zonas, requerendo atenção especial à ventilação.
              </p>
            </div>
          </div>
        </section>

        {/* Bairros Servidos em Vila Real */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Bairros e Zonas Servidas em Vila Real
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Centro Urbano</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Avenida Carvalho Araújo</li>
                  <li>• Avenida 1º de Maio</li>
                  <li>• Rua Central</li>
                  <li>• Praça Luís de Camões</li>
                  <li>• Zona Comercial</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Zonas Residenciais</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bairro de São Pedro</li>
                  <li>• Bairro dos Aregos</li>
                  <li>• Zona da UTAD</li>
                  <li>• Mateus</li>
                  <li>• Lordelo</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Zonas Universitárias</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Campus da UTAD</li>
                  <li>• Residências Universitárias</li>
                  <li>• Bairro Estudantil</li>
                  <li>• Zona de Apartamentos T0/T1</li>
                  <li>• Quinta de Prados</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Porquê Escolher-nos em Vila Real */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Porquê Escolher-nos em Vila Real
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600">🏢</span>
                  Especialistas em Prédios Urbanos
                </h3>
                <p className="text-gray-600">
                  Vila Real tem muitos edifícios de vários andares com sistemas complexos de canalização.
                  Somos especialistas em reparação de colunas de água, substituição de tubagens em prédios,
                  desentupimentos de esgotos coletivos e instalação de contadores individuais. Trabalhamos
                  com condomínios, respeitando horários e minimizando transtornos aos moradores.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600">🎓</span>
                  Experiência em Residências Estudantis
                </h3>
                <p className="text-gray-600">
                  Com a UTAD na cidade, trabalhamos frequentemente em apartamentos estudantis, residências
                  universitárias e T0/T1 partilhados. Conhecemos os problemas típicos: entupimentos por
                  uso inadequado, fugas em torneiras, problemas em esquentadores partilhados. Oferecemos
                  orçamentos acessíveis e intervenções rápidas para estudantes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600">🏛️</span>
                  Respeito pelo Centro Histórico
                </h3>
                <p className="text-gray-600">
                  No centro histórico de Vila Real, com casas senhoriais e edifícios classificados,
                  utilizamos técnicas que preservam a arquitetura tradicional. Restauramos canalizações
                  em granito, trabalhamos em caves abobadadas e respeitamos as fachadas de pedra.
                  Utilizamos equipamento de deteção sem quebras sempre que possível.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600">🍷</span>
                  Conhecimento da Região Vinícola
                </h3>
                <p className="text-gray-600">
                  Próximo à região do Douro, trabalhamos em quintas vinícolas, adegas e propriedades
                  turísticas. Instalamos sistemas de água para processamento de uvas, limpeza de
                  equipamentos vinícolas e tratamento de águas residuais. Conhecemos os requisitos
                  específicos da indústria vitivinícola e turismo rural.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">Serviços de Canalização em Vila Real</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Droplets, title: "Desentupimentos Urbanos", desc: "Esgotos, colunas de prédios, redes pluviais e sanitárias da cidade" },
                { icon: Shield, title: "Reparação de Fugas em Edifícios", desc: "Deteção eletrónica de fugas em apartamentos e condomínios" },
                { icon: Wrench, title: "Canalização Nova e Remodelações", desc: "Instalação completa para construções novas e remodelações urbanas" },
                { icon: CheckCircle, title: "Esquentadores e Caldeiras", desc: "Instalação e manutenção de sistemas de aquecimento central" },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
                  <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testemunhos Locais de Vila Real */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              O Que Dizem os Nossos Clientes em Vila Real
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Prédio de 5 andares na Avenida Carvalho Araújo com problema na coluna de água.
                  Coordenaram com todos os moradores, trabalharam de forma organizada e resolveram
                  em dois dias. Excelente comunicação!"
                </p>
                <p className="text-gray-900 font-bold">Condomínio Araújo</p>
                <p className="text-gray-600 text-sm">Av. Carvalho Araújo</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Apartamento T0 perto da UTAD partilhado por estudantes. Esquentador avariado
                  e orçamento apertado. Deram-nos um preço justo e resolveram no próprio dia.
                  Muito obrigado!"
                </p>
                <p className="text-gray-900 font-bold">Pedro L.</p>
                <p className="text-gray-600 text-sm">Zona Universitária UTAD</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Quinta vinícola em Mateus com sistema de água para a adega. Instalaram tudo
                  conforme as normas alimentares e turísticas. Trabalho profissional que nos
                  ajudou no licenciamento!"
                </p>
                <p className="text-gray-900 font-bold">Quinta São Miguel</p>
                <p className="text-gray-600 text-sm">Mateus, Vila Real</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Vila Real</h2><FAQSection faqs={faqs} /></div></section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black mb-4">Precisa de Canalizador em Vila Real?</h2>
            <p className="text-xl mb-8 opacity-90">Ligue agora. Serviço profissional na capital de distrito.</p>
            <a href="tel:+351928484451" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />928 484 451</a>
          </div>
        </section>
        {/* Cidades Próximas - Internal Linking */}
        <CidadesProximas
          currentCity="Vila Real"
          cidades={cidadesProximas}
          serviceType="canalizador"
        />

        

        <RelatedCities currentCity="Vila Real" currentCitySlug="canalizador-vila-real" />
      </main>
      <Footer />
    </div>
  );
}