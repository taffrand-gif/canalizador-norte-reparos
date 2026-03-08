// Componente RelatedArticles - Mostra os artigos relacionados para o linking interno SEO
import { Link } from 'wouter';

interface RelatedArticlesProps {
  currentArticleSlug: string;
}

export default function RelatedArticles({ currentArticleSlug }: RelatedArticlesProps) {
  // Lista dos artigos com seus slugs e descrições
  const allArticles = [
    { 
      slug: 'como-prevenir-canos-rebentados-inverno', 
      title: 'Como Prevenir Canos Rebentados no Inverno', 
      excerpt: 'Guia completo para proteger a canalização durante o inverno rigoroso de Trás-os-Montes.',
      category: 'Manutenção'
    },
    { 
      slug: 'custo-canalizador-tras-os-montes-precos', 
      title: 'Custo de Canalizador em Trás-os-Montes', 
      excerpt: 'Tabela de preços atualizada para serviços de canalização na região norte.',
      category: 'Preços'
    },
    { 
      slug: 'arranjacao-caldeira-esquentador-manutencao', 
      title: 'Arranjo de Caldeira e Esquentador', 
      excerpt: 'Manutenção preventiva e arranjo de sistemas de aquecimento de água.',
      category: 'Arranjo'
    },
    { 
      slug: 'evitar-fugas-agua-prevencao', 
      title: 'Como Evitar Fugras de Água', 
      excerpt: 'Dicas práticas para prevenir fugas de água e economizar na fatura.',
      category: 'Prevenção'
    },
    { 
      slug: 'esquentador-vs-termoacumulador', 
      title: 'Esquentador vs Termoacumulador', 
      excerpt: 'Comparação completa para escolher o melhor sistema de aquecimento de água.',
      category: 'Equipamentos'
    },
    { 
      slug: 'desentupir-wc-metodos', 
      title: 'Como Desentupir WC - Métodos', 
      excerpt: 'Técnicas profissionais para desentupir sanitários sem danificar a canalização.',
      category: 'Desentupimento'
    },
    { 
      slug: 'sinais-fugas-agua', 
      title: 'Sinais de Fugras de Água Ocultas', 
      excerpt: 'Como identificar fugas de água antes que causem danos estruturais.',
      category: 'Diagnóstico'
    },
    { 
      slug: 'manutencao-esquentador', 
      title: 'Manutenção Preventiva do Esquentador', 
      excerpt: 'Calendário de manutenção para prolongar a vida útil do esquentador.',
      category: 'Manutenção'
    },
    { 
      slug: 'como-desentupir-lava-loica', 
      title: 'Como Desentupir Lava-Loiça', 
      excerpt: 'Soluções para desentupir pias e lava-loiças de forma eficaz.',
      category: 'Desentupimento'
    },
  ];

  // Filtrar para excluir o artigo atual
  const relatedArticles = allArticles
    .filter(article => article.slug !== currentArticleSlug)
    .slice(0, 3); // Pegar 3 artigos no máximo

  if (relatedArticles.length === 0) return null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Artigos relacionados:
          </h2>
          <p className="text-gray-600">
            Continue a aprender sobre canalização e manutenção doméstica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedArticles.map((article) => (
            <Link 
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-blue-500 h-full">
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Ler artigo</span>
                    <svg 
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/blog">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Ver todos os artigos do blog
            </button>
          </Link>
          <p className="text-gray-600 text-sm mt-4">
            <strong>SEO Tip:</strong> Links internos entre artigos aumentam o tempo de permanência e melhoram a autoridade do domínio.
          </p>
        </div>
      </div>
    </section>
  );
}