'use client';
import { useState } from 'react';
import { Calendar, Clock, MapPin, Wrench, Zap, CheckCircle, X } from 'lucide-react';
import { useSite } from '@/contexts/SiteContext';
interface TimeSlot {
 time: string;
 available: boolean;
}
interface ReservationData {
 service: string;
 city: string;
 date: string;
 timeSlot: string;
 urgency: 'normal' | 'urgent';
 name: string;
 phone: string;
 email: string;
 notes: string;
}
export default function SistemaReservacao() {
 const { config } = useSite();
 const [step, setStep] = useState(1);
 const [isOpen, setIsOpen] = useState(false);
 const [reservation, setReservation] = useState<ReservationData>({
 service: '',
 city: '',
 date: '',
 timeSlot: '',
 urgency: 'normal',
 name: '',
 phone: '',
 email: '',
 notes: ''
 });
 const [submitted, setSubmitted] = useState(false);
 const isPlumber = config.type === 'plomberie';
 const services = isPlumber
 ? [
 'Desentupimento',
 'Fuga de água',
 'Esquentador',
 'Canalização nova',
 'Casa de banho',
 'Aquecimento central'
 ]
 : [
 'Quadro elétrico',
 'Certificação ITED',
 'Iluminação LED',
 'Avaria elétrica',
 'Tomadas/interruptores',
 'Inspeção elétrica'
 ];
 const cities = [
 'Bragança', 'Mirandela', 'Trás-os-Montes', 'Vila Real', 'Chaves',
 'Vinhais', 'Vimioso', 'Miranda do Douro', 'Mogadouro', 'Torre de Moncorvo',
 'Alfândega da Fé', 'Vila Flor', 'Carrazeda de Ansiães', 'Valpaços', 'Murça'
 ];
 // Generate next 14 days
 const generateDates = () => {
 const dates = [];
 const today = new Date();
 for (let i = 0; i < 14; i++) {
 const date = new Date(today);
 date.setDate(today.getDate() + i);
 dates.push({
 date: date.toISOString().split('T')[0],
 dayName: date.toLocaleDateString('pt-PT', { weekday: 'short' }),
 dayNumber: date.getDate(),
 month: date.toLocaleDateString('pt-PT', { month: 'short' })
 });
 }
 return dates;
 };
 const dates = generateDates();
 // Generate time slots
 const generateTimeSlots = (): TimeSlot[] => {
 const slots: TimeSlot[] = [];
 const hours = reservation.urgency === 'urgent'
 ? ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
 : ['09:00', '11:00', '14:00', '16:00', '18:00'];
 hours.forEach(time => {
 // Simulate some slots being unavailable
 const available = Math.random() > 0.3;
 slots.push({ time, available });
 });
 return slots;
 };
 const timeSlots = generateTimeSlots();
 const handleNext = () => {
 if (step === 1 && reservation.service && reservation.city) {
 setStep(2);
 } else if (step === 2 && reservation.date && reservation.timeSlot) {
 setStep(3);
 }
 };
 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 // Send to WhatsApp
 const message = `🗓️ NOVA RESERVA\n\n` +
 `📋 Serviço: ${reservation.service}\n` +
 `📍 Cidade: ${reservation.city}\n` +
 `📅 Data: ${new Date(reservation.date).toLocaleDateString('pt-PT', { weekday: 'long', day: 'numeric', month: 'long' })}\n` +
 `⏰ Hora: ${reservation.timeSlot}\n` +
 `🚨 Urgência: ${reservation.urgency === 'urgent' ? 'URGENTE' : 'Normal'}\n\n` +
 `👤 Nome: ${reservation.name}\n` +
 `📞 Telefone: ${reservation.phone}\n` +
 `📧 Email: ${reservation.email}\n` +
 `${reservation.notes ? `📝 Notas: ${reservation.notes}\n` : ''}\n` +
 `Confirmar reserva?`;
 window.open(
 `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`,
 '_blank'
 );
 setSubmitted(true);
 };
 const resetForm = () => {
 setReservation({
 service: '',
 city: '',
 date: '',
 timeSlot: '',
 urgency: 'normal',
 name: '',
 phone: '',
 email: '',
 notes: ''
 });
 setStep(1);
 setSubmitted(false);
 setIsOpen(false);
 };
 if (!isOpen) {
 return (
 <button
 onClick={() => setIsOpen(true)}
 className="fixed bottom-36 right-4 z-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition-all duration-200 transform hover:scale-110"
 aria-label="Abrir sistema de reservas"
 >
 <Calendar className="w-6 h-6" />
 </button>
 );
 }
 if (submitted) {
 return (
 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
 <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <CheckCircle className="w-10 h-10 text-green-600" />
 </div>
 <h3 className="text-2xl font-bold text-gray-900 mb-2">
 Reserva Enviada!
 </h3>
 <p className="text-gray-700 mb-6">
 Receberá confirmação por SMS e Email em 5-10 minutos.
 </p>
 <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
 <p className="text-sm text-blue-900 font-semibold">
 📅 {new Date(reservation.date).toLocaleDateString('pt-PT', { weekday: 'long', day: 'numeric', month: 'long' })}
 </p>
 <p className="text-sm text-blue-900 font-semibold">
 ⏰ {reservation.timeSlot}
 </p>
 <p className="text-sm text-blue-900">
 📍 {reservation.city}
 </p>
 </div>
 <button
 onClick={resetForm}
 className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors"
 >
 Nova Reserva
 </button>
 </div>
 </div>
 );
 }
 return (
 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
 <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8">
 {/* Header */}
 <div className="bg-primary text-white p-6 rounded-t-2xl flex items-center justify-between">
 <div className="flex items-center gap-3">
 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
 <Calendar className="w-6 h-6" />
 </div>
 <div>
 <h2 className="text-2xl font-bold">Reservar Intervenção</h2>
 <p className="text-sm text-white/80">Escolha data e hora</p>
 </div>
 </div>
 <button
 onClick={() => setIsOpen(false)}
 className="hover:bg-white/20 rounded-full p-2 transition-colors"
 aria-label="Fechar"
 >
 <X className="w-6 h-6" />
 </button>
 </div>
 {/* Progress Bar */}
 <div className="px-6 pt-6">
 <div className="flex items-center justify-between mb-2">
 <span className={`text-sm font-semibold ${step >= 1 ? 'text-primary' : 'text-gray-400'}`}>
 1. Serviço
 </span>
 <span className={`text-sm font-semibold ${step >= 2 ? 'text-primary' : 'text-gray-400'}`}>
 2. Data/Hora
 </span>
 <span className={`text-sm font-semibold ${step >= 3 ? 'text-primary' : 'text-gray-400'}`}>
 3. Contacto
 </span>
 </div>
 <div className="w-full bg-gray-200 rounded-full h-2">
 <div
 className="bg-primary h-2 rounded-full transition-all duration-300"
 style={{ width: `${(step / 3) * 100}%` }}
 />
 </div>
 </div>
 {/* Step 1: Service & City */}
 {step === 1 && (
 <div className="p-6 space-y-6">
 <div>
 <label className="block text-sm font-semibold text-gray-900 mb-3">
 Que serviço precisa?
 </label>
 <div className="grid grid-cols-2 gap-3">
 {services.map((service) => (
 <button
 key={service}
 onClick={() => setReservation({ ...reservation, service })}
 className={`p-4 rounded-lg border-2 transition-all ${
 reservation.service === service
 ? 'border-primary bg-primary/5 text-primary font-bold'
 : 'border-gray-200 hover:border-primary/50'
 }`}
 >
 <div className="flex items-center gap-2">
 {isPlumber ? <Wrench className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
 <span className="text-sm">{service}</span>
 </div>
 </button>
 ))}
 </div>
 </div>
 <div>
 <label className="block text-sm font-semibold text-gray-900 mb-3">
 Em que cidade?
 </label>
 <select
 value={reservation.city}
 onChange={(e) => setReservation({ ...reservation, city: e.target.value })}
 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
 >
 <option value="">Selecione a cidade</option>
 {cities.map((city) => (
 <option key={city} value={city}>{city}</option>
 ))}
 </select>
 </div>
 <div>
 <label className="block text-sm font-semibold text-gray-900 mb-3">
 Urgência
 </label>
 <div className="grid grid-cols-2 gap-3">
 <button
 onClick={() => setReservation({ ...reservation, urgency: 'normal' })}
 className={`p-4 rounded-lg border-2 transition-all ${
 reservation.urgency === 'normal'
 ? 'border-primary bg-primary/5 text-primary font-bold'
 : 'border-gray-200 hover:border-primary/50'
 }`}
 >
 <Clock className="w-5 h-5 mx-auto mb-1" />
 <span className="text-sm">Normal</span>
 <p className="text-xs text-gray-600 mt-1">Próximos dias</p>
 </button>
 <button
 onClick={() => setReservation({ ...reservation, urgency: 'urgent' })}
 className={`p-4 rounded-lg border-2 transition-all ${
 reservation.urgency === 'urgent'
 ? 'border-orange-500 bg-orange-50 text-orange-600 font-bold'
 : 'border-gray-200 hover:border-orange-300'
 }`}
 >
 <Clock className="w-5 h-5 mx-auto mb-1" />
 <span className="text-sm">Urgente</span>
 <p className="text-xs text-gray-600 mt-1">Hoje/Amanhã</p>
 </button>
 </div>
 </div>
 <button
 onClick={handleNext}
 disabled={!reservation.service || !reservation.city}
 className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
 >
 Continuar → Escolher Data
 </button>
 </div>
 )}
 {/* Step 2: Date & Time */}
 {step === 2 && (
 <div className="p-6 space-y-6">
 <div>
 <label className="block text-sm font-semibold text-gray-900 mb-3">
 Escolha a data
 </label>
 <div className="grid grid-cols-7 gap-2">
 {dates.map((d) => (
 <button
 key={d.date}
 onClick={() => setReservation({ ...reservation, date: d.date })}
 className={`p-3 rounded-lg border-2 transition-all ${
 reservation.date === d.date
 ? 'border-primary bg-primary text-white font-bold'
 : 'border-gray-200 hover:border-primary/50'
 }`}
 >
 <div className="text-xs">{d.dayName}</div>
 <div className="text-lg font-bold">{d.dayNumber}</div>
 <div className="text-xs">{d.month}</div>
 </button>
 ))}
 </div>
 </div>
 {reservation.date && (
 <div>
 <label className="block text-sm font-semibold text-gray-900 mb-3">
 Escolha a hora
 </label>
 <div className="grid grid-cols-3 gap-3">
 {timeSlots.map((slot) => (
 <button
 key={slot.time}
 onClick={() => slot.available && setReservation({ ...reservation, timeSlot: slot.time })}
 disabled={!slot.available}
 className={`p-3 rounded-lg border-2 transition-all ${
 reservation.timeSlot === slot.time
 ? 'border-primary bg-primary text-white font-bold'
 : slot.available
 ? 'border-gray-200 hover:border-primary/50'
 : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
 }`}
 >
 <Clock className="w-4 h-4 mx-auto mb-1" />
 <span className="text-sm">{slot.time}</span>
 {!slot.available && <p className="text-xs mt-1">Ocupado</p>}
 </button>
 ))}
 </div>
 </div>
 )}
 <div className="flex gap-3">
 <button
 onClick={() => setStep(1)}
 className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-lg transition-colors"
 >
 ← Voltar
 </button>
 <button
 onClick={handleNext}
 disabled={!reservation.date || !reservation.timeSlot}
 className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
 >
 Continuar → Contacto
 </button>
 </div>
 </div>
 )}
 {/* Step 3: Contact Info */}
 {step === 3 && (
 <form onSubmit={handleSubmit} className="p-6 space-y-4">
 <div>
 <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
 Nome completo *
 </label>
 <input
 id="name"
 type="text"
 required
 value={reservation.name}
 onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
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
 value={reservation.phone}
 onChange={(e) => setReservation({ ...reservation, phone: e.target.value })}
 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
 placeholder="+351 912 345 678"
 />
 </div>
 <div>
 <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
 Email *
 </label>
 <input
 id="email"
 type="email"
 required
 value={reservation.email}
 onChange={(e) => setReservation({ ...reservation, email: e.target.value })}
 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
 placeholder="joao@exemplo.pt"
 />
 </div>
 <div>
 <label htmlFor="notes" className="block text-sm font-semibold text-gray-900 mb-2">
 Notas adicionais (opcional)
 </label>
 <textarea
 id="notes"
 value={reservation.notes}
 onChange={(e) => setReservation({ ...reservation, notes: e.target.value })}
 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
 rows={3}
 placeholder="Detalhes sobre o problema..."
 />
 </div>
 <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
 <h4 className="font-bold text-blue-900 mb-2">Resumo da Reserva</h4>
 <div className="space-y-1 text-sm text-blue-900">
 <p>📋 {reservation.service}</p>
 <p>📍 {reservation.city}</p>
 <p>📅 {new Date(reservation.date).toLocaleDateString('pt-PT', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
 <p>⏰ {reservation.timeSlot}</p>
 <p>🚨 {reservation.urgency === 'urgent' ? 'URGENTE' : 'Normal'}</p>
 </div>
 </div>
 <div className="flex gap-3">
 <button
 type="button"
 onClick={() => setStep(2)}
 className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-lg transition-colors"
 >
 ← Voltar
 </button>
 <button
 type="submit"
 className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors"
 >
 ✓ Confirmar Reserva
 </button>
 </div>
 <p className="text-xs text-gray-600 text-center">
 Receberá confirmação por SMS e Email em 5-10 minutos
 </p>
 </form>
 )}
 </div>
 </div>
 );
}
