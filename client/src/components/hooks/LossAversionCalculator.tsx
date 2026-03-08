'use client';

import { AlertTriangle, TrendingUp, Calculator } from 'lucide-react';
import { useState } from 'react';

interface LossAversionCalculatorProps {
  problemType?: 'fuga' | 'eletricidade' | 'certificacao';
}

export default function LossAversionCalculator({ problemType = 'fuga' }: LossAversionCalculatorProps) {
  const [daysWaiting, setDaysWaiting] = useState(7);

  const scenarios = {
    fuga: {
      title: 'Calculador: Custo de Adiar Arranjo de Fuga',
      icon: '💧',
      dailyCost: 15,
      escalationFactor: 1.2,
      risks: [
        'Conta de água aumenta €15-30/dia',
        'Danos estruturais (humidade, bolor)',
        'Risco de infiltração nos vizinhos',
        'Arranjo 3× mais cara após 1 mês'
      ]
    },
    eletricidade: {
      title: 'Calculador: Custo de Adiar Arranjo Elétrica',
      icon: '⚡',
      dailyCost: 25,
      escalationFactor: 1.5,
      risks: [
        'Risco de incêndio elétrico',
        'Equipamentos danificados (€500-2000)',
        'Consumo excessivo de energia',
        'Multa seguradora se houver sinistro'
      ]
    },
    certificacao: {
      title: 'Calculador: Custo de Adiar Certificação',
      icon: '📋',
      dailyCost: 50,
      escalationFactor: 1.1,
      risks: [
        'Multa DGEG: €1.000-10.000',
        'Impossível vender/arrendar imóvel',
        'Seguro pode não cobrir sinistros',
        'Juros de mora acumulam diariamente'
      ]
    }
  };

  const scenario = scenarios[problemType];
  const totalCost = Math.round(scenario.dailyCost * daysWaiting * Math.pow(scenario.escalationFactor, daysWaiting / 7));
  const repairCost = problemType === 'fuga' ? 150 : problemType === 'eletricidade' ? 200 : 300;
  const savings = totalCost - repairCost;

  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-red-500 text-white p-3 rounded-lg">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {scenario.icon} {scenario.title}
          </h3>
          <p className="text-sm text-gray-600">
            Veja quanto está a perder por cada dia de espera
          </p>
        </div>
      </div>

      {/* Slider */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Há quantos dias tem este problema?
        </label>
        <input
          type="range"
          min="1"
          max="30"
          value={daysWaiting}
          onChange={(e) => setDaysWaiting(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
        />
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>1 dia</span>
          <span className="font-bold text-red-600 text-lg">{daysWaiting} dias</span>
          <span>30 dias</span>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-lg p-6 mb-4 border-2 border-red-300">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Custo Acumulado</p>
            <p className="text-3xl font-black text-red-600">
              €{totalCost}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Custo Arranjo</p>
            <p className="text-3xl font-black text-green-600">
              €{repairCost}
            </p>
          </div>
        </div>

        <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-r-lg">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-5 h-5 text-red-600" />
            <p className="font-bold text-red-900">
              Está a perder €{savings} por esperar!
            </p>
          </div>
          <p className="text-sm text-red-700">
            Cada dia que passa, o problema agrava-se e fica mais caro
          </p>
        </div>
      </div>

      {/* Risks */}
      <div className="mb-4">
        <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-orange-500" />
          Riscos de Adiar:
        </p>
        <ul className="space-y-2">
          {scenario.risks.map((risk, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-red-500 font-bold">⚠️</span>
              <span>{risk}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <a
        href="https://wa.me/351928484451?text=Quero%20resolver%20o%20problema%20hoje%20e%20evitar%20custos%20maiores"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold text-center px-6 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
      >
        💬 Resolver Agora e Poupar €{savings}
      </a>

      <p className="text-xs text-center text-gray-600 mt-3">
        ⚡ Técnico disponível hoje • Resposta em 5 minutos
      </p>
    </div>
  );
}
