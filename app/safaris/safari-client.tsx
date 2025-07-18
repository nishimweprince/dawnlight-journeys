'use client';

import { CustomButton } from '../../src/components/ui/custom-button';
import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { safariPackages } from '../../src/constants/safaris';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

// Group safaris by destination
const safarisByDestination = safariPackages.reduce(
  (acc: Record<string, typeof safariPackages>, safari) => {
    if (!acc[safari.destination]) acc[safari.destination] = [];
    acc[safari.destination].push(safari);
    return acc;
  },
  {} as Record<string, typeof safariPackages>
);
const destinations = Object.keys(safarisByDestination);

// URL parameter validation function
const validateDestination = (destination: string | null): string | null => {
  if (!destination) return null;
  const validDestinations = ['Uganda', 'Rwanda'];
  return (
    validDestinations.find(
      (d) => d.toLowerCase() === destination.toLowerCase()
    ) || null
  );
};

export default function SafariClient() {
  const [search, setSearch] = useState('');
  const [destinationFilter, setDestinationFilter] = useState<string | null>(
    null
  );

  // Next.js hooks for URL parameter handling
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Initialize destination filter from URL parameters
  useEffect(() => {
    const destinationParam = searchParams.get('destination');
    const validatedDestination = validateDestination(destinationParam);
    setDestinationFilter(validatedDestination);
  }, [searchParams]);

  // Filter safaris by destination and search query (title or description)
  const filteredSafarisByDestination = Object.fromEntries(
    destinations
      .filter(
        (dest) =>
          !destinationFilter ||
          dest.toLowerCase() === destinationFilter.toLowerCase()
      )
      .map((destination) => {
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
    <>
      {/* Search Bar */}
      <section className="container flex justify-center px-4 my-8">
        <section className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5">
          <form
            className="relative flex items-center"
            role="search"
            aria-label="Search safaris"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search safaris by title or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 border-2 border-primary/20 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-primary/40 text-base bg-white transition-all duration-200 placeholder:text-muted-foreground"
              style={{ minHeight: '3.25rem' }}
              aria-label="Search safaris"
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
            <Link
              href={`/destinations/${destination?.toLowerCase()}`}
              className="mb-6 flex items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-4 py-1.5 rounded-full text-base sm:text-lg font-semibold shadow-sm">
                <MapPin className="h-4 w-4 opacity-80" />
                <span className="tracking-wide">{destination}</span>
              </span>
              <hr
                className="flex-1 h-1 bg-primary-100 rounded-full ml-2 border-0"
                role="presentation"
              />
            </Link>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
              {safaris
                .slice()
                .sort((a, b) => a.id - b.id)
                .map((safari, index) => (
                  <li key={index}>
                    <article className="group rounded-2xl overflow-hidden bg-white border border-primary-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all flex flex-col text-xs sm:text-sm md:text-base h-full min-h-[370px]">
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
                          {safari.title.replace(
                            /\w\S*/g,
                            (txt) =>
                              txt.charAt(0).toUpperCase() +
                              txt.substr(1).toLowerCase()
                          )}
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
                            {safari.highlights
                              .slice(0, 3)
                              .map((h: string, i: number) => (
                                <li
                                  key={i}
                                  className="bg-white text-primary hover:bg-primary/80 hover:text-white hover:cursor-pointer text-[10px] sm:text-xs px-2 py-1 rounded-full font-medium shadow-sm"
                                >
                                  {h}
                                </li>
                              ))}
                          </ul>
                        )}
                        <CustomButton
                          variant="primary"
                          size="sm"
                          href={safari.url}
                          className="w-full mt-auto text-xs sm:text-sm py-2"
                        >
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
      {searchParams.get('destination') && (
        <menu className="mb-5 w-full flex items-center justify-center">
          <CustomButton
            variant={`secondary`}
            onClick={(e) => {
              e.preventDefault();
              router.push(`safaris`);
            }}
          >
            View all safaris
          </CustomButton>
        </menu>
      )}
    </>
  );
} 