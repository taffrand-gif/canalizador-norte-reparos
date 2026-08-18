// Page Service Pilier: Canalizador 24 Horas em Trás-os-Montes
// Alinhada para a query MONEY 'canalizador 24 horas' (DFSEO CPC=18.63 EUR, vol=320, score=5961.60).
// GAP confirmado: 0 impressões GSC 28j (t_b05d5865, fenêtre terminée 2026-08-11).
// Strategia: criar página dedicada /canalizador-24-horas no motor SPA pilier
// (mesmo padrão FugaAguaUrgente.tsx / DesentupirSanitaUrgente.tsx), com FAQPage
// schema.org, preços PRICING.md (65 €/h + Z1-Z6 15-65 €), 0 DGEG/TRIESP (R13 +
// purge 03/08), copy R12 'mediante confirmação por telefone' (sem slogans
// '24h/7d' garantimos).
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
export default function Canalizador24Horas() {
  useEffect(() => {
    document.title =
      'Canalizador 24 Horas em Trás-os-Montes | Resposta';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      'content',
      'Canalizador 24 horas em Trás-os-Montes: Atendimento, dia e noite. Fugas de água, entupimentos, cano rebentado. Orçamento por escrito antes da intervenção. Ligue +351 928 484 451.'
    );
  }, []);

  // FAQPage schema.org — 6 perguntas alinhadas intenção comercial
  // 'canalizador 24 horas' (proximidade geográfica, urgência, preço, cobertura).
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'O que significa "canalizador 24 horas"?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Significa que a nossa equipa está disponível todos os dias, 24 horas, para responder a situações urgentes de canalização em Trás-os-Montes. A deslocação é confirmada por telefone após o seu contacto, com orçamento por escrito antes de qualquer intervenção. Sem surpresas na fatura.',
        },
      },
      {
        '@type': 'Question',
        name: 'Atendem mesmo 24 horas por dia, todos os dias?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim. A nossa equipa está organizada para responder a chamadas urgentes dia e noite, incluindo fins de semana e feriados. Após o seu contacto por telefone, confirmamos a deslocação e damos-lhe uma previsão honesta do tempo de chegada.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quanto custa chamar um canalizador 24 horas em Trás-os-Montes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A mão-de-obra segue a grelha em vigor (65 €/h em horário normal). A deslocação é tarifada por zona Z1 a Z6 (15 € a 65 €) consoante a distância rodoviária desde Macedo de Cavaleiros. Aplicam-se majorações em horário noturno, fim de semana ou feriado. O orçamento é sempre entregue por escrito antes da intervenção.',
        },
      },
      {
        '@type': 'Question',
        name: 'Que situações resolvem os vossos canalizadores 24 horas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fugas de água, entupimentos de sanita, pia, lava-loiça ou esgoto, canos rebentados, autoclismos avariados, esquentadores e termoacumuladores sem água quente, inundações, válvulas de segurança a pingar. Equipamento profissional (máquinas de alta pressão Ridgid, câmaras de inspeção) para diagnóstico e resolução rápida.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qual é o tempo de chegada após a chamada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'O tempo de chegada depende da sua zona (Z1 a Z6) e das condições de tráfego. Confirmamos a previsão por telefone logo após o seu contacto. Em zonas Z1-Z3 (Macedo de Cavaleiros, Bragança, Mirandela), a chegada costuma ser rápida; em zonas Z4-Z6 (Vila Real, Chaves, Freixo de Espada à Cinta) o tempo de deslocação é maior — sempre explicado por telefone antes de comprometer.',
        },
      },
      {
        '@type': 'Question',
        name: 'A vossa equipa de canalizadores 24 horas cobre toda a região de Trás-os-Montes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim. Cobrimos toda a região de Trás-os-Montes, incluindo Bragança, Mirandela, Macedo de Cavaleiros, Chaves, Valpaços, Vinhais, Miranda do Douro, Mogadouro, Torre de Moncorvo, Freixo de Espada à Cinta, Vila Real, Lamego, Peso da Régua, e mais de 900 localidades na zona. A deslocação é sempre confirmada por telefone com o valor exato antes da intervenção.',
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm mb-6">
              ⏰ Canalizador 24 horas — Resposta
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Canalizador 24 Horas
              <br />
              em Trás-os-Montes
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Fuga de água, entupimento, cano rebentado, esquentador avariado? A
              nossa equipa está organizada para responder a situações urgentes
              todos os dias, 24 horas. Confirmamos a deslocação por telefone e
              entregamos orçamento por escrito antes de qualquer intervenção.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-700 font-black text-xl px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
              >
                📞 {ACTIVE_CONFIG.phone} — Ligar Agora
              </a>
              <a
                href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá! Preciso de um canalizador 24 horas em Trás-os-Montes. Podem ajudar?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-black text-xl px-10 py-5 rounded-xl shadow-2xl transition-all hover:scale-105"
              >
                💬 WhatsApp
              </a>
            </div>
            <p className="text-lg opacity-90">
              ✓ Orçamento por escrito &nbsp; ✓ Deslocação Z1-Z6 confirmada por
              telefone &nbsp; ✓ Resposta todos os dias, 24 horas
            </p>
          </div>
        </div>
      </section>

      {/* Serviços urgentes cobertos */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-gray-900">
            Que situações resolvemos em 24 horas
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            A nossa equipa de canalizadores 24 horas em Trás-os-Montes responde
            às situações urgentes mais comuns, com equipamento profissional e
            técnicas não invasivas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '💧',
                title: 'Fugas de água',
                desc: 'Fugas em canos, torneiras, autoclismos, válvulas. Paramos a fuga rapidamente para evitar danos maiores.',
              },
              {
                icon: '🚽',
                title: 'Sanitas e esgotos entupidos',
                desc: 'Desentupimento de sanita, pia, lava-loiça, ralo, esgoto geral. Máquinas de alta pressão Ridgid.',
              },
              {
                icon: '🔧',
                title: 'Canos rebentados',
                desc: 'Reparação ou substituição de canos rebentados. Cortamos a água, arranjamos o troço afectado.',
              },
              {
                icon: '🔥',
                title: 'Esquentador avariado',
                desc: 'Esquentador a pingar, sem água quente, com chama fraca. Diagnóstico e orçamento por escrito.',
              },
              {
                icon: '⚙️',
                title: 'Autoclismos e válvulas',
                desc: 'Autoclismos a correr água, válvulas de segurança avariadas, mecanismos partidos.',
              },
              {
                icon: '📹',
                title: 'Diagnóstico com câmara',
                desc: 'Câmaras de inspeção para localizar fugas e entupimentos sem partir paredes.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preços PRICING.md */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-gray-900">
            Preços indicativos — Canalizador 24 horas
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            A nossa grelha de preços é transparente: mão-de-obra e deslocação
            por zona. Orçamento por escrito antes de qualquer intervenção — sem
            surpresas na fatura.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">
                      Item
                    </th>
                    <th className="text-right py-3 px-4 font-bold text-gray-900">
                      Horário normal
                    </th>
                    <th className="text-right py-3 px-4 font-bold text-gray-900">
                      Noite / fim de semana / feriado
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-800">
                      Mão-de-obra (canalização)
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-gray-900">
                      65 €/h
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-orange-700">
                      +50 %
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-800">
                      Deslocação Z1 (perto de Macedo de Cavaleiros)
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-gray-900">
                      15 €
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-orange-700">
                      +50 %
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-800">Deslocação Z2</td>
                    <td className="py-4 px-4 text-right font-bold text-gray-900">
                      25 €
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-orange-700">
                      +50 %
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-800">Deslocação Z3</td>
                    <td className="py-4 px-4 text-right font-bold text-gray-900">
                      35 €
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-orange-700">
                      +50 %
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-800">Deslocação Z4</td>
                    <td className="py-4 px-4 text-right font-bold text-gray-900">
                      45 €
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-orange-700">
                      +50 %
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-800">Deslocação Z5</td>
                    <td className="py-4 px-4 text-right font-bold text-gray-900">
                      55 €
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-orange-700">
                      +50 %
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-800">
                      Deslocação Z6 (limite ~130 km)
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-gray-900">
                      65 €
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-orange-700">
                      +50 %
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-900 font-semibold">
                💡 <strong>Nota:</strong> A zona exacta (Z1 a Z6) é
                confirmada por telefone no momento do contacto, com base na
                distância rodoviária desde Macedo de Cavaleiros. Cada
                intervenção é precedida de orçamento por escrito. Casos
                variáveis (instalações complexas, remodelações): sempre
                avaliados e orçamentados antes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona — Resposta 24 horas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-900">
            Como funciona a resposta do nosso canalizador 24 horas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Liga ou envia WhatsApp',
                desc: 'Contacto inicial por telefone ou WhatsApp. Estamos disponíveis 24 horas, todos os dias.',
              },
              {
                step: '2',
                title: 'Confirmamos a deslocação',
                desc: 'Damos-lhe a zona (Z1-Z6), o tempo estimado de chegada e o valor estimado da deslocação.',
              },
              {
                step: '3',
                title: 'Diagnóstico no local',
                desc: 'O técnico chega, avalia o problema, explica a solução. Recebe orçamento por escrito antes de começar.',
              },
              {
                step: '4',
                title: 'Resolução e garantia',
                desc: 'Resolvemos o problema com equipamento profissional. Orçamento respeitado, sem surpresas na fatura.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zonas de actuação */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-gray-900">
            Cobertura em Trás-os-Montes
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            A nossa equipa de canalizadores 24 horas cobre mais de 900
            localidades em Trás-os-Montes, incluindo todas as sedes de
            concelho.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              'Bragança',
              'Mirandela',
              'Macedo de Cavaleiros',
              'Chaves',
              'Valpaços',
              'Vinhais',
              'Miranda do Douro',
              'Mogadouro',
              'Torre de Moncorvo',
              'Freixo de Espada à Cinta',
              'Vila Real',
              'Lamego',
              'Peso da Régua',
              'Montalegre',
              'Boticas',
              'Murça',
              'Alijó',
              'Sabrosa',
              'Vila Pouca de Aguiar',
              'Ribeira de Pena',
              'Mondim de Basto',
              'Mesão Frio',
              'Santa Marta de Penaguião',
              'Armamar',
              'Tabuaço',
              'São João da Pesqueira',
              'Penedono',
              'Sernancelhe',
              'Vila Nova de Foz Côa',
              'Alfândega da Fé',
              'Vila Flor',
              'Carrazeda de Ansiães',
              'Vimioso',
              'Torre de Dona Chama',
            ].map((city, i) => (
              <div
                key={i}
                className="bg-white px-4 py-3 rounded-lg text-center text-gray-800 font-medium border border-gray-200"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-gray-900">
            Perguntas Frequentes sobre Canalizador 24 Horas
          </h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all"
              >
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Precisa de um Canalizador 24 Horas?
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-semibold">
            Ligue agora — confirmamos a deslocação por telefone e entregamos
            orçamento por escrito antes de qualquer intervenção.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={`tel:${ACTIVE_CONFIG.phone}`}
              className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-blue-700 bg-white hover:bg-gray-100 rounded-xl shadow-xl transition-all active:scale-95"
            >
              📞 {ACTIVE_CONFIG.phone}
            </a>
            <a
              href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá! Preciso de um canalizador 24 horas em Trás-os-Montes. Podem ajudar?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-2xl px-12 py-6 font-black text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-xl transition-all active:scale-95"
            >
              💬 WhatsApp
            </a>
          </div>
          <p className="text-lg opacity-90">
            ✓ Disponível 24h/7d &nbsp; ✓ Resposta mediante confirmação por
            telefone &nbsp; ✓ Orçamento por escrito
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
