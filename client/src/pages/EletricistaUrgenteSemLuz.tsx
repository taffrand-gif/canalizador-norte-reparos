import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSite } from '@/contexts/SiteContext';
import { Phone, MessageCircle, CheckCircle, AlertTriangle, Shield, Star, Zap } from 'lucide-react';

export default function EletricistaUrgenteSemLuz() {
  const { config } = useSite();

  useEffect(() => {
    document.title = 'Sem Luz Casa Urgente? Eletricista 30min | 932 321 892';
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'Sem luz? Curto circuito? Eletricista certificado em 30min. Segurança garantida. Atendimento 24h. Ligue: 932 321 892');
    if (!meta.parentElement) document.head.appendChild(meta);
  }, []);

  const whatsappMessage = encodeURIComponent('Olá! Estou sem luz em casa. É urgente! Podem ajudar?');
  const whatsappUrl = `https://wa.me/351932321892?text=${whatsappMessage}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EmergencyService",
        "name": "Eletricista Urgente - Sem Luz",
        "provider": {
          "@type": "Electrician",
          "name": "Staff Seekers Eletricista",
          "telephone": "+351932321892"
        },
        "areaServed": {
          "@type": "City",
          "name": "Bragança"
        }
      }) }} />

      <Header />

      {/* Hero Section - Safety Focus */}
      <section className="relative bg-gradient-to-br from-red-700 to-red-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold text-sm mb-6 animate-pulse">
            ⚠️ PERIGO - ATENDIMENTO URGENTE
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Sem Luz em Casa?<br />
            <span className="text-yellow-300">Eletricista em 30 Minutos</span> ⚡
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-red-100">
            Curto circuito? Disjuntor dispara? Cheiro a queimado?<br />
            <strong className="text-yellow-300">PODE SER PERIGOSO!</strong>
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8 text-left bg-red-800/50 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold">Risco de Incêndio</p>
                <p className="text-sm text-red-100">Não ignore sinais</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold">Eletricista Certificado</p>
                <p className="text-sm text-red-100">Segurança garantida</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold">Chegamos em 30min</p>
                <p className="text-sm text-red-100">Urgências prioritárias</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+351932321892"
              className="bg-white hover:bg-gray-100 text-red-600 font-bold px-8 py-5 rounded-xl text-lg transition-all shadow-2xl hover:shadow-3xl flex items-center justify-center gap-2"
            >
              <Phone className="w-6 h-6" />
              Ligar AGORA: 932 321 892
            </a>
            <a
              href={whatsappUrl}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-5 rounded-xl text-lg transition-all shadow-2xl hover:shadow-3xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp: Técnico a Caminho
            </a>
          </div>

          <p className="mt-6 text-sm text-red-100">
            🔥 Segurança da sua família em primeiro lugar • Atendimento 24h/7d
          </p>
        </div>
      </section>

      {/* Danger Signs Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Sinais de Perigo - Ligue Imediatamente!
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Não ignore estes sinais. Podem causar incêndio.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Cheiro a Queimado</h3>
                  <p className="text-gray-600">Tomadas, quadro elétrico ou fios com cheiro a queimado. <strong className="text-red-600">PERIGO EXTREMO!</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-600">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Disjuntor Dispara Sempre</h3>
                  <p className="text-gray-600">Disjuntor que dispara constantemente indica curto circuito ou sobrecarga perigosa.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-600">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <AlertTriangle className="w-8 h-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Faíscas ou Fumo</h3>
                  <p className="text-gray-600">Faíscas em tomadas, interruptores ou quadro elétrico. Desligue tudo e ligue-nos!</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Sem Luz Total</h3>
                  <p className="text-gray-600">Casa toda sem luz (não é falta de rede). Pode ser problema grave no quadro.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-600">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Tomadas Quentes</h3>
                  <p className="text-gray-600">Tomadas ou interruptores quentes ao toque. Sinal de mau contacto perigoso.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-600">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <AlertTriangle className="w-8 h-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Luzes Piscam</h3>
                  <p className="text-gray-600">Luzes que piscam constantemente. Indica problema na instalação elétrica.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-600 p-8 rounded-2xl text-center">
            <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Em Caso de Emergência Elétrica
            </h3>
            <ol className="text-left max-w-2xl mx-auto space-y-3 mb-6 text-gray-800">
              <li className="flex gap-3">
                <span className="font-bold text-red-600">1.</span>
                <span>Desligue o disjuntor geral (se seguro)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-red-600">2.</span>
                <span>Não toque em fios ou equipamentos</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-red-600">3.</span>
                <span>Ligue-nos imediatamente: <strong>932 321 892</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-red-600">4.</span>
                <span>Se houver fumo/fogo, ligue 112 primeiro</span>
              </li>
            </ol>
            <a
              href="tel:+351932321892"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Ligar Urgência: 932 321 892
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Porque Escolher-nos em Urgências?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">Certificados</h3>
              <p className="text-gray-700">Todos os técnicos certificados pela DGEG. Segurança garantida.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">Rápidos</h3>
              <p className="text-gray-700">Chegamos em 30-60 minutos. Urgências são prioridade máxima.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">Transparentes</h3>
              <p className="text-gray-700">Preço dito antes de começar. Sem surpresas no final.</p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-4 text-gray-900">Equipamento Profissional</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Multímetros e testadores de circuito</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Detetores de cabos e fugas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Ferramentas isoladas (segurança)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Peças de substituição em stock</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-4 text-gray-900">Experiência Comprovada</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>10+ anos em Trás-os-Montes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>500+ urgências resolvidas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Avaliação 4.9/5 (Google)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Garantia 2 anos em reparações</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Preços Transparentes
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Orçamento gratuito antes de começar
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600">
              <h3 className="font-bold text-xl mb-4 text-gray-900">Diagnóstico Urgente</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">50-80€</div>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Deslocação incluída</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Identificação do problema</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Orçamento detalhado</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                Valor descontado se aprovar reparação
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
              <h3 className="font-bold text-xl mb-4 text-gray-900">Reparações Comuns</h3>
              <div className="text-4xl font-bold text-green-600 mb-4">100-300€</div>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Substituir disjuntores: 100-150€</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Reparar curto circuito: 120-250€</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Instalar tomadas: 40-80€/unidade</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                Preços incluem mão de obra e materiais básicos
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-xl text-center">
            <p className="text-gray-800">
              <strong className="text-blue-900">Garantia:</strong> Todos os trabalhos têm garantia de 2 anos.
              Se o problema voltar, reparamos gratuitamente.
            </p>
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
            <p className="text-xl text-gray-600">Baseado em avaliações Google</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Curto circuito às 23h. Chegaram em 35min, identificaram problema e resolveram. Profissionais!",
                author: "Ricardo M., Bragança"
              },
              {
                text: "Casa toda sem luz. Técnico certificado, explicou tudo, preço justo. Recomendo 100%!",
                author: "Sofia P., Mirandela"
              },
              {
                text: "Cheiro a queimado no quadro. Atenderam urgência, resolveram com segurança. Excelente serviço!",
                author: "Paulo S., Macedo de Cavaleiros"
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
                q: 'É seguro mexer no quadro elétrico?',
                a: 'NÃO! Nunca mexa no quadro elétrico sem conhecimentos. Risco de choque elétrico fatal. Ligue-nos imediatamente.'
              },
              {
                q: 'Quanto tempo demora a chegar?',
                a: '30-60 minutos em Bragança e arredores. Urgências elétricas têm prioridade máxima pela questão de segurança.'
              },
              {
                q: 'Atendem de noite e fins de semana?',
                a: 'Sim! Urgências elétricas são 24h/7d. Segurança não tem horário. Sem acréscimo de preço.'
              },
              {
                q: 'São certificados?',
                a: 'Sim, todos os técnicos são certificados pela DGEG. Emitimos certificado de conformidade quando necessário.'
              },
              {
                q: 'Quanto custa uma urgência elétrica?',
                a: 'Diagnóstico: 50-80€. Reparações: 100-300€ (maioria casos). Orçamento gratuito antes de começar.'
              },
              {
                q: 'Têm peças em stock?',
                a: 'Sim, levamos as peças mais comuns (disjuntores, tomadas, cabos). Resolvemos 80% casos na primeira visita.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-700 to-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Não Arrisque a Segurança da Sua Família!
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Problemas elétricos podem causar incêndios.<br />
            Ligue agora para um eletricista certificado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+351932321892"
              className="bg-white hover:bg-gray-100 text-red-600 font-bold px-8 py-5 rounded-xl text-lg transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              <Phone className="w-6 h-6" />
              Urgência: 932 321 892
            </a>
            <a
              href={whatsappUrl}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-5 rounded-xl text-lg transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Urgente
            </a>
          </div>

          <p className="text-sm text-red-100">
            ⚡ Eletricistas Certificados • Atendimento 24h/7d • Bragança e Trás-os-Montes
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
