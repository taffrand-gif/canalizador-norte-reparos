import React from 'react';
import { useEffect } from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogCard from '@/components/blog/BlogCard';
import { useSEO } from '@/hooks/useSEO';
const BlogIndex: React.FC = () => {
 useEffect(() => {
 const meta = document.createElement('meta');
 meta.name = 'robots';
 meta.content = 'noindex';
 document.head.appendChild(meta);
 }, []);
 useSEO({
 title: 'Blog do Canalizador - Dicas e Guias para Canalização em Trás-os-Montes',
 description: 'Artigos informativos sobre canalização, desentupimentos, fugas de água, esquentadores e manutenção para residências e empresas na região de Trás-os-Montes.',
 keywords: 'blog canalizador, dicas canalização, desentupimentos, fugas água, Trás-os-Montes'
 });
 // Articles data - 15 artigos PLOMBERIE réels (alignés avec App.tsx)
 const articles = [
 {
 slug: 'como-desentupir-lava-loica-passos',
 title: 'Como Desentupir a Lava-Loiça: 7 Passos Que Funcionam',
 excerpt: 'Guia prático para desentupir a lava-loiça da cozinha sem chamar ajuda profissional. Métodos caseiros e ferramentas.',
 category: 'Desentupimentos',
 readTime: '8',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/desentupir-lava-loica.jpg'
 },
 {
 slug: 'evitar-fugas-agua-prevencao',
 title: 'Como Evitar Fugas de Água: 10 Dicas de Prevenção',
 excerpt: 'Prevenção de fugas de água em casa. Inspeções periódicas, manutenção preventiva e sinais de alerta a que deve estar atento.',
 category: 'Prevenção',
 readTime: '10',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/evitar-fugas.jpg'
 },
 {
 slug: 'esquentador-vs-termoacumulador',
 title: 'Esquentador vs Termoacumulador: Qual Escolher?',
 excerpt: 'Comparação completa entre esquentador a gás e termoacumulador elétrico. Custos, eficiência, instalação e manutenção.',
 category: 'Aquecimento',
 readTime: '12',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/esquentador-termoacumulador.jpg'
 },
 {
 slug: 'sinais-fugas-agua-escondidas',
 title: 'Sinais de Fugas de Água Escondidas: Como Detetar',
 excerpt: 'Como identificar fugas de água escondidas em paredes e soalhos. Métodos de deteção, custos de reparação e prevenção.',
 category: 'Fugas',
 readTime: '11',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/fugas-escondidas.jpg'
 },
 {
 slug: 'manutencao-esquentador-guia',
 title: 'Manutenção do Esquentador: Guia Completo 2026',
 excerpt: 'Como manter o seu esquentador a funcionar durante anos. Limpeza, desentupimento, válvulas e segurança.',
 category: 'Manutenção',
 readTime: '9',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/manutencao-esquentador.jpg'
 },
 {
 slug: 'desentupir-wc-metodos-caseiros',
 title: 'Como Desentupir a Sanita: 6 Métodos Caseiros',
 excerpt: 'Métodos eficazes para desentupir a sanita sem chamar um canalizador. Ventosa, bicarbonato, cabo e mais.',
 category: 'Desentupimentos',
 readTime: '7',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/desentupir-wc.jpg'
 },
 {
 slug: 'como-prevenir-canos-rebentados-inverno',
 title: 'Como Prevenir Canos Rebentados no Inverno',
 excerpt: 'Proteja a canalização do frio extremo. Isolamento, válvulas anti-congelamento e manutenção preventiva para o inverno em Trás-os-Montes.',
 category: 'Prevenção',
 readTime: '10',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/canos-rebentados-inverno.jpg'
 },
 {
 slug: 'custo-canalizador-tras-os-montes-precos',
 title: 'Custo de Canalizador em Trás-os-Montes: Preços 2026',
 excerpt: 'Tabela de preços atualizada para serviços de canalização em Trás-os-Montes. Desentupimentos, fugas, instalação e manutenção.',
 category: 'Preços',
 readTime: '8',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/precos-canalizador.jpg'
 },
 {
 slug: 'arranjo-caldeira-esquentador-manutencao',
 title: 'Arranjo da Caldeira e Esquentador: Manutenção',
 excerpt: 'Como arranjar a caldeira ou esquentador quando para de funcionar. Diagnóstico, peças e quando chamar técnico.',
 category: 'Reparação',
 readTime: '11',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/arranjo-caldeira.jpg'
 },
 {
 slug: 'instalacao-casa-banho-completa-guia',
 title: 'Instalação de Casa de Banho Completa: Guia 2026',
 excerpt: 'Tudo sobre a instalação completa de uma casa de banho: canalização, sanitários, revestimentos e orçamento.',
 category: 'Instalação',
 readTime: '15',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/instalacao-casa-banho.jpg'
 },
 {
 slug: 'sistema-aquecimento-agua-melhor-opcao',
 title: 'Sistema de Aquecimento de Água: Melhor Opção 2026',
 excerpt: 'Comparação de sistemas de aquecimento de água: esquentador, caldeira, bomba de calor, solar. Custos e eficiência.',
 category: 'Aquecimento',
 readTime: '12',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/aquecimento-agua.jpg'
 },
 {
 slug: 'canalizacao-casa-antiga-renovacao',
 title: 'Canalização em Casa Antiga: Renovação Completa',
 excerpt: 'Guia completo para renovar a canalização em casas antigas de pedra. Materiais, técnicas e custos em Trás-os-Montes.',
 category: 'Renovação',
 readTime: '14',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/canalizacao-casa-antiga.jpg'
 },
 {
 slug: 'piscina-tanque-agua-canalizacao',
 title: 'Piscina e Tanque de Água: Canalização e Manutenção',
 excerpt: 'Como instalar e manter a canalização de piscinas e tanques. Filtros, bombas, tratamento e limpeza.',
 category: 'Instalação',
 readTime: '10',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/piscina-tanque.jpg'
 },
 {
 slug: 'poupar-agua-casa-dicas-praticas',
 title: 'Poupar Água em Casa: 12 Dicas Práticas',
 excerpt: 'Dicas eficazes para poupar água em casa. Reduza a factura e ajude o ambiente com mudanças simples.',
 category: 'Poupança',
 readTime: '9',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/poupar-agua.jpg'
 },
 {
 slug: 'problemas-canalizacao-inverno-solucoes',
 title: 'Problemas de Canalização no Inverno: Soluções',
 excerpt: 'Os problemas de canalização mais comuns no inverno em Trás-os-Montes. Como prevenir e resolver.',
 category: 'Inverno',
 readTime: '11',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/canalizacao-inverno.jpg'
 }
 ];
 // Schema.org Blog
 const blogSchema = {
 '@context': 'https://schema.org',
 '@type': 'Blog',
 name: 'Blog do Canalizador - Norte Reparos',
 description: 'Dicas e guias sobre canalização em Trás-os-Montes',
 url: 'https://canalizador-norte-reparos.pt/blog'
 };
 return (
 <BlogLayout>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
 />
 <div className="container mx-auto px-4 py-12">
 <header className="text-center mb-12">
 <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
 Blog do Canalizador
 </h1>
 <p className="text-xl text-gray-700 max-w-3xl mx-auto">
 Dicas práticas, guias completos e conselhos profissionais sobre canalização, desentupimentos, fugas de água e manutenção em Trás-os-Montes.
 </p>
 </header>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {articles.map((article) => (
 <BlogCard key={article.slug} {...article} />
 ))}
 </div>
 </div>
 </BlogLayout>
);
};
export default BlogIndex;
