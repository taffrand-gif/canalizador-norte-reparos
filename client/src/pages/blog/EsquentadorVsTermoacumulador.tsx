import React from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import { useSEO } from '@/hooks/useSEO';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
const EsquentadorVsTermoacumulador: React.FC = () => {
 useSEO({
 title: 'Esquentador ou Termoacumulador? Qual Escolher para a Sua Casa | 2026',
 description: 'Comparativo completo entre esquentador e termoacumulador. Descubra qual a melhor opção para aquecer água na sua casa em Trás-os-Montes.',
 keywords: 'esquentador, termoacumulador, aquecimento água, qual melhor, esquentador vs termoacumulador'
 });
 return (
 <BlogLayout
 title="Esquentador ou Termoacumulador? Qual Escolher"
 description="Comparativo completo para ajudar a escolher o melhor sistema de aquecimento de água para a sua casa"
 >
 <article className="max-w-4xl mx-auto">
 {/* Meta info */}
 <div className="mb-8">
 <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
 <span className="px-3 py-1 bg-blue-100 text-blue-800 font-semibold rounded-full">
 Instalações
 </span>
 <span>⏱️ alguns minutos de leitura</span>
 <span>📅 14 Fev 2026</span>
 <span>👁️ 1.1K visualizações</span>
 </div>
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
 Esquentador ou Termoacumulador? Qual Escolher para a Sua Casa
 </h1>
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
 <span className="text-2xl">💧</span>
 </div>
 <div>
 <p className="font-semibold text-gray-900">Técnico Mendes</p>
 <p className="text-gray-600">canalizador com vasta experiência em Trás-os-Montes</p>
 </div>
 </div>
 </div>
 {/* Featured image */}
 <div className="mb-10 rounded-2xl overflow-hidden">
 <img
 src="/images-optimized/blog/esquentador-termoacumulador-detail.jpg"
 alt="Comparação entre esquentador e termoacumulador"
 className="w-full h-96 object-cover"
 loading="lazy"
 width={800}
 height={400}
 />
 <p className="text-sm text-gray-500 text-center mt-2">
 A escolha entre esquentador e termoacumulador depende das necessidades da sua casa
 </p>
 </div>
 {/* Introduction */}
 <div className="prose prose-lg max-w-none mb-10">
 <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
 <p className="text-blue-800 font-semibold text-lg">
 💡 Resumo rápido: O esquentador aquece água instantaneamente a gás, ideal para consumos variáveis. O termoacumulador armazena água quente num depósito, ideal para consumos previsíveis e grandes volumes.
 </p>
 </div>
 <p className="text-xl text-gray-700 mb-6">
 Escolher entre esquentador e termoacumulador é uma das decisões mais importantes para o conforto da sua casa. Em Trás-os-Montes, onde os invernos são rigorosos e a água da rede chega muito fria, esta escolha tem impacto direto no conforto e na fatura energética. Neste guia, comparamos as duas opções em detalhe para ajudá-lo a tomar a melhor decisão.
 </p>
 </div>
 {/* Table of contents */}
 <div className="bg-gray-50 rounded-2xl p-6 mb-10">
 <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Neste Artigo</h2>
 <ul className="space-y-2">
 <li><a href="#como-funciona" className="text-blue-600 hover:text-blue-700">1. Como Funciona Cada Sistema</a></li>
 <li><a href="#comparativo" className="text-blue-600 hover:text-blue-700">2. Comparativo Detalhado</a></li>
 <li><a href="#custos" className="text-blue-600 hover:text-blue-700">3. Custos de Compra e Operação</a></li>
 <li><a href="#qual-escolher" className="text-blue-600 hover:text-blue-700">4. Qual Escolher? Guia por Situação</a></li>
 <li><a href="#profissional" className="text-blue-600 hover:text-blue-700">5. Instalação Profissional</a></li>
 </ul>
 </div>
 {/* Content sections */}
 <div className="prose prose-lg max-w-none">
 <section id="como-funciona" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">1. 🔧 Como Funciona Cada Sistema</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
 <div className="bg-white p-6 rounded-xl border border-blue-200">
 <h3 className="font-bold text-blue-800 mb-3 text-xl">🔥 Esquentador</h3>
 <p className="text-gray-700 mb-4">Aquece a água instantaneamente quando abre a torneira, usando gás natural ou butano/propano.</p>
 <ul className="space-y-2 text-gray-700">
 <li>• Aquecimento instantâneo por chama de gás</li>
 <li>• Não armazena água — aquece em fluxo contínuo</li>
 <li>• Liga automaticamente ao abrir a torneira</li>
 <li>• Capacidade medida em litros/minuto</li>
 </ul>
 </div>
 <div className="bg-white p-6 rounded-xl border border-orange-200">
 <h3 className="font-bold text-orange-800 mb-3 text-xl">⚡ Termoacumulador</h3>
 <p className="text-gray-700 mb-4">Armazena água num depósito isolado e aquece-a com resistência elétrica ou serpentina.</p>
 <ul className="space-y-2 text-gray-700">
 <li>• Aquece e armazena água num depósito (30-200L</li>
 <li>• Funciona a eletricidade (ou solar</li>
 <li>• Água quente disponível mediante confirmação</li>
 <li>• Capacidade medida em litros de depósito</li>
 </ul>
 </div>
 </div>
 </section>
 <section id="comparativo" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">2. ⚖️ Comparativo Detalhado</h2>
 <div className="space-y-4">
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-3">Eficiência Energética</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div><span className="font-semibold text-blue-700">Esquentador:</span> Aquece apenas quando necessário — sem perdas por armazenamento. Eficiência ~85%.</div>
 <div><span className="font-semibold text-orange-700">Termoacumulador:</span> Perde calor mesmo sem uso (2-3°C/hora). Eficiência ~90% no aquecimento, mas com perdas de standby.</div>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-3">Conforto de Utilização</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div><span className="font-semibold text-blue-700">Esquentador:</span> Água ilimitada, mas pode demorar 10-20 segundos a aquecer. Caudal limitado se usar 2 pontos em simultâneo.</div>
 <div><span className="font-semibold text-orange-700">Termoacumulador:</span> Água quente imediata e com pressão constante. Limitado pela capacidade do depósito — pode acabar.</div>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-3">Espaço Necessário</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div><span className="font-semibold text-blue-700">Esquentador:</span> Compacto, montado na parede. Precisa de chaminé/exaustão para gases.</div>
 <div><span className="font-semibold text-orange-700">Termoacumulador:</span> Depósito volumoso (80L = ~80cm altura). Pode ser montado na parede ou no chão.</div>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-3">Manutenção</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div><span className="font-semibold text-blue-700">Esquentador:</span> Revisão anual obrigatória. Vida útil: 10-15 anos.</div>
 <div><span className="font-semibold text-orange-700">Termoacumulador:</span> Substituir ânodo a cada 2-3 anos. Vida útil: 8-12 anos.</div>
 </div>
 </div>
 </div>
 </section>
 <section id="custos" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">3. 💰 Custos de Compra e Operação</h2>
 <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
 <h3 className="font-bold text-gray-900 mb-3">Preços Indicativos (2026)</h3>
 <div className="space-y-3">
 <div className="border-b pb-3">
 <h4 className="font-semibold text-blue-700 mb-2">Esquentador</h4>
 <ul className="space-y-1 text-gray-700">
 <li className="flex justify-between"><span>Equipamento (11L)</span><span className="font-bold">200€ - 400€</span></li>
 <li className="flex justify-between"><span>Instalação profissional</span><span className="font-bold">80€ - 150€</span></li>
 <li className="flex justify-between"><span>Custo mensal (família 4 pessoas)</span><span className="font-bold">15€ - 25€ (gás)</span></li>
 </ul>
 </div>
 <div>
 <h4 className="font-semibold text-orange-700 mb-2">Termoacumulador</h4>
 <ul className="space-y-1 text-gray-700">
 <li className="flex justify-between"><span>Equipamento (80L)</span><span className="font-bold">150€ - 350€</span></li>
 <li className="flex justify-between"><span>Instalação profissional</span><span className="font-bold">60€ - 120€</span></li>
 <li className="flex justify-between"><span>Custo mensal (família 4 pessoas)</span><span className="font-bold">25€ - 45€ (eletricidade)</span></li>
 </ul>
 </div>
 </div>
 </div>
 <p>Em Trás-os-Montes, onde o gás natural não chega a muitas localidades, o esquentador funciona com botija de butano/propano, o que pode alterar os custos operacionais.</p>
 </section>
 <section id="qual-escolher" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">4. 🏠 Qual Escolher? Guia por Situação</h2>
 <div className="space-y-4">
 <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
 <h3 className="font-bold text-blue-800 mb-2">Escolha ESQUENTADOR se:</h3>
 <ul className="space-y-2 text-gray-700">
 <li className="flex items-center gap-2">✅ Tem acesso a gás natural ou usa botija</li>
 <li className="flex items-center gap-2">✅ Família grande com consumo variável</li>
 <li className="flex items-center gap-2">✅ Precisa de água quente ilimitada</li>
 <li className="flex items-center gap-2">✅ Tem espaço com ventilação para exaustão</li>
 <li className="flex items-center gap-2">✅ Quer custos operacionais mais baixos</li>
 </ul>
 </div>
 <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
 <h3 className="font-bold text-orange-800 mb-2">Escolha TERMOACUMULADOR se:</h3>
 <ul className="space-y-2 text-gray-700">
 <li className="flex items-center gap-2">✅ Não tem acesso a gás ou prefere evitá-lo</li>
 <li className="flex items-center gap-2">✅ Apartamento sem chaminé/exaustão</li>
 <li className="flex items-center gap-2">✅ Família pequena (1-2 pessoas</li>
 <li className="flex items-center gap-2">✅ Tem tarifa bi-horária (aquecer à noite</li>
 <li className="flex items-center gap-2">✅ Quer combinar com painéis solares térmicos</li>
 </ul>
 </div>
 </div>
 </section>
 <section id="profissional" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">5. 👨‍🔧 Instalação Profissional</h2>
 <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
 <p className="text-lg text-gray-700 mb-6">Tanto o esquentador como o termoacumulador devem ser instalados por um profissional com experiência. Uma instalação incorreta pode causar fugas de gás, fugas de água ou riscos elétricos.</p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="bg-white p-6 rounded-xl">
 <h4 className="font-bold text-gray-900 mb-3">🔥 Instalação Esquentador</h4>
 <ul className="space-y-2 text-gray-700">
 <li>• Ligação de gás certificada</li>
 <li>• Sistema de exaustão conforme normas</li>
 <li>• Teste de estanquidade</li>
 <li>• Regulação de temperatura e caudal</li>
 </ul>
 </div>
 <div className="bg-white p-6 rounded-xl">
 <h4 className="font-bold text-gray-900 mb-3">⚡ Instalação Termoacumulador</h4>
 <ul className="space-y-2 text-gray-700">
 <li>• Ligação elétrica dedicada</li>
 <li>• Fixação segura na parede</li>
 <li>• Válvula de segurança e expansão</li>
 <li>• Regulação do termostato</li>
 </ul>
 </div>
 </div>
 <div className="mt-8 text-center">
 <p className="text-xl text-gray-900 mb-6">Precisa de ajuda para escolher ou instalar?</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href={`tel:${ACTIVE_CONFIG.phone}`} className="bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors">📞 Ligar para Canalizador</a>
 <a href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=Olá, preciso de ajuda para escolher esquentador ou termoacumulador`} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-700 font-bold text-lg px-8 py-4 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-colors">💬 WhatsApp Rápido</a>
 </div>
 </div>
 </div>
 </section>
 </div>
 {/* FAQ Section */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">❓ Perguntas Frequentes</h2>
 <div className="space-y-6">
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-2">Qual gasta menos: esquentador ou termoacumulador?</h3>
 <p className="text-gray-700">Geralmente, o esquentador a gás natural é mais económico no dia a dia. No entanto, se tiver tarifa bi-horária e programar o termoacumulador para aquecer apenas nas horas de vazio, os custos podem ser semelhantes. Com painéis solares, o termoacumulador torna-se a opção mais económica.</p>
 </div>
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-2">Que capacidade de termoacumulador preciso?</h3>
 <p className="text-gray-700">Como regra geral: 30-50L para 1 pessoa, 80L para 2 pessoas, 100-150L para 3-4 pessoas, e 200L ou mais para famílias grandes. Em Trás-os-Montes, como a água chega mais fria, recomendamos capacidades ligeiramente superiores.</p>
 </div>
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-2">Posso substituir o esquentador por termoacumulador (ou vice-versa)?</h3>
 <p className="text-gray-700">Sim, é possível. A substituição requer adaptação das ligações (gás para eletricidade ou vice-versa) e deve ser feita por um profissional. O custo da conversão varia entre 200€ e 400€, além do equipamento novo.</p>
 </div>
 </div>
 <script type="application/ld+json">
 {JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 { "@type": "Question", "name": "Qual gasta menos: esquentador ou termoacumulador?", "acceptedAnswer": { "@type": "Answer", "text": "Geralmente, o esquentador a gás natural é mais económico no dia a dia. No entanto, se tiver tarifa bi-horária e programar o termoacumulador para aquecer apenas nas horas de vazio, os custos podem ser semelhantes. Com painéis solares, o termoacumulador torna-se a opção mais económica." } },
 { "@type": "Question", "name": "Que capacidade de termoacumulador preciso?", "acceptedAnswer": { "@type": "Answer", "text": "Como regra geral: 30-50L para 1 pessoa, 80L para 2 pessoas, 100-150L para 3-4 pessoas, e 200L ou mais para famílias grandes. Em Trás-os-Montes, como a água chega mais fria, recomendamos capacidades ligeiramente superiores." } },
 { "@type": "Question", "name": "Posso substituir o esquentador por termoacumulador (ou vice-versa)?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, é possível. A substituição requer adaptação das ligações e deve ser feita por um profissional. O custo da conversão varia entre 200€ e 400€, além do equipamento novo." } }
 ]
 })}
 </script>
 </section>
 {/* Author bio */}
 <div className="bg-gray-50 rounded-2xl p-8 mt-12">
 <div className="flex flex-col md:flex-row gap-6 items-center">
 <div className="md:w-1/4">
 <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center mx-auto">
 <span className="text-5xl">👨‍🔧</span>
 </div>
 </div>
 <div className="md:w-3/4">
 <h3 className="text-2xl font-bold text-gray-900 mb-2">Sobre o Autor</h3>
 <p className="text-gray-700 mb-4">
 <strong>Técnico Mendes</strong> é canalizador com vasta experiência em Trás-os-Montes. Especialista em instalação e manutenção de sistemas de aquecimento de água, já instalou centenas de esquentadores e termoacumuladores na região.
 </p>
 <p className="text-gray-600">Para questões técnicas ou orçamentos, contacte através do telefone ou WhatsApp acima.</p>
 </div>
 </div>
 </div>
 </article>
 </BlogLayout>
 );
};
export default EsquentadorVsTermoacumulador;
