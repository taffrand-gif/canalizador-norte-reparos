import React from 'react';
import { useSite } from '@/contexts/SiteContext';

const serviceImages = {
  'Desentupimentos': 'service-desentupimentos.jpg',
  'Reparação de Fugas de Água': 'service-desentupimentos.jpg',
  'Instalação Sanitários': 'service-sala-banho.jpg',
  'Aquecimento Central': 'service-aquecimento.jpg',
  'Canalização Nova': 'service-sala-banho.jpg',
  'Urgências 24h': 'service-urgencia.jpg',
};

const serviceDescriptions = {
  'Desentupimentos': 'Desentupimento rápido e eficiente de canalizações, WC, pias, ralos e esgotos. Utilizamos equipamento moderno e técnicas não invasivas.',
  'Reparação de Fugas de Água': 'Localização e reparação de fugas de água em canalizações, torneiras, autoclismos e sistemas de aquecimento. Minimizamos danos na propriedade.',
  'Instalação Sanitários': 'Instalação completa de casas de banho, cozinhas e áreas de serviço. Torneiras, autoclismos, chuveiros, banheiras e sistemas de drenagem.',
  'Aquecimento Central': 'Instalação, manutenção e reparação de sistemas de aquecimento central, caldeiras, esquentadores e radiadores.',
  'Canalização Nova': 'Instalação de nova canalização para construções, renovações ou ampliações. Materiais de qualidade e instalação profissional.',
  'Urgências 24h': 'Atendimento de urgências 24 horas por dia, 7 dias por semana, para fugas de água, entupimentos e outras emergências.',
};

const OptimizedServices: React.FC = () => {
  const { config } = useSite();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços de <span className="text-blue-600">Canalização</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serviços completos de canalização para residências, comércios e indústrias em toda a região de Trás-os-Montes.
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.services.map((service, index) => {
            const imageName = serviceImages[service as keyof typeof serviceImages] || 'service-desentupimentos.png';
            const description = serviceDescriptions[service as keyof typeof serviceDescriptions] || 'Serviço profissional de qualidade.';

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-500"
              >
                {/* Image du service */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={`/images/services/${imageName.replace('.jpg', '.png')}`}
                    alt={`Serviço de ${(typeof service === 'string' ? service : service.label).toLowerCase()} em Trás-os-Montes`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>

                {/* Contenu du service */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl text-blue-600">💧</div>
                    <h3 className="text-xl font-bold text-gray-900">{service.label}</h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-500">✓</span>
                      <span>Equipamento moderno e especializado</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-500">✓</span>
                      <span>Técnicos certificados e experientes</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-500">✓</span>
                      <span>Garantia em todos os serviços</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${config.whatsappNumber}?text=Olá, gostaria de mais informações sobre o serviço de ${service.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg w-full transition-colors duration-300"
                  >
                    <span>Pedir Orçamento</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section supplémentaire */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border border-blue-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Porque escolher a <span className="text-blue-600">Norte Reparos</span>?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full">🏆</div>
                  <span className="text-gray-700">Mais de 20 anos de experiência em canalização</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full">🔧</div>
                  <span className="text-gray-700">Tecnologia de deteção de fugas sem quebra</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full">🚨</div>
                  <span className="text-gray-700">Serviço de urgência 24h todos os dias</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full">💰</div>
                  <span className="text-gray-700">Orçamentos transparentes e competitivos</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Áreas de Atuação</h4>
              <div className="grid grid-cols-2 gap-3">
                {['Vila Real', 'Bragança', 'Chaves', 'Mirandela', 'Macedo de Cavaleiros', 'Lamego', 'Régua', 'Montalegre', 'Valpaços', 'Mogadouro'].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-600">📍</span>
                    <span>{city}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                Servimos toda a região de Trás-os-Montes e arredores com resposta rápida.
              </p>
              <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-orange-800 font-semibold">
                  ⚠️ Precisa de um eletricista? Recomendamos: <a href="https://staff-seekers.com" className="underline">staff-seekers.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedServices;