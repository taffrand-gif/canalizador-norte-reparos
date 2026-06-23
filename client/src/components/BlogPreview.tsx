import React from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
const FEATURED_POSTS = [
 {
 slug: 'como-escolher-canalizador-profissional',
 title: 'Como Escolher um Canalizador Profissional',
 excerpt: 'Guia completo para contratar um canalizador de confiança em Trás-os-Montes.',
 date: '2026-03-01',
 readTime: '5 min'
 },
 {
 slug: 'fuga-agua-como-detetar-reparar',
 title: 'Fuga de Água: Como Detetar e Reparar',
 excerpt: 'Aprenda a identificar fugas de água e quando chamar um profissional.',
 date: '2026-02-28',
 readTime: '5 min'
 },
 {
 slug: 'desentupir-sanita-metodos-eficazes',
 title: 'Desentupir Sanita: Métodos Eficazes',
 excerpt: 'Soluções práticas para desentupimentos e quando precisa de ajuda profissional.',
 date: '2026-02-25',
 readTime: '5 min'
 }
];
export default function BlogPreview() {
 return (
 <section className="py-16 bg-gray-50">
 <div className="container">
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-black mb-4">
 Guias e Dicas de Canalização
 </h2>
 <p className="text-gray-600 max-w-2xl mx-auto">
 Aprenda com os nossos especialistas sobre instalações, reparações e manutenção
 </p>
 </div>
 <div className="grid md:grid-cols-3 gap-6 mb-8">
 {FEATURED_POSTS.map((post) => (
 <Link
 key={post.slug}
 to={`/blog/${post.slug}`}
 className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-cyan-600 hover:shadow-lg transition-all group"
 >
 <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
 <span>{post.date}</span>
 <span>•</span>
 <span>{post.readTime}</span>
 </div>
 <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 transition-colors">
 {post.title}
 </h3>
 <p className="text-gray-600 mb-4 line-clamp-2">
 {post.excerpt}
 </p>
 <div className="flex items-center text-cyan-600 font-semibold group-hover:gap-2 transition-all">
 Ler mais
 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
 </div>
 </Link>
 ))}
 </div>
 <div className="text-center">
 <Link
 to="/blog"
 className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 transition-colors"
 >
 Ver Todos os Artigos
 <ArrowRight className="w-5 h-5" />
 </Link>
 </div>
 </div>
 </section>
 );
}
