// Page SEO reconçue (Tâche 2.1c) — R12 conforme
// Intention informationnelle : "quanto tempo demora arranjar fuga água"
// Approche éditoriale : facteurs + méthode (pas de promesse de délai chiffré)
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { Phone, Clock, CheckCircle, AlertTriangle, Wrench, Zap, Shield } from 'lucide-react';
export default function QuantoTempoDemoraArranjarFugaAgua() {
 const { config } = useSite();
 const articleSchema = {
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Quanto Tempo Demora Arranjar Fuga de Água? Fatores e Diagnóstico",
 "description": "O tempo para arranjar uma fuga depende da gravidade, localização e acesso. Filipe Bragança dá orçamento por escrito antes de qualquer intervenção, em Trás-os-Montes.",
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
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "Como sei quanto tempo vai demorar a minha fuga?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "O técnico avalia a fuga no local — tipo de cano, localização, acesso, materiais necessários — e indica o tempo estimado por escrito, no orçamento. Sem promessa verbal antes do diagnóstico, sem surpresas depois."
 }
 },
 {
 "@type": "Question",
 "name": "E se a reparação demorar mais do que o previsto?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Avisamos mediante confirmação, explicamos o motivo (peça especial, dano estrutural, etc.) e damos o novo tempo estimado por escrito. Só continuamos com a sua confirmação."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto custa arranjar uma fuga de água?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Trabalhamos a 65 €/hora (dia) e 97,50 €/hora (noite, fim de semana e feriado). Deslocação conforme a zona: Z1 = 15 €, Z2 = 25 €, Z3 = 35 €, Z4 = 45 €, Z5 = 55 €, Z6 = 65 €. Orçamento por escrito antes de qualquer trabalho."
 }
 },
 {
 "@type": "Question",
 "name": "Posso ter orçamento sem compromisso?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Sim. Avaliamos a fuga no local, damos o preço e o tempo estimado por escrito. Só começamos depois do seu OK. Sem compromisso se decidir não avançar."
 }
 },
 {
 "@type": "Question",
 "name": "Atendem urgências 24h em Trás-os-Montes?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Sim, 24h/7 dias em todo o distrito de Bragança, Vila Real e zonas envolventes. Chamadas urgentes têm prioridade na deslocação."
 }
 }
 ]
 };
 const serviceSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 "serviceType": "Reparação de fugas de água",
 "provider": {
 "@type": "Plumber",
 "name": config.businessName,
 "telephone": config.phone,
 "priceRange": "€€"
 },
 "areaServed": [
 { "@type": "City", "name": "Macedo de Cavaleiros" },
 { "@type": "City", "name": "Bragança" },
 { "@type": "City", "name": "Mirandela" },
 { "@type": "City", "name": "Vila Real" },
 { "@type": "City", "name": "Chaves" },
 { "@type": "City", "name": "Miranda do Douro" }
 ]
 };
 const zonas = [
 { zona: "Zona 1", cidades: "Macedo de Cavaleiros", deslocacao: "15 €" },
 { zona: "Zona 2", cidades: "Vila Flor, Alfândega da Fé, Mirandela, Carrazeda de Ansiães", deslocacao: "25 €" },
 { zona: "Zona 3", cidades: "Bragança, Vinhais, Vimioso, Torre de Moncorvo, Mogadouro, Freixo de Espada à Cinta", deslocacao: "35 €" },
 { zona: "Zona 4", cidades: "Miranda do Douro, Foz Côa, Murça, Valpaços, Pesqueira", deslocacao: "45 €" },
 { zona: "Zona 5", cidades: "Vila Real, Alijó, Sabrosa, Tabuaço, Armamar, Régua, Lamego, Sta. Marta de Penaguião, Mesão Frio", deslocacao: "55 €" },
 { zona: "Zona 6", cidades: "Chaves, Vila Pouca de Aguiar, Boticas, Montalegre, Ribeira de Pena, Mondim de Basto, Moimenta da Beira, Sernancelhe, Penedono", deslocacao: "65 €" }
 ];
 const factores = [
 {
 factor: "Gravidade da fuga",
 impacto: "Uma fuga pequena num torneira resolve-se depressa. Uma fuga grande num cano corroído pede mais tempo. A avaliação no local é a única forma de estimar com honestidade.",
 icon: AlertTriangle
 },
 {
 factor: "Localização do cano",
 impacto: "Um cano visível sob o lavatório é diferente de um cano embutido numa parede ou no chão. Canos escondidos exigem detecção técnica (câmara termográfica, ROLeak Aqua 3Plus) antes de abrir.",
 icon: Wrench
 },
 {
 factor: "Acessibilidade",
 impacto: "Um cano numa cave de acesso difícil, num sótão ou atrás de um móvel encostado demora mais do que um cano acessível. Esta diferença é contabilizada no orçamento por escrito.",
 icon: Shield
 },
 {
 factor: "Hora do dia",
 impacto: "Trabalhamos 24h/7 dias. O horário da chamada pode alterar a logística da deslocação, mas não a qualidade do serviço nem o valor do orçamento.",
 icon: Clock
 },
 {
 factor: "Material necessário",
 impacto: "Trazemos as peças mais comuns (juntas, troços de PVC, cobre, acessórios). Se a peça for especial, indicamos o prazo de fornecimento no orçamento — sem prometer o que não controlamos.",
 icon: Zap
 }
 ];
 const faqs = [
 {
 question: "Como sei quanto tempo vai demorar a minha fuga?",
 answer: "O técnico avalia a fuga no local — tipo de cano, localização, acesso, materiais necessários — e indica o tempo estimado por escrito, no orçamento. Sem promessa verbal antes do diagnóstico, sem surpresas depois."
 },
 {
 question: "E se a reparação demorar mais do que o previsto?",
 answer: "Avisamos mediante confirmação, explicamos o motivo (peça especial, dano estrutural, etc.) e damos o novo tempo estimado por escrito. Só continuamos com a sua confirmação. Sem avançar sem o seu OK."
 },
 {
 question: "Quanto custa arranjar uma fuga de água?",
 answer: "Trabalhamos a 65 €/hora (dia) e 97,50 €/hora (noite, fim de semana e feriado). Deslocação conforme a zona: Z1 = 15 €, Z2 = 25 €, Z3 = 35 €, Z4 = 45 €, Z5 = 55 €, Z6 = 65 €. Orçamento por escrito antes de qualquer trabalho. Sem surpresas na fatura."
 },
 {
 question: "Posso ter orçamento sem compromisso?",
 answer: "Sim. Avaliamos a fuga no local, damos o preço e o tempo estimado por escrito, e só começamos depois do seu OK. Sem compromisso se decidir não avançar."
 },
 {
 question: "Atendem urgências 24h em Trás-os-Montes?",
 answer: "Sim, 24h/7 dias em todo o distrito de Bragança, Vila Real e zonas envolventes. Chamadas urgentes têm prioridade na deslocação. Ligue 928 484 451 ou envie WhatsApp."
 }
 ];
 return (
 <>
 <Helmet>
 <title>Quanto Tempo Demora Arranjar Fuga de Água? Fatores e Diagnóstico | 928 484 451</title>
 <meta name="description" content="O tempo para arranjar uma fuga depende da gravidade, localização e acesso. Filipe Bragança dá orçamento por escrito, em Trás-os-Montes, antes de qualquer trabalho. 65€/h." />
 <link rel="canonical" href="https://canalizador-norte-reparos.pt/quanto-tempo-demora-arranjar-fuga-agua" />
 <script type="application/ld+json">
 {JSON.stringify(articleSchema)}
 </script>
 <script type="application/ld+json">
 {JSON.stringify(faqSchema)}
 </script>
 <script type="application/ld+json">
 {JSON.stringify(serviceSchema)}
 </script>
 </Helmet>
 <Header />
 <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
 {/* Hero */}
 <section className="bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-white py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold mb-6">
 <Shield className="w-5 h-5" />
 SEM PROMESSA DE TEMPO — SEM SURPRESA NA FATURA
 </div>
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Quanto Tempo Demora Arranjar uma Fuga de Água?
 </h1>
 <p className="text-xl mb-4">
 Não existe um tempo único. Depende do tipo de fuga, da localização e do acesso.
 </p>
 <p className="text-lg mb-8 opacity-95">
 A Norte Reparos dá-lhe o tempo estimado por escrito, no orçamento, antes de qualquer intervenção. Filipe Bragança — 24h/7 dias em Trás-os-Montes.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-[#2193b0] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg flex items-center justify-center gap-2"
 >
 <Phone className="w-6 h-6" />
 Ligar: {config.phone}
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=Tenho uma fuga de água. Podem avaliar?`}
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
 {/* Transparence prix */}
 <section className="py-12 bg-white border-b-2 border-[#2193b0]">
 <div className="container mx-auto px-4">
 <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
 Preço claro antes de começar
 </h2>
 <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
 Trabalhamos com tarifa horária fixa e告知 prévio por escrito. Sem surpresas.
 </p>
 <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4 mb-6">
 <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-[#2193b0]">
 <p className="text-sm text-gray-600">Tarifa diurna</p>
 <p className="text-2xl font-bold text-gray-900">65 €/hora</p>
 </div>
 <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-[#2193b0]">
 <p className="text-sm text-gray-600">Noite / fim de semana / feriado</p>
 <p className="text-2xl font-bold text-gray-900">97,50 €/hora <span className="text-sm font-normal text-gray-600">(+50 %)</span></p>
 </div>
 <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-[#2193b0]">
 <p className="text-sm text-gray-600">Deslocação</p>
 <p className="text-2xl font-bold text-gray-900">15 € a 65 €</p>
 <p className="text-xs text-gray-600">conforme zona Z1-Z6</p>
 </div>
 </div>
 <p className="text-center text-gray-700 max-w-3xl mx-auto">
 <strong className="text-[#2193b0]">Orçamento por escrito antes de qualquer intervenção.</strong> Explicamos o problema, indicamos a solução, dizemos quanto vai custar e quanto tempo vai demorar — tudo por escrito.
 </p>
 </div>
 </section>
 {/* Factores que influenciam a duração */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
 ⚙️ Fatores que influenciam a duração
 </h2>
 <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
 Cada fuga é diferente. A Norte Reparos avalia no local e indica o tempo estimado por escrito. Estes são os principais fatores que analisamos.
 </p>
 <div className="max-w-4xl mx-auto space-y-4">
 {factores.map((item, index) => (
 <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#2193b0]">
 <div className="flex items-start gap-4">
 <item.icon className="w-8 h-8 text-[#2193b0] flex-shrink-0 mt-1" />
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-2">{item.factor}</h3>
 <p className="text-gray-600">{item.impacto}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* O que avaliamos no local */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
 🔍 O que avaliamos no local
 </h2>
 <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
 <div className="bg-blue-50 p-6 rounded-lg">
 <CheckCircle className="w-8 h-8 text-[#2193b0] mb-3" />
 <h3 className="font-bold text-gray-900 mb-2">Tipo de fuga</h3>
 <p className="text-gray-700">Junta, cano corroído, conexão solta, fissura. Cada tipo pede uma técnica diferente — e um tempo diferente.</p>
 </div>
 <div className="bg-blue-50 p-6 rounded-lg">
 <CheckCircle className="w-8 h-8 text-[#2193b0] mb-3" />
 <h3 className="font-bold text-gray-900 mb-2">Material do cano</h3>
 <p className="text-gray-700">PVC, cobre, ferro galvanizado, multicamada. Em Trás-os-Montes encontramos muito ferro galvanizado antigo e construções com materiais mistos.</p>
 </div>
 <div className="bg-blue-50 p-6 rounded-lg">
 <CheckCircle className="w-8 h-8 text-[#2193b0] mb-3" />
 <h3 className="font-bold text-gray-900 mb-2">Idade da instalação</h3>
 <p className="text-gray-700">Canalização com 30+ anos tem surpresas. Contamos com isso no diagnóstico e propomos a solução mais durável, não a mais rápida.</p>
 </div>
 <div className="bg-blue-50 p-6 rounded-lg">
 <CheckCircle className="w-8 h-8 text-[#2193b0] mb-3" />
 <h3 className="font-bold text-gray-900 mb-2">Pressão da água</h3>
 <p className="text-gray-700">Pressão alta desgasta juntas e acelera fugas. Medimos para identificar se há um problema mais profundo (válvula redutora, acumulador).</p>
 </div>
 </div>
 </div>
 </section>
 {/* Como trabalhamos */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
 🛠️ Como trabalhamos
 </h2>
 <div className="max-w-4xl mx-auto space-y-4">
 {[
 { step: '1', title: 'Atendimento 24h/7d', desc: 'Atendemos a chamada ou WhatsApp. Esclarecemos o que fazer enquanto o técnico não chega (cortar água no contador, etc.).' },
 { step: '2', title: 'Diagnóstico no local', desc: 'Identificamos a fuga com equipamento profissional: câmara termográfica FLIR, deteção acústica ROLeak Aqua 3Plus, câmara de inspeção 30 m. Sem partir o que não é preciso.' },
 { step: '3', title: 'Orçamento por escrito', desc: 'Explicamos o problema, indicamos a solução, dizemos quanto vai custar e quanto tempo vai demorar. Por escrito. Só começamos depois do seu OK.' },
 { step: '4', title: 'Reparação profissional', desc: 'Trabalhamos com peças de qualidade. Cortamos a água apenas no circuito afetado — não deixa a casa toda sem água.' },
 { step: '5', title: 'Teste e verificação', desc: 'Teste de pressão. Verificação de fugas residuais. Limpeza da zona de trabalho. Só saímos quando tudo está a funcionar.' }
 ].map((item, i) => (
 <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-md">
 <div className="bg-[#2193b0] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
 {item.step}
 </div>
 <div>
 <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
 <p className="text-gray-700">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* Quem Somos */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
 👋 Quem somos
 </h2>
 <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
 A Norte Reparos é uma empresa de canalização em Trás-os-Montes. Fala sempre connosco — do primeiro contacto à fatura.
 </p>
 <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border-l-4 border-[#2193b0]">
 <h3 className="text-2xl font-bold text-gray-900 mb-3">Filipe Bragança · Responsável técnico</h3>
 <p className="text-gray-700 mb-4">
 A Norte Reparos trata cada fuga como se fosse na nossa própria casa. Atendemos, deslocamo-nos, avaliamos e orçamentamos — tudo por escrito, tudo com o mesmo interlocutor. Pode confiar que a pessoa que atende o telefone é a mesma que resolve o problema.
 </p>
 <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
 <div className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-[#2193b0] flex-shrink-0 mt-0.5" />
 <span>Fatura com NIF · seguro de responsabilidade civil</span>
 </div>
 <div className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-[#2193b0] flex-shrink-0 mt-0.5" />
 <span>Equipamento profissional verificado (Ridgid K9-102, FLIR, ROLeak Aqua 3Plus)</span>
 </div>
 <div className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-[#2193b0] flex-shrink-0 mt-0.5" />
 <span>Trabalhos em conformidade com a DGEG (registo em curso)</span>
 </div>
 <div className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-[#2193b0] flex-shrink-0 mt-0.5" />
 <span>24h/7 dias · Trás-os-Montes</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* Zonas de intervenção */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
 📍 Zonas de intervenção
 </h2>
 <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
 Base em Macedo de Cavaleiros. Deslocação cobrada conforme a zona — o valor é confirmado no orçamento por escrito.
 </p>
 <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
 {zonas.map((z, i) => (
 <div key={i} className="bg-white p-5 rounded-lg shadow border-l-4 border-[#2193b0]">
 <div className="flex justify-between items-start mb-2">
 <span className="font-bold text-gray-900">{z.zona}</span>
 <span className="font-bold text-[#2193b0]">{z.deslocacao}</span>
 </div>
 <p className="text-sm text-gray-700">{z.cidades}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* FAQ */}
 <section className="py-16 bg-white">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
 Perguntas frequentes
 </h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-white">
 <div className="container mx-auto px-4 text-center">
 <Phone className="w-16 h-16 mx-auto mb-6" />
 <h2 className="text-3xl font-bold mb-4">
 Fuga de água? Ligue, avaliamos e orçamentamos por escrito
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Atendimento 24h/7 dias em Trás-os-Montes · Orçamento por escrito antes de qualquer trabalho.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-[#2193b0] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors inline-flex items-center gap-2 shadow-lg"
 >
 <Phone className="w-6 h-6" />
 {config.phone}
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=Tenho uma fuga de água. Podem avaliar?`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-xl transition-colors inline-flex items-center gap-2 shadow-lg"
 >
 💬 WhatsApp
 </a>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 );
}
