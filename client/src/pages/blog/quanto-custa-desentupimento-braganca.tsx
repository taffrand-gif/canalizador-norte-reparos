import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { Phone, MessageCircle, Euro, Clock, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';

export default function QuantoCustaDesentupimentoBraganca() {
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "Quanto custa desentupir uma sanita em Bragança?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Em Bragança, o desentupimento de sanita custa entre 60€ e 120€. Entupimentos simples (papel, matéria orgânica): 60-80€. Entupimentos graves (objetos sólidos, raiz): 100-120€. Preço inclui deslocação, mão de obra e equipamento básico."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto custa desentupir canalização principal?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Desentupimento de canalização principal em Trás-os-Montes: 120-250€. Inclui uso de mola elétrica profissional, inspeção com câmara se necessário, e limpeza completa do ramal."
 }
 },
 {
 "@type": "Question",
 "name": "Desentupimento urgente custa mais caro?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Sim. Serviço urgente (noites, fins de semana, feriados) tem acréscimo de 30-50% sobre o preço normal. Urgência durante o dia: +30%. Urgência noturna ou feriados: +50%."
 }
 },
 {
 "@type": "Question",
 "name": "O que está incluído no preço de desentupimento?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "O preço inclui: deslocação até 20km, diagnóstico, mão de obra, equipamento básico (mola manual, desentupidor), e limpeza após trabalho. Não inclui: arranjos estruturais, substituição de tubos, ou uso de câmara de inspeção (custo adicional 50-80€)."
 }
 },
 {
 "@type": "Question",
 "name": "Como poupar no desentupimento?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Para poupar: chame durante horário normal (não urgência), tente métodos caseiros primeiro para entupimentos leves, faça manutenção preventiva anual (30-50€), e não deixe o problema agravar-se."
 }
 }
 ]
 };

 const precos = [
 {
 servico: "Desentupir Sanita (WC)",
 simples: "60-80€",
 grave: "100-120€",
 tempo: "30-60 min",
 descricao: "Entupimento por papel higiénico, matéria orgânica ou objetos pequenos"
 },
 {
 servico: "Desentupir Lava-Loiça",
 simples: "50-70€",
 grave: "80-100€",
 tempo: "20-45 min",
 descricao: "Gordura acumulada, restos de comida, ou objetos no sifão"
 },
 {
 servico: "Desentupir Lavatório",
 simples: "40-60€",
 grave: "70-90€",
 tempo: "20-40 min",
 descricao: "Cabelo, sabão acumulado, ou sifão entupido"
 },
 {
 servico: "Desentupir Duche/Banheira",
 simples: "50-70€",
 grave: "90-120€",
 tempo: "30-60 min",
 descricao: "Cabelo, sabão, ou entupimento no ralo"
 },
 {
 servico: "Desentupir Canalização Principal",
 simples: "120-180€",
 grave: "200-250€",
 tempo: "1-2 horas",
 descricao: "Ramal principal entupido, raízes, ou obstrução profunda"
 },
 {
 servico: "Desentupir Fossa Séptica",
 simples: "150-200€",
 grave: "250-350€",
 tempo: "2-3 horas",
 descricao: "Limpeza e desentupimento de fossa, inclui aspiração se necessário"
 }
 ];

 return (
 <>
 <Helmet>
 <title>Quanto Custa Desentupimento em Bragança? [Preços 2026] | Norte Reparos</title>
 <meta name="description" content="Preços reais de desentupimentos em Bragança 2026: sanita 60-120€, canalização 120-250€. Tabela completa, o que está incluído e como poupar." />
 <meta name="keywords" content="preço desentupimento Bragança, quanto custa desentupir, canalizador preços, desentupimento Trás-os-Montes" />
 <link rel="canonical" href="https://canalizador-norte-reparos.pt/blog/quanto-custa-desentupimento-braganca" />
 <script type="application/ld+json">
 {JSON.stringify(faqSchema)}
 </script>
 </Helmet>

 <div className="min-h-screen bg-gray-50">
 <article className="max-w-4xl mx-auto px-4 py-12">
 {/* Hero */}
 <header className="mb-12">
 <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
 Preços 2026
 </div>
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
 Quanto Custa Desentupimento em Bragança? [Preços 2026]
 </h1>
 <p className="text-xl text-gray-600 leading-relaxed">
 Tabela completa de preços reais para desentupimentos em Bragança e Trás-os-Montes.
 Sem surpresas, sem custos escondidos.
 </p>
 <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
 <span>6 min leitura</span>
 <span>Atualizado: 3 Março 2026</span>
 </div>
 </header>

 {/* Resposta Direta */}
 <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12">
 <h2 className="text-xl font-bold text-gray-900 mb-3">Resposta Rápida</h2>
 <p className="text-gray-700 leading-relaxed">
 <strong>Preços médios em Bragança 2026:</strong> Sanita 60-120€, lava-loiça 50-100€, canalização principal 120-250€.
 Preço inclui deslocação (até 20km), diagnóstico, mão de obra e equipamento básico.
 <strong>Urgências</strong> (noites/fins de semana) têm acréscimo de 30-50%.
 </p>
 </div>

 {/* Tabela de Preços */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Tabela de Preços Completa</h2>
 <div className="bg-white rounded-xl shadow-lg overflow-hidden">
 <div className="overflow-x-auto">
 <table className="w-full">
 <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
 <tr>
 <th className="px-4 py-4 text-left font-bold">Serviço</th>
 <th className="px-4 py-4 text-center font-bold">Simples</th>
 <th className="px-4 py-4 text-center font-bold">Grave</th>
 <th className="px-4 py-4 text-center font-bold">Tempo</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-200">
 {precos.map((item, index) => (
 <tr key={index} className="hover:bg-gray-50">
 <td className="px-4 py-4">
 <div className="font-bold text-gray-900">{item.servico}</div>
 <div className="text-sm text-gray-600 mt-1">{item.descricao}</div>
 </td>
 <td className="px-4 py-4 text-center">
 <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">
 {item.simples}
 </span>
 </td>
 <td className="px-4 py-4 text-center">
 <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold">
 {item.grave}
 </span>
 </td>
 <td className="px-4 py-4 text-center text-gray-600 text-sm">
 <Clock className="w-4 h-4 inline mr-1" />
 {item.tempo}
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 <div className="mt-4 text-sm text-gray-600">
 <p><strong>Nota:</strong> Preços válidos para Bragança, Mirandela, Chaves, Vila Real e Macedo de Cavaleiros.
 Deslocações superiores a 20km: +0,50€/km adicional.</p>
 </div>
 </section>

 {/* O Que Está Incluído */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">O Que Está Incluído no Preço?</h2>
 <div className="grid md:grid-cols-2 gap-6">
 <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
 <h3 className="font-bold text-green-800 text-lg mb-4 flex items-center gap-2">
 <CheckCircle className="w-6 h-6" />
 Incluído no Preço
 </h3>
 <ul className="space-y-3">
 {[
 "Deslocação até 20km",
 "Diagnóstico e avaliação",
 "Mão de obra especializada",
 "Equipamento básico (mola manual, desentupidor)",
 "Limpeza após trabalho",
 "Garantia de 30 dias no serviço",
 "IVA incluído (23%)"
 ].map((item, i) => (
 <li key={i} className="flex items-start gap-2 text-gray-700">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
 {item}
 </li>
 ))}
 </ul>
 </div>
 <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
 <h3 className="font-bold text-orange-800 text-lg mb-4 flex items-center gap-2">
 <Euro className="w-6 h-6" />
 Custos Adicionais
 </h3>
 <ul className="space-y-3">
 {[
 { item: "Câmara de inspeção", preco: "+50-80€" },
 { item: "Mola elétrica profissional", preco: "+40-60€" },
 { item: "Substituição de tubos", preco: "+80-200€" },
 { item: "Arranjo estrutural", preco: "Orçamento" },
 { item: "Urgência diurna", preco: "+30%" },
 { item: "Urgência noturna/feriado", preco: "+50%" },
 { item: "Deslocação >20km", preco: "+0,50€/km" }
 ].map((item, i) => (
 <li key={i} className="flex items-center justify-between text-gray-700">
 <span>{item.item}</span>
 <span className="font-bold text-orange-700">{item.preco}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </section>

 {/* Fatores que Influenciam o Preço */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">O Que Influencia o Preço?</h2>
 <div className="space-y-4">
 {[
 {
 fator: "Gravidade do Entupimento",
 explicacao: "Entupimento simples (papel, gordura) é mais barato. Objetos sólidos, raízes ou entupimentos profundos requerem equipamento especializado."
 },
 {
 fator: "Localização do Entupimento",
 explicacao: "Sanita ou lavatório são mais acessíveis. Canalização principal enterrada ou dentro de paredes é mais complexo e caro."
 },
 {
 fator: "Horário do Serviço",
 explicacao: "Horário normal (8h-18h, dias úteis): preço base. Urgências noturnas, fins de semana ou feriados: +30-50%."
 },
 {
 fator: "Equipamento Necessário",
 explicacao: "Mola manual: incluído. Mola elétrica, câmara de inspeção ou hidrojato: custo adicional."
 },
 {
 fator: "Acessibilidade",
 explicacao: "Fácil acesso: preço normal. Difícil acesso (tetos falsos, paredes, pavimento): pode aumentar 20-40%."
 }
 ].map((item, i) => (
 <div key={i} className="bg-white rounded-lg shadow-md p-6">
 <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
 <TrendingUp className="w-5 h-5 text-blue-600" />
 {item.fator}
 </h3>
 <p className="text-gray-700 text-sm">{item.explicacao}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Como Poupar */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Como Poupar no Desentupimento?</h2>
 <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-6">
 <ul className="space-y-4">
 {[
 { dica: "Chame durante horário normal", economia: "Poupa 30-50%" },
 { dica: "Tente métodos caseiros primeiro (se entupimento leve)", economia: "Pode resolver grátis" },
 { dica: "Não deixe agravar - chame logo aos primeiros sinais", economia: "Evita custos 2-3x maiores" },
 { dica: "Manutenção preventiva anual (30-50€)", economia: "Evita 90% dos entupimentos" },
 { dica: "Peça orçamento antes de autorizar trabalho adicional", economia: "Sem surpresas" },
 { dica: "Não deite toalhitas, gordura ou objetos na sanita", economia: "Prevenção = 0€" }
 ].map((item, i) => (
 <li key={i} className="flex items-start gap-3">
 <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
 <div>
 <strong className="text-gray-900">{item.dica}</strong>
 <p className="text-sm text-green-700 mt-1">💰 {item.economia}</p>
 </div>
 </li>
 ))}
 </ul>
 </div>
 </section>

 {/* CTA Meio */}
 <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-8 mb-12 text-center">
 <h3 className="text-2xl font-bold mb-4">Precisa de um Orçamento?</h3>
 <p className="text-lg mb-6 opacity-90">
 Orçamento gratuito e sem compromisso. Preço fixo acordado antes de começar.
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
 href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20um%20orçamento%20para%20desentupimento"
 className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
 >
 <MessageCircle className="w-5 h-5" />
 WhatsApp
 </a>
 </div>
 </div>

 {/* Comparação Preços Região */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Preços por Cidade (Trás-os-Montes)</h2>
 <div className="bg-white rounded-xl shadow-lg overflow-hidden">
 <table className="w-full">
 <thead className="bg-gray-100">
 <tr>
 <th className="px-4 py-3 text-left font-bold text-gray-900">Cidade</th>
 <th className="px-4 py-3 text-center font-bold text-gray-900">Sanita</th>
 <th className="px-4 py-3 text-center font-bold text-gray-900">Canalização</th>
 <th className="px-4 py-3 text-center font-bold text-gray-900">Deslocação</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-200">
 {[
 { cidade: "Bragança", sanita: "60-120€", canalizacao: "120-250€", deslocacao: "Incluída" },
 { cidade: "Mirandela", sanita: "60-120€", canalizacao: "120-250€", deslocacao: "Incluída" },
 { cidade: "Chaves", sanita: "65-125€", canalizacao: "130-260€", deslocacao: "+10€" },
 { cidade: "Vila Real", sanita: "65-125€", canalizacao: "130-260€", deslocacao: "+15€" },
 { cidade: "Macedo de Cavaleiros", sanita: "60-120€", canalizacao: "120-250€", deslocacao: "Incluída" }
 ].map((item, i) => (
 <tr key={i} className="hover:bg-gray-50">
 <td className="px-4 py-3 font-medium text-gray-900">{item.cidade}</td>
 <td className="px-4 py-3 text-center text-gray-700">{item.sanita}</td>
 <td className="px-4 py-3 text-center text-gray-700">{item.canalizacao}</td>
 <td className="px-4 py-3 text-center text-sm text-gray-600">{item.deslocacao}</td>
 </tr>
 ))}
 </tbody>
 </table>
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
 <Link href="/blog/desentupir-sanita-metodos-eficazes">
 <a className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-gray-900 mb-2">Como Desentupir Sanita</h3>
 <p className="text-sm text-gray-600">5 métodos eficazes testados</p>
 </a>
 </Link>
 <Link href="/servicos/desentupimentos">
 <a className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-gray-900 mb-2">Serviço de Desentupimentos</h3>
 <p className="text-sm text-gray-600">Profissional em Trás-os-Montes</p>
 </a>
 </Link>
 <Link href="/blog/fuga-agua-escondida-sinais">
 <a className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-gray-900 mb-2">Sinais de Fugas de Água</h3>
 <p className="text-sm text-gray-600">7 sinais de alerta</p>
 </a>
 </Link>
 </div>
 </section>

 {/* CTA Final */}
 <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 text-center">
 <h3 className="text-3xl font-bold mb-4">Orçamento Gratuito e Sem Compromisso</h3>
 <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
 Preço fixo acordado antes de começar. Sem surpresas, sem custos escondidos.
 Atendimento em toda a região de Trás-os-Montes.
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
 href="https://wa.me/351928484451?text=Olá,%20preciso%20de%20orçamento%20para%20desentupimento"
 className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition-colors"
 >
 <MessageCircle className="w-6 h-6" />
 WhatsApp
 </a>
 </div>
 <p className="text-sm opacity-75">
 Resposta em 30 minutos • Orçamento gratuito • Garantia 30 dias
 </p>
 </div>
 </article>
 </div>
 </>
 );
}
