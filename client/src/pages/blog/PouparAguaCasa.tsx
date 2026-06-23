// Blog article: "Como Poupar Água em Casa: 12 Dicas Práticas para 2026"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, Droplets, CheckCircle, TrendingDown, Euro } from 'lucide-react';
export default function PouparAguaCasa() {
 useEffect(() => {
 document.title = "Como Poupar Água em Casa: 12 Dicas Práticas para 2026";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', '12 dicas práticas para poupar água em casa: torneiras económicas, recuperação de água da chuva, hábitos simples. Poupe até 40% na conta.');
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/blog/poupar-agua-casa-dicas-praticas');
 // JSON-LD Article Schema
 const script = document.createElement('script');
 script.type = 'application/ld+json';
 script.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Como Poupar Água em Casa: 12 Dicas Práticas para 2026",
 "description": "Dicas práticas e eficazes para reduzir consumo de água e poupar dinheiro na conta mensal.",
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
 const faqScript = document.createElement('script');
 faqScript.type = 'application/ld+json';
 faqScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 { "@type": "Question", "name": "Quanto poupo ao instalar arejadores nas torneiras?", "acceptedAnswer": { "@type": "Answer", "text": "Os arejadores são a solução mais barata e eficaz — 5-15€ por torneira e podem reduzir o consumo até 50%, baixando o caudal de 12L/min para 6L/min sem perder pressão. O investimento amortiza em poucas semanas." } },
 { "@type": "Question", "name": "Quanto desperdiça uma torneira a pingar?", "acceptedAnswer": { "@type": "Answer", "text": "Uma torneira a pingar 1 gota por segundo desperdiça 25 litros por dia — mais de 9.000 litros por ano. Uma fuga no autoclismo pode desperdiçar até 200 litros diários. Reparar fugas é a medida de maior impacto na conta de água." } },
 { "@type": "Question", "name": "Qual a diferença de consumo entre banho e duche?", "acceptedAnswer": { "@type": "Answer", "text": "Banho de imersão: 150-200 litros. Duche de 5 minutos: 50-60 litros. Uma família de 4 pessoas que substitui um banho semanal por duche poupa mais de 20.000 litros por ano." } },
 { "@type": "Question", "name": "Vale a pena instalar recuperação de água da chuva em Trás-os-Montes?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Em Trás-os-Montes chovem 800-1.000mm por ano. Um sistema básico (200-800€) fornece água para rega, lavar carro e autoclismo, poupando 30-50% do consumo nessas utilizações. O retorno é entre 2 e 5 anos." } },
 { "@type": "Question", "name": "Autoclismo moderno poupa mesmo água?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, significativamente. Autoclismos antigos gastam 12-15 litros por descarga. Os modelos com dupla descarga usam apenas 3 ou 6 litros. Uma família de 4 pessoas pode poupar mais de 6.000 litros por mês — o equivalente a 72.000 litros por ano." } }
 ]
 });
 document.head.appendChild(faqScript);
 }, []);
 const dicas = [
 {
 numero: 1,
 titulo: "Instale Torneiras com Arejador",
 poupanca: "Até 50% por torneira",
 custo: "€5-15 por torneira",
 descricao: "Mistura ar com água, mantendo pressão mas reduzindo consumo de 12L/min para 6L/min.",
 dificuldade: "Fácil (DIY)"
 },
 {
 numero: 2,
 titulo: "Substitua Autoclismos Antigos",
 poupanca: "6.000L/mês (família 4 pessoas)",
 custo: "€80-200",
 descricao: "Autoclismos antigos gastam 12-15L por descarga. Modernos usam 3/6L (dupla descarga).",
 dificuldade: "Média (recomenda-se canalizador)"
 },
 {
 numero: 3,
 titulo: "Repare Fugas Imediatamente",
 poupanca: "Até 10.000L/mês",
 custo: "€50-200",
 descricao: "Uma torneira a pingar 1 gota/segundo desperdiça 25L/dia. Fuga no autoclismo pode chegar a 200L/dia.",
 dificuldade: "Varia"
 },
 {
 numero: 4,
 titulo: "Duches em Vez de Banhos",
 poupanca: "100L por banho",
 custo: "€0",
 descricao: "Banho de imersão: 150-200L. Duche de alguns minutos: 50-60L. Reduza tempo de duche para alguns minutos.",
 dificuldade: "Fácil (mudança de hábito)"
 },
 {
 numero: 5,
 titulo: "Instale Chuveiro Económico",
 poupanca: "40% no duche",
 custo: "€20-60",
 descricao: "Reduz caudal de 12L/min para 7L/min sem perder conforto. Amortiza em 2-3 meses.",
 dificuldade: "Fácil (DIY)"
 },
 {
 numero: 6,
 titulo: "Lave Roupa e Loiça com Carga Completa",
 poupanca: "3.000L/mês",
 custo: "€0",
 descricao: "Máquina de lavar roupa gasta 40-60L por ciclo. ter carga completa antes de lavar.",
 dificuldade: "Fácil (mudança de hábito)"
 },
 {
 numero: 7,
 titulo: "Feche Torneira ao Lavar Dentes/Barbear",
 poupanca: "12L por dia/pessoa",
 custo: "€0",
 descricao: "Torneira aberta alguns minutos = 24L desperdiçados. Use copo para enxaguar.",
 dificuldade: "Fácil (mudança de hábito)"
 },
 {
 numero: 8,
 titulo: "Reutilize Água da Chuva",
 poupanca: "30-50% em rega",
 custo: "€200-800 (sistema básico)",
 descricao: "Instale caleiras e depósito. Use para rega, lavar carro, autoclismo. Em Trás-os-Montes, chove 800-1000mm/ano.",
 dificuldade: "Média (requer instalação)"
 },
 {
 numero: 9,
 titulo: "Lave Carro com Balde",
 poupanca: "300L por lavagem",
 custo: "€0",
 descricao: "Mangueira aberta alguns minutos = 400L. Balde + esponja = 100L. Ou use lavagem automática (recicla água).",
 dificuldade: "Fácil (mudança de hábito)"
 },
 {
 numero: 10,
 titulo: "Regue Jardim de Manhã Cedo",
 poupanca: "30% em rega",
 custo: "€0",
 descricao: "Menos evaporação. Evite regar ao meio-dia. Use sistema gota-a-gota para maior eficiência.",
 dificuldade: "Fácil (mudança de hábito)"
 },
 {
 numero: 11,
 titulo: "Instale Válvula Redutora de Pressão",
 poupanca: "15-20% geral",
 custo: "€40-100",
 descricao: "Pressão acima de 3 bar desperdiça água. Redutor ajusta para 2-2,5 bar (ideal).",
 dificuldade: "Média (requer canalizador)"
 },
 {
 numero: 12,
 titulo: "Use Máquinas Eficientes (A+++)",
 poupanca: "40% vs modelos antigos",
 custo: "€300-800",
 descricao: "Máquinas modernas gastam 40-50L (vs 80-100L antigas). Amortiza em 3-5 anos.",
 dificuldade: "Fácil (compra)"
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
 💧 GUIA PRÁTICO 2026
 </span>
 <h1 className="text-4xl md:text-5xl font-black mb-6">
 Como Poupar Água em Casa
 </h1>
 <p className="text-xl opacity-90">
 12 dicas práticas para reduzir consumo até 40% e poupar centenas de euros por ano.
 </p>
 </div>
 </div>
 </section>
 {/* Introdução */}
 <section className="py-12">
 <div className="container max-w-3xl">
 <div className="prose prose-lg max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed">
 Em <a href="/canalizador-vila-real" className="text-blue-600 hover:underline">Vila Real</a>, 
 <a href="/canalizador-braganca" className="text-blue-600 hover:underline"> Bragança</a> e 
 <a href="/canalizador-chaves" className="text-blue-600 hover:underline"> Chaves</a>, uma família de 4 pessoas 
 gasta em média <strong>12-15m³ de água por mês</strong> (€30-50 na conta). Com pequenas mudanças, 
 pode reduzir para 8-10m³ e poupar <strong>€150-250 por ano</strong>.
 </p>
 <p className="text-lg text-gray-700 leading-relaxed mt-4">
 Além da poupança financeira, reduzir consumo de água ajuda o ambiente e garante 
 disponibilidade em períodos de seca (cada vez mais comuns).
 </p>
 </div>
 </div>
 </section>
 {/* Estatísticas */}
 <section className="py-12 bg-blue-50">
 <div className="container max-w-3xl">
 <h2 className="text-2xl font-black mb-6 text-center">Onde Gastamos Água em Casa?</h2>
 <div className="grid md:grid-cols-2 gap-6">
 <div className="bg-white p-6 rounded-xl shadow-md">
 <div className="flex justify-between items-center mb-2">
 <span className="font-bold">Casa de Banho</span>
 <span className="text-2xl font-black text-blue-600">65%</span>
 </div>
 <div className="text-sm text-gray-600">
 Autoclismo (30%), duche (25%), lavatório (10%)
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-md">
 <div className="flex justify-between items-center mb-2">
 <span className="font-bold">Máquina Lavar Roupa</span>
 <span className="text-2xl font-black text-blue-600">15%</span>
 </div>
 <div className="text-sm text-gray-600">
 40-60L por ciclo, 8-10 ciclos/mês
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-md">
 <div className="flex justify-between items-center mb-2">
 <span className="font-bold">Cozinha</span>
 <span className="text-2xl font-black text-blue-600">10%</span>
 </div>
 <div className="text-sm text-gray-600">
 Lavar loiça, cozinhar, beber
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-md">
 <div className="flex justify-between items-center mb-2">
 <span className="font-bold">Rega e Exterior</span>
 <span className="text-2xl font-black text-blue-600">10%</span>
 </div>
 <div className="text-sm text-gray-600">
 Jardim, lavar carro, piscina
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* 12 Dicas */}
 <section className="py-16">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-8 text-center">12 Dicas para Poupar Água</h2>
 <div className="space-y-6">
 {dicas.map((dica) => (
 <div key={dica.numero} className="bg-white rounded-xl shadow-lg overflow-hidden">
 <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
 <div className="flex items-center gap-3">
 <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl">
 {dica.numero}
 </span>
 <h3 className="text-xl font-bold">{dica.titulo}</h3>
 </div>
 </div>
 <div className="p-6">
 <p className="text-gray-700 mb-4">{dica.descricao}</p>
 <div className="grid md:grid-cols-3 gap-4 text-sm">
 <div className="flex items-center gap-2">
 <TrendingDown className="w-5 h-5 text-green-600" />
 <div>
 <div className="text-xs text-gray-600">Poupança</div>
 <div className="font-bold text-green-600">{dica.poupanca}</div>
 </div>
 </div>
 <div className="flex items-center gap-2">
 <Euro className="w-5 h-5 text-blue-600" />
 <div>
 <div className="text-xs text-gray-600">Custo</div>
 <div className="font-bold text-blue-600">{dica.custo}</div>
 </div>
 </div>
 <div className="flex items-center gap-2">
 <CheckCircle className="w-5 h-5 text-orange-600" />
 <div>
 <div className="text-xs text-gray-600">Dificuldade</div>
 <div className="font-bold text-orange-600">{dica.dificuldade}</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* Simulação de Poupança */}
 <section className="py-16 bg-gray-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6 text-center">Quanto Pode Poupar?</h2>
 <div className="bg-white rounded-xl p-6 shadow-lg">
 <p className="text-gray-700 mb-6">
 Simulação para família de 4 pessoas em <a href="/canalizador-macedo-de-cavaleiros" className="text-blue-600 hover:underline">Trás-os-Montes</a>:
 </p>
 <div className="space-y-4">
 <div className="flex justify-between items-center pb-4 border-b">
 <span>Consumo atual (15m³/mês)</span>
 <span className="text-xl font-bold text-red-600">€45/mês</span>
 </div>
 <div className="text-sm text-gray-600 space-y-2">
 <div className="flex justify-between">
 <span>✅ Torneiras com arejador (-20%)</span>
 <span className="font-bold text-green-600">-€9</span>
 </div>
 <div className="flex justify-between">
 <span>✅ Autoclismo dupla descarga (-15%)</span>
 <span className="font-bold text-green-600">-€7</span>
 </div>
 <div className="flex justify-between">
 <span>✅ Duches mais curtos (-10%)</span>
 <span className="font-bold text-green-600">-€5</span>
 </div>
 <div className="flex justify-between">
 <span>✅ Arranjar fugas (-5%)</span>
 <span className="font-bold text-green-600">-€2</span>
 </div>
 </div>
 <div className="flex justify-between items-center pt-4 border-t">
 <span className="font-bold text-lg">Novo consumo (7,5m³/mês)</span>
 <span className="text-2xl font-black text-green-600">€22/mês</span>
 </div>
 <div className="bg-green-50 p-4 rounded-lg text-center">
 <p className="text-sm text-gray-700 mb-2">Poupança Anual</p>
 <p className="text-3xl font-black text-green-600">€276/ano</p>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* Recuperação Água da Chuva */}
 <section className="py-16 bg-blue-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6 text-center">Recuperação de Água da Chuva</h2>
 <div className="bg-white rounded-xl p-6 shadow-lg">
 <p className="text-gray-700 mb-4">
 Em Trás-os-Montes, a precipitação média é <strong>800-1000mm/ano</strong>. Uma casa com 
 telhado de 100m² pode recolher <strong>80.000-100.000 litros/ano</strong>.
 </p>
 <h3 className="font-bold text-lg mb-3">Sistema Básico (€200-400):</h3>
 <ul className="space-y-2 mb-6">
 <li className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
 <span>Caleiras e tubos de descida</span>
 </li>
 <li className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
 <span>Filtro de folhas</span>
 </li>
 <li className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
 <span>Depósito 500-1000L</span>
 </li>
 <li className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
 <span>Torneira de saída</span>
 </li>
 </ul>
 <h3 className="font-bold text-lg mb-3">Usos Permitidos:</h3>
 <div className="grid md:grid-cols-2 gap-4">
 <div className="bg-green-50 p-3 rounded-lg">
 <p className="font-bold text-green-700 mb-1">✅ Permitido</p>
 <ul className="text-sm space-y-1">
 <li>• Rega de jardim</li>
 <li>• Lavar carro</li>
 <li>• Autoclismo</li>
 <li>• Lavar pavimentos</li>
 </ul>
 </div>
 <div className="bg-red-50 p-3 rounded-lg">
 <p className="font-bold text-red-700 mb-1">❌ Não Permitido</p>
 <ul className="text-sm space-y-1">
 <li>• Beber</li>
 <li>• Cozinhar</li>
 <li>• Duche/banho</li>
 <li>• Lavar roupa</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* CTA */}
 <section className="py-16 bg-blue-600 text-white">
 <div className="container text-center">
 <Droplets className="w-16 h-16 mx-auto mb-6 opacity-80" />
 <h2 className="text-3xl font-black mb-4">
 Quer Instalar Equipamentos para Poupar Água?
 </h2>
 <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
 Instalamos torneiras económicas, autoclismos dupla descarga, sistemas de recuperação de água 
 da chuva e muito mais em <a href="/canalizador-mirandela" className="underline hover:no-underline">Mirandela</a>, 
 <a href="/canalizador-braganca" className="underline hover:no-underline"> Bragança</a> e toda a região.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
 <Phone className="w-6 h-6" />
 928 484 451
 </a>
 <a href="https://wa.me/351928484451?text=Olá,%20quero%20instalar%20equipamentos%20para%20poupar%20água." className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-800 transition-all shadow-lg">
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
 <a href="/blog/sinais-fugas-agua-escondidas" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-lg mb-2 text-blue-600">Sinais de Fugas de Água</h3>
 <p className="text-gray-600 text-sm">Detetar fugas é a forma mais eficaz de poupar água.</p>
 </a>
 <a href="/blog/piscina-tanque-agua-canalizacao" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-lg mb-2 text-blue-600">Canalização para Piscinas e Tanques</h3>
 <p className="text-gray-600 text-sm">Sistemas eficientes para uso exterior de água.</p>
 </a>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </div>
 );
}
