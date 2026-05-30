// Page SEO optimisée: "Vale a Pena Arranjar ou Substituir" - Intention comparaison
// Recherche fréquente: "vale pena arranjar esquentador", "substituir vs arranjar caldeira", "quando substituir"
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { Phone, Scale, CheckCircle, XCircle, AlertTriangle, Calculator } from 'lucide-react';
export default function ValePenaArranjarVsSubstituir() {
 const { config } = useSite();
 const faqs = [
 {
 question: "Como saber se vale a pena arranjar ou substituir?",
 answer: "Regra geral: se o custo do arranjo for mais de 50% do preço de substituição E o equipamento tiver mais de 70% da vida útil, substitua. Considere também: frequência de avarias, eficiência energética, garantia restante."
 },
 {
 question: "Esquentador com 15 anos: arranjar ou substituir?",
 answer: "SUBSTITUIR. Vida útil média: 10-12 anos. Com 15 anos, mesmo arranjado, terá mais avarias em breve. Esquentador novo: mais eficiente (-30% gás), mais seguro, garantia 2-5 anos. Investimento compensa."
 },
 {
 question: "Quanto custa arranjar vs substituir esquentador?",
 answer: "Arranjo: 80-200€ (depende avaria). Substituir: 400-800€ (esquentador novo + instalação). Se arranjo custar >200€ e esquentador tiver >10 anos, substitua."
 },
 {
 question: "Canos velhos: arranjar troço ou substituir tudo?",
 answer: "Depende: 1 fuga isolada = arranjar troço (80-150€). Fugas frequentes ou canos >30 anos = substituir tudo (1500-4000€). Canos velhos terão mais fugas. Avaliação gratuita: 928 484 451"
 }
 ];
 const comparacoes = [
 {
 equipamento: "Esquentador",
 arranjar: {
 custo: "80-200€",
 quando: "< 8 anos, avaria simples (termóstato, pilhas)",
 vantagens: ["Custo baixo imediato", "Rápido (1-2h)"],
 desvantagens: ["Pode avariar novamente", "Menos eficiente"]
 },
 substituir: {
 custo: "400-800€",
 quando: "> 10 anos, avarias frequentes, ineficiente",
 vantagens: ["Garantia 2-5 anos", "Eficiência -30% gás", "Segurança moderna"],
 desvantagens: ["Custo inicial alto", "Instalação 3-5h"]
 },
 recomendacao: "Substituir se >10 anos OU arranjo >200€"
 },
 {
 equipamento: "Caldeira",
 arranjar: {
 custo: "100-300€",
 quando: "< 10 anos, avaria componente específico",
 vantagens: ["Mantém equipamento conhecido", "Custo moderado"],
 desvantagens: ["Peças caras", "Eficiência degradada"]
 },
 substituir: {
 custo: "800-2000€",
 quando: "> 15 anos, avarias repetidas, consumo alto",
 vantagens: ["Eficiência A+++", "Poupança 40% energia", "Garantia 5 anos"],
 desvantagens: ["Investimento alto", "Instalação complexa"]
 },
 recomendacao: "Substituir se >15 anos OU arranjo >300€"
 },
 {
 equipamento: "Canalização",
 arranjar: {
 custo: "80-150€/troço",
 quando: "Fuga isolada, canos <20 anos",
 vantagens: ["Resolve problema imediato", "Sem obras grandes"],
 desvantagens: ["Outros troços podem fugar", "Solução temporária"]
 },
 substituir: {
 custo: "1500-4000€",
 quando: "Canos >30 anos, fugas frequentes, ferrugem",
 vantagens: ["Solução definitiva 30+ anos", "Sem fugas futuras", "Valoriza imóvel"],
 desvantagens: ["Custo alto", "Obras 3-7 dias"]
 },
 recomendacao: "Substituir se >30 anos OU >3 fugas/ano"
 },
 {
 equipamento: "Sanita",
 arranjar: {
 custo: "40-100€",
 quando: "Autoclismo avariado, fuga pequena",
 vantagens: ["Barato", "Rápido (30-60 min)"],
 desvantagens: ["Peças velhas podem avariar", "Consumo água alto"]
 },
 substituir: {
 custo: "150-400€",
 quando: "Rachada, fuga base, >20 anos, consumo alto",
 vantagens: ["Dupla descarga (poupança 50% água)", "Design moderno", "Sem fugas"],
 desvantagens: ["Custo moderado", "Instalação 2-3h"]
 },
 recomendacao: "Substituir se rachada OU >20 anos"
 }
 ];
 const criterios = [
 {
 criterio: "Idade do Equipamento",
 arranjar: "< 70% vida útil esperada",
 substituir: "> 70% vida útil esperada",
 icon: AlertTriangle
 },
 {
 criterio: "Custo do Arranjo",
 arranjar: "< 50% preço substituição",
 substituir: "> 50% preço substituição",
 icon: Calculator
 },
 {
 criterio: "Frequência Avarias",
 arranjar: "Primeira avaria",
 substituir: "2+ avarias no último ano",
 icon: XCircle
 },
 {
 criterio: "Eficiência Energética",
 arranjar: "Consumo normal",
 substituir: "Consumo 30%+ acima normal",
 icon: CheckCircle
 },
 {
 criterio: "Disponibilidade Peças",
 arranjar: "Peças disponíveis e baratas",
 substituir: "Peças descontinuadas ou caras",
 icon: Scale
 }
 ];
 return (
 <>
 <Helmet>
 <title>Vale a Pena Arranjar ou Substituir? Guia Completo 2026 | 928 484 451</title>
 <meta name="description" content="Vale a pena arranjar ou substituir? Guia completo: esquentador, caldeira, canos, sanita. Critérios decisão + comparação custos. Orçamento grátis: 928 484 451" />
 </Helmet>
 <Header />
 <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
 {/* Hero */}
 <section className="bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-white py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold mb-6">
 <Scale className="w-5 h-5" />
 GUIA DE DECISÃO 2026
 </div>
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Vale a Pena Arranjar ou Substituir?
 </h1>
 <p className="text-xl mb-8">
 Guia completo para tomar a decisão certa: esquentador, caldeira, canos, sanita.
 Comparação de custos + critérios de decisão.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-[#2193b0] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg flex items-center justify-center gap-2"
 >
 <Phone className="w-6 h-6" />
 Avaliação Grátis: {config.phone}
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=Preciso ajuda para decidir: arranjar ou substituir?`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg"
 >
 💬 WhatsApp Consulta
 </a>
 </div>
 </div>
 </div>
 </section>
 {/* Critérios de Decisão */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4">
 ⚖️ Critérios de Decisão: Arranjar vs Substituir
 </h2>
 <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
 Use estes critérios para tomar a decisão certa
 </p>
 <div className="max-w-5xl mx-auto space-y-4">
 {criterios.map((item, index) => (
 <div key={index} className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl shadow-md border border-blue-100">
 <div className="flex items-center gap-4 mb-4">
 <div className="w-12 h-12 bg-[#2193b0] rounded-full flex items-center justify-center flex-shrink-0">
 <item.icon className="w-6 h-6 text-white" />
 </div>
 <h3 className="text-xl font-bold text-gray-900">{item.criterio}</h3>
 </div>
 <div className="grid md:grid-cols-2 gap-4 ml-16">
 <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
 <div className="font-semibold text-green-700 mb-2 flex items-center gap-2">
 <CheckCircle className="w-5 h-5" />
 ARRANJAR
 </div>
 <p className="text-gray-700">{item.arranjar}</p>
 </div>
 <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
 <div className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
 <XCircle className="w-5 h-5" />
 SUBSTITUIR
 </div>
 <p className="text-gray-700">{item.substituir}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* Comparações Detalhadas */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">
 📊 Comparação Detalhada por Equipamento
 </h2>
 <div className="max-w-6xl mx-auto space-y-8">
 {comparacoes.map((comp, index) => (
 <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
 <div className="bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-white p-6">
 <h3 className="text-2xl font-bold">{comp.equipamento}</h3>
 </div>
 <div className="grid md:grid-cols-2 gap-6 p-6">
 {/* Arranjar */}
 <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
 <div className="flex items-center gap-2 mb-4">
 <CheckCircle className="w-6 h-6 text-green-600" />
 <h4 className="text-xl font-bold text-green-700">ARRANJAR</h4>
 </div>
 <div className="mb-4">
 <div className="text-sm text-gray-600 mb-1">Custo</div>
 <div className="text-2xl font-bold text-green-600">{comp.arranjar.custo}</div>
 </div>
 <div className="mb-4">
 <div className="text-sm font-semibold text-gray-700 mb-2">Quando arranjar:</div>
 <p className="text-gray-600">{comp.arranjar.quando}</p>
 </div>
 <div className="mb-4">
 <div className="text-sm font-semibold text-gray-700 mb-2">✅ Vantagens:</div>
 <ul className="space-y-1">
 {comp.arranjar.vantagens.map((v, i) => (
 <li key={i} className="text-gray-600 text-sm">• {v}</li>
 ))}
 </ul>
 </div>
 <div>
 <div className="text-sm font-semibold text-gray-700 mb-2">⚠️ Desvantagens:</div>
 <ul className="space-y-1">
 {comp.arranjar.desvantagens.map((d, i) => (
 <li key={i} className="text-gray-600 text-sm">• {d}</li>
 ))}
 </ul>
 </div>
 </div>
 {/* Substituir */}
 <div className="border-2 border-orange-200 rounded-lg p-6 bg-orange-50">
 <div className="flex items-center gap-2 mb-4">
 <XCircle className="w-6 h-6 text-orange-600" />
 <h4 className="text-xl font-bold text-orange-700">SUBSTITUIR</h4>
 </div>
 <div className="mb-4">
 <div className="text-sm text-gray-600 mb-1">Custo</div>
 <div className="text-2xl font-bold text-orange-600">{comp.substituir.custo}</div>
 </div>
 <div className="mb-4">
 <div className="text-sm font-semibold text-gray-700 mb-2">Quando substituir:</div>
 <p className="text-gray-600">{comp.substituir.quando}</p>
 </div>
 <div className="mb-4">
 <div className="text-sm font-semibold text-gray-700 mb-2">✅ Vantagens:</div>
 <ul className="space-y-1">
 {comp.substituir.vantagens.map((v, i) => (
 <li key={i} className="text-gray-600 text-sm">• {v}</li>
 ))}
 </ul>
 </div>
 <div>
 <div className="text-sm font-semibold text-gray-700 mb-2">⚠️ Desvantagens:</div>
 <ul className="space-y-1">
 {comp.substituir.desvantagens.map((d, i) => (
 <li key={i} className="text-gray-600 text-sm">• {d}</li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 <div className="bg-blue-50 p-4 border-t-2 border-blue-200">
 <div className="flex items-center gap-2">
 <AlertTriangle className="w-5 h-5 text-blue-600" />
 <span className="font-bold text-blue-900">Recomendação:</span>
 <span className="text-gray-700">{comp.recomendacao}</span>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* Regra dos 50% */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-8">
 <div className="flex items-start gap-4">
 <Calculator className="w-12 h-12 text-yellow-600 flex-shrink-0" />
 <div>
 <h2 className="text-2xl font-bold mb-4 text-gray-900">
 📐 Regra dos 50% (Regra de Ouro)
 </h2>
 <p className="text-lg text-gray-700 mb-4">
 <strong>Se o custo do arranjo for mais de 50% do preço de substituição</strong> E o equipamento já tiver mais de 70% da vida útil esperada, <strong>SUBSTITUA</strong>.
 </p>
 <div className="bg-white p-4 rounded-lg">
 <p className="font-semibold mb-2">Exemplo prático:</p>
 <ul className="space-y-2 text-gray-700">
 <li>• Esquentador com 12 anos (vida útil: 10-12 anos = 100%)</li>
 <li>• Arranjo: 250€ | Substituir: 500€</li>
 <li>• 250€ = 50% de 500€ ✅</li>
 <li>• 12 anos = 100% vida útil ✅</li>
 <li>• <strong className="text-orange-600">DECISÃO: SUBSTITUIR</strong></li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* FAQ */}
 <section className="py-16 bg-gray-50">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-12">
 Perguntas Frequentes - Arranjar vs Substituir
 </h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-white">
 <div className="container mx-auto px-4 text-center">
 <Scale className="w-16 h-16 mx-auto mb-6" />
 <h2 className="text-3xl font-bold mb-4">
 Ainda em Dúvida? Pedimos Avaliação Gratuita
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Avaliamos no local e damos opinião honesta: arranjar ou substituir.
 Sem compromisso. Atendimento 24h.
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
