import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
interface LocationContextType {
 detectedCity: string | null;
 selectedCity: string | null;
 isLoading: boolean;
 error: string | null;
 setSelectedCity: (city: string) => void;
 getCurrentCity: () => string;
}
const LocationContext = createContext<LocationContextType | undefined>(undefined);
const STORAGE_KEY = 'user_location';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
interface CachedLocation {
 city: string;
 timestamp: number;
}
export function LocationProvider({ children }: { children: ReactNode }) {
 const [detectedCity, setDetectedCity] = useState<string | null>(null);
 const [selectedCity, setSelectedCity] = useState<string | null>(null);
 const [isLoading] = useState(false);
 const [error] = useState<string | null>(null);
 useEffect(() => {
 // Check cache first
 const cached = localStorage.getItem(STORAGE_KEY);
 if (cached) {
 try {
 const data: CachedLocation = JSON.parse(cached);
 if (Date.now() - data.timestamp < CACHE_DURATION) {
 setDetectedCity(data.city);
 return;
 }
 } catch (e) {
 localStorage.removeItem(STORAGE_KEY);
 }
 }
 // No IP geolocation: the visitor's IP is not sent to any third party.
 // Without a stored choice, getCurrentCity() falls back to Bragança.
 }, []);
 const cacheLocation = (city: string) => {
 const data: CachedLocation = {
 city,
 timestamp: Date.now()
 };
 localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
 };
 const handleSetSelectedCity = (city: string) => {
 setSelectedCity(city);
 cacheLocation(city);
 };
 const getCurrentCity = (): string => {
 return selectedCity || detectedCity || 'Bragança';
 };
 return (
 <LocationContext.Provider
 value={{
 detectedCity,
 selectedCity,
 isLoading,
 error,
 setSelectedCity: handleSetSelectedCity,
 getCurrentCity
 }}
 >
 {children}
 </LocationContext.Provider>
 );
}
export function useLocation() {
 const context = useContext(LocationContext);
 if (context === undefined) {
 throw new Error('useLocation must be used within a LocationProvider');
 }
 return context;
}
