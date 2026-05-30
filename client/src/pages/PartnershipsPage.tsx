import { useState } from 'react';
import { Handshake, Award, TrendingUp, Users, DollarSign, CheckCircle, Building2, MapPin } from 'lucide-react';
interface Partner {
 id: string;
 name: string;
 type: 'hotel' | 'restaurant' | 'real_estate' | 'construction' | 'property_management' | 'other';
 city: string;
 contactName: string;
 email: string;
 phone: string;
 website?: string;
 joinDate: Date;
 referralsCount: number;
 commissionsEarned: number;
 status: 'active' | 'pending' | 'inactive';
}
export default function PartnershipsPage() {
 const [showForm, setShowForm] = useState(false);
 const [formData, setFormData] = useState({
 businessName: '',
 businessType: '',
 city: '',
 contactName: '',
 email: '',
 phone: '',
 website: '',
 description: ''
 });
 const partnerTypes = [
 { value: 'hotel', label: 'Hotel / Turismo Rural', icon: '🏨' },
 { value: 'restaurant', label: 'Restaurante / Café', icon: '🍽️' },
 { value: 'real_estate', label: 'Imobiliária', icon: '🏠' },
 { value: 'construction', label: 'Construção Civil', icon: '🏗️' },
 { value: 'property_management', label: 'Gestão de Condomínios', icon: '🏢' },
 { value: 'other', label: 'Outro', icon: '💼' }
 ];
 const benefits = [
 {
 icon: <DollarSign className="w-8 h-8 text-green-600" />,
 title: '10% Comissão',
 description: 'Ganhe 10% sobre cada serviço que indicar. Pagamento mensal garantido.'
 },
 {
 icon: <Award className="w-8 h-8 text-purple-600" />,
 title: 'Badge Parceiro Oficial',
 description: 'Certificado digital e físico para exibir no seu estabelecimento.'
 },
 {
 icon: <Users className="w-8 h-8 text-blue-600" />,
 title: 'Atendimento Prioritário',
 description: 'Os seus clientes têm prioridade no agendamento de serviços.'
 },
 {
 icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
 title: 'Dashboard de Comissões',
 description: 'Acompanhe em tempo real as suas indicações e ganhos.'
 }
 ];
 const existingPartners: Partner[] = [
 {
 id: '1',
 name: 'Hotel Rural Bragança',
 type: 'hotel',
 city: 'Bragança',
 contactName: 'João Silva',
 email: 'joao@hotelrural.pt',
 phone: '+351 912 345 678',
 joinDate: new Date('2025-01-15'),
 referralsCount: 23,
 commissionsEarned: 1840,
 status: 'active'
 },
 {
 id: '2',
 name: 'Restaurante O Típico',
 type: 'restaurant',
 city: 'Mirandela',
 contactName: 'Maria Santos',
 email: 'maria@otipico.pt',
 phone: '+351 913 456 789',
 joinDate: new Date('2025-02-01'),
 referralsCount: 15,
 commissionsEarned: 980,
 status: 'active'
 },
 {
 id: '3',
 name: 'Imobiliária Nordeste',
 type: 'real_estate',
 city: 'Macedo de Cavaleiros',
 contactName: 'Carlos Pereira',
 email: 'carlos@imonordeste.pt',
 phone: '+351 914 567 890',
 joinDate: new Date('2025-01-20'),
 referralsCount: 34,
 commissionsEarned: 2720,
 status: 'active'
 }
 ];
 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 // In production, send to API
 // Data sent to backend endpoint (removed console.log for GDPR compliance)
 alert('Candidatura enviada com sucesso! Entraremos em contacto em 24-48 horas.');
 setShowForm(false);
 setFormData({
 businessName: '',
 businessType: '',
 city: '',
 contactName: '',
 email: '',
 phone: '',
 website: '',
 description: ''
 });
 };
 return (
 <div className="min-h-screen bg-gray-50">
 {/* Hero Section */}
 <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
 <div className="max-w-7xl mx-auto px-6">
 <div className="flex items-center gap-4 mb-6">
 <Handshake className="w-16 h-16" />
 <h1 className="text-5xl font-bold">
 Programa de Parcerias
 </h1>
 </div>
 <p className="text-2xl text-white/90 mb-8 max-w-3xl">
 Junte-se à rede de parceiros Norte Reparos e ganhe comissões por cada cliente que indicar.
 </p>
 <button
 onClick={() => setShowForm(true)}
 className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-lg transition-colors shadow-lg"
 >
 Tornar-se Parceiro →
 </button>
 </div>
 </div>
 <div className="max-w-7xl mx-auto px-6 py-12">
 {/* Benefits */}
 <div className="mb-16">
 <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
 Benefícios de Ser Parceiro
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {benefits.map((benefit, index) => (
 <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
 <div className="flex justify-center mb-4">
 {benefit.icon}
 </div>
 <h3 className="text-xl font-bold text-gray-900 mb-2">
 {benefit.title}
 </h3>
 <p className="text-gray-600">
 {benefit.description}
 </p>
 </div>
 ))}
 </div>
 </div>
 {/* How It Works */}
 <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
 <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
 Como Funciona
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
 <div className="text-center">
 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-3xl font-bold text-blue-600">1</span>
 </div>
 <h3 className="font-bold text-gray-900 mb-2">Candidatura</h3>
 <p className="text-sm text-gray-600">
 Preencha o formulário de candidatura online
 </p>
 </div>
 <div className="text-center">
 <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-3xl font-bold text-purple-600">2</span>
 </div>
 <h3 className="font-bold text-gray-900 mb-2">Aprovação</h3>
 <p className="text-sm text-gray-600">
 Análise em 24-48h e envio de materiais
 </p>
 </div>
 <div className="text-center">
 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-3xl font-bold text-green-600">3</span>
 </div>
 <h3 className="font-bold text-gray-900 mb-2">Indicações</h3>
 <p className="text-sm text-gray-600">
 Indique clientes usando o seu código único
 </p>
 </div>
 <div className="text-center">
 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-3xl font-bold text-orange-600">4</span>
 </div>
 <h3 className="font-bold text-gray-900 mb-2">Comissões</h3>
 <p className="text-sm text-gray-600">
 Receba 10% por transferência mensal
 </p>
 </div>
 </div>
 </div>
 {/* Ideal Partners */}
 <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-16">
 <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
 Parceiros Ideais
 </h2>
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
 {partnerTypes.map((type) => (
 <div key={type.value} className="bg-white rounded-lg p-4 text-center shadow-md">
 <div className="text-4xl mb-2">{type.icon}</div>
 <p className="text-sm font-semibold text-gray-900">{type.label}</p>
 </div>
 ))}
 </div>
 </div>
 {/* Existing Partners */}
 <div className="mb-16">
 <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
 Parceiros Atuais
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {existingPartners.map((partner) => (
 <div key={partner.id} className="bg-white rounded-lg shadow-lg p-6">
 <div className="flex items-start justify-between mb-4">
 <div>
 <h3 className="text-xl font-bold text-gray-900 mb-1">
 {partner.name}
 </h3>
 <div className="flex items-center gap-2 text-sm text-gray-600">
 <MapPin className="w-4 h-4" />
 {partner.city}
 </div>
 </div>
 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
 <CheckCircle className="w-6 h-6 text-green-600" />
 </div>
 </div>
 <div className="space-y-2 text-sm">
 <div className="flex justify-between">
 <span className="text-gray-600">Indicações:</span>
 <span className="font-bold text-gray-900">{partner.referralsCount}</span>
 </div>
 <div className="flex justify-between">
 <span className="text-gray-600">Comissões:</span>
 <span className="font-bold text-green-600">€{partner.commissionsEarned}</span>
 </div>
 <div className="flex justify-between">
 <span className="text-gray-600">Desde:</span>
 <span className="font-semibold text-gray-900">
 {partner.joinDate.toLocaleDateString('pt-PT', { month: 'short', year: 'numeric' })}
 </span>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 {/* CTA */}
 <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-r-lg p-8 text-center">
 <h2 className="text-3xl font-bold text-gray-900 mb-4">
 Pronto para Começar?
 </h2>
 <p className="text-xl text-gray-700 mb-6">
 Junte-se aos nossos parceiros e comece a ganhar comissões hoje mesmo.
 </p>
 <button
 onClick={() => setShowForm(true)}
 className="bg-primary hover:bg-primary-dark text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors shadow-lg"
 >
 Candidatar-me Agora →
 </button>
 </div>
 </div>
 {/* Application Form Modal */}
 {showForm && (
 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
 <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8">
 <div className="bg-primary text-white p-6 rounded-t-2xl">
 <h2 className="text-3xl font-bold">Candidatura a Parceiro</h2>
 <p className="text-white/80 mt-2">Preencha os dados do seu negócio</p>
 </div>
 <form onSubmit={handleSubmit} className="p-6 space-y-4">
 <div>
 <label htmlFor="businessName" className="block text-sm font-semibold text-gray-900 mb-2">
 Nome do Negócio *
 </label>
 <input
 id="businessName"
 type="text"
 required
 value={formData.businessName}
 onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
 placeholder="Hotel Rural Bragança"
 />
 </div>
 <div>
 <label htmlFor="businessType" className="block text-sm font-semibold text-gray-900 mb-2">
 Tipo de Negócio *
 </label>
 <select
 id="businessType"
 required
 value={formData.businessType}
 onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
 >
 <option value="">Selecione...</option>
 {partnerTypes.map((type) => (
 <option key={type.value} value={type.value}>
 {type.icon} {type.label}
 </option>
 ))}
 </select>
 </div>
 <div>
 <label htmlFor="city" className="block text-sm font-semibold text-gray-900 mb-2">
 Cidade *
 </label>
 <input
 id="city"
 type="text"
 required
 value={formData.city}
 onChange={(e) => setFormData({ ...formData, city: e.target.value })}
 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
 placeholder="Bragança"
 />
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div>
 <label htmlFor="contactName" className="block text-sm font-semibold text-gray-900 mb-2">
 Nome de Contacto *
 </label>
 <input
 id="contactName"
 type="text"
 required
 value={formData.contactName}
 onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
 placeholder="João Silva"
 />
 </div>
 <div>
 <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
 Telefone *
 </label>
 <input
 id="phone"
 type="tel"
 required
 value={formData.phone}
 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
 placeholder="+351 912 345 678"
 />
 </div>
 </div>
 <div>
 <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
 Email *
 </label>
 <input
 id="email"
 type="email"
 required
 value={formData.email}
 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
 placeholder="joao@hotel.pt"
 />
 </div>
 <div>
 <label htmlFor="website" className="block text-sm font-semibold text-gray-900 mb-2">
 Website (opcional)
 </label>
 <input
 id="website"
 type="url"
 value={formData.website}
 onChange={(e) => setFormData({ ...formData, website: e.target.value })}
 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
 placeholder="https://www.hotel.pt"
 />
 </div>
 <div>
 <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-2">
 Descrição do Negócio (opcional)
 </label>
 <textarea
 id="description"
 value={formData.description}
 onChange={(e) => setFormData({ ...formData, description: e.target.value })}
 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
 rows={4}
 placeholder="Conte-nos sobre o seu negócio..."
 />
 </div>
 <div className="flex gap-4 pt-4">
 <button
 type="button"
 onClick={() => setShowForm(false)}
 className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-lg transition-colors"
 >
 Cancelar
 </button>
 <button
 type="submit"
 className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors"
 >
 Enviar Candidatura
 </button>
 </div>
 </form>
 </div>
 </div>
 )}
 </div>
 );
}
