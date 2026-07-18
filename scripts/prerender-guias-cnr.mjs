// scripts/prerender-guias-cnr.mjs
// Génère les HTML statiques des routes wouter CNR non-prérendues à valeur SEO money/info,
// à partir des composants React (.tsx).
//
// Approche : on extrait le contenu SEO (title/description/canonical/JSON-LD) verbatim depuis le .tsx
// et on l'enveloppe dans une coquille HTML compatible cleanUrls:true. Zéro invention (R11).
// Sortie : client/public/<slug>.html qui sera recopié par Vite vers dist/public/ lors du build.
//
// Patterns SEO supportés (auto-détection) :
//   A) <Helmet>...</Helmet>          (react-helmet-async, ex: GuiaDesentupirCanos, PrecoCanalizadorDesentupimentoUrgente)
//   B) useSEO({title, description})  + <script type="application/ld+json" dangerouslySetInnerHTML> (ex: SifaoEntupidoComoLimpar)
//   C) useEffect + document.title + meta.setAttribute + <script type="application/ld+json" dangerouslySetInnerHTML> (ex: CanoRebentado)
//   M) Manuel : title/description passés en override dans la config (ex: TransparencePrix où SEOHead runtime only)
//
// Doctrine : R11 (zéro invention), R12 (prix verrouillés servis si présents), R145 (zéro délai chiffré),
// §12 (pronom pluriel). Le script n'écrit RIEN dans le .tsx source — il lit seulement.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const BASE_URL = 'https://canalizador-norte-reparos.pt';

