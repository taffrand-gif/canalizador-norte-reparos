#!/usr/bin/env node

/**
 * Correctif déterministe des claims legacy CNR.
 * Par défaut : dry-run. Écriture uniquement avec --apply.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'client', 'public');
const apply = process.argv.includes('--apply');
const files = fs.readdirSync(PUBLIC)
  .filter((name) => name.endsWith('.html'))
  .filter((name) => name.startsWith('canalizador-') || name.startsWith('perguntas-frequentes-canalizador-'))
  .sort();

const replacements = {
  obsoleteInsurance: /500\.000 ?€/gu,
  numericArrival: /Tempo médio:\s*(?:<strong>)?\d+ minutos(?:<\/strong>)?/giu,
};
const safeInsurance = '50.000 €';
const safeArrival = 'A janela de chegada é confirmada por telefone e depende da situação operacional.';
const testimonialBlock = /<blockquote\b[^>]*>[\s\S]*?<\/blockquote>/giu;
const testimonialMarker = /—\s*(?:JM|MS|RP)\.|Trabalho impecável|Detectaram a fuga sem partir paredes|Preço justo/iu;

const totals = { files: 0, changedFiles: 0, obsoleteInsurance: 0, numericArrival: 0, testimonialBlocks: 0 };
const changes = [];

for (const name of files) {
  const file = path.join(PUBLIC, name);
  const before = fs.readFileSync(file, 'utf8');
  let after = before;
  let obsoleteInsurance = 0;
  let numericArrival = 0;
  let testimonialBlocks = 0;

  after = after.replace(replacements.obsoleteInsurance, () => { obsoleteInsurance += 1; return safeInsurance; });
  after = after.replace(replacements.numericArrival, () => { numericArrival += 1; return safeArrival; });
  after = after.replace(testimonialBlock, (block) => {
    if (!testimonialMarker.test(block)) return block;
    testimonialBlocks += 1;
    return '';
  });

  totals.files += 1;
  totals.obsoleteInsurance += obsoleteInsurance;
  totals.numericArrival += numericArrival;
  totals.testimonialBlocks += testimonialBlocks;
  if (after !== before) {
    totals.changedFiles += 1;
    changes.push({ file: name, obsoleteInsurance, numericArrival, testimonialBlocks });
    if (apply) fs.writeFileSync(file, after);
  }
}

console.log(JSON.stringify({ mode: apply ? 'apply' : 'dry-run', totals, changes }, null, 2));
