import React from 'react';
import { TestimonialCard } from '../molecules/TestimonialCard';

export interface TestimonialsProps {
  className?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ className = '' }) => {
  const testimonials = [
    {
      quote: 'Zygon transformed my career. Their strategic approach and brand partnerships opened doors I never imagined possible.',
      author: 'Sarah Chen',
      role: 'Content Creator',
    },
    {
      quote: 'Working with Zygon has been a game-changer. They understand both creator needs and brand objectives, creating win-win partnerships.',
      author: 'Marcus Johnson',
      role: 'Brand Manager',
    },
    {
      quote: 'The clarity and structure Zygon provides is unmatched. They turned my passion into a sustainable business.',
      author: 'Alex Rivera',
      role: 'Digital Creator',
    },
  ];

  return (
    <section className={`w-full py-16 md:py-24 ${className}`} id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 animate-fade-in-up"
            style={{ color: '#FFFFFF', letterSpacing: '-0.025em' }}
          >
            What People Say
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{
              color: '#A1A1A1',
              animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
              opacity: 0,
            }}
          >
            Trusted by creators and brands alike
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              delay={0.3 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


