// Page SEO dédiée — "Sanita Entupida" (query money GSC 4 impr / 0 clics / pos 16.2)
// Query: "sanita entupida" (DFSEO vol=170, CPC=13.41€, score 2279.70) — T1-MONEY
// Verdict GSC 28j = GAP léger (WEAK) : la page existe, mais title bizarre, H1 absent du HTML pré-rendu,
// pas de SEOHeadEnhanced, schema FAQ runtime non pré-rendu. Renforcement ciblé.
// R12: site installation, PAS urgence. Urgência real = canalizador-urgente.pt (partner).
//        Disclaimer explicite "quando ligar 24h urgência vs quando agendar instalação".
// R4/R12: grille officielle PRICING.md (65€/h + Z1=15→Z6=65 + +50% noite/fim-de-semana/feriado).
// R145: zéro délai chiffré (pas "20 min", pas "60-70 min") — utiliser "sob orçamento".
// R5: zéro geoMidpoint — couverture large (AdministrativeArea Trás-os-Montes seulement).
// R11: équipement listado de forma genérica, sem claims de marca/modelo.
import { useEffect } from 'react';
import { useSite } from '@/contexts/SiteContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import FAQSection from '@/components/FAQSection';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { Phone, MessageCircle, MapPin, ShieldCheck, Wrench, AlertTriangle, CheckCircle2, Droplets } from 'lucide-react';

