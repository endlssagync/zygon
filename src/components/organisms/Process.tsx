import React from 'react';
import { ProcessStep } from '../molecules/ProcessStep';
import { Button } from '../atoms/Button';

export interface ProcessProps {
  className?: string;
}

export const Process: React.FC<ProcessProps> = ({ className = '' }) => {
  const steps = [
    {
      number: 1,
      title: 'Discovery & Strategy',
      description: 'We begin with a comprehensive assessment of your goals, audience, and opportunities to craft a tailored strategy.',
    },
    {
      number: 2,
      title: 'Partnership Development',
      description: 'Our team identifies and negotiates high-value brand partnerships that align with your brand and audience.',
    },
    {
      number: 3,
      title: 'Execution & Growth',
      description: 'We manage campaigns, optimize performance, and continuously refine strategies to maximize results.',
    },
    {
      number: 4,
      title: 'Long-term Success',
      description: 'We build lasting relationships and provide ongoing support to ensure sustained growth and opportunity.',
    },
  ];

  return (
    <section className={`w-full py-16 md:py-24 ${className}`} id="process">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 animate-fade-in-up"
            style={{ color: '#FFFFFF', letterSpacing: '-0.025em' }}
          >
            How It Works
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{
              color: '#A1A1A1',
              animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
              opacity: 0,
            }}
          >
            A structured approach to building your brand and maximizing opportunities
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto space-y-8 mb-12">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              delay={0.3 + index * 0.1}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center"
          style={{
            animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.7s forwards',
            opacity: 0,
          }}
        >
          <a href="#contact">
            <Button variant="primary">Start Your Journey</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

