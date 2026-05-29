import { ReactNode } from 'react';

interface GlassmorphicCardProps {
 children: ReactNode;
 className?: string;
 blur?: 'sm' | 'md' | 'lg';
 opacity?: number;
}

export default function GlassmorphicCard({
 children,
 className = '',
 blur = 'md',
 opacity = 10
}: GlassmorphicCardProps) {
 const blurClasses = {
 sm: 'backdrop-blur-sm',
 md: 'backdrop-blur-md',
 lg: 'backdrop-blur-lg'
 };

 return (
 <div
 className={`
 ${blurClasses[blur]}
 bg-white/${opacity}
 border border-white/20
 rounded-2xl
 shadow-xl
 ${className}
 `}
 style={{
 background: `linear-gradient(135deg, rgba(255, 255, 255, ${opacity / 100}) 0%, rgba(255, 255, 255, ${opacity / 150}) 100%)`
 }}
 >
 {children}
 </div>
 );
}
