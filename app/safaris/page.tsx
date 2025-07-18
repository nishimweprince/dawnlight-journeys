import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { safariPackages } from '../../src/constants/safaris';
import SafariClient from './safari-client';

// Pick a random safari image for SEO
const randomSafari =
  safariPackages[Math.floor(Math.random() * safariPackages.length)];
const randomImage = randomSafari?.image || '/assets/common/placeholder.svg';

// SEO metadata
export const metadata: Metadata = {
  title: 'Safari Adventures | Dawnlight Journeys',
  description:
    "Discover Africa's most breathtaking wildlife experiences and create memories that last a lifetime. Explore our curated safari packages in Uganda and Rwanda.",
  openGraph: {
    title: 'Safari Adventures | Dawnlight Journeys',
    description:
      "Discover Africa's most breathtaking wildlife experiences and create memories that last a lifetime. Explore our curated safari packages in Uganda and Rwanda.",
    images: [randomImage],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safari Adventures | Dawnlight Journeys',
    description:
      "Discover Africa's most breathtaking wildlife experiences and create memories that last a lifetime. Explore our curated safari packages in Uganda and Rwanda.",
    images: [randomImage],
  },
  keywords: [
    'safari packages',
    'uganda safari',
    'rwanda safari',
    'gorilla trekking',
    'wildlife safari',
    'africa tours',
    'bwindi forest',
    'queen elizabeth park',
    'akagera national park',
    'kibale forest',
  ],
};

export default function SafarisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center mb-8 sm:mb-12 overflow-hidden">
        <img
          src="/assets/safaris/gorilla-trekking.jpg"
          alt="Safari Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <section className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <section className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 md:mb-8 drop-shadow-lg">
            Safari Adventures
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto drop-shadow">
            Discover Africa's most breathtaking wildlife experiences and create
            memories that last a lifetime.
          </p>
        </section>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 mb-6 sm:mb-8">
        <article className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">
            Our Safari Packages
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            At Dawnlight Journeys, we curate exceptional safari experiences that
            combine adventure, wildlife encounters, and cultural immersion. Our
            carefully designed packages take you through Uganda and Rwanda's
            most spectacular landscapes and wildlife reserves.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            From tracking mountain gorillas in their natural habitat to
            witnessing the Big Five on thrilling game drives, each safari is
            crafted to provide an unforgettable journey. Our expert guides
            ensure your safety while maximizing wildlife viewing opportunities.
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            Whether you're seeking a short wildlife excursion or an extended
            adventure, our diverse range of packages caters to all preferences
            and durations. Each safari includes comfortable accommodations,
            experienced guides, and all necessary permits.
          </p>
        </article>
      </section>

      {/* Client Component with Suspense */}
      <Suspense fallback={
        <div className="container mx-auto px-4 my-8">
          <div className="flex justify-center">
            <div className="animate-pulse">
              <div className="w-96 h-12 bg-gray-200 rounded-full mb-4"></div>
              <div className="w-64 h-4 bg-gray-200 rounded mx-auto"></div>
            </div>
          </div>
        </div>
      }>
        <SafariClient />
      </Suspense>
    </main>
  );
}
