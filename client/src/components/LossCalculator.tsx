import React from 'react';
// Component: Loss Calculator
// Interactive calculator showing how much money customer is wasting
// Creates urgency and demonstrates value of fixing problems
import { useSite } from '@/contexts/SiteContext';
import { useState } from 'react';
interface CalculatorResult {
 monthly: number;
 yearly: number;
 repairCost: number;
 savings: number;
 paybackMonths: number;
}
function LossCalculator() {
 const { config } = useSite();
 const [result, setResult] = useState<CalculatorResult | null>(null);
 const problems = [
 {
 id: 'drip',
 label: 'Torneira a pingar?',
 options: [
 { value: 0, label: 'Não' },
 { value: 10, label: 'Pinga devagar (€10/mês desperdiçado)' },
 { value: 30, label: 'Pinga rápido (€30/mês desperdiçado)' },
 ]},
 {
 id: 'toilet',
 label: 'Autoclismo não para de correr?',
 options: [
 { value: 0, label: 'Não' },
 { value: 50, label: 'Sim, corre água constantemente (€50/mês)' },
 ]},
 {
 id: 'leak',
 label: 'Fuga de água visível?',
 options: [
 { value: 0, label: 'Não' },
 { value: 40, label: 'Pequena fuga (€40/mês)' },
 { value: 100, label: 'Fuga grande (€100/mês)' },
 ]},
 {
 id: 'heater',
 label: 'Esquentador antigo (>10 anos)?',
 options: [
 { value: 0, label: 'Não' },
 { value: 40, label: 'Sim, gasta mais gás (€40/mês extra)' },
 ]},
 {
 id: 'pressure',
 label: 'Pressão água fraca?',
 options: [
 { value: 0, label: 'Não' },
 { value: 20, label: 'Sim, pode ter fuga escondida (€20/mês)' },
 ]},
 ];
 const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 const formData = new FormData(e.currentTarget);
 let monthlyLoss = 0;
 problems.forEach(problem => {
 const value = Number(formData.get(problem.id) || 0);
 monthlyLoss += value;
 });
 const yearlyLoss = monthlyLoss * 12;
 const repairCost = 150; // Average repair cost
 const savings = yearlyLoss - repairCost;
 const paybackMonths = repairCost / monthlyLoss;
 setResult({
 monthly: monthlyLoss,
 yearly: yearlyLoss,
 repairCost,
 savings,
 paybackMonths: Math.ceil(paybackMonths)});
 // Scroll to result
 setTimeout(() => {
 document.getElementById('calculator-result')?.scrollIntoView({
 behavior: 'smooth',
 block: 'center'
 });
 }, 100);
 };
 return (
 <section className="py-20 bg-gradient-to-b from-white to-gray-50">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 {/* Header */}
 <div className="text-center mb-12">
 <h2 className="text-4xl md:text-5xl font-black mb-6">
 💸 Quanto Está a Perder Por Mês?
 </h2>
 <p className="text-xl text-gray-600">
 Pequenos problemas custam MUITO dinheiro ao longo do tempo.
 Descubra quanto está a desperdiçar.
 </p>
 </div>
 {/* Calculator Form */}
 <form
 onSubmit={handleCalculate}
 className="bg-white p-8 rounded-lg border-4 shadow-lg mb-8"
 style={{ borderColor: config.colors.primary }}
 >
 <div className="space-y-6">
 {problems.map((problem) => (
 <div key={problem.id} className="space-y-2">
 <label className="block text-lg font-bold text-gray-900">
 {problem.label}
 </label>
 <select
 name={problem.id}
 className="w-full p-4 border-2 border-gray-300 rounded-lg text-lg focus:border-current focus:outline-none"
 style={{ focusBorderColor: config.colors.primary }}
 defaultValue={0}
 >
 {problem.options.map((option) => (
 <option key={option.value} value={option.value}>
 {option.label}
 </option>
 ))}
 </select>
 </div>
 ))}
 </div>
 <button
 type="submit"
 className="w-full mt-8 py-5 px-8 text-xl font-black text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: config.colors.primary }}
 >
 💰 Calcular Quanto Estou a Perder
 </button>
 </form>
 {/* Result */}
 {result && result.monthly > 0 && (
 <div
 id="calculator-result"
 className="bg-white p-8 rounded-lg border-4 shadow-xl animate-in fade-in duration-500"
 style={{ borderColor: config.colors.primary }}
 >
 {/* Loss Amount */}
 <div className="text-center mb-8">
 <div className="inline-block p-6 rounded-full mb-4" style={{ backgroundColor: `${config.colors.primary}15` }}>
 <span className="text-6xl">💔</span>
 </div>
 <h3 className="text-3xl font-black mb-2">
 Está a Perder:
 </h3>
 <div className="text-6xl font-black mb-2" style={{ color: config.colors.primary }}>
 €{result.monthly}
 </div>
 <p className="text-2xl text-gray-600">por mês</p>
 <p className="text-xl text-gray-500 mt-2">
 Por ano: <strong className="text-gray-900">€{result.yearly}</strong>
 </p>
 </div>
 {/* Solution */}
 <div className="bg-green-50 border-4 border-green-500 rounded-lg p-6 mb-6">
 <h4 className="text-2xl font-black text-green-900 mb-4 flex items-center gap-2">
 <span>✅</span>
 <span>A Solução</span>
 </h4>
 <div className="space-y-3 text-lg">
 <p className="flex items-start gap-3">
 <span className="text-green-600 font-bold">→</span>
 <span>Arranjo custa aproximadamente <strong>€{result.repairCost}</strong></span>
 </p>
 <p className="flex items-start gap-3">
 <span className="text-green-600 font-bold">→</span>
 <span>Recupera investimento em <strong>{result.paybackMonths} {result.paybackMonths === 1 ? 'mês' : 'meses'}</strong></span>
 </p>
 <p className="flex items-start gap-3">
 <span className="text-green-600 font-bold">→</span>
 <span>Economiza <strong className="text-green-700">€{result.savings}</strong> no primeiro ano</span>
 </p>
 </div>
 </div>
 {/* Urgency Message */}
 <div className="bg-red-50 border-4 border-red-500 rounded-lg p-6 mb-6">
 <p className="text-xl font-bold text-red-900 text-center">
 ⚠️ Cada dia que passa = Mais €{(result.monthly / 30).toFixed(2)} desperdiçados
 </p>
 </div>
 {/* CTA */}
 <div className="text-center">
 <p className="text-2xl font-black mb-6">
 Pare de Perder Dinheiro AGORA!
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center justify-center gap-2 px-8 py-5 font-bold text-white rounded-lg shadow-lg hover:shadow-xl transition-all text-xl"
 style={{ backgroundColor: config.colors.primary }}
 >
 📞 Ligue: {config.phone}
 </a>
 <a
 href={`https://wa.me/351${config.phone.replace(/\s/g, '')}?text=Olá, calculei que estou a perder €${result.monthly}/mês. Preciso de arranjo urgente!`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-8 py-5 font-bold text-white bg-green-500 rounded-lg shadow-lg hover:shadow-xl transition-all text-xl"
 >
 💬 WhatsApp
 </a>
 </div>
 <p className="text-sm text-gray-500 mt-4">
 ✅ Orçamento grátis • ✅ Resposta rápida • ✅ Garantia 6 meses
 </p>
 </div>
 {/* Guarantee */}
 <div className="mt-8 p-6 bg-gray-50 rounded-lg border-2 border-gray-200">
 <p className="text-center text-gray-700">
 <strong className="text-gray-900">Garantia:</strong> Se problema voltar em 6 meses,
 voltamos <strong className="text-gray-900">GRÁTIS</strong>. Certificado por escrito.
 </p>
 </div>
 </div>
 )}
 {result && result.monthly === 0 && (
 <div className="bg-green-50 border-4 border-green-500 rounded-lg p-8 text-center">
 <span className="text-6xl mb-4 block">🎉</span>
 <h3 className="text-2xl font-black text-green-900 mb-4">
 Parabéns! Não Está a Desperdiçar Dinheiro
 </h3>
 <p className="text-lg text-green-800 mb-6">
 Mas recomendamos inspeção preventiva anual para garantir que tudo continua OK.
 </p>
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: config.colors.primary }}
 >
 📞 Agendar Inspeção Preventiva
 </a>
 </div>
 )}
 </div>
 </div>
 </section>
 );
}
export default React.memo(LossCalculator);
