import { GlassCard } from './GlassCard';
import { GlowButton } from './GlowButton';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <GlassCard
      className={cn(
        'p-8 space-y-6 relative',
        highlighted && 'border-2 border-primary glow-primary scale-105'
      )}
      hover={!highlighted}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
          Most Popular
        </div>
      )}
      
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-foreground/60 text-sm">{description}</p>
      </div>
      
      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-bold">{price}</span>
        {period && <span className="text-foreground/60">{period}</span>}
      </div>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>
      
      <GlowButton
        variant={highlighted ? 'default' : 'outline'}
        className="w-full"
        size="lg"
      >
        Get Started
      </GlowButton>
    </GlassCard>
  );
}
