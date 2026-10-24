import React from 'react';
import { useSite } from '@/contexts/SiteContext';
interface EquipamentoProfissionalProps {
 className?: string;
}
function EquipamentoProfissional({ className = '' }: EquipamentoProfissionalProps) {
 const { config } = useSite();
 const accentColor = '#0e7490';
 const equipment = [
 {
 name: 'Equipamento Ridgid',
 description: 'Apoio a trabalhos de canalização e desobstrução, conforme a avaliação no local.',
 icon: '🔧'
 },
 {
 name: 'Câmara endoscópica',
 description: 'Inspeção visual do interior de tubagens quando as condições o permitem.',
 icon: '📹'
 },
 {
 name: 'Câmara térmica',
 description: 'Apoio à avaliação de indícios de humidade e de diferenças de temperatura.',
 icon: '🌡️'
 },
 {
 name: 'Fluoresceína',
 description: 'Traçador utilizado para apoiar testes em situações adequadas.',
 icon: '💧'
 },
 {
 name: 'Detetor de humidade',
 description: 'Apoio à verificação de sinais de humidade durante o diagnóstico.',
 icon: '📏'
 }
 ];
 return (
 <section className={`py-16 bg-white ${className}`}>
 <div className="container mx-auto px-4 max-w-6xl">
 {/* Header */}
 <div className="text-center mb-12">
 <div className="inline-block bg-gradient-to-r from-cyan-50 to-teal-50 px-6 py-2 rounded-full mb-4">
 <span className="text-sm font-bold" style={{ color: accentColor }}>
 🔧 EQUIPAMENTO DE DIAGNÓSTICO
 </span>
 </div>
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 Equipamento verificado para trabalhos de canalização
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Selecionamos o equipamento adequado a cada situação, após avaliar o trabalho necessário.
 </p>
 </div>
 {/* Equipment Cards */}
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
 {equipment.map((item, index) => (
 <div
 key={index}
 className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-gray-100"
 >
 <div className="text-5xl mb-4 text-center">{item.icon}</div>
 <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
 {item.name}
 </h3>
 <p className="text-gray-600 text-center text-sm">
 {item.description}
 </p>
 </div>
 ))}
 </div>
 {/* Método de diagnóstico */}
 <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 mb-12">
 <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
 Como utilizamos o equipamento
 </h3>
 <div className="grid md:grid-cols-3 gap-6 text-center">
 <div className="rounded-xl bg-white/80 p-6">
 <h4 className="font-bold text-gray-900 mb-2">Inspeção antes de intervir</h4>
 <p className="text-sm text-gray-600">Sempre que adequado, recolhemos informação para orientar a intervenção.</p>
 </div>
 <div className="rounded-xl bg-white/80 p-6">
 <h4 className="font-bold text-gray-900 mb-2">Avaliação com contexto</h4>
 <p className="text-sm text-gray-600">Os indícios observados são analisados juntamente com as condições no local.</p>
 </div>
 <div className="rounded-xl bg-white/80 p-6">
 <h4 className="font-bold text-gray-900 mb-2">Estimativa à distância</h4>
 <p className="text-sm text-gray-600">Pode enviar uma descrição e fotografias para uma primeira estimativa.</p>
 </div>
 </div>
 </div>
 {/* Valores do serviço */}
 <div className="grid md:grid-cols-3 gap-6 mb-12">
 <div className="rounded-xl bg-gray-50 p-6 border-2 border-gray-200 text-center">
 <h4 className="text-xl font-bold text-gray-900 mb-2">Dias úteis</h4>
 <p className="text-2xl font-black mb-2" style={{ color: accentColor }}>70 €/h + deslocação de 30 €</p>
 <p className="text-sm text-gray-600">De segunda a sexta-feira, das 09h às 18h. Valores com IVA incluído.</p>
 </div>
 <div className="rounded-xl bg-gray-50 p-6 border-2 border-gray-200 text-center">
 <h4 className="text-xl font-bold text-gray-900 mb-2">Fora deste horário</h4>
 <p className="text-2xl font-black mb-2" style={{ color: accentColor }}>100 €/h + deslocação de 50 €</p>
 <p className="text-sm text-gray-600">Fora dos dias úteis ou do horário das 09h às 18h. Valores com IVA incluído.</p>
 </div>
 <div className="rounded-xl bg-gray-50 p-6 border-2 border-gray-200 text-center">
 <h4 className="text-xl font-bold text-gray-900 mb-2">Cobrança</h4>
 <p className="text-2xl font-black mb-2" style={{ color: accentColor }}>Hora iniciada</p>
 <p className="text-sm text-gray-600">Cada hora iniciada é cobrada. Valores com IVA incluído.</p>
 </div>
 </div>
 {/* Conclusão */}
 <div className="text-center bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200">
 <p className="text-2xl font-bold text-gray-900 mb-4">
 💡 Fale connosco sobre o seu caso
 </p>
 <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
 Descreva a situação e, se possível, envie fotografias para uma primeira estimativa.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-block px-8 py-4 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: accentColor }}
 >
 📞 {config.phone}
 </a>
 <a
 href="/transparencia-precos"
 className="inline-block px-8 py-4 rounded-xl font-bold text-gray-900 text-lg shadow-lg hover:shadow-xl transition-all bg-white border-2"
 style={{ borderColor: accentColor }}
 >
 Consultar preços
 </a>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(EquipamentoProfissional);
