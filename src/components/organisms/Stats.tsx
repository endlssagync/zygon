import React from 'react';
import { StatCard } from '../molecules/StatCard';

export interface StatsProps {
  className?: string;
}

export const Stats: React.FC<StatsProps> = ({ className = '' }) => {
  const stats = [
    {
      value: 500,
      label: 'Creators Represented',
      suffix: '+',
    },
    {
      value: 1000,
      label: 'Brand Partnerships',
      suffix: '+',
    },
    {
      value: 50,
      label: 'Million Followers',
      suffix: '+',
      prefix: '',
    },
    {
      value: 95,
      label: 'Client Satisfaction',
      suffix: '%',
    },
  ];

  return (
    <section className={`w-full py-16 md:py-24 ${className}`} id="stats">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 animate-fade-in-up"
            style={{ color: '#FFFFFF', letterSpacing: '-0.025em' }}
          >
            By The Numbers
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{
              color: '#A1A1A1',
              animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
              opacity: 0,
            }}
          >
            Results that speak for themselves
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              prefix={stat.prefix}
              delay={0.3 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

