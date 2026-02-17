// Page Services détaillée para SEO
// Optimizada para featured snippets e referenciamento local

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useEffect } from 'react';

export default function Servicos() {
  const { config } = useSite();

  useEffect(() => {
    document.title = "Serviços de Canalizador em Trás-os-Montes | Desentupimento, Reparação, Instalação";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Serviços completos de canalizador em Trás-os-Montes: desentupimentos, reparação de fugas, instalação sanitários, aquecimento central. Profissionais certificados, orçamento gratuito, urgências 24h.');
  }, [config]);

  const servicesDetails = [
    {
      title: 'Desentupimentos Urgentes',
      description: 'Desentupimento rápido e eficiente de canalizações, WC, pias, ralos e esgotos. Utilizamos equipamento moderno e técnicas não invasivas para resolver o problema sem danificar as canalizações.',
      features: [
        'Desentupimento de WC, pias e ralos',
        'Limpeza de canalizações e esgotos',
        'Equipamento de alta pressão',
        'Câmaras de inspeção para diagnóstico',
        'Serviço de urgência 24h'
      ],
      image: '/images-optimized/services/service-desentupimentos.jpg',
      priceRange: 'A partir de €60'
    },
    {
      title: 'Reparação de Fugas de Água',
      description: 'Localização e reparação de fugas de água em canalizações, torneiras, autoclismos e sistemas de aquecimento. Utilizamos tecnologia de deteção sem quebra para minimizar danos na propriedade.',
      features: [
        'Deteção de fugas com equipamento especializado',
        'Reparação sem quebra quando possível',
        'Substituição de torneiras e válvulas',
        'Correção de pressão na rede',
        'Garantia na reparação'
      ],
      image: '/images-optimized/services/service-desentupimentos.jpg',
      priceRange: 'A partir de €80'
    },
    {
      title: 'Instalação de Sanitários',
      description: 'Instalação completa de casas de banho, cozinhas e áreas de serviço. Torneiras, autoclismos, chuveiros, banheiras, bases de duche e sistemas de drenagem modernos e eficientes.',
      features: [
        'Instalação de WC, lavatórios e bidés',
        'Montagem de banheiras e bases de duche',
        'Sistemas de drenagem eficientes',
        'Torneiras e misturadores modernos',
        'Projeto personalizado'
      ],
      image: '/images-optimized/services/service-sala-banho.jpg',
      priceRange: 'A partir de €150'
    },
    {
      title: 'Aquecimento Central e Água Quente',
      description: 'Instalação, manutenção e reparação de sistemas de aquecimento central, caldeiras, esquentadores, bombas de calor e radiadores. Garantimos eficiência energética e conforto térmico.',
      features: [
        'Instalação de caldeiras e esquentadores',
        'Manutenção preventiva anual',
        'Reparação de avarias no aquecimento',
        'Sistemas solares térmicos',
        'Optimização energética'
      ],
      image: '/images-optimized/services/service-aquecimento.jpg',
      priceRange: 'A partir de €120'
    }
  ];

  return (
    <>
      <SEOHead />
      <StructuredData />
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Serviços de <span className="text-orange-400">Canalizador</span> em Trás-os-Montes
            </h1>
            <p className="text-xl mb-8 max-w-3xl">
              Serviços completos de canalização para residências, comércios e indústrias. 
              Profissionais certificados, equipamento moderno e garantia no serviço.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 Ligue Agora: {ACTIVE_CONFIG.phone}
              </a>
              <a
                href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de um canalizador em Trás-os-Montes. Podem dar-me um orçamento?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                💬 Pedir Orçamento no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Services details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {servicesDetails.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`Serviço de ${service.title.toLowerCase()} em Trás-os-Montes`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                      <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">
                        {service.priceRange}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-lg">
                      {service.description}
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">O que inclui:</h3>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                          <span className="text-green-500 text-xl">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={`tel:${ACTIVE_CONFIG.phone}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg text-center transition-colors"
                      >
                        Pedir Serviço
                      </a>
                      <a
                        href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=Olá, gostaria de mais informações sobre ${service.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-3 rounded-lg text-center transition-colors border border-gray-300"
                      >
                        Saber Mais
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section with Schema.org */}
        <section className="py-16 bg-gray-50">
          <FAQSection
            title="Perguntas Frequentes sobre Serviços de Canalização"
            faqs={[
              {
                question: "Quanto tempo demora um desentupimento urgente?",
                answer: "Na maioria dos casos, resolvemos desentupimentos em 1-2 horas. Para situações mais complexas, pode demorar até 4 horas. Atendemos urgências 24h."
              },
              {
                question: "Como detetam fugas de água sem quebrar paredes?",
                answer: "Utilizamos equipamento de deteção por ultrassons, câmaras térmicas e gases traçadores. Em 80% dos casos, conseguimos localizar e reparar sem necessidade de obras."
              },
              {
                question: "Oferecem garantia nos serviços?",
                answer: "Sim, oferecemos garantia de 2 anos em todos os serviços de mão de obra e 1 ano nos materiais fornecidos por nós. Para desentupimentos, garantia de 6 meses."
              },
              {
                question: "Quais são os sinais de uma fuga de água oculta?",
                answer: "Conta de água mais alta sem razão aparente, manchas de humidade nas paredes ou tetos, mofo persistente, som de água a correr quando todas as torneiras estão fechadas."
              },
              {
                question: "Posso prevenir entupimentos nos canos?",
                answer: "Sim: não deite gordura no lava-loiça, use filtros nos ralos, faça limpeza mensal com água quente e bicarbonato, e evite deitar objetos sólidos na sanita."
              },
              {
                question: "O orçamento é gratuito e sem compromisso?",
                answer: "Sim, todos os nossos orçamentos são gratuitos e sem compromisso. Incluem diagnóstico inicial e proposta detalhada por escrito com preços transparentes."
              }
            ]}
          />
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Precisa de um Canalizador em Trás-os-Montes?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contacte-nos agora para um orçamento gratuito e sem compromisso. 
              Atendemos urgências 24 horas por dia, incluindo fins de semana e feriados.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 {ACTIVE_CONFIG.phone}
              </a>
              <a
                href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de um canalizador em Trás-os-Montes. Podem dar-me um orçamento?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                💬 WhatsApp Rápido
              </a>
            </div>
            
            {/* Cross-link subtil */}
            <div className="mt-12 p-4 bg-white/20 rounded-xl max-w-md mx-auto">
              <p className="text-lg">
                ⚡ <strong>Precisa de um eletricista?</strong> Recomendamos:{' '}
                <a href="https://staff-seekers.com" className="underline font-bold">
                  staff-seekers.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
</>
  );
}