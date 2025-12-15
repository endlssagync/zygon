import React, { useState, useEffect } from 'react';
import { Star, Handshake, TrendingUp, Film } from 'lucide-react';

export interface ServicesProps {
  className?: string;
}

export const Services: React.FC<ServicesProps> = ({ className = '' }) => {
  const services = [
    {
      title: 'Talent-Brand Connections',
      description: 'We connect talented creators with premium brands for authentic partnerships that drive results.',
      icon: Star,
      image: '/services-graphics/talent-brand-connections.jpg',
      details: 'Zygon specializes in connecting the right talent with the right brands. We leverage our extensive network and strategic insights to create partnerships that align with brand values and creator audiences. Our matchmaking process ensures authentic collaborations that maximize opportunity and deliver world-class results for both parties.',
    },
    {
      title: 'Brand Partnership Management',
      description: 'Comprehensive partnership development and management from strategy to execution.',
      icon: Handshake,
      image: '/services-graphics/brand-partnership-management.jpg',
      details: 'We build lasting partnerships between creators and brands through clarity, structure, and high-value strategy. Our team handles every aspect of partnership management, from initial connection to campaign execution and performance analysis. We ensure each collaboration elevates the brand while empowering the creator with meaningful opportunities.',
    },
    {
      title: 'Strategic Growth Planning',
      description: 'Data-driven strategies that drive growth and maximize opportunities for creators and brands.',
      icon: TrendingUp,
      image: '/services-graphics/strategic-growth-planning.jpg',
      details: 'Through strategic planning and data-driven insights, we identify opportunities that drive growth for both creators and brands. Our approach combines industry expertise with clear structure to unlock new possibilities and accelerate success. We create actionable roadmaps that transform potential into measurable results.',
    },
    {
      title: 'Partnership Optimization',
      description: 'Strategic planning and execution support to ensure partnerships deliver maximum value.',
      icon: Film,
      image: '/services-graphics/partnership-optimization.jpg',
      details: 'We optimize every partnership to ensure it delivers world-class results. Our team provides strategic guidance throughout the collaboration process, helping creators and brands align their goals and execute campaigns that resonate with audiences. We focus on maximizing opportunity and building relationships that last.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);

  // Handle smooth transitions when activeIndex changes
  useEffect(() => {
    if (activeIndex !== displayIndex) {
      setIsTransitioning(true);
      
      // Fade out current content
      const fadeOutTimeout = setTimeout(() => {
        setDisplayIndex(activeIndex);
        
        // Fade in new content
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300); // Half of transition duration
      
      return () => clearTimeout(fadeOutTimeout);
    }
  }, [activeIndex, displayIndex]);

  // Auto-rotate services with progress animation
  useEffect(() => {
    if (isTransitioning) return; // Don't update progress during transition
    
    setProgress(0); // Reset progress when activeIndex changes
    
    const duration = 5000; // 5 seconds
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);
      
      if (newProgress < 100) {
        requestAnimationFrame(animate);
      } else {
        // Move to next service when progress completes
        setActiveIndex((prev) => (prev + 1) % services.length);
      }
    };
    
    const animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [activeIndex, services.length, isTransitioning]);

  const activeService = services[displayIndex];

  return (
    <section className={`w-full py-16 md:py-24 ${className}`} id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Details */}
          <div className="space-y-6">
            <div className="text-sm uppercase tracking-wider" style={{ color: '#A1A1A1' }}>
              // WHAT WE DO
            </div>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl font-light transition-all duration-300 ease-in-out"
              style={{
                color: '#FFFFFF',
                letterSpacing: '-0.025em',
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
              }}
            >
              {activeService.title}
            </h3>
            <p
              className="text-base md:text-lg leading-relaxed transition-all duration-300 ease-in-out"
              style={{
                color: '#FFFFFF',
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
              }}
            >
              {activeService.details}
            </p>
          </div>

          {/* Right Column - Rotating Content */}
          <div className="relative">
            {/* Service Image */}
            <div className="w-full aspect-square rounded-2xl overflow-hidden">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'scale(0.98)' : 'scale(1)',
                }}
              />
            </div>

            {/* Motion Line Indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {services.map((_, index) => {
                const isActive = index === activeIndex;
                const baseWidth = 32;
                const inactiveWidth = 8;
                
                return (
                  <button
                    key={index}
                    onClick={() => {
                      if (index !== activeIndex) {
                        setActiveIndex(index);
                        setProgress(0);
                      }
                    }}
                    className="relative overflow-hidden transition-all duration-300"
                    style={{
                      height: '3px',
                      width: isActive ? `${baseWidth}px` : `${inactiveWidth}px`,
                      borderRadius: '2px',
                      cursor: 'pointer',
                      backgroundColor: '#2A2A2A',
                    }}
                    aria-label={`Go to ${services[index].title}`}
                  >
                    {isActive && (
                      <div
                        className="absolute top-0 left-0 h-full transition-none"
                        style={{
                          backgroundColor: '#FFFFFF',
                          width: `${progress}%`,
                          borderRadius: '2px',
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

