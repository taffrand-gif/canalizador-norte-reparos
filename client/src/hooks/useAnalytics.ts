import { useEffect, useRef, useCallback } from 'react';
declare global {
 interface Window {
 gtag: (...args: any[]) => void;
 }
}
export const useAnalytics = () => {
 const trackEvent = useCallback((
 eventName: string,
 params: {
 event_category?: string;
 event_label?: string;
 value?: number;
 [key: string]: any;
 }
 ) => {
 if (typeof window !== 'undefined' && window.gtag) {
 window.gtag('event', eventName, params);
 }
 }, []);

 // Clics téléphone et WhatsApp : mesurés une seule fois par /call-tracking.js (écouteur délégué).
 // Ces fonctions restent pour la compatibilité des composants, sans émettre d'événement.
 const trackPhoneClick = useCallback((_phoneNumber: string) => {}, []);

 const trackWhatsAppClick = useCallback((_source: string) => {}, []);

 const trackQuoteCalculated = useCallback((service: string, urgency: string, price: string) => {
 trackEvent('quote_calculated', {
 event_category: 'engagement',
 event_label: `Service: ${service}`,
 urgency,
 estimated_price: price});
 }, [trackEvent]);

 const trackQuoteSentWhatsApp = useCallback((service: string) => {
 trackEvent('quote_sent_whatsapp', {
 event_category: 'conversion',
 event_label: `Service: ${service}`,
 value: 1});
 }, [trackEvent]);

 const trackExitPopupShown = useCallback(() => {
 trackEvent('exit_popup_shown', {
 event_category: 'engagement',
 event_label: 'Exit Intent Triggered'});
 }, [trackEvent]);

 // Clic contact dans le popup : mesuré par /call-tracking.js (link_position = "popup"), pas de second événement.
 const trackExitPopupConversion = useCallback((_action: string) => {}, []);

 const trackScrollDepth = useCallback((percentage: number) => {
 trackEvent('scroll_depth', {
 event_category: 'engagement',
 event_label: `${percentage}% scrolled`,
 value: percentage});
 }, [trackEvent]);

 const trackTimeOnPage = useCallback((seconds: number) => {
 trackEvent('time_on_page', {
 event_category: 'engagement',
 event_label: `${seconds} seconds`,
 value: seconds});
 }, [trackEvent]);

 return {
 trackEvent,
 trackPhoneClick,
 trackWhatsAppClick,
 trackQuoteCalculated,
 trackQuoteSentWhatsApp,
 trackExitPopupShown,
 trackExitPopupConversion,
 trackScrollDepth,
 trackTimeOnPage
 };
};

// Hook for scroll depth tracking
export const useScrollDepthTracking = () => {
 const { trackScrollDepth } = useAnalytics();
 const tracked = useRef<Set<number>>(new Set());
 useEffect(() => {
 const handleScroll = () => {
 const scrollPercentage = Math.round(
 (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
 );
 const milestones = [25, 50, 75, 90, 100];
 milestones.forEach(milestone => {
 if (scrollPercentage >= milestone && !tracked.current.has(milestone)) {
 tracked.current.add(milestone);
 trackScrollDepth(milestone);
 }
 });
 };
 window.addEventListener('scroll', handleScroll, { passive: true });
 return () => window.removeEventListener('scroll', handleScroll);
 }, [trackScrollDepth]);
};

// Hook for time on page tracking
export const useTimeOnPageTracking = () => {
 const { trackTimeOnPage } = useAnalytics();
 const tracked = useRef<Set<number>>(new Set());
 useEffect(() => {
 const milestones = [30, 60, 120, 300]; // 30s, A confirmar, A confirmar, A confirmar
 const timers: NodeJS.Timeout[] = [];
 milestones.forEach(seconds => {
 const timer = setTimeout(() => {
 if (!tracked.current.has(seconds)) {
 tracked.current.add(seconds);
 trackTimeOnPage(seconds);
 }
 }, seconds * 1000);
 timers.push(timer);
 });
 return () => timers.forEach(timer => clearTimeout(timer));
 }, [trackTimeOnPage]);
};