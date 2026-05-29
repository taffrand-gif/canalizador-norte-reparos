// Page minimale pour débugger l'erreur i.toLowerCase
export default function MinimalHome() {
 return (
 <html>
 <head>
 <title>Test - Canalizador Profissional</title>
 <meta name="viewport" content="width=device-width, initial-scale=1" />
 </head>
 <body style={{ margin: 0, padding: 20, fontFamily: 'sans-serif' }}>
 <h1>Test Page - Canalizador Profissional</h1>
 <p>Si cette page fonctionne sans erreurs JavaScript, alors l'erreur vient des composants.</p>
 <p>Erreur actuelle : <code>i.toLowerCase is not a function</code></p>
 <button onclick="alert('Test')">Test Button</button>
 <script>
 // console.log('Page loaded successfully');
 </script>
 </body>
 </html>
 );
}