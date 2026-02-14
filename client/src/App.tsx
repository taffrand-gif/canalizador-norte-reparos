import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SiteProvider } from "./contexts/SiteContext";
import OptimizedHome from "./pages/OptimizedHome";
import Servicos from "./pages/Servicos";
import Chaves from "./pages/cidades/Chaves";
import Braganca from "./pages/cidades/Braganca";
import Mirandela from "./pages/cidades/Mirandela";
import MacedoCavaleiros from "./pages/cidades/MacedoCavaleiros";
import Valpacos from "./pages/cidades/Valpacos";
import BlogIndex from "./pages/blog/BlogIndex";
import ComoDesentupirLavaLoica from "./pages/blog/ComoDesentupirLavaLoica";
import EvitarFugasAguaPrevencao from "./pages/blog/EvitarFugasAguaPrevencao";
import EsquentadorVsTermoacumulador from "./pages/blog/EsquentadorVsTermoacumulador";


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
      <Route path={"/blog"} component={BlogIndex} />
      <Route path={"/blog/como-desentupir-lava-loica-passos"} component={ComoDesentupirLavaLoica} />
      <Route path={"/blog/evitar-fugas-agua-prevencao"} component={EvitarFugasAguaPrevencao} />
      <Route path={"/blog/esquentador-vs-termoacumulador"} component={EsquentadorVsTermoacumulador} />
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
          </TooltipProvider>
        </SiteProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
