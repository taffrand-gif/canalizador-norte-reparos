// Página local de canalização programada — Mogadouro
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import StructuredData from '@/components/StructuredData';
import { useSite } from '@/contexts/SiteContext';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { getCidadesProximas } from '@/data/cidadesProximas';

const faqs = [
  {
    question: 'Quanto custa um canalizador em Mogadouro?',
    answer: 'Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 € quando ocorre. Fora desse horário, à noite, fins de semana e feriados, a mão de obra é 100 €/h e a deslocação é 50 €. Os valores incluem IVA e toda a hora iniciada é devida.',
  },
  {
    question: 'Como pedir um orçamento para instalação ou remodelação?',
    answer: 'Indique o trabalho pretendido, medidas aproximadas, fotografias dos pontos de água e materiais já escolhidos. Com informação suficiente, a nossa equipa pode dar uma estimativa indicativa à distância; uma visita com deslocação não é um orçamento gratuito.',
  },
  {
    question: 'Que diagnóstico pode ser feito numa fuga ou escoamento irregular?',
    answer: 'Consoante o caso, podemos usar câmara endoscópica para inspeção de canalizações, fluoresceína com observação UV e detetor de humidade. Para desentupimento de canalizações, a alta pressão é usada após avaliação e quando é adequada.',
  },
  {
    question: 'A linha telefónica funciona fora do horário?',
    answer: 'Sim. A linha telefónica funciona 24 horas por dia, 7 dias por semana. Se for necessária deslocação, a janela de chegada é confirmada por telefone conforme a situação.',
  },
];

export default function Mogadouro() {
  const { config } = useSite();
  const cidadesProximas = getCidadesProximas('mogadouro');

  useEffect(() => {
    document.title = 'Canalizador em Mogadouro — instalação e remodelação | Norte Reparos';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Canalizador em Mogadouro para instalação, remodelação e diagnóstico de canalizações. Preços claros, orçamento por escrito e contacto 24/7.'
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-mogadouro');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-mogadouro';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://canalizador-norte-reparos.pt/canalizador-mogadouro#business',
          name: 'Norte Reparos — Canalizador em Mogadouro',
          url: 'https://canalizador-norte-reparos.pt/canalizador-mogadouro',
          telephone: '+351 928 484 451',
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Mogadouro' },
        },
        {
          '@type': 'Service',
          '@id': 'https://canalizador-norte-reparos.pt/canalizador-mogadouro#service',
          name: 'Instalação e remodelação de canalização em Mogadouro',
          serviceType: 'Instalação e remodelação de canalização',
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Mogadouro' },
          availableChannel: {
            '@type': 'ServiceChannel',
            servicePhone: { '@type': 'ContactPoint', telephone: '+351 928 484 451', contactType: 'customer service' },
          },
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
      <SEOHeadEnhanced citySlug="mogadouro" pageType="city" />
      <StructuredData />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Breadcrumbs items={[
                { label: 'Canalizador', href: '/' },
                { label: 'Trás-os-Montes', href: '/tras-os-montes' },
                { label: 'Mogadouro', href: '/canalizador-mogadouro' },
              ]} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Canalizador em <span className="text-orange-400">Mogadouro</span>
              </h1>
              <p className="text-xl mb-8">
                Instalação, remodelação e diagnóstico de canalizações para trabalhos planeados, com informação clara antes da visita.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:+351${config.phone.replace(/\s/g, '')}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">
                  Ligar: {config.phone}
                </a>
                <a href={`https://wa.me/${config.whatsapp}?text=Olá,%20preciso%20de%20informação%20sobre%20canalização%20em%20Mogadouro`} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Antes de pedir uma visita</h2>
            <p className="text-gray-700 text-lg">Explique o trabalho pretendido, envie fotografias, medidas aproximadas e os materiais já escolhidos. Se houver elementos suficientes, a nossa equipa pode dar uma estimativa indicativa à distância. Uma visita com deslocação não é um orçamento gratuito.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Serviços de canalização para trabalhos programados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <article className="bg-white p-6 rounded-xl shadow-lg"><h3 className="text-xl font-bold mb-3">Instalação e remodelação</h3><p className="text-gray-600">Planeamento de pontos de água, redes de canalização, cozinha, lavandaria e casa de banho, conforme o âmbito confirmado.</p></article>
              <article className="bg-white p-6 rounded-xl shadow-lg"><h3 className="text-xl font-bold mb-3">Substituição e reparação</h3><p className="text-gray-600">Substituição de componentes ou troços após analisar o acesso, os materiais e a solução adequada ao caso.</p></article>
              <article className="bg-white p-6 rounded-xl shadow-lg"><h3 className="text-xl font-bold mb-3">Diagnóstico de canalizações</h3><p className="text-gray-600">Análise de sinais de fuga, humidade ou escoamento irregular antes de escolher a intervenção.</p></article>
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Diagnóstico com método</h2>
            <p className="text-gray-700">Consoante o diagnóstico, podemos usar <strong>câmara endoscópica</strong> para inspeção de canalizações, <strong>fluoresceína com observação UV</strong> e <strong>detetor de humidade</strong>. Para desentupimento de <strong>canalizações</strong>, a alta pressão é usada após avaliação e quando é adequada. A técnica não é automática nem substitui o diagnóstico.</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Preços e condições</h2>
            <p className="text-gray-700 mb-3"><strong>Dias úteis, 09h–18h:</strong> 70 €/h de mão de obra + 30 € de deslocação, quando há deslocação. <strong>Fora deste horário, à noite, fins de semana e feriados:</strong> 100 €/h + 50 € de deslocação.</p>
            <p className="text-gray-700">Valores com IVA incluído. Toda a hora iniciada é devida e a deslocação é faturada se ocorrer. Materiais e trabalhos fora do âmbito confirmado são explicados antes de avançar.</p>
          </div>
        </section>

        <section className="py-16 bg-gray-50"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas frequentes — Mogadouro</h2><FAQSection faqs={faqs} /></div></section>

        <section className="py-14 bg-gradient-to-r from-orange-500 to-blue-700 text-white"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-5">Fale com a nossa equipa</h2><p className="text-xl mb-6 max-w-3xl mx-auto">A linha telefónica funciona 24 horas por dia, 7 dias por semana. Para um pedido planeado, envie a descrição e fotografias; se houver água ativa, indique-o logo na chamada. A janela de chegada, quando necessária, é confirmada por telefone.</p><a href={`tel:+351${config.phone.replace(/\s/g, '')}`} className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-lg text-lg">{config.phone}</a></div></section>

        <section className="py-10 bg-white"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-2xl font-bold mb-3">Experiência e responsabilidade</h2><p className="text-gray-700">A nossa equipa conta com mais de 20 anos de experiência profissional. Quando relevante para o trabalho, dispomos de seguro de responsabilidade civil profissional até 50.000 €; os limites e condições aplicáveis dependem do caso.</p></div></section>
        <CidadesProximas currentCity="Mogadouro" cidades={cidadesProximas} serviceType="canalizador" />
        <RelatedCities currentCity="Mogadouro" currentCitySlug="canalizador-mogadouro" />
      </main>
      <Footer />
    </>
  );
}
