import React from 'react';
// Guarantee Section Component - 4 cartões de garantias
// Ultrapassar objeção #2 "Será que vai realmente resolver?"
// Impacto: Confiança + Conversão
import { useSite } from '@/contexts/SiteContext';
import { useAnalytics } from '@/hooks/useAnalytics';
// memo removed from 'react';
import { Phone, MessageCircle } from 'lucide-react';
interface Guarantee {
 icon: string;
 title: string;
 description: string;
 badge: string;
}
function GuaranteeSection() {
 const { config } = useSite();
 const { trackPhoneClick, trackWhatsAppClick } = useAnalytics();
 const guarantees: Guarantee[] = [
 {
 icon: '🛡️',
 title: 'Seguro de responsabilidade civil',
 description: 'Seguro de responsabilidade civil profissional até 50.000 €.',
 badge: 'Até 50.000 €'
 },
 {
 icon: '🔍',
 title: 'Diagnóstico com equipamento',
 description: 'Câmara térmica, câmara endoscópica, fluoresceína, detetor de humidade e equipamento Ridgid, conforme a situação.',
 badge: 'Canalização'
 },
 {
 icon: '👨‍🔧',
 title: 'Experiência profissional',
 description: 'Mais de 20 anos de experiência profissional em trabalhos de canalização.',
 badge: '20+ anos'
 },
 {
 icon: '✅',
 title: 'Garantia do fabricante',
 description: 'Quando aplicável, a garantia dos materiais é prestada pelo respetivo fabricante.',
 badge: 'Quando aplicável'
 }
 ];
 const handlePhoneClick = () => {
 trackPhoneClick(config.phone);
 };
 const handleWhatsAppClick = () => {
 trackWhatsAppClick('GuaranteeSection');
 };
 return (
 <section className="py-16 bg-green-50">
 <div className="container">
 <div className="max-w-6xl mx-auto">
 {/* Header */}
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full font-bold text-sm mb-4">
 🛡️ Canalização com informação clara
 </div>
 <h2 className="text-4xl md:text-5xl font-black mb-6">
 Seguro e compromissos
 </h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Informação clara sobre diagnóstico, materiais e condições da intervenção.
 </p>
 </div>
 {/* Guarantees Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
 {guarantees.map((guarantee, index) => (
 <article
 key={index}
 className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 group"
 >
 {/* Icon */}
 <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
 {guarantee.icon}
 </div>
 {/* Badge */}
 <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full mb-3">
 {guarantee.badge}
 </div>
 {/* Title */}
 <h3 className="text-xl font-black text-gray-900 mb-3">
 {guarantee.title}
 </h3>
 {/* Description */}
 <p className="text-gray-700 leading-relaxed">
 {guarantee.description}
 </p>
 </article>
 ))}
 </div>
 {/* CTA Banner */}
 <div className="bg-white p-8 rounded-xl border-4 border-green-500 text-center">
 <h3 className="text-2xl font-black mb-4">
 Precisa de falar sobre uma reparação?
 </h3>
 <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
 Descreva a situação e, se possível, envie fotografias. Podemos dar uma estimativa à distância antes da intervenção.
 </p>
 <p className="text-base text-gray-700 mb-6 max-w-3xl mx-auto">
 Dias úteis, das 09h às 18h: 70 €/h + 30 € de deslocação. Fora deste horário: 100 €/h + 50 € de deslocação. Valores com IVA; cada hora iniciada é devida.
 </p>
 <p className="text-sm text-gray-500 mb-6 max-w-2xl mx-auto">
 Não há deslocação nem orçamento gratuito.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 onClick={handlePhoneClick}
 className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
 style={{ backgroundColor: config.colors.primary }}
 aria-label={`Ligar para ${config.phone}`}
 >
 <Phone className="w-5 h-5" />
 Ligar: {config.phone}
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent('Olá! Preciso de ajuda com um problema de canalização. Posso enviar uma descrição e fotografias para uma estimativa à distância?')}`}
 onClick={handleWhatsAppClick}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-[#128C7E] rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
 aria-label="Contactar via WhatsApp"
 >
 <MessageCircle className="w-5 h-5" />
 WhatsApp
 </a>
 </div>
 <p className="text-sm text-gray-500 mt-4">
 ✅ Seguro RC profissional • ✅ Diagnóstico com equipamento • ✅ Experiência profissional
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(GuaranteeSection);
