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
    question: 'Quanto custa um canalizador em Vinhais?',
    answer: 'Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 € quando ocorre. Fora deste horário, à noite, aos fins de semana e feriados, são 100 €/h e 50 € de deslocação. Valores TTC, IVA incluído; cada hora começada é devida.',
  },
  {
    question: 'Que informação ajuda a preparar o diagnóstico?',
    answer: 'Indique o tipo de trabalho, os sintomas, o acesso ao local e, quando possível, envie fotografias ou um vídeo. Com elementos suficientes, a nossa equipa pode dar uma estimativa à distância indicativa; o valor final depende do diagnóstico e da intervenção.',
  },
  {
    question: 'Que métodos podem ser usados numa fuga ou obstrução?',
    answer: 'Consoante o diagnóstico, podemos usar inspeção de canalizações por câmara, fluoresceína com observação UV, detetor de humidade ou desentupimento de canalizações por alta pressão. A técnica é escolhida caso a caso.',
  },
  {
    question: 'Como pedir uma intervenção planeada em Vinhais?',
    answer: 'Ligue para +351 928 484 451 ou envie mensagem por WhatsApp com uma descrição e imagens úteis. Confirmamos por telefone a disponibilidade e a janela de chegada; o orçamento por escrito é apresentado antes da intervenção.',
  },
];

export default function Vinhais() {
  const { config } = useSite();
  const cidadesProximas = getCidadesProximas('vinhais');

  useEffect(() => {
    document.title = 'Canalizador em Vinhais — instalações, reparações e diagnóstico | Norte Reparos';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador em Vinhais para instalações, reparações e diagnóstico. Dias úteis 09h–18h: 70 €/h + deslocação 30 €; fora do horário, 100 €/h + deslocação 50 €. Valores TTC, IVA incluído.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-vinhais');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-vinhais';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Norte Reparos — Canalizador Vinhais',
      url: 'https://canalizador-norte-reparos.pt/canalizador-vinhais',
      telephone: '+351 928 484 451',
      priceRange: '€€',
      areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vinhais' },
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
      <SEOHeadEnhanced citySlug="vinhais" pageType="city" />
      <StructuredData />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Breadcrumbs items={[{ label: 'Canalizador', href: '/' }, { label: 'Trás-os-Montes', href: '/tras-os-montes' }, { label: 'Vinhais', href: '/canalizador-vinhais' }]} />
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Canalizador em <span className="text-orange-400">Vinhais</span></h1>
              <p className="mb-8 text-xl">Instalações, reparações e diagnóstico de canalização com informação clara antes de avançar.</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href={`tel:+351${config.phone.replace(/\s/g, '')}`} className="rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-700 transition-colors hover:bg-gray-100">📞 {config.phone}</a>
                <a href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Vinhais`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-orange-500 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-orange-400">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-5 text-3xl font-bold text-gray-900">Pedido de intervenção planeada</h2>
            <p className="text-gray-700">Para instalações, substituição de tubagem, reparações ou manutenção em Vinhais, descreva o trabalho e envie fotografias quando puder. A nossa equipa confirma por telefone a disponibilidade e a janela de chegada. O atendimento telefónico está disponível 24h/24, 7 dias por semana, sem prometer chegada imediata.</p>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Serviços de canalização que avaliamos</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-xl bg-white p-6 shadow-lg"><h3 className="mb-3 text-xl font-bold text-gray-900">Instalações e substituições</h3><p className="text-gray-600">Pontos de água, torneiras, autoclismos, redes de água e substituição de tubagem, definidos segundo o estado existente e o âmbito do pedido.</p></article>
              <article className="rounded-xl bg-white p-6 shadow-lg"><h3 className="mb-3 text-xl font-bold text-gray-900">Fugas e humidade</h3><p className="text-gray-600">Localizamos a origem provável antes de propor uma reparação. A informação sobre manchas, consumo, acesso e fotografias ajuda a preparar a visita.</p></article>
              <article className="rounded-xl bg-white p-6 shadow-lg"><h3 className="mb-3 text-xl font-bold text-gray-900">Canalizações obstruídas</h3><p className="text-gray-600">Para entupimentos de canalizações, avaliamos a situação antes de escolher o método de desentupimento adequado.</p></article>
              <article className="rounded-xl bg-white p-6 shadow-lg"><h3 className="mb-3 text-xl font-bold text-gray-900">Esquentadores</h3><p className="text-gray-600">A nossa equipa realiza intervenções em esquentadores elétricos e a gás, com a habilitação necessária.</p></article>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-12">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-5 text-3xl font-bold text-gray-900">Diagnóstico com método, quando é adequado</h2>
            <p className="text-gray-700">Consoante o caso, podemos recorrer à <strong>inspeção de canalizações por câmara</strong>, à <strong>fluoresceína com observação UV</strong>, ao <strong>detetor de humidade</strong> ou ao <strong>desentupimento de canalizações por alta pressão</strong>. Estas técnicas não são passos automáticos: são escolhidas depois de avaliar os sintomas e o acesso.</p>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-5 text-3xl font-bold text-gray-900">Valores e condições</h2>
            <div className="space-y-3 text-gray-700"><p><strong>Dias úteis, 09h–18h:</strong> 70 €/h + 30 € de deslocação, quando ocorre.</p><p><strong>Fora deste horário, à noite, fins de semana e feriados:</strong> 100 €/h + 50 € de deslocação, quando ocorre.</p><p>Valores TTC, IVA incluído. Cada hora começada é devida. Uma estimativa à distância pode ser indicativa quando a descrição e as fotografias permitem avaliar o pedido; não é um preço fechado. Não há orçamento gratuito com deslocação e apresentamos o orçamento por escrito antes da intervenção.</p></div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4"><h2 className="mb-5 text-3xl font-bold text-gray-900">Informação útil para nos contactar</h2><ol className="list-decimal space-y-2 pl-6 text-gray-700"><li>Explique o tipo de trabalho ou os sintomas observados.</li><li>Indique se há água visível, mau escoamento, humidade ou equipamento afetado.</li><li>Envie fotografias, vídeo, medidas ou referências dos materiais, se disponíveis.</li><li>Deixe um contacto para confirmarmos disponibilidade, deslocação e âmbito.</li></ol><p className="mt-5 text-gray-700"><strong>Mais de 20 anos de experiência profissional.</strong> <strong>Seguro de responsabilidade civil profissional até 50.000 €.</strong></p></div>
        </section>

        <section className="bg-white py-14"><div className="container max-w-4xl"><h2 className="mb-10 text-center text-3xl font-black">Perguntas frequentes — Vinhais</h2><FAQSection faqs={faqs} /></div></section>
        <section className="bg-gradient-to-r from-orange-500 to-blue-700 py-14 text-white"><div className="container mx-auto px-4 text-center"><h2 className="mb-4 text-3xl font-bold">Fale com a nossa equipa em Vinhais</h2><p className="mx-auto mb-8 max-w-2xl text-xl">Envie a descrição e imagens úteis para prepararmos a avaliação do pedido.</p><div className="flex flex-col items-center justify-center gap-6 sm:flex-row"><a href={`tel:+351${config.phone.replace(/\s/g, '')}`} className="rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-700 transition-colors hover:bg-gray-100">📞 {config.phone}</a><a href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Vinhais`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-orange-500 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-orange-400">💬 WhatsApp</a></div></div></section>
        <CidadesProximas currentCity="Vinhais" cidades={cidadesProximas} serviceType="canalizador" />
        <RelatedCities currentCity="Vinhais" currentCitySlug="canalizador-vinhais" />
      </main>
      <Footer />
    </>
  );
}
