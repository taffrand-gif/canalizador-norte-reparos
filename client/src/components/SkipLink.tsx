// Componente SkipLink para melhorar a navegação por teclado
// Permite aos utilizadores de teclado saltar diretamente para o conteúdo principal
export default function SkipLink() {
 return (
 <a
 href="#main-content"
 className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:font-bold focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
 >
 Saltar para o conteúdo principal
 </a>
 );
}
