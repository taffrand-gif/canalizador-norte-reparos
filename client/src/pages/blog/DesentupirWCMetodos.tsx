// Blog article: "Desentupir WC - Métodos Caseiros vs Profissional"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, AlertTriangle, CheckCircle, Droplets, ThumbsUp, ThumbsDown } from 'lucide-react';

export default function DesentupirWCMetodos() {
  useEffect(() => {
    document.title = "Desentupir WC Entupido - Métodos Caseiros vs Chamar Canalizador | Guia";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'WC entupido? Aprenda métodos caseiros seguros para desentupir e saiba quando é hora de chamar um canalizador profissional. Guia prático com dicas.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/blog/desentupir-wc-metodos-caseiros');
  }, []);

  const metodosCaseiros = [
    {
      nome: "Água Quente + Detergente",
      como: "Deite 1L de água quente (não fervente) com detergente da loiça. Espere 15 min.",
      eficacia: "60%",
      quando: "Entupimentos leves por matéria orgânica",
      cuidado: "Não use água a ferver - pode rachar a sanita"
    },
    {
      nome: "Desentupidor de Borracha",
      como: "Coloque o desentupidor sobre o buraco e faça movimentos de bomba (push-pull).",
      eficacia: "75%",
      quando: "Entupimentos médios, objetos moles",
      cuidado: "Certifique-se que há água suficiente para criar vácuo"
    },
    {
      nome: "Bicarbonato + Vinagre",
      como: "1 chávena de bicarbonato + 1 chávena de vinagre. Espere 30 min, depois água quente.",
      eficacia: "50%",
      quando: "Entupimentos leves, maus cheiros",
      cuidado: "Não misture com outros produtos químicos"
    },
    {
      nome: "Arame/Cabide Desdobrado",
      como: "Desdobre um cabide de arame e use para empurrar/puxar a obstrução.",
      eficacia: "40%",
      quando: "Objetos visíveis ou próximos da superfície",
      cuidado: "Cuidado para não riscar a porcelana"
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
                🚽 GUIA PRÁTICO
              </span>
              <h1 className="text-4xl md:text-5xl font-black mb-6">
                WC Entupido: O Que Fazer?
              </h1>
              <p className="text-xl opacity-90">
                Métodos caseiros que funcionam vs quando é hora de chamar um profissional.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16">
          <div className="container max-w-3xl">
            
            {/* Aviso inicial */}
            <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold text-yellow-700 mb-2">Antes de Começar</h2>
                  <p className="text-gray-700">
                    <strong>Não puxe o autoclismo repetidamente</strong> se a água não escoar - 
                    vai transbordar e piorar a situação. Primeiro, tente os métodos abaixo.
                  </p>
                </div>
              </div>
            </div>

            {/* Métodos Caseiros */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">Métodos Caseiros (Tente Primeiro)</h2>
              <div className="space-y-6">
                {metodosCaseiros.map((metodo, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">{metodo.nome}</h3>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                          Eficácia: {metodo.eficacia}
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-blue-600">Como:</span>
                          <span>{metodo.como}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-green-600">Quando usar:</span>
                          <span>{metodo.quando}</span>
                        </div>
                        <div className="flex items-start gap-2 bg-orange-50 p-2 rounded">
                          <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{metodo.cuidado}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* O que NÃO fazer */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6 text-red-600">❌ O Que NÃO Fazer</h2>
              <div className="bg-red-50 rounded-xl p-6">
                <ul className="space-y-3">
                  {[
                    "Usar produtos químicos agressivos (ácidos) - danificam canos e sanita",
                    "Misturar lixívia com outros produtos - gases tóxicos",
                    "Usar objetos pontiagudos - riscam e podem partir a porcelana",
                    "Puxar o autoclismo repetidamente - causa transbordo",
                    "Ignorar o problema - entupimentos pioram com o tempo"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ThumbsDown className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Quando chamar profissional */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">🔧 Quando Chamar um Canalizador?</h2>
              <div className="bg-blue-50 rounded-xl p-6">
                <ul className="space-y-3">
                  {[
                    "Métodos caseiros não funcionaram após 2-3 tentativas",
                    "Água sobe noutros pontos da casa (lavatório, duche)",
                    "Mau cheiro persistente mesmo após desentupir",
                    "Entupimentos frequentes (mais de 1x por mês)",
                    "Suspeita de objeto sólido (brinquedo, telemóvel, etc.)",
                    "Água escoa muito lentamente mesmo após tentativas",
                    "Vários pontos da casa entupidos ao mesmo tempo"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Comparação */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">Caseiro vs Profissional</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span>🏠</span> Método Caseiro
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><ThumbsUp className="w-4 h-4 text-green-500" /> Gratuito ou muito barato</li>
                    <li className="flex items-center gap-2"><ThumbsUp className="w-4 h-4 text-green-500" /> Imediato, sem espera</li>
                    <li className="flex items-center gap-2"><ThumbsDown className="w-4 h-4 text-red-500" /> Eficácia limitada (50-75%)</li>
                    <li className="flex items-center gap-2"><ThumbsDown className="w-4 h-4 text-red-500" /> Não resolve causa raiz</li>
                    <li className="flex items-center gap-2"><ThumbsDown className="w-4 h-4 text-red-500" /> Risco de piorar</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span>🔧</span> Canalizador Profissional
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><ThumbsUp className="w-4 h-4 text-green-500" /> Eficácia 99%</li>
                    <li className="flex items-center gap-2"><ThumbsUp className="w-4 h-4 text-green-500" /> Equipamento profissional</li>
                    <li className="flex items-center gap-2"><ThumbsUp className="w-4 h-4 text-green-500" /> Identifica causa raiz</li>
                    <li className="flex items-center gap-2"><ThumbsUp className="w-4 h-4 text-green-500" /> Garantia no trabalho</li>
                    <li className="flex items-center gap-2"><ThumbsDown className="w-4 h-4 text-red-500" /> Custo: 60-100€</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <Droplets className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-black mb-4">
              Métodos Caseiros Não Funcionaram?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Não se preocupe. Resolvemos em menos de 1 hora, sem sujidade, preço fixo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
                <Phone className="w-6 h-6" />
                928 484 451
              </a>
              <a href="https://wa.me/351928484451?text=Olá,%20tenho%20o%20WC%20entupido%20e%20preciso%20de%20ajuda" className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-800 transition-all shadow-lg">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
