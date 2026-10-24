import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import FAQSection from '@/components/FAQSection';
import { useEffect } from 'react';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { Phone, Search, Wrench, CheckCircle } from 'lucide-react';

const phone = '+351928484451';
const faqs = [
  { question: 'Que informação ajuda antes de pedir um canalizador em Alijó?', answer: 'Indique a localidade, o problema observado, há quanto tempo acontece e, se for seguro, envie fotografias ou vídeo. Estes elementos ajudam a nossa equipa a preparar o diagnóstico e uma estimativa à distância indicativa.' },
  { question: 'Como funcionam os preços?', answer: 'Em dias úteis entre as 09h e as 18h, a mão de obra é 70 €/h e a deslocação é 30 €. Fora desse horário, à noite, fins de semana e feriados, são 100 €/h e 50 € de deslocação. Valores TTC, IVA incluído; cada hora começada é devida.' },
  { question: 'Usam câmara ou fluoresceína na deteção de fugas?', answer: 'Quando o diagnóstico o justifica, podemos recorrer à inspeção de canalizações por câmara, à fluoresceína com observação por luz UV e ao detetor de humidade. A técnica é escolhida caso a caso.' },
  { question: 'Uma estimativa à distância é um orçamento final?', answer: 'Não. Com descrição e elementos suficientes, a nossa equipa pode dar uma estimativa indicativa à distância. O valor final depende do diagnóstico e da intervenção necessária; não há orçamento gratuito quando é necessária deslocação.' },
];

export default function Alijo() {
  const cidadesProximas = getCidadesProximas('alijo');

  useEffect(() => {
    document.title = 'Canalizador em Alijó — diagnóstico e intervenções programadas | Norte Reparos';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Canalizador em Alijó para diagnóstico, fugas, canalizações, desentupimentos e esquentadores. Preços TTC claros e contacto da nossa equipa.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-alijo');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-alijo';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Norte Reparos — Canalizador em Alijó',
      url: 'https://canalizador-norte-reparos.pt/canalizador-alijo',
      telephone: phone,
      areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Alijó' },
    });
    document.head.appendChild(schemaScript);

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.id = 'faq-schema-alijo';
    faqSchema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
    });
    document.head.appendChild(faqSchema);
    return () => { schemaScript.remove(); faqSchema.remove(); };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-slate-50">
        <section className="bg-gradient-to-r from-blue-700 to-cyan-700 text-white py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <Breadcrumbs items={[{ label: 'Canalizador', href: '/' }, { label: 'Alijó', href: '/canalizador-alijo' }]} />
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-5">Canalizador em Alijó</h1>
            <p className="text-xl max-w-3xl mb-7">Diagnóstico, reparação e intervenções programadas em canalização. Descreva o que observa para a nossa equipa preparar o atendimento.</p>
            <div className="flex flex-col sm:flex-row gap-4"><a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-7 py-4 rounded-lg"><Phone className="w-5 h-5" />+351 928 484 451</a><a href="https://wa.me/351928484451" className="inline-flex items-center justify-center bg-green-700 text-white font-bold px-7 py-4 rounded-lg">WhatsApp</a></div>
          </div>
        </section>
        <section className="py-12"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-3xl font-bold text-slate-900 mb-5">Antes da visita: o que nos deve dizer</h2><p className="text-slate-700 text-lg">Indique a localidade, o sintoma, quando começou e, se for seguro, envie fotografias ou vídeo. Com elementos suficientes, podemos dar uma estimativa à distância indicativa; o valor final depende do diagnóstico e do trabalho necessário.</p><p className="text-slate-700 mt-4">O atendimento telefónico está disponível 24h/24, 7 dias por semana. A disponibilidade e a janela de chegada são confirmadas por telefone, conforme a situação operacional.</p></div></section>
        <section className="py-12 bg-white"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-3xl font-bold text-slate-900 mb-8">Serviços e diagnóstico</h2><div className="grid md:grid-cols-3 gap-6">{[{ icon: Search, title: 'Fugas e humidade', text: 'Quando adequado, recorremos a detetor de humidade, fluoresceína com observação por luz UV e inspeção de canalizações por câmara.' }, { icon: Wrench, title: 'Canalizações e escoamento', text: 'Avaliamos avarias, pontos de água e obstruções. A alta pressão é usada em canalizações apenas quando o diagnóstico a justifica.' }, { icon: CheckCircle, title: 'Intervenções planeadas', text: 'Reparações, substituições, torneiras, autoclismos, casas de banho, cozinhas e esquentadores, com âmbito explicado antes de avançar.' }].map((service) => <article key={service.title} className="p-6 rounded-xl border border-slate-200 shadow-sm"><service.icon className="w-8 h-8 text-blue-700 mb-4" /><h3 className="text-xl font-bold mb-3">{service.title}</h3><p className="text-slate-700">{service.text}</p></article>)}</div></div></section>
        <section className="py-12"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-3xl font-bold text-slate-900 mb-5">Preços e condições</h2><div className="rounded-xl bg-emerald-50 border-l-4 border-emerald-600 p-6 text-slate-800"><p><strong>Dias úteis, 09h–18h:</strong> 70 €/h de mão de obra + 30 € de deslocação.</p><p className="mt-2"><strong>Fora deste horário, noite, fins de semana e feriados:</strong> 100 €/h de mão de obra + 50 € de deslocação.</p><p className="mt-3">Valores TTC, IVA incluído. Cada hora começada é devida e a deslocação é faturada quando ocorre. Não há orçamento gratuito quando é necessária deslocação.</p></div><p className="mt-5 text-slate-700">Mais de 20 anos de experiência profissional e seguro de responsabilidade civil profissional até 50.000 €.</p></div></section>
        <section className="py-12 bg-white"><div className="container max-w-4xl"><h2 className="text-3xl font-bold text-center mb-8">Perguntas frequentes — Alijó</h2><FAQSection faqs={faqs} /></div></section>
        <section className="py-14 bg-blue-700 text-white text-center"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold mb-4">Quer falar sobre uma intervenção em Alijó?</h2><p className="text-xl mb-7">Contacte a nossa equipa com a descrição do problema ou do trabalho planeado.</p><a href={`tel:${phone}`} className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-bold"><Phone className="w-5 h-5" />+351 928 484 451</a></div></section>
        <CidadesProximas currentCity="Alijó" cidades={cidadesProximas} serviceType="canalizador" />
        <RelatedCities currentCity="Alijó" currentCitySlug="canalizador-alijo" />
      </main>
      <Footer />
    </div>
  );
}
