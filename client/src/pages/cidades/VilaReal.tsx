import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { useEffect } from 'react';
import { getCidadesProximas } from '@/data/cidadesProximas';

const faqs = [
  {
    question: 'Que informações devo enviar para pedir um orçamento de canalização em Vila Real?',
    answer: 'Indique a localidade, o tipo de trabalho, o que já existe e, se possível, medidas e fotografias. Com elementos suficientes, a nossa equipa pode dar uma estimativa à distância indicativa; o orçamento é confirmado por escrito antes da intervenção.',
  },
  {
    question: 'Como funcionam os preços de canalização?',
    answer: 'Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 €. Fora desse horário, à noite, aos fins de semana e feriados, são 100 €/h e 50 € de deslocação. Valores TTC, IVA incluído; toda a hora começada é devida e a deslocação é faturada quando ocorre.',
  },
  {
    question: 'Que técnicas usam para localizar uma fuga ou desentupir uma canalização?',
    answer: 'Consoante o diagnóstico, podemos recorrer à inspeção de canalizações por câmara, fluoresceína com observação UV, detetor de humidade ou desentupimento por alta pressão. A técnica é escolhida para a situação, não aplicada automaticamente.',
  },
  {
    question: 'Há atendimento telefónico fora do horário?',
    answer: 'Sim. O atendimento telefónico está disponível 24h/24, 7 dias por semana. A disponibilidade e a janela de chegada são confirmadas por telefone conforme a situação operacional.',
  },
];

export default function VilaReal() {
  const { config } = useSite();
  const cidadesProximas = getCidadesProximas('vila-real');

  useEffect(() => {
    document.title = 'Canalizador em Vila Real — instalação, remodelação e diagnóstico | Norte Reparos';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Canalizador em Vila Real para instalação, remodelação e diagnóstico de canalizações. Preços transparentes, orçamento por escrito e atendimento telefónico 24h/24.',
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-vila-real');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-vila-real';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://canalizador-norte-reparos.pt/canalizador-vila-real#business',
          name: 'Norte Reparos — Canalizador Vila Real',
          url: 'https://canalizador-norte-reparos.pt/canalizador-vila-real',
          telephone: '+351928484451',
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vila Real' },
        },
        {
          '@type': 'Service',
          name: 'Instalação, remodelação e diagnóstico de canalizações em Vila Real',
          serviceType: 'Canalização',
          provider: { '@id': 'https://canalizador-norte-reparos.pt/canalizador-vila-real#business' },
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vila Real' },
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        },
      ],
    });
    document.head.appendChild(schemaScript);

    return () => {
      document.head.removeChild(schemaScript);
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
                { label: 'Vila Real', href: '/canalizador-vila-real' },
              ]} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Canalizador em <span className="text-orange-400">Vila Real</span>
              </h1>
              <p className="text-xl mb-8">
                Instalação, remodelação e diagnóstico de canalizações com informação clara antes de avançar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:+351${config.phone.replace(/\s/g, '')}`}
                  className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  Ligar: {config.phone}
                </a>
                <a
                  href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Vila Real`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  Enviar fotografias por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">O que nos ajuda a avaliar o pedido</h2>
            <p className="text-gray-700 mb-4">
              Para uma instalação, remodelação ou reparação planeada, diga-nos qual é o espaço, o problema ou a alteração pretendida. Fotografias, medidas aproximadas, pontos de água e equipamentos já escolhidos ajudam a preparar uma resposta mais útil.
            </p>
            <p className="text-gray-700">
              Se houver informação suficiente, podemos indicar uma estimativa à distância. Essa indicação é apenas orientadora: o âmbito, os materiais e o valor final são confirmados por escrito antes da intervenção.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Serviços de canalização</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instalações e remodelações</h3>
                <p className="text-gray-600">Preparação de pontos de água, substituição de tubagem e trabalhos em cozinhas, casas de banho e lavandarias, definidos no orçamento pelo âmbito e materiais necessários.</p>
              </article>
              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fugas e humidade</h3>
                <p className="text-gray-600">Quando o caso o justifica, avaliamos a situação com câmara endoscópica, fluoresceína e observação UV ou detetor de humidade antes de propor a intervenção.</p>
              </article>
              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Desentupimento de canalizações</h3>
                <p className="text-gray-600">Depois de avaliar a origem e o acesso ao bloqueio, podemos usar alta pressão em canalizações quando essa solução é adequada.</p>
              </article>
              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Esquentadores</h3>
                <p className="text-gray-600">A nossa equipa realiza intervenções em esquentadores elétricos e a gás, com a habilitação necessária, após diagnóstico do equipamento e das condições existentes.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Preços e condições</h2>
            <div className="bg-white p-6 rounded-xl shadow-md text-gray-700 space-y-3">
              <p><strong>Em dias úteis, das 09h às 18h:</strong> mão de obra 70 €/h + deslocação 30 €.</p>
              <p><strong>Fora desse horário, à noite, fins de semana e feriados:</strong> mão de obra 100 €/h + deslocação 50 €.</p>
              <p>Valores TTC, IVA incluído. Toda a hora começada é devida e a deslocação é faturada quando ocorre. A deslocação ou a visita técnica não são prestadas sem custo.</p>
              <p>Antes da intervenção, apresentamos o orçamento por escrito. Seguro de responsabilidade civil profissional até 50.000 €. A nossa equipa tem mais de 20 anos de experiência profissional.</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contacto e situações urgentes</h2>
            <p className="text-gray-700 mb-4">O atendimento telefónico está disponível 24h/24, 7 dias por semana. Pelo telefone, confirmamos a disponibilidade e a janela de chegada de acordo com a situação operacional; não prometemos uma chegada imediata.</p>
            <p className="text-gray-700">Para uma fuga ativa, rotura ou outro problema que exija prioridade, consulte também o serviço de <a className="text-blue-700 font-semibold underline" href="https://canalizador-urgente.pt/canalizador-vila-real">canalizador urgente em Vila Real</a>.</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container max-w-4xl mx-auto px-4">
            <FAQSection title="Perguntas frequentes — canalizador em Vila Real" faqs={faqs} />
          </div>
        </section>

        <section className="py-14 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Quer explicar o seu pedido?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Ligue ou envie fotografias e a descrição do trabalho para a nossa equipa.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href={`tel:+351${config.phone.replace(/\s/g, '')}`} className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg text-lg">{config.phone}</a>
              <a href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Vila Real`} target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white font-bold px-8 py-4 rounded-lg text-lg">WhatsApp</a>
            </div>
          </div>
        </section>

        <CidadesProximas currentCity="Vila Real" cidades={cidadesProximas} serviceType="canalizador" />
        <RelatedCities currentCity="Vila Real" currentCitySlug="canalizador-vila-real" />
      </main>
      <Footer />
    </>
  );
}
