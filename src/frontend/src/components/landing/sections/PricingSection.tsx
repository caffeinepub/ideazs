import { Section } from '../ui/Section';
import { PricingCard } from '../ui/PricingCard';
import { Check } from 'lucide-react';

export function PricingSection() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for testing your idea',
      features: [
        '1 launch page',
        'Basic templates',
        'Mobile optimized',
        'Shareable link',
        'Community support',
      ],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'For serious launchers',
      features: [
        'Unlimited launch pages',
        'Premium templates',
        'Custom domain',
        'Advanced analytics',
        'Priority support',
        'A/B testing',
        'Remove IDEAZS branding',
      ],
      highlighted: true,
    },
    {
      name: 'Elite',
      price: '$99',
      period: '/month',
      description: 'For agencies and teams',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'White-label solution',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
      ],
      highlighted: false,
    },
  ];

  return (
    <Section className="py-24">
      <div className="text-center max-w-4xl mx-auto space-y-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Simple, <span className="text-primary">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Choose the plan that fits your launch goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingCard key={index} {...tier} />
          ))}
        </div>
      </div>
    </Section>
  );
}
