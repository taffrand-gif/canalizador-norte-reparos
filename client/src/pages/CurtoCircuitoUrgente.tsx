import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmotionalHero from '@/components/EmotionalHero';
import PainPointSection from '@/components/PainPointSection';
import SolutionTimeline from '@/components/SolutionTimeline';
import EmergencyTestimonials from '@/components/EmergencyTestimonials';
import GuaranteeBox from '@/components/GuaranteeBox';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

export default function CurtoCircuitoUrgente() {
  useEffect(() => {
    document.title = "Curto Circuito? Resolvemos em 1 Hora | Eletricista 24h";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Curto circuito em casa? Eletricista certificado em 20 minutos. Resolvemos com segurança. Disponível 24h. Ligue +351 932 321 892.');
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que fazer quando há um curto circuito?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1) Desligue o disjuntor principal. 2) Não toque em nada elétrico. 3) Ligue +351 932 321 892. 4) Afaste-se de cheiros a queimado. Chegamos em 20 minutos."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto custa reparar um curto circuito?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reparações simples desde €80. Substituição de componentes €120-250. Reparações complexas €250-500. Orçamento gratuito no local."
        }
      }
    ]
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <EmotionalHero
        painPoint="CURTO CIRCUITO URGENTE"
        headline="Curto Circuito? Resolvemos com Segurança AGORA"
        subheadline="Sabemos o medo que sente. Cheiro a queimado, faíscas, risco de incêndio. Não entre em pânico. Eletricista certificado a caminho."
        urgencyText="Eletricista disponível AGORA • Chegamos em 20 minutos"
        phone={ACTIVE_CONFIG.phone}
        whatsapp={ACTIVE_CONFIG.whatsappNumber}
        whatsappMessage="Olá! Tenho um curto circuito! Preciso de eletricista urgente!"
        ctaPrimary="RESOLVER AGORA"
        ctaSecondary="WhatsApp URGENTE"
        responseTime="20 minutos"
      />

      <PainPointSection
        title="Sabemos o Medo Que Está a Sentir"
        subtitle="Um curto circuito não é só inconveniente. É perigo real de incêndio e choque elétrico."
        empathyStatement="Já resolvemos centenas de curtos circuitos em Trás-os-Montes. Sabemos que é uma emergência real. Chegamos em 20 minutos, identificamos o problema, resolvemos com segurança."
        painPoints={[
          {
            icon: 'alert',
            title: 'Medo de Incêndio',
            description: 'Cheiro a queimado, faíscas, disjuntor a disparar. Medo real de incêndio elétrico. Família em perigo.',
            consequence: 'Risco de incêndio que pode destruir a casa e pôr vidas em perigo.'
          },
          {
            icon: 'trending',
            title: 'Casa Sem Eletricidade',
            description: 'Tudo parou. Sem luz, sem aquecimento, sem frigorífico. Comida a estragar, casa fria, escuridão à noite.',
            consequence: 'Vida familiar completamente paralisada. Impossível viver normalmente.'
          },
          {
            icon: 'time',
            title: 'Não Sabe O Que Fazer',
            description: 'Tentou ligar o disjuntor, dispara logo. Não sabe onde está o problema. Medo de tocar em algo e levar choque.',
            consequence: 'Sentimento de impotência. Medo de piorar a situação.'
          },
          {
            icon: 'money',
            title: 'Medo de Danos Maiores',
            description: 'Curto pode ter queimado aparelhos, TV, computador, frigorífico. Medo de prejuízos de milhares de euros.',
            consequence: 'Quanto mais tempo passa, maior o risco de danos em equipamentos.'
          }
        ]}
      />

      <SolutionTimeline
        title="Como Resolvemos o Curto em 1 Hora"
        subtitle="Resposta de emergência. Segurança primeiro, resolução rápida."
        totalTime="1-2 horas"
        guaranteeText="Resolvemos com segurança ou não paga. Certificado e garantido."
        steps={[
          {
            time: '0-5 min',
            title: 'Liga AGORA',
            description: 'Atendemos imediatamente. Damos instruções de segurança. Eletricista sai já para aí.',
            icon: 'phone'
          },
          {
            time: '5-25 min',
            title: 'Chegamos Rápido',
            description: 'Eletricista certificado chega em 20 minutos com equipamento de teste e segurança.',
            icon: 'map'
          },
          {
            time: '25-60 min',
            title: 'Identificamos o Problema',
            description: 'Testamos circuitos, identificamos a origem do curto. Isolamos o problema com segurança.',
            icon: 'wrench'
          },
          {
            time: '60-90 min',
            title: 'Reparação Segura',
            description: 'Reparamos ou substituímos componentes. Testamos tudo. Eletricidade restaurada com segurança.',
            icon: 'check'
          }
        ]}
      />

      <EmergencyTestimonials
        title="Já Resolvemos Centenas de Emergências Elétricas"
        subtitle="Famílias que recuperaram a segurança e eletricidade."
        testimonials={[
          {
            name: 'Pedro Martins',
            city: 'Bragança',
            problem: 'Curto circuito urgente',
            solution: 'Curto circuito à noite, cheiro a queimado, pânico total. Atenderam logo, chegaram em 15 minutos. Encontraram o problema, resolveram. Salvaram a nossa casa!',
            timeframe: '1 hora',
            rating: 5,
            verified: true
          },
          {
            name: 'Ana Sousa',
            city: 'Mirandela',
            problem: 'Disjuntor a disparar',
            solution: 'Disjuntor disparava constantemente. Descobriram curto numa tomada. Substituíram, testaram tudo. Problema resolvido. Muito profissionais!',
            timeframe: '1h30',
            rating: 5,
            verified: true
          },
          {
            name: 'Carlos Ferreira',
            city: 'Chaves',
            problem: 'Curto circuito grave',
            solution: 'Faíscas no quadro elétrico. Medo de incêndio. Vieram urgente, desligaram tudo com segurança, repararam. Trabalho impecável. Obrigado!',
            timeframe: '2 horas',
            rating: 5,
            verified: true
          },
          {
            name: 'Mariana Costa',
            city: 'Vila Real',
            problem: 'Sem luz urgente',
            solution: 'Casa toda sem luz, curto no quadro. Chegaram rápido, identificaram o problema, substituíram componente. Luz de volta. Top!',
            timeframe: '1h15',
            rating: 5,
            verified: true
          },
          {
            name: 'Rui Oliveira',
            city: 'Macedo de Cavaleiros',
            problem: 'Curto circuito noturno',
            solution: 'Meia-noite, curto circuito, casa às escuras. Atenderam, vieram na hora. Resolveram com segurança. Eletricistas de confiança!',
            timeframe: '1 hora',
            rating: 5,
            verified: true
          },
          {
            name: 'Sofia Lopes',
            city: 'Mogadouro',
            problem: 'Cheiro a queimado',
            solution: 'Cheiro a queimado vinha do quadro. Pânico! Vieram urgente, encontraram curto, repararam. Explicaram tudo. Muito obrigada!',
            timeframe: '1h30',
            rating: 5,
            verified: true
          }
        ]}
      />

      <GuaranteeBox
        title="Garantias de Segurança"
        subtitle="Eletricistas certificados. Trabalho seguro e garantido."
        mainGuarantee="Resolvemos com Segurança Total"
        phone={ACTIVE_CONFIG.phone}
        guarantees={[
          {
            icon: 'shield',
            title: 'Certificação DGEG',
            description: 'Todos os eletricistas são certificados pela DGEG. Trabalho legal e seguro.'
          },
          {
            icon: 'check',
            title: 'Garantia 2 Anos',
            description: 'Todas as reparações têm garantia de 2 anos. Peças e mão de obra.'
          },
          {
            icon: 'clock',
            title: 'Chegada em 20min',
            description: 'Em emergências elétricas, garantimos chegada em 20 minutos. Sempre disponíveis.'
          },
          {
            icon: 'award',
            title: 'Equipamento Profissional',
            description: 'Equipamento de teste e segurança profissional. Trabalho segundo normas.'
          }
        ]}
      />

      {/* Safety Tips */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-gray-900">
            ⚠️ Instruções de Segurança URGENTES
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Siga estas instruções enquanto esperamos chegar.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: '1. Desligue o Disjuntor Principal',
                desc: 'Vá ao quadro elétrico e desligue o disjuntor principal (o maior). Isto corta toda a eletricidade e evita incêndio.',
                icon: '🔴',
                urgent: true
              },
              {
                title: '2. NÃO Toque em Nada Elétrico',
                desc: 'Não toque em tomadas, interruptores, aparelhos ou fios. Risco de choque elétrico grave ou fatal.',
                icon: '⚡',
                urgent: true
              },
              {
                title: '3. Afaste-se de Cheiros a Queimado',
                desc: 'Se sentir cheiro a queimado ou ver fumo, saia da divisão. Pode ser início de incêndio. Ligue 112 se necessário.',
                icon: '🔥',
                urgent: true
              },
              {
                title: '4. Ligue-nos Imediatamente',
                desc: 'Ligue +351 932 321 892. Atendemos na hora. Damos mais instruções e enviamos eletricista urgente.',
                icon: '📞',
                urgent: false
              }
            ].map((tip, i) => (
              <div key={i} className={`p-6 rounded-xl border-2 ${tip.urgent ? 'bg-red-100 border-red-400' : 'bg-white border-gray-200'}`}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{tip.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-gray-900">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'O que fazer quando há um curto circuito?',
                a: '1) DESLIGUE IMEDIATAMENTE o disjuntor principal no quadro elétrico. 2) NÃO toque em nada elétrico. 3) LIGUE +351 932 321 892 - atendemos na hora. 4) Se sentir cheiro a queimado ou ver fumo, saia e ligue 112. 5) Afaste-se de aparelhos elétricos. Chegamos em 20 minutos e resolvemos com segurança.'
              },
              {
                q: 'Quanto custa reparar um curto circuito?',
                a: 'Reparações simples (tomada, interruptor) €80-120. Substituição de componentes no quadro €120-250. Reparações complexas (refazer circuitos) €250-500. Damos sempre orçamento gratuito no local antes de começar. Em emergências, garantimos segurança primeiro.'
              },
              {
                q: 'Curto circuito pode causar incêndio?',
                a: 'SIM! Curto circuito é uma das principais causas de incêndios domésticos. Gera calor extremo que pode incendiar fios, isolamentos e materiais próximos. Por isso é URGENTE desligar o disjuntor e chamar eletricista certificado. Não ignore sinais como cheiro a queimado ou faíscas.'
              },
              {
                q: 'Porque é que o disjuntor dispara sempre?',
                a: 'Causas comuns: 1) Curto circuito em algum ponto. 2) Sobrecarga (muitos aparelhos ligados). 3) Disjuntor defeituoso. 4) Fio descarnado tocando em metal. 5) Aparelho avariado. Não force o disjuntor a ficar ligado - é perigoso! Ligue-nos para identificarmos e resolvermos a causa.'
              },
              {
                q: 'Atendem emergências de madrugada?',
                a: 'SIM! Curtos circuitos são emergências reais com risco de incêndio. Atendemos 24h/7d incluindo madrugadas (2h, 3h, 4h...), fins de semana e feriados. Eletricista de emergência está sempre disponível. Ligue a qualquer hora.'
              },
              {
                q: 'São certificados pela DGEG?',
                a: 'Sim! Todos os nossos eletricistas são certificados pela DGEG (Direção Geral de Energia e Geologia). Trabalho legal, seguro e segundo normas. Emitimos certificado de instalação quando necessário.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all">
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            EMERGÊNCIA ELÉTRICA? Não Arrisque!
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-semibold">
            Eletricista certificado disponível AGORA. Chegamos em 20 minutos. Resolvemos com segurança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={`tel:${ACTIVE_CONFIG.phone}`}
              className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-red-600 bg-white hover:bg-gray-100 rounded-xl shadow-xl transition-all active:scale-95 animate-pulse"
            >
              📞 {ACTIVE_CONFIG.phone}
            </a>
            <a
              href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá! Tenho um curto circuito! Preciso de eletricista urgente!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-xl transition-all active:scale-95"
            >
              💬 WhatsApp URGENTE
            </a>
          </div>
          <p className="text-lg opacity-90">
            ✓ Certificado DGEG • ✓ Chegada em 20min • ✓ Garantia 2 Anos
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
