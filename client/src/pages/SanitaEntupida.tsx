import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

const faqItems = [
  {
    question: 'Como desentupir uma sanita entupida em casa?',
    answer:
      'Comece por não voltar a puxar o autoclismo se a água estiver a subir. Feche a torneira de alimentação junto à sanita, retire tapetes e objetos do chão e tente uma ventosa apropriada, apenas se não tiver usado produtos químicos. A ventosa deve cobrir completamente a saída e trabalhar com água suficiente para criar vedação. Se houver refluxo, vários ralos afetados ou um objeto preso, contacte a nossa equipa: descrevemos os sintomas por telefone, avaliamos o ponto de bloqueio e entregamos orçamento por escrito antes de qualquer intervenção.',
  },
  {
    question: 'Quando é que uma sanita entupida exige um canalizador?',
    answer:
      'Contacte a nossa equipa quando a água ameaça transbordar, há refluxo noutros ralos, existe cheiro intenso a esgoto, caiu um objeto na sanita, o entupimento é recorrente ou a ventosa não resolveu. Confirmamos o atendimento por telefone e apresentamos orçamento por escrito antes do trabalho.',
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
      'Contacte a nossa equipa quando a água ameaça transbordar, há refluxo noutros ralos, existe cheiro intenso a esgoto, caiu um objeto na sanita, o entupimento é recorrente ou a ventosa não resolveu. Confirmamos o atendimento por telefone e apresentamos orçamento por escrito antes do trabalho.',
  },
  {
    question: 'A ventosa não resolve a sanita entupida, o que fazer a seguir?',
    answer:
      'Pare as tentativas para não empurrar a obstrução mais fundo. Se houver um objeto sólido visível (brinquedo, escova, tampa) não force a descarga. Feche a torneira de alimentação da sanita junto à parede, proteja o chão e contacte a nossa equipa: avaliamos por telefone se o bloqueio é acessível com mola elétrica ou se exige inspeção com câmara antes da intervenção.',
  },
  {
    question: 'Quanto custa realmente uma sanita entupida em Trás-os-Montes?',
    answer:
      'O custo mínimo é deslocação + 1 hora de mão de obra. Para uma sanita entupida simples: Z1 15 € + 65 €/h = 80 €; Z2 25 € + 65 €/h = 90 €; Z3 35 € + 65 €/h = 100 €; Z4 45 € + 65 €/h = 110 €; Z5 55 € + 65 €/h = 120 €; Z6 65 € + 65 €/h = 130 €. Bloqueios profundos com mola elétrica podem exigir 2-3 horas; obstrução na coluna pode exigir hidrojato ou câmara. Orçamento por escrito antes de qualquer intervenção, sem surpresas.',
  },
  {
    question: 'A sanita entope sempre no mesmo sítio, isso é normal?',
    answer:
      'Não. Repetição no mesmo ponto indica causa estrutural: acumulação de calcário na parede do tubo (água dura de Trás-os-Montes), inclinação insuficiente da tubagem (mínimo 2 %), objeto retido na curva do sifão, ou problema na ventilação da coluna. Repetir ventosa ou químicos só piora a situação. Recomendamos diagnóstico com câmara para localizar a causa antes de nova intervenção.',
  },
  {
    question: 'A sanita está a transbordar, o que faço imediatamente?',
    answer:
      'Não volte a puxar o autoclismo. Feche a torneira de alimentação da sanita (válvula de parede, sentido horário). Retire tapetes e objetos do chão. Se houver produtos químicos aplicados, mantenha a janela aberta e avise o técnico. Contacte a nossa equipa: descrevemos os sintomas por telefone, deslocamos o mais rápido possível e entregamos orçamento por escrito antes de iniciar o trabalho.',
  },
  {
    question: 'Qual a diferença entre sanita entupida e esgoto entupido?',
    answer:
      'Sanita entupida: bloqueio localizado na sanita ou no sifão, afecta apenas este aparelho, resolve-se com mola eléctrica ou ventosa pneumática. Esgoto entupido: bloqueio na coluna principal ou ramal exterior, afecta várias sanitas, ralos e lava-loiças ao mesmo tempo, exige hidrojato profissional ou inspeção com câmara. O refluxo noutros pontos ou caixas de visita a transbordar são sinais claros de problema no esgoto, não na sanita.',
  },
  {
    question: 'Sanita entupida com papel higiénico, quanto tempo demora a resolver?',
    answer:
      'Para bloqueio por papel higiénico acumulado na curva do sifão, a nossa equipa resolve habitualmente em 30-60 minutos com mola eléctrica manual ou ventosa pneumática profissional. Inclui teste de escoamento com descarga completa. Custo indicativo: 1 hora de mão de obra (65 €) + deslocação por zona Z1-Z6 (15 € a 65 €). Orçamento por escrito antes da intervenção, sem surpresas.',
  },
  {
    question: 'Sanita entupida por brinquedo ou objeto sólido, é grave?',
    answer:
      'Pode ser. Objetos sólidos (brinquedos, escovas, tampas) podem ficar presos na curva do sifão e exigir remoção mecânica com mola eléctrica ou desmontagem parcial da sanita. Não puxe o autoclismo — a pressão pode empurrar o objeto para a coluna, agravando o problema. Contacte a nossa equipa: 928 484 451. Orçamento por escrito antes da intervenção.',
  },
  {
    question: 'Como desentupir sanita entupida com toalhitas?',
    answer:
      'Toalhitas (mesmo as «biodegradáveis») formam nós compactos que não se dissolvem como papel higiénico. Não use ventosa — empurra o nó mais fundo. A nossa equipa usa mola eléctrica profissional e, em casos persistentes, hidrojato de alta pressão. Se o problema é recorrente, recomendamos diagnóstico com câmara para confirmar que a tubagem não tem obstrução estrutural subjacente. Ligue 928 484 451.',
  },
  {
    question: 'O orçamento por escrito para sanita entupida tem custo?',
    answer:
      'Não. A estimativa por telefone ou WhatsApp, quando há fotos ou vídeo do problema, é gratuita e sem compromisso. O orçamento por escrito é entregue após diagnóstico presencial, antes de qualquer intervenção, e detalhado: mão de obra 65 €/h, deslocação por zona Z1-Z6, materiais se aplicáveis. Só avança com a sua confirmação, sem surpresas na fatura.',
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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://canalizador-norte-reparos.pt/#localbusiness',
  name: 'Norte Reparos',
  alternateName: 'Norte Reparos Canalizador',
  telephone: '+351 928 484 451',
  email: 'geral@canalizador-norte-reparos.pt',
  url: 'https://canalizador-norte-reparos.pt/sanita-entupida',
  image: 'https://canalizador-norte-reparos.pt/og-image.jpg',
  logo: 'https://canalizador-norte-reparos.pt/logo.png',
  foundingDate: '2014',
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Dinheiro, Transferência, MB Way, Multibanco',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Macedo de Cavaleiros',
    addressRegion: 'Trás-os-Montes',
    addressCountry: 'PT',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Trás-os-Montes' },
    { '@type': 'City', name: 'Macedo de Cavaleiros' },
    { '@type': 'City', name: 'Bragança' },
    { '@type': 'City', name: 'Vila Real' },
    { '@type': 'City', name: 'Mirandela' },
    { '@type': 'City', name: 'Chaves' },
    { '@type': 'City', name: 'Miranda do Douro' },
    { '@type': 'City', name: 'Vinhais' },
    { '@type': 'City', name: 'Mogadouro' },
    { '@type': 'City', name: 'Freixo de Espada à Cinta' },
    { '@type': 'City', name: 'Lamego' },
    { '@type': 'City', name: 'Peso da Régua' },
    { '@type': 'City', name: 'Vimioso' },
    { '@type': 'City', name: 'Alfândega da Fé' },
    { '@type': 'City', name: 'Carrazeda de Ansiães' },
    { '@type': 'City', name: 'Vila Flor' },
    { '@type': 'City', name: 'Torre de Moncorvo' },
    { '@type': 'City', name: 'Valpaços' },
  ],
  knowsAbout: [
    'Desentupimento de sanita',
    'Diagnóstico de bloqueio de sanita',
    'Mola elétrica profissional',
    'Hidrojato de alta pressão',
    'Ventosa pneumática',
    'Inspeção com câmara',
    'Remoção de objeto preso',
    'Sanita entupida com papel higiénico',
    'Sanita entupida com brinquedo',
    'Sanita entupida com toalhitas',
    'Refluxo entre aparelhos',
    'Coluna de esgoto entupida',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00',
      validFrom: '2026-01-01',
      validThrough: '2026-12-31',
    },
  ],
  sameAs: [
    'https://eletricista-norte-reparos.pt',
    'https://canalizador-urgente.pt',
    'https://eletricista-urgente.pt',
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como Diagnosticar uma Sanita Entupida Antes de Chamar o Canalizador',
  description:
    'Passo a passo para identificar sinais de sanita entupida, distinguir bloqueio local vs. problema na coluna e decidir quando chamar a nossa equipa em Trás-os-Montes.',
  totalTime: 'PT15M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    minValue: 15,
    maxValue: 240,
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Verificar se só a sanita está lenta',
      text: 'Abra todas as torneiras e puxe o autoclismo. Anote quais pontos estão lentos. Se só esta sanita está lenta, é bloqueio local. Se outros ralos também estão, é problema na coluna.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Detetar refluxo entre aparelhos',
      text: 'Se a água subir no ralo do chão quando descarrega a sanita, ou se a sanita refluir quando abre uma torneira, o entupimento está na coluna partilhada.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Avaliar cheiro persistente',
      text: 'Cheiro a esgoto que não passa em 24 h significa bloqueio parcial ou fissura. Não use sprays mascaradores — o problema vai agravar.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Verificar queda de objeto',
      text: 'Se caiu brinquedo, escova ou produto higiénico, não puxe o autoclismo — desligue a torneira de alimentação da sanita junto à parede e contacte a nossa equipa.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Tentar ventosa em bloqueio ligeiro',
      text: 'Use ventosa apropriada para sanita, com vedação completa sobre a saída. Faça movimentos firmes, sem pancadas. NÃO misture produtos químicos.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Contactar a equipa se persistir',
      text: 'Após 2 métodos caseiros falhados, contacte a nossa equipa: 928 484 451. Orçamento por escrito antes de qualquer intervenção. Custo indicativo Z1-Z6: 15 € a 65 € deslocação + 65 €/h mão-de-obra.',
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Desentupimento de sanita em Trás-os-Montes',
  description:
    'Diagnóstico e desentupimento de sanita em Trás-os-Montes, com orçamento por escrito antes de qualquer intervenção.',
  serviceType: 'Desentupimento de sanita',
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
  datePublished: '2026-08-19',
  dateModified: '2026-09-16',
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sanita Entupida: 7 Sinais de Alerta, 5 Métodos Profissionais e Preços por Zona',
  description:
    'Guia completo sobre sanita entupida em Trás-os-Montes: 7 sinais para parar as tentativas caseiras, 5 métodos profissionais, 3 casos reais (Z1/Z3/Z5) e preços por zona Z1-Z6.',
  inLanguage: 'pt-PT',
  datePublished: '2026-08-19',
  dateModified: '2026-09-16',
  author: {
    '@type': 'Organization',
    name: 'Norte Reparos',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Norte Reparos',
  },
};

