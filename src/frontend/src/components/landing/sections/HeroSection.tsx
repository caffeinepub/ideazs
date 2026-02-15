import { Rocket, Sparkles } from 'lucide-react';
import { GlowButton } from '../ui/GlowButton';
import { HeroBackground } from '../effects/HeroBackground';

interface HeroSectionProps {
  onScrollToHowItWorks: () => void;
  onScrollToPricing: () => void;
}

export function HeroSection({ onScrollToHowItWorks, onScrollToPricing }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/90">Launch faster than ever</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Launch Your Idea.
            </span>
            <br />
            <span className="text-foreground">Sell in Minutes.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            IDEAZS turns your product idea into a stunning, ready-to-share launch page — instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <GlowButton size="lg" onClick={onScrollToPricing} className="text-lg px-8 py-6">
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Launch
            </GlowButton>
            
            <GlowButton size="lg" variant="outline" onClick={onScrollToHowItWorks} className="text-lg px-8 py-6">
              See How It Works
            </GlowButton>
          </div>
        </div>
      </div>
    </div>
  );
}
