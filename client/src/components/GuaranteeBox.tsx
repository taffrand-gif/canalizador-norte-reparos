import { memo } from 'react';
import { Shield, CheckCircle, Clock, Award, Phone } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface Guarantee {
  icon: 'shield' | 'check' | 'clock' | 'award';
  title: string;
  description: string;
}

interface GuaranteeBoxProps {
  title: string;
  subtitle: string;
  guarantees: Guarantee[];
  mainGuarantee: string;
  ctaText?: string;
  phone: string;
  showCTA?: boolean;
}

const iconMap = {
  shield: Shield,
  check: CheckCircle,
  clock: Clock,
  award: Award,
};

function GuaranteeBox({
  title,
  subtitle,
  guarantees,
  mainGuarantee,
  ctaText = "GARANTIR SERVIÇO AGORA",
  phone,
  showCTA = true
}: GuaranteeBoxProps) {
  const { trackPhoneClick } = useAnalytics();

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-bold text-sm mb-4">
            100% GARANTIDO
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Main Guarantee Banner */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-2xl text-center mb-12 shadow-xl">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-3xl md:text-4xl font-black mb-2">
            {mainGuarantee}
          </h3>
          <p className="text-lg opacity-90">
            Se não ficar 100% satisfeito, devolvemos o seu dinheiro. Sem perguntas.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {guarantees.map((guarantee, index) => {
            const Icon = iconMap[guarantee.icon];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-4 rounded-lg border-2 border-gray-200 text-center">
            <div className="text-3xl font-black text-green-600 mb-1">2 Anos</div>
            <div className="text-sm text-gray-700 font-semibold">Garantia Total</div>
          </div>
          <div className="bg-white p-4 rounded-lg border-2 border-gray-200 text-center">
            <div className="text-3xl font-black text-blue-600 mb-1">24/7</div>
            <div className="text-sm text-gray-700 font-semibold">Disponibilidade</div>
          </div>
          <div className="bg-white p-4 rounded-lg border-2 border-gray-200 text-center">
            <div className="text-3xl font-black text-orange-600 mb-1">15min</div>
            <div className="text-sm text-gray-700 font-semibold">Tempo Resposta</div>
          </div>
          <div className="bg-white p-4 rounded-lg border-2 border-gray-200 text-center">
            <div className="text-3xl font-black text-purple-600 mb-1">500+</div>
            <div className="text-sm text-gray-700 font-semibold">Clientes Felizes</div>
          </div>
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="text-center">
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              onClick={() => trackPhoneClick(phone)}
              className="inline-flex items-center justify-center text-xl md:text-2xl px-12 py-6 font-black tracking-wide text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:scale-95"
              aria-label={`Ligar agora para ${phone}`}
            >
              <Phone className="w-6 h-6 mr-3" />
              {ctaText}
            </a>
            <p className="text-sm text-gray-600 mt-4">
              Orçamento 100% gratuito • Sem compromisso • Resposta imediata
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(GuaranteeBox);
