// SEO Internal Links section for homepage
// Adds 15+ internal links to services, cities, urgency pages, and blog articles

export default function HomepageLinks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Services Links */}
        <h2 className="text-3xl font-black mb-6 text-center">🔧 Os Nossos Serviços de Canalização</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
          A nossa equipa oferece serviços completos de canalização em Trás-os-Montes. Desde{' '}
          <a href="/desentupimentos-profissionais-tras-os-montes" className="text-[#0e7490] font-bold hover:underline">desentupimentos profissionais</a> com equipamento Ridgid, até{' '}
          <a href="/detecao-fugas-agua-camera" className="text-[#0e7490] font-bold hover:underline">deteção de fugas com câmara térmica</a> sem partir paredes. Realizamos{' '}
          <a href="/arranjacao-esquentadores-caldeiras" className="text-[#0e7490] font-bold hover:underline">arranjo de esquentadores e caldeiras</a>,{' '}
          <a href="/canalizacao-nova-construcao" className="text-[#0e7490] font-bold hover:underline">canalização nova para construção</a>,{' '}
          <a href="/instalacao-casa-banho-completa" className="text-[#0e7490] font-bold hover:underline">instalação completa de casa de banho</a> e{' '}
          <a href="/manutencao-preventiva-canalizacao" className="text-[#0e7490] font-bold hover:underline">manutenção preventiva</a>. Consulte a nossa{' '}
          <a href="/tecnologia-premium" className="text-[#0e7490] font-bold hover:underline">tecnologia premium</a> e{' '}
          <a href="/galeria" className="text-[#0e7490] font-bold hover:underline">galeria de trabalhos</a>.
        </p>

        {/* Urgency Links */}
        <h2 className="text-3xl font-black mb-6 text-center">🚨 Canalizador Urgente 24h</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { href: '/canalizador-urgente-braganca', label: '🚨 Urgente Bragança' },
            { href: '/canalizador-urgente-vila-real', label: '🚨 Urgente Vila Real' },
            { href: '/canalizador-urgente-mirandela', label: '🚨 Urgente Mirandela' },
            { href: '/canalizador-urgente-chaves', label: '🚨 Urgente Chaves' },
            { href: '/canalizador-urgente-macedo', label: '🚨 Urgente Macedo' },
            { href: '/canalizador-urgente-lamego', label: '🚨 Urgente Lamego' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-block bg-blue-50 border-2 border-[#0e7490] px-5 py-3 rounded-lg text-[#0e7490] font-bold hover:bg-[#0e7490] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Blog Articles */}
        <h2 className="text-3xl font-black mb-6 text-center">📰 Artigos Recentes do Blog</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { href: '/blog/fuga-agua-casa-o-que-fazer', title: 'Fuga de Água: O Que Fazer?', desc: 'Guia urgente passo a passo para minimizar danos.' },
            { href: '/blog/sinais-fugas-agua-escondidas', title: 'Sinais de Fugas Escondidas', desc: 'Como detetar fugas invisíveis na sua casa.' },
            { href: '/blog/sanita-entupida-o-que-fazer', title: 'Sanita Entupida: Soluções', desc: 'Métodos caseiros e quando chamar profissional.' },
            { href: '/blog/manutencao-esquentador-guia', title: 'Manutenção do Esquentador', desc: 'Guia completo para manter o esquentador.' },
            { href: '/blog/cano-rebentado-urgencia-o-que-fazer', title: 'Cano Rebentado: Urgência', desc: 'O que fazer nos primeiros minutos.' },
            { href: '/blog/detecao-fugas-nao-invasiva', title: 'Deteção Não Invasiva', desc: 'Câmara térmica e UV sem partir paredes.' },
          ].map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="block bg-white p-4 rounded-lg border-l-4 border-[#0e7490] shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-bold text-[#0e7490] block mb-1">{article.title}</span>
              <span className="text-sm text-gray-600">{article.desc}</span>
            </a>
          ))}
        </div>
        <p className="text-center">
          <a href="/blog/" className="text-[#0e7490] font-bold text-lg hover:underline">
            Ver todos os artigos do blog →
          </a>
        </p>

        {/* City-specific services */}
        <h2 className="text-3xl font-black mb-6 mt-12 text-center">🏗️ Serviços por Cidade</h2>
        <p className="text-gray-700 text-center leading-relaxed max-w-4xl mx-auto">
          <a href="/desentupimentos-braganca" className="text-[#0e7490] hover:underline">Desentupimentos em Bragança</a> •{' '}
          <a href="/desentupimentos-mirandela" className="text-[#0e7490] hover:underline">Desentupimentos em Mirandela</a> •{' '}
          <a href="/desentupimentos-vila-real" className="text-[#0e7490] hover:underline">Desentupimentos em Vila Real</a> •{' '}
          <a href="/fugas-agua-braganca" className="text-[#0e7490] hover:underline">Fugas de Água em Bragança</a> •{' '}
          <a href="/fugas-agua-mirandela" className="text-[#0e7490] hover:underline">Fugas de Água em Mirandela</a> •{' '}
          <a href="/fugas-agua-vila-real" className="text-[#0e7490] hover:underline">Fugas de Água em Vila Real</a> •{' '}
          <a href="/esquentadores-braganca" className="text-[#0e7490] hover:underline">Esquentadores em Bragança</a> •{' '}
          <a href="/esquentadores-vila-real" className="text-[#0e7490] hover:underline">Esquentadores em Vila Real</a> •{' '}
          <a href="/canalizacao-nova-braganca" className="text-[#0e7490] hover:underline">Canalização Nova em Bragança</a> •{' '}
          <a href="/canalizacao-nova-vila-real" className="text-[#0e7490] hover:underline">Canalização Nova em Vila Real</a>
        </p>
      </div>
    </section>
  );
}
