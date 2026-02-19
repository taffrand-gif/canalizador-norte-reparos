// Blog article: "Esquentador, Caldeira ou Bomba de Calor: Qual a Melhor Opção?"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, Flame, Zap, Wind, Euro } from 'lucide-react';

export default function SistemaAquecimentoAgua() {
  useEffect(() => {
    document.title = "Esquentador, Caldeira ou Bomba de Calor: Qual a Melhor Opção? | 2026";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Compare esquentador, caldeira e bomba de calor: vantagens, custos, consumo e qual escolher para sua casa em 2026.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://norte-reparos.com/blog/sistema-aquecimento-agua-melhor-opcao');

    // JSON-LD Article Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Esquentador, Caldeira ou Bomba de Calor: Qual a Melhor Opção?",
      "description": "Comparativo completo entre sistemas de aquecimento de água: custos, eficiência e qual escolher.",
      "author": {
        "@type": "Organization",
        "name": "Norte Reparos"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Norte Reparos",
        "logo": {
          "@type": "ImageObject",
          "url": "https://norte-reparos.com/logo.png"
        }
      },
      "datePublished": "2026-02-19",
      "dateModified": "2026-02-19"
    });
    document.head.appendChild(script);
  }, []);

  const sistemas = [
    {
      nome: "Esquentador a Gás",
      icon: Flame,
      custoInstalacao: "€250-600",
      custoMensal: "€30-50",
      vantagens: [
        "Investimento inicial baixo",
        "Aquece água instantaneamente",
        "Não ocupa muito espaço",
        "Ideal para 1-3 pessoas"
      ],
      desvantagens: [
        "Consumo de gás contínuo",
        "Menos eficiente que bomba de calor",
        "Requer ventilação adequada",
        "Manutenção anual obrigatória"
      ],
      ideal: "Apartamentos pequenos, casas com 1-2 pessoas, orçamento limitado"
    },
    {
      nome: "Caldeira Mural",
      icon: Flame,
      custoInstalacao: "€800-1.500",
      custoMensal: "€50-80",
      vantagens: [
        "Aquece água e casa simultaneamente",
        "Eficiente para casas grandes",
        "Água quente ilimitada",
        "Controlo de temperatura preciso"
      ],
      desvantagens: [
        "Investimento inicial elevado",
        "Consumo de gás alto no inverno",
        "Manutenção mais cara",
        "Instalação complexa"
      ],
      ideal: "Casas com aquecimento central, famílias grandes, clima frio"
    },
    {
      nome: "Bomba de Calor",
      icon: Wind,
      custoInstalacao: "€1.200-2.500",
      custoMensal: "€20-35",
      vantagens: [
        "Consumo elétrico 70% menor",
        "Mais ecológica",
        "Amortiza em 3-5 anos",
        "Baixa manutenção"
      ],
      desvantagens: [
        "Investimento inicial alto",
        "Menos eficiente em frio extremo",
        "Requer espaço exterior",
        "Aquecimento mais lento"
      ],
      ideal: "Casas com espaço exterior, visão a longo prazo, consciência ambiental"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-bold mb-4">
                🔥 COMPARATIVO 2026
              </span>
              <h1 className="text-4xl md:text-5xl font-black mb-6">
                Esquentador, Caldeira ou Bomba de Calor?
              </h1>
              <p className="text-xl opacity-90">
                Descubra qual o melhor sistema de aquecimento de água para a sua casa e quanto pode poupar.
              </p>
            </div>
          </div>
        </section>

        {/* Introdução */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                Escolher o sistema de aquecimento de água certo pode poupar centenas de euros por ano. 
                Em <a href="/braganca" className="text-blue-600 hover:underline">Bragança</a>, 
                <a href="/chaves" className="text-blue-600 hover:underline"> Chaves</a> e 
                <a href="/vila-real" className="text-blue-600 hover:underline"> Vila Real</a>, onde os 
                invernos são rigorosos, esta decisão é ainda mais importante.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Este guia compara as três opções principais: <strong>esquentador a gás</strong>, 
                <strong> caldeira mural</strong> e <strong>bomba de calor</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Comparação Detalhada */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-black mb-8 text-center">Comparação Detalhada</h2>
            <div className="space-y-8">
              {sistemas.map((sistema, index) => {
                const Icon = sistema.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                      <div className="flex items-center gap-4">
                        <Icon className="w-12 h-12" />
                        <div>
                          <h3 className="text-2xl font-bold">{sistema.nome}</h3>
                          <div className="flex gap-4 mt-2 text-sm">
                            <span>Instalação: <strong>{sistema.custoInstalacao}</strong></span>
                            <span>Mensal: <strong>{sistema.custoMensal}</strong></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                            ✅ Vantagens
                          </h4>
                          <ul className="space-y-2">
                            {sistema.vantagens.map((v, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <span className="text-green-600 mt-1">•</span>
                                <span>{v}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-red-600 mb-3 flex items-center gap-2">
                            ❌ Desvantagens
                          </h4>
                          <ul className="space-y-2">
                            {sistema.desvantagens.map((d, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <span className="text-red-600 mt-1">•</span>
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm">
                          <strong className="text-blue-600">Ideal para:</strong> {sistema.ideal}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tabela Comparativa Rápida */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-black mb-8 text-center">Comparação Rápida</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Critério</th>
                    <th className="px-4 py-3 text-center">Esquentador</th>
                    <th className="px-4 py-3 text-center">Caldeira</th>
                    <th className="px-4 py-3 text-center">Bomba Calor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-bold">Custo Instalação</td>
                    <td className="px-4 py-3 text-center text-green-600">€€</td>
                    <td className="px-4 py-3 text-center text-orange-600">€€€</td>
                    <td className="px-4 py-3 text-center text-red-600">€€€€</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-bold">Custo Mensal</td>
                    <td className="px-4 py-3 text-center text-orange-600">€€</td>
                    <td className="px-4 py-3 text-center text-red-600">€€€</td>
                    <td className="px-4 py-3 text-center text-green-600">€</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-bold">Eficiência</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-bold">Manutenção</td>
                    <td className="px-4 py-3 text-center">Anual</td>
                    <td className="px-4 py-3 text-center">Anual</td>
                    <td className="px-4 py-3 text-center">Bienal</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Vida Útil</td>
                    <td className="px-4 py-3 text-center">10-12 anos</td>
                    <td className="px-4 py-3 text-center">12-15 anos</td>
                    <td className="px-4 py-3 text-center">15-20 anos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Qual Escolher? */}
        <section className="py-16 bg-blue-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-8 text-center">Qual Escolher?</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-3 text-blue-600">
                  Escolha ESQUENTADOR se:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Mora sozinho ou com 1-2 pessoas</li>
                  <li>• Tem orçamento limitado (menos de €600)</li>
                  <li>• Não tem espaço para equipamento grande</li>
                  <li>• Já tem gás canalizado ou botija</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-3 text-orange-600">
                  Escolha CALDEIRA se:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Precisa de aquecimento central + água quente</li>
                  <li>• Tem família grande (4+ pessoas)</li>
                  <li>• Vive em zona muito fria (Montalegre, Bragança)</li>
                  <li>• Quer conforto máximo no inverno</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-3 text-green-600">
                  Escolha BOMBA DE CALOR se:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Quer poupar a longo prazo</li>
                  <li>• Tem espaço exterior para instalação</li>
                  <li>• Preocupa-se com o ambiente</li>
                  <li>• Pode investir €1.500-2.500 inicialmente</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Custos a 10 Anos */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6 text-center">Custo Total a 10 Anos</h2>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="font-bold">Esquentador a Gás</span>
                  <span className="text-2xl font-black text-blue-600">€4.100</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="font-bold">Caldeira Mural</span>
                  <span className="text-2xl font-black text-orange-600">€7.200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Bomba de Calor</span>
                  <span className="text-2xl font-black text-green-600">€3.800</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6 text-center">
                Cálculo inclui instalação + consumo mensal + manutenção. A bomba de calor amortiza em 4-5 anos.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <Zap className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-black mb-4">
              Precisa de Ajuda a Escolher?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Instalamos e fazemos manutenção de esquentadores, caldeiras e bombas de calor em 
              <a href="/macedo-cavaleiros" className="underline hover:no-underline"> Macedo de Cavaleiros</a>, 
              <a href="/mirandela" className="underline hover:no-underline"> Mirandela</a> e toda a região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
                <Phone className="w-6 h-6" />
                928 484 451
              </a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20ajuda%20a%20escolher%20sistema%20de%20aquecimento%20de%20água." className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-600 transition-all shadow-lg">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Artigos Relacionados */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-black mb-6">Artigos Relacionados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="/blog/manutencao-esquentador" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2 text-blue-600">Manutenção de Esquentador</h3>
                <p className="text-gray-600 text-sm">Como fazer manutenção e prolongar a vida útil do seu esquentador.</p>
              </a>
              <a href="/blog/instalacao-casa-banho-completa-guia" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2 text-blue-600">Instalação Completa de Casa de Banho</h3>
                <p className="text-gray-600 text-sm">Guia completo com etapas, materiais e preços.</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