// ====== CONFIG : routes à pré-rendre ======
// Source unique = audit _audit/SPA-PRERENDER-CANDIDATES-2026-07-18.md §3.1 (filtrées M+I, exclues nav pures)
// Chaque entrée : { slug, file, dir, canonical, titleOverride?, descriptionOverride? }
//   - canonical : OBLIGATOIRE. URL finale servie = auto-canonical.
//   - titleOverride / descriptionOverride : UNIQUEMENT pour les pages SEO 100% runtime (TransparencePrix)
const ROUTES = [
  // --- R12 PRIORITÉ — transparence prix ---
  {
    slug: 'transparence-prix',
    file: 'TransparencePrix.tsx',
    dir: '',
    canonical: `${BASE_URL}/transparence-prix`,
    titleOverride: 'Transparência de Preços | Tabela de Tarifas Norte Reparos',
    descriptionOverride: 'Tabela completa de preços dos serviços de canalização em Trás-os-Montes: tarifa hora, deslocação por zona, forfaits por tipo de serviço. Orçamento por escrito antes de qualquer intervenção.',
  },

  // --- Service hubs (M money) ---
  { slug: 'arranjo-fugas-agua',     file: 'ArranjoFugasAgua.tsx',     dir: '', canonical: `${BASE_URL}/arranjo-fugas-agua` },
  { slug: 'arranjo-esquentadores',  file: 'ArranjoEsquentadores.tsx',  dir: '', canonical: `${BASE_URL}/arranjo-esquentadores` },
  { slug: 'desentupimentos',        file: 'Desentupimentos.tsx',        dir: '', canonical: `${BASE_URL}/desentupimentos` },
  { slug: 'instalacao-canalizacao', file: 'InstalacaoCanalizacao.tsx', dir: '', canonical: `${BASE_URL}/instalacao-canalizacao` },

  // --- ELP Emotional Landing Pages (M urgence) ---
  { slug: 'cano-rebentado',         file: 'CanoRebentado.tsx',         dir: '', canonical: `${BASE_URL}/cano-rebentado` },
  { slug: 'cheiro-mau-canalizacao', file: 'CheiroMauCanalizacao.tsx',  dir: '', canonical: `${BASE_URL}/cheiro-mau-canalizacao` },
  { slug: 'esquentador-avariado',   file: 'EsquentadorAvariado.tsx',    dir: '', canonical: `${BASE_URL}/esquentador-avariado` },
  { slug: 'fuga-agua-urgente',      file: 'FugaAguaUrgente.tsx',        dir: '', canonical: `${BASE_URL}/fuga-agua-urgente` },
  { slug: 'sanita-entupida',        file: 'SanitaEntupida.tsx',         dir: '', canonical: `${BASE_URL}/sanita-entupida` },

  // --- Commercial-intent pages (M prix/urgence) ---
  { slug: 'como-desentupir-sanita-sozinho',          file: 'ComoDesentupirSanitaSozinho.tsx',       dir: '', canonical: `${BASE_URL}/como-desentupir-sanita-sozinho` },
  { slug: 'quanto-custa-arranjar-agua-castanha',     file: 'QuantoCustaArranjarAguaCastanha.tsx',  dir: '', canonical: `${BASE_URL}/quanto-custa-arranjar-agua-castanha` },
  { slug: 'quanto-tempo-demora-arranjar-fuga-agua',  file: 'QuantoTempoDemoraArranjarFugaAgua.tsx', dir: '', canonical: `${BASE_URL}/quanto-tempo-demora-arranjar-fuga-agua` },
  { slug: 'quanto-tempo-demora-desentupir-sanita',   file: 'QuantoTempoDemoraDesentupirSanita.tsx', dir: '', canonical: `${BASE_URL}/quanto-tempo-demora-desentupir-sanita` },
  { slug: 'quanto-tempo-sem-agua-quente',            file: 'QuantoTempoSemAguaQuente.tsx',         dir: '', canonical: `${BASE_URL}/quanto-tempo-sem-agua-quente` },
  { slug: 'vale-pena-arranjar-vs-substituir',        file: 'ValePenaArranjarVsSubstituir.tsx',     dir: '', canonical: `${BASE_URL}/vale-pena-arranjar-vs-substituir` },

  // --- Blog how-to (I info) ---
  { slug: 'blog/arranjo-caldeira-esquentador-manutencao', file: 'ArranjoCaldeiraEsquentadorManutencao.tsx', dir: 'blog', canonical: `${BASE_URL}/blog/arranjo-caldeira-esquentador-manutencao` },
  { slug: 'blog/canalizacao-casa-antiga-renovacao',        file: 'CanalizacaoCasaAntiga.tsx',                dir: 'blog', canonical: `${BASE_URL}/blog/canalizacao-casa-antiga-renovacao` },
  { slug: 'blog/canalizacao-com-mau-cheiro',               file: 'CanalizacaoComMauCheiro.tsx',              dir: 'blog', canonical: `${BASE_URL}/blog/canalizacao-com-mau-cheiro` },
  { slug: 'blog/instalacao-casa-banho-completa-guia',      file: 'InstalacaoCasaBanho.tsx',                  dir: 'blog', canonical: `${BASE_URL}/blog/instalacao-casa-banho-completa-guia` },
  { slug: 'blog/piscina-tanque-agua-canalizacao',         file: 'PiscinaTanqueAgua.tsx',                    dir: 'blog', canonical: `${BASE_URL}/blog/piscina-tanque-agua-canalizacao` },
  { slug: 'blog/poupar-agua-casa-dicas-praticas',         file: 'PouparAguaCasa.tsx',                       dir: 'blog', canonical: `${BASE_URL}/blog/poupar-agua-casa-dicas-praticas` },
  { slug: 'blog/problemas-canalizacao-inverno-solucoes',  file: 'ProblemasCanalizacaoInverno.tsx',          dir: 'blog', canonical: `${BASE_URL}/blog/problemas-canalizacao-inverno-solucoes` },
  { slug: 'blog/sifao-entupido-como-limpar',               file: 'SifaoEntupidoComoLimpar.tsx',              dir: 'blog', canonical: `${BASE_URL}/blog/sifao-entupido-como-limpar` },
  { slug: 'blog/sistema-aquecimento-agua-melhor-opcao',   file: 'SistemaAquecimentoAgua.tsx',               dir: 'blog', canonical: `${BASE_URL}/blog/sistema-aquecimento-agua-melhor-opcao` },

  // --- Blog commercial-intent (R12 prix verrouillés) ---
  { slug: 'blog/preco-canalizador-desentupimento-urgente', file: 'PrecoCanalizadorDesentupimentoUrgente.tsx', dir: 'blog', canonical: `${BASE_URL}/blog/preco-canalizador-desentupimento-urgente` },
  { slug: 'blog/quanto-custa-canalizador-hora-portugal',   file: 'QuantoCustaCanalizadorHoraPortugal.tsx',   dir: 'blog', canonical: `${BASE_URL}/blog/quanto-custa-canalizador-hora-portugal` },

  // --- Villes piliers manquantes (M localité) ---
  { slug: 'canalizador-aguiar-da-beira',         file: 'AguiarBeira.tsx',       dir: 'cidades', canonical: `${BASE_URL}/canalizador-aguiar-da-beira` },
  { slug: 'canalizador-freixo-espada-cinta',     file: 'FreixoEspadaCinta.tsx', dir: 'cidades', canonical: `${BASE_URL}/canalizador-freixo-espada-cinta` },
  { slug: 'canalizador-miranda-douro',           file: 'MirandaDouro.tsx',      dir: 'cidades', canonical: `${BASE_URL}/canalizador-miranda-douro` },
  { slug: 'canalizador-torre-moncorvo',          file: 'TorreMoncorvo.tsx',     dir: 'cidades', canonical: `${BASE_URL}/canalizador-torre-moncorvo` },
  { slug: 'canalizador-vila-nova-foz-coa',       file: 'VilaNovaFozCoa.tsx',    dir: 'cidades', canonical: `${BASE_URL}/canalizador-vila-nova-foz-coa` },

  // --- Guias déjà livrés (#214) — conservés pour rétro-compat ---
  { slug: 'blog/guia-desentupir-canos',     file: 'GuiaDesentupirCanos.tsx',     dir: 'blog', canonical: `${BASE_URL}/blog/guia-desentupir-canos` },
  { slug: 'blog/guia-entupimentos-esgoto',  file: 'GuiaEntupimentosEsgoto.tsx',  dir: 'blog', canonical: `${BASE_URL}/blog/guia-entupimentos-esgoto` },

  // --- Pages orphelines référencées par le maillage des 34 routes cibles ---
  // (Ces .tsx ne sont PAS dans App.tsx mais sont liés depuis les pages pré-rendues.
  //  Sans prérendu, ces hrefs cassent le maillage interne → 404 → gate maillage échoue.)
  { slug: 'blog/como-desentupir-canalizacao-sozinho',   file: 'ComoDesentupirCanalizacaoSozinho.tsx',   dir: 'blog', canonical: `${BASE_URL}/blog/como-desentupir-canalizacao-sozinho` },
  { slug: 'blog/manutencao-canalizacao-checklist-anual', file: 'ManutencaoCanalizacaoChecklistAnual.tsx', dir: 'blog', canonical: `${BASE_URL}/blog/manutencao-canalizacao-checklist-anual` },
  { slug: 'blog/manutencao-esquentador',                 file: 'ManutencaoEsquentador.tsx',              dir: 'blog', canonical: `${BASE_URL}/blog/manutencao-esquentador` },
  { slug: 'blog/sanita-entupida-metodos',                file: 'SanitaEntupidaMetodos.tsx',              dir: 'blog', canonical: `${BASE_URL}/blog/sanita-entupida-metodos` },
  { slug: 'blog/fuga-agua-como-detetar-reparar',         file: 'FugaAguaComoDetarReparar.tsx',           dir: 'blog', canonical: `${BASE_URL}/blog/fuga-agua-como-detetar-reparar` },
  { slug: 'blog/esquentador-nao-aquece',                file: 'EsquentadorNaoAquece.tsx',               dir: 'blog', canonical: `${BASE_URL}/blog/esquentador-nao-aquece` },
  { slug: 'blog/quanto-custa-canalizador-portugal',     file: 'QuantoCustaCanalizadorPortugal.tsx',     dir: 'blog', canonical: `${BASE_URL}/blog/quanto-custa-canalizador-portugal` },
];

