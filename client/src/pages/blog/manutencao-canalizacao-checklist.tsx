import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { Phone, MessageCircle, CheckCircle, Calendar, Wrench, AlertTriangle, Clock, Euro } from 'lucide-react';

export default function ManutencaoCanalizacaoChecklist() {
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "Com que frequência devo fazer manutenção da canalização?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Manutenção básica: mensal (limpar ralos, verificar torneiras). Manutenção preventiva profissional: anual (inspeção completa, limpeza canalização). Casas antigas ou com histórico de problemas: semestral."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto custa manutenção preventiva de canalização?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Em Bragança e Trás-os-Montes: manutenção básica anual 80-120€, manutenção completa 150-250€. Inclui inspeção, limpeza preventiva, verificação de fugas e relatório. Previne avarias que custariam 500-2000€."
 }
 },
 {
 "@type": "Question",
 "name": "O que está incluído na manutenção anual?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Inspeção visual completa, teste de pressão, verificação de fugas, limpeza preventiva de ralos e sifões, verificação de autoclismos, inspeção de esquentador/caldeira, teste de válvulas, e relatório com recomendações."
 }
 },
 {
 "@type": "Question",
 "name": "Manutenção preventiva realmente previne avarias?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Sim. Estudos mostram que manutenção preventiva reduz avarias em 80-90%. Deteta problemas pequenos antes de se tornarem emergências caras. Uma manutenção de 100€ previne arranjos de 500-2000€."
 }
 },
 {
 "@type": "Question",
 "name": "Posso fazer a manutenção eu mesmo?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Manutenção básica sim (limpar ralos, verificar torneiras, testar autoclismos). Manutenção profissional não - requer equipamento especializado (teste de pressão, câmara de inspeção) e conhecimento técnico para detetar problemas ocultos."
 }
 }
 ]
 };

 const checklistMensal = [
 { tarefa: "Limpar ralos de duche e lavatórios", tempo: "5 min", dificuldade: "Fácil" },
 { tarefa: "Verificar torneiras a pingar", tempo: "5 min", dificuldade: "Fácil" },
 { tarefa: "Testar autoclismos (fugas silenciosas)", tempo: "5 min", dificuldade: "Fácil" },
 { tarefa: "Verificar debaixo de lava-loiças (humidade)", tempo: "5 min", dificuldade: "Fácil" },
 { tarefa: "Limpar filtros de torneiras", tempo: "10 min", dificuldade: "Fácil" }
 ];

 const checklistTrimestral = [
 { tarefa: "Limpar sifões de lava-loiça e lavatórios", tempo: "20 min", dificuldade: "Média" },
 { tarefa: "Verificar pressão de água", tempo: "5 min", dificuldade: "Fácil" },
 { tarefa: "Limpar filtro de esquentador/caldeira", tempo: "15 min", dificuldade: "Média" },
 { tarefa: "Verificar válvulas de corte", tempo: "10 min", dificuldade: "Fácil" },
 { tarefa: "Inspecionar tubos visíveis (oxidação)", tempo: "10 min", dificuldade: "Fácil" }
 ];

 const checklistAnual = [
 { tarefa: "Inspeção profissional completa", tempo: "1-2h", custo: "80-120€", profissional: true },
 { tarefa: "Limpeza preventiva de canalização", tempo: "1h", custo: "60-100€", profissional: true },
 { tarefa: "Teste de pressão e fugas", tempo: "30 min", custo: "Incluído", profissional: true },
 { tarefa: "Manutenção de esquentador/caldeira", tempo: "1h", custo: "50-80€", profissional: true },
 { tarefa: "Verificação de fossa séptica (se aplicável)", tempo: "30 min", custo: "40-60€", profissional: true }
 ];

 return (
 <>
 <Helmet>
 <title>Manutenção Canalização: Checklist Anual Completa [2026] | Norte Reparos</title>
 <meta name="description" content="Checklist completa de manutenção de canalização: mensal, trimestral e anual. Previna 90% das avarias com manutenção preventiva. Guia prático 2026." />
 <meta name="keywords" content="manutenção canalização, checklist canalizador, manutenção preventiva, Bragança, Trás-os-Montes" />
 <link rel="canonical" href="https://canalizador-norte-reparos.pt/blog/manutencao-canalizacao-checklist" />
 <script type="application/ld+json">
 {JSON.stringify(faqSchema)}
 </script>
 </Helmet>

 <div className="min-h-screen bg-gray-50">
 <article className="max-w-4xl mx-auto px-4 py-12">
 {/* Hero */}
 <header className="mb-12">
 <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
 Checklist Completa 2026
 </div>
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
 Manutenção Canalização: Checklist Anual Completa
 </h1>
 <p className="text-xl text-gray-600 leading-relaxed">
 Previna 90% das avarias com manutenção preventiva. Checklist mensal, trimestral e anual
 para manter a canalização da sua casa em perfeito estado.
 </p>
 <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
 <span>10 min leitura</span>
 <span>Atualizado: 3 Março 2026</span>
 </div>
 </header>

 {/* Resposta Direta */}
 <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12">
 <h2 className="text-xl font-bold text-gray-900 mb-3">Resposta Rápida</h2>
 <p className="text-gray-700 leading-relaxed">
 <strong>Manutenção ideal:</strong> Mensal (limpar ralos, verificar torneiras - 20 min),
 Trimestral (limpar sifões, verificar pressão - 1h), Anual (inspeção profissional - 80-120€).
 <strong>Resultado:</strong> Previne 90% das avarias e poupa 500-2000€ em arranjos de emergência.
 </p>
 </div>

 {/* Benefícios */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Por Que Fazer Manutenção Preventiva?</h2>
 <div className="grid md:grid-cols-2 gap-6">
 {[
 {
 titulo: "Poupa Dinheiro",
 descricao: "Manutenção anual 100€ vs arranjo emergência 500-2000€. ROI de 5-20x.",
 icon: <Euro className="w-8 h-8 text-green-600" />
 },
 {
 titulo: "Previne 90% das Avarias",
 descricao: "Deteta problemas pequenos antes de se tornarem emergências caras.",
 icon: <CheckCircle className="w-8 h-8 text-blue-600" />
 },
 {
 titulo: "Aumenta Vida Útil",
 descricao: "Canalização bem mantida dura 30-50 anos vs 15-20 anos sem manutenção.",
 icon: <Clock className="w-8 h-8 text-purple-600" />
 },
 {
 titulo: "Evita Emergências",
 descricao: "Sem inundações, sem entupimentos urgentes, sem stress aos fins de semana.",
 icon: <AlertTriangle className="w-8 h-8 text-orange-600" />
 }
 ].map((item, i) => (
 <div key={i} className="bg-white rounded-lg shadow-md p-6">
 <div className="flex items-start gap-4">
 {item.icon}
 <div>
 <h3 className="font-bold text-gray-900 mb-2">{item.titulo}</h3>
 <p className="text-gray-700 text-sm">{item.descricao}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* Checklist Mensal */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Checklist Mensal (20 minutos)</h2>
 <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-6">
 <p className="text-gray-700 mb-6">
 <strong>Frequência:</strong> 1x por mês • <strong>Tempo total:</strong> 20 minutos • <strong>Dificuldade:</strong> Fácil
 </p>
 <div className="space-y-4">
 {checklistMensal.map((item, i) => (
 <div key={i} className="bg-white rounded-lg p-4 flex items-start gap-4">
 <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
 {i + 1}
 </div>
 <div className="flex-grow">
 <h3 className="font-bold text-gray-900 mb-1">{item.tarefa}</h3>
 <div className="flex items-center gap-4 text-sm text-gray-600">
 <span className="flex items-center gap-1">
 <Clock className="w-4 h-4" />
 {item.tempo}
 </span>
 <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
 {item.dificuldade}
 </span>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Checklist Trimestral */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Checklist Trimestral (1 hora)</h2>
 <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6">
 <p className="text-gray-700 mb-6">
 <strong>Frequência:</strong> A cada 3 meses • <strong>Tempo total:</strong> 1 hora • <strong>Dificuldade:</strong> Fácil a Média
 </p>
 <div className="space-y-4">
 {checklistTrimestral.map((item, i) => (
 <div key={i} className="bg-white rounded-lg p-4 flex items-start gap-4">
 <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
 {i + 1}
 </div>
 <div className="flex-grow">
 <h3 className="font-bold text-gray-900 mb-1">{item.tarefa}</h3>
 <div className="flex items-center gap-4 text-sm text-gray-600">
 <span className="flex items-center gap-1">
 <Clock className="w-4 h-4" />
 {item.tempo}
 </span>
 <span className={`px-2 py-1 rounded-full text-xs font-bold ${
 item.dificuldade === 'Fácil' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
 }`}>
 {item.dificuldade}
 </span>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Checklist Anual */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Checklist Anual Profissional (2-3 horas)</h2>
 <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-200 rounded-xl p-6">
 <p className="text-gray-700 mb-6">
 <strong>Frequência:</strong> 1x por ano • <strong>Tempo total:</strong> 2-3 horas • <strong>Custo:</strong> 150-250€ (completo)
 </p>
 <div className="space-y-4">
 {checklistAnual.map((item, i) => (
 <div key={i} className="bg-white rounded-lg p-4 flex items-start gap-4">
 <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
 {i + 1}
 </div>
 <div className="flex-grow">
 <h3 className="font-bold text-gray-900 mb-1">{item.tarefa}</h3>
 <div className="flex items-center gap-4 text-sm text-gray-600">
 <span className="flex items-center gap-1">
 <Clock className="w-4 h-4" />
 {item.tempo}
 </span>
 <span className="flex items-center gap-1">
 <Euro className="w-4 h-4" />
 {item.custo}
 </span>
 <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold">
 Profissional
 </span>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA Meio */}
 <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-8 mb-12 text-center">
 <Calendar className="w-16 h-16 mx-auto mb-4 opacity-90" />
 <h3 className="text-2xl font-bold mb-4">Agende a Sua Manutenção Anual</h3>
 <p className="text-lg mb-6 opacity-90">
 Inspeção completa + limpeza preventiva + relatório. Previna avarias e poupe dinheiro.
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
 href="https://wa.me/351928484451?text=Olá,%20quero%20agendar%20manutenção%20preventiva"
 className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
 >
 <MessageCircle className="w-5 h-5" />
 WhatsApp
 </a>
 </div>
 </div>

 {/* Guias Detalhados */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Guias Passo a Passo</h2>

 {/* Teste Autoclismo */}
 <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
 <Wrench className="w-6 h-6 text-blue-600" />
 Como Testar Fugas no Autoclismo
 </h3>
 <ol className="space-y-3">
 {[
 "Deite 5-10 gotas de corante alimentar (ou azul de lavar) na cisterna",
 "NÃO puxe o autoclismo",
 " 15-20 minutos",
 "Verifique a sanita: se a água ficou colorida, há fuga na válvula",
 "Fuga confirmada = trocar válvula (15-30€ peça + 40-60€ mão de obra)"
 ].map((passo, i) => (
 <li key={i} className="flex items-start gap-3">
 <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
 {i + 1}
 </span>
 <span className="text-gray-700">{passo}</span>
 </li>
 ))}
 </ol>
 </div>

 {/* Limpar Sifão */}
 <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
 <Wrench className="w-6 h-6 text-green-600" />
 Como Limpar Sifão do Lava-Loiça
 </h3>
 <ol className="space-y-3">
 {[
 "Coloque um balde debaixo do sifão",
 "Desaperte o sifão à mão (ou com alicate se muito apertado)",
 "Retire o sifão e esvazie o conteúdo no balde",
 "Lave o sifão com água quente e detergente",
 "Limpe as roscas e volte a apertar (não force demais)",
 "Abra a torneira e verifique se há fugas"
 ].map((passo, i) => (
 <li key={i} className="flex items-start gap-3">
 <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
 {i + 1}
 </span>
 <span className="text-gray-700">{passo}</span>
 </li>
 ))}
 </ol>
 </div>

 {/* Verificar Pressão */}
 <div className="bg-white rounded-xl shadow-lg p-6">
 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
 <Wrench className="w-6 h-6 text-purple-600" />
 Como Verificar Pressão de Água
 </h3>
 <ol className="space-y-3">
 {[
 "Abra uma torneira completamente",
 "Encha um balde de 10 litros",
 "Cronometre o tempo que demora",
 "Pressão normal: 10L em 30-40 segundos",
 "Se demorar mais de 1 minuto: pressão baixa (verificar válvula geral ou filtros)",
 "Se muito rápido (<20s): pressão alta (pode danificar aparelhos)"
 ].map((passo, i) => (
 <li key={i} className="flex items-start gap-3">
 <span className="w-6 h-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
 {i + 1}
 </span>
 <span className="text-gray-700">{passo}</span>
 </li>
 ))}
 </ol>
 </div>
 </section>

 {/* Calendário Anual */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Calendário de Manutenção Anual</h2>
 <div className="bg-white rounded-xl shadow-lg overflow-hidden">
 <table className="w-full">
 <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
 <tr>
 <th className="px-4 py-3 text-left font-bold">Mês</th>
 <th className="px-4 py-3 text-left font-bold">Tarefas</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-200">
 {[
 { mes: "Janeiro", tarefas: "Manutenção mensal + Verificar isolamento tubos (inverno)" },
 { mes: "Fevereiro", tarefas: "Manutenção mensal" },
 { mes: "Março", tarefas: "Manutenção mensal + Trimestral" },
 { mes: "Abril", tarefas: "Manutenção mensal + ANUAL PROFISSIONAL" },
 { mes: "Maio", tarefas: "Manutenção mensal" },
 { mes: "Junho", tarefas: "Manutenção mensal + Trimestral" },
 { mes: "Julho", tarefas: "Manutenção mensal" },
 { mes: "Agosto", tarefas: "Manutenção mensal" },
 { mes: "Setembro", tarefas: "Manutenção mensal + Trimestral" },
 { mes: "Outubro", tarefas: "Manutenção mensal + Parranjar inverno" },
 { mes: "Novembro", tarefas: "Manutenção mensal" },
 { mes: "Dezembro", tarefas: "Manutenção mensal + Trimestral" }
 ].map((item, i) => (
 <tr key={i} className="hover:bg-gray-50">
 <td className="px-4 py-3 font-bold text-gray-900">{item.mes}</td>
 <td className="px-4 py-3 text-gray-700 text-sm">{item.tarefas}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 <p className="text-sm text-gray-600 mt-4">
 <strong>Dica:</strong> Agende a manutenção profissional anual para Abril (antes do verão) ou Outubro (antes do inverno).
 </p>
 </section>

 {/* Sinais de Alerta */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Sinais de Que Precisa Manutenção Urgente</h2>
 <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
 <p className="text-gray-700 mb-4">
 Mesmo com manutenção regular, fique atento a estes sinais de alerta:
 </p>
 <ul className="space-y-3">
 {[
 "Conta de água 20%+ mais alta sem razão",
 "Pressão de água reduzida em várias torneiras",
 "Água demora muito a escoar (vários pontos)",
 "Manchas de humidade nas paredes ou tetos",
 "Cheiro a mofo persistente",
 "Som de água a correr com tudo fechado",
 "Autoclismo enche constantemente",
 "Água com cor ou cheiro estranho"
 ].map((sinal, i) => (
 <li key={i} className="flex items-start gap-3">
 <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700">{sinal}</span>
 </li>
 ))}
 </ul>
 <div className="mt-6 bg-white rounded-lg p-4">
 <p className="font-bold text-gray-900">
 ⚠️ Se detetar qualquer destes sinais, não pela manutenção anual. Contacte um canalizador imediatamente.
 </p>
 </div>
 </div>
 </section>

 {/* Custos */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Investimento em Manutenção vs Custo de Avarias</h2>
 <div className="grid md:grid-cols-2 gap-6">
 <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
 <h3 className="font-bold text-green-800 text-lg mb-4 flex items-center gap-2">
 <CheckCircle className="w-6 h-6" />
 Manutenção Preventiva
 </h3>
 <ul className="space-y-2 text-sm">
 <li className="flex justify-between">
 <span>Mensal (DIY):</span>
 <strong>0€</strong>
 </li>
 <li className="flex justify-between">
 <span>Trimestral (DIY):</span>
 <strong>0€</strong>
 </li>
 <li className="flex justify-between">
 <span>Anual profissional:</span>
 <strong>150-250€</strong>
 </li>
 <li className="flex justify-between border-t-2 border-green-300 pt-2 mt-2">
 <span className="font-bold">Total por ano:</span>
 <strong className="text-green-700">150-250€</strong>
 </li>
 </ul>
 </div>
 <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
 <h3 className="font-bold text-red-800 text-lg mb-4 flex items-center gap-2">
 <AlertTriangle className="w-6 h-6" />
 Avarias Sem Manutenção
 </h3>
 <ul className="space-y-2 text-sm">
 <li className="flex justify-between">
 <span>Fuga de água (danos):</span>
 <strong>500-2000€</strong>
 </li>
 <li className="flex justify-between">
 <span>Entupimento grave:</span>
 <strong>200-400€</strong>
 </li>
 <li className="flex justify-between">
 <span>Substituir tubos:</span>
 <strong>800-3000€</strong>
 </li>
 <li className="flex justify-between border-t-2 border-red-300 pt-2 mt-2">
 <span className="font-bold">Risco por ano:</span>
 <strong className="text-red-700">500-5000€</strong>
 </li>
 </ul>
 </div>
 </div>
 <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center">
 <p className="text-lg font-bold text-gray-900">
 💰 ROI: Cada 1€ investido em manutenção poupa 5-20€ em arranjos
 </p>
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
 <Link href="/blog/fuga-agua-escondida-sinais">
 <a className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-gray-900 mb-2">Sinais de Fugas de Água</h3>
 <p className="text-sm text-gray-600">7 sinais de alerta para detetar fugas</p>
 </a>
 </Link>
 <Link href="/blog/evitar-fugas-agua-prevencao">
 <a className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-gray-900 mb-2">Prevenção de Fugas</h3>
 <p className="text-sm text-gray-600">Guia completo de prevenção</p>
 </a>
 </Link>
 <Link href="/blog/esquentador-avariado-arranjar-substituir">
 <a className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-gray-900 mb-2">Esquentador: Arranjar ou Substituir?</h3>
 <p className="text-sm text-gray-600">Guia de decisão completo</p>
 </a>
 </Link>
 </div>
 </section>

 {/* CTA Final */}
 <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 text-center">
 <h3 className="text-3xl font-bold mb-4">Manutenção Preventiva Profissional</h3>
 <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
 Inspeção completa, limpeza preventiva, teste de pressão e relatório detalhado.
 Previna avarias e poupe dinheiro. Atendimento em toda a região de Trás-os-Montes.
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
 href="https://wa.me/351928484451?text=Olá,%20quero%20agendar%20manutenção%20preventiva%20anual"
 className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition-colors"
 >
 <MessageCircle className="w-6 h-6" />
 WhatsApp
 </a>
 </div>
 <p className="text-sm opacity-75">
 Manutenção completa 150-250€ • Previne 90% das avarias • Relatório incluído
 </p>
 </div>
 </article>
 </div>
 </>
 );
}
