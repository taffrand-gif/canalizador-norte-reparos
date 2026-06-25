// Page SEO reconçue (Tâche 2.1c) — R12 conforme
// Intention informationnelle : "quanto tempo demora desentupir sanita"
// Approche éditoriale : facteurs + méthodes (pas de promesse de délai chiffré)
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { Phone, Clock, CheckCircle, AlertTriangle, Wrench, Zap, Shield, Search } from 'lucide-react';
export default function QuantoTempoDemoraDesentupirSanita() {
 const { config } = useSite();
 const articleSchema = {
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Quanto Tempo Demora Desentupir uma Sanita? Métodos e Diagnóstico",
 "description": "O tempo para desentupir uma sanita depende do tipo de bloqueio, da localização e do estado da canalização. Filipe Bragança dá orçamento por escrito antes de qualquer intervenção, em Trás-os-Montes.",
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
 "name": "O desentupimento resolve sempre?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Na maioria dos casos, sim. Utilizamos métodos progressivos — do mais simples ao mais complexo — e só avançamos para o passo seguinte se o anterior não resultar. Se houver um problema estrutural (cano partido, raiz), explicamos antes de continuar."
 }
 },
 {
 "@type": "Question",
 "name": "Quando é necessário abrir parede ou chão?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Só em último caso, quando o bloqueio está num cano embutido e os métodos tradicionais não chegam. Antes de abrir, utilizamos câmara de inspeção para localizar o problema com precisão — sem partir o que não é preciso."
 }
 },
 {
 "@type": "Question",
 "name": "Posso usar a sanita logo após o desentupimento?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Sim, após o teste final. Fazemos descarga completa, verificação de escoamento e teste com papel higiénico. Se tudo OK, pode usar normalmente."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto custa desentupir uma sanita?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Trabalhamos a 65 €/hora (dia) e 97,50 €/hora (noite, fim de semana e feriado). Deslocação conforme a zona: Z1 = 15 €, Z2 = 25 €, Z3 = 35 €, Z4 = 45 €, Z5 = 55 €, Z6 = 65 €. Orçamento por escrito antes de qualquer trabalho."
 }
 },
 {
 "@type": "Question",
 "name": "Atendem urgências 24h em Trás-os-Montes?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Sim, 24h/7 dias em todo o distrito de Bragança, Vila Real e zonas envolventes. Sanita entupida com mais de uma casa de banho indisponível tem prioridade na deslocação."
 }
 }
 ]
 };
 const serviceSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 "serviceType": "Desentupimento de sanitas e canalização",
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
 const metodos = [
 {
 metodo: "Ventosa manual",
 uso: "Bloqueios simples perto da saída (papel higiénico, pequenos objectos)",
 icon: Wrench
 },
 {
 metodo: "Mola desentupidora profissional",
 uso: "Bloqueios médios mais afastados, acumulação de papel e resíduos",
 icon: Zap
 },
 {
 metodo: "Máquina elétrica profissional",
 uso: "Bloqueios顽固es, raízes, objetos sólidos, tubagem principal",
 icon: Shield
 },
 {
 metodo: "Hidrojateamento",
 uso: "Limpeza profunda de tubagem, remoção de gordura e calcário acumulado",
 icon: AlertTriangle
 },
 {
 metodo: "Câmara de inspeção 30 m",
 uso: "Localização exacta do bloqueio sem abrir parede ou chão",
 icon: Search
 }
 ];
 const factores = [
 {
 factor: "Tipo de bloqueio",
 impacto: "Papel higiénico ou objeto pequeno perto da saída resolve-se depressa. Raízes ou objeto sólido na tubagem principal exige equipamento profissional e mais tempo.",
 icon: AlertTriangle
 },
 {
 factor: "Localização do bloqueio",
 impacto: "Na sanita é mais simples. No sifão ou curva exige mola. Na tubagem principal exige máquina elétrica e, por vezes, câmara de inspeção.",
 icon: Search
 },
 {
 factor: "Acessibilidade",
 impacto: "Sanita acessível é diferente de sanita em cave, em arrecadação ou em espaço apertado. A logística da deslocação e do trabalho é contabilizada no orçamento.",
 icon: Shield
 },
 {
 factor: "Estado da canalização",
 impacto: "Canos antigos (calcário, ferrugem, deformações) reduzem o diâmetro útil e criam bloqueios recorrentes. Nestes casos, propomos solução duradoura, não apenas desentupir.",
 icon: Wrench
 },
 {
 factor: "Hora do dia",
 impacto: "Trabalhamos 24h/7 dias. O horário da chamada pode alterar a logística, mas não a qualidade do serviço nem o valor do orçamento.",
 icon: Clock
 }
 ];
 const faqs = [
 {
 question: "O desentupimento resolve sempre?",
 answer: "Na maioria dos casos, sim. Utilizamos métodos progressivos — do mais simples ao mais complexo — e só avançamos para o passo seguinte se o anterior não resultar. Se houver um problema estrutural (cano partido, raiz), explicamos antes de continuar."
 },
 {
 question: "Quando é necessário abrir parede ou chão?",
 answer: "Só em último caso, quando o bloqueio está num cano embutido e os métodos tradicionais não chegam. Antes de abrir, utilizamos câmara de inspeção para localizar o problema com precisão — sem partir o que não é preciso."
 },
 {
 question: "Posso usar a sanita logo após o desentupimento?",
 answer: "Sim, após o teste final. Fazemos descarga completa, verificação de escoamento e teste com papel higiénico. Se tudo OK, pode usar normalmente."
 },
 {
 question: "Quanto custa desentupir uma sanita?",
 answer: "Trabalhamos a 65 €/hora (dia) e 97,50 €/hora (noite, fim de semana e feriado). Deslocação conforme a zona: Z1 = 15 €, Z2 = 25 €, Z3 = 35 €, Z4 = 45 €, Z5 = 55 €, Z6 = 65 €. Orçamento por escrito antes de qualquer trabalho. Sem surpresas na fatura."
 },
 {
 question: "Atendem urgências 24h em Trás-os-Montes?",
 answer: "Sim, 24h/7 dias em todo o distrito de Bragança, Vila Real e zonas envolventes. Sanita entupida com mais de uma casa de banho indisponível tem prioridade na deslocação. Ligue 928 484 451 ou envie WhatsApp."
 }
 ];
 return (
 <>
 <Helmet>
 <title>Quanto Tempo Demora Desentupir uma Sanita? Métodos e Diagnóstico | 928 484 451</title>
 <meta name="description" content="O tempo para desentupir uma sanita depende do tipo de bloqueio, da localização e do estado da canalização. Filipe Bragança dá orçamento por escrito, em Trás-os-Montes, antes de qualquer trabalho. 65€/h." />
 <link rel="canonical" href="https://canalizador-norte-reparos.pt/quanto-tempo-demora-desentupir-sanita" />
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
 Quanto Tempo Demora Desentupir uma Sanita?
 </h1>
 <p className="text-xl mb-4">
 Não existe um tempo único. Depende do tipo de bloqueio, da localização e do estado da canalização.
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
 href={`https://wa.me/${config.whatsapp}?text=Tenho uma sanita entupida. Podem avaliar?`}
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
 Cada entupimento é diferente. A Norte Reparos avalia no local e indica o tempo estimado por escrito. Estes são os principais fatores que analisamos.
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
 {/* Métodos que utilizamos (section spécifique page 2) */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
 🔧 Métodos que utilizamos
 </h2>
 <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
 Aplicamos métodos progressivos — do mais simples ao mais complexo — e só avançamos para o passo seguinte se o anterior não resultar. O método é definido após o diagnóstico no local.
 </p>
 <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
 {metodos.map((item, index) => (
 <div key={index} className="bg-blue-50 p-6 rounded-lg">
 <item.icon className="w-10 h-10 text-[#2193b0] mb-3" />
 <h3 className="text-xl font-bold text-gray-900 mb-2">{item.metodo}</h3>
 <p className="text-gray-700">{item.uso}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* O que avaliamos no local */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
 🔍 O que avaliamos no local
 </h2>
 <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
 <div className="bg-white p-6 rounded-lg shadow">
 <CheckCircle className="w-8 h-8 text-[#2193b0] mb-3" />
 <h3 className="font-bold text-gray-900 mb-2">Tipo de bloqueio</h3>
 <p className="text-gray-700">Papel higiénico, toalhitas, objeto sólido, raízes, acumulação de gordura ou calcário. Cada tipo pede equipamento e tempo diferentes.</p>
 </div>
 <div className="bg-white p-6 rounded-lg shadow">
 <CheckCircle className="w-8 h-8 text-[#2193b0] mb-3" />
 <h3 className="font-bold text-gray-900 mb-2">Profundidade do bloqueio</h3>
 <p className="text-gray-700">Quanto mais afastado da sanita, mais equipamento é necessário. A câmara de inspeção localiza o problema sem adivinhar.</p>
 </div>
 <div className="bg-white p-6 rounded-lg shadow">
 <CheckCircle className="w-8 h-8 text-[#2193b0] mb-3" />
 <h3 className="font-bold text-gray-900 mb-2">Idade da canalização</h3>
 <p className="text-gray-700">Em Trás-os-Montes, muitos canos têm 30+ anos (ferro galvanizado, PVC antigo). Reduzem o diâmetro útil e criam bloqueios recorrentes.</p>
 </div>
 <div className="bg-white p-6 rounded-lg shadow">
 <CheckCircle className="w-8 h-8 text-[#2193b0] mb-3" />
 <h3 className="font-bold text-gray-900 mb-2">Recorrência</h3>
 <p className="text-gray-700">Se entope com frequência, há uma causa estrutural. Indicamos a solução duradoura no orçamento, não apenas o desentupimento pontual.</p>
 </div>
 </div>
 </div>
 </section>
 {/* Como trabalhamos */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
 🛠️ Como trabalhamos
 </h2>
 <div className="max-w-4xl mx-auto space-y-4">
 {[
 { step: '1', title: 'Atendimento 24h/7d', desc: 'Atendemos a chamada ou WhatsApp. Esclarecemos o que NÃO fazer (não usar produtos químicos agressivos antes da nossa chegada — podem danificar os canos).' },
 { step: '2', title: 'Diagnóstico no local', desc: 'Identificamos o bloqueio. Se necessário, utilizamos câmara de inspeção 30 m para localizar a obstrução sem partir parede ou chão.' },
 { step: '3', title: 'Orçamento por escrito', desc: 'Explicamos o problema, indicamos o método, dizemos quanto vai custar e quanto tempo vai demorar. Por escrito. Só começamos depois do seu OK.' },
 { step: '4', title: 'Desentupimento progressivo', desc: 'Começamos pelo método mais simples. Só avançamos para o seguinte se o anterior não resultar — assim não pagamos por trabalho desnecessário.' },
 { step: '5', title: 'Teste e verificação', desc: 'Descarga completa, papel higiénico, verificação de escoamento. Se necessário, câmara de inspeção final para confirmar tubagem limpa.' }
 ].map((item, i) => (
 <div key={i} className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg shadow-md">
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
 <section className="py-16 bg-gray-50">
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
 A Norte Reparos trata cada entupimento como se fosse na nossa própria casa. Atendemos, deslocamo-nos, avaliamos e orçamentamos — tudo por escrito, tudo com o mesmo interlocutor. Pode confiar que a pessoa que atende o telefone é a mesma que resolve o problema.
 </p>
 <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
 <div className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-[#2193b0] flex-shrink-0 mt-0.5" />
 <span>Fatura com NIF · seguro de responsabilidade civil</span>
 </div>
 <div className="flex items-start gap-2">
 <CheckCircle className="w-5 h-5 text-[#2193b0] flex-shrink-0 mt-0.5" />
 <span>Equipamento profissional verificado (câmara 30 m, máquina profissional)</span>
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
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
 📍 Zonas de intervenção
 </h2>
 <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
 Base em Macedo de Cavaleiros. Deslocação cobrada conforme a zona — o valor é confirmado no orçamento por escrito.
 </p>
 <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
 {zonas.map((z, i) => (
 <div key={i} className="bg-gray-50 p-5 rounded-lg shadow border-l-4 border-[#2193b0]">
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
 <section className="py-16 bg-gray-50">
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
 Sanita entupida? Ligue, avaliamos e desentupimos por escrito
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
 href={`https://wa.me/${config.whatsapp}?text=Tenho uma sanita entupida. Podem avaliar?`}
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
