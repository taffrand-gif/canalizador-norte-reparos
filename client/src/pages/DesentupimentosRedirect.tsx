import { useEffect } from "react";

// A full navigation is necessary: Vercel serves the canonical static page at
// this URL, while the legacy SPA component contains obsolete service terms.
export default function DesentupimentosRedirect() {
  useEffect(() => {
    window.location.replace(`/desentupimentos/${window.location.search}${window.location.hash}`);
  }, []);

  return (
    <main>
      <p>A abrir a página de desentupimentos. <a href="/desentupimentos/">Continuar</a></p>
    </main>
  );
}
