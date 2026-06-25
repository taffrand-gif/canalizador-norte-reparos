'use client';
import { Star, Award, MapPin } from 'lucide-react';
interface Technician {
 name: string;
 role: string;
 experience: number;
 specialties: string[];
 rating: number;
 reviewsCount: number;
 city: string;
 imageUrl?: string;
}
interface LikingTechnicianProps {
 technician?: Technician;
}
export default function LikingTechnician({ technician }: LikingTechnicianProps) {
 const defaultTechnician: Technician = {
 name: 'Cliente',
 role: 'técnico com experiência',
 experience: 12,
 specialties: ['Fugas de água', 'Aquecimento central', 'Remodelações'],
 rating: 4.9,
 reviewsCount: 127,
 city: 'Bragança',
 imageUrl: undefined
 };
 const tech = technician || defaultTechnician;
 return (
 <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm">
 <div className="flex items-start gap-4">
 {/* Photo placeholder */}
 <div className="flex-shrink-0">
 {tech.imageUrl ? (
 <img
 src={tech.imageUrl}
 alt={tech.name}
 className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
 />
 ) : (
 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center border-4 border-primary/20">
 <span className="text-2xl font-bold text-white">
 {tech.name.split(' ').map(n => n[0]).join('')}
 </span>
 </div>
 )}
 </div>
 {/* Info */}
 <div className="flex-1">
 <div className="flex items-start justify-between mb-2">
 <div>
 <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
 <p className="text-sm text-gray-600 flex items-center gap-1">
 <Award className="w-4 h-4 text-primary" />
 {tech.role}
 </p>
 </div>
 {/* Rating */}
 <div className="text-right">
 <div className="flex items-center gap-1">
 <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
 <span className="font-bold text-gray-900">{tech.rating}</span>
 </div>
 <p className="text-xs text-gray-600">{tech.reviewsCount} avaliações</p>
 </div>
 </div>
 {/* Experience */}
 <div className="flex items-center gap-4 mb-3">
 <div className="flex items-center gap-1 text-sm text-gray-700">
 <Award className="w-4 h-4 text-primary" />
 <span className="font-semibold">{tech.experience} anos</span>
 <span className="text-gray-600">de experiência</span>
 </div>
 <div className="flex items-center gap-1 text-sm text-gray-700">
 <MapPin className="w-4 h-4 text-primary" />
 <span>{tech.city}</span>
 </div>
 </div>
 {/* Specialties */}
 <div>
 <p className="text-xs font-semibold text-gray-700 mb-2">Especialidades:</p>
 <div className="flex flex-wrap gap-2">
 {tech.specialties.map((specialty, index) => (
 <span
 key={index}
 className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
 >
 {specialty}
 </span>
 ))}
 </div>
 </div>
 {/* Quote */}
 <div className="mt-4 bg-gray-50 border-l-4 border-primary p-3 rounded-r-lg">
 <p className="text-sm text-gray-700 italic">
 "A minha missão é resolver o seu problema de forma rápida e definitiva.
 Cada cliente é único e merece um serviço personalizado."
 </p>
 </div>
 </div>
 </div>
 </div>
 );
}
