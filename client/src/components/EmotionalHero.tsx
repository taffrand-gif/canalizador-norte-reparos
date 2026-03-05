import { memo } from 'react';
import { Phone, Clock, Shield, AlertCircle } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface EmotionalHeroProps {
  painPoint: string;
  headline: string;
  subheadline: string;
  urgencyText: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  backgroundImage?: string;
  showUrgencyBadge?: boolean;
  responseTime?: string;
}

function EmotionalHero({
  painPoint,
  headline,
  subheadline,
  urgencyText,
  phone,
  whatsapp,
  whatsappMessage,
  ctaPrimary = "RESOLVER AGORA",
  ctaSecondary = "WhatsApp Urgente",
  backgroundImage = "/images/emergency-plumber.jpg",
  showUrgencyBadge = true,
  responseTime = "15 minutos"
}: EmotionalHeroProps) {
  const { trackPhoneClick, trackWhatsAppClick } = useAnalytics();

  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
      }}
    >
      <div className="container py-16 px-4 text-center text-white relative z-10">
        {/* Pain Point Badge */}
        <div className="inline-block mb-6">
          <div className="bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 animate-pulse">
            <AlertCircle className="w-5 h-5" />
            {painPoint.toUpperCase()}
          </div>
        </div>

        {/* Emotional Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
          {headline}
        </h1>

        {/* Empathy Subheadline */}
        <p className="text-xl md:text-2xl font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
          {subheadline}
        </p>

        {/* Urgency Indicator */}
        {showUrgencyBadge && (
          <div className="mb-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
            <Clock className="w-5 h-5 text-yellow-400" />
            <span className="font-bold text-lg">{urgencyText}</span>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            onClick={() => trackPhoneClick(phone)}
            className="w-full sm:w-auto inline-flex items-center justify-center text-xl md:text-2xl px-10 md:px-14 py-5 font-black tracking-wide text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:scale-95"
            aria-label={`Ligar agora para ${phone}`}
          >
            <Phone className="w-6 h-6 mr-3" />
            {ctaPrimary}
          </a>
          <a
            href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
            onClick={() => trackWhatsAppClick('EmotionalHero')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center text-xl md:text-2xl px-10 md:px-14 py-5 font-black tracking-wide text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:scale-95"
            aria-label="Contactar via WhatsApp"
          >
            💬 {ctaSecondary}
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-yellow-400" />
            <span className="font-bold">Resposta em {responseTime}</span>
          </div>
          <div className="hidden sm:block text-white/50">•</div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="font-bold">Garantia 100% Satisfação</span>
          </div>
          <div className="hidden sm:block text-white/50">•</div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            <span className="font-bold">4.9/5 (500+ avaliações)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(EmotionalHero);
