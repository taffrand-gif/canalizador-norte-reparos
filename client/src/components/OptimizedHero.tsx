import React from 'react';
import { useSite } from '@/contexts/SiteContext';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

const OptimizedHero: React.FC = () => {
  const { config } = useSite();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-blue-900">
      {/* Background image - visible on ALL screen sizes */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images-optimized/hero/hero-plumber-portugal.jpg)',
        }}
      />
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-900/80" />
      
      <div className="container relative z-10 mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge urgence */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <span className="text-2xl">💧</span>
            <span className="text-white font-semibold text-lg">Disponível 24h para urgências</span>
          </div>
          
          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {ACTIVE_CONFIG.heroTitle}
          </h1>
          
          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            {ACTIVE_CONFIG.heroSubtitle}
          </p>
          
          {/* Botões CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href={`tel:${config.phone}`}
              className="inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[250px]"
            >
              <span className="text-2xl">📞</span>
              <span>Ligue Agora</span>
            </a>
            
            <a
              href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-blue-900 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[250px]"
            >
              <span className="text-2xl">💬</span>
              <span>Pedir Orçamento</span>
            </a>
          </div>
          
          {/* Informations supplémentaires */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🚨</div>
              <h3 className="text-white font-bold text-lg mb-2">Urgências 24h</h3>
              <p className="text-white/80">Atendimento imediato para fugas e entupimentos</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-white font-bold text-lg mb-2">Orçamento Grátis</h3>
              <p className="text-white/80">Avaliação sem compromisso financeiro</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">👨‍🔧</div>
              <h3 className="text-white font-bold text-lg mb-2">Profissionais Certificados</h3>
              <p className="text-white/80">Técnicos com formação e experiência</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Preload hero background image */}
      <link rel="preload" as="image" href="/images-optimized/hero/hero-plumber-portugal.jpg" />
    </section>
  );
};

export default OptimizedHero;