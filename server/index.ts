import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import compression from "compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
 const app = express();
 const server = createServer(app);

 // Compression Brotli/Gzip pour tous les assets
 app.use(compression({
 level: 6, // Niveau de compression (0-9)
 threshold: 1024, // Compresser seulement si > 1KB
 filter: (req, res) => {
 if (req.headers['x-no-compression']) {
 return false;
 }
 return compression.filter(req, res);
 }
 }));

 // Serve static files from dist/public in production
 const staticPath =
 process.env.NODE_ENV === "production"
 ? path.resolve(__dirname, "public")
 : path.resolve(__dirname, "..", "dist", "public");

 // Headers de cache optimisés
 app.use(express.static(staticPath, {
 maxAge: process.env.NODE_ENV === "production" ? '1y' : 0,
 setHeaders: (res, filePath) => {
 // Cache immutable pour les assets avec hash
 if (filePath.match(/\.(js|css|woff2?|jpg|jpeg|png|webp|svg|ico)$/)) {
 if (filePath.includes('-') || filePath.includes('.')) {
 res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
 } else {
 res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 jour
 }
 }

 // Pas de cache pour HTML
 if (filePath.endsWith('.html')) {
 res.setHeader('Cache-Control', 'no-cache, must-revalidate');
 }

 // Security headers
 res.setHeader('X-Content-Type-Options', 'nosniff');
 res.setHeader('X-Frame-Options', 'DENY');
 res.setHeader('X-XSS-Protection', '1; mode=block');
 res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
 }
 }));

 // Handle client-side routing - serve index.html with SSR-friendly title injection
 // pour les routes SPA critiques (Google ne devrait jamais dépendre de l'hydratation
 // pour un title). Le useSEO() côté client prend le relais après hydratation.
 const ROUTE_TITLES: Record<string, { title: string; description: string; canonical: string }> = {
 "/contactos": {
 title: "Contactos | Norte Reparos - Canalizador Profissional",
 description: "Entre em contacto connosco. Canalizador profissional Atendimento 24h/7d/dia. Ligue 928 484 451. Orçamento gratuito.",
 canonical: "https://canalizador-norte-reparos.pt/contactos"
 },
 "/equipa": {
 title: "Equipa | Norte Reparos - Canalizador Profissional Trás-os-Montes",
 description: "Conheça a nossa equipa de canalizadores profissionais em Trás-os-Montes. Formação contínua, equipamento profissional, certificação.",
 canonical: "https://canalizador-norte-reparos.pt/equipa"
 },
 "/precos-canalizador": {
 title: "Preços Canalizador | Norte Reparos - Tabela Trás-os-Montes",
 description: "Tabela de preços do canalizador em Trás-os-Montes. Desde 65€/h, majoração +50% noites/fins de semana/feriados, deslocação por zona Z1-Z6 (15-65€).",
 canonical: "https://canalizador-norte-reparos.pt/precos-canalizador"
 },
 "/areas-atuacao": {
 title: "Áreas de Atuação | Norte Reparos - Canalizador Trás-os-Montes",
 description: "Zonas de intervenção do canalizador Norte Reparos. Raio 100km desde Macedo de Cavaleiros, cobrindo Bragança, Vila Real, Viseu, Guarda.",
 canonical: "https://canalizador-norte-reparos.pt/areas-atuacao"
 },
 "/transparencia-precos": {
 title: "Transparência de Preços | Norte Reparos - Canalizador",
 description: "Explicação detalhada dos nossos preços: mão-de-obra, materiais, deslocação, garantias. Sem surpresas na fatura.",
 canonical: "https://canalizador-norte-reparos.pt/transparencia-precos"
 }
 };

 app.get("*", (req, res) => {
 res.setHeader('Cache-Control', 'no-cache, must-revalidate');
 const route = req.path;
 const seo = ROUTE_TITLES[route];
 if (!seo) {
 // Route non mappée = sert index.html tel quel
 res.sendFile(path.join(staticPath, "index.html"));
 return;
 }
 // Lit index.html et injecte title + description + canonical
 const fs = require('fs');
 const indexPath = path.join(staticPath, "index.html");
 fs.readFile(indexPath, 'utf8', (err: NodeJS.ErrnoException | null, html: string) => {
 if (err) {
 res.sendFile(indexPath);
 return;
 }
 // Remplace le <title> existant
 let out = html.replace(/<title>[^<]*<\/title>/, `<title>${seo.title}</title>`);
 // Remplace la meta description
 out = out.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${seo.description}"`);
 // Remplace og:title
 out = out.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${seo.title}"`);
 // Remplace og:description
 out = out.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${seo.description}"`);
 // Remplace canonical
 out = out.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${seo.canonical}"`);
 // Remplace og:url
 out = out.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${seo.canonical}"`);
 // Remplace twitter:title et twitter:description
 out = out.replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${seo.title}"`);
 out = out.replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${seo.description}"`);
 res.setHeader('Content-Type', 'text/html; charset=utf-8');
 res.send(out);
 });
 });

 const port = process.env.PORT || 3000;

 server.listen(port, () => {
 console.log(`Server running on http://localhost:${port}/`);
 });
}

startServer().catch(console.error);
