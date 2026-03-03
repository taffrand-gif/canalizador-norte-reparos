import { reviewScheduler } from '@/server/reviewAutomation';
import { BarChart, TrendingUp, Star, MessageCircle, Users, CheckCircle } from 'lucide-react';

export default function ReviewAutomationDashboard() {
  const stats = reviewScheduler.getStatistics();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Sistema de Avaliações Automatizado
          </h1>
          <p className="text-gray-600">
            Monitorização em tempo real de pedidos de avaliação e taxa de resposta
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Total</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats.totalServices}
            </div>
            <p className="text-sm text-gray-600">Serviços Completos</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-gray-500">Enviados</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats.requestsSent}
            </div>
            <p className="text-sm text-gray-600">Pedidos Enviados</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-gray-500">Recebidos</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats.reviewsReceived}
            </div>
            <p className="text-sm text-gray-600">Avaliações Recebidas</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-sm text-gray-500">Taxa</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats.responseRate}
            </div>
            <p className="text-sm text-gray-600">Taxa de Resposta</p>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              Distribuição de Avaliações
            </h2>

            <div className="space-y-4">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = stats[`${['five', 'four', 'three', 'two', 'one'][5 - rating]}StarReviews` as keyof typeof stats] as number;
                const percentage = stats.reviewsReceived > 0 ? (count / stats.reviewsReceived) * 100 : 0;

                return (
                  <div key={rating} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-24">
                      <span className="font-semibold text-gray-900">{rating}</span>
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                      <div
                        className="bg-yellow-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="font-bold text-gray-900 w-16 text-right">
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-semibold">Média Geral</span>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-gray-900">
                    {stats.averageRating}
                  </span>
                  <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Process Flow */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart className="w-6 h-6 text-blue-600" />
              Fluxo Automatizado
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-600">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Serviço Completo</h3>
                  <p className="text-sm text-gray-600">
                    Técnico marca serviço como concluído no sistema
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-purple-600">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Espera 24h</h3>
                  <p className="text-sm text-gray-600">
                    Sistema aguarda 24 horas automaticamente
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-green-600">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Envio Automático</h3>
                  <p className="text-sm text-gray-600">
                    WhatsApp + Email + SMS enviados automaticamente
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-orange-600">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Lembrete (3 dias)</h3>
                  <p className="text-sm text-gray-600">
                    Se não responder, lembrete automático após 3 dias
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-yellow-600">5</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Agradecimento</h3>
                  <p className="text-sm text-gray-600">
                    Mensagem de agradecimento automática após avaliação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-r-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Benefícios do Sistema Automatizado
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">⏱️ Poupa Tempo</h3>
              <p className="text-sm text-gray-700">
                Zero trabalho manual. Sistema envia pedidos automaticamente 24h após cada serviço.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">📈 Aumenta Avaliações</h3>
              <p className="text-sm text-gray-700">
                Taxa de resposta 3-5× maior que pedidos manuais. Lembretes automáticos aumentam conversão.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">🎯 SEO Local</h3>
              <p className="text-sm text-gray-700">
                Mais avaliações = melhor ranking no Google Maps. Domínio total da região.
              </p>
            </div>
          </div>
        </div>

        {/* Integration Instructions */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🔧 Configuração Twilio (WhatsApp + SMS)
          </h2>
          <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
            <p className="text-gray-700 mb-2"># 1. Criar conta Twilio: https://www.twilio.com/try-twilio</p>
            <p className="text-gray-700 mb-2"># 2. Ativar WhatsApp Business API</p>
            <p className="text-gray-700 mb-2"># 3. Adicionar variáveis de ambiente:</p>
            <p className="text-blue-600">TWILIO_ACCOUNT_SID=your_account_sid</p>
            <p className="text-blue-600">TWILIO_AUTH_TOKEN=your_auth_token</p>
            <p className="text-blue-600">TWILIO_PHONE_NUMBER=+351xxxxxxxxx</p>
            <p className="text-blue-600">TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886</p>
          </div>
        </div>
      </div>
    </div>
  );
}
