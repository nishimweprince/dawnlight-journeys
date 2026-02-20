'use client';

import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { safariPackages } from '../../src/constants/safaris';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

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

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const destinationParam = searchParams.get('destination');
    const validatedDestination = validateDestination(destinationParam);
    setDestinationFilter(validatedDestination);
  }, [searchParams]);

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
      {/* ── Search ── */}
      <section className="container flex justify-center px-4 mb-10">
        <section className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5">
          <form
            className="relative flex items-center"
            role="search"
            aria-label="Search safaris"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search safaris by title or description…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-full font-outfit text-sm focus:outline-none transition-all duration-200"
              style={{
                minHeight: '3.25rem',
                background: '#fff',
                border: '2px solid rgba(27,58,45,0.12)',
                color: '#2C2420',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#D4A76A';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(27,58,45,0.12)';
              }}
              aria-label="Search safaris"
            />
            <span
              className="absolute right-4 pointer-events-none"
              style={{ color: 'rgba(27,58,45,0.35)' }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
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
          <p
            className="mt-2 font-outfit text-xs text-center"
            style={{ color: 'rgba(44,36,32,0.45)' }}
          >
            Find your perfect safari by keyword, activity, or highlight.
          </p>
        </section>
      </section>

      {/* ── Safari Cards ── */}
      {destinations.sort().map((destination) => {
        const safaris = filteredSafarisByDestination[destination];
        if (!safaris || safaris.length === 0) return null;
        return (
          <section key={destination} className="container mx-auto px-4 mb-14">
            {/* Destination header */}
            <Link
              href={`/destinations/${destination?.toLowerCase()}`}
              className="mb-7 flex items-center gap-3 group"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold font-outfit shadow-sm transition-colors duration-200"
                style={{
                  background: '#1B3A2D',
                  color: '#D4A76A',
                  border: '1px solid rgba(212,167,106,0.25)',
                }}
              >
                <MapPin className="h-3.5 w-3.5" />
                {destination}
              </span>
              <div
                className="flex-1 h-px ml-1"
                style={{
                  background:
                    'linear-gradient(to right, rgba(212,167,106,0.4), transparent)',
                }}
              />
            </Link>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
              {safaris
                .slice()
                .sort((a, b) => a.id - b.id)
                .map((safari, index) => (
                  <li key={index}>
                    <article
                      className="group rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl"
                      style={{
                        background: '#fff',
                        border: '1px solid rgba(27,58,45,0.08)',
                        boxShadow: '0 2px 12px rgba(27,58,45,0.06)',
                        minHeight: '380px',
                      }}
                    >
                      {/* Image */}
                      <figure
                        className="relative overflow-hidden flex-shrink-0"
                        style={{ height: '200px' }}
                      >
                        <img
                          src={safari.image}
                          alt={safari.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              'linear-gradient(to top, rgba(27,58,45,0.55) 0%, transparent 60%)',
                          }}
                        />
                        <figcaption className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
                          <span
                            className="font-outfit text-[10px] font-semibold px-2.5 py-1 rounded-full"
                            style={{ background: '#D4A76A', color: '#1A1714' }}
                          >
                            {safari.duration}
                          </span>
                          <span
                            className="font-outfit text-[10px] font-medium px-2.5 py-1 rounded-full"
                            style={{
                              background: 'rgba(245,240,232,0.88)',
                              color: '#1B3A2D',
                            }}
                          >
                            {safari.location}
                          </span>
                        </figcaption>
                      </figure>

                      {/* Body */}
                      <div className="p-4 flex flex-col flex-1">
                        <h2
                          className="font-playfair font-bold text-base mb-2 leading-snug line-clamp-2"
                          style={{ color: '#1B3A2D' }}
                        >
                          {safari.title.replace(
                            /\w\S*/g,
                            (txt) =>
                              txt.charAt(0).toUpperCase() +
                              txt.substr(1).toLowerCase()
                          )}
                        </h2>
                        <p
                          className="font-outfit text-xs leading-relaxed mb-3 flex-1"
                          style={{ color: 'rgba(44,36,32,0.6)' }}
                        >
                          {safari.description.length > 90
                            ? safari.description.slice(0, 90).trim() + '…'
                            : safari.description}
                        </p>

                        {/* Highlight chips */}
                        {safari.highlights && safari.highlights.length > 0 && (
                          <ul className="flex flex-wrap gap-1.5 mb-4">
                            {safari.highlights
                              .slice(0, 3)
                              .map((h: string, i: number) => (
                                <li
                                  key={i}
                                  className="font-outfit text-[10px] px-2 py-1 rounded-full"
                                  style={{
                                    background: 'rgba(212,167,106,0.1)',
                                    border: '1px solid rgba(212,167,106,0.3)',
                                    color: '#8B5E3C',
                                  }}
                                >
                                  {h}
                                </li>
                              ))}
                          </ul>
                        )}

                        <Link
                          href={safari.url}
                          className="font-outfit text-xs font-semibold mt-auto inline-flex items-center gap-1.5 transition-colors duration-200"
                          style={{ color: '#1B3A2D' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#D4A76A';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#1B3A2D';
                          }}
                        >
                          View Details
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 10h12M11 5l5 5-5 5" />
                          </svg>
                        </Link>
                      </div>
                    </article>
                  </li>
                ))}
            </ul>
          </section>
        );
      })}

      {/* View all safaris */}
      {searchParams.get('destination') && (
        <menu className="mb-10 w-full flex items-center justify-center">
          <button
            className="font-outfit text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200"
            style={{
              background: 'rgba(27,58,45,0.06)',
              border: '1px solid rgba(27,58,45,0.18)',
              color: '#1B3A2D',
            }}
            onClick={(e) => {
              e.preventDefault();
              router.push('safaris');
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1B3A2D';
              e.currentTarget.style.color = '#D4A76A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(27,58,45,0.06)';
              e.currentTarget.style.color = '#1B3A2D';
            }}
          >
            View all safaris
          </button>
        </menu>
      )}
    </>
  );
}
