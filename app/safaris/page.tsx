import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { safariPackages } from '../../src/constants/safaris';
import SafariClient from './safari-client';

const randomSafari =
  safariPackages[Math.floor(Math.random() * safariPackages.length)];
const randomImage = randomSafari?.image || '/assets/common/placeholder.svg';

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

function SafariFallback() {
  return (
    <section className="container px-4 py-12">
      <div
        className="w-full max-w-lg mx-auto mb-10 h-12 rounded-full animate-pulse"
        style={{ background: 'rgba(212,167,106,0.12)' }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl animate-pulse"
            style={{ background: 'rgba(27,58,45,0.06)', height: '380px' }}
          />
        ))}
      </div>
    </section>
  );
}

export default function SafarisPage() {
  return (
    <main className="min-h-screen" style={{ background: '#F5F0E8' }}>

      {/* ── Hero ── */}
      <header
        className="relative overflow-hidden"
        style={{ background: '#1B3A2D', paddingTop: '5rem' }}
      >
        {/* Grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        {/* Ambient background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/safaris/gorilla-trekking.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.18 }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(27,58,45,0.6) 0%, rgba(27,58,45,0.97) 100%)',
            }}
          />
        </div>

        <div className="container relative z-10 pt-12 pb-20 max-w-4xl">
          <p
            className="font-outfit text-xs tracking-[0.18em] uppercase mb-4"
            style={{ color: '#D4A76A' }}
          >
            Discover Africa
          </p>
          <h1
            className="font-playfair font-bold text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            Safari Adventures
          </h1>
          <p
            className="font-outfit text-base leading-relaxed max-w-xl mb-8"
            style={{ color: 'rgba(245,240,232,0.65)' }}
          >
            Curated wildlife journeys through Uganda and Rwanda — from gorilla
            trekking in ancient forests to game drives across sun-drenched
            savannahs.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-3">
            {[
              { value: `${safariPackages.length}+`, label: 'Packages' },
              { value: '2', label: 'Countries' },
              { value: '100%', label: 'Tailor-made' },
            ].map((s) => (
              <span
                key={s.label}
                className="font-outfit text-xs font-semibold px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(212,167,106,0.12)',
                  border: '1px solid rgba(212,167,106,0.28)',
                  color: '#D4A76A',
                }}
              >
                {s.value}&nbsp;{s.label}
              </span>
            ))}
          </div>
        </div>

        {/* Diagonal bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom right, transparent 49%, #F5F0E8 50%)',
          }}
          aria-hidden="true"
        />
      </header>

      {/* ── Description ── */}
      <section className="container max-w-4xl py-14 px-4">
        <p
          className="font-playfair text-xl leading-relaxed mb-8"
          style={{
            borderLeft: '3px solid #D4A76A',
            paddingLeft: '1.5rem',
            color: '#2C2420',
          }}
        >
          At Dawnlight Journeys, we curate exceptional safari experiences that
          combine adventure, wildlife encounters, and cultural immersion. Our
          carefully designed packages take you through Uganda and Rwanda&apos;s
          most spectacular landscapes and wildlife reserves.
        </p>

        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              title: 'Expert Local Guides',
              body: 'Seasoned naturalists and trackers who know every trail, call, and creature in the wild.',
            },
            {
              title: 'Fully Custom Itineraries',
              body: 'Every journey is crafted to your pace, passions, and budget — no cookie-cutter packages.',
            },
            {
              title: 'All Permits Handled',
              body: 'Gorilla and chimpanzee permits secured and included — all the logistics, none of the stress.',
            },
          ].map((f) => (
            <article
              key={f.title}
              className="rounded-2xl p-5"
              style={{
                background: 'rgba(27,58,45,0.05)',
                border: '1px solid rgba(27,58,45,0.12)',
              }}
            >
              <h3
                className="font-playfair font-bold text-base mb-2"
                style={{ color: '#1B3A2D' }}
              >
                {f.title}
              </h3>
              <p
                className="font-outfit text-sm leading-relaxed"
                style={{ color: 'rgba(44,36,32,0.65)' }}
              >
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Safari Grid ── */}
      <Suspense fallback={<SafariFallback />}>
        <SafariClient />
      </Suspense>

    </main>
  );
}
