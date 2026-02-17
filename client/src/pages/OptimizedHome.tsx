// Page d'accueil optimisée pour SEO et conversions
// Structure optimisée selon les meilleures pratiques:
// 1. Hero section avec CTA forts
// 2. Services avec images générées
// 3. FAQ optimisée pour featured snippets
// 4. Testemunhos reais
// 5. Contact simple et efficace

import Header from '@/components/Header';
import InnovativeHero from '@/components/InnovativeHero';
import OptimizedServices from '@/components/OptimizedServices';
import PriceTable from '@/components/PriceTable';
import FAQ from '@/components/FAQ';
import Trabalhos from '@/components/Trabalhos';
import Equipa from '@/components/Equipa';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import ZonaIntervencao from '@/components/ZonaIntervencao';
import Contactos from '@/components/Contactos';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import FloatingCTA from '@/components/FloatingCTA';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useSite } from '@/contexts/SiteContext';
import { useEffect } from 'react';

export default function OptimizedHome() {
  const { config } = useSite();

  // Update document title and meta tags
  // Meta tags are handled by SEOHead component

  return (
    <>
      <SEOHead />
      <StructuredData />
      
      <Header />
      <InnovativeHero />
      <OptimizedServices />
      
      {/* Section tarifs transparents */}
      <PriceTable />
      
      {/* Section trabalhos */}
      <Trabalhos />
      
      {/* Section equipa */}
      <Equipa />
      
      {/* Section FAQ optimisée */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes sobre <span className="text-blue-600">Serviços de Canalização</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tire as suas dúvidas sobre os nossos serviços de canalização
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>
      
      {/* Section témoignages */}
      <Testimonials />
      
      {/* Section blog */}
      <Blog />
      
      {/* Section zona de intervenção */}
      <ZonaIntervencao />
      
      {/* Section contact */}
      <Contactos />
      
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
      <FloatingCTA />
    </>
  );
}