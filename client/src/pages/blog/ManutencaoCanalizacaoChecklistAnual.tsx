import React from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import { useSEO } from '@/hooks/useSEO';
const ManutencaoCanalizacaoChecklistAnual: React.FC = () => {
 useSEO({
 title: 'Manutenção de Canalização: Checklist Anual Completa [2026]',
 description: 'Checklist completa de manutenção de canalização. Guia anual passo a passo para prevenir avarias e poupar milhares de euros em reparações.',
 keywords: 'manutenção canalização, checklist anual, inspeção canalização, prevenir avarias, manutenção preventiva'
 });
 return (
 <BlogLayout
 title="Manutenção de Canalização: Checklist Anual Completa [2026]"
 description="Guia completo de manutenção preventiva para evitar avarias caras e prolongar vida útil da canalização"
 >
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {"@type":"Question","name":'Quanto custa manutenção de canalização por ano?',"acceptedAnswer":{"@type":"Answer","text":'O custo total anual ronda 297-517€: tarefas DIY mensais/trimestrais 50-100€; limpeza de esquentador 2x por ano 120-200€; inspeção profissional anual 80-150€; peças e materiais 47-67€. Investir 300-500€/ano evita reparações de 2000-10000€.'}},
 {"@type":"Question","name":'Posso fazer toda a manutenção de canalização sozinho?',"acceptedAnswer":{"@type":"Answer","text":'Parcialmente. Pode fazer: verificações mensais, limpeza de ralos, filtros, inspeções visuais e limpeza de sifões. Requer técnico: limpeza de esquentador, inspeção profissional anual, descalcificação e reparações complexas. Recomendamos DIY mensal/trimestral + técnico semestral/anual.'}},
 {"@type":"Question","name":'Com que frequência devo chamar canalizador para manutenção?',"acceptedAnswer":{"@type":"Answer","text":'Calendário recomendado: semestral — limpeza de esquentador/caldeira (Janeiro + Julho); anual — inspeção completa do sistema (Março); quando necessário — descalcificação em zonas calcárias; emergências — fugas, entupimentos graves, avarias. Mínimo 2-3 visitas/ano para manutenção preventiva.'}},
 {"@type":"Question","name":'A manutenção preventiva de canalizações realmente compensa?',"acceptedAnswer":{"@type":"Answer","text":'Sim, o ROI é enorme. Investimento anual em manutenção: 300-500€. Custo médio de avaria grave: 2000-5000€. Poupança potencial: 1500-4500€. Cada 1€ investido em manutenção poupa 5-10€ em reparações.'}},
 {"@type":"Question","name":'O que acontece se não fizer manutenção às canalizações?',"acceptedAnswer":{"@type":"Answer","text":'Consequências de negligenciar manutenção: avarias súbitas e caras (canos rebentados, fugas); redução da vida útil dos equipamentos em 50%; consumo excessivo de água e energia (+30%); problemas de saúde (água contaminada, humidade); desvalorização do imóvel em 5-10%; emergências inconvenientes. Negligência custa 10x mais que prevenção.'}}
 ]
 }) }}
 />
 <article className="max-w-4xl mx-auto">
 <div className="mb-8">
 <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
 <span className="px-3 py-1 bg-green-100 text-green-800 font-semibold rounded-full">
 Manutenção
 </span>
 <span>⏱️ alguns minutos de leitura</span>
 <span>📅 10 Mar 2026</span>
 </div>
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
 Manutenção de Canalização: Checklist Anual Completa [2026]
 </h1>
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 bg-cyan-200 rounded-full flex items-center justify-center">
 <span className="text-2xl">🔧</span>
 </div>
 <div>
 <p className="font-semibold text-gray-900">Equipa Norte Reparos</p>
 <p className="text-gray-600">Especialistas em Manutenção Preventiva</p>
 </div>
 </div>
 </div>
 <div className="prose prose-lg max-w-none mb-10">
 <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
 <p className="text-green-900 font-semibold text-lg">
 💰 Manutenção preventiva poupa 70% em reparações. Investir 200€/ano evita avarias de 2000-5000€!
 </p>
 </div>
 <p className="text-xl text-gray-700 mb-6 leading-relaxed">
 Manutenção preventiva de canalização é o segredo para evitar avarias caras e prolongar
 a vida útil do sistema. Neste guia completo, apresentamos uma checklist anual detalhada
 com todas as tarefas essenciais, quando fazê-las e como executá-las corretamente.
 </p>
 </div>
 <div className="bg-gray-50 rounded-2xl p-6 mb-10">
 <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Índice</h2>
 <ul className="space-y-2">
 <li><a href="#porque-manutencao" className="text-cyan-600 hover:text-cyan-700 font-medium">1. Porque Fazer Manutenção Preventiva?</a></li>
 <li><a href="#checklist-mensal" className="text-cyan-600 hover:text-cyan-700 font-medium">2. Checklist Mensal</a></li>
 <li><a href="#checklist-trimestral" className="text-cyan-600 hover:text-cyan-700 font-medium">3. Checklist Trimestral</a></li>
 <li><a href="#checklist-semestral" className="text-cyan-600 hover:text-cyan-700 font-medium">4. Checklist Semestral</a></li>
 <li><a href="#checklist-anual" className="text-cyan-600 hover:text-cyan-700 font-medium">5. Checklist Anual</a></li>
 <li><a href="#calendario" className="text-cyan-600 hover:text-cyan-700 font-medium">6. Calendário de Manutenção</a></li>
 <li><a href="#faq" className="text-cyan-600 hover:text-cyan-700 font-medium">7. Perguntas Frequentes</a></li>
 </ul>
 </div>
 <div className="prose prose-lg max-w-none">
 <section id="porque-manutencao" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 Porque Fazer Manutenção Preventiva?</h2>
 <p className="mb-6">
 Manutenção preventiva é investimento, não despesa. Os benefícios são imensos:
 </p>
 <div className="grid md:grid-cols-2 gap-6 mb-8">
 <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
 <h3 className="font-bold text-green-900 mb-3 text-lg">💰 Poupança Financeira</h3>
 <ul className="text-green-800 space-y-2">
 <li>• Evita avarias caras (2000-5000€</li>
 <li>• Reduz consumo de água (20-30%</li>
 <li>• Prolonga vida útil equipamentos</li>
 <li>• Manutenção custa 200€/ano vs 3000€ reparação</li>
 </ul>
 </div>
 <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
 <h3 className="font-bold text-blue-900 mb-3 text-lg">🛡️ Prevenção de Problemas</h3>
 <ul className="text-blue-800 space-y-2">
 <li>• Deteta problemas antes de agravar</li>
 <li>• Previne inundações e danos</li>
 <li>• Evita emergências inconvenientes</li>
 <li>• Mantém pressão e temperatura ideais</li>
 </ul>
 </div>
 <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
 <h3 className="font-bold text-purple-900 mb-3 text-lg">⏱️ Tranquilidade</h3>
 <ul className="text-purple-800 space-y-2">
 <li>• Sistema sempre funcional</li>
 <li>• Sem surpresas desagradáveis</li>
 <li>• Conforto garantido</li>
 <li>• Dormir descansado</li>
 </ul>
 </div>
 <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
 <h3 className="font-bold text-orange-900 mb-3 text-lg">🏠 Valorização Imóvel</h3>
 <ul className="text-orange-800 space-y-2">
 <li>• Canalização em bom estado</li>
 <li>• Histórico de manutenção</li>
 <li>• Mais atrativo para compradores</li>
 <li>• Valorização 5-10%</li>
 </ul>
 </div>
 </div>
 <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
 <h3 className="font-bold text-red-900 mb-3 text-xl">💸 Custo de NÃO Fazer Manutenção</h3>
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b-2 border-red-200">
 <th className="text-left py-2">Problema</th>
 <th className="text-right py-2">Custo Reparação</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-red-100">
 <td className="py-2">Cano rebentado</td>
 <td className="text-right py-2 font-semibold text-red-600">2000-8000€</td>
 </tr>
 <tr className="border-b border-red-100">
 <td className="py-2">Fuga escondida (danos)</td>
 <td className="text-right py-2 font-semibold text-red-600">1500-5000€</td>
 </tr>
 <tr className="border-b border-red-100">
 <td className="py-2">Esquentador avariado</td>
 <td className="text-right py-2 font-semibold text-red-600">300-800€</td>
 </tr>
 <tr className="border-b border-red-100">
 <td className="py-2">Entupimento grave</td>
 <td className="text-right py-2 font-semibold text-red-600">200-500€</td>
 </tr>
 <tr className="border-b border-red-100">
 <td className="py-2">Substituir canalização</td>
 <td className="text-right py-2 font-semibold text-red-600">3000-10000€</td>
 </tr>
 <tr>
 <td className="py-2 font-bold">Manutenção preventiva anual</td>
 <td className="text-right py-2 font-bold text-green-600 text-lg">150-250€</td>
 </tr>
 </tbody>
 </table>
 <p className="text-red-800 font-semibold mt-4 text-center">
 ⚠️ Investir 200€/ano em manutenção evita 2000-10000€ em reparações!
 </p>
 </div>
 </section>
 <section id="checklist-mensal" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">📅 Checklist Mensal (12x por ano)</h2>
 <p className="mb-6">
 Tarefas rápidas que deve fazer todos os meses para detetar problemas precocemente:
 </p>
 <div className="space-y-6">
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 1
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Verificar Torneiras e Autoclismos</h3>
 <p className="text-gray-700 mb-3">
 Detete fugas e pingos antes de desperdiçarem água.
 </p>
 </div>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg mb-3">
 <p className="font-bold text-gray-900 mb-2">Como Fazer:</p>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Feche todas as torneiras completamente</li>
 <li>• Ouça se há pingos (aguarde alguns minutos</li>
 <li>• Verifique debaixo de lavatórios (fugas escondidas</li>
 <li>• Teste autoclismos (coloque corante, se passar para sanita = fuga</li>
 <li>• Verifique pressão de água (deve ser constante</li>
 </ul>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="text-blue-900 text-sm">
 <strong>⏱️ Tempo:</strong> alguns minutos | <strong>💰 Custo:</strong> 0€
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 2
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Limpar Ralos e Sifões</h3>
 <p className="text-gray-700 mb-3">
 Previne entupimentos e maus cheiros.
 </p>
 </div>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg mb-3">
 <p className="font-bold text-gray-900 mb-2">Como Fazer:</p>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Retire grelhas de ralos e limpe cabelos/resíduos</li>
 <li>• Despeje água quente (não fervente) nos ralos</li>
 <li>• Use bicarbonato + vinagre mensalmente (previne acumulação</li>
 <li>• Verifique se água escoa rapidamente</li>
 <li>• Limpe sifões visíveis (debaixo lavatório</li>
 </ul>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="text-blue-900 text-sm">
 <strong>⏱️ Tempo:</strong> alguns minutos | <strong>💰 Custo:</strong> 2€ (bicarbonato/vinagre)
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 3
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Verificar Contador de Água</h3>
 <p className="text-gray-700 mb-3">
 Deteta fugas escondidas através de consumo anormal.
 </p>
 </div>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg mb-3">
 <p className="font-bold text-gray-900 mb-2">Como Fazer:</p>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Feche todas as torneiras e equipamentos</li>
 <li>• Anote número do contador</li>
 <li>• Aguarde 1 hora sem usar água</li>
 <li>• Verifique contador novamente</li>
 <li>• Se número mudou = há fuga escondida</li>
 </ul>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="text-blue-900 text-sm">
 <strong>⏱️ Tempo:</strong> alguns minutos (+ 1h espera) | <strong>💰 Custo:</strong> 0€
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 4
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Testar Esquentador/Caldeira</h3>
 <p className="text-gray-700 mb-3">
 Garante água quente sempre disponível.
 </p>
 </div>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg mb-3">
 <p className="font-bold text-gray-900 mb-2">Como Fazer:</p>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Abra torneira de água quente</li>
 <li>• Verifique se esquentador acende normalmente</li>
 <li>• Chama deve ser azul (não amarela</li>
 <li>• Água deve aquecer em 30-60 segundos</li>
 <li>• Sem ruídos estranhos ou cheiro a gás</li>
 </ul>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="text-blue-900 text-sm">
 <strong>⏱️ Tempo:</strong> alguns minutos | <strong>💰 Custo:</strong> 0€
 </p>
 </div>
 </div>
 </div>
 <div className="bg-green-50 p-6 rounded-xl mt-8">
 <h3 className="font-bold text-green-900 mb-3 text-lg">✅ Resumo Checklist Mensal</h3>
 <ul className="text-green-800 space-y-2">
 <li>✓ Verificar torneiras e autoclismos (A confirmar</li>
 <li>✓ Limpar ralos e sifões (A confirmar</li>
 <li>✓ Verificar contador de água (A confirmar</li>
 <li>✓ Testar esquentador/caldeira (A confirmar</li>
 </ul>
 <p className="text-green-900 font-semibold mt-4">
 <strong>Total:</strong> A confirmar/mês | <strong>Custo:</strong> 2€/mês
 </p>
 </div>
 </section>
 <section id="checklist-semestral" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">📅 Checklist Semestral (2x por ano)</h2>
 <p className="mb-6">
 Tarefas de manutenção mais profunda a fazer de 6 em 6 meses:
 </p>
 <div className="space-y-6">
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 1
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Limpar Esquentador/Caldeira</h3>
 <p className="text-gray-700 mb-3">
 Manutenção profissional para eficiência e segurança.
 </p>
 </div>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg mb-3">
 <p className="font-bold text-gray-900 mb-2">O Que Inclui:</p>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Limpeza de queimador e elétrodos</li>
 <li>• Verificação de termopar e válvulas</li>
 <li>• Limpeza de permutador (se necessário</li>
 <li>• Teste de combustão e segurança</li>
 <li>• Substituição de pilhas</li>
 </ul>
 </div>
 <div className="bg-yellow-50 p-4 rounded-lg">
 <p className="text-yellow-900 text-sm">
 <strong>⚠️ Recomendação:</strong> Contrate técnico com experiência | <strong>💰 Custo:</strong> 60-100€
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 2
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Verificar Pressão de Água</h3>
 <p className="text-gray-700 mb-3">
 Pressão ideal: 2-3 bar. Fora disto causa problemas.
 </p>
 </div>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg mb-3">
 <p className="font-bold text-gray-900 mb-2">Como Fazer:</p>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Compre manómetro de pressão (10-20€</li>
 <li>• Ligue à torneira exterior ou máquina lavar</li>
 <li>• Abra torneira completamente</li>
 <li>• Leia pressão (ideal: 2-3 bar</li>
 <li>• Se muito alta (&gt;4 bar): instale redutor de pressão</li>
 <li>• Se muito baixa (&lt;1.5 bar): contacte empresa águas</li>
 </ul>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="text-blue-900 text-sm">
 <strong>⏱️ Tempo:</strong> alguns minutos | <strong>💰 Custo:</strong> 10-20€ (manómetro)
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 3
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Limpar Sifões Profundamente</h3>
 <p className="text-gray-700 mb-3">
 Desmonte e limpe completamente todos os sifões.
 </p>
 </div>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg mb-3">
 <p className="font-bold text-gray-900 mb-2">Como Fazer:</p>
 <ol className="text-gray-700 text-sm space-y-1 list-decimal pl-4">
 <li>Coloque balde debaixo do sifão</li>
 <li>Desenrosque sifão (normalmente à mão</li>
 <li>Esvazie água e resíduos no balde</li>
 <li>Lave sifão com água quente e escova</li>
 <li>Verifique juntas de borracha (substitua se gastas</li>
 <li>Volte a montar e teste (sem fugas</li>
 </ol>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="text-blue-900 text-sm">
 <strong>⏱️ Tempo:</strong> alguns minutos | <strong>💰 Custo:</strong> 5€ (juntas novas)
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 4
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Verificar Isolamento de Canos</h3>
 <p className="text-gray-700 mb-3">
 Especialmente importante antes do inverno.
 </p>
 </div>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg mb-3">
 <p className="font-bold text-gray-900 mb-2">Como Fazer:</p>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Inspecione isolamento em sótão, cave, garagem</li>
 <li>• Procure zonas danificadas ou em falta</li>
 <li>• Substitua isolamento deteriorado</li>
 <li>• Adicione isolamento em canos expostos</li>
 <li>• Prioridade: canos exteriores e não aquecidos</li>
 </ul>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="text-blue-900 text-sm">
 <strong>⏱️ Tempo:</strong> alguns minutos | <strong>💰 Custo:</strong> 20-50€ (isolamento)
 </p>
 </div>
 </div>
 </div>
 <div className="bg-green-50 p-6 rounded-xl mt-8">
 <h3 className="font-bold text-green-900 mb-3 text-lg">✅ Resumo Checklist Semestral</h3>
 <ul className="text-green-800 space-y-2">
 <li>✓ Limpar esquentador/caldeira (técnico: 60-100€</li>
 <li>✓ Verificar pressão de água (A confirmar</li>
 <li>✓ Limpar sifões profundamente (A confirmar</li>
 <li>✓ Verificar isolamento de canos (A confirmar</li>
 </ul>
 <p className="text-green-900 font-semibold mt-4">
 <strong>Total:</strong> A confirmar + técnico | <strong>Custo:</strong> 95-175€/semestre
 </p>
 </div>
 </section>
 <section id="checklist-anual" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">📅 Checklist Anual (1x por ano)</h2>
 <p className="mb-6">
 Tarefas de manutenção completa a fazer uma vez por ano:
 </p>
 <div className="space-y-6">
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 1
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Inspeção Profissional Completa</h3>
 <p className="text-gray-700 mb-3">
 Canalizador inspeciona todo o sistema e identifica problemas.
 </p>
 </div>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg mb-3">
 <p className="font-bold text-gray-900 mb-2">O Que Inclui:</p>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Inspeção visual de toda a canalização</li>
 <li>• Teste de pressão do sistema</li>
 <li>• Verificação de fugas escondidas</li>
 <li>• Inspeção de válvulas e registos</li>
 <li>• Teste de todos os equipamentos</li>
 <li>• Relatório com recomendações</li>
 </ul>
 </div>
 <div className="bg-yellow-50 p-4 rounded-lg">
 <p className="text-yellow-900 text-sm">
 <strong>⚠️ Essencial:</strong> Contrate canalizador com experiência | <strong>💰 Custo:</strong> 80-150€
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 2
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Descalcificação (Zonas Calcárias)</h3>
 <p className="text-gray-700 mb-3">
 Remove calcário acumulado em esquentador e canalização.
 </p>
 </div>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg mb-3">
 <p className="font-bold text-gray-900 mb-2">Quando Necessário:</p>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Água muito dura (calcária</li>
 <li>• Pressão de água reduzida</li>
 <li>• Água demora a aquecer</li>
 <li>• Manchas brancas em torneiras</li>
 <li>• Ruídos no esquentador</li>
 </ul>
 </div>
 <div className="bg-yellow-50 p-4 rounded-lg">
 <p className="text-yellow-900 text-sm">
 <strong>⚠️ Técnico:</strong> Descalcificação profissional | <strong>💰 Custo:</strong> 80-150€
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 3
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Limpeza de Canalização Exterior</h3>
 <p className="text-gray-700 mb-3">
 Previne entupimentos graves em canalização principal.
 </p>
 </div>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg mb-3">
 <p className="font-bold text-gray-900 mb-2">Como Fazer:</p>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Localize caixas de inspeção exteriores</li>
 <li>• Abra tampas e inspecione</li>
 <li>• Remova folhas, lixo e resíduos</li>
 <li>• Use mangueira alta pressão para limpar</li>
 <li>• Verifique que água escoa livremente</li>
 </ul>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="text-blue-900 text-sm">
 <strong>⏱️ Tempo:</strong> 1 hora | <strong>💰 Custo:</strong> 0€ (DIY) ou 100-200€ (máquina alta pressão)
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 4
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Substituir Componentes Gastos</h3>
 <p className="text-gray-700 mb-3">
 Troque peças antes de falharem completamente.
 </p>
 </div>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg mb-3">
 <p className="font-bold text-gray-900 mb-2">Componentes a Verificar:</p>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Juntas de torneiras (se pingam</li>
 <li>• Flexíveis de ligação (se mais de 5 anos</li>
 <li>• Válvulas enferrujadas ou difíceis de rodar</li>
 <li>• Autoclismos com fugas persistentes</li>
 <li>• Mangueiras de máquinas (se rachadas</li>
 </ul>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="text-blue-900 text-sm">
 <strong>⏱️ Tempo:</strong> Variável | <strong>💰 Custo:</strong> 20-100€ (peças)
 </p>
 </div>
 </div>
 </div>
 <div className="bg-green-50 p-6 rounded-xl mt-8">
 <h3 className="font-bold text-green-900 mb-3 text-lg">✅ Resumo Checklist Anual</h3>
 <ul className="text-green-800 space-y-2">
 <li>✓ Inspeção profissional completa (80-150€</li>
 <li>✓ Descalcificação se necessário (80-150€</li>
 <li>✓ Limpeza canalização exterior (1h ou 100-200€</li>
 <li>✓ Substituir componentes gastos (20-100€</li>
 </ul>
 <p className="text-green-900 font-semibold mt-4">
 <strong>Total:</strong> 1-2 horas + técnico | <strong>Custo:</strong> 180-600€/ano
 </p>
 </div>
 </section>
 <section id="calendario" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">📆 Calendário de Manutenção</h2>
 <p className="mb-6">
 Organize todas as tarefas num calendário anual para não esquecer nada:
 </p>
 <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden mb-8">
 <table className="w-full">
 <thead>
 <tr className="border-b-2 border-gray-200 bg-gray-50">
 <th className="text-left py-3 px-4 font-bold">Mês</th>
 <th className="text-left py-3 px-4 font-bold">Tarefas</th>
 <th className="text-center py-3 px-4 font-bold">Tempo</th>
 <th className="text-right py-3 px-4 font-bold">Custo</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-gray-100">
 <td className="py-3 px-4 font-semibold">Janeiro</td>
 <td className="py-3 px-4">
 <ul className="text-sm space-y-1">
 <li>• Checklist mensal</li>
 <li>• Limpar esquentador (semestral</li>
 </ul>
 </td>
 <td className="text-center py-3 px-4 text-sm">A confirmar + técnico</td>
 <td className="text-right py-3 px-4 font-semibold">62-102€</td>
 </tr>
 <tr className="border-b border-gray-100 bg-blue-50">
 <td className="py-3 px-4 font-semibold">Fevereiro</td>
 <td className="py-3 px-4">
 <ul className="text-sm space-y-1">
 <li>• Checklist mensal</li>
 </ul>
 </td>
 <td className="text-center py-3 px-4 text-sm">A confirmar</td>
 <td className="text-right py-3 px-4 font-semibold">2€</td>
 </tr>
 <tr className="border-b border-gray-100">
 <td className="py-3 px-4 font-semibold">Março</td>
 <td className="py-3 px-4">
 <ul className="text-sm space-y-1">
 <li>• Checklist mensal</li>
 <li>• Inspeção profissional anual</li>
 </ul>
 </td>
 <td className="text-center py-3 px-4 text-sm">A confirmar + técnico</td>
 <td className="text-right py-3 px-4 font-semibold">82-152€</td>
 </tr>
 <tr className="border-b border-gray-100 bg-blue-50">
 <td className="py-3 px-4 font-semibold">Abril</td>
 <td className="py-3 px-4">
 <ul className="text-sm space-y-1">
 <li>• Checklist mensal</li>
 <li>• Checklist trimestral</li>
 </ul>
 </td>
 <td className="text-center py-3 px-4 text-sm">A confirmar</td>
 <td className="text-right py-3 px-4 font-semibold">8€</td>
 </tr>
 <tr className="border-b border-gray-100">
 <td className="py-3 px-4 font-semibold">Maio</td>
 <td className="py-3 px-4">
 <ul className="text-sm space-y-1">
 <li>• Checklist mensal</li>
 </ul>
 </td>
 <td className="text-center py-3 px-4 text-sm">A confirmar</td>
 <td className="text-right py-3 px-4 font-semibold">2€</td>
 </tr>
 <tr className="border-b border-gray-100 bg-blue-50">
 <td className="py-3 px-4 font-semibold">Junho</td>
 <td className="py-3 px-4">
 <ul className="text-sm space-y-1">
 <li>• Checklist mensal</li>
 </ul>
 </td>
 <td className="text-center py-3 px-4 text-sm">A confirmar</td>
 <td className="text-right py-3 px-4 font-semibold">2€</td>
 </tr>
 <tr className="border-b border-gray-100">
 <td className="py-3 px-4 font-semibold">Julho</td>
 <td className="py-3 px-4">
 <ul className="text-sm space-y-1">
 <li>• Checklist mensal</li>
 <li>• Checklist trimestral</li>
 <li>• Checklist semestral</li>
 </ul>
 </td>
 <td className="text-center py-3 px-4 text-sm">A confirmar + técnico</td>
 <td className="text-right py-3 px-4 font-semibold">103-183€</td>
 </tr>
 <tr className="border-b border-gray-100 bg-blue-50">
 <td className="py-3 px-4 font-semibold">Agosto</td>
 <td className="py-3 px-4">
 <ul className="text-sm space-y-1">
 <li>• Checklist mensal</li>
 </ul>
 </td>
 <td className="text-center py-3 px-4 text-sm">A confirmar</td>
 <td className="text-right py-3 px-4 font-semibold">2€</td>
 </tr>
 <tr className="border-b border-gray-100">
 <td className="py-3 px-4 font-semibold">Setembro</td>
 <td className="py-3 px-4">
 <ul className="text-sm space-y-1">
 <li>• Checklist mensal</li>
 </ul>
 </td>
 <td className="text-center py-3 px-4 text-sm">A confirmar</td>
 <td className="text-right py-3 px-4 font-semibold">2€</td>
 </tr>
 <tr className="border-b border-gray-100 bg-blue-50">
 <td className="py-3 px-4 font-semibold">Outubro</td>
 <td className="py-3 px-4">
 <ul className="text-sm space-y-1">
 <li>• Checklist mensal</li>
 <li>• Checklist trimestral</li>
 <li>• Preparação inverno (isolamento</li>
 </ul>
 </td>
 <td className="text-center py-3 px-4 text-sm">A confirmar</td>
 <td className="text-right py-3 px-4 font-semibold">28-58€</td>
 </tr>
 <tr className="border-b border-gray-100">
 <td className="py-3 px-4 font-semibold">Novembro</td>
 <td className="py-3 px-4">
 <ul className="text-sm space-y-1">
 <li>• Checklist mensal</li>
 </ul>
 </td>
 <td className="text-center py-3 px-4 text-sm">A confirmar</td>
 <td className="text-right py-3 px-4 font-semibold">2€</td>
 </tr>
 <tr>
 <td className="py-3 px-4 font-semibold">Dezembro</td>
 <td className="py-3 px-4">
 <ul className="text-sm space-y-1">
 <li>• Checklist mensal</li>
 </ul>
 </td>
 <td className="text-center py-3 px-4 text-sm">A confirmar</td>
 <td className="text-right py-3 px-4 font-semibold">2€</td>
 </tr>
 </tbody>
 <tfoot>
 <tr className="bg-green-50 border-t-2 border-green-200">
 <td className="py-3 px-4 font-bold">TOTAL ANO</td>
 <td className="py-3 px-4 font-bold">Todas as tarefas</td>
 <td className="text-center py-3 px-4 font-bold">~10 horas</td>
 <td className="text-right py-3 px-4 font-bold text-green-600 text-lg">297-517€</td>
 </tr>
 </tfoot>
 </table>
 </div>
 <div className="bg-cyan-50 p-6 rounded-xl">
 <h3 className="font-bold text-cyan-900 mb-3 text-lg">💡 Dicas para Organização</h3>
 <ul className="text-cyan-800 space-y-2">
 <li>• Configure lembretes no telemóvel para cada tarefa</li>
 <li>• Crie pasta com faturas e relatórios de manutenção</li>
 <li>• Tire fotos antes/depois de cada intervenção</li>
 <li>• Mantenha lista de contactos de nossa equipa técnica</li>
 <li>• Guarde garantias de equipamentos e peças substituídas</li>
 </ul>
 </div>
 </section>
 <section id="faq" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">❓ Perguntas Frequentes</h2>
 <div className="space-y-6">
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Quanto custa manutenção de canalização por ano?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Custo total anual: 297-517€</strong>
 </p>
 <ul className="text-gray-600 space-y-1 ml-4">
 <li>• Tarefas DIY mensais/trimestrais: 50-100€</li>
 <li>• Limpeza esquentador (2x): 120-200€</li>
 <li>• Inspeção profissional anual: 80-150€</li>
 <li>• Peças e materiais: 47-67€</li>
 </ul>
 <p className="text-green-700 font-semibold mt-3">
 💰 Investir 300-500€/ano evita reparações de 2000-10000€
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Posso fazer toda a manutenção sozinho?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Parcialmente, mas algumas tarefas requerem técnico:</strong>
 </p>
 <ul className="text-gray-600 space-y-2 ml-4">
 <li>
 <strong>✅ Pode fazer:</strong> Verificações mensais, limpeza ralos, filtros, inspeções visuais, limpeza sifões
 </li>
 <li>
 <strong>⚠️ Recomendamos técnico:</strong> Limpeza esquentador, inspeção profissional, descalcificação, reparações complexas
 </li>
 </ul>
 <p className="text-cyan-700 font-semibold mt-3">
 💡 Faça DIY mensal/trimestral + técnico semestral/anual
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Com que frequência devo chamar canalizador?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Calendário recomendado:</strong>
 </p>
 <ul className="text-gray-600 space-y-1 ml-4">
 <li>• <strong>Semestral:</strong> Limpeza esquentador/caldeira (Janeiro + Julho</li>
 <li>• <strong>Anual:</strong> Inspeção completa do sistema (Março</li>
 <li>• <strong>Quando necessário:</strong> Descalcificação (zonas calcárias</li>
 <li>• <strong>Emergências:</strong> Fugas, entupimentos graves, avarias</li>
 </ul>
 <p className="text-green-700 font-semibold mt-3">
 ✅ Mínimo: 2-3 visitas/ano para manutenção preventiva
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Manutenção preventiva realmente compensa?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Sim! ROI (retorno investimento) é enorme:</strong>
 </p>
 <div className="bg-white p-4 rounded-lg mt-3 mb-3">
 <table className="w-full text-sm">
 <tr className="border-b">
 <td className="py-2">Investimento anual em manutenção</td>
 <td className="text-right py-2 font-semibold">300-500€</td>
 </tr>
 <tr className="border-b">
 <td className="py-2">Custo médio de avaria grave</td>
 <td className="text-right py-2 font-semibold text-red-600">2000-5000€</td>
 </tr>
 <tr>
 <td className="py-2 font-bold">Poupança potencial</td>
 <td className="text-right py-2 font-bold text-green-600">1500-4500€</td>
 </tr>
 </table>
 </div>
 <p className="text-green-700 font-semibold">
 💰 Cada 1€ investido em manutenção poupa 5-10€ em reparações
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">O que acontece se não fizer manutenção?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Consequências de negligenciar manutenção:</strong>
 </p>
 <ul className="text-red-700 space-y-2 ml-4">
 <li>• Avarias súbitas e caras (canos rebentados, fugas</li>
 <li>• Redução vida útil equipamentos (50% menos</li>
 <li>• Consumo excessivo água e energia (+30%</li>
 <li>• Problemas de saúde (água contaminada, humidade</li>
 <li>• Desvalorização do imóvel (5-10%</li>
 <li>• Emergências inconvenientes (sem água quente, inundações</li>
 </ul>
 <p className="text-red-900 font-semibold mt-3">
 ⚠️ Negligência custa 10x mais que prevenção
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Quanto tempo demora manutenção anual completa?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Tempo total por ano:</strong>
 </p>
 <ul className="text-gray-600 space-y-1 ml-4">
 <li>• Tarefas DIY mensais: A confirmar × 12 = 7 horas</li>
 <li>• Tarefas trimestrais: A confirmar × 4 = 4.5 horas</li>
 <li>• Tarefas semestrais: A confirmar × 2 = 3 horas</li>
 <li>• Técnico (esquentador + inspeção): 2-3 horas</li>
 </ul>
 <p className="text-cyan-700 font-semibold mt-3">
 ⏱️ Total: ~10 horas DIY + 2-3 horas técnico = 12-13 horas/ano
 </p>
 <p className="text-gray-600 text-sm mt-2">
 Média: 1 hora/mês de dedicação para sistema sempre funcional
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Preciso descalcificar todos os anos?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Depende da dureza da água:</strong>
 </p>
 <ul className="text-gray-600 space-y-2 ml-4">
 <li>
 <strong>Água muito dura (calcária):</strong> Descalcificação anual ou bianual
 </li>
 <li>
 <strong>Água moderadamente dura:</strong> Descalcificação a cada 2-3 anos
 </li>
 <li>
 <strong>Água macia:</strong> Descalcificação a cada 4-5 anos ou quando necessário
 </li>
 </ul>
 <p className="text-cyan-700 font-semibold mt-3">
 💡 Sinais que precisa descalcificar: pressão reduzida, água demora a aquecer, manchas brancas, ruídos
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Manutenção aumenta valor da casa?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Sim! Impacto direto na valorização:</strong>
 </p>
 <ul className="text-green-700 space-y-2 ml-4">
 <li>• Canalização em bom estado valoriza imóvel 5-10%</li>
 <li>• Histórico de manutenção aumenta confiança compradores</li>
 <li>• Sistema moderno e eficiente é argumento de venda</li>
 <li>• Evita desvalorização por problemas visíveis</li>
 <li>• Facilita inspeção pré-venda</li>
 </ul>
 <p className="text-green-700 font-semibold mt-3">
 🏠 Casa de 200.000€ pode valorizar 10.000-20.000€ com sistema bem mantido
 </p>
 </div>
 </div>
 </section>
 <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white p-8 rounded-2xl mb-12">
 <h2 className="text-3xl font-bold mb-4">📞 Manutenção Profissional de Canalização</h2>
 <p className="text-xl mb-6">
 Deixe a manutenção da sua canalização com especialistas certificados.
 </p>
 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
 <h3 className="text-2xl font-bold mb-4">Norte Reparos - Manutenção Preventiva</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
 <div className="flex items-start gap-3">
 <span className="text-2xl">✅</span>
 <div>
 <p className="font-bold">Inspeção Completa</p>
 <p className="text-sm text-white/80">Identificamos problemas antes de agravar</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <span className="text-2xl">✅</span>
 <div>
 <p className="font-bold">Limpeza Profissional</p>
 <p className="text-sm text-white/80">Esquentador, caldeira, canalização</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <span className="text-2xl">✅</span>
 <div>
 <p className="font-bold">Planos de Manutenção</p>
 <p className="text-sm text-white/80">Pacotes anuais com desconto</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <span className="text-2xl">✅</span>
 <div>
 <p className="font-bold">Garantia 6 Meses</p>
 <p className="text-sm text-white/80">Todas as intervenções garantidas</p>
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
 href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20manutenção%20de%20canalização"
 className="flex-1 bg-green-500 text-white px-6 py-4 rounded-lg font-bold text-center hover:bg-green-600 transition-colors text-lg"
 >
 💬 WhatsApp
 </a>
 </div>
 </div>
 <p className="text-center text-white/90">
 <strong>Zonas atendidas:</strong> Bragança, Vila Real, Trás-os-Montes, Mirandela, Chaves, Lamego, Régua, Torre de Moncorvo, Mogadouro, Alfândega da Fé, Vila Flor, Valpaços
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Artigos Relacionados</h3>
 <ul className="space-y-2">
 <li>
 <a href="/blog/como-prevenir-canos-rebentados-inverno" className="text-cyan-600 hover:text-cyan-700 font-medium">
 → Como Prevenir Canos Rebentados no Inverno [Guia 2026]
 </a>
 </li>
 <li>
 <a href="/blog/fuga-agua-como-detetar-reparar" className="text-cyan-600 hover:text-cyan-700 font-medium">
 → Fuga de Água: Como Detetar e Reparar Rapidamente
 </a>
 </li>
 <li>
 <a href="/blog/esquentador-nao-aquece" className="text-cyan-600 hover:text-cyan-700 font-medium">
 → Esquentador Não Aquece: 7 Causas e Soluções
 </a>
 </li>
 <li>
 <a href="/blog/torneira-a-pingar-como-reparar" className="text-cyan-600 hover:text-cyan-700 font-medium">
 → Torneira a Pingar: Como Reparar A confirmar
 </a>
 </li>
 </ul>
 </div>
 </div>
 </article>
 </BlogLayout>
 );
};
export default ManutencaoCanalizacaoChecklistAnual;
 <section id="checklist-trimestral" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">📅 Checklist Trimestral (4x por ano)</h2>
 <p className="mb-6">
 Tarefas mais aprofundadas a fazer de 3 em 3 meses:
 </p>
 <div className="space-y-6">
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 1
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Limpar Filtros de Torneiras</h3>
 <p className="text-gray-700 mb-3">
 Remove calcário e impurezas que reduzem pressão.
 </p>
 </div>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg mb-3">
 <p className="font-bold text-gray-900 mb-2">Como Fazer:</p>
 <ol className="text-gray-700 text-sm space-y-1 list-decimal pl-4">
 <li>Desenrosque ponta da torneira (arejador</li>
 <li>Retire filtro/rede metálica</li>
 <li>Mergulhe em vinagre branco A confirmar</li>
 <li>Escove com escova de dentes velha</li>
 <li>Enxague e volte a montar</li>
 </ol>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="text-blue-900 text-sm">
 <strong>⏱️ Tempo:</strong> alguns minutos | <strong>💰 Custo:</strong> 1€ (vinagre)
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 2
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Verificar Válvulas e Registos</h3>
 <p className="text-gray-700 mb-3">
 Garante que válvulas funcionam em emergência.
 </p>
 </div>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg mb-3">
 <p className="font-bold text-gray-900 mb-2">Como Fazer:</p>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Localize todas as válvulas (geral, individuais</li>
 <li>• Teste abertura e fecho (deve rodar suavemente</li>
 <li>• Se enferrujada, aplique óleo desengripante</li>
 <li>• Verifique se há fugas nas válvulas</li>
 <li>• Etiquete válvulas para fácil identificação</li>
 </ul>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="text-blue-900 text-sm">
 <strong>⏱️ Tempo:</strong> alguns minutos | <strong>💰 Custo:</strong> 5€ (óleo desengripante)
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 3
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Inspecionar Canos Visíveis</h3>
 <p className="text-gray-700 mb-3">
 Deteta corrosão, fugas e problemas estruturais.
 </p>
 </div>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg mb-3">
 <p className="font-bold text-gray-900 mb-2">Como Fazer:</p>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Inspecione canos em cave, sótão, garagem</li>
 <li>• Procure sinais de corrosão (ferrugem, manchas verdes</li>
 <li>• Verifique juntas e conexões (humidade = fuga</li>
 <li>• Toque canos (se húmidos = problema</li>
 <li>• Verifique isolamento térmico (se houver</li>
 </ul>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="text-blue-900 text-sm">
 <strong>⏱️ Tempo:</strong> alguns minutos | <strong>💰 Custo:</strong> 0€
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 4
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Limpar Grelhas de Ventilação</h3>
 <p className="text-gray-700 mb-3">
 Essencial para esquentadores e caldeiras (segurança).
 </p>
 </div>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg mb-3">
 <p className="font-bold text-gray-900 mb-2">Como Fazer:</p>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Retire grelhas de ventilação</li>
 <li>• Aspire pó e sujidade</li>
 <li>• Lave com água e sabão</li>
 <li>• Seque completamente antes de remontar</li>
 <li>• Verifique que não há obstruções</li>
 </ul>
 </div>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="text-blue-900 text-sm">
 <strong>⏱️ Tempo:</strong> alguns minutos | <strong>💰 Custo:</strong> 0€
 </p>
 </div>
 </div>
 </div>
 <div className="bg-green-50 p-6 rounded-xl mt-8">
 <h3 className="font-bold text-green-900 mb-3 text-lg">✅ Resumo Checklist Trimestral</h3>
 <ul className="text-green-800 space-y-2">
 <li>✓ Limpar filtros de torneiras (A confirmar</li>
 <li>✓ Verificar válvulas e registos (A confirmar</li>
 <li>✓ Inspecionar canos visíveis (A confirmar</li>
 <li>✓ Limpar grelhas de ventilação (A confirmar</li>
 </ul>
 <p className="text-green-900 font-semibold mt-4">
 <strong>Total:</strong> A confirmar/trimestre | <strong>Custo:</strong> 6€/trimestre
 </p>
 </div>
 </section>
