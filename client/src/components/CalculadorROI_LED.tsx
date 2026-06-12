'use client';
import { useState } from 'react';
import { Lightbulb, TrendingDown, Calculator, Euro } from 'lucide-react';
interface LEDCalculatorProps {
 defaultLamps?: number;
 defaultHoursPerDay?: number;
}
export default function CalculadorROI_LED({
 defaultLamps = 10,
 defaultHoursPerDay = 8
}: LEDCalculatorProps) {
 const [numLamps, setNumLamps] = useState(defaultLamps);
 const [hoursPerDay, setHoursPerDay] = useState(defaultHoursPerDay);
 const [electricityPrice, setElectricityPrice] = useState(0.25); // €/kWh
 // Constants
 const incandescentWatts = 60;
 const ledWatts = 9;
 const incandescentPrice = 1.5;
 const ledPrice = 8;
 const incandescentLifespan = 1000; // hours
 const ledLifespan = 25000; // hours
 // Calculations
 const hoursPerYear = hoursPerDay * 365;
 // Energy consumption
 const incandescentKwhYear = (incandescentWatts * hoursPerYear * numLamps) / 1000;
 const ledKwhYear = (ledWatts * hoursPerYear * numLamps) / 1000;
 const energySavingsYear = incandescentKwhYear - ledKwhYear;
 const energyCostSavingsYear = energySavingsYear * electricityPrice;
 // Lamp replacement costs
 const lampsReplacedPerYear = (hoursPerYear / incandescentLifespan) * numLamps;
 const replacementCostYear = lampsReplacedPerYear * incandescentPrice;
 // Total savings
 const totalSavingsYear = energyCostSavingsYear + replacementCostYear;
 const totalSavings5Years = totalSavingsYear * 5;
 // Initial investment
 const initialInvestment = numLamps * ledPrice;
 // ROI
 const paybackMonths = (initialInvestment / totalSavingsYear) * 12;
 const roi5Years = ((totalSavings5Years - initialInvestment) / initialInvestment) * 100;
 return (
 <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
 <div className="text-center mb-6">
 <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 text-white rounded-full mb-4">
 <Lightbulb className="w-8 h-8" />
 </div>
 <h2 className="text-3xl font-bold text-gray-900 mb-2">
 💡 Calculador ROI LED
 </h2>
 <p className="text-gray-700">
 Descubra quanto pode poupar ao mudar para iluminação LED
 </p>
 </div>
 {/* Input Controls */}
 <div className="bg-white rounded-lg p-6 mb-6 space-y-6">
 <div>
 <label className="block text-sm font-semibold text-gray-700 mb-2">
 Número de lâmpadas
 </label>
 <input
 type="range"
 min="1"
 max="50"
 value={numLamps}
 onChange={(e) => setNumLamps(Number(e.target.value))}
 className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-500"
 />
 <div className="flex justify-between text-xs text-gray-600 mt-1">
 <span>1</span>
 <span className="font-bold text-yellow-600 text-lg">{numLamps} lâmpadas</span>
 <span>50</span>
 </div>
 </div>
 <div>
 <label className="block text-sm font-semibold text-gray-700 mb-2">
 Horas por dia (ligadas)
 </label>
 <input
 type="range"
 min="1"
 max="24"
 value={hoursPerDay}
 onChange={(e) => setHoursPerDay(Number(e.target.value))}
 className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-500"
 />
 <div className="flex justify-between text-xs text-gray-600 mt-1">
 <span>1h</span>
 <span className="font-bold text-yellow-600 text-lg">{hoursPerDay}h/dia</span>
 <span>24h</span>
 </div>
 </div>
 <div>
 <label className="block text-sm font-semibold text-gray-700 mb-2">
 Preço eletricidade (€/kWh)
 </label>
 <input
 type="number"
 step="0.01"
 value={electricityPrice}
 onChange={(e) => setElectricityPrice(Number(e.target.value))}
 className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none"
 />
 </div>
 </div>
 {/* Results */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
 <div className="bg-white rounded-lg p-6 border-2 border-green-200">
 <div className="flex items-center gap-2 mb-2">
 <TrendingDown className="w-5 h-5 text-green-600" />
 <p className="text-sm font-semibold text-gray-700">Poupança Anual</p>
 </div>
 <p className="text-4xl font-black text-green-600 mb-1">
 €{totalSavingsYear.toFixed(0)}
 </p>
 <p className="text-xs text-gray-600">
 €{energyCostSavingsYear.toFixed(0)} energia + €{replacementCostYear.toFixed(0)} substituições
 </p>
 </div>
 <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
 <div className="flex items-center gap-2 mb-2">
 <Calculator className="w-5 h-5 text-blue-600" />
 <p className="text-sm font-semibold text-gray-700">Retorno Investimento</p>
 </div>
 <p className="text-4xl font-black text-blue-600 mb-1">
 {paybackMonths.toFixed(1)} meses
 </p>
 <p className="text-xs text-gray-600">
 Investimento inicial: €{initialInvestment.toFixed(0)}
 </p>
 </div>
 <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
 <div className="flex items-center gap-2 mb-2">
 <Euro className="w-5 h-5 text-purple-600" />
 <p className="text-sm font-semibold text-gray-700">Poupança 5 Anos</p>
 </div>
 <p className="text-4xl font-black text-purple-600 mb-1">
 €{totalSavings5Years.toFixed(0)}
 </p>
 <p className="text-xs text-gray-600">
 ROI: {roi5Years.toFixed(0)}%
 </p>
 </div>
 <div className="bg-white rounded-lg p-6 border-2 border-orange-200">
 <div className="flex items-center gap-2 mb-2">
 <Lightbulb className="w-5 h-5 text-orange-600" />
 <p className="text-sm font-semibold text-gray-700">Energia Poupada</p>
 </div>
 <p className="text-4xl font-black text-orange-600 mb-1">
 {energySavingsYear.toFixed(0)} kWh
 </p>
 <p className="text-xs text-gray-600">
 -{((energySavingsYear / incandescentKwhYear) * 100).toFixed(0)}% consumo
 </p>
 </div>
 </div>
 {/* Environmental Impact */}
 <div className="bg-green-100 border-l-4 border-green-500 rounded-r-lg p-4 mb-6">
 <p className="font-semibold text-green-900 mb-1">
 🌍 Impacto Ambiental
 </p>
 <p className="text-sm text-green-800">
 Reduz emissões de CO₂ em {(energySavingsYear * 0.5).toFixed(0)}kg/ano
 (equivalente a plantar {Math.round(energySavingsYear * 0.5 / 20)} árvores)
 </p>
 </div>
 {/* CTA */}
 <a
 href="https://wa.me/351928484451?text=Quero%20mudar%20para%20iluminação%20LED%20e%20poupar%20na%20conta%20de%20luz"
 target="_blank"
 rel="noopener noreferrer"
 className="block w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-center px-6 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
 >
 💬 Pedir Orçamento LED → Poupar €{totalSavingsYear.toFixed(0)}/ano
 </a>
 <p className="text-xs text-center text-gray-600 mt-3">
 ⚡ Instalação profissional • Garantia do serviço • Certificado
 </p>
 </div>
 );
}
