import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface IconBadgeProps {
  children: ReactNode;
  className?: string;
}

export function IconBadge({ children, className }: IconBadgeProps) {
  return (
    <div
      className={cn(
        'w-16 h-16 rounded-2xl glass-strong flex items-center justify-center text-primary',
        'transition-all duration-300 hover:scale-110 hover:glow-primary',
        className
      )}
    >
      {children}
    </div>
  );
}