export default function SanitaEntupida() {
  const { config } = useSite();
  useEffect(() => {
    document.title = 'Sanita Entupida? Desentupimento Profissional | Desde 65€/h | Trás-os-Montes';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Sanita entupida em Trás-os-Montes? Desentupimento profissional com equipamento de alta pressão. Orçamento por escrito antes de qualquer intervenção. Desde 65€/h + deslocação por zona. Ligue +351 928 484 451.'
    );
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      'sanita entupida, desentupir sanita, sanita entupida tras-os-montes, desentupimento sanita, wc entupido, canalizador sanita entupida'
    );
  }, [config]);

  // Schema.org Service + FAQPage (aligné R5/R12/R4 + PRICING.md)
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desentupimento de Sanita em Trás-os-Montes',
    serviceType: 'Desentupimento de Sanita/WC',
    description:
      'Desentupimento profissional de sanita e WC em Trás-os-Montes, sem partir azulejos nem canos. Diagnóstico e orçamento por escrito antes de qualquer intervenção.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Norte Reparos - Canalizador Profissional',
      telephone: ACTIVE_CONFIG.phone,
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Desentupimento de Sanita',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desentupimento de Sanita (simples)',
          },
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'EUR',
            price: '65',
            unitText: 'hora',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desentupimento de Sanita (mecânico / alta pressão)',
          },
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'EUR',
            price: '65',
            unitText: 'hora',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Diagnóstico e limpeza completa do sifão e tubagem',
          },
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'EUR',
            price: '65',
            unitText: 'hora',
          },
        },
      ],
    },
  };

  // FAQPage propre (6 questions alignées intention "sanita entupida" + R12 + R145)
  const faqs = [
    {
      question: 'Como desentupir uma sanita entupida em Trás-os-Montes?',
      answer:
        'Para desentupir uma sanita com segurança e sem partir nada, contacte um canalizador profissional. A nossa equipa utiliza equipamento mecânico e máquinas de alta pressão adequadas ao diâmetro e ao tipo de entupimento, com diagnóstico visual sempre que necessário. Fazemos orçamento por escrito antes de qualquer intervenção. Ligue +351 928 484 451.',
    },
    {
      question: 'Quanto custa desentupir uma sanita?',
      answer:
        'O preço segue a tabela oficial Norte Reparos: 65 €/h de mão de obra + deslocação por zona (Z1=15 € até Z6=65 €), com majoração de +50 % à noite, fim de semana e feriado. Entupimentos simples resolvem-se normalmente numa única hora de intervenção; casos complexos (raízes, objeto sólido, colapso) são sempre sob orçamento por escrito após diagnóstico.',
    },
    {
      question: 'É preciso partir a sanita ou os azulejos para desentupir?',
      answer:
        'Não, na grande maioria dos casos. Trabalhamos pelo interior da tubagem com máquinas de alta pressão e ferramentas mecânicas adequadas. Só em situações excecionais (objeto grande preso, tubagem colapsada) poderá ser necessário desmontar a sanita — e avisamos sempre antes de avançar, com orçamento prévio.',
    },
    {
      question: 'Sanita entupida é caso de urgência 24h?',
      answer:
        'Depende. Se a sanita está a transbordar, o esgoto recua ou há água a alagar a casa, é urgência real — nesse caso, contacte o serviço de urgência 24h parceiro (canalizador-urgente.pt), que trata estes cenários num canal próprio. Se o entupimento é pontual e a sanita ainda não transborda, este serviço de desentupimento agendado é o indicado: orçamento por escrito, intervenção planeada, sem tarifa de urgência.',
    },
    {
      question: 'Porque é que a sanita entope vezes seguidas?',
      answer:
        'As causas mais comuns são papel higiénico em excesso, toalhitas (que não são biodegradáveis), objetos caídos, canos antigos com pouca inclinação, ou raízes. Fazemos inspeção completa para identificar a causa raiz e propomos solução definitiva — limpeza, correção de inclinação, ou substituição parcial da tubagem, sempre sob orçamento.',
    },
    {
      question: 'Posso tentar desentupir a sanita sozinho antes de ligar?',
      answer:
        'Sim, em entupimentos ligeiros. Tente primeiro a ventosa (10-15 movimentos firmes com a borracha bem assente no fundo). Se não resultar, despeje água quente (não a ferver) com detergente líquido e deixe atuar alguns minutos. Não use produtos químicos agressivos — podem danificar as tubagens e criar perigo para o técnico. Se após uma tentativa o problema persistir, contacte-nos para evitar piorar a situação.',
    },
  ];

  return (
    <>
      <SEOHeadEnhanced
        pageType="service"
        customTitle="Sanita Entupida? Desentupimento Profissional | Desde 65€/h | Trás-os-Montes"
        customDescription="Sanita entupida em Trás-os-Montes? Desentupimento profissional com equipamento de alta pressão. Orçamento por escrito antes de qualquer intervenção. Desde 65€/h + deslocação por zona. Ligue +351 928 484 451."
      />
      {/* Schema.org Service injecté en JSON-LD (cf. StructuredData.tsx gère LocalBusiness via useEffect ; on complète avec Service spécifique à cette page) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Header />

      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        {/* Hero section — H1 sémantique (aligné query + R12 disclaimer) */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sanita Entupida em <span className="text-orange-400">Trás-os-Montes</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl">
              Desentupimento profissional de sanita e WC com equipamento mecânico e máquinas de alta pressão.
              Orçamento por escrito antes de qualquer intervenção. Desde <strong>65&nbsp;€/h</strong> de mão de obra
              + deslocação por zona.
            </p>
            {/* R12 — disclaimer explicite urgence vs agendado */}
            <div className="bg-amber-100 text-amber-900 rounded-lg p-4 mb-8 max-w-3xl border-l-4 border-amber-500">
              <p className="font-semibold flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Sanita a transbordar ou esgoto a recuar?</strong> É urgência real — contacte primeiro o
                  serviço de urgência 24h parceiro (canalizador-urgente.pt). Este serviço é para entupimentos
                  pontuais, agendados, com orçamento prévio.
                </span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Pedir Orçamento: {ACTIVE_CONFIG.phone}
              </a>
              <a
                href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  'Olá, tenho a sanita entupida em Trás-os-Montes. Podem dar-me um orçamento?'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Orçamento

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
                Pedir orçamento por WhatsApp              </a>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Service details — méthode + équipement + zones */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Colonne gauche : méthode */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Como Desentupimos a Sua Sanita
                </h2>
                <div className="space-y-6 text-lg text-gray-700">
                  <p>
                    Quando a <strong>sanita entupida</strong> é o problema, começamos sempre por um
                    <strong> diagnóstico visual</strong>: tentamos a descarga, avaliamos o nível da água, e quando
                    necessário utilizamos <strong>câmara de inspeção</strong> para localizar o ponto exato do
                    entupimento — tudo pelo interior da tubagem, sem partir nada.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                    <Wrench className="w-6 h-6 text-blue-600" /> Processo de Trabalho
                  </h3>
                  <ol className="space-y-4 list-decimal pl-5">
                    <li>
                      <strong>Diagnóstico inicial:</strong> Inspeção visual e, se necessário, câmara para identificar
                      causa e localização do entupimento
                    </li>
                    <li>
                      <strong>Orçamento por escrito:</strong> Descrição da intervenção, materiais e prazo estimado
                      antes de qualquer trabalho
                    </li>
                    <li>
                      <strong>Desentupimento:</strong> Máquina de alta pressão ou ferramenta mecânica adequada ao
                      diâmetro e tipo de obstrução
                    </li>
                    <li>
                      <strong>Verificação:</strong> Teste de fluxo repetido para confirmar resolução completa
                    </li>
                    <li>
                      <strong>Recomendações:</strong> Conselho prático para evitar entupimentos futuros no mesmo
                      ponto
                    </li>
                  </ol>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-blue-600" /> Causas Mais Frequentes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Papel higiénico em excesso</strong> — acumula na curva do sifão e bloqueia o fluxo
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Toalhitas e produtos "biodegradáveis"</strong> — na prática não se dissolvem e criam
                        bloqueios difíceis
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Objetos caídos</strong> — brinquedos, escovas, produtos de higiene que descem
                        acidentalmente
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Tubagem antiga</strong> — pouca inclinação, juntas degradadas, ou raízes que
                        penetraram a canalização
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                    <Droplets className="w-6 h-6 text-blue-600" /> Equipamento Utilizado
                  </h3>
                  <p>
                    Utilizamos <strong>máquinas profissionais de alta pressão</strong>,{' '}
                    <strong>câmaras de inspeção</strong>,{' '}
                    <strong>ferramentas mecânicas adequadas a cada diâmetro</strong> e{' '}
                    <strong>produtos não agressivos</strong> que não danificam as tubagens nem o meio ambiente. Sem
                    marca/modelo específico — escolhemos o equipamento em função do problema concreto.
                  </p>
                </div>
              </div>

              {/* Colonne droite : pricing + zones + cross-link pilier */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Preços (tabela oficial)
                </h3>

                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Mão de obra</h4>
                      <span className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">
                        65 €/h
                      </span>
                    </div>
                    <p className="text-gray-600">
                      Tarifa horária do serviço de canalização (R12 — tabela oficial Norte Reparos).
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Deslocação por zona (Z1 → Z6)
                    </h4>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="bg-gray-50 px-2 py-1 rounded text-center"><strong>Z1</strong> · 15 €</div>
                      <div className="bg-gray-50 px-2 py-1 rounded text-center"><strong>Z2</strong> · 25 €</div>
                      <div className="bg-gray-50 px-2 py-1 rounded text-center"><strong>Z3</strong> · 35 €</div>
                      <div className="bg-gray-50 px-2 py-1 rounded text-center"><strong>Z4</strong> · 45 €</div>
                      <div className="bg-gray-50 px-2 py-1 rounded text-center"><strong>Z5</strong> · 55 €</div>
                      <div className="bg-gray-50 px-2 py-1 rounded text-center"><strong>Z6</strong> · 65 €</div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Distância rodoviária real desde Macedo de Cavaleiros (raio máximo ≈130 km).
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">
                        Majoração noite / fim de semana / feriado
                      </h4>
                      <span className="bg-amber-100 text-amber-800 font-bold px-4 py-2 rounded-full">
                        +50 %
                      </span>
                    </div>
                    <p className="text-gray-600">
                      Aplica-se à mão de obra e à deslocação. Orçamento por escrito antes de qualquer trabalho.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Casos variáveis</h4>
                    <p className="text-gray-600">
                      Raízes, objetos sólidos, colapsos de tubagem: sempre <strong>sob orçamento</strong> por
                      escrito, após diagnóstico no local.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    💡 <strong>Sem surpresas na fatura:</strong> orçamento por escrito antes de qualquer trabalho,
                    descrevendo a intervenção, os materiais e o prazo estimado.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-blue-600" /> Zonas de Atuação
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Macedo de Cavaleiros (Z1)', 'Mirandela (Z2)', 'Bragança (Z2)', 'Chaves (Z4)',
                    'Valpaços (Z4)', 'Vinhais (Z4)', 'Miranda do Douro (Z5)', 'Mogadouro (Z3)',
                    'Torre de Moncorvo (Z4)', 'Freixo de Espada à Cinta (Z5)'
                  ].map((city, idx) => (
                    <div key={idx} className="bg-gray-100 px-4 py-2 rounded-lg text-center text-sm">
                      {city}
                    </div>
                  ))}
                </div>

                {/* Cross-link vers pages pilier du même métier */}
                <div className="mt-8 border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Ver também — soluções complementares
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/desentupimentos" className="text-blue-600 hover:underline font-medium">
                        → Desentupimento geral (canos, esgotos, pias)
                      </a>
                    </li>
                    <li>
                      <a href="/blog/como-desentupir-sanita" className="text-blue-600 hover:underline font-medium">
                        → Como desentupir sanita (métodos caseiros)
                      </a>
                    </li>
                    <li>
                      <a href="/blog/sanita-entupida-o-que-fazer" className="text-blue-600 hover:underline font-medium">
                        → Sanita entupida: o que fazer antes de chamar o canalizador
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
=======
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
>>>>>>> 6a7095d986 (merge rebase CNR #264)
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* FAQ Section — alignée query 'sanita entupida' + R12 + R145 + 6 questions */}
        <section className="py-16 bg-gray-50">
          <FAQSection
            title="Perguntas Frequentes sobre Sanita Entupida"
            faqs={faqs}
          />
        </section>

        {/* CTA final — phone + WhatsApp */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Sanita Entupida? Peça Orçamento por Escrito
            </h2>
            <p className="text-xl md:text-2xl mb-8 font-semibold">
              Orçamento por escrito antes de qualquer intervenção. Trás-os-Montes, desde 65 €/h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 text-2xl px-12 py-6 font-black text-blue-600 bg-white hover:bg-gray-100 rounded-xl shadow-xl transition-all active:scale-95"
              >
                <Phone className="w-6 h-6" /> {ACTIVE_CONFIG.phone}
              </a>
              <a
                href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  'Olá, tenho a sanita entupida. Peço orçamento por favor.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-2xl px-12 py-6 font-black text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-xl transition-all active:scale-95"
              >
                <MessageCircle className="w-6 h-6" /> WhatsApp
              </a>
            </div>
            <p className="text-lg opacity-90">
              ✓ Orçamento por Escrito &nbsp;•&nbsp; ✓ Sem Partir Azulejos &nbsp;•&nbsp; ✓ Tabela Oficial 65 €/h
            </p>
=======
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
>>>>>>> 6a7095d986 (merge rebase CNR #264)
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 6a7095d986 (merge rebase CNR #264)
