import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useEffect } from 'react';

const faqItems = [
 { question: "Com que frequência devo fazer manutenção à caldeira?", answer: "A manutenção anual é obrigatória por lei para caldeiras a gás. Inclui limpeza do queimador, verificação de segurança e análise de combustão. Prolonga a vida útil e reduz o consumo de gás." },
 { question: "Qual a diferença entre esquentador e caldeira?", answer: "O esquentador aquece água instantaneamente apenas quando abre a torneira. A caldeira aquece água e armazena num depósito, podendo também alimentar radiadores de aquecimento central." },
 { question: "Quanto custa substituir um esquentador antigo?", answer: "A substituição de um esquentador custa entre €400 e €800, incluindo equipamento e instalação. Esquentadores modernos são mais eficientes e podem reduzir a conta de gás em 20-30%." }
];

export default function ArranjacaoCaldeiraEsquentadorManutencao() {
 useEffect(() => {
 document.title = "Arranjo de Caldeira e Esquentador: Guia Completo de Manutenção | Norte Reparos";
 let meta = document.querySelector('meta[name="description"]');
 if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
 meta.setAttribute('content', 'Guia completo sobre arranjo e manutenção de caldeiras e esquentadores em Trás-os-Montes. Dicas, preços, quando arranjar vs substituir. Norte Reparos 24h.');
 }, []);

 return (
 <>
 <Header />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
 "@context": "https://schema.org", "@type": "Article",
 "headline": "Arranjo de Caldeira e Esquentador: Guia Completo de Manutenção",
 "author": { "@type": "Organization", "name": "Norte Reparos" },
 "datePublished": "2026-02-18", "dateModified": "2026-02-18"
 }) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
 "@context": "https://schema.org", "@type": "FAQPage",
 "mainEntity": faqItems.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } }))
 }) }} />

 <article className="max-w-4xl mx-auto px-4 py-12">
 <header className="mb-12">
 <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Guia Completo</span>
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Arranjo de Caldeira e Esquentador: Guia Completo de Manutenção</h1>
 <p className="text-xl text-gray-600">Tudo o que precisa saber sobre manutenção, arranjo e substituição de caldeiras e esquentadores em Trás-os-Montes.</p>
 <div className="mt-4 text-sm text-gray-500">Publicado em 18 de fevereiro de 2026 · Leitura de 5 minutos</div>
 </header>

 <section className="prose prose-lg max-w-none">
 <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Porque é Importante a Manutenção Regular?</h2>
 <p className="text-gray-700 mb-4">A manutenção regular do esquentador e da caldeira não é apenas uma questão de conforto — é uma questão de segurança. Equipamentos mal mantidos podem causar fugas de monóxido de carbono, um gás inodoro e potencialmente fatal.</p>
 <p className="text-gray-700 mb-4">Em Trás-os-Montes, onde os invernos são rigorosos e as temperaturas podem descer abaixo de zero, ter água quente e aquecimento funcional é essencial. Uma avaria no pico do inverno pode ser mais do que um incómodo — pode ser um risco para a saúde.</p>

 <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sinais de que o Seu Esquentador Precisa de Arranjo</h2>
 <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
 <li><strong>Água não aquece o suficiente</strong> — pode indicar problemas no queimador ou no permutador de calor</li>
 <li><strong>Chama amarela ou laranja</strong> — a chama deve ser azul; cores diferentes indicam combustão incompleta</li>
 <li><strong>Ruídos estranhos</strong> — estalos, assobios ou vibrações podem indicar calcário acumulado</li>
 <li><strong>Cheiro a gás</strong> — desligue imediatamente e contacte um profissional</li>
 <li><strong>Fugas de água</strong> — gotas ou humidade à volta do equipamento</li>
 <li><strong>Consumo de gás elevado</strong> — perda de eficiência por falta de manutenção</li>
 </ul>

 <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Arranjar ou Substituir? Como Decidir</h2>
 <p className="text-gray-700 mb-4">A regra geral é simples: se o custo da arranjo ultrapassa 50% do preço de um equipamento novo, é melhor substituir. Outros fatores a considerar:</p>
 <div className="grid md:grid-cols-2 gap-6 my-6">
 <div className="p-6 bg-green-50 rounded-xl border border-green-200">
 <h3 className="font-bold text-green-800 mb-2">✅ Arranjar quando:</h3>
 <ul className="text-green-700 space-y-1 text-sm">
 <li>• Equipamento tem menos de 10 anos</li>
 <li>• Primeira avaria</li>
 <li>• Peças disponíveis</li>
 <li>• Custo inferior a €200</li>
 </ul>
 </div>
 <div className="p-6 bg-orange-50 rounded-xl border border-orange-200">
 <h3 className="font-bold text-orange-800 mb-2">🔄 Substituir quando:</h3>
 <ul className="text-orange-700 space-y-1 text-sm">
 <li>• Equipamento tem mais de 15 anos</li>
 <li>• Avarias frequentes</li>
 <li>• Peças descontinuadas</li>
 <li>• Consumo excessivo de gás</li>
 </ul>
 </div>
 </div>

 <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Preços de Referência em Trás-os-Montes</h2>
 <div className="overflow-x-auto mb-6">
 <div className="grid md:grid-cols-2 gap-4">
 {[
 { service: "Manutenção anual esquentador", price: "€80 - €120" },
 { service: "Manutenção anual caldeira", price: "€100 - €150" },
 { service: "Arranjo avaria simples", price: "€100 - €200" },
 { service: "Substituição esquentador", price: "€400 - €800" },
 { service: "Substituição caldeira", price: "€800 - €2.000" },
 { service: "Limpeza de calcário", price: "€80 - €150" }
 ].map((item, i) => (
 <div key={i} className="flex justify-between p-4 bg-gray-50 rounded-lg">
 <span className="text-gray-700">{item.service}</span>
 <span className="font-bold text-blue-600">{item.price}</span>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="mt-12">
 <h2 className="text-2xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h2>
 <div className="space-y-4">
 {faqItems.map((item, i) => (
 <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-2">{item.question}</h3>
 <p className="text-gray-600">{item.answer}</p>
 </div>
 ))}
 </div>
 </section>

 {/* CTA */}
 <section className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-white text-center">
 <h2 className="text-2xl font-bold mb-4">Precisa de Arranjo de Esquentador ou Caldeira?</h2>
 <p className="mb-6">Contacte a Norte Reparos para diagnóstico e arranjo rápida em Trás-os-Montes.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href={`tel:${ACTIVE_CONFIG.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-colors">📞 {ACTIVE_CONFIG.phone}</a>
 <a href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`} className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3 rounded-lg transition-colors">💬 WhatsApp</a>
 </div>
 </section>

 {/* Related */}
 <section className="mt-12">
 <h3 className="text-xl font-bold text-gray-900 mb-4">Artigos Relacionados</h3>
 <div className="grid md:grid-cols-3 gap-4">
 {[
 { title: "Manutenção de Esquentador: Guia", href: "/blog/manutencao-esquentador-guia" },
 { title: "Esquentador vs Termoacumulador", href: "/blog/esquentador-vs-termoacumulador" },
 { title: "Sinais de Fugas de Água Escondidas", href: "/blog/sinais-fugas-agua-escondidas" }
 ].map((article, i) => (
 <a key={i} href={article.href} className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
 <h4 className="font-semibold text-blue-600">{article.title}</h4>
 </a>
 ))}
 </div>
 </section>
 </article>
 <Footer />
 </>
 );
}
