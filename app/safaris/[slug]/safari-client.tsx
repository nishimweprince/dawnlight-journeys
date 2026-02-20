'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  MapPin,
  Clock,
  Star,
  Users,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronDown,
} from 'lucide-react';
import Link from 'next/link';

export interface SafariPackage {
  id: number;
  title: string;
  location: string;
  duration: string;
  image: string;
  destination: string;
  description: string;
  url: string;
  slug?: string;
  images?: string[];
  highlights?: string[];
  itinerary?: {
    day: number;
    title: string;
    details: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  bestTime?: string;
  groupSize?: string;
  difficulty?: string;
  inclusions?: string[];
  exclusions?: string[];
  packingList?: string[];
}

interface SafariClientProps {
  safari: SafariPackage;
}

export default function SafariClient({ safari }: SafariClientProps) {
  const router = useRouter();
  const [showAllImages, setShowAllImages] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen" style={{ background: '#F5F0E8' }}>

      {/* ── Hero ── */}
      <header className="relative overflow-hidden" style={{ minHeight: '62vh' }}>
        <img
          src={safari.image}
          alt={safari.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,23,20,0.25) 0%, rgba(26,23,20,0.65) 50%, rgba(27,58,45,0.97) 100%)',
          }}
        />

        {/* Back button */}
        <nav className="absolute top-0 left-0 right-0 z-10 container pt-6">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 font-outfit text-xs tracking-[0.1em] uppercase transition-colors duration-200 text-[rgba(245,240,232,0.5)] hover:text-[#D4A76A]"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Back to Safaris
          </button>
        </nav>

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col justify-end container pb-14 pt-24">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-3.5 w-3.5" style={{ color: '#D4A76A' }} />
            <span
              className="font-outfit text-xs tracking-[0.12em] uppercase"
              style={{ color: '#D4A76A' }}
            >
              {safari.location}
            </span>
          </div>

          <h1
            className="font-playfair font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            {safari.title}
          </h1>

          {/* Quick-facts pills */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Clock, label: safari.duration },
              safari.groupSize ? { icon: Users, label: safari.groupSize } : null,
              safari.difficulty ? { icon: Star, label: safari.difficulty } : null,
            ]
              .filter(Boolean)
              .map((fact, i) => {
                const Icon = fact!.icon;
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 font-outfit text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(245,240,232,0.1)',
                      border: '1px solid rgba(245,240,232,0.2)',
                      color: 'rgba(245,240,232,0.85)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <Icon className="h-3 w-3" />
                    {fact!.label}
                  </span>
                );
              })}
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <div className="container py-14 px-4">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* ── Left: Main content ── */}
          <div className="lg:col-span-2 space-y-12 pb-24 lg:pb-0">

            {/* Description */}
            <p
              className="font-playfair text-lg leading-relaxed"
              style={{
                borderLeft: '3px solid #D4A76A',
                paddingLeft: '1.5rem',
                color: '#2C2420',
              }}
            >
              {safari.description}
            </p>

            {/* Highlights */}
            {safari.highlights && safari.highlights.length > 0 && (
              <section>
                <SectionHeading>Safari Highlights</SectionHeading>
                <ul className="grid sm:grid-cols-2 gap-3 mt-5">
                  {safari.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-outfit text-sm"
                      style={{ color: 'rgba(44,36,32,0.75)' }}
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#D4A76A' }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Best Time */}
            {safari.bestTime && (
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(212,167,106,0.07)',
                  border: '1px solid rgba(212,167,106,0.18)',
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4" style={{ color: '#D4A76A' }} />
                  <span
                    className="font-outfit text-xs tracking-[0.12em] uppercase font-semibold"
                    style={{ color: '#D4A76A' }}
                  >
                    Best Time to Visit
                  </span>
                </div>
                <p
                  className="font-outfit text-sm leading-relaxed"
                  style={{ color: 'rgba(44,36,32,0.72)' }}
                >
                  {safari.bestTime}
                </p>
              </div>
            )}

            {/* Itinerary */}
            {safari.itinerary && safari.itinerary.length > 0 && (
              <section>
                <SectionHeading>Day-by-Day Itinerary</SectionHeading>
                <ol className="mt-6 space-y-0 list-none relative">
                  {/* Vertical connector line */}
                  <div
                    className="absolute hidden sm:block"
                    style={{
                      left: '1.2rem',
                      top: '1.25rem',
                      bottom: '3rem',
                      width: '2px',
                      background:
                        'linear-gradient(to bottom, #D4A76A, rgba(212,167,106,0.1))',
                    }}
                  />

                  {safari.itinerary.map((day, idx) => (
                    <li key={idx} className="relative sm:pl-12 pb-8">
                      {/* Circle */}
                      <div
                        className="hidden sm:flex absolute left-0 top-0 w-10 h-10 rounded-full items-center justify-center flex-shrink-0"
                        style={{
                          background: '#1B3A2D',
                          border: '2px solid #D4A76A',
                        }}
                      >
                        <span
                          className="font-playfair font-bold text-sm"
                          style={{ color: '#D4A76A' }}
                        >
                          {day.day}
                        </span>
                      </div>

                      <div
                        className="rounded-2xl p-5"
                        style={{
                          background: '#fff',
                          border: '1px solid rgba(27,58,45,0.08)',
                          boxShadow: '0 2px 8px rgba(27,58,45,0.05)',
                        }}
                      >
                        {/* Mobile day badge */}
                        <span
                          className="sm:hidden inline-block font-outfit text-xs font-bold px-2.5 py-1 rounded-full mb-3"
                          style={{
                            background: 'rgba(212,167,106,0.1)',
                            color: '#8B5E3C',
                            border: '1px solid rgba(212,167,106,0.25)',
                          }}
                        >
                          Day {day.day}
                        </span>
                        <h3
                          className="font-playfair font-bold text-base mb-3"
                          style={{ color: '#1B3A2D' }}
                        >
                          {day.title}
                        </h3>
                        <p
                          className="font-outfit text-sm leading-relaxed whitespace-pre-line"
                          style={{ color: 'rgba(44,36,32,0.7)' }}
                        >
                          {day.details}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Inclusions & Exclusions */}
            {(safari.inclusions?.length || safari.exclusions?.length) ? (
              <section className="grid md:grid-cols-2 gap-5">
                {safari.inclusions && safari.inclusions.length > 0 && (
                  <div
                    className="rounded-2xl p-6"
                    style={{
                      background: 'rgba(27,58,45,0.06)',
                      border: '1px solid rgba(27,58,45,0.15)',
                    }}
                  >
                    <h3
                      className="font-playfair font-bold text-base mb-4 flex items-center gap-2"
                      style={{ color: '#1B3A2D' }}
                    >
                      <CheckCircle className="h-4 w-4" />
                      {"What's Included"}
                    </h3>
                    <ul className="space-y-2.5">
                      {safari.inclusions.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 font-outfit text-sm"
                          style={{ color: 'rgba(44,36,32,0.72)' }}
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: '#1B3A2D' }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {safari.exclusions && safari.exclusions.length > 0 && (
                  <div
                    className="rounded-2xl p-6"
                    style={{
                      background: 'rgba(185,28,28,0.04)',
                      border: '1px solid rgba(185,28,28,0.12)',
                    }}
                  >
                    <h3
                      className="font-playfair font-bold text-base mb-4 flex items-center gap-2"
                      style={{ color: '#7f1d1d' }}
                    >
                      <XCircle className="h-4 w-4" />
                      Not Included
                    </h3>
                    <ul className="space-y-2.5">
                      {safari.exclusions.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 font-outfit text-sm"
                          style={{ color: 'rgba(44,36,32,0.72)' }}
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: '#b91c1c' }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ) : null}

            {/* Gallery */}
            {safari.images && safari.images.length > 1 && (
              <section>
                <SectionHeading>Photo Gallery</SectionHeading>
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {(showAllImages
                    ? safari.images
                    : safari.images.slice(0, 6)
                  ).map((image, i) => (
                    <figure
                      key={i}
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl"
                    >
                      <img
                        src={image}
                        alt={`${safari.title} — photo ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: 'rgba(27,58,45,0.3)' }}
                      />
                    </figure>
                  ))}
                </div>
                {safari.images.length > 6 && (
                  <div className="mt-5 flex justify-center">
                    <button
                      onClick={() => setShowAllImages(!showAllImages)}
                      className="font-outfit text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
                      style={{
                        background: 'rgba(27,58,45,0.06)',
                        border: '1px solid rgba(27,58,45,0.18)',
                        color: '#1B3A2D',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#1B3A2D';
                        e.currentTarget.style.color = '#D4A76A';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          'rgba(27,58,45,0.06)';
                        e.currentTarget.style.color = '#1B3A2D';
                      }}
                    >
                      {showAllImages
                        ? 'Show fewer photos'
                        : `Show all ${safari.images.length} photos`}
                    </button>
                  </div>
                )}
              </section>
            )}

            {/* FAQs */}
            {safari.faqs && safari.faqs.length > 0 && (
              <section>
                <SectionHeading>Frequently Asked Questions</SectionHeading>
                <dl className="mt-5 space-y-3">
                  {safari.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="rounded-2xl overflow-hidden"
                      style={{
                        background: '#fff',
                        border: '1px solid rgba(27,58,45,0.08)',
                      }}
                    >
                      <button
                        className="w-full flex items-start justify-between p-5 text-left transition-colors duration-150"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        <dt
                          className="font-playfair font-bold text-sm leading-snug pr-4 flex-1"
                          style={{ color: '#2C2420' }}
                        >
                          {faq.question}
                        </dt>
                        <ChevronDown
                          className="h-4 w-4 flex-shrink-0 transition-transform duration-300 mt-0.5"
                          style={{
                            color: '#D4A76A',
                            transform:
                              openFaq === i
                                ? 'rotate(180deg)'
                                : 'rotate(0deg)',
                          }}
                        />
                      </button>
                      <div
                        className="overflow-hidden transition-all duration-300"
                        style={{
                          maxHeight: openFaq === i ? '400px' : '0',
                          opacity: openFaq === i ? 1 : 0,
                        }}
                      >
                        <dd
                          className="px-5 pb-5 font-outfit text-sm leading-relaxed"
                          style={{ color: 'rgba(44,36,32,0.7)' }}
                        >
                          {faq.answer}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </section>
            )}
          </div>

          {/* ── Right: Booking Sidebar ── */}
          <aside className="lg:col-span-1">
            <div
              className="rounded-2xl p-6 sticky top-8"
              style={{
                background: '#1B3A2D',
                border: '1px solid rgba(212,167,106,0.2)',
              }}
            >
              {/* Gold accent */}
              <div
                className="h-px w-full rounded-t-2xl mb-5 -mx-6 -mt-6 px-6 pt-6"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(212,167,106,0.5), transparent)',
                  height: '1px',
                  marginTop: 0,
                  paddingTop: 0,
                }}
              />

              <p
                className="font-outfit text-xs tracking-[0.14em] uppercase mb-1"
                style={{ color: '#D4A76A' }}
              >
                Enquire Now
              </p>
              <h3
                className="font-playfair font-bold text-xl text-white mb-6"
              >
                Book This Safari
              </h3>

              {/* Stats */}
              <dl
                className="space-y-3 mb-6 pb-6"
                style={{ borderBottom: '1px solid rgba(212,167,106,0.15)' }}
              >
                <div className="flex justify-between items-center">
                  <dt
                    className="font-outfit text-xs flex items-center gap-2"
                    style={{ color: 'rgba(245,240,232,0.5)' }}
                  >
                    <Clock className="h-3.5 w-3.5" />
                    Duration
                  </dt>
                  <dd
                    className="font-outfit text-xs font-semibold"
                    style={{ color: '#D4A76A' }}
                  >
                    {safari.duration}
                  </dd>
                </div>
                {safari.groupSize && (
                  <div className="flex justify-between items-center">
                    <dt
                      className="font-outfit text-xs flex items-center gap-2"
                      style={{ color: 'rgba(245,240,232,0.5)' }}
                    >
                      <Users className="h-3.5 w-3.5" />
                      Group Size
                    </dt>
                    <dd
                      className="font-outfit text-xs font-semibold"
                      style={{ color: '#D4A76A' }}
                    >
                      {safari.groupSize}
                    </dd>
                  </div>
                )}
                {safari.difficulty && (
                  <div className="flex justify-between items-center">
                    <dt
                      className="font-outfit text-xs flex items-center gap-2"
                      style={{ color: 'rgba(245,240,232,0.5)' }}
                    >
                      <Star className="h-3.5 w-3.5" />
                      Difficulty
                    </dt>
                    <dd
                      className="font-outfit text-xs font-semibold"
                      style={{ color: '#D4A76A' }}
                    >
                      {safari.difficulty}
                    </dd>
                  </div>
                )}
              </dl>

              {/* CTA buttons */}
              <a
                href="https://wa.me/250785917385"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ember w-full flex items-center justify-center gap-2 mb-3"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Book via WhatsApp
              </a>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-outfit text-xs font-semibold transition-all duration-200 text-[rgba(245,240,232,0.6)] hover:text-[#D4A76A] border border-[rgba(245,240,232,0.12)] hover:border-[rgba(212,167,106,0.35)]"
              >
                Send an Enquiry
              </Link>

              <p
                className="mt-4 font-outfit text-[10px] text-center"
                style={{ color: 'rgba(245,240,232,0.28)' }}
              >
                Contact us for custom pricing &amp; availability
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <section className="py-14 md:py-20" style={{ background: '#1A1714' }}>
        <div className="container max-w-2xl text-center">
          <p
            className="font-outfit text-xs tracking-[0.18em] uppercase mb-4"
            style={{ color: '#D4A76A' }}
          >
            Ready to Go?
          </p>
          <h2
            className="font-playfair font-bold text-white mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            Plan Your Safari Adventure
          </h2>
          <p
            className="font-outfit text-sm mb-8"
            style={{ color: 'rgba(245,240,232,0.5)' }}
          >
            Contact our expert team to start planning your unforgettable journey
            into the wild.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/250785917385"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ember"
            >
              Get a Quote
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
            </a>
            <button
              onClick={() => router.back()}
              className="font-outfit text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 border border-[rgba(212,167,106,0.3)] text-[rgba(245,240,232,0.7)] hover:border-[#D4A76A] hover:text-[#D4A76A]"
            >
              ← Back to Safaris
            </button>
          </div>
        </div>
      </section>

      {/* ── Mobile sticky CTA ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-4 py-3 flex gap-3"
        style={{
          background: 'rgba(26,23,20,0.96)',
          borderTop: '1px solid rgba(212,167,106,0.15)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <a
          href="https://wa.me/250785917385"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ember flex-1 flex items-center justify-center gap-2 text-xs py-3"
        >
          Book via WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-outfit text-xs font-semibold transition-all duration-200 border border-[rgba(212,167,106,0.25)] text-[rgba(245,240,232,0.65)] hover:border-[#D4A76A] hover:text-[#D4A76A]"
        >
          Enquire
        </Link>
      </div>

    </main>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2
        className="font-playfair font-bold"
        style={{ fontSize: 'clamp(1.25rem, 2vw, 1.6rem)', color: '#2C2420' }}
      >
        {children}
      </h2>
      <div
        className="mt-2 h-px w-12"
        style={{ background: '#D4A76A' }}
      />
    </div>
  );
}
