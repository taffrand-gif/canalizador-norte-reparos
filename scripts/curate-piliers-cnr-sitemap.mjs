#!/usr/bin/env node
/** Curation bornée du sitemap source CNR pour le premier lot de pages piliers. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const file = path.join(root, 'public', 'sitemap.xml');
const target = 'https://canalizador-norte-reparos.pt/canalizacao-mirandela';
const obsolete = 'https://canalizador-norte-reparos.pt/canalizacao-nova-macedo-de-cavaleiros';
let xml = fs.readFileSync(file, 'utf8');
const before = xml;
xml = xml.replace(new RegExp(`<url>\\s*<loc>${obsolete.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}<\\/loc>[\\s\\S]*?<\\/url>\\s*`, 'g'), '');
if (!xml.includes(`<loc>${target}</loc>`)) {
  const block = ` <url>\n <loc>${target}</loc>\n <lastmod>2026-10-01</lastmod>\n <priority>0.8</priority>\n <changefreq>monthly</changefreq>\n </url>\n`;
  xml = xml.replace('</urlset>', `${block}</urlset>`);
}
if (xml !== before) fs.writeFileSync(file, xml);
console.log(`[curate-piliers-cnr-sitemap] ${before === xml ? 'no-op' : 'updated'} target=${xml.includes(`<loc>${target}</loc>`)} obsolete=${!xml.includes(`<loc>${obsolete}</loc>`)}`);
