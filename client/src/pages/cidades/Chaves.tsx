import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { getCidadesProximas } from '@/data/cidadesProximas';

const faqs = [
  {
    question: 'Quanto custa um canalizador em Chaves?',
    answer: 'Em dias úteis, das 09h às 18h, a mão de obra custa 70 €/h e a deslocação 30 €. Fora desse horário, à noite, fins de semana e feriados, a mão de obra custa 100 €/h e a deslocação 50 €. Os valores são TTC, com IVA incluído; cada hora iniciada é devida e a deslocação é faturada quando se realiza.'
  },
  {
    question: 'Que informação devemos enviar para pedir uma estimativa?',
    answer: 'Indique o tipo de trabalho, a localidade, medidas aproximadas, fotografias dos pontos de água ou da instalação existente e os materiais já escolhidos. Quando a informação é suficiente, a nossa equipa pode dar uma estimativa à distância, sempre indicativa; o valor final depende do diagnóstico e da intervenção efetiva.'
  },
  {
    question: 'Usam câmara ou fluoresceína para diagnosticar uma fuga?',
    answer: 'Consoante o diagnóstico, podemos usar inspeção de canalizações por câmara, fluoresceína com observação UV ou detetor de humidade. Estas técnicas ajudam a compreender a situação e a escolher a intervenção adequada; não são aplicadas automaticamente em todos os pedidos.'
  },
  {
    question: 'Como funciona uma visita para um trabalho planeado?',
    answer: 'Confirmamos o pedido por telefone, recolhemos a informação útil e explicamos o que é necessário verificar. Antes da intervenção, apresentamos por escrito o âmbito, a mão de obra, os materiais quando aplicáveis e a deslocação. Não há orçamento gratuito quando é necessária uma deslocação.'
  }
] as const;

