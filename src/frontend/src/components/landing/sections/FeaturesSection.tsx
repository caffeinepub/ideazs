import { Section } from '../ui/Section';
import { FeatureGrid } from '../ui/FeatureGrid';
import { Smartphone, Layout, Share2, BarChart3, Zap } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Auto-generated product page',
      description: 'AI-powered page generation that captures your vision perfectly.',
    },
    {
      icon: Smartphone,
      title: 'Mobile optimized design',
      description: 'Looks stunning on every device, from phones to desktops.',
    },
    {
      icon: Layout,
      title: 'Built-in conversion layout',
      description: 'Proven layouts designed to turn visitors into customers.',
    },
    {
      icon: Share2,
      title: 'Shareable launch link',
      description: 'Get a beautiful URL you can share anywhere instantly.',
    },
    {
      icon: BarChart3,
      title: 'Analytics (Pro)',
      description: 'Track views, clicks, and conversions with detailed insights.',
    },
  ];

  return (
    <Section className="py-24">
      <div className="text-center max-w-4xl mx-auto space-y-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Everything You Need to <span className="text-primary">Launch Successfully</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Powerful features that help you launch faster and convert better.
          </p>
        </div>
        
        <FeatureGrid features={features} />
      </div>
    </Section>
  );
}
