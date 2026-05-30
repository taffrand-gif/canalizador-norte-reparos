#!/usr/bin/env python3
"""Generate remaining city pages for canalizador-norte-reparos.pt"""

pages = [
    {
        "name": "Carrazeda de Ansiães",
        "slug": "carrazeda-de-ansiaes",
        "zone": "Z3",
        "price": "110€",
        "title": "Terra do Vinho do Porto e do Museu do Vinho",
        "description": "Concelho vinhateiro do Douro com tradição secular na produção de vinho. O Museu do Vinho atrai visitantes de todo o mundo.",
        "details": "Os sistemas de água para adegas e lagares são específicos desta região. A produção de vinho exige infraestrutura de água de qualidade.",
        "lat": "41.2333",
        "lon": "-7.3167"
    },
    {
        "name": "Vimioso",
        "slug": "vimioso",
        "zone": "Z3",
        "price": "110€",
        "title": "Terra das Aldeias de Pedra",
        "description": "Concelho do planalto transmontano com aldeias de xisto bem preservadas. Paisagens de grande beleza natural.",
        "details": "Zona de montanha com tradição na pastorícia e na produção de fumeiro. As aldeias têm sistemas de água partilhados.",
        "lat": "41.6167",
        "lon": "-6.4833"
    },
    {
        "name": "Vilarandelo",
        "slug": "vilarandelo",
        "zone": "Z3",
        "price": "110€",
        "title": "Terra da Oliveira e do Azeite",
        "description": "Vila transmontana conhecida pela olivicultura e produção de azeite. A tradição oleira mantém-se viva na região.",
        "details": "Zona fértil junto ao Rio Túa. A economia assenta na agricultura de sequeiro e na pecuária.",
        "lat": "41.5500",
        "lon": "-7.4167"
    },
    {
        "name": "Vilar de Maçada",
        "slug": "vilar-de-macada",
        "zone": "Z3",
        "price": "110€",
        "title": "Terra do Vinho Verde e da Oliveira",
        "description": "Povoação do Douro Superior conhecida pela produção de vinho verde e azeite. Paisagens deslumbrantes sobre o vale do Douro.",
        "details": "Zona de transição entre Trás-os-Montes e o Douro. A agricultura e o turismo rural são pilares da economia local.",
        "lat": "41.2667",
        "lon": "-7.5000"
    },
    {
        "name": "Freixo de Numão",
        "slug": "freixo-de-numao",
        "zone": "Z3",
        "price": "110€",
        "title": "Terra da Serra de Monomir e do Xisto",
        "description": "Aldeia transmontana na Serra de Monomir. Paisagens de grande beleza com vestígios de ocupação romana.",
        "details": "Zona de xisto com economia assente na pastorícia e na exploração florestal. Os sistemas de água são frequentemente partilhados.",
        "lat": "41.0000",
        "lon": "-7.2667"
    },
    {
        "name": "Sanfins do Douro",
        "slug": "sanfins-do-douro",
        "zone": "Z3",
        "price": "110€",
        "title": "Terra do Vinho do Porto e da Oliveira",
        "description": "Freguesia vinhateira do Douro Superior. As quintas produzem vinho do Porto e azeite de calidad superior.",
        "details": "Zona de grande tradição vinícola. A produção de vinho exige sistemas de água de alta qualidade para adegas e lagares.",
        "lat": "41.2667",
        "lon": "-7.5500"
    },
    {
        "name": "Sendim",
        "slug": "sendim",
        "zone": "Z3",
        "price": "110€",
        "title": "Terra da Fronteira e do Fumeiro",
        "description": "Povoação transmontana na fronteira com Espanha. Conhecida pela produção de fumeiro e pelos embutidos de porco preto.",
        "details": "Zona de transição com forte tradição agrícola e pecuária. A proximidade com Espanha dinamiza o comércio local.",
        "lat": "41.4500",
        "lon": "-6.5667"
    },
    {
        "name": "Santo Estêvão",
        "slug": "santo-estevao",
        "zone": "Z3",
        "price": "110€",
        "title": "Terra da Oliveira e da Serra",
        "description": "Freguesia do conselho de Valpaços com tradição na olivicultura. A Serra de Bornes oferece trilhos pedestres.",
        "details": "Zona agrícola com sistemas de irrigação tradicionais. A economia assenta na produção de azeite e cereais.",
        "lat": "41.7167",
        "lon": "-7.3167"
    },
    {
        "name": "Favaios",
        "slug": "favaios",
        "zone": "Z3",
        "price": "110€",
        "title": "Terra do Moscatel e da Oliveira",
        "description": "Freguesia vinhateira conhecida pelo Vinho do Porto Moscatel de Favaios. A Rota do Moscatel atrae visitantes.",
        "details": "Zona de grande tradição vinícola e olivícola. As quintas produzem vinho e azeite de calidad superior.",
        "lat": "41.2667",
        "lon": "-7.4667"
    },
    {
        "name": "Mouçós",
        "slug": "moucos",
        "zone": "Z4",
        "price": "120€",
        "title": "Terra do Douro Vinhateiro",
        "description": "Freguesia do Douro Superior com tradição na produção de vinho do Porto. As magníficas quintas transmontanas.",
        "details": "Zona de vinhateiros e olivicultores. Os sistemas de água para adegas são essenciais nesta região.",
        "lat": "41.2833",
        "lon": "-7.6167"
    },
    {
        "name": "Cumieira",
        "slug": "cumieira",
        "zone": "Z4",
        "price": "120€",
        "title": "Terra do Douro e da Oliveira",
        "description": "Freguesia do Douro com tradição na produção de vinho e azeite. Paisagens de grande beleza sobre o vale do Douro.",
        "details": "Zona de transição entre Trás-os-Montes e o Douro. A agricultura e o turismo rural são pilares da economia.",
        "lat": "41.2333",
        "lon": "-7.6167"
    },
    {
        "name": "Pedras Salgadas",
        "slug": "pedras-salgadas",
        "zone": "Z4",
        "price": "120€",
        "title": "Terra das Águas Termais",
        "description": "Conhecida pelas águas termais medicinais desde o tempo dos Romanos. Estância termal tradicional no Norte de Portugal.",
        "details": "Zona de turismo termal com tradição na exploração de águas mineromedicinais. Os sistemas de água para termas são especializados.",
        "lat": "41.7000",
        "lon": "-7.5500"
    },
    {
        "name": "Trevões",
        "slug": "trevoes",
        "zone": "Z4",
        "price": "120€",
        "title": "Terra da Oliveira e do Vinho",
        "description": "Freguesia do Douro com tradição na produção de azeite e vinho. As paisagens são marcadas pelos olivais e vinhas.",
        "details": "Zona agrícola com economia assente na olivicultura e na produção de vinho. Os sistemas de água para irrigação são essenciais.",
        "lat": "41.3500",
        "lon": "-7.4167"
    },
    {
        "name": "São Martinho de Anta",
        "slug": "sao-martinho-de-anta",
        "zone": "Z4",
        "price": "120€",
        "title": "Terra do Douro e do São Martinho",
        "description": "Freguesia vinhateira do Douro. Conhecida pelos seus solares e pela produção de vinho do Porto.",
        "details": "Zona de grande tradição vinícola. A produção de vinho exige sistemas de água de qualidade para adegas.",
        "lat": "41.3333",
        "lon": "-7.5500"
    },
    {
        "name": "Valdigem",
        "slug": "valdigem",
        "zone": "Z5",
        "price": "130€",
        "title": "Terra do Vinho do Porto e do Douro",
        "description": "Freguesia vinhateira do Douro Superior. As quintas produzem alguns dos melhores vinhos do mundo.",
        "details": "Zona de grande tradição vinícola e olivícola. A produção de vinho exige infraestrutura de água de alta qualidade.",
        "lat": "41.1833",
        "lon": "-7.7833"
    },
    {
        "name": "Britiande",
        "slug": "britiande",
        "zone": "Z5",
        "price": "130€",
        "title": "Terra da Serra de Bornes e da Oliveira",
        "description": "Freguesia do conselho de Alfândega da Fé com tradição na olivicultura. A Serra de Bornes oferece trilhos pedestres.",
        "details": "Zona agrícola com economia assente na produção de azeite e cereais. Os sistemas de água para irrigação são fundamentais.",
        "lat": "41.0333",
        "lon": "-7.4833"
    },
    {
        "name": "Lalim",
        "slug": "lalim",
        "zone": "Z5",
        "price": "130€",
        "title": "Terra da Serra e da Oliveira",
        "description": "Freguesia da Serra de Leomil com tradição na produção de azeite. As paisagens são marcadas pelos olivais.",
        "details": "Zona de montanha com economia assente na olivicultura e na pastorícia. Os sistemas de água são frequentemente partilhados.",
        "lat": "40.9333",
        "lon": "-7.5667"
    },
    {
        "name": "Vila Franca das Naves",
        "slug": "vila-franca-das-navas",
        "zone": "Z5",
        "price": "130€",
        "title": "Terra da Serra e do Azeite",
        "description": "Freguesia do conselho de Trancoso com tradição na olivicultura. A Serra da Estrela influencia o clima local.",
        "details": "Zona agrícola com economia assente na produção de azeite e cereais. Os sistemas de água para irrigação são essenciais.",
        "lat": "40.9667",
        "lon": "-7.2500"
    },
    {
        "name": "Ervedosa do Douro",
        "slug": "ervedosa-do-douro",
        "zone": "Z5",
        "price": "130€",
        "title": "Terra do Douro Superior e do Vinho",
        "description": "Freguesia vinhateira do Douro Superior. As quintas produzem vinho do Porto e tintos de gran complejidad.",
        "details": "Zona de grande tradição vinícola. A produção de vinho exige sistemas de água de alta qualidade.",
        "lat": "41.1333",
        "lon": "-7.4167"
    },
    {
        "name": "Cambres",
        "slug": "cambres",
        "zone": "Z5",
        "price": "130€",
        "title": "Terra do Douro e do Vinho do Porto",
        "description": "Freguesia do Douro com tradição secular na produção de vinho do Porto. As vertiginosas margens do Douro.",
        "details": "Zona de grande tradição vinícola. A produção de vinho exige sistemas de água de alta qualidade para adegas e lagares.",
        "lat": "41.1333",
        "lon": "-7.8000"
    },
]

