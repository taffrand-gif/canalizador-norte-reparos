'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
interface ButtonRippleProps {
 children: ReactNode;
 className?: string;
 onClick?: () => void;
 href?: string;
 type?: 'button' | 'submit' | 'reset';
}
export default function ButtonRipple({
 children,
 className = '',
 onClick,
 href,
 type = 'button'
}: ButtonRippleProps) {
 const Component = href ? motion.a : motion.button;
 const props = href ? { href } : { type, onClick };
 return (
 <Component
 {...props}
 whileTap={{ scale: 0.95 }}
 whileHover={{ scale: 1.02 }}
 transition={{
 type: 'spring',
 stiffness: 400,
 damping: 17
 }}
 className={className}
 >
 {children}
 </Component>
 );
}
