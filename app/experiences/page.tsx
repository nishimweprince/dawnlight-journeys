'use client';

import type { Metadata } from 'next';
import React, { useState } from 'react';
import Link from 'next/link';
import { experiences } from '../../src/constants/experiences';

const metadata: Metadata = {
  title: 'Unique Experiences | Dawnlight Journeys',
  description:
    'Go beyond the ordinary safari with curated adventures that connect you with the heart of Africa.',
};

export default function ExperiencesPage() {
  const [search, setSearch] = useState('');

  const filteredExperiences = experiences.filter((exp) => {
    const query = search.toLowerCase();
    return (
      exp.title.toLowerCase().includes(query) ||
      exp.description.toLowerCase().includes(query)
    );
  });

  return (
    <main className="min-h-screen" style={{ background: '#F5F0E8' }}>

      {/* ── Hero ── */}
      <header
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: '55vh' }}
      >
        <img
          src="https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/tourism-experiences_mtcka4"
          alt="Safari experiences hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Layered gradients */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(26,23,20,0.92) 0%, rgba(26,23,20,0.55) 50%, rgba(26,23,20,0.25) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <div className="container relative z-10 pb-16 pt-36">
          <p
            className="font-outfit text-xs tracking-[0.22em] uppercase mb-4 flex items-center gap-3"
            style={{ color: '#D4A76A' }}
          >
            <span className="inline-block h-px w-8" style={{ background: '#D4A76A' }} />
            Curated Adventures
          </p>
          <h1
            className="font-playfair font-bold text-white leading-none mb-4"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)' }}
          >
            Unforgettable<br />
            <span style={{ color: '#D4A76A', fontStyle: 'italic' }}>Experiences</span>
          </h1>
          <p
            className="font-outfit text-base leading-relaxed max-w-lg"
            style={{ color: 'rgba(245,240,232,0.62)' }}
          >
            Go beyond the ordinary safari with curated adventures that connect
            you with the wild heart of Africa.
          </p>
        </div>
      </header>

      {/* ── Search ── */}
      <section className="container py-10" aria-label="Search experiences">
        <div className="max-w-xl mx-auto">
          <form
            className="relative"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search by activity, destination…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full font-outfit text-sm bg-white rounded-full py-3.5 pl-5 pr-12 outline-none transition-all duration-200"
              style={{
                color: '#2C2420',
                border: '1.5px solid rgba(212,167,106,0.3)',
                boxShadow: '0 2px 12px rgba(44,36,32,0.06)',
              }}
              onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = '#D97B2B'; }}
              onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(212,167,106,0.3)'; }}
              aria-label="Search experiences"
            />
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: 'rgba(44,36,32,0.35)' }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
          </form>

          {search && (
            <p className="font-outfit text-xs mt-3 text-center" style={{ color: 'rgba(44,36,32,0.45)' }}>
              {filteredExperiences.length} result{filteredExperiences.length !== 1 ? 's' : ''} for &ldquo;{search}&rdquo;
            </p>
          )}
        </div>
      </section>

      {/* ── Experiences Grid ── */}
      <section className="container pb-16 md:pb-24">
        {filteredExperiences.length === 0 ? (
          <p className="text-center font-outfit text-sm py-16" style={{ color: 'rgba(44,36,32,0.45)' }}>
            No experiences match your search. Try a different keyword.
          </p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredExperiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <li key={exp.id}>
                  <article
                    className="group flex flex-col h-full rounded-2xl overflow-hidden"
                    style={{
                      background: 'white',
                      boxShadow: '0 2px 20px rgba(44,36,32,0.08)',
                    }}
                  >
                    {/* Image */}
                    <Link href={exp.url} className="block overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Dark gradient */}
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(to top, rgba(26,23,20,0.65) 0%, transparent 55%)' }}
                      />
                      {/* Icon badge */}
                      <div
                        className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center"
                        style={{
                          background: 'rgba(212,167,106,0.18)',
                          border: '1px solid rgba(212,167,106,0.4)',
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        <Icon className="w-4 h-4" style={{ color: '#D4A76A' }} aria-hidden="true" />
                      </div>
                    </Link>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-6">
                      <Link href={exp.url}>
                        <h2
                          className="font-playfair font-bold leading-snug mb-2 transition-colors duration-200"
                          style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#2C2420' }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLHeadingElement).style.color = '#8B5E3C'; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLHeadingElement).style.color = '#2C2420'; }}
                        >
                          {exp.title}
                        </h2>
                      </Link>

                      <p
                        className="font-outfit text-sm leading-relaxed mb-4 flex-1 line-clamp-3"
                        style={{ color: 'rgba(44,36,32,0.58)' }}
                      >
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      {exp.highlights && exp.highlights.length > 0 && (
                        <ul className="mb-5 space-y-1.5">
                          {exp.highlights.slice(0, 3).map((h: string, i: number) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 font-outfit text-xs"
                              style={{ color: 'rgba(44,36,32,0.55)' }}
                            >
                              <span
                                className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                                style={{ background: '#D4A76A' }}
                              />
                              <span className="line-clamp-1">{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Actions */}
                      <div
                        className="flex items-center gap-3 pt-4 mt-auto"
                        style={{ borderTop: '1px solid rgba(212,167,106,0.15)' }}
                      >
                        <Link
                          href={exp.url}
                          className="link-underline font-outfit text-xs font-semibold tracking-[0.1em] uppercase inline-flex items-center gap-1.5 flex-1"
                          style={{ color: '#8B5E3C' }}
                        >
                          Learn More
                          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 link-arrow-icon" aria-hidden="true">
                            <path d="M4 10h12M11 5l5 5-5 5" />
                          </svg>
                        </Link>
                        <a
                          href="https://wa.me/250785917385"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-outfit text-xs font-semibold tracking-[0.08em] uppercase px-4 py-2 rounded-full transition-all duration-200"
                          style={{
                            background: 'rgba(212,167,106,0.12)',
                            color: '#8B5E3C',
                            border: '1px solid rgba(212,167,106,0.3)',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = '#D97B2B';
                            (e.currentTarget as HTMLAnchorElement).style.color = 'white';
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = '#D97B2B';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(212,167,106,0.12)';
                            (e.currentTarget as HTMLAnchorElement).style.color = '#8B5E3C';
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(212,167,106,0.3)';
                          }}
                        >
                          Book
                        </a>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* ── Custom Experience CTA ── */}
      <section
        className="relative py-16 md:py-20 overflow-hidden"
        style={{ background: '#1B3A2D' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(212,167,106,0.07) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-outfit text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#D4A76A' }}>
                Bespoke Travel
              </p>
              <h2
                className="font-playfair font-bold text-white leading-tight mb-5"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}
              >
                Create Your Custom<br />
                <span style={{ color: '#D4A76A' }}>Experience</span>
              </h2>
              <p
                className="font-outfit text-sm leading-relaxed mb-8"
                style={{ color: 'rgba(245,240,232,0.6)' }}
              >
                Looking for something unique? We specialize in crafting custom
                adventures tailored to your interests, timeframe, and budget.
              </p>
              <a
                href="https://wa.me/250785917385"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ember"
              >
                Contact Us to Customize
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" />
                </svg>
              </a>
            </div>

            <figure className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src="https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/tourism-experiences_mtcka4"
                alt="Custom Experience"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
