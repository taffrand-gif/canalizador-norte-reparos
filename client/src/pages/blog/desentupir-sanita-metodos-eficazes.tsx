import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { Phone, MessageCircle, AlertTriangle, CheckCircle, ThumbsUp, ThumbsDown, Clock, Euro } from 'lucide-react';
export default function DesentupirSanitaMetodosEficazes() {
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "Qual o método mais eficaz para desentupir uma sanita?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "O desentupidor de borracha (ventosa) é o método caseiro mais eficaz, com 75% de sucesso em entupimentos médios. Para entupimentos graves ou recorrentes, um canalizador profissional com equipamento especializado tem 99% de eficácia."
 }
 },
 {
 "@type": "Question",
 "name": "Posso usar água a ferver para desentupir a sanita?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Não. Água a ferver pode rachar a porcelana da sanita devido ao choque térmico. Use água quente (não fervente) misturada com detergente da loiça para entupimentos leves por matéria orgânica."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto custa chamar um canalizador para desentupir sanita em Bragança?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Em Bragança e Trás-os-Montes, o desentupimento de sanita custa 120€ (urgência noite: 180€). Preço fixo garantido, sem surpresas."
 }
 },
 {
 "@type": "Question",
 "name": "Bicarbonato e vinagre funcionam para desentupir sanita?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Bicarbonato com vinagre tem apenas 50% de eficácia e funciona melhor para entupimentos muito leves e maus cheiros. Para entupimentos médios ou graves, use desentupidor de borracha ou chame um canalizador."
 }
 },
 {
 "@type": "Question",
 "name": "Quando devo chamar um canalizador profissional?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Chame um canalizador se: métodos caseiros falharam após 2-3 tentativas, água sobe noutros pontos da casa, entupimentos frequentes (mais de 1x/mês), suspeita de objeto sólido, ou mau cheiro persistente."
 }
 }
 ]
 };
 const metodos = [
 {
 nome: "Desentupidor de Borracha (Ventosa)",
 eficacia: "75%",
 tempo: "10-15 min",
 custo: "5-15€",
 como: "Coloque o desentupidor sobre o buraco da sanita, certifique-se que há água suficiente para cobrir a borracha. Faça movimentos vigorosos de bomba (push-pull) durante 20-30 segundos. Repita 3-4 vezes.",
 quando: "Entupimentos médios, papel higiénico, matéria orgânica",
 pros: ["Mais eficaz método caseiro", "Reutilizável", "Não danifica canalização"],
 contras: ["Requer força física", "Não funciona com objetos sólidos"]
 },
 {
 nome: "Água Quente + Detergente",
 eficacia: "60%",
 tempo: "20-30 min",
 custo: "0€",
 como: "Aqueça 2 litros de água (quente mas não fervente). Adicione 3 colheres de detergente da loiça. Despeje lentamente na sanita. Aguarde 15-20 minutos. Puxe o autoclismo.",
 quando: "Entupimentos leves por gordura ou matéria orgânica",
 pros: ["Gratuito", "Seguro", "Sempre disponível em casa"],
 contras: ["Baixa eficácia", "Não funciona com papel ou objetos"]
 },
 {
 nome: "Bicarbonato de Sódio + Vinagre",
 eficacia: "50%",
 tempo: "30-45 min",
 custo: "2-3€",
 como: "Despeje 1 chávena de bicarbonato de sódio na sanita. Adicione 2 chávenas de vinagre branco. Deixe reagir 30 minutos (vai fazer espuma). Despeje água quente. Puxe o autoclismo.",
 quando: "Entupimentos muito leves, maus cheiros",
 pros: ["Natural", "Não tóxico", "Elimina odores"],
 contras: ["Baixa eficácia", "Demorado", "Não resolve entupimentos graves"]
 },
 {
 nome: "Mola Desentupidora (Cabo Flexível)",
 eficacia: "85%",
 tempo: "15-20 min",
 custo: "15-30€",
 como: "Insira a ponta da mola no buraco da sanita. Rode a manivela enquanto empurra suavemente. Quando sentir resistência, continue a rodar para quebrar a obstrução. Retire a mola e puxe o autoclismo.",
 quando: "Entupimentos graves, objetos presos",
 pros: ["Muito eficaz", "Alcança obstruções profundas", "Profissional"],
 contras: ["Requer compra", "Técnica específica", "Pode riscar porcelana se mal usado"]
 },
 {
 nome: "Canalizador Profissional",
 eficacia: "99%",
 tempo: "30-60 min",
 custo: "120€ (noite: 180€)",
 como: "Ligue para +351 928 484 451. Canalizador chega em 30-60 min com equipamento profissional (mola elétrica, câmara de inspeção). Resolve o problema e identifica a causa.",
 quando: "Métodos caseiros falharam, entupimentos recorrentes, objetos sólidos",
 pros: ["Eficácia garantida", "Identifica causa raiz", "Equipamento profissional", "Garantia"],
 contras: ["Custo mais elevado"]
 }
 ];
 return (
 <>
 <Helmet>
 <title>Como Desentupir Sanita: 5 Métodos Eficazes [2026] | Norte Reparos</title>
 <meta name="description" content="Guia completo para desentupir sanita: 5 métodos testados (ventosa, água quente, bicarbonato). Eficácia, custos e quando chamar canalizador em Bragança." />
 <meta name="keywords" content="desentupir sanita, sanita entupida, desentupidor, canalizador Bragança, entupimento WC" />
 <link rel="canonical" href="https://canalizador-norte-reparos.pt/blog/desentupir-sanita-metodos-eficazes" />
 <script type="application/ld+json">
 {JSON.stringify(faqSchema)}
 </script>
 </Helmet>
 <div className="min-h-screen bg-gray-50">
 <article className="max-w-4xl mx-auto px-4 py-12">
 {/* Hero */}
 <header className="mb-12">
 <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
 Guia Prático 2026
 </div>
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
 Como Desentupir Sanita: 5 Métodos Eficazes [2026]
 </h1>
 <p className="text-xl text-gray-600 leading-relaxed">
 Sanita entupida? Testámos 5 métodos para desentupir: desde soluções caseiras gratuitas até equipamento profissional.
 Descubra qual funciona melhor para o seu caso, custos reais e quando vale a pena chamar um canalizador.
 </p>
 <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
 <span className="flex items-center gap-2">
 <Clock className="w-4 h-4" />
 8 min leitura
 </span>
 <span>Atualizado: 3 Março 2026</span>
 </div>
 </header>
 {/* Resposta Direta GEO */}
 <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12">
 <h2 className="text-xl font-bold text-gray-900 mb-3">Resposta Rápida</h2>
 <p className="text-gray-700 leading-relaxed">
 <strong>O método mais eficaz é o desentupidor de borracha (ventosa)</strong> com 75% de sucesso em entupimentos médios.
 Para entupimentos graves ou recorrentes em Bragança e Trás-os-Montes, um canalizador profissional resolve em 30-60 minutos
 por 60-120€ com garantia. <strong>Nunca use água a ferver</strong> - pode rachar a porcelana.
 </p>
 </div>
 {/* Aviso Importante */}
 <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-12">
 <div className="flex items-start gap-4">
 <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
 <div>
 <h3 className="font-bold text-gray-900 mb-2">Antes de Começar - Regra de Ouro</h3>
 <p className="text-gray-700">
 <strong>NÃO puxe o autoclismo repetidamente</strong> se a água não escoar. Vai transbordar e criar uma inundação.
 Primeiro tente os métodos abaixo. Se a sanita estiver cheia, retire água com um balde antes de tentar desentupir.
 </p>
 </div>
 </div>
 </div>
 {/* Tabela Comparativa */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Comparação Rápida: 5 Métodos</h2>
 <div className="overflow-x-auto">
 <table className="w-full bg-white rounded-lg shadow-md">
 <thead className="bg-gray-100">
 <tr>
 <th className="px-4 py-3 text-left font-bold text-gray-900">Método</th>
 <th className="px-4 py-3 text-center font-bold text-gray-900">Eficácia</th>
 <th className="px-4 py-3 text-center font-bold text-gray-900">Tempo</th>
 <th className="px-4 py-3 text-center font-bold text-gray-900">Custo</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-200">
 {metodos.map((metodo, index) => (
 <tr key={index} className="hover:bg-gray-50">
 <td className="px-4 py-3 font-medium text-gray-900">{metodo.nome}</td>
 <td className="px-4 py-3 text-center">
 <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
 parseInt(metodo.eficacia) >= 75 ? 'bg-green-100 text-green-700' :
 parseInt(metodo.eficacia) >= 60 ? 'bg-yellow-100 text-yellow-700' :
 'bg-orange-100 text-orange-700'
 }`}>
 {metodo.eficacia}
 </span>
 </td>
 <td className="px-4 py-3 text-center text-gray-600">{metodo.tempo}</td>
 <td className="px-4 py-3 text-center text-gray-900 font-semibold">{metodo.custo}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>
 {/* Métodos Detalhados */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-8">5 Métodos Detalhados (Do Mais Eficaz ao Menos)</h2>
 <div className="space-y-8">
 {metodos.map((metodo, index) => (
 <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
 <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4">
 <div className="flex items-center justify-between">
 <h3 className="text-2xl font-bold">{index + 1}. {metodo.nome}</h3>
 <div className="flex items-center gap-4">
 <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
 {metodo.eficacia} eficaz
 </span>
 <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
 <Euro className="w-4 h-4" />
 {metodo.custo}
 </span>
 </div>
 </div>
 </div>
 <div className="p-6">
 <div className="mb-4">
 <h4 className="font-bold text-gray-900 mb-2">Como Fazer:</h4>
 <p className="text-gray-700 leading-relaxed">{metodo.como}</p>
 </div>
 <div className="mb-4">
 <h4 className="font-bold text-gray-900 mb-2">Quando Usar:</h4>
 <p className="text-gray-700">{metodo.quando}</p>
 </div>
 <div className="grid md:grid-cols-2 gap-4">
 <div className="bg-green-50 p-4 rounded-lg">
 <h5 className="font-bold text-green-800 mb-2 flex items-center gap-2">
 <ThumbsUp className="w-5 h-5" />
 Vantagens
 </h5>
 <ul className="space-y-1">
 {metodo.pros.map((pro, i) => (
 <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
 <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
 {pro}
 </li>
 ))}
 </ul>
 </div>
 <div className="bg-orange-50 p-4 rounded-lg">
 <h5 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
 <ThumbsDown className="w-5 h-5" />
 Desvantagens
 </h5>
 <ul className="space-y-1">
 {metodo.contras.map((contra, i) => (
 <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
 <AlertTriangle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
 {contra}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </section>
 {/* O Que NÃO Fazer */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">O Que NUNCA Fazer</h2>
 <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
 <ul className="space-y-4">
 {[
 { texto: "Usar água a ferver", razao: "Choque térmico pode rachar a porcelana da sanita" },
 { texto: "Produtos químicos agressivos (ácido sulfúrico)", razao: "Danificam tubos, sanita e são perigosos para a saúde" },
 { texto: "Misturar lixívia com outros produtos", razao: "Cria gases tóxicos que podem ser fatais" },
 { texto: "Objetos pontiagudos ou arames rígidos", razao: "Riscam e podem partir a porcelana" },
 { texto: "Puxar autoclismo repetidamente", razao: "Causa transbordo e inundação" },
 { texto: "Ignorar entupimentos recorrentes", razao: "Indica problema grave na canalização principal" }
 ].map((item, i) => (
 <li key={i} className="flex items-start gap-3">
 <ThumbsDown className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
 <div>
 <strong className="text-gray-900">{item.texto}</strong>
 <p className="text-gray-700 text-sm mt-1">Porquê: {item.razao}</p>
 </div>
 </li>
 ))}
 </ul>
 </div>
 </section>
 {/* Quando Chamar Profissional */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Quando Chamar um Canalizador Profissional?</h2>
 <div className="bg-blue-50 rounded-xl p-6">
 <p className="text-gray-700 mb-4">
 Se está a ler isto, provavelmente já tentou métodos caseiros. Aqui estão os sinais claros de que precisa de ajuda profissional:
 </p>
 <ul className="space-y-3">
 {[
 "Tentou 2-3 métodos caseiros e nenhum funcionou",
 "Água sobe noutros pontos (lavatório, duche, banheira)",
 "Entupimentos frequentes (mais de 1 vez por mês)",
 "Suspeita de objeto sólido preso (brinquedo, telemóvel, toalhitas)",
 "Mau cheiro persistente mesmo após desentupir",
 "Água escoa muito lentamente mesmo após tentativas",
 "Vários pontos da casa entupidos simultaneamente",
 "Sanita faz ruídos estranhos (gorgolejar)"
 ].map((sinal, i) => (
 <li key={i} className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700">{sinal}</span>
 </li>
 ))}
 </ul>
 </div>
 </section>
 {/* CTA Meio */}
 <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-8 mb-12 text-center">
 <h3 className="text-2xl font-bold mb-4">Métodos Caseiros Não Funcionaram?</h3>
 <p className="text-lg mb-6 opacity-90">
 Resolvemos em 30-60 minutos com equipamento profissional. Preço fixo, sem surpresas.
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
 href="https://wa.me/351928484451?text=Olá,%20tenho%20a%20sanita%20entupida%20e%20preciso%20de%20ajuda"
 className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
 >
 <MessageCircle className="w-5 h-5" />
 WhatsApp
 </a>
 </div>
 </div>
 {/* Prevenção */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Como Prevenir Entupimentos</h2>
 <div className="grid md:grid-cols-2 gap-6">
 <div className="bg-white rounded-lg shadow-md p-6">
 <h3 className="font-bold text-green-700 text-lg mb-4 flex items-center gap-2">
 <CheckCircle className="w-6 h-6" />
 Pode Deitar na Sanita
 </h3>
 <ul className="space-y-2 text-gray-700">
 <li>• Papel higiénico (quantidade moderada)</li>
 <li>• Dejetos humanos</li>
 <li>• Água</li>
 <li className="text-sm text-gray-500 italic mt-4">Só isto. Nada mais.</li>
 </ul>
 </div>
 <div className="bg-white rounded-lg shadow-md p-6">
 <h3 className="font-bold text-red-700 text-lg mb-4 flex items-center gap-2">
 <ThumbsDown className="w-6 h-6" />
 NUNCA Deite na Sanita
 </h3>
 <ul className="space-y-2 text-gray-700">
 <li>• Toalhitas húmidas (mesmo as "biodegradáveis")</li>
 <li>• Pensos higiénicos e tampões</li>
 <li>• Preservativos</li>
 <li>• Fio dental</li>
 <li>• Cotonetes</li>
 <li>• Cabelo</li>
 <li>• Gordura ou óleo</li>
 <li>• Restos de comida</li>
 </ul>
 </div>
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
 <Link href="/blog/sinais-fugas-agua-escondidas">
 <a className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-gray-900 mb-2">Sinais de Fugas de Água</h3>
 <p className="text-sm text-gray-600">8 sinais de alerta para detetar fugas escondidas</p>
 </a>
 </Link>
 <Link href="/servicos/desentupimentos">
 <a className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-gray-900 mb-2">Serviço de Desentupimentos</h3>
 <p className="text-sm text-gray-600">Desentupimentos profissionais em Trás-os-Montes</p>
 </a>
 </Link>
 <Link href="/blog/evitar-fugas-agua-prevencao">
 <a className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-gray-900 mb-2">Prevenção de Fugas</h3>
 <p className="text-sm text-gray-600">Guia completo de manutenção preventiva</p>
 </a>
 </Link>
 </div>
 </section>
 {/* CTA Final */}
 <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 text-center">
 <h3 className="text-3xl font-bold mb-4">Precisa de Ajuda Profissional?</h3>
 <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
 Canalizadores certificados em Bragança, Mirandela, Chaves e toda a região de Trás-os-Montes.
 Atendimento Atendimento 24h/7d para urgências.
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
 href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20canalizador"
 className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition-colors"
 >
 <MessageCircle className="w-6 h-6" />
 WhatsApp
 </a>
 </div>
 <p className="text-sm opacity-75">
 Resposta Resposta rápida garantida • Sem compromisso • Garantia no trabalho
 </p>
 </div>
 </article>
 </div>
 </>
 );
}
