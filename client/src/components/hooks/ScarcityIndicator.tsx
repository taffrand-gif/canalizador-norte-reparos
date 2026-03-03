'use client';

import { AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ScarcityIndicatorProps {
  city: string;
  availableTechnicians?: number;
  nextAvailableSlot?: string;
}

export default function ScarcityIndicator({
  city,
  availableTechnicians = 2,
  nextAvailableSlot = "Amanhã 09:00"
}: ScarcityIndicatorProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  const isLowAvailability = availableTechnicians <= 2;

  return (
    <div className={`
      border-l-4 p-4 rounded-r-lg animate-in slide-in-from-left duration-500
      ${isLowAvailability
        ? 'bg-orange-50 border-orange-500'
        : 'bg-blue-50 border-blue-500'
      }
    `}>
      <div className="flex items-start gap-3">
        <AlertCircle className={`
          w-5 h-5 mt-0.5 flex-shrink-0
          ${isLowAvailability ? 'text-orange-500' : 'text-blue-500'}
        `} />
        <div className="flex-1">
          <p className="font-semibold text-gray-900">
            {isLowAvailability ? (
              <>Apenas {availableTechnicians} técnico{availableTechnicians > 1 ? 's' : ''} disponível{availableTechnicians > 1 ? 'is' : ''} hoje em {city}</>
            ) : (
              <>Técnicos disponíveis em {city}</>
            )}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Próxima vaga: {nextAvailableSlot}
          </p>
          {isLowAvailability && (
            <p className="text-xs text-orange-600 mt-2 font-medium">
              ⚡ Agenda 80% cheio esta semana
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
