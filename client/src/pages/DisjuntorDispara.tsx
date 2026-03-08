import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmotionalHero from '@/components/EmotionalHero';
import PainPointSection from '@/components/PainPointSection';
import SolutionTimeline from '@/components/SolutionTimeline';
import EmergencyTestimonials from '@/components/EmergencyTestimonials';
import GuaranteeBox from '@/components/GuaranteeBox';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

export default function DisjuntorDispara() {
  useEffect(() => {
    document.title = "Disjuntor a Disparar Sempre? Resolvemos Hoje | Eletricista 24h";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Disjuntor dispara constantemente? Identificamos a causa e resolvemos hoje. Eletricista certificado. Ligue +351 932 321 892.');
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Porque é que o disjuntor dispara sempre?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Causas comuns: sobrecarga, curto circuito, aparelho avariado, disjuntor defeituoso, instalação antiga. Identificamos e resolvemos. Ligue +351 932 321 892."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto custa arranjar disjuntor que dispara?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Diagnóstico gratuito. Arranjos desde €80. Substituição disjuntor €120-200. Arranjo circuitos €150-400. Orçamento no local."
        }
      }
    ]
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <EmotionalHero
        painPoint="DISJUNTOR A DISPARAR"
        headline="Disjuntor Dispara Sempre? Identificamos a Causa"
        subheadline="Sabemos a frustração que sente. Liga o disjuntor, dispara logo. Sem eletricidade, vida parada, não sabe porquê. Resolvemos hoje."
        urgencyText="Eletricista disponível AGORA • Diagnóstico em 30 minutos"
        phone={ACTIVE_CONFIG.phone}
        whatsapp={ACTIVE_CONFIG.whatsappNumber}
        whatsappMessage="Olá! O meu disjuntor dispara constantemente. Preciso de ajuda!"
        ctaPrimary="RESOLVER HOJE"
        ctaSecondary="WhatsApp Urgente"
        responseTime="30 minutos"
      />

      <PainPointSection
        title="Sabemos a Frustração Que Está a Viver"
        subtitle="Um disjuntor que dispara constantemente não é só irritante. É vida paralisada e stress diário."
        empathyStatement="Já resolvemos milhares de problemas de disjuntores em Trás-os-Montes. Sabemos que cada disparo é frustração acumulada. Identificamos a causa e resolvemos definitivamente hoje."
        painPoints={[
          {
            icon: 'time',
            title: 'Frustração Constante',
            description: 'Liga o disjuntor, dispara em 5 minutos. Liga de novo, dispara outra vez. Ciclo infinito de frustração.',
            consequence: 'Stress acumulado. Não consegue usar a casa normalmente.'
          },
          {
            icon: 'trending',
            title: 'Vida Familiar Paralisada',
            description: 'Sem eletricidade não há nada. Sem TV, sem internet, sem aquecimento. Comida a estragar no frigorífico.',
            consequence: 'Impossível viver normalmente. Família toda afetada.'
          },
          {
            icon: 'money',
            title: 'Medo de Gastar Muito',
            description: 'Não sabe se é problema simples ou grave. Medo de chamar eletricista e gastar €500-1000. Adia a chamada.',
            consequence: 'Problema pode piorar. Risco de danos maiores e mais caros.'
          },
          {
            icon: 'alert',
            title: 'Não Sabe a Causa',
            description: 'Tentou desligar aparelhos, continua a disparar. Não sabe se é curto, sobrecarga ou disjuntor avariado.',
            consequence: 'Sentimento de impotência. Não sabe como resolver.'
          }
        ]}
      />

      <SolutionTimeline
        title="Como Identificamos e Resolvemos Hoje"
        subtitle="Diagnóstico profissional, causa identificada, problema resolvido."
        totalTime="1-3 horas"
        guaranteeText="Identificamos a causa ou não paga diagnóstico. Garantia total."
        steps={[
          {
            time: '0-10 min',
            title: 'Liga e Descreve',
            description: 'Atendemos, fazemos perguntas sobre quando dispara. Já temos pistas da causa.',
            icon: 'phone'
          },
          {
            time: '10-40 min',
            title: 'Chegamos Parranjados',
            description: 'Eletricista certificado chega com equipamento de teste. Pronto para diagnosticar.',
            icon: 'map'
          },
          {
            time: '40-90 min',
            title: 'Diagnóstico Completo',
            description: 'Testamos circuitos, medimos correntes, identificamos a causa exata. Explicamos tudo.',
            icon: 'wrench'
          },
          {
            time: '90-180 min',
            title: 'Problema Resolvido',
            description: 'Arranjamos ou substituímos o necessário. Testamos tudo. Disjuntor não dispara mais.',
            icon: 'check'
          }
        ]}
      />

      <EmergencyTestimonials
        title="Já Resolvemos Milhares de Disjuntores"
        subtitle="Clientes que recuperaram a eletricidade e paz de espírito."
        testimonials={[
          {
            name: 'Manuel Silva',
            city: 'Bragança',
            problem: 'Disjuntor a disparar',
            solution: 'Disjuntor disparava 10x por dia. Frustração total. Descobriram que era frigorífico avariado. Substituíram tomada, testaram. Nunca mais disparou!',
            timeframe: '1h30',
            rating: 5,
            verified: true
          },
          {
            name: 'Isabel Costa',
            city: 'Mirandela',
            problem: 'Disjuntor dispara sempre',
            solution: 'Não conseguia usar máquina de lavar. Disjuntor disparava logo. Descobriram sobrecarga no circuito. Instalaram circuito novo. Problema resolvido!',
            timeframe: '2 horas',
            rating: 5,
            verified: true
          },
          {
            name: 'António Pereira',
            city: 'Chaves',
            problem: 'Disjuntor defeituoso',
            solution: 'Disjuntor disparava sem razão. Testaram tudo, descobriram que o disjuntor estava avariado. Substituíram. Funciona perfeitamente agora!',
            timeframe: '1 hora',
            rating: 5,
            verified: true
          },
          {
            name: 'Lurdes Fernandes',
            city: 'Vila Real',
            problem: 'Curto circuito',
            solution: 'Disjuntor disparava constantemente. Descobriram curto numa tomada da cozinha. Arranjaram, testaram tudo. Excelente trabalho!',
            timeframe: '1h45',
            rating: 5,
            verified: true
          },
          {
            name: 'Jorge Santos',
            city: 'Macedo de Cavaleiros',
            problem: 'Sobrecarga elétrica',
            solution: 'Casa antiga, instalação fraca. Disjuntor disparava sempre. Reforçaram instalação, aumentaram potência. Agora aguenta tudo. Top!',
            timeframe: '3 horas',
            rating: 5,
            verified: true
          },
          {
            name: 'Conceição Alves',
            city: 'Mogadouro',
            problem: 'Disjuntor dispara noite',
            solution: 'Disjuntor disparava sempre à noite. Descobriram aquecedor com problema. Arranjaram, explicaram tudo. Muito profissionais!',
            timeframe: '1h30',
            rating: 5,
            verified: true
          }
        ]}
      />

      <GuaranteeBox
        title="Garantias de Resolução"
        subtitle="Identificamos a causa e resolvemos definitivamente. Garantia total."
        mainGuarantee="Identificamos a Causa ou Não Paga"
        phone={ACTIVE_CONFIG.phone}
        guarantees={[
          {
            icon: 'check',
            title: 'Diagnóstico Gratuito',
            description: 'Se não identificarmos a causa, não paga o diagnóstico. Só cobra se resolver.'
          },
          {
            icon: 'shield',
            title: 'Garantia 2 Anos',
            description: 'Todas as arranjos têm garantia de 2 anos. Se voltar a disparar, voltamos grátis.'
          },
          {
            icon: 'clock',
            title: 'Resolução no Dia',
            description: 'Na maioria dos casos resolvemos no mesmo dia. Eletricidade restaurada hoje.'
          },
          {
            icon: 'award',
            title: 'Certificação DGEG',
            description: 'Eletricistas certificados. Trabalho legal e segundo normas de segurança.'
          }
        ]}
      />

      {/* Common Causes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-gray-900">
            Causas Comuns de Disjuntor a Disparar
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Identificamos e resolvemos todas estas causas.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Sobrecarga',
                desc: 'Muitos aparelhos ligados ao mesmo tempo. Corrente excede capacidade do disjuntor. Solução: reforçar circuito.',
                icon: '⚡'
              },
              {
                title: 'Curto Circuito',
                desc: 'Fio descarnado toca em metal ou outro fio. Corrente dispara. Solução: identificar e arranjar curto.',
                icon: '🔥'
              },
              {
                title: 'Aparelho Avariado',
                desc: 'Frigorífico, máquina lavar ou outro aparelho com problema elétrico. Solução: identificar aparelho.',
                icon: '🔌'
              },
              {
                title: 'Disjuntor Defeituoso',
                desc: 'Disjuntor antigo ou avariado dispara sem razão. Solução: substituir disjuntor.',
                icon: '🔧'
              },
              {
                title: 'Instalação Antiga',
                desc: 'Fios antigos, isolamento degradado. Fugas de corrente. Solução: renovar instalação.',
                icon: '🏚️'
              },
              {
                title: 'Humidade',
                desc: 'Água ou humidade em tomadas, quadro ou fios. Causa fugas. Solução: secar e isolar.',
                icon: '💧'
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
                q: 'Porque é que o disjuntor dispara sempre?',
                a: 'Causas principais: 1) Sobrecarga - muitos aparelhos ligados. 2) Curto circuito - fio descarnado. 3) Aparelho avariado - frigorífico, máquina lavar. 4) Disjuntor defeituoso - antigo ou avariado. 5) Instalação antiga - fios degradados. 6) Humidade - água em tomadas. Ligue +351 932 321 892. Identificamos a causa exata com equipamento profissional.'
              },
              {
                q: 'Quanto custa arranjar?',
                a: 'Diagnóstico gratuito (só paga se resolver). Arranjos simples €80-120. Substituição disjuntor €120-200. Arranjo circuitos €150-400. Reforço instalação €300-800. Damos sempre orçamento no local antes de começar. Preço fixo, sem surpresas.'
              },
              {
                q: 'Posso forçar o disjuntor a ficar ligado?',
                a: 'NÃO! NUNCA force o disjuntor (fita-cola, arame, etc). O disjuntor dispara para PROTEGER a sua casa de incêndio. Forçar é extremamente perigoso e pode causar incêndio fatal. Se dispara, há um problema real que precisa ser resolvido por eletricista certificado.'
              },
              {
                q: 'Como saber qual aparelho causa o problema?',
                a: 'Teste: 1) Desligue TODOS os aparelhos das tomadas. 2) Ligue o disjuntor. 3) Se não disparar, ligue aparelhos um a um. 4) Quando disparar, identificou o aparelho. Se disparar mesmo sem aparelhos, é curto no circuito - ligue-nos para identificar.'
              },
              {
                q: 'Resolvem no mesmo dia?',
                a: 'Sim! Na maioria dos casos (80%) resolvemos no mesmo dia. Trazemos disjuntores, ferramentas e peças comuns. Casos complexos (renovar instalação) podem demorar 2-3 dias, mas fazemos arranjo temporária para ter eletricidade enquanto isso.'
              },
              {
                q: 'Dão garantia?',
                a: 'Sim! Garantia de 2 anos em todas as arranjos. Se o disjuntor voltar a disparar pela mesma causa, voltamos gratuitamente e resolvemos. Trabalho certificado e garantido.'
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
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Recupere a Eletricidade Hoje
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-semibold">
            Eletricista certificado disponível. Identificamos a causa. Resolvemos definitivamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={`tel:${ACTIVE_CONFIG.phone}`}
              className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-blue-600 bg-white hover:bg-gray-100 rounded-xl shadow-xl transition-all active:scale-95"
            >
              📞 {ACTIVE_CONFIG.phone}
            </a>
            <a
              href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá! O meu disjuntor dispara constantemente. Preciso de ajuda!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-xl transition-all active:scale-95"
            >
              💬 WhatsApp Urgente
            </a>
          </div>
          <p className="text-lg opacity-90">
            ✓ Diagnóstico Gratuito • ✓ Resolução no Dia • ✓ Garantia 2 Anos
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
