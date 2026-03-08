// Page SEO optimisée: "Como Desentupir Sanita Sozinho" - Intention DIY/informational
// Recherche fréquente: "como desentupir sanita sozinho", "desentupir wc caseiro", "métodos desentupir"

import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { Phone, AlertTriangle, CheckCircle, XCircle, Wrench, Clock } from 'lucide-react';

export default function ComoDesentupirSanitaSozinho() {
  const { config } = useSite();


  const faqs = [
    {
      question: "Como desentupir sanita entupida com cocó?",
      answer: "Use ventosa primeiro (10-15 tentativas). Se não funcionar, água quente + detergente líquido. Deixe atuar 15 minutos e puxe autoclismo. Se persistir, use arame flexível com cuidado. NUNCA use produtos químicos agressivos."
    },
    {
      question: "Bicarbonato e vinagre desentope sanita?",
      answer: "SIM, para entupimentos leves. Despeje 1 chávena bicarbonato + 2 chávenas vinagre. Deixe reagir 30 minutos. Despeje água quente. Eficaz para papel higiénico e resíduos orgânicos. Não funciona para objetos sólidos."
    },
    {
      question: "Quando devo chamar canalizador para sanita entupida?",
      answer: "Chame canalizador se: tentou métodos caseiros sem sucesso, água sobe em vez de descer, entupimento frequente (>2x/mês), suspeita objeto sólido, cheiro forte de esgoto. Urgente 24h: 928 484 451"
    },
    {
      question: "Quanto custa canalizador para desentupir sanita?",
      answer: "Desentupimento simples: 60-100€. Desentupimento com máquina: 100-150€. Substituir sanita: 150-400€. Inclui deslocação e mão-de-obra. Orçamento gratuito: 928 484 451"
    }
  ];

  const metodos = [
    {
      metodo: "Método 1: Ventosa (Desentupidor)",
      dificuldade: "Fácil",
      tempo: "10-15 min",
      eficacia: "80%",
      passos: [
        "Encha sanita com água até cobrir ventosa (15-20cm)",
        "Coloque ventosa sobre orifício de saída",
        "Pressione firmemente para criar vácuo",
        "Faça movimentos rápidos para cima e para baixo (10-15x)",
        "Puxe ventosa rapidamente no final",
        "Repita 3-4 vezes se necessário",
        "Puxe autoclismo para testar"
      ],
      material: ["Ventosa de sanita (não de lavatório)", "Luvas de borracha"],
      quando: "Entupimentos leves a médios, papel higiénico, resíduos orgânicos"
    },
    {
      metodo: "Método 2: Água Quente + Detergente",
      dificuldade: "Muito Fácil",
      tempo: "20-30 min",
      eficacia: "60%",
      passos: [
        "Aqueça 5-6 litros de água (quente mas NÃO fervente)",
        "Adicione 3-4 colheres sopa de detergente líquido loiça",
        "Despeje lentamente na sanita de altura média (50cm)",
        "Deixe atuar 15-20 minutos",
        "Puxe autoclismo",
        "Repita se necessário"
      ],
      material: ["Água quente", "Detergente líquido loiça"],
      quando: "Entupimentos leves, gorduras, papel higiénico"
    },
    {
      metodo: "Método 3: Bicarbonato + Vinagre",
      dificuldade: "Fácil",
      tempo: "30-40 min",
      eficacia: "50%",
      passos: [
        "Retire excesso de água da sanita (deixe só fundo)",
        "Despeje 1 chávena (250ml) de bicarbonato de sódio",
        "Adicione 2 chávenas (500ml) de vinagre branco",
        "Deixe reagir e fazer espuma (30 minutos)",
        "Despeje água quente",
        "Puxe autoclismo",
        "Repita se necessário"
      ],
      material: ["Bicarbonato de sódio", "Vinagre branco", "Água quente"],
      quando: "Entupimentos leves, resíduos orgânicos, manutenção preventiva"
    },
    {
      metodo: "Método 4: Arame Flexível (Mola)",
      dificuldade: "Média",
      tempo: "15-25 min",
      eficacia: "70%",
      passos: [
        "Use arame flexível ou cabide desdobrado",
        "Envolva ponta com pano para não riscar",
        "Introduza arame no orifício de saída",
        "Faça movimentos rotativos suaves",
        "Empurre e puxe para desagregar obstrução",
        "Retire arame devagar",
        "Puxe autoclismo para testar"
      ],
      material: ["Arame flexível ou cabide", "Pano", "Luvas grossas"],
      quando: "Obstruções mais profundas, objetos pequenos"
    },
    {
      metodo: "Método 5: Saco Plástico + Água Quente",
      dificuldade: "Média",
      tempo: "20-30 min",
      eficacia: "65%",
      passos: [
        "Encha saco plástico resistente com água quente",
        "Feche bem o saco",
        "Coloque saco sobre orifício de saída",
        "Pressione firmemente (simula ventosa)",
        "Faça movimentos rápidos",
        "Retire saco e puxe autoclismo"
      ],
      material: ["Saco plástico resistente", "Água quente", "Luvas"],
      quando: "Emergência sem ventosa disponível"
    }
  ];

  const naoFazer = [
    {
      acao: "NÃO use água fervente",
      razao: "Pode rachar porcelana da sanita (choque térmico)",
      icon: XCircle
    },
    {
      acao: "NÃO use produtos químicos agressivos",
      razao: "Danificam canos, perigosos para saúde, poluem ambiente",
      icon: XCircle
    },
    {
      acao: "NÃO force objetos duros",
      razao: "Pode riscar ou partir sanita",
      icon: XCircle
    },
    {
      acao: "NÃO puxe autoclismo repetidamente",
      razao: "Pode transbordar e alagar casa de banho",
      icon: XCircle
    },
    {
      acao: "NÃO use mangueira de pressão",
      razao: "Pressão excessiva pode danificar canos e juntas",
      icon: XCircle
    }
  ];

  return (
    <>
      <Helmet>
        <title>Como Desentupir Sanita Sozinho (Sem Canalizador) | Guia 2026</title>
        <meta name="description" content="Como desentupir sanita sozinho? 5 métodos caseiros eficazes: ventosa, água quente, bicarbonato, arame. Quando chamar canalizador: 928 484 451" />
      </Helmet>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold mb-6">
                <Wrench className="w-5 h-5" />
                GUIA DIY 2026
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Como Desentupir Sanita Sozinho (Sem Canalizador)
              </h1>

              <p className="text-xl mb-8">
                5 métodos caseiros eficazes passo a passo. Poupe dinheiro e resolva já.
                Se não funcionar, chamamos em 30 minutos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${config.phone.replace(/\s/g, "")}`}
                  className="bg-white text-[#2193b0] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-6 h-6" />
                  Não Funcionou? {config.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Métodos Passo a Passo */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              🔧 5 Métodos Eficazes (Passo a Passo)
            </h2>

            <div className="max-w-5xl mx-auto space-y-8">
              {metodos.map((metodo, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg overflow-hidden border border-blue-200">
                  <div className="bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-white p-6">
                    <h3 className="text-2xl font-bold mb-3">{metodo.metodo}</h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="bg-white/20 px-3 py-1 rounded-full">
                        Dificuldade: {metodo.dificuldade}
                      </span>
                      <span className="bg-white/20 px-3 py-1 rounded-full">
                        ⏱️ {metodo.tempo}
                      </span>
                      <span className="bg-white/20 px-3 py-1 rounded-full">
                        ✅ Eficácia: {metodo.eficacia}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Quando usar:
                      </h4>
                      <p className="text-gray-700 bg-green-50 p-3 rounded-lg">{metodo.quando}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Material necessário:</h4>
                      <div className="flex flex-wrap gap-2">
                        {metodo.material.map((item, i) => (
                          <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Passos:</h4>
                      <ol className="space-y-3">
                        {metodo.passos.map((passo, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="bg-[#2193b0] text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                              {i + 1}
                            </span>
                            <span className="text-gray-700 pt-1">{passo}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O Que NÃO Fazer */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-red-700">
              ⚠️ O Que NÃO Fazer (IMPORTANTE!)
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Evite estes erros comuns que podem piorar o problema
            </p>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {naoFazer.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <div className="flex items-start gap-3">
                    <item.icon className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-red-700 mb-2">{item.acao}</h3>
                      <p className="text-gray-600 text-sm">{item.razao}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quando Chamar Canalizador */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              📞 Quando Chamar Canalizador Profissional
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                "Tentou todos os métodos caseiros sem sucesso",
                "Água sobe em vez de descer (obstrução grave)",
                "Entupimento frequente (mais de 2x por mês)",
                "Suspeita de objeto sólido (brinquedo, telemóvel, etc.)",
                "Cheiro forte de esgoto persistente",
                "Água suja sobe noutras sanitas ou ralos",
                "Sanita muito antiga ou rachada"
              ].map((situacao, index) => (
                <div key={index} className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{situacao}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                ✅ Atendimento 24h em Trás-os-Montes<br />
                ✅ Chegamos em 30-60 minutos<br />
                ✅ Orçamento gratuito sem compromisso
              </p>
              <a
                href={`tel:${config.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 bg-[#2193b0] hover:bg-[#1a7a94] text-white font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg"
              >
                <Phone className="w-6 h-6" />
                Chamar Canalizador: {config.phone}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Perguntas Frequentes - Desentupir Sanita
            </h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-white">
          <div className="container mx-auto px-4 text-center">
            <Clock className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Métodos Caseiros Não Funcionaram?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Canalizador profissional resolve em 30 minutos.
              Atendimento urgente 24h.
            </p>
            <a
              href={`tel:${config.phone.replace(/\s/g, "")}`}
              className="bg-white text-[#2193b0] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              {config.phone}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
