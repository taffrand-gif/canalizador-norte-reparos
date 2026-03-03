'use client';

import { CheckCircle, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Notification {
  id: number;
  name: string;
  city: string;
  action: string;
  timeAgo: string;
}

const sampleNotifications: Notification[] = [
  { id: 1, name: 'João', city: 'Bragança', action: 'pediu orçamento', timeAgo: '3 minutos' },
  { id: 2, name: 'Maria', city: 'Mirandela', action: 'agendou visita', timeAgo: '12 minutos' },
  { id: 3, name: 'Carlos', city: 'Macedo', action: 'ligou agora', timeAgo: '25 minutos' },
  { id: 4, name: 'Ana', city: 'Vila Real', action: 'pediu orçamento', timeAgo: '38 minutos' },
];

export default function SocialProofNotification() {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [liveViewers, setLiveViewers] = useState(43);
  const [weeklyClients, setWeeklyClients] = useState(127);

  useEffect(() => {
    // Show notification every 8 seconds
    const notificationInterval = setInterval(() => {
      const randomNotif = sampleNotifications[Math.floor(Math.random() * sampleNotifications.length)];
      setCurrentNotification(randomNotif);

      setTimeout(() => setCurrentNotification(null), 5000);
    }, 8000);

    // Update live viewers every 5 seconds
    const viewersInterval = setInterval(() => {
      setLiveViewers(prev => Math.max(15, Math.min(80, prev + Math.floor(Math.random() * 7) - 3)));
    }, 5000);

    return () => {
      clearInterval(notificationInterval);
      clearInterval(viewersInterval);
    };
  }, []);

  return (
    <>
      {/* Live viewers indicator */}
      <div className="fixed bottom-24 left-4 z-40 bg-white rounded-full shadow-lg px-4 py-2 border-2 border-gray-200 animate-in slide-in-from-left">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
          <span className="text-sm font-semibold text-gray-700">
            {liveViewers} pessoas a ver
          </span>
        </div>
      </div>

      {/* Notification popup */}
      {currentNotification && (
        <div className="fixed bottom-4 left-4 z-50 bg-white rounded-lg shadow-2xl p-4 border-l-4 border-green-500 max-w-sm animate-in slide-in-from-left duration-300">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">
                {currentNotification.name} em {currentNotification.city}
              </p>
              <p className="text-xs text-gray-600">
                {currentNotification.action} há {currentNotification.timeAgo}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Weekly clients badge */}
      <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
        <CheckCircle className="w-4 h-4 text-green-600" />
        <span className="text-sm font-semibold text-green-900">
          {weeklyClients} clientes atendidos esta semana
        </span>
      </div>
    </>
  );
}
