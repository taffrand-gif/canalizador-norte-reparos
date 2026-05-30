import React from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import { useSEO } from '@/hooks/useSEO';
const TorneiraAPingarComoReparar: React.FC = () => {
 useSEO({
 title: 'Torneira a Pingar: Como Reparar em 10 Minutos [Guia 2026]',
 description: 'Aprenda a reparar torneira a pingar em 10 minutos. Guia passo a passo com fotos, materiais necessários e dicas profissionais.',
 keywords: 'torneira a pingar, reparar torneira, junta torneira, torneira goteja, consertar torneira'
 });
 return (
 <BlogLayout
 title="Torneira a Pingar: Como Reparar em 10 Minutos [Guia 2026]"
 description="Guia completo para reparar torneira a pingar rapidamente e poupar água"
 >
 <article className="max-w-4xl mx-auto">
 <div className="mb-8">
 <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
 <span className="px-3 py-1 bg-blue-100 text-blue-800 font-semibold rounded-full">
 DIY Fácil
 </span>
 <span>⏱️ 8 min de leitura</span>
 <span>📅 10 Mar 2026</span>
 </div>
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
 Torneira a Pingar: Como Reparar em 10 Minutos [Guia 2026]
 </h1>
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 bg-cyan-200 rounded-full flex items-center justify-center">
 <span className="text-2xl">💧</span>
 </div>
 <div>
 <p className="font-semibold text-gray-900">Equipa Norte Reparos</p>
 <p className="text-gray-600">Reparação Simples e Rápida</p>
 </div>
 </div>
 </div>
 <div className="prose prose-lg max-w-none mb-10">
 <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
 <p className="text-blue-900 font-semibold text-lg">
 💰 Uma torneira a pingar desperdiça 30 litros/dia = 25€/ano. Repare em 10 minutos e poupe!
 </p>
 </div>
 <p className="text-xl text-gray-700 mb-6 leading-relaxed">
 Reparar uma torneira a pingar é uma das tarefas mais simples de canalização que pode
 fazer sozinho. Neste guia passo a passo, vamos mostrar-lhe como resolver o problema
 em apenas 10 minutos, com materiais que custam menos de 5€.
 </p>
 </div>
 <div className="bg-gray-50 rounded-2xl p-6 mb-10">
 <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Índice</h2>
 <ul className="space-y-2">
 <li><a href="#porque-pinga" className="text-cyan-600 hover:text-cyan-700 font-medium">1. Porque a Torneira Pinga?</a></li>
 <li><a href="#materiais" className="text-cyan-600 hover:text-cyan-700 font-medium">2. Materiais Necessários</a></li>
 <li><a href="#passo-passo" className="text-cyan-600 hover:text-cyan-700 font-medium">3. Reparação Passo a Passo</a></li>
 <li><a href="#tipos-torneira" className="text-cyan-600 hover:text-cyan-700 font-medium">4. Tipos de Torneira</a></li>
 <li><a href="#prevencao" className="text-cyan-600 hover:text-cyan-700 font-medium">5. Prevenção</a></li>
 <li><a href="#faq" className="text-cyan-600 hover:text-cyan-700 font-medium">6. Perguntas Frequentes</a></li>
 </ul>
 </div>
 <div className="prose prose-lg max-w-none">
 <section id="porque-pinga" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">💧 Porque a Torneira Pinga?</h2>
 <p className="mb-6">
 Uma torneira pinga quando a vedação interna (junta ou cartucho) está gasta e já não
 consegue bloquear completamente a passagem de água.
 </p>
 <div className="grid md:grid-cols-2 gap-6 mb-8">
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <h3 className="font-bold text-gray-900 mb-3 text-lg">🔴 Causa Principal</h3>
 <p className="text-gray-700 mb-3">
 <strong>Junta de borracha gasta (90% dos casos)</strong>
 </p>
 <p className="text-gray-600 text-sm">
 Com o tempo e uso, a borracha endurece, racha ou deforma, permitindo passagem de água.
 </p>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <h3 className="font-bold text-gray-900 mb-3 text-lg">⏰ Quando Acontece?</h3>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Torneira com mais de 3-5 anos</li>
 <li>• Uso intensivo diário</li>
 <li>• Água muito calcária</li>
 <li>• Fecho forçado da torneira</li>
 </ul>
 </div>
 </div>
 <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200 mb-8">
 <h3 className="font-bold text-red-900 mb-3 text-xl">💰 Custo de Não Reparar</h3>
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b-2 border-red-200">
 <th className="text-left py-2">Gotejamento</th>
 <th className="text-center py-2">Litros/Dia</th>
 <th className="text-right py-2">Custo/Ano</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-red-100">
 <td className="py-2">1 gota/segundo</td>
 <td className="text-center py-2">30L</td>
 <td className="text-right py-2 font-semibold text-red-600">25€</td>
 </tr>
 <tr className="border-b border-red-100">
 <td className="py-2">5 gotas/segundo</td>
 <td className="text-center py-2">150L</td>
 <td className="text-right py-2 font-semibold text-red-600">125€</td>
 </tr>
 <tr>
 <td className="py-2">Fio contínuo</td>
 <td className="text-center py-2">300L</td>
 <td className="text-right py-2 font-semibold text-red-600">250€</td>
 </tr>
 </tbody>
 </table>
 <p className="text-red-800 font-semibold mt-4 text-center">
 ⚠️ Reparar custa 5€ e demora 10 minutos. Ignorar custa 25-250€/ano!
 </p>
 </div>
 </section>
 <section id="materiais" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">🛠️ Materiais Necessários</h2>
 <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 mb-8">
 <h3 className="font-bold text-green-900 mb-4 text-xl">✅ Lista de Compras (Total: 5-10€)</h3>
 <div className="grid md:grid-cols-2 gap-6">
 <div>
 <p className="font-bold text-green-900 mb-3">Materiais:</p>
 <ul className="text-green-800 space-y-2">
 <li>✓ Junta de torneira (2-5€)</li>
 <li>✓ Pano seco</li>
 <li>✓ Balde pequeno</li>
 </ul>
 </div>
 <div>
 <p className="font-bold text-green-900 mb-3">Ferramentas:</p>
 <ul className="text-green-800 space-y-2">
 <li>✓ Chave inglesa ou alicate</li>
 <li>✓ Chave de fendas (opcional)</li>
 </ul>
 </div>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <h3 className="font-bold text-gray-900 mb-4 text-lg">🔍 Como Escolher a Junta Certa?</h3>
 <div className="space-y-4">
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="font-bold text-blue-900 mb-2">Opção 1: Levar a Junta Velha (Recomendado)</p>
 <p className="text-blue-800 text-sm">
 Desmonte a torneira, retire a junta velha e leve-a à loja. Garante tamanho correto.
 </p>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="font-bold text-blue-900 mb-2">Opção 2: Medir o Diâmetro</p>
 <p className="text-blue-800 text-sm mb-2">
 Meça diâmetro interno da torneira com régua:
 </p>
 <ul className="text-blue-700 text-sm space-y-1">
 <li>• 1/2" (12mm) - mais comum em lavatórios</li>
 <li>• 3/4" (19mm) - comum em cozinhas</li>
 <li>• 1" (25mm) - torneiras grandes</li>
 </ul>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="font-bold text-blue-900 mb-2">Opção 3: Kit Universal</p>
 <p className="text-blue-800 text-sm">
 Compre kit com várias juntas de diferentes tamanhos (5-8€). Útil para ter em casa.
 </p>
 </div>
 </div>
 </div>
 </section>
 <section id="passo-passo" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">📝 Reparação Passo a Passo</h2>
 <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
 <p className="text-yellow-900 font-semibold">
 ⏱️ Tempo total: 10-15 minutos | Dificuldade: ⭐ (Muito Fácil)
 </p>
 </div>
 <div className="space-y-8">
 <div className="bg-white p-6 rounded-xl border-2 border-cyan-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
 1
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Fechar a Água</h3>
 <p className="text-gray-700 mb-3">
 Localize e feche a válvula de água da torneira.
 </p>
 <ul className="text-gray-600 text-sm space-y-2">
 <li>• <strong>Válvula individual:</strong> Debaixo do lavatório/lava-loiça (recomendado)</li>
 <li>• <strong>Válvula geral:</strong> Se não houver válvula individual</li>
 <li>• <strong>Como fechar:</strong> Rode no sentido horário até parar</li>
 </ul>
 </div>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="text-blue-900 text-sm">
 <strong>💡 Teste:</strong> Abra a torneira para confirmar que não sai água.
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-cyan-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
 2
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Abrir a Torneira para Esvaziar</h3>
 <p className="text-gray-700 mb-3">
 Abra a torneira completamente para libertar água residual nos canos.
 </p>
 <ul className="text-gray-600 text-sm space-y-2">
 <li>• Deixe escorrer toda a água que ainda está nos canos</li>
 <li>• Coloque balde debaixo se necessário</li>
 <li>• Aguarde 30 segundos</li>
 </ul>
 </div>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-cyan-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
 3
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Desmontar a Torneira</h3>
 <p className="text-gray-700 mb-3">
 Retire a parte superior da torneira para aceder à junta.
 </p>
 <div className="space-y-3">
 <div className="bg-gray-50 p-4 rounded-lg">
 <p className="font-bold text-gray-900 mb-2">Torneira de Rosca (Tradicional):</p>
 <ol className="text-gray-700 text-sm space-y-1 list-decimal pl-4">
 <li>Retire a tampa decorativa (se houver)</li>
 <li>Desaperte o parafuso central com chave de fendas</li>
 <li>Retire a manípulo</li>
 <li>Desaperte a porca superior com chave inglesa (sentido anti-horário)</li>
 <li>Retire o corpo da torneira</li>
 </ol>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg">
 <p className="font-bold text-gray-900 mb-2">Torneira Monocomando:</p>
 <p className="text-gray-700 text-sm mb-2">
 Mais complexa - recomendamos técnico ou consultar manual do fabricante.
 </p>
 </div>
 </div>
 </div>
 </div>
 <div className="bg-yellow-50 p-4 rounded-lg">
 <p className="text-yellow-900 text-sm">
 <strong>⚠️ Cuidado:</strong> Não force. Se não conseguir desapertar, use óleo desengripante e aguarde 10 minutos.
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-cyan-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
 4
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Retirar a Junta Velha</h3>
 <p className="text-gray-700 mb-3">
 Localize e retire a junta de borracha gasta.
 </p>
 <ul className="text-gray-600 text-sm space-y-2">
 <li>• Junta está no fundo do corpo da torneira</li>
 <li>• Retire com os dedos ou chave de fendas pequena</li>
 <li>• Verifique estado: rachada, dura, deformada = precisa trocar</li>
 <li>• Limpe o assento da junta com pano seco</li>
 </ul>
 </div>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="text-blue-900 text-sm">
 <strong>💡 Dica:</strong> Leve a junta velha à loja para garantir tamanho correto da nova.
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-cyan-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
 5
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Colocar Junta Nova</h3>
 <p className="text-gray-700 mb-3">
 Instale a junta nova no mesmo local da antiga.
 </p>
 <ul className="text-gray-600 text-sm space-y-2">
 <li>• Certifique-se que junta está limpa e seca</li>
 <li>• Encaixe firmemente no assento</li>
 <li>• Verifique que está bem posicionada (sem dobras)</li>
 <li>• Não use massa ou cola - junta encaixa por pressão</li>
 </ul>
 </div>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-cyan-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
 6
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Remontar a Torneira</h3>
 <p className="text-gray-700 mb-3">
 Monte a torneira na ordem inversa da desmontagem.
 </p>
 <ol className="text-gray-600 text-sm space-y-2 list-decimal pl-4">
 <li>Coloque o corpo da torneira de volta</li>
 <li>Aperte a porca superior com chave inglesa (firme mas sem forçar)</li>
 <li>Coloque o manípulo</li>
 <li>Aperte o parafuso central</li>
 <li>Coloque a tampa decorativa (se houver)</li>
 </ol>
 </div>
 </div>
 <div className="bg-yellow-50 p-4 rounded-lg">
 <p className="text-yellow-900 text-sm">
 <strong>⚠️ Importante:</strong> Não aperte demais - pode danificar a junta nova ou rosca.
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-cyan-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
 7
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Abrir a Água e Testar</h3>
 <p className="text-gray-700 mb-3">
 Abra a válvula de água e teste a reparação.
 </p>
 <ul className="text-gray-600 text-sm space-y-2">
 <li>• Abra a válvula lentamente</li>
 <li>• Verifique se há fugas nas juntas</li>
 <li>• Feche a torneira completamente</li>
 <li>• Aguarde 5 minutos e verifique se pinga</li>
 </ul>
 </div>
 </div>
 <div className="bg-green-50 p-4 rounded-lg">
 <p className="text-green-900 text-sm">
 <strong>✅ Sucesso:</strong> Se não pingar após 5 minutos, reparação concluída com sucesso!
 </p>
 </div>
 </div>
 </div>
 <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200 mt-8">
 <h3 className="font-bold text-red-900 mb-3 text-lg">❌ Se Continuar a Pingar</h3>
 <p className="text-red-800 mb-3">Possíveis causas:</p>
 <ul className="text-red-700 space-y-2">
 <li>• Junta mal encaixada - desmonte e reposicione</li>
 <li>• Junta de tamanho errado - compre tamanho correto</li>
 <li>• Assento da junta danificado - precisa técnico</li>
 <li>• Rosca danificada - precisa substituir torneira</li>
 </ul>
 </div>
 </section>
 <section id="tipos-torneira" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">🔧 Tipos de Torneira</h2>
 <p className="mb-6">
 Diferentes tipos de torneira requerem abordagens ligeiramente diferentes:
 </p>
 <div className="space-y-6">
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <h3 className="font-bold text-gray-900 mb-3 text-xl">1. Torneira de Rosca (Tradicional)</h3>
 <p className="text-gray-700 mb-3">
 <strong>Mais comum em casas antigas.</strong> Duas torneiras separadas (quente/fria).
 </p>
 <div className="grid md:grid-cols-2 gap-4">
 <div className="bg-green-50 p-4 rounded-lg">
 <p className="font-bold text-green-900 mb-2">✅ Vantagens:</p>
 <ul className="text-green-800 text-sm space-y-1">
 <li>• Muito fácil de reparar</li>
 <li>• Peças baratas (2-5€)</li>
 <li>• Duráveis</li>
 </ul>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="font-bold text-blue-900 mb-2">🔧 Reparação:</p>
 <p className="text-blue-800 text-sm">
 Trocar junta de borracha (guia acima). Dificuldade: ⭐
 </p>
 </div>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <h3 className="font-bold text-gray-900 mb-3 text-xl">2. Torneira Monocomando (Misturadora)</h3>
 <p className="text-gray-700 mb-3">
 <strong>Mais comum em casas modernas.</strong> Uma única alavanca controla temperatura e fluxo.
 </p>
 <div className="grid md:grid-cols-2 gap-4">
 <div className="bg-yellow-50 p-4 rounded-lg">
 <p className="font-bold text-yellow-900 mb-2">⚠️ Complexidade:</p>
 <ul className="text-yellow-800 text-sm space-y-1">
 <li>• Mais difícil de reparar</li>
 <li>• Cartucho cerâmico (20-50€)</li>
 <li>• Requer manual do fabricante</li>
 </ul>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="font-bold text-blue-900 mb-2">🔧 Reparação:</p>
 <p className="text-blue-800 text-sm">
 Substituir cartucho completo. Dificuldade: ⭐⭐⭐ (recomendamos técnico)
 </p>
 </div>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <h3 className="font-bold text-gray-900 mb-3 text-xl">3. Torneira Termostática</h3>
 <p className="text-gray-700 mb-3">
 <strong>Duches modernos.</strong> Mantém temperatura constante automaticamente.
 </p>
 <div className="bg-red-50 p-4 rounded-lg">
 <p className="font-bold text-red-900 mb-2">❌ Reparação DIY:</p>
 <p className="text-red-800 text-sm">
 Não recomendado. Sistema complexo que requer técnico especializado. Custo: 100-250€.
 </p>
 </div>
 </div>
 </div>
 </section>
 <section id="prevencao" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">🛡️ Prevenção</h2>
 <p className="mb-6">
 Prolongue a vida útil das suas torneiras com estas 6 dicas:
 </p>
 <div className="space-y-6">
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-500 transition-colors">
 <h3 className="font-bold text-gray-900 mb-3 text-lg">1. 🚫 Não Force o Fecho</h3>
 <p className="text-gray-700 mb-2">
 Feche a torneira suavemente. Força excessiva desgasta a junta rapidamente.
 </p>
 <p className="text-cyan-700 text-sm">
 💡 Se precisa forçar para parar de pingar, a junta já está gasta - troque.
 </p>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-500 transition-colors">
 <h3 className="font-bold text-gray-900 mb-3 text-lg">2. 🧼 Limpe Regularmente</h3>
 <p className="text-gray-700 mb-2">
 Calcário acumula-se e dificulta o fecho suave da torneira.
 </p>
 <ul className="text-gray-600 text-sm space-y-1">
 <li>• Limpe com vinagre branco semanalmente</li>
 <li>• Remove calcário sem danificar cromados</li>
 <li>• Seque após cada uso</li>
 </ul>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-500 transition-colors">
 <h3 className="font-bold text-gray-900 mb-3 text-lg">3. 💧 Controle a Pressão de Água</h3>
 <p className="text-gray-700 mb-2">
 Pressão excessiva (>4 bar) desgasta juntas mais rapidamente.
 </p>
 <p className="text-cyan-700 text-sm">
 💡 Instale redutor de pressão se necessário (50-100€).
 </p>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-500 transition-colors">
 <h3 className="font-bold text-gray-900 mb-3 text-lg">4. 🔄 Substitua Preventivamente</h3>
 <p className="text-gray-700 mb-2">
 Troque juntas a cada 3-5 anos, mesmo sem pingar.
 </p>
 <ul className="text-gray-600 text-sm space-y-1">
 <li>• Custo: 2-5€ por junta</li>
 <li>• Previne pingos inesperados</li>
 <li>• Leva 10 minutos</li>
 </ul>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-500 transition-colors">
 <h3 className="font-bold text-gray-900 mb-3 text-lg">5. 🌡️ Proteja no Inverno</h3>
 <p className="text-gray-700 mb-2">
 Água congelada pode danificar torneiras e juntas.
 </p>
 <ul className="text-gray-600 text-sm space-y-1">
 <li>• Isole torneiras exteriores</li>
 <li>• Deixe pingar em noites muito frias</li>
 <li>• Esvazie canos se casa vazia no inverno</li>
 </ul>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-500 transition-colors">
 <h3 className="font-bold text-gray-900 mb-3 text-lg">6. 🔍 Inspeção Mensal</h3>
 <p className="text-gray-700 mb-2">
 Verifique todas as torneiras uma vez por mês.
 </p>
 <ul className="text-gray-600 text-sm space-y-1">
 <li>• Feche completamente e ouça se pinga</li>
 <li>• Verifique debaixo do lavatório (fugas escondidas)</li>
 <li>• Teste suavidade do fecho</li>
 </ul>
 </div>
 </div>
 </section>
 <section id="faq" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">❓ Perguntas Frequentes</h2>
 <div className="space-y-6">
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Quanto custa reparar uma torneira a pingar?</h3>
 <p className="text-gray-700 mb-2">
 <strong>DIY (você mesmo):</strong> 2-5€ (junta) + 10 minutos
 </p>
 <p className="text-gray-700 mb-2">
 <strong>Canalizador:</strong> 50-80€ (mão de obra + material)
 </p>
 <p className="text-green-700 font-semibold">
 💰 Poupança DIY: 45-75€
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Quanto tempo demora a reparar?</h3>
 <p className="text-gray-700">
 <strong>10-15 minutos</strong> para torneira tradicional de rosca (primeira vez pode demorar 20-30 minutos).
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Posso usar cola ou silicone na junta?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Não!</strong> Junta encaixa por pressão. Cola ou silicone:
 </p>
 <ul className="text-gray-600 space-y-1 ml-4">
 <li>• Dificulta remoção futura</li>
 <li>• Pode danificar a torneira</li>
 <li>• Não melhora vedação</li>
 </ul>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Troquei a junta mas continua a pingar. Porquê?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Causas possíveis:</strong>
 </p>
 <ul className="text-gray-600 space-y-1 ml-4">
 <li>• Junta mal encaixada - reposicione</li>
 <li>• Tamanho errado - compre tamanho correto</li>
 <li>• Assento danificado - precisa polir ou substituir torneira</li>
 <li>• Não apertou suficientemente - aperte mais (sem forçar)</li>
 </ul>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Quanto tempo dura uma junta nova?</h3>
 <p className="text-gray-700">
 <strong>3-5 anos</strong> com uso normal. Fatores que reduzem vida útil:
 </p>
 <ul className="text-gray-600 space-y-1 ml-4 mt-2">
 <li>• Água muito calcária (2-3 anos)</li>
 <li>• Uso intensivo (2-4 anos)</li>
 <li>• Fecho forçado (1-2 anos)</li>
 <li>• Pressão alta (2-3 anos)</li>
 </ul>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Todas as torneiras usam a mesma junta?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Não.</strong> Existem vários tamanhos:
 </p>
 <ul className="text-gray-600 space-y-1 ml-4">
 <li>• 1/2" (12mm) - lavatórios</li>
 <li>• 3/4" (19mm) - cozinhas</li>
 <li>• 1" (25mm) - torneiras grandes</li>
 </ul>
 <p className="text-cyan-700 font-semibold mt-2">
 💡 Leve a junta velha à loja para garantir tamanho correto
 </p>
 </div>
 </div>
 </section>
 <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white p-8 rounded-2xl mb-12">
 <h2 className="text-3xl font-bold mb-4">📞 Precisa de Ajuda?</h2>
 <p className="text-xl mb-6">
 Se não conseguir reparar sozinho, contacte canalizador profissional.
 </p>
 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
 <h3 className="text-2xl font-bold mb-4">Norte Reparos - Reparação Rápida</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
 <div className="flex items-start gap-3">
 <span className="text-2xl">✅</span>
 <div>
 <p className="font-bold">Reparação em 30 Minutos</p>
 <p className="text-sm text-white/80">Rápido e eficiente</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <span className="text-2xl">✅</span>
 <div>
 <p className="font-bold">Preço Fixo: 50-80€</p>
 <p className="text-sm text-white/80">Sem surpresas</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <span className="text-2xl">✅</span>
 <div>
 <p className="font-bold">Garantia 6 Meses</p>
 <p className="text-sm text-white/80">Trabalho garantido</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <span className="text-2xl">✅</span>
 <div>
 <p className="font-bold">Disponível 24h/7 dias</p>
 <p className="text-sm text-white/80">Sempre disponíveis</p>
 </div>
 </div>
 </div>
 <div className="flex flex-col sm:flex-row gap-4">
 <a
 href="tel:+351928484451"
 className="flex-1 bg-white text-cyan-600 px-6 py-4 rounded-lg font-bold text-center hover:bg-gray-100 transition-colors text-lg"
 >
 📞 928 484 451
 </a>
 <a
 href="https://wa.me/351928484451?text=Olá,%20tenho%20uma%20torneira%20a%20pingar"
 className="flex-1 bg-green-500 text-white px-6 py-4 rounded-lg font-bold text-center hover:bg-green-600 transition-colors text-lg"
 >
 💬 WhatsApp
 </a>
 </div>
 </div>
 <p className="text-center text-white/90">
 <strong>Zonas atendidas:</strong> Bragança, Vila Real, Macedo de Cavaleiros, Mirandela, Chaves, Lamego, Régua, Torre de Moncorvo, Mogadouro, Alfândega da Fé, Vila Flor, Valpaços
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Artigos Relacionados</h3>
 <ul className="space-y-2">
 <li>
 <a href="/blog/como-desentupir-canalizacao-sozinho" className="text-cyan-600 hover:text-cyan-700 font-medium">
 → Como Desentupir Canalização Sozinho? [Guia Completo 2026]
 </a>
 </li>
 <li>
 <a href="/blog/fuga-agua-como-detetar-reparar" className="text-cyan-600 hover:text-cyan-700 font-medium">
 → Fuga de Água: Como Detetar e Reparar Rapidamente
 </a>
 </li>
 <li>
 <a href="/blog/quanto-custa-canalizador-portugal" className="text-cyan-600 hover:text-cyan-700 font-medium">
 → Quanto Custa um Canalizador em Portugal? [Preços 2026]
 </a>
 </li>
 <li>
 <a href="/blog/esquentador-nao-aquece" className="text-cyan-600 hover:text-cyan-700 font-medium">
 → Esquentador Não Aquece: 7 Causas e Soluções
 </a>
 </li>
 </ul>
 </div>
 </div>
 </article>
 </BlogLayout>
 );
};
export default TorneiraAPingarComoReparar;