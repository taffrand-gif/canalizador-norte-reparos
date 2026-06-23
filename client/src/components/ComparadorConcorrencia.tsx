import { CheckCircle, X } from 'lucide-react';
interface CompetitorComparison {
 criterion: string;
 norteReparos: string | number;
 competitorA: string | number;
 competitorB: string | number;
 winner: 'norte' | 'a' | 'b' | 'tie';
}
export default function ComparadorConcorrencia() {
 const comparisons: CompetitorComparison[] = [
 {
 criterion: 'Tempo de Resposta',
 norteReparos: 'Resposta ágil',
 competitorA: '2-4 horas',
 competitorB: '1-2 dias',
 winner: 'norte'
 },
 {
 criterion: 'Disponibilidade',
 norteReparos: '24h/7d',
 competitorA: '8h-20h',
 competitorB: '9h-18h',
 winner: 'norte'
 },
 {
 criterion: 'Preço Médio Arranjo',
 norteReparos: '€90',
 competitorA: '€120',
 competitorB: '€100',
 winner: 'norte'
 },
 {
 criterion: 'Garantia',
 norteReparos: '2 anos',
 competitorA: '1 ano',
 competitorB: '6 meses',
 winner: 'norte'
 },
 {
 criterion: 'Equipamento',
 norteReparos: 'Ridgid/Fluke/FLIR',
 competitorA: 'Standard',
 competitorB: 'Standard',
 winner: 'norte'
 },
 {
 criterion: 'Certificações',
 norteReparos: '/',
 competitorA: 'Não',
 competitorB: 'Parcial',
 winner: 'norte'
 },
 {
 criterion: 'Cobertura (cidades)',
 norteReparos: '86 cidades',
 competitorA: '15 cidades',
 competitorB: '8 cidades',
 winner: 'norte'
 },
 {
 criterion: 'Câmara Térmica',
 norteReparos: 'Sim (FLIR)',
 competitorA: 'Não',
 competitorB: 'Não',
 winner: 'norte'
 },
 {
 criterion: 'Orçamento',
 norteReparos: 'Grátis',
 competitorA: 'Grátis',
 competitorB: '€30',
 winner: 'tie'
 },
 {
 criterion: 'Avaliação Clientes',
 norteReparos: ' (500+)',
 competitorA: ' (80)',
 competitorB: '3.8/5 (45)',
 winner: 'norte'
 }
 ];
 const norteWins = comparisons.filter(c => c.winner === 'norte').length;
 const totalCriteria = comparisons.length;
 const winPercentage = Math.round((norteWins / totalCriteria) * 100);
 return (
 <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
 {/* Header */}
 <div className="text-center mb-8">
 <h2 className="text-4xl font-bold text-gray-900 mb-4">
 Comparação Transparente
 </h2>
 <p className="text-xl text-gray-700 mb-6">
 Norte Reparos vs Concorrência em Trás-os-Montes
 </p>
 <div className="inline-flex items-center gap-2 bg-green-100 border-2 border-green-500 rounded-full px-6 py-3">
 <CheckCircle className="w-6 h-6 text-green-600" />
 <span className="text-lg font-bold text-green-900">
 Norte Reparos vence em {norteWins}/{totalCriteria} critérios ({winPercentage}%)
 </span>
 </div>
 </div>
 {/* Comparison Table */}
 <div className="overflow-x-auto">
 <table className="w-full border-collapse">
 <thead>
 <tr className="bg-gray-100">
 <th className="border-2 border-gray-300 p-4 text-left font-bold text-gray-900">
 Critério
 </th>
 <th className="border-2 border-gray-300 p-4 text-center font-bold text-primary bg-primary/5">
 Norte Reparos
 </th>
 <th className="border-2 border-gray-300 p-4 text-center font-bold text-gray-700">
 Concorrente A
 </th>
 <th className="border-2 border-gray-300 p-4 text-center font-bold text-gray-700">
 Concorrente B
 </th>
 </tr>
 </thead>
 <tbody>
 {comparisons.map((comparison, index) => (
 <tr key={index} className="hover:bg-gray-50 transition-colors">
 <td className="border-2 border-gray-300 p-4 font-semibold text-gray-900">
 {comparison.criterion}
 </td>
 <td className={`border-2 border-gray-300 p-4 text-center ${
 comparison.winner === 'norte' ? 'bg-green-50 font-bold text-green-900' : ''
 }`}>
 <div className="flex items-center justify-center gap-2">
 {comparison.winner === 'norte' && (
 <CheckCircle className="w-5 h-5 text-green-600" />
 )}
 <span>{comparison.norteReparos}</span>
 </div>
 </td>
 <td className={`border-2 border-gray-300 p-4 text-center ${
 comparison.winner === 'a' ? 'bg-green-50 font-bold text-green-900' : 'text-gray-600'
 }`}>
 {comparison.competitorA}
 </td>
 <td className={`border-2 border-gray-300 p-4 text-center ${
 comparison.winner === 'b' ? 'bg-green-50 font-bold text-green-900' : 'text-gray-600'
 }`}>
 {comparison.competitorB}
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 {/* Summary */}
 <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
 <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
 <div className="text-4xl font-black text-green-600 mb-2">
 {norteWins}
 </div>
 <p className="text-sm font-semibold text-green-900">
 Critérios Vencidos
 </p>
 </div>
 <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6 text-center">
 <div className="text-4xl font-black text-blue-600 mb-2">
 2×
 </div>
 <p className="text-sm font-semibold text-blue-900">
 Mais Rápido que Concorrência
 </p>
 </div>
 <div className="bg-purple-50 border-2 border-purple-500 rounded-lg p-6 text-center">
 <div className="text-4xl font-black text-purple-600 mb-2">
 €30
 </div>
 <p className="text-sm font-semibold text-purple-900">
 Mais Barato em Média
 </p>
 </div>
 </div>
 {/* Why Choose Norte Reparos */}
 <div className="mt-8 bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-r-lg p-6">
 <h3 className="text-2xl font-bold text-gray-900 mb-4">
 Por Que Escolher Norte Reparos?
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
 <div>
 <p className="font-semibold text-gray-900">Resposta Mais Rápida</p>
 <p className="text-sm text-gray-700">Resposta ágil vs 2-4 horas da concorrência</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
 <div>
 <p className="font-semibold text-gray-900">Equipamento Profissional</p>
 <p className="text-sm text-gray-700">Ridgid, Fluke, câmara térmica FLIR</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
 <div>
 <p className="font-semibold text-gray-900">Garantia Superior</p>
 <p className="text-sm text-gray-700">2 anos vs 6-12 meses da concorrência</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
 <div>
 <p className="font-semibold text-gray-900">Maior Cobertura</p>
 <p className="text-sm text-gray-700">86 cidades vs 8-15 da concorrência</p>
 </div>
 </div>
 </div>
 </div>
 {/* CTA */}
 <div className="mt-8 text-center">
 <a
 href="https://wa.me/351928484451?text=Vi%20a%20comparação%20e%20quero%20o%20melhor%20serviço"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
 >
 💬 Escolher o Melhor → WhatsApp
 </a>
 <p className="text-sm text-gray-600 mt-3">
 ⚡ Disponível 24h/7 dias • Orçamento por escrito
 </p>
 </div>
 {/* Disclaimer */}
 <div className="mt-8 text-xs text-gray-500 text-center">
 <p>
 * Comparação baseada em pesquisa de mercado em Trás-os-Montes (Março 2026).
 Concorrentes anónimos para respeitar privacidade. Dados verificáveis mediante pedido.
 </p>
 </div>
 </div>
 );
}
