// Customer Loyalty Program System
// Points: 1 point = €1 spent
// Tiers: Bronze (0-500), Silver (501-1500), Gold (1501+)
// Discounts: Bronze 10%, Silver 15%, Gold 20%

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  points: number;
  tier: 'bronze' | 'silver' | 'gold';
  totalSpent: number;
  joinDate: Date;
  birthday?: Date;
  referralCode: string;
  referredBy?: string;
  servicesCount: number;
  lastServiceDate?: Date;
}

export interface Transaction {
  id: string;
  customerId: string;
  type: 'earn' | 'redeem' | 'bonus' | 'referral' | 'birthday';
  points: number;
  amount?: number;
  description: string;
  date: Date;
}

export interface Reward {
  id: string;
  tier: 'bronze' | 'silver' | 'gold' | 'all';
  name: string;
  description: string;
  discount: number;
  pointsCost?: number;
  active: boolean;
}

export const TIER_THRESHOLDS = {
  bronze: { min: 0, max: 500, discount: 10 },
  silver: { min: 501, max: 1500, discount: 15 },
  gold: { min: 1501, max: Infinity, discount: 20 }
};

export const REWARDS: Reward[] = [
  {
    id: 'tier-bronze',
    tier: 'bronze',
    name: '10% Desconto',
    description: 'Desconto permanente em todos os serviços',
    discount: 10,
    active: true
  },
  {
    id: 'tier-silver',
    tier: 'silver',
    name: '15% Desconto',
    description: 'Desconto permanente em todos os serviços',
    discount: 15,
    active: true
  },
  {
    id: 'tier-gold',
    tier: 'gold',
    name: '20% Desconto',
    description: 'Desconto permanente em todos os serviços',
    discount: 20,
    active: true
  },
  {
    id: 'priority-service',
    tier: 'silver',
    name: 'Atendimento Prioritário',
    description: 'Prioridade no agendamento de serviços',
    discount: 0,
    active: true
  },
  {
    id: 'free-inspection',
    tier: 'gold',
    name: 'Inspeção Anual Grátis',
    description: 'Inspeção preventiva gratuita uma vez por ano',
    discount: 0,
    active: true
  },
  {
    id: 'birthday-bonus',
    tier: 'all',
    name: 'Bónus Aniversário',
    description: '50 pontos extra no mês do aniversário',
    discount: 0,
    pointsCost: 0,
    active: true
  },
  {
    id: 'referral-bonus',
    tier: 'all',
    name: 'Bónus Indicação',
    description: '100 pontos por cada amigo que indicar',
    discount: 0,
    pointsCost: 0,
    active: true
  }
];

export class LoyaltyProgram {
  private customers: Map<string, Customer> = new Map();
  private transactions: Transaction[] = [];

  // Calculate tier based on points
  calculateTier(points: number): 'bronze' | 'silver' | 'gold' {
    if (points >= TIER_THRESHOLDS.gold.min) return 'gold';
    if (points >= TIER_THRESHOLDS.silver.min) return 'silver';
    return 'bronze';
  }

  // Get discount for tier
  getTierDiscount(tier: 'bronze' | 'silver' | 'gold'): number {
    return TIER_THRESHOLDS[tier].discount;
  }

  // Create new customer
  createCustomer(data: {
    name: string;
    email: string;
    phone: string;
    birthday?: Date;
    referredBy?: string;
  }): Customer {
    const customer: Customer = {
      id: `cust_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: data.name,
      email: data.email,
      phone: data.phone,
      points: 0,
      tier: 'bronze',
      totalSpent: 0,
      joinDate: new Date(),
      birthday: data.birthday,
      referralCode: this.generateReferralCode(),
      referredBy: data.referredBy,
      servicesCount: 0
    };

    this.customers.set(customer.id, customer);

    // Bonus for joining
    this.addPoints(customer.id, 50, 'Bónus de boas-vindas', 'bonus');

    // Referral bonus for referrer
    if (data.referredBy) {
      const referrer = Array.from(this.customers.values()).find(
        c => c.referralCode === data.referredBy
      );
      if (referrer) {
        this.addPoints(referrer.id, 100, 'Bónus por indicação', 'referral');
      }
    }

    return customer;
  }

  // Generate unique referral code
  private generateReferralCode(): string {
    return Math.random().toString(36).substr(2, 8).toUpperCase();
  }

  // Add points to customer
  addPoints(
    customerId: string,
    points: number,
    description: string,
    type: Transaction['type'] = 'earn',
    amount?: number
  ): void {
    const customer = this.customers.get(customerId);
    if (!customer) return;

    customer.points += points;
    customer.tier = this.calculateTier(customer.points);

    if (amount) {
      customer.totalSpent += amount;
    }

    const transaction: Transaction = {
      id: `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      customerId,
      type,
      points,
      amount,
      description,
      date: new Date()
    };

    this.transactions.push(transaction);
  }

