'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const heroImages = [
  {
    url: 'https://res.cloudinary.com/nishimweprince/image/upload/v1757926872/dawnlight-journeys/Hero_qnprrr.jpg',
    alt: 'African savanna at golden hour',
    kenBurns: 'animate-ken-a',
  },
  {
    url: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/gorilla-hero_asdfbd',
    alt: 'Mountain gorilla encounter in Rwanda',
    kenBurns: 'animate-ken-b',
  },
  {
    url: 'https://res.cloudinary.com/nishimweprince/image/upload/v1752333052/dawnlight-journeys/kibale-safari-5_aupvr9.webp',
    alt: 'Uganda primate forest safari',
    kenBurns: 'animate-ken-c',
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
      setTimeout(() => {
        setPrevIndex(null);
        setIsAnimating(false);
      }, 1200);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      className="relative h-[calc(100vh+80px)] top-[-80px] flex items-center overflow-hidden"
      aria-label="Hero — Explore Africa's Wonders"
    >
      {/* ── Background image carousel with Ken Burns ── */}
      <figure className="absolute inset-0 z-0 m-0" aria-hidden="true">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 overflow-hidden
              transition-opacity duration-[1200ms] ease-in-out
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <img
              src={image.url}
              alt={image.alt}
              className={`
                absolute inset-0 w-full h-full object-cover object-center
                ${index === currentIndex ? image.kenBurns : ''}
              `}
              style={{ minWidth: '100vw', minHeight: '100vh' }}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* Gradient overlay — transparent top → dark bottom */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,23,20,0.25) 0%, rgba(26,23,20,0.45) 40%, rgba(26,23,20,0.72) 100%)',
          }}
        />

        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 z-10 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px',
          }}
        />
      </figure>

      {/* ── Hero Content ── */}
      <div className="container relative z-20 pt-24">
        <div className="max-w-4xl">

          {/* Small editorial label */}
          <div className="animate-fade-up mb-6">
            <span
              className="inline-flex items-center gap-2 text-xs font-outfit tracking-[0.18em] uppercase"
              style={{ color: '#D4A76A' }}
            >
              <span
                className="inline-block w-8 h-px"
                style={{ background: '#D4A76A' }}
              />
              Rwanda &amp; Uganda
              <span
                className="inline-block w-8 h-px"
                style={{ background: '#D4A76A' }}
              />
            </span>
          </div>

          {/* Headline — editorial serif, two lines */}
          <div className="space-y-1">
            <h1
              className="animate-fade-up-d1 font-playfair font-bold leading-[1.05] text-white"
              style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)', letterSpacing: '-0.015em' }}
            >
              Explore Africa's
            </h1>
            <h1
              className="animate-fade-up-d2 font-playfair font-bold italic leading-[1.05] pl-4 md:pl-12"
              style={{
                fontSize: 'clamp(3.2rem, 7vw, 6.5rem)',
                letterSpacing: '-0.015em',
                color: '#D4A76A',
              }}
            >
              Wonders
            </h1>
          </div>

          {/* Subheadline */}
          <p
            className="animate-fade-up-d3 mt-6 font-outfit font-light leading-relaxed max-w-xl"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(245, 240, 232, 0.88)',
              letterSpacing: '0.01em',
            }}
          >
            Unforgettable safaris, gorilla trekking, and cultural journeys —
            curated by{' '}
            <strong className="font-semibold" style={{ color: '#D4A76A' }}>
              Dawnlight Journeys
            </strong>
            .
          </p>

          {/* CTA */}
          <div className="animate-fade-up-d4 mt-10 flex items-center gap-6">
            <Link href="#safaris" className="btn-ember">
              Plan Your Safari
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </Link>

            <Link
              href="/experiences"
              className="font-outfit text-sm font-medium link-underline"
              style={{ color: 'rgba(245, 240, 232, 0.75)' }}
            >
              Explore Experiences
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 link-arrow-icon"
                aria-hidden="true"
              >
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Carousel dot indicators ── */}
      <div
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
        role="tablist"
        aria-label="Hero image navigation"
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className="transition-all duration-500 rounded-full"
            style={{
              width: index === currentIndex ? '2rem' : '0.45rem',
              height: '0.45rem',
              background: index === currentIndex ? '#D4A76A' : 'rgba(245, 240, 232, 0.4)',
            }}
          />
        ))}
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-scroll-bounce"
        aria-hidden="true"
      >
        <span
          className="font-outfit text-[0.62rem] tracking-[0.18em] uppercase"
          style={{ color: 'rgba(245, 240, 232, 0.55)' }}
        >
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(212, 167, 106, 0.8), transparent)',
          }}
        />
      </div>
    </section>
  );
}
