// Blog article: "Manutenção do Esquentador - Guia Completo"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, Flame, CheckCircle, AlertTriangle, Calendar } from 'lucide-react';
export default function ManutencaoEsquentador() {
 useEffect(() => {
 document.title = "Manutenção do Esquentador - Guia Completo 2026 | Quando e Como Fazer";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Guia completo de manutenção do esquentador. Quando fazer revisão, sinais de problemas, custos, e dicas para prolongar a vida útil. Atualizado 2026.');
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/blog/manutencao-esquentador-guia');
 const faqScript = document.createElement('script');
 faqScript.type = 'application/ld+json';
 faqScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 { "@type": "Question", "name": "De quanto em quanto tempo devo fazer manutenção ao esquentador?", "acceptedAnswer": { "@type": "Answer", "text": "A revisão anual é obrigatória para garantir segurança e eficiência — além de ser exigida pela maioria das garantias. O melhor momento é antes do inverno (Setembro/Outubro). Após 10 anos de uso, avalie substituição ou revisão profunda." } },
 { "@type": "Question", "name": "O que inclui uma manutenção completa do esquentador?", "acceptedAnswer": { "@type": "Answer", "text": "Inclui: limpeza do queimador, verificação do termopar, limpeza do permutador de calor, teste de estanquicidade (fugas de gás), verificação da tiragem, limpeza dos filtros de água, ajuste da pressão de gás e teste de funcionamento completo." } },
 { "@type": "Question", "name": "Quanto custa a manutenção do esquentador em 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Manutenção anual completa (limpeza e verificação): 60€ a 90€. Arranjo com substituição de peças: 80€ a 150€, dependendo do componente. Preços para esquentadores domésticos, deslocação incluída na zona de Macedo de Cavaleiros e Bragança." } },
 { "@type": "Question", "name": "A chama do esquentador deve ser azul ou amarela?", "acceptedAnswer": { "@type": "Answer", "text": "A chama deve ser sempre azul. Chama amarela ou alaranjada indica combustão incompleta e produção de monóxido de carbono — perigoso para a saúde. Agende manutenção urgente com um técnico com experiência." } },
 { "@type": "Question", "name": "O que fazer se sentir cheiro a gás no esquentador?", "acceptedAnswer": { "@type": "Answer", "text": "Urgente: não acenda luzes nem fósforos. Abra todas as janelas, feche a torneira geral de gás, saia de casa mediante confirmação e ligue para o técnico do exterior. Nunca ignore cheiro a gás — risco de explosão e intoxicação." } }
 ]
 });
 document.head.appendChild(faqScript);
 }, []);
 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-grow">
 {/* Hero */}
 <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
 <div className="container">
 <div className="max-w-3xl mx-auto text-center">
 <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-bold mb-4">
 🔥 GUIA COMPLETO 2026
 </span>
 <h1 className="text-4xl md:text-5xl font-black mb-6">
 Manutenção do Esquentador
 </h1>
 <p className="text-xl opacity-90">
 Um esquentador bem mantido dura 15+ anos. Saiba como cuidar do seu.
 </p>
 </div>
 </div>
 </section>
 {/* Content */}
 <article className="py-16">
 <div className="container max-w-3xl">
 
 {/* Importância */}
 <section className="mb-12">
 <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
 <Flame className="w-7 h-7 text-blue-600" />
 Porque é Importante a Manutenção?
 </h2>
 <div className="grid md:grid-cols-2 gap-4">
 {[
 { titulo: "Segurança", desc: "Previne fugas de gás e intoxicação por monóxido de carbono" },
 { titulo: "Eficiência", desc: "Esquentador limpo gasta menos gás — poupa até 15%" },
 { titulo: "Durabilidade", desc: "Manutenção regular duplica a vida útil do aparelho" },
 { titulo: "Garantia", desc: "Muitas garantias exigem manutenção anual documentada" },
 ].map((item, i) => (
 <div key={i} className="p-4 bg-blue-50 rounded-lg">
 <div className="flex items-center gap-2 mb-2">
 <CheckCircle className="w-5 h-5 text-blue-600" />
 <strong>{item.titulo}</strong>
 </div>
 <p className="text-sm text-gray-600">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>
 {/* Frequência */}
 <section className="mb-12">
 <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
 <Calendar className="w-7 h-7 text-blue-600" />
 Quando Fazer Manutenção?
 </h2>
 <div className="bg-gray-50 rounded-xl p-6">
 <div className="space-y-4">
 <div className="flex items-center justify-between p-4 bg-white rounded-lg">
 <div>
 <strong>Revisão Anual</strong>
 <p className="text-sm text-gray-600">Limpeza completa e verificação de segurança</p>
 </div>
 <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">Obrigatória</span>
 </div>
 <div className="flex items-center justify-between p-4 bg-white rounded-lg">
 <div>
 <strong>Antes do Inverno</strong>
 <p className="text-sm text-gray-600">Ideal fazer em Setembro/Outubro</p>
 </div>
 <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm font-bold">Recomendado</span>
 </div>
 <div className="flex items-center justify-between p-4 bg-white rounded-lg">
 <div>
 <strong>Após 10 Anos</strong>
 <p className="text-sm text-gray-600">Considerar substituição ou revisão profunda</p>
 </div>
 <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">Avaliar</span>
 </div>
 </div>
 </div>
 </section>
 {/* Sinais de Problemas */}
 <section className="mb-12">
 <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
 <AlertTriangle className="w-7 h-7 text-orange-500" />
 Sinais de que Precisa de Manutenção Urgente
 </h2>
 <div className="space-y-3">
 {[
 { sinal: "Água não aquece como antes", urgencia: "media" },
 { sinal: "Chama amarela em vez de azul", urgencia: "alta" },
 { sinal: "Cheiro a gás (mesmo leve)", urgencia: "critica" },
 { sinal: "Esquentador faz barulhos estranhos", urgencia: "media" },
 { sinal: "Água sai às vezes quente, às vezes fria", urgencia: "media" },
 { sinal: "Fuligem ou manchas pretas no aparelho", urgencia: "alta" },
 { sinal: "Piloto apaga-se frequentemente", urgencia: "media" },
 { sinal: "Demora muito a aquecer", urgencia: "media" },
 ].map((item, i) => (
 <div key={i} className={`flex items-center justify-between p-4 rounded-lg ${
 item.urgencia === 'critica' ? 'bg-red-50 border-l-4 border-red-500' :
 item.urgencia === 'alta' ? 'bg-orange-50 border-l-4 border-orange-500' :
 'bg-yellow-50 border-l-4 border-yellow-500'
 }`}>
 <span>{item.sinal}</span>
 <span className={`text-xs font-bold px-2 py-1 rounded ${
 item.urgencia === 'critica' ? 'bg-red-500 text-white' :
 item.urgencia === 'alta' ? 'bg-orange-500 text-white' :
 'bg-yellow-500 text-white'
 }`}>
 {item.urgencia === 'critica' ? '🚨 URGENTE' : 
 item.urgencia === 'alta' ? '⚠️ BREVE' : '📅 AGENDAR'}
 </span>
 </div>
 ))}
 </div>
 
 <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
 <strong className="text-red-700">⚠️ ATENÇÃO:</strong>
 <p className="text-gray-700 mt-1">
 Se sentir cheiro a gás, <strong>não acenda luzes nem fósforos</strong>. 
 Abra janelas, feche a torneira do gás, e saia de casa. Ligue-nos do exterior.
 </p>
 </div>
 </section>
 {/* O que inclui */}
 <section className="mb-12">
 <h2 className="text-2xl font-black mb-4">O Que Inclui uma Manutenção Completa?</h2>
 <div className="grid md:grid-cols-2 gap-4">
 {[
 "Limpeza do queimador",
 "Verificação do termopar",
 "Limpeza do permutador de calor",
 "Teste de estanquicidade (fugas gás)",
 "Verificação da tiragem",
 "Limpeza dos filtros de água",
 "Ajuste da pressão de gás",
 "Teste de funcionamento completo"
 ].map((item, i) => (
 <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
 <CheckCircle className="w-5 h-5 text-green-600" />
 <span>{item}</span>
 </div>
 ))}
 </div>
 </section>
 {/* Preços */}
 <section className="mb-12">
 <h2 className="text-2xl font-black mb-4">Quanto Custa? (Preços 2026)</h2>
 <div className="bg-blue-50 rounded-xl p-6">
 <div className="grid md:grid-cols-2 gap-6">
 <div>
 <h3 className="font-bold mb-2">Manutenção Anual</h3>
 <div className="text-3xl font-black text-blue-600">60€ - 90€</div>
 <p className="text-sm text-gray-600">Limpeza + verificação completa</p>
 </div>
 <div>
 <h3 className="font-bold mb-2">Arranjo</h3>
 <div className="text-3xl font-black text-blue-600">80€ - 150€</div>
 <p className="text-sm text-gray-600">Depende da peça a substituir</p>
 </div>
 </div>
 <p className="mt-4 text-sm text-gray-600">
 * Preços indicativos para esquentadores domésticos. Deslocação incluída na zona de Macedo/Bragança.
 </p>
 </div>
 </section>
 </div>
 </article>
 {/* CTA */}
 <section className="py-16 bg-blue-600 text-white">
 <div className="container text-center">
 <Flame className="w-16 h-16 mx-auto mb-6 opacity-80" />
 <h2 className="text-3xl font-black mb-4">
 Precisa de Manutenção do Esquentador?
 </h2>
 <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
 Agende já a revisão anual. Preço fixo, sem surpresas. Trabalho garantido.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
 <Phone className="w-6 h-6" />
 928 484 451
 </a>
 <a href="https://wa.me/351928484451?text=Olá,%20quero%20agendar%20manutenção%20do%20esquentador" className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-800 transition-all shadow-lg">
 💬 WhatsApp
 </a>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </div>
 );
}
