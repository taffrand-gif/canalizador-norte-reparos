import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SiteProvider } from "./contexts/SiteContext";
import FloatingCTA from "./components/FloatingCTA";
import OptimizedHome from "./pages/OptimizedHome";
import Servicos from "./pages/Servicos";
import Chaves from "./pages/cidades/Chaves";
import Braganca from "./pages/cidades/Braganca";
import Mirandela from "./pages/cidades/Mirandela";
import MacedoCavaleiros from "./pages/cidades/MacedoCavaleiros";
import Valpacos from "./pages/cidades/Valpacos";
import Vinhais from "./pages/cidades/Vinhais";
import MirandaDouro from "./pages/cidades/MirandaDouro";
import Mogadouro from "./pages/cidades/Mogadouro";
import TorreMoncorvo from "./pages/cidades/TorreMoncorvo";
import FreixoEspadaCinta from "./pages/cidades/FreixoEspadaCinta";
import BlogIndex from "./pages/blog/BlogIndex";
import ComoDesentupirLavaLoica from "./pages/blog/ComoDesentupirLavaLoica";
import EvitarFugasAguaPrevencao from "./pages/blog/EvitarFugasAguaPrevencao";
import EsquentadorVsTermoacumulador from "./pages/blog/EsquentadorVsTermoacumulador";
import SinaisFugasAgua from "./pages/blog/SinaisFugasAgua";
import ManutencaoEsquentador from "./pages/blog/ManutencaoEsquentador";
import DesentupirWCMetodos from "./pages/blog/DesentupirWCMetodos";


function Router() {
  return (
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
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
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
            <Router />
            <FloatingCTA />
          </TooltipProvider>
        </SiteProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
