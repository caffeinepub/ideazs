import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ variant = 'default', size = 'default', className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          'transition-all duration-300',
          variant === 'default' && 'bg-primary hover:bg-primary/90 glow-primary hover:shadow-glow-lg',
          variant === 'outline' && 'border-primary/50 hover:border-primary hover:bg-primary/10',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

GlowButton.displayName = 'GlowButton';
