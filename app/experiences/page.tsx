'use client';

import type { Metadata } from 'next';
import { CustomButton } from '../../src/components/ui/custom-button';
import React, { useState } from 'react';
import { experiences } from '../../src/constants/experiences';

const metadata: Metadata = {
  title: 'Unique Experiences | Dawnlight Journeys',
  description:
    'Go beyond the ordinary safari with curated adventures that connect you with the heart of Africa. Wildlife photography, cultural immersion, trekking, and more.',
  keywords: [
    'africa experiences',
    'wildlife photography',
    'cultural immersion',
    'adventure trekking',
    'mountain climbing',
    'bird watching',
    'conservation volunteering',
    'uganda experiences',
    'rwanda experiences',
    'gorilla trekking experience',
    'chimpanzee tracking experience',
    'wildlife photography experience',
    'cultural tour experience',
    'adventure experience africa',
    'eco-tourism experience',
    'sustainable travel experience',
    'local community experience',
    'traditional village experience',
    'african heritage experience',
    'indigenous culture experience',
    'tribal experience',
    'african tradition experience',
    'cultural immersion experience',
    'authentic safari experience',
    'local guide experience',
    'community tourism experience',
    'wildlife conservation experience',
    'bird watching experience',
    'photography safari experience',
    'adventure trekking experience',
    'mountain climbing experience',
    'conservation volunteering experience',
    'wildlife encounter experience',
    'african wildlife experience',
    'big five experience',
    'mountain gorilla experience',
    'chimpanzee experience',
    'african culture experience',
    'local community tour',
    'traditional village visit',
    'african heritage tour',
    'indigenous culture tour',
    'tribal experience tour',
    'african tradition tour',
    'cultural immersion tour',
    'authentic safari tour',
    'local guide tour',
    'community tourism tour',
    'wildlife conservation tour',
    'bird watching tour',
    'photography safari tour',
    'adventure trekking tour',
    'mountain climbing tour',
    'conservation volunteering tour',
    'wildlife encounter tour',
    'african wildlife tour',
    'big five tour',
    'mountain gorilla tour',
    'chimpanzee tour',
    'african culture tour',
  ],
  openGraph: {
    title: 'Unique Experiences | Dawnlight Journeys',
    description:
      'Go beyond the ordinary safari with curated adventures that connect you with the heart of Africa. Wildlife photography, cultural immersion, trekking, and more.',
    images: [
      {
        url: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/custom-experiences_africa',
        width: 1200,
        height: 630,
        alt: 'Custom African Safari Experiences',
      },
      {
        url: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/wildlife-photography_experience',
        width: 1200,
        height: 630,
        alt: 'Wildlife Photography Experience',
      },
      {
        url: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/cultural-immersion_experience',
        width: 1200,
        height: 630,
        alt: 'Cultural Immersion Experience',
      },
    ],
    type: 'website',
    url: 'https://dawnlightjourneysrwanda.com/experiences',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unique Experiences | Dawnlight Journeys',
    description:
      'Go beyond the ordinary safari with curated adventures that connect you with the heart of Africa. Wildlife photography, cultural immersion, trekking, and more.',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/custom-experiences_africa',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/wildlife-photography_experience',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/cultural-immersion_experience',
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
    canonical: 'https://dawnlightjourneysrwanda.com/experiences',
  },
};

export default function ExperiencesPage() {
  const [search, setSearch] = useState('');
  // Filter experiences by search query (title or description)
  const filteredExperiences = experiences.filter((exp) => {
    const query = search.toLowerCase();
    return (
      exp.title.toLowerCase().includes(query) ||
      exp.description.toLowerCase().includes(query)
    );
  });
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <header className="relative h-64 sm:h-72 md:h-96 lg:h-[28rem] flex items-center justify-center bg-black/60">
        <img
          src="https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/tourism-experiences_mtcka4"
          alt="Experiences Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <section className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <section className="relative z-10 text-center text-white w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
            Unforgettable Experiences
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow">
            Go beyond the ordinary safari with curated adventures that connect
            you with the heart of Africa.
          </p>
        </section>
      </header>

      {/* Search Bar */}
      <section className="container flex justify-center px-4 my-8">
        <section className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5">
          <form
            className="relative flex items-center"
            role="search"
            aria-label="Search experiences"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search experiences by title or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 border-2 border-primary/20 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-primary/40 text-base bg-white transition-all duration-200 placeholder:text-muted-foreground"
              style={{ minHeight: '3.25rem' }}
              aria-label="Search experiences"
            />
            <span className="absolute right-4 text-primary/60 pointer-events-none">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M20 20L16.65 16.65"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </form>
          <p className="mt-2 text-sm text-muted-foreground text-center">
            Find your perfect adventure by keyword, activity, or highlight.
          </p>
        </section>
      </section>

      {/* Experiences Grid */}
      <section className="container py-12 sm:py-16 md:py-20 lg:py-24">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {filteredExperiences?.map((exp) => {
            const Icon = exp?.icon;
            return (
              <li
                key={exp.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform"
              >
                <figure className="relative h-40 sm:h-48 w-full overflow-hidden">
                  <img
                    src={exp?.image}
                    alt={exp?.title}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <section className="p-4 sm:p-6 flex-1 flex flex-col">
                  <header className="flex items-center mb-3">
                    <span className="bg-primary/10 text-primary rounded-full p-2 mr-3 flex-shrink-0">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold line-clamp-2">
                      {exp?.title}
                    </h2>
                  </header>
                  <p className="text-muted-foreground mb-4 flex-1 text-sm sm:text-base line-clamp-3">
                    {exp?.description}
                  </p>
                  <ul className="mb-4 space-y-1">
                    {exp?.highlights
                      ?.slice(0, 3)
                      ?.map((h: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="line-clamp-1">{h}</span>
                        </li>
                      ))}
                  </ul>
                  <footer className="mt-auto flex flex-col gap-2">
                    <CustomButton variant="primary" size="sm" href={exp?.url}>
                      Learn More
                    </CustomButton>
                    <CustomButton
                      variant="outline"
                      size="sm"
                      href="https://wa.me/250785917385"
                    >
                      Book Now
                    </CustomButton>
                  </footer>
                </section>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Custom Experience Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <article className="container grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <section className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Create Your Custom Experience
            </h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-muted-foreground">
              Looking for something unique? We specialize in creating custom
              experiences tailored to your interests, timeframe, and budget. Let
              us help you design your dream African adventure.
            </p>
            <CustomButton
              variant="primary"
              size="lg"
              href="https://wa.me/250785917385"
              className="w-full sm:w-auto"
            >
              Contact Us to Customize
            </CustomButton>
          </section>
          <figure className="relative h-48 sm:h-64 md:h-72 w-full rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
            <img
              src="https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/tourism-experiences_mtcka4"
              alt="Custom Experience"
              className="w-full h-full object-cover"
            />
          </figure>
        </article>
      </section>
    </main>
  );
}
