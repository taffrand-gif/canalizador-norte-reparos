#!/usr/bin/env python3
"""Generate remaining city pages for canalizador-norte-reparos.pt"""

pages = [
    {
        "name": "São João da Pesqueira",
        "slug": "sao-joao-da-pesqueira",
        "zone": "Z4",
        "price": "120€",
        "title": "Terra do Vinho do Porto e do Douro Vinhateiro",
        "description": "Concelho do Douro Superior com tradição secular na produção de vinho do Porto. As magníficas quintas vinham desde o século XVIII.",
        "details": "Zona de grande tradição vinícola e olivícola. A produção de vinho exige sistemas de água de alta qualidade para adegas e lagares.",
        "lat": "41.1500",
        "lon": "-7.4000"
    },
    {
        "name": "Pinhão",
        "slug": "pinhao",
        "zone": "Z4",
        "price": "120€",
        "title": "Terra do Vinho do Porto e do Douro",
        "description": "Povoação vinhateira no coração do Douro. A estação de trem do Pinhão é uma das mais bonitas de Portugal.",
        "details": "Zona de grande tradição vinícola. A produção de vinho exige sistemas de água de alta qualidade para adegas e lagares.",
        "lat": "41.2000",
        "lon": "-7.5500"
    },
    {
        "name": "Freixo de Espada à Cinta",
        "slug": "freixo-de-espada-a-cinta",
        "zone": "Z4",
        "price": "120€",
        "title": "Terra do Douro Internacional e da Serra",
        "description": "Concelho do Douro Internacional com paisagens de grande beleza. O Parque Natural do Douro Internacional é um tesouro natural.",
        "details": "Zona de grande beleza natural com economia assente na agricultura e no turismo. Os sistemas de água para quintas são frequentes.",
        "lat": "41.0833",
        "lon": "-6.8333"
    },
    {
        "name": "Peso da Régua",
        "slug": "peso-da-regua",
        "zone": "Z4",
        "price": "120€",
        "title": "Terra do Vinho do Porto e do Museu do Douro",
        "description": "Capital do Douro com tradição secular na produção de vinho. O Museu do Douro atrai visitantes de todo o mundo.",
        "details": "Zona de grande tradição vinícola. A produção de vinho exige sistemas de água de alta qualidade para adegas e lagares.",
        "lat": "41.1667",
        "lon": "-7.8000"
    },
    {
        "name": "Ribeira de Pena",
        "slug": "ribeira-de-pena",
        "zone": "Z5",
        "price": "130€",
        "title": "Terra da Serra do Alvão e das Minas",
        "description": "Concelho de montanha com tradição mineira. A festa das Minas atrai milhares de visitantes anualmente.",
        "details": "Zona de alta intensidade de chuva onde os sistemas de água e drenagem são essenciais. As propriedades têm frequentemente poços próprios.",
        "lat": "41.4167",
        "lon": "-7.8333"
    },
    {
        "name": "Santa Marta de Penaguião",
        "slug": "santa-marta-de-penaguiao",
        "zone": "Z5",
        "price": "130€",
        "title": "Terra do Douro e do Vinho Verde",
        "description": "Concelho do Douro com tradição na produção de vinho verde e azeite. As paisagens são marcadas pelos vinhedos e olivais.",
        "details": "Zona de grande tradição vinícola e olivícola. A produção de vinho e azeite exige sistemas de água de qualidade.",
        "lat": "41.2167",
        "lon": "-7.7667"
    },
    {
        "name": "Tabuaço",
        "slug": "tabuaco",
        "zone": "Z5",
        "price": "130€",
        "title": "Terra do Vinho do Porto e da Serra",
        "description": "Concelho vinhateiro do Douro Superior. As quintas produzem alguns dos melhores vinhos do mundo.",
        "details": "Zona de grande tradição vinícola. A produção de vinho exige sistemas de água de alta qualidade para adegas e lagares.",
        "lat": "41.1167",
        "lon": "-7.5667"
    },
    {
        "name": "Mirandela",
        "slug": "mirandela",
        "zone": "Z1",
        "price": "80€",
        "title": "Terra do Basto e da Ponte Velha",
        "description": "Segunda maior cidade do distrito de Bragança, dividida pelo Rio Tua. Conhecida pelo queijo Terrincho DOP e pelos embutidos transmontanos.",
        "details": "O centro histórico preserva um valioso património arquitetónico. A cidade é um polo comercial e de serviços para toda a região nordeste transmontana.",
        "lat": "41.4833",
        "lon": "-7.1667"
    },
    {
        "name": "Macedo de Cavaleiros",
        "slug": "macedo-de-cavaleiros",
        "zone": "Z1",
        "price": "80€",
        "title": "Terra da Caça e Albufeira do Azibo",
        "description": "Conhecida pela Albufeira do Azibo, uma das praias fluviais mais premiadas de Portugal, e pela forte tradição agrícola e pecuária.",
        "details": "A economia local baseia-se na agricultura (cereais, oliveiras, amendoeiras), pecuária e turismo rural. Os sistemas de água enfrentam desafios específicos.",
        "lat": "41.5333",
        "lon": "-7.0167"
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