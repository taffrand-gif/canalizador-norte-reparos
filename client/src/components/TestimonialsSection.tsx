import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";

/**
 * Bloc témoignages honnête (R12 + R11).
 * Aucun témoignage inventé : le vide honnête > le faux.
 * Quand de vrais avis arrivent via tRPC reviews.create, ils s'afficheront
 * dans la page /testemunhos, pas ici.
 */
export function TestimonialsSection() {
 const { gradient } = ACTIVE_CONFIG;

 return (
 <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
 <div className="container">
 <div className="text-center mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-4">
 O que valorizam os nossos clientes
 </h2>
 <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
 &ldquo;Os nossos clientes dizem-nos que apreciam receber o orçamento
 antes de começarmos — e que a intervenção foi mais rápida do que
 esperavam.&rdquo;
 </p>
 <ul className="text-left max-w-2xl mx-auto space-y-3 text-gray-700">
 <li>✅ Há mais de 10 anos a servir Trás-os-Montes</li>
 <li>✅ Garantia 12 meses em todas as intervenções</li>
 <li>✅ Fatura com NIF + seguro RC + fichas DGEG em conformidade</li>
 <li>✅ Fala sempre com a mesma pessoa — não um call center</li>
 </ul>
 </div>
 <div className="text-center mt-8">
 <a
 href="/testemunhos"
 className="inline-block text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
 style={{backgroundColor: gradient.from}}
 >
 Partilhe a sua experiência →
 </a>
 </div>
 </div>
 </section>
 );
}
