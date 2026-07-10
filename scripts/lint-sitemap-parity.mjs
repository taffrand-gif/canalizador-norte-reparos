#!/usr/bin/env node
/**
 * lint-sitemap-parity.mjs — GATE CI (P0 CNR — fix durable)
 *
 * Vérifie que public/sitemap.xml (TOP, source de vérité) et
 * client/public/sitemap.xml (Vite build source) ont EXACTEMENT le même
 * nombre de <loc>.
 *
 * Pourquoi : après le fix Option C (sync-client-sitemap.mjs au prebuild),
 * `sync-client-sitemap.mjs` est censé garder les deux fichiers en parité
 * à chaque build. Mais si un futur PR re-commit un client/public/sitemap.xml
 * divergent (par copie manuelle ou autre outil), ce gate le détecte AVANT merge.
 *
 * Sans ce gate, le bug peut se reproduire en silence : un PR toucherait
 * client/public/ sans toucher public/ → divergence invisible jusqu'à ce que
 * Vercel serve un sitemap castré.
 *
 * Hook npm : script "lint:sitemap-parity", possiblement exécuté dans CI.
 *
 * Codes de sortie :
 *   0 → parité OK
 *   1 → parité KO (source vs cible différent)
 *   2 → fichier manquant (fail-fast)
 *
 * Pas de dépendance npm (fs/path natifs Node).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

const SOURCE = path.join(REPO_ROOT, "public", "sitemap.xml");
const TARGET = path.join(REPO_ROOT, "client", "public", "sitemap.xml");

function countLoc(file) {
  if (!fs.existsSync(file)) {
    console.error(`[lint-sitemap-parity] FATAL: fichier manquant: ${file}`);
    process.exit(2);
  }
  const matches = fs.readFileSync(file, "utf8").match(/<loc>/g);
  return matches ? matches.length : 0;
}

const sourceCount = countLoc(SOURCE);
const targetCount = countLoc(TARGET);

const sourceBytes = fs.statSync(SOURCE).size;
const targetBytes = fs.statSync(TARGET).size;

if (sourceCount === targetCount && sourceBytes === targetBytes) {
  console.log(
    `[lint-sitemap-parity] PASS: parité exacte ${sourceCount} <loc>, ${sourceBytes} bytes`,
  );
  process.exit(0);
}

console.error(
  `[lint-sitemap-parity] FAIL: divergence détectée`,
);
console.error(
  `  source (${path.relative(REPO_ROOT, SOURCE)}) : ${sourceCount} <loc>, ${sourceBytes} bytes`,
);
console.error(
  `  cible  (${path.relative(REPO_ROOT, TARGET)}) : ${targetCount} <loc>, ${targetBytes} bytes`,
);
console.error("");
console.error(
  "  Action : soit (a) exécuter `node scripts/sync-client-sitemap.mjs` pour resync,",
);
console.error(
  "             (b) soit corriger manuellement le fichier divergent puis re-commit.",
);
console.error(
  "  Le but : public/sitemap.xml est la SOURCE UNIQUE. Tout autre fichier est dérivé.",
);

process.exit(1);
