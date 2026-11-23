// scripts/render-jsx-pages-cnr.mjs
//
// Re-renders the static pages that prerender-guias-cnr.mjs wrote with raw JSX in the body
// (JSX expressions, <Icon /> tags, dangerouslySetInnerHTML: blank page or code shown as text).
//
// How: the React route is rendered in headless Chromium (Playwright) from the local build
// (dist/public, SPA fallback for these routes only), and only the <body> of the existing static
// page is replaced by the rendered component markup. The existing <head> (title, description,
// canonical, consent mode, GA4, inline CSS, call-tracking.js, JSON-LD) is kept unchanged: JSON-LD
// rendered by the component is not copied (it would duplicate the head blocks). No hashed asset is referenced and no JavaScript bundle is
// loaded, so the page does not depend on the next build.
//
// Content = what React renders today: nothing is written by hand (R11).
//
// Usage: npm run build && node scripts/render-jsx-pages-cnr.mjs   (from the repo root)

import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(REPO_ROOT, 'dist/public');
const PUB = path.join(REPO_ROOT, 'client/public');
const PLAYWRIGHT = process.env.PLAYWRIGHT_PATH || '/Users/admin/.nvm/versions/node/v24.10.0/lib/node_modules/playwright/index.mjs';
const CHROMIUM = process.env.CHROMIUM_PATH || '/Users/admin/.codeium/ws-browser/chromium-1155/chrome-mac/Chromium.app/Contents/MacOS/Chromium';

// output = static page written by prerender-guias-cnr.mjs with JSX left in the body (26 pages in
// the scan of 2026-11-20; transparence-prix is left out until its content is decided by the owner) ; route = wouter route in client/src/App.tsx that renders the same component
export const PAGES = [
  { output: 'arranjo-esquentadores', route: '/arranjo-esquentadores' },
  { output: 'instalacao-canalizacao', route: '/instalacao-canalizacao' },
  { output: 'cheiro-mau-canalizacao', route: '/cheiro-mau-canalizacao' },
  { output: 'como-desentupir-sanita-sozinho', route: '/como-desentupir-sanita-sozinho' },
  { output: 'quanto-custa-arranjar-agua-castanha', route: '/quanto-custa-arranjar-agua-castanha' },
  { output: 'quanto-tempo-demora-arranjar-fuga-agua', route: '/quanto-tempo-demora-arranjar-fuga-agua' },
  { output: 'quanto-tempo-demora-desentupir-sanita', route: '/quanto-tempo-demora-desentupir-sanita' },
  { output: 'quanto-tempo-sem-agua-quente', route: '/quanto-tempo-sem-agua-quente' },
  { output: 'vale-pena-arranjar-vs-substituir', route: '/vale-pena-arranjar-vs-substituir' },
  { output: 'blog/arranjo-caldeira-esquentador-manutencao', route: '/blog/arranjo-caldeira-esquentador-manutencao' },
  { output: 'blog/canalizacao-casa-antiga-renovacao', route: '/blog/canalizacao-casa-antiga-renovacao' },
  { output: 'blog/instalacao-casa-banho-completa-guia', route: '/blog/instalacao-casa-banho-completa-guia' },
  { output: 'blog/piscina-tanque-agua-canalizacao', route: '/blog/piscina-tanque-agua-canalizacao' },
  { output: 'blog/poupar-agua-casa-dicas-praticas', route: '/blog/poupar-agua-casa-dicas-praticas' },
  { output: 'blog/problemas-canalizacao-inverno-solucoes', route: '/blog/problemas-canalizacao-inverno-solucoes' },
  { output: 'blog/sistema-aquecimento-agua-melhor-opcao', route: '/blog/sistema-aquecimento-agua-melhor-opcao' },
  { output: 'blog/preco-canalizador-desentupimento-urgente', route: '/blog/preco-canalizador-desentupimento-urgente' },
  { output: 'blog/quanto-custa-canalizador-hora-portugal', route: '/blog/quanto-custa-canalizador-hora-portugal' },
  { output: 'canalizador-freixo-espada-cinta', route: '/canalizador-freixo-espada-cinta' },
  { output: 'canalizador-miranda-douro', route: '/canalizador-miranda-douro' },
  { output: 'canalizador-torre-moncorvo', route: '/canalizador-torre-moncorvo' },
  { output: 'canalizador-vila-nova-foz-coa', route: '/canalizador-vila-nova-foz-coa' },
  { output: 'blog/guia-desentupir-canos', route: '/blog/guia-desentupir-canos' },
  { output: 'blog/guia-entupimentos-esgoto', route: '/blog/guia-entupimentos-esgoto' },
  { output: 'blog/manutencao-esquentador', route: '/blog/manutencao-esquentador-guia' },
];

