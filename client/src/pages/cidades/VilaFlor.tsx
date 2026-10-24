import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { getCidadesProximas } from '@/data/cidadesProximas';

const phone = '+351 928 484 451';
const whatsapp = '351928484451';
const dgegFreeFaqs = [
  { question: 'Como pedir uma intervenção planeada de canalização em Vila Flor?', answer: 'Ligue ou envie fotografias, a descrição do trabalho e a localidade. Se houver elementos suficientes, a nossa equipa pode dar uma estimativa remota indicativa; o orçamento escrito define o âmbito antes da intervenção.' },
  { question: 'Que valor é aplicado numa intervenção de canalização?', answer: 'Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 €. Fora desse horário, à noite, fins de semana e feriados, são 100 €/h e 50 € de deslocação. Valores TTC, IVA incluído; toda a hora iniciada é devida e a deslocação é faturada quando ocorre.' },
  { question: 'Como é feito o diagnóstico de uma fuga ou obstrução?', answer: 'O método depende dos sintomas e do acesso. Quando adequado, podemos recorrer a inspeção de canalizações por câmara, fluoresceína com observação UV, detetor de humidade ou desentupimento por alta pressão para canalizações.' },
];

export default function VilaFlor() {
  const cidadesProximas = getCidadesProximas('vila-flor');

  useEffect(() => {
    document.title = 'Canalizador em Vila Flor — instalações e intervenções planeadas';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador em Vila Flor para instalações, remodelações e diagnóstico de canalização. Preços e condições claros; contacto +351 928 484 451.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-vila-flor');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-vila-flor';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'LocalBusiness', '@id': 'https://canalizador-norte-reparos.pt/#localbusiness-vila-flor', name: 'Norte Reparos — Canalizador Vila Flor', url: 'https://canalizador-norte-reparos.pt/canalizador-vila-flor', telephone: phone, areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vila Flor' } },
        { '@type': 'Service', name: 'Canalizador em Vila Flor', serviceType: 'Instalações, remodelações e diagnóstico de canalização', areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vila Flor' } },
        { '@type': 'FAQPage', mainEntity: dgegFreeFaqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      ],
    });
    document.head.appendChild(schemaScript);
    return () => schemaScript.remove();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        <section className="bg-gradient-to-r from-blue-700 to-cyan-700 py-16 text-white">
          <div className="container mx-auto max-w-5xl px-4">
            <Breadcrumbs items={[{ label: 'Canalizador', href: '/' }, { label: 'Vila Flor', href: '/canalizador-vila-flor' }]} />
            <h1 className="mt-6 text-4xl font-bold md:text-5xl">Canalizador em Vila Flor — instalações e intervenções planeadas</h1>
            <p className="mt-5 max-w-3xl text-xl">Para instalações, remodelações e problemas de canalização que possam ser avaliados com cuidado. Diga-nos o que pretende, os sintomas e as fotografias disponíveis.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row"><a href="tel:+351928484451" className="rounded-lg bg-white px-7 py-4 text-center text-lg font-bold text-blue-800">Ligar: {phone}</a><a href={`https://wa.me/${whatsapp}?text=Olá, preciso de um canalizador em Vila Flor`} className="rounded-lg bg-green-500 px-7 py-4 text-center text-lg font-bold text-white">WhatsApp</a></div>
          </div>
        </section>
        <section className="container mx-auto max-w-5xl px-4 py-12"><div className="rounded-xl border-l-4 border-blue-600 bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold">Resposta útil antes da visita</h2><p className="mt-3 text-slate-700">Explique se se trata de instalação, remodelação, fuga, mau escoamento ou equipamento de água quente. Indique há quanto tempo ocorre, os pontos afetados e envie fotografias ou vídeo quando for seguro. Com informação suficiente, a nossa equipa pode dar uma estimativa remota indicativa; o orçamento escrito define o âmbito antes da intervenção.</p><p className="mt-3 text-slate-700">O atendimento telefónico é 24h/24, 7 dias por semana. A disponibilidade e a janela de chegada são confirmadas por telefone conforme a situação operacional.</p></div></section>
        <section className="container mx-auto max-w-5xl px-4 pb-12"><h2 className="text-3xl font-bold">Intervenções planeadas em Vila Flor</h2><div className="mt-6 grid gap-5 md:grid-cols-3"><article className="rounded-xl bg-white p-6 shadow-sm"><h3 className="text-xl font-bold">Instalação e remodelação</h3><p className="mt-2 text-slate-700">Pontos de água, cozinha, casa de banho e substituição de tubagem, com âmbito identificado antes de começar.</p></article><article className="rounded-xl bg-white p-6 shadow-sm"><h3 className="text-xl font-bold">Fugas e humidade</h3><p className="mt-2 text-slate-700">Partilhe onde aparece a humidade e quando surge. O diagnóstico é escolhido de acordo com o acesso e os sinais observados.</p></article><article className="rounded-xl bg-white p-6 shadow-sm"><h3 className="text-xl font-bold">Escoamento</h3><p className="mt-2 text-slate-700">Para escoamento lento ou obstrução, descreva os pontos afetados e se há refluxo para avaliarmos a intervenção na canalização.</p></article></div></section>
        <section className="container mx-auto max-w-5xl px-4 pb-12"><div className="rounded-xl bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold">Diagnóstico conforme o caso</h2><p className="mt-3 text-slate-700">Quando são pertinentes para o diagnóstico ou para decidir a intervenção, podemos usar inspeção de canalizações por câmara, fluoresceína com observação UV e detetor de humidade. Em obstruções de canalizações, o desentupimento por alta pressão é ponderado depois da avaliação e apenas quando adequado.</p></div></section>
        <section className="container mx-auto max-w-5xl px-4 pb-12"><div className="rounded-xl bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold">Preços e condições</h2><div className="mt-4 grid gap-4 md:grid-cols-2"><p className="rounded-lg bg-slate-100 p-4"><strong>Dias úteis, 09h–18h:</strong><br />70 €/h de mão de obra + 30 € de deslocação.</p><p className="rounded-lg bg-slate-100 p-4"><strong>Fora desse horário, noite, fim de semana ou feriado:</strong><br />100 €/h de mão de obra + 50 € de deslocação.</p></div><ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700"><li>Valores TTC, IVA incluído; toda a hora iniciada é devida.</li><li>A deslocação é faturada quando ocorre.</li><li>Não há orçamento gratuito quando exige deslocação. O orçamento escrito é apresentado antes da intervenção.</li></ul></div></section>
        <section className="container mx-auto max-w-4xl px-4 pb-12"><h2 className="mb-6 text-center text-3xl font-bold">Perguntas frequentes</h2><FAQSection faqs={dgegFreeFaqs} /></section>
        <section className="bg-blue-700 py-12 text-white"><div className="container mx-auto max-w-4xl px-4 text-center"><h2 className="text-3xl font-bold">Quer explicar o trabalho em Vila Flor?</h2><p className="mx-auto mt-3 max-w-2xl text-lg">Ligue-nos ou envie fotografias e uma breve descrição. Confirmamos por telefone os próximos passos e a disponibilidade.</p><a href="tel:+351928484451" className="mt-6 inline-block rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-800">{phone}</a><p className="mt-5 text-sm">Para uma fuga ativa ou avaria que exija resposta urgente, consulte <a className="font-bold underline" href="https://canalizador-urgente.pt/canalizador-vila-flor">o serviço de canalizador urgente em Vila Flor</a>.</p></div></section>
        <CidadesProximas currentCity="Vila Flor" cidades={cidadesProximas} serviceType="canalizador" />
        <RelatedCities currentCity="Vila Flor" currentCitySlug="canalizador-vila-flor" />
      </main>
      <Footer />
    </>
  );
}
