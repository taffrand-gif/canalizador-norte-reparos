import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SiteProvider } from "./contexts/SiteContext";
import FloatingCTA from "./components/FloatingCTA";
import StructuredData from "./components/StructuredData";
import OptimizedHome from "./pages/OptimizedHome";

// Lazy load all pages except homepage for better LCP
const Servicos = lazy(() => import("@/pages/Servicos"));
const Desentupimentos = lazy(() => import("@/pages/Desentupimentos"));
const ReparacaoFugasAgua = lazy(() => import("@/pages/ReparacaoFugasAgua"));
const InstalacaoCanalizacao = lazy(() => import("@/pages/InstalacaoCanalizacao"));
const ReparacaoEsquentadores = lazy(() => import("@/pages/ReparacaoEsquentadores"));
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
const BlogIndex = lazy(() => import("@/pages/blog/BlogIndex"));
const ComoDesentupirLavaLoica = lazy(() => import("@/pages/blog/ComoDesentupirLavaLoica"));
const EvitarFugasAguaPrevencao = lazy(() => import("@/pages/blog/EvitarFugasAguaPrevencao"));
const EsquentadorVsTermoacumulador = lazy(() => import("@/pages/blog/EsquentadorVsTermoacumulador"));
const SinaisFugasAgua = lazy(() => import("@/pages/blog/SinaisFugasAgua"));
const ManutencaoEsquentador = lazy(() => import("@/pages/blog/ManutencaoEsquentador"));
const DesentupirWCMetodos = lazy(() => import("@/pages/blog/DesentupirWCMetodos"));
const ComoPrevenirCanosRebentadosInverno = lazy(() => import("@/pages/blog/ComoPrevenirCanosRebentadosInverno"));
const CustoCanalizadorTrasOsMontesPrecos = lazy(() => import("@/pages/blog/CustoCanalizadorTrasOsMontesPrecos"));
const ReparacaoCaldeiraEsquentadorManutencao = lazy(() => import("@/pages/blog/ReparacaoCaldeiraEsquentadorManutencao"));

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
        <Route path={"/blog"} component={BlogIndex} />
        <Route path={"/blog/como-desentupir-lava-loica-passos"} component={ComoDesentupirLavaLoica} />
        <Route path={"/blog/evitar-fugas-agua-prevencao"} component={EvitarFugasAguaPrevencao} />
        <Route path={"/blog/esquentador-vs-termoacumulador"} component={EsquentadorVsTermoacumulador} />
        <Route path={"/blog/sinais-fugas-agua-escondidas"} component={SinaisFugasAgua} />
        <Route path={"/blog/manutencao-esquentador-guia"} component={ManutencaoEsquentador} />
        <Route path={"/blog/desentupir-wc-metodos-caseiros"} component={DesentupirWCMetodos} />
        <Route path={"/blog/como-prevenir-canos-rebentados-inverno"} component={ComoPrevenirCanosRebentadosInverno} />
        <Route path={"/blog/custo-canalizador-tras-os-montes-precos"} component={CustoCanalizadorTrasOsMontesPrecos} />
        <Route path={"/blog/reparacao-caldeira-esquentador-manutencao"} component={ReparacaoCaldeiraEsquentadorManutencao} />
        <Route path={"/faq"} component={FAQPage} />
        <Route path={"/404"} component={NotFound} />
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
      <ThemeProvider defaultTheme="light">
        <SiteProvider>
          <TooltipProvider>
            <Toaster />
            <StructuredData />
            <Router />
            <FloatingCTA />
          </TooltipProvider>
        </SiteProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
