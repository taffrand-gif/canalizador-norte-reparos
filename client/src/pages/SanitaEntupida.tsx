import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

const faqItems = [
  {
    question: 'O que fazer quando a sanita está entupida?',
    answer:
      'Pare de puxar o autoclismo se a água estiver a subir. Feche a torneira de alimentação junto à sanita, retire tapetes e objetos do chão e teste uma ventosa apenas se não tiver usado produtos químicos. Se houver refluxo, vários ralos afetados ou um objeto preso, contacte um canalizador.',
  },
  {
    question: 'Posso usar uma ventosa numa sanita entupida?',
    answer:
      'Sim, quando o bloqueio é ligeiro e está próximo da sanita. A borracha deve cobrir completamente a saída e trabalhar com água suficiente para criar vedação. Faça movimentos firmes, sem pancadas. Se não houver melhoria após algumas tentativas, pare para não empurrar a obstrução mais fundo.',
  },
  {
    question: 'Devo usar soda cáustica ou misturar desentupidores?',
    answer:
      'Não misture produtos químicos. As reações podem libertar gases perigosos, provocar queimaduras e danificar juntas ou tubagens. Se já aplicou um produto, informe o canalizador antes da intervenção e mantenha a casa de banho ventilada.',
  },
  {
    question: 'Quanto custa resolver uma sanita entupida?',
    answer:
      'A mão de obra de canalização é 65 €/h. A deslocação depende da zona rodoviária: Z1 15 €, Z2 25 €, Z3 35 €, Z4 45 €, Z5 55 € e Z6 65 €. Noite, fim de semana e feriado têm majoração de 50 % sobre mão de obra e deslocação. Fornecemos orçamento por escrito antes de qualquer intervenção, sem surpresas na fatura.',
  },
  {
    question: 'Porque volta a sanita a entupir?',
    answer:
      'A recorrência pode indicar toalhitas ou objetos retidos, acumulação na tubagem, problema na coluna de esgoto, pouca inclinação ou obstrução mais funda. Quando a sanita volta a entupir depois de uma desobstrução simples, é preferível diagnosticar a causa em vez de repetir produtos ou forçar a descarga.',
  },
  {
    question: 'Quando devo chamar um canalizador?',
    answer:
      'Contacte um canalizador quando a água ameaça transbordar, há refluxo noutros ralos, existe cheiro intenso a esgoto, caiu um objeto na sanita, o entupimento é recorrente ou a ventosa não resolveu. A nossa equipa confirma o atendimento por telefone e apresenta orçamento por escrito antes do trabalho.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Desentupimento de sanita em Trás-os-Montes',
  description:
    'Diagnóstico e desentupimento de sanita em Trás-os-Montes, com orçamento por escrito antes de qualquer intervenção.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Norte Reparos',
    telephone: '+351 928 484 451',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Trás-os-Montes',
      addressCountry: 'PT',
    },
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Trás-os-Montes',
  },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '65',
      priceCurrency: 'EUR',
      unitText: 'hora',
    },
  },
};

