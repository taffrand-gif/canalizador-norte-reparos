import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Clock, MapPin, AlertTriangle } from 'lucide-react';

function CanalizadorUrgente() {
 const phone = '928 484 451';
 const phoneClean = '928484451';
 const whatsapp = '351928484451';
 const canonical = 'https://canalizador-norte-reparos.pt/canalizador-urgente';

 // 5 FAQ alinhadas intenção MONEY (DFSEO CPC=14.63 EUR vol=170)
 // Schema.org FAQPage — process, prix Z1-Z6, equipamento, cobertura, garantia
 // R12: slogans 24h/7d purgés, doctrine «mediante confirmação»
 const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
   {
    "@type": "Question",
    "name": "Como funciona o serviço de canalizador urgente em Trás-os-Montes?",
    "acceptedAnswer": {
     "@type": "Answer",
     "text": "Liga-nos, descreves o problema, validamos a deslocação por zona (Z1 a Z6, conforme distância a Macedo de Cavaleiros). Comunicamos o preço antes de sair. No local, confirmamos orçamento por escrito antes de intervir. Pagamento após a intervenção, fatura com NIF."
    }
   },
   {
    "@type": "Question",
    "name": "Quanto custa um canalizador urgente em Trás-os-Montes?",
    "acceptedAnswer": {
     "@type": "Answer",
     "text": "Mão de obra 65€/hora, deslocação conforme zona (Z1=15€, Z2=25€, Z3=35€, Z4=45€, Z5=55€, Z6=65€). Majoração +50% noite/fim-de-semana/feriado. Orçamento por escrito antes de qualquer intervenção, sem surpresas na fatura."
    }
   },
   {
    "@type": "Question",
    "name": "Que equipamento utilizam para resolver uma urgência?",
    "acceptedAnswer": {
     "@type": "Answer",
     "text": "Máquina de alta pressão Ridgid K-9102 (desentupimentos), câmara endoscópica para inspeção, geofone e câmara termográfica FLIR para localização de fugas sem demolição. Todo o equipamento vai na viatura — resolvemos à primeira na maioria dos casos."
    }
   },
   {
    "@type": "Question",
    "name": "Atendem urgências em toda a região de Trás-os-Montes?",
    "acceptedAnswer": {
     "@type": "Answer",
     "text": "Sim. Base operacional em Macedo de Cavaleiros, cobertura ~130 km raio cobrindo os distritos de Bragança, Vila Real, parte de Viseu e Guarda. Validação caso a caso mediante chamada prévia — confirmamos a deslocação para a sua localidade antes de sair."
    }
   },
   {
    "@type": "Question",
    "name": "Têm garantia nos arranjos urgentes?",
    "acceptedAnswer": {
     "@type": "Answer",
     "text": "Sim. Todas as intervenções incluem fatura com NIF e garantia escrita. Mesmo em urgência, emitimos documento de garantia — não desaparecemos depois de cobrar. Empresa registada em Portugal."
    }
   }
  ]
 };

 const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Canalizador urgente em Trás-os-Montes",
  "serviceType": "Canalizador urgente 24h",
  "description": "Serviço de canalizador urgente em Trás-os-Montes. Fuga de água, desentupimento ou cano rebentado — orçamento por escrito antes de qualquer intervenção, deslocação por zonas Z1-Z6, equipamento profissional. Mão de obra 65€/hora.",
  "areaServed": {
   "@type": "AdministrativeArea",
   "name": "Trás-os-Montes"
  },
  "provider": {
   "@type": "LocalBusiness",
   "name": "Norte Reparos",
   "telephone": "+351****4451",
   "areaServed": "Trás-os-Montes"
  },
  "offers": {
   "@type": "Offer",
   "priceCurrency": "EUR",
   "price": "65",
   "description": "Mão de obra 65€/hora + deslocação Z1-Z6 (15-65€)"
  }
 };

 return (
 <>
 <Helmet>
 <title>Canalizador urgente em Trás-os-Montes — 65€/h · Z1-Z6 | Norte Reparos</title>
 <meta name="description" content="Canalizador urgente em Trás-os-Montes. Fuga de água, desentupimento ou cano rebentado. Orçamento por escrito antes da intervenção, deslocação Z1-Z6 (15-65€) + 65€/h. Majoração +50% noite/fim-de-semana. Ligue 928 484 451." />
 <link rel="canonical" href={canonical} />
 <meta property="og:title" content="Canalizador urgente em Trás-os-Montes — Norte Reparos" />
 <meta property="og:description" content="Serviço de canalizador urgente em Trás-os-Montes. Fuga de água, desentupimento ou cano rebentado. Ligue 928 484 451." />
 <meta property="og:url" content={canonical} />
 <meta property="og:type" content="website" />
 <meta property="og:locale" content="pt_PT" />
 <script type="application/ld+json">{JSON.stringify(serviceStructuredData)}</script>
 <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
 </Helmet>
 {/* Hero — query-first H1 */}
 <section className="relative bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
 <div className="container mx-auto px-4 max-w-5xl">
 <div className="text-center">
 <div className="inline-block bg-yellow-400 text-red-900 px-6 py-2 rounded-full font-black text-sm mb-6">
 Canalizador urgente — Trás-os-Montes
 </div>
 <h1 className="text-4xl md:text-6xl font-black mb-6">
 Canalizador urgente<br />
 em Trás-os-Montes
 </h1>
 <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
 <strong>Fuga de água</strong>, <strong>desentupimento</strong> ou <strong>cano rebentado</strong> — orçamento por escrito antes da intervenção. Mão de obra 65€/h, deslocação Z1-Z6. Majoração +50% noite e fim-de-semana.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
 <a
 href={`tel:+351${phoneClean}`}
 className="inline-flex items-center justify-center gap-3 bg-white text-red-600 font-black text-xl px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
 >
 <Phone className="w-6 h-6" />
 {phone} — Ligar
 </a>
 <a
 href={`https://wa.me/${whatsapp}?text=Preciso%20de%20canalizador%20urgente%20em%20Tr%C3%A1s-os-Montes`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-3 bg-green-500 text-white font-black text-xl px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
 >
 💬 WhatsApp
 </a>
 </div>
 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
 <div className="grid grid-cols-3 gap-4 text-center">
 <div>
 <div className="text-3xl font-black">65€/h</div>
 <div className="text-sm">Mão de obra</div>
 </div>
 <div>
 <div className="text-3xl font-black">Z1-Z6</div>
 <div className="text-sm">15-65€ deslocação</div>
 </div>
 <div>
 <div className="text-3xl font-black">+50%</div>
 <div className="text-sm">Noite/Fds/Feriado</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Problemas urgentes — alinhamento intent fuga/desentupimento/cano */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4 max-w-6xl">
 <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
 Casos que exigem <strong>canalizador urgente</strong>
 </h2>
 <p className="text-center text-gray-600 mb-12 text-lg">
 Cada minuto conta. O nosso equipamento vai na viatura — resolvemos à primeira na maioria das situações.
 </p>
 <div className="grid md:grid-cols-3 gap-8">
 {/* Fuga Água */}
 <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-red-500">
 <div className="text-5xl mb-4 text-center">💧</div>
 <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
 Fuga de água
 </h3>
 <p className="text-gray-700 mb-4">
 Feche o registo geral e ligue. Cada hora sem arranjo agrava a infiltração, provoca danos estruturais e dispara a conta da água.
 </p>
 <ul className="space-y-2 text-gray-700 mb-6">
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
 <span>Deteção com câmara termográfica e geofone</span>
 </li>
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
 <span>Arranjo sem demolição sempre que possível</span>
 </li>
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
 <span>Orçamento por escrito antes de intervir</span>
 </li>
 </ul>
 <a
 href={`tel:+351${phoneClean}`}
 className="block w-full text-center bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition-all"
 >
 Resolver fuga
 </a>
 </div>

 {/* Entupimento */}
 <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-orange-500">
 <div className="text-5xl mb-4 text-center">🚽</div>
 <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
 Desentupimento
 </h3>
 <p className="text-gray-700 mb-4">
 Sem casa de banho funcional a casa é inabitável. Evite químicos — agravam o entupimento e danificam os canos.
 </p>
 <ul className="space-y-2 text-gray-700 mb-6">
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
 <span>Máquina Ridgid K-9102 (alta pressão)</span>
 </li>
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
 <span>Câmara endoscópica para localizar o bloqueio</span>
 </li>
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
 <span>Arranjo em 1-2 horas na maioria dos casos</span>
 </li>
 </ul>
 <a
 href={`tel:+351${phoneClean}`}
 className="block w-full text-center bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-orange-700 transition-all"
 >
 Resolver entupimento
 </a>
 </div>

 {/* Cano Rebentado */}
 <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-red-700">
 <div className="text-5xl mb-4 text-center">🔥</div>
 <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
 Cano rebentado
 </h3>
 <p className="text-gray-700 mb-4">
 Inundação activa exige fecho imediato do registo geral. Ligue — validamos a deslocação e damos-lhe indicações por telefone para minimizar danos até à chegada.
 </p>
 <ul className="space-y-2 text-gray-700 mb-6">
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
 <span>Feche o registo geral antes de nos contactar</span>
 </li>
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
 <span>Substituição do troço afectado</span>
 </li>
 <li className="flex items-start gap-2">
 <AlertTriangle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
 <span>Limpeza técnica da zona afectada</span>
 </li>
 </ul>
 <a
 href={`tel:+351${phoneClean}`}
 className="block w-full text-center bg-red-700 text-white font-bold py-3 rounded-xl hover:bg-red-800 transition-all"
 >
 Resolver cano
 </a>
 </div>
 </div>
 </div>
 </section>

 {/* Preços — Z1-Z6 grille desde PRICING.md, R12 «mediante confirmação» */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4 max-w-4xl">
 <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
 Preços de <strong>canalizador urgente</strong>
 </h2>
 <p className="text-center text-gray-600 mb-12 text-lg">
 Tabela transparente Z1-Z6 desde Macedo de Cavaleiros. Orçamento por escrito antes de qualquer intervenção.
 </p>
 <div className="bg-gray-50 rounded-2xl p-8 shadow-xl mb-8">
 <h3 className="font-bold text-gray-900 mb-4 text-xl">
 Deslocação por zona (tarifa única por visita)
 </h3>
 <div className="overflow-x-auto">
 <table className="w-full">
 <thead>
 <tr className="border-b-2 border-gray-300">
 <th className="text-left py-3 px-4">Zona</th>
 <th className="text-left py-3 px-4">Distância aprox.</th>
 <th className="text-right py-3 px-4">Deslocação</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-gray-200">
 <td className="py-3 px-4 font-bold">Z1</td>
 <td className="py-3 px-4">Mais próxima</td>
 <td className="py-3 px-4 text-right font-bold">15 €</td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="py-3 px-4 font-bold">Z2</td>
 <td className="py-3 px-4">~30 km</td>
 <td className="py-3 px-4 text-right font-bold">25 €</td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="py-3 px-4 font-bold">Z3</td>
 <td className="py-3 px-4">~50 km</td>
 <td className="py-3 px-4 text-right font-bold">35 €</td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="py-3 px-4 font-bold">Z4</td>
 <td className="py-3 px-4">~75 km</td>
 <td className="py-3 px-4 text-right font-bold">45 €</td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="py-3 px-4 font-bold">Z5</td>
 <td className="py-3 px-4">~100 km</td>
 <td className="py-3 px-4 text-right font-bold">55 €</td>
 </tr>
 <tr>
 <td className="py-3 px-4 font-bold">Z6</td>
 <td className="py-3 px-4">~130 km</td>
 <td className="py-3 px-4 text-right font-bold">65 €</td>
 </tr>
 </tbody>
 </table>
 </div>
 <p className="text-sm text-gray-600 mt-4">
 Mão de obra: <strong>65 €/h</strong> · Majoração +50% noite/fim-de-semana/feriado (sobre mão de obra + deslocação).
 </p>
 </div>
 <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
 <h3 className="font-bold text-gray-900 mb-3">
 Exemplo: urgência domingo 22h em Bragança (Z3)
 </h3>
 <div className="space-y-1 text-gray-700 text-sm">
 <div className="flex justify-between">
 <span>Deslocação Z3 (35€ + 50%):</span>
 <span className="font-bold">52,50 €</span>
 </div>
 <div className="flex justify-between">
 <span>Mão de obra 1h (65€ + 50%):</span>
 <span className="font-bold">97,50 €</span>
 </div>
 <hr className="border-gray-300 my-2" />
 <div className="flex justify-between text-base font-black text-cyan-700">
 <span>TOTAL ORIENTATIVO:</span>
 <span>150 €</span>
 </div>
 <p className="text-xs text-gray-500 mt-2 italic">
 Valor variável consoante a duração real do trabalho. Orçamento final comunicado por escrito no local, antes de intervir.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Cobertura regional — listagem concelhos principais */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4 max-w-6xl">
 <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
 Onde atendemos <strong>urgências</strong>
 </h2>
 <p className="text-center text-gray-600 mb-12 text-lg">
 Base operacional em Macedo de Cavaleiros · raio ~130 km · Trás-os-Montes
 </p>
 <div className="grid md:grid-cols-4 gap-6 text-center">
 <div className="bg-white rounded-xl p-6 shadow">
 <div className="text-3xl mb-2">📍</div>
 <h3 className="font-bold mb-2">Bragança</h3>
 <p className="text-sm text-gray-600">Z3</p>
 </div>
 <div className="bg-white rounded-xl p-6 shadow">
 <div className="text-3xl mb-2">📍</div>
 <h3 className="font-bold mb-2">Vila Real</h3>
 <p className="text-sm text-gray-600">Z5</p>
 </div>
 <div className="bg-white rounded-xl p-6 shadow">
 <div className="text-3xl mb-2">📍</div>
 <h3 className="font-bold mb-2">Mirandela</h3>
 <p className="text-sm text-gray-600">Z2</p>
 </div>
 <div className="bg-white rounded-xl p-6 shadow">
 <div className="text-3xl mb-2">📍</div>
 <h3 className="font-bold mb-2">Chaves</h3>
 <p className="text-sm text-gray-600">Z4</p>
 </div>
 <div className="bg-white rounded-xl p-6 shadow">
 <div className="text-3xl mb-2">📍</div>
 <h3 className="font-bold mb-2">Lamego</h3>
 <p className="text-sm text-gray-600">Z5</p>
 </div>
 <div className="bg-white rounded-xl p-6 shadow">
 <div className="text-3xl mb-2">📍</div>
 <h3 className="font-bold mb-2">Vinhais</h3>
 <p className="text-sm text-gray-600">Z3</p>
 </div>
 <div className="bg-white rounded-xl p-6 shadow">
 <div className="text-3xl mb-2">📍</div>
 <h3 className="font-bold mb-2">Torre de Moncorvo</h3>
 <p className="text-sm text-gray-600">Z3</p>
 </div>
 <div className="bg-white rounded-xl p-6 shadow">
 <div className="text-3xl mb-2">📍</div>
 <h3 className="font-bold mb-2">Mogadouro</h3>
 <p className="text-sm text-gray-600">Z3</p>
 </div>
 </div>
 <p className="text-center text-gray-600 mt-8 text-sm">
 A sua freguesia não está listada? Ligue — validamos a deslocação caso a caso.
 </p>
 </div>
 </section>

 {/* FAQ inline + link FAQ schema já injetado */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4 max-w-4xl">
 <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
 Perguntas frequentes sobre <strong>canalizador urgente</strong>
 </h2>
 <div className="space-y-6">
 <div className="bg-gray-50 rounded-xl p-6">
 <h3 className="font-bold text-lg mb-2">Como funciona o serviço?</h3>
 <p className="text-gray-700">
 Liga, descreve o problema, validamos a deslocação por zona. Comunicamos o preço antes de sair. No local, orçamento por escrito antes de intervir. Fatura com NIF após a intervenção.
 </p>
 </div>
 <div className="bg-gray-50 rounded-xl p-6">
 <h3 className="font-bold text-lg mb-2">Quanto custa?</h3>
 <p className="text-gray-700">
 Mão de obra <strong>65€/h</strong>, deslocação conforme zona (Z1=15€, Z2=25€, Z3=35€, Z4=45€, Z5=55€, Z6=65€). Majoração +50% noite/fim-de-semana/feriado. Orçamento por escrito antes de qualquer intervenção.
 </p>
 </div>
 <div className="bg-gray-50 rounded-xl p-6">
 <h3 className="font-bold text-lg mb-2">Que equipamento utilizam?</h3>
 <p className="text-gray-700">
 Máquina Ridgid K-9102 (alta pressão), câmara endoscópica, geofone e câmara termográfica FLIR. Todo o equipamento vai na viatura — resolvemos à primeira na maioria dos casos.
 </p>
 </div>
 <div className="bg-gray-50 rounded-xl p-6">
 <h3 className="font-bold text-lg mb-2">Atendem toda a região?</h3>
 <p className="text-gray-700">
 Sim. Base em Macedo de Cavaleiros, cobertura dos distritos de Bragança, Vila Real, parte de Viseu e Guarda (~130 km raio). Validação caso a caso mediante chamada prévia.
 </p>
 </div>
 <div className="bg-gray-50 rounded-xl p-6">
 <h3 className="font-bold text-lg mb-2">Têm garantia?</h3>
 <p className="text-gray-700">
 Sim. Todas as intervenções incluem fatura com NIF e garantia escrita. Empresa registada em Portugal — não desaparecemos depois de cobrar.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* CTA Final — R12 «mediante confirmação» */}
 <section className="py-16 bg-gradient-to-br from-red-600 to-red-800 text-white">
 <div className="container mx-auto px-4 max-w-4xl text-center">
 <h2 className="text-3xl md:text-5xl font-black mb-6">
 Precisa de <strong>canalizador urgente</strong>?
 </h2>
 <p className="text-xl md:text-2xl mb-8">
 Ligue, validamos a deslocação por zona e damos-lhe o preço antes de sair. Orçamento por escrito no local.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
 <a
 href={`tel:+351${phoneClean}`}
 className="inline-flex items-center justify-center gap-3 bg-white text-red-600 font-black text-2xl px-12 py-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
 >
 <Phone className="w-8 h-8" />
 {phone}
 </a>
 <a
 href={`https://wa.me/${whatsapp}?text=Preciso%20de%20canalizador%20urgente`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-3 bg-green-500 text-white font-black text-2xl px-12 py-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
 >
 💬 WhatsApp
 </a>
 </div>
 <p className="text-lg">
 Cobertura Trás-os-Montes · Z1-Z6 · Mediante confirmação por telefone
 </p>
 </div>
 </section>

 {/* Sticky Bottom Bar Mobile */}
 <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white p-4 shadow-2xl md:hidden z-50">
 <div className="flex gap-2">
 <a
 href={`tel:+351${phoneClean}`}
 className="flex-1 bg-white text-red-600 font-bold py-3 rounded-lg text-center"
 >
 📞 Ligar
 </a>
 <a
 href={`https://wa.me/${whatsapp}?text=Canalizador%20urgente`}
 target="_blank"
 rel="noopener noreferrer"
 className="flex-1 bg-green-500 text-white font-bold py-3 rounded-lg text-center"
 >
 💬 WhatsApp
 </a>
 </div>
 </div>
 </>
 );
}

export default CanalizadorUrgente;
