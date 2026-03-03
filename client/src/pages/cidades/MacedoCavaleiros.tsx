// Page SEO optimisée para "Canalizador Macedo de Cavaleiros"
// 100% unique content, conforme políticas Google

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import SEOHeadEnhanced from '@/components/SEOHeadEnhanced';
import StructuredData from '@/components/StructuredData';
import { useSite } from '@/contexts/SiteContext';
import FAQSection from '@/components/FAQSection';
import { businessInfo, getCityAddress } from '@/shared/napConfig';

export default function MacedoCavaleiros() {
  const { config } = useSite();
  const faqs = [
    {
      question: "Qual o custo de deslocação a Macedo de Cavaleiros?",
      answer: "A deslocação a Macedo de Cavaleiros é de 10€, pois é a nossa sede. Atendemos em menos de 30 minutos. Inclui todo o concelho."
    },
    {
      question: "Fazem urgências 24 horas em Macedo de Cavaleiros?",
      answer: "Sim, atendemos urgências de canalização 24 horas por dia, 7 dias por semana em Macedo de Cavaleiros. Ligue +351 928 484 451 para assistência imediata."
    },
    {
      question: "Fornecem serviço de canalização em Macedo de Cavaleiros?",
      answer: "Sim, emitimos serviço de canalização certificado para venda, arrendamento e legalização de imóveis em Macedo de Cavaleiros e todo o concelho."
    }
  ];


  return (
    <>
      <SEOHeadEnhanced 
        citySlug="macedo-de-cavaleiros"
        pageType="city"
      />
      <StructuredData />
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        {/* Hero section específica de Macedo de Cavaleiros */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <nav className="mb-6 text-blue-200">
                <a href="/" className="hover:text-white">Canalizador Profissional</a> &gt; 
                <a href="/servicos" className="hover:text-white mx-2">Serviços</a> &gt; 
                <span className="ml-2">Macedo de Cavaleiros</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Canalizador Profissional em <span className="text-orange-400">Macedo de Cavaleiros</span>
              </h1>
              
              <p className="text-xl mb-8">
                Serviços de canalizador certificado em Macedo de Cavaleiros e arredores. 
                Especialistas em águas termais e sistemas de aquecimento para a região.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${config.phone}`}
                  className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  📞 Canalizador Macedo de Cavaleiros: {config.phone}
                </a>
                <a
                  href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Macedo de Cavaleiros`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  💬 WhatsApp para Macedo de Cavaleiros
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Macedo de Cavaleiros - Conteúdo Único */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Sobre Macedo de Cavaleiros - Terra da Caça e Agricultura
            </h2>
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-gray-700 mb-4">
                Macedo de Cavaleiros, com cerca de 15.000 habitantes, é uma cidade transmontana situada
                entre as serras de Bornes e Mogadouro. Conhecida como a "Terra da Caça", a cidade é famosa
                pela Albufeira do Azibo, uma das praias fluviais mais premiadas de Portugal, e pela sua
                forte tradição agrícola e pecuária. O castelo medieval domina a paisagem urbana.
              </p>
              <p className="text-gray-700 mb-4">
                A economia local baseia-se fortemente na agricultura (cereais, oliveiras, amendoeiras),
                pecuária (bovinos, ovinos) e turismo rural. Esta vocação agrícola cria necessidades
                específicas em sistemas de água: irrigação de culturas, bebedouros para gado, sistemas
                de lavagem de equipamentos agrícolas e tratamento de águas residuais de explorações
                pecuárias. Muitas propriedades rurais têm furos e poços próprios.
              </p>
              <p className="text-gray-700">
                O clima é tipicamente transmontano, com invernos frios (frequentemente com neve) e verões
                muito quentes e secos. A albufeira do Azibo influencia a humidade local, mas as zonas
                rurais enfrentam problemas de escassez de água no verão. Os sistemas de canalização devem
                ser eficientes e resistentes a variações térmicas extremas.
              </p>
            </div>
          </div>
        </section>

        {/* Bairros Servidos em Macedo de Cavaleiros */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Bairros e Zonas Servidas em Macedo de Cavaleiros
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Centro Urbano</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Praça do Município</li>
                  <li>• Avenida dos Combatentes</li>
                  <li>• Rua Conselheiro Albuquerque</li>
                  <li>• Zona do Castelo</li>
                  <li>• Largo da Feira</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Zonas Residenciais</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bairro de São João</li>
                  <li>• Bairro da Estação</li>
                  <li>• Urbanização Nova</li>
                  <li>• Zona da Escola Secundária</li>
                  <li>• Bairro Social</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Zonas Rurais</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ala</li>
                  <li>• Vilarinho</li>
                  <li>• Podence</li>
                  <li>• Morais</li>
                  <li>• Zona do Azibo</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Porquê Escolher-nos em Macedo de Cavaleiros */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Porquê Escolher-nos em Macedo de Cavaleiros
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600">🏠</span>
                  Sede em Macedo de Cavaleiros
                </h3>
                <p className="text-gray-600">
                  A nossa sede está em Macedo de Cavaleiros, o que significa resposta imediata em menos
                  de 30 minutos para qualquer urgência na cidade. Conhecemos cada rua, cada bairro e
                  as particularidades da rede de água municipal. Temos stock permanente de materiais
                  e equipamento completo sempre disponível. Deslocação apenas 10€.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600">🚜</span>
                  Especialistas em Sistemas Agrícolas
                </h3>
                <p className="text-gray-600">
                  Trabalhamos com dezenas de explorações agrícolas e pecuárias da região. Instalamos
                  sistemas de irrigação gota-a-gota, aspersores, bebedouros automáticos para gado,
                  sistemas de bombagem de furos e poços, e tratamento de águas residuais agrícolas.
                  Conhecemos as necessidades específicas de olivais, amendoais e explorações pecuárias.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600">💧</span>
                  Gestão de Recursos Hídricos
                </h3>
                <p className="text-gray-600">
                  Em zonas rurais com escassez de água no verão, otimizamos sistemas para máxima
                  eficiência. Instalamos reservatórios, sistemas de aproveitamento de águas pluviais,
                  bombas solares para furos, e sistemas de rega automática com temporizadores.
                  Ajudamos a reduzir consumos e aproveitar melhor os recursos disponíveis.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600">🏞️</span>
                  Experiência em Turismo Rural
                </h3>
                <p className="text-gray-600">
                  Com o crescimento do turismo no Azibo e em casas rurais, trabalhamos em unidades
                  de turismo rural, casas de campo e alojamentos locais. Instalamos sistemas de água
                  quente solar, piscinas, jacuzzis, e garantimos conformidade com requisitos de
                  turismo e saúde pública para licenciamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo específico de Macedo de Cavaleiros */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Especialistas em Sistemas de Água para Agricultura em Macedo de Cavaleiros
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-blue-600">🚜</span>
                      Conhecimento em Sistemas de Irrigação
                    </h3>
                    <p className="text-gray-600">
                      Macedo de Cavaleiros é famosa pela sua agricultura e pecuária. Especializamo-nos em:
                      sistemas de canalização para propriedades agrícolas, irrigação de culturas,
                      tratamento de água para gado, e instalações resistentes
                      às exigências do ambiente rural.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <span className="text-blue-600">🏘️</span>
                      Experiência em Propriedades Rurais
                    </h3>
                    <p className="text-gray-600">
                      Trabalhamos em propriedades rurais de Macedo de Cavaleiros, incluindo quintas,
                      herdades e explorações agrícolas. Conhecemos as particularidades das canalizações
                      em zonas rurais e utilizamos técnicas adaptadas para preservar
                      a funcionalidade dos sistemas de água em ambientes agrícolas.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Cobertura em <span className="text-blue-600">Macedo de Cavaleiros</span>
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      'Centro Histórico', 'Santa Maria Maior', 'Madalena', 'Santa Cruz',
                      'Bairro da Estação', 'Bairro do Calvário', 'Urbanização do Pinheiro',
                      'Zona Industrial', 'Vila Verde', 'Tronco', 'Ala', 'Vilarinho'
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-2 text-gray-700">
                        <span className="text-blue-600">📍</span>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      ⏱️ Serviços Específicos para Macedo de Cavaleiros
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center justify-between">
                        <span>Sistemas de irrigação agrícola</span>
                        <span className="font-bold text-blue-600">Especialidade</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Canalização em granito</span>
                        <span className="font-bold text-blue-600">Experiência</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Aquecimento para invernos frios</span>
                        <span className="font-bold text-blue-600">Frequentemente</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testemunhos Locais de Macedo de Cavaleiros */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              O Que Dizem os Nossos Clientes em Macedo de Cavaleiros
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Exploração agrícola em Ala com sistema de irrigação avariado. Como têm a sede
                  aqui em Macedo, chegaram em 20 minutos e salvaram a colheita. Resposta rápida
                  e eficaz. São os melhores!"
                </p>
                <p className="text-gray-900 font-bold">José A.</p>
                <p className="text-gray-600 text-sm">Ala, Macedo de Cavaleiros</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Casa de turismo rural perto do Azibo. Instalaram sistema completo de água quente
                  solar e piscina. Ajudaram com toda a documentação para o licenciamento. Serviço
                  5 estrelas!"
                </p>
                <p className="text-gray-900 font-bold">Ana B.</p>
                <p className="text-gray-600 text-sm">Zona do Azibo</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Apartamento no centro com fuga urgente. Liguei às 22h e vieram logo. Como são
                  daqui de Macedo, conhecem bem os prédios antigos. Resolveram tudo na hora.
                  Muito obrigado!"
                </p>
                <p className="text-gray-900 font-bold">Teresa M.</p>
                <p className="text-gray-600 text-sm">Rua Conselheiro Albuquerque</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ específica de Macedo de Cavaleiros */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Perguntas sobre <span className="text-blue-600">Canalizador em Macedo de Cavaleiros</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Como lidam com os sistemas de irrigação para agricultura em Macedo de Cavaleiros?
                </h3>
                <p className="text-gray-600">
                  Utilizamos materiais específicos resistentes aos fertilizantes e produtos agrícolas,
                  como tubos de polietileno de alta densidade e componentes em PVC. Realizamos
                  tratamentos anti-entupimento específicos para as características únicas
                  da água de irrigação na região de Macedo de Cavaleiros.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Trabalham em propriedades com sistemas de água para gado em Macedo de Cavaleiros?
                </h3>
                <p className="text-gray-600">
                  Sim, temos experiência em quintas, herdades e propriedades com sistemas de água para gado.
                  Especializamo-nos em sistemas de filtragem, bombeamento e tratamento
                  de água para consumo animal, garantindo a qualidade e segurança dos sistemas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Qual a resposta para urgências nas zonas rurais de Macedo de Cavaleiros?
                </h3>
                <p className="text-gray-600">
                  Atendemos todo o concelho, incluindo freguesias rurais como
                  Ala, Vilarinho, Podence e outras. Temos veículos
                  equipados para acessar propriedades rurais e mantemos stock
                  de materiais para intervenções rápidas em qualquer local.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Canalizador em <span className="text-orange-300">Macedo de Cavaleiros</span> - Conhecimento Local
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Conhecemos as particularidades da água e canalização de Macedo de Cavaleiros.
              Desde o centro histórico até às propriedades agrícolas e zonas rurais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href={`tel:${config.phone}`}
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                📞 {config.phone} (Macedo de Cavaleiros)
              </a>
              <a
                href={`https://wa.me/${config.whatsapp}?text=Olá, preciso de um canalizador em Macedo de Cavaleiros`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                💬 WhatsApp para Macedo de Cavaleiros
              </a>
            </div>
            
            <p className="text-orange-200">
              🚜 <strong>Especialistas em sistemas agrícolas</strong> • 🏰 <strong>Património histórico</strong> • 🐄 <strong>Zonas rurais</strong>
            </p>
            
            {/* Cross-link subtil */}
            <div className="mt-12 p-4 bg-white/20 rounded-xl max-w-md mx-auto">
              <p className="text-lg">
                ⚡ <strong>Precisa de um eletricista em Macedo de Cavaleiros?</strong> Recomendamos:{' '}
                <a href="https://staff-seekers.com/eletricista-macedo-de-cavaleiros" className="underline font-bold">
                  staff-seekers.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Related Cities - Maillage interno SEO */}
        
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Macedo de Cavaleiros</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <RelatedCities 
          currentCity="Macedo de Cavaleiros" 
          currentCitySlug="canalizador-macedocavaleiros" 
        />
      </main>
      
      <Footer />
    </>
  );
}