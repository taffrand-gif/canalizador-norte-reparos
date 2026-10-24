import { useEffect } from 'react';

const phone = '+351 928 484 451';
const phoneHref = 'tel:+351928484451';
const whatsapp = 'https://wa.me/351928484451';
const canonical = 'https://canalizador-norte-reparos.pt/canalizador-mirandela';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'LocalBusiness', name: 'Norte Reparos — Canalizador Mirandela', telephone: '+351928484451', url: canonical, areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Mirandela' } },
    { '@type': 'Service', name: 'Canalizador em Mirandela', serviceType: 'Canalização planeada e diagnóstico de canalizações', provider: { '@type': 'LocalBusiness', name: 'Norte Reparos', telephone: '+351928484451' }, areaServed: { '@type': 'AdministrativeArea', name: 'Concelho de Mirandela' } },
  ],
};

export default function Mirandela() {
  useEffect(() => {
    document.title = 'Canalizador em Mirandela | Norte Reparos';
    const meta = document.querySelector('meta[name="description"]') ?? document.head.appendChild(document.createElement('meta'));
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'Canalizador em Mirandela para trabalhos planeados, diagnóstico de canalizações, fugas e reparações. Orçamento por escrito antes da intervenção.');
    const link = document.querySelector('link[rel="canonical"]') ?? document.head.appendChild(document.createElement('link'));
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonical);
    const id = 'cnr-pillar-canalizador-mirandela';
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
    return () => document.getElementById(id)?.remove();
  }, []);

  return <>
    <header className="bg-slate-900 p-4 text-white"><nav className="mx-auto flex max-w-5xl flex-wrap justify-between gap-3"><a href="/" className="font-bold">Norte Reparos — Canalizador</a><span className="flex gap-3"><a href={phoneHref}>{phone}</a><a href={whatsapp}>WhatsApp</a></span></nav></header>
    <main className="mx-auto max-w-5xl px-4 py-8">
      <p className="mb-4 text-sm"><a href="/">Início</a> / Mirandela</p>
      <section className="rounded-xl bg-cyan-700 p-8 text-center text-white"><p className="font-bold">CANALIZAÇÃO PLANEADA · DIAGNÓSTICO CUIDADOSO</p><h1 className="mt-2 text-4xl font-black">Canalizador em Mirandela</h1><p className="mx-auto mt-4 max-w-2xl">Para instalação, substituição de tubagens, fuga ou reparação que possa ser planeada, começamos por perceber o problema e o âmbito. Confirmamos por escrito o que será feito antes de qualquer intervenção.</p><p className="mt-6"><a className="mr-2 inline-block rounded-lg bg-white px-5 py-3 font-bold text-cyan-800" href={phoneHref}>Ligar {phone}</a><a className="inline-block rounded-lg bg-green-400 px-5 py-3 font-bold text-green-950" href={whatsapp}>Enviar WhatsApp</a></p></section>
      <section className="mt-6 rounded-xl bg-white p-6 shadow"><h2 className="text-2xl font-bold">O que podemos avaliar</h2><div className="mt-4 grid gap-4 md:grid-cols-3"><article><h3 className="font-bold">Instalação e renovação planeada</h3><p>Redes de água, cozinha, casa de banho, sanitários, lavandaria e substituição de tubagem, depois de definido o âmbito da obra.</p></article><article><h3 className="font-bold">Fugas e reparações</h3><p>Fugas, torneiras, sifões, válvulas e problemas de escoamento. Descreva o sintoma para prepararmos uma avaliação prudente.</p></article><article><h3 className="font-bold">Canalizações com obstrução</h3><p>A inspeção e o desentupimento de canalizações por alta pressão são avaliados caso a caso; não aplicamos uma técnica sem diagnóstico.</p></article></div></section>
      <section className="mt-6 rounded-xl bg-white p-6 shadow"><h2 className="text-2xl font-bold">Informação que ajuda no diagnóstico</h2><p className="mt-3">Indique a localidade no concelho de Mirandela, a divisão afetada, os sintomas e, quando possível, envie fotografias, medidas ou planta. Consoante o diagnóstico, podemos recorrer a câmara endoscópica, fluoresceína com observação UV, detetor de humidade e alta pressão para canalizações quando adequado.</p></section>
      <section className="mt-6 rounded-xl bg-white p-6 shadow"><h2 className="text-2xl font-bold">Preços de deslocação e mão de obra</h2><table className="mt-4 w-full border-collapse"><tbody><tr><th className="border p-3 text-left">Dias úteis, 09:00–18:00</th><td className="border p-3">70 €/hora + 30 € de deslocação</td></tr><tr><th className="border p-3 text-left">Fora deste horário, noite, fins de semana e feriados</th><td className="border p-3">100 €/hora + 50 € de deslocação</td></tr></tbody></table><p className="mt-3">Valores TTC, IVA incluído. Toda a hora começada é devida e a deslocação é faturada quando ocorre. Se houver elementos suficientes, a estimativa à distância é indicativa; uma visita com deslocação não é um orçamento gratuito.</p></section>
      <section className="mt-6 rounded-xl bg-white p-6 shadow"><h2 className="text-2xl font-bold">Como pedir um orçamento</h2><ol className="mt-3 list-decimal pl-6"><li>Ligue ou envie WhatsApp.</li><li>Indique a localidade, o trabalho pretendido ou os sintomas.</li><li>Envie fotografias, medidas ou planta quando existirem.</li><li>Confirmamos o âmbito e o orçamento por escrito antes da intervenção.</li></ol></section>
      <section className="mt-6 rounded-xl bg-white p-6 shadow"><h2 className="text-2xl font-bold">Disponibilidade e experiência</h2><p>Atendimento telefónico 24h/24, 7 dias por semana. A disponibilidade e a janela de chegada são confirmadas por telefone conforme a situação operacional. Mais de 20 anos de experiência profissional. Seguro de responsabilidade civil profissional até 50.000 €.</p></section>
      <section className="mt-6 rounded-xl bg-cyan-700 p-6 text-center text-white"><h2 className="text-2xl font-bold">Quer falar sobre um pedido de canalização?</h2><p className="mt-2">Explique-nos o trabalho ou o sintoma para podermos orientar o próximo passo.</p><a className="mr-2 mt-3 inline-block rounded-lg bg-white px-5 py-3 font-bold text-cyan-800" href={phoneHref}>Ligar agora</a><a className="mt-3 inline-block rounded-lg bg-green-400 px-5 py-3 font-bold text-green-950" href={whatsapp}>WhatsApp</a></section>
    </main>
    <footer className="mt-8 bg-slate-900 p-8 text-center text-white">Norte Reparos — Canalizador · <a href={phoneHref}>{phone}</a></footer>
  </>;
}
