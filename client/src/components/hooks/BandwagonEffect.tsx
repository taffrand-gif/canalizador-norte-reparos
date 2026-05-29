'use client';

import { Users, TrendingUp, MapPin, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

interface BandwagonEffectProps {
 city?: string;
 totalClients?: number;
 monthlyGrowth?: number;
}

export default function BandwagonEffect({
 city = 'Bragança',
 totalClients = 500,
 monthlyGrowth = 15
}: BandwagonEffectProps) {
 const [animatedCount, setAnimatedCount] = useState(0);

 useEffect(() => {
 let start = 0;
 const end = totalClients;
 const duration = 2000;
 const increment = end / (duration / 16);

 const timer = setInterval(() => {
 start += increment;
 if (start >= end) {
 setAnimatedCount(end);
 clearInterval(timer);
 } else {
 setAnimatedCount(Math.floor(start));
 }
 }, 16);

 return () => clearInterval(timer);
 }, [totalClients]);

 return (
 <div className="bg-gradient-to-br from-blue-50 to-primary/10 border-2 border-primary/30 rounded-lg p-6 shadow-lg">
 <div className="text-center mb-6">
 <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4">
 <Users className="w-8 h-8" />
 </div>

 <h3 className="text-3xl font-black text-gray-900 mb-2">
 Junte-se a {animatedCount}+ Clientes Satisfeitos
 </h3>

 <p className="text-gray-700">
 em {city} e região que já confiam nos nossos serviços
 </p>
 </div>

 {/* Stats Grid */}
 <div className="grid grid-cols-3 gap-4 mb-6">
 <div className="bg-white rounded-lg p-4 text-center">
 <div className="flex items-center justify-center gap-1 mb-1">
 <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
 <span className="text-2xl font-black text-gray-900">4.9</span>
 </div>
 <p className="text-xs text-gray-600">Avaliação média</p>
 </div>

 <div className="bg-white rounded-lg p-4 text-center">
 <div className="flex items-center justify-center gap-1 mb-1">
 <TrendingUp className="w-4 h-4 text-green-600" />
 <span className="text-2xl font-black text-gray-900">+{monthlyGrowth}%</span>
 </div>
 <p className="text-xs text-gray-600">Crescimento mensal</p>
 </div>

 <div className="bg-white rounded-lg p-4 text-center">
 <div className="flex items-center justify-center gap-1 mb-1">
 <MapPin className="w-4 h-4 text-primary" />
 <span className="text-2xl font-black text-gray-900">86</span>
 </div>
 <p className="text-xs text-gray-600">Cidades servidas</p>
 </div>
 </div>

 {/* Social Proof Messages */}
 <div className="space-y-3 mb-6">
 <div className="bg-white border-l-4 border-green-500 rounded-r-lg p-3">
 <p className="text-sm font-semibold text-gray-900">
 "Melhor serviço de canalizador que já tive!"
 </p>
 <p className="text-xs text-gray-600 mt-1">
 — Maria S., Bragança • Há 2 dias
 </p>
 </div>

 <div className="bg-white border-l-4 border-green-500 rounded-r-lg p-3">
 <p className="text-sm font-semibold text-gray-900">
 "Rápidos, profissionais e preço justo."
 </p>
 <p className="text-xs text-gray-600 mt-1">
 — João P., Mirandela • Há 5 dias
 </p>
 </div>
 </div>

 {/* CTA */}
 <div className="bg-primary/10 border-2 border-primary rounded-lg p-4 text-center">
 <p className="text-sm font-semibold text-gray-900 mb-3">
 🔥 Mais de 50 pessoas contactaram-nos esta semana
 </p>
 <a
 href="https://wa.me/351928484451?text=Quero%20juntar-me%20aos%20clientes%20satisfeitos"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
 >
 💬 Fazer Parte do Grupo
 </a>
 </div>
 </div>
 );
}
