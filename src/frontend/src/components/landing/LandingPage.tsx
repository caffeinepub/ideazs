import { useEffect, useRef } from 'react';
import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { PricingSection } from './sections/PricingSection';
import { FinalCTASection } from './sections/FinalCTASection';
import { Footer } from './sections/Footer';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function LandingPage() {
  const heroRef = useRef<HTMLElement>(null);
  const problemRef = useRef<HTMLElement>(null);
  const howItWorksRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const finalCTARef = useRef<HTMLElement>(null);

  useScrollReveal([
    heroRef,
    problemRef,
    howItWorksRef,
    featuresRef,
    pricingRef,
    finalCTARef,
  ]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      <section ref={heroRef} id="hero" className="reveal">
        <HeroSection onScrollToHowItWorks={() => scrollToSection('how-it-works')} onScrollToPricing={() => scrollToSection('pricing')} />
      </section>

      <section ref={problemRef} id="problem" className="reveal">
        <ProblemSection />
      </section>

      <section ref={howItWorksRef} id="how-it-works" className="reveal">
        <HowItWorksSection />
      </section>

      <section ref={featuresRef} id="features" className="reveal">
        <FeaturesSection />
      </section>

      <section ref={pricingRef} id="pricing" className="reveal">
        <PricingSection />
      </section>

      <section ref={finalCTARef} id="final-cta" className="reveal">
        <FinalCTASection onScrollToPricing={() => scrollToSection('pricing')} />
      </section>

      <Footer />
    </div>
  );
}
