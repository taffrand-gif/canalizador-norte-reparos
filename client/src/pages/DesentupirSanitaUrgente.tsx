import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSite } from '@/contexts/SiteContext';
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Star, Zap } from 'lucide-react';

export default function DesentupirSanitaUrgente() {
  const { config } = useSite();

  useEffect(() => {
    document.title = 'Desentupir Sanita Urgente | 1 Hora Garantido | 65€ Fixo';
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'Sanita entupida? Resolvemos em 1 hora ou não paga! Preço fixo 65€. Atendimento 24h. Ligue: 928 484 451');
    if (!meta.parentElement) document.head.appendChild(meta);
  }, []);

  const whatsappMessage = encodeURIComponent('Olá! Preciso desentupir sanita urgente. Podem ajudar?');
  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Desentupimento de Sanita",
        "provider": {
          "@type": "Plumber",
          "name": config.businessName,
          "telephone": config.phone
        },
        "offers": {
          "@type": "Offer",
          "price": "65",
          "priceCurrency": "EUR"
        }
      }) }} />

      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 to-red-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-yellow-400 text-orange-900 px-4 py-2 rounded-full font-bold text-sm mb-6 animate-bounce">
            ⚡ RESOLVEMOS EM 1 HORA
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Sanita Entupida?<br />
            <span className="text-yellow-300">Resolvemos em 1 Hora - Garantido</span> 🚽
          </h1>

          <div className="bg-white text-orange-600 inline-block px-8 py-4 rounded-2xl mb-8 shadow-2xl">
            <p className="text-sm font-semibold mb-1">PREÇO FIXO</p>
            <p className="text-5xl font-bold">65€</p>
            <p className="text-sm text-gray-600 mt-1">(90% dos casos)</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Zap className="w-8 h-8 text-yellow-300 mb-2" />
              <p className="font-bold">Chegamos em 30-60min</p>
              <p className="text-sm text-orange-100">Bragança e arredores</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Shield className="w-8 h-8 text-yellow-300 mb-2" />
              <p className="font-bold">Garantia 6 meses</p>
              <p className="text-sm text-orange-100">Se voltar, reparamos grátis</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <CheckCircle className="w-8 h-8 text-yellow-300 mb-2" />
              <p className="font-bold">Sem taxas escondidas</p>
              <p className="text-sm text-orange-100">Preço final = Preço dito</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${config.phone}`}
              className="bg-white hover:bg-gray-100 text-orange-600 font-bold px-8 py-5 rounded-xl text-lg transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              <Phone className="w-6 h-6" />
              928 484 451 - Atendemos AGORA
            </a>
            <a
              href={whatsappUrl}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-5 rounded-xl text-lg transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp - Resposta em 2min
            </a>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Sanita Entupida é Urgente!
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-red-500">
              <p className="text-4xl mb-3">😳</p>
              <p className="font-bold text-lg mb-2 text-gray-900">Visitas a chegar?</p>
              <p className="text-gray-600">Resolvemos antes das visitas chegarem. Garantido.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-orange-500">
              <p className="text-4xl mb-3">🏠</p>
              <p className="font-bold text-lg mb-2 text-gray-900">Só tem 1 casa de banho?</p>
              <p className="text-gray-600">Sabemos que é urgente. Priorizamos o seu caso.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-yellow-500">
              <p className="text-4xl mb-3">⏰</p>
              <p className="font-bold text-lg mb-2 text-gray-900">Precisa resolver JÁ?</p>
              <p className="text-gray-600">Técnico a caminho em minutos. Atendemos 24/7.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-600 p-8 rounded-xl text-center">
            <p className="text-2xl font-bold text-gray-900 mb-4">
              Resolvemos em 1 Hora ou Não Paga!
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Temos tanta confiança no nosso trabalho que garantimos:<br />
              Se não resolvermos em 1 hora, o serviço é <strong>GRATUITO</strong>.
            </p>
            <a
              href={whatsappUrl}
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Pedir Ajuda Agora
            </a>
          </div>
        </div>
      </section>

      {/* Price Transparency */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Preço Transparente
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Sem surpresas. Sem taxas escondidas.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                MAIS COMUM
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-2">Desentupimento Simples</h3>
              <div className="text-5xl font-bold text-green-700 mb-4">65€</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Deslocação incluída</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Diagnóstico incluído</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Desentupimento completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Garantia 6 meses</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                Cobre 90% dos casos de entupimentos domésticos
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Casos Complexos</h3>
              <div className="text-5xl font-bold text-gray-700 mb-4">95-150€</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Entupimento profundo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Máquina alta pressão</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Câmara de inspeção</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Garantia 1 ano</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                Apenas 10% dos casos. Orçamento antes de começar.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-xl">
            <p className="text-center text-gray-800">
              <strong className="text-blue-900">Importante:</strong> O preço é sempre comunicado ANTES de começar o trabalho.
              Se não concordar, não pagamos nada pela deslocação. Sem compromisso.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Como Funciona
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '📱', title: 'Liga/WhatsApp', desc: 'Atendemos em 2 minutos' },
              { icon: '🚗', title: 'Técnico a caminho', desc: '30-60 minutos' },
              { icon: '🔧', title: 'Desentupimento', desc: '30-60 minutos' },
              { icon: '✅', title: 'Problema resolvido', desc: 'Garantia 6 meses' }
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-gray-900 mb-4">
              Tempo Total: 1-2 Horas
            </p>
            <p className="text-gray-600 mb-6">
              Do seu telefonema até ao problema resolvido
            </p>
            <a
              href={`tel:${config.phone}`}
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora: 928 484 451
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
              <span className="text-4xl font-bold text-gray-900">4.9/5</span>
            </div>
            <p className="text-xl text-gray-600">Baseado em 127 avaliações</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Sanita entupida às 22h. Chegaram em 45min e resolveram em 30min. Preço justo. Recomendo!",
                author: "Teresa L., Bragança"
              },
              {
                text: "Preço fixo 65€ como prometido. Rápidos, profissionais e simpáticos. Voltarei a chamar.",
                author: "Miguel R., Mirandela"
              },
              {
                text: "Domingo de manhã, visitas à tarde. Resolveram em 1 hora. Salvaram o meu dia!",
                author: "Ana P., Macedo de Cavaleiros"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-800 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-sm text-gray-600 font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Quanto custa desentupir uma sanita?',
                a: '65€ para desentupimentos simples (90% dos casos). Casos complexos: 95-150€. Preço sempre comunicado antes de começar.'
              },
              {
                q: 'Quanto tempo demora?',
                a: 'Desentupimento em si: 30-60 minutos. Tempo total (desde chamada até resolução): 1-2 horas.'
              },
              {
                q: 'Atendem aos fins de semana?',
                a: 'Sim! Atendemos 24h/7d incluindo fins de semana, feriados e noites. Sem acréscimo de preço.'
              },
              {
                q: 'E se o problema voltar?',
                a: 'Garantia de 6 meses. Se o entupimento voltar, reparamos gratuitamente. Sem perguntas.'
              },
              {
                q: 'Aceitam que formas de pagamento?',
                a: 'Dinheiro, MB WAY, transferência bancária e cartão de débito/crédito. Pagamento após serviço concluído.'
              },
              {
                q: 'Fazem orçamento gratuito?',
                a: 'Sim! Orçamento gratuito e sem compromisso. Se não concordar com o preço, não paga nada.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-300 transition-colors">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Não Espere Mais!
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Quanto mais espera, pior fica o entupimento.<br />
            Ligue agora e resolva em 1 hora.
          </p>

          <div className="bg-white text-orange-600 inline-block px-8 py-4 rounded-2xl mb-8 shadow-2xl">
            <p className="text-sm font-semibold mb-1">PREÇO FIXO</p>
            <p className="text-5xl font-bold">65€</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={`tel:${config.phone}`}
              className="bg-white hover:bg-gray-100 text-orange-600 font-bold px-8 py-5 rounded-xl text-lg transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              <Phone className="w-6 h-6" />
              928 484 451
            </a>
            <a
              href={whatsappUrl}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-5 rounded-xl text-lg transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </a>
          </div>

          <p className="text-sm text-orange-100">
            ⚡ Atendimento 24h/7d • Bragança e toda região de Trás-os-Montes
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
