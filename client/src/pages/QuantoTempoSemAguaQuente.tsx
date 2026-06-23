// Page SEO reconçue (Tâche 2.1c) — R12 conforme
// Intention informationnelle : "quanto tempo sem água quente" / "esquentador avariado"
// Approche éditoriale : facteurs + section "quando substituir" (pas de promesse de délai chiffré, pas de Timeline fictive)
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { Phone, Clock, CheckCircle, AlertTriangle, Wrench, Zap, Shield, RefreshCw } from 'lucide-react';
export default function QuantoTempoSemAguaQuente() {
 const { config } = useSite();
 const articleSchema = {
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Quanto Tempo Sem Água Quente? Diagnóstico do Esquentador",
 "description": "O tempo para arranjar um esquentador depende do tipo de avaria, da disponibilidade de peças e da idade do equipamento. Filipe Bragança dá orçamento por escrito antes de qualquer intervenção, em Trás-os-Montes.",
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
 "name": "Vale a pena arranjar o meu esquentador ou comprar um novo?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Depende da idade, do custo do arranjo e da frequência de avarias. Em geral: esquentador com menos de 8-10 anos → arranjar. Mais de 12-15 anos com várias avarias → substituir compensa. Indicamos-lhe a opção mais vantajosa no orçamento por escrito, sem pressão."
 }
 },
 {
 "@type": "Question",
 "name": "Como sei se a avaria é no esquentador ou na canalização?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "O técnico avalia no local. Ligamos o esquentador, verificamos chama, pressão e temperatura. Se o esquentador funciona mas a água não aquece nas torneiras, o problema pode estar na tubagem. O diagnóstico é sempre por escrito."
 }
 },
 {
 "@type": "Question",
 "name": "O técnico traz peças ou tenho de comprar?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Trazemos as peças mais comuns (termopares, válvulas, membranas, pilhas). Se a peça for especial, indicamos o prazo de fornecimento no orçamento por escrito — sem prometer o que não controlamos."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto custa arranjar um esquentador?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Trabalhamos a 65 €/hora (dia) e 97,50 €/hora (noite, fim de semana e feriado). Deslocação conforme a zona: Z1 = 15 €, Z2 = 25 €, Z3 = 35 €, Z4 = 45 €, Z5 = 55 €, Z6 = 65 €. Orçamento por escrito antes de qualquer trabalho. Peças orçamentadas à parte."
 }
 },
 {
 "@type": "Question",
 "name": "Atendem urgências 24h em Trás-os-Montes?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Sim, 24h/7 dias em todo o distrito de Bragança, Vila Real e zonas envolventes. Fuga de gás ou família sem água quente no Inverno têm prioridade na deslocação."
 }
 }
 ]
 };
 const serviceSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 "serviceType": "Reparação e instalação de esquentadores",
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
 factor: "Tipo de avaria",
 impacto: "Pilhas gastas ou chama piloto são avarias simples. Termopar avariado ou válvula com problema são reparações intermédias. Esquentador irreparável (fissura no corpo, corrosão interna) pede substituição. A avaliação no local é a única forma de saber.",
 icon: AlertTriangle
 },
 {
 factor: "Disponibilidade da peça",
 impacto: "Termopares, válvulas e membranas são peças comuns — trazemos em stock. Peças de modelos específicos ou descontinuados podem precisar de encomenda — indicamos o prazo estimado por escrito.",
 icon: Wrench
 },
 {
 factor: "Tipo de esquentador",
 impacto: "Esquentador a gás (mais comum em Trás-os-Montes), elétrico ou de condensação — cada tipo tem tempos e peças diferentes. Avaliamos o seu modelo específico no local.",
 icon: Zap
 },
 {
 factor: "Idade do equipamento",
 impacto: "Esquentador com 5-10 anos geralmente compensa arranjar. Com mais de 12-15 anos e várias avarias, a substituição compensa — indicamos a opção mais vantajosa sem pressão de venda.",
 icon: RefreshCw
 },
 {
 factor: "Acessibilidade",
 impacto: "Esquentador dentro de armário, em cave, em sótão ou em espaço apertado pede mais tempo de trabalho. Esta diferença é contabilizada no orçamento por escrito.",
 icon: Shield
 }
 ];
 const quandoSubstituir = [
 {
 criterio: "Idade do esquentador",
 indicacao: "Menos de 8-10 anos: geralmente compensa arranjar. Mais de 12-15 anos: começa a compensar substituir, sobretudo se a reparação for cara (corpo, permutador)."
 },
 {
 criterio: "Frequência de avarias",
 indicacao: "Primeira avaria → arranjar. Segunda avaria no mesmo ano → avaliar substituição. Avarias recorrentes (3+ em 2 anos) → substituir é mais económico."
 },
 {
 criterio: "Custo da reparação vs novo",
 indicacao: "Regra prática: se a reparação custar mais de 50-60 % do preço de um esquentador novo equivalente, a substituição compensa. Indicamos a melhor opção por escrito."
 },
 {
 criterio: "Modelo descontinuado",
 indicacao: "Se o seu modelo já não tem peças de substituição disponíveis no mercado, o arranjo pode ficar impossível ou muito caro. Indicamos alternativas compatíveis."
 },
 {
 criterio: "Eficiência energética",
 indicacao: "Esquentadores com 15+ anos consomem mais gás. Um modelo novo de condensação pode poupar 20-30 % na fatura energética a médio prazo."
 }
 ];
 const faqs = [
 {
 question: "Vale a pena arranjar o meu esquentador ou comprar um novo?",
 answer: "Depende da idade, do custo do arranjo e da frequência de avarias. Em geral: esquentador com menos de 8-10 anos → arranjar. Mais de 12-15 anos com várias avarias → substituir compensa. Indicamos-lhe a opção mais vantajosa no orçamento por escrito, sem pressão."
 },
 {
 question: "Como sei se a avaria é no esquentador ou na canalização?",
 answer: "O técnico avalia no local. Ligamos o esquentador, verificamos chama, pressão e temperatura. Se o esquentador funciona mas a água não aquece nas torneiras, o problema pode estar na tubagem. O diagnóstico é sempre por escrito."
 },
 {
 question: "O técnico traz peças ou tenho de comprar?",
 answer: "Trazemos as peças mais comuns (termopares, válvulas, membranas, pilhas). Se a peça for especial, indicamos o prazo de fornecimento no orçamento por escrito — sem prometer o que não controlamos."
 },
 {
 question: "Quanto custa arranjar um esquentador?",
 answer: "Trabalhamos a 65 €/hora (dia) e 97,50 €/hora (noite, fim de semana e feriado). Deslocação conforme a zona: Z1 = 15 €, Z2 = 25 €, Z3 = 35 €, Z4 = 45 €, Z5 = 55 €, Z6 = 65 €. Orçamento por escrito antes de qualquer trabalho. Peças orçamentadas à parte."
 },
 {
 question: "Atendem urgências 24h em Trás-os-Montes?",
 answer: "Sim, 24h/7 dias em todo o distrito de Bragança, Vila Real e zonas envolventes. Fuga de gás ou família sem água quente no Inverno têm prioridade na deslocação. Ligue 928 484 451 ou envie WhatsApp."
 }
 ];
 return (
 <>
 <Helmet>
 <title>Quanto Tempo Sem Água Quente? Diagnóstico do Esquentador | 928 484 451</title>
 <meta name="description" content="O tempo para arranjar um esquentador depende do tipo de avaria, da disponibilidade de peças e da idade do equipamento. Filipe Bragança dá orçamento por escrito, em Trás-os-Montes, antes de qualquer trabalho. 65€/h." />
 <link rel="canonical" href="https://canalizador-norte-reparos.pt/quanto-tempo-sem-agua-quente" />
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
 Quanto Tempo Sem Água Quente?
 </h1>
 <p className="text-xl mb-4">
 Não existe um tempo único. Depende do tipo de avaria, da peça necessária e da idade do equipamento.
 </p>
 <p className="text-lg mb-8 opacity-95">
 A Norte Reparos avalia o seu esquentador no local, indica o tempo estimado por escrito no orçamento, e só avança depois do seu OK. Filipe Bragança — 24h/7 dias em Trás-os-Montes.
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
 href={`https://wa.me/${config.whatsapp}?text=Tenho o esquentador avariado. Podem avaliar?`}
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
 Mão de obra a tarifa horária fixa. Peças orçamentadas à parte, com referência e preço no orçamento por escrito.
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
 <strong className="text-[#2193b0]">Orçamento por escrito antes de qualquer intervenção.</strong> Diagnóstico, mão de obra e peças discriminados. Sem surpresas.
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
 Cada avaria é diferente. A Norte Reparos avalia no local e indica o tempo estimado por escrito. Estes são os principais fatores que analisamos.
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
 {/* Quando vale a pena substituir (section spécifique page 3) */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
 🔄 Quando vale a pena substituir em vez de arranjar?
 </h2>
 <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
 Nem sempre arranjar é a melhor opção. Avaliámos o custo, a idade e a frequência de avarias para lhe indicar a solução mais vantajosa — sem pressão de venda.
 </p>
 <div className="max-w-4xl mx-auto space-y-4">
 {quandoSubstituir.map((item, index) => (
 <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-[#2193b0]">
 <h3 className="text-xl font-bold text-gray-900 mb-2">{item.criterio}</h3>
 <p className="text-gray-700">{item.indicacao}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* Peças e material */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
 🔧 Peças e material
 </h2>
 <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
 <div className="bg-white p-6 rounded-lg shadow">
 <CheckCircle className="w-8 h-8 text-[#2193b0] mb-3" />
 <h3 className="font-bold text-gray-900 mb-2">Peças em stock na carrinha</h3>
 <p className="text-gray-700">Termopares, válvulas de gás e água, membranas, pilhas, juntas e acessórios comuns para os modelos mais frequentes em Trás-os-Montes.</p>
 </div>
 <div className="bg-white p-6 rounded-lg shadow">
 <CheckCircle className="w-8 h-8 text-[#2193b0] mb-3" />
 <h3 className="font-bold text-gray-900 mb-2">Peças específicas</h3>
 <p className="text-gray-700">Se a peça for especial (modelo descontinuado, componente sob encomenda), indicamos o prazo estimado de fornecimento no orçamento por escrito — sem prometer o que não controlamos.</p>
 </div>
 <div className="bg-white p-6 rounded-lg shadow">
 <CheckCircle className="w-8 h-8 text-[#2193b0] mb-3" />
 <h3 className="font-bold text-gray-900 mb-2">Esquentador novo</h3>
 <p className="text-gray-700">Se decidir substituir, aconselhamos modelos adequados ao consumo da casa, à ventilação existente e à pressão disponível. Instalação feita em conformidade com a DGEG (registo em curso).</p>
 </div>
 <div className="bg-white p-6 rounded-lg shadow">
 <CheckCircle className="w-8 h-8 text-[#2193b0] mb-3" />
 <h3 className="font-bold text-gray-900 mb-2">Diagnóstico honesto</h3>
 <p className="text-gray-700">Se o seu esquentador é recente e o problema é simples, dizemos. Se é antigo e avarias vão voltar, também dizemos. Sem empurrar para a substituição.</p>
 </div>
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
 <h3 className="font-bold text-gray-900 mb-2">Modelo e idade do esquentador</h3>
 <p className="text-gray-700">Identificamos marca, modelo e data de instalação. Determina se compensa arranjar ou substituir.</p>
 </div>
 <div className="bg-blue-50 p-6 rounded-lg">
 <CheckCircle className="w-8 h-8 text-[#2193b0] mb-3" />
 <h3 className="font-bold text-gray-900 mb-2">Estado da chama e ventilação</h3>
 <p className="text-gray-700">Verificamos cor da chama (deve ser azul estável), tiragem da chaminé, ventilação do local. Câmara termográfica FLIR deteta sobreaquecimentos invisíveis a olho nu.</p>
 </div>
 <div className="bg-blue-50 p-6 rounded-lg">
 <CheckCircle className="w-8 h-8 text-[#2193b0] mb-3" />
 <h3 className="font-bold text-gray-900 mb-2">Pressão de água e gás</h3>
 <p className="text-gray-700">Medimos a pressão. Pressão alta ou baixa demais é causa frequente de avarias e de cortes de segurança.</p>
 </div>
 <div className="bg-blue-50 p-6 rounded-lg">
 <CheckCircle className="w-8 h-8 text-[#2193b0] mb-3" />
 <h3 className="font-bold text-gray-900 mb-2">Tubagem de água</h3>
 <p className="text-gray-700">Se a água chega fria às torneiras mesmo com o esquentador a funcionar, inspeccionamos a tubagem (câmara 30 m). Em Trás-os-Montes, muito ferro galvanizado antigo cria perdas de calor.</p>
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
 { step: '1', title: 'Atendimento imediato', desc: 'Atendemos a chamada ou WhatsApp. Em caso de cheiro a gás, indicamos como arejar a casa e cortar o gás em segurança antes da nossa chegada.' },
 { step: '2', title: 'Diagnóstico no local', desc: 'Avaliamos o esquentador: chama, pressão, temperatura, ventilação, tubagem. Sem partir nada — inspeção visual + instrumentação (FLIR, manómetro, câmara 30 m).' },
 { step: '3', title: 'Orçamento por escrito', desc: 'Explicamos o problema, indicamos a solução (arranjar ou substituir), discriminamos mão de obra e peças, dizemos quanto tempo vai demorar. Por escrito.' },
 { step: '4', title: 'Intervenção profissional', desc: 'Trabalhamos com peças de qualidade. Em caso de fuga de gás, testamos a estanquidade antes de sair. Em conformidade com a DGEG (registo em curso).' },
 { step: '5', title: 'Teste e certificação', desc: 'Testamos o esquentador em carga — várias descargas, verificação de temperatura e segurança. Documentação entregue no final.' }
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
 A Norte Reparos trata cada esquentador como se fosse na nossa própria casa. Avaliamos, orçamentamos e explicamos tudo por escrito — sem empurrar para a substituição se o arranjo for a melhor opção. Pode confiar que a pessoa que atende o telefone é a mesma que resolve o problema.
 </p>
 <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
 <div className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-[#2193b0] flex-shrink-0 mt-0.5" />
 <span>Fatura com NIF · seguro de responsabilidade civil</span>
 </div>
 <div className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-[#2193b0] flex-shrink-0 mt-0.5" />
 <span>Equipamento profissional verificado (FLIR, manómetro, câmara 30 m)</span>
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
 {/* Zonas de intervención */}
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
 Esquentador avariado? Ligue, avaliamos e orçamentamos por escrito
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Atendimento 24h/7 dias em Trás-os-Montes · Orçamento por escrito antes de qualquer trabalho · Diagnóstico honesto (arranjar ou substituir).
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
 href={`https://wa.me/${config.whatsapp}?text=Tenho o esquentador avariado. Podem avaliar?`}
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
