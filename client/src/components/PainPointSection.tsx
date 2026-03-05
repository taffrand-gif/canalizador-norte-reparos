import { memo } from 'react';
import { AlertTriangle, TrendingDown, DollarSign, Clock } from 'lucide-react';

interface PainPoint {
  icon: 'alert' | 'trending' | 'money' | 'time';
  title: string;
  description: string;
  consequence: string;
}

interface PainPointSectionProps {
  title: string;
  subtitle: string;
  painPoints: PainPoint[];
  empathyStatement: string;
}

const iconMap = {
  alert: AlertTriangle,
  trending: TrendingDown,
  money: DollarSign,
  time: Clock,
};

function PainPointSection({
  title,
  subtitle,
  painPoints,
  empathyStatement
}: PainPointSectionProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-orange-50">
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

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {painPoints.map((point, index) => {
            const Icon = iconMap[point.icon];
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border-2 border-red-200 hover:border-red-400 transition-all hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                      <Icon className="w-7 h-7 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-700 mb-3 leading-relaxed">
                      {point.description}
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                      <p className="text-sm font-semibold text-red-800">
                        ⚠️ {point.consequence}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empathy Statement */}
        <div className="bg-white p-8 rounded-xl border-2 border-blue-200 text-center max-w-4xl mx-auto">
          <p className="text-2xl font-bold text-gray-900 leading-relaxed">
            {empathyStatement}
          </p>
        </div>
      </div>
    </section>
  );
}

export default memo(PainPointSection);
