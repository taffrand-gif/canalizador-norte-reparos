'use client';

import { TrendingDown, CheckCircle, AlertCircle } from 'lucide-react';

interface PriceComparison {
  label: string;
  originalPrice: number;
  ourPrice: number;
  savings: number;
}

interface AnchoringPriceProps {
  serviceType?: 'standard' | 'urgent' | 'certification';
}

export default function AnchoringPrice({ serviceType = 'standard' }: AnchoringPriceProps) {
  const priceData = {
    standard: {
      title: 'Reparação Standard',
      comparisons: [
        {
          label: 'Fuga de água simples',
          originalPrice: 250,
          ourPrice: 150,
          savings: 100
        },
        {
          label: 'Desentupimento canalização',
          originalPrice: 180,
          ourPrice: 120,
          savings: 60
        },
        {
          label: 'Instalação torneira',
          originalPrice: 120,
          ourPrice: 80,
          savings: 40
        }
      ],
      note: 'Preços médios da concorrência vs Norte Reparos'
    },
    urgent: {
      title: 'Intervenção Urgente',
      comparisons: [
        {
          label: 'Urgência 24h (concorrência)',
          originalPrice: 400,
          ourPrice: 200,
          savings: 200
        },
        {
          label: 'Fim de semana (concorrência)',
          originalPrice: 350,
          ourPrice: 180,
          savings: 170
        },
        {
          label: 'Feriados (concorrência)',
          originalPrice: 450,
          ourPrice: 220,
          savings: 230
        }
      ],
      note: 'Sem taxas abusivas de urgência'
    },
    certification: {
      title: 'Certificações',
      comparisons: [
        {
          label: 'Certificado ITED (concorrência)',
          originalPrice: 500,
          ourPrice: 350,
          savings: 150
        },
        {
          label: 'Certificado gás (concorrência)',
          originalPrice: 400,
          ourPrice: 280,
          savings: 120
        },
        {
          label: 'Inspeção completa (concorrência)',
          originalPrice: 600,
          ourPrice: 420,
          savings: 180
        }
      ],
      note: 'Certificações oficiais a preços justos'
    }
  };

  const data = priceData[serviceType];
  const totalSavings = data.comparisons.reduce((sum, item) => sum + item.savings, 0);
  const avgSavingsPercent = Math.round(
    (data.comparisons.reduce((sum, item) => sum + (item.savings / item.originalPrice) * 100, 0) /
      data.comparisons.length)
  );

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-3">
          <TrendingDown className="w-5 h-5" />
          <span className="font-bold">Poupe até {avgSavingsPercent}%</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {data.title}
        </h3>

        <p className="text-gray-600">
          Compare os nossos preços com a concorrência
        </p>
      </div>

      {/* Price Comparisons */}
      <div className="space-y-4 mb-6">
        {data.comparisons.map((comparison, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-50 to-green-50 border border-gray-200 rounded-lg p-4"
          >
            <p className="font-semibold text-gray-900 mb-3">{comparison.label}</p>

            <div className="flex items-center justify-between gap-4">
              {/* Original Price */}
              <div className="flex-1">
                <p className="text-xs text-gray-600 mb-1">Concorrência</p>
                <p className="text-2xl font-bold text-gray-400 line-through">
                  €{comparison.originalPrice}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <div className="bg-green-500 text-white rounded-full p-2">
                  <TrendingDown className="w-5 h-5" />
                </div>
              </div>

              {/* Our Price */}
              <div className="flex-1 text-right">
                <p className="text-xs text-green-700 mb-1 font-semibold">Norte Reparos</p>
                <p className="text-3xl font-black text-green-600">
                  €{comparison.ourPrice}
                </p>
              </div>
            </div>

            {/* Savings Badge */}
            <div className="mt-3 bg-green-100 border-l-4 border-green-500 rounded-r-lg p-2">
              <p className="text-sm font-bold text-green-900 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Poupa €{comparison.savings} ({Math.round((comparison.savings / comparison.originalPrice) * 100)}%)
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Total Savings */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6 mb-4">
        <div className="text-center">
          <p className="text-sm font-semibold mb-2 opacity-90">
            Poupança Total Média
          </p>
          <p className="text-5xl font-black mb-2">
            €{Math.round(totalSavings / data.comparisons.length)}
          </p>
          <p className="text-sm opacity-90">
            por serviço comparado com a concorrência
          </p>
        </div>
      </div>

      {/* Why Cheaper */}
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mb-4">
        <div className="flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-blue-900 mb-1">
              Porque conseguimos preços mais baixos?
            </p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>✓ Sem intermediários ou franchising</li>
              <li>✓ Equipa local (menos deslocações)</li>
              <li>✓ Parcerias diretas com fornecedores</li>
              <li>✓ Eficiência operacional</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Note */}
      <p className="text-xs text-center text-gray-500 mb-4">
        {data.note}
      </p>

      {/* CTA */}
      <a
        href="https://wa.me/351928484451?text=Quero%20um%20orçamento%20com%20preço%20justo"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold text-center px-6 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
      >
        💬 Pedir Orçamento Sem Compromisso
      </a>
    </div>
  );
}
