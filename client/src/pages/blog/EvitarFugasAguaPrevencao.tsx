import React from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import { useSEO } from '@/hooks/useSEO';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
const EvitarFugasAguaPrevencao: React.FC = () => {
 useSEO({
 title: 'Como Evitar Fugas de Água — Guia Completo de Prevenção | 2026',
 description: 'Aprenda a prevenir fugas de água em casa com este guia completo. Dicas de manutenção preventiva para proteger a sua canalização em Trás-os-Montes.',
 keywords: 'fugas de água, prevenção canalização, manutenção tubagens, evitar fugas água, canalização preventiva'
 });
 return (
 <BlogLayout
 title="Como Evitar Fugas de Água — Guia Completo de Prevenção"
 description="Guia prático para prevenir fugas de água e proteger a canalização da sua casa"
 >
 <article className="max-w-4xl mx-auto">
 {/* Meta info */}
 <div className="mb-8">
 <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
 <span className="px-3 py-1 bg-blue-100 text-blue-800 font-semibold rounded-full">
 Manutenção Preventiva
 </span>
 <span>⏱️ alguns minutos de leitura</span>
 <span>📅 14 Fev 2026</span>
 <span>👁️ 920 visualizações</span>
 </div>
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
 Como Evitar Fugas de Água — Guia Completo de Prevenção
 </h1>
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
 <span className="text-2xl">💧</span>
 </div>
 <div>
 <p className="font-semibold text-gray-900">Técnico Mendes</p>
 <p className="text-gray-600">Canalizador Certificado com experiência em Trás-os-Montes</p>
 </div>
 </div>
 </div>
 {/* Featured image */}
 <div className="mb-10 rounded-2xl overflow-hidden">
 <img
 src="/images-optimized/blog/fugas-agua-prevencao-detail.jpg"
 alt="Prevenção de fugas de água na canalização"
 className="w-full h-96 object-cover"
 loading="lazy"
 width={800}
 height={400}
 />
 <p className="text-sm text-gray-500 text-center mt-2">
 A manutenção preventiva é a melhor forma de evitar fugas de água dispendiosas
 </p>
 </div>
 {/* Introduction */}
 <div className="prose prose-lg max-w-none mb-10">
 <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
 <p className="text-blue-800 font-semibold text-lg">
 💡 Sabia que? Uma fuga de água de apenas 1 gota por segundo desperdiça mais de 10.000 litros por ano — o equivalente a 50€-80€ na fatura da água.
 </p>
 </div>
 <p className="text-xl text-gray-700 mb-6">
 As fugas de água são um dos problemas mais comuns e dispendiosos em qualquer habitação. Em Trás-os-Montes, onde muitas casas têm canalização com décadas, a prevenção é ainda mais importante. Neste guia completo, explicamos como identificar riscos, fazer manutenção preventiva e proteger a sua casa contra fugas de água.
 </p>
 </div>
 {/* Table of contents */}
 <div className="bg-gray-50 rounded-2xl p-6 mb-10">
 <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Neste Artigo</h2>
 <ul className="space-y-2">
 <li><a href="#causas" className="text-blue-600 hover:text-blue-700">1. Principais Causas de Fugas de Água</a></li>
 <li><a href="#sinais" className="text-blue-600 hover:text-blue-700">2. Sinais de Alerta a Vigiar</a></li>
 <li><a href="#prevencao" className="text-blue-600 hover:text-blue-700">3. 8 Medidas de Prevenção Essenciais</a></li>
 <li><a href="#inverno" className="text-blue-600 hover:text-blue-700">4. Proteção Contra o Gelo no Inverno</a></li>
 <li><a href="#profissional" className="text-blue-600 hover:text-blue-700">5. Quando Chamar um Canalizador</a></li>
 </ul>
 </div>
 {/* Content sections */}
 <div className="prose prose-lg max-w-none">
 <section id="causas" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">1. 🔍 Principais Causas de Fugas de Água</h2>
 <p>Compreender as causas ajuda a prevenir. As fugas de água mais comuns resultam de:</p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-3">Desgaste Natural</h3>
 <ul className="space-y-2 text-gray-700">
 <li className="flex items-center gap-2">• Corrosão de tubagens metálicas</li>
 <li className="flex items-center gap-2">• Degradação de vedantes e juntas</li>
 <li className="flex items-center gap-2">• Calcário que danifica válvulas</li>
 <li className="flex items-center gap-2">• Envelhecimento de tubos de borracha</li>
 </ul>
 </div>
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-3">Fatores Externos</h3>
 <ul className="space-y-2 text-gray-700">
 <li className="flex items-center gap-2">• Pressão excessiva da rede</li>
 <li className="flex items-center gap-2">• Congelamento no inverno</li>
 <li className="flex items-center gap-2">• Movimentos do terreno</li>
 <li className="flex items-center gap-2">• Instalação deficiente</li>
 </ul>
 </div>
 </div>
 </section>
 <section id="sinais" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">2. ⚠️ Sinais de Alerta a Vigiar</h2>
 <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
 <h3 className="font-bold text-red-800 text-lg mb-2">Sinais que indicam fuga de água oculta:</h3>
 <ul className="text-red-700 space-y-1">
 <li>• Manchas de humidade em paredes ou tetos</li>
 <li>• Fatura da água anormalmente alta</li>
 <li>• Cheiro a mofo ou bolor persistente</li>
 <li>• Contador da água a rodar com tudo fechado</li>
 <li>• Tinta a descascar ou bolhas nas paredes</li>
 <li>• Pavimento que levanta ou incha</li>
 </ul>
 </div>
 <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
 <h3 className="font-bold text-blue-800 text-lg mb-2">Teste simples para detetar fugas:</h3>
 <p className="text-blue-700">Feche todas as torneiras e aparelhos que usam água. Anote o valor do contador. 2 horas sem usar água. Se o contador avançou, tem uma fuga.</p>
 </div>
 </section>
 <section id="prevencao" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">3. 🛡️ 8 Medidas de Prevenção Essenciais</h2>
 <div className="space-y-4">
 <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
 <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
 <div>
 <p className="font-semibold">Inspeção visual regular</p>
 <p className="text-gray-600">Verifique mensalmente debaixo dos lavatórios, atrás das sanitas e junto ao esquentador/caldeira. Procure gotas, humidade ou manchas.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
 <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
 <div>
 <p className="font-semibold">Substituir vedantes e anilhas</p>
 <p className="text-gray-600">Torneiras que pingam geralmente precisam apenas de uma anilha nova (custo: 1-3€). Não ignore — o desperdício acumula.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
 <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
 <div>
 <p className="font-semibold">Controlar a pressão da água</p>
 <p className="text-gray-600">A pressão ideal é entre 3 e 4 bar. Pressão acima de 5 bar danifica tubagens e juntas. Instale um redutor de pressão se necessário.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
 <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</span>
 <div>
 <p className="font-semibold">Manter os tubos de máquinas em bom estado</p>
 <p className="text-gray-600">Os tubos de borracha das máquinas de lavar devem ser substituídos a cada 5 anos. Prefira tubos com malha de aço inox.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
 <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">5</span>
 <div>
 <p className="font-semibold">Não deitar gordura nos canos</p>
 <p className="text-gray-600">A gordura solidifica e cria obstruções que aumentam a pressão interna, podendo causar fugas nas juntas.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
 <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">6</span>
 <div>
 <p className="font-semibold">Saber onde está a torneira geral</p>
 <p className="text-gray-600">Em caso de fuga grave, fechar a torneira geral rapidamente pode evitar milhares de euros em danos. Certifique-se de que funciona bem.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
 <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">7</span>
 <div>
 <p className="font-semibold">Manutenção anual do esquentador/caldeira</p>
 <p className="text-gray-600">A revisão anual previne fugas no circuito de água quente e prolonga a vida útil do equipamento.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
 <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">8</span>
 <div>
 <p className="font-semibold">Revisão profissional a cada 5 anos</p>
 <p className="text-gray-600">Um canalizador pode detetar problemas invisíveis com câmara de inspeção e teste de pressão, prevenindo fugas antes de acontecerem.</p>
 </div>
 </div>
 </div>
 </section>
 <section id="inverno" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">4. ❄️ Proteção Contra o Gelo no Inverno</h2>
 <p>Em Trás-os-Montes, as temperaturas negativas no inverno são frequentes, especialmente em Bragança, Montalegre e zonas de altitude. A água congelada expande e pode rebentar tubagens.</p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-3">Antes do Inverno</h3>
 <ul className="space-y-2 text-gray-700">
 <li className="flex items-center gap-2">✅ Isolar tubos exteriores com espuma</li>
 <li className="flex items-center gap-2">✅ Drenar torneiras de jardim</li>
 <li className="flex items-center gap-2">✅ Verificar isolamento do contador</li>
 <li className="flex items-center gap-2">✅ Arranjar torneiras que pingam</li>
 </ul>
 </div>
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-3">Durante Vagas de Frio</h3>
 <ul className="space-y-2 text-gray-700">
 <li className="flex items-center gap-2">✅ Deixar uma torneira a pingar levemente</li>
 <li className="flex items-center gap-2">✅ Manter aquecimento mínimo à noite</li>
 <li className="flex items-center gap-2">✅ Abrir portas de armários sob lavatórios</li>
 <li className="flex items-center gap-2">✅ Se ausente, fechar torneira geral e drenar</li>
 </ul>
 </div>
 </div>
 </section>
 <section id="profissional" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">5. 👨‍🔧 Quando Chamar um Canalizador</h2>
 <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
 <h3 className="text-2xl font-bold text-gray-900 mb-4">Situações que requerem intervenção profissional:</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="bg-white p-6 rounded-xl">
 <h4 className="font-bold text-gray-900 mb-3">🚨 Urgências</h4>
 <ul className="space-y-2 text-gray-700">
 <li>• Fuga visível com jato de água</li>
 <li>• Inundação em divisão</li>
 <li>• Tubo rebentado pelo gelo</li>
 <li>• Fuga no contador ou antes</li>
 </ul>
 </div>
 <div className="bg-white p-6 rounded-xl">
 <h4 className="font-bold text-gray-900 mb-3">🔍 Prevenção</h4>
 <ul className="space-y-2 text-gray-700">
 <li>• Inspeção com câmara endoscópica</li>
 <li>• Teste de pressão da canalização</li>
 <li>• Substituição de tubagens antigas</li>
 <li>• Instalação de detetores de fuga</li>
 </ul>
 </div>
 </div>
 <div className="mt-8 text-center">
 <p className="text-xl text-gray-900 mb-6">Quer prevenir fugas de água na sua casa?</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href={`tel:${ACTIVE_CONFIG.phone}`} className="bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors">📞 Ligar para Canalizador</a>
 <a href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=Olá, gostaria de uma inspeção preventiva da canalização`} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-700 font-bold text-lg px-8 py-4 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-colors">💬 WhatsApp Rápido</a>
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
 <h3 className="font-bold text-gray-900 mb-2">Quanto custa arranjar uma fuga de água?</h3>
 <p className="text-gray-700">Em Trás-os-Montes, a arranjo de uma fuga simples (torneira, sifão) custa entre 40€ e 80€. Para fugas em tubagens embutidas, o custo pode variar entre 150€ e 400€, dependendo da localização e extensão do dano.</p>
 </div>
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-2">O seguro da casa cobre fugas de água?</h3>
 <p className="text-gray-700">A maioria dos seguros multirriscos cobre danos causados por fugas de água, mas geralmente não cobre a arranjo da canalização em si. Verifique as condições da sua apólice e documente sempre os danos com fotografias.</p>
 </div>
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-2">De quanto em quanto tempo devo fazer manutenção à canalização?</h3>
 <p className="text-gray-700">Recomendamos inspeção visual mensal (debaixo de lavatórios e junto a aparelhos), manutenção do esquentador/caldeira anual, e inspeção profissional completa a cada 5 anos. Em casas com mais de 30 anos, a inspeção profissional deve ser mais frequente.</p>
 </div>
 </div>
 <script type="application/ld+json">
 {JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 { "@type": "Question", "name": "Quanto custa arranjar uma fuga de água?", "acceptedAnswer": { "@type": "Answer", "text": "Em Trás-os-Montes, a arranjo de uma fuga simples (torneira, sifão) custa entre 40€ e 80€. Para fugas em tubagens embutidas, o custo pode variar entre 150€ e 400€, dependendo da localização e extensão do dano." } },
 { "@type": "Question", "name": "O seguro da casa cobre fugas de água?", "acceptedAnswer": { "@type": "Answer", "text": "A maioria dos seguros multirriscos cobre danos causados por fugas de água, mas geralmente não cobre a arranjo da canalização em si. Verifique as condições da sua apólice e documente sempre os danos com fotografias." } },
 { "@type": "Question", "name": "De quanto em quanto tempo devo fazer manutenção à canalização?", "acceptedAnswer": { "@type": "Answer", "text": "Recomendamos inspeção visual mensal, manutenção do esquentador/caldeira anual, e inspeção profissional completa a cada 5 anos. Em casas com mais de 30 anos, a inspeção profissional deve ser mais frequente." } }
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
 <strong>Técnico Mendes</strong> é canalizador certificado com experiência em Trás-os-Montes em Trás-os-Montes. Especialista em deteção e arranjo de fugas de água, já resolveu mais de 800 casos na região, incluindo situações de emergência no inverno.
 </p>
 <p className="text-gray-600">Para emergências ou orçamentos, contacte através do telefone ou WhatsApp acima.</p>
 </div>
 </div>
 </div>
 </article>
 </BlogLayout>
 );
};
export default EvitarFugasAguaPrevencao;
