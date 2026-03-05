import React from 'react';
// Composant RelatedCities - Affiche les villes connexes pour le maillage interne SEO
import { Link } from 'wouter';
// memo removed from 'react';

interface RelatedCitiesProps {
  currentCity: string;
  currentCitySlug: string;
}

function RelatedCities({ currentCity, currentCitySlug }: RelatedCitiesProps) {
  // Liste des villes avec leurs slugs et régions
  const allCities = [
    { name: 'Bragança', slug: 'canalizador-braganca', region: 'Norte' },
    { name: 'Chaves', slug: 'canalizador-chaves', region: 'Norte' },
    { name: 'Mirandela', slug: 'canalizador-mirandela', region: 'Norte' },
    { name: 'Vila Real', slug: 'canalizador-vila-real', region: 'Norte' },
    { name: 'Macedo de Cavaleiros', slug: 'canalizador-macedo-cavaleiros', region: 'Centro' },
    { name: 'Valpaços', slug: 'canalizador-valpacos', region: 'Norte' },
    { name: 'Mogadouro', slug: 'canalizador-mogadouro', region: 'Norte' },
    { name: 'Torre de Moncorvo', slug: 'canalizador-torre-moncorvo', region: 'Norte' },
    { name: 'Freixo de Espada à Cinta', slug: 'canalizador-freixo-espada-cinta', region: 'Norte' },
    { name: 'Miranda do Douro', slug: 'canalizador-miranda-douro', region: 'Norte' },
    { name: 'Vinhais', slug: 'canalizador-vinhais', region: 'Norte' },
    { name: 'Alfândega da Fé', slug: 'canalizador-alfandega-da-fe', region: 'Norte' },
    { name: 'Vila Flor', slug: 'canalizador-vila-flor', region: 'Norte' },
    { name: 'Carrazeda de Ansiães', slug: 'canalizador-carrazeda-de-ansiaes', region: 'Norte' },
    { name: 'Vimioso', slug: 'canalizador-vimioso', region: 'Norte' },
    { name: 'Montalegre', slug: 'canalizador-montalegre', region: 'Norte' },
    { name: 'Boticas', slug: 'canalizador-boticas', region: 'Norte' },
    { name: 'Murça', slug: 'canalizador-murca', region: 'Norte' },
    { name: 'Alijó', slug: 'canalizador-alijo', region: 'Douro' },
    { name: 'Sabrosa', slug: 'canalizador-sabrosa', region: 'Douro' },
    { name: 'Vila Pouca de Aguiar', slug: 'canalizador-vila-pouca-de-aguiar', region: 'Norte' },
    { name: 'Ribeira de Pena', slug: 'canalizador-ribeira-de-pena', region: 'Norte' },
    { name: 'Mondim de Basto', slug: 'canalizador-mondim-de-basto', region: 'Norte' },
    { name: 'Peso da Régua', slug: 'canalizador-peso-da-regua', region: 'Douro' },
    { name: 'Lamego', slug: 'canalizador-lamego', region: 'Douro' },
    { name: 'Moimenta da Beira', slug: 'canalizador-moimenta-da-beira', region: 'Douro' },
    { name: 'Vila Nova de Foz Côa', slug: 'canalizador-vila-nova-foz-coa', region: 'Norte' },
    { name: 'Sernancelhe', slug: 'canalizador-sernancelhe', region: 'Douro' },
    { name: 'Penedono', slug: 'canalizador-penedono', region: 'Douro' },
    { name: 'São João da Pesqueira', slug: 'canalizador-sao-joao-da-pesqueira', region: 'Douro' },
    { name: 'Tabuaço', slug: 'canalizador-tabuaco', region: 'Douro' },
    { name: 'Armamar', slug: 'canalizador-armamar', region: 'Douro' },
    { name: 'Santa Marta de Penaguião', slug: 'canalizador-santa-marta-de-penaguiao', region: 'Douro' },
    { name: 'Mesão Frio', slug: 'canalizador-mesao-frio', region: 'Douro' },
  ];

  // Filtrer pour exclure la ville actuelle
  const relatedCities = allCities
    .filter(city => city.slug !== currentCitySlug)
    .slice(0, 5); // Prendre 5 villes maximum

  if (relatedCities.length === 0) return null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Também servimos:
          </h2>
          <p className="text-gray-600">
            Canalizador profissional em outras cidades de Trás-os-Montes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {relatedCities.map((city) => (
            <Link 
              key={city.slug}
              href={`/${city.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-blue-500">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 text-xl font-bold">
                      {city.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">
                  {city.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  Canalizador em {city.name}
                </p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                    {city.region}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            <strong>SEO Tip:</strong> Links internos ajudam o Google a entender a estrutura do site e melhoram a autoridade das páginas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default React.memo(RelatedCities);
