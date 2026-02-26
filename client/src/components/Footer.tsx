// Footer com navegação funcional e informações de contacto
import { useSite } from '@/contexts/SiteContext';
import { Phone, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  const { config } = useSite();

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="text-white py-16"
      style={{ backgroundColor: config.colors.primaryDark }}
    >
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Informação da empresa */}
          <div>
            <h3 className="text-2xl font-black mb-4">{config.name}</h3>
            <p className="text-gray-200 mb-4">
              {config.company.shortDescription}
            </p>
            <p className="text-gray-300 text-sm mb-4">
              Cobertura em toda a região de {config.company.coverage}.
            </p>
            <p className="text-white text-sm font-bold italic border-l-2 border-white pl-3">
              "Orgulho Transmontano. Aqui para servir o Norte."
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-black mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/servicos', label: 'Serviços' },
                { href: '/blog/', label: 'Blog' },
                { href: '/faq', label: 'FAQ' },
                { href: '/galeria', label: 'Galeria' },
                { href: '/tecnologia-premium', label: 'Tecnologia' },
                { href: '/zonas', label: 'Zonas' },
                { href: '/contactos', label: 'Contactos' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-black mt-6 mb-3">Serviços</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/desentupimentos-profissionais-tras-os-montes" className="text-gray-300 hover:text-white">Desentupimentos</a></li>
              <li><a href="/detecao-fugas-agua-camera" className="text-gray-300 hover:text-white">Deteção de Fugas</a></li>
              <li><a href="/reparacao-esquentadores-caldeiras" className="text-gray-300 hover:text-white">Esquentadores</a></li>
              <li><a href="/canalizacao-nova-construcao" className="text-gray-300 hover:text-white">Canalização Nova</a></li>
              <li><a href="/instalacao-casa-banho-completa" className="text-gray-300 hover:text-white">Casa de Banho</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-black mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold">Telefone:</p>
                  <a 
                    href={`tel:${config.phone.replace(/\s/g, '')}`}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {config.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold">Horário:</p>
                  <p className="text-gray-200">24 horas por dia, 7 dias por semana</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold">Zona de Cobertura:</p>
                  <p className="text-gray-200">Trás-os-Montes — Bragança, Macedo de Cavaleiros, Mirandela e região</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t-2 border-white/20 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} {config.name}. Todos os direitos reservados.
          <div className="mt-2 text-xs text-gray-200">
            Morada: Macedo de Cavaleiros, Trás-os-Montes, Portugal
          </div>
          <div className="mt-3 text-xs text-gray-300">
            Precisa de eletricista? <a href="https://staff-seekers.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Eletricista 24h Trás-os-Montes</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
