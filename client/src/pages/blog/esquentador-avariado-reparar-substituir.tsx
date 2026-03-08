import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { Phone, MessageCircle, AlertTriangle, CheckCircle, Wrench, Euro, TrendingUp, Clock } from 'lucide-react';

export default function EsquentadorAvariadoArranjarSubstituir() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quando devo arranjar ou substituir o esquentador?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Repare se: esquentador tem menos de 8 anos, avaria simples (termóstato, pilhas), custo arranjo <50% do novo. Substitua se: mais de 10 anos, avarias frequentes, custo arranjo >60% do novo, ou consumo excessivo de gás."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto custa arranjar um esquentador em Bragança?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Arranjos comuns em Bragança: trocar termóstato 60-90€, limpar queimador 50-70€, substituir membrana 70-100€, trocar válvula gás 80-120€. Diagnóstico: 30-40€ (descontado se autorizar arranjo)."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto custa um esquentador novo instalado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Esquentador novo com instalação em Trás-os-Montes: básico 250-400€, médio 400-600€, premium 600-900€. Inclui aparelho, instalação, ligações e teste. Remoção do antigo: +30-50€."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo dura um esquentador?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Um esquentador bem mantido dura 10-15 anos. Com manutenção anual (limpeza, verificação), pode chegar aos 15 anos. Sem manutenção, a vida útil reduz para 8-10 anos. Sinais de fim de vida: avarias frequentes, consumo excessivo, água não aquece bem."
        }
      },
      {
        "@type": "Question",
        "name": "Vale a pena arranjar um esquentador com 12 anos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Geralmente não. Com 12 anos, o esquentador está no fim da vida útil. Mesmo arranjado, outras peças vão falhar em breve. Esquentadores novos são 30-40% mais eficientes, poupando gás. Melhor investir num novo com garantia de 2-5 anos."
        }
      }
    ]
  };

  const criterios = {
    arranjar: [
      { criterio: "Idade do esquentador", valor: "Menos de 8 anos" },
      { criterio: "Tipo de avaria", valor: "Simples (termóstato, pilhas, membrana)" },
      { criterio: "Custo da arranjo", valor: "Menos de 50% do preço de um novo" },
      { criterio: "Histórico de avarias", valor: "Primeira ou segunda avaria" },
      { criterio: "Eficiência energética", valor: "Ainda consome pouco gás" },
      { criterio: "Garantia", valor: "Ainda dentro da garantia" }
    ],
    substituir: [
      { criterio: "Idade do esquentador", valor: "Mais de 10 anos" },
      { criterio: "Tipo de avaria", valor: "Grave (permutador, válvula principal)" },
      { criterio: "Custo da arranjo", valor: "Mais de 60% do preço de um novo" },
      { criterio: "Histórico de avarias", valor: "Avarias frequentes (3+ por ano)" },
      { criterio: "Eficiência energética", valor: "Consumo excessivo de gás" },
      { criterio: "Peças de substituição", valor: "Difíceis de encontrar ou caras" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Esquentador Avariado: Arranjar ou Substituir? [Guia 2026] | Norte Reparos</title>
        <meta name="description" content="Esquentador avariado? Descubra quando vale a pena arranjar ou substituir. Critérios, custos reais em Bragança e calculadora de decisão. Guia completo 2026." />
        <meta name="keywords" content="esquentador avariado, arranjar esquentador, substituir esquentador, canalizador Bragança, preço esquentador" />
        <link rel="canonical" href="https://canalizador-norte-reparos.pt/blog/esquentador-avariado-arranjar-substituir" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Hero */}
          <header className="mb-12">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              Guia de Decisão 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Esquentador Avariado: Arranjar ou Substituir?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tome a decisão certa com base em critérios objetivos: idade, custo, eficiência e histórico de avarias.
              Guia completo com preços reais em Trás-os-Montes.
            </p>
            <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
              <span>8 min leitura</span>
              <span>Atualizado: 3 Março 2026</span>
            </div>
          </header>

          {/* Resposta Direta */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Resposta Rápida</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Regra geral:</strong> Repare se o esquentador tem menos de 8 anos e o custo é inferior a 50% de um novo.
              Substitua se tem mais de 10 anos, avarias frequentes, ou arranjo custa mais de 60% de um novo.
              <strong>Em Bragança:</strong> arranjo 50-120€, esquentador novo instalado 250-900€.
            </p>
          </div>

          {/* Árvore de Decisão Visual */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Árvore de Decisão Rápida</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="font-bold text-lg mb-2">1. Quantos anos tem o esquentador?</h3>
                  <div className="space-y-2 text-sm">
                    <p>• <strong>Menos de 5 anos:</strong> <span className="text-green-600 font-bold">REPARAR</span> (ainda novo)</p>
                    <p>• <strong>5-8 anos:</strong> <span className="text-yellow-600 font-bold">AVALIAR</span> (depende do custo)</p>
                    <p>• <strong>8-10 anos:</strong> <span className="text-orange-600 font-bold">PROVAVELMENTE SUBSTITUIR</span></p>
                    <p>• <strong>Mais de 10 anos:</strong> <span className="text-red-600 font-bold">SUBSTITUIR</span> (fim de vida)</p>
                  </div>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="font-bold text-lg mb-2">2. Quanto custa a arranjo?</h3>
                  <div className="space-y-2 text-sm">
                    <p>• <strong>Menos de 100€:</strong> <span className="text-green-600 font-bold">REPARAR</span> (vale a pena)</p>
                    <p>• <strong>100-200€:</strong> <span className="text-yellow-600 font-bold">AVALIAR</span> (considere idade)</p>
                    <p>• <strong>Mais de 200€:</strong> <span className="text-red-600 font-bold">SUBSTITUIR</span> (novo custa 250-400€)</p>
                  </div>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="font-bold text-lg mb-2">3. Quantas avarias teve no último ano?</h3>
                  <div className="space-y-2 text-sm">
                    <p>• <strong>Primeira avaria:</strong> <span className="text-green-600 font-bold">REPARAR</span></p>
                    <p>• <strong>2 avarias:</strong> <span className="text-yellow-600 font-bold">AVALIAR</span></p>
                    <p>• <strong>3+ avarias:</strong> <span className="text-red-600 font-bold">SUBSTITUIR</span> (problema crónico)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tabela Comparativa */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quando Arranjar vs Quando Substituir</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Arranjar */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-600 text-white px-6 py-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Wrench className="w-6 h-6" />
                    REPARAR
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {criterios.arranjar.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gray-900 text-sm">{item.criterio}:</strong>
                          <p className="text-gray-700 text-sm">{item.valor}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Substituir */}
              <div className="bg-red-50 border-2 border-red-200 rounded-xl overflow-hidden">
                <div className="bg-red-600 text-white px-6 py-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <TrendingUp className="w-6 h-6" />
                    SUBSTITUIR
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {criterios.substituir.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gray-900 text-sm">{item.criterio}:</strong>
                          <p className="text-gray-700 text-sm">{item.valor}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Tabela de Custos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Custos Reais em Bragança (2026)</h2>

            {/* Arranjos */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Arranjos Comuns</h3>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-gray-900">Avaria</th>
                      <th className="px-4 py-3 text-center font-bold text-gray-900">Custo</th>
                      <th className="px-4 py-3 text-center font-bold text-gray-900">Tempo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { avaria: "Trocar pilhas", custo: "5-10€", tempo: "5 min" },
                      { avaria: "Limpar queimador", custo: "50-70€", tempo: "30-45 min" },
                      { avaria: "Trocar termóstato", custo: "60-90€", tempo: "45-60 min" },
                      { avaria: "Substituir membrana", custo: "70-100€", tempo: "1h" },
                      { avaria: "Trocar válvula gás", custo: "80-120€", tempo: "1-1.5h" },
                      { avaria: "Arranjar permutador", custo: "120-180€", tempo: "2h" }
                    ].map((item, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-900">{item.avaria}</td>
                        <td className="px-4 py-3 text-center font-bold text-gray-900">{item.custo}</td>
                        <td className="px-4 py-3 text-center text-sm text-gray-600">{item.tempo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                * Diagnóstico: 30-40€ (descontado se autorizar arranjo)
              </p>
            </div>

            {/* Substituição */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Esquentador Novo (com Instalação)</h3>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-gray-900">Tipo</th>
                      <th className="px-4 py-3 text-center font-bold text-gray-900">Preço Total</th>
                      <th className="px-4 py-3 text-center font-bold text-gray-900">Garantia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { tipo: "Básico (11L, atmosférico)", preco: "250-400€", garantia: "2 anos" },
                      { tipo: "Médio (11-14L, estanque)", preco: "400-600€", garantia: "3 anos" },
                      { tipo: "Premium (14L+, modulante)", preco: "600-900€", garantia: "5 anos" }
                    ].map((item, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-900">{item.tipo}</td>
                        <td className="px-4 py-3 text-center font-bold text-green-700">{item.preco}</td>
                        <td className="px-4 py-3 text-center text-sm text-gray-600">{item.garantia}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                * Inclui: aparelho, instalação, ligações, teste. Remoção do antigo: +30-50€
              </p>
            </div>
          </section>

          {/* CTA Meio */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-8 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Não Sabe Se Deve Arranjar ou Substituir?</h3>
            <p className="text-lg mb-6 opacity-90">
              Diagnóstico gratuito. Avaliamos o esquentador e damos-lhe a melhor recomendação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+351928484451"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                928 484 451
              </a>
              <a
                href="https://wa.me/351928484451?text=Olá,%20o%20meu%20esquentador%20está%20avariado"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Vantagens de Substituir */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vantagens de Substituir por um Novo</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  titulo: "Poupança de Gás",
                  descricao: "Esquentadores novos são 30-40% mais eficientes. Poupa 10-15€/mês na botija de gás.",
                  icon: <Euro className="w-8 h-8 text-green-600" />
                },
                {
                  titulo: "Garantia 2-5 Anos",
                  descricao: "Arranjos gratuitas durante a garantia. Paz de espírito sem custos inesperados.",
                  icon: <CheckCircle className="w-8 h-8 text-blue-600" />
                },
                {
                  titulo: "Tecnologia Moderna",
                  descricao: "Modulação automática, segurança reforçada, arranque mais rápido, temperatura estável.",
                  icon: <TrendingUp className="w-8 h-8 text-purple-600" />
                },
                {
                  titulo: "Sem Avarias Frequentes",
                  descricao: "Esquentador novo = sem chatices durante 5-8 anos. Arranjado pode avariar novamente em meses.",
                  icon: <Clock className="w-8 h-8 text-orange-600" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start gap-4">
                    {item.icon}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.titulo}</h3>
                      <p className="text-gray-700 text-sm">{item.descricao}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Avarias Comuns */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Avarias Mais Comuns e O Que Fazer</h2>
            <div className="space-y-4">
              {[
                {
                  problema: "Não acende / Não liga",
                  causas: "Pilhas gastas, válvula gás fechada, falta de água",
                  solucao: "Trocar pilhas (5€), verificar válvula. Se persistir: chamar técnico.",
                  decisao: "REPARAR (geralmente simples)"
                },
                {
                  problema: "Água não aquece bem",
                  causas: "Queimador sujo, termóstato avariado, pressão baixa",
                  solucao: "Limpeza queimador (50-70€) ou trocar termóstato (60-90€).",
                  decisao: "REPARAR se <8 anos"
                },
                {
                  problema: "Desliga sozinho",
                  causas: "Sensor de segurança, ventilação insuficiente, termóstato",
                  solucao: "Verificar ventilação, trocar sensor (70-100€).",
                  decisao: "REPARAR se <8 anos"
                },
                {
                  problema: "Fuga de água",
                  causas: "Permutador furado, juntas gastas",
                  solucao: "Permutador novo: 120-180€. Se >10 anos, melhor substituir tudo.",
                  decisao: "AVALIAR idade e custo"
                },
                {
                  problema: "Cheiro a gás",
                  causas: "Fuga na válvula, ligação solta, queimador avariado",
                  solucao: "URGENTE: Fechar gás, ventilar, chamar técnico imediatamente.",
                  decisao: "Depende da gravidade"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{item.problema}</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong className="text-gray-700">Causas:</strong> {item.causas}</p>
                    <p><strong className="text-gray-700">Solução:</strong> {item.solucao}</p>
                    <p className="flex items-center gap-2">
                      <strong className="text-gray-700">Decisão:</strong>
                      <span className={`px-3 py-1 rounded-full font-bold ${
                        item.decisao.includes('REPARAR') ? 'bg-green-100 text-green-700' :
                        item.decisao.includes('AVALIAR') ? 'bg-yellow-100 text-yellow-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {item.decisao}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <details key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="px-6 py-4 font-bold text-gray-900 cursor-pointer hover:bg-gray-50">
                    {faq.name}
                  </summary>
                  <div className="px-6 pb-4 text-gray-700">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Artigos Relacionados */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Artigos Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/sistema-aquecimento-agua-melhor-opcao">
                <a className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Esquentador vs Caldeira</h3>
                  <p className="text-sm text-gray-600">Qual a melhor opção para sua casa?</p>
                </a>
              </Link>
              <Link href="/servicos/arranjacao-esquentadores">
                <a className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Arranjo de Esquentadores</h3>
                  <p className="text-sm text-gray-600">Serviço profissional em Trás-os-Montes</p>
                </a>
              </Link>
              <Link href="/blog/quanto-custa-desentupimento-braganca">
                <a className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Preços Canalizador</h3>
                  <p className="text-sm text-gray-600">Tabela completa de preços 2026</p>
                </a>
              </Link>
            </div>
          </section>

          {/* CTA Final */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Diagnóstico e Orçamento Gratuito</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Avaliamos o seu esquentador e recomendamos a melhor solução: arranjar ou substituir.
              Atendimento em Bragança, Mirandela, Chaves e toda a região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="tel:+351928484451"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-6 h-6" />
                928 484 451
              </a>
              <a
                href="https://wa.me/351928484451?text=Olá,%20preciso%20avaliar%20o%20meu%20esquentador"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp
              </a>
            </div>
            <p className="text-sm opacity-75">
              Diagnóstico gratuito • Orçamento sem compromisso • Garantia no trabalho
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