// ====== Détection du pattern SEO ======
function detectPattern(tsxContent) {
  if (/<Helmet>[\s\S]*?<\/Helmet>/.test(tsxContent)) return 'A';
  if (/useSEO\s*\(\s*\{/.test(tsxContent)) return 'B';
  if (/useEffect[\s\S]*?document\.title\s*=/.test(tsxContent)) return 'C';
  return 'M'; // Manuel (override dans config)
}

// ====== Extracteurs par pattern ======

// Pattern A — Helmet JSX
function extractHelmetBlock(tsxContent) {
  const m = tsxContent.match(/<Helmet>([\s\S]*?)<\/Helmet>/);
  return m ? m[1] : '';
}

function extractTitleA(helmetBlock) {
  const m = helmetBlock.match(/<title>([\s\S]*?)<\/title>/);
  return m ? m[1].trim() : '';
}
function extractDescriptionA(helmetBlock) {
  const m = helmetBlock.match(/name="description"\s+content="([^"]+)"/);
  return m ? m[1].trim() : '';
}
function extractCanonicalA(helmetBlock) {
  const m = helmetBlock.match(/<link\s+rel="canonical"\s+href="([^"]+)"\s*\/>/);
  return m ? m[1].trim() : '';
}

// Pattern B — useSEO hook
function extractUseSeoCall(tsxContent) {
  const re = /useSEO\s*\(\s*\{([\s\S]*?)\}\s*\)/;
  const m = tsxContent.match(re);
  return m ? m[1] : '';
}
function extractStringField(block, fieldName) {
  // Cherche fieldName: '...' ou "..."
  const re = new RegExp(`${fieldName}:\\s*['"]([^'"]+)['"]`);
  const m = block.match(re);
  return m ? m[1].trim() : '';
}

