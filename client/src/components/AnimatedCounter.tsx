'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
 end: number;
 duration?: number;
 suffix?: string;
 prefix?: string;
 className?: string;
}

export default function AnimatedCounter({
 end,
 duration = 2000,
 suffix = '',
 prefix = '',
 className = ''
}: AnimatedCounterProps) {
 const [count, setCount] = useState(0);
 const [isVisible, setIsVisible] = useState(false);
 const ref = useRef<HTMLSpanElement>(null);

 useEffect(() => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting && !isVisible) {
 setIsVisible(true);
 }
 },
 { threshold: 0.1 }
 );

 if (ref.current) {
 observer.observe(ref.current);
 }

 return () => observer.disconnect();
 }, [isVisible]);

 useEffect(() => {
 if (!isVisible) return;

 let startTime: number | null = null;
 const startValue = 0;

 const animate = (currentTime: number) => {
 if (!startTime) startTime = currentTime;
 const progress = Math.min((currentTime - startTime) / duration, 1);

 // Easing function (easeOutCubic)
 const easeProgress = 1 - Math.pow(1 - progress, 3);
 const currentCount = Math.floor(startValue + (end - startValue) * easeProgress);

 setCount(currentCount);

 if (progress < 1) {
 requestAnimationFrame(animate);
 }
 };

 requestAnimationFrame(animate);
 }, [isVisible, end, duration]);

 return (
 <span ref={ref} className={className}>
 {prefix}{count}{suffix}
 </span>
 );
}
