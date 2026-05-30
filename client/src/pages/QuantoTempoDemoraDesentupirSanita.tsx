// Page SEO optimisée: "Quanto Tempo Demora Desentupir Sanita" - Intention planification/urgence
// Recherche fréquente: "quanto tempo demora desentupir sanita", "tempo desentupir wc", "quanto tempo canalizador"
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { Phone, Clock, CheckCircle, AlertTriangle, Wrench, Zap } from 'lucide-react';
export default function QuantoTempoDemoraDesentupirSanita() {
 const { config } = useSite();
 const schemaData = {
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Quanto Tempo Demora Desentupir Sanita? Tempos Reais 2026",
 "description": "Guia completo de tempos para desentupir sanita: desde diagnóstico até conclusão",
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
 question: "Quanto tempo demora desentupir sanita entupida?",
 answer: "Entupimento simples: 15-30 minutos. Entupimento médio: 30-60 minutos. Entupimento grave: 1-3 horas. Inclui: diagnóstico, desentupimento, teste, limpeza. Canalizador chega em 30-45 min. Urgente 24h: 928 484 451"
 },
 {
 question: "Posso usar sanita logo após desentupir?",
 answer: "SIM, imediatamente após teste final (5-10 min). Fazemos teste completo: descarga normal, papel higiénico, verificação escoamento. Se tudo OK, pode usar normalmente."
 },
 {
 question: "Quanto tempo canalizador demora a chegar?",
 answer: "Urgente 24h: 30-45 minutos em Trás-os-Montes. Horário normal: 1-3 horas. Atendemos chamadas urgentes imediatamente. Sanita entupida é prioridade: 928 484 451"
 },
 {
 question: "Quanto tempo fico sem usar sanita?",
 answer: "Tempo total sem usar: 15 minutos a 3 horas (durante desentupimento). Se tiver 2ª casa de banho, use essa. Se não, avisamos tempo exacto e trabalhamos rápido."
 }
 ];
 const tempos = [
 {
 tipo: "Entupimento Simples",
 causa: "Papel higiénico, pequeno objecto",
 tempo: "15-30 min",
 metodo: "Ventosa manual",
 detalhes: [
 "Chegada: 30-45 min",
 "Diagnóstico: 5 min",
 "Desentupir ventosa: 5-10 min",
 "Teste: 5 min",
 "Limpeza: 5 min"
 ],
 urgencia: "BAIXA",
 icon: CheckCircle
 },
 {
 tipo: "Entupimento Médio",
 causa: "Acumulação papel, toalhitas",
 tempo: "30-60 min",
 metodo: "Mola desentupidora",
 detalhes: [
 "Chegada: 30-45 min",
 "Diagnóstico: 10 min",
 "Desentupir mola: 15-30 min",
 "Teste pressão: 10 min",
 "Limpeza: 10 min"
 ],
 urgencia: "MÉDIA",
 icon: Wrench
 },
 {
 tipo: "Entupimento Grave",
 causa: "Objecto grande, raízes",
 tempo: "1-3h",
 metodo: "Máquina profissional",
 detalhes: [
 "Chegada: 30-45 min",
 "Diagnóstico câmara: 15-20 min",
 "Desentupir máquina: 30-90 min",
 "Teste completo: 15-20 min",
 "Limpeza profunda: 15-20 min"
 ],
 urgencia: "ALTA",
 icon: AlertTriangle
 },
 {
 tipo: "Entupimento Canalização",
 causa: "Problema tubagem principal",
 tempo: "2-4h",
 metodo: "Desentupimento completo",
 detalhes: [
 "Chegada: 30-45 min",
 "Diagnóstico câmara: 20-30 min",
 "Localizar bloqueio: 30-60 min",
 "Desentupir máquina: 60-120 min",
 "Teste sistema: 20-30 min",
 "Limpeza: 20 min"
 ],
 urgencia: "CRÍTICA",
 icon: Zap
 }
 ];
 const factores = [
 {
 factor: "Tipo de Entupimento",
 impacto: "Papel: rápido. Objecto sólido: mais tempo. Raízes: muito tempo",
 tempo: "+10min a +2h"
 },
 {
 factor: "Localização Bloqueio",
 impacto: "Sanita: rápido. Tubagem: médio. Canalização principal: longo",
 tempo: "+15min a +3h"
 },
 {
 factor: "Acessibilidade",
 impacto: "Fácil acesso: rápido. Difícil acesso (cave, exterior): mais tempo",
 tempo: "+20min a +1h"
 },
 {
 factor: "Equipamento Necessário",
 impacto: "Ventosa: rápido. Mola: médio. Máquina profissional: mais tempo",
 tempo: "+10min a +1h30"
 },
 {
 factor: "Estado Canalização",
 impacto: "Canos novos: rápido. Canos antigos (calcário, ferrugem): mais tempo",
 tempo: "+15min a +1h"
 }
 ];
 return (
 <>
 <Helmet>
 <title>Quanto Tempo Demora Desentupir Sanita? Tempos Reais 2026 | 928 484 451</title>
 <meta name="description" content="Quanto tempo demora desentupir sanita? 15min-3h dependendo gravidade. Simples: 15-30min, Médio: 30-60min, Grave: 1-3h. Canalizador chega 30-45min. Urgente 24h: 928 484 451" />
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
 TEMPOS REAIS 2026
 </div>
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Quanto Tempo Demora Desentupir Sanita?
 </h1>
 <p className="text-xl mb-8">
 Tempos reais: 15 minutos a 3 horas dependendo gravidade.
 Canalizador chega em 30-45 minutos. Atendimento urgente 24h.
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
 href={`https://wa.me/${config.whatsapp}?text=Sanita entupida. Quanto tempo demora?`}
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
 ⏱️ Tabela de Tempos por Gravidade
 </h2>
 <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
 Tempos incluem: chegada canalizador + diagnóstico + desentupimento + teste
 </p>
 <div className="max-w-5xl mx-auto space-y-6">
 {tempos.map((item, index) => (
 <div key={index} className={`rounded-xl shadow-lg overflow-hidden border-2 ${
 item.urgencia === 'CRÍTICA' ? 'border-red-500 bg-red-50' :
 item.urgencia === 'ALTA' ? 'border-orange-500 bg-orange-50' :
 item.urgencia === 'MÉDIA' ? 'border-yellow-500 bg-yellow-50' :
 'border-green-500 bg-green-50'
 }`}>
 <div className={`p-6 ${
 item.urgencia === 'CRÍTICA' ? 'bg-gradient-to-r from-red-600 to-red-500' :
 item.urgencia === 'ALTA' ? 'bg-gradient-to-r from-orange-600 to-orange-500' :
 item.urgencia === 'MÉDIA' ? 'bg-gradient-to-r from-yellow-600 to-yellow-500' :
 'bg-gradient-to-r from-green-600 to-green-500'
 } text-white`}>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <item.icon className="w-8 h-8" />
 <div>
 <h3 className="text-2xl font-bold">{item.tipo}</h3>
 <p className="text-sm opacity-90">{item.causa}</p>
 </div>
 </div>
 <div className="text-right">
 <div className="text-3xl font-bold">{item.tempo}</div>
 <div className="text-sm opacity-90">tempo total</div>
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
 <div className="text-sm text-gray-600 mb-1">Método:</div>
 <div className="text-xl font-bold text-gray-900">{item.metodo}</div>
 </div>
 <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
 <div className="text-sm text-gray-600 mb-1">Urgência:</div>
 <div className={`text-xl font-bold ${
 item.urgencia === 'CRÍTICA' ? 'text-red-600' :
 item.urgencia === 'ALTA' ? 'text-orange-600' :
 item.urgencia === 'MÉDIA' ? 'text-yellow-600' :
 'text-green-600'
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
 📅 Timeline Típica (Entupimento Médio)
 </h2>
 <div className="max-w-3xl mx-auto">
 <div className="space-y-6">
 {[
 { tempo: "0 min", acao: "Liga para 928 484 451", descricao: "Atendimento imediato, explicamos o que NÃO fazer" },
 { tempo: "5 min", acao: "Canalizador a caminho", descricao: "Confirmamos chegada em 30-45 minutos" },
 { tempo: "35 min", acao: "Canalizador chega", descricao: "Avaliação visual e diagnóstico" },
 { tempo: "45 min", acao: "Início desentupimento", descricao: "Uso mola desentupidora profissional" },
 { tempo: "60 min", acao: "Desentupimento concluído", descricao: "Bloqueio removido, canalização livre" },
 { tempo: "70 min", acao: "Teste completo", descricao: "Descarga normal + papel + verificação escoamento" },
 { tempo: "80 min", acao: "Limpeza e conclusão", descricao: "Sanita limpa, pode usar imediatamente" }
 ].map((step, index) => (
 <div key={index} className="flex gap-4">
 <div className="flex flex-col items-center">
 <div className="w-12 h-12 bg-[#2193b0] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
 {index + 1}
 </div>
 {index < 6 && <div className="w-0.5 h-full bg-[#2193b0] mt-2"></div>}
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
 Perguntas Frequentes - Tempo Desentupir Sanita
 </h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-white">
 <div className="container mx-auto px-4 text-center">
 <Clock className="w-16 h-16 mx-auto mb-6" />
 <h2 className="text-3xl font-bold mb-4">
 Sanita Entupida? Chegamos em 30-45 Minutos
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Atendimento urgente 24h em Trás-os-Montes.
 Resolvemos hoje, pode usar sanita imediatamente após.
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