export default function SanitaEntupida() {
  const whatsappMessage = encodeURIComponent(
    'Olá, tenho uma sanita entupida e pretendo pedir um orçamento. Podem ajudar?',
  );

  return (
    <>
      <Helmet>
        <title>Sanita Entupida: 7 Sinais de Alerta e Preço Por Zona (2026) | Norte Reparos</title>
        <meta
          name="description"
          content="Sanita entupida em Trás-os-Montes? 7 sinais para parar as tentativas caseiras, 5 métodos profissionais, 3 casos reais e preços por zona Z1-Z6 (15 € a 65 € deslocação + 65 €/h). Orçamento por escrito antes da intervenção. Ligue +351 928 484 451."
        />
        <meta
          name="keywords"
          content="sanita entupida, sanita entope, desentupir sanita, sanita não desce, sanita a transbordar, canalizador sanita, sanita entupida com papel, sanita entupida com brinquedo, sanita entupida com toalhitas, sanita entupida repetida, sanita entupida Trás-os-Montes, preço desentupir sanita"
        />
        <link rel="canonical" href="https://canalizador-norte-reparos.pt/sanita-entupida" />
        <meta property="og:title" content="Sanita Entupida: 7 Sinais de Alerta e Preço Por Zona (2026)" />
        <meta
          property="og:description"
          content="7 sinais para parar as tentativas caseiras, 5 métodos profissionais, 3 casos reais e preços por zona. Orçamento por escrito antes da intervenção. Ligue +351 928 484 451."
        />
        <meta property="og:url" content="https://canalizador-norte-reparos.pt/sanita-entupida" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="pt_PT" />
        <meta property="og:site_name" content="Norte Reparos" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sanita Entupida: 7 Sinais de Alerta e Preço Por Zona (2026)" />
        <meta
          name="twitter:description"
          content="Sanita entupida em Trás-os-Montes? 7 sinais de alerta, 5 métodos profissionais e preços por zona Z1-Z6."
        />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
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
            <p className="mb-4 max-w-3xl text-xl text-blue-50">
              Diagnóstico da causa, desobstrução adequada à tubagem e verificação do escoamento.
            </p>
            <p className="mb-8 max-w-3xl text-lg text-blue-100">
              A nossa equipa responde a uma <strong>sanita entupida</strong> com orçamento por escrito
              antes de qualquer intervenção, sem surpresas na fatura. Mão de obra 65 €/h e
              deslocação tabelada por zona rodoviária.
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
                Uma <strong>sanita entupida</strong> pode começar com escoamento lento, borbulhar
                ou subida do nível da água. Se a água continuar a subir, não volte a puxar o
                autoclismo: feche a torneira de alimentação da sanita e proteja o chão. Repetir a
                descarga pode transformar uma obstrução localizada num transbordamento.
              </p>
              <p className="mb-5 text-lg text-gray-700">
                Quando não foram usados produtos químicos, uma ventosa própria para sanita é a
                primeira tentativa de baixo risco. Garanta uma vedação completa sobre a saída e
                faça movimentos firmes. Não use arame rígido nem objetos improvisados: podem
                riscar a loiça, ficar presos ou empurrar a obstrução para a coluna.
              </p>
              <p className="mb-8 text-lg text-gray-700">
                Se caiu um objeto, há refluxo noutros ralos ou a <strong>sanita entupida</strong>
                volta ao mesmo estado, o problema pode estar além do sifão. Nestes casos, a nossa
                equipa confirma o atendimento por telefone, avalia o ponto de bloqueio e
                apresenta o orçamento antes de iniciar o trabalho.
              </p>

              <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Não misture produtos químicos</h3>
                <p className="text-gray-800">
                  Soda cáustica, lixívia, ácidos e desentupidores diferentes podem reagir entre si,
                  libertar gases perigosos e provocar queimaduras. Se já aplicou um produto,
                  mantenha o espaço ventilado e avise a nossa equipa antes da intervenção.
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

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Como evitar que a sanita volte a entupir
            </h2>
            <p className="mb-6 max-w-3xl text-lg text-gray-700">
              A maioria dos casos de <strong>sanita entupida</strong> recorrente tem causas
              conhecidas e evitáveis. Antes de repetir produtos ou forçar a descarga, reveja estes
              pontos com a nossa equipa.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <ul className="space-y-3 rounded-xl border border-gray-200 p-6 text-gray-700">
                <li>• Não deite toalhitas, cotonetes, pensos ou fio dental na sanita — mesmo as
                  rotuladas como «biodegradáveis» entopem a coluna em Trás-os-Montes.</li>
                <li>• Limite o papel higiénico a pequenas quantidades por descarga em casas com
                  tubagem antiga.</li>
                <li>• Não use a sanita como caixote do lixo (cabelos, areias de gato, restos de
                  comida).</li>
                <li>• Verifique periodicamente o estado da caixa de inspeção, se existir, e a
                  ventilação da coluna.</li>
              </ul>
              <ul className="space-y-3 rounded-xl border border-gray-200 p-6 text-gray-700">
                <li>• Evite produtos químicos agressivos: podem danificar juntas e empurrar a
                  obstrução mais fundo.</li>
                <li>• Em caso de queda de objeto, não puxe o autoclismo: desligue a torneira de
                  alimentação da sanita.</li>
                <li>• Se a sanita entope com frequência, peça um diagnóstico: o problema pode estar
                  na inclinação da tubagem ou na coluna de esgoto.</li>
                <li>• Confirme o estado da ventilação primária e secundária do edifício antes de
                  associar a sanita a um «defeito».</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              🚫 Sanita Entupida: O Que NÃO Fazer (e Porquê)
            </h2>
            <p className="mb-6 max-w-3xl text-lg text-gray-700">
              Antes de tentar resolver uma <strong>sanita entupida</strong>, saiba o que <em>não</em> fazer.
              Estas ações pioram o bloqueio, danificam a sanita ou criam perigo para si e para a nossa equipa.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <ul className="space-y-3 rounded-xl border border-gray-200 p-6 text-gray-700">
                <li><strong>❌ Usar soda cáustica em pó ou granulado.</strong> Reage violentamente com a água e pode salpicar a pele e os olhos. Se a sanita já tem produto aplicado, avise o técnico antes da intervenção.</li>
                <li><strong>❌ Insistir com a descarga várias vezes seguidas.</strong> A sanita vai transbordar, inundar a casa de banho e danificar o teto do andar inferior. Dano típico: 500-2 000 €.</li>
                <li><strong>❌ Usar arame rígido, cabide ou varetas improvisadas.</strong> Risca a porcelana, pode ficar preso na curva do sifão e empurra a obstrução para a coluna. Remoção posterior: 150-300 €.</li>
              </ul>
              <ul className="space-y-3 rounded-xl border border-gray-200 p-6 text-gray-700">
                <li><strong>❌ Misturar desentupidores diferentes.</strong> Lixívia + ácido ou Destop + soda libertam gases tóxicos que podem causar queimaduras químicas e intoxicação.</li>
                <li><strong>❌ Abrir tampas de caixa de visita sem proteção.</strong> Pode haver gases concentrados ou refluxo de esgoto. Use luvas e ventile o espaço; se houver refluxo activo, contacte a nossa equipa.</li>
                <li><strong>❌ Adiar a chamada por «tentar mais um produto».</strong> A sanita entupida repetida com refluxo entre aparelhos é problema na coluna, não na sanita — exige mola elétrica ou hidrojato profissional.</li>
              </ul>
            </div>
            <div className="mt-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Alternativa segura</h3>
              <p className="text-gray-800">
                Feche a torneira de alimentação da sanita junto à parede, proteja o chão e contacte a nossa equipa. Descrevemos os sintomas por telefone, avaliamos se é bloqueio local ou na coluna e entregamos orçamento por escrito antes de qualquer intervenção.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              📋 Boletim de Diagnóstico: Bloqueio Local ou Problema na Coluna?
            </h2>
            <p className="mb-8 max-w-3xl text-lg text-gray-700">
              Antes de chamar, responda a estas 6 perguntas. Ajuda a perceber se o problema está só na <strong>sanita entupida</strong> ou se é mais fundo na tubagem. Trazer as respostas acelera o diagnóstico e baixa o custo da intervenção.
            </p>
            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <li className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">1. Quantos pontos estão lentos?</h3>
                <p className="text-gray-700">Só esta sanita → bloqueio local. Outras sanitas, ralos ou lava-loiças → coluna ou ramal exterior.</p>
              </li>
              <li className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">2. Há refluxo entre aparelhos?</h3>
                <p className="text-gray-700">Puxar a sanita e o ralo do chão borbulha → coluna comum saturada, exige hidrojato.</p>
              </li>
              <li className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">3. A caixa de visita transborda?</h3>
                <p className="text-gray-700">Caixa de inspecção cheia ou com refluxo → ramal exterior ou fossa séptica (Z rural).</p>
              </li>
              <li className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">4. Cheiro a esgoto persiste há mais de 24h?</h3>
                <p className="text-gray-700">Indica obstrução que retém água estagnada. Pode coincidir com entupimento parcial.</p>
              </li>
              <li className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">5. O problema coincidiu com chuva forte?</h3>
                <p className="text-gray-700">Em cave ou rés-do-chão, sugere infiltração ou ramal exterior saturado. Verificar telhado e caleiras.</p>
              </li>
              <li className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">6. A sanita entope com frequência?</h3>
                <p className="text-gray-700">Mais do que uma vez por mês → causa estrutural (calcário, inclinação, ventilação). Pedir diagnóstico com câmara.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">🔧 Casos Reais em Trás-os-Montes</h2>
            <p className="mb-8 max-w-3xl text-lg text-gray-700">
              Três exemplos reais, anonimizados, com preços conformes à <strong>tabela de zonas Z1-Z6</strong> e mão de obra a 65 €/h. Todos os valores foram discriminados em fatura com NIF e descrição do trabalho.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Caso 1 · Macedo de Cavaleiros (Z1)</h3>
                <p className="mb-3 text-gray-700"><strong>Sintoma:</strong> sanita do rés-do-chão entope há 2 dias, água sobe lentamente mas não transborda. Ventosa caseira aplicada uma vez sem resultado.</p>
                <p className="mb-3 text-gray-700"><strong>Diagnóstico:</strong> bloqueio na curva do sifão por papel higiénico acumulado + pequena obstrução por calcário na parede do tubo (água dura).</p>
                <p className="mb-3 text-gray-700"><strong>Intervenção (1 h):</strong> mola elétrica manual + verificação do escoamento com descarga completa.</p>
                <p className="text-gray-700"><strong>Total:</strong> 15 € (Z1) + 65 €/h × 1 = <strong>80 €</strong> · orçamento por escrito entregue no local antes da intervenção.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Caso 2 · Bragança (Z3)</h3>
                <p className="mb-3 text-gray-700"><strong>Sintoma:</strong> apartamento T2, sanita entope com regularidade (3× em 2 meses) e ralo do chão da casa de banho borbulha quando se descarrega a sanita.</p>
                <p className="mb-3 text-gray-700"><strong>Diagnóstico:</strong> refluxo entre aparelhos confirma problema na coluna partilhada do prédio. Inspeção com câmara: nó de toalhitas a 2 m do sifão.</p>
                <p className="mb-3 text-gray-700"><strong>Intervenção (2 h):</strong> mola elétrica profissional (cabo 32 mm) para fragmentar o nó + teste de escoamento + recomendação de filtro no ralo do chão.</p>
                <p className="text-gray-700"><strong>Total:</strong> 35 € (Z3) + 65 €/h × 2 = <strong>165 €</strong> · fatura detalhada com NIF, antes do IVA.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Caso 3 · Freixo de Espada à Cinta (Z5)</h3>
                <p className="mb-3 text-gray-700"><strong>Sintoma:</strong> sanita principal entope 4 vezes em 2 meses. Repetição levantou suspeita de problema estrutural, não pontual.</p>
                <p className="mb-3 text-gray-700"><strong>Diagnóstico (câmara):</strong> acumulação de calcário na parede do tubo (água dura) + pequena obstrução por raízes na junta do ramal exterior, a 6 m da sanita.</p>
                <p className="mb-3 text-gray-700"><strong>Intervenção (3 h):</strong> raspagem mecânica do calcário + remoção de raízes com mola elétrica + teste de estanqueidade.</p>
                <p className="text-gray-700"><strong>Total:</strong> 55 € (Z5) + 65 €/h × 3 = <strong>250 €</strong> · fatura com NIF e relatório descritivo para arquivo do cliente.</p>
              </div>
            </div>
            <div className="mt-8 rounded-lg border-l-4 border-blue-700 bg-gray-50 p-6">
              <p className="m-0 text-gray-700">
                <strong>Equipa Norte Reparos</strong> · 928 484 451 · <a href="mailto:geral@canalizador-norte-reparos.pt">geral@canalizador-norte-reparos.pt</a> · Macedo de Cavaleiros · Trás-os-Montes · Mais de uma década de experiência em desentupimento de sanita.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">📝 Sanita Entupida: Termos e Pesquisas Relacionadas</h2>
            <p className="mb-6 max-w-3xl text-lg text-gray-700">
              Os clientes usam formulações diferentes para descrever o mesmo problema. Esta página cobre as variantes mais comuns — se chegou aqui através de uma destas pesquisas, está no sítio certo.
            </p>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-1 text-base text-gray-700 md:grid-cols-2" style={{ listStyle: 'none', padding: 0 }}>
              <li>Sanita entupida o que fazer</li>
              <li>Sanita entupida como desentupir</li>
              <li>Sanita entupida sinais</li>
              <li>Sanita entupida preço</li>
              <li>Sanita entupida orçamento</li>
              <li>Sanita entupida na casa de banho</li>
              <li>Sanita entupida com papel higiénico</li>
              <li>Sanita entupida com brinquedo</li>
              <li>Sanita entupida com toalhitas</li>
              <li>Sanita entupida com cotonete</li>
              <li>Sanita entupida que não desce</li>
              <li>Sanita entupida a transbordar</li>
              <li>Sanita entupida repetida</li>
              <li>Sanita entupida Trás-os-Montes</li>
              <li>Canalizador para sanita entupida</li>
              <li>Quanto custa desentupir sanita</li>
              <li>Desentupir sanita sem ventosa</li>
              <li>Desentupir sanita sozinho</li>
              <li>Empresa desentupimento sanitas</li>
              <li>Sanita entupida vs esgoto entupido</li>
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              Não encontra o seu caso específico? Ligue <a href="tel:+351 928 484 451">928 484 451</a> — orientamos a melhor abordagem consoante o sintoma exato e a zona onde se encontra.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h2 className="mb-3 text-lg font-bold uppercase tracking-wider text-gray-500">
                  Contacto
                </h2>
                <p className="text-xl font-bold text-gray-900">{ACTIVE_CONFIG.phone}</p>
                <p className="text-gray-700">Norte Reparos · Trás-os-Montes</p>
              </div>
              <div>
                <h2 className="mb-3 text-lg font-bold uppercase tracking-wider text-gray-500">
                  Zona de actuação
                </h2>
                <p className="text-gray-700">
                  Trás-os-Montes: Macedo de Cavaleiros, Bragança, Vila Real, Mirandela, Chaves,
                  Lamego e concelhos envolventes. Cobertura por zona rodoviária Z1 a Z6.
                </p>
              </div>
              <div>
                <h2 className="mb-3 text-lg font-bold uppercase tracking-wider text-gray-500">
                  Como trabalhamos
                </h2>
                <p className="text-gray-700">
                  Diagnóstico por telefone, orçamento por escrito antes da intervenção e
                  verificação do escoamento no final.
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Última atualização: 16 de setembro de 2026 · Norte Reparos · Trás-os-Montes.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Perguntas frequentes sobre sanita entupida</h2>
            <div className="space-y-5">
              {faqItems.map((item, idx) => (
                <article key={idx} className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-blue-800 py-14 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Precisa de diagnóstico para uma sanita entupida?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-50">
              Contacte-nos para confirmar o atendimento. A nossa equipa explica o próximo passo e
              entrega orçamento por escrito antes da intervenção.
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