// Pattern C — useEffect
function extractUseEffectTitle(tsxContent) {
  // document.title = "..." ou document.title = `...`
  const m = tsxContent.match(/document\.title\s*=\s*["'`]([^"'`]+)["'`]/);
  return m ? m[1].trim() : '';
}
function extractUseEffectDescription(tsxContent) {
  // meta.setAttribute('content', '...') — première occurrence
  const m = tsxContent.match(/meta\.setAttribute\(\s*['"]content['"]\s*,\s*['"]([^'"]+)['"]/);
  return m ? m[1].trim() : '';
}

// ====== Extracteur JSON-LD unifié ======
// Deux formes syntaxiques dans ce repo :
//   Forme 1 (Helmet, ex Guías) :
//     <script type="application/ld+json">{JSON.stringify({...})}</script>
//   Forme 2 (dangerouslySetInnerHTML, ex SifaoEntupido, useSEO) :
//     <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({...}) }} />
// Les deux sont équivalentes au runtime : on doit extraire le littéral objet et le matérialiser.
function extractJsonLdLiterals(tsxContent) {
  const scripts = [];

  // Forme 1 : on capture le contenu entre <script type=...> ... </script>
  const re1 = /<script\b([^>]*?)>\s*([\s\S]*?)\s*<\/script>/g;
  let m1;
  while ((m1 = re1.exec(tsxContent)) !== null) {
    if (!/type=["']application\/ld\+json["']/.test(m1[1])) continue;
    for (const lit of extractAllJsonStringify(m1[2])) {
      const jsonStr = materializeJson(lit);
      if (jsonStr) scripts.push(jsonStr);
    }
  }

  // Forme 2 : on capture l'attribut dangerouslySetInnerHTML des <script ... /> self-closing
  // où type="application/ld+json". Le JSON.stringify est DANS l'attribut.
  const re2 = /<script\b([^>]*?)\/>/g;
  let m2;
  while ((m2 = re2.exec(tsxContent)) !== null) {
    if (!/type=["']application\/ld\+json["']/.test(m2[1])) continue;
    // Extraire le contenu de dangerouslySetInnerHTML={{ __html: JSON.stringify({...}) }}
    const dh = m2[1].match(/dangerouslySetInnerHTML\s*=\s*\{\s*\{\s*__html:\s*([\s\S]*?)\s*\}\s*\}/);
    if (!dh) continue;
    for (const lit of extractAllJsonStringify(dh[1])) {
      const jsonStr = materializeJson(lit);
      if (jsonStr) scripts.push(jsonStr);
    }
  }

  return scripts;
}

// Matérialise un littéral JS d'objet en string JSON valide. Renvoie null si invalide.
function materializeJson(literal) {
  try {
    const fn = new Function('__X__', `return JSON.stringify(${literal});`);
    const jsonStr = fn({});
    JSON.parse(jsonStr);
    return jsonStr;
  } catch (err) {
    return null;
  }
}

// Trouve tous les appels JSON.stringify({...} | [...]) dans un bloc, en gérant accolades ET crochets imbriqués.
function extractAllJsonStringify(block) {
  const out = [];
  const needle = 'JSON.stringify(';
  let i = 0;
  while ((i = block.indexOf(needle, i)) !== -1) {
    const start = i + needle.length;
    // Trouver l'accolade OU crochet ouvrant(e) correspondant(e).
    // On scanne caractère par caractère en suivant les strings et la profondeur combinée {}[].
    let depth = 0;
    let j = start;
    let inString = false;
    let stringChar = null;
    let escaped = false;
    let started = false;
    while (j < block.length) {
      const c = block[j];
      if (inString) {
        if (escaped) { escaped = false; }
        else if (c === '\\') { escaped = true; }
        else if (c === stringChar) { inString = false; }
      } else {
        if (c === '"' || c === "'" || c === '`') { inString = true; stringChar = c; }
        else if (c === '{' || c === '[') { depth++; started = true; }
        else if (c === '}' || c === ']') {
          depth--;
          if (started && depth === 0) { break; }
        }
      }
      j++;
    }
    if (started && depth === 0) {
      const literal = block.substring(start, j + 1);
      out.push(literal.trim());
      i = j + 2;
    } else {
      break; // abort
    }
  }
  return out;
}

