import React from 'react';

export default function PremiumBar() {
 const items = [
 { icon: '🔧', label: 'Equipamento Ridgid' },
 { icon: '📷', label: 'Câmara térmica' },
 { icon: '🔍', label: 'Câmara endoscópica' },
 { icon: '💧', label: 'Fluoresceína' },
 { icon: '💦', label: 'Detetor de humidade' },
 ];
 return (
 <div className="bg-gray-900 text-white py-3 overflow-hidden">
 <div className="container mx-auto px-4">
 <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap text-sm md:text-base">
 <span className="text-xs uppercase tracking-widest text-gray-400 font-bold hidden md:inline">
 Equipamento profissional:
 </span>
 {items.map((item, idx) => (
 <span key={idx} className="flex items-center gap-2 font-semibold whitespace-nowrap">
 <span>{item.icon}</span>
 <span>{item.label}</span>
 </span>
 ))}
 </div>
 </div>
 </div>
 );
}
