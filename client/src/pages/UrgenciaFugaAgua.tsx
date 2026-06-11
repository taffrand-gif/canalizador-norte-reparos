import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSite } from '@/contexts/SiteContext';
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Star } from 'lucide-react';
export default function UrgenciaFugaAgua() {
 const { config } = useSite();
 useEffect(() => {
 document.title = 'Fuga de Água Urgente Bragança | 30min | 928 484 451';
 const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
 meta.setAttribute('name', 'description');
 meta.setAttribute('content', 'Fuga de água urgente? Canalizador em Bragança em 30min. Sem partir azulejos, preço fixo. Orçamento grátis. Ligue: 928 484 451');
 if (!meta.parentElement) document.head.appendChild(meta);
 }, []);
 const whatsappMessage = encodeURIComponent('Olá! Tenho uma fuga de água urgente. Podem ajudar?');
 const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${whatsappMessage}`;
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
 "@context": "https://schema.org",
 "@type": "EmergencyService",
 "name": "Fuga de Água Urgente - Norte Reparos",
 "provider": {
 "@type": "Plumber",
 "name": config.businessName,
 "telephone": config.phone
 },
 "areaServed": {
 "@type": "City",
 "name": "Bragança"
 },
 "availableChannel": {
 "@type": "ServiceChannel",
 "servicePhone": {
 "@type": "ContactPoint",
 "telephone": config.phone,
 "availableLanguage": "Portuguese"
 }
 }
 }) }} />
 <Header />
 {/* Hero Section - Emotional */}
 <section className="relative bg-gradient-to-br from-red-600 to-red-800 text-white py-20 px-4">
 <div className="max-w-4xl mx-auto text-center">
 <div className="inline-block bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold text-sm mb-6 animate-pulse">
 🚨 URGÊNCIA Atendimento 24h/7d
 </div>
 <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
 Fuga de Água Urgente em Bragança?<br />
 <span className="text-yellow-300">Estamos Aí Atendimento prioritário</span> 💧
 </h1>
 <p className="text-xl md:text-2xl mb-8 text-red-100">
 Cano rebentado? Água a jorrar? NÃO ENTRE EM PÂNICO!
 </p>
 <div className="grid md:grid-cols-2 gap-4 mb-8 text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6">
 <div className="flex items-start gap-3">
 <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
 <div>
 <p className="font-bold">Chegamos em 30-90 minutos</p>
 <p className="text-sm text-red-100">Bragança e arredores</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
 <div>
 <p className="font-bold">Preço dito ANTES de começar</p>
 <p className="text-sm text-red-100">Sem surpresas</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
 <div>
 <p className="font-bold">Sem partir azulejos</p>
 <p className="text-sm text-red-100">Tecnologia termográfica</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
 <div>
 <p className="font-bold">Garantia do serviço</p>
 <p className="text-sm text-red-100">Por escrito</p>
 </div>
 </div>
 </div>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${config.phone}`}
 className="bg-white hover:bg-gray-100 text-red-600 font-bold px-8 py-5 rounded-xl text-lg transition-all shadow-2xl hover:shadow-3xl flex items-center justify-center gap-2"
 >
 <Phone className="w-6 h-6" />
 Ligar Agora: 928 484 451
 </a>
 <a
 href={whatsappUrl}
 className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-5 rounded-xl text-lg transition-all shadow-2xl hover:shadow-3xl flex items-center justify-center gap-2"
 >
 <MessageCircle className="w-6 h-6" />
 WhatsApp: Resposta em 2min
 </a>
 </div>
 <p className="mt-6 text-sm text-red-100">
 ⚡ Atendimento 24h/7d • Fins de semana • Feriados
 </p>
 </div>
 </section>
 {/* Pain Points Section */}
 <section className="py-16 px-4 bg-gray-50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
 Sabemos Como Se Sente...
 </h2>
 <div className="grid md:grid-cols-2 gap-6 mb-12">
 <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
 <p className="text-2xl mb-2">😰</p>
 <p className="font-bold text-lg mb-2 text-gray-900">"A minha casa vai inundar!"</p>
 <p className="text-gray-600">Cada segundo conta. Chegamos em 30-90 minutos para parar a fuga.</p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
 <p className="text-2xl mb-2">💸</p>
 <p className="font-bold text-lg mb-2 text-gray-900">"Quanto é que isto me vai custar?"</p>
 <p className="text-gray-600">Preço transparente ANTES de começar. Maioria: 80-150€.</p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
 <p className="text-2xl mb-2">⏰</p>
 <p className="font-bold text-lg mb-2 text-gray-900">"Preciso de alguém AGORA!"</p>
 <p className="text-gray-600">Técnico certificado a caminho em minutos. Atendemos Atendimento 24h/7d.</p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
 <p className="text-2xl mb-2">🔧</p>
 <p className="font-bold text-lg mb-2 text-gray-900">"Vão ter que partir tudo?"</p>
 <p className="text-gray-600">Não! Câmara termográfica detecta sem obras. Poupa centenas de euros.</p>
 </div>
 </div>
 <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-xl">
 <p className="text-lg text-gray-800">
 <strong className="text-blue-900">Já ajudámos 500+ famílias em Bragança</strong> com o mesmo problema.
 Pode confiar na nossa experiência e profissionalismo.
 </p>
 </div>
 </div>
 </section>
 {/* Process Section */}
 <section className="py-16 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
 Como Funciona
 </h2>
 <p className="text-center text-xl text-gray-600 mb-12">
 Simples, rápido e transparente
 </p>
 <div className="space-y-6">
 {[
 { step: '1', title: 'Liga ou envia WhatsApp', time: '2 min', desc: 'Atendemos imediatamente. Explicamos o processo.' },
 { step: '2', title: 'Técnico a caminho', time: '30-90 min', desc: 'Confirmamos hora de chegada por SMS/WhatsApp.' },
 { step: '3', title: 'Diagnóstico + Orçamento', time: '15 min', desc: 'Identificamos o problema. Preço fixo antes de começar.' },
 { step: '4', title: 'Arranjo imediata', time: '1-3 horas', desc: 'Resolvemos com equipamento profissional.' },
 { step: '5', title: 'Garantia do serviço', time: 'Por escrito', desc: 'Certificado de garantia entregue no final.' }
 ].map((item, i) => (
 <div key={i} className="flex gap-6 items-start bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
 <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
 {item.step}
 </div>
 <div className="flex-1">
 <div className="flex items-center gap-3 mb-2">
 <h3 className="font-bold text-xl text-gray-900">{item.title}</h3>
 <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
 <Clock className="w-3 h-3 inline mr-1" />
 {item.time}
 </span>
 </div>
 <p className="text-gray-600">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl text-center">
 <p className="text-2xl font-bold text-gray-900 mb-2">
 Preço Médio: 80-150€
 </p>
 <p className="text-gray-600 mb-6">
 (Maioria dos casos. Sem compromisso e sem compromisso)
 </p>
 <a
 href={whatsappUrl}
 className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
 >
 <MessageCircle className="w-5 h-5" />
 Pedir Orçamento Grátis
 </a>
 </div>
 </div>
 </section>
 {/* Social Proof */}
 <section className="py-16 px-4 bg-gray-50">
 <div className="max-w-4xl mx-auto">
 <div className="text-center mb-12">
 <div className="flex items-center justify-center gap-2 mb-4">
 <Star className="w-8 h-8 text-yellow-400 fill-current" />
 <span className="text-4xl font-bold text-gray-900"></span>
 </div>
 <p className="text-xl text-gray-600">127 avaliações Google</p>
 </div>
 <div className="grid md:grid-cols-2 gap-6">
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <div className="flex gap-1 mb-3">
 {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
 </div>
 <p className="text-gray-800 mb-4 italic">
 "Fuga às 23h, chegaram em 40min. Preço justo, trabalho impecável. Recomendo!"
 </p>
 <p className="text-sm text-gray-600 font-semibold">Maria S., Bragança</p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <div className="flex gap-1 mb-3">
 {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
 </div>
 <p className="text-gray-800 mb-4 italic">
 "Sem partir azulejos! Tecnologia incrível. Poupei centenas de euros."
 </p>
 <p className="text-sm text-gray-600 font-semibold">João P., Bragança</p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <div className="flex gap-1 mb-3">
 {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
 </div>
 <p className="text-gray-800 mb-4 italic">
 "Profissionais sérios. Explicaram tudo, preço combinado antes. Voltarei a chamar."
 </p>
 <p className="text-sm text-gray-600 font-semibold">António M., Mirandela</p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-lg">
 <div className="flex gap-1 mb-3">
 {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
 </div>
 <p className="text-gray-800 mb-4 italic">
 "Domingo de manhã, fuga grave. Atenderam e resolveram em 2 horas. Top!"
 </p>
 <p className="text-sm text-gray-600 font-semibold">Carla F., Trás-os-Montes</p>
 </div>
 </div>
 </div>
 </section>
 {/* FAQ */}
 <section className="py-16 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
 Perguntas Frequentes
 </h2>
 <div className="space-y-4">
 {[
 {
 q: 'Quanto custa arranjar uma fuga de água?',
 a: '80-200€ dependendo da complexidade. Fugas simples (torneiras, ligações): 80-120€. Fugas em canalizações: 120-200€. Sem compromisso antes de começar.'
 },
 {
 q: 'Vão partir os azulejos?',
 a: 'Não! Usamos câmara termográfica infravermelha que detecta fugas sem obras. Apenas em casos raros (menos de 5%) é necessário abrir parede.'
 },
 {
 q: 'Atendem aos fins de semana e feriados?',
 a: 'Sim, Atendimento 24h/7d, 7 dias por semana, incluindo fins de semana e feriados. Urgências têm sempre prioridade.'
 },
 {
 q: 'Quanto tempo demora a chegar?',
 a: '30-90 minutos em Bragança e arredores. Confirmamos hora exata por SMS/WhatsApp assim que o técnico sai.'
 },
 {
 q: 'Têm garantia?',
 a: 'Sim, 2 anos de garantia por escrito em todas as arranjos. Se o problema voltar, arranjamos gratuitamente.'
 },
 {
 q: 'Aceitam pagamento com cartão?',
 a: 'Sim, aceitamos dinheiro, MB WAY, transferência bancária e cartão de débito/crédito.'
 }
 ].map((faq, i) => (
 <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
 <h3 className="font-bold text-lg mb-2 text-gray-900">{faq.q}</h3>
 <p className="text-gray-600">{faq.a}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* Final CTA */}
 <section className="py-20 px-4 bg-gradient-to-br from-red-600 to-red-800 text-white">
 <div className="max-w-4xl mx-auto text-center">
 <Shield className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
 <h2 className="text-3xl md:text-5xl font-bold mb-6">
 Não Deixe a Fuga Piorar!
 </h2>
 <p className="text-xl mb-8 text-red-100">
 Cada minuto conta. Danos por água podem custar milhares de euros.<br />
 Ligue agora e evite prejuízos maiores.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
 <a
 href={`tel:${config.phone}`}
 className="bg-white hover:bg-gray-100 text-red-600 font-bold px-8 py-5 rounded-xl text-lg transition-all shadow-2xl flex items-center justify-center gap-2"
 >
 <Phone className="w-6 h-6" />
 Ligar Agora: 928 484 451
 </a>
 <a
 href={whatsappUrl}
 className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-5 rounded-xl text-lg transition-all shadow-2xl flex items-center justify-center gap-2"
 >
 <MessageCircle className="w-6 h-6" />
 WhatsApp: Orçamento em 2min
 </a>
 </div>
 <p className="text-sm text-red-100">
 Atendemos em: Bragança, Mirandela, Trás-os-Montes, Chaves, Vinhais<br />
 e todas as aldeias de Trás-os-Montes
 </p>
 </div>
 </section>
 <Footer />
 </>
 );
}
