// Blog article: "Sinais de Fugas de Água Escondidas"
useEffect(() => {
  const meta = document.createElement('meta');
  meta.name = 'robots';
  meta.content = 'noindex';
  document.head.appendChild(meta);
}, []);

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, AlertTriangle, CheckCircle, Droplets } from 'lucide-react';
export default function SinaisFugasAgua() {
 useEffect(() => {
 document.title = "8 Sinais de Fugas de Água Escondidas em Casa | Guia Completo";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Aprenda a identificar fugas de água escondidas antes que causem danos graves. 8 sinais de alerta, como detetar, e quando chamar um canalizador.');
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/blog/sinais-fugas-agua-escondidas');
 }, []);
 const sinais = [
 {
 titulo: "1. Conta de Água Anormalmente Alta",
 descricao: "Aumento súbito de 20-30% sem mudança de hábitos é sinal claro de fuga escondida.",
 urgencia: "alta",
 acao: "Compare com meses anteriores. Se subiu sem razão, há fuga."
 },
 {
 titulo: "2. Manchas de Humidade nas Paredes",
 descricao: "Manchas amareladas ou acastanhadas que crescem indicam água a infiltrar.",
 urgencia: "alta",
 acao: "Não pinte por cima. Encontre a origem primeiro."
 },
 {
 titulo: "3. Tinta a Descascar ou Bolhas",
 descricao: "Humidade por trás da parede faz a tinta soltar-se.",
 urgencia: "media",
 acao: "Verifique se há canalização por trás dessa parede."
 },
 {
 titulo: "4. Cheiro a Mofo ou Bolor",
 descricao: "Humidade constante cria ambiente perfeito para fungos.",
 urgencia: "media",
 acao: "Mofo é sintoma, não a causa. Procure a fuga."
 },
 {
 titulo: "5. Som de Água a Correr",
 descricao: "Ouvir água quando todas as torneiras estão fechadas.",
 urgencia: "critica",
 acao: "URGENTE: Fuga ativa. Feche a torneira geral e ligue-nos."
 },
 {
 titulo: "6. Pavimento Levantado ou Inchado",
 descricao: "Madeira ou laminado que incha indica água por baixo.",
 urgencia: "alta",
 acao: "Pode ser fuga no pavimento radiante ou canalização enterrada."
 },
 {
 titulo: "7. Contador de Água a Rodar Sozinho",
 descricao: "Feche todas as torneiras e verifique o contador. Se roda, há fuga.",
 urgencia: "critica",
 acao: "Teste simples: feche tudo, resposta prioritária, verifique contador."
 },
 {
 titulo: "8. Pressão de Água Reduzida",
 descricao: "Queda de pressão em toda a casa pode indicar fuga no ramal.",
 urgencia: "media",
 acao: "Se só uma torneira, é problema local. Se todas, é fuga geral."
 }
 ];
 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-grow">
 {/* Hero */}
 <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
 <div className="container">
 <div className="max-w-3xl mx-auto text-center">
 <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-bold mb-4">
 💧 GUIA DE DETEÇÃO
 </span>
 <h1 className="text-4xl md:text-5xl font-black mb-6">
 8 Sinais de Fugas de Água Escondidas
 </h1>
 <p className="text-xl opacity-90">
 Uma fuga pequena pode desperdiçar 10.000 litros por mês. Aprenda a detetar antes que seja tarde.
 </p>
 </div>
 </div>
 </section>
 {/* Alerta */}
 <section className="py-12 bg-red-50">
 <div className="container max-w-3xl">
 <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-red-500">
 <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
 <div>
 <h2 className="text-xl font-bold text-red-700 mb-2">Sabia que...</h2>
 <p className="text-gray-700">
 Uma fuga de apenas 1 gota por segundo desperdiça <strong>25 litros por dia</strong> — 
 mais de 9.000 litros por ano. Além do desperdício, a humidade causa danos estruturais 
 e problemas de saúde (mofo, ácaros).
 </p>
 </div>
 </div>
 </div>
 </section>
 {/* Lista de Sinais */}
 <section className="py-16">
 <div className="container max-w-3xl">
 <div className="space-y-8">
 {sinais.map((sinal, index) => (
 <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
 <div className={`p-6 ${
 sinal.urgencia === 'critica' ? 'bg-red-50 border-l-4 border-red-500' :
 sinal.urgencia === 'alta' ? 'bg-orange-50 border-l-4 border-orange-500' :
 'bg-blue-50 border-l-4 border-blue-500'
 }`}>
 <div className="flex items-center gap-2 mb-2">
 <span className={`text-xs font-bold px-2 py-1 rounded ${
 sinal.urgencia === 'critica' ? 'bg-red-500 text-white' :
 sinal.urgencia === 'alta' ? 'bg-orange-500 text-white' :
 'bg-blue-500 text-white'
 }`}>
 {sinal.urgencia === 'critica' ? '🚨 CRÍTICO' : 
 sinal.urgencia === 'alta' ? '⚠️ ALTA' : '💧 MÉDIA'}
 </span>
 </div>
 <h3 className="text-xl font-bold mb-3">{sinal.titulo}</h3>
 <p className="text-gray-700 mb-4">{sinal.descricao}</p>
 <div className="flex items-start gap-2 bg-white/50 p-3 rounded-lg">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
 <p className="text-sm"><strong>O que fazer:</strong> {sinal.acao}</p>
 </div>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>
 {/* Teste DIY */}
 <section className="py-16 bg-gray-50">
 <div className="container max-w-3xl">
 <h2 className="text-2xl font-black mb-6 text-center">Teste Simples para Detetar Fugas</h2>
 <div className="bg-white rounded-xl p-6 shadow-lg">
 <ol className="space-y-4">
 <li className="flex items-start gap-4">
 <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
 <div><strong>Feche todas as torneiras</strong> e aparelhos que usem água (máquina lavar, etc.)</div>
 </li>
 <li className="flex items-start gap-4">
 <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
 <div><strong>Anote o número do contador</strong> de água (todos os dígitos)</div>
 </li>
 <li className="flex items-start gap-4">
 <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
 <div><strong> resposta prioritária</strong> sem usar água nenhuma</div>
 </li>
 <li className="flex items-start gap-4">
 <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
 <div><strong>Verifique o contador novamente</strong> — se o número mudou, tem fuga</div>
 </li>
 </ol>
 </div>
 </div>
 </section>
 {/* CTA */}
 <section className="py-16 bg-blue-600 text-white">
 <div className="container text-center">
 <Droplets className="w-16 h-16 mx-auto mb-6 opacity-80" />
 <h2 className="text-3xl font-black mb-4">
 Suspeita de Fuga de Água?
 </h2>
 <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
 Temos equipamento de deteção térmica para encontrar fugas sem partir paredes.
 Sem compromisso.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
 <Phone className="w-6 h-6" />
 928 484 451
 </a>
 <a href="https://wa.me/351928484451?text=Olá,%20suspeito%20de%20uma%20fuga%20de%20água.%20Podem%20ajudar?" className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-800 transition-all shadow-lg">
 💬 WhatsApp
 </a>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </div>
 );
}
