import { GlassCard } from './GlassCard';
import { IconBadge } from './IconBadge';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <GlassCard key={index} className="p-8 space-y-4">
          <IconBadge>
            <feature.icon className="w-7 h-7" />
          </IconBadge>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
