'use client';
import { useState } from 'react';
import { MessageCircle, X, Send, Wrench, Zap } from 'lucide-react';
import { useSite } from '@/contexts/SiteContext';
interface Message {
 id: number;
 text: string;
 sender: 'bot' | 'user';
 timestamp: Date;
}
interface DiagnosticState {
 step: number;
 location?: string;
 problem?: string;
 urgency?: string;
 estimatedPrice?: number;
}
export default function ChatbotIntelligent() {
 const { config } = useSite();
 const [isOpen, setIsOpen] = useState(false);
 const [messages, setMessages] = useState<Message[]>([
 {
 id: 1,
 text: `Olá! 👋 Sou o assistente virtual da ${config.businessName}. Posso ajudá-lo a diagnosticar o problema e estimar o preço. Qual é o seu problema?`,
 sender: 'bot',
 timestamp: new Date()
 }
 ]);
 const [inputText, setInputText] = useState('');
 const [diagnostic, setDiagnostic] = useState<DiagnosticState>({ step: 0 });
 const isPlumber = config.type === 'plomberie';
 const problemOptions = isPlumber
 ? ['Fuga de água', 'Canalização entupida', 'Esquentador avariado', 'Aquecimento não funciona', 'Outro']
 : ['Sem eletricidade', 'Disjuntor dispara', 'Certificação ITED', 'Iluminação LED', 'Outro'];
 const locationOptions = ['Cozinha', 'Casa de banho', 'Aquecimento', 'Quadro elétrico', 'Exterior'];
 const urgencyOptions = ['Urgente (hoje)', 'Esta semana', 'Próximas 2 semanas'];
 const estimatePrice = (problem: string, urgency: string): number => {
 let basePrice = 100;
 if (problem.includes('Fuga')) basePrice = 120;
 else if (problem.includes('entupida')) basePrice = 100;
 else if (problem.includes('Esquentador')) basePrice = 80;
 else if (problem.includes('eletricidade')) basePrice = 150;
 else if (problem.includes('Disjuntor')) basePrice = 120;
 else if (problem.includes('ITED')) basePrice = 300;
 else if (problem.includes('LED')) basePrice = 200;
 if (urgency.includes('Urgente')) basePrice *= 1.5;
 return Math.round(basePrice);
 };
 const addMessage = (text: string, sender: 'bot' | 'user') => {
 const newMessage: Message = {
 id: messages.length + 1,
 text,
 sender,
 timestamp: new Date()
 };
 setMessages(prev => [...prev, newMessage]);
 };
 const handleQuickReply = (reply: string) => {
 addMessage(reply, 'user');
 const newDiagnostic = { ...diagnostic };
 if (diagnostic.step === 0) {
 newDiagnostic.problem = reply;
 newDiagnostic.step = 1;
 setDiagnostic(newDiagnostic);
 setTimeout(() => {
 addMessage('Onde está localizado o problema?', 'bot');
 }, 500);
 } else if (diagnostic.step === 1) {
 newDiagnostic.location = reply;
 newDiagnostic.step = 2;
 setDiagnostic(newDiagnostic);
 setTimeout(() => {
 addMessage('Quando precisa da intervenção?', 'bot');
 }, 500);
 } else if (diagnostic.step === 2) {
 newDiagnostic.urgency = reply;
 const price = estimatePrice(newDiagnostic.problem || '', reply);
 newDiagnostic.estimatedPrice = price;
 newDiagnostic.step = 3;
 setDiagnostic(newDiagnostic);
 setTimeout(() => {
 const responseTime = reply.includes('Urgente') ? '30-resposta prioritária' : '2-4 horas';
 addMessage(
 `✅ Diagnóstico completo!\n\n` +
 `📋 Problema: ${newDiagnostic.problem}\n` +
 `📍 Local: ${newDiagnostic.location}\n` +
 `⏰ Urgência: ${reply}\n\n` +
 `💰 Preço estimado: €${price}\n` +
 `🚗 Tempo chegada: ${responseTime}\n\n` +
 `Quer confirmar a intervenção via WhatsApp?`,
 'bot'
 );
 }, 1000);
 }
 };
 const handleSend = () => {
 if (!inputText.trim()) return;
 addMessage(inputText, 'user');
 setInputText('');
 setTimeout(() => {
 addMessage(
 'Para um diagnóstico mais preciso, use as opções rápidas acima. Ou contacte-nos diretamente.',
 'bot'
 );
 }, 500);
 };
 const handleWhatsAppRedirect = () => {
 const message = `Olá! Completei o diagnóstico:\n` +
 `Problema: ${diagnostic.problem}\n` +
 `Local: ${diagnostic.location}\n` +
 `Urgência: ${diagnostic.urgency}\n` +
 `Preço estimado: €${diagnostic.estimatedPrice}\n\n` +
 `Quero confirmar a intervenção.`;
 window.open(
 `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`,
 '_blank'
 );
 };
 return (
 <>
 {!isOpen && (
 <button
 onClick={() => setIsOpen(true)}
 className="fixed bottom-20 right-4 z-50 bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-2xl transition-all duration-200 transform hover:scale-110 animate-bounce"
 aria-label="Abrir chat"
 >
 <MessageCircle className="w-6 h-6" />
 <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
 </button>
 )}
 {isOpen && (
 <div className="fixed bottom-4 right-4 z-50 w-full max-w-md bg-white rounded-2xl shadow-2xl border-2 border-gray-200 flex flex-col" style={{ height: '600px', maxHeight: '80vh' }}>
 <div className="bg-primary text-white p-4 rounded-t-2xl flex items-center justify-between">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
 {isPlumber ? <Wrench className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
 </div>
 <div>
 <h3 className="font-bold">Assistente Virtual</h3>
 <p className="text-xs text-white/80 flex items-center gap-1">
 <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
 Online 24h
 </p>
 </div>
 </div>
 <button
 onClick={() => setIsOpen(false)}
 className="hover:bg-white/20 rounded-full p-2 transition-colors"
 aria-label="Fechar chat"
 >
 <X className="w-5 h-5" />
 </button>
 </div>
 <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
 {messages.map((message) => (
 <div
 key={message.id}
 className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
 >
 <div
 className={`max-w-[80%] rounded-2xl px-4 py-2 ${
 message.sender === 'user'
 ? 'bg-primary text-white'
 : 'bg-white border border-gray-200 text-gray-900'
 }`}
 >
 <p className="text-sm whitespace-pre-line">{message.text}</p>
 <p className="text-xs mt-1 opacity-70">
 {message.timestamp.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })}
 </p>
 </div>
 </div>
 ))}
 </div>
 {diagnostic.step < 3 && (
 <div className="p-4 bg-white border-t border-gray-200">
 <p className="text-xs text-gray-600 mb-2 font-semibold">Respostas rápidas:</p>
 <div className="flex flex-wrap gap-2">
 {diagnostic.step === 0 && problemOptions.map((option) => (
 <button
 key={option}
 onClick={() => handleQuickReply(option)}
 className="bg-gray-100 hover:bg-primary hover:text-white text-gray-800 text-sm px-3 py-2 rounded-full transition-colors"
 >
 {option}
 </button>
 ))}
 {diagnostic.step === 1 && locationOptions.map((option) => (
 <button
 key={option}
 onClick={() => handleQuickReply(option)}
 className="bg-gray-100 hover:bg-primary hover:text-white text-gray-800 text-sm px-3 py-2 rounded-full transition-colors"
 >
 {option}
 </button>
 ))}
 {diagnostic.step === 2 && urgencyOptions.map((option) => (
 <button
 key={option}
 onClick={() => handleQuickReply(option)}
 className="bg-gray-100 hover:bg-primary hover:text-white text-gray-800 text-sm px-3 py-2 rounded-full transition-colors"
 >
 {option}
 </button>
 ))}
 </div>
 </div>
 )}
 {diagnostic.step === 3 && (
 <div className="p-4 bg-white border-t border-gray-200">
 <button
 onClick={handleWhatsAppRedirect}
 className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
 >
 <MessageCircle className="w-5 h-5" />
 Confirmar via WhatsApp
 </button>
 <button
 onClick={() => {
 setDiagnostic({ step: 0 });
 setMessages([messages[0]]);
 }}
 className="w-full mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg transition-colors text-sm"
 >
 🔄 Novo Diagnóstico
 </button>
 </div>
 )}
 {diagnostic.step < 3 && (
 <div className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
 <div className="flex gap-2">
 <input
 type="text"
 value={inputText}
 onChange={(e) => setInputText(e.target.value)}
 onKeyPress={(e) => e.key === 'Enter' && handleSend()}
 placeholder="Escreva sua mensagem..."
 className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-primary"
 />
 <button
 onClick={handleSend}
 className="bg-primary hover:bg-primary-dark text-white rounded-full p-2 transition-colors"
 aria-label="Enviar mensagem"
 >
 <Send className="w-5 h-5" />
 </button>
 </div>
 </div>
 )}
 </div>
 )}
 </>
 );
}
