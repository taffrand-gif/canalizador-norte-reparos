'use client';
import { Award, Shield, Users, CheckCircle } from 'lucide-react';
interface AuthorityBadgesProps {
 certifications?: string[];
 yearsExperience?: number;
 partnersCount?: number;
}
export default function AuthorityBadges({
 certifications = ['ITED'],
}: AuthorityBadgesProps) {
 return (
 <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm">
 <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
 <Shield className="w-5 h-5 text-primary" />
 Certificações e Garantias
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {/* Certifications */}
 <div className="flex items-start gap-3">
 <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
 <div>
 <p className="font-semibold text-gray-900">Certificações Oficiais</p>
 <div className="flex flex-wrap gap-2 mt-2">
 {certifications.map((cert) => (
 <span
 key={cert}
 className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
 >
 <CheckCircle className="w-3 h-3" />
 {cert}
 </span>
 ))}
 </div>
 </div>
 </div>
 {/* Experience */}
 <div className="flex items-start gap-3">
 <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
 <div>
 <p className="font-semibold text-gray-900">Experiência Consolidada</p>
 <p className="text-sm text-gray-600 mt-1">
 Vasta experiência na região de Trás-os-Montes, com centenas de clientes servidos ao longo dos anos.
 </p>
 </div>
 </div>
 {/* Partners */}
 <div className="flex items-start gap-3 md:col-span-2">
 <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
 <div>
 <p className="font-semibold text-gray-900">Materiais Profissionais</p>
 <p className="text-sm text-gray-600 mt-1">
 Trabalhamos com materiais de marcas profissionais reconhecidas no setor.
 </p>
 </div>
 </div>
 {/* Guarantees */}
 <div className="md:col-span-2 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
 <div className="flex items-center gap-2">
 <CheckCircle className="w-5 h-5 text-green-600" />
 <p className="font-bold text-green-900">
 Garantia sobre os trabalhos realizados
 </p>
 </div>
 <p className="text-sm text-green-700 mt-1">
 Cobertura de responsabilidade civil profissional — detalhes no contrato.
 </p>
 </div>
 </div>
 </div>
 );
}