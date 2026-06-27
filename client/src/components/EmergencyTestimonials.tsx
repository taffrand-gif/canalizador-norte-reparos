import React from 'react';
// memo removed from 'react';
import { Star, Clock, MapPin } from 'lucide-react';
interface Testimonial {
 name: string;
 city: string;
 problem: string;
 solution: string;
 timeframe: string;
 rating: number;
 photo?: string;
 verified?: boolean;
}
interface EmergencyTestimonialsProps {
 title: string;
 subtitle: string;
 testimonials: Testimonial[];
}
function EmergencyTestimonials({
 title,
 subtitle,
 testimonials
}: EmergencyTestimonialsProps) {
 return (
 <section className="py-16 px-4 bg-gray-50">
 <div className="max-w-6xl mx-auto">
 {/* Section Header */}
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
 {title}
 </h2>
 <p className="text-xl text-gray-700 max-w-3xl mx-auto">
 {subtitle}
 </p>
 </div>
 {/* Testimonials Grid */}
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {testimonials.map((testimonial, index) => (
 <div
 key={index}
 className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all hover:shadow-xl"
 >
 {/* Header */}
 <div className="flex items-start justify-between mb-4">
 <div className="flex items-center gap-3">
 {testimonial.photo ? (
 <img
 src={testimonial.photo}
 alt={testimonial.name}
 className="w-12 h-12 rounded-full object-cover"
 />
 ) : (
 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg">
 {testimonial.name.charAt(0)}
 </div>
 )}
 <div>
 <h3 className="font-bold text-gray-900">
 {testimonial.name}
 </h3>
 <div className="flex items-center gap-1 text-sm text-gray-600">
 <MapPin className="w-3 h-3" />
 {testimonial.city}
 </div>
 </div>
 </div>
 {testimonial.verified && (
 <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
 ✓ Verificado
 </div>
 )}
 </div>
 {/* Rating */}
 <div className="flex items-center gap-1 mb-3">
 {[...Array(5)].map((_, i) => (
 <Star
 key={i}
 className={`w-5 h-5 ${
 i < testimonial.rating
 ? 'text-yellow-400 fill-yellow-400'
 : 'text-gray-300'
 }`}
 />
 ))}
 </div>
 {/* Problem Badge */}
 <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold mb-3">
 {testimonial.problem}
 </div>
 {/* Solution */}
 <p className="text-gray-700 leading-relaxed mb-4">
 "{testimonial.solution}"
 </p>
 {/* Timeframe */}
 <div className="flex items-center gap-2 text-sm text-gray-600 bg-blue-50 px-3 py-2 rounded">
 <Clock className="w-4 h-4 text-blue-600" />
 <span className="font-semibold">
 Resolvido em {testimonial.timeframe}
 </span>
 </div>
 </div>
 ))}
 </div>
 {/* Trust Footer */}
 <div className="mt-12 text-center">
 <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full border-2 border-gray-200">
 <div className="flex items-center gap-1">
 <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
 <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
 <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
 <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
 <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
 </div>
 <div className="text-left">
 <div className="font-black text-2xl text-gray-900"></div>
 <div className="text-sm text-gray-600">feedback verificado de clientes</div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(EmergencyTestimonials);
