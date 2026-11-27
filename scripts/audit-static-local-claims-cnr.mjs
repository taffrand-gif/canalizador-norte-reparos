#!/usr/bin/env node

/**
 * Audit read-only des claims dans les pages locales HTML legacy CNR.
 * Ne réécrit aucun fichier servi et ne déduit pas qu'un motif est valide métier.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'client', 'public');
const files = fs.readdirSync(PUBLIC)
  .filter((name) => name.endsWith('.html'))
  .filter((name) => name.startsWith('canalizador-') || name.startsWith('perguntas-frequentes-canalizador-'))
  .sort();

const patterns = {
  numericArrival: /Tempo médio:[^<]*<strong>\d+ minutos<\/strong>/giu,
  reviewInitials: /—\s*(?:JM|MS|RP)\./giu,
  testimonialText: /Trabalho impecável|Detectaram a fuga sem partir paredes|Preço justo/giu,
  dgeg: /DGEG|TRIESP|Ficha eletrotécnica|Termos de responsabilidade|wallbox/giu,
  insurance50k: /Seguro de responsabilidade civil profissional até 50\.000 €/giu,
  obsoleteInsurance: /500\.000 ?€/giu,
  personalAddress: /streetAddress|rua\s+[A-ZÁÀÂÃÉÊÍÓÔÕÚÇ][^<]{0,80}/giu,
};

const findings = Object.fromEntries(Object.keys(patterns).map((key) => [key, { files: [], occurrences: 0 }]));
const population = [];

for (const name of files) {
  const file = path.join(PUBLIC, name);
  const text = fs.readFileSync(file, 'utf8');
  population.push(name);
  for (const [key, pattern] of Object.entries(patterns)) {
    const matches = text.match(pattern) ?? [];
    if (matches.length > 0) {
      findings[key].files.push({ file: name, occurrences: matches.length });
      findings[key].occurrences += matches.length;
    }
  }
}

const result = {
  schemaVersion: 1,
  mode: 'read-only',
  repository: 'canalizador-norte-reparos',
  population: { htmlFiles: population.length, files: population },
  findings,
  sourceOfTruth: '/Users/admin/work/Sites/_governance/20-BUSINESS-FACTS.json',
  interpretation: 'Les motifs sont des signaux à qualifier contre la source métier ; ce rapport ne décide ni suppression ni réécriture.',
};

console.log(JSON.stringify(result, null, 2));
