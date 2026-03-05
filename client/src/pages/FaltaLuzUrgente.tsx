import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmotionalHero from '@/components/EmotionalHero';
import PainPointSection from '@/components/PainPointSection';
import SolutionTimeline from '@/components/SolutionTimeline';
import EmergencyTestimonials from '@/components/EmergencyTestimonials';
import GuaranteeBox from '@/components/GuaranteeBox';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

export default function FaltaLuzUrgente() {
  useEffect(() => {
    document.title = "Falta de Luz em Casa? Resolvemos em 1 Hora | Eletricista 24h";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Falta de luz em casa? Casa às escuras? Eletricista em 20 minutos. Resolvemos urgente. Disponível 24h. Ligue +351 932 321 892.');
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que fazer quando falta luz em casa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1) Verifique se é só na sua casa ou na rua. 2) Verifique o disjuntor principal. 3) Ligue +351 932 321 892. Chegamos em 20 minutos e resolvemos."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto custa reparar falta de luz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Diagnóstico gratuito. Reparações desde €80. Problema no quadro €150-300. Problema na instalação €200-500. Orçamento no local."
        }
      }
    ]
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <EmotionalHero
        painPoint="FALTA DE LUZ URGENTE"
        headline="Falta de Luz? Resolvemos em 1 Hora"
        subheadline="Sabemos o pânico que sente. Casa às escuras, crianças assustadas, não sabe o que fazer. Eletricista a caminho."
        urgencyText="Eletricista disponível AGORA • Luz restaurada em 1 hora"
        phone={ACTIVE_CONFIG.phone}
        whatsapp={ACTIVE_CONFIG.whatsappNumber}
        whatsappMessage="Olá! Falta de luz em casa! Preciso de eletricista urgente!"
        ctaPrimary="RESOLVER AGORA"
        ctaSecondary="WhatsApp URGENTE"
        responseTime="20 minutos"
      />

      <PainPointSection
        title="Sabemos o Pânico Que Está a Sentir"
        subtitle="Falta de luz não é só inconveniente. É pânico, insegurança e vida paralisada."
        empathyStatement="Já resolvemos centenas de faltas de luz em Trás-os-Montes. Sabemos que é uma emergência real, especialmente à noite. Chegamos em 20 minutos, identificamos, resolvemos."
        painPoints={[
          {
            icon: 'alert',
            title: 'Pânico e Medo',
            description: 'Casa toda às escuras. Crianças assustadas, idosos desorientados. Não consegue ver nada. Medo de tropeçar, cair.',
            consequence: 'Risco de acidentes. Família em pânico. Situação insustentável.'
          },
          {
            icon: 'time',
            title: 'Vida Completamente Parada',
            description: 'Sem luz não há nada. Sem TV, sem internet, sem aquecimento. Comida a estragar. Impossível viver.',
            consequence: 'Prejuízo financeiro. Desconforto extremo. Não pode ficar assim.'
          },
          {
            icon: 'trending',
            title: 'Não Sabe a Causa',
            description: 'Verificou o disjuntor, está ligado. Vizinhos têm luz. Não sabe o que é. Sentimento de impotência.',
            consequence: 'Não sabe se é grave ou simples. Medo de mexer e piorar.'
          },
          {
            icon: 'money',
            title: 'Medo de Gastar Muito',
            description: 'Não sabe se é reparação de €100 ou €1000. Medo de chamar eletricista à noite e pagar fortuna.',
            consequence: 'Adia a chamada. Família passa a noite às escuras. Inaceitável.'
          }
        ]}
      />

      <SolutionTimeline
        title="Como Restauramos a Luz em 1 Hora"
        subtitle="Resposta de emergência. Diagnóstico rápido, solução eficaz."
        totalTime="1-2 horas"
        guaranteeText="Luz restaurada ou não paga. Garantia total."
        steps={[
          {
            time: '0-5 min',
            title: 'Liga AGORA',
            description: 'Atendemos imediatamente. Fazemos perguntas para identificar causa provável. Eletricista sai já.',
            icon: 'phone'
          },
          {
            time: '5-25 min',
            title: 'Chegamos Rápido',
            description: 'Eletricista certificado chega em 20 minutos com equipamento de teste e ferramentas.',
            icon: 'map'
          },
          {
            time: '25-60 min',
            title: 'Identificamos o Problema',
            description: 'Testamos quadro, circuitos, instalação. Identificamos a causa exata da falta de luz.',
            icon: 'wrench'
          },
          {
            time: '60-90 min',
            title: 'Luz Restaurada',
            description: 'Reparamos o problema. Testamos tudo. Luz volta. Família tranquila novamente.',
            icon: 'check'
          }
        ]}
      />

      <EmergencyTestimonials
        title="Já Resolvemos Centenas de Emergências"
        subtitle="Famílias que recuperaram a luz e segurança."
        testimonials={[
          {
            name: 'Luísa Martins',
            city: 'Bragança',
            problem: 'Falta de luz noturna',
            solution: '22h, casa toda às escuras, bebé em casa. Pânico total! Atenderam logo, chegaram em 15 minutos. Descobriram disjuntor avariado. Substituíram. Luz de volta!',
            timeframe: '1 hora',
            rating: 5,
            verified: true
          },
          {
            name: 'Rodrigo Sousa',
            city: 'Mirandela',
            problem: 'Sem luz urgente',
            solution: 'Falta de luz súbita. Vizinhos tinham luz, eu não. Descobriram problema no contador. Resolveram com EDP. Muito profissionais!',
            timeframe: '1h30',
            rating: 5,
            verified: true
          },
          {
            name: 'Catarina Lopes',
            city: 'Chaves',
            problem: 'Casa às escuras',
            solution: 'Inverno, frio, sem luz, sem aquecimento. Crianças com frio. Vieram urgente, descobriram curto no quadro. Repararam. Salvaram a nossa noite!',
            timeframe: '1h15',
            rating: 5,
            verified: true
          },
          {
            name: 'Vasco Fernandes',
            city: 'Vila Real',
            problem: 'Falta luz parcial',
            solution: 'Metade da casa sem luz. Descobriram problema no quadro. Repararam, testaram tudo. Trabalho rápido e eficiente. Top!',
            timeframe: '1 hora',
            rating: 5,
            verified: true
          },
          {
            name: 'Diana Costa',
            city: 'Macedo de Cavaleiros',
            problem: 'Emergência noturna',
            solution: 'Meia-noite, tudo às escuras, idosos em casa. Atenderam, vieram na hora. Descobriram fio partido. Repararam. Muito obrigada!',
            timeframe: '1h30',
            rating: 5,
            verified: true
          },
          {
            name: 'Tiago Alves',
            city: 'Mogadouro',
            problem: 'Sem luz súbita',
            solution: 'Luz foi abaixo de repente. Descobriram sobrecarga no circuito. Reforçaram, testaram. Problema resolvido. Excelente serviço!',
            timeframe: '1h45',
            rating: 5,
            verified: true
          }
        ]}
      />

      <GuaranteeBox
        title="Garantias de Emergência"
        subtitle="Resposta imediata. Luz restaurada ou não paga."
        mainGuarantee="Luz Restaurada ou Não Paga"
        phone={ACTIVE_CONFIG.phone}
        guarantees={[
          {
            icon: 'clock',
            title: 'Chegada em 20min',
            description: 'Em emergências, garantimos chegada em 20 minutos. Eletricista sai imediatamente.'
          },
          {
            icon: 'shield',
            title: 'Garantia 2 Anos',
            description: 'Todas as reparações têm garantia de 2 anos. Se voltar a falhar, voltamos grátis.'
          },
          {
            icon: 'check',
            title: 'Disponível 24/7',
            description: 'Atendemos 24h/7d incluindo madrugadas, fins de semana e feriados. Sempre disponíveis.'
          },
          {
            icon: 'award',
            title: 'Certificação DGEG',
            description: 'Eletricistas certificados. Trabalho legal e segundo normas de segurança.'
          }
        ]}
      />

      {/* Troubleshooting Guide */}
      <section className="py-16 px-4 bg-yellow-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-gray-900">
            ⚡ O Que Fazer AGORA (Enquanto Esperamos)
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Siga estes passos enquanto o eletricista está a caminho.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                step: '1',
                title: 'Verifique Se É Só Na Sua Casa',
                desc: 'Olhe pela janela. Vizinhos têm luz? Se sim, problema é na sua casa. Se não, é problema da EDP (ligue 800 506 506).',
                icon: '🏘️'
              },
              {
                step: '2',
                title: 'Verifique o Disjuntor Principal',
                desc: 'Vá ao quadro elétrico. O disjuntor principal (o maior) está ligado? Se não, tente ligar. Se disparar logo, NÃO force - há problema.',
                icon: '🔴'
              },
              {
                step: '3',
                title: 'Ligue-nos Imediatamente',
                desc: 'Ligue +351 932 321 892. Atendemos na hora. Damos mais instruções. Eletricista sai imediatamente para aí.',
                icon: '📞'
              },
              {
                step: '4',
                title: 'Use Lanternas (Não Velas)',
                desc: 'Use lanternas ou telemóvel para luz. NÃO use velas - risco de incêndio. Mantenha crianças e idosos seguros.',
                icon: '🔦'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border-2 border-yellow-400">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-400 text-white rounded-full flex items-center justify-center text-xl font-black">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.desc}</p>
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
                q: 'O que fazer quando falta luz em casa?',
                a: '1) Verifique se vizinhos têm luz. Se não, é problema da EDP (ligue 800 506 506). 2) Se só você não tem, vá ao quadro e verifique o disjuntor principal. 3) Se disjuntor está ligado mas não há luz, LIGUE +351 932 321 892 imediatamente. 4) Use lanternas, não velas. 5) Mantenha família segura. Chegamos em 20 minutos e resolvemos.'
              },
              {
                q: 'Quanto custa reparar falta de luz?',
                a: 'Diagnóstico gratuito. Reparações simples (disjuntor, fusível) €80-120. Problema no quadro €150-300. Problema na instalação €200-500. Reparações complexas €500-1000. Damos sempre orçamento antes de começar. Em emergências, garantimos luz restaurada.'
              },
              {
                q: 'Atendem emergências de madrugada?',
                a: 'SIM! Falta de luz é emergência real, especialmente com crianças, idosos ou no inverno. Atendemos 24h/7d incluindo madrugadas (1h, 2h, 3h...), fins de semana e feriados. Eletricista de emergência está sempre disponível. Ligue a qualquer hora.'
              },
              {
                q: 'Quanto tempo demora a resolver?',
                a: 'Chegamos em 20 minutos. Diagnóstico 15-30 minutos. Reparação 30-60 minutos. Total: 1-2 horas na maioria dos casos. Problemas complexos podem demorar mais, mas fazemos reparação temporária para ter luz enquanto resolvemos definitivamente.'
              },
              {
                q: 'Pode ser problema da EDP?',
                a: 'Sim, pode. Se TODOS os vizinhos também não têm luz, é problema da rede EDP. Ligue 800 506 506 (linha de avarias EDP). Se só você não tem luz, é problema na sua instalação - ligue-nos +351 932 321 892.'
              },
              {
                q: 'Dão garantia na reparação?',
                a: 'Sim! Garantia de 2 anos em todas as reparações. Se voltar a faltar luz pela mesma causa, voltamos gratuitamente e resolvemos. Trabalho certificado e garantido.'
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
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            NÃO Fique Mais Tempo Às Escuras!
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-semibold">
            Eletricista disponível AGORA. Chegamos em 20 minutos. Luz restaurada em 1 hora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={`tel:${ACTIVE_CONFIG.phone}`}
              className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-orange-600 bg-white hover:bg-gray-100 rounded-xl shadow-xl transition-all active:scale-95 animate-pulse"
            >
              📞 {ACTIVE_CONFIG.phone}
            </a>
            <a
              href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá! Falta de luz em casa! Preciso de eletricista urgente!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-xl transition-all active:scale-95"
            >
              💬 WhatsApp URGENTE
            </a>
          </div>
          <p className="text-lg opacity-90">
            ✓ Chegada em 20min • ✓ Luz Restaurada • ✓ Garantia 2 Anos
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
