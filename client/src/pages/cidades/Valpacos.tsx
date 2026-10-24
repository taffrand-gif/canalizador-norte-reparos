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
    question: 'Que informação ajuda num pedido de canalização em Valpaços?',
    answer: 'Indique o tipo de instalação ou avaria, a localidade, o acesso e, se possível, fotografias. Estes elementos permitem uma estimativa à distância indicativa quando são suficientes.',
  },
  {
    question: 'Como funcionam os preços?',
    answer: 'Em dias úteis das 09h às 18h, a mão de obra é 70 €/h e a deslocação 30 €. Fora desse horário, à noite, fins de semana e feriados, é 100 €/h e deslocação 50 €. Valores TTC, IVA incluído; cada hora começada é devida e a deslocação é faturada quando ocorre.',
  },
  {
    question: 'Usam câmara ou fluoresceína no diagnóstico?',
    answer: 'Consoante o diagnóstico, a nossa equipa pode recorrer a câmara endoscópica, fluoresceína com observação UV e detetor de humidade. A técnica é escolhida para o caso concreto, não é automática.',
  },
];

export default function Valpacos() {
  const cidadesProximas = getCidadesProximas('valpacos');

  useEffect(() => {
    document.title = 'Canalizador em Valpaços — instalação, reparação e diagnóstico | Norte Reparos';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador em Valpaços para instalações, reparações e diagnóstico. Preços e âmbito esclarecidos antes da intervenção.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-valpacos');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-valpacos';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://canalizador-norte-reparos.pt/#localbusiness-valpacos-react',
          name: 'Norte Reparos — Canalizador Valpaços',
          url: 'https://canalizador-norte-reparos.pt/canalizador-valpacos',
          telephone: '+351 928 484 451',
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Valpaços' },
        },
        {
          '@type': 'Service',
          name: 'Canalização, diagnóstico e reparações em Valpaços',
          serviceType: 'Canalização, diagnóstico e reparações',
          provider: { '@id': 'https://canalizador-norte-reparos.pt/#localbusiness-valpacos-react' },
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Valpaços' },
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
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Breadcrumbs items={[
                { label: 'Canalizador', href: '/' },
                { label: 'Trás-os-Montes', href: '/tras-os-montes' },
                { label: 'Valpaços', href: '/canalizador-valpacos' },
              ]} />
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Canalizador profissional em <span className="text-orange-400">Valpaços</span></h1>
              <p className="mb-8 text-xl">Instalações, reparações e diagnóstico de canalizações. Explique-nos o pedido, o acesso e os sintomas para a nossa equipa orientar os próximos passos.</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="tel:+351928484451" className="rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-700 transition-colors hover:bg-gray-100">📞 +351 928 484 451</a>
                <a href="https://wa.me/351928484451?text=Olá%2C%20preciso%20de%20ajuda%20de%20canalização%20em%20Valpaços" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-orange-500 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-orange-400">💬 Enviar mensagem</a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16"><div className="container mx-auto px-4"><div className="mx-auto max-w-4xl"><h2 className="mb-6 text-3xl font-bold text-gray-900">Preparar um pedido de canalização</h2><p className="mb-4 text-gray-700">Indique o tipo de instalação ou anomalia, envie fotografias úteis e, se aplicável, medidas aproximadas e materiais já escolhidos. Se houver elementos suficientes, uma estimativa à distância pode ser indicativa; o diagnóstico confirma o âmbito concreto.</p><p className="text-gray-700">Antes da intervenção, esclarecemos por escrito o trabalho e o valor aplicável. Não há orçamento gratuito quando é necessária deslocação.</p></div></div></section>

        <section className="py-16"><div className="container mx-auto px-4"><div className="mx-auto max-w-5xl"><h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Serviços de canalização em Valpaços</h2><div className="grid gap-6 md:grid-cols-3"><article className="rounded-xl bg-white p-6 shadow-lg"><h3 className="mb-3 text-xl font-bold text-gray-900">Diagnóstico de fugas</h3><p className="text-gray-600">Quando o caso o justifica, podemos recorrer a câmara endoscópica, fluoresceína com observação UV e detetor de humidade antes de escolher a intervenção.</p></article><article className="rounded-xl bg-white p-6 shadow-lg"><h3 className="mb-3 text-xl font-bold text-gray-900">Canalizações e escoamentos</h3><p className="text-gray-600">Instalação, substituição e reparação de canalizações, torneiras, autoclismos e pontos de água. A alta pressão para desentupimento de canalizações é avaliada caso a caso.</p></article><article className="rounded-xl bg-white p-6 shadow-lg"><h3 className="mb-3 text-xl font-bold text-gray-900">Esquentadores</h3><p className="text-gray-600">A nossa equipa realiza intervenções em esquentadores elétricos e a gás, com a habilitação necessária.</p></article></div></div></div></section>

        <section className="bg-blue-50 py-16"><div className="container mx-auto px-4"><div className="mx-auto max-w-4xl"><h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Preços e condições</h2><div className="grid gap-6 md:grid-cols-2"><div className="rounded-xl bg-white p-6 shadow-lg"><h3 className="mb-2 text-xl font-bold text-gray-900">Dias úteis, 09h–18h</h3><p className="text-2xl font-bold text-blue-700">70 €/h + 30 €</p><p className="mt-2 text-gray-600">Mão de obra e deslocação.</p></div><div className="rounded-xl bg-white p-6 shadow-lg"><h3 className="mb-2 text-xl font-bold text-gray-900">Fora desse horário</h3><p className="text-2xl font-bold text-blue-700">100 €/h + 50 €</p><p className="mt-2 text-gray-600">Noite, fins de semana e feriados.</p></div></div><p className="mt-6 text-gray-700">Valores TTC, IVA incluído. Cada hora começada é devida e a deslocação é faturada quando ocorre.</p></div></div></section>

        <section className="bg-gray-50 py-16"><div className="container mx-auto px-4"><div className="mx-auto max-w-3xl"><h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Perguntas frequentes — Valpaços</h2><FAQSection faqs={faqs} /></div></div></section>

        <section className="bg-gradient-to-r from-orange-500 to-blue-700 py-16 text-white"><div className="container mx-auto px-4 text-center"><h2 className="mb-6 text-3xl font-bold">Fale com a nossa equipa</h2><p className="mx-auto mb-8 max-w-2xl text-xl">Mais de 20 anos de experiência profissional. Seguro de responsabilidade civil profissional até 50.000 €. Atendimento telefónico 24h/24, 7 dias por semana; a janela de chegada é confirmada por telefone.</p><div className="flex flex-col items-center justify-center gap-6 sm:flex-row"><a href="tel:+351928484451" className="rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-700 transition-colors hover:bg-gray-100">📞 +351 928 484 451</a><a href="https://wa.me/351928484451?text=Olá%2C%20preciso%20de%20ajuda%20de%20canalização%20em%20Valpaços" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-orange-500 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-orange-400">💬 WhatsApp</a></div></div></section>
        <CidadesProximas currentCity="Valpaços" cidades={cidadesProximas} serviceType="canalizador" />
        <RelatedCities currentCity="Valpaços" currentCitySlug="canalizador-valpacos" />
      </main>
      <Footer />
    </>
  );
}
