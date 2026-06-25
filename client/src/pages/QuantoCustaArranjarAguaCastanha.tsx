// Page SEO optimisée: "Quanto Custa Arranjar Água Castanha" - Intention commerciale
// Recherche fréquente: "quanto custa arranjar água castanha", "preço arranjar água amarela", "água suja torneira preço"
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { Phone, Euro, CheckCircle, AlertTriangle, Clock, Wrench } from 'lucide-react';
export default function QuantoCustaArranjarAguaCastanha() {
 const { config } = useSite();
 const schemaData = {
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Quanto Custa Arranjar Água Castanha da Torneira? Preços 2026",
 "description": "Guia completo de preços para arranjar água castanha: causas, soluções e custos detalhados",
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
 question: "Quanto custa arranjar água castanha da torneira?",
 answer: "Depende da causa: limpeza filtros/arejadores 40-60€, substituir troço cano 80-120€, limpeza depósito 100-150€, substituir canalização completa 500-2000€. Inclui deslocação, diagnóstico, mão-de-obra e material. Sem compromisso: 928 484 451"
 },
 {
 question: "Porque é que a água sai castanha da torneira?",
 answer: "Principais causas: ferrugem em canos velhos de ferro, sedimentos acumulados no depósito, trabalhos na rede pública (temporário), canos corroídos, filtros sujos. Diagnóstico profissional identifica causa exata."
 },
 {
 question: "É perigoso beber água castanha?",
 answer: "SIM, não beba água castanha. Pode conter ferrugem, bactérias, sedimentos ou contaminantes. Use água engarrafada até resolver o problema. Água castanha pode causar problemas de saúde."
 },
 {
 question: "Quanto tempo demora a arranjar água castanha?",
 answer: "Depende da causa: limpeza filtros A confirmar, substituir troço cano 2-4 horas, limpeza depósito 3-5 horas, substituir canalização 1-3 dias. Diagnóstico gratuito: 928 484 451"
 }
 ];
 const precos = [
 {
 servico: "Limpeza Filtros/Arejadores",
 preco: "40-60€",
 tempo: "A confirmar",
 descricao: "Limpeza de filtros entupidos com sedimentos ou ferrugem"
 },
 {
 servico: "Substituir Troço Cano",
 preco: "80-120€",
 tempo: "2-4 horas",
 descricao: "Substituir secção de cano enferrujado (até 2 metros)"
 },
 {
 servico: "Limpeza Depósito Água",
 preco: "100-150€",
 tempo: "3-5 horas",
 descricao: "Limpeza completa de depósito com sedimentos acumulados"
 },
 {
 servico: "Substituir Canalização Completa",
 preco: "500-2000€",
 tempo: "1-3 dias",
 descricao: "Substituir canalização velha de ferro por PEX/PPR (depende tamanho casa)"
 }
 ];
 const causas = [
 {
 causa: "Ferrugem em Canos Velhos",
 solucao: "Substituir canos de ferro por PEX/PPR",
 urgencia: "Média"
 },
 {
 causa: "Sedimentos no Depósito",
 solucao: "Limpeza profissional do depósito",
 urgencia: "Média"
 },
 {
 causa: "Trabalhos na Rede Pública",
 solucao: "Deixar água correr A confirmar (temporário)",
 urgencia: "Baixa"
 },
 {
 causa: "Canos Corroídos",
 solucao: "Substituir troços afetados",
 urgencia: "Alta"
 },
 {
 causa: "Filtros Entupidos",
 solucao: "Limpeza ou substituição de filtros",
 urgencia: "Baixa"
 }
 ];
 return (
 <>
 <Helmet>
 <title>Quanto Custa Arranjar Água Castanha da Torneira? Preços 2026 | 928 484 451</title>
 <meta name="description" content="Água castanha da torneira? Preços arranjo 2026: 40-150€. Causas: ferrugem, canos velhos, sedimentos. Orçamento grátis: 928 484 451" />
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
 <Euro className="w-5 h-5" />
 PREÇOS TRANSPARENTES 2026
 </div>
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Quanto Custa Arranjar Água Castanha da Torneira?
 </h1>
 <p className="text-xl mb-8">
 Preços claros e honestos. Sem compromisso sem compromisso.
 Atendimento 24h em Trás-os-Montes.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-[#2193b0] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg flex items-center justify-center gap-2"
 >
 <Phone className="w-6 h-6" />
 Orçamento Grátis: {config.phone}
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=Preciso orçamento para arranjar água castanha`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg"
 >
 💬 WhatsApp Orçamento
 </a>
 </div>
 </div>
 </div>
 </section>
 {/* Tabela de Preços */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4">
 💰 Tabela de Preços - Água Castanha 2026
 </h2>
 <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
 Preços incluem: deslocação, diagnóstico, mão-de-obra e material básico.
 Orçamento final após diagnóstico no local.
 </p>
 <div className="max-w-5xl mx-auto space-y-4">
 {precos.map((item, index) => (
 <div key={index} className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl shadow-md border border-blue-100">
 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-2">{item.servico}</h3>
 <p className="text-gray-600">{item.descricao}</p>
 </div>
 <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
 <div className="text-center">
 <div className="text-sm text-gray-500 mb-1">Preço</div>
 <div className="text-2xl font-bold text-[#2193b0]">{item.preco}</div>
 </div>
 <div className="text-center">
 <div className="text-sm text-gray-500 mb-1">Tempo</div>
 <div className="text-lg font-semibold text-gray-700">{item.tempo}</div>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 <div className="mt-8 text-center">
 <p className="text-gray-600 mb-4">
 ✅ Sem compromisso sem compromisso<br />
 ✅ Preços finais após diagnóstico no local<br />
 ✅ Garantia de Orçamento por escrito
 </p>
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="inline-flex items-center gap-2 bg-[#2193b0] hover:bg-[#1a7a94] text-white font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg"
 >
 <Phone className="w-6 h-6" />
 Pedir Orçamento: {config.phone}
 </a>
 </div>
 </div>
 </section>
 {/* Causas e Soluções */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">
 🔍 Causas Comuns e Soluções
 </h2>
 <div className="max-w-4xl mx-auto space-y-4">
 {causas.map((item, index) => (
 <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#2193b0]">
 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
 <div className="flex-1">
 <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
 <Wrench className="w-5 h-5 text-[#2193b0]" />
 {item.causa}
 </h3>
 <p className="text-gray-600">
 <span className="font-semibold">Solução:</span> {item.solucao}
 </p>
 </div>
 <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
 item.urgencia === 'Alta' ? 'bg-red-100 text-red-700' :
 item.urgencia === 'Média' ? 'bg-orange-100 text-orange-700' :
 'bg-green-100 text-green-700'
 }`}>
 Urgência: {item.urgencia}
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* O Que Está Incluído */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">
 ✅ O Que Está Incluído no Preço
 </h2>
 <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
 {[
 { icon: CheckCircle, text: "Deslocação gratuita em Trás-os-Montes" },
 { icon: CheckCircle, text: "Diagnóstico completo da causa" },
 { icon: CheckCircle, text: "Mão-de-obra especializada" },
 { icon: CheckCircle, text: "Material básico necessário" },
 { icon: CheckCircle, text: "Garantia de Orçamento por escrito" },
 { icon: CheckCircle, text: "Limpeza após intervenção" }
 ].map((item, index) => (
 <div key={index} className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
 <item.icon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
 <span className="text-gray-700">{item.text}</span>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* Quando Chamar Canalizador */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">
 ⚠️ Quando Chamar Canalizador URGENTE
 </h2>
 <div className="max-w-3xl mx-auto space-y-4">
 {[
 "Água castanha há mais de Atendimento 24h/7d (não é trabalhos na rede)",
 "Água com cheiro forte ou partículas visíveis",
 "Água castanha só numa torneira específica",
 "Pressão de água baixa + água castanha",
 "Manchas castanhas em sanita, lavatório ou banheira"
 ].map((item, index) => (
 <div key={index} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500 flex items-start gap-3">
 <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
 <span className="text-gray-700">{item}</span>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* FAQ */}
 <section className="py-16 bg-white">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-12">
 Perguntas Frequentes - Água Castanha
 </h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-white">
 <div className="container mx-auto px-4 text-center">
 <Clock className="w-16 h-16 mx-auto mb-6" />
 <h2 className="text-3xl font-bold mb-4">
 Precisa Arranjar Água Castanha?
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Sem compromisso sem compromisso. Atendimento 24h.
 Disponível 24h/7 dias.
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
