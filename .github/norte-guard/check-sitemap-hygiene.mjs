#!/usr/bin/env node
// check-sitemap-hygiene — échoue (exit 1) si un sitemap COMMITÉ liste une URL noindex, redirigée ou à slug accentué.
// Lecture seule, sans dépendance, hors ligne. Usage : node check-sitemap-hygiene.mjs [--site CNR|CU|ENR|EU] [--json out.json]
// --strict-missing : signale aussi les URLs sans fichier ni redirection (sites statiques CU/EU ; faux positifs possibles sur routes SPA CNR/ENR).
// --allowlist <fichier> : URLs tolérées (une par ligne, « # raison » facultative) — décisions en attente, à vider.
// Codes de sortie : 0 = propre (violations hors allowlist = 0) · 1 = au moins une violation hors allowlist · 2 = erreur d'usage/interne.
import fs from "node:fs"; import path from "node:path"; import { execSync } from "node:child_process";
const argv = process.argv.slice(2); const val = (f) => (argv.includes(f) ? argv[argv.indexOf(f) + 1] : null);
process.on("uncaughtException", (e) => { console.error("erreur interne : " + e.message); process.exit(2); });
const CFG = {
  CNR: { sitemaps: ["public/sitemap.xml", "client/public/sitemap-plain.xml", "client/public/sitemap-extra.xml"], roots: ["client/public", "public"] },
  ENR: { sitemaps: ["client/public/sitemap.xml", "client/public/sitemap-plain.xml", "client/public/sitemap-extra.xml"], roots: ["client/public"] },
  CU: { sitemaps: ["sitemap.xml", "sitemap-blog.xml", "sitemap-villages.xml", "sitemap-extra.xml"], roots: ["."] },
  EU: { sitemaps: ["sitemap.xml", "sitemap-villages.xml", "sitemap-extra.xml"], roots: ["."] },
};
let site = val("--site");
if (!site) { const r = execSync("git config --get remote.origin.url || true", { encoding: "utf8" }); site = Object.keys(CFG).find((k) => r.includes({ CNR: "canalizador-norte-reparos", ENR: "eletricista-norte-reparos", CU: "canalizador-urgente", EU: "eletricista-urgente" }[k])); }
if (!CFG[site]) { console.error("site inconnu : --site CNR|CU|ENR|EU"); process.exit(2); }
const cfg = CFG[site];
// vercel.json : sources de redirections (TOUS les blocs, y compris un éventuel bloc dupliqué) + headers X-Robots-Tag noindex
const redirSrc = new Set(), noindexSrc = new Set();
try {
  const raw = fs.readFileSync("vercel.json", "utf8");
  JSON.parse(raw, function (k, v) { return v; });
  for (const m of raw.matchAll(/"source"\s*:\s*"([^"]+)"\s*,\s*"destination"\s*:\s*"[^"]*"\s*,\s*"(?:permanent|statusCode)"/g)) redirSrc.add(m[1]);
  for (const m of raw.matchAll(/"source"\s*:\s*"([^"]+)"\s*,\s*"headers"\s*:\s*\[\s*\{\s*"key"\s*:\s*"X-Robots-Tag"\s*,\s*"value"\s*:\s*"([^"]*noindex[^"]*)"/gi)) noindexSrc.add(m[1]);
} catch {}
const allow = new Set(); const alf = val("--allowlist");
if (alf && fs.existsSync(alf)) for (const l of fs.readFileSync(alf, "utf8").split("\n")) { const u = l.split("#")[0].trim(); if (u) allow.add(u); }
const ascii = (x) => x.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const allLocs = new Set();
for (const sm of cfg.sitemaps) if (fs.existsSync(sm)) for (const m of fs.readFileSync(sm, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)) allLocs.add(m[1].trim());
const violations = []; let total = 0;
const fileFor = (p) => { for (const r of cfg.roots) for (const c of [p + ".html", p + "/index.html", p]) { const f = path.join(r, c); if (c !== "" && fs.existsSync(f) && fs.statSync(f).isFile()) return f; } return null; };
for (const sm of cfg.sitemaps) {
  if (!fs.existsSync(sm)) continue;
  const xml = fs.readFileSync(sm, "utf8");
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    total++; const url = m[1].trim(); let p; try { p = decodeURIComponent(new URL(url).pathname); } catch { violations.push({ sitemap: sm, url, motif: "URL invalide" }); continue; }
    const pn = p.replace(/\/$/, "") || "/";
    const add = (motif) => violations.push({ sitemap: sm, url, motif });
    if (/[^\x00-\x7f]/.test(p) && (fileFor(ascii(pn)) || [...allLocs].some((l) => { try { return decodeURIComponent(new URL(l).pathname).replace(/\/$/, "") === ascii(pn); } catch { return false; } }))) add("slug accentué doublon du slug ASCII (redirigé)");
    if (/\.html$/.test(p)) add("extension .html (redirigée 308)");
    if (/\/index$/.test(pn)) add("chemin /index (redirigé)");
    if (redirSrc.has(pn) || redirSrc.has(pn + "/")) add("redirigée par vercel.json");
    if (noindexSrc.has(pn)) add("X-Robots-Tag noindex (vercel.json)");
    const f = pn === "/" ? null : fileFor(pn);
    if (argv.includes("--strict-missing") && pn !== "/" && !f && !redirSrc.has(pn) && !redirSrc.has(pn + "/")) add("aucun fichier source ni redirection (404 probable ; static uniquement)");
    if (f && /\.html$/.test(f)) { const head = fs.readFileSync(f, "utf8").slice(0, 60000); if (/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(head)) add("meta robots noindex (" + f + ")"); }
  }
}
const allowed = violations.filter((v) => allow.has(v.url)); const blocking = violations.filter((v) => !allow.has(v.url));
const stale = [...allow].filter((u) => !violations.some((v) => v.url === u));
console.log(`check-sitemap-hygiene · site=${site} · URLs=${total} · violations=${violations.length} (tolérées allowlist=${allowed.length}, bloquantes=${blocking.length}) · entrées d'allowlist périmées=${stale.length}`);
const by = {}; for (const v of violations) by[v.motif.replace(/\(.*\)/, "").trim()] = (by[v.motif.replace(/\(.*\)/, "").trim()] || 0) + 1;
for (const [k, n] of Object.entries(by)) console.log(`  ${String(n).padStart(6)}  ${k}`);
for (const v of blocking.slice(0, 15)) console.log(`  - ${v.sitemap}: ${v.url} → ${v.motif}`);
if (val("--json")) fs.writeFileSync(val("--json"), JSON.stringify({ site, total, violations }, null, 1));
process.exit(blocking.length ? 1 : 0);
