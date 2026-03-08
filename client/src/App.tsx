import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SiteProvider } from "./contexts/SiteContext";
import { LocationProvider } from "./contexts/LocationContext";
import FloatingCTA from "./components/FloatingCTA";
import SocialProofTicker from "./components/SocialProofTicker";
import MobileStickyBar from "./components/MobileStickyBar";
import StructuredData from "./components/StructuredData";
import SkipLink from "./components/SkipLink";
import OptimizedHome from "./pages/OptimizedHome";
import UrgencyIndicator from '@/components/UrgencyIndicator';

// Lazy load conversion widgets (below-fold)
const ExitIntentPopup = lazy(() => import('@/components/ExitIntentPopup'));
const QuoteCalculator = lazy(() => import('@/components/QuoteCalculator'));
const LocationDetector = lazy(() => import('@/components/LocationDetector'));

// Lazy load all pages except homepage for better LCP
const Servicos = lazy(() => import("@/pages/Servicos"));
const Desentupimentos = lazy(() => import("@/pages/Desentupimentos"));
const ArranjoFugasAgua = lazy(() => import("@/pages/ArranjoFugasAgua"));
const InstalacaoCanalizacao = lazy(() => import("@/pages/InstalacaoCanalizacao"));
const ArranjoEsquentadores = lazy(() => import("@/pages/ArranjoEsquentadores"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const FAQPage = lazy(() => import("@/pages/FAQ"));
const Chaves = lazy(() => import("@/pages/cidades/Chaves"));
const Braganca = lazy(() => import("@/pages/cidades/Braganca"));
const Mirandela = lazy(() => import("@/pages/cidades/Mirandela"));
const MacedoCavaleiros = lazy(() => import("@/pages/cidades/MacedoCavaleiros"));
const Valpacos = lazy(() => import("@/pages/cidades/Valpacos"));
const Vinhais = lazy(() => import("@/pages/cidades/Vinhais"));
const MirandaDouro = lazy(() => import("@/pages/cidades/MirandaDouro"));
const Mogadouro = lazy(() => import("@/pages/cidades/Mogadouro"));
const TorreMoncorvo = lazy(() => import("@/pages/cidades/TorreMoncorvo"));
const FreixoEspadaCinta = lazy(() => import("@/pages/cidades/FreixoEspadaCinta"));
const VilaReal = lazy(() => import("@/pages/cidades/VilaReal"));
const AlfandegaDaFe = lazy(() => import("@/pages/cidades/AlfandegaDaFe"));
const VilaFlor = lazy(() => import("@/pages/cidades/VilaFlor"));
const CarrazedaDeAnsiaes = lazy(() => import("@/pages/cidades/CarrazedaDeAnsiaes"));
const Vimioso = lazy(() => import("@/pages/cidades/Vimioso"));
const Montalegre = lazy(() => import("@/pages/cidades/Montalegre"));
const Boticas = lazy(() => import("@/pages/cidades/Boticas"));
const Murca = lazy(() => import("@/pages/cidades/Murca"));
const Alijo = lazy(() => import("@/pages/cidades/Alijo"));
const Sabrosa = lazy(() => import("@/pages/cidades/Sabrosa"));
const VilaPouca = lazy(() => import("@/pages/cidades/VilaPouca"));
const RibeiraDePena = lazy(() => import("@/pages/cidades/RibeiraDePena"));
const MondimDeBasto = lazy(() => import("@/pages/cidades/MondimDeBasto"));
const PesoDaRegua = lazy(() => import("@/pages/cidades/PesoDaRegua"));
const Lamego = lazy(() => import("@/pages/cidades/Lamego"));
const MoimentaDaBeira = lazy(() => import("@/pages/cidades/MoimentaDaBeira"));
const VilaNovaFozCoa = lazy(() => import("@/pages/cidades/VilaNovaFozCoa"));
const Sernancelhe = lazy(() => import("@/pages/cidades/Sernancelhe"));
const Penedono = lazy(() => import("@/pages/cidades/Penedono"));
const SaoJoaoDaPesqueira = lazy(() => import("@/pages/cidades/SaoJoaoDaPesqueira"));
const Tabuaco = lazy(() => import("@/pages/cidades/Tabuaco"));
const Armamar = lazy(() => import("@/pages/cidades/Armamar"));
const SantaMartaDePenaguiao = lazy(() => import("@/pages/cidades/SantaMartaDePenaguiao"));
const MesaoFrio = lazy(() => import("@/pages/cidades/MesaoFrio"));
const BlogIndex = lazy(() => import("@/pages/blog/BlogIndex"));
const ComoDesentupirLavaLoica = lazy(() => import("@/pages/blog/ComoDesentupirLavaLoica"));
const EvitarFugasAguaPrevencao = lazy(() => import("@/pages/blog/EvitarFugasAguaPrevencao"));
const EsquentadorVsTermoacumulador = lazy(() => import("@/pages/blog/EsquentadorVsTermoacumulador"));
const SinaisFugasAgua = lazy(() => import("@/pages/blog/SinaisFugasAgua"));
const ManutencaoEsquentador = lazy(() => import("@/pages/blog/ManutencaoEsquentador"));
const DesentupirWCMetodos = lazy(() => import("@/pages/blog/DesentupirWCMetodos"));
const ComoPrevenirCanosRebentadosInverno = lazy(() => import("@/pages/blog/ComoPrevenirCanosRebentadosInverno"));
const CustoCanalizadorTrasOsMontesPrecos = lazy(() => import("@/pages/blog/CustoCanalizadorTrasOsMontesPrecos"));
const ArranjoCaldeiraEsquentadorManutencao = lazy(() => import("@/pages/blog/ArranjoCaldeiraEsquentadorManutencao"));
const InstalacaoCasaBanho = lazy(() => import("@/pages/blog/InstalacaoCasaBanho"));
const SistemaAquecimentoAgua = lazy(() => import("@/pages/blog/SistemaAquecimentoAgua"));
const CanalizacaoCasaAntiga = lazy(() => import("@/pages/blog/CanalizacaoCasaAntiga"));
const PiscinaTanqueAgua = lazy(() => import("@/pages/blog/PiscinaTanqueAgua"));
const PouparAguaCasa = lazy(() => import("@/pages/blog/PouparAguaCasa"));
const ProblemasCanalizacaoInverno = lazy(() => import("@/pages/blog/ProblemasCanalizacaoInverno"));
const Zonas = lazy(() => import("@/pages/Zonas"));
const CityServicePage = lazy(() => import("@/pages/CityServicePage"));
const FreguesiasPage = lazy(() => import("@/pages/FreguesiasPage"));
const ServiceHub = lazy(() => import("@/pages/ServiceHub"));
const TransparencePrix = lazy(() => import("@/pages/TransparencePrix"));

// Emotional Landing Pages (SEO Premium) - Canalizador
const FugaAguaUrgente = lazy(() => import("@/pages/FugaAguaUrgente"));
const SanitaEntupida = lazy(() => import("@/pages/SanitaEntupida"));
const CanoRebentado = lazy(() => import("@/pages/CanoRebentado"));
const EsquentadorAvariado = lazy(() => import("@/pages/EsquentadorAvariado"));
const CheiroMauCanalizacao = lazy(() => import("@/pages/CheiroMauCanalizacao"));

// Emotional Landing Pages (SEO Premium) - Eletricista
const CurtoCircuitoUrgente = lazy(() => import("@/pages/CurtoCircuitoUrgente"));
const DisjuntorDispara = lazy(() => import("@/pages/DisjuntorDispara"));
const TomadaNaoFunciona = lazy(() => import("@/pages/TomadaNaoFunciona"));
const QuadroEletricoAntigo = lazy(() => import("@/pages/QuadroEletricoAntigo"));
const FaltaLuzUrgente = lazy(() => import("@/pages/FaltaLuzUrgente"));

// Commercial Intent Pages (SEO Premium) - Canalizador
const QuantoCustaArranjarAguaCastanha = lazy(() => import("@/pages/QuantoCustaArranjarAguaCastanha"));

// Simple loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2193b0]"></div>
  </div>
);

function Router() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Switch>
        <Route path={"/"} component={OptimizedHome} />
        <Route path={"/servicos"} component={Servicos} />
        <Route path={"/desentupimentos"} component={Desentupimentos} />
        <Route path={"/arranjo-fugas-agua"} component={ArranjoFugasAgua} />
        <Route path={"/instalacao-canalizacao"} component={InstalacaoCanalizacao} />
        <Route path={"/arranjo-esquentadores"} component={ArranjoEsquentadores} />
        <Route path={"/canalizador-chaves"} component={Chaves} />
        <Route path={"/canalizador-braganca"} component={Braganca} />
        <Route path={"/canalizador-mirandela"} component={Mirandela} />
        <Route path={"/canalizador-macedo-de-cavaleiros"} component={MacedoCavaleiros} />
        <Route path={"/canalizador-valpacos"} component={Valpacos} />
        <Route path={"/canalizador-vinhais"} component={Vinhais} />
        <Route path={"/canalizador-miranda-douro"} component={MirandaDouro} />
        <Route path={"/canalizador-mogadouro"} component={Mogadouro} />
        <Route path={"/canalizador-torre-moncorvo"} component={TorreMoncorvo} />
        <Route path={"/canalizador-freixo-espada-cinta"} component={FreixoEspadaCinta} />
        <Route path={"/canalizador-vila-real"} component={VilaReal} />
        <Route path={"/canalizador-alfandega-da-fe"} component={AlfandegaDaFe} />
        <Route path={"/canalizador-vila-flor"} component={VilaFlor} />
        <Route path={"/canalizador-carrazeda-de-ansiaes"} component={CarrazedaDeAnsiaes} />
        <Route path={"/canalizador-vimioso"} component={Vimioso} />
        <Route path={"/canalizador-montalegre"} component={Montalegre} />
        <Route path={"/canalizador-boticas"} component={Boticas} />
        <Route path={"/canalizador-murca"} component={Murca} />
        <Route path={"/canalizador-alijo"} component={Alijo} />
        <Route path={"/canalizador-sabrosa"} component={Sabrosa} />
        <Route path={"/canalizador-vila-pouca-de-aguiar"} component={VilaPouca} />
        <Route path={"/canalizador-ribeira-de-pena"} component={RibeiraDePena} />
        <Route path={"/canalizador-mondim-de-basto"} component={MondimDeBasto} />
        <Route path={"/canalizador-peso-da-regua"} component={PesoDaRegua} />
        <Route path={"/canalizador-lamego"} component={Lamego} />
        <Route path={"/canalizador-moimenta-da-beira"} component={MoimentaDaBeira} />
        <Route path={"/canalizador-vila-nova-foz-coa"} component={VilaNovaFozCoa} />
        <Route path={"/canalizador-sernancelhe"} component={Sernancelhe} />
        <Route path={"/canalizador-penedono"} component={Penedono} />
        <Route path={"/canalizador-sao-joao-da-pesqueira"} component={SaoJoaoDaPesqueira} />
        <Route path={"/canalizador-tabuaco"} component={Tabuaco} />
        <Route path={"/canalizador-armamar"} component={Armamar} />
        <Route path={"/canalizador-santa-marta-de-penaguiao"} component={SantaMartaDePenaguiao} />
        <Route path={"/canalizador-mesao-frio"} component={MesaoFrio} />
        <Route path={"/blog"} component={BlogIndex} />
        <Route path={"/blog/como-desentupir-lava-loica-passos"} component={ComoDesentupirLavaLoica} />
        <Route path={"/blog/evitar-fugas-agua-prevencao"} component={EvitarFugasAguaPrevencao} />
        <Route path={"/blog/esquentador-vs-termoacumulador"} component={EsquentadorVsTermoacumulador} />
        <Route path={"/blog/sinais-fugas-agua-escondidas"} component={SinaisFugasAgua} />
        <Route path={"/blog/manutencao-esquentador-guia"} component={ManutencaoEsquentador} />
        <Route path={"/blog/desentupir-wc-metodos-caseiros"} component={DesentupirWCMetodos} />
        <Route path={"/blog/como-prevenir-canos-rebentados-inverno"} component={ComoPrevenirCanosRebentadosInverno} />
        <Route path={"/blog/custo-canalizador-tras-os-montes-precos"} component={CustoCanalizadorTrasOsMontesPrecos} />
        <Route path={"/blog/arranjo-caldeira-esquentador-manutencao"} component={ArranjoCaldeiraEsquentadorManutencao} />
        <Route path={"/blog/instalacao-casa-banho-completa-guia"} component={InstalacaoCasaBanho} />
        <Route path={"/blog/sistema-aquecimento-agua-melhor-opcao"} component={SistemaAquecimentoAgua} />
        <Route path={"/blog/canalizacao-casa-antiga-renovacao"} component={CanalizacaoCasaAntiga} />
        <Route path={"/blog/piscina-tanque-agua-canalizacao"} component={PiscinaTanqueAgua} />
        <Route path={"/blog/poupar-agua-casa-dicas-praticas"} component={PouparAguaCasa} />
        <Route path={"/blog/problemas-canalizacao-inverno-solucoes"} component={ProblemasCanalizacaoInverno} />
        <Route path={"/faq"} component={FAQPage} />
        <Route path={"/zonas"} component={Zonas} />
        <Route path={"/transparence-prix"} component={TransparencePrix} />
        <Route path={"/404"} component={NotFound} />
        {/* Emotional Landing Pages - SEO Premium - Canalizador */}
        <Route path={"/fuga-agua-urgente"} component={FugaAguaUrgente} />
        <Route path={"/sanita-entupida"} component={SanitaEntupida} />
        <Route path={"/cano-rebentado"} component={CanoRebentado} />
        <Route path={"/esquentador-avariado"} component={EsquentadorAvariado} />
        <Route path={"/cheiro-mau-canalizacao"} component={CheiroMauCanalizacao} />
        {/* Emotional Landing Pages - SEO Premium - Eletricista */}
        <Route path={"/curto-circuito-urgente"} component={CurtoCircuitoUrgente} />
        <Route path={"/disjuntor-dispara"} component={DisjuntorDispara} />
        <Route path={"/tomada-nao-funciona"} component={TomadaNaoFunciona} />
        <Route path={"/quadro-eletrico-antigo"} component={QuadroEletricoAntigo} />
        <Route path={"/falta-luz-urgente"} component={FaltaLuzUrgente} />
        {/* Commercial Intent Pages - SEO Premium - Canalizador */}
        <Route path={"/quanto-custa-arranjar-agua-castanha"} component={QuantoCustaArranjarAguaCastanha} />
        {/* Service hub pages */}
        <Route path={"/fugas-agua"} component={ServiceHub} />
        <Route path={"/desentupimentos"} component={ServiceHub} />
        <Route path={"/esquentadores"} component={ServiceHub} />
        <Route path={"/casas-banho"} component={ServiceHub} />
        <Route path={"/canalizacao"} component={ServiceHub} />
        {/* Dynamic freguesia pages (498 pages) */}
        <Route path={"/:service-:freguesia-:parentCity"} component={FreguesiasPage} />
        {/* Dynamic city-service pages (100+ pages) */}
        <Route path={"/:service-:city"} component={CityServicePage} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider defaultTheme="light">
          <SiteProvider>
            <LocationProvider>
              <TooltipProvider>
                <SkipLink />
                <Toaster />
                <StructuredData />
                <UrgencyIndicator />
                <Suspense fallback={null}>
                  <ExitIntentPopup />
                  <QuoteCalculator />
                  <LocationDetector />
                </Suspense>
                <Router />
                <FloatingCTA />
                <SocialProofTicker />
                <MobileStickyBar />
              </TooltipProvider>
            </LocationProvider>
          </SiteProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
// force rebuild 1772742743
