// SEO optimizada para "Canalizador Pinhão"
// Gerado: 2026-06-29 | Cowork (Claude Sonnet 4.6) — Norte Reparos
// STAGING — validação Filipe obrigatória antes de push para repo
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import FAQSection from '@/components/FAQSection';
import { businessInfo } from '@/shared/napConfig';
import { useEffect } from 'react';
import { getCidadesProximas } from '@/data/cidadesProximas';

export default function Pinhao() {
  const faqs = [
    {
      question: "Qual o preço de canalizador em Pinhão?",
      answer: "Em Pinhão, a deslocação é de 55€ (Zona 5). A mão de obra é 65€/h. Exemplos: desentupimento de lavatório 80-155€, reparação de fuga de água 90-185€, substituição de sifão 55-115€. O preço é sempre comunicado antes de qualquer intervenção."
    },
    {
      question: "Fazem urgências de canalizações 24h em Pinhão?",
      answer: "Sim, atendemos urgências de fugas de água e desentupimentos 24h por dia, 7 dias por semana em Pinhão e toda a zona de Alijó. Ligue 928 484 451 para atendimento."
    },
    {
      question: "Fazem desentupimentos em Pinhão?",
      answer: "Sim, fazemos desentupimentos de esgotos, lavatórios, sanitas e ralos em Pinhão. Somos especialistas em adegas, quintas vínicolas e casas históricas do Douro com canalizações antigas. Orçamento gratuito antes de qualquer trabalho."
    },
    {
      question: "Reparam fugas de água ao fim de semana em Pinhão?",
      answer: "Sim, atendemos fugas de água em Pinhão 24h, incluindo fins de semana e feriados. O acréscimo de 50% sobre mão de obra e deslocação é sempre informado antes de avançar."
    },
    {
      question: "Que zonas cobrem em Pinhão?",
      answer: "Cobrimos Pinhão e toda a área: Pinhão, São João de Lobrigos, Casal de Loivos, Provesende, Sabrosa. Disponíveis 24h incluindo fins de semana e feriados."
    }
  ];

  useEffect(() => {
    document.title = '🔧 Canalizador Pinhão — 24h | 928 484 451';
    let md = document.querySelector('meta[name="description"]');
    if (!md) { md = document.createElement('meta'); md.setAttribute('name', 'description'); document.head.appendChild(md); }
    md.setAttribute('content', 'Canalizador em Pinhão, Vila Real. Desentupimentos, fugas de água, instalações sanitárias. Deslocação 55€. Urgências 24h. Ligue 928 484 451.');

    let mk = document.querySelector('meta[name="keywords"]');
    if (!mk) { mk = document.createElement('meta'); mk.setAttribute('name', 'keywords'); document.head.appendChild(mk); }
    mk.setAttribute('content', 'canalizador pinhao, canalizador urgente pinhão, desentupimento pinhão, fuga agua pinhão, canalizador alijo, canalizador douro');

    let can = document.querySelector('link[rel="canonical"]');
    if (!can) { can = document.createElement('link'); can.setAttribute('rel', 'canonical'); document.head.appendChild(can); }
    can.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-pinhao');

    const s = document.createElement('script');
    s.type = 'application/ld+json'; s.id = 'schema-pinhao';
    s.text = JSON.stringify({
      "@context": "https://schema.org", "@type": "LocalBusiness",
      "name": "Canalizador Profissional — Pinhão",
      "image": "/images-optimized/hero/hero-plumber-portugal.jpg",
      "description": "Canalizador profissional em Pinhão, Vila Real. Desentupimentos, fugas e urgências 24h. Deslocação 55€.",
      "address": { "@type": "PostalAddress", "addressLocality": "Pinhão", "addressRegion": "Vila Real", "addressCountry": "PT", "postalCode": "5085-010" },
      "telephone": businessInfo.phone, "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "€€", "areaServed": { "@type": "Place", "name": "Pinhão, Vila Real" }
    });
    document.head.appendChild(s);

    const fs = document.createElement('script');
    fs.type = 'application/ld+json'; fs.setAttribute('data-faq-schema', 'true');
    fs.text = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
    });
    document.head.appendChild(fs);

    return () => {
      const s1 = document.getElementById('schema-pinhao'); if (s1) document.head.removeChild(s1);
      const s2 = document.querySelector('script[data-faq-schema]'); if (s2) document.head.removeChild(s2);
    };
  }, []);

  const cidadesProximas = getCidadesProximas('pinhao');

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <section className="bg-gradient-to-r from-gray-900 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4"><div className="max-w-4xl">
            <Breadcrumbs items={[ { label: 'Canalizador', href: '/' }, { label: 'Trás-os-Montes', href: '/canalizador-tras-os-montes' }, { label: 'Alijó', href: '/canalizador-alijo' }, { label: 'Pinhão', href: '/canalizador-pinhao' } ]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Canalizador em{' '}<span className="text-blue-300">Pinhão</span></h1>
            <p className="text-xl mb-4 text-gray-200">Vila fluvial do concelho de Alijó, no coração da Região Demarcada do Douro, com quintas vínicolas centenárias. Urgências 24h, desentupimentos e fugas de água. Deslocação 55€.</p>
            <p className="text-base mb-8 text-gray-300">Cobrimos Pinhão e toda a zona de Alijó. Disponíveis 24h incluindo fins de semana e feriados.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${businessInfo.phone}`} className="bg-white text-blue-800 hover:bg-blue-50 font-bold px-8 py-4 rounded-lg text-lg transition-colors text-center">🔧 Ligar: {businessInfo.phoneFormatted}</a>
              <a href={`https://wa.me/${businessInfo.whatsapp}?text=Olá, preciso de um canalizador em Pinhão`} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors text-center">💬 WhatsApp</a>
            </div>
          </div></div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Serviços em <span className="text-blue-600">Pinhão</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100"><div className="text-3xl mb-4">🚰</div><h3 className="text-xl font-bold text-gray-900 mb-3">Desentupimentos</h3><p className="text-gray-600 mb-4">Especialistas em adegas, quintas vínicolas e casas históricas do Douro com canalizações antigas.</p><ul className="space-y-1 text-sm text-gray-500"><li>✓ Esgotos interiores e exteriores</li><li>✓ Sanitas e lavatórios</li><li>✓ Alta pressão e sonda mecânica</li><li>✓ Fossas sépticas</li></ul></div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100"><div className="text-3xl mb-4">💧</div><h3 className="text-xl font-bold text-gray-900 mb-3">Fugas de Água 24h</h3><p className="text-gray-600 mb-4">Deteção sem destruição desnecessária.</p><ul className="space-y-1 text-sm text-gray-500"><li>✓ Fugas em paredes e pavimentos</li><li>✓ Tubagens PEX e PVC</li><li>✓ Urgências 24h/7 dias</li><li>✓ Garantia 12 meses</li></ul></div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100"><div className="text-3xl mb-4">🏡</div><h3 className="text-xl font-bold text-gray-900 mb-3">Instalações Sanitárias</h3><p className="text-gray-600 mb-4">Casas de banho, cozinhas e esquentadores.</p><ul className="space-y-1 text-sm text-gray-500"><li>✓ Substituição de tubagens antigas</li><li>✓ Esquentadores e termoacumuladores</li><li>✓ Orçamento gratuito</li><li>✓ Garantia 12 meses</li></ul></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Canalizador em Pinhão e arredores</h2>
              <p className="text-gray-600 mb-4">Pinhão é uma vila fluvial do concelho de Alijó, no coração da Região Demarcada do Douro, com quintas vínicolas centenárias. Conhecemos bem as particularidades hidráulicas: adegas, quintas vínicolas e casas históricas do Douro com canalizações antigas.</p>
              <p className="text-gray-600 mb-4">Cobrimos Pinhão e toda a área de Alijó. Deslocação 55€ (Zona 5). Mão de obra 65€/h. Orçamento gratuito.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cobertura em <span className="text-blue-600">Pinhão</span></h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div key="Pinhão" className="flex items-center gap-2 text-gray-700 text-sm"><span className="text-blue-500">🔧</span><span>Pinhão</span></div>
                <div key="São João de Lobrigos" className="flex items-center gap-2 text-gray-700 text-sm"><span className="text-blue-500">🔧</span><span>São João de Lobrigos</span></div>
                <div key="Casal de Loivos" className="flex items-center gap-2 text-gray-700 text-sm"><span className="text-blue-500">🔧</span><span>Casal de Loivos</span></div>
                <div key="Provesende" className="flex items-center gap-2 text-gray-700 text-sm"><span className="text-blue-500">🔧</span><span>Provesende</span></div>
                <div key="Sabrosa" className="flex items-center gap-2 text-gray-700 text-sm"><span className="text-blue-500">🔧</span><span>Sabrosa</span></div>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between text-sm mb-2"><span className="text-gray-600">Distância da base</span><span className="font-bold text-blue-700">~80 km</span></div>
                <div className="flex items-center justify-between text-sm mb-2"><span className="text-gray-600">Deslocação</span><span className="font-bold text-blue-700">55€ (Zona 5)</span></div>
                <div className="flex items-center justify-between text-sm"><span className="text-gray-600">Disponibilidade</span><span className="font-bold text-blue-700">24h / 7 dias</span></div>
              </div>
            </div>
          </div></div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Perguntas sobre <span className="text-blue-600">Canalizador em Pinhão</span></h2>
            <div className="max-w-3xl mx-auto"><FAQSection faqs={faqs} /></div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Canalizador em <span className="text-blue-300">Pinhão</span></h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">Deslocação 55€. Orçamento gratuito. Garantia 12 meses.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href={`tel:${businessInfo.phone}`} className="bg-white text-blue-800 hover:bg-blue-50 font-bold px-10 py-4 rounded-lg text-lg transition-colors">🔧 {businessInfo.phoneFormatted}</a>
              <a href={`https://wa.me/${businessInfo.whatsapp}?text=Olá, preciso de um canalizador em Pinhão`} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        <CidadesProximas currentCity="Pinhão" cidades={cidadesProximas} serviceType="canalizador" />
        <RelatedCities currentCity="Pinhao" currentCitySlug="canalizador-pinhao" />
      </main>
      <Footer />
    </>
  );
}
