// Page SEO optimisée: "Quanto Tempo Demora Arranjar Fuga Água" - Intention planification/urgence
// Recherche fréquente: "quanto tempo demora arranjar fuga água", "tempo arranjar fuga", "quanto tempo canalizador"
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { Phone, Clock, AlertTriangle, CheckCircle, Wrench, Zap } from 'lucide-react';
export default function QuantoTempoDemoraArranjarFugaAgua() {
 const { config } = useSite();
 const schemaData = {
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Quanto Tempo Demora Arranjar Fuga de Água? Tempos Reais 2026",
 "description": "Guia completo de tempos para arranjar fugas de água: desde detecção até conclusão",
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
 question: "Quanto tempo demora arranjar fuga de água pequena?",
 answer: "Fuga pequena (torneira, autoclismo): 30 minutos a 1 hora. Inclui: chegada canalizador (30-45 min), diagnóstico (5-10 min), arranjo (15-30 min). Total desde chamada: 1h15 a 2h. Urgente 24h: 928 484 451"
 },
 {
 question: "Quanto tempo demora arranjar fuga de água na parede?",
 answer: "Fuga na parede: 2 a 6 horas. Inclui: detecção exacta (30-60 min), abrir parede (30-60 min), arranjar cano (30-90 min), fechar parede (60-120 min). Pode precisar 2 visitas se precisa secar parede."
 },
 {
 question: "Canalizador demora quanto tempo a chegar?",
 answer: "Urgente 24h: 30-45 minutos em Trás-os-Montes. Horário normal: 1-3 horas. Marcação: mesmo dia ou dia seguinte. Atendemos chamadas urgentes imediatamente: 928 484 451"
 },
 {
 question: "Quanto tempo fico sem água durante arranjo?",
 answer: "Depende: fuga pequena 15-30 min sem água, fuga média 1-2h, fuga grande 2-4h. Avisamos antes de cortar água. Trazemos água emergência se necessário (bebés, idosos)."
 }
 ];
 const tempos = [
 {
 tipo: "Fuga Torneira/Autoclismo",
 tempo: "30min - 1h",
 detalhes: [
 "Chegada: 30-45 min",
 "Diagnóstico: 5-10 min",
 "Arranjo: 15-30 min",
 "Teste: 5 min"
 ],
 urgencia: "BAIXA",
 semAgua: "15-30 min",
 icon: CheckCircle
 },
 {
 tipo: "Fuga Cano Visível",
 tempo: "1h - 2h",
 detalhes: [
 "Chegada: 30-45 min",
 "Diagnóstico: 10-15 min",
 "Substituir troço: 30-60 min",
 "Teste pressão: 10-15 min"
 ],
 urgencia: "MÉDIA",
 semAgua: "45-90 min",
 icon: Wrench
 },
 {
 tipo: "Fuga na Parede (Escondida)",
 tempo: "2h - 6h",
 detalhes: [
 "Chegada: 30-45 min",
 "Detecção exacta: 30-60 min",
 "Abrir parede: 30-60 min",
 "Arranjar cano: 30-90 min",
 "Fechar parede: 60-120 min"
 ],
 urgencia: "ALTA",
 semAgua: "2-4 horas",
 icon: AlertTriangle
 },
 {
 tipo: "Fuga Esquentador",
 tempo: "1h - 3h",
 detalhes: [
 "Chegada: 30-45 min",
 "Diagnóstico: 15-30 min",
 "Arranjo/substituir peça: 30-90 min",
 "Teste segurança: 15-30 min"
 ],
 urgencia: "ALTA",
 semAgua: "1-2 horas",
 icon: Zap
 },
 {
 tipo: "Fuga Contador/Rede",
 tempo: "2h - 8h",
 detalhes: [
 "Chegada: 30-45 min",
 "Contactar empresa águas: 30-60 min",
 "Espera corte rede: 1-4 horas",
 "Arranjo: 30-90 min",
 "Reactivação: 30-60 min"
 ],
 urgencia: "CRÍTICA",
 semAgua: "3-6 horas",
 icon: AlertTriangle
 }
 ];
 const factores = [
 {
 factor: "Gravidade da Fuga",
 impacto: "Fuga pequena: rápido. Fuga grande: mais tempo detecção + arranjo",
 tempo: "+30min a +3h"
 },
 {
 factor: "Localização",
 impacto: "Cano visível: rápido. Parede/chão: precisa abrir + fechar",
 tempo: "+1h a +4h"
 },
 {
 factor: "Acessibilidade",
 impacto: "Fácil acesso: rápido. Difícil acesso (sótão, cave): mais tempo",
 tempo: "+30min a +2h"
 },
 {
 factor: "Hora do Dia",
 impacto: "Dia: normal. Noite/fim-semana: pode demorar mais chegar",
 tempo: "+15min a +1h"
 },
 {
 factor: "Material Necessário",
 impacto: "Material comum: rápido. Material especial: pode precisar ir buscar",
 tempo: "+30min a +2h"
 }
 ];
 return (
 <>
 <Helmet>
 <title>Quanto Tempo Demora Arranjar Fuga de Água? Tempos Reais 2026 | 928 484 451</title>
 <meta name="description" content="Quanto tempo demora arranjar fuga água? 30min-6h dependendo tipo. Canalizador chega 30-45min. Tempos reais + factores. Urgente 24h: 928 484 451" />
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
 Quanto Tempo Demora Arranjar Fuga de Água?
 </h1>
 <p className="text-xl mb-8">
 Tempos reais desde chamada até conclusão: 30 minutos a 6 horas.
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
 href={`https://wa.me/${config.whatsapp}?text=Tenho fuga água. Quanto tempo demora?`}
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
 ⏱️ Tabela de Tempos por Tipo de Fuga
 </h2>
 <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
 Tempos incluem: chegada canalizador + diagnóstico + arranjo + teste
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
 <h3 className="text-2xl font-bold">{item.tipo}</h3>
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
 <div className="text-sm text-gray-600 mb-1">Tempo sem água:</div>
 <div className="text-xl font-bold text-gray-900">{item.semAgua}</div>
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
 {/* Factores que Afectam Tempo */}
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
 {/* Timeline Típica */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">
 📅 Timeline Típica (Fuga Média)
 </h2>
 <div className="max-w-3xl mx-auto">
 <div className="space-y-6">
 {[
 { tempo: "0 min", acao: "Liga para 928 484 451", descricao: "Atendimento imediato, explicamos o que fazer enquanto chegamos" },
 { tempo: "5 min", acao: "Canalizador a caminho", descricao: "Confirmamos chegada em 30-45 minutos" },
 { tempo: "35 min", acao: "Canalizador chega", descricao: "Avaliação visual inicial" },
 { tempo: "45 min", acao: "Diagnóstico completo", descricao: "Identificamos causa exacta e explicamos solução" },
 { tempo: "50 min", acao: "Início arranjo", descricao: "Cortamos água apenas no circuito afectado" },
 { tempo: "90 min", acao: "Arranjo concluído", descricao: "Teste de pressão e verificação sem fugas" },
 { tempo: "100 min", acao: "Limpeza e conclusão", descricao: "Deixamos tudo limpo, água restabelecida" }
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
 Perguntas Frequentes - Tempo Arranjo Fuga
 </h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-white">
 <div className="container mx-auto px-4 text-center">
 <Clock className="w-16 h-16 mx-auto mb-6" />
 <h2 className="text-3xl font-bold mb-4">
 Fuga de Água? Resposta rápida garantida-45 Minutos
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Atendimento urgente 24h em Trás-os-Montes.
 Ligue agora e resolvemos hoje.
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
