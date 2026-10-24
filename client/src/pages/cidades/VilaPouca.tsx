import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import CidadesProximas from '@/components/CidadesProximas';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { getCidadesProximas } from '@/data/cidadesProximas';

const phone = '+351 928 484 451';
const whatsapp = '351928484451';

export default function VilaPouca() {
  const faqs = [
    { question: 'Quanto custa um canalizador em Vila Pouca de Aguiar?', answer: 'Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 € quando ocorre. Fora desse horário, à noite, fim de semana ou feriado, são 100 €/h e 50 €. IVA incluído e toda a hora iniciada é devida.' },
    { question: 'Que informação ajuda a preparar a intervenção?', answer: 'Indique a localidade, o objetivo ou o sintoma e envie fotografias e medidas, quando disponíveis. Com elementos suficientes, a estimativa remota pode ser indicativa.' },
    { question: 'Usam câmara, fluoresceína ou alta pressão?', answer: 'Consoante o diagnóstico, a nossa equipa pode usar câmara endoscópica, fluoresceína com observação UV, detetor de humidade ou alta pressão para canalizações quando for adequada.' },
    { question: 'Há orçamento gratuito com deslocação?', answer: 'Não. A deslocação é faturada se tiver lugar. A estimativa à distância é apenas indicativa e depende da informação recebida.' },
  ];
  const cidadesProximas = getCidadesProximas('vila-pouca-de-aguiar');

  useEffect(() => {
    document.title = 'Canalizador em Vila Pouca de Aguiar — instalação, reparação e diagnóstico';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) { metaDescription = document.createElement('meta'); metaDescription.setAttribute('name', 'description'); document.head.appendChild(metaDescription); }
    metaDescription.setAttribute('content', 'Canalizador em Vila Pouca de Aguiar para instalação, reparação e diagnóstico. 70 €/h + 30 € em dias úteis, 09h–18h; 100 €/h + 50 € fora desse horário. IVA incluído.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-vila-pouca-de-aguiar');
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json'; schemaScript.id = 'schema-vila-pouca-de-aguiar';
    schemaScript.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': [
      { '@type': 'Plumber', name: 'Norte Reparos — Canalizador em Vila Pouca de Aguiar', url: 'https://canalizador-norte-reparos.pt/canalizador-vila-pouca-de-aguiar', telephone: phone, priceRange: '€€', areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vila Pouca de Aguiar' } },
      { '@type': 'Service', name: 'Instalação, reparação e diagnóstico de canalizações em Vila Pouca de Aguiar', serviceType: 'Canalização: instalação, reparação e diagnóstico', areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Vila Pouca de Aguiar' }, availableChannel: { '@type': 'ServiceChannel', servicePhone: { '@type': 'ContactPoint', telephone: phone, contactType: 'customer service' } } },
      { '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
    ]});
    document.head.appendChild(schemaScript);
    return () => { schemaScript.remove(); };
  }, []);

  return <div className="min-h-screen flex flex-col"><Header /><main className="flex-grow">
    <section className="bg-gradient-to-r from-blue-700 to-cyan-800 text-white py-16"><div className="container mx-auto px-4 max-w-5xl"><h1 className="text-4xl md:text-5xl font-bold mb-5">Canalizador em Vila Pouca de Aguiar</h1><p className="text-xl max-w-3xl">Instalação, reparação e diagnóstico de canalizações para intervenções planeadas, com informação clara antes de avançar.</p><div className="mt-7 flex flex-col sm:flex-row gap-4"><a href="tel:+351928484451" className="bg-white text-blue-800 font-bold px-7 py-4 rounded-lg">📞 {phone}</a><a href={`https://wa.me/${whatsapp}?text=Olá, preciso de um canalizador em Vila Pouca de Aguiar`} className="bg-green-600 text-white font-bold px-7 py-4 rounded-lg">💬 WhatsApp</a></div></div></section>
    <section className="py-12 bg-white"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl font-bold mb-5">Preços e preparação da intervenção</h2><p className="mb-4"><strong>Dias úteis, 09h–18h:</strong> 70 €/h de mão de obra + 30 € de deslocação quando ocorre. <strong>Fora desse horário, à noite, fim de semana ou feriado:</strong> 100 €/h + 50 € de deslocação.</p><p>IVA incluído. Toda a hora iniciada é devida e a deslocação é faturada se tiver lugar. Uma estimativa remota pode ser indicativa se a descrição e as fotografias forem suficientes; não há orçamento gratuito com deslocação.</p></div></section>
    <section className="py-12 bg-slate-50"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-3xl font-bold text-center mb-8">Serviços e diagnóstico</h2><div className="grid md:grid-cols-3 gap-6"><article className="bg-white p-6 rounded-xl shadow"><h3 className="text-xl font-bold mb-3">Instalação e remodelação</h3><p>Planeamento de pontos de água, substituição de tubagem e trabalhos em cozinha, lavandaria ou casa de banho, com âmbito e materiais clarificados.</p></article><article className="bg-white p-6 rounded-xl shadow"><h3 className="text-xl font-bold mb-3">Fugas e avarias</h3><p>Partilhe os sinais observados, fotografias e acesso disponível. A causa é avaliada antes de decidir a reparação.</p></article><article className="bg-white p-6 rounded-xl shadow"><h3 className="text-xl font-bold mb-3">Canalizações com escoamento deficiente</h3><p>A alta pressão para desentupir canalizações é usada apenas quando a avaliação indicar que é adequada.</p></article></div></div></section>
    <section className="py-12 bg-white"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl font-bold mb-5">Método e informação útil</h2><p className="mb-4">Consoante o diagnóstico, a nossa equipa pode usar detetor de humidade, inspeção de canalizações por câmara endoscópica ou fluoresceína com observação UV. Estes meios ajudam a recolher informação; não são passos automáticos nem substituem a avaliação no local.</p><p>Indique a localidade, o objetivo ou o sintoma, envie medidas e fotografias quando existirem e diga se já há materiais escolhidos. A nossa equipa tem mais de 20 anos de experiência profissional e seguro de responsabilidade civil profissional até 50.000 €.</p></div></section>
    <section className="py-12 bg-slate-50"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl font-bold text-center mb-8">Perguntas frequentes</h2><FAQSection faqs={faqs} /></div></section>
    <section className="py-14 bg-blue-800 text-white text-center"><div className="container mx-auto px-4 max-w-3xl"><h2 className="text-3xl font-bold mb-4">Quer preparar uma intervenção?</h2><p className="text-lg mb-7">Envie a descrição e, se possível, fotografias. A linha telefónica está disponível 24/7; para intervenções planeadas, o agendamento e a janela de chegada são confirmados pelo telefone.</p><a href="tel:+351928484451" className="inline-block bg-white text-blue-800 font-bold px-8 py-4 rounded-lg">📞 {phone}</a></div></section>
    <CidadesProximas currentCity="Vila Pouca de Aguiar" cidades={cidadesProximas} serviceType="canalizador" /><RelatedCities currentCity="Vila Pouca de Aguiar" currentCitySlug="canalizador-vila-pouca-de-aguiar" />
  </main><Footer /></div>;
}
