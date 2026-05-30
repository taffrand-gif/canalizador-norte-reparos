import React from 'react';
import { useSite } from '@/contexts/SiteContext';
interface WhyWePublishPricesProps {
 className?: string;
}
function WhyWePublishPrices({ className = '' }: WhyWePublishPricesProps) {
 const { config } = useSite();
 const accentColor = config.id === 'norte-reparos' ? '#0e7490' : '#FF6B35';
 const reasons = [
 {
 icon: '🤝',
 title: 'Confiança Total',
 description: 'Sem surpresas desagradáveis. Sabe exatamente o que vai pagar antes mesmo de nos ligar.'
 },
 {
 icon: '⏱️',
 title: 'Poupança de Tempo',
 description: 'Não precisa de pedir 5 orçamentos. Compare diretamente os nossos preços com a concorrência.'
 },
 {
 icon: '💰',
 title: 'Melhor Relação Qualidade-Preço',
 description: 'Os nossos preços são justos e competitivos. Não temos nada a esconder.'
 },
 {
 icon: '📞',
 title: 'Chamada Sem Stress',
 description: 'Quando liga, é para confirmar disponibilidade, não para negociar o preço.'
 },
 {
 icon: '✅',
 title: 'Compromisso de Qualidade',
 description: 'Publicar os nossos preços compromete-nos a manter um serviço irrepreensível.'
 },
 {
 icon: '🎯',
 title: 'Transparência Total',
 description: 'Acreditamos que a honestidade é a base de uma relação duradoura com o cliente.'
 }
 ];
 return (
 <section className={`py-16 bg-gradient-to-br from-gray-50 to-gray-100 ${className}`}>
 <div className="container mx-auto px-4 max-w-6xl">
 {/* Header */}
 <div className="text-center mb-12">
 <div className="inline-block bg-white rounded-full px-6 py-2 shadow-md mb-4">
 <span className="text-sm font-bold" style={{ color: accentColor }}>
 A NOSSA FILOSOFIA
 </span>
 </div>
 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
 Porque Publicamos os Nossos Preços?
 </h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
 Porque merece saber <strong>exatamente</strong> quanto vai pagar{' '}
 <strong>antes</strong> de nos ligar. É tão simples quanto isso.
 </p>
 </div>
 {/* Main Content */}
 <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {reasons.map((reason, idx) => (
 <div key={idx} className="text-center">
 <div className="text-6xl mb-4">{reason.icon}</div>
 <h3 className="text-xl font-bold text-gray-900 mb-3">
 {reason.title}
 </h3>
 <p className="text-gray-600 leading-relaxed">
 {reason.description}
 </p>
 </div>
 ))}
 </div>
 </div>
 {/* Comparison Box */}
 <div className="grid md:grid-cols-2 gap-6 mb-12">
 {/* Outras Empresas */}
 <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
 <div className="text-center mb-6">
 <div className="text-5xl mb-3">😰</div>
 <h3 className="text-2xl font-bold text-gray-900">Outras Empresas</h3>
 </div>
 <ul className="space-y-3">
 <li className="flex items-start gap-3">
 <span className="text-red-500 text-xl mt-0.5">✗</span>
 <span className="text-gray-700">"Temos de ir ver para fazer orçamento"</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-red-500 text-xl mt-0.5">✗</span>
 <span className="text-gray-700">"Depende... entre 100€ e 500€"</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-red-500 text-xl mt-0.5">✗</span>
 <span className="text-gray-700">Preço final diferente do orçamento inicial</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-red-500 text-xl mt-0.5">✗</span>
 <span className="text-gray-700">Custos escondidos descobertos no fim</span>
 </li>
 </ul>
 </div>
 {/* Nossa Abordagem */}
 <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
 <div className="text-center mb-6">
 <div className="text-5xl mb-3">😊</div>
 <h3 className="text-2xl font-bold text-gray-900">A Nossa Abordagem</h3>
 </div>
 <ul className="space-y-3">
 <li className="flex items-start gap-3">
 <span className="text-green-500 text-xl mt-0.5">✓</span>
 <span className="text-gray-700">Preços claros publicados no nosso site</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-green-500 text-xl mt-0.5">✓</span>
 <span className="text-gray-700">Intervalo preciso segundo a sua necessidade</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-green-500 text-xl mt-0.5">✓</span>
 <span className="text-gray-700">Preço validado ao telefone antes da deslocação</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-green-500 text-xl mt-0.5">✓</span>
 <span className="text-gray-700">Nenhuma surpresa, nunca</span>
 </li>
 </ul>
 </div>
 </div>
 {/* Testimonial Style Quote */}
 <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-8" style={{ borderColor: accentColor }}>
 <div className="flex flex-col md:flex-row items-center gap-6">
 <div className="text-8xl" style={{ color: accentColor }}>❝</div>
 <div className="flex-1">
 <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4 italic">
 "Na nossa profissão, demasiadas empresas jogam com a falta de clareza para inflar os preços.
 Escolhemos a transparência total. Se perdermos clientes por causa dos nossos preços afixados,
 paciência. Preferimos trabalhar com clientes que apreciam a nossa honestidade."
 </p>
 <p className="text-lg font-bold text-gray-900">
 — A equipa {config.id === 'norte-reparos' ? 'Norte Reparos' : 'Staff Seekers'}
 </p>
 </div>
 </div>
 </div>
 {/* Final CTA */}
 <div className="mt-12 text-center">
 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
 Já Sabe Quanto Custa
 </h3>
 <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
 Só falta verificar a nossa disponibilidade. Ligue-nos ou envie um WhatsApp.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${config.id === 'norte-reparos' ? '928484451' : '932321892'}`}
 className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: accentColor }}
 >
 📞 Ligar Agora
 </a>
 <a
 href={`https://wa.me/351${config.id === 'norte-reparos' ? '928484451' : '932321892'}?text=${encodeURIComponent('Olá! Vi os vossos preços no site. Gostaria de confirmar disponibilidade.')}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: '#128C7E' }}
 >
 💬 WhatsApp
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(WhyWePublishPrices);
