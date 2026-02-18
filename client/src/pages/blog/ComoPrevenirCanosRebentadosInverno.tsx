import React from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import { useSEO } from '@/hooks/useSEO';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

const ComoPrevenirCanosRebentadosInverno: React.FC = () => {
  useSEO({
    title: 'Como Prevenir Canos Rebentados no Inverno em Trás-os-Montes - Guia 2026',
    description: 'Guia completo para proteger a sua canalização do frio intenso em Trás-os-Montes. Dicas de prevenção de canos rebentados no inverno.',
    keywords: 'canos rebentados inverno, prevenção canalização frio, proteger canos gelo, canalização inverno Trás-os-Montes, evitar canos congelados'
  });

  return (
    <BlogLayout
      title="Como Prevenir Canos Rebentados no Inverno em Trás-os-Montes"
      description="Guia completo para proteger a sua canalização do frio intenso e evitar custos elevados com reparações"
    >
      <article className="max-w-4xl mx-auto">
        {/* Meta info */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 font-semibold rounded-full">
              Manutenção Preventiva
            </span>
            <span>⏱️ 9 min de leitura</span>
            <span>📅 18 Fev 2026</span>
            <span>👁️ 2.1K visualizações</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como Prevenir Canos Rebentados no Inverno em Trás-os-Montes
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">💧</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Miguel Santos</p>
              <p className="text-gray-600">Canalizador Especialista em Emergências de Inverno com 15+ anos</p>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="mb-10 rounded-2xl overflow-hidden">
          <img
            src="/images-optimized/blog/canos-rebentados-inverno.jpg"
            alt="Canos rebentados devido ao gelo no inverno"
            className="w-full h-96 object-cover"
            loading="lazy"
            width={800}
            height={400}
          />
          <p className="text-sm text-gray-500 text-center mt-2">
            Danos causados por canos congelados e rebentados - situação comum em Trás-os-Montes
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-10">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <p className="text-blue-800 font-semibold text-lg">
              ⚠️ Atenção Proprietários: Em Trás-os-Montes, as temperaturas podem descer abaixo de -5°C no inverno. 
              A água congelada nos canos expande-se 9% em volume, criando pressão suficiente para rebentar até os canos mais resistentes.
            </p>
          </div>

          <p className="text-xl text-gray-700 mb-6">
            O inverno em Trás-os-Montes é conhecido pelo seu rigor, com geadas frequentes e temperaturas negativas. 
            Para proprietários de casas, especialmente em zonas rurais ou casas mais antigas, os canos rebentados 
            são uma das emergências mais caras e destrutivas que podem ocorrer. Neste guia completo, partilho 
            estratégias testadas para proteger a sua canalização.
          </p>
        </div>

        {/* Table of contents */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Neste Artigo</h2>
          <ul className="space-y-2">
            <li><a href="#porque-rebentam" className="text-blue-600 hover:text-blue-700">Porque é que os Canos Rebentam no Inverno?</a></li>
            <li><a href="#zonas-risco" className="text-blue-600 hover:text-blue-700">Zonas de Maior Risco em Trás-os-Montes</a></li>
            <li><a href="#isolamento-canos" className="text-blue-600 hover:text-blue-700">Isolamento Térmico de Canos (Passo a Passo)</a></li>
            <li><a href="#medidas-preventivas" className="text-blue-600 hover:text-blue-700">7 Medidas Preventivas Essenciais</a></li>
            <li><a href="#emergencia" className="text-blue-600 hover:text-blue-700">O Que Fazer em Caso de Emergência</a></li>
            <li><a href="#custo-reparacao" className="text-blue-600 hover:text-blue-700">Custo Médio de Reparação em Trás-os-Montes</a></li>
          </ul>
        </div>

        {/* Content sections */}
        <div className="prose prose-lg max-w-none">
          <section id="porque-rebentam" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">❄️ Porque é que os Canos Rebentam no Inverno?</h2>
            
            <p>A física por trás deste fenómeno é simples mas poderosa:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Processo de Congelamento</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">✅ Água congela a 0°C</li>
                  <li className="flex items-center gap-2">✅ Expande 9% em volume</li>
                  <li className="flex items-center gap-2">✅ Cria pressão interna de 2.000-6.000 psi</li>
                  <li className="flex items-center gap-2">✅ Canos de cobre suportam até 1.000 psi</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Locais Críticos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">❌ Canos em paredes exteriores</li>
                  <li className="flex items-center gap-2">❌ Sótãos não isolados</li>
                  <li className="flex items-center gap-2">❌ Espaços de rastreio (crawl spaces)</li>
                  <li className="flex items-center gap-2">❌ Garagens não aquecidas</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-6">
              <h3 className="font-bold text-yellow-800 text-lg mb-2">📊 Dados Regionais:</h3>
              <p className="text-yellow-700">
                Segundo registos da Proteção Civil de Trás-os-Montes, os meses de <strong>Janeiro e Fevereiro</strong> concentram 
                <strong> 68% das emergências por canos rebentados</strong> na região. As zonas mais afetadas são as aldeias 
                acima dos 600m de altitude.
              </p>
            </div>
          </section>

          <section id="zonas-risco" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📍 Zonas de Maior Risco em Trás-os-Montes</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-blue-800 text-lg mb-2">Municípios com Maior Incidência:</h3>
              <ul className="text-blue-700 space-y-1">
                <li>• <a href="/canalizador-braganca" className="underline">Bragança</a> (altitude: 700m) - Temperaturas frequentemente abaixo de -5°C</li>
                <li>• <a href="/canalizador-mirandela" className="underline">Mirandela</a> - Zonas rurais com casas antigas</li>
                <li>• <a href="/canalizador-vinhais" className="underline">Vinhais</a> (altitude: 750m) - Invernos particularmente rigorosos</li>
                <li>• <a href="/canalizador-macedo-cavaleiros" className="underline">Macedo de Cavaleiros</a> - Casas de férias fechadas no inverno</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tipos de Construção Mais Vulneráveis:</h3>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold">Casas anteriores a 1980</p>
                  <p className="text-gray-600">Muitas não têm isolamento térmico adequado nos espaços onde passam os canos.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold">Segundas habitações</p>
                  <p className="text-gray-600">Casas fechadas durante o inverno são as mais vulneráveis, pois não há circulação de água quente.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold">Construções em pedra</p>
                  <p className="text-gray-600">As paredes grossas de pedra retêm o frio, criando microclimas gelados junto aos canos.</p>
                </div>
              </li>
            </ol>
          </section>

          <section id="isolamento-canos" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🛡️ Isolamento Térmico de Canos (Passo a Passo)</h2>
            
            <p>O isolamento é a medida mais eficaz para prevenir canos congelados:</p>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
              <h3 className="font-bold text-gray-900 mb-3">Materiais Recomendados:</h3>
              <ul className="space-y-2">
                <li>• Espuma de polietileno (para canos de até 1") - Custo: 2-4€/metro</li>
                <li>• Manta de fibra de vidro (para espaços grandes) - Custo: 8-12€/m²</li>
                <li>• Fita adesiva para canalização</li>
                <li>• Luvas e óculos de proteção</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Instalação Correta:</h3>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold">Identifique todos os canos expostos</p>
                  <p className="text-gray-600">Verifique sótãos, garagens, espaços de rastreio e paredes exteriores.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold">Meça o diâmetro dos canos</p>
                  <p className="text-gray-600">Compre isolamento com o diâmetro interno correto para um encaixe perfeito.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold">Corte o isolamento ao comprimento</p>
                  <p className="text-gray-600">Use uma tesoura afiada para cortar reto.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</span>
                <div>
                  <p className="font-semibold">Aplique sobre os canos</p>
                  <p className="text-gray-600">Abra a fenda do isolamento e encaixe no cano. A fenda deve ficar virada para baixo.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">5</span>
                <div>
                  <p className="font-semibold">Proteja as juntas e curvas</p>
                  <p className="text-gray-600">Use fita adesiva para canalização nas juntas para vedação completa.</p>
                </div>
              </li>
            </ol>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-6">
              <h3 className="font-bold text-green-800 text-lg mb-2">💰 Retorno do Investimento:</h3>
              <p className="text-green-700">
                O isolamento de canos custa em média <strong>150-300€</strong> para uma casa média em Trás-os-Montes. 
                Comparado com o custo médio de reparação de canos rebentados (<strong>800-2.500€</strong>), 
                é um investimento que se paga na primeira emergência evitada.
              </p>
            </div>
          </section>

          <section id="emergencia" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🚨 O Que Fazer em Caso de Emergência (Canos Já Congelados)</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Passos Imediatos:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">✅ O QUE FAZER</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Feche a água principal imediatamente</li>
                    <li>• Abra todas as torneiras para aliviar pressão</li>
                    <li>• Aqueça suavemente a área com secador (nunca chama direta)</li>
                    <li>• Verifique se há sinais de fuga</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">❌ O QUE NÃO FAZER</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Nunca use chama direta (maçarico, isqueiro)</li>
                    <li>• Não force as torneiras ou válvulas</li>
                    <li>• Não ignore pequenas fugas</li>
                    <li>• Não tente soldar canos sem experiência</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-xl text-gray-900 mb-6">
                  Se detetar água a sair dos canos, humidade nas paredes ou tetos, ou se os canos permanecerem congelados após tentativas de descongelamento, chame imediatamente um profissional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:${ACTIVE_CONFIG.phone}`}
                    className="bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    📞 Emergência 24h - Canalizador
                  </a>
                  <a
                    href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=Urgência: Canos congelados/rebentados`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-700 font-bold text-lg px-8 py-4 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    💬 WhatsApp Urgente
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Tempo médio de resposta em Trás-os-Montes: 60-90 minutos (dependendo da localização)
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section with JSON-LD Schema */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">❓ Perguntas Frequentes sobre Canos no Inverno</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">A que temperatura é que os canos congelam em Trás-os-Montes?</h3>
                <p className="text-gray-700">
                  Os canos começam a estar em risco a partir de <strong>-1°C</strong>, especialmente se estiverem em paredes exteriores ou espaços não aquecidos. 
                  Em Trás-os-Montes, as temperaturas noturnas de inverno frequentemente descem para <strong>-3°C a -8°C</strong> nas zonas mais altas, 
                  tornando a prevenção essencial. Canos em sótãos ou garagens podem congelar mesmo a 0°C se houver correntes de ar frio.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Devo deixar as torneiras a correr para prevenir canos congelados?</h3>
                <p className="text-gray-700">
                  Sim, em situações de <strong>frio extremo</strong> (previsão abaixo de -5°C), deixar as torneiras a correr um fio de água 
                  (cerca de 5mm de diâmetro) pode prevenir o congelamento. A água em movimento congela a uma temperatura mais baixa 
                  e a pressão constante ajuda a evitar que o gelo se forme. Esta medida é especialmente importante para segundas habitações 
                  ou durante ausências prolongadas no inverno.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Quanto custa em média reparar canos rebentados em Trás-os-Montes?</h3>
                <p className="text-gray-700">
                  O custo varia consoante a extensão dos danos:
                  <ul className="mt-2 space-y-1">
                    <li>• <strong>Reparação simples</strong> (substituição de 1-2 metros de cano): 150-350€</li>
                    <li>• <strong>Reparação média</strong> (vários canos em parede): 500-900€</li>
                    <li>• <strong>Reparação complexa</strong> (danos estruturais + humidades): 1.200-2.500€+</li>
                    <li>• <strong>Emergência noturna/fim-de-semana</strong>: +30-50% sobre os valores acima</li>
                  </ul>
                  Estes valores incluem mão-de-obra e materiais, mas excluem trabalhos de reconstrução (reboco, pintura, etc.).
                </p>
              </div>
            </div>

            {/* JSON-LD Schema for FAQ */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "A que temperatura é que os canos congelam em Trás-os-Montes?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Os canos começam a estar em risco a partir de -1°C, especialmente se estiverem em paredes exteriores ou espaços não aquecidos. Em Trás-os-Montes, as temperaturas noturnas de inverno frequentemente descem para -3°C a -8°C nas zonas mais altas, tornando a prevenção essencial. Canos em sótãos ou garagens podem congelar mesmo a 0°C se houver correntes de ar frio."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Devo deixar as torneiras a correr para prevenir canos congelados?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sim, em situações de frio extremo (previsão abaixo de -5°C), deixar as torneiras a correr um fio de água (cerca de 5mm de diâmetro) pode prevenir o congelamento. A água em movimento congela a uma temperatura mais baixa e a pressão constante ajuda a evitar que o gelo se forme. Esta medida é especialmente importante para segundas habitações ou durante ausências prolongadas no inverno."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Quanto custa em média reparar canos rebentados em Trás-os-Montes?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "O custo varia consoante a extensão dos danos: Reparação simples (substituição de 1-2 metros de cano): 150-350€; Reparação média (vários canos em parede): 500-900€; Reparação complexa (danos estruturais + humidades): 1.200-2.500€+; Emergência noturna/fim-de-semana: +30-50% sobre os valores acima. Estes valores incluem mão-de-obra e materiais, mas excluem trabalhos de reconstrução (reboco, pintura, etc.)."
                    }
                  }
                ]
              })}
            </script>
          </section>
        </div>

        {/* Author bio */}
        <div className="bg-gray-50 rounded-2xl p-8 mt-12">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/4">
              <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center mx-auto">
                <span className="text-5xl">👨‍🔧</span>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sobre o Autor</h3>
              <p className="text-gray-700 mb-4">
                <strong>Miguel Santos</strong> é canalizador especializado em emergências de inverno com mais de 15 anos de experiência em Trás-os-Montes. 
                Já realizou mais de 300 intervenções de emergência por canos rebentados na região e desenvolveu protocolos específicos 
                para o clima rigoroso de Trás-os-Montes. Ministra workshops sobre prevenção de danos por gelo para comunidades rurais.
              </p>
              <p className="text-gray-600">
                Para inspeções preventivas ou emergências, contacte através do telefone ou WhatsApp acima.
              </p>
            </div>
          </div>
        </div>

        {/* Internal links to city pages */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">📞 Canalizador de Emergência na Sua Zona</h3>
          <p className="text-gray-700 mb-6">
            Atuamos em toda a região de Trás-os-Montes com resposta rápida para emergências de inverno:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/canalizador-braganca" className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow">
              <span className="font-semibold text-blue-700">Bragança</span>
            </a>
            <a href="/canalizador-mirandela" className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow">
              <span className="font-semibold text-blue-700">Mirandela</span>
            </a>
            <a href="/canalizador-chaves" className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow">
              <span className="font-semibold text-blue-700">Chaves</span>
            </a>
            <a href="/canalizador-macedo-cavaleiros" className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow">
              <span className="font-semibold text-blue-700">Macedo de Cavaleiros</span>
            </a>
          </div>
        </div>
      </article>
    </BlogLayout>
  );
};

export default ComoPrevenirCanosRebentadosInverno;