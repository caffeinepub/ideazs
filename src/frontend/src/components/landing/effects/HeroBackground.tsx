import { useEffect, useRef } from 'react';

export function HeroBackground() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Create floating particles
    const particleCount = 20;
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 100 + 50;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 8}s`;
      particle.style.animationDuration = `${Math.random() * 4 + 6}s`;
      
      canvasRef.current.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(particle => particle.remove());
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-50" />
      <div ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
