// Configuration for Norte-Reparosuminação LED',
        text: 'Instalaram iluminação LED em toda a casa. Ficou linda e a conta de luz já baixou 60%! Fizeram projeto de iluminação gratuito. Profissionais excelentes.',
        rating: 5,
      },
    ],
    
    company: {
      fullName: 'Staff Seekers — Electricista Profissional',
      shortDescription: 'Electricista certificado ao seu serviço em Trás-os-Montes.',
      longDescription: 'A Staff Seekers presta serviços de eletricidade profissional em toda a região de Trás-os-Montes. Instalação, assistência e manutenção técnica de sistemas elétricos, com deslocação ao domicílio dos clientes, todos os dias do ano, incluindo fins de semana e feriados.',
      coverage: 'Trás-os-Montes — Distrito de Bragança e região',
      yearEstablished: '2015',
    },
    
    seo: {
      keywords: ['electricista', 'bragança', 'trás-os-montes', 'macedo de cavaleiros', 'quadro elétrico', 'curto-circuito', 'certificação CERTIEL', 'electricista urgente', 'instalação elétrica'],
      ogImage: '/images-optimized/hero/hero-electrician-portugal.jpg',
    },
  },
};

// Helper function to get current site config based on environment or URL
export function getCurrentSiteConfig(): SiteConfig {
  // Detect site based on hostname
  if (typeof window === 'undefined') {
    // Server-side rendering or build time - return default
    return siteConfigs['staff-seekers'];
  }
  
  const hostname = window.location.hostname;
  
  if (hostname.includes('staff-seekers')) {
    return siteConfigs['staff-seekers'];
  }
  
  if (hostname.includes('norte-reparos')) {
    return siteConfigs['norte-reparos'];
  }
  
  // Default to staff-seekers (primary domain)
  return siteConfigs['staff-seekers'];
}