def slug_to_filename(name):
    words = name.replace(' de ', '-').replace(' da ', '-').replace(' do ', '-').replace(' das ', '-').replace(' dos ', '-').replace(' ', '-').split('-')
    return ''.join(w.capitalize() for w in words if w)

def generate_page(city):
    name = city["name"]
    slug = city["slug"]
    zone = city["zone"]
    price = city["price"]
    lat = city["lat"]
    lon = city["lon"]
    title = city["title"]
    description = city["description"]
    details = city["details"]
    filename = slug_to_filename(name)
    
    return f'''// SEO optimizada para "Canalizador {name}"
// 100% unique content, zone {zone}, preço {price}
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import StructuredData from '@/components/StructuredData';
import {{ useSite }} from '@/contexts/SiteContext';
import FAQSection from '@/components/FAQSection';
import {{ businessInfo, getCityAddress }} from '@/shared/napConfig';
import {{ useEffect }} from 'react';
import {{ getCidadesProximas }} from '@/data/cidadesProximas';

export default function {filename}() {{
  const {{ config }} = useSite();

  useEffect(() => {{
    document.title = "Canalizador {name} 💧 24h | 928 484 451";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {{
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }}
    metaDescription.setAttribute('content', 'Canalizador urgente em {name}. Desentupimentos e arranjos, orçamento sem compromisso. Ligue: 928 484 451');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {{
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }}
    canonical.setAttribute('href', 'https://canalizador-norte-reparos.pt/canalizador-{slug}');

    const cityAddress = getCityAddress('{slug}');
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-{slug}';
    schemaScript.text = JSON.stringify({{
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Canalizador Profissional — {name}",
      "address": {{
        "@type": "PostalAddress",
        "streetAddress": cityAddress.streetAddress,
        "addressLocality": cityAddress.addressLocality,
        "addressRegion": cityAddress.addressRegion,
        "addressCountry": cityAddress.addressCountry,
        "postalCode": cityAddress.postalCode
      }},
      "geo": {{ "@type": "GeoCoordinates", "latitude": "{lat}", "longitude": "{lon}" }},
      "telephone": businessInfo.phone,
      "openingHours": "Mo-Su 00:00-23:59"
    }});
    document.head.appendChild(schemaScript);

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-faq-schema', 'true');
    faqSchema.text = JSON.stringify({{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({{
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {{ "@type": "Answer", "text": faq.answer }}
      }}))
    }});
    document.head.appendChild(faqSchema);

    return () => {{
      document.head.removeChild(schemaScript);
      document.head.removeChild(faqSchema);
    }};
  }}, []);

  const cidadesProximas = getCidadesProximas('{slug}');

  const faqs = [
    {{ question: "Qual o preço de canalizador em {name}?", answer: "Desde {price} em {name}. Desentupimentos, arranjo de fugas, instalação sanitários. Orçamento sem compromisso." }},
    {{ question: "Fazem urgências em {name}?", answer: "Sim, atendimento 24 horas, 7 dias por semana em {name}. Ligue +351 928 484 451." }},
    {{ question: "Atendem propriedades rurais?", answer: "Sim, servimos todo o conselho incluindo propriedades rurais e aldeias isoladas." }},
    {{ question: "Têm câmara termográfica para deteção de fugas?", answer: "Sim, utilizamos câmara termográfica FLIR e geofone para localização precisa de fugas sem demolição." }},
    {{ question: "Fornecem factura com NIF?", answer: "Sim, todas as intervenções incluem factura com NIF para efeitos fiscais e de seguro." }},
  ];

  return (
    <>
      <SEOHeadEnhanced citySlug="{slug}" pageType="city" />
      <StructuredData />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Breadcrumbs items={{[
                {{ label: 'Canalizador', href: '/' }},
                {{ label: 'Trás-os-Montes', href: '/tras-os-montes' }},
                {{ label: '{name}', href: '/canalizador-{slug}' }}
              ]}} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Canalizador Profissional em <span className="text-orange-400">{name}</span>
              </h1>
              <p className="text-xl mb-8">
                Serviços de canalização certificados em {name} e arredores.
                Resolução rápida, preço justo, garantia de 12 meses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={{`tel:+351${{config.phone.replace(/\\s/g, "")}}`}}
                   className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">
                  📞 Canalizador {name}: {{config.phone}}
                </a>
                <a href={{`https://wa.me/${{config.whatsapp}}?text=Olá, preciso de um canalizador em {name}`}}
                   target="_blank" rel="noopener noreferrer"
                   className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {name} — {title}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 mb-4">
                {description}
              </p>
              <p className="text-gray-700">
                {details}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Serviços de Canalização em {name}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">🔧 Desentupimentos</h3>
                  <p className="text-gray-600">WC, lavatórios, esgotos, fossas sépticas. Equipamento Ridgid K-6200 para desentupimentos profundos.</p>
                  <p className="text-blue-600 font-bold mt-3">desde {price}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">💧 Arranjo de Fugas</h3>
                  <p className="text-gray-600">Deteção com geofone e câmara termográfica FLIR. Reparação sem demolição. Fatura com NIF para seguro.</p>
                  <p className="text-blue-600 font-bold mt-3">desde {price}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">🔥 Esquentadores</h3>
                  <p className="text-gray-600">Instalação e reparação de esquentadores a gás. Substituição de termostatos e termopares. Certificação profissional.</p>
                  <p className="text-blue-600 font-bold mt-3">desde {price}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">🆕 Canalização Nova</h3>
                  <p className="text-gray-600">Instalação completa de canalizações novas. Tubagem em PPR, conexões estanhadas, válvulas de corte. Garantia 12 meses.</p>
                  <p className="text-blue-600 font-bold mt-3">desde {price}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Porquê Escolher-nos em {name}</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">🏆 Serviço Certificado</h3>
                <p className="text-gray-600">Fatura com NIF, garantia escrita de 12 meses, preço combinado antes da intervenção.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">⚡ Rápido e Eficiente</h3>
                <p className="text-gray-600">Resposta rápida em {name}. Atendimento 24h para urgências.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">🔍 Equipamento Profissional</h3>
                <p className="text-gray-600">Ridgid K-6200, câmara termográfica FLIR, geofone para tubagens enterradas.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">🛡️ Garantia 12 Meses</h3>
                <p className="text-gray-600">Todas as intervenções têm garantia escrita de 12 meses, peças e mão de obra.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Canalizador em <span className="text-orange-300">{name}</span></h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Intervenção rápida, preço justo, garantia de 12 meses.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href={{`tel:+351${{config.phone.replace(/\\s/g, "")}}`}}
                 className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">
                📞 {{config.phone}}
              </a>
              <a href={{`https://wa.me/${{config.whatsapp}}?text=Olá, preciso de um canalizador em {name}`}}
                 target="_blank" rel="noopener noreferrer"
                 className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
                💬 WhatsApp
              </a>
            </div>
            <div className="mt-12 p-4 bg-white/20 rounded-xl max-w-md mx-auto">
              <p className="text-lg">
                ⚡ <strong>Precisa de eletricista?</strong> Visite:{{' '}}
                <a href="https://eletricista-norte-reparos.pt" className="underline font-bold">
                  eletricista-norte-reparos.pt
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - {name}</h2>
            <FAQSection faqs={{faqs}} />
          </div>
        </section>

        <CidadesProximas currentCity="{name}" cidades={{cidadesProximas}} serviceType="canalizador" />
        <RelatedCities currentCity="{name}" currentCitySlug="canalizador-{slug}" />
      </main>
      <Footer />
    </>
  );
}}
'''

output_dir = '/Users/admin/projects/norte-reparos/client/src/pages/cidades'

for city in pages:
    content = generate_page(city)
    filename = slug_to_filename(city["name"]) + '.tsx'
    filepath = f'{output_dir}/{filename}'
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Generated: {filename}')

print(f'\nTotal: {len(pages)} pages generated')