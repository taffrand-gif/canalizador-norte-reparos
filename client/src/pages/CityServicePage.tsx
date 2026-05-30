import { useRoute } from 'wouter';
import { getCityServiceData } from '@/../../shared/cityServiceMatrix';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
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
 useEffect(() => {
 document.title = `${service.name} em ${city.name} | ${ACTIVE_CONFIG.businessName}`;
 // Meta description
 let meta = document.querySelector('meta[name="description"]');
 if (!meta) {
 meta = document.createElement('meta');
 meta.setAttribute('name', 'description');
 document.head.appendChild(meta);
 }
 meta.setAttribute('content', `${service.name} em ${city.name}. Serviço profissional 24h. Sem compromisso. Ligue ${ACTIVE_CONFIG.phone}`);
 // Canonical URL
 const canonicalUrl = `https://${ACTIVE_CONFIG.domain}/${params.service}-${params.city}`;
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', canonicalUrl);
 }, [city.name, service.name, params.service, params.city]);
 const serviceSchema = {
 "@context": "https://schema.org",
 "@type": isPlumber ? "Plumber" : "Electrician",
 "name": `${service.name} em ${city.name}`,
 "provider": {
 "@type": isPlumber ? "Plumber" : "Electrician",
 "name": ACTIVE_CONFIG.businessName,
 "telephone": ACTIVE_CONFIG.phone
 },
 "areaServed": {
 "@type": "City",
 "name": city.name
 },
 "priceRange": "€€",
 "description": `${service.description} em ${city.name}`
 };
 const faqItems = generateFAQs(service, city, isPlumber);
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
 {service.description}. Serviço profissional 24h/7d em {city.name}.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-white hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 style={{ color: accentColor }}
 >
 📞 Ligar Agora → Técnico em 30min
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`}
 className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp → Resposta em 5min
 </a>
 </div>
 </div>
 </section>
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
 Preço base para {service.name.toLowerCase()} em {city.name}. Orçamento final após diagnóstico no local.
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
 💬 Orçamento Grátis em 2min → Sem Compromisso
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
 📞 Ligar → Atendemos em 30min
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`}
 className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp → Orçamento Grátis
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
function generateFAQs(service: any, city: any, isPlumber: boolean) {
 const baseFAQs = [
 {
 question: `Quanto custa ${service.name.toLowerCase()} em ${city.name}?`,
 answer: `O preço base para ${service.name.toLowerCase()} em ${city.name} é desde ${service.basePrice}€. O orçamento final depende da complexidade do trabalho e materiais necessários. Fazemos sem compromisso no local.`
 },
 {
 question: `Atendem em ${city.name} ao fim de semana?`,
 answer: `Sim, estamos disponíveis 24 horas por dia, 7 dias por semana, incluindo fins de semana e feriados em ${city.name}. Para urgências, o tempo de resposta é de 30-90 minutos.`
 },
 {
 question: `Quanto tempo demora a chegar a ${city.name}?`,
 answer: `O tempo de resposta para ${city.name} é normalmente entre 30 a 90 minutos, dependendo da localização exata e disponibilidade. Para urgências, priorizamos sempre a rapidez.`
 }
 ];
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
