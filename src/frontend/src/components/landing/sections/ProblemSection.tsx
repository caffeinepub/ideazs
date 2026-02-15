import { Section } from '../ui/Section';
import { AlertCircle, Clock, Code, Palette } from 'lucide-react';

export function ProblemSection() {
  return (
    <Section className="py-24">
      <div className="text-center max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Ideas Don't Fail. <span className="text-primary">Launches Do.</span>
          </h2>
          
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Most brilliant product ideas never see the light of day. Not because they're bad ideas, 
            but because launching them feels impossible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 pt-8">
          <div className="glass rounded-2xl p-8 space-y-4 hover-glow">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Time Barriers</h3>
            <p className="text-foreground/60">
              Building a launch page from scratch takes weeks of work you don't have.
            </p>
          </div>
          
          <div className="glass rounded-2xl p-8 space-y-4 hover-glow">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Palette className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Design Barriers</h3>
            <p className="text-foreground/60">
              Creating something that looks professional requires design skills most founders lack.
            </p>
          </div>
          
          <div className="glass rounded-2xl p-8 space-y-4 hover-glow">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Technical Barriers</h3>
            <p className="text-foreground/60">
              Hosting, domains, and deployment complexity stop ideas before they start.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
