import React from 'react';
import { useSite } from '@/contexts/SiteContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

// Tarifs : _governance/20-BUSINESS-FACTS.json (pricing). Même contenu que client/public/transparence-prix.html (page servie).
const WA = 'https://wa.me/351928484451?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20servi%C3%A7os%20de%20canaliza%C3%A7%C3%A3o.';

const faq = [
 { q: 'Os preços incluem IVA?', a: 'Sim. Valores TTC, IVA incluído.' },
 { q: 'A deslocação para fazer o orçamento é cobrada?', a: 'Sim. Quando é necessária deslocação ao local, a deslocação é cobrada: 30 € em dias úteis, das 09h às 18h, e 50 € após as 18h, à noite, aos fins de semana e feriados. Com uma descrição detalhada e fotografias, podemos indicar uma estimativa à distância, a título indicativo.' },
 { q: 'Como é contado o tempo de trabalho?', a: 'À hora. Cada hora iniciada é devida.' },
 { q: 'O preço muda conforme a localidade?', a: 'Não. A tabela e o valor da deslocação são os mesmos para todas as localidades servidas.' },
 { q: 'Quando sei o preço final?', a: 'Antes de qualquer intervenção, recebe um orçamento por escrito. O preço final depende do diagnóstico e da intervenção real.' },
];

function Ctas() {
 return (
 <div className="flex flex-wrap gap-3 my-6">
 <a href="tel:+351928484451" className="px-5 py-3 rounded-lg font-bold text-white bg-[var(--site-primary)]">Ligar: 928 484 451</a>
 <a href={WA} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-lg font-bold text-white bg-green-700">WhatsApp</a>
 </div>
 );
}

export default function TransparencePrix() {
 const { config } = useSite();
 return (
 <>
 <SEOHead />
 <Header />
 <main className="container max-w-4xl mx-auto px-4 py-12 text-gray-700">
 <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preços do canalizador: tabela de tarifas</h1>
 <p className="text-lg">A mesma tabela para todas as localidades servidas. Valores TTC, IVA incluído. Orçamento por escrito antes de qualquer intervenção, sem surpresas na fatura.</p>
 <Ctas />

 <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tabela de tarifas</h2>
 <table className="w-full border-collapse">
 <thead>
 <tr><th className="border p-3 text-left bg-gray-50">Horário</th><th className="border p-3 text-left bg-gray-50">Mão de obra</th><th className="border p-3 text-left bg-gray-50">Deslocação</th></tr>
 </thead>
 <tbody>
 <tr><td className="border p-3">Dias úteis, das 09h às 18h</td><td className="border p-3">70 €/hora</td><td className="border p-3">30 €</td></tr>
 <tr><td className="border p-3">Após as 18h, noite, fins de semana e feriados</td><td className="border p-3">100 €/hora</td><td className="border p-3">50 €</td></tr>
 </tbody>
 </table>
 <p className="mt-3">Valores TTC, IVA incluído.</p>

 <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Como é calculado o preço</h2>
 <ul className="list-disc pl-6 space-y-2">
 <li>A mão de obra é cobrada à hora. Cada hora iniciada é devida.</li>
 <li>A deslocação é cobrada sempre que nos deslocamos ao local.</li>
 <li>O valor da deslocação é o mesmo para todas as localidades servidas.</li>
 <li>Antes de qualquer intervenção, recebe um orçamento por escrito.</li>
 </ul>

 <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Exemplos de cálculo</h2>
 <p>Exemplos apenas de mão de obra e deslocação:</p>
 <ul className="list-disc pl-6 space-y-2">
 <li>Terça-feira às 10h, intervenção de 1 hora: 70 € + 30 € = 100 €.</li>
 <li>Terça-feira às 10h, intervenção de 1h20: 2 horas iniciadas × 70 € + 30 € = 170 €.</li>
 <li>Sábado, intervenção de 1 hora: 100 € + 50 € = 150 €.</li>
 </ul>

 <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Estimativa à distância</h2>
 <p>Se nos enviar uma descrição detalhada e fotografias úteis, podemos indicar uma estimativa à distância. A estimativa é indicativa: cada situação é diferente e o preço final depende do diagnóstico e da intervenção real.</p>
 <p className="mt-3">Quando é necessária deslocação ao local, a deslocação é cobrada.</p>

 <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Atendimento e disponibilidade</h2>
 <p>Atendimento telefónico 24h/24, 7 dias por semana.</p>
 <p className="mt-3">A janela de chegada é confirmada por telefone e depende da situação operacional. A disponibilidade é confirmada conforme a localização e a situação operacional.</p>

 <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Seguro e garantias</h2>
 <p>Seguro de responsabilidade civil profissional até 50.000 €.</p>
 <p className="mt-3">Os equipamentos e peças instalados têm a garantia do respetivo fabricante.</p>

 <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Perguntas frequentes sobre preços</h2>
 {faq.map((f) => (
 <details key={f.q} className="border rounded-lg px-4 py-3 mb-3">
 <summary className="font-bold text-gray-900 cursor-pointer">{f.q}</summary>
 <p className="mt-3">{f.a}</p>
 </details>
 ))}

 <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Pedir um orçamento</h2>
 <p>Descreva o problema e a localidade. Se possível, envie fotografias por WhatsApp.</p>
 <Ctas />
 </main>
 <Footer />
 </>
 );
}
