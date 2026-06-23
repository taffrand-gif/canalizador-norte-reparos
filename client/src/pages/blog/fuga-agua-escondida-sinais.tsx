import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { Phone, MessageCircle, AlertTriangle, CheckCircle, Droplets, TrendingUp, Home } from 'lucide-react';
export default function FugaAguaEscondidaSinais() {
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "Como saber se tenho uma fuga de água escondida?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Os principais sinais são: conta de água anormalmente alta (aumento de 20-30%), manchas de humidade nas paredes, som de água a correr com torneiras fechadas, contador de água a rodar sozinho, e cheiro a mofo persistente."
 }
 },
 {
 "@type": "Question",
 "name": "Como testar se tenho fuga de água em casa?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Teste simples: feche todas as torneiras e aparelhos que usem água. Anote o número do contador. A confirmar sem usar água. Se o contador mudou, tem uma fuga ativa."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto custa detetar uma fuga de água escondida?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Em Trás-os-Montes, a deteção de fugas com equipamento térmico custa 80-150€. Inclui inspeção completa, localização exata da fuga e orçamento de arranjo. Investimento que evita danos de milhares de euros."
 }
 },
 {
 "@type": "Question",
 "name": "Uma fuga pequena é grave?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Sim. Uma fuga de apenas 1 gota por segundo desperdiça 25 litros por dia (9.000 litros/ano). Além do desperdício, causa danos estruturais, mofo, e pode custar centenas de euros em arranjos se não for resolvida rapidamente."
 }
 },
 {
 "@type": "Question",
 "name": "Manchas de humidade na parede são sempre fuga de água?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Nem sempre, mas em 80% dos casos sim. Manchas amareladas ou acastanhadas que crescem indicam água a infiltrar de canalização. Outras causas: infiltrações de chuva, condensação, ou humidade ascendente."
 }
 }
 ]
 };
 const sinais = [
 {
 numero: 1,
 titulo: "Conta de Água Anormalmente Alta",
 descricao: "Aumento súbito de 20-30% na fatura sem mudança de hábitos é o sinal mais claro de fuga escondida.",
 urgencia: "alta",
 detalhes: "Compare as últimas 3-6 faturas. Se o consumo subiu sem razão aparente (não tem visitas, não encheu piscina, não mudou hábitos), há uma fuga ativa.",
 acao: "Faça o teste do contador (explicado abaixo). Se confirmar fuga, ligue imediatamente."
 },
 {
 numero: 2,
 titulo: "Contador de Água a Rodar Sozinho",
 descricao: "O teste mais definitivo: feche todas as torneiras e verifique o contador. Se roda, há fuga.",
 urgencia: "critica",
 detalhes: "Este é o teste mais fiável. Com tudo fechado, o contador não deve mexer nem 1 dígito. Se roda, mesmo devagar, está a perder água constantemente.",
 acao: "URGENTE: Feche a torneira geral e contacte um canalizador imediatamente."
 },
 {
 numero: 3,
 titulo: "Som de Água a Correr",
 descricao: "Ouvir água quando todas as torneiras estão fechadas indica fuga ativa nos canos.",
 urgencia: "critica",
 detalhes: "Especialmente à noite quando a casa está silenciosa. Pode ouvir água a correr dentro das paredes, no teto, ou debaixo do chão.",
 acao: "Fuga ativa confirmada. Feche a torneira geral e ligue-nos de imediato."
 },
 {
 numero: 4,
 titulo: "Manchas de Humidade nas Paredes",
 descricao: "Manchas amareladas, acastanhadas ou escuras que crescem indicam água a infiltrar.",
 urgencia: "alta",
 detalhes: "Começam pequenas e crescem ao longo de semanas. A parede pode ficar mole ao toque. Tinta pode descascar ou fazer bolhas.",
 acao: "Não pinte por cima. Encontre a origem da humidade primeiro ou vai voltar."
 },
 {
 numero: 5,
 titulo: "Cheiro a Mofo ou Bolor Visível",
 descricao: "Humidade constante cria ambiente perfeito para fungos. Mofo é sintoma, não a causa.",
 urgencia: "media",
 detalhes: "Cheiro a mofo persistente mesmo com ventilação. Bolor preto ou verde nas paredes, especialmente cantos e rodapés. Problema de saúde (alergias, asma).",
 acao: "Limpar o mofo não resolve. Precisa encontrar e arranjar a fuga de água."
 },
 {
 numero: 6,
 titulo: "Pavimento Levantado ou Inchado",
 descricao: "Madeira ou laminado que incha, levanta ou fica mole indica água por baixo.",
 urgencia: "alta",
 detalhes: "Especialmente em casas com pavimento radiante ou canalização enterrada. O pavimento absorve água e deforma.",
 acao: "Pode ser fuga no sistema de aquecimento ou canalização. Inspeção urgente necessária."
 },
 {
 numero: 7,
 titulo: "Pressão de Água Reduzida",
 descricao: "Queda de pressão em toda a casa pode indicar fuga no ramal principal.",
 urgencia: "media",
 detalhes: "Se só uma torneira tem baixa pressão, é problema local (calcário, filtro). Se todas as torneiras têm menos pressão, pode ser fuga grande no ramal.",
 acao: "Verifique se vizinhos têm o mesmo problema. Se só você, faça teste do contador."
 }
 ];
 return (
 <>
 <Helmet>
 <title>Fuga de Água Escondida: 7 Sinais de Alerta [Guia 2026] | Norte Reparos</title>
 <meta name="description" content="Aprenda a detetar fugas de água escondidas antes de causar danos graves. 7 sinais de alerta, teste do contador e quando chamar canalizador em Bragança." />
 <meta name="keywords" content="fuga água escondida, detetar fuga água, sinais fuga água, canalizador Bragança, humidade parede" />
 <link rel="canonical" href="https://canalizador-norte-reparos.pt/blog/fuga-agua-escondida-sinais" />
 <script type="application/ld+json">
 {JSON.stringify(faqSchema)}
 </script>
 </Helmet>
 <div className="min-h-screen bg-gray-50">
 <article className="max-w-4xl mx-auto px-4 py-12">
 {/* Hero */}
 <header className="mb-12">
 <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
 Guia de Deteção 2026
 </div>
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
 Fuga de Água Escondida: 7 Sinais de Alerta
 </h1>
 <p className="text-xl text-gray-600 leading-relaxed">
 Uma fuga pequena pode desperdiçar 10.000 litros por mês e causar danos estruturais graves.
 Aprenda a detetar os sinais antes que seja tarde demais.
 </p>
 <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
 <span>A confirmar leitura</span>
 <span>Atualizado: 3 Março 2026</span>
 </div>
 </header>
 {/* Resposta Direta */}
 <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12">
 <h2 className="text-xl font-bold text-gray-900 mb-3">Resposta Rápida</h2>
 <p className="text-gray-700 leading-relaxed">
 <strong>Os 3 sinais mais claros de fuga escondida são:</strong> conta de água 20-30% mais alta sem razão,
 contador a rodar com tudo fechado, e som de água a correr. <strong>Teste simples:</strong> feche todas as torneiras,
 anote o contador, A confirmar. Se mudou, tem fuga. Em Bragança, detetamos fugas com câmara térmica por 80-150€.
 </p>
 </div>
 {/* Alerta Impacto */}
 <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-12">
 <div className="flex items-start gap-4">
 <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
 <div>
 <h3 className="font-bold text-gray-900 mb-2">O Custo Real de Ignorar uma Fuga</h3>
 <p className="text-gray-700 mb-3">
 Uma fuga de <strong>apenas 1 gota por segundo</strong> desperdiça:
 </p>
 <ul className="space-y-2 text-gray-700">
 <li>• <strong>25 litros por dia</strong> = 750 litros/mês</li>
 <li>• <strong>9.000 litros por ano</strong> = +100€ na conta de água</li>
 <li>• Danos estruturais: 500-5.000€ em arranjos</li>
 <li>• Mofo e problemas de saúde</li>
 <li>• Desvalorização do imóvel</li>
 </ul>
 </div>
 </div>
 </div>
 {/* 7 Sinais */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-8">7 Sinais de Alerta (Do Mais Grave ao Menos)</h2>
 <div className="space-y-6">
 {sinais.map((sinal) => (
 <div key={sinal.numero} className="bg-white rounded-xl shadow-lg overflow-hidden">
 <div className={`p-6 border-l-4 ${
 sinal.urgencia === 'critica' ? 'border-red-500 bg-red-50' :
 sinal.urgencia === 'alta' ? 'border-orange-500 bg-orange-50' :
 'border-yellow-500 bg-yellow-50'
 }`}>
 <div className="flex items-start gap-4">
 <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl ${
 sinal.urgencia === 'critica' ? 'bg-red-600' :
 sinal.urgencia === 'alta' ? 'bg-orange-600' :
 'bg-yellow-600'
 }`}>
 {sinal.numero}
 </div>
 <div className="flex-grow">
 <div className="flex items-center gap-3 mb-2">
 <h3 className="text-xl font-bold text-gray-900">{sinal.titulo}</h3>
 <span className={`text-xs font-bold px-2 py-1 rounded ${
 sinal.urgencia === 'critica' ? 'bg-red-600 text-white' :
 sinal.urgencia === 'alta' ? 'bg-orange-600 text-white' :
 'bg-yellow-600 text-white'
 }`}>
 {sinal.urgencia === 'critica' ? 'CRÍTICO' : sinal.urgencia === 'alta' ? 'ALTA' : 'MÉDIA'}
 </span>
 </div>
 <p className="text-gray-700 font-medium mb-3">{sinal.descricao}</p>
 <p className="text-gray-600 text-sm mb-4">{sinal.detalhes}</p>
 <div className="bg-white/70 p-3 rounded-lg">
 <p className="text-sm">
 <strong className="text-gray-900">O que fazer:</strong>{' '}
 <span className="text-gray-700">{sinal.acao}</span>
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </section>
 {/* Teste DIY */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Teste Simples para Confirmar Fuga (5 Minutos)</h2>
 <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8">
 <h3 className="text-2xl font-bold mb-6 text-center">Teste do Contador de Água</h3>
 <div className="grid md:grid-cols-4 gap-6">
 {[
 { num: 1, texto: "Feche todas as torneiras e aparelhos (máquina lavar, autoclismos, etc.)" },
 { num: 2, texto: "Anote TODOS os dígitos do contador de água (tire foto)" },
 { num: 3, texto: " A confirmar sem usar água nenhuma" },
 { num: 4, texto: "Verifique o contador. Se mudou = TEM FUGA" }
 ].map((passo) => (
 <div key={passo.num} className="bg-white/10 rounded-lg p-4 text-center">
 <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-3">
 {passo.num}
 </div>
 <p className="text-sm">{passo.texto}</p>
 </div>
 ))}
 </div>
 <div className="mt-6 bg-white/20 rounded-lg p-4 text-center">
 <p className="font-bold">
 ✓ Contador não mudou = Sem fugas<br/>
 ✗ Contador mudou = Fuga ativa confirmada
 </p>
 </div>
 </div>
 </section>
 {/* CTA Meio */}
 <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-8 mb-12 text-center">
 <Droplets className="w-16 h-16 mx-auto mb-4 opacity-90" />
 <h3 className="text-2xl font-bold mb-4">Confirmou uma Fuga de Água?</h3>
 <p className="text-lg mb-6 opacity-90">
 Detetamos fugas com câmara térmica sem partir paredes. Sem compromisso.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href="tel:+351928484451"
 className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
 >
 <Phone className="w-5 h-5" />
 928 484 451
 </a>
 <a
 href="https://wa.me/351928484451?text=Olá,%20suspeito%20de%20uma%20fuga%20de%20água%20escondida"
 className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
 >
 <MessageCircle className="w-5 h-5" />
 WhatsApp
 </a>
 </div>
 </div>
 {/* Locais Comuns */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Locais Mais Comuns de Fugas Escondidas</h2>
 <div className="grid md:grid-cols-2 gap-6">
 {[
 { local: "Autoclismos", descricao: "Válvula de enchimento gasta. Teste: deite corante na cisterna, se aparecer na sanita sem puxar, há fuga." },
 { local: "Tubos dentro das paredes", descricao: "Juntas oxidadas ou tubos velhos de chumbo. Sinais: manchas de humidade, som de água." },
 { local: "Debaixo do lava-loiça", descricao: "Juntas do sifão ou torneiras. Verifique se o armário está húmido ou com cheiro a mofo." },
 { local: "Esquentador ou caldeira", descricao: "Válvula de segurança a pingar ou tubos de ligação. Verifique se há água no chão." },
 { local: "Pavimento radiante", descricao: "Fuga no sistema de aquecimento. Sinal: pavimento quente em zonas específicas, conta de água alta." },
 { local: "Ramal principal enterrado", descricao: "Tubo entre contador e casa. Sinais: contador roda muito, zona do jardim sempre húmida." }
 ].map((item, i) => (
 <div key={i} className="bg-white rounded-lg shadow-md p-6">
 <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
 <Home className="w-5 h-5 text-blue-600" />
 {item.local}
 </h3>
 <p className="text-gray-700 text-sm">{item.descricao}</p>
 </div>
 ))}
 </div>
 </section>
 {/* FAQ */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h2>
 <div className="space-y-4">
 {faqSchema.mainEntity.map((faq, index) => (
 <details key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
 <summary className="px-6 py-4 font-bold text-gray-900 cursor-pointer hover:bg-gray-50">
 {faq.name}
 </summary>
 <div className="px-6 pb-4 text-gray-700">
 {faq.acceptedAnswer.text}
 </div>
 </details>
 ))}
 </div>
 </section>
 {/* Artigos Relacionados */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Artigos Relacionados</h2>
 <div className="grid md:grid-cols-3 gap-6">
 <Link href="/blog/evitar-fugas-agua-prevencao">
 <a className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-gray-900 mb-2">Prevenção de Fugas</h3>
 <p className="text-sm text-gray-600">Como evitar fugas de água em casa</p>
 </a>
 </Link>
 <Link href="/servicos/detecao-fugas">
 <a className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-gray-900 mb-2">Deteção de Fugas</h3>
 <p className="text-sm text-gray-600">Serviço profissional com câmara térmica</p>
 </a>
 </Link>
 <Link href="/blog/desentupir-sanita-metodos-eficazes">
 <a className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-gray-900 mb-2">Desentupir Sanita</h3>
 <p className="text-sm text-gray-600">5 métodos eficazes testados</p>
 </a>
 </Link>
 </div>
 </section>
 {/* CTA Final */}
 <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 text-center">
 <h3 className="text-3xl font-bold mb-4">Deteção Profissional de Fugas</h3>
 <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
 Equipamento térmico de última geração para encontrar fugas sem partir paredes.
 Atendimento em Bragança, Mirandela, Chaves e toda a região.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
 <a
 href="tel:+351928484451"
 className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors"
 >
 <Phone className="w-6 h-6" />
 928 484 451
 </a>
 <a
 href="https://wa.me/351928484451?text=Olá,%20preciso%20detetar%20uma%20fuga%20de%20água"
 className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition-colors"
 >
 <MessageCircle className="w-6 h-6" />
 WhatsApp
 </a>
 </div>
 <p className="text-sm opacity-75">
 Disponível 24h/7 dias garantida • Deteção 80-150€ • Orçamento de arranjo gratuito
 </p>
 </div>
 </article>
 </div>
 </>
 );
}
