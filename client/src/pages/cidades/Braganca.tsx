import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { useEffect } from 'react';

const faqs = [
  {
    question: 'Quanto custa um canalizador em Bragança?',
    answer: 'Em dias úteis, das 09h às 18h, a mão de obra é 70 €/h e a deslocação é 30 €. Fora desse horário, à noite, aos fins de semana e feriados, são 100 €/h e 50 € de deslocação. Valores TTC, IVA incluído; toda a hora começada é devida.'
  },
  {
    question: 'Que informação devo enviar antes do contacto?',
    answer: 'Indique a localidade, descreva o problema, diga quando começou e envie fotografias ou vídeo, se possível. Se os elementos forem suficientes, a nossa equipa pode dar uma estimativa à distância indicativa.'
  },
  {
    question: 'Usam câmara ou fluoresceína para diagnosticar uma fuga?',
    answer: 'Quando o diagnóstico o justifica, podemos usar inspeção de canalizações por câmara, fluoresceína com observação UV e detetor de humidade. A técnica é escolhida conforme o caso, sem promessa de uso automático.'
  },
  {
    question: 'Como é definido o orçamento?',
    answer: 'O orçamento é apresentado por escrito antes da intervenção. Não há orçamento gratuito quando é necessária deslocação; uma estimativa remota, quando possível, é indicativa.'
  }
];

export default function Braganca() {
  const { config } = useSite();
  const cidadesProximas = getCidadesProximas('braganca');

  useEffect(() => {
    document.title = 'Canalizador em Bragança — reparação e trabalhos planeados | Norte Reparos';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador em Bragança para reparação, diagnóstico e trabalhos planeados. 70 €/h + 30 € dias úteis 09h–18h; 100 €/h + 50 € fora desse horário. Valores TTC, IVA incluído.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-bragança');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.setAttribute('data-braganca-local-schema', 'true');
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://canalizador-norte-reparos.pt/#localbusiness-braganca-react',
          name: 'Norte Reparos — Canalizador em Bragança',
          url: 'https://canalizador-norte-reparos.pt/canalizador-bragança',
          telephone: '+351 928 484 451',
          priceRange: '€€',
          areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Bragança' }
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer }
          }))
        }
      ]
    });
    document.head.appendChild(schemaScript);

    return () => {
      schemaScript.remove();
    };
  }, []);

  return (
    <>
      <SEOHead />
      <StructuredData />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Breadcrumbs items={[
              { label: 'Canalizador', href: '/' },
              { label: 'Trás-os-Montes', href: '/tras-os-montes' },
              { label: 'Bragança', href: '/canalizador-braganca' }
            ]} />
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6">Canalizador em <span className="text-orange-300">Bragança</span> para reparação e trabalhos planeados</h1>
            <p className="text-xl mb-8">Descreva a situação, partilhe fotografias quando possível e deixe a nossa equipa avaliar o método adequado antes de avançar.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:+351${config.phone.replace(/\s/g, '')}`} className="bg-white text-blue-800 font-bold px-8 py-4 rounded-lg text-lg">📞 Falar com a nossa equipa: {config.phone}</a>
              <a href={`https://wa.me/${config.whatsapp}?text=Olá%2C%20preciso%20de%20ajuda%20com%20canalização%20em%20Bragança`} target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white font-bold px-8 py-4 rounded-lg text-lg">💬 Enviar fotografias por WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-10"><div className="container mx-auto px-4 max-w-4xl"><div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg"><strong>Antes de ligar:</strong> indique a localidade, o problema, quando começou e o acesso ao ponto afetado. Uma estimativa à distância só é possível quando há elementos suficientes e é sempre indicativa.</div></div></section>

        <section className="py-10"><div className="container mx-auto px-4 max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8"><div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100"><h2 className="text-3xl font-bold text-gray-900 mb-5">O que avaliamos</h2><ul className="space-y-3 text-gray-700"><li>Fugas, perdas de água e sinais de humidade</li><li>Canalizações com escoamento lento ou obstrução</li><li>Reparação ou substituição de componentes de canalização</li><li>Preparação de pontos de água e ligações em trabalhos planeados</li><li>Esquentadores elétricos e a gás, com a habilitação necessária</li></ul></div><div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100"><h2 className="text-3xl font-bold text-gray-900 mb-5">Diagnóstico prudente</h2><p className="text-gray-700 mb-4">Consoante o caso, a nossa equipa pode recorrer a inspeção de canalizações por câmara, fluoresceína com observação UV ou detetor de humidade. Para desentupimento de canalizações, a alta pressão só é usada após avaliação e quando é adequada.</p><p className="text-gray-700">A técnica não é automática nem substitui a observação do local: serve para orientar a decisão e explicar-lhe o que foi encontrado.</p></div></div></section>

        <section className="py-10 bg-gray-50"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl font-bold text-gray-900 mb-6">Preços e condições</h2><div className="grid md:grid-cols-2 gap-5"><div className="bg-white p-6 rounded-xl shadow-sm"><strong>Dias úteis, 09h–18h</strong><p className="text-2xl font-bold text-blue-700 mt-2">70 €/h + 30 €</p><p>Mão de obra e deslocação.</p></div><div className="bg-white p-6 rounded-xl shadow-sm"><strong>Fora desse horário, noite, fins de semana e feriados</strong><p className="text-2xl font-bold text-blue-700 mt-2">100 €/h + 50 €</p><p>Mão de obra e deslocação.</p></div></div><p className="mt-5 text-gray-700"><strong>Valores TTC, IVA incluído.</strong> Toda a hora começada é devida e a deslocação é faturada quando ocorre. O orçamento é apresentado por escrito antes da intervenção; não há orçamento gratuito quando é necessária deslocação.</p></div></section>

        <section className="py-10"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl font-bold text-gray-900 text-center mb-9">Perguntas frequentes</h2><FAQSection faqs={faqs} /></div></section>

        <section className="py-14 bg-gradient-to-r from-orange-500 to-blue-700 text-white"><div className="container mx-auto px-4 text-center max-w-3xl"><h2 className="text-3xl font-bold mb-5">Canalização em Bragança: explique-nos a situação</h2><p className="text-xl mb-7">Atendimento telefónico 24h/24, 7 dias por semana. A disponibilidade e a janela de chegada, quando aplicável, são confirmadas por telefone; não prometemos uma chegada imediata.</p><div className="flex flex-col sm:flex-row gap-5 justify-center"><a href={`tel:+351${config.phone.replace(/\s/g, '')}`} className="bg-white text-blue-800 font-bold px-8 py-4 rounded-lg text-lg">📞 {config.phone}</a><a href={`https://wa.me/${config.whatsapp}?text=Olá%2C%20preciso%20de%20ajuda%20com%20canalização%20em%20Bragança`} target="_blank" rel="noopener noreferrer" className="bg-orange-500 border border-white font-bold px-8 py-4 rounded-lg text-lg">💬 WhatsApp</a></div><p className="mt-6 text-orange-100">Mais de 20 anos de experiência profissional. Seguro de responsabilidade civil profissional até 50.000 €.</p><p className="mt-4 text-sm">Para uma fuga ativa ou situação urgente, consulte <a className="underline font-semibold" href="https://canalizador-urgente.pt">canalizador-urgente.pt</a>.</p></div></section>

        <section className="py-10"><CidadesProximas currentCity="Bragança" cidades={cidadesProximas} serviceType="canalizador" /><RelatedCities currentCity="Braganca" currentCitySlug="canalizador-braganca" /></section>
      </main>
      <Footer />
    </>
  );
}
