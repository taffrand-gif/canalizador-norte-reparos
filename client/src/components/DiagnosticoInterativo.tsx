'use client';
import { useState } from 'react';
import { CheckCircle, AlertCircle, Wrench, Zap, Droplet } from 'lucide-react';
import { useSite } from '@/contexts/SiteContext';
interface DiagnosticStep {
 id: number;
 question: string;
 options: {
 label: string;
 value: string;
 severity: 'low' | 'medium' | 'high' | 'urgent';
 }[];
}
export default function DiagnosticoInterativo() {
 const { config } = useSite();
 const [currentStep, setCurrentStep] = useState(0);
 const [answers, setAnswers] = useState<string[]>([]);
 const [result, setResult] = useState<any>(null);
 const isPlumber = config.type === 'plomberie';
 const plumberSteps: DiagnosticStep[] = [
 {
 id: 1,
 question: 'Onde está o problema?',
 options: [
 { label: 'Cozinha', value: 'cozinha', severity: 'medium' },
 { label: 'Casa de banho', value: 'banho', severity: 'medium' },
 { label: 'Aquecimento central', value: 'aquecimento', severity: 'high' },
 { label: 'Exterior/Jardim', value: 'exterior', severity: 'low' }
 ]
 },
 {
 id: 2,
 question: 'Qual é o sintoma principal?',
 options: [
 { label: 'Fuga de água visível', value: 'fuga', severity: 'urgent' },
 { label: 'Canalização entupida', value: 'entupimento', severity: 'high' },
 { label: 'Sem água quente', value: 'sem-agua-quente', severity: 'medium' },
 { label: 'Pressão fraca', value: 'pressao', severity: 'low' }
 ]
 },
 {
 id: 3,
 question: 'Há quanto tempo tem este problema?',
 options: [
 { label: 'Começou agora', value: 'agora', severity: 'urgent' },
 { label: 'Há alguns dias', value: 'dias', severity: 'high' },
 { label: 'Há semanas', value: 'semanas', severity: 'medium' },
 { label: 'Há meses', value: 'meses', severity: 'low' }
 ]
 }
 ];
 const electricianSteps: DiagnosticStep[] = [
 {
 id: 1,
 question: 'Onde está o problema?',
 options: [
 { label: 'Quadro elétrico', value: 'quadro', severity: 'urgent' },
 { label: 'Tomadas/Interruptores', value: 'tomadas', severity: 'high' },
 { label: 'Iluminação', value: 'iluminacao', severity: 'medium' },
 { label: 'Eletrodomésticos', value: 'eletrodomesticos', severity: 'low' }
 ]
 },
 {
 id: 2,
 question: 'Qual é o sintoma principal?',
 options: [
 { label: 'Sem eletricidade', value: 'sem-eletricidade', severity: 'urgent' },
 { label: 'Disjuntor dispara', value: 'disjuntor', severity: 'urgent' },
 { label: 'Cheiro a queimado', value: 'queimado', severity: 'urgent' },
 { label: 'Luzes piscam', value: 'piscar', severity: 'high' }
 ]
 },
 {
 id: 3,
 question: 'Há quanto tempo tem este problema?',
 options: [
 { label: 'Começou agora', value: 'agora', severity: 'urgent' },
 { label: 'Há alguns dias', value: 'dias', severity: 'high' },
 { label: 'Há semanas', value: 'semanas', severity: 'medium' },
 { label: 'Há meses', value: 'meses', severity: 'low' }
 ]
 }
 ];
 const steps = isPlumber ? plumberSteps : electricianSteps;
 const progress = ((currentStep + 1) / steps.length) * 100;
 const handleAnswer = (option: any) => {
 const newAnswers = [...answers, option.value];
 setAnswers(newAnswers);
 if (currentStep < steps.length - 1) {
 setCurrentStep(currentStep + 1);
 } else {
 // Calculate result
 const severities = steps.map((step, i) => {
 const answer = newAnswers[i];
 const option = step.options.find(opt => opt.value === answer);
 return option?.severity || 'low';
 });
 const urgentCount = severities.filter(s => s === 'urgent').length;
 const highCount = severities.filter(s => s === 'high').length;
 let urgency: 'urgent' | 'high' | 'medium' | 'low' = 'low';
 let price = 80;
 let responseTime = '24h';
 if (urgentCount > 0) {
 urgency = 'urgent';
 price = 150;
 responseTime = 'resposta prioritária';
 } else if (highCount > 0) {
 urgency = 'high';
 price = 120;
 responseTime = '2h';
 } else {
 urgency = 'medium';
 price = 100;
 responseTime = '4h';
 }
 setResult({ urgency, price, responseTime });
 }
 };
 const reset = () => {
 setCurrentStep(0);
 setAnswers([]);
 setResult(null);
 };
 if (result) {
 const Icon = result.urgency === 'urgent' ? AlertCircle : CheckCircle;
 const bgColor = result.urgency === 'urgent' ? 'bg-red-50' : 'bg-green-50';
 const borderColor = result.urgency === 'urgent' ? 'border-red-500' : 'border-green-500';
 const textColor = result.urgency === 'urgent' ? 'text-red-900' : 'text-green-900';
 return (
 <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
 <div className={`${bgColor} border-l-4 ${borderColor} rounded-r-lg p-6 mb-6`}>
 <div className="flex items-start gap-4">
 <Icon className={`w-8 h-8 ${textColor} flex-shrink-0`} />
 <div>
 <h3 className={`text-2xl font-bold ${textColor} mb-2`}>
 Diagnóstico Completo
 </h3>
 <p className="text-gray-700 mb-4">
 {result.urgency === 'urgent'
 ? '⚠️ Situação urgente! Requer intervenção imediata.'
 : '✅ Situação controlada. Podemos agendar intervenção.'}
 </p>
 <div className="grid grid-cols-2 gap-4 mb-4">
 <div className="bg-white rounded-lg p-4">
 <p className="text-sm text-gray-600 mb-1">Preço Estimado</p>
 <p className="text-3xl font-black text-primary">€{result.price}</p>
 </div>
 <div className="bg-white rounded-lg p-4">
 <p className="text-sm text-gray-600 mb-1">Tempo Resposta</p>
 <p className="text-3xl font-black text-primary">{result.responseTime}</p>
 </div>
 </div>
 <a
 href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(`Completei o diagnóstico. Urgência: ${result.urgency}. Preciso de intervenção em ${result.responseTime}.`)}`}
 target="_blank"
 rel="noopener noreferrer"
 className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold text-center px-6 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg mb-3"
 >
 💬 Confirmar Intervenção via WhatsApp
 </a>
 <button
 onClick={reset}
 className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-center px-6 py-3 rounded-lg transition-colors"
 >
 🔄 Fazer Novo Diagnóstico
 </button>
 </div>
 </div>
 </div>
 </div>
 );
 }
 return (
 <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
 {/* Header */}
 <div className="text-center mb-6">
 <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4">
 {isPlumber ? <Droplet className="w-8 h-8" /> : <Zap className="w-8 h-8" />}
 </div>
 <h2 className="text-3xl font-bold text-gray-900 mb-2">
 Diagnóstico Interativo
 </h2>
 <p className="text-gray-600">
 Responda 3 perguntas para receber diagnóstico e orçamento
 </p>
 </div>
 {/* Progress bar */}
 <div className="mb-6">
 <div className="flex justify-between items-center mb-2">
 <span className="text-sm font-semibold text-gray-700">
 Pergunta {currentStep + 1} de {steps.length}
 </span>
 <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
 </div>
 <div className="w-full bg-gray-200 rounded-full h-3">
 <div
 className="bg-primary h-3 rounded-full transition-all duration-300"
 style={{ width: `${progress}%` }}
 />
 </div>
 </div>
 {/* Question */}
 <div className="mb-6">
 <h3 className="text-2xl font-bold text-gray-900 mb-4">
 {steps[currentStep].question}
 </h3>
 </div>
 {/* Options */}
 <div className="space-y-3">
 {steps[currentStep].options.map((option, index) => (
 <button
 key={index}
 onClick={() => handleAnswer(option)}
 className="w-full text-left bg-gray-50 hover:bg-primary/10 border-2 border-gray-200 hover:border-primary rounded-lg p-4 transition-all duration-200 group"
 >
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <Wrench className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
 <span className="font-semibold text-gray-900 group-hover:text-primary">
 {option.label}
 </span>
 </div>
 <span className="text-gray-400 group-hover:text-primary transition-colors">→</span>
 </div>
 </button>
 ))}
 </div>
 {/* Footer */}
 <div className="mt-6 pt-6 border-t border-gray-200">
 <div className="flex items-start gap-2 text-sm text-gray-600">
 <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
 <p>
 100% gratuito • Diagnóstico em 30 segundos • Orçamento personalizado
 </p>
 </div>
 </div>
 </div>
 );
}
