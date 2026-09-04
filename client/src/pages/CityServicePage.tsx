import { useRoute } from 'wouter';
import { getCityServiceData } from '@/../../shared/cityServiceMatrix';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { getLocalContext } from '@/../../shared/localContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useEffect } from 'react';
export default function CityServicePage() {
 const [, params] = useRoute('/:service-:city');
 if (!params) return null;
 const pageData = getCityServiceData(params.service, params.city);
 if (!pageData) {
 return <NotFoundContent />;
 }
 const { city, service } = pageData;
 const isPlumber = ACTIVE_CONFIG.type === 'plomberie';
 const accentColor = isPlumber ? '#0e7490' : '#FF6B35';
 // Bloc local unique (DIFFÉRENCIATION pertinence, audit GSC 11/07/2026)
 // Rendu seulement pour les 10 villes stratégiques money — dégradation gracieuse pour les autres
 const localContext = getLocalContext(city.slug);
 useEffect(() => {
 document.title = localContext
 ? `${service.name} em ${city.name} — ${localContext.freguesias.length} freguesias cobertas | ${ACTIVE_CONFIG.businessName}`
 : `${service.name} em ${city.name} | ${ACTIVE_CONFIG.businessName}`;
 // Meta description — intègre l'answer-first si dispo (levier featured snippet)
 let meta = document.querySelector('meta[name="description"]');
 if (!meta) {
 meta = document.createElement('meta');
 meta.setAttribute('name', 'description');
 document.head.appendChild(meta);
 }
 meta.setAttribute('content', localContext
 ? `${localContext.answerFirst} Ligue ${ACTIVE_CONFIG.phone}`
 : `${service.name} em ${city.name}. Serviço profissional 24h. Sem compromisso. Ligue ${ACTIVE_CONFIG.phone}`);
 // Canonical URL
 const canonicalUrl = `https://${ACTIVE_CONFIG.domain}/${params.service}-${params.city}`;
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', canonicalUrl);
 }, [city.name, city.slug, service.name, params.service, params.city, localContext]);
 const serviceSchema: any = {
 "@context": "https://schema.org",
 "@type": isPlumber ? "Plumber" : "Electrician",
 "name": `${service.name} em ${city.name}`,
 "provider": {
 "@type": isPlumber ? "Plumber" : "Electrician",
 "name": ACTIVE_CONFIG.businessName,
 "telephone": ACTIVE_CONFIG.phone
 },
 "areaServed": localContext
 ? { "@type": "City", "name": city.name, "containsPlace": localContext.freguesias.map(f => ({ "@type": "AdministrativeArea", "name": f })) }
 : { "@type": "City", "name": city.name },
 "priceRange": "€€",
 "description": `${service.description} em ${city.name}. Cobertura: ${localContext ? localContext.freguesias.length + ' freguesias em ' + city.name : city.name + ' e arredores'}`
 };
 const faqItems = generateFAQs(service, city, isPlumber, localContext);
 // Breadcrumbs
 const breadcrumbItems = [
 { label: 'Home', href: '/' },
 { label: city.name, href: `/${params.city}` },
 { label: service.name }
 ];
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqItems.map(item => ({
 "@type": "Question",
 "name": item.question,
 "acceptedAnswer": { "@type": "Answer", "text": item.answer }
 }))
 }) }} />
 <Header />
 <Breadcrumbs items={breadcrumbItems} />
 {/* Hero Section */}
 <section className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)` }}>
 <div className="max-w-4xl mx-auto text-center text-white">
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 {service.name} em {city.name}
 </h1>
 <p className="text-xl mb-8">
 {localContext
 ? localContext.heroSubtitle
 : `${service.description}. Serviço profissional 24h/7d em ${city.name}.`}
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-white hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 style={{ color: accentColor }}
 >
 📞 Ligar Agora → Técnico A confirmar
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`}
 className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp → A confirmar
 </a>
 </div>
 </div>
 </section>
 {/* Local Context — DIFFÉRENCIATION PERTINENCE (10 villes stratégiques money)
 * Bloc local unique: freguesias desservidas, eixo rodoviário, tipo de habitat/rede,
 * distância desde base Macedo. Aucun chute pour les 90+ autres pages (dégradation gracieuse). */}
 {localContext && (
 <section className="py-14 px-4 bg-white border-t-4" style={{ borderColor: accentColor }}>
 <div className="max-w-4xl mx-auto">
 <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
 {service.name} em {city.name} — cobertura local
 </h2>
 {/* Answer-first déclaratif (levier featured snippet Google) */}
 <p className="text-lg font-semibold text-gray-800 mb-6 leading-relaxed" data-answer-first="true">
 {localContext.answerFirst}
 </p>
 {/* Paragraphe de contexte — données vérifiables (R11 zero invenção) */}
 <p className="text-gray-700 leading-relaxed mb-6">
 {localContext.localParagraph}
 </p>
 {/* Freguesias desservies (lien interne vers la page freguesia + maillage local) */}
 <div className="bg-gray-50 rounded-lg p-5">
 <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">
 Freguesias cobertas em {city.name} ({localContext.freguesias.length}):
 </h3>
 <div className="flex flex-wrap gap-2">
 {localContext.freguesias.map((f) => (
 <span
 key={f}
 className="inline-block text-sm bg-white border border-gray-300 px-3 py-1 rounded-full text-gray-700"
 >
 📍 {f}
 </span>
 ))}
 </div>
 <p className="text-xs text-gray-500 mt-4">
 Deslocação desde Macedo de Cavaleiros (base operacional): <strong>{localContext.distanceFromBase}</strong>.
 </p>
 </div>
 </div>
 </section>
 )}
 {/* Pricing Section */}
 <section className="py-16 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
 Preços em {city.name}
 </h2>
 <div className="bg-gray-50 rounded-xl p-8 mb-8">
 <div className="flex justify-between items-center mb-4">
 <span className="text-lg font-semibold text-gray-700">{service.name}</span>
 <span className="text-3xl font-bold" style={{ color: accentColor }}>
 Desde {service.basePrice}€
 </span>
 </div>
 <p className="text-gray-600 mb-6">
 {localContext
 ? localContext.pricingHook
 : `Preço base para ${service.name.toLowerCase()} em ${city.name}. Orçamento final após diagnóstico no local.`}
 {' '}
 Oferecemos também serviços de{' '}
 <a href={`/desentupimentos-${params.city}`} className="text-blue-600 hover:underline">desentupimentos</a>,{' '}
 <a href={`/esquentador-${params.city}`} className="text-blue-600 hover:underline">esquentadores</a> e{' '}
 <a href={`/fugas-agua-${params.city}`} className="text-blue-600 hover:underline">fugas de água</a>.
 </p>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Olá! Preciso de ${service.name} em ${city.name}. Podem fazer orçamento?`)}`}
 className="block w-full text-center text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: '#25D366' }}
 >
 💬 estimativa sem custo A confirmar → Sem Compromisso
 </a>
 </div>
 </div>
 </section>
 {/* FAQ Section */}
 <section className="py-16 px-4 bg-gray-50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
 Perguntas Frequentes
 </h2>
 <div className="space-y-4">
 {faqItems.map((item, i) => (
 <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-2">{item.question}</h3>
 <p className="text-gray-600">{item.answer}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* CTA Section */}
 <section className="py-16 px-4 text-white" style={{ background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)` }}>
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">
 Precisa de {service.name} em {city.name}?
 </h2>
 <p className="text-xl mb-8">
 Contacte-nos agora. Sem compromisso e sem compromisso.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-white hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 style={{ color: accentColor }}
 >
 📞 Ligar → Atendemos A confirmar
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`}
 className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp → estimativa sem custo
 </a>
 </div>
 </div>
 </section>
 {/* Related Services */}
 <RelatedServices currentService={service.slug} city={city.name} />
 <Footer />
 </>
 );
}
function generateFAQs(service: any, city: any, isPlumber: boolean, localContext: any) {
 const baseFAQs = [
 {
 question: `Quanto custa ${service.name.toLowerCase()} em ${city.name}?`,
 answer: `O preço base para ${service.name.toLowerCase()} em ${city.name} é desde ${service.basePrice}€. O orçamento final depende da complexidade do trabalho e materiais necessários. Fazemos sem compromisso no local.`
 },
 {
 question: `Atendem em ${city.name} ao fim de semana?`,
 answer: `Sim, estamos disponíveis Atendimento 24h/7d, 7 dias por semana, incluindo fins de semana e feriados em ${city.name}. Para urgências, o tempo de resposta é de A confirmar.`
 },
 {
 question: `Quanto tempo demora a chegar a ${city.name}?`,
 answer: `O tempo de resposta para ${city.name} é normalmente entre 30 a A confirmar, dependendo da localização exata e disponibilidade. Para urgências, priorizamos sempre a rapidez.`
 }
 ];
 // FAQ answer-first unique par ville (10 stratégiques money) — levier featured snippet
 if (localContext) {
 baseFAQs.push({
 question: `Quais freguesias de ${city.name} são cobertas pelo serviço de ${service.name.toLowerCase()}?`,
 answer: localContext.answerFirst + ` Cobrimos ${localContext.freguesias.length} freguesias em ${city.name}: ${localContext.freguesias.slice(0, 6).join(', ')}${localContext.freguesias.length > 6 ? ` e outras` : ''}. Deslocação desde Macedo de Cavaleiros: ${localContext.distanceFromBase}.`
 });
 }
 return baseFAQs;
}
function NotFoundContent() {
 return (
 <div className="min-h-screen flex items-center justify-center">
 <div className="text-center">
 <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
 <a href="/" className="text-blue-600 hover:underline">Voltar à página inicial</a>
 </div>
 </div>
 );
}
