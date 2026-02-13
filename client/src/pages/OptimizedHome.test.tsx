// Version minimale pour débugger
export default function OptimizedHome() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Test Page - Norte Reparos</h1>
      <p>Si cette page fonctionne sans erreurs JavaScript, alors l'erreur vient des composants.</p>
      <p>Erreur actuelle : <code>i.toLowerCase is not a function</code></p>
      <button onClick={() => alert('Test')}>Test Button</button>
    </div>
  );
}