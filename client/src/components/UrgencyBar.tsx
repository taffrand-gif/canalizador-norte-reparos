// Barre d'urgence sticky top - Quick Win #1
// Style Hormozi : Urgence + Rareté + FOMO

import { useEffect, useState } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function UrgencyBar() {
  const [timeLeft, setTimeLeft] = useState<string>('');

  // Calculer le tempo até meia-noite
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      
      const diff = midnight.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 animate-pulse">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          <span className="font-black text-lg">🚨 URGÊNCIA 24/7</span>
        </div>
        
        <div className="hidden md:block">|</div>
        
        <div className="flex items-center gap-2">
          <span className="font-medium">Intervenção em 30 min ou GRÁTIS</span>
        </div>
        
        <div className="hidden md:block">|</div>
        
        <div className="flex items-center gap-2">
          <span className="font-medium">Promoção válida por:</span>
          <span className="font-black text-xl bg-black px-3 py-1 rounded">
            {timeLeft}
          </span>
        </div>
        
        <div className="hidden md:block">|</div>
        
        <div className="flex items-center gap-2">
          <span className="font-medium">📞</span>
          <span className="font-black">928 484 451</span>
        </div>
      </div>
    </div>
  );
}