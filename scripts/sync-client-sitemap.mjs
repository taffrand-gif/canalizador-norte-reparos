#!/usr/bin/env node
/**
 * sync-client-sitemap.mjs — P0 CNR fix Option C
 *
 * Source unique de vérité : TOP-LEVEL public/sitemap.xml (3441 URLs, propre).
 * Cible synchronisée      : client/public/sitemap.xml (Vite build source).
 *
 * Pourquoi : Vite build a root = REPO/client/ (vite.config.ts:292), donc il
 * ne lit QUE client/public/. Le top-level public/ est invisible au build.
 * Avant ce fix, les PRs M5→M6→M6bis purgent le mauvais fichier (client/public/),
 * et la purge ne s'applique jamais au top-level public/. Au final,
 * Vite copie un sitemap castré (724 URLs) vers dist/public/sitemap.xml,
 * livré à Google Search Console en remplacement du sitemap complet (3441).
 *
 * Ce script est IDEMPOTENT (peut tourner N fois, même résultat) et
 * IDÉMPOTENT-LIGHT (conserve client/public/sitemap-blog.xml et autres
 * fichiers résidents de client/public/, ne touche que sitemap.xml).
 *
 * Hook npm : exécuté en prebuild dans package.json.
 *
 * Garanties :
 * - Si public/sitemap.xml manque → exit code 1 (fail-fast).
 * - Si le fichier cible est différent avant/après ET que la copie échoue
 *   (exception) → exit code 1, l'erreur remonte, build aborté.
 * - Affiche en stdout :
 *     "synced: <source-bytes> bytes (N <loc>) → <target-bytes> bytes"
 *
 * Pas de dépendance npm (fs/path natifs Node), exécutable en Node ≥ 18
 * (sans option --experimental-*).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

const SOURCE = path.join(REPO_ROOT, "public", "sitemap.xml");
const TARGET = path.join(REPO_ROOT, "client", "public", "sitemap.xml");

function countLoc(buf) {
  const matches = buf.toString("utf8").match(/<loc>/g);
  return matches ? matches.length : 0;
}

function main() {
  if (!fs.existsSync(SOURCE)) {
    console.error(`[sync-client-sitemap] FATAL: source introuvable: ${SOURCE}`);
    console.error(
      "  Le fichier public/sitemap.xml est la SOURCE UNIQUE de vérité.",
    );
    console.error(
      "  S'il manque, le build va produire un dist/public/sitemap.xml vide ou absent.",
    );
    process.exit(1);
  }

  const sourceBuf = fs.readFileSync(SOURCE);
  const sourceCount = countLoc(sourceBuf);
  const sourceBytes = sourceBuf.byteLength;

  // Garde de cohérence : si public/ tombe à 0 URLs, fail-fast.
  if (sourceCount === 0) {
    console.error(
      `[sync-client-sitemap] FATAL: source contient 0 <loc>: ${SOURCE}`,
    );
    process.exit(1);
  }

  // Crée le dossier cible si besoin (idempotent — no-op si existe).
  fs.mkdirSync(path.dirname(TARGET), { recursive: true });

  // Écriture atomique : écrit dans .tmp puis rename.
  // → Si le process est tué au milieu, client/public/sitemap.xml
  //    n'est jamais partiellement écrasé (R8 témoin de contrôle).
  const tmp = TARGET + ".tmp";
  fs.writeFileSync(tmp, sourceBuf);
  fs.renameSync(tmp, TARGET);

  const targetBytes = fs.statSync(TARGET).size;
  const targetCount = countLoc(fs.readFileSync(TARGET));

  if (targetCount !== sourceCount) {
    console.error(
      `[sync-client-sitemap] FATAL: après copie, source=${sourceCount} <loc>, cible=${targetCount} <loc>`,
    );
    process.exit(1);
  }

  console.log(
    `[sync-client-sitemap] synced: ${path.relative(REPO_ROOT, SOURCE)} (${sourceBytes} bytes, ${sourceCount} <loc>) → ${path.relative(REPO_ROOT, TARGET)} (${targetBytes} bytes)`,
  );
}

try {
  main();
} catch (err) {
  console.error(`[sync-client-sitemap] ERREUR inattendue:`, err);
  process.exit(1);
}
