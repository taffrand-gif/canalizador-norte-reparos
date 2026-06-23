'use client';
import { Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
interface UrgencyTimerProps {
 guaranteedResponseTime?: number; // minutes
 discountPercentage?: number;
}
export default function UrgencyTimer({
 guaranteedResponseTime = 40,
 discountPercentage = 20
}: UrgencyTimerProps) {
 const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
 useEffect(() => {
 const timer = setInterval(() => {
 setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
 }, 1000);
 return () => clearInterval(timer);
 }, []);
 const minutes = Math.floor(timeLeft / 60);
 const seconds = timeLeft % 60;
 return (
 <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-lg shadow-lg">
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <Clock className="w-6 h-6 animate-pulse" />
 <div>
 <p className="font-bold text-lg">
 A confirmar em {guaranteedResponseTime} minutos
 </p>
 <p className="text-sm text-white/90">
 ou desconto {discountPercentage}% no serviço
 </p>
 </div>
 </div>
 <div className="text-right">
 <p className="text-xs text-white/80">Oferta expira em:</p>
 <p className="text-2xl font-black tabular-nums">
 {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
 </p>
 </div>
 </div>
 </div>
 );
}
