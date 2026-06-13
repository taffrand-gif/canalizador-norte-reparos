import React from 'react';
import OptimizedImage from './OptimizedImage';
// memo removed from 'react';
interface CityHeroProps {
 cityName: string;
 phone: string;
 interventionsCount: number;
 onPhoneClick: () => void;
 serviceName: string;
}
/**
 * Composant Hero réutilisable pour les pages de villes
 * Utilise OptimizedImage pour les performances optimales
 */
function CityHero({
 cityName,
 phone,
 interventionsCount,
 onPhoneClick,
 serviceName}: CityHeroProps) {
 const formattedPhone = `${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6)}`;
 return (
 <section className="relative bg-gray-900 py-20">
 {/* Image de fond optimisée */}
 <div className="absolute inset-0 opacity-40">
 <OptimizedImage
 src="/images-optimized/hero/hero-plumber-portugal.jpg"
 alt={`${serviceName} profissional em ${cityName}`}
 width={1920}
 height={600}
 priority={true}
 sizes="100vw"
 className="w-full h-full"
 objectFit="cover"
 />
 </div>
 {/* Contenu */}
 <div className="relative container">
 <div className="max-w-4xl mx-auto text-center text-white">
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 {serviceName} em {cityName} 24H
 </h1>
 <p className="text-xl mb-8">
 Serviço de urgência disponível Atendimento 24h/7d em {cityName} e arredores
 </p>
 <button
 onClick={onPhoneClick}
 className="bg-red-600 hover:bg-red-700 text-white text-2xl font-bold px-12 py-4 rounded-lg transition-colors inline-flex items-center gap-3"
 >
 <span>📞</span>
 <span>Ligar Agora → Técnico resposta prioritária</span>
 </button>
 <p className="mt-6 text-lg opacity-90">
 ✅ Mais de {interventionsCount} intervenções em {cityName} • ⚡ Resposta rápida
 </p>
 </div>
 </div>
 </section>
 );
}
export default React.memo(CityHero);
