import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmotionalHero from '@/components/EmotionalHero';
import PainPointSection from '@/components/PainPointSection';
import SolutionTimeline from '@/components/SolutionTimeline';
import EmergencyTestimonials from '@/components/EmergencyTestimonials';
import GuaranteeBox from '@/components/GuaranteeBox';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

export default function TomadaNaoFunciona() {
  useEffect(() => {
    document.title = "Tomada Não Funciona? Reparamos em 1 Hora | Eletricista 24h";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Tomada não funciona? Telétrabaho impossível? Reparamos em 1 hora. Eletricista certificado. Ligue +351 932 321 892.');
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto custa reparar uma tomada que não funciona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reparações simples desde €60. Substituição tomada €80-120. Reparação circuito €120-250. Orçamento gratuito no local."
        }
      },
      {
        "@type": "Question",
        "name": "Porque é que a tomada não funciona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Causas comuns: disjuntor disparado, fio solto, tomada queimada, curto circuito. Identificamos e reparamos. Ligue +351 932 321 892."
        }
      }
    ]
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <EmotionalHero
        painPoint="TOMADA NÃO FUNCIONA"
        headline="Tomada Não Funciona? Reparamos em 1 Hora"
        subheadline="Sabemos a frustração que sente. Teletrabalho impossível, telemóvel sem bateria, vida digital parada. Resolvemos hoje."
        urgencyText="Eletricista disponível AGORA • Tomada funcional em 1 hora"
        phone={ACTIVE_CONFIG.phone}
        whatsapp={ACTIVE_CONFIG.whatsappNumber}
        whatsappMessage="Olá! Tenho uma tomada que não funciona. Preciso de reparação!"
        ctaPrimary="REPARAR AGORA"
        ctaSecondary="WhatsApp Urgente"
        responseTime="30 minutos"
      />

      <PainPointSection
        title="Sabemos o Impacto Que Isto Tem"
        subtitle="Uma tomada que não funciona não é detalhe. É trabalho parado e vida digital impossível."
        empathyStatement="Já reparámos milhares de tomadas em Trás-os-Montes. Sabemos que no mundo de hoje, uma tomada avariada paralisa tudo. Reparamos em 1 hora."
        painPoints={[
          {
            icon: 'time',
            title: 'Teletrabalho Impossível',
            description: 'Computador sem bateria, reunião Zoom a começar, tomada não funciona. Pânico. Chefe a ligar, não consegue trabalhar.',
            consequence: 'Trabalho atrasado. Risco de perder emprego ou clientes.'
          },
          {
            icon: 'trending',
            title: 'Vida Digital Parada',
            description: 'Telemóvel sem bateria, tablet descarregado, não consegue carregar nada. Isolado digitalmente.',
            consequence: 'Não recebe chamadas importantes. Perde contacto com família.'
          },
          {
            icon: 'money',
            title: 'Perda de Produtividade',
            description: 'Cada hora sem tomada é hora de trabalho perdida. Se trabalha em casa, perde dinheiro diretamente.',
            consequence: 'Prejuízo financeiro direto. Clientes insatisfeitos.'
          },
          {
            icon: 'alert',
            title: 'Não Sabe Se É Grave',
            description: 'Não sabe se é só a tomada ou problema maior. Medo de mexer e levar choque. Incerteza.',
            consequence: 'Adia resolver. Problema pode ser simples mas parece complicado.'
          }
        ]}
      />

      <SolutionTimeline
        title="Como Reparamos em 1 Hora"
        subtitle="Diagnóstico rápido, reparação eficaz, tomada funcional."
        totalTime="1-2 horas"
        guaranteeText="Tomada funcional ou não paga. Garantia 2 anos."
        steps={[
          {
            time: '0-10 min',
            title: 'Liga e Explica',
            description: 'Atendemos, fazemos perguntas. Já sabemos se é problema simples ou complexo.',
            icon: 'phone'
          },
          {
            time: '10-40 min',
            title: 'Chegamos Equipados',
            description: 'Eletricista chega com testador, tomadas novas, ferramentas. Pronto para reparar.',
            icon: 'map'
          },
          {
            time: '40-70 min',
            title: 'Identificamos e Reparamos',
            description: 'Testamos, identificamos o problema, reparamos ou substituímos. Trabalho limpo.',
            icon: 'wrench'
          },
          {
            time: '70-90 min',
            title: 'Tomada Funcional',
            description: 'Testamos com aparelhos, verificamos segurança. Tomada funciona perfeitamente.',
            icon: 'check'
          }
        ]}
      />

      <EmergencyTestimonials
        title="Já Reparámos Milhares de Tomadas"
        subtitle="Clientes que recuperaram a produtividade e vida digital."
        testimonials={[
          {
            name: 'David Lopes',
            city: 'Bragança',
            problem: 'Tomada escritório',
            solution: 'Trabalho em casa, tomada do escritório parou. Reunião importante em 2 horas. Vieram urgente, repararam em 45 minutos. Salvaram o meu dia!',
            timeframe: '45 minutos',
            rating: 5,
            verified: true
          },
          {
            name: 'Patrícia Sousa',
            city: 'Mirandela',
            problem: 'Tomada não funciona',
            solution: 'Tomada da cozinha não funcionava. Descobriram fio solto. Repararam, testaram todas as outras. Preço justo, serviço rápido!',
            timeframe: '1 hora',
            rating: 5,
            verified: true
          },
          {
            name: 'Bruno Martins',
            city: 'Chaves',
            problem: 'Várias tomadas',
            solution: 'Metade das tomadas da casa não funcionavam. Descobriram problema no quadro. Repararam, testaram tudo. Excelente trabalho!',
            timeframe: '1h30',
            rating: 5,
            verified: true
          },
          {
            name: 'Sónia Ribeiro',
            city: 'Vila Real',
            problem: 'Tomada queimada',
            solution: 'Tomada fez faísca e queimou. Medo de usar. Vieram, substituíram, explicaram o que aconteceu. Muito profissionais!',
            timeframe: '50 minutos',
            rating: 5,
            verified: true
          },
          {
            name: 'Nuno Costa',
            city: 'Macedo de Cavaleiros',
            problem: 'Tomada urgente',
            solution: 'Sábado, tomada parou, telemóvel sem bateria. Atenderam, vieram no mesmo dia. Repararam rápido. Recomendo!',
            timeframe: '1 hora',
            rating: 5,
            verified: true
          },
          {
            name: 'Vera Alves',
            city: 'Mogadouro',
            problem: 'Tomada sala',
            solution: 'Tomada da sala não funcionava há semanas. Vieram, descobriram que era disjuntor. Repararam, testaram. Simples e eficaz!',
            timeframe: '40 minutos',
            rating: 5,
            verified: true
          }
        ]}
      />

      <GuaranteeBox
        title="Garantias de Reparação"
        subtitle="Reparamos com garantia total. Tomada funcional ou dinheiro de volta."
        mainGuarantee="Tomada Funcional ou Não Paga"
        phone={ACTIVE_CONFIG.phone}
        guarantees={[
          {
            icon: 'shield',
            title: 'Garantia 2 Anos',
            description: 'Todas as reparações e substituições têm garantia de 2 anos. Peças e mão de obra.'
          },
          {
            icon: 'check',
            title: 'Reparação em 1h',
            description: 'Na maioria dos casos reparamos em 1 hora. Tomada funcional no mesmo dia.'
          },
          {
            icon: 'clock',
            title: 'Chegada em 30min',
            description: 'Garantimos chegada em 30 minutos em toda a região de Trás-os-Montes.'
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
            Causas Comuns de Tomada Não Funcionar
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Identificamos e resolvemos rapidamente.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Disjuntor Disparado',
                desc: 'Disjuntor do circuito desligou. Solução simples: religar. Se disparar de novo, há problema.',
                icon: '🔴',
                time: '5 min'
              },
              {
                title: 'Fio Solto',
                desc: 'Fio desconectou dentro da tomada. Comum em tomadas antigas. Solução: reconectar fio.',
                icon: '🔌',
                time: '30 min'
              },
              {
                title: 'Tomada Queimada',
                desc: 'Tomada queimou por sobrecarga ou curto. Solução: substituir tomada.',
                icon: '🔥',
                time: '45 min'
              },
              {
                title: 'Curto Circuito',
                desc: 'Curto no circuito da tomada. Disjuntor dispara. Solução: identificar e reparar curto.',
                icon: '⚡',
                time: '1-2h'
              },
              {
                title: 'Problema no Quadro',
                desc: 'Disjuntor ou ligação no quadro com problema. Afeta várias tomadas. Solução: reparar quadro.',
                icon: '📦',
                time: '1-2h'
              },
              {
                title: 'Instalação Antiga',
                desc: 'Fios antigos, isolamento degradado. Solução: renovar troço do circuito.',
                icon: '🏚️',
                time: '2-3h'
              }
            ].map((cause, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{cause.icon}</div>
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                    {cause.time}
                  </div>
                </div>
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
                q: 'Porque é que a tomada não funciona?',
                a: 'Causas comuns: 1) Disjuntor disparado - vá ao quadro e verifique. 2) Fio solto - comum em tomadas antigas. 3) Tomada queimada - sobrecarga ou curto. 4) Curto circuito - problema no circuito. 5) Problema no quadro - afeta várias tomadas. Ligue +351 932 321 892. Identificamos e reparamos em 1 hora.'
              },
              {
                q: 'Quanto custa reparar uma tomada?',
                a: 'Reparações simples (reconectar fio) €60-80. Substituição tomada €80-120. Reparação circuito €120-250. Problema no quadro €150-300. Damos sempre orçamento gratuito no local antes de começar. Preço fixo, sem surpresas.'
              },
              {
                q: 'Posso reparar eu mesmo?',
                a: 'NÃO recomendamos. Trabalhar com eletricidade sem conhecimento é perigoso: risco de choque elétrico fatal, risco de incêndio, pode piorar o problema. Eletricistas certificados têm equipamento de teste e segurança. Ligue-nos - reparamos em 1 hora com segurança e garantia.'
              },
              {
                q: 'A tomada faz faíscas, é perigoso?',
                a: 'SIM! Faíscas indicam curto circuito ou mau contacto. Pode causar incêndio. NÃO use a tomada. Desligue o disjuntor desse circuito. Ligue +351 932 321 892 urgente. Chegamos em 30 minutos e resolvemos com segurança.'
              },
              {
                q: 'Várias tomadas não funcionam, é grave?',
                a: 'Pode ser. Se várias tomadas do mesmo circuito não funcionam, pode ser: disjuntor disparado (simples), problema no quadro (médio), ou curto no circuito (complexo). Ligue-nos para diagnóstico. Identificamos a causa e resolvemos.'
              },
              {
                q: 'Dão garantia na reparação?',
                a: 'Sim! Garantia de 2 anos em todas as reparações. Se a tomada voltar a ter problemas, voltamos gratuitamente e resolvemos. Trabalho certificado e garantido.'
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
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Recupere a Produtividade Hoje
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-semibold">
            Eletricista disponível AGORA. Reparamos em 1 hora. Tomada funcional garantida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={`tel:${ACTIVE_CONFIG.phone}`}
              className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-orange-600 bg-white hover:bg-gray-100 rounded-xl shadow-xl transition-all active:scale-95"
            >
              📞 {ACTIVE_CONFIG.phone}
            </a>
            <a
              href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá! Tenho uma tomada que não funciona. Preciso de reparação!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-xl transition-all active:scale-95"
            >
              💬 WhatsApp Urgente
            </a>
          </div>
          <p className="text-lg opacity-90">
            ✓ Orçamento Gratuito • ✓ Reparação em 1h • ✓ Garantia 2 Anos
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
