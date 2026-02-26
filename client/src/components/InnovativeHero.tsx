// Hero innovant avec effets modernes : vagues d'eau, bulles animées, reflets
import React, { useEffect, useRef } from 'react';
import { useSite } from '@/contexts/SiteContext';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

const InnovativeHero: React.FC = () => {
  const { config } = useSite();
  const heroRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLDivElement>(null);
  const wavesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Effet vagues animées
    const createWaves = () => {
      if (!wavesRef.current) return;
      
      wavesRef.current.innerHTML = '';
      const waveCount = 3;
      
      for (let i = 0; i < waveCount; i++) {
        const wave = document.createElement('div');
        wave.className = 'absolute bottom-0 left-0 right-0';
        wave.style.height = `${20 + i * 15}px`;
        wave.style.background = `linear-gradient(to right, 
          rgba(30, 136, 229, ${0.1 + i * 0.1}) 0%,
          rgba(255, 109, 0, ${0.05 + i * 0.05}) 50%,
          rgba(30, 136, 229, ${0.1 + i * 0.1}) 100%
        )`;
        wave.style.borderRadius = '50% 50% 0 0';
        wave.style.animation = `wave ${10 + i * 2}s infinite ease-in-out`;
        wave.style.animationDelay = `${i * 2}s`;
        wave.style.opacity = `${0.3 + i * 0.2}`;
        
        wavesRef.current.appendChild(wave);
      }
    };

    // Créer des bulles animées
    const createBubbles = () => {
      if (!bubblesRef.current) return;
      
      bubblesRef.current.innerHTML = '';
      const bubbleCount = 15;
      
      for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'absolute rounded-full';
        
        // Taille aléatoire
        const size = Math.random() * 20 + 5;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Position aléatoire
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${100 + Math.random() * 50}%`;
        
        // Couleur bulle
        bubble.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`;
        bubble.style.border = '1px solid rgba(30, 136, 229, 0.3)';
        
        // Animation
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        bubble.style.animation = `bubbleUp ${duration}s infinite ease-in`;
        bubble.style.animationDelay = `${delay}s`;
        
        bubblesRef.current.appendChild(bubble);
      }
    };

    // Effet de lumière qui se déplace
    const lightInterval = setInterval(() => {
      if (heroRef.current) {
        const time = Date.now() / 5000;
        const x = Math.sin(time) * 50 + 50;
        const y = Math.cos(time) * 50 + 50;
        
        heroRef.current.style.background = `
          radial-gradient(
            circle at ${x}% ${y}%,
            rgba(30, 136, 229, 0.8) 0%,
            rgba(26, 35, 126, 0.6) 40%,
            rgba(0, 0, 0, 0.4) 100%
          ),
          linear-gradient(135deg, #1e88e5 0%, #0d47a1 50%, #1565c0 100%)
        `;
      }
    }, 100);

    createWaves();
    createBubbles();

    return () => {
      clearInterval(lightInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background avec effet de lumière mobile */}
      <div 
        ref={heroRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 transition-all duration-3000"
        style={{
          background: 'linear-gradient(135deg, #1e88e5 0%, #0d47a1 50%, #1565c0 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Vagues animées */}
      <div ref={wavesRef} className="absolute bottom-0 left-0 right-0 h-32" />
      
      {/* Bulles animées */}
      <div ref={bubblesRef} className="absolute inset-0 overflow-hidden" />
      
      {/* Effet de profondeur d'eau */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-transparent to-blue-900/40" />
      
      {/* Contenu principal */}
      <div className="container relative z-10 mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge professionnel */}
          <div className="inline-flex items-center gap-3 bg-white/15  border-2 border-white/40 rounded-2xl px-8 py-4 mb-10 shadow-2xl">
            <span className="text-3xl">💧</span>
            <span className="text-white font-bold text-xl tracking-wider drop-shadow-lg">
              CANALIZADOR CERTIFICADO EM TRÁS-OS-MONTES
            </span>
            <div className="absolute -inset-1 bg-blue-500/20 blur-xl -z-10 rounded-2xl" />
          </div>
          
          {/* Titre avec effet de réflexion dans l'eau */}
          <div className="relative mb-10">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-orange-200 drop-shadow-2xl">
                {ACTIVE_CONFIG.heroTitle}
              </span>
            </h1>
            
            {/* Réflexion */}
            <div className="absolute -bottom-8 left-0 right-0 text-5xl md:text-7xl font-black opacity-20 transform scale-y[-1] blur-sm">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/30 via-blue-100/30 to-orange-200/30">
                {ACTIVE_CONFIG.heroTitle}
              </span>
            </div>
          </div>
          
          {/* Sous-titre avec effet de vague de texte */}
          <p className="text-xl md:text-2xl text-white/90 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
            {ACTIVE_CONFIG.heroSubtitle}
          </p>
          
          {/* Botões CTA */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <a
              href={`tel:+351${ACTIVE_CONFIG.phone.replace(/\s/g, '')}`}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-lg px-12 py-6 rounded-2xl shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-110 w-full sm:w-auto sm:min-w-[300px]"
              style={{ minHeight: '56px' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                <span className="text-3xl group-hover:animate-spin-slow">📞</span>
                <span className="text-xl tracking-wide">LIGAR AGORA: {ACTIVE_CONFIG.phone}</span>
              </span>
              
              {/* Effet d'ondulation */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute -inset-10 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
              
              {/* Effet de gouttes */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            
            <a
              href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de um canalizador em Trás-os-Montes. Podem dar-me um orçamento?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold text-lg px-12 py-6 rounded-2xl shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-110 w-full sm:w-auto sm:min-w-[300px] border-2 border-white/30"
              style={{ minHeight: '56px' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                <span className="text-3xl group-hover:animate-bounce">💬</span>
                <span className="text-xl tracking-wide">CONTACTAR TÉCNICO</span>
              </span>
              
              {/* Effet de bulles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {[1, 2, 3].map(i => (
                  <div
                    key={i}
                    className="absolute bg-white/20 rounded-full"
                    style={{
                      width: `${i * 10}px`,
                      height: `${i * 10}px`,
                      left: `${i * 20}%`,
                      top: '50%',
                      animation: `bubbleFloat ${3 + i}s infinite ease-in-out`,
                      animationDelay: `${i * 0.5}s`,
                      opacity: 0,
                    }}
                  />
                ))}
              </div>
            </a>
          </div>
          
          {/* Stats avec effet de flottement */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: '🏆', value: '10+', label: 'Anos Experiência', color: 'from-blue-400 to-blue-600' },
              { icon: '🚨', value: '24/7', label: 'Urgências', color: 'from-orange-400 to-orange-600' },
              { icon: '👨‍🔧', value: '500+', label: 'Clientes Satisfeitos', color: 'from-blue-500 to-blue-700' },
              { icon: '💰', value: 'Grátis', label: 'Orçamento', color: 'from-orange-500 to-orange-700' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 border-2 border-white/20  transition-all duration-500 transform group-hover:-translate-y-3 group-hover:scale-105 group-hover:shadow-2xl`}>
                  <div className="text-4xl mb-4 animate-float">{stat.icon}</div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/90 text-sm font-medium">{stat.label}</div>
                </div>
                
                {/* Ombre portée animée */}
                <div className="absolute -bottom-2 left-4 right-4 h-4 bg-blue-900/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Flèche de scroll avec effet de goutte */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <div className="text-white text-4xl animate-bounce">↓</div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
      
      {/* Styles d'animation inline */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(-10%) scaleY(1.1); }
        }
        
        @keyframes bubbleUp {
          0% { 
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% { opacity: 0.5; }
          90% { opacity: 0.2; }
          100% { 
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }
        
        @keyframes bubbleFloat {
          0%, 100% { 
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% { 
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default InnovativeHero;