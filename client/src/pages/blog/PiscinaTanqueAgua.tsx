// Blog article: "Canalização para Piscinas e Tanques de Água: Guia Completo"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, Droplets, CheckCircle, AlertTriangle } from 'lucide-react';

export default function PiscinaTanqueAgua() {
  useEffect(() => {
    document.title = "Canalização para Piscinas e Tanques de Água: Guia Completo 2026";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Guia completo para instalação de canalização em piscinas, tanques de água e sistemas de irrigação agrícola em Trás-os-Montes.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/blog/piscina-tanque-agua-canalizacao');

    // JSON-LD Article Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Canalização para Piscinas e Tanques de Água: Guia Completo",
      "description": "Guia especializado para instalação de sistemas de água em piscinas, tanques e irrigação agrícola.",
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

  const tiposPiscina = [
    {
      tipo: "Piscina Enterrada",
      descricao: "Instalação permanente com sistema de filtração completo.",
      custo: "€2.000-4.000",
      componentes: ["Bomba de filtração", "Sistema de drenagem", "Enchimento automático", "Aquecimento (opcional)"]
    },
    {
      tipo: "Piscina Sobrelevada",
      descricao: "Mais simples, requer menos canalização.",
      custo: "€800-1.500",
      componentes: ["Ligação de enchimento", "Drenagem básica", "Filtro portátil"]
    },
    {
      tipo: "Piscina Natural/Biológica",
      descricao: "Sistema de filtração natural com plantas.",
      custo: "€3.000-6.000",
      componentes: ["Zona de regeneração", "Bomba de circulação", "Sistema de overflow", "Drenagem"]
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
                🏊 GUIA COMPLETO 2026
              </span>
              <h1 className="text-4xl md:text-5xl font-black mb-6">
                Canalização para Piscinas e Tanques de Água
              </h1>
              <p className="text-xl opacity-90">
                Tudo sobre instalação de sistemas de água para piscinas, tanques e irrigação agrícola em Trás-os-Montes.
              </p>
            </div>
          </div>
        </section>

        {/* Introdução */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                Em <a href="/canalizador-macedo-de-cavaleiros" className="text-blue-600 hover:underline">Macedo de Cavaleiros</a>, 
                <a href="/canalizador-mirandela" className="text-blue-600 hover:underline"> Mirandela</a> e 
                <a href="/canalizador-braganca" className="text-blue-600 hover:underline"> Bragança</a>, muitas propriedades 
                têm piscinas, tanques de água para agricultura ou sistemas de irrigação. A canalização correta 
                é essencial para eficiência e durabilidade.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Este guia explica os diferentes sistemas, custos e requisitos técnicos para cada tipo de instalação.
              </p>
            </div>
          </div>
        </section>

        {/* Tipos de Piscina */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-8 text-center">Canalização para Piscinas</h2>
            <div className="space-y-6">
              {tiposPiscina.map((piscina, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-blue-600 text-white p-4">
                    <h3 className="text-xl font-bold">{piscina.tipo}</h3>
                    <p className="text-sm opacity-90 mt-1">{piscina.descricao}</p>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="text-sm text-gray-600">Custo de Canalização:</span>
                      <p className="text-2xl font-bold text-blue-600">{piscina.custo}</p>
                    </div>
                    <h4 className="font-bold mb-3">Componentes Necessários:</h4>
                    <ul className="space-y-2">
                      {piscina.componentes.map((comp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sistema de Filtração */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6 text-center">Sistema de Filtração: Como Funciona</h2>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <strong>Skimmer</strong> — Aspira água da superfície (folhas, insetos)
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <strong>Bomba</strong> — Puxa água através do sistema (potência: 0,5-1,5 CV)
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <strong>Filtro</strong> — Remove impurezas (areia, cartucho ou diatomáceas)
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <strong>Retorno</strong> — Devolve água limpa à piscina
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
                  <div>
                    <strong>Dreno de Fundo</strong> — Remove sujidade do fundo
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Tanques de Água */}
        <section className="py-16 bg-blue-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6 text-center">Tanques de Água para Agricultura</h2>
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <p className="text-gray-700 mb-4">
                Em Trás-os-Montes, muitas propriedades agrícolas usam tanques para armazenar água de poços, 
                nascentes ou chuva. A canalização correta garante pressão adequada e evita desperdício.
              </p>
              <h3 className="font-bold text-lg mb-3">Tipos de Tanques:</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Tanque Enterrado (Cisterna)</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Capacidade: 5.000-50.000 litros. Ideal para grandes propriedades.
                  </p>
                  <p className="text-sm"><strong>Custo canalização:</strong> €800-2.000</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Tanque Aéreo (Depósito)</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Capacidade: 500-10.000 litros. Fornece pressão por gravidade.
                  </p>
                  <p className="text-sm"><strong>Custo canalização:</strong> €400-1.000</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Tanque de Betão Tradicional</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Comum em casas antigas. Requer impermeabilização.
                  </p>
                  <p className="text-sm"><strong>Custo renovação:</strong> €600-1.500</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-3">Componentes Essenciais:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Bomba de pressão</strong> — Para distribuição (0,5-2 CV)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Filtro de entrada</strong> — Remove sedimentos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Válvula de retenção</strong> — Evita retorno de água</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Boia automática</strong> — Controla nível de água</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Overflow</strong> — Evita transbordamento</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Irrigação Agrícola */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6 text-center">Sistemas de Irrigação</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-600">Rega Gota-a-Gota</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Mais eficiente. Poupa até 60% de água. Ideal para hortas e vinhas.
                </p>
                <p className="text-sm mb-2"><strong>Custo:</strong> €500-2.000 (1 hectare)</p>
                <p className="text-sm"><strong>Pressão:</strong> 1-2 bar</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-600">Aspersores</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Para grandes áreas. Simula chuva. Ideal para prados e pomares.
                </p>
                <p className="text-sm mb-2"><strong>Custo:</strong> €800-3.000 (1 hectare)</p>
                <p className="text-sm"><strong>Pressão:</strong> 2-4 bar</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-600">Rega por Gravidade</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Tradicional. Usa desnível do terreno. Sem custos de energia.
                </p>
                <p className="text-sm mb-2"><strong>Custo:</strong> €300-1.000</p>
                <p className="text-sm"><strong>Pressão:</strong> Natural (gravidade)</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-600">Microaspersão</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Híbrido entre gota-a-gota e aspersores. Para árvores de fruto.
                </p>
                <p className="text-sm mb-2"><strong>Custo:</strong> €600-2.500 (1 hectare)</p>
                <p className="text-sm"><strong>Pressão:</strong> 1,5-3 bar</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dicas Importantes */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6 text-center">Dicas Importantes</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  Dimensione a Bomba Corretamente
                </h3>
                <p className="text-gray-700 text-sm">
                  Bomba subdimensionada = pressão fraca. Bomba sobredimensionada = desperdício de energia. 
                  Calcule com base na altura, distância e número de pontos de água.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Proteja do Frio no Inverno
                </h3>
                <p className="text-gray-700 text-sm">
                  Em Trás-os-Montes, tubagens exteriores devem ter isolamento térmico ou ser enterradas 
                  a 60-80cm de profundidade. Esvazie sistemas não usados no inverno.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Use Materiais Resistentes a UV
                </h3>
                <p className="text-gray-700 text-sm">
                  Tubagens expostas ao sol degradam-se rapidamente. Use PE (polietileno) com proteção UV 
                  ou PVC de qualidade superior.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Manutenção */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black mb-6 text-center">Manutenção Anual</h2>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold mb-4">Checklist de Manutenção:</h3>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span>Limpar filtros de piscina (mensal durante uso)</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span>Verificar pressão da bomba (trimestral)</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span>Limpar tanques de água (anual)</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span>Verificar válvulas e conexões (semestral)</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span>Testar sistema de irrigação (início de época)</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span>Drenar sistemas antes do inverno</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <Droplets className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-black mb-4">
              Precisa de Instalar ou Reparar Sistema de Água?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Instalamos e fazemos manutenção de piscinas, tanques e sistemas de irrigação em 
              <a href="/canalizador-macedo-de-cavaleiros" className="underline hover:no-underline"> Macedo de Cavaleiros</a>, 
              <a href="/canalizador-mirandela" className="underline hover:no-underline"> Mirandela</a> e toda a região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
                <Phone className="w-6 h-6" />
                928 484 451
              </a>
              <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20ajuda%20com%20canalização%20para%20piscina/tanque." className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-800 transition-all shadow-lg">
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
              <a href="/blog/poupar-agua-casa-dicas-praticas" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2 text-blue-600">Como Poupar Água em Casa</h3>
                <p className="text-gray-600 text-sm">12 dicas práticas para reduzir consumo e poupar dinheiro.</p>
              </a>
              <a href="/blog/sinais-fugas-agua-escondidas" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2 text-blue-600">Sinais de Fugas de Água</h3>
                <p className="text-gray-600 text-sm">Como detetar fugas antes que causem danos graves.</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
