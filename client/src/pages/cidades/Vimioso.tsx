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
    question: 'Como pedir uma intervenção de canalização em Vimioso?',
    answer: 'Ligue para +351 928 484 451 ou envie fotografias e uma descrição do trabalho. Indicamos os elementos em falta e apresentamos as condições por escrito antes da intervenção.',
  },
  {
    question: 'Que informação ajuda no diagnóstico?',
    answer: 'Ajuda indicar onde surge o sintoma, há quanto tempo ocorre, o tipo de canalização e enviar fotografias quando forem seguras de obter. A avaliação confirma a técnica adequada ao caso.',
  },
  {
    question: 'Quais são os preços de referência?',
    answer: 'Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 €. Fora desse horário, à noite, fins de semana e feriados, são 100 €/h e deslocação de 50 €. Valores TTC, IVA incluído; toda a hora iniciada é devida e a deslocação é cobrada quando ocorre.',
  },
];

export default function Vimioso() {
  const cidadesProximas = getCidadesProximas('vimioso');

  useEffect(() => {
    document.title = 'Canalizador em Vimioso — planeamento e diagnóstico | Norte Reparos';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador em Vimioso para trabalhos planeados, reparação e diagnóstico. Condições claras por escrito; contacte a nossa equipa pelo +351 928 484 451.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-vimioso');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-vimioso';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Plumber',
          '@id': 'https://canalizador-norte-reparos.pt/canalizador-vimioso#business',
          name: 'Norte Reparos — Canalizador',
          url: 'https://canalizador-norte-reparos.pt/canalizador-vimioso',
          telephone: '+351 928 484 451',
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vimioso' },
          description: 'Canalização planeada, reparações e diagnóstico em Vimioso, mediante confirmação do pedido.',
        },
        {
          '@type': 'Service',
          name: 'Canalizador em Vimioso',
          serviceType: 'Canalização planeada, reparação e diagnóstico',
          provider: { '@id': 'https://canalizador-norte-reparos.pt/canalizador-vimioso#business' },
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vimioso' },
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

    return () => schemaScript.remove();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Breadcrumbs items={[{ label: 'Canalizador', href: '/' }, { label: 'Vimioso', href: '/canalizador-vimioso' }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Canalizador em Vimioso — trabalhos planeados, reparação e diagnóstico</h1>
            <p className="text-xl mb-8">Para instalação, remodelação, substituição de tubagem ou reparação a programar, a nossa equipa começa por confirmar o sintoma, o acesso e o objetivo do trabalho.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+351928484451" className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg">Ligar: +351 928 484 451</a>
              <a href="https://wa.me/351928484451" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg">WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white"><div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">O que ajuda a preparar o pedido</h2>
          <p className="text-gray-700">Indique se se trata de fuga visível, humidade, escoamento lento, ponto de água, autoclismo ou remodelação. Se for seguro, envie fotografias do local e diga há quanto tempo ocorre. Uma estimativa à distância só é possível com elementos suficientes e é sempre indicativa.</p>
        </div></section>

        <section className="py-14"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Diagnóstico e trabalhos de canalização</h2><div className="grid md:grid-cols-3 gap-6">
          <article className="bg-white p-6 rounded-xl shadow"><h3 className="text-xl font-bold mb-3">Inspeção conforme o caso</h3><p>Podemos usar câmara endoscópica, fluoresceína com observação UV ou detetor de humidade quando ajudam a localizar a origem do problema.</p></article>
          <article className="bg-white p-6 rounded-xl shadow"><h3 className="text-xl font-bold mb-3">Canalizações obstruídas</h3><p>O desentupimento de canalizações por alta pressão é avaliado apenas quando se adequa ao diagnóstico e à instalação.</p></article>
          <article className="bg-white p-6 rounded-xl shadow"><h3 className="text-xl font-bold mb-3">Instalação e remodelação</h3><p>Confirmamos traçado, materiais, acessos e âmbito antes de apresentar uma proposta para o trabalho planeado.</p></article>
        </div></div></section>

        <section className="py-14 bg-blue-50"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl font-bold text-gray-900 mb-5">Preços e condições</h2><p className="text-gray-700 mb-3"><strong>Dias úteis, 09h–18h:</strong> 70 €/h de mão de obra + 30 € de deslocação. <strong>Fora desse horário, à noite, fins de semana e feriados:</strong> 100 €/h + 50 € de deslocação.</p><p className="text-gray-700">Valores TTC, IVA incluído. Toda a hora iniciada é devida e a deslocação é cobrada quando ocorre. Não há orçamento gratuito com deslocação; materiais e âmbito são esclarecidos antes de avançar.</p></div></section>

        <section className="py-14 bg-white"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-10">Perguntas Frequentes — Vimioso</h2><FAQSection faqs={faqs} /><p className="mt-8 text-gray-700">Atendimento telefónico 24h/24, 7 dias por semana. A janela de chegada é confirmada por telefone conforme a situação operacional.</p></div></section>
        <section className="py-14 bg-gradient-to-r from-orange-500 to-blue-700 text-white"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Fale com a nossa equipa</h2><p className="text-xl mb-7">Mais de 20 anos de experiência profissional. Seguro de responsabilidade civil profissional até 50.000 €.</p><a href="tel:+351928484451" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg text-lg">+351 928 484 451</a></div></section>
        <CidadesProximas currentCity="Vimioso" cidades={cidadesProximas} serviceType="canalizador" />
        <RelatedCities currentCity="Vimioso" currentCitySlug="canalizador-vimioso" />
      </main>
      <Footer />
    </>
  );
}