// ====== Extracteur description fallback (pattern C, description souvent absente) ======
// Stratégie : si la meta description manque, on extrait le premier paragraphe <p>...</p>
// après le H1 (qui contient typiquement l'intro factuelle de la page). C'est du contenu
// SOURCE verbatim, pas de l'invention. Si pas de H1 → premier <p>.
function extractFallbackDescription(tsxContent) {
  // Cherche d'abord un H1
  const h1Match = tsxContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  let searchFrom = 0;
  if (h1Match) searchFrom = tsxContent.indexOf(h1Match[0]) + h1Match[0].length;
  const afterH1 = tsxContent.substring(searchFrom);
  // Premier <p> non-vide
  const pMatch = afterH1.match(/<p[^>]*>([\s\S]*?)<\/p>/);
  if (!pMatch) return '';
  // Nettoie : strip tags internes, normalise espaces
  let text = pMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  // Tronque à 160 chars max (limite meta description raisonnable)
  if (text.length > 200) text = text.substring(0, 197) + '...';
  return text;
}

// ====== Extracteur body (article/main/section/div racine) ======
// Stratégie en cascade : <article> > <main> > <section> racine > premier <div> après return.
// On extrait le bloc le plus englobant qui contient du contenu visible (hors Header/Footer).
function extractBody(tsxContent) {
  // Stratégie 1 : <article>
  const articleMatch = tsxContent.match(/<article[\s\S]*?<\/article>/);
  if (articleMatch) return articleMatch[0];
  // Stratégie 2 : <main>
  const mainMatch = tsxContent.match(/<main[\s\S]*?<\/main>/);
  if (mainMatch) return mainMatch[0];

  // Stratégie 3 : trouver le return( ... ) du composant et prendre son contenu,
  // en excluant les scripts JSON-LD (déjà extraits à part) et le bloc Header/Footer.
  const returnMatch = tsxContent.match(/return\s*\(\s*([\s\S]*?)\s*\)\s*;\s*\}\s*$/m);
  if (returnMatch) {
    let body = returnMatch[1];
    // Strip <Header /> et <Footer /> (composants layout, pas du contenu SEO)
    body = body.replace(/<Header\s*\/>\s*/g, '');
    body = body.replace(/<Footer\s*\/>\s*/g, '');
    // Strip les blocs <script ...>...</script> et <script ... />  (JSON-LD déjà extrait)
    body = body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    body = body.replace(/<script\b[^>]*\/>/g, '');
    // Strip le <></> Fragment wrapper
    body = body.replace(/^[\s]*<>\s*/, '');
    body = body.replace(/<\/>\s*$/, '');
    if (body.trim().length > 200) return body;
  }

  return null;
}

