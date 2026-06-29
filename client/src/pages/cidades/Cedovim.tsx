// SEO optimizada para "Canalizador Cedovim"
// Gerado: 2026-06-29 | Cowork (Claude Sonnet 4.6) — Norte Reparos — Lot 2
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

export default function Cedovim() {
  const faqs = [
    {
      question: "Qual o preço de canalizador em Cedovim?",
      answer: "Em Cedovim, a deslocação é de 45€ (Zona 4, zona de cobertura a partir de Macedo de Cavaleiros). A mão de obra é 65€/h. Exemplos de preços completos: desentupimento de lavatório 80-150€, reparação de fuga de água 90-180€, substituição de sifão 55-115€. O preço é sempre comunicado antes de qualquer intervenção."
    },
    {
      question: "Fazem urgências de canalizações 24h em Cedovim?",
      answer: "Sim, atendemos urgências de fugas de água e desentupimentos 24h por dia, 7 dias por semana em Cedovim e toda a zona de Vila Nova de Foz Côa. Ligue 928 484 451 para atendimento imediato."
    },
    {
      question: "Fazem desentupimentos em Cedovim?",
      answer: "Sim, realizamos desentupimentos de esgotos, lavatórios, sanitas, ralos e colunas em Cedovim. Utilizamos equipamento de alta pressão e câmara de inspeção. Orçamento gratuito e sem compromisso."
    },
    {
      question: "Reparam fugas de água ao fim de semana em Cedovim?",
      answer: "Sim, estamos disponíveis ao fim de semana e feriados para reparação de fugas de água em Cedovim. A deslocação é de 45€ (Zona 4). Ligue 928 484 451."
    },
    {
      question: "Que zonas cobrem a partir de Cedovim?",
      answer: "A partir de Cedovim cobrimos toda a zona de Vila Nova de Foz Côa e arredores. Disponíveis 24h incluindo fins de semana e feriados. Deslocação 45€."
    }
  ];

  useEffect(() => {
    document.title = 'Canalizador Cedovim — Norte Reparos | Urgências 24h';
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Canalizador em Cedovim — desentupimentos, fugas de água, instalações sanitárias. Urgências 24h. Deslocação 45€ (Zona 4). Ligue 928 484 451.');
    if (!metaDescription.parentNode) document.head.appendChild(metaDescription);

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'canalizador cedovim, canalização cedovim, desentupimento cedovim, fuga de água cedovim, urgência 24h cedovim');
    if (!metaKeywords.parentNode) document.head.appendChild(metaKeywords);

    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-cedovim');
    if (!canonical.parentNode) document.head.appendChild(canonical);

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Norte Reparos — Canalizador Cedovim",
      "description": "Canalizador profissional em Cedovim. Desentupimentos, fugas de água, instalações sanitárias. Urgências 24h.",
      "telephone": businessInfo.phone,
      "priceRange": "€€",
      "areaServed": "Cedovim, Vila Nova de Foz Côa",
      "openingHours": "Mo-Su 00:00-24:00"
    });
    document.head.appendChild(schemaScript);

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer }
      }))
    });
    document.head.appendChild(faqSchema);

    return () => {
      document.querySelectorAll('script[type="application/ld+json"]').forEach(s => s.remove());
    };
  }, []);

  const cidadesProximas = getCidadesProximas('Cedovim');

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="bg-blue-700 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[
              { label: 'Início', href: '/' },
              { label: 'Cidades', href: '/cidades' },
              { label: 'Canalizador Cedovim' }
            ]} />
            <h1 className="text-3xl font-bold mt-4 mb-2">Canalizador Cedovim</h1>
            <p className="text-blue-100 text-lg">Desentupimentos, fugas de água e instalações sanitárias em Cedovim. Urgências 24h, 7 dias por semana.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:+351${businessInfo.phone.replace(/\s/g, '')}`}
                 className="bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                📞 Ligar agora — 928 484 451
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-10">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Serviços de Canalizador em Cedovim</h2>
            <p className="text-gray-700 mb-4">
              A Norte Reparos presta serviços de canalização profissional em Cedovim e toda a zona de Vila Nova de Foz Côa.
              Deslocação de <strong>45€ (Zona 4)</strong> e mão de obra a <strong>65€/hora</strong>.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {['Desentupimentos de esgotos', 'Reparação de fugas de água', 'Instalação sanitária completa',
                'Substituição de sifões e torneiras', 'Inspeção com câmara', 'Urgências 24h'].map(s => (
                <li key={s} className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-600 font-bold">✓</span> {s}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-blue-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold text-blue-900 mb-3">Preços em Cedovim</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-blue-700 font-semibold">Deslocação</p>
                <p className="text-2xl font-bold text-blue-900">45€</p>
                <p className="text-xs text-blue-600">(Zona 4)</p>
              </div>
              <div>
                <p className="text-sm text-blue-700 font-semibold">Mão de obra</p>
                <p className="text-2xl font-bold text-blue-900">65€/h</p>
                <p className="text-xs text-blue-600">Orçamento grátis</p>
              </div>
            </div>
          </section>

          <FAQSection faqs={faqs} />

          <CidadesProximas cidades={cidadesProximas} currentCity="Cedovim" />
          <RelatedCities currentCity="Cedovim" />
        </div>
      </main>
      <Footer />
    </>
  );
}
