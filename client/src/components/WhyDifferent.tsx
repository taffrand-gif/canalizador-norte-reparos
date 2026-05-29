import React from 'react';
// Component: Why We're Different
// Shows 10 common problems and how we solve them differently
// Builds trust by addressing customer pain points

import { useSite } from '@/contexts/SiteContext';
import { useMemo } from 'react';

interface Problem {
 icon: string;
 title: string;
 others: string;
 us: string;
 value: string;
}

function WhyDifferent() {
 const { config } = useSite();

 const problems = useMemo<Problem[]>(() => [
 {
 icon: '😤',
 title: 'Desentupimento Volta Entupir',
 others: 'Só usa ventosa, problema volta em 1 semana',
 us: 'Hidrojato profissional + Garantia 3 meses',
 value: 'Economiza €200 (não paga 2x)'},
 {
 icon: '💸',
 title: 'Preço Final 2x Orçamento',
 others: 'Orçamento vago, cobra extras no final',
 us: 'Preço fixo por escrito, sem surpresas',
 value: 'Economiza €100 (sem extras)'},
 {
 icon: '⏰',
 title: 'Nunca Chega No Horário',
 others: 'Disse 1h, chega 4h depois',
 us: 'GPS tracking + se atrasar',
 value: 'Economiza tempo + €50'},
 {
 icon: '🔧',
 title: 'Fuga Volta Mesmo Sítio',
 others: 'Remendo temporário, volta em dias',
 us: 'Substituição completa peça + Teste pressão',
 value: 'Economiza €150 (solução definitiva)'},
 {
 icon: '🚫',
 title: 'Não Atende Urgência Noite',
 others: '24h falso, não atende depois 22h',
 us: 'Telefone 24h REAL + WhatsApp <5min',
 value: 'Economiza €200 (urgência real)'},
 {
 icon: '🏠',
 title: 'Deixa Casa Suja',
 others: 'Água por todo lado, não limpa',
 us: 'Proteção piso + Limpeza completa incluída',
 value: 'Economiza €50 (conforto)'},
 {
 icon: '📄',
 title: 'Sem Fatura, Sem Garantia',
 others: 'Trabalho por fora, desaparece',
 us: 'Fatura sempre + Certificado garantia escrito',
 value: 'Economiza €150 (segurança)'},
 {
 icon: '❓',
 title: 'Diagnóstico Errado',
 others: 'Adivinha problema, cobra extra depois',
 us: 'Diagnóstico completo grátis + Fotos',
 value: 'Economiza €80 (honestidade)'},
 {
 icon: '🔨',
 title: 'Trabalho Mal Feito',
 others: 'Faz-tudo sem experiência',
 us: '10+ anos experiência + Equipamento profissional',
 value: 'Economiza €300 (evita desastre)'},
 {
 icon: '💧',
 title: 'Esquentador Avaria Logo',
 others: 'Só troca peça, não limpa',
 us: 'Descalcificação completa + Garantia 12 meses',
 value: 'Economiza €100 (dura anos)'},
 ], []);

 return (
 <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
 <div className="container">
 <div className="max-w-6xl mx-auto">
 {/* Header */}
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-black mb-6">
 Cansado de {config.serviceType}s Que Não Resolvem?
 </h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Já teve estes problemas? Nós resolvemos de forma DIFERENTE.
 Por isso damos garantias que outros não dão.
 </p>
 </div>

 {/* Problems Grid */}
 <div className="grid md:grid-cols-2 gap-8 mb-12">
 {problems.map((problem, index) => (
 <div
 key={index}
 className="bg-white p-6 rounded-lg border-4 shadow-lg hover:shadow-xl transition-shadow"
 style={{ borderColor: config.colors.primary }}
 >
 {/* Icon & Title */}
 <div className="flex items-start gap-4 mb-4">
 <span className="text-4xl">{problem.icon}</span>
 <h3 className="text-xl font-bold text-gray-900 flex-1">
 {problem.title}
 </h3>
 </div>

 {/* Others vs Us */}
 <div className="space-y-3">
 <div className="flex items-start gap-3">
 <span className="text-red-500 font-bold text-lg flex-shrink-0">❌</span>
 <div>
 <p className="text-sm font-semibold text-gray-500 uppercase">Outros</p>
 <p className="text-gray-700">{problem.others}</p>
 </div>
 </div>

 <div className="flex items-start gap-3">
 <span className="text-green-500 font-bold text-lg flex-shrink-0">✅</span>
 <div>
 <p className="text-sm font-semibold uppercase" style={{ color: config.colors.primary }}>
 Nós
 </p>
 <p className="text-gray-900 font-semibold">{problem.us}</p>
 </div>
 </div>

 {/* Value */}
 <div
 className="mt-4 p-3 rounded-lg text-center font-bold"
 style={{ backgroundColor: `${config.colors.primary}15` }}
 >
 <span className="text-2xl mr-2">💰</span>
 <span style={{ color: config.colors.primary }}>{problem.value}</span>
 </div>
 </div>
 </div>
 ))}
 </div>

 {/* Guarantee Box */}
 <div
 className="bg-white p-8 rounded-lg border-4 text-center"
 style={{ borderColor: config.colors.primary }}
 >
 <h3 className="text-2xl font-black mb-4">
 ✅ Garantia "Problema Volta = GRÁTIS"
 </h3>
 <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
 Se o problema voltar em 6 meses, voltamos GRATUITAMENTE.
 Certificado de garantia por escrito. Sem letra pequena.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
 style={{ backgroundColor: config.colors.primary }}
 >
 📞 Ligue: {config.phone}
 </a>
 <a
 href={`https://wa.me/351${config.phone.replace(/\s/g, '')}?text=Olá, preciso de ${config.serviceType} com garantia`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-green-500 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
 >
 💬 WhatsApp
 </a>
 </div>
 <p className="text-sm text-gray-500 mt-4">
 Disponível 24h/7 dias • Chegamos em 40 minutos • Orçamento grátis
 </p>
 </div>

 {/* Social Proof */}
 <div className="mt-12 text-center">
 <div className="flex items-center justify-center gap-2 text-yellow-500 text-2xl mb-2">
 ★★★★★
 </div>
 <p className="text-gray-600">
 <strong className="text-gray-900"></strong> baseado em{' '}
 <strong className="text-gray-900">500+</strong> intervenções bem-sucedidas
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}

export default React.memo(WhyDifferent);