  // Redeem points for discount
  redeemPoints(customerId: string, points: number, description: string): boolean {
    const customer = this.customers.get(customerId);
    if (!customer || customer.points < points) return false;

    customer.points -= points;
    customer.tier = this.calculateTier(customer.points);

    const transaction: Transaction = {
      id: `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      customerId,
      type: 'redeem',
      points: -points,
      description,
      date: new Date()
    };

    this.transactions.push(transaction);
    return true;
  }

  // Record service completion
  recordService(customerId: string, amount: number, serviceType: string): void {
    const customer = this.customers.get(customerId);
    if (!customer) return;

    customer.servicesCount++;
    customer.lastServiceDate = new Date();

    // Earn points (1 point per €1)
    const points = Math.floor(amount);
    this.addPoints(customerId, points, `Serviço: ${serviceType}`, 'earn', amount);

    // Check for birthday bonus
    if (customer.birthday && this.isBirthdayMonth(customer.birthday)) {
      this.addPoints(customerId, 50, 'Bónus de aniversário', 'birthday');
    }
  }

  // Check if current month is birthday month
  private isBirthdayMonth(birthday: Date): boolean {
    const now = new Date();
    return birthday.getMonth() === now.getMonth();
  }

  // Get customer by phone or email
  getCustomer(phoneOrEmail: string): Customer | undefined {
    return Array.from(this.customers.values()).find(
      c => c.phone === phoneOrEmail || c.email === phoneOrEmail
    );
  }

  // Get customer transactions
  getTransactions(customerId: string): Transaction[] {
    return this.transactions.filter(t => t.customerId === customerId);
  }

  // Get points needed for next tier
  getPointsToNextTier(customerId: string): number | null {
    const customer = this.customers.get(customerId);
    if (!customer) return null;

    if (customer.tier === 'bronze') {
      return TIER_THRESHOLDS.silver.min - customer.points;
    } else if (customer.tier === 'silver') {
      return TIER_THRESHOLDS.gold.min - customer.points;
    }

    return null; // Already at max tier
  }

  // Get available rewards for customer
  getAvailableRewards(customerId: string): Reward[] {
    const customer = this.customers.get(customerId);
    if (!customer) return [];

    return REWARDS.filter(
      r => r.active && (r.tier === customer.tier || r.tier === 'all')
    );
  }

  // Get program statistics
  getStatistics() {
    const customers = Array.from(this.customers.values());

    return {
      totalCustomers: customers.length,
      bronzeCustomers: customers.filter(c => c.tier === 'bronze').length,
      silverCustomers: customers.filter(c => c.tier === 'silver').length,
      goldCustomers: customers.filter(c => c.tier === 'gold').length,
      totalPointsIssued: this.transactions
        .filter(t => t.type === 'earn' || t.type === 'bonus' || t.type === 'referral' || t.type === 'birthday')
        .reduce((sum, t) => sum + t.points, 0),
      totalPointsRedeemed: this.transactions
        .filter(t => t.type === 'redeem')
        .reduce((sum, t) => sum + Math.abs(t.points), 0),
      totalRevenue: customers.reduce((sum, c) => sum + c.totalSpent, 0),
      averageSpentPerCustomer: customers.length > 0
        ? customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.length
        : 0,
      activeCustomers: customers.filter(c => {
        if (!c.lastServiceDate) return false;
        const daysSinceLastService = (Date.now() - c.lastServiceDate.getTime()) / (1000 * 60 * 60 * 24);
        return daysSinceLastService <= 90; // Active if service in last 90 days
      }).length
    };
  }
}

// Singleton instance
export const loyaltyProgram = new LoyaltyProgram();

// Supabase schema for production
export const SUPABASE_SCHEMA = `
-- Customers table
CREATE TABLE loyalty_customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT UNIQUE NOT NULL,
  points INTEGER DEFAULT 0,
  tier TEXT CHECK (tier IN ('bronze', 'silver', 'gold')) DEFAULT 'bronze',
  total_spent DECIMAL(10,2) DEFAULT 0,
  join_date TIMESTAMP DEFAULT NOW(),
  birthday DATE,
  referral_code TEXT UNIQUE NOT NULL,
  referred_by TEXT,
  services_count INTEGER DEFAULT 0,
  last_service_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Transactions table
CREATE TABLE loyalty_transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES loyalty_customers(id) ON DELETE CASCADE,
  type TEXT CHECK (type IN ('earn', 'redeem', 'bonus', 'referral', 'birthday')) NOT NULL,
  points INTEGER NOT NULL,
  amount DECIMAL(10,2),
  description TEXT NOT NULL,
  date TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_loyalty_customers_email ON loyalty_customers(email);
CREATE INDEX idx_loyalty_customers_phone ON loyalty_customers(phone);
CREATE INDEX idx_loyalty_customers_referral_code ON loyalty_customers(referral_code);
CREATE INDEX idx_loyalty_transactions_customer_id ON loyalty_transactions(customer_id);
CREATE INDEX idx_loyalty_transactions_date ON loyalty_transactions(date);

-- Updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_loyalty_customers_updated_at
BEFORE UPDATE ON loyalty_customers
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
`;
