'use client';

import { Award, Shield, Users, CheckCircle } from 'lucide-react';

interface AuthorityBadgesProps {
  certifications?: string[];
  yearsExperience?: number;
  partnersCount?: number;
}

export default function AuthorityBadges({
  certifications = ['CERTIEL', 'DGEG', 'ITED'],
  yearsExperience = 15,
  partnersCount = 12
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
            <p className="font-semibold text-gray-900">Experiência Comprovada</p>
            <p className="text-2xl font-black text-primary mt-1">
              {yearsExperience}+ anos
            </p>
            <p className="text-sm text-gray-600">
              Mais de 5.000 intervenções realizadas
            </p>
          </div>
        </div>

        {/* Partners */}
        <div className="flex items-start gap-3 md:col-span-2">
          <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-gray-900">Parceiros de Confiança</p>
            <p className="text-sm text-gray-600 mt-1">
              Trabalhamos com {partnersCount} marcas líderes: Roca, Grohe, Legrand, Schneider Electric, e mais
            </p>
          </div>
        </div>

        {/* Guarantees */}
        <div className="md:col-span-2 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="font-bold text-green-900">
              Garantia de 2 Anos em Todos os Serviços
            </p>
          </div>
          <p className="text-sm text-green-700 mt-1">
            + Seguro de Responsabilidade Civil até €500.000
          </p>
        </div>
      </div>
    </div>
  );
}
