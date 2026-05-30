'use client';
import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
interface QuizQuestion {
 id: number;
 question: string;
 options: string[];
}
interface CommitmentQuizProps {
 serviceType?: 'canalizador' | 'eletricista';
}
export default function CommitmentQuiz({ serviceType = 'canalizador' }: CommitmentQuizProps) {
 const [currentStep, setCurrentStep] = useState(0);
 const [answers, setAnswers] = useState<string[]>([]);
 const quizzes = {
 canalizador: [
 {
 id: 1,
 question: 'Qual é o seu problema principal?',
 options: [
 'Fuga de água visível',
 'Canalização entupida',
 'Aquecimento não funciona',
 'Instalação nova'
 ]
 },
 {
 id: 2,
 question: 'Quando precisa da intervenção?',
 options: [
 'Urgente (hoje)',
 'Esta semana',
 'Próximas 2 semanas',
 'Só quero orçamento'
 ]
 },
 {
 id: 3,
 question: 'Onde está localizado?',
 options: [
 'Bragança',
 'Mirandela',
 'Macedo de Cavaleiros',
 'Outra cidade'
 ]
 }
 ],
 eletricista: [
 {
 id: 1,
 question: 'Qual é o seu problema principal?',
 options: [
 'Sem eletricidade (disjuntor)',
 'Instalação elétrica antiga',
 'Certificação ITED',
 'Instalação nova'
 ]
 },
 {
 id: 2,
 question: 'Quando precisa da intervenção?',
 options: [
 'Urgente (hoje)',
 'Esta semana',
 'Próximas 2 semanas',
 'Só quero orçamento'
 ]
 },
 {
 id: 3,
 question: 'Onde está localizado?',
 options: [
 'Bragança',
 'Mirandela',
 'Macedo de Cavaleiros',
 'Outra cidade'
 ]
 }
 ]
 };
 const questions = quizzes[serviceType];
 const progress = ((currentStep + 1) / questions.length) * 100;
 const handleAnswer = (answer: string) => {
 const newAnswers = [...answers, answer];
 setAnswers(newAnswers);
 if (currentStep < questions.length - 1) {
 setCurrentStep(currentStep + 1);
 } else {
 // Quiz completed - redirect to WhatsApp with answers
 const message = `Olá! Completei o diagnóstico:\n1. ${newAnswers[0]}\n2. ${newAnswers[1]}\n3. ${newAnswers[2]}\n\nQuero receber um orçamento.`;
 window.open(`https://wa.me/351928484451?text=${encodeURIComponent(message)}`, '_blank');
 }
 };
 return (
 <div className="bg-white border-2 border-primary/20 rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
 {/* Progress bar */}
 <div className="mb-6">
 <div className="flex justify-between items-center mb-2">
 <span className="text-sm font-semibold text-gray-700">
 Passo {currentStep + 1} de {questions.length}
 </span>
 <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
 </div>
 <div className="w-full bg-gray-200 rounded-full h-2">
 <div
 className="bg-primary h-2 rounded-full transition-all duration-300"
 style={{ width: `${progress}%` }}
 />
 </div>
 </div>
 {/* Question */}
 <div className="mb-6">
 <h3 className="text-2xl font-bold text-gray-900 mb-2">
 {questions[currentStep].question}
 </h3>
 <p className="text-sm text-gray-600">
 Selecione a opção que melhor descreve a sua situação
 </p>
 </div>
 {/* Options */}
 <div className="space-y-3">
 {questions[currentStep].options.map((option, index) => (
 <button
 key={index}
 onClick={() => handleAnswer(option)}
 className="w-full text-left bg-gray-50 hover:bg-primary/10 border-2 border-gray-200 hover:border-primary rounded-lg p-4 transition-all duration-200 group"
 >
 <div className="flex items-center justify-between">
 <span className="font-semibold text-gray-900 group-hover:text-primary">
 {option}
 </span>
 <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
 </div>
 </button>
 ))}
 </div>
 {/* Benefits footer */}
 <div className="mt-6 pt-6 border-t border-gray-200">
 <div className="flex items-start gap-2 text-sm text-gray-600">
 <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
 <p>
 Após completar, receberá um orçamento personalizado em menos de 5 minutos
 </p>
 </div>
 </div>
 </div>
 );
}
