import React from 'react';
import { useSite } from '@/contexts/SiteContext';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import OptimizedImage from './OptimizedImage';

const serviceImages = {
 'Desentupimentos': 'service-desentupimentos.jpg',
 'Arranjo de Fugas de Água': 'service-desentupimentos.jpg',
 'Instalação Sanitários': 'service-sala-banho.jpg',
 'Aquecimento Central': 'service-aquecimento.jpg',
 'Canalização Nova': 'service-sala-banho.jpg',
 'Urgências 24h': 'service-urgencia.jpg'};

const serviceDescriptions = {
 'Desentupimentos': 'Desentupimento rápido e eficiente de canalizações, WC, pias, ralos e esgotos. Utilizamos equipamento moderno e técnicas não invasivas.',
 'Arranjo de Fugas de Água': 'Deteção com câmara térmica FLIR, endoscópio HD e geofone. Arranjo sem partir paredes. Relatório técnico para seguro e condomínio incluído.',
 'Instalação Sanitários': 'Instalação completa de casas de banho, cozinhas e áreas de serviço. Torneiras, autoclismos, chuveiros, banheiras e sistemas de drenagem.',
 'Aquecimento Central': 'Instalação, manutenção e arranjo de sistemas de aquecimento central, caldeiras, esquentadores e radiadores.',
 'Canalização Nova': 'Instalação de nova canalização para construções, renovações ou ampliações. Materiais de qualidade e instalação profissional.',
 'Urgências 24h': 'Atendimento de urgências 24 horas por dia, 7 dias por semana, para fugas de água, entupimentos e outras emergências.'};

const serviceFeatures = {
 'Desentupimentos': [
 'Equipamento de alta pressão e câmera de inspeção',
 'Técnicas não invasivas (sem quebrar azulejos)',
 'Garantia 6 meses contra reentupimento'
 ],
 'Arranjo de Fugas de Água': [
 'Câmara térmica FLIR — vemos a fuga sem partir paredes',
 'Endoscópio HD Ridgid — inspeção visual dentro dos canos',
 'Geofone profissional — deteção acústica de fugas ocultas',
 'Arranjo mínima invasiva — sem quebrar azulejos',
 'Relatório técnico para seguro e condomínio incluído',
 ],
 'Instalação Sanitários': [
 'Materiais de marcas premium (Grohe, Sanindusa)',
 'Projeto hidráulico gratuito',
 'Instalação com certificação'
 ],
 'Aquecimento Central': [
 'Caldeiras de condensação (alta eficiência)',
 'Manutenção preventiva anual',
 'Certificação obrigatória incluída'
 ],
 'Canalização Nova': [
 'Materiais PPR e cobre com garantia 10 anos',
 'Cumprimento normativo português',
 'Testes de pressão e estanquicidade'
 ],
 'Urgências 24h': [
 'Resposta em menos de 45 minutos',
 'Equipe equipada para qualquer emergência',
 'Orçamento gratuito no local'
 ]
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
 {ACTIVE_CONFIG.services.map((service, index) => {
 const imageName = service in serviceImages ? serviceImages[service as keyof typeof serviceImages] : 'service-desentupimentos.jpg';
 const description = service in serviceDescriptions ? serviceDescriptions[service as keyof typeof serviceDescriptions] : 'Serviço profissional de qualidade.';

 return (
 <div
 key={index}
 className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-500"
 >
 {/* Image du service */}
 <div className="h-48 overflow-hidden">
 <OptimizedImage
 src={`/images-optimized/services/${imageName}`}
 alt={`Serviço de ${service.toLowerCase()} em Trás-os-Montes`}
 className="w-full h-full group-hover:scale-105 transition-transform duration-500"
 width={400}
 height={300}
 objectFit="cover"
 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
 />
 </div>

 {/* Contenu du service */}
 <div className="p-6">
 <div className="flex items-center gap-3 mb-4">
 <div className="text-2xl text-blue-600">💧</div>
 <h3 className="text-xl font-bold text-gray-900">{service}</h3>
 </div>

 <p className="text-gray-600 mb-6">
 {description}
 </p>

 <div className="space-y-3">
 {(serviceFeatures[service as keyof typeof serviceFeatures] || [
 'Equipamento moderno e especializado',
 'Técnicos certificados e experientes',
 'Garantia em todos os serviços'
 ]).map((feature, idx) => (
 <div key={idx} className="flex items-center gap-2 text-gray-700">
 <span className="text-green-500">✓</span>
 <span>{feature}</span>
 </div>
 ))}
 </div>

 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de um canalizador em Trás-os-Montes. Podem dar-me um orçamento?")}`}
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
 <span className="text-gray-700">Mais de 10 anos de experiência em canalização</span>
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
 ⚠️ Precisa de um eletricista? Recomendamos: <a href="https://eletricista-norte-reparos.pt" className="underline">eletricista-norte-reparos.pt</a>
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