export default function SanitaEntupida() {
  const whatsappMessage = encodeURIComponent(
    'Olá, tenho uma sanita entupida e pretendo pedir um orçamento. Podem ajudar?',
  );

  return (
    <>
      <Helmet>
        <title>Sanita Entupida | Desentupimento e Orçamento por Escrito | Norte Reparos</title>
        <meta
          name="description"
          content="Sanita entupida? Saiba o que fazer, quando parar e como pedimos o diagnóstico. Desentupimento desde 65 €/h, deslocação por zona e orçamento por escrito."
        />
        <link rel="canonical" href="https://canalizador-norte-reparos.pt/sanita-entupida" />
        <meta
          property="og:title"
          content="Sanita Entupida | Desentupimento e Orçamento por Escrito | Norte Reparos"
        />
        <meta
          property="og:description"
          content="Sanita entupida? Guia prático, diagnóstico profissional, tabela oficial e orçamento por escrito antes da intervenção."
        />
        <meta property="og:url" content="https://canalizador-norte-reparos.pt/sanita-entupida" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_PT" />
        <meta property="og:site_name" content="Norte Reparos" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sanita Entupida | Desentupimento e Orçamento por Escrito | Norte Reparos"
        />
        <meta
          name="twitter:description"
          content="Sanita entupida? Guia prático, diagnóstico profissional, tabela oficial e orçamento por escrito antes da intervenção."
        />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 text-white">
          <div className="container mx-auto px-4">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-100">
              Desentupimento de sanitas · Trás-os-Montes
            </p>
            <h1 className="mb-6 max-w-4xl text-4xl font-bold md:text-5xl">Sanita Entupida</h1>
            <p className="mb-8 max-w-3xl text-xl text-blue-50">
              Diagnóstico da causa, desobstrução adequada à tubagem e verificação do escoamento.
              Orçamento por escrito antes de qualquer intervenção, sem surpresas na fatura.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="rounded-lg bg-white px-8 py-4 text-center text-lg font-bold text-blue-800 transition-colors hover:bg-blue-50"
              >
                Ligar: {ACTIVE_CONFIG.phone}
              </a>
              <a
                href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-emerald-600 px-8 py-4 text-center text-lg font-bold text-white transition-colors hover:bg-emerald-500"
              >
                Pedir orçamento por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                O que fazer quando a sanita está entupida
              </h2>
              <p className="mb-5 text-lg text-gray-700">
                Uma <strong>sanita entupida</strong> pode começar com escoamento lento, borbulhar ou
                subida do nível da água. Se a água continuar a subir, não volte a puxar o autoclismo:
                feche a torneira de alimentação da sanita e proteja o chão. Repetir a descarga pode
                transformar uma obstrução localizada num transbordamento.
              </p>
              <p className="mb-5 text-lg text-gray-700">
                Quando não foram usados produtos químicos, uma ventosa própria para sanita é a primeira
                tentativa de baixo risco. Garanta uma vedação completa sobre a saída e faça movimentos
                firmes. Não use arame rígido nem objetos improvisados: podem riscar a loiça, ficar presos
                ou empurrar a obstrução para a coluna.
              </p>
              <p className="mb-8 text-lg text-gray-700">
                Se caiu um objeto, há refluxo noutros ralos ou a <strong>sanita entupida</strong> volta ao
                mesmo estado, o problema pode estar além do sifão. Nestes casos, a nossa equipa confirma
                o atendimento por telefone, avalia o ponto de bloqueio e apresenta o orçamento antes de
                iniciar o trabalho.
              </p>

              <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Não misture produtos químicos</h3>
                <p className="text-gray-800">
                  Soda cáustica, lixívia, ácidos e desentupidores diferentes podem reagir entre si,
                  libertar gases perigosos e provocar queimaduras. Se já aplicou um produto, mantenha o
                  espaço ventilado e avise o canalizador antes da intervenção.
                </p>
              </div>
            </div>

            <aside className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">Preços oficiais</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-700">Mão de obra</span>
                  <strong className="text-gray-900">65 €/h</strong>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-700">Deslocação Z1</span>
                  <strong className="text-gray-900">15 €</strong>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-700">Deslocação Z2</span>
                  <strong className="text-gray-900">25 €</strong>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-700">Deslocação Z3</span>
                  <strong className="text-gray-900">35 €</strong>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-700">Deslocação Z4</span>
                  <strong className="text-gray-900">45 €</strong>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-700">Deslocação Z5</span>
                  <strong className="text-gray-900">55 €</strong>
                </div>
                <div className="flex items-center justify-between pb-3">
                  <span className="text-gray-700">Deslocação Z6</span>
                  <strong className="text-gray-900">65 €</strong>
                </div>
              </div>
              <p className="mt-5 text-sm text-gray-600">
                A zona de deslocação é definida pela distância rodoviária real desde Macedo de
                Cavaleiros. Noite, fim de semana e feriado: +50 % sobre mão de obra e deslocação.
              </p>
              <p className="mt-4 font-semibold text-gray-900">
                Orçamento por escrito antes de qualquer intervenção, sem surpresas na fatura.
              </p>
            </aside>
          </div>
        </section>

        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-3xl font-bold text-gray-900">
              Como diagnosticamos e desentupimos a sanita
            </h2>
            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-xl bg-white p-6 shadow-sm">
                <span className="mb-3 block text-sm font-bold text-blue-700">01 · Confirmação</span>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Perceber os sintomas</h3>
                <p className="text-gray-700">
                  Confirmamos se o bloqueio afeta apenas a sanita ou também ralos e outros aparelhos.
                </p>
              </li>
              <li className="rounded-xl bg-white p-6 shadow-sm">
                <span className="mb-3 block text-sm font-bold text-blue-700">02 · Diagnóstico</span>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Localizar a obstrução</h3>
                <p className="text-gray-700">
                  Avaliamos o sifão, a ligação à coluna e os sinais de um problema mais fundo na rede.
                </p>
              </li>
              <li className="rounded-xl bg-white p-6 shadow-sm">
                <span className="mb-3 block text-sm font-bold text-blue-700">03 · Orçamento</span>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Explicar o trabalho</h3>
                <p className="text-gray-700">
                  Apresentamos por escrito a mão de obra, deslocação e intervenção proposta antes de começar.
                </p>
              </li>
              <li className="rounded-xl bg-white p-6 shadow-sm">
                <span className="mb-3 block text-sm font-bold text-blue-700">04 · Verificação</span>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Testar o escoamento</h3>
                <p className="text-gray-700">
                  Depois da desobstrução, testamos a descarga e explicamos como reduzir nova acumulação.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Sinais para parar as tentativas caseiras</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <ul className="space-y-3 rounded-xl border border-gray-200 p-6 text-gray-700">
                <li>• A água sobe perto do bordo ou já transbordou.</li>
                <li>• O ralo do chão borbulha quando descarrega a sanita.</li>
                <li>• Mais do que um aparelho escoa devagar ou apresenta refluxo.</li>
                <li>• Caiu um objeto sólido, brinquedo, suporte ou produto higiénico.</li>
              </ul>
              <ul className="space-y-3 rounded-xl border border-gray-200 p-6 text-gray-700">
                <li>• O entupimento volta depois de uma melhoria temporária.</li>
                <li>• Já foi aplicado um produto químico sem resultado.</li>
                <li>• Existe cheiro persistente a esgoto.</li>
                <li>• A tubagem é antiga ou desconhece o percurso da instalação.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Perguntas frequentes sobre sanita entupida</h2>
            <div className="space-y-5">
              <article className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">{faqItems[0].question}</h3>
                <p className="text-gray-700">{faqItems[0].answer}</p>
              </article>
              <article className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">{faqItems[1].question}</h3>
                <p className="text-gray-700">{faqItems[1].answer}</p>
              </article>
              <article className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">{faqItems[2].question}</h3>
                <p className="text-gray-700">{faqItems[2].answer}</p>
              </article>
              <article className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">{faqItems[3].question}</h3>
                <p className="text-gray-700">{faqItems[3].answer}</p>
              </article>
              <article className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">{faqItems[4].question}</h3>
                <p className="text-gray-700">{faqItems[4].answer}</p>
              </article>
              <article className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">{faqItems[5].question}</h3>
                <p className="text-gray-700">{faqItems[5].answer}</p>
              </article>
            </div>
          </div>
        </section>
        <section className="bg-blue-800 py-14 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Precisa de diagnóstico para uma sanita entupida?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-50">
              Contacte-nos para confirmar o atendimento. A nossa equipa explica o próximo passo e entrega
              orçamento por escrito antes da intervenção.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="rounded-lg bg-white px-8 py-4 font-bold text-blue-800 hover:bg-blue-50"
              >
                {ACTIVE_CONFIG.phone}
              </a>
              <a
                href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-emerald-600 px-8 py-4 font-bold text-white hover:bg-emerald-500"
              >
                WhatsApp orçamento
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
