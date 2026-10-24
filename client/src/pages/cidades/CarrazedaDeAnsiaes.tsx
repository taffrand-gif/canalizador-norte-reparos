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
    question: 'Quanto custa um canalizador em Carrazeda de Ansiães?',
    answer: 'Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 € se tiver lugar. Fora desse horário, à noite, fins de semana e feriados, são 100 €/h e 50 € de deslocação. IVA incluído e toda a hora iniciada é devida.',
  },
  {
    question: 'Que informação ajuda a preparar a intervenção?',
    answer: 'Indique o problema ou trabalho pretendido, a zona da instalação, fotografias e medidas disponíveis. Com elementos suficientes, uma estimativa remota pode ser indicativa; a confirmação depende do diagnóstico.',
  },
  {
    question: 'Que técnicas usam no diagnóstico?',
    answer: 'Consoante o caso, a nossa equipa pode usar inspeção por câmara endoscópica, fluoresceína com observação UV e detetor de humidade. A alta pressão é avaliada para desentupimento de canalizações apenas quando adequada.',
  },
];

export default function CarrazedaDeAnsiaes() {
  const { config } = useSite();
  const cidadesProximas = getCidadesProximas('carrazeda-de-ansiaes');

  useEffect(() => {
    document.title = 'Canalizador em Carrazeda de Ansiães — instalações e diagnóstico | Norte Reparos';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador em Carrazeda de Ansiães para instalação, reparação e diagnóstico planeados. Preços claros, informação útil para avaliação e contacto 24/7.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-carrazeda-de-ansiaes');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-carrazeda-de-ansiaes';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          name: 'Norte Reparos — Canalizador em Carrazeda de Ansiães',
          url: 'https://canalizador-norte-reparos.pt/canalizador-carrazeda-de-ansiaes',
          telephone: '+351 928 484 451',
          priceRange: '€€',
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Carrazeda de Ansiães' },
        },
        {
          '@type': 'Service',
          name: 'Canalização planeada e diagnóstico em Carrazeda de Ansiães',
          serviceType: 'Canalização, diagnóstico e reparação planeada',
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Carrazeda de Ansiães' },
        },
      ],
    });
    document.head.appendChild(schemaScript);

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-faq-schema', 'true');
    faqSchema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
    document.head.appendChild(faqSchema);

    return () => {
      schemaScript.remove();
      faqSchema.remove();
    };
  }, []);

  return (
    <>
      <SEOHeadEnhanced citySlug="carrazeda-de-ansiaes" pageType="city" />
      <StructuredData />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <Breadcrumbs items={[
                { label: 'Canalizador', href: '/' },
                { label: 'Trás-os-Montes', href: '/tras-os-montes' },
                { label: 'Carrazeda de Ansiães', href: '/canalizador-carrazeda-de-ansiaes' },
              ]} />
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Canalizador em <span className="text-orange-300">Carrazeda de Ansiães</span></h1>
              <p className="mb-8 text-xl">Instalação, reparação e diagnóstico planeados. Partilhe o que pretende fazer ou os sintomas observados para prepararmos a avaliação com prudência.</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href={`tel:+351${config.phone.replace(/\s/g, '')}`} className="rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-800 transition-colors hover:bg-gray-100">Ligar: {config.phone}</a>
                <a href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Carrazeda de Ansiães`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-orange-500 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-orange-400">WhatsApp</a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16"><div className="container mx-auto max-w-4xl px-4"><h2 className="mb-6 text-3xl font-bold text-gray-900">Como preparamos a intervenção</h2><p className="mb-4 text-gray-700">Indique a divisão, o ponto de água, o sintoma ou a alteração pretendida. Fotografias, medidas e materiais já escolhidos ajudam-nos a perceber o pedido. Com elementos suficientes, podemos dar uma estimativa remota indicativa; o âmbito final depende do diagnóstico.</p><p className="text-gray-700">Esta página é para trabalhos planeados. A linha telefónica está disponível 24/7, mas a data de visita ou a janela de chegada é sempre confirmada ao telefone conforme a situação.</p></div></section>

        <section className="py-16"><div className="container mx-auto max-w-5xl px-4"><h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Serviços e métodos de diagnóstico</h2><div className="grid gap-6 md:grid-cols-3"><article className="rounded-xl bg-white p-6 shadow-lg"><h3 className="mb-3 text-xl font-bold">Instalação e remodelação</h3><p className="text-gray-600">Analisamos tubagem, pontos de água e materiais para clarificar mão de obra, materiais e limites antes de avançar.</p></article><article className="rounded-xl bg-white p-6 shadow-lg"><h3 className="mb-3 text-xl font-bold">Fugas e humidade</h3><p className="text-gray-600">Quando o caso o justifica, usamos câmara endoscópica, fluoresceína com observação UV e detetor de humidade. A técnica depende do diagnóstico.</p></article><article className="rounded-xl bg-white p-6 shadow-lg"><h3 className="mb-3 text-xl font-bold">Canalizações obstruídas</h3><p className="text-gray-600">Avaliamos primeiro a canalização e o acesso. A alta pressão pode ser usada para desentupimento de canalizações quando for adequada.</p></article></div></div></section>

        <section className="bg-blue-50 py-16"><div className="container mx-auto max-w-4xl px-4"><h2 className="mb-6 text-3xl font-bold text-gray-900">Preços e condições</h2><div className="rounded-xl bg-white p-6 shadow"><p><strong>Dias úteis, 09h–18h:</strong> 70 €/h de mão de obra + 30 € de deslocação, se esta tiver lugar.</p><p className="mt-3"><strong>Fora deste horário, noite, fim de semana ou feriado:</strong> 100 €/h + 50 € de deslocação, se esta tiver lugar.</p><p className="mt-3 text-gray-700">IVA incluído. Toda a hora iniciada é devida. Não há orçamento gratuito com deslocação; quando a visita é necessária, a deslocação é faturada.</p></div><p className="mt-5 text-gray-700">A nossa equipa tem mais de 20 anos de experiência profissional e seguro de responsabilidade civil profissional até 50.000 €.</p></div></section>

        <section className="bg-gradient-to-r from-orange-500 to-blue-700 py-16 text-white"><div className="container mx-auto text-center"><h2 className="mb-4 text-3xl font-bold">Fale com a nossa equipa</h2><p className="mx-auto mb-8 max-w-2xl text-xl">Explique o trabalho ou o sintoma e envie fotografias, se as tiver. Confirmamos consigo os elementos necessários antes de uma eventual deslocação.</p><div className="flex flex-col items-center justify-center gap-6 sm:flex-row"><a href={`tel:+351${config.phone.replace(/\s/g, '')}`} className="rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-700 transition-colors hover:bg-gray-100">{config.phone}</a><a href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Carrazeda de Ansiães`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-orange-400 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-orange-300">WhatsApp</a></div></div></section>
        <section className="py-16"><div className="container max-w-4xl"><h2 className="mb-12 text-center text-3xl font-black">Perguntas frequentes — Carrazeda de Ansiães</h2><FAQSection faqs={faqs} /></div></section>
        <CidadesProximas currentCity="Carrazeda de Ansiães" cidades={cidadesProximas} serviceType="canalizador" />
        <RelatedCities currentCity="Carrazeda de Ansiães" currentCitySlug="canalizador-carrazeda-de-ansiaes" />
      </main>
      <Footer />
    </>
  );
}
