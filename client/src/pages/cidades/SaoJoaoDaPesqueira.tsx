import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import StructuredData from '@/components/StructuredData';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { getCidadesProximas } from '@/data/cidadesProximas';

const faqs = [
  {
    question: 'Qual é o preço de um canalizador em São João da Pesqueira?',
    answer: 'Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 €. Fora desse horário, à noite, aos fins de semana e feriados, a mão de obra é 100 €/h e a deslocação é 50 €. Os valores incluem IVA, toda a hora iniciada é devida e a deslocação é faturada quando se realiza.',
  },
  {
    question: 'Podem dar uma estimativa antes da deslocação?',
    answer: 'Quando a descrição e as fotografias permitem perceber a situação, a nossa equipa pode dar uma estimativa à distância. É indicativa: o valor final depende do diagnóstico e da intervenção necessária. Não há orçamento gratuito quando é necessária deslocação.',
  },
  {
    question: 'Que informação devo enviar antes de marcar?',
    answer: 'Indique o equipamento ou zona afetada, os sintomas, há quanto tempo ocorrem e, se for seguro, envie fotografias ou um vídeo. Esta informação ajuda a preparar o diagnóstico e a explicar os próximos passos.',
  },
  {
    question: 'Que técnicas usam para fugas ou canalizações?',
    answer: 'Consoante o diagnóstico, podemos recorrer à inspeção de canalizações por câmara, à fluoresceína com observação UV ou a um detetor de humidade. Para desentupimento de canalizações, a alta pressão só é usada quando a avaliação mostra que é adequada.',
  },
];

