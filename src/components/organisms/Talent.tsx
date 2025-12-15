import React from 'react';
import { TalentCard, SocialLinks } from '../molecules/TalentCard';
import { Header } from './Header';
import { Footer } from './Footer';

export interface CreatorData {
  name: string;
  followers: number;
  image: string;
  socialLinks: SocialLinks;
}

export const Talent: React.FC = () => {
  // Creator data extracted from the HTML file with social links
  const creators: CreatorData[] = [
    {
      name: 'DavidVlogz',
      followers: 1076100,
      image: '/creators/davidvlogz_yt.jpg',
      socialLinks: {
        youtube: 'https://www.youtube.com/@davidvlogz_yt',
        instagram: 'https://www.instagram.com/davidvlogz_yt/',
        tiktok: 'https://www.tiktok.com/@davidvlogz',
        facebook: 'https://www.facebook.com/profile.php?id=100011403306322&mibextid=wwXIfr',
      },
    },
    {
      name: 'Derq Rod',
      followers: 453160,
      image: '/creators/derqrodriguez.jpg',
      socialLinks: {
        youtube: 'https://www.youtube.com/@derqrodriguez',
        instagram: 'https://www.instagram.com/derqrodriguez/',
        tiktok: 'https://www.tiktok.com/@derqrodriguez',
      },
    },
    {
      name: 'Ed Garcito',
      followers: 1054000,
      image: '/creators/edgarcito.jpg',
      socialLinks: {
        instagram: 'https://www.instagram.com/el.edgarcito_/',
        tiktok: 'https://www.tiktok.com/@el.edgarcito',
      },
    },
    {
      name: 'Ymir Cast',
      followers: 178300,
      image: '/creators/ymircast.jpeg',
      socialLinks: {
        instagram: 'https://www.instagram.com/ymircast_tt/',
        tiktok: 'https://www.tiktok.com/@ymircast',
      },
    },
    {
      name: 'Chino',
      followers: 5597000,
      image: '/creators/Chino.jpg',
      socialLinks: {
        youtube: 'https://www.youtube.com/@youcantfindalex936',
        instagram: 'https://www.instagram.com/azloveace/',
        tiktok: 'https://www.tiktok.com/@youcantfindalex',
      },
    },
    {
      name: 'Alan',
      followers: 3648000,
      image: '/creators/alannsito6.jpg',
      socialLinks: {
        youtube: 'https://www.youtube.com/@alannsito5',
        instagram: 'https://www.instagram.com/just.alannn/?hl=en',
        tiktok: 'https://www.tiktok.com/@alansleftnu?lang=en',
      },
    },
    {
      name: 'Leanne',
      followers: 760600,
      image: '/creators/luvv.leannee.jpg',
      socialLinks: {
        instagram: 'https://www.instagram.com/luvv.leannee',
        tiktok: 'https://www.tiktok.com/@luvv.leannee',
      },
    },
    {
      name: 'Gabe',
      followers: 3096000,
      image: '/creators/itzmegab3.jpg',
      socialLinks: {
        youtube: 'https://www.youtube.com/@itzmegabe',
        instagram: 'https://www.instagram.com/itzmegab3_/',
        tiktok: 'https://www.tiktok.com/@itzmegab3',
      },
    },
    {
      name: 'EdwinRG',
      followers: 1467000,
      image: '/creators/eedwinrg.jpg',
      socialLinks: {
        youtube: 'https://www.youtube.com/@EdwinRG',
        instagram: 'https://www.instagram.com/eedwinrg/',
        tiktok: 'https://www.tiktok.com/@eedwinrg',
      },
    },
    {
      name: 'Vane',
      followers: 551000,
      image: '/creators/Vane.jpg',
      socialLinks: {
        instagram: 'https://www.instagram.com/vanealright/',
        tiktok: 'https://www.tiktok.com/@vanealrightt',
      },
    },
    {
      name: 'Adrian',
      followers: 320000,
      image: '/creators/Adrian.jpg',
      socialLinks: {
        instagram: 'https://www.instagram.com/adrixnnnnnnnn?igsh=cm5ra2p1NzczcTR6',
        tiktok: 'https://www.tiktok.com/@adrian_guevara03?_r=1&_t=ZT-91vcQhVhX7V',
      },
    },
    {
      name: 'Ike',
      followers: 200000,
      image: '/creators/ike.png',
      socialLinks: {
        instagram: 'https://www.instagram.com/ikechainz?igsh=MTRvNHE1cTllaXM2Yw==',
      },
    },
  ];

  // Calculate total followers
  const totalFollowers = creators.reduce((sum, creator) => sum + creator.followers, 0);

  // Array of colors for hover borders - cycling through red, green, blue, yellow
  const hoverBorderColors = [
    'rgb(255, 0, 0)', // red
    'rgb(0, 255, 0)', // green
    'rgb(0, 0, 255)', // blue
    'rgb(255, 255, 0)', // yellow
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}>
      <Header />
      <main className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 animate-fade-in-up"
              style={{ color: '#FFFFFF', letterSpacing: '-0.025em' }}
            >
              Our Talent
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-4"
              style={{
                color: '#A1A1A1',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
                opacity: 0,
              }}
            >
              Discover the creators in our network
            </p>
            <p
              className="text-base md:text-lg"
              style={{
                color: '#A1A1A1',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards',
                opacity: 0,
              }}
            >
              {totalFollowers.toLocaleString('en-US')}+ Combined Followers
            </p>
          </div>

          {/* Talent Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
            style={{
              animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards',
              opacity: 0,
            }}
          >
            {creators.map((creator, index) => (
              <div
                key={creator.name}
                style={{
                  animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.5 + index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <TalentCard
                  name={creator.name}
                  followers={creator.followers}
                  image={creator.image}
                  socialLinks={creator.socialLinks}
                  className="w-full"
                  hoverBorderColor={hoverBorderColors[index % hoverBorderColors.length]}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};


