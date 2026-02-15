import { Sparkles } from 'lucide-react';
import { Section } from '../ui/Section';
import { GlowButton } from '../ui/GlowButton';
import { DividerGlow } from '../ui/DividerGlow';

interface FinalCTASectionProps {
  onScrollToPricing: () => void;
}

export function FinalCTASection({ onScrollToPricing }: FinalCTASectionProps) {
  return (
    <>
      <DividerGlow />
      <Section className="py-32">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your Idea Deserves to <span className="text-primary">Be Seen.</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Stop waiting for the perfect moment. Launch your idea today and start building your audience.
            </p>
          </div>
          
          <GlowButton size="lg" onClick={onScrollToPricing} className="text-lg px-10 py-7">
            <Sparkles className="w-5 h-5 mr-2" />
            Launch with IDEAZS Now
          </GlowButton>
        </div>
      </Section>
    </>
  );
}
