import { SiX, SiGithub, SiLinkedin } from 'react-icons/si';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'ideazs-app';

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <span>© {currentYear} IDEAZS. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <SiX className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <SiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
