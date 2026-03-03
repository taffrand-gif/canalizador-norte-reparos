import { useState, useEffect } from 'react';
import { loyaltyProgram, Customer, Transaction, TIER_THRESHOLDS, REWARDS } from '@/server/loyaltyProgram';
import { Star, Gift, TrendingUp, Award, Users, DollarSign } from 'lucide-react';

export default function LoyaltyProgramDashboard() {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [stats, setStats] = useState(loyaltyProgram.getStatistics());

  const handleLookup = () => {
    const found = loyaltyProgram.getCustomer(phoneOrEmail);
    if (found) {
      setCustomer(found);
      setTransactions(loyaltyProgram.getTransactions(found.id));
    } else {
      alert('Cliente não encontrado');
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'bronze': return 'from-orange-600 to-orange-700';
      case 'silver': return 'from-gray-400 to-gray-500';
      case 'gold': return 'from-yellow-500 to-yellow-600';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'bronze': return '🥉';
      case 'silver': return '🥈';
      case 'gold': return '🥇';
      default: return '⭐';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Programa de Fidelidade Norte Reparos
          </h1>
          <p className="text-gray-600">
            Recompensamos a sua fidelidade com descontos e benefícios exclusivos
          </p>
        </div>

        {/* Program Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats.totalCustomers}
            </div>
            <p className="text-sm text-gray-600">Clientes Totais</p>
            <p className="text-xs text-gray-500 mt-2">
              {stats.activeCustomers} ativos (90 dias)
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats.totalPointsIssued.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">Pontos Emitidos</p>
            <p className="text-xs text-gray-500 mt-2">
              {stats.totalPointsRedeemed.toLocaleString()} resgatados
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              €{stats.totalRevenue.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">Receita Total</p>
            <p className="text-xs text-gray-500 mt-2">
              €{Math.round(stats.averageSpentPerCustomer)} média/cliente
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-2">Distribuição Tiers</div>
            <div className="space-y-1">
              <p className="text-xs">🥉 Bronze: {stats.bronzeCustomers}</p>
              <p className="text-xs">🥈 Silver: {stats.silverCustomers}</p>
              <p className="text-xs">🥇 Gold: {stats.goldCustomers}</p>
            </div>
          </div>
        </div>

        {/* Customer Lookup */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Consultar Cliente
          </h2>
          <div className="flex gap-4">
            <input
              type="text"
              value={phoneOrEmail}
              onChange={(e) => setPhoneOrEmail(e.target.value)}
              placeholder="Telefone ou Email"
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
            />
            <button
              onClick={handleLookup}
              className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Consultar
            </button>
          </div>
        </div>

        {/* Customer Details */}
        {customer && (
          <>
            {/* Customer Card */}
            <div className={`bg-gradient-to-r ${getTierColor(customer.tier)} rounded-lg shadow-2xl p-8 mb-8 text-white`}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{getTierIcon(customer.tier)}</span>
                    <div>
                      <h2 className="text-3xl font-bold">{customer.name}</h2>
                      <p className="text-white/80">Tier {customer.tier.toUpperCase()}</p>
                    </div>
                  </div>
                  <p className="text-white/80">{customer.email}</p>
                  <p className="text-white/80">{customer.phone}</p>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-bold mb-1">{customer.points}</div>
                  <p className="text-white/80">Pontos</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                <div>
                  <p className="text-white/80 text-sm mb-1">Desconto Atual</p>
                  <p className="text-2xl font-bold">{TIER_THRESHOLDS[customer.tier].discount}%</p>
                </div>
                <div>
                  <p className="text-white/80 text-sm mb-1">Total Gasto</p>
                  <p className="text-2xl font-bold">€{customer.totalSpent.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-white/80 text-sm mb-1">Serviços</p>
                  <p className="text-2xl font-bold">{customer.servicesCount}</p>
                </div>
              </div>

              {loyaltyProgram.getPointsToNextTier(customer.id) && (
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-white/80 text-sm mb-2">
                    Faltam {loyaltyProgram.getPointsToNextTier(customer.id)} pontos para o próximo tier
                  </p>
                  <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-white h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${(customer.points / (customer.tier === 'bronze' ? TIER_THRESHOLDS.silver.min : TIER_THRESHOLDS.gold.min)) * 100}%`
                      }}
                    />
                  </div>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/80 text-sm mb-2">Código de Indicação</p>
                <div className="flex items-center gap-4">
                  <code className="bg-white/20 px-4 py-2 rounded-lg font-mono text-xl font-bold">
                    {customer.referralCode}
                  </code>
                  <p className="text-sm text-white/80">
                    Partilhe e ganhe 100 pontos por cada amigo!
                  </p>
                </div>
              </div>
            </div>

            {/* Available Rewards */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Gift className="w-6 h-6 text-purple-600" />
                Recompensas Disponíveis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {loyaltyProgram.getAvailableRewards(customer.id).map((reward) => (
                  <div
                    key={reward.id}
                    className="border-2 border-purple-200 rounded-lg p-4 hover:border-purple-400 transition-colors"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">{reward.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                    {reward.discount > 0 && (
                      <div className="bg-purple-100 text-purple-900 font-bold px-3 py-1 rounded-full inline-block">
                        {reward.discount}% OFF
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                Histórico de Pontos
              </h2>
              <div className="space-y-3">
                {transactions.slice(0, 10).map((txn) => (
                  <div
                    key={txn.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{txn.description}</p>
                      <p className="text-sm text-gray-600">
                        {txn.date.toLocaleDateString('pt-PT', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-xl font-bold ${
                          txn.points > 0 ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {txn.points > 0 ? '+' : ''}{txn.points}
                      </p>
                      {txn.amount && (
                        <p className="text-sm text-gray-600">€{txn.amount.toFixed(2)}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Program Benefits */}
        {!customer && (
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-r-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Como Funciona o Programa de Fidelidade
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">🥉</span> Bronze (0-500 pts)
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 10% desconto permanente</li>
                  <li>• 1 ponto = €1 gasto</li>
                  <li>• Bónus de boas-vindas: 50 pts</li>
                  <li>• Bónus aniversário: 50 pts</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">🥈</span> Silver (501-1500 pts)
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 15% desconto permanente</li>
                  <li>• Atendimento prioritário</li>
                  <li>• Todos os benefícios Bronze</li>
                  <li>• Ofertas exclusivas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">🥇</span> Gold (1501+ pts)
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 20% desconto permanente</li>
                  <li>• Inspeção anual grátis</li>
                  <li>• Todos os benefícios Silver</li>
                  <li>• Acesso VIP</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-primary/20">
              <h3 className="font-bold text-gray-900 mb-3">Bónus Especiais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎁</span>
                  <div>
                    <p className="font-semibold text-gray-900">Bónus Indicação</p>
                    <p className="text-sm text-gray-700">100 pontos por cada amigo que indicar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎂</span>
                  <div>
                    <p className="font-semibold text-gray-900">Bónus Aniversário</p>
                    <p className="text-sm text-gray-700">50 pontos extra no mês do seu aniversário</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
