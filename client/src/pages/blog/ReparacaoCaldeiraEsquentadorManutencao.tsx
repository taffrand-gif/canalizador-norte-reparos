import React from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import { useSEO } from '@/hooks/useSEO';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

const ReparacaoCaldeiraEsquentadorManutencao: React.FC = () => {
  useSEO({
    title: 'Reparação de Caldeira e Esquentador: Guia Completo de Manutenção 2026',
    description: 'Guia completo sobre reparação e manutenção de caldeiras e esquentadores em Trás-os-Montes. Sintomas, soluções e custos.',
    keywords: 'reparação caldeira, manutenção esquentador, caldeira não aquece, esquentador avariado, manutenção aquecimento'
  });

  return (
    <BlogLayout
      title="Reparação de Caldeira e Esquentador: Guia Completo de Manutenção"
      description="Tudo o que precisa saber sobre reparação, manutenção preventiva e custos de caldeiras e esquentadores em Trás-os-Montes"
    >
      <article className="max-w-4xl mx-auto">
        {/* Meta info */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 font-semibold rounded-full">
              Aquecimento e Água Quente
            </span>
            <span>⏱️ 12 min de leitura</span>
            <span>📅 18 Fev 2026</span>
            <span>👁️ 2.8K visualizações</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Reparação de Caldeira e Esquentador: Guia Completo de Manutenção
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">🔥</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Rui Pereira</p>
              <p className="text-gray-600">Técnico Especializado em Aquecimento com 20+ anos em Trás-os-Montes</p>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="mb-10 rounded-2xl overflow-hidden">
          <img
            src="/images-optimized/blog/caldeira-esquentador-manutencao.jpg"
            alt="Técnico a realizar manutenção de caldeira"
            className="w-full h-96 object-cover"
            loading="lazy"
            width={800}
            height={400}
          />
          <p className="text-sm text-gray-500 text-center mt-2">
            Manutenção preventiva regular pode prolongar a vida útil do seu equipamento de aquecimento em 5-10 anos
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-10">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <p className="text-blue-800 font-semibold text-lg">
              ⚠️ Segurança em Primeiro Lugar: Caldeiras e esquentadores envolvem gás, eletricidade e alta pressão. 
              Nunca tente reparações você mesmo sem formação específica. Uma intervenção incorreta pode causar 
              fugas de gás, intoxicação por monóxido de carbono ou explosões.
            </p>
          </div>

          <p className="text-xl text-gray-700 mb-6">
            Em Trás-os-Montes, onde os invernos são rigorosos, uma caldeira ou esquentador avariado não é apenas 
            um inconveniente - é uma emergência. Com temperaturas que frequentemente descem abaixo de zero, a falta 
            de aquecimento ou água quente pode tornar uma casa inabitável. Neste guia completo, explico tudo sobre 
            reparação, manutenção preventiva e como escolher entre reparar ou substituir o equipamento.
          </p>
        </div>

        {/* Table of contents */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Neste Artigo</h2>
          <ul className="space-y-2">
            <li><a href="#diferenças" className="text-blue-600 hover:text-blue-700">Caldeira vs Esquentador: Diferenças</a></li>
            <li><a href="#sintomas-comuns" className="text-blue-600 hover:text-blue-700">10 Sintomas Comuns de Avarias</a></li>
            <li><a href="#reparacoes" className="text-blue-600 hover:text-blue-700">Reparações Mais Frequentes e Custos</a></li>
            <li><a href="#manutencao-preventiva" className="text-blue-600 hover:text-blue-700">Manutenção Preventiva (Checklist)</a></li>
            <li><a href="#reparar-substituir" className="text-blue-600 hover:text-blue-700">Reparar ou Substituir? Guia de Decisão</a></li>
            <li><a href="#emergencia" className="text-blue-600 hover:text-blue-700">Procedimento de Emergência</a></li>
          </ul>
        </div>

        {/* Content sections */}
        <div className="prose prose-lg max-w-none">
          <section id="diferenças" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔍 Caldeira vs Esquentador: Principais Diferenças</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-center mb-4">
                  <span className="text-4xl">🏠</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Caldeira</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Função:</strong> Aquece água para aquecimento central + água sanitária</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Ideal para:</strong> Casas com radiadores ou soalho radiante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Vantagem:</strong> Aquece toda a casa de forma uniforme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Desvantagem:</strong> Instalação complexa e cara</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">€</span>
                    <span><strong>Custo médio reparação:</strong> 120-400€</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-center mb-4">
                  <span className="text-4xl">🚿</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Esquentador</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Função:</strong> Aquece apenas água sanitária (chuveiro, torneiras)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Ideal para:</strong> Apartamentos, casas pequenas, segundas habitações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Vantagem:</strong> Água quente instantânea, sem limite</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Desvantagem:</strong> Não aquece a casa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">€</span>
                    <span><strong>Custo médio reparação:</strong> 80-250€</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="font-bold text-yellow-800 text-lg mb-2">📊 Dados Regionais de Trás-os-Montes:</h3>
              <p className="text-yellow-700">
                • <strong>60% das habitações</strong> usam esquentador (mais comum em zonas rurais)<br/>
                • <strong>35% usam caldeira</strong> (mais comum em vilas e cidades)<br/>
                • <strong>5% usam termoacumulador</strong> ou outras soluções<br/>
                • A vida útil média é <strong>12-15 anos para caldeiras</strong> e <strong>10-12 anos para esquentadores</strong>
              </p>
            </div>
          </section>

          <section id="sintomas-comuns" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">⚠️ 10 Sintomas Comuns de Avarias (e o que Podem Significar)</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">1. Água não aquece ou aquece pouco</h3>
                <p className="text-gray-700">
                  <strong>Causas possíveis:</strong> Resistência elétrica queimada (esquentador), trocador de calor entupido (caldeira), 
                  termóstato avariado, acumulação de calcário.<br/>
                  <strong>Urgência:</strong> Média. Pode aguentar alguns dias se for verão.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">2. Cheiro a gás ou a queimado</h3>
                <p className="text-gray-700">
                  <strong>Causas possíveis:</strong> Fuga de gás, sobreaquecimento de componentes, motor de ventoinha avariado.<br/>
                  <strong>Urgência:</strong> <span className="text-red-600 font-bold">ALTA - Desligue imediatamente e ventile o local!</span>
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">3. Pressão muito baixa ou muito alta (caldeira)</h3>
                <p className="text-gray-700">
                  <strong>Causas possíveis:</strong> Fuga no circuito, vaso de expansão avariado, válvula de segurança defeituosa.<br/>
                  <strong>Urgência:</strong> Média-alta. Pressão incorreta pode danificar permanentemente a caldeira.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">4. Ruídos estranhos (batidas, assobio, vibração)</h3>
                <p className="text-gray-700">
                  <strong>Causas possíveis:</strong> Ar no circuito, bomba avariada, calcário nos tubos, ventoinha desequilibrada.<br/>
                  <strong>Urgência:</strong> Baixa-média, mas pode indicar problemas sérios em desenvolvimento.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">5. Luz piloto apaga constantemente</h3>
                <p className="text-gray-700">
                  <strong>Causas possíveis:</strong> Termopar avariado, sujidade no piloto, corrente de ar, problema na válvula de gás.<br/>
                  <strong>Urgência:</strong> Média. Pode deixar de funcionar completamente a qualquer momento.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-800 text-lg mb-2">🚨 SINAIS DE EMERGÊNCIA ABSOLUTA:</h3>
              <ul className="text-red-700 space-y-2">
                <li>• <strong>Cheiro forte a gás</strong> - Desligue gás, não acenda luzes, ventile, saia de casa</li>
                <li>• <strong>Fumaça ou chamas</strong> - Ligue 112 imediatamente</li>
                <li>• <strong>Monóxido de carbono detetado</strong> - Saia imediatamente, ventile, ligue 112</li>
                <li>• <strong>Água a sair do equipamento</strong> - Desligue eletricidade e água</li>
              </ul>
            </div>
          </section>

          <section id="reparacoes" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔧 Reparações Mais Frequentes e Custos Médios em Trás-os-Montes</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-xl">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-4 px-6 text-left font-bold">Componente/Problema</th>
                    <th className="py-4 px-6 text-left font-bold">Caldeira</th>
                    <th className="py-4 px-6 text-left font-bold">Esquentador</th>
                    <th className="py-4 px-6 text-left font-bold">Duração</th>
                    <th className="py-4 px-6 text-left font-bold">Garantia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-blue-50">
                    <td className="py-4 px-6 font-semibold">Substituição termopar</td>
                    <td className="py-4 px-6">45-75€</td>
                    <td className="py-4 px-6">35-60€</td>
                    <td className="py-4 px-6">30-45 min</td>
                    <td className="py-4 px-6">1 ano</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-blue-50">
                    <td className="py-4 px-6 font-semibold">Limpeza trocador calor</td>
                    <td className="py-4 px-6">90-150€</td>
                    <td className="py-4 px-6">70-120€</td>
                    <td className="py-4 px-6">1.5-2.5h</td>
                    <td className="py-4 px-6">6 meses</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-blue-50">
                    <td className="py-4 px-6 font-semibold">Substituição bomba</td>
                    <td className="py-4 px-6">180-300€</td>
                    <td className="py-4 px-6">-</td>
                    <td className="py-4 px-6">2-3 horas</td>
                    <td className="py-4 px-6">2 anos</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-blue-50">
                    <td className="py-4 px-6 font-semibold">Substituição válvula gás</td>
