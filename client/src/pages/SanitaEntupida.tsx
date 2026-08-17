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
              </a>
            </div>
          </div>
        </section>

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
            </div>
          </div>
        </section>

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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}