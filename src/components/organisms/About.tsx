import React from 'react';
import { Button } from '../atoms/Button';
import { Workflow, TrendingUp, FileCheck, Rocket } from 'lucide-react';
import { GeometricBackground } from '../ui/geometric-background';

export interface AboutProps {
  className?: string;
}

export const About: React.FC<AboutProps> = ({ className = '' }) => {
  // Logo placeholders - using same SVG as customers section
  const leftLogos = [
    { name: 'Asana', src: '/coinbase-logo.svg' },
    { name: 'Framer', src: '/coinbase-logo.svg' },
  ];

  const rightLogos = [
    { name: 'Coinbase', src: '/coinbase-logo.svg' },
    { name: 'Slack', src: '/coinbase-logo.svg' },
  ];

  const middleFeatures = [
    {
      title: 'Connect',
      description: 'We connect talented creators with premium brands that align with their values and audience.',
      icon: Workflow,
    },
    {
      title: 'Elevate',
      description: 'Our strategic approach elevates brands through authentic partnerships with the right talent.',
      icon: TrendingUp,
    },
  ];

  const rightFeatures = [
    {
      title: 'Empower',
      description: 'We empower creators with clarity, structure, and high-value strategy that drives growth.',
      icon: FileCheck,
    },
    {
      title: 'Deliver',
      description: 'Every partnership is built to maximize opportunity and deliver world-class results for both talent and brands.',
      icon: Rocket,
    },
  ];

  return (
    <section 
      className={`relative w-full py-16 md:py-24 overflow-hidden ${className}`} 
      id="about"
      style={{ backgroundColor: '#030303' }}
    >
      <GeometricBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="space-y-16 lg:space-y-24">
          {/* Top Container - Trusted by text and Logos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Trusted by text */}
            <div className="space-y-4">
              <h3
                className="text-xl md:text-2xl font-light animate-fade-in-up"
                style={{ color: '#FFFFFF', letterSpacing: '-0.025em' }}
              >
                Connecting talent with brands worldwide.
              </h3>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{
                  color: '#A1A1A1',
                  animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
                  opacity: 0,
                }}
              >
                We build lasting partnerships between creators and brands, from emerging talent to established influencers.
              </p>
            </div>

            {/* Middle Column - Logos */}
            <div
              className="space-y-6"
              style={{
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards',
                opacity: 0,
              }}
            >
              {leftLogos.map((logo, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img src={logo.src} alt={logo.name} className="h-6 w-auto opacity-70" />
                </div>
              ))}
            </div>

            {/* Right Column - Logos */}
            <div
              className="space-y-6"
              style={{
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards',
                opacity: 0,
              }}
            >
              {rightLogos.map((logo, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img src={logo.src} alt={logo.name} className="h-6 w-auto opacity-70" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Container - Main content and Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Main Text Content */}
            <div className="space-y-6 flex flex-col">
              <div className="space-y-4">
                <h3
                  className="text-xl md:text-2xl font-light animate-fade-in-up"
                  style={{ color: '#FFFFFF', letterSpacing: '-0.025em' }}
                >
                  Building partnerships that drive results
                </h3>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    color: '#A1A1A1',
                    animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
                    opacity: 0,
                  }}
                >
                  Zygon connects talented creators with premium brands, creating authentic partnerships that maximize opportunity and deliver world-class results.
                </p>
              </div>
            </div>

            {/* Middle Column - Features */}
            <div
              className="space-y-8"
              style={{
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards',
                opacity: 0,
              }}
            >
              {middleFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <IconComponent size={20} style={{ color: '#A1A1A1' }} />
                      <h4 className="text-lg font-medium" style={{ color: '#FFFFFF' }}>
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#A1A1A1' }}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Column - Features */}
            <div
              className="space-y-8"
              style={{
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards',
                opacity: 0,
              }}
            >
              {rightFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <IconComponent size={20} style={{ color: '#A1A1A1' }} />
                      <h4 className="text-lg font-medium" style={{ color: '#FFFFFF' }}>
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#A1A1A1' }}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

