import React from 'react';
// memo removed from 'react';
import { Phone, MapPin, Wrench, CheckCircle, Clock } from 'lucide-react';

interface TimelineStep {
  time: string;
  title: string;
  description: string;
  icon: 'phone' | 'map' | 'wrench' | 'check';
}

interface SolutionTimelineProps {
  title: string;
  subtitle: string;
  steps: TimelineStep[];
  totalTime: string;
  guaranteeText: string;
}

const iconMap = {
  phone: Phone,
  map: MapPin,
  wrench: Wrench,
  check: CheckCircle,
};

function SolutionTimeline({
  title,
  subtitle,
  steps,
  totalTime,
  guaranteeText
}: SolutionTimelineProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            {subtitle}
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold text-lg">
            <Clock className="w-5 h-5" />
            Tempo Total: {totalTime}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-green-400"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-inherit`}>
                    <div className="bg-white p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg">
                      <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-bold text-sm mb-3">
                        {step.time}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {index + 1}
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Guarantee Box */}
        <div className="mt-12 bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-xl text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <CheckCircle className="w-8 h-8" />
            <h3 className="text-2xl font-black">GARANTIA TOTAL</h3>
          </div>
          <p className="text-xl font-semibold">
            {guaranteeText}
          </p>
        </div>
      </div>
    </section>
  );
}

export default React.memo(SolutionTimeline);