export default function Chaves() {
  const cidadesProximas = getCidadesProximas('chaves');

  useEffect(() => {
    document.title = 'Canalizador em Chaves — instalação, renovação e diagnóstico | Norte Reparos';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Canalizador em Chaves para instalação, renovação e diagnóstico. Envie descrição e fotografias para uma estimativa indicativa. 70 €/h + 30 € em dias úteis, 09h–18h; valores TTC.'
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://canalizador-norte-reparos.pt/canalizador-chaves';

    document.getElementById('schema-chaves')?.remove();
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-chaves';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': 'https://canalizador-norte-reparos.pt/canalizador-chaves#service',
          name: 'Canalizador em Chaves — instalação, renovação e diagnóstico',
          serviceType: 'Instalação, renovação e diagnóstico de canalização',
          provider: {
            '@type': 'Organization',
            name: 'Norte Reparos',
            url: 'https://canalizador-norte-reparos.pt/',
            telephone: '+351 928 484 451'
          },
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Concelho de Chaves'
          },
          availableChannel: {
            '@type': 'ServiceChannel',
            servicePhone: {
              '@type': 'ContactPoint',
              telephone: '+351 928 484 451',
              contactType: 'customer service',
              availableLanguage: 'Portuguese'
            }
          }
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://canalizador-norte-reparos.pt/canalizador-chaves#faq',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        },
        {
          '@type': 'WebPage',
          '@id': 'https://canalizador-norte-reparos.pt/canalizador-chaves#webpage',
          url: 'https://canalizador-norte-reparos.pt/canalizador-chaves',
          name: 'Canalizador em Chaves — instalação, renovação e diagnóstico',
          inLanguage: 'pt-PT'
        }
      ]
    });
    document.head.appendChild(schemaScript);

    return () => {
      if (schemaScript.parentNode === document.head) {
        document.head.removeChild(schemaScript);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Breadcrumbs items={[
                { label: 'Canalizador', href: '/' },
                { label: 'Trás-os-Montes', href: '/tras-os-montes' },
                { label: 'Chaves', href: '/canalizador-chaves' }
              ]} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Canalizador em <span className="text-orange-400">Chaves</span>
              </h1>
              <p className="text-xl mb-8">
                Instalação, renovação e diagnóstico para trabalhos planeados. Diga-nos o que precisa,
                envie fotografias se as tiver e a nossa equipa explica os próximos passos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+351928484451"
                  className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  Ligar: +351 928 484 451
                </a>
                <a
                  href="https://wa.me/351928484451?text=Ol%C3%A1%2C%20preciso%20de%20um%20canalizador%20em%20Chaves"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  Enviar fotografias por WhatsApp
                </a>
              </div>
              <p className="mt-4 text-sm text-blue-100">Atendimento telefónico 24h/24, 7 dias por semana. A janela de chegada é confirmada por telefone e depende da situação operacional.</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Como preparar um pedido de canalização</h2>
            <p className="text-gray-700 mb-4">
              Para uma instalação, renovação de casa de banho ou cozinha, substituição de tubagem ou diagnóstico de uma anomalia, ajuda indicar o tipo de imóvel, os pontos de água envolvidos e o que já existe. Medidas aproximadas, fotografias e referências dos materiais reduzem dúvidas antes de uma visita.
            </p>
            <p className="text-gray-700">
              Se houver elementos suficientes, podemos dar uma estimativa à distância. É uma indicação, não um preço fechado: o valor final depende do diagnóstico, do acesso, dos materiais e da intervenção efetivamente necessária.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Serviços para trabalhos planeados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instalação e renovação</h3>
                <p className="text-gray-600">Analisamos redes de água, pontos sanitários, cozinhas, casas de banho e substituição de tubagem antes de definir o âmbito do trabalho.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnóstico de fugas e humidade</h3>
                <p className="text-gray-600">Quando faz sentido no diagnóstico, usamos inspeção de canalizações por câmara, fluoresceína com observação UV ou detetor de humidade para reunir informação antes de escolher a intervenção.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Canalizações com escoamento difícil</h3>
                <p className="text-gray-600">O desentupimento de canalizações por alta pressão é avaliado caso a caso, depois de percebermos a situação e se a técnica é adequada.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Esquentadores</h3>
                <p className="text-gray-600">A nossa equipa realiza intervenções em esquentadores elétricos e a gás, com a habilitação necessária. Descreva o equipamento e o sintoma para avaliarmos o pedido.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Preços e condições comunicados com clareza</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-700 mb-2">Dias úteis, 09h–18h</h3>
                <p className="text-gray-700"><strong>70 €/h</strong> de mão de obra + <strong>30 €</strong> de deslocação, quando esta ocorre.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-700 mb-2">Fora deste horário</h3>
                <p className="text-gray-700"><strong>100 €/h</strong> de mão de obra + <strong>50 €</strong> de deslocação à noite, fins de semana e feriados, quando esta ocorre.</p>
              </div>
            </div>
            <p className="text-gray-700 mt-6">Valores TTC, IVA incluído. Cada hora iniciada é devida. Antes da intervenção, apresentamos por escrito o âmbito, a mão de obra, os materiais quando aplicáveis e a deslocação. Não há orçamento gratuito quando é necessária uma deslocação.</p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Perguntas sobre canalizador em Chaves</h2>
            <div className="max-w-3xl mx-auto">
              <FAQSection faqs={faqs} />
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Quer explicar-nos o trabalho?</h2>
            <p className="text-xl mb-7 max-w-2xl mx-auto">Ligue ou envie fotografias e uma descrição. Para uma urgência de canalização ativa, consulte o serviço de urgência dedicado.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+351928484451" className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">+351 928 484 451</a>
              <a href="https://canalizador-urgente.pt" className="underline font-bold">Serviço de urgência de canalização</a>
            </div>
          </div>
        </section>

        <CidadesProximas currentCity="Chaves" cidades={cidadesProximas} serviceType="canalizador" />
        <RelatedCities currentCity="Chaves" currentCitySlug="canalizador-chaves" />
      </main>
      <Footer />
    </>
  );
}