// ====== Conversion JSX → HTML (coquille minimale) ======
function jsxToHtml(jsx) {
  let html = jsx;
  // className (attribute) -> class
  html = html.replace(/\sclassName=/g, ' class=');
  // Normalisation /blog -> /blog/ (convention cleanUrls:true)
  html = html.replace(/href="\/blog"/g, 'href="/blog/"');
  // ⚠️ NE PAS convertir les {...} ternaires — nos pages n'en utilisent pas dans le body,
  // et le pattern du script actuel suppose déjà cette absence (cf. commentaire ligne 119-120 original).
  return html;
}

// ====== Builder HTML ======
function buildHtmlPage({ canonical, title, description, jsonLds, bodyHtml, pageTitle }) {
  const ldScripts = jsonLds.map(ld => `    <script type="application/ld+json">\n${ld}\n    </script>`).join('\n');

  return `<!DOCTYPE html>
<html lang="pt-PT">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="pt_PT" />
  <meta property="og:site_name" content="Norte Reparos" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
  <meta name="theme-color" content="#dc2626" />
${ldScripts}
  <style>
    /* Coquille minimale pour rendre le HTML visuellement correct quand Googlebot le fetch
       sans hydratation. Tailwind/CSS du bundle n'est PAS dans cette page statique. */
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; color: #1f2937; background: #ffffff; line-height: 1.6; }
    a { color: #dc2626; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .text-4xl, .md\\:text-5xl { font-size: 2.5rem; font-weight: 800; line-height: 1.15; margin: 0 0 1rem; color: #111827; }
    @media (min-width: 768px) { .md\\:text-5xl { font-size: 3rem; } }
    .text-3xl { font-size: 1.875rem; font-weight: 700; margin: 2.5rem 0 1rem; color: #111827; line-height: 1.2; }
    .text-2xl { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.75rem; color: #111827; }
    .text-xl { font-size: 1.25rem; font-weight: 700; margin: 0 0 0.5rem; color: #1f2937; }
    .text-lg { font-size: 1.125rem; }
    .text-sm { font-size: 0.875rem; }
    .font-bold { font-weight: 700; }
    .font-medium { font-weight: 500; }
    .font-semibold { font-weight: 600; }
    p { margin: 0 0 1rem; color: #374151; }
    strong { font-weight: 600; color: #111827; }
    ul, ol { padding-left: 1.5rem; margin: 0 0 1rem; }
    li { margin-bottom: 0.5rem; color: #374151; }
    .max-w-4xl { max-width: 56rem; margin: 0 auto; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
    .p-6, .p-8 { padding: 1.5rem; }
    .p-8 { padding: 2rem; }
    .mb-2 { margin-bottom: 0.5rem; }
    .mb-3 { margin-bottom: 0.75rem; }
    .mb-4 { margin-bottom: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mb-8 { margin-bottom: 2rem; }
    .mb-12 { margin-bottom: 3rem; }
    .mt-8 { margin-top: 2rem; }
    .mt-12 { margin-top: 3rem; }
    .my-6 { margin-top: 1.5rem; margin-bottom: 1.5rem; }
    .text-blue-600 { color: #2563eb; }
    .text-blue-700 { color: #1d4ed8; }
    .text-red-700 { color: #b91c1c; }
    .text-gray-900 { color: #111827; }
    .text-gray-800 { color: #1f2937; }
    .text-gray-700 { color: #374151; }
    .text-gray-600 { color: #4b5563; }
    .text-gray-500 { color: #6b7280; }
    .bg-amber-50 { background-color: #fffbeb; }
    .bg-red-50 { background-color: #fef2f2; }
    .bg-red-100 { background-color: #fee2e2; }
    .bg-gray-50 { background-color: #f9fafb; }
    .border-l-4 { border-left: 4px solid; }
    .border-amber-500 { border-color: #f59e0b; }
    .border-red-600 { border-color: #dc2626; }
    .border-gray-400 { border-color: #9ca3af; }
    .rounded-r-lg { border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem; }
    .list-disc { list-style-type: disc; }
    .list-decimal { list-style-type: decimal; }
    .pl-6 { padding-left: 1.5rem; }
    .space-y-2 > * + * { margin-top: 0.5rem; }
    .space-y-3 > * + * { margin-top: 0.75rem; }
    .space-y-6 > * + * { margin-top: 1.5rem; }
    .mx-3 { margin-left: 0.75rem; margin-right: 0.75rem; }
    .hover\\:text-blue-700:hover { color: #1d4ed8; }
    .hover\\:underline:hover { text-decoration: underline; }
    .prose { max-width: 100%; }
  </style>
</head>
<body>
${bodyHtml}
  <hr style="margin: 3rem auto; max-width: 56rem; border: 0; border-top: 1px solid #e5e7eb;" />
  <footer style="max-width: 56rem; margin: 0 auto; padding: 0 1rem 3rem; color: #6b7280; font-size: 0.875rem;">
    <p><a href="${canonical}">${canonical}</a></p>
    <p style="margin-top: 1rem;">Norte Reparos · Trás-os-Montes</p>
  </footer>
</body>
</html>
`;
}

