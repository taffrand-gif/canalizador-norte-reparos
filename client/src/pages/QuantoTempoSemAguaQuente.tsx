// Page SEO optimisée: "Quanto Tempo Sem Água Quente" - Intention urgence/panique
// Recherche fréquente: "quanto tempo sem agua quente", "esquentador avariado quanto tempo", "quanto tempo arranjar esquentador"
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { Phone, Clock, CheckCircle, AlertTriangle, Wrench, Zap } from 'lucide-react';
export default function QuantoTempoSemAguaQuente() {
 const { config } = useSite();
 const schemaData = {
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Quanto Tempo Sem Água Quente? Esquentador Arranjado em 2-4h",
 "description": "Guia completo de tempos para arranjar esquentador avariado: desde diagnóstico até água quente",
 "author": {
 "@type": "Organization",
 "name": config.businessName
 },
 "publisher": {
 "@type": "Organization",
 "name": config.businessName,
 "telephone": config.phone
 }
 };
 const faqs = [
 {
 question: "Quanto tempo fico sem água quente se esquentador avariar?",
 answer: "Avaria simples: 2-4 horas. Substituir peça: 3-6 horas. Esquentador novo: 4-8 horas. Canalizador chega resposta prioritária. Começamos arranjo imediatamente. Urgente 24h: 928 484 451"
 },
 {
 question: "Canalizador consegue arranjar esquentador no mesmo dia?",
 answer: "SIM, 90% avarias resolvidas mesmo dia. Trazemos peças comuns (termopares, válvulas, membranas). Se precisar peça especial, instalamos provisório até chegar peça. Urgente 24h disponível."
 },
 {
 question: "Quanto tempo demora substituir esquentador completo?",
 answer: "Esquentador novo: 4-8 horas. Inclui: remover antigo, instalar novo, ligar gás, ligar água, testar segurança, certificar gás. Feito em 1 dia. Água quente no final do dia."
 },
 {
 question: "Posso tomar banho quente hoje se esquentador avariar de manhã?",
 answer: "SIM, se ligar de manhã. Chegamos 30-resposta prioritária, arranjamos 2-4h. Se ligar 09:00, água quente 12:00-14:00. Atendemos urgências 24h: 928 484 451"
 }
 ];
 const tempos = [
 {
 tipo: "Avaria Simples",
 problema: "Pilhas, chama piloto, pressão água",
 tempo: "2-4h",
 solucao: "Reparação rápida",
 detalhes: [
 "Chegada: 30-resposta prioritária",
 "Diagnóstico: 15-resposta prioritária",
 "Arranjo: 30-resposta prioritária",
 "Teste água quente: 15-resposta prioritária",
 "Verificação segurança: 15-resposta prioritária"
 ],
 urgencia: "MÉDIA",
 icon: CheckCircle
 },
 {
 tipo: "Substituir Peça",
 problema: "Termopar, válvula, membrana",
 tempo: "3-6h",
 solucao: "Substituição peça",
 detalhes: [
 "Chegada: 30-resposta prioritária",
 "Diagnóstico: 20-resposta prioritária",
 "Buscar peça (se necessário): 30-resposta prioritária",
 "Substituir peça: 45-resposta prioritária",
 "Teste completo: 30-resposta prioritária",
 "Certificar gás: 20-resposta prioritária"
 ],
 urgencia: "ALTA",
 icon: Wrench
 },
 {
 tipo: "Esquentador Novo",
 problema: "Esquentador irreparável",
 tempo: "4-8h",
 solucao: "Instalação completa",
 detalhes: [
 "Chegada: 30-resposta prioritária",
 "Diagnóstico: 20-resposta prioritária",
 "Buscar esquentador: 60-resposta prioritária",
 "Remover antigo: 30-resposta prioritária",
 "Instalar novo: 90-resposta prioritária",
 "Ligar gás + água: 45-resposta prioritária",
 "Teste segurança: 30-resposta prioritária",
 "Certificar gás: resposta prioritária"
 ],
 urgencia: "CRÍTICA",
 icon: AlertTriangle
 },
 {
 tipo: "Fuga Gás",
 problema: "Cheiro gás, fuga detectada",
 tempo: "1-3h",
 solucao: "Reparação urgente",
 detalhes: [
 "Chegada URGENTE: 20-resposta prioritária",
 "Cortar gás: resposta prioritária",
 "Localizar fuga: 15-resposta prioritária",
 "Reparar fuga: 30-resposta prioritária",
 "Teste estanquidade: 20-resposta prioritária",
 "Certificar segurança: resposta prioritária"
 ],
 urgencia: "CRÍTICA",
 icon: Zap
 }
 ];
 const factores = [
 {
 factor: "Tipo de Avaria",
 impacto: "Simples (pilhas): rápido. Peça: médio. Substituir: longo",
 tempo: "+1h a +4h"
 },
 {
 factor: "Disponibilidade Peça",
 impacto: "Peça comum (stock): rápido. Peça especial (encomendar): +1-2 dias",
 tempo: "+resposta prioritária a +48h"
 },
 {
 factor: "Tipo Esquentador",
 impacto: "Gás: normal. Eléctrico: mais rápido. Caldeira: mais complexo",
 tempo: "+resposta prioritária a +2h"
 },
 {
 factor: "Acessibilidade",
 impacto: "Fácil acesso: rápido. Difícil acesso (armário, exterior): mais tempo",
 tempo: "+resposta prioritária a +1h"
 },
 {
 factor: "Certificação Gás",
 impacto: "Certificação obrigatória para esquentadores gás",
 tempo: "20-resposta prioritária"
 }
 ];
 return (
 <>
 <Helmet>
 <title>Quanto Tempo Sem Água Quente? Esquentador Arranjado 2-4h | 928 484 451</title>
 <meta name="description" content="Quanto tempo sem água quente? Esquentador arranjado em 2-4h. Avaria simples: 2-4h, Substituir peça: 3-6h, Novo: 4-8h. Canalizador chega 30-resposta prioritária. Urgente 24h: 928 484 451" />
 <script type="application/ld+json">
 {JSON.stringify(schemaData)}
 </script>
 </Helmet>
 <Header />
 <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
 {/* Hero */}
 <section className="bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-white py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold mb-6">
 <Clock className="w-5 h-5" />
 URGENTE 24H
 </div>
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Quanto Tempo Sem Água Quente?
 </h1>
 <p className="text-xl mb-8">
 Esquentador arranjado em 2-4 horas. Canalizador chega resposta prioritária.
 90% avarias resolvidas no mesmo dia. Atendimento urgente 24h.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-[#2193b0] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg flex items-center justify-center gap-2"
 >
 <Phone className="w-6 h-6" />
 Urgente: {config.phone}
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=Esquentador avariado. Sem água quente. Urgente!`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg"
 >
 💬 WhatsApp
 </a>
 </div>
 </div>
 </div>
 </section>
 {/* Tabela de Tempos */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4">
 ⏱️ Quanto Tempo Até Ter Água Quente?
 </h2>
 <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
 Tempos incluem: chegada + diagnóstico + arranjo + teste água quente
 </p>
 <div className="max-w-5xl mx-auto space-y-6">
 {tempos.map((item, index) => (
 <div key={index} className={`rounded-xl shadow-lg overflow-hidden border-2 ${
 item.urgencia === 'CRÍTICA' ? 'border-red-500 bg-red-50' :
 item.urgencia === 'ALTA' ? 'border-orange-500 bg-orange-50' :
 'border-yellow-500 bg-yellow-50'
 }`}>
 <div className={`p-6 ${
 item.urgencia === 'CRÍTICA' ? 'bg-gradient-to-r from-red-600 to-red-500' :
 item.urgencia === 'ALTA' ? 'bg-gradient-to-r from-orange-600 to-orange-500' :
 'bg-gradient-to-r from-yellow-600 to-yellow-500'
 } text-white`}>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <item.icon className="w-8 h-8" />
 <div>
 <h3 className="text-2xl font-bold">{item.tipo}</h3>
 <p className="text-sm opacity-90">{item.problema}</p>
 </div>
 </div>
 <div className="text-right">
 <div className="text-3xl font-bold">{item.tempo}</div>
 <div className="text-sm opacity-90">até água quente</div>
 </div>
 </div>
 </div>
 <div className="p-6">
 <div className="grid md:grid-cols-2 gap-6">
 <div>
 <h4 className="font-bold text-gray-900 mb-3">Etapas:</h4>
 <ul className="space-y-2">
 {item.detalhes.map((detalhe, i) => (
 <li key={i} className="flex items-start gap-2 text-gray-700">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
 <span>{detalhe}</span>
 </li>
 ))}
 </ul>
 </div>
 <div className="space-y-4">
 <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
 <div className="text-sm text-gray-600 mb-1">Solução:</div>
 <div className="text-xl font-bold text-gray-900">{item.solucao}</div>
 </div>
 <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
 <div className="text-sm text-gray-600 mb-1">Urgência:</div>
 <div className={`text-xl font-bold ${
 item.urgencia === 'CRÍTICA' ? 'text-red-600' :
 item.urgencia === 'ALTA' ? 'text-orange-600' :
 'text-yellow-600'
 }`}>{item.urgencia}</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* Factores */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">
 ⚙️ Factores que Afectam o Tempo
 </h2>
 <div className="max-w-4xl mx-auto space-y-4">
 {factores.map((item, index) => (
 <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#2193b0]">
 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-2">{item.factor}</h3>
 <p className="text-gray-600">{item.impacto}</p>
 </div>
 <div className="bg-blue-50 px-4 py-2 rounded-lg text-center">
 <div className="text-sm text-gray-600">Impacto</div>
 <div className="text-lg font-bold text-[#2193b0]">{item.tempo}</div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* Timeline */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">
 📅 Timeline Típica (Avaria Simples)
 </h2>
 <div className="max-w-3xl mx-auto">
 <div className="space-y-6">
 {[
 { tempo: "09:00", acao: "Liga para 928 484 451", descricao: "Sem água quente. Atendimento imediato." },
 { tempo: "09:05", acao: "Canalizador a caminho", descricao: "Confirmamos chegada resposta prioritária" },
 { tempo: "09:35", acao: "Canalizador chega", descricao: "Avaliação esquentador e diagnóstico" },
 { tempo: "09:50", acao: "Diagnóstico completo", descricao: "Identificamos problema: termopar avariado" },
 { tempo: "10:00", acao: "Início reparação", descricao: "Substituição termopar (peça em stock)" },
 { tempo: "11:00", acao: "Reparação concluída", descricao: "Esquentador ligado, chama estável" },
 { tempo: "11:15", acao: "Teste água quente", descricao: "Verificação temperatura e pressão" },
 { tempo: "11:30", acao: "Água quente OK!", descricao: "Pode tomar banho. Certificação emitida." }
 ].map((step, index) => (
 <div key={index} className="flex gap-4">
 <div className="flex flex-col items-center">
 <div className="w-12 h-12 bg-[#2193b0] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
 {index + 1}
 </div>
 {index < 7 && <div className="w-0.5 h-full bg-[#2193b0] mt-2"></div>}
 </div>
 <div className="flex-1 pb-8">
 <div className="bg-blue-50 p-4 rounded-lg">
 <div className="flex items-center gap-3 mb-2">
 <Clock className="w-5 h-5 text-[#2193b0]" />
 <span className="font-bold text-[#2193b0]">{step.tempo}</span>
 <span className="text-gray-900 font-semibold">{step.acao}</span>
 </div>
 <p className="text-gray-600 text-sm ml-8">{step.descricao}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 {/* FAQ */}
 <section className="py-16 bg-gray-50">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-12">
 Perguntas Frequentes - Tempo Sem Água Quente
 </h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-white">
 <div className="container mx-auto px-4 text-center">
 <Clock className="w-16 h-16 mx-auto mb-6" />
 <h2 className="text-3xl font-bold mb-4">
 Sem Água Quente? Arranjamos em 2-4 Horas
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Canalizador chega resposta prioritária. 90% avarias resolvidas mesmo dia.
 Atendimento urgente 24h em Trás-os-Montes.
 </p>
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-[#2193b0] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors inline-flex items-center gap-2 shadow-lg"
 >
 <Phone className="w-6 h-6" />
 {config.phone}
 </a>
 </div>
 </section>
 </main>
 <Footer />
 </>
 );
}
