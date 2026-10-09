#!/usr/bin/env node
/**
 * Génération bornée des trois pages piliers CNR 2026.
 *
 * Source éditoriale unique pour le premier lot :
 * - /canalizador-distrito-de-braganca
 * - /canalizador-canalizacao-nova-macedo-de-cavaleiros
 * - /canalizacao-mirandela
 *
 * Le script ne fait aucune substitution regex sur la prose existante. Il rend
 * chaque page depuis une configuration structurée et conserve uniquement les
 * injections tracking/RGPD déjà présentes dans le dépôt.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'client', 'public');
const DOMAIN = 'https://canalizador-norte-reparos.pt';
const PHONE_DISPLAY = '+351 928 484 451';
const PHONE = '+351928484451';
const WHATSAPP = '351928484451';

const pages = [
  {
    file: 'canalizador-distrito-de-braganca.html',
    path: '/canalizador-distrito-de-braganca',
    title: 'Canalização planeada no Distrito de Bragança | Norte Reparos',
    description: 'Canalização nova, substituição de tubagens e preparação de remodelações no Distrito de Bragança. Orçamento por escrito antes de qualquer intervenção.',
    h1: 'Canalização planeada no Distrito de Bragança',
    intro: 'Avaliamos trabalhos de canalização nova, substituição de tubagens e preparação de remodelações. O âmbito e o preço são confirmados por escrito antes de qualquer intervenção.',
    local: 'O distrito de Bragança reúne 12 concelhos. Esta página funciona como ponto de orientação para obras planeadas; a localidade, o âmbito e a disponibilidade são confirmados quando nos contacta.',
    areas: ['Bragança', 'Macedo de Cavaleiros', 'Mirandela', 'Miranda do Douro', 'Mogadouro', 'Vinhais', 'Vimioso', 'Vila Flor'],
    links: [
      ['/canalizador-canalizacao-nova-macedo-de-cavaleiros', 'Canalização nova em Macedo de Cavaleiros'],
      ['/canalizacao-mirandela', 'Canalização planeada em Mirandela'],
      ['https://canalizador-urgente.pt/distritos/braganca', 'Urgência de canalização']
    ]
  },
  {
    file: 'canalizador-canalizacao-nova-macedo-de-cavaleiros.html',
    path: '/canalizador-canalizacao-nova-macedo-de-cavaleiros',
    title: 'Canalização nova em Macedo de Cavaleiros | Norte Reparos',
    description: 'Canalização nova e substituição de tubagens em Macedo de Cavaleiros. Envie o âmbito da obra e receba um orçamento por escrito antes da intervenção.',
    h1: 'Canalização nova em Macedo de Cavaleiros',
    intro: 'Para uma obra nova ou uma remodelação, começamos por perceber o que precisa de ser instalado ou substituído. O orçamento por escrito define o âmbito antes de qualquer intervenção.',
    local: 'Macedo de Cavaleiros é um concelho do Distrito de Bragança. A página é dedicada a trabalhos planeados de canalização; uma fuga ativa ou um entupimento urgente deve seguir o percurso de urgência.',
    areas: ['Macedo de Cavaleiros', 'Morais', 'Lagoa', 'Talhinhas', 'Salsas', 'Macedo do Mato', 'Grijó de Parada'],
    links: [
      ['/canalizador-distrito-de-braganca', 'Canalização planeada no Distrito de Bragança'],
      ['/canalizacao-mirandela', 'Canalização planeada em Mirandela'],
      ['https://canalizador-urgente.pt/canalizador-urgente-macedo-de-cavaleiros', 'Urgência em Macedo de Cavaleiros']
    ]
  },
  {
    file: 'canalizacao-mirandela.html',
    path: '/canalizacao-mirandela',
    title: 'Canalização planeada em Mirandela | Norte Reparos',
    description: 'Instalação ou substituição planeada de canalização em Mirandela. Explique o trabalho e receba um orçamento por escrito antes de qualquer intervenção.',
    h1: 'Canalização planeada em Mirandela',
    intro: 'Tratamos pedidos de canalização nova e substituição de tubagens para obras planeadas em Mirandela. Primeiro definimos o âmbito; depois confirmamos o orçamento por escrito.',
    local: 'Mirandela é um concelho do Distrito de Bragança. Esta página trata a intenção de obra planeada e não substitui a página de urgência para uma fuga ativa, rotura ou entupimento.',
    areas: ['Mirandela', 'Torre de Dona Chama', 'Aguieiras', 'Alvites', 'Carvalhais', 'Mascarenhas', 'Múrias', 'Vale de Gouvinhas', 'Vale de Salgueiro'],
    links: [
      ['/canalizador-distrito-de-braganca', 'Canalização planeada no Distrito de Bragança'],
      ['/canalizador-canalizacao-nova-macedo-de-cavaleiros', 'Canalização nova em Macedo de Cavaleiros'],
      ['https://canalizador-urgente.pt/canalizador-urgente-mirandela', 'Urgência em Mirandela']
    ]
  }
];

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function jsonLd(page) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${DOMAIN}/#website`,
        url: `${DOMAIN}/`,
        name: 'Norte Reparos'
      },
      {
        '@type': 'Organization',
        '@id': `${DOMAIN}/#organization`,
        name: 'Norte Reparos',
        url: `${DOMAIN}/`,
        contactPoint: { '@type': 'ContactPoint', telephone: PHONE, contactType: 'customer service', areaServed: 'PT' },
        sameAs: ['https://eletricista-norte-reparos.pt', 'https://canalizador-urgente.pt', 'https://eletricista-urgente.pt']
      },
      {
        '@type': 'Service',
        '@id': `${DOMAIN}${page.path}#service`,
        name: page.h1,
        serviceType: 'Canalização planeada',
        provider: { '@id': `${DOMAIN}/#organization` },
        areaServed: { '@type': 'AdministrativeArea', name: page.path.includes('distrito') ? 'Distrito de Bragança' : page.path.includes('macedo') ? 'Macedo de Cavaleiros' : 'Mirandela' }
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          ['O que devo enviar para pedir um orçamento?', 'Envie a localidade, fotografias quando possível, o tipo de obra, as divisões envolvidas e o que pretende instalar ou substituir.'],
          ['Como é apresentado o orçamento?', 'O âmbito e o orçamento são confirmados por escrito antes de qualquer intervenção. Trabalhos e materiais variáveis ficam definidos no orçamento.'],
          ['Quais são os valores de deslocação e mão de obra?', 'Em dias úteis entre as 09:00 e as 18:00: 70 €/hora e 30 € de deslocação. À noite, aos fins de semana e feriados: 100 €/hora e 50 € de deslocação. A hora começada é devida.'],
          ['E se tiver uma fuga ou um entupimento urgente?', 'Esta página é para trabalhos planeados. Para uma urgência de canalização, use o percurso de urgência indicado nos links da página.']
        ].map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } }))
      }
    ]
  });
}

function extractScript(html, token) {
  const scripts = html.match(/<script\b[^>]*>[\s\S]*?<\/script>/gi) || [];
  return scripts.find((script) => !/application\/ld\+json/i.test(script) && script.includes(token)) || '';
}

function extractScripts(html, predicate) {
  const scripts = html.match(/<script\b[^>]*>[\s\S]*?<\/script>/gi) || [];
  return scripts.filter((script) => !/application\/ld\+json/i.test(script) && predicate(script));
}

function trackingFragments() {
  const seed = execFileSync('git', ['show', 'HEAD:client/public/canalizador-distrito-de-braganca.html'], { cwd: ROOT, encoding: 'utf8' });
  const rgpd = extractScript(seed, 'data-rgpd-marker');
  const ga4 = extractScripts(seed, (script) => script.includes('googletagmanager') || script.includes('G-VWSWFQB71H')).join('\n');
  const consent = extractScript(seed, 'rgpd-accept-cnr');
  return [rgpd, ga4, consent].filter(Boolean).join('\n');
}

function priceTable() {
  return `<section class="card" aria-labelledby="precos"><h2 id="precos">Preços de deslocação e mão de obra</h2><table><thead><tr><th>Período</th><th>Mão de obra</th><th>Deslocação</th></tr></thead><tbody><tr><td>Dias úteis, 09:00–18:00</td><td>70 €/hora</td><td>30 €</td></tr><tr><td>Noite, fins de semana e feriados</td><td>100 €/hora</td><td>50 €</td></tr></tbody></table><p>A hora começada é devida. O orçamento por escrito é confirmado antes de qualquer intervenção.</p></section>`;
}

function render(page, tracking) {
  const links = page.links.map(([href, label]) => `<li><a href="${href}">${escapeHtml(label)}</a></li>`).join('');
  const areas = page.areas.map((area) => `<li>${escapeHtml(area)}</li>`).join('');
  const schema = jsonLd(page);
  return `<!doctype html><html lang="pt-PT"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(page.title)}</title><meta name="description" content="${escapeHtml(page.description)}"><meta name="robots" content="index,follow"><link rel="canonical" href="${DOMAIN}${page.path}"><meta property="og:title" content="${escapeHtml(page.title)}"><meta property="og:description" content="${escapeHtml(page.description)}"><meta property="og:url" content="${DOMAIN}${page.path}"><script type="application/ld+json">${schema}</script>${tracking}</head><body><header><a href="${DOMAIN}/">Norte Reparos</a><nav><a href="tel:${PHONE}">${PHONE_DISPLAY}</a><a href="https://wa.me/${WHATSAPP}">WhatsApp</a></nav></header><main><p class="breadcrumb"><a href="${DOMAIN}/">Início</a> / ${escapeHtml(page.h1)}</p><section class="hero"><h1>${escapeHtml(page.h1)}</h1><p>${escapeHtml(page.intro)}</p><p><a class="cta" href="tel:${PHONE}">Ligar ${PHONE_DISPLAY}</a><a class="cta whatsapp" href="https://wa.me/${WHATSAPP}">Enviar WhatsApp</a></p></section><section class="card"><h2>O que podemos avaliar</h2><p>${escapeHtml(page.local)}</p><ul><li>Canalização nova e pontos de água ou esgoto.</li><li>Substituição planeada de tubagens.</li><li>Preparação de canalização para cozinha, casa de banho ou sanitários.</li><li>Leitura do âmbito da obra antes de preparar o orçamento.</li></ul></section><section class="card"><h2>Localidades de referência</h2><p>Indique a freguesia ou localidade quando pedir o orçamento:</p><ul>${areas}</ul></section>${priceTable()}<section class="card"><h2>Como pedir um orçamento</h2><ol><li>Explique a obra e indique a localidade.</li><li>Envie fotografias, medidas ou planta quando existirem.</li><li>Definimos o âmbito e os pontos a considerar.</li><li>Confirmamos o orçamento por escrito antes da intervenção.</li></ol></section><section class="card"><h2>Perguntas frequentes</h2><h3>O que devo enviar para pedir um orçamento?</h3><p>Envie a localidade, fotografias quando possível, o tipo de obra, as divisões envolvidas e o que pretende instalar ou substituir.</p><h3>Como é apresentado o orçamento?</h3><p>O âmbito e o orçamento são confirmados por escrito antes de qualquer intervenção. Trabalhos e materiais variáveis ficam definidos no orçamento.</p><h3>Quais são os valores de deslocação e mão de obra?</h3><p>Em dias úteis entre as 09:00 e as 18:00: 70 €/hora e 30 € de deslocação. À noite, aos fins de semana e feriados: 100 €/hora e 50 € de deslocação. A hora começada é devida.</p><h3>E se tiver uma fuga ou um entupimento urgente?</h3><p>Esta página é para trabalhos planeados. Para uma urgência de canalização, use o percurso de urgência indicado nos links.</p></section><section class="card"><h2>Orientação</h2><ul>${links}</ul></section></main><footer><p>Norte Reparos — canalização planeada</p><p><a href="tel:${PHONE}">${PHONE_DISPLAY}</a> · <a href="https://wa.me/${WHATSAPP}">WhatsApp</a></p></footer><style>body{margin:0;font-family:Inter,Arial,sans-serif;background:#f5f7f9;color:#17202a;line-height:1.6}header{display:flex;justify-content:space-between;gap:1rem;align-items:center;padding:1rem max(1rem,calc((100% - 980px)/2));background:#0e7490;color:#fff}header a{color:#fff;text-decoration:none;font-weight:700}header nav{display:flex;gap:1rem;flex-wrap:wrap}main{max-width:980px;margin:auto;padding:1rem}.breadcrumb{font-size:.9rem}.breadcrumb a{color:#0e7490}.hero{background:#0e7490;color:#fff;padding:2rem;border-radius:14px}.hero h1{font-size:clamp(2rem,5vw,3rem);line-height:1.15}.cta{display:inline-block;background:#fff;color:#0e7490;padding:.75rem 1rem;border-radius:8px;text-decoration:none;font-weight:800;margin:.25rem}.cta.whatsapp{background:#25d366;color:#062d16}.card{background:#fff;border-radius:12px;padding:1.25rem;margin:1rem 0;box-shadow:0 2px 10px #0000000d}table{width:100%;border-collapse:collapse}th,td{padding:.75rem;border:1px solid #d7dee3;text-align:left}th{background:#eaf4f6}footer{margin-top:2rem;padding:2rem 1rem;background:#16232d;color:#fff;text-align:center}footer a{color:#fff}@media(max-width:640px){header{align-items:flex-start;flex-direction:column}main{padding:.75rem}.hero{padding:1.25rem}th,td{font-size:.9rem;padding:.55rem}}</style></body></html>`;
}

const tracking = trackingFragments();
for (const page of pages) {
  fs.writeFileSync(path.join(PUBLIC, page.file), render(page, tracking) + '\n');
  console.log(`WROTE ${page.path} -> ${page.file}`);
}
