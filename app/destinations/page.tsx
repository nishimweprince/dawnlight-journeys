import type { Metadata } from 'next';
import { CustomButton } from '../../src/components/ui/custom-button';
import React from 'react';
import { destinations } from '../../src/constants/destinations';

export const metadata: Metadata = {
  title: 'Destinations - Rwanda & Uganda Safari Adventures | Dawnlight Journeys',
  description: 'Explore the breathtaking landscapes and wildlife of Rwanda and Uganda. Discover gorilla trekking in Volcanoes National Park, chimpanzee tracking in Kibale Forest, and wildlife safaris in Queen Elizabeth National Park.',
  keywords: [
    'rwanda destinations',
    'uganda destinations',
    'gorilla trekking',
    'chimpanzee tracking',
    'volcanoes national park',
    'kibale forest',
    'queen elizabeth national park',
    'bwindi impenetrable forest',
    'akagera national park',
    'murchison falls',
    'lake kivu',
    'source of the nile',
    'rwanda tourism',
    'uganda tourism',
    'east africa destinations',
    'african wildlife',
    'mountain gorillas',
    'chimpanzees',
    'big five',
    'bird watching',
    'cultural tours',
    'adventure travel',
    'eco-tourism',
    'nature reserves',
    'national parks',
    'wildlife photography',
    'safari destinations',
    'african adventure',
    'dawnlight journeys',
    'rwanda safari',
    'uganda safari',
    'east african safari',
    'african wildlife tour',
    'gorilla trekking rwanda',
    'chimpanzee tracking uganda',
    'wildlife safari africa',
    'cultural experience africa',
    'adventure tourism',
    'nature tourism',
    'wildlife conservation',
    'sustainable tourism',
    'african culture',
    'local communities',
    'traditional villages',
    'african heritage',
    'indigenous people',
    'tribal culture',
    'african traditions',
    'cultural immersion',
    'authentic experience',
    'local guides',
    'community tourism',
  ],
  openGraph: {
    title: 'Destinations - Rwanda & Uganda Safari Adventures | Dawnlight Journeys',
    description: 'Explore the breathtaking landscapes and wildlife of Rwanda and Uganda. Discover gorilla trekking in Volcanoes National Park, chimpanzee tracking in Kibale Forest, and wildlife safaris in Queen Elizabeth National Park.',
    url: 'https://dawnlightjourneysrwanda.com/destinations',
    siteName: 'Dawnlight Journeys',
    images: [
      {
        url: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/rwanda-tourism_destinations',
        width: 1200,
        height: 630,
        alt: 'Rwanda Tourism Destinations',
      },
      {
        url: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/uganda-tourism_destinations',
        width: 1200,
        height: 630,
        alt: 'Uganda Tourism Destinations',
      },
      {
        url: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/gorilla-trekking_destinations',
        width: 1200,
        height: 630,
        alt: 'Gorilla Trekking Destinations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Destinations - Rwanda & Uganda Safari Adventures | Dawnlight Journeys',
    description: 'Explore the breathtaking landscapes and wildlife of Rwanda and Uganda. Discover gorilla trekking in Volcanoes National Park, chimpanzee tracking in Kibale Forest, and wildlife safaris in Queen Elizabeth National Park.',
    site: '@dawnlightjourneys',
    creator: '@pnishimwe',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/rwanda-tourism_destinations',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/uganda-tourism_destinations',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/gorilla-trekking_destinations',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://dawnlightjourneysrwanda.com/destinations',
  },
};

export default function DestinationsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <header className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/destinations/rwanda-tourism.jpg"
          alt="Destinations Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <section className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        <section className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 drop-shadow-2xl animate-fade-in">
            Our Destinations
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto drop-shadow-lg leading-relaxed animate-fade-in-delay">
            Explore the breathtaking landscapes and wildlife of Rwanda and
            Uganda, home to some of Africa's most incredible natural wonders.
          </p>
          <nav className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <article className="flex items-center gap-2 text-white/90">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              <span className="text-sm sm:text-base">
                Discover unique wildlife
              </span>
            </article>
            <article className="flex items-center gap-2 text-white/90">
              <span
                className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"
                style={{ animationDelay: '0.5s' }}
              ></span>
              <span className="text-sm sm:text-base">
                Experience local culture
              </span>
            </article>
            <article className="flex items-center gap-2 text-white/90">
              <span
                className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"
                style={{ animationDelay: '1s' }}
              ></span>
              <span className="text-sm sm:text-base">Adventure awaits</span>
            </article>
          </nav>
        </section>
      </header>

      {/* Destinations Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <header className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Adventure
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Each destination offers unique experiences and unforgettable
              memories
            </p>
          </header>

          {/* Destinations Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {destinations.map((destination, index) => (
              <article
                key={destination.id}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                {/* Image Container */}
                <figure className="relative h-80 sm:h-96 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <section className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Location Badge */}
                  <aside className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30">
                      📍 {destination.location}
                    </span>
                  </aside>

                  {/* Content Overlay */}
                  <figcaption className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                      {destination.name}
                    </h3>
                    <p className="text-white/90 mb-6 text-base sm:text-lg leading-relaxed">
                      {destination.description}
                    </p>

                    {/* Highlights */}
                    {destination.highlights && (
                      <section className="mb-6">
                        <h4 className="text-white/80 font-semibold mb-2 text-sm">
                          Highlights:
                        </h4>
                        <nav className="flex flex-wrap gap-2">
                          {destination.highlights
                            .slice(0, 3)
                            .map((highlight, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/20 backdrop-blur-sm text-white border border-white/30"
                              >
                                ✨ {highlight}
                              </span>
                            ))}
                        </nav>
                      </section>
                    )}

                    {/* Action Button - Primary, Blocked, Single Line */}
                    <section className="flex w-full">
                      <CustomButton
                        variant="primary"
                        size="lg"
                        href={destination.url}
                      >
                        Explore {destination.name}
                      </CustomButton>
                    </section>

                    {/* Quick Info */}
                    <aside className="flex items-center gap-4 text-white/80 text-sm mt-4">
                      {destination.bestTime && (
                        <span className="flex items-center gap-1">
                          📅 {destination.bestTime}
                        </span>
                      )}
                      {destination.wildlife && (
                        <span className="flex items-center gap-1">
                          🦁 {destination.wildlife.length} species
                        </span>
                      )}
                    </aside>
                  </figcaption>
                </figure>

                {/* Bottom Info Panel */}
                <section className="p-6 sm:p-8 bg-white">
                  <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Activities */}
                    {destination.activities && (
                      <article>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          🎯 Activities
                        </h4>
                        <ul className="space-y-1">
                          {destination.activities
                            .slice(0, 3)
                            .map((activity, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-600 flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                                {activity}
                              </li>
                            ))}
                        </ul>
                      </article>
                    )}

                    {/* Wildlife */}
                    {destination.wildlife && (
                      <article>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          🦁 Wildlife
                        </h4>
                        <ul className="space-y-1">
                          {destination.wildlife
                            .slice(0, 3)
                            .map((animal, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-600 flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                                {animal}
                              </li>
                            ))}
                        </ul>
                      </article>
                    )}
                  </section>
                </section>
              </article>
            ))}
          </section>

          {/* Call to Action */}
          <section className="text-center mt-16 sm:mt-20">
            <article className="shadow-md bg-white rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Contact us to plan your perfect African adventure
              </p>
              <nav className="flex flex-col sm:flex-row gap-4 justify-center">
                <CustomButton
                  variant="primary"
                  size="lg"
                  href="/contact"
                  className="group"
                >
                  Get Started
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </CustomButton>
                <CustomButton variant="outline" size="lg" href="/experiences">
                  View Experiences
                </CustomButton>
              </nav>
            </article>
          </section>
        </article>
      </section>
    </main>
  );
}
