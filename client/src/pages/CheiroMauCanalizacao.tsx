import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmotionalHero from '@/components/EmotionalHero';
import PainPointSection from '@/components/PainPointSection';
import SolutionTimeline from '@/components/SolutionTimeline';
import EmergencyTestimonials from '@/components/EmergencyTestimonials';
import GuaranteeBox from '@/components/GuaranteeBox';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

export default function CheiroMauCanalizacao() {
  useEffect(() => {
    document.title = "Cheiro Mau na Canalização? Eliminamos em 1 Hora | Norte Reparos";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Cheiro mau na canalização? Eliminamos a origem em 1 hora. Solução definitiva, não temporária. Ligue +351 928 484 451.');
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Como eliminar cheiro mau na canalização?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Identificamos a origem (sifão seco, entupimento, falta de ventilação). Limpamos, desentupimos ou reparamos. Eliminamos o cheiro definitivamente em 1 hora. Ligue +351 928 484 451."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto custa eliminar cheiro mau na canalização?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Soluções simples desde €60. Limpeza profunda €100-150. Reparações complexas €150-300. Orçamento gratuito."
        }
      }
    ]
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <EmotionalHero
        painPoint="CHEIRO MAU CANALIZAÇÃO"
        headline="Cheiro Mau Insuportável? Eliminamos a Origem"
        subheadline="Sabemos o embaraço que sente. Casa com mau cheiro, visitas constrangidas, ambientadores não resolvem. Eliminamos a causa hoje."
        urgencyText="Técnico disponível AGORA • Cheiro eliminado em 1 hora"
        phone={ACTIVE_CONFIG.phone}
        whatsapp={ACTIVE_CONFIG.whatsappNumber}
        whatsappMessage="Olá! Tenho cheiro mau na canalização. Preciso de ajuda!"
        ctaPrimary="ELIMINAR CHEIRO AGORA"
        ctaSecondary="WhatsApp Urgente"
        responseTime="30 minutos"
      />

      <PainPointSection
        title="Sabemos o Embaraço Que Está a Viver"
        subtitle="Cheiro mau na canalização não é só desagradável. É vergonha, insalubridade e stress constante."
        empathyStatement="Já eliminámos cheiros em centenas de casas em Trás-os-Montes. Sabemos que não é culpa sua. Identificamos a origem e eliminamos definitivamente em 1 hora."
        painPoints={[
          {
            icon: 'alert',
            title: 'Embaraço com Visitas',
            description: 'Visitas chegam, o cheiro está lá. Abre janelas, usa ambientadores, mas todos notam. Situação constrangedora.',
            consequence: 'Evita convidar pessoas. Isolamento social. Vergonha constante.'
          },
          {
            icon: 'trending',
            title: 'Casa Toda Cheira Mal',
            description: 'Começou na casa de banho, agora espalhou-se. Cozinha, quartos, sala. Roupa e cabelo ficam com cheiro.',
            consequence: 'Qualidade de vida destruída. Casa deixa de ser confortável.'
          },
          {
            icon: 'money',
            title: 'Gasta em Produtos Inúteis',
            description: 'Já gastou €100+ em desinfetantes, ambientadores, produtos milagrosos. Nada resolve. Cheiro volta sempre.',
            consequence: 'Dinheiro desperdiçado. Problema continua. Frustração aumenta.'
          },
          {
            icon: 'time',
            title: 'Preocupação com Saúde',
            description: 'Cheiro a esgoto pode ser gases tóxicos. Preocupação com saúde da família, especialmente crianças e idosos.',
            consequence: 'Risco real de problemas respiratórios e intoxicação.'
          }
        ]}
      />

      <SolutionTimeline
        title="Como Eliminamos o Cheiro em 1 Hora"
        subtitle="Identificamos a origem, não mascaramos. Solução definitiva."
        totalTime="1-2 horas"
        guaranteeText="Eliminamos o cheiro ou não paga. Garantia 30 dias."
        steps={[
          {
            time: '0-10 min',
            title: 'Liga e Descreve',
            description: 'Atendemos, fazemos perguntas sobre o cheiro (onde, quando, tipo). Já temos pistas da origem.',
            icon: 'phone'
          },
          {
            time: '10-40 min',
            title: 'Chegamos e Investigamos',
            description: 'Técnico chega com equipamento de deteção. Inspecionamos todos os pontos de canalização.',
            icon: 'map'
          },
          {
            time: '40-70 min',
            title: 'Identificamos e Resolvemos',
            description: 'Encontramos a origem (sifão seco, entupimento, falta ventilação). Reparamos ou limpamos.',
            icon: 'wrench'
          },
          {
            time: '70-90 min',
            title: 'Cheiro Eliminado',
            description: 'Testamos, desinfetamos, ventilamos. Cheiro desaparece. Damos dicas de prevenção.',
            icon: 'check'
          }
        ]}
      />

      <EmergencyTestimonials
        title="Já Eliminámos Cheiros em Centenas de Casas"
        subtitle="Famílias que recuperaram o conforto e dignidade."
        testimonials={[
          {
            name: 'Helena Pires',
            city: 'Bragança',
            problem: 'Cheiro mau casa de banho',
            solution: 'Cheiro horrível há semanas. Tentei tudo, nada funcionou. Descobriram que o sifão estava seco. Encheram, explicaram. Cheiro desapareceu! Simples assim.',
            timeframe: '45 minutos',
            rating: 5,
            verified: true
          },
          {
            name: 'Armando Costa',
            city: 'Mirandela',
            problem: 'Cheiro a esgoto',
            solution: 'Cheiro a esgoto insuportável na cozinha. Descobriram entupimento parcial no cano. Limparam profundamente. Casa voltou ao normal. Obrigado!',
            timeframe: '1 hora',
            rating: 5,
            verified: true
          },
          {
            name: 'Fátima Alves',
            city: 'Chaves',
            problem: 'Cheiro mau persistente',
            solution: 'Cheiro mau há meses. Outros canalizadores não resolveram. Estes descobriram falta de ventilação. Instalaram válvula. Problema resolvido definitivamente!',
            timeframe: '1h30',
            rating: 5,
            verified: true
          },
          {
            name: 'Joaquim Ribeiro',
            city: 'Vila Real',
            problem: 'Cheiro mau cozinha',
            solution: 'Cheiro horrível vinha do lava-louça. Descobriram acumulação de gordura nos canos. Limparam tudo com máquina. Cheiro desapareceu. Top!',
            timeframe: '1 hora',
            rating: 5,
            verified: true
          },
          {
            name: 'Rosa Santos',
            city: 'Macedo de Cavaleiros',
            problem: 'Cheiro insuportável',
            solution: 'Não conseguia receber visitas. Vergonha total. Vieram, encontraram o problema (sifão partido), substituíram. Casa cheira bem agora. Muito obrigada!',
            timeframe: '50 minutos',
            rating: 5,
            verified: true
          },
          {
            name: 'Alberto Mendes',
            city: 'Mogadouro',
            problem: 'Cheiro mau esgoto',
            solution: 'Cheiro a esgoto na garagem. Descobriram que era fossa séptica cheia. Limparam, resolveram. Serviço rápido e eficiente. Recomendo!',
            timeframe: '2 horas',
            rating: 5,
            verified: true
          }
        ]}
      />

      <GuaranteeBox
        title="Garantias de Eliminação"
        subtitle="Eliminamos a origem, não mascaramos. Solução definitiva garantida."
        mainGuarantee="Cheiro Eliminado ou Não Paga"
        phone={ACTIVE_CONFIG.phone}
        guarantees={[
          {
            icon: 'shield',
            title: 'Garantia 30 Dias',
            description: 'Se o cheiro voltar em 30 dias, voltamos gratuitamente e resolvemos.'
          },
          {
            icon: 'check',
            title: 'Solução Definitiva',
            description: 'Não mascaramos com produtos. Identificamos e eliminamos a origem do problema.'
          },
          {
            icon: 'clock',
            title: 'Resolução em 1-2h',
            description: 'Na maioria dos casos eliminamos o cheiro em 1-2 horas. Solução rápida.'
          },
          {
            icon: 'award',
            title: 'Equipamento Profissional',
            description: 'Usamos câmaras de inspeção e equipamento de limpeza profissional.'
          }
        ]}
      />

      {/* Common Causes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-gray-900">
            Causas Comuns de Cheiro Mau
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Identificamos e resolvemos todas estas causas.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Sifão Seco',
                desc: 'Água do sifão evaporou. Gases do esgoto sobem. Solução: encher o sifão.',
                icon: '💧'
              },
              {
                title: 'Entupimento Parcial',
                desc: 'Acumulação de resíduos nos canos. Bactérias causam cheiro. Solução: limpeza profunda.',
                icon: '🚿'
              },
              {
                title: 'Falta de Ventilação',
                desc: 'Canos sem ventilação adequada. Gases acumulam. Solução: instalar válvula.',
                icon: '🌬️'
              },
              {
                title: 'Sifão Partido',
                desc: 'Sifão rachado ou mal instalado. Gases escapam. Solução: substituir sifão.',
                icon: '🔧'
              },
              {
                title: 'Gordura Acumulada',
                desc: 'Gordura solidificada nos canos. Bactérias proliferam. Solução: limpeza química.',
                icon: '🧪'
              },
              {
                title: 'Fossa Séptica Cheia',
                desc: 'Fossa precisa limpeza. Gases voltam pelos canos. Solução: limpar fossa.',
                icon: '🚨'
              }
            ].map((cause, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all">
                <div className="text-4xl mb-3">{cause.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cause.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{cause.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-gray-900">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Como eliminar cheiro mau na canalização?',
                a: 'A solução correta depende da causa. Não use apenas produtos químicos - eles mascaram temporariamente. Ligue +351 928 484 451. Identificamos a origem (sifão seco, entupimento, falta ventilação) e eliminamos definitivamente. Solução em 1-2 horas.'
              },
              {
                q: 'Quanto custa eliminar o cheiro?',
                a: 'Soluções simples (encher sifão, limpeza básica) desde €60. Limpeza profunda com máquina €100-150. Reparações (substituir sifão, instalar ventilação) €150-300. Orçamento gratuito no local.'
              },
              {
                q: 'Porque é que o cheiro volta sempre?',
                a: 'Porque a causa não foi eliminada, apenas mascarada. Produtos químicos e ambientadores não resolvem. É preciso identificar a origem: sifão seco, entupimento, falta ventilação, sifão partido. Nós identificamos e resolvemos definitivamente.'
              },
              {
                q: 'Cheiro a esgoto é perigoso?',
                a: 'Sim, pode ser. Gases de esgoto contêm metano e sulfeto de hidrogênio (tóxicos). Podem causar dores de cabeça, náuseas, problemas respiratórios. Não ignore. Ligue para identificarmos e eliminarmos a origem.'
              },
              {
                q: 'Produtos caseiros funcionam?',
                a: 'Bicarbonato, vinagre, água quente podem ajudar temporariamente em casos simples. Mas se o cheiro persiste, a causa é mais profunda. Precisamos identificar e resolver a origem. Não perca tempo e dinheiro com soluções temporárias.'
              },
              {
                q: 'Dão garantia na eliminação do cheiro?',
                a: 'Sim! Garantia de 30 dias. Se o cheiro voltar, voltamos gratuitamente e resolvemos. Só cobramos se eliminarmos definitivamente o problema.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all">
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Recupere o Conforto da Sua Casa
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-semibold">
            Técnico disponível AGORA. Identificamos a origem. Eliminamos definitivamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={`tel:${ACTIVE_CONFIG.phone}`}
              className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-green-600 bg-white hover:bg-gray-100 rounded-xl shadow-xl transition-all active:scale-95"
            >
              📞 {ACTIVE_CONFIG.phone}
            </a>
            <a
              href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá! Tenho cheiro mau na canalização. Preciso de ajuda!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xl transition-all active:scale-95"
            >
              💬 WhatsApp Urgente
            </a>
          </div>
          <p className="text-lg opacity-90">
            ✓ Orçamento Gratuito • ✓ Solução em 1-2h • ✓ Garantia 30 Dias
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
