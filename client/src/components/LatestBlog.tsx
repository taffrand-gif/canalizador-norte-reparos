import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

const articles = [
 {
 title: 'Como Desentupir a Lava-Loiça: Passos Simples',
 desc: 'Métodos caseiros e profissionais para resolver entupimentos na cozinha.',
 href: '/blog/como-desentupir-lava-loica-passos'},
 {
 title: 'Sinais de Fugas de Água Escondidas',
 desc: 'Aprenda a detetar fugas invisíveis antes que causem danos graves na sua casa.',
 href: '/blog/sinais-fugas-agua-escondidas'},
 {
 title: 'Esquentador vs Termoacumulador: Qual Escolher?',
 desc: 'Comparação completa para ajudar a escolher o melhor sistema de água quente.',
 href: '/blog/esquentador-vs-termoacumulador'},
 {
 title: 'Como Prevenir Canos Rebentados no Inverno',
 desc: 'Proteja a sua canalização do frio transmontano com estas dicas essenciais.',
 href: '/blog/como-prevenir-canos-rebentados-inverno'},
];

export default function LatestBlog() {
 return (
 <section className="py-20 bg-gray-50">
 <div className="container mx-auto px-4">
 <div className="text-center mb-12">
 <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
 Últimos <span className="text-[#0e7490]">Artigos</span>
 </h2>
 <p className="text-lg text-gray-600">
 Dicas e guias práticos da nossa equipa de canalizadores.
 </p>
 </div>

 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
 {articles.map((a, i) => (
 <a
 key={i}
 href={a.href}
 className="group bg-white rounded-xl border-2 border-gray-100 p-6 hover:border-[#2193b0] hover:shadow-lg transition-all flex flex-col"
 >
 <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0e7490]/10 text-[#0e7490] mb-4">
 <BookOpen className="w-5 h-5" />
 </div>
 <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0e7490] transition-colors">
 {a.title}
 </h3>
 <p className="text-sm text-gray-600 flex-1 mb-4">{a.desc}</p>
 <span className="inline-flex items-center text-sm font-semibold text-[#0e7490] gap-1">
 Ler mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </span>
 </a>
 ))}
 </div>

 <div className="text-center mt-10">
 <a
 href="/blog"
 className="inline-flex items-center gap-2 bg-[#0e7490] hover:bg-[#1a7a94] text-white font-bold py-3 px-8 rounded-lg transition-colors"
 >
 Ver Todos os Artigos <ArrowRight className="w-4 h-4" />
 </a>
 </div>
 </div>
 </section>
 );
}
