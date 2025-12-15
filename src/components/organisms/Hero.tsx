import React from 'react';
import { ButtonGroup } from '../molecules/ButtonGroup';
import { SocialProof } from '../molecules/SocialProof';
import { ImageGrid } from '../molecules/ImageGrid';
import { GeometricBackground } from '../ui/geometric-background';

export interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <section className={`relative w-full py-12 md:py-20 overflow-hidden ${className}`} style={{ backgroundColor: '#030303' }}>
      <GeometricBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Area */}
          <div className="space-y-8">
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight animate-fade-in-up" style={{ color: '#FFFFFF', letterSpacing: '-0.025em' }}>
              Where Talent Meets Brands
            </h1>

            {/* Description */}
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{
                color: '#A1A1A1',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
                opacity: 0,
              }}
            >
              Zygon Talent Agency connects creators with brands to build lasting partnerships. We empower talent, elevate brands, and deliver world-class results through clarity, structure, and high-value strategy that drives growth and maximizes opportunity.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards',
                opacity: 0,
              }}
            >
              <ButtonGroup
                buttons={[
                  { label: 'Connect with Brands', variant: 'primary', href: '#contact' },
                  { label: 'Find Talent', variant: 'outline', href: '#talent' },
                ]}
              />
            </div>

            {/* Social Proof */}
            <div
              style={{
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards',
                opacity: 0,
              }}
            >
              <SocialProof 
                userCount={496}
                avatars={[
                  { src: '/creators/davidvlogz_yt.jpg', alt: 'DavidVlogz' },
                  { src: '/creators/derqrodriguez.jpg', alt: 'Derq Rod' },
                  { src: '/creators/edgarcito.jpg', alt: 'Ed Garcito' },
                  { src: '/creators/Chino.jpg', alt: 'Chino' },
                ]}
              />
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="hidden lg:block">
            <ImageGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

