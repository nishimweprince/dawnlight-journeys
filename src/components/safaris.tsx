'use client';

import { useState } from "react";
import Link from "next/link";
import { safariPackages } from "../constants/safaris";

export function Safaris() {
  // Group safaris by destination
  const safarisByDestination = safariPackages.reduce(
    (acc, safari) => {
      if (!acc[safari.destination]) acc[safari.destination] = [];
      acc[safari.destination].push(safari);
      return acc;
    },
    {} as Record<string, typeof safariPackages>
  );

  const destinations = Object.keys(safarisByDestination).sort();
  const [activeTab, setActiveTab] = useState(destinations[0] || 'Rwanda');

  const activeSafaris = (safarisByDestination[activeTab] || []).slice(0, 3);

  return (
    <section
      id="safaris"
      className="relative py-20 md:py-28 bg-dj-cream-topo"
      aria-labelledby="safaris-heading"
    >
      <div className="container">

        {/* Section Header */}
        <header className="mb-12">
          <p className="section-label mb-4">Featured Packages</p>
          <span
            style={{ display: 'block', width: '2.5rem', height: '2px', background: 'linear-gradient(90deg, #D4A76A, #D97B2B)', borderRadius: '9999px', marginBottom: '1.25rem' }}
          />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2
              id="safaris-heading"
              className="font-playfair font-bold leading-tight"
              style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', color: '#2C2420' }}
            >
              Best Seller Safaris
            </h2>

            {/* Tab toggles — Rwanda / Uganda */}
            <div
              className="flex items-center rounded-full p-1"
              role="tablist"
              aria-label="Filter safaris by destination"
              style={{ background: 'rgba(139,94,60,0.1)', border: '1px solid rgba(212,167,106,0.25)' }}
            >
              {destinations.map((dest) => (
                <button
                  key={dest}
                  role="tab"
                  aria-selected={activeTab === dest}
                  onClick={() => setActiveTab(dest)}
                  className="font-outfit text-xs font-semibold tracking-[0.1em] uppercase px-5 py-2 rounded-full transition-all duration-300"
                  style={{
                    background: activeTab === dest ? 'linear-gradient(135deg, #D97B2B, #E8913A)' : 'transparent',
                    color: activeTab === dest ? 'white' : 'rgba(44,36,32,0.65)',
                    boxShadow: activeTab === dest ? '0 2px 12px rgba(217,123,43,0.3)' : 'none',
                  }}
                >
                  {dest}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Safari Cards — tall portrait ratio */}
        <ul
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none"
          role="tabpanel"
          aria-label={`${activeTab} safari packages`}
        >
          {activeSafaris.map((safari) => (
            <li
              key={safari.id}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 card-lift"
              style={{ background: '#1A1714' }}
            >
              {/* Image — top 60% of card */}
              <figure className="relative overflow-hidden img-zoom-parent" style={{ paddingTop: '62%' }}>
                <img
                  src={safari.image || '/assets/common/placeholder.svg'}
                  alt={safari.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Gradient on image */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(26,23,20,0.7) 0%, transparent 60%)',
                  }}
                />

                {/* Duration badge overlaid on image */}
                <div
                  className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1"
                  style={{ background: 'rgba(26,23,20,0.75)', backdropFilter: 'blur(6px)', border: '1px solid rgba(212,167,106,0.3)' }}
                >
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-3 h-3" style={{ color: '#D4A76A' }} aria-hidden="true">
                    <circle cx="8" cy="8" r="6.5" />
                    <path d="M8 4.5v4l2.5 1.5" />
                  </svg>
                  <time className="font-outfit text-xs font-medium" style={{ color: '#D4A76A' }}>
                    {safari.duration}
                  </time>
                </div>
              </figure>

              {/* Card body */}
              <figcaption className="p-5">
                <address className="not-italic font-outfit text-xs tracking-[0.1em] uppercase mb-2" style={{ color: '#D4A76A' }}>
                  {safari.location}
                </address>
                <h3 className="font-playfair font-bold text-white text-lg leading-snug mb-2">
                  {safari.title}
                </h3>
                <p className="font-outfit text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: 'rgba(245,240,232,0.6)' }}>
                  {safari.description}
                </p>
                <Link
                  href={safari.url}
                  className="link-underline font-outfit text-xs font-semibold tracking-[0.08em] uppercase"
                  style={{ color: '#D4A76A' }}
                  aria-label={`View details for ${safari.title}`}
                >
                  View Details
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 link-arrow-icon" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </Link>
              </figcaption>
            </li>
          ))}
        </ul>

        {/* View all link */}
        <div className="flex justify-center mt-12">
          <Link
            href="/safaris"
            className="link-underline font-outfit text-sm font-semibold"
            style={{ color: '#8B5E3C' }}
          >
            View All Safaris
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 link-arrow-icon" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
