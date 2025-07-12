'use client';

import { CustomButton } from '../../src/components/ui/custom-button';
import React, { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { safariPackages } from '../../src/constants/safaris';
import type { Metadata } from 'next';
import Link from 'next/link';

// Pick a random safari image for SEO
const randomSafari = safariPackages[Math.floor(Math.random() * safariPackages.length)];
const randomImage = randomSafari?.image || '/assets/common/placeholder.svg';

// SEO metadata
const metadata: Metadata = {
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
    'kibale forest'
  ],
};

const SafariFAQ = ({ faqs }: { faqs: { question: string; answer: string }[] }) => (
  <section className="mt-6">
    <h4 className="text-xl font-bold mb-4 text-primary">FAQs</h4>
    <ul className="space-y-3">
      {faqs.map((faq, idx) => (
        <li key={idx} className="rounded-xl bg-white shadow p-4 transition hover:shadow-lg">
          <details className="group">
            <summary className="flex items-center cursor-pointer font-medium text-gray-800 group-open:text-primary transition-colors">
              <ChevronDown className="h-5 w-5 mr-2 group-open:rotate-180 transition-transform duration-300 text-primary" />
              {faq.question}
            </summary>
            <p className="mt-2 text-muted-foreground text-sm pl-7 animate-fade-in">
              {faq.answer}
            </p>
          </details>
        </li>
      ))}
    </ul>
  </section>
);

// Group safaris by destination
const safarisByDestination = safariPackages.reduce((acc: Record<string, typeof safariPackages>, safari) => {
  if (!acc[safari.destination]) acc[safari.destination] = [];
  acc[safari.destination].push(safari);
  return acc;
}, {} as Record<string, typeof safariPackages>);
const destinations = Object.keys(safarisByDestination);

export default function SafarisPage() {
  const [search, setSearch] = useState('');
  
  // Filter safaris by search query (title or description)
  const filteredSafarisByDestination = Object.fromEntries(
    destinations.map((destination) => {
      const safaris = safarisByDestination[destination].filter((safari) => {
        const query = search.toLowerCase();
        return (
          safari.title.toLowerCase().includes(query) ||
          safari.description.toLowerCase().includes(query)
        );
      });
      return [destination, safaris];
    })
  );

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 md:mb-8 drop-shadow-lg">Safari Adventures</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto drop-shadow">
            Discover Africa's most breathtaking wildlife experiences and create memories that last a lifetime.
          </p>
        </section>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 mb-6 sm:mb-8">
        <article className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">Our Safari Packages</h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            At Dawnlight Journeys, we curate exceptional safari experiences that combine adventure, wildlife encounters, and cultural immersion. Our carefully designed packages take you through Uganda and Rwanda's most spectacular landscapes and wildlife reserves.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            From tracking mountain gorillas in their natural habitat to witnessing the Big Five on thrilling game drives, each safari is crafted to provide an unforgettable journey. Our expert guides ensure your safety while maximizing wildlife viewing opportunities.
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            Whether you're seeking a short wildlife excursion or an extended adventure, our diverse range of packages caters to all preferences and durations. Each safari includes comfortable accommodations, experienced guides, and all necessary permits.
          </p>
        </article>
      </section>

            {/* Search Bar */}
            <section className="container flex justify-center px-4 my-8">
        <section className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5">
          <form className="relative flex items-center" role="search" aria-label="Search safaris" onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search safaris by title or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 border-2 border-primary/20 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-primary/40 text-base bg-white transition-all duration-200 placeholder:text-muted-foreground"
              style={{ minHeight: "3.25rem" }}
              aria-label="Search safaris"
            />
            <span className="absolute right-4 text-primary/60 pointer-events-none">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </form>
          <p className="mt-2 text-sm text-muted-foreground text-center">
            Find your perfect safari by keyword, activity, or highlight.
          </p>
        </section>
      </section>

      {/* Safari Cards */}
      {destinations.sort().map((destination) => {
        const safaris = filteredSafarisByDestination[destination];
        if (!safaris || safaris.length === 0) return null;
        return (
          <section key={destination} className="container mx-auto px-4 mb-10">
            <Link href={`/destinations/${destination?.toLowerCase()}`} className="mb-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-4 py-1.5 rounded-full text-base sm:text-lg font-semibold shadow-sm">
                <MapPin className="h-4 w-4 opacity-80" />
                <span className="tracking-wide">{destination}</span>
              </span>
              <hr className="flex-1 h-1 bg-primary-100 rounded-full ml-2 border-0" role="presentation" />
            </Link>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
              {safaris
                .slice()
                .sort((a, b) => a.id - b.id)
                .map((safari, index) => (
                  <li key={index}>
                    <article
                      className="group rounded-2xl overflow-hidden bg-white border border-primary-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all flex flex-col text-xs sm:text-sm md:text-base h-full min-h-[370px]"
                    >
                      <figure className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                        <img
                          src={safari.image}
                          alt={safari.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2 sm:p-3 flex items-center gap-2">
                          <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold shadow">
                            {safari.duration}
                          </span>
                          <span className="bg-white/80 text-primary px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium ml-2 shadow">
                            {safari.location}
                          </span>
                        </figcaption>
                      </figure>
                      <header className="p-3 sm:p-4 pb-0">
                        <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1 text-primary tracking-wide uppercase line-clamp-2">
                          {safari.title.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())}
                        </h2>
                      </header>
                      <section className="p-3 sm:p-4 pt-2 flex-1 flex flex-col min-h-[120px]">
                        <p className="mb-3 flex-1 text-xs sm:text-sm text-gray-700 line-clamp-3">
                          {safari.description.length > 80
                            ? safari.description.slice(0, 80).trim() + '...'
                            : safari.description}
                        </p>
                        {safari.highlights && safari.highlights.length > 0 && (
                          <ul className="flex flex-wrap gap-1 mb-3">
                            {safari.highlights.slice(0, 3).map((h: string, i: number) => (
                              <li key={i} className="bg-primary/10 text-primary text-[10px] sm:text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                                {h}
                              </li>
                            ))}
                          </ul>
                        )}
                        <CustomButton variant="primary" size="sm" href={safari.url} className="w-full mt-auto text-xs sm:text-sm py-2">
                          View Details
                        </CustomButton>
                      </section>
                    </article>
                  </li>
                ))}
            </ul>
          </section>
        );
      })}
    </main>
  );
}
