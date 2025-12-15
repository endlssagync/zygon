import React from 'react';
import { Link } from 'react-router-dom';
import { HorizontalTicker } from '../molecules/HorizontalTicker';
import { Button } from '../atoms/Button';

export interface TalentShowcaseProps {
  className?: string;
}

export const TalentShowcase: React.FC<TalentShowcaseProps> = ({ className = '' }) => {
  // Creator data with images and follower counts
  const talentData = [
    { name: 'DavidVlogz', followers: 1076100, image: '/creators/davidvlogz_yt.jpg' },
    { name: 'Derq Rod', followers: 453160, image: '/creators/derqrodriguez.jpg' },
    { name: 'Ed Garcito', followers: 1054000, image: '/creators/edgarcito.jpg' },
    { name: 'Ymir Cast', followers: 178300, image: '/creators/ymircast.jpeg' },
    { name: 'Chino', followers: 5597000, image: '/creators/Chino.jpg' },
    { name: 'Alan', followers: 3648000, image: '/creators/alannsito6.jpg' },
    { name: 'Leanne', followers: 760600, image: '/creators/luvv.leannee.jpg' },
    { name: 'Gabe', followers: 3096000, image: '/creators/itzmegab3.jpg' },
    { name: 'EdwinRG', followers: 1467000, image: '/creators/eedwinrg.jpg' },
    { name: 'Vane', followers: 551000, image: '/creators/Vane.jpg' },
    { name: 'Adrian', followers: 320000, image: '/creators/Adrian.jpg' },
    { name: 'Ike', followers: 200000, image: '/creators/ike.png' },
  ];

  return (
    <section className={`w-full py-16 md:py-24 ${className}`} id="talent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 animate-fade-in-up"
            style={{ color: '#FFFFFF', letterSpacing: '-0.025em' }}
          >
            18,000,000+ Creator Network
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
            style={{
              color: '#A1A1A1',
              animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
              opacity: 0,
            }}
          >
            Discover the creators and brands we've connected to build lasting partnerships that drive results
          </p>
        </div>

        {/* Horizontal Ticker */}
        <div
          className="mb-12"
          style={{
            animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards',
            opacity: 0,
          }}
        >
          <HorizontalTicker items={talentData} />
        </div>

        {/* CTA */}
        <div
          className="text-center"
          style={{
            animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards',
            opacity: 0,
          }}
        >
          <Link 
            to="/talent"
            onClick={() => {
              // Scroll to top when navigating to talent page
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Button variant="primary">View Full Talent Roster</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

