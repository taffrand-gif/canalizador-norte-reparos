'use client';

import { useState } from 'react';
import { Droplet, TrendingUp, AlertTriangle, Euro } from 'lucide-react';

interface SimuladorCustoFugaProps {
  defaultLitersPerHour?: number;
}

export default function SimuladorCustoFuga({
  defaultLitersPerHour = 10
}: SimuladorCustoFugaProps) {
  const [litersPerHour, setLitersPerHour] = useState(defaultLitersPerHour);
  const [daysWaiting, setDaysWaiting] = useState(7);
  const [waterPrice, setWaterPrice] = useState(2.5); // €/m³

  // Calculations
  const litersPerDay = litersPerHour * 24;
  const m3PerDay = litersPerDay / 1000;
  const totalLiters = litersPerDay * daysWaiting;
  const totalM3 = totalLiters / 1000;
  const waterCost = totalM3 * waterPrice;

  // Damage escalation (increases over time)
  const structuralDamage = daysWaiting > 14 ? 500 : daysWaiting > 7 ? 200 : 0;
  const moldRisk = daysWaiting > 21 ? 300 : daysWaiting > 14 ? 150 : 0;
  const neighborDamage = daysWaiting > 30 ? 1000 : 0;

  const totalDamage = waterCost + structuralDamage + moldRisk + neighborDamage;
  const repairCost = 150; // Average repair cost
  const totalLoss = totalDamage - repairCost;

  // Severity level
  let severity: 'low' | 'medium' | 'high' | 'critical' = 'low';
  if (totalDamage > 1000) severity = 'critical';
  else if (totalDamage > 500) severity = 'high';
  else if (totalDamage > 200) severity = 'medium';

  const severityColors = {
    low: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-900' },
    medium: { bg: 'bg-yellow-50', border: 'border-yellow-500', text: 'text-yellow-900' },
    high: { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-900' },
    critical: { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-900' }
  };

  const colors = severityColors[severity];

  return (
    <div className={`${colors.bg} border-2 ${colors.border} rounded-lg p-6 shadow-lg max-w-4xl mx-auto`}>
      <div className="text-center mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.border.replace('border', 'bg')} text-white rounded-full mb-4`}>
          <Droplet className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          💧 Simulador Custo de Fuga de Água
        </h2>
        <p className="text-gray-700">
          Calcule quanto está a perder por cada dia de espera
        </p>
      </div>

      {/* Input Controls */}
      <div className="bg-white rounded-lg p-6 mb-6 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Intensidade da fuga (litros/hora)
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={litersPerHour}
            onChange={(e) => setLitersPerHour(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>Gotejamento (1L/h)</span>
            <span className="font-bold text-blue-600 text-lg">{litersPerHour}L/h</span>
            <span>Jato forte (100L/h)</span>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            💧 {litersPerDay.toFixed(0)} litros/dia = {(litersPerDay / 1000).toFixed(1)} m³/dia
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Há quantos dias tem esta fuga?
          </label>
          <input
            type="range"
            min="1"
            max="60"
            value={daysWaiting}
            onChange={(e) => setDaysWaiting(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>1 dia</span>
            <span className="font-bold text-red-600 text-lg">{daysWaiting} dias</span>
            <span>60 dias</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Preço água (€/m³)
          </label>
          <input
            type="number"
            step="0.1"
            value={waterPrice}
            onChange={(e) => setWaterPrice(Number(e.target.value))}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Droplet className="w-5 h-5 text-blue-600" />
            <p className="text-sm font-semibold text-gray-700">Água Desperdiçada</p>
          </div>
          <p className="text-4xl font-black text-blue-600 mb-1">
            {totalM3.toFixed(1)} m³
          </p>
          <p className="text-xs text-gray-600">
            {totalLiters.toFixed(0)} litros em {daysWaiting} dias
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Euro className="w-5 h-5 text-orange-600" />
            <p className="text-sm font-semibold text-gray-700">Custo Água</p>
          </div>
          <p className="text-4xl font-black text-orange-600 mb-1">
            €{waterCost.toFixed(0)}
          </p>
          <p className="text-xs text-gray-600">
            Apenas na conta de água
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <p className="text-sm font-semibold text-gray-700">Danos Estruturais</p>
          </div>
          <p className="text-4xl font-black text-red-600 mb-1">
            €{(structuralDamage + moldRisk + neighborDamage).toFixed(0)}
          </p>
          <p className="text-xs text-gray-600">
            Humidade, bolor, infiltrações
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <p className="text-sm font-semibold text-gray-700">Custo Total</p>
          </div>
          <p className="text-4xl font-black text-purple-600 mb-1">
            €{totalDamage.toFixed(0)}
          </p>
          <p className="text-xs text-gray-600">
            Acumulado até agora
          </p>
        </div>
      </div>

      {/* Comparison */}
      <div className="bg-white rounded-lg p-6 mb-6 border-2 border-green-200">
        <h3 className="font-bold text-gray-900 mb-4 text-center">
          💰 Comparação: Arranjar Agora vs Esperar
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Custo Arranjo</p>
            <p className="text-3xl font-black text-green-600">€{repairCost}</p>
            <p className="text-xs text-green-700 mt-1">✅ Resolver hoje</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Custo Acumulado</p>
            <p className="text-3xl font-black text-red-600">€{totalDamage.toFixed(0)}</p>
            <p className="text-xs text-red-700 mt-1">❌ Já perdeu</p>
          </div>
        </div>
        <div className="mt-4 bg-red-100 border-l-4 border-red-500 p-4 rounded-r-lg">
          <p className="font-bold text-red-900">
            ⚠️ Está a perder €{totalLoss.toFixed(0)} por esperar!
          </p>
          <p className="text-sm text-red-800 mt-1">
            Cada dia que passa, o problema agrava-se e fica mais caro
          </p>
        </div>
      </div>

      {/* Risks */}
      {daysWaiting > 7 && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-r-lg p-4 mb-6">
          <p className="font-semibold text-yellow-900 mb-2">
            ⚠️ Riscos Adicionais:
          </p>
          <ul className="space-y-1 text-sm text-yellow-800">
            {structuralDamage > 0 && <li>• Danos estruturais (humidade nas paredes)</li>}
            {moldRisk > 0 && <li>• Bolor e problemas de saúde</li>}
            {neighborDamage > 0 && <li>• Infiltração nos vizinhos (responsabilidade civil)</li>}
            <li>• Aumento exponencial dos custos</li>
          </ul>
        </div>
      )}

      {/* CTA */}
      <a
        href="https://wa.me/351928484451?text=Tenho%20uma%20fuga%20de%20água%20urgente.%20Preciso%20de%20arranjo%20hoje!"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold text-center px-6 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
      >
        💬 Resolver Agora e Evitar €{totalLoss.toFixed(0)} de Prejuízo
      </a>

      <p className="text-xs text-center text-gray-600 mt-3">
        ⚡ Técnico disponível em 30min • Arranjo definitiva • Garantia 2 anos
      </p>
    </div>
  );
}
