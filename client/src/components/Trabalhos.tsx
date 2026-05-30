import React from 'react';
// Design: Professional Service Layout
// Portfolio section showcasing completed work
// - Grid layout with project cards
// - Before/after comparisons
// - Bold project titles
import { useSite } from '@/contexts/SiteContext';
import { CheckCircle } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';
// memo removed from 'react';
function Trabalhos() {
 const { config } = useSite();
 const { trackPhoneClick } = useAnalytics();
 // Placeholder projects - will be replaced with real images
 const projects = [
 {
 title: 'Remodelação Completa de Casa de Banho',
 location: 'Bragança',
 description: 'Substituição completa de canalizações, instalação de novos sanitários e acabamentos modernos.',
 image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop'},
 {
 title: 'Instalação de Sistema de Aquecimento Central',
 location: 'Mirandela',
 description: 'Instalação de caldeira de condensação e radiadores em moradia de 3 pisos.',
 image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop'},
 {
 title: 'Arranjo de Fuga em Condomínio',
 location: 'Macedo de Cavaleiros',
 description: 'Deteção e arranjo de fuga de água em canalização enterrada sem danificar estruturas.',
 image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop'},
 {
 title: 'Instalação de Esquentador a Gás',
 location: 'Miranda do Douro',
 description: 'Substituição de esquentador antigo por modelo eficiente com certificação.',
 image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600&fit=crop'},
 {
 title: 'Desentupimento de Rede de Esgotos',
 location: 'Vinhais',
 description: 'Limpeza profunda de rede de esgotos com equipamento especializado.',
 image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop'},
 {
 title: 'Modernização de Instalações Comerciais',
 location: 'Bragança',
 description: 'Renovação completa das instalações sanitárias de restaurante.',
 image: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?w=800&h=600&fit=crop'},
 ];
 return (
 <section id="trabalhos" className="py-20 bg-white">
 <div className="container">
 {/* Header */}
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-black mb-4">
 Trabalhos Realizados
 </h2>
 <p className="text-lg text-gray-600 max-w-3xl mx-auto">
 Veja alguns dos nossos projetos concluídos com sucesso. Cada trabalho é realizado com o máximo rigor e profissionalismo.
 </p>
 </div>
 {/* Projects grid */}
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {projects.map((project, index) => (
 <div
 key={index}
 className="bg-white border-4 overflow-hidden shadow-[6px_6px_0_0_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
 style={{ borderColor: config.colors.primary }}
 >
 {/* Image */}
 <div className="aspect-[4/3] overflow-hidden">
 <img
 src={project.image}
 alt={`${project.title} em ${project.location} - Trabalho realizado por canalizador profissional certificado`}
 loading="lazy"
 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
 width="400"
 height="300"
 />
 </div>
 {/* Content */}
 <div className="p-6">
 <div className="flex items-start gap-2 mb-3">
 <CheckCircle 
 className="w-6 h-6 flex-shrink-0 mt-1" 
 style={{ color: config.colors.primary }}
 />
 <h3 className="font-black text-xl leading-tight">
 {project.title}
 </h3>
 </div>
 
 <p className="text-sm font-bold mb-2" style={{ color: config.colors.primary }}>
 📍 {project.location}
 </p>
 
 <p className="text-gray-700 leading-relaxed">
 {project.description}
 </p>
 </div>
 </div>
 ))}
 </div>
 {/* Bottom CTA */}
 <div className="mt-16 text-center">
 <div className="inline-block p-8 border-4 bg-gray-50" style={{ borderColor: config.colors.primary }}>
 <p className="text-xl font-black mb-4">
 Quer um trabalho com esta qualidade?
 </p>
 <p className="text-gray-600 mb-6">
 Contacte-nos para um sem compromisso e sem compromisso.
 </p>
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 onClick={() => trackPhoneClick(config.phone)}
 className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
 style={{ backgroundColor: config.colors.primary }}
 aria-label={`Ligar agora para ${config.phone}`}
 >
 📞 LIGUE AGORA: {config.phone}
 </a>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(Trabalhos);
