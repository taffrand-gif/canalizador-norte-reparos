import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO } from "@/hooks/useSEO";

interface Dica {
  title: string;
  content: string;
  icon: string;
}

export default function Dicas() {
  const config = ACTIVE_CONFIG;
  const dicas = getDicas(config.type);

  useSEO({
    title: `Dicas e Conselhos | ${config.businessName}`,
    description: `Dicas úteis para prevenir problemas de ${config.type === 'plomberie' ? 'canalização' : 'eletricidade'}. Conselhos de especialistas disponíveis 24h.`,
    canonical: `https://${config.domain}/dicas`,
  });

  return (
    <>
      <Header />
{/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dicas e Conselhos
            </h1>
            <p className="text-xl text-gray-700">
              Aprenda a prevenir problemas e a manter o seu sistema em bom estado
            </p>
          </div>
        </div>
      </section>

      {/* Dicas Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {dicas.map((dica, index) => (
                <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">{dica.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {dica.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {dica.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function getDicas(serviceType: 'plomberie' | 'electricite'): Dica[] {
  if (serviceType === 'plomberie') {
    return [
      {
        icon: '💧',
        title: 'Verifique regularmente as torneiras',
        content: 'Inspecione todas as torneiras da sua casa mensalmente. Uma torneira a pingar pode desperdiçar até 20 litros de água por dia e aumentar significativamente a sua fatura.',
      },
      {
        icon: '🚿',
        title: 'Limpe os ralos com frequência',
        content: 'Evite entupimentos removendo cabelos e resíduos dos ralos semanalmente. Use uma rede de proteção para evitar que detritos entrem na canalização.',
      },
      {
        icon: '🔧',
        title: 'Não force válvulas e torneiras',
        content: 'Se uma torneira estiver difícil de fechar, não force. Isso pode danificar as vedações e causar fugas. Chame um profissional para ajustar ou substituir as peças.',
      },
      {
        icon: '❄️',
        title: 'Proteja os canos no inverno',
        content: 'Em períodos de frio intenso, isole os canos expostos para evitar congelamento e rebentamento. Deixe uma torneira a pingar ligeiramente durante a noite.',
      },
      {
        icon: '🚽',
        title: 'Não deite lixo na sanita',
        content: 'Nunca deite toalhitas, cotonetes, fraldas ou outros objetos na sanita. Mesmo produtos "biodegradáveis" podem causar entupimentos graves.',
      },
      {
        icon: '🔍',
        title: 'Verifique o contador de água',
        content: 'Feche todas as torneiras e verifique se o contador continua a rodar. Se sim, pode ter uma fuga escondida que precisa de ser reparada urgentemente.',
      },
      {
        icon: '🧼',
        title: 'Evite produtos químicos agressivos',
        content: 'Produtos de desentupimento químicos podem danificar as canalizações a longo prazo. Prefira métodos mecânicos ou chame um profissional.',
      },
      {
        icon: '⚙️',
        title: 'Faça manutenção preventiva',
        content: 'Agende uma inspeção anual com um canalizador profissional para detetar problemas antes que se tornem emergências caras.',
      },
      {
        icon: '💰',
        title: 'Invista em equipamentos de qualidade',
        content: 'Torneiras, autoclismos e esquentadores de qualidade duram mais e têm menos problemas. O investimento inicial compensa a longo prazo.',
      },
      {
        icon: '📞',
        title: 'Tenha sempre um contacto de emergência',
        content: 'Guarde o número de um canalizador de confiança disponível 24h. Em caso de fuga grave, cada minuto conta para minimizar os danos.',
      },
    ];
  } else {
    return [
      {
        icon: '💧',
        title: 'Verifique regularmente as fugas',
        content: 'Inspecione todas as torneiras, autoclismos e canos visíveis mensalmente. Uma pequena fuga pode desperdiçar centenas de litros de água e causar danos graves.',
      },
      {
        icon: '🚿',
        title: 'Limpe os ralos com frequência',
        content: 'Evite entupimentos removendo cabelos e resíduos dos ralos semanalmente. Use uma rede de proteção para evitar que detritos entrem na canalização.',
      },
      {
        icon: '🔧',
        title: 'Não force válvulas e torneiras',
        content: 'Se uma torneira estiver difícil de fechar, não force. Isso pode danificar as vedações e causar fugas. Chame um profissional para ajustar ou substituir as peças.',
      },
      {
        icon: '❄️',
        title: 'Proteja os canos no inverno',
        content: 'Em períodos de frio intenso, isole os canos expostos para evitar congelamento e rebentamento. Deixe uma torneira a pingar ligeiramente durante a noite.',
      },
      {
        icon: '🚽',
        title: 'Não deite lixo na sanita',
        content: 'Nunca deite toalhitas, cotonetes, fraldas ou outros objetos na sanita. Mesmo produtos "biodegradáveis" podem causar entupimentos graves.',
      },
      {
        icon: '🔍',
        title: 'Verifique o contador de água',
        content: 'Feche todas as torneiras e verifique se o contador continua a rodar. Se sim, pode ter uma fuga escondida que precisa de ser reparada urgentemente.',
      },
      {
        icon: '🧼',
        title: 'Evite produtos químicos agressivos',
        content: 'Produtos de desentupimento químicos podem danificar as canalizações a longo prazo. Prefira métodos mecânicos ou chame um profissional.',
      },
      {
        icon: '⚙️',
        title: 'Faça manutenção preventiva',
        content: 'Agende uma inspeção anual com um canalizador profissional para detetar problemas antes que se tornem emergências caras.',
      },
      {
        icon: '💰',
        title: 'Invista em equipamentos de qualidade',
        content: 'Torneiras, autoclismos e esquentadores de qualidade duram mais e têm menos problemas. O investimento inicial compensa a longo prazo.',
      },
      {
        icon: '📞',
        title: 'Tenha sempre um contacto de emergência',
        content: 'Guarde o número de um canalizador de confiança disponível 24h. Em caso de fuga grave, cada minuto conta para minimizar os danos.',
      },
    ];
  }
}
