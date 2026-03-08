// Topic Clusters Configuration for Norte Reparos
// Implements pillar page + cluster content strategy for SEO

export interface ClusterPage {
  slug: string;
  title: string;
  keywords: string[];
  targetSnippet?: string;
}

export interface TopicCluster {
  pillarSlug: string;
  pillarTitle: string;
  pillarKeyword: string;
  clusterPages: ClusterPage[];
}

// Canalizador Topic Clusters
export const canalizadorClusters: TopicCluster[] = [
  {
    pillarSlug: 'arranjacao-fugas-agua',
    pillarTitle: 'Arranjo de Fugas de Água: Guia Completo 2026',
    pillarKeyword: 'arranjo fugas água',
    clusterPages: [
      {
        slug: 'como-detetar-fuga-agua',
        title: 'Como Detetar Fuga de Água: 7 Sinais de Alerta',
        keywords: ['detetar fuga água', 'sinais fuga água', 'identificar fuga'],
        targetSnippet: 'Como detetar fuga de água? 7 sinais: 1) Conta água elevada 2) Manchas humidade 3) Som água corrente 4) Contador sempre a rodar 5) Pressão fraca 6) Cheiro mofo 7) Paredes húmidas'
      },
      {
        slug: 'custo-arranjacao-fuga-agua',
        title: 'Quanto Custa Arranjar Fuga de Água em Portugal 2026',
        keywords: ['custo arranjo fuga', 'preço arranjar fuga', 'orçamento fuga água'],
        targetSnippet: 'Custo arranjo fuga água: Fuga simples €80-150, Fuga canalização enterrada €200-400, Fuga aquecimento central €150-300. Inclui mão-obra, materiais e garantia 2 anos.'
      },
      {
        slug: 'fuga-agua-urgente-24h',
        title: 'Fuga de Água Urgente: Serviço 24h em Trás-os-Montes',
        keywords: ['fuga água urgente', 'canalizador 24h', 'emergência fuga'],
        targetSnippet: 'Fuga água urgente? Ligue 928 484 451. Técnico em 30min, disponível 24h/7d em Bragança, Mirandela, Macedo. Arranjo imediata, garantia 2 anos.'
      },
      {
        slug: 'prevenir-fugas-agua',
        title: 'Como Prevenir Fugas de Água: 10 Dicas Essenciais',
        keywords: ['prevenir fugas água', 'evitar fugas', 'manutenção canalização'],
        targetSnippet: 'Prevenir fugas água: 1) Inspeção anual 2) Trocar juntas antigas 3) Isolar tubos inverno 4) Verificar pressão 5) Limpar filtros 6) Substituir flexíveis 7) Manutenção esquentador'
      }
    ]
  },
  {
    pillarSlug: 'aquecimento-central',
    pillarTitle: 'Aquecimento Central: Instalação, Manutenção e Arranjo',
    pillarKeyword: 'aquecimento central',
    clusterPages: [
      {
        slug: 'instalar-aquecimento-central-custo',
        title: 'Instalar Aquecimento Central: Preços e Tipos 2026',
        keywords: ['instalar aquecimento central', 'preço aquecimento', 'custo instalação'],
        targetSnippet: 'Custo instalar aquecimento central: Caldeira gás €2000-4000, Bomba calor €3000-6000, Piso radiante €40-60/m². Inclui equipamento, instalação e certificação.'
      },
      {
        slug: 'manutencao-aquecimento-central',
        title: 'Manutenção Aquecimento Central: Checklist Anual',
        keywords: ['manutenção aquecimento', 'revisão caldeira', 'limpeza radiadores'],
        targetSnippet: 'Manutenção aquecimento central anual: 1) Revisão caldeira 2) Purga radiadores 3) Verificar pressão 4) Limpar filtros 5) Testar termostato. Custo: €80-120.'
      }
    ]
  },
  {
    pillarSlug: 'certificacao-gas',
    pillarTitle: 'Certificação de Gás: Guia Completo DGEG 2026',
    pillarKeyword: 'certificação gás',
    clusterPages: [
      {
        slug: 'certificado-gas-obrigatorio',
        title: 'Certificado de Gás é Obrigatório? Quando Precisa',
        keywords: ['certificado gás obrigatório', 'certificação DGEG', 'inspeção gás'],
        targetSnippet: 'Certificado gás obrigatório: Sim, para venda/arrendamento, instalação nova, alteração sistema. Válido 10 anos. Multa sem certificado: €1000-10000.'
      },
      {
        slug: 'custo-certificado-gas',
        title: 'Quanto Custa Certificado de Gás em Portugal 2026',
        keywords: ['custo certificado gás', 'preço certificação', 'orçamento DGEG'],
        targetSnippet: 'Custo certificado gás: €150-300 dependendo complexidade. Inclui inspeção, testes segurança, emissão certificado DGEG. Prazo: 3-5 dias úteis.'
      }
    ]
  }
];

