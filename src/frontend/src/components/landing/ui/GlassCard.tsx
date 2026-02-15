import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass rounded-2xl shadow-lg',
        hover && 'hover-glow',
        className
      )}
    >
      {children}
    </div>
  );
}
