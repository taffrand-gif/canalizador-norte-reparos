// Blog article: "Instalação Completa de Casa de Banho: Guia e Preços 2026"
useEffect(() => {
  const meta = document.createElement('meta');
  meta.name = 'robots';
  meta.content = 'noindex';
  document.head.appendChild(meta);
}, []);

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, CheckCircle, Wrench, Euro } from 'lucide-react';
export default function InstalacaoCasaBanho() {
 useEffect(() => {
 document.title = "Instalação Completa de Casa de Banho: Guia e Preços 2026";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Guia completo para instalação de casa de banho em 2026: etapas, materiais, custos e prazos. Sem compromisso em Trás-os-Montes.');
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/blog/instalacao-casa-banho-completa-guia');
 // JSON-LD Article Schema
 const script = document.createElement('script');
 script.type = 'application/ld+json';
 script.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Instalação Completa de Casa de Banho: Guia e Preços 2026",
 "description": "Guia completo para instalação de casa de banho em 2026: etapas, materiais, custos e prazos.",
 "author": {
 "@type": "Organization",
 "name": "Norte Reparos"
 },
 "publisher": {
 "@type": "Organization",
 "name": "Norte Reparos",
 "logo": {
 "@type": "ImageObject",
 "url": "https://canalizador-norte-reparos.pt/logo.png"
 }
 },
 "datePublished": "2026-02-19",
 "dateModified": "2026-02-19"
 });
 document.head.appendChild(script);
 const howtoScript = document.createElement('script');
 howtoScript.type = 'application/ld+json';
 howtoScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": "Como Instalar uma Casa de Banho Completa",
 "description": "Guia completo das 6 etapas para instalação de casa de banho em Trás-os-Montes: planeamento, demolição, canalização, impermeabilização, revestimentos e sanitários.",
 "totalTime": "P15D",
 "step": [
 { "@type": "HowToStep", "position": 1, "name": "Planeamento e Projeto", "text": "Definir o layout, escolher materiais e sanitários, e obter orçamentos comparativos. Projeto técnico: 200-500€. Duração: 1-2 semanas." },
 { "@type": "HowToStep", "position": 2, "name": "Demolição e Remoção", "text": "Retirar sanitários antigos, azulejos e preparar o espaço para a nova instalação. Custo: 300-600€. Duração: 1-2 dias." },
 { "@type": "HowToStep", "position": 3, "name": "Canalização e Eletricidade", "text": "Instalar tubagens de água e esgoto, pontos elétricos e tomadas. Esta etapa requer canalizador e eletricista certificados. Custo: 800-1.500€. Duração: 2-3 dias." },
 { "@type": "HowToStep", "position": 4, "name": "Impermeabilização", "text": "Aplicar tela impermeável no chão e paredes da zona do duche — etapa crítica para evitar infiltrações. Custo: 200-400€. Duração: 1 dia." },
 { "@type": "HowToStep", "position": 5, "name": "Revestimentos", "text": "Colocar azulejos nas paredes e pavimento, incluindo acabamentos e rejuntes. Custo: 1.000-2.500€. Duração: 3-5 dias." },
 { "@type": "HowToStep", "position": 6, "name": "Instalação de Sanitários", "text": "Montar sanita, lavatório, duche ou banheira, torneiras e acessórios. Custo: 400-800€. Duração: 1-2 dias." }
 ]
 });
 document.head.appendChild(howtoScript);
 const faqScript = document.createElement('script');
 faqScript.type = 'application/ld+json';
 faqScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 { "@type": "Question", "name": "Quanto tempo demora a instalar uma casa de banho completa?", "acceptedAnswer": { "@type": "Answer", "text": "Uma instalação completa demora tipicamente 10-15 dias de trabalho: planeamento (1-2 semanas), demolição (1-2 dias), canalização e eletricidade (2-3 dias), impermeabilização (1 dia), revestimentos (3-5 dias) e instalação de sanitários (1-2 dias)." } },
 { "@type": "Question", "name": "Quanto custa instalar uma casa de banho completa em Trás-os-Montes em 2026?", "acceptedAnswer": { "@type": "Answer", "text": "O custo total (materiais e mão de obra) varia entre 3.000€ e 7.000€. Projeto: 200-500€, demolição: 300-600€, canalização e eletricidade: 800-1.500€, impermeabilização: 200-400€, revestimentos: 1.000-2.500€, sanitários e torneiras: 400-800€." } },
 { "@type": "Question", "name": "Qual a parte mais crítica na instalação de casa de banho?", "acceptedAnswer": { "@type": "Answer", "text": "A impermeabilização é a etapa mais crítica. Uma falha na tela impermeável do duche pode causar infiltrações nas divisões abaixo, com danos muito mais caros do que o custo da própria impermeabilização (200-400€)." } },
 { "@type": "Question", "name": "Preciso de canalizador profissional para a instalação?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, as ligações às tubagens de água e esgoto requerem um canalizador certificado. Em Trás-os-Montes, a Norte Reparos trata de toda a canalização e coordena com o eletricista para a instalação completa." } }
 ]
 });
 document.head.appendChild(faqScript);
 }, []);
 const etapas = [
 {
 numero: 1,
 titulo: "Planeamento e Projeto",
 descricao: "Definir layout, escolher materiais e obter orçamentos.",
 duracao: "1-2 semanas",
 custo: "Projeto técnico: €200-500"
 },
 {
 numero: 2,
 titulo: "Demolição e Remoção",
 descricao: "Retirar sanitários antigos, azulejos e parranjar espaço.",
 duracao: "1-2 dias",
 custo: "€300-600"
 },
 {
 numero: 3,
 titulo: "Canalização e Eletricidade",
 descricao: "Instalar tubagens de água e esgoto, pontos elétricos.",
 duracao: "2-3 dias",
 custo: "€800-1.500"
 },
 {
 numero: 4,
 titulo: "Impermeabilização",
 descricao: "Aplicar tela impermeável no chão e paredes do duche.",
 duracao: "1 dia",
 custo: "€200-400"
 },
 {
 numero: 5,
 titulo: "Revestimentos",
 descricao: "Colocar azulejos, pavimento e acabamentos.",
 duracao: "3-5 dias",
 custo: "€1.000-2.500"
 },
 {
 numero: 6,
 titulo: "Instalação de Sanitários",
 descricao: "Montar sanita, lavatório, duche/banheira, torneiras.",
 duracao: "1-2 dias",
 custo: "€400-800"
 }
 ];
 const materiais = [
 { item: "Sanita suspensa", preco: "€150-400" },
 { item: "Lavatório + móvel", preco: "€200-600" },
 { item: "Base de duche + vidros", preco: "€300-800" },
 { item: "Torneiras (misturadoras)", preco: "€80-250" },
 { item: "Azulejos (m²)", preco: "€15-50" },
 { item: "Pavimento (m²)", preco: "€20-60" },
 { item: "Esquentador", preco: "€250-600" }
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
 🚿 GUIA COMPLETO 2026
 </span>
 <h1 className="text-4xl md:text-5xl font-black mb-6">
 Instalação Completa de Casa de Banho
 </h1>
 <p className="text-xl opacity-90">
 Tudo o que precisa saber: etapas, materiais, prazos e custos reais em Trás-os-Montes.
 </p>
 </div>
 </div>
 </section>
 {/* Introdução */}
 <section className="py-12">
 <div className="container max-w-3xl">
 <div className="prose prose-lg max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed">
 Renovar ou instalar uma casa de banho de raiz é um investimento importante. Em 2026, 
 uma instalação completa em <a href="/canalizador-vila-real" className="text-blue-600 hover:underline">Vila Real</a>, 
 <a href="/canalizador-braganca" className="text-blue-600 hover:underline"> Bragança</a> ou 
 <a href="/canalizador-chaves" className="text-blue-600 hover:underline"> Chaves</a> pode custar entre 
 <strong> €3.000 e €8.000</strong>, dependendo dos materiais e acabamentos escolhidos.
 </p>
 <p className="text-lg text-gray-700 leading-relaxed mt-4">
 Este guia explica cada etapa do processo, os custos envolvidos e como evitar problemas comuns.
 </p>
 </div>
 </div>
 </section>
 {/* Etapas */}
 <section className="py-16 bg-gray-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-8 text-center">6 Etapas da Instalação</h2>
 <div className="space-y-6">
 {etapas.map((etapa) => (
 <div key={etapa.numero} className="bg-white rounded-xl p-6 shadow-lg">
 <div className="flex items-start gap-4">
 <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
 {etapa.numero}
 </div>
 <div className="flex-grow">
 <h3 className="text-xl font-bold mb-2">{etapa.titulo}</h3>
 <p className="text-gray-700 mb-3">{etapa.descricao}</p>
 <div className="flex flex-wrap gap-4 text-sm">
 <span className="flex items-center gap-1 text-blue-600">
 <CheckCircle className="w-4 h-4" />
 <strong>Duração:</strong> {etapa.duracao}
 </span>
 <span className="flex items-center gap-1 text-green-600">
 <Euro className="w-4 h-4" />
 <strong>Custo:</strong> {etapa.custo}
 </span>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* Materiais e Preços */}
 <section className="py-16">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-8 text-center">Materiais e Preços Médios</h2>
 <div className="bg-white rounded-xl shadow-lg overflow-hidden">
 <table className="w-full">
 <thead className="bg-blue-600 text-white">
 <tr>
 <th className="px-6 py-4 text-left font-bold">Material</th>
 <th className="px-6 py-4 text-right font-bold">Preço</th>
 </tr>
 </thead>
 <tbody>
 {materiais.map((material, index) => (
 <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
 <td className="px-6 py-4">{material.item}</td>
 <td className="px-6 py-4 text-right font-bold text-blue-600">{material.preco}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 <p className="text-sm text-gray-600 mt-4 text-center">
 Preços indicativos para 2026 em Trás-os-Montes. Valores podem variar conforme marca e qualidade.
 </p>
 </div>
 </section>
 {/* Dicas Importantes */}
 <section className="py-16 bg-blue-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-8 text-center">Dicas Importantes</h2>
 <div className="space-y-4">
 <div className="bg-white p-6 rounded-xl shadow-md">
 <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
 <CheckCircle className="w-5 h-5 text-green-600" />
 Impermeabilização é Essencial
 </h3>
 <p className="text-gray-700">
 Nunca salte esta etapa. Uma boa impermeabilização evita infiltrações e problemas futuros.
 Invista em tela de qualidade e mão de obra especializada.
 </p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-md">
 <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
 <CheckCircle className="w-5 h-5 text-green-600" />
 Escolha Materiais Adequados ao Clima
 </h3>
 <p className="text-gray-700">
 Em Trás-os-Montes, os invernos são rigorosos. Opte por materiais resistentes ao frio e 
 considere isolamento térmico nas tubagens.
 </p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-md">
 <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
 <CheckCircle className="w-5 h-5 text-green-600" />
 Ventilação é Obrigatória
 </h3>
 <p className="text-gray-700">
 Instale extrator ou janela para evitar humidade e mofo. A ventilação adequada prolonga 
 a vida útil dos materiais.
 </p>
 </div>
 </div>
 </div>
 </section>
 {/* Prazo Total */}
 <section className="py-12 bg-gray-50">
 <div className="container max-w-3xl text-center">
 <h2 className="text-2xl font-black mb-4">Prazo Total de Instalação</h2>
 <p className="text-lg text-gray-700 mb-6">
 Uma casa de banho completa demora entre <strong>2 a 4 semanas</strong> desde o início 
 da demolição até aos acabamentos finais. O prazo pode variar conforme a complexidade 
 do projeto e disponibilidade de materiais.
 </p>
 </div>
 </section>
 {/* CTA */}
 <section className="py-16 bg-blue-600 text-white">
 <div className="container text-center">
 <Wrench className="w-16 h-16 mx-auto mb-6 opacity-80" />
 <h2 className="text-3xl font-black mb-4">
 Precisa de Orçamento para Casa de Banho?
 </h2>
 <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
 Fazemos instalações completas em <a href="/canalizador-macedo-de-cavaleiros" className="underline hover:no-underline">Trás-os-Montes</a>, 
 <a href="/canalizador-mirandela" className="underline hover:no-underline"> Mirandela</a> e toda a região. 
 Sem compromisso e sem compromisso.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
 <Phone className="w-6 h-6" />
 928 484 451
 </a>
 <a href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20orçamento%20para%20instalação%20de%20casa%20de%20banho." className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-800 transition-all shadow-lg">
 💬 WhatsApp
 </a>
 </div>
 </div>
 </section>
 {/* Artigos Relacionados */}
 <section className="py-16 bg-gray-50">
 <div className="container max-w-3xl">
 <h2 className="text-2xl font-black mb-6">Artigos Relacionados</h2>
 <div className="grid md:grid-cols-2 gap-6">
 <a href="/blog/sistema-aquecimento-agua-melhor-opcao" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-lg mb-2 text-blue-600">Esquentador, Caldeira ou Bomba de Calor?</h3>
 <p className="text-gray-600 text-sm">Compare as opções de aquecimento de água para a sua casa de banho.</p>
 </a>
 <a href="/blog/canalizacao-casa-antiga-renovacao" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-lg mb-2 text-blue-600">Renovação de Canalização em Casas Antigas</h3>
 <p className="text-gray-600 text-sm">Guia específico para casas antigas de Trás-os-Montes.</p>
 </a>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </div>
 );
}
