import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmotionalHero from '@/components/EmotionalHero';
import PainPointSection from '@/components/PainPointSection';
import SolutionTimeline from '@/components/SolutionTimeline';
import EmergencyTestimonials from '@/components/EmergencyTestimonials';
import GuaranteeBox from '@/components/GuaranteeBox';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

export default function QuadroEletricoAntigo() {
  useEffect(() => {
    document.title = "Quadro Elétrico Antigo? Modernizamos com Segurança | Eletricista";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Quadro elétrico antigo e perigoso? Modernizamos em 1 dia. Certificado DGEG. Segurança garantida. Ligue +351 932 321 892.');
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto custa modernizar um quadro elétrico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Quadro básico desde €400. Quadro completo €600-1200. Inclui quadro novo, disjuntores, instalação e certificado DGEG. Orçamento gratuito."
        }
      },
      {
        "@type": "Question",
        "name": "Quadro elétrico antigo é perigoso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Quadros antigos não têm proteções modernas (diferencial, sobrecarga). Risco de incêndio e choque elétrico. Modernize urgente."
        }
      }
    ]
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <EmotionalHero
        painPoint="QUADRO ELÉTRICO ANTIGO"
        headline="Quadro Antigo? Modernizamos com Segurança"
        subheadline="Sabemos a preocupação que sente. Quadro antigo, fusíveis velhos, medo de incêndio. Proteja a sua família hoje."
        urgencyText="Eletricista disponível AGORA • Modernização em 1 dia"
        phone={ACTIVE_CONFIG.phone}
        whatsapp={ACTIVE_CONFIG.whatsappNumber}
        whatsappMessage="Olá! Tenho um quadro elétrico antigo. Preciso de modernização!"
        ctaPrimary="MODERNIZAR AGORA"
        ctaSecondary="WhatsApp Urgente"
        responseTime="30 minutos"
      />

      <PainPointSection
        title="Sabemos a Preocupação Que Carrega"
        subtitle="Um quadro elétrico antigo não é só ultrapassado. É perigo real para a sua família."
        empathyStatement="Já modernizámos centenas de quadros em Trás-os-Montes. Sabemos que a segurança da família não tem preço. Modernizamos em 1 dia com certificado DGEG."
        painPoints={[
          {
            icon: 'alert',
            title: 'Medo de Incêndio',
            description: 'Quadro antigo, fusíveis velhos, fios expostos. Medo constante de incêndio elétrico. Não consegue dormir tranquilo.',
            consequence: 'Risco real de incêndio que pode destruir a casa e matar a família.'
          },
          {
            icon: 'trending',
            title: 'Não Tem Proteções Modernas',
            description: 'Sem diferencial (proteção contra choque), sem disjuntores adequados. Tecnologia de há 40 anos.',
            consequence: 'Família exposta a choque elétrico fatal. Casa não protegida.'
          },
          {
            icon: 'money',
            title: 'Seguro Pode Não Cobrir',
            description: 'Se houver incêndio elétrico e quadro não estiver conforme, seguro pode recusar pagar. Prejuízo total.',
            consequence: 'Perda da casa sem compensação. Ruína financeira.'
          },
          {
            icon: 'time',
            title: 'Adia Por Medo do Preço',
            description: 'Sabe que precisa modernizar mas tem medo de gastar €2000-3000. Adia, mas preocupação não passa.',
            consequence: 'Cada dia que passa é um dia de risco. Problema não desaparece.'
          }
        ]}
      />

      <SolutionTimeline
        title="Como Modernizamos em 1 Dia"
        subtitle="Planeamento, instalação profissional, certificação DGEG. Segurança total."
        totalTime="1 dia (6-8 horas)"
        guaranteeText="Certificado DGEG e garantia 5 anos. Segurança total."
        steps={[
          {
            time: '0-30 min',
            title: 'Visita e Orçamento',
            description: 'Visitamos, avaliamos o quadro atual, medimos, planeamos. Orçamento detalhado gratuito.',
            icon: 'phone'
          },
          {
            time: 'Dia marcado',
            title: 'Instalação Profissional',
            description: 'Eletricista certificado instala quadro novo, disjuntores, diferencial. Trabalho limpo e organizado.',
            icon: 'wrench'
          },
          {
            time: 'Final do dia',
            title: 'Testes e Certificação',
            description: 'Testamos todos os circuitos, verificamos segurança. Emitimos certificado DGEG.',
            icon: 'check'
          },
          {
            time: 'Entrega',
            title: 'Casa Segura',
            description: 'Quadro moderno, proteções ativas, família segura. Explicamos tudo, entregamos certificado.',
            icon: 'check'
          }
        ]}
      />

      <EmergencyTestimonials
        title="Já Modernizámos Centenas de Quadros"
        subtitle="Famílias que recuperaram a paz de espírito e segurança."
        testimonials={[
          {
            name: 'Francisco Silva',
            city: 'Bragança',
            problem: 'Quadro com 40 anos',
            solution: 'Quadro tinha 40 anos, fusíveis antigos. Medo constante. Modernizaram em 1 dia, quadro novo com todas as proteções. Durmo tranquilo agora!',
            timeframe: '1 dia',
            rating: 5,
            verified: true
          },
          {
            name: 'Gabriela Costa',
            city: 'Mirandela',
            problem: 'Quadro perigoso',
            solution: 'Quadro fazia faíscas, cheiro a queimado. Pânico! Vieram urgente, substituíram tudo. Certificado DGEG entregue. Profissionais top!',
            timeframe: '1 dia',
            rating: 5,
            verified: true
          },
          {
            name: 'Armando Pereira',
            city: 'Chaves',
            problem: 'Sem diferencial',
            solution: 'Casa antiga sem diferencial. Preocupado com segurança dos netos. Instalaram quadro moderno, explicaram tudo. Excelente trabalho!',
            timeframe: '6 horas',
            rating: 5,
            verified: true
          },
          {
            name: 'Elisabete Lopes',
            city: 'Vila Real',
            problem: 'Quadro não conforme',
            solution: 'Seguro exigiu modernização. Vieram, fizeram orçamento justo, instalaram em 1 dia. Certificado aceite pelo seguro. Obrigada!',
            timeframe: '1 dia',
            rating: 5,
            verified: true
          },
          {
            name: 'Joaquim Santos',
            city: 'Macedo de Cavaleiros',
            problem: 'Quadro antigo',
            solution: 'Quadro com fusíveis de cerâmica. Modernizaram, instalaram disjuntores novos. Trabalho impecável, preço justo. Recomendo!',
            timeframe: '7 horas',
            rating: 5,
            verified: true
          },
          {
            name: 'Amélia Ribeiro',
            city: 'Mogadouro',
            problem: 'Modernização urgente',
            solution: 'Quadro disparava sempre. Descobriram que estava obsoleto. Substituíram tudo, certificaram. Casa segura agora. 5 estrelas!',
            timeframe: '1 dia',
            rating: 5,
            verified: true
          }
        ]}
      />

      <GuaranteeBox
        title="Garantias de Segurança Total"
        subtitle="Modernização certificada DGEG. Trabalho garantido 5 anos."
        mainGuarantee="Certificado DGEG Garantido"
        phone={ACTIVE_CONFIG.phone}
        guarantees={[
          {
            icon: 'shield',
            title: 'Garantia 5 Anos',
            description: 'Quadro e instalação com garantia de 5 anos. Peças, mão de obra e certificação.'
          },
          {
            icon: 'award',
            title: 'Certificado DGEG',
            description: 'Emitimos certificado DGEG obrigatório. Aceite por seguros e inspeções.'
          },
          {
            icon: 'check',
            title: 'Proteções Modernas',
            description: 'Diferencial 30mA, disjuntores adequados, proteção sobretensão. Normas 2024.'
          },
          {
            icon: 'clock',
            title: 'Instalação em 1 Dia',
            description: 'Modernizamos em 1 dia. Mínima interrupção. Casa segura no mesmo dia.'
          }
        ]}
      />

      {/* Price Transparency */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-gray-900">
            Preços Transparentes
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Investimento na segurança da sua família. Preço fixo, sem surpresas.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-8 rounded-xl border-2 border-blue-200 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Quadro Básico</h3>
              <div className="text-4xl font-black text-blue-600 mb-4">€400-600</div>
              <ul className="text-left text-gray-700 space-y-2">
                <li>✓ Quadro 1 fila (8 módulos)</li>
                <li>✓ Diferencial 30mA</li>
                <li>✓ 4-6 disjuntores</li>
                <li>✓ Certificado DGEG</li>
                <li>✓ Garantia 5 anos</li>
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-xl border-2 border-green-400 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                MAIS POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Quadro Completo</h3>
              <div className="text-4xl font-black text-green-600 mb-4">€600-900</div>
              <ul className="text-left text-gray-700 space-y-2">
                <li>✓ Quadro 2 filas (16 módulos)</li>
                <li>✓ Diferencial 30mA + 300mA</li>
                <li>✓ 8-12 disjuntores</li>
                <li>✓ Proteção sobretensão</li>
                <li>✓ Certificado DGEG</li>
                <li>✓ Garantia 5 anos</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl border-2 border-orange-200 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Quadro Premium</h3>
              <div className="text-4xl font-black text-orange-600 mb-4">€900-1500</div>
              <ul className="text-left text-gray-700 space-y-2">
                <li>✓ Quadro 3 filas (24+ módulos)</li>
                <li>✓ Diferenciais seletivos</li>
                <li>✓ 12+ disjuntores</li>
                <li>✓ Proteções avançadas</li>
                <li>✓ Domótica parranjado</li>
                <li>✓ Certificado DGEG</li>
                <li>✓ Garantia 5 anos</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8">
            * Preços incluem quadro, disjuntores, diferencial, instalação, certificado DGEG e IVA.
          </p>
        </div>
      </section>

      {/* Why Modernize */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-gray-900">
            Porque Modernizar o Quadro Elétrico?
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Não é despesa, é investimento na segurança da família.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Proteção Contra Choque Elétrico',
                desc: 'Diferencial 30mA desliga em 0.03 segundos se detetar fuga. Salva vidas. Quadros antigos não têm.',
                icon: '⚡',
                critical: true
              },
              {
                title: 'Prevenção de Incêndios',
                desc: 'Disjuntores modernos detetam sobrecargas e curtos. Desligam antes de incendiar. Fusíveis antigos não protegem.',
                icon: '🔥',
                critical: true
              },
              {
                title: 'Seguro Aceita',
                desc: 'Seguros exigem instalação conforme. Certificado DGEG é obrigatório. Sem ele, seguro pode não pagar.',
                icon: '📋',
                critical: false
              },
              {
                title: 'Valoriza a Casa',
                desc: 'Casa com instalação moderna e certificada vale mais. Facilita venda ou arrendamento.',
                icon: '🏠',
                critical: false
              },
              {
                title: 'Suporta Aparelhos Modernos',
                desc: 'Ar condicionado, carros elétricos, indução. Quadros antigos não aguentam. Modernos sim.',
                icon: '🔌',
                critical: false
              },
              {
                title: 'Paz de Espírito',
                desc: 'Dormir tranquilo sabendo que a família está protegida. Não tem preço.',
                icon: '😌',
                critical: false
              }
            ].map((reason, i) => (
              <div key={i} className={`p-6 rounded-xl border-2 ${reason.critical ? 'bg-red-50 border-red-400' : 'bg-white border-gray-200'}`}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{reason.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {reason.title}
                      {reason.critical && <span className="ml-2 text-red-600 text-sm">CRÍTICO</span>}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{reason.desc}</p>
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
                q: 'Quanto custa modernizar um quadro elétrico?',
                a: 'Quadro básico (1 fila, 8 módulos) €400-600. Quadro completo (2 filas, 16 módulos) €600-900. Quadro premium (3 filas, 24+ módulos) €900-1500. Preços incluem quadro, disjuntores, diferencial, instalação, certificado DGEG e IVA. Orçamento gratuito no local.'
              },
              {
                q: 'Quadro elétrico antigo é perigoso?',
                a: 'SIM! Quadros antigos (fusíveis de cerâmica, sem diferencial) são MUITO perigosos: 1) Sem proteção contra choque elétrico - risco fatal. 2) Sem proteção adequada contra incêndio. 3) Não conformes com normas atuais. 4) Seguro pode não cobrir sinistros. Modernize urgente para proteger a família.'
              },
              {
                q: 'Quanto tempo demora a instalação?',
                a: 'Quadro básico: 4-6 horas. Quadro completo: 6-8 horas (1 dia). Quadro premium: 8-10 horas (1-2 dias). Instalamos no mesmo dia na maioria dos casos. Mínima interrupção de eletricidade (2-3 horas).'
              },
              {
                q: 'O que é o certificado DGEG?',
                a: 'Certificado de Exploração emitido pela DGEG (Direção Geral de Energia e Geologia). Documento obrigatório que certifica que a instalação elétrica está conforme as normas de segurança. Necessário para seguros, vendas, arrendamentos. Validade: permanente (mas recomenda-se inspeção a cada 10 anos).'
              },
              {
                q: 'Posso modernizar só parte do quadro?',
                a: 'Não recomendamos. Modernização parcial não resolve os problemas de segurança. É como pôr penso rápido em ferida grave. Para ter certificado DGEG e proteção real, é necessário quadro completo conforme. Investimento vale a segurança da família.'
              },
              {
                q: 'Dão garantia?',
                a: 'Sim! Garantia de 5 anos no quadro e instalação (peças e mão de obra). Certificado DGEG incluído. Se tiver qualquer problema, voltamos gratuitamente. Trabalho certificado e garantido.'
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
            Proteja a Sua Família Hoje
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-semibold">
            Não arrisque. Modernize o quadro elétrico. Certificado DGEG. Segurança total.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={`tel:${ACTIVE_CONFIG.phone}`}
              className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-red-600 bg-white hover:bg-gray-100 rounded-xl shadow-xl transition-all active:scale-95"
            >
              📞 {ACTIVE_CONFIG.phone}
            </a>
            <a
              href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá! Tenho um quadro elétrico antigo. Preciso de modernização!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-xl transition-all active:scale-95"
            >
              💬 WhatsApp Urgente
            </a>
          </div>
          <p className="text-lg opacity-90">
            ✓ Orçamento Gratuito • ✓ Certificado DGEG • ✓ Garantia 5 Anos
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
