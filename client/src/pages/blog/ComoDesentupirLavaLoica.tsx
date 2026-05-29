import React from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import { useSEO } from '@/hooks/useSEO';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

const ComoDesentupirLavaLoica: React.FC = () => {
 useSEO({
 title: 'Como Desentupir um Lava-Loiça em 5 Passos Simples - Guia 2026',
 description: 'Guia passo a passo para desentupir um lava-loiça de forma segura e eficaz. Métodos caseiros e quando chamar um profissional.',
 keywords: 'desentupir lava-loiça, entupimento cozinha, como desentupir canos, canalizador urgente, desentupimento caseiro'
 });

 return (
 <BlogLayout
 title="Como Desentupir um Lava-Loiça em 5 Passos Simples"
 description="Guia completo para resolver entupimentos no lava-loiça com métodos seguros e eficazes"
 >
 <article className="max-w-4xl mx-auto">
 {/* Meta info */}
 <div className="mb-8">
 <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
 <span className="px-3 py-1 bg-blue-100 text-blue-800 font-semibold rounded-full">
 Dicas Práticas
 </span>
 <span>⏱️ 7 min de leitura</span>
 <span>📅 13 Fev 2026</span>
 <span>👁️ 1.5K visualizações</span>
 </div>
 
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
 Como Desentupir um Lava-Loiça em 5 Passos Simples
 </h1>
 
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
 <span className="text-2xl">💧</span>
 </div>
 <div>
 <p className="font-semibold text-gray-900">Carlos Mendes</p>
 <p className="text-gray-600">Canalizador Certificado com 12+ anos de experiência</p>
 </div>
 </div>
 </div>

 {/* Featured image */}
 <div className="mb-10 rounded-2xl overflow-hidden">
 <img
 src="/images-optimized/blog/desentupir-lava-loica-detail.jpg"
 alt="Desentupimento de lava-loiça passo a passo"
 className="w-full h-96 object-cover"
 loading="lazy"
 width={800}
 height={400}
 />
 <p className="text-sm text-gray-500 text-center mt-2">
 Métodos seguros para desentupir lava-loiça sem danificar a canalização
 </p>
 </div>

 {/* Introduction */}
 <div className="prose prose-lg max-w-none mb-10">
 <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
 <p className="text-blue-800 font-semibold text-lg">
 ⚠️ Aviso Importante: Estes métodos são para entupimentos leves a moderados. 
 Para entupimentos graves, repetidos ou em casas com canalização antiga, 
 contate sempre um canalizador profissional para evitar danos maiores.
 </p>
 </div>

 <p className="text-xl text-gray-700 mb-6">
 Um lava-loiça entupido é um dos problemas mais comuns em qualquer cozinha. 
 Antes de entrar em pânico ou gastar dinheiro desnecessariamente, experimente 
 estes 5 passos simples que resolvem a maioria dos entupimentos.
 </p>
 </div>

 {/* Table of contents */}
 <div className="bg-gray-50 rounded-2xl p-6 mb-10">
 <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Neste Artigo</h2>
 <ul className="space-y-2">
 <li><a href="#passo1" className="text-blue-600 hover:text-blue-700">Passo 1: Identificar o Tipo de Entupimento</a></li>
 <li><a href="#passo2" className="text-blue-600 hover:text-blue-700">Passo 2: Método do Desentupidor Manual</a></li>
 <li><a href="#passo3" className="text-blue-600 hover:text-blue-700">Passo 3: Método do Bicarbonato e Vinagre</a></li>
 <li><a href="#passo4" className="text-blue-600 hover:text-blue-700">Passo 4: Limpeza do Sifão</a></li>
 <li><a href="#passo5" className="text-blue-600 hover:text-blue-700">Passo 5: Manutenção Preventiva</a></li>
 <li><a href="#quando-profissional" className="text-blue-600 hover:text-blue-700">Quando Chamar um Profissional</a></li>
 </ul>
 </div>

 {/* Content sections */}
 <div className="prose prose-lg max-w-none">
 <section id="passo1" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Passo 1: 🔍 Identificar o Tipo de Entupimento</h2>
 
 <p>Antes de agir, é importante entender que tipo de entupimento tem:</p>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-3">Entupimento Leve</h3>
 <ul className="space-y-2 text-gray-700">
 <li className="flex items-center gap-2">✅ Água escoa lentamente</li>
 <li className="flex items-center gap-2">✅ Acumulação recente de restos</li>
 <li className="flex items-center gap-2">✅ Sem cheiros desagradáveis</li>
 <li className="flex items-center gap-2">✅ Métodos caseiros geralmente funcionam</li>
 </ul>
 </div>
 
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-3">Entupimento Grave</h3>
 <ul className="space-y-2 text-gray-700">
 <li className="flex items-center gap-2">❌ Água não escoa nada</li>
 <li className="flex items-center gap-2">❌ Cheiro forte a esgoto</li>
 <li className="flex items-center gap-2">❌ Entupimento recorrente</li>
 <li className="flex items-center gap-2">❌ Necessita profissional</li>
 </ul>
 </div>
 </div>
 </section>

 <section id="passo2" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Passo 2: 🪠 Método do Desentupidor Manual (Ventosa)</h2>
 
 <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
 <h3 className="font-bold text-blue-800 text-lg mb-2">Material Necessário:</h3>
 <ul className="text-blue-700 space-y-1">
 <li>• Desentupidor de ventosa (disponível em qualquer loja de ferragens)</li>
 <li>• Panos para limpeza</li>
 <li>• Balde (opcional)</li>
 </ul>
 </div>

 <h3 className="text-2xl font-bold text-gray-900 mb-4">Técnica Correta:</h3>
 <ol className="space-y-4">
 <li className="flex items-start gap-3">
 <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
 <div>
 <p className="font-semibold">Retire o excesso de água</p>
 <p className="text-gray-600">Se o lava-loiça estiver cheio, retire parte da água, deixando apenas o suficiente para cobrir a ventosa do desentupidor.</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
 <div>
 <p className="font-semibold">Posicione a ventosa</p>
 <p className="text-gray-600">Cubra completamente o ralo com a ventosa, garantindo uma vedação perfeita.</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
 <div>
 <p className="font-semibold">Bombeie com força</p>
 <p className="text-gray-600">Empurre e puxe o cabo do desentupidor com firmeza 10-15 vezes. A pressão criada desloca a obstrução.</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</span>
 <div>
 <p className="font-semibold">Teste o resultado</p>
 <p className="text-gray-600">Remova o desentupidor e abra a torneira. Se a água escoar normalmente, o problema está resolvido.</p>
 </div>
 </li>
 </ol>
 </section>

 <section id="passo3" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Passo 3: 🧪 Método do Bicarbonato e Vinagre (Para Entupimentos Leves)</h2>
 
 <p>Este método natural é eficaz para dissolver gordura e restos orgânicos:</p>
 
 <div className="bg-white p-6 rounded-xl border border-gray-200 my-6">
 <h3 className="font-bold text-gray-900 mb-3">Proporções Recomendadas:</h3>
 <ul className="space-y-2">
 <li>• 1/2 chávena de bicarbonato de sódio</li>
 <li>• 1 chávena de vinagre branco</li>
 <li>• 2 litros de água a ferver</li>
 </ul>
 </div>

 <ol className="space-y-4">
 <li className="flex items-start gap-3">
 <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
 <div>
 <p className="font-semibold">Despeje o bicarbonato</p>
 <p className="text-gray-600">Coloque o bicarbonato diretamente no ralo do lava-loiça.</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
 <div>
 <p className="font-semibold">Adicione o vinagre</p>
 <p className="text-gray-600">Despeje o vinagre sobre o bicarbonato. A reação química cria espuma que ajuda a desfazer a obstrução.</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
 <div>
 <p className="font-semibold">Deixe atuar</p>
 <p className="text-gray-600">Tape o ralo e deixe a mistura atuar por 30 minutos a 1 hora.</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</span>
 <div>
 <p className="font-semibold">Despeje água quente</p>
 <p className="text-gray-600">Finalize com água a ferver para limpar os resíduos.</p>
 </div>
 </li>
 </ol>
 </section>

 <section id="quando-profissional" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">👨‍🔧 Quando Chamar um Canalizador Profissional</h2>
 
 <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
 <h3 className="text-2xl font-bold text-gray-900 mb-4">Situações que Requerem Intervenção Profissional:</h3>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="bg-white p-6 rounded-xl">
 <h4 className="font-bold text-gray-900 mb-3">🚨 Emergências</h4>
 <ul className="space-y-2 text-gray-700">
 <li>• Água a transbordar do lava-loiça</li>
 <li>• Cheiro forte a esgoto na cozinha</li>
 <li>• Água a sair por outras sanitas ou ralos</li>
 <li>• Sinais de humidade nas paredes</li>
 </ul>
 </div>
 
 <div className="bg-white p-6 rounded-xl">
 <h4 className="font-bold text-gray-900 mb-3">🏠 Problemas Estruturais</h4>
 <ul className="space-y-2 text-gray-700">
 <li>• Casas com mais de 30 anos (canalização antiga)</li>
 <li>• Entupimentos recorrentes no mesmo local</li>
 <li>• Ruídos estranhos na canalização</li>
 <li>• Pressão da água muito fraca</li>
 </ul>
 </div>
 </div>

 <div className="mt-8 text-center">
 <p className="text-xl text-gray-900 mb-6">
 Na dúvida ou para situações graves, é sempre mais seguro e económico a longo prazo chamar um profissional.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors"
 >
 📞 Ligar para Canalizador
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=Olá, preciso de ajuda com desentupimento`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-white text-blue-700 font-bold text-lg px-8 py-4 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-colors"
 >
 💬 WhatsApp Rápido
 </a>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ Section with JSON-LD Schema */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">❓ Perguntas Frequentes</h2>
 
 <div className="space-y-6">
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-2">Posso usar produtos químicos de desentupimento?</h3>
 <p className="text-gray-700">
 Não recomendamos. Os produtos químicos agressivos podem danificar a canalização (especialmente se for antiga), 
 são perigosos para a saúde e poluem o ambiente. Métodos mecânicos (desentupidor) ou naturais (bicarbonato) 
 são mais seguros e igualmente eficazes para a maioria dos casos.
 </p>
 </div>
 
 <div className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-2">Quanto custa um serviço de desentupimento por um profissional?</h3>
 <p className="text-gray-700">
 Em Trás-os-Montes, o preço médio para desentupimento de lava-loiça varia entre 60€ e 120€, 
 dependendo da complexidade, hora da intervenção e deslocação. Para situações de emergência 
 fora do horário comercial, os preços podem ser superiores.
 </p>
 </div>
 </div>

 {/* JSON-LD Schema for FAQ */}
 <script type="application/ld+json">
 {JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "Posso usar produtos químicos de desentupimento?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Não recomendamos. Os produtos químicos agressivos podem danificar a canalização (especialmente se for antiga), são perigosos para a saúde e poluem o ambiente. Métodos mecânicos (desentupidor) ou naturais (bicarbonato) são mais seguros e igualmente eficazes para a maioria dos casos."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto custa um serviço de desentupimento por um profissional?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Em Trás-os-Montes, o preço médio para desentupimento de lava-loiça varia entre 60€ e 120€, dependendo da complexidade, hora da intervenção e deslocação. Para situações de emergência fora do horário comercial, os preços podem ser superiores."
 }
 }
 ]
 })}
 </script>
 </section>
 </div>

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
 <strong>Carlos Mendes</strong> é canalizador certificado com mais de 12 anos de experiência em Trás-os-Montes. 
 Especialista em desentupimentos e arranjos de emergência, já resolveu mais de 800 casos na região. 
 Acredita na importância da educação sobre manutenção preventiva para evitar problemas graves.
 </p>
 <p className="text-gray-600">
 Para emergências ou orçamentos, contacte através do telefone ou WhatsApp acima.
 </p>
 </div>
 </div>
 </div>
 </article>
 </BlogLayout>
 );
};

export default ComoDesentupirLavaLoica;