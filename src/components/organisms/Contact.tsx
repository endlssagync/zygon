import React from 'react';
import { ButtonGroup } from '../molecules/ButtonGroup';

export interface ContactProps {
  className?: string;
}

export const Contact: React.FC<ContactProps> = ({ className = '' }) => {
  return (
    <section className={`w-full py-16 md:py-24 ${className}`} id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="rounded-2xl p-8 md:p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, #1E1E1E 0%, #151515 100%)',
            border: '1px solid #3A3A3A',
          }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 animate-fade-in-up"
            style={{ color: '#FFFFFF', letterSpacing: '-0.025em' }}
          >
            Ready to Connect?
          </h2>
          <p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            style={{
              color: '#A1A1A1',
              animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
              opacity: 0,
            }}
          >
            Whether you're a creator looking for brand partnerships or a brand seeking talent, let's connect and build lasting partnerships that drive results
          </p>
          <div
            style={{
              animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards',
              opacity: 0,
            }}
          >
            <ButtonGroup
              buttons={[
                { label: 'Contact Us', variant: 'primary', href: 'mailto:garrett@zygontalent.agency' },
                { label: 'Schedule a Call', variant: 'outline', href: 'mailto:garrett@zygontalent.agency?subject=Schedule a Call' },
              ]}
              className="justify-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

