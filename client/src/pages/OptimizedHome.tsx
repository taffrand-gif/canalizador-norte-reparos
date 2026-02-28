// Página principal otimizada para SEO e conversões
import Header from '@/components/Header';
import InnovativeHero from '@/components/InnovativeHero';
import PremiumBar from '@/components/PremiumBar';
import TrustBanner from '@/components/TrustBanner';
import Diagnostico from '@/components/Diagnostico';
import OptimizedServices from '@/components/OptimizedServices';
import StatsCounters from '@/components/StatsCounters';
import CalculadorPreco from '@/components/CalculadorPreco';
import PriceTable from '@/components/PriceTable';
import FAQ from '@/components/FAQ';
import Trabalhos from '@/components/Trabalhos';
import LatestBlog from '@/components/LatestBlog';
import Equipa from '@/components/Equipa';
import Garantias from '@/components/Garantias';
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
      <PremiumBar />
      <InnovativeHero />
      <TrustBanner />
      <Diagnostico />
      <OptimizedServices />
      <StatsCounters />
      
      <CalculadorPreco />
      
      {/* Secção tabela de preços */}
      <PriceTable />
      
      {/* Secção Zona de Intervenção */}
      <ZonaIntervencao />
      
      {/* Secção Equipa */}
      <Equipa />
      <Garantias />
      
      {/* Secção Trabalhos */}
      <Trabalhos />
      
      {/* Últimos Artigos do Blog */}
      <LatestBlog />
      
      {/* Secção FAQ */}
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
      
      {/* Secção testemunhos */}
      <Testimonials />
      
      {/* Avaliações Google */}
      <GoogleReviews />
      
      {/* Secção Blog */}
      <Blog />
      
      {/* Formulário de contacto rápido */}
      <ContactForm />
      
      {/* Secção contactos */}
      <Contactos />
      </main>
      <Footer />
      
      <ScrollToTop />
    </>
  );
}
