'use client';
import { Gift, Download, FileText, CheckCircle } from 'lucide-react';
import { useState } from 'react';
interface ReciprocityOfferProps {
 offerType?: 'diagnosis' | 'guide' | 'checklist';
 title?: string;
}
export default function ReciprocityOffer({
 offerType = 'diagnosis',
 title
}: ReciprocityOfferProps) {
 const [isRevealed, setIsRevealed] = useState(false);
 const offers = {
 diagnosis: {
 icon: Gift,
 title: title || 'Diagnóstico Gratuito no Local',
 description: 'Técnico certificado analisa o problema sem compromisso',
 benefits: [
 'Visita gratuita em 24h',
 'Relatório detalhado do problema',
 'Orçamento transparente sem surpresas',
 'Sem obrigação de contratar'
 ],
 cta: 'Agendar Diagnóstico Grátis',
 ctaUrl: 'https://wa.me/351928484451?text=Quero%20agendar%20diagnóstico%20gratuito'
 },
 guide: {
 icon: Download,
 title: title || 'Guia Grátis: Como Poupar 30% em Arranjos',
 description: 'PDF exclusivo com dicas de especialistas',
 benefits: [
 '15 páginas de conteúdo prático',
 'Checklist de manutenção preventiva',
 'Sinais de alerta para agir rápido',
 'Truques para evitar problemas caros'
 ],
 cta: 'Descarregar Guia Grátis (PDF)',
 ctaUrl: 'https://wa.me/351928484451?text=Quero%20receber%20o%20guia%20gratuito'
 },
 checklist: {
 icon: FileText,
 title: title || 'Checklist Gratuita: Manutenção Anual',
 description: 'Lista completa para manter tudo em ordem',
 benefits: [
 'Checklist mensal e anual',
 'Calendário de manutenção',
 'Dicas de segurança',
 'Quando chamar um profissional'
 ],
 cta: 'Receber Checklist Grátis',
 ctaUrl: 'https://wa.me/351928484451?text=Quero%20receber%20a%20checklist%20gratuita'
 }
 };
 const offer = offers[offerType];
 const Icon = offer.icon;
 return (
 <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-lg p-6 shadow-lg">
 <div className="flex items-start gap-4">
 <div className="bg-primary text-white p-3 rounded-lg">
 <Icon className="w-6 h-6" />
 </div>
 <div className="flex-1">
 <div className="flex items-center gap-2 mb-2">
 <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
 100% Grátis
 </span>
 <span className="text-xs text-gray-600">Sem compromisso</span>
 </div>
 <h3 className="text-xl font-bold text-gray-900 mb-2">
 {offer.title}
 </h3>
 <p className="text-gray-700 mb-4">
 {offer.description}
 </p>
 {!isRevealed ? (
 <button
 onClick={() => setIsRevealed(true)}
 className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
 >
 Ver o Que Está Incluído →
 </button>
 ) : (
 <div className="space-y-4">
 <div className="bg-white rounded-lg p-4 space-y-2">
 {offer.benefits.map((benefit, index) => (
 <div key={index} className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
 <span className="text-sm text-gray-700">{benefit}</span>
 </div>
 ))}
 </div>
 <a
 href={offer.ctaUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold text-center px-6 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
 >
 💬 {offer.cta}
 </a>
 <p className="text-xs text-center text-gray-500">
 ⚡ Disponível 24h/7 dias garantida
 </p>
 </div>
 )}
 </div>
 </div>
 </div>
 );
}
