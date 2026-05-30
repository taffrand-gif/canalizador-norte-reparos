import React from 'react';
import { useSite } from '@/contexts/SiteContext';
interface Forfait {
 icon: string;
 title: string;
 description: string;
 priceRange: string;
 details: string[];
 popular?: boolean;
}
interface ForfaitsGridProps {
 className?: string;
}
function ForfaitsGrid({ className = '' }: ForfaitsGridProps) {
 const { config } = useSite();
 const accentColor = config.id === 'norte-reparos' ? '#0e7490' : '#FF6B35';
 const forfaitsCanalizador: Forfait[] = [
 {
 icon: '🚰',
 title: 'Desentupimento Simples',
 description: 'Desobstrução de canalização básica',
 priceRange: '80-145€',
 details: [
 'Deslocação incluída (Zona 1)',
 'Desentupimento mecânico',
 'Teste de escoamento',
 'Garantia 3 meses'
 ]
 },
 {
 icon: '💧',
 title: 'Fuga de Água Visível',
 description: 'Arranjo de fuga identificada',
 priceRange: '80-145€',
 details: [
 'Deslocação incluída (Zona 1)',
 'Arranjo completa',
 'Material incluído',
 'Garantia 3 meses'
 ],
 popular: true
 },
 {
 icon: '🔍',
 title: 'Fuga Oculta',
 description: 'Deteção + arranjo de fuga escondida',
 priceRange: '210-405€',
 details: [
 'Deslocação incluída (Zona 1)',
 'Deteção com equipamento',
 'Arranjo incluída',
 'Relatório detalhado'
 ],
 popular: true
 },
 {
 icon: '🔥',
 title: 'Arranjo Esquentador',
 description: 'Diagnóstico e arranjo',
 priceRange: '80-210€',
 details: [
 'Deslocação incluída (Zona 1)',
 'Diagnóstico completo',
 'Arranjo ou substituição peças',
 'Garantia 3 meses'
 ]
 },
 {
 icon: '🚿',
 title: 'Instalação Torneira',
 description: 'Substituição ou instalação nova',
 priceRange: '80-145€',
 details: [
 'Deslocação incluída (Zona 1)',
 'Instalação completa',
 'Vedação garantida',
 'Teste de pressão'
 ]
 },
 {
 icon: '🚽',
 title: 'Arranjo Sanita',
 description: 'Autoclismo, mecanismo ou vedação',
 priceRange: '80-145€',
 details: [
 'Deslocação incluída (Zona 1)',
 'Substituição mecanismo',
 'Regulação completa',
 'Garantia 3 meses'
 ]
 },
 {
 icon: '🏠',
 title: 'Casa de Banho Completa',
 description: 'Renovação total de canalização',
 priceRange: '1315-2615€',
 details: [
 'Deslocação incluída (Zona 1)',
 'Sanita + lavatório + duche',
 'Tubagem completa',
 'Garantia 3 meses'
 ]
 },
 {
 icon: '🏗️',
 title: 'Instalação Completa',
 description: 'Canalização casa/apartamento novo',
 priceRange: 'Sob orçamento',
 details: [
 'Estudo personalizado',
 'Plano de canalização',
 'Material de qualidade',
 'Garantia 3 meses'
 ]
 }
 ];
 return (
 <section className={`py-16 bg-white ${className}`}>
 <div className="container mx-auto px-4 max-w-7xl">
 {/* Header */}
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 Pacotes & Tarifas Claras
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Preços tudo incluído para as intervenções mais comuns. Material padrão incluído.
 </p>
 </div>
 {/* Grid */}
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
 {forfaitsCanalizador.map((forfait, idx) => (
 <div
 key={idx}
 className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
 forfait.popular ? 'ring-2 ring-offset-2' : 'border-2 border-gray-100'
 }`}
 style={forfait.popular ? { ringColor: accentColor } : {}}
 >
 {/* Popular Badge */}
 {forfait.popular && (
 <div
 className="text-white text-center py-2 text-sm font-bold"
 style={{ backgroundColor: accentColor }}
 >
 ⭐ MAIS PEDIDO
 </div>
 )}
 <div className="p-6">
 {/* Icon */}
 <div className="text-5xl mb-4 text-center">{forfait.icon}</div>
 {/* Title */}
 <h3 className="text-xl font-bold text-gray-900 mb-2 text-center min-h-[56px]">
 {forfait.title}
 </h3>
 {/* Description */}
 <p className="text-sm text-gray-600 mb-4 text-center min-h-[40px]">
 {forfait.description}
 </p>
 {/* Price */}
 <div className="text-center mb-6">
 <div
 className="text-4xl font-black mb-1"
 style={{ color: accentColor }}
 >
 {forfait.priceRange}
 </div>
 <p className="text-xs text-gray-500">Zona 1 - Material padrão incluído</p>
 </div>
 {/* Details */}
 <ul className="space-y-2 mb-6">
 {forfait.details.map((detail, detailIdx) => (
 <li key={detailIdx} className="flex items-start gap-2 text-sm text-gray-700">
 <span className="text-green-500 mt-0.5">✓</span>
 <span>{detail}</span>
 </li>
 ))}
 </ul>
 {/* CTA Button */}
 <button
 className="w-full py-3 rounded-xl font-bold text-white transition-all hover:shadow-lg"
 style={{ backgroundColor: accentColor }}
 onClick={() => {
 const phone = '928484451';
 const message = encodeURIComponent(`Olá! Gostaria de um orçamento para: ${forfait.title}`);
 window.open(`https://wa.me/351${phone}?text=${message}`, '_blank');
 }}
 >
 Pedir Orçamento
 </button>
 </div>
 </div>
 ))}
 </div>
 {/* Important Notes */}
 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
 <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
 Informações Importantes
 </h3>
 <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
 <div className="text-center">
 <div className="text-3xl mb-2">📍</div>
 <h4 className="font-bold text-gray-900 mb-1">Zonas de Deslocação</h4>
 <p className="text-sm text-gray-600">
 Preços indicados para Zona 1 (≤15km). Outras zonas: ver tabela tarifária.
 </p>
 </div>
 <div className="text-center">
 <div className="text-3xl mb-2">🔧</div>
 <h4 className="font-bold text-gray-900 mb-1">Material Incluído</h4>
 <p className="text-sm text-gray-600">
 Material padrão incluído. Equipamento premium sob pedido com suplemento.
 </p>
 </div>
 <div className="text-center">
 <div className="text-3xl mb-2">⏰</div>
 <h4 className="font-bold text-gray-900 mb-1">Acréscimos</h4>
 <p className="text-sm text-gray-600">
 Sábado +33%, Domingo/Feriado +50%, Noturno (18h-8h) +50% + 20€
 </p>
 </div>
 </div>
 </div>
 {/* Guarantee Banner */}
 <div className="mt-8 text-center">
 <div className="inline-block bg-green-50 border-2 border-green-200 rounded-xl px-8 py-4">
 <p className="text-lg font-bold text-gray-900 mb-1">
 ✅ Preço Comunicado e Validado Antes da Intervenção
 </p>
 <p className="text-sm text-gray-600">
 Nenhuma surpresa. Se o preço mudar, avisamos ANTES de começar.
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(ForfaitsGrid);
