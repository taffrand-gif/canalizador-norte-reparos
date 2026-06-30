import React from 'react';
// Design: Professional Service Layout
// - Massive title with ExtraBold Poppins
// - Full-width hero with overlay
// - Oversized CTA button with hard shadow
// - Three value badges with thick borders
import { useSite } from '@/contexts/SiteContext';
import { useMemo } from 'react';
import { Phone } from 'lucide-react';
import { ServicesSlider } from './ServicesSlider';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useLocationContent, usePersonalizedWhatsAppMessage } from '@/hooks/useLocationContent';
function Hero() {
 const { config } = useSite();
 const { trackPhoneClick, trackWhatsAppClick } = useAnalytics();
 const { city, arrivalTime } = useLocationContent();
 // Personalized title and subtitle
 const personalizedTitle = useMemo(() => {
 return `${config.hero.title.split('—')[0]}— ${city}`;
 }, [config.hero.title, city]);
const personalizedSubtitle = useMemo(() => {
 return `Instalação e remodelação ao seu domicílio em ${city}. Orçamento por escrito, garantia 1 ano.`;
 }, [city]);
 const whatsappMessage = usePersonalizedWhatsAppMessage(config.whatsappMessage);
 return (
 <section
 id="home"
 className="relative min-h-[600px] flex items-center justify-center bg-gray-900"
 >
 {/* M8 activation : <picture> avec source WebP + fallback JPG (reversible). */}
 <picture>
 <source
 type="image/webp"
 srcSet={`${config.hero.backgroundImage.replace(/\.jpg$/i, '.webp')} 1x`}
 />
 <img
 src={config.hero.backgroundImage}
 alt="Canalizador profissional a trabalhar em Trás-os-Montes"
 fetchPriority="high"
 className="absolute inset-0 w-full h-full object-cover"
 style={{ filter: 'brightness(0.35)' }}
 />
 </picture>
 <div className="container py-20 text-center text-white relative z-10">
 {/* Services Slider */}
 <div className="mb-12">
 <ServicesSlider />
 </div>
 {/* Main title - Brutalist massive heading */}
 <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
 {personalizedTitle}
 </h1>
 {/* Subtitle */}
 <p className="text-xl md:text-2xl font-medium mb-12 max-w-3xl mx-auto">
 {personalizedSubtitle}
 </p>
 {/* Service zone badge (sobre, sans pulsation agressive) */}
 <div className="mb-6 inline-block">
 <div className="bg-white/95 text-gray-900 px-6 py-2 rounded-full font-bold text-sm border border-gray-300">
 Serviço ao domicílio em {city} e Trás-os-Montes
 </div>
 </div>
 {/* CTA buttons — mobile: full width stacked, desktop: inline */}
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 onClick={() => trackPhoneClick(config.phone)}
 className="w-full sm:w-auto inline-flex items-center justify-center text-lg md:text-2xl px-8 md:px-12 font-black tracking-wide text-white rounded shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:scale-95"
 style={{
 backgroundColor: config.colors.primary,
 minHeight: '56px'}}
 aria-label={`Ligar agora para ${config.phone}`}
 >
 <Phone className="w-6 h-6 mr-3" />
 LIGAR AGORA
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
 onClick={() => trackWhatsAppClick('Hero')}
 target="_blank"
 rel="noopener noreferrer"
 className="w-full sm:w-auto inline-flex items-center justify-center text-lg md:text-2xl px-8 md:px-12 font-black tracking-wide text-white rounded shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:scale-95"
 style={{
 backgroundColor: '#25D366',
 minHeight: '56px'}}
 aria-label="Contactar via WhatsApp"
 >
 💬 WhatsApp Grátis
 </a>
 </div>
 {/* Honnesty indicator below CTA — conforme R11 ZÉRO INVENTION + R12 Transparence Radicale */}
 <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-sm">
 <div className="font-semibold">
 ✓ Orçamento por escrito, sem surpresas
 </div>
 <div className="hidden sm:block text-white/50">•</div>
 <div className="font-semibold">
 ✓ Fala sempre com a mesma pessoa
 </div>
 <div className="hidden sm:block text-white/50">•</div>
 <div className="font-semibold">
 ✓ Estamos a começar — em breve partilhamos os primeiros depoimentos
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(Hero);
