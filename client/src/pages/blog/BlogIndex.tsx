import React from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogCard from '@/components/blog/BlogCard';
import { useSEO } from '@/hooks/useSEO';

const BlogIndex: React.FC = () => {
 useSEO({
 title: 'Blog do Canalizador - Dicas e Guias para Canalização em Trás-os-Montes',
 description: 'Artigos informativos sobre canalização, arranjos, desentupimentos e manutenção para residências e empresas na região de Trás-os-Montes.',
 keywords: 'blog canalizador, dicas canalização, desentupimentos, arranjos água, Trás-os-Montes'
 });

 // Articles data - à remplacer par API/database plus tard
 const articles = [
 {
 slug: 'instalacao-casa-banho-completa-guia',
 title: 'Instalação Completa de Casa de Banho: Guia e Preços 2026',
 excerpt: 'Guia completo para instalação de casa de banho: etapas, materiais, custos e prazos. Orçamento gratuito em Trás-os-Montes.',
 category: 'Instalações',
 readTime: '10',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/instalacao-casa-banho.jpg'
 },
 {
 slug: 'sistema-aquecimento-agua-melhor-opcao',
 title: 'Esquentador, Caldeira ou Bomba de Calor: Qual a Melhor Opção?',
 excerpt: 'Compare esquentador, caldeira e bomba de calor: vantagens, custos, consumo e qual escolher para sua casa em 2026.',
 category: 'Instalações',
 readTime: '12',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/sistema-aquecimento-agua.jpg'
 },
 {
 slug: 'canalizacao-casa-antiga-renovacao',
 title: 'Renovação de Canalização em Casas Antigas de Trás-os-Montes',
 excerpt: 'Guia completo para renovar canalização em casas antigas: tubos de chumbo, paredes de granito, custos e soluções.',
 category: 'Renovações',
 readTime: '11',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/canalizacao-casa-antiga.jpg'
 },
 {
 slug: 'piscina-tanque-agua-canalizacao',
 title: 'Canalização para Piscinas e Tanques de Água: Guia Completo',
 excerpt: 'Guia completo para instalação de canalização em piscinas, tanques de água e sistemas de irrigação agrícola.',
 category: 'Instalações',
 readTime: '13',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/piscina-tanque-agua.jpg'
 },
 {
 slug: 'poupar-agua-casa-dicas-praticas',
 title: 'Como Poupar Água em Casa: 12 Dicas Práticas para 2026',
 excerpt: '12 dicas práticas para poupar água em casa: torneiras económicas, recuperação de água da chuva, hábitos simples. Poupe até 40% na conta.',
 category: 'Dicas Práticas',
 readTime: '10',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/poupar-agua-casa.jpg'
 },
 {
 slug: 'problemas-canalizacao-inverno-solucoes',
 title: 'Problemas de Canalização no Inverno: Soluções e Prevenção',
 excerpt: 'Guia completo para proteger canalização do frio em Trás-os-Montes: tubos congelados, isolamento térmico, urgências de inverno.',
 category: 'Manutenção Preventiva',
 readTime: '12',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/problemas-inverno.jpg'
 },
 {
 slug: 'como-desentupir-lava-loica-passos',
 title: 'Como Desentupir um Lava-Loiça em 5 Passos Simples',
 excerpt: 'Aprenda a desentupir um lava-loiça de forma eficaz com métodos caseiros seguros. Guia passo a passo para resolver entupimentos comuns.',
 category: 'Dicas Práticas',
 readTime: '7',
 date: '13 Fev 2026',
 imageUrl: '/images-optimized/blog/desentupir-lava-loica.jpg'
 },
 {
 slug: 'evitar-fugas-agua-prevencao',
 title: 'Como Evitar Fugas de Água — Guia Completo de Prevenção',
 excerpt: 'Aprenda a prevenir fugas de água em casa com este guia completo. Dicas de manutenção preventiva para proteger a sua canalização em Trás-os-Montes.',
 category: 'Manutenção Preventiva',
 readTime: '9',
 date: '14 Fev 2026',
 imageUrl: '/images-optimized/blog/fugas-agua-prevencao.jpg'
 },
 {
 slug: 'sinais-fugas-agua-escondidas',
 title: '8 Sinais de Fugas de Água Escondidas em Casa',
 excerpt: 'Aprenda a identificar fugas de água escondidas antes que causem danos graves. 8 sinais de alerta e como detetar.',
 category: 'Manutenção Preventiva',
 readTime: '8',
 date: '14 Fev 2026',
 imageUrl: '/images-optimized/blog/sinais-fugas-agua.jpg'
 }
 ];

 return (
 <BlogLayout
 title="Blog do Canalizador Profissional"
 description="Dicas, guias e informações úteis sobre canalização e arranjos para residências e empresas em Trás-os-Montes"
 >
 {/* Hero section */}
 <div className="text-center mb-12">
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
 Conhecimento que <span className="text-blue-600">Protege</span> a sua Casa
 </h1>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Artigos escritos por canalizadores certificados para ajudar proprietários a prevenir problemas de canalização e tomar decisões informadas.
 </p>
 </div>

 {/* Featured article */}
 <div className="mb-16">
 <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
 <div className="flex flex-col lg:flex-row gap-8 items-center">
 <div className="lg:w-1/3">
 <div className="rounded-xl overflow-hidden">
 <img
 src="/images-optimized/blog/featured-canalizador.jpg"
 alt="Canalizador profissional a trabalhar"
 className="w-full h-64 object-cover"
 loading="lazy"
 width={400}
 height={300}
 />
 </div>
 </div>
 <div className="lg:w-2/3">
 <span className="inline-block px-4 py-1 bg-blue-600 text-white font-semibold rounded-full mb-4">
 Artigo em Destaque
 </span>
 <h2 className="text-3xl font-bold text-gray-900 mb-4">
 10 Problemas de Canalização que Não Pode Ignorar
 </h2>
 <p className="text-gray-700 mb-6 text-lg">
 Identifique os sinais de alerta que indicam problemas sérios na sua canalização. 
 Ignorar estes sinais pode levar a danos estruturais caros e situações de emergência.
 </p>
 <a
 href="/blog/sinais-fugas-agua-escondidas"
 className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
 >
 Ler Artigo Completo
 <span className="text-xl">→</span>
 </a>
 </div>
 </div>
 </div>
 </div>

 {/* Articles grid */}
 <div>
 <h2 className="text-3xl font-bold text-gray-900 mb-8">Últimos Artigos</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {articles.map((article) => (
 <BlogCard key={article.slug} {...article} />
 ))}
 </div>
 </div>

 {/* Newsletter */}
 <div className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
 <div className="text-center max-w-2xl mx-auto">
 <h3 className="text-2xl font-bold text-gray-900 mb-4">
 Receba Dicas de Canalização no seu Email
 </h3>
 <p className="text-gray-700 mb-6">
 Inscreva-se na nossa newsletter e receba mensalmente dicas de manutenção preventiva, 
 informações sobre arranjos e promoções exclusivas.
 </p>
 <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
 <input
 type="email"
 placeholder="Seu email"
 className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
 required
 />
 <button
 type="submit"
 className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
 >
 Inscrever-se
 </button>
 </form>
 <p className="text-sm text-gray-500 mt-4">
 Respeitamos a sua privacidade. Pode cancelar a qualquer momento.
 </p>
 </div>
 </div>
 </BlogLayout>
 );
};

export default BlogIndex;