// Eletricista Topic Clusters
export const eletricistaClusters: TopicCluster[] = [
  {
    pillarSlug: 'certificacao-eletrica',
    pillarTitle: 'Certificação Elétrica ITED: Guia Completo 2026',
    pillarKeyword: 'certificação elétrica',
    clusterPages: [
      {
        slug: 'certificado-ited-obrigatorio',
        title: 'Certificado ITED é Obrigatório? Quando Precisa',
        keywords: ['certificado ITED obrigatório', 'certificação elétrica', 'inspeção DGEG'],
        targetSnippet: 'Certificado ITED obrigatório: Sim, para venda/arrendamento, instalação nova, alteração quadro. Válido 10 anos. Multa sem certificado: €1000-10000.'
      },
      {
        slug: 'custo-certificado-ited',
        title: 'Quanto Custa Certificado ITED em Portugal 2026',
        keywords: ['custo certificado ITED', 'preço certificação', 'orçamento elétrico'],
        targetSnippet: 'Custo certificado ITED: €200-400 dependendo área e complexidade. Inclui inspeção, testes, termo responsabilidade, registo DGEG. Prazo: 5-7 dias.'
      },
      {
        slug: 'como-obter-certificado-ited',
        title: 'Como Obter Certificado ITED: Passo a Passo',
        keywords: ['obter certificado ITED', 'processo certificação', 'documentos necessários'],
        targetSnippet: 'Obter certificado ITED: 1) Contactar eletricista certificado 2) Agendar inspeção 3) Corrigir não-conformidades 4) Emissão termo responsabilidade 5) Registo DGEG online'
      }
    ]
  },
  {
    pillarSlug: 'quadro-eletrico',
    pillarTitle: 'Quadro Elétrico: Instalação, Manutenção e Segurança',
    pillarKeyword: 'quadro elétrico',
    clusterPages: [
      {
        slug: 'trocar-quadro-eletrico-custo',
        title: 'Trocar Quadro Elétrico: Preços e Quando Fazer',
        keywords: ['trocar quadro elétrico', 'substituir quadro', 'custo quadro novo'],
        targetSnippet: 'Custo trocar quadro elétrico: €300-800 dependendo potência e disjuntores. Trocar se: +20 anos, disjuntores disparam, sem diferencial, fusíveis antigos.'
      },
      {
        slug: 'disjuntor-dispara-causas',
        title: 'Disjuntor Dispara Sempre: 7 Causas e Soluções',
        keywords: ['disjuntor dispara', 'disjuntor salta', 'curto-circuito'],
        targetSnippet: 'Disjuntor dispara causas: 1) Sobrecarga circuito 2) Curto-circuito 3) Fuga terra 4) Eletrodoméstico avariado 5) Humidade 6) Disjuntor defeituoso 7) Instalação antiga'
      }
    ]
  },
  {
    pillarSlug: 'iluminacao-led',
    pillarTitle: 'Iluminação LED: Poupança, Instalação e Vantagens',
    pillarKeyword: 'iluminação LED',
    clusterPages: [
      {
        slug: 'poupar-luz-led',
        title: 'Quanto Poupa com LED: Cálculo Real 2026',
        keywords: ['poupar luz LED', 'economia LED', 'LED vs incandescente'],
        targetSnippet: 'Poupança LED: 85% menos consumo vs incandescente, 50% vs halogéneo. 10 lâmpadas LED poupam €200/ano. ROI em 8-12 meses. Duração: 25000h vs 1000h.'
      },
      {
        slug: 'instalar-iluminacao-led',
        title: 'Instalar Iluminação LED: Guia Completo e Preços',
        keywords: ['instalar LED', 'mudar para LED', 'custo instalação LED'],
        targetSnippet: 'Instalar iluminação LED: €8-15/lâmpada incluindo material e instalação. Compatível com instalação existente. Garantia 2 anos. Certificação incluída.'
      }
    ]
  }
];

// Helper function to get all cluster pages for internal linking
export function getAllClusterPages(serviceType: 'canalizador' | 'eletricista'): ClusterPage[] {
  const clusters = serviceType === 'canalizador' ? canalizadorClusters : eletricistaClusters;
  return clusters.flatMap(cluster => cluster.clusterPages);
}

// Helper function to get related cluster pages
export function getRelatedClusterPages(currentSlug: string, serviceType: 'canalizador' | 'eletricista', limit: number = 3): ClusterPage[] {
  const clusters = serviceType === 'canalizador' ? canalizadorClusters : eletricistaClusters;

  // Find the cluster containing current page
  const currentCluster = clusters.find(cluster =>
    cluster.clusterPages.some(page => page.slug === currentSlug)
  );

  if (!currentCluster) return [];

  // Return other pages from same cluster
  return currentCluster.clusterPages
    .filter(page => page.slug !== currentSlug)
    .slice(0, limit);
}