export default function SãoJoãoPesqueira() {
  const cidadesProximas = getCidadesProximas('sao-joao-da-pesqueira');

  useEffect(() => {
    document.title = 'Canalizador em São João da Pesqueira — Norte Reparos';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Canalizador em São João da Pesqueira para reparações, manutenção e trabalhos planeados. Diagnóstico prudente, preços transparentes e contacto 24h/24.',
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-sao-joao-da-pesqueira');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-sao-joao-da-pesqueira';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://canalizador-norte-reparos.pt/#business',
          name: 'Norte Reparos',
          telephone: '+351 928 484 451',
          url: 'https://canalizador-norte-reparos.pt/canalizador-sao-joao-da-pesqueira',
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'São João da Pesqueira',
          },
        },
        {
          '@type': 'Service',
          name: 'Canalizador em São João da Pesqueira',
          serviceType: 'Reparações e manutenção de canalização',
          provider: { '@id': 'https://canalizador-norte-reparos.pt/#business' },
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'São João da Pesqueira',
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

    return () => {
      schemaScript.remove();
    };
  }, []);

  return (
    <>
      <SEOHeadEnhanced citySlug="sao-joao-da-pesqueira" pageType="city" />
      <StructuredData />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-14 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <Breadcrumbs
                items={[
                  { label: 'Canalizador', href: '/' },
                  { label: 'São João da Pesqueira', href: '/canalizador-sao-joao-da-pesqueira' },
                ]}
              />
              <h1 className="mb-5 text-4xl font-bold md:text-5xl">
                Canalizador em <span className="text-orange-300">São João da Pesqueira</span>
              </h1>
              <p className="max-w-3xl text-xl text-blue-50">
                Reparações, manutenção e trabalhos planeados de canalização, com informação clara antes de avançar.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+351928484451"
                  className="rounded-lg bg-white px-7 py-4 text-center text-lg font-bold text-blue-800 transition-colors hover:bg-blue-50"
                >
                  Ligar: +351 928 484 451
                </a>
                <a
                  href="https://wa.me/351928484451?text=Ol%C3%A1%2C%20preciso%20de%20um%20canalizador%20em%20S%C3%A3o%20Jo%C3%A3o%20da%20Pesqueira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-orange-500 px-7 py-4 text-center text-lg font-bold text-white transition-colors hover:bg-orange-400"
                >
                  Enviar fotografia por WhatsApp
                </a>
              </div>
              <p className="mt-4 text-sm text-blue-100">Atendimento telefónico 24h/24, 7 dias por semana. A janela de chegada é confirmada por telefone e depende da situação operacional.</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-5 text-3xl font-bold text-gray-900">Como nos pode ajudar a preparar o diagnóstico</h2>
            <p className="mb-4 text-gray-700">Ao contactar a nossa equipa, indique a zona afetada, o sintoma, há quanto tempo acontece e se há água visível, mau escoamento ou alteração de pressão. Se for seguro, fotografias ou um vídeo ajudam-nos a perceber o caso.</p>
            <p className="text-gray-700">Com elementos suficientes, podemos dar uma estimativa à distância. É apenas indicativa: o diagnóstico no local e a intervenção necessária determinam o valor final.</p>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Serviços de canalização para trabalhos planeados</h2>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
              <article className="rounded-xl bg-white p-6 shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Fugas, humidade e diagnóstico</h3>
                <p className="text-gray-600">Quando o caso o justifica, recorremos a câmara endoscópica, fluoresceína com observação UV ou detetor de humidade para orientar o diagnóstico antes de decidir a intervenção.</p>
              </article>
              <article className="rounded-xl bg-white p-6 shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Canalizações e escoamento</h3>
                <p className="text-gray-600">A inspeção de canalizações por câmara ajuda a perceber o problema. Para desentupimento de canalizações, a alta pressão é usada apenas depois de avaliação e quando é adequada.</p>
              </article>
              <article className="rounded-xl bg-white p-6 shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Torneiras, autoclismos e pequenas reparações</h3>
                <p className="text-gray-600">A nossa equipa avalia avarias em pontos de água e componentes sanitários, explicando o que é necessário antes de iniciar o trabalho.</p>
              </article>
              <article className="rounded-xl bg-white p-6 shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Esquentadores elétricos e a gás</h3>
                <p className="text-gray-600">Realizamos intervenções em esquentadores elétricos e a gás, com a habilitação necessária, sempre após diagnóstico do equipamento e da situação.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-14">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Preços e condições antes da deslocação</h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold text-blue-800">Dias úteis, 09h–18h</h3>
                <p className="text-gray-700"><strong>70 €/h</strong> de mão de obra + <strong>30 €</strong> de deslocação.</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold text-blue-800">Fora de horário, noite, fim de semana ou feriado</h3>
                <p className="text-gray-700"><strong>100 €/h</strong> de mão de obra + <strong>50 €</strong> de deslocação.</p>
              </div>
            </div>
            <p className="mt-5 text-gray-700">Valores TTC, IVA incluído. Toda a hora iniciada é devida e a deslocação é faturada quando se realiza. Não fazemos orçamento gratuito com deslocação; antes de qualquer intervenção, explicamos o diagnóstico e apresentamos o valor aplicável.</p>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-5 text-3xl font-bold text-gray-900">Uma abordagem prudente e transparente</h2>
            <p className="mb-3 text-gray-700">A nossa equipa tem mais de 20 anos de experiência profissional. O método e o material são escolhidos em função do diagnóstico, não por rotina.</p>
            <p className="text-gray-700">Seguro de responsabilidade civil profissional até 50.000 €.</p>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-8 text-center text-3xl font-black text-gray-900">Perguntas frequentes</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="bg-gradient-to-r from-orange-500 to-blue-800 py-14 text-white">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Quer explicar a situação antes de marcar?</h2>
            <p className="mb-7 text-lg">Ligue ou envie fotografias. Confirmamos por telefone a disponibilidade e os próximos passos.</p>
            <a href="tel:+351928484451" className="inline-block rounded-lg bg-white px-8 py-4 text-xl font-bold text-blue-800">+351 928 484 451</a>
          </div>
        </section>

        <CidadesProximas currentCity="São João da Pesqueira" cidades={cidadesProximas} serviceType="canalizador" />
        <RelatedCities currentCity="São João da Pesqueira" currentCitySlug="canalizador-sao-joao-da-pesqueira" />
      </main>
      <Footer />
    </>
  );
}
