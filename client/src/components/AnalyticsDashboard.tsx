import { useState, useEffect } from 'react';
import {
 BarChart3,
 TrendingUp,
 Users,
 Phone,
 MessageCircle,
 MapPin,
 Monitor,
 Smartphone,
 Clock,
 DollarSign,
 Eye,
 MousePointer
} from 'lucide-react';
interface AnalyticsData {
 realTime: {
 activeUsers: number;
 pageViews: number;
 conversions: number;
 };
 today: {
 visitors: number;
 pageViews: number;
 phoneClicks: number;
 whatsappClicks: number;
 quoteRequests: number;
 avgTimeOnSite: number;
 bounceRate: number;
 conversionRate: number;
 };
 thisMonth: {
 visitors: number;
 leads: number;
 revenue: number;
 avgLeadValue: number;
 };
 topPages: Array<{
 path: string;
 views: number;
 conversions: number;
 conversionRate: number;
 }>;
 trafficSources: Array<{
 source: string;
 visitors: number;
 percentage: number;
 }>;
 devices: {
 mobile: number;
 desktop: number;
 tablet: number;
 };
 topCities: Array<{
 city: string;
 visitors: number;
 leads: number;
 }>;
 conversionFunnel: Array<{
 step: string;
 users: number;
 dropoff: number;
 }>;
}
export default function AnalyticsDashboard() {
 const [data, setData] = useState<AnalyticsData>({
 realTime: {
 activeUsers: 23,
 pageViews: 156,
 conversions: 4
 },
 today: {
 visitors: 342,
 pageViews: 1247,
 phoneClicks: 28,
 whatsappClicks: 45,
 quoteRequests: 19,
 avgTimeOnSite: 245,
 bounceRate: 42.3,
 conversionRate: 6.7
 },
 thisMonth: {
 visitors: 8934,
 leads: 487,
 revenue: 43650,
 avgLeadValue: 89.6
 },
 topPages: [
 { path: '/braganca/desentupimentos', views: 1243, conversions: 34, conversionRate: 2.7 },
 { path: '/mirandela/canalizador', views: 987, conversions: 28, conversionRate: 2.8 },
 { path: '/macedo-cavaleiros/urgente', views: 856, conversions: 31, conversionRate: 3.6 },
 { path: '/vila-real/eletricista', views: 743, conversions: 19, conversionRate: 2.6 },
 { path: '/chaves/certificacao-ited', views: 621, conversions: 15, conversionRate: 2.4 }
 ],
 trafficSources: [
 { source: 'Google Orgânico', visitors: 5234, percentage: 58.6 },
 { source: 'Google Maps', visitors: 1876, percentage: 21.0 },
 { source: 'Direto', visitors: 892, percentage: 10.0 },
 { source: 'Facebook', visitors: 534, percentage: 6.0 },
 { source: 'Referral', visitors: 398, percentage: 4.4 }
 ],
 devices: {
 mobile: 6247,
 desktop: 2134,
 tablet: 553
 },
 topCities: [
 { city: 'Bragança', visitors: 2341, leads: 87 },
 { city: 'Mirandela', visitors: 1876, leads: 64 },
 { city: 'Macedo de Cavaleiros', visitors: 1234, leads: 52 },
 { city: 'Vila Real', visitors: 987, leads: 41 },
 { city: 'Chaves', visitors: 765, leads: 33 }
 ],
 conversionFunnel: [
 { step: 'Visitantes', users: 8934, dropoff: 0 },
 { step: 'Visualizaram Serviço', users: 5621, dropoff: 37.1 },
 { step: 'Clicaram CTA', users: 1247, dropoff: 77.8 },
 { step: 'Iniciaram Contacto', users: 623, dropoff: 50.0 },
 { step: 'Converteram', users: 487, dropoff: 21.8 }
 ]
 });
 const [timeRange, setTimeRange] = useState<'today' | 'week' | 'month'>('today');
 // Simulate real-time updates
 useEffect(() => {
 const interval = setInterval(() => {
 setData(prev => ({
 ...prev,
 realTime: {
 activeUsers: Math.max(10, Math.min(50, prev.realTime.activeUsers + Math.floor(Math.random() * 7) - 3)),
 pageViews: prev.realTime.pageViews + Math.floor(Math.random() * 3),
 conversions: prev.realTime.conversions + (Math.random() > 0.95 ? 1 : 0)
 }
 }));
 }, 5000);
 return () => clearInterval(interval);
 }, []);
 const formatTime = (seconds: number) => {
 const mins = Math.floor(seconds / 60);
 const secs = seconds % 60;
 return `${mins}m ${secs}s`;
 };
 const formatCurrency = (value: number) => {
 return new Intl.NumberFormat('pt-PT', {
 style: 'currency',
 currency: 'EUR'
 }).format(value);
 };
 return (
 <div className="min-h-screen bg-gray-50 p-6">
 <div className="max-w-7xl mx-auto">
 {/* Header */}
 <div className="mb-8 flex items-center justify-between">
 <div>
 <h1 className="text-4xl font-bold text-gray-900 mb-2">
 Dashboard Analytics
 </h1>
 <p className="text-gray-600">
 Monitorização em tempo real de performance e conversões
 </p>
 </div>
 {/* Time Range Selector */}
 <div className="flex gap-2">
 {(['today', 'week', 'month'] as const).map((range) => (
 <button
 key={range}
 onClick={() => setTimeRange(range)}
 className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
 timeRange === range
 ? 'bg-primary text-white'
 : 'bg-white text-gray-700 hover:bg-gray-100'
 }`}
 >
 {range === 'today' ? 'Hoje' : range === 'week' ? 'Semana' : 'Mês'}
 </button>
 ))}
 </div>
 </div>
 {/* Real-Time Metrics */}
 <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-6 mb-8 text-white">
 <div className="flex items-center gap-2 mb-4">
 <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
 <h2 className="text-xl font-bold">Tempo Real</h2>
 </div>
 <div className="grid grid-cols-3 gap-6">
 <div>
 <div className="text-4xl font-bold mb-1">{data.realTime.activeUsers}</div>
 <p className="text-blue-100">Utilizadores Ativos</p>
 </div>
 <div>
 <div className="text-4xl font-bold mb-1">{data.realTime.pageViews}</div>
 <p className="text-blue-100">Visualizações (hoje)</p>
 </div>
 <div>
 <div className="text-4xl font-bold mb-1">{data.realTime.conversions}</div>
 <p className="text-blue-100">Conversões (hoje)</p>
 </div>
 </div>
 </div>
 {/* Key Metrics */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
 <div className="bg-white rounded-lg shadow-lg p-6">
 <div className="flex items-center justify-between mb-4">
 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
 <Users className="w-6 h-6 text-blue-600" />
 </div>
 <TrendingUp className="w-5 h-5 text-green-600" />
 </div>
 <div className="text-3xl font-bold text-gray-900 mb-1">
 {data.today.visitors}
 </div>
 <p className="text-sm text-gray-600">Visitantes Hoje</p>
 <p className="text-xs text-green-600 mt-2">+12.5% vs ontem</p>
 </div>
 <div className="bg-white rounded-lg shadow-lg p-6">
 <div className="flex items-center justify-between mb-4">
 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
 <Phone className="w-6 h-6 text-green-600" />
 </div>
 <TrendingUp className="w-5 h-5 text-green-600" />
 </div>
 <div className="text-3xl font-bold text-gray-900 mb-1">
 {data.today.phoneClicks + data.today.whatsappClicks}
 </div>
 <p className="text-sm text-gray-600">Contactos Hoje</p>
 <p className="text-xs text-gray-500 mt-2">
 {data.today.phoneClicks} tel + {data.today.whatsappClicks} WhatsApp
 </p>
 </div>
 <div className="bg-white rounded-lg shadow-lg p-6">
 <div className="flex items-center justify-between mb-4">
 <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
 <BarChart3 className="w-6 h-6 text-purple-600" />
 </div>
 <TrendingUp className="w-5 h-5 text-green-600" />
 </div>
 <div className="text-3xl font-bold text-gray-900 mb-1">
 {data.today.conversionRate}%
 </div>
 <p className="text-sm text-gray-600">Taxa Conversão</p>
 <p className="text-xs text-green-600 mt-2">+2.3% vs média</p>
 </div>
 <div className="bg-white rounded-lg shadow-lg p-6">
 <div className="flex items-center justify-between mb-4">
 <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
 <DollarSign className="w-6 h-6 text-orange-600" />
 </div>
 <TrendingUp className="w-5 h-5 text-green-600" />
 </div>
 <div className="text-3xl font-bold text-gray-900 mb-1">
 {formatCurrency(data.thisMonth.revenue)}
 </div>
 <p className="text-sm text-gray-600">Receita Este Mês</p>
 <p className="text-xs text-gray-500 mt-2">
 {data.thisMonth.leads} leads
 </p>
 </div>
 </div>
 {/* Charts Row */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
 {/* Top Pages */}
 <div className="bg-white rounded-lg shadow-lg p-6">
 <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
 <Eye className="w-6 h-6 text-blue-600" />
 Páginas Mais Visitadas
 </h2>
 <div className="space-y-4">
 {data.topPages.map((page, index) => (
 <div key={page.path} className="flex items-center gap-4">
 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
 <span className="font-bold text-blue-600">{index + 1}</span>
 </div>
 <div className="flex-1 min-w-0">
 <p className="font-semibold text-gray-900 truncate">{page.path}</p>
 <p className="text-sm text-gray-600">
 {page.views} views • {page.conversions} conversões
 </p>
 </div>
 <div className="text-right">
 <p className="font-bold text-green-600">{page.conversionRate}%</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 {/* Traffic Sources */}
 <div className="bg-white rounded-lg shadow-lg p-6">
 <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
 <TrendingUp className="w-6 h-6 text-green-600" />
 Fontes de Tráfego
 </h2>
 <div className="space-y-4">
 {data.trafficSources.map((source) => (
 <div key={source.source}>
 <div className="flex items-center justify-between mb-2">
 <span className="font-semibold text-gray-900">{source.source}</span>
 <span className="text-sm text-gray-600">
 {source.visitors} ({source.percentage}%)
 </span>
 </div>
 <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
 <div
 className="bg-green-500 h-full rounded-full transition-all duration-500"
 style={{ width: `${source.percentage}%` }}
 />
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 {/* Devices & Cities */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
 {/* Devices */}
 <div className="bg-white rounded-lg shadow-lg p-6">
 <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
 <Monitor className="w-6 h-6 text-purple-600" />
 Dispositivos
 </h2>
 <div className="space-y-4">
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <Smartphone className="w-5 h-5 text-gray-600" />
 <span className="font-semibold text-gray-900">Mobile</span>
 </div>
 <div className="text-right">
 <p className="font-bold text-gray-900">{data.devices.mobile}</p>
 <p className="text-sm text-gray-600">
 {((data.devices.mobile / (data.devices.mobile + data.devices.desktop + data.devices.tablet)) * 100).toFixed(1)}%
 </p>
 </div>
 </div>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <Monitor className="w-5 h-5 text-gray-600" />
 <span className="font-semibold text-gray-900">Desktop</span>
 </div>
 <div className="text-right">
 <p className="font-bold text-gray-900">{data.devices.desktop}</p>
 <p className="text-sm text-gray-600">
 {((data.devices.desktop / (data.devices.mobile + data.devices.desktop + data.devices.tablet)) * 100).toFixed(1)}%
 </p>
 </div>
 </div>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <Monitor className="w-5 h-5 text-gray-600" />
 <span className="font-semibold text-gray-900">Tablet</span>
 </div>
 <div className="text-right">
 <p className="font-bold text-gray-900">{data.devices.tablet}</p>
 <p className="text-sm text-gray-600">
 {((data.devices.tablet / (data.devices.mobile + data.devices.desktop + data.devices.tablet)) * 100).toFixed(1)}%
 </p>
 </div>
 </div>
 </div>
 </div>
 {/* Top Cities */}
 <div className="bg-white rounded-lg shadow-lg p-6">
 <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
 <MapPin className="w-6 h-6 text-red-600" />
 Cidades Top
 </h2>
 <div className="space-y-4">
 {data.topCities.map((city, index) => (
 <div key={city.city} className="flex items-center gap-4">
 <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
 <span className="font-bold text-red-600">{index + 1}</span>
 </div>
 <div className="flex-1">
 <p className="font-semibold text-gray-900">{city.city}</p>
 <p className="text-sm text-gray-600">
 {city.visitors} visitantes • {city.leads} leads
 </p>
 </div>
 <div className="text-right">
 <p className="font-bold text-green-600">
 {((city.leads / city.visitors) * 100).toFixed(1)}%
 </p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 {/* Conversion Funnel */}
 <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
 <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
 <MousePointer className="w-6 h-6 text-orange-600" />
 Funil de Conversão
 </h2>
 <div className="space-y-4">
 {data.conversionFunnel.map((step, index) => {
 const width = (step.users / data.conversionFunnel[0].users) * 100;
 return (
 <div key={step.step}>
 <div className="flex items-center justify-between mb-2">
 <span className="font-semibold text-gray-900">{step.step}</span>
 <div className="text-right">
 <span className="font-bold text-gray-900">{step.users}</span>
 {index > 0 && (
 <span className="text-sm text-red-600 ml-2">
 -{step.dropoff}%
 </span>
 )}
 </div>
 </div>
 <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
 <div
 className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-center text-white font-semibold text-sm transition-all duration-500"
 style={{ width: `${width}%` }}
 >
 {width.toFixed(1)}%
 </div>
 </div>
 </div>
 );
 })}
 </div>
 </div>
 {/* Heatmap Integration */}
 <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg shadow-lg p-6 text-white">
 <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
 <MousePointer className="w-6 h-6" />
 Heatmaps & Gravações
 </h2>
 <p className="mb-6">
 Veja como os utilizadores interagem com o site em tempo real.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <a
 href="https://clarity.microsoft.com"
 target="_blank"
 rel="noopener noreferrer"
 className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors"
 >
 <h3 className="font-bold mb-2">Microsoft Clarity</h3>
 <p className="text-sm text-white/80">
 Heatmaps, gravações de sessão, análise de cliques
 </p>
 </a>
 <a
 href="https://hotjar.com"
 target="_blank"
 rel="noopener noreferrer"
 className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors"
 >
 <h3 className="font-bold mb-2">Hotjar</h3>
 <p className="text-sm text-white/80">
 Heatmaps avançados, feedback de utilizadores
 </p>
 </a>
 </div>
 </div>
 </div>
 </div>
 );
}
