// Blog article: "Renovação de Canalização em Casas Antigas de Trás-os-Montes"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, Home, AlertTriangle, CheckCircle, Wrench } from 'lucide-react';

export default function CanalizacaoCasaAntiga() {
  useEffect(() => {
    document.title = "Renovação de Canalização em Casas Antigas de Trás-os-Montes | Guia 2026";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Guia completo para renovar canalização em casas antigas de Trás-os-Montes: tubos de chumbo, paredes de granito, custos e soluções.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/blog/canalizacao-casa-antiga-renovacao');

    // JSON-LD Article Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Renovação de Canalização em Casas Antigas de Trás-os-Montes",
      "description": "Guia especializado para renovar canalização em casas antigas: tubos de chumbo, paredes de granito e soluções modernas.",
      "author": {
        "@type": "Organization",
        "name": "Norte Reparos"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Norte Reparos",
        "logo": {
          "@type": "ImageObject",
          "url": "https://canalizador-norte-reparos.pt/logo.png"
        }
      },
      "datePublished": "2026-02-19",
      "dateModified": "2026-02-19"
    });
    document.head.appendChild(script);
  }, []);

  const problemas = [
    {
      titulo: "Tubos de Chumbo",
      descricao: "Comuns em casas pré-1980. Tóxicos e proibidos desde 2003.",
      risco: "CRÍTICO",
      solucao: "Substituição total por PEX ou PPR. Não há alternativa segura."
    },
    {
      titulo: "Tubos de Ferro Galvanizado",
      descricao: "Oxidam por dentro, reduzem pressão e contaminam água.",
      risco: "ALTO",
      solucao: "Substituir por multicamada ou cobre. Vida útil: 40-50 anos."
    },
    {
      titulo: "Paredes de Granito Maciço",
      descricao: "Dificulta passagem de tubagens. Comum em Trás-os-Montes.",
      risco: "MÉDIO",
      solucao: "Tubagem à vista ou pelo exterior. Evitar furar granito."
    },
    {
      titulo: "Ausência de Isolamento",
      descricao: "Tubos expostos ao frio rebentam no inverno.",
      risco: "ALTO",
      solucao: "Isolamento térmico obrigatório em zonas não aquecidas."
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
                🏚️ CASAS ANTIGAS
              </span>
              <h1 className="text-4xl md:text-5xl font-black mb-6">
                Renovação de Canalização em Casas Antigas
              </h1>
              <p className="text-xl opacity-90">
                Guia especializado para casas tradicionais de Trás-os-Montes: tubos de chumbo, paredes de granito e soluções modernas.
              </p>
            </div>
          </div>
        </section>

        {/* Introdução */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                As casas antigas de <a href="/canalizador-braganca" className="text-blue-600 hover:underline">Bragança</a>, 
                <a href="/canalizador-chaves" className="text-blue-600 hover:underline"> Chaves</a>, 
                <a href="/canalizador-mirandela" className="text-blue-600 hover:underline"> Mirandela</a> e 
                <a href="/canalizador-macedo-de-cavaleiros" className="text-blue-600 hover:underline"> Macedo de Cavaleiros</a> têm 
                desafios únicos: <strong>paredes de granito maciço</strong>, <strong>tubos de chumbo</strong> e 
                <strong> ausência de isolamento térmico</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Renovar a canalização nestas casas requer conhecimento específico e técnicas adaptadas. 
                Este guia explica os problemas mais comuns e as melhores soluções.
              </p>
            </div>
          </div>
        </section>

        {/* Alerta Chumbo */}
        <section className="py-12 bg-red-50">
          <div className="container max-w-3xl">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-red-500">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-red-700 mb-2">PERIGO: Tubos de Chumbo</h2>
                <p className="text-gray-700 mb-3">
                  Se a sua casa foi construída antes de 1980, provavelmente tem tubos de chumbo. 
                  O chumbo contamina a água e causa problemas graves de saúde, especialmente em crianças.
                </p>
                <p className="text-gray-700 font-bold">
                  ⚠️ A substituição é OBRIGATÓRIA por lei desde 2003. Não adie esta renovação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problemas Comuns */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-8 text-center">Problemas Comuns em Casas Antigas</h2>
            <div className="space-y-6">
              {problemas.map((problema, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className={`p-6 border-l-4 ${
                    problema.risco === 'CRÍTICO' ? 'border-red-500 bg-red-50' :
                    problema.risco === 'ALTO' ? 'border-orange-500 bg-orange-50' :
                    'border-blue-500 bg-blue-50'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        problema.risco === 'CRÍTICO' ? 'bg-red-500 text-white' :
                        problema.risco === 'ALTO' ? 'bg-orange-500 text-white' :
                        'bg-blue-500 text-white'
                      }`}>
                        {problema.risco}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{problema.titulo}</h3>
                    <p className="text-gray-700 mb-4">{problema.descricao}</p>
                    <div className="flex items-start gap-2 bg-white/70 p-3 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm"><strong>Solução:</strong> {problema.solucao}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Desafio: Paredes de Granito */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6 text-center">O Desafio das Paredes de Granito</h2>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-700 mb-4">
                As casas tradicionais de Trás-os-Montes têm paredes de <strong>granito maciço com 50-80cm de espessura</strong>. 
                Furar estas paredes é:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>Muito caro</strong> — requer equipamento especializado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>Demorado</strong> — pode levar dias</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>Arriscado</strong> — pode danificar a estrutura</span>
                </li>
              </ul>
              <h3 className="font-bold text-lg mb-3 text-blue-600">Soluções Alternativas:</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">1. Tubagem à Vista</h4>
                  <p className="text-sm text-gray-700">
                    Passar tubos pelo interior, protegidos com calhas decorativas. Solução mais económica.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">2. Tubagem pelo Exterior</h4>
                  <p className="text-sm text-gray-700">
                    Passar tubos pela fachada exterior com isolamento térmico reforçado. Ideal para climas frios.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">3. Aproveitar Aberturas Existentes</h4>
                  <p className="text-sm text-gray-700">
                    Usar portas, janelas e chaminés antigas para passar tubagens. Requer planeamento cuidadoso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Materiais Recomendados */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6 text-center">Materiais Recomendados para 2026</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-600">PEX (Polietileno Reticulado)</h3>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li>✅ Flexível — fácil de instalar</li>
                  <li>✅ Resistente ao frio</li>
                  <li>✅ Não oxida</li>
                  <li>✅ Económico</li>
                </ul>
                <p className="text-sm font-bold text-green-600">Custo: €3-5/metro</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-600">PPR (Polipropileno)</h3>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li>✅ Muito durável (50+ anos)</li>
                  <li>✅ Resistente a altas temperaturas</li>
                  <li>✅ Não contamina água</li>
                  <li>✅ Ideal para água quente</li>
                </ul>
                <p className="text-sm font-bold text-green-600">Custo: €4-7/metro</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-600">Multicamada</h3>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li>✅ Combina plástico + alumínio</li>
                  <li>✅ Mantém forma após dobrar</li>
                  <li>✅ Resistente a UV</li>
                  <li>✅ Boa para exterior</li>
                </ul>
                <p className="text-sm font-bold text-green-600">Custo: €5-8/metro</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-600">Cobre</h3>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li>✅ Durabilidade máxima</li>
                  <li>✅ Antibacteriano</li>
                  <li>✅ Resistente a pressão</li>
                  <li>❌ Mais caro</li>
                </ul>
                <p className="text-sm font-bold text-orange-600">Custo: €8-12/metro</p>
              </div>
            </div>
          </div>
        </section>

        {/* Isolamento Térmico */}
        <section className="py-16 bg-blue-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6 text-center">Isolamento Térmico: OBRIGATÓRIO</h2>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-700 mb-4">
                Em <a href="/canalizador-montalegre" className="text-blue-600 hover:underline">Montalegre</a>, 
                <a href="/canalizador-braganca" className="text-blue-600 hover:underline"> Bragança</a> e outras zonas frias, 
                as temperaturas podem chegar a <strong>-10°C no inverno</strong>. Tubos sem isolamento rebentam.
              </p>
              <h3 className="font-bold text-lg mb-3">Onde Isolar:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Sótãos e águas-furtadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Garagens e arrecadações não aquecidas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Tubagens exteriores</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Caves e porões</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                <strong>Custo do isolamento:</strong> €2-4/metro. Investimento pequeno que evita reparações caras.
              </p>
            </div>
          </div>
        </section>

        {/* Custos Totais */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6 text-center">Custos de Renovação Completa</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Tipo de Casa</th>
                    <th className="px-6 py-4 text-right font-bold">Custo Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4">Apartamento T2 (50m²)</td>
                    <td className="px-6 py-4 text-right font-bold text-blue-600">€1.500-2.500</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-6 py-4">Casa T3 (100m²)</td>
                    <td className="px-6 py-4 text-right font-bold text-blue-600">€2.500-4.000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Casa antiga com granito (150m²)</td>
                    <td className="px-6 py-4 text-right font-bold text-blue-600">€4.000-7.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Valores incluem materiais, mão de obra e isolamento térmico. Prazo: 5-10 dias úteis.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <Home className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-black mb-4">
              Precisa de Renovar a Canalização?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Especialistas em casas antigas de Trás-os-Montes. Conhecemos os desafios das paredes de granito 
              e do clima rigoroso. Orçamento gratuito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
                <Phone className="w-6 h-6" />
                928 484 451
              </a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20renovar%20a%20canalização%20de%20uma%20casa%20antiga." className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-800 transition-all shadow-lg">
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
              <a href="/blog/problemas-canalizacao-inverno-solucoes" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2 text-blue-600">Problemas de Canalização no Inverno</h3>
                <p className="text-gray-600 text-sm">Como proteger tubagens do frio extremo em Trás-os-Montes.</p>
              </a>
              <a href="/blog/sinais-fugas-agua-escondidas" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2 text-blue-600">Sinais de Fugas de Água Escondidas</h3>
                <p className="text-gray-600 text-sm">Aprenda a detetar fugas antes que causem danos graves.</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