// Same test as the guard in prerender-guias-cnr.mjs.
export const JSX_RESIDUE = /className=|dangerouslySetInnerHTML|<[A-Z][A-Za-z]*[\s/>]|\{\s*\[|\)\s*=>|\.map\(|\{\s*[a-zA-Z_$][\w$.]*\s*\}/;

const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.avif': 'image/avif', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.txt': 'text/plain' };

function serve() {
  const spa = new Set(PAGES.map((p) => p.route));
  const server = http.createServer((req, res) => {
    const url = decodeURIComponent(req.url.split('?')[0]);
    let file = spa.has(url) ? path.join(DIST, 'index.html') : path.join(DIST, url);
    if (!file.startsWith(DIST)) { res.writeHead(403); return res.end(); }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!fs.existsSync(file) && fs.existsSync(file + '.html')) file += '.html';
    if (!fs.existsSync(file)) file = path.join(DIST, 'index.html');
    res.writeHead(200, { 'content-type': MIME[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

async function capture(browser, url) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, serviceWorkers: 'block' });
  // consent already answered: the cookie banner is not rendered into the static page
  await ctx.addInitScript(() => { try { localStorage.setItem('rgpd-consent-cnr-v1', 'denied'); } catch (e) {} });
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(1500);
    // closed accordions (Radix, single mode) do not render their panel: open each one in turn and keep
    // the panel markup, so every answer is in the static page
    const panels = {};
    for (const b of await page.locator('#root button[aria-controls]').all()) {
      const id = await b.getAttribute('aria-controls');
      if ((await b.getAttribute('aria-expanded')) !== 'true') { await b.click().catch(() => {}); await page.waitForTimeout(150); }
      panels[id] = await page.evaluate((i) => { const el = document.getElementById(i); return el ? el.innerHTML : ''; }, id);
    }
    return await page.evaluate((panels) => {
      const root = document.querySelector('#root');
      const clone = root.cloneNode(true);
      // fixed widgets (floating CTA, popups) are interactive React parts: not kept in a static page
      const fixed = new Set();
      root.querySelectorAll('*').forEach((el, i) => { if (getComputedStyle(el).position === 'fixed') fixed.add(i); });
      const all = clone.querySelectorAll('*');
      all.forEach((el, i) => { if (fixed.has(i)) el.setAttribute('data-render-drop', '1'); });
      clone.querySelectorAll('[data-render-drop], script, noscript, style').forEach((el) => el.remove());
      // no JavaScript on the static page: a button does nothing, keep its text as a heading line
      clone.querySelectorAll('button').forEach((el) => {
        const d = document.createElement('p'); d.style.fontWeight = '700'; d.innerHTML = el.innerHTML; el.replaceWith(d);
      });
      Object.entries(panels).forEach(([id, html]) => {
        const el = clone.querySelector('[id="' + id + '"]');
        if (el && html) { el.innerHTML = html; el.setAttribute('data-state', 'open'); }
      });
      clone.querySelectorAll('[hidden]').forEach((el) => el.removeAttribute('hidden'));
      // app chrome, not page content: toast region and skip link of the React shell
      clone.querySelectorAll('section[aria-label^="Notifications"], a[href="#main-content"]').forEach((el) => el.remove());
      // dev attribute added by the build (source file:line): not page content
      clone.querySelectorAll('[data-loc]').forEach((el) => el.removeAttribute('data-loc'));
      clone.querySelectorAll('[data-state="closed"]').forEach((el) => el.setAttribute('data-state', 'open'));
      // site header/footer only: an article's own <header> (with its H1) is content
      clone.querySelectorAll('header, footer').forEach((el) => { if (!el.parentElement.closest('article, main')) el.remove(); });
      // whole page content (hero with the H1 included), site header/footer removed above
      return { body: clone.innerHTML.trim(), text: clone.textContent.replace(/\s+/g, ' ').trim().length,
        h1: clone.querySelectorAll('h1').length };
    }, panels);
  } finally {
    await ctx.close();
  }
}

async function main() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) { console.error('dist/public absent: run npm run build first'); process.exit(1); }
  const { chromium } = await import(PLAYWRIGHT);
  const server = await serve();
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ headless: true, executablePath: CHROMIUM, args: ['--no-sandbox'] });
  let failed = 0;
  try {
    for (const p of PAGES) {
      const out = path.join(PUB, p.output + '.html');
      const old = fs.readFileSync(out, 'utf8');
      const cut = old.indexOf('<body');
      if (cut < 0) { console.log(`✗ ${p.output}: no <body> in the existing page`); failed++; continue; }
      const r = await capture(browser, base + p.route);
      if (r.text < 300 || r.h1 !== 1 || JSX_RESIDUE.test(r.body)) { console.log(`✗ ${p.output}: render empty or not clean (text ${r.text}, h1 ${r.h1})`); failed++; continue; }
      // /blog is served as /blog/ (301 otherwise): link the served URL directly
      r.body = r.body.replace(/href="\/blog"/g, 'href="/blog/"');
      // scripts of the existing body (consent banner, floating call/WhatsApp stack) are site features, not
      // JSX: kept as they are, at the end of the body (a JSX block such as dangerouslySetInnerHTML is dropped)
      const keep = (old.slice(cut).match(/<script\b(?![^>]*dangerouslySetInnerHTML)[^>]*>[\s\S]*?<\/script>/g) || []).join('\n');
      const head = old.slice(0, cut);
      const canonical = (head.match(/<link rel="canonical" href="([^"]+)"/) || [])[1] || '';
      const html = `${head}<body>\n${r.body}\n  <hr style="margin: 3rem auto; max-width: 56rem; border: 0; border-top: 1px solid #e5e7eb;" />\n`
        + `  <footer style="max-width: 56rem; margin: 0 auto; padding: 0 1rem 3rem; color: #6b7280; font-size: 0.875rem;">\n`
        + `    <p><a href="${canonical}">${canonical}</a></p>\n    <p style="margin-top: 1rem;">Norte Reparos · Trás-os-Montes</p>\n  </footer>\n${keep}\n</body>\n</html>\n`;
      fs.writeFileSync(out, html, 'utf8');
      console.log(`✓ ${p.output.padEnd(48)} body ${String(r.body.length).padStart(6)} b, text ${r.text}`);
    }
  } finally {
    await browser.close();
    server.close();
  }
  process.exit(failed ? 1 : 0);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) main();
