import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';
import { IconBadge } from '../ui/IconBadge';
import { FileText, Palette, Rocket } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: FileText,
      title: 'Describe Your Product',
      description: 'Tell us about your idea in plain English. No technical jargon required.',
    },
    {
      icon: Palette,
      title: 'Choose Your Style',
      description: 'Pick from beautiful, conversion-optimized templates that match your brand.',
    },
    {
      icon: Rocket,
      title: 'Launch Instantly',
      description: 'Get a stunning, shareable launch page in seconds. Start collecting signups immediately.',
    },
  ];

  return (
    <Section className="py-24">
      <div className="text-center max-w-4xl mx-auto space-y-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Launch in <span className="text-primary">Three Simple Steps</span>
          </h2>
          <p className="text-xl text-foreground/70">
            From idea to live launch page in minutes, not weeks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <GlassCard key={index} className="p-8 space-y-6 text-center">
              <div className="flex justify-center">
                <IconBadge>
                  <step.icon className="w-8 h-8" />
                </IconBadge>
              </div>
              
              <div className="space-y-3">
                <div className="text-sm font-semibold text-primary">Step {index + 1}</div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{step.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
