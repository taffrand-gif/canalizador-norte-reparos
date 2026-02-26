// Página principal otimizada para SEO e conversões
import Header from '@/components/Header';
import InnovativeHero from '@/components/InnovativeHero';
import TrustBanner from '@/components/TrustBanner';
import OptimizedServices from '@/components/OptimizedServices';
import PriceTable from '@/components/PriceTable';
import FAQ from '@/components/FAQ';
import Trabalhos from '@/components/Trabalhos';
import LatestBlog from '@/components/LatestBlog';
import Equipa from '@/components/Equipa';
import Testimonials from '@/components/Testimonials';
import GoogleReviews from '@/components/GoogleReviews';
import Blog from '@/components/Blog';
import ZonaIntervencao from '@/components/ZonaIntervencao';
import ContactForm from '@/components/ContactForm';
import Contactos from '@/components/Contactos';
import Footer from '@/components/Footer';

import SEOHead from '@/components/SEOHead';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useSite } from '@/contexts/SiteContext';

export default function OptimizedHome() {
  const { config } = useSite();

  return (
    <>
      <SEOHead />
      
      <Header />
      <main>
      <InnovativeHero />
      <TrustBanner />
      <OptimizedServices />
      
      {/* Section tarifs transparents */}
      <PriceTable />
      
      {/* Section trabalhos */}
      <Trabalhos />
      
      {/* Últimos Artigos do Blog */}
      <LatestBlog />
      
      {/* Section equipa */}
      <Equipa />
      
      {/* Section FAQ optimisée */}
      <section className="py-20 bg-white">
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
      
      {/* Avaliações Google */}
      <GoogleReviews />
      
      {/* Section blog */}
      <Blog />
      
      {/* Section zona de intervenção */}
      <ZonaIntervencao />
      
      {/* Formulário de contacto rápido */}
      <ContactForm />
      
      {/* Section contact */}
      <Contactos />
      </main>
      <Footer />
      
      <ScrollToTop />
    </>
  );
}
