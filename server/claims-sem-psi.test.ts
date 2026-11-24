import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "fs";
import path from "path";

// Anti-résidu lot 4000 PSI : aucune pression chiffrée présentée comme
// capacité d'équipement de desentupimento (non confirmée par Filipe).
const ROOT = path.resolve(import.meta.dirname, "..");
const CLAIM = /\d[\d.\s]*\s*PSI\b/i;

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx?|html|json|txt|xml)$/.test(name)) out.push(p);
  }
  return out;
}

describe("desentupimento sans pression chiffrée", () => {
  it("Desentupimentos.tsx ne contient aucune valeur en PSI", () => {
    const src = readFileSync(path.join(ROOT, "client/src/pages/Desentupimentos.tsx"), "utf-8");
    expect(src).not.toMatch(CLAIM);
  });

  it("aucune surface client ne promet « 4000 PSI »", () => {
    const hits = [...walk(path.join(ROOT, "client/src")), ...walk(path.join(ROOT, "client/public"))]
      .filter((f) => /4[\s.]?000\s*PSI/i.test(readFileSync(f, "utf-8")));
    expect(hits).toEqual([]);
  });
});
