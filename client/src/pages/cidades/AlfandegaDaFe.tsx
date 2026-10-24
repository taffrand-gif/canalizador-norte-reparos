import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { getCidadesProximas } from '@/data/cidadesProximas';

const phone = '+351 928 484 451';
const faqs = [
  { question: 'Como pedir uma estimativa de canalização em Alfândega da Fé?', answer: 'Envie a descrição, fotografias e medidas disponíveis. Com elementos suficientes, a nossa equipa pode dar uma estimativa distante indicativa; o âmbito final depende do diagnóstico.' },
  { question: 'Quanto custa um canalizador?', answer: 'Dias úteis das 09h às 18h: 70 €/h de mão de obra e 30 € de deslocação se tiver lugar. Fora desse horário, à noite, fins de semana e feriados: 100 €/h e 50 € de deslocação se tiver lugar. IVA incluído e cada hora iniciada é devida.' },
  { question: 'Que métodos de diagnóstico podem ser usados?', answer: 'Consoante o caso, podemos usar inspeção de canalizações por câmara, fluoresceína com observação UV e detetor de humidade. A alta pressão é apenas para canalizações e depois de avaliação.' },
];

export default function AlfandegaDaFe() {
  const cidadesProximas = getCidadesProximas('alfandega-da-fe');
  useEffect(() => {
    document.title = 'Canalizador em Alfândega da Fé | Reparações, instalação e diagnóstico';
    const description = document.querySelector('meta[name="description"]') || document.head.appendChild(document.createElement('meta'));
    description.setAttribute('name', 'description');
    description.setAttribute('content', 'Canalizador em Alfândega da Fé para reparações, instalação e diagnóstico. Contacte a nossa equipa pelo +351 928 484 451.');
    const canonical = document.querySelector('link[rel="canonical"]') || document.head.appendChild(document.createElement('link'));
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-alfandega-da-fe');
    const schema = document.createElement('script');
    schema.id = 'schema-alfandega-da-fe'; schema.type = 'application/ld+json';
    schema.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': [
      { '@type': 'LocalBusiness', name: 'Norte Reparos — Canalizador em Alfândega da Fé', url: 'https://canalizador-norte-reparos.pt/canalizador-alfandega-da-fe', telephone: phone, areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Alfândega da Fé' } },
      { '@type': 'Service', name: 'Canalização, reparações e diagnóstico em Alfândega da Fé', provider: { '@type': 'Organization', name: 'Norte Reparos', telephone: phone }, areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Alfândega da Fé' } },
      { '@type': 'FAQPage', mainEntity: faqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    ] });
    document.head.appendChild(schema);
    return () => schema.remove();
  }, []);
  return <><SEOHeadEnhanced citySlug="alfandega-da-fe" pageType="city" /><Header /><main className="min-h-screen bg-slate-50">
    <section className="bg-blue-800 text-white py-16"><div className="container mx-auto px-4 max-w-5xl"><Breadcrumbs items={[{ label: 'Canalizador', href: '/' }, { label: 'Alfândega da Fé', href: '/canalizador-alfandega-da-fe' }]} /><h1 className="text-4xl md:text-5xl font-bold mt-6">Canalizador em Alfândega da Fé</h1><p className="text-xl mt-4 max-w-3xl">Reparações, instalação e diagnóstico cuidadoso de canalização. Para nos orientar, descreva o problema e envie fotografias seguras, se as tiver.</p><div className="flex flex-col sm:flex-row gap-4 mt-7"><a href="tel:+351928484451" className="bg-white text-blue-800 font-bold px-6 py-3 rounded-lg">Ligar: {phone}</a><a href="https://wa.me/351928484451" className="bg-orange-500 text-white font-bold px-6 py-3 rounded-lg">Enviar por WhatsApp</a></div></div></section>
    <section className="py-12"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-3xl font-bold">Como avaliamos o pedido</h2><p className="mt-4 text-slate-700">Uma estimativa à distância pode ser indicativa quando a descrição, medidas e fotografias são suficientes. Antes de qualquer trabalho, confirmamos o diagnóstico, o âmbito, os materiais e a deslocação quando tiver lugar.</p><div className="grid md:grid-cols-3 gap-5 mt-7"><article className="bg-white p-6 rounded-xl shadow"><h3 className="font-bold text-lg">Fugas e humidade</h3><p className="mt-2 text-slate-700">Podemos recorrer a detetor de humidade, fluoresceína com observação UV ou inspeção por câmara quando o diagnóstico o justifica.</p></article><article className="bg-white p-6 rounded-xl shadow"><h3 className="font-bold text-lg">Canalizações obstruídas</h3><p className="mt-2 text-slate-700">A alta pressão é considerada apenas para canalizações, depois de avaliar o acesso e a obstrução. Não prestamos serviços de fossa séptica.</p></article><article className="bg-white p-6 rounded-xl shadow"><h3 className="font-bold text-lg">Instalação e reparação</h3><p className="mt-2 text-slate-700">Analisamos reparações, pontos de água, tubagem e trabalhos planeados dentro do âmbito confirmado.</p></article></div></div></section>
    <section className="py-12 bg-white"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-3xl font-bold">Preços e condições</h2><ul className="list-disc pl-6 mt-4 space-y-2 text-slate-700"><li>Dias úteis, das 09h às 18h: 70 €/h de mão de obra + deslocação de 30 € se tiver lugar.</li><li>Fora desse horário, à noite, fins de semana e feriados: 100 €/h + deslocação de 50 € se tiver lugar.</li><li>IVA incluído. Cada hora iniciada é devida e a deslocação é faturada quando ocorre.</li><li>Não existe orçamento gratuito com deslocação; uma estimativa remota é apenas indicativa.</li></ul></div></section>
    <section className="py-12"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl font-bold text-center">Perguntas frequentes</h2><FAQSection faqs={faqs} /></div></section>
    <section className="py-12 bg-orange-500 text-white"><div className="container mx-auto px-4 max-w-4xl text-center"><h2 className="text-3xl font-bold">Fale com a nossa equipa</h2><p className="mt-3">Atendimento telefónico 24/7. A disponibilidade e a janela de chegada são confirmadas consigo ao telefone.</p><a href="tel:+351928484451" className="inline-block bg-white text-orange-600 font-bold px-7 py-4 rounded-lg mt-6">{phone}</a><p className="mt-5 text-sm">Mais de 20 anos de experiência profissional · Seguro de responsabilidade civil profissional até 50.000 €</p></div></section>
    <CidadesProximas currentCity="Alfândega da Fé" cidades={cidadesProximas} serviceType="canalizador" /><RelatedCities currentCity="Alfândega da Fé" currentCitySlug="canalizador-alfandega-da-fe" />
  </main><Footer /></>;
}
