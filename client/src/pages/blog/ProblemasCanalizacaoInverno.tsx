// Blog article: "Problemas de Canalização no Inverno: Soluções e Prevenção"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Phone, Snowflake, AlertTriangle, CheckCircle, Thermometer } from 'lucide-react';
export default function ProblemasCanalizacaoInverno() {
 useEffect(() => {
 document.title = "Problemas de Canalização no Inverno: Soluções e Prevenção | Trás-os-Montes";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Guia completo para proteger canalização do frio em Trás-os-Montes: tubos congelados, isolamento térmico, urgências de inverno.');
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/blog/problemas-canalizacao-inverno-solucoes');
 // JSON-LD Article Schema
 const script = document.createElement('script');
 script.type = 'application/ld+json';
 script.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Problemas de Canalização no Inverno: Soluções e Prevenção",
 "description": "Como proteger tubagens do frio extremo em Trás-os-Montes: prevenção, isolamento e soluções de emergência.",
 "author": {
 "@type": "Organization",
 "name": "Norte Reparos"
 },
 "publisher": {
 "@type": "Organization",
 "name": "Norte Reparos",
 "logo": {
 "@type": "ImageObject",
 "url": "https://canalizador-norte-reparos.pt/logo.png"
 }
 },
 "datePublished": "2026-02-19",
 "dateModified": "2026-02-19"
 });
 document.head.appendChild(script);
 }, []);
 const problemas = [
 {
 problema: "Tubos Congelados",
 sintomas: "Sem água nas torneiras, gelo visível em tubos expostos",
 urgencia: "ALTA",
 solucao: "Aquecer gradualmente com secador ou toalhas quentes. NUNCA use maçarico.",
 prevencao: "Isolamento térmico, deixar torneiras a pingar em noites muito frias"
 },
 {
 problema: "Tubos Rebentados",
 sintomas: "Água a jorrar, manchas de humidade súbitas, pressão zero",
 urgencia: "CRÍTICA",
 solucao: "Fechar torneira geral IMEDIATAMENTE. Ligar canalizador de urgência.",
 prevencao: "Isolamento adequado, drenar tubagens exteriores no inverno"
 },
 {
 problema: "Contador Congelado",
 sintomas: "Contador não roda, caixa com gelo",
 urgencia: "ALTA",
 solucao: "Aquecer caixa com água morna (não fervente). Isolar após descongelar.",
 prevencao: "Isolar caixa do contador com esferovite ou lã de rocha"
 },
 {
 problema: "Esquentador Não Liga",
 sintomas: "Erro de ignição, água fria",
 urgencia: "MÉDIA",
 solucao: "Verificar se tubos de gás não congelaram. Chamar técnico se persistir.",
 prevencao: "Manter esquentador em zona aquecida, ventilação adequada"
 }
 ];
 const zonasRisco = [
 { zona: "Sótãos e águas-furtadas", risco: "MUITO ALTO" },
 { zona: "Garagens não aquecidas", risco: "ALTO" },
 { zona: "Tubagens exteriores", risco: "MUITO ALTO" },
 { zona: "Caves e porões", risco: "MÉDIO" },
 { zona: "Caixas de contador", risco: "ALTO" },
 { zona: "Paredes exteriores (norte)", risco: "ALTO" }
 ];
 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-grow">
 {/* Hero */}
 <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
 <div className="container">
 <div className="max-w-3xl mx-auto text-center">
 <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-bold mb-4">
 ❄️ INVERNO TRÁS-OS-MONTES
 </span>
 <h1 className="text-4xl md:text-5xl font-black mb-6">
 Problemas de Canalização no Inverno
 </h1>
 <p className="text-xl opacity-90">
 Como proteger tubagens do frio extremo: prevenção, isolamento e soluções de emergência.
 </p>
 </div>
 </div>
 </section>
 {/* Alerta */}
 <section className="py-12 bg-red-50">
 <div className="container max-w-3xl">
 <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-red-500">
 <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
 <div>
 <h2 className="text-xl font-bold text-red-700 mb-2">Inverno Rigoroso em Trás-os-Montes</h2>
 <p className="text-gray-700">
 Em <a href="/canalizador-montalegre" className="text-blue-600 hover:underline">Montalegre</a>, 
 <a href="/canalizador-braganca" className="text-blue-600 hover:underline"> Bragança</a> e 
 <a href="/canalizador-chaves" className="text-blue-600 hover:underline"> Chaves</a>, as temperaturas 
 podem chegar a <strong>-10°C ou menos</strong>. Tubos sem isolamento rebentam em poucas horas. 
 A prevenção é ESSENCIAL.
 </p>
 </div>
 </div>
 </div>
 </section>
 {/* Introdução */}
 <section className="py-12">
 <div className="container max-w-3xl">
 <div className="prose prose-lg max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed">
 O inverno em Trás-os-Montes é um dos mais rigorosos de Portugal. Todos os anos, centenas 
 de chamadas de emergência são feitas por <strong>tubos rebentados</strong> e 
 <strong> canalização congelada</strong>. Um tubo rebentado pode causar danos de milhares de euros.
 </p>
 <p className="text-lg text-gray-700 leading-relaxed mt-4">
 Este guia explica como prevenir problemas, identificar sinais de alerta e agir em emergências.
 </p>
 </div>
 </div>
 </section>
 {/* Problemas Comuns */}
 <section className="py-16 bg-gray-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-8 text-center">Problemas Mais Comuns</h2>
 <div className="space-y-6">
 {problemas.map((item, index) => (
 <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
 <div className={`p-6 border-l-4 ${
 item.urgencia === 'CRÍTICA' ? 'border-red-500 bg-red-50' :
 item.urgencia === 'ALTA' ? 'border-orange-500 bg-orange-50' :
 'border-blue-500 bg-blue-50'
 }`}>
 <div className="flex items-center gap-2 mb-2">
 <span className={`text-xs font-bold px-2 py-1 rounded ${
 item.urgencia === 'CRÍTICA' ? 'bg-red-500 text-white' :
 item.urgencia === 'ALTA' ? 'bg-orange-500 text-white' :
 'bg-blue-500 text-white'
 }`}>
 {item.urgencia}
 </span>
 </div>
 <h3 className="text-xl font-bold mb-3">{item.problema}</h3>
 <p className="text-sm text-gray-600 mb-3">
 <strong>Sintomas:</strong> {item.sintomas}
 </p>
 <div className="space-y-2">
 <div className="bg-white/70 p-3 rounded-lg">
 <p className="text-sm"><strong className="text-red-600">Solução Imediata:</strong> {item.solucao}</p>
 </div>
 <div className="bg-white/70 p-3 rounded-lg">
 <p className="text-sm"><strong className="text-green-600">Prevenção:</strong> {item.prevencao}</p>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* Zonas de Risco */}
 <section className="py-16">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6 text-center">Zonas de Maior Risco</h2>
 <div className="bg-white rounded-xl shadow-lg overflow-hidden">
 <table className="w-full">
 <thead className="bg-blue-600 text-white">
 <tr>
 <th className="px-6 py-4 text-left font-bold">Zona</th>
 <th className="px-6 py-4 text-center font-bold">Risco</th>
 </tr>
 </thead>
 <tbody>
 {zonasRisco.map((item, index) => (
 <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
 <td className="px-6 py-4">{item.zona}</td>
 <td className="px-6 py-4 text-center">
 <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
 item.risco === 'MUITO ALTO' ? 'bg-red-500 text-white' :
 item.risco === 'ALTO' ? 'bg-orange-500 text-white' :
 'bg-blue-500 text-white'
 }`}>
 {item.risco}
 </span>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>
 {/* Isolamento Térmico */}
 <section className="py-16 bg-blue-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6 text-center">Isolamento Térmico: A Melhor Prevenção</h2>
 <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
 <p className="text-gray-700 mb-4">
 O isolamento térmico é a forma mais eficaz de proteger tubagens. Invista €100-300 e evite 
 arranjos de €1.000-5.000.
 </p>
 <h3 className="font-bold text-lg mb-3">Tipos de Isolamento:</h3>
 <div className="space-y-4">
 <div className="bg-gray-50 p-4 rounded-lg">
 <h4 className="font-bold mb-2">Espuma de Polietileno (Tubolit)</h4>
 <p className="text-sm text-gray-700 mb-2">
 Mais comum. Fácil de instalar. Protege até -5°C.
 </p>
 <p className="text-sm"><strong>Custo:</strong> €2-4/metro</p>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg">
 <h4 className="font-bold mb-2">Lã de Rocha</h4>
 <p className="text-sm text-gray-700 mb-2">
 Mais eficiente. Protege até -15°C. Ideal para zonas muito frias.
 </p>
 <p className="text-sm"><strong>Custo:</strong> €4-7/metro</p>
 </div>
 <div className="bg-gray-50 p-4 rounded-lg">
 <h4 className="font-bold mb-2">Cabo Aquecedor Elétrico</h4>
 <p className="text-sm text-gray-700 mb-2">
 Para situações extremas. Mantém tubo acima de 0°C.
 </p>
 <p className="text-sm"><strong>Custo:</strong> €15-25/metro + consumo elétrico</p>
 </div>
 </div>
 </div>
 <div className="bg-white rounded-xl p-6 shadow-lg">
 <h3 className="font-bold text-lg mb-3">Como Instalar Isolamento:</h3>
 <ol className="space-y-3">
 <li className="flex items-start gap-3">
 <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
 <span>Limpe e seque o tubo completamente</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
 <span>Corte o isolamento no comprimento certo</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
 <span>Abra a fenda longitudinal e encaixe no tubo</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
 <span>Feche com fita adesiva ou abraçadeiras</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
 <span>Isole TODAS as junções e cotovelos (pontos mais fracos)</span>
 </li>
 </ol>
 </div>
 </div>
 </section>
 {/* Dicas de Prevenção */}
 <section className="py-16 bg-gray-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6 text-center">10 Dicas de Prevenção</h2>
 <div className="grid md:grid-cols-2 gap-4">
 <div className="bg-white p-4 rounded-xl shadow-md">
 <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
 <h3 className="font-bold mb-2">1. Isole Tubagens Expostas</h3>
 <p className="text-sm text-gray-700">Especialmente em sótãos, garagens e exterior.</p>
 </div>
 <div className="bg-white p-4 rounded-xl shadow-md">
 <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
 <h3 className="font-bold mb-2">2. Deixe Torneiras a Pingar</h3>
 <p className="text-sm text-gray-700">Em noites abaixo de -5°C, água em movimento não congela.</p>
 </div>
 <div className="bg-white p-4 rounded-xl shadow-md">
 <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
 <h3 className="font-bold mb-2">3. Abra Portas de Armários</h3>
 <p className="text-sm text-gray-700">Deixe ar quente circular em volta de tubos sob lavatórios.</p>
 </div>
 <div className="bg-white p-4 rounded-xl shadow-md">
 <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
 <h3 className="font-bold mb-2">4. Drene Tubagens Exteriores</h3>
 <p className="text-sm text-gray-700">Torneiras de jardim, mangueiras, sistemas de rega.</p>
 </div>
 <div className="bg-white p-4 rounded-xl shadow-md">
 <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
 <h3 className="font-bold mb-2">5. Mantenha Aquecimento Mínimo</h3>
 <p className="text-sm text-gray-700">Mesmo ausente, deixe aquecimento a 10-12°C.</p>
 </div>
 <div className="bg-white p-4 rounded-xl shadow-md">
 <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
 <h3 className="font-bold mb-2">6. Isole Caixa do Contador</h3>
 <p className="text-sm text-gray-700">Use esferovite ou lã de rocha. Contador congelado = sem água.</p>
 </div>
 <div className="bg-white p-4 rounded-xl shadow-md">
 <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
 <h3 className="font-bold mb-2">7. Feche Válvulas de Zonas Não Usadas</h3>
 <p className="text-sm text-gray-700">Garagens, arrecadações, casas de férias.</p>
 </div>
 <div className="bg-white p-4 rounded-xl shadow-md">
 <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
 <h3 className="font-bold mb-2">8. Vede Fendas e Aberturas</h3>
 <p className="text-sm text-gray-700">Evite correntes de ar frio em zonas com tubagens.</p>
 </div>
 <div className="bg-white p-4 rounded-xl shadow-md">
 <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
 <h3 className="font-bold mb-2">9. Conheça Localização da Torneira Geral</h3>
 <p className="text-sm text-gray-700">Em emergência, cada segundo conta.</p>
 </div>
 <div className="bg-white p-4 rounded-xl shadow-md">
 <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
 <h3 className="font-bold mb-2">10. Tenha Número de Canalizador</h3>
 <p className="text-sm text-gray-700">Urgências de inverno acontecem fora de horas.</p>
 </div>
 </div>
 </div>
 </section>
 {/* Emergência: O Que Fazer */}
 <section className="py-16 bg-red-50">
 <div className="container max-w-3xl">
 <h2 className="text-3xl font-black mb-6 text-center text-red-700">
 EMERGÊNCIA: Tubo Rebentado
 </h2>
 <div className="bg-white rounded-xl p-6 shadow-lg">
 <p className="text-gray-700 mb-6 font-bold">
 Se um tubo rebentar, siga estes passos IMEDIATAMENTE:
 </p>
 <ol className="space-y-4">
 <li className="flex items-start gap-4">
 <span className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</span>
 <div>
 <strong className="text-red-600">FECHE A TORNEIRA GERAL</strong>
 <p className="text-sm text-gray-700 mt-1">Normalmente junto ao contador ou entrada da casa.</p>
 </div>
 </li>
 <li className="flex items-start gap-4">
 <span className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</span>
 <div>
 <strong className="text-red-600">DESLIGUE ELETRICIDADE</strong>
 <p className="text-sm text-gray-700 mt-1">Se água atingir quadro elétrico ou tomadas.</p>
 </div>
 </li>
 <li className="flex items-start gap-4">
 <span className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</span>
 <div>
 <strong className="text-red-600">LIGUE CANALIZADOR DE URGÊNCIA</strong>
 <p className="text-sm text-gray-700 mt-1">Não tente arranjar sozinho. Tubo rebentado requer substituição.</p>
 </div>
 </li>
 <li className="flex items-start gap-4">
 <span className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">4</span>
 <div>
 <strong className="text-orange-600">DOCUMENTE DANOS</strong>
 <p className="text-sm text-gray-700 mt-1">Tire fotos para seguro. Remova objetos de valor da zona afetada.</p>
 </div>
 </li>
 </ol>
 </div>
 </div>
 </section>
 {/* CTA */}
 <section className="py-16 bg-blue-600 text-white">
 <div className="container text-center">
 <Snowflake className="w-16 h-16 mx-auto mb-6 opacity-80" />
 <h2 className="text-3xl font-black mb-4">
 Urgências de Canalização 24/7
 </h2>
 <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
 Atendemos urgências de inverno em <a href="/canalizador-braganca" className="underline hover:no-underline">Bragança</a>, 
 <a href="/canalizador-chaves" className="underline hover:no-underline"> Chaves</a>, 
 <a href="/canalizador-montalegre" className="underline hover:no-underline"> Montalegre</a> e toda a região. 
 Disponíveis 24 horas, incluindo fins de semana.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="tel:+351928484451" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
 <Phone className="w-6 h-6" />
 928 484 451
 </a>
 <a href="https://wa.me/351928484451?text=URGÊNCIA:%20Tubo%20rebentado%20com%20o%20frio." className="inline-flex items-center justify-center gap-2 bg-red-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-600 transition-all shadow-lg">
 🚨 WhatsApp Urgência
 </a>
 </div>
 </div>
 </section>
 {/* Artigos Relacionados */}
 <section className="py-16 bg-gray-50">
 <div className="container max-w-3xl">
 <h2 className="text-2xl font-black mb-6">Artigos Relacionados</h2>
 <div className="grid md:grid-cols-2 gap-6">
 <a href="/blog/canalizacao-casa-antiga-renovacao" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-lg mb-2 text-blue-600">Renovação de Canalização em Casas Antigas</h3>
 <p className="text-gray-600 text-sm">Guia específico para casas antigas de Trás-os-Montes.</p>
 </a>
 <a href="/blog/sinais-fugas-agua-escondidas" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
 <h3 className="font-bold text-lg mb-2 text-blue-600">Sinais de Fugas de Água</h3>
 <p className="text-gray-600 text-sm">Detetar fugas antes que causem danos graves.</p>
 </a>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </div>
 );
}
