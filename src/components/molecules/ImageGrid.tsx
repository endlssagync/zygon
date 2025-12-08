import React from 'react';
import { TalentCard } from './TalentCard';

export interface ImageGridProps {
  className?: string;
}

export const ImageGrid: React.FC<ImageGridProps> = ({ className = '' }) => {
  // Creator data with images and follower counts
  const allCreators = [
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

  // Split creators into two columns
  const leftColumnItems = allCreators.filter((_, index) => index % 2 === 0);
  const rightColumnItems = allCreators.filter((_, index) => index % 2 === 1);

  // Duplicate items for seamless loop
  const leftDuplicated = [...leftColumnItems, ...leftColumnItems];
  const rightDuplicated = [...rightColumnItems, ...rightColumnItems];

  return (
    <div className={`grid grid-cols-2 gap-6 h-[600px] overflow-hidden ${className}`}>
      {/* Left Column - Animates Up */}
      <div
        className="relative h-full overflow-hidden rounded-2xl"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        }}
      >
        <div
          className="flex flex-col gap-6 py-4 animate-ticker-up"
          style={{
            willChange: 'transform',
          }}
        >
          {leftDuplicated.map((creator, index) => (
            <TalentCard
              key={`${creator.name}-left-${index}`}
              name={creator.name}
              followers={creator.followers}
              image={creator.image}
              className="w-full h-[320px]"
            />
          ))}
        </div>
      </div>

      {/* Right Column - Animates Down */}
      <div
        className="relative h-full overflow-hidden rounded-2xl"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        }}
      >
        <div
          className="flex flex-col gap-6 py-4 animate-ticker-down"
          style={{
            willChange: 'transform',
          }}
        >
          {rightDuplicated.map((creator, index) => (
            <TalentCard
              key={`${creator.name}-right-${index}`}
              name={creator.name}
              followers={creator.followers}
              image={creator.image}
              className="w-full h-[320px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

