// Section "Zona de Intervenção" - Villes couvertes dans un rayon de 100km autour de Macedo de Cavaleiros
import { useSite } from '@/contexts/SiteContext';
import { MapPin } from 'lucide-react';

const cidades = [
  { nome: 'Bragança', slug: 'braganca', distancia: '40 km', destaque: true },
  { nome: 'Mirandela', slug: 'mirandela', distancia: '25 km', destaque: true },
  { nome: 'Macedo de Cavaleiros', slug: 'macedo-de-cavaleiros', distancia: 'Sede', destaque: true },
  { nome: 'Vila Real', slug: 'vila-real', distancia: '90 km', destaque: true },
  { nome: 'Chaves', slug: 'chaves', distancia: '85 km', destaque: true },
  { nome: 'Lamego', slug: 'lamego', distancia: '95 km', destaque: true },
  { nome: 'Mogadouro', slug: 'mogadouro', distancia: '55 km', destaque: false },
  { nome: 'Vila Flor', slug: 'vila-flor', distancia: '30 km', destaque: false },
  { nome: 'Carrazeda de Ansiães', slug: 'carrazeda-de-ansiaes', distancia: '50 km', destaque: false },
  { nome: 'Torre de Moncorvo', slug: 'torre-de-moncorvo', distancia: '60 km', destaque: false },
  { nome: 'Alfândega da Fé', slug: 'alfandega-da-fe', distancia: '35 km', destaque: false },
  { nome: 'Vinhais', slug: 'vinhais', distancia: '65 km', destaque: false },
  { nome: 'Vimioso', slug: 'vimioso', distancia: '70 km', destaque: false },
  { nome: 'Miranda do Douro', slug: 'miranda-douro', distancia: '80 km', destaque: false },
  { nome: 'Freixo de Espada à Cinta', slug: 'freixo-espada-cinta', distancia: '75 km', destaque: false },
];

export default function ZonaIntervencao() {
  const { config } = useSite();

  return (
    <section id="zona-intervencao" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 font-bold px-6 py-3 rounded-full mb-6">
            <MapPin className="w-5 h-5" />
            <span>Raio de 100 km</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Zona de Intervenção
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Prestamos serviços de canalização em toda a região de Trás-os-Montes, 
            num raio de 100 km à volta de Macedo de Cavaleiros, distrito de Bragança.
          </p>
        </div>

        {/* Grille des villes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
          {cidades.map((cidade) => (
            <a
              key={cidade.slug}
              href={`/canalizador-${cidade.slug}`}
              className={`relative p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 no-underline ${
                cidade.destaque
                  ? 'bg-blue-600 text-white border-blue-700 shadow-md'
                  : 'bg-white text-gray-800 border-gray-200 hover:border-blue-400'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <MapPin className={`w-4 h-4 ${cidade.destaque ? 'text-white' : 'text-blue-500'}`} />
                <span className="font-bold text-sm md:text-base">{cidade.nome}</span>
              </div>
              <span className={`text-xs ${cidade.destaque ? 'text-white' : 'text-gray-500'}`}>
                {cidade.distancia}
              </span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block p-8 bg-white border-4 rounded-xl shadow-lg" style={{ borderColor: config.colors.primary }}>
            <p className="text-xl font-black mb-4">
              A sua localidade não está na lista?
            </p>
            <p className="text-gray-600 mb-6">
              Contacte-nos! Podemos verificar se a sua zona está dentro da nossa área de cobertura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${config.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white rounded-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: config.colors.primary }}
              >
                <span>📞</span> Ligue: {config.phone}
              </a>
              <a
                href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-green-700 hover:bg-green-700 rounded-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