// Échapper les caractères HTML dans les attributs (title, description)
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ====== Process une route ======
function processRoute(route) {
  const tsxPath = path.join(REPO_ROOT, 'client/src/pages', route.dir, route.file);
  const outPath = path.join(REPO_ROOT, 'client/public', `${route.slug}.html`);

  if (!fs.existsSync(tsxPath)) {
    return { ...route, status: 'SKIP_MISSING_TSX', outPath };
  }

  const tsxContent = fs.readFileSync(tsxPath, 'utf8');
  const pattern = detectPattern(tsxContent);

  let title = '';
  let description = '';
  let canonicalInTsx = '';
  let jsonLds = [];

  if (pattern === 'A') {
    const helmetBlock = extractHelmetBlock(tsxContent);
    title = extractTitleA(helmetBlock);
    description = extractDescriptionA(helmetBlock);
    canonicalInTsx = extractCanonicalA(helmetBlock);
    jsonLds = extractJsonLdLiterals(helmetBlock);
  } else if (pattern === 'B') {
    const useSeoBlock = extractUseSeoCall(tsxContent);
    title = extractStringField(useSeoBlock, 'title');
    description = extractStringField(useSeoBlock, 'description');
    // canonical via mainEntityOfPage dans un JSON-LD inline
    const mainEntityMatch = tsxContent.match(/mainEntityOfPage['"]?\s*:\s*['"]([^'"]+)['"]/);
    canonicalInTsx = mainEntityMatch ? mainEntityMatch[1] : '';
    jsonLds = extractJsonLdLiterals(tsxContent);
  } else if (pattern === 'C') {
    title = extractUseEffectTitle(tsxContent);
    description = extractUseEffectDescription(tsxContent);
    if (!description) description = extractFallbackDescription(tsxContent);
    // canonical rare dans ce pattern (rarement dans JSON-LD inline)
    const mainEntityMatch = tsxContent.match(/mainEntityOfPage['"]?\s*:\s*['"]([^'"]+)['"]/);
    canonicalInTsx = mainEntityMatch ? mainEntityMatch[1] : '';
    jsonLds = extractJsonLdLiterals(tsxContent);
  } else if (pattern === 'M') {
    title = route.titleOverride || '';
    description = route.descriptionOverride || '';
    canonicalInTsx = '';
    jsonLds = extractJsonLdLiterals(tsxContent); // peut quand même y en avoir
  }

  // Overrides manuels (si titleOverride est fourni, il prime — utile pour TransparencePrix)
  if (route.titleOverride) title = route.titleOverride;
  if (route.descriptionOverride) description = route.descriptionOverride;

  // Garde-fou R11 : on ne génère PAS si title ou description manquent
  if (!title || !description) {
    return {
      ...route, status: 'SKIP_MISSING_SEO', pattern,
      title, description,
    };
  }

  // Vérification cohérence canonical (info seulement, pas un blocker — auto-canonical est valide)
  if (canonicalInTsx && canonicalInTsx !== route.canonical) {
    console.warn(`  ⚠️  canonical mismatch in ${route.file}: tsx="${canonicalInTsx}" expected="${route.canonical}" (auto-canonical will be used)`);
  }

  // Body
  const bodyJsx = extractBody(tsxContent);
  if (!bodyJsx) {
    return {
      ...route, status: 'SKIP_NO_BODY', pattern,
      title, description,
    };
  }
  const bodyHtml = jsxToHtml(bodyJsx);

  const html = buildHtmlPage({
    canonical: route.canonical,
    title, description, jsonLds, bodyHtml, pageTitle: title,
  });

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, 'utf8');

  return {
    ...route, status: 'OK', pattern,
    title, description,
    jsonLdCount: jsonLds.length,
    bodyBytes: bodyHtml.length,
    htmlBytes: html.length,
    outPath,
    canonicalInTsx,
  };
}

// ====== Main ======
console.log('=== prerender-guias-cnr.mjs (v2 — multi-pattern) ===\n');

const results = [];
for (const route of ROUTES) {
  try {
    const r = processRoute(route);
    results.push(r);
  } catch (err) {
    results.push({ ...route, status: 'ERROR', error: err.message });
  }
}

console.log('\n--- Results ---\n');
let ok = 0, skip = 0, err = 0;
for (const r of results) {
  if (r.status === 'OK') {
    ok++;
    console.log(`✓ ${r.slug.padEnd(58)} pat=${r.pattern} jsonld=${r.jsonLdCount} body=${String(r.bodyBytes).padStart(6)}b html=${String(r.htmlBytes).padStart(6)}b`);
  } else if (r.status.startsWith('SKIP_')) {
    skip++;
    console.log(`⚠ ${r.slug.padEnd(58)} SKIP (${r.status.replace('SKIP_', '').toLowerCase()}) pat=${r.pattern || '-'}`);
  } else {
    err++;
    console.log(`✗ ${r.slug.padEnd(58)} ERROR: ${r.error || r.status}`);
  }
}

console.log(`\n=== ${results.length} routes processed ===`);
console.log(`OK: ${ok} | SKIPPED: ${skip} | ERRORS: ${err} | TOTAL: ${results.length}`);
console.log(`HTML files generated: ${ok}`);

// Exit code != 0 si tous ont échoué (pour CI)
if (ok === 0 && results.length > 0) {
  process.exit(1);
}
