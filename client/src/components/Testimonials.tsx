import React from 'react';
// R11 ZÉRO INVENTION — témoignages fictifs purgés 2026-07-01 (voir M5-AUDIT-AVIS-REELS-2026-07-01.md).
// Le composant affiche un placeholder honnête tant que la première avaliação
// vérifiée par WhatsApp n'est pas intégrée via siteConfig.testimonials[].
import { useSite } from '@/contexts/SiteContext';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useLocalTestimonials } from '@/hooks/useLocationContent';

function Testimonials() {
  const { config } = useSite();
  const localTestimonials = useLocalTestimonials(config.testimonials || []);
  const hasTestimonials = localTestimonials.length > 0;
  const reviewSchemas = hasTestimonials
    ? localTestimonials.map((testimonial) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: testimonial.name },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: testimonial.rating,
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody: testimonial.text,
        datePublished: '2026-02-01',
      }))
    : [];

  const phoneRaw = (config.contact?.phoneRaw ?? '351928484451').replace(/[^0-9]/g, '');

  return (
    <>
      {/* Review Schema JSON-LD — désactivé tant que pas de témoignage vérifié (R11). */}
      {hasTestimonials && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchemas) }}
        />
      )}
      <section id="testemunhos" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              O Que Dizem os Nossos Clientes
            </h2>
            <p className="text-lg text-gray-600">
              Atendemos clientes em toda a região de Trás-os-Montes
            </p>
          </div>

          {/* Placeholder honnête quand aucun témoignage vérifié (R11). */}
          {!hasTestimonials && (
            <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ainda estamos a recolher os primeiros testemunhos verificados
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A nossa equipa prefere mostrar-lhe uma intervenção concreta em vez de citações
                inventadas. Após cada serviço, pedimos ao cliente que partilhe a sua experiência
                por WhatsApp — só publicamos quando temos confirmação real e autorizada.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Agradecemos a sua paciência enquanto construímos, com calma, uma página de
                testemunhos fiel ao trabalho que fazemos em Trás-os-Montes.
              </p>
              <Button
                asChild
                className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-semibold"
              >
                <a
                  href={`https://wa.me/${phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Avalie o nosso serviço no WhatsApp
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          )}

          {/* Grid rendu uniquement si témoignages présents. */}
          {hasTestimonials && (
            <>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {localTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white p-6 border-4 border-gray-200 shadow-[6px_6px_0_0_rgba(0,0,0,0.08)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.08)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-current"
                          style={{ color: config.colors.primary }}
                        />
                      ))}
                    </div>
                    {/* Quote */}
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 flex items-center justify-center font-black text-2xl text-white"
                        style={{
                          backgroundColor: config.colors.primary,
                          borderRadius: '0.25rem',
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">
                          📍 {testimonial.location} • {testimonial.service}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* CTA */}
              <div className="text-center">
                <Button
                  variant="outline"
                  className="font-bold border-2 shadow-[3px_3px_0_0_rgba(0,0,0,0.1)]"
                  style={{ borderColor: config.colors.primary }}
                >
                  Ver Todos os Testemunhos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default React.memo(Testimonials);
