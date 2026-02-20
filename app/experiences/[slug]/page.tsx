import React from 'react';
import { MapPin, Clock, Calendar, Star } from 'lucide-react';
import { notFound } from 'next/navigation';
import { experiences } from '../../../src/constants/experiences';
import Link from 'next/link';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = experiences?.find(
    (exp) => exp?.slug === slug || exp?.url?.split('/')?.pop() === slug
  );
  if (!experience) {
    return { title: 'Experience Not Found | Dawnlight Journeys' };
  }
  return {
    title: `${experience.title} | Dawnlight Journeys`,
    description: experience.description,
    openGraph: {
      title: `${experience.title} | Dawnlight Journeys`,
      description: experience.description,
      images: [experience.image || '/assets/common/placeholder.svg'],
      type: 'article',
    },
  };
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = experiences?.find(
    (exp) => exp?.slug === slug || exp?.url?.split('/')?.pop() === slug
  );
  if (!experience) return notFound();

  const Icon = experience.icon;
  const images = experience.images || (experience.image ? [experience.image] : []);

  return (
    <main className="min-h-screen" style={{ background: '#F5F0E8' }}>

      {/* ── Hero ── */}
      <header className="relative overflow-hidden" style={{ minHeight: '60vh' }}>
        <img
          src={experience.image}
          alt={experience.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(26,23,20,0.92) 0%, rgba(26,23,20,0.5) 55%, rgba(26,23,20,0.2) 100%)',
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

        {/* Hero content */}
        <div className="container relative z-10 flex flex-col justify-end h-full pb-14 pt-36">
          {/* Back link */}
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 mb-8 font-outfit text-xs tracking-[0.12em] uppercase transition-colors duration-200 w-fit text-[rgba(245,240,232,0.45)] hover:text-[#D4A76A]"
          >
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M16 10H4M9 5l-5 5 5 5" />
            </svg>
            All Experiences
          </Link>

          {/* Icon + title */}
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: 'rgba(212,167,106,0.18)',
                border: '1px solid rgba(212,167,106,0.4)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Icon className="w-5 h-5" style={{ color: '#D4A76A' }} aria-hidden="true" />
            </div>
            <span
              className="font-outfit text-xs tracking-[0.18em] uppercase font-semibold"
              style={{ color: '#D4A76A' }}
            >
              Experience
            </span>
          </div>

          <h1
            className="font-playfair font-bold text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            {experience.title}
          </h1>

          {/* Quick facts */}
          <div className="flex flex-wrap gap-3">
            {experience.duration && (
              <span
                className="inline-flex items-center gap-2 font-outfit text-xs px-3.5 py-1.5 rounded-full"
                style={{
                  background: 'rgba(245,240,232,0.1)',
                  border: '1px solid rgba(245,240,232,0.15)',
                  color: 'rgba(245,240,232,0.75)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Clock className="w-3 h-3" aria-hidden="true" />
                {experience.duration}
              </span>
            )}
            {experience.difficulty && (
              <span
                className="inline-flex items-center gap-2 font-outfit text-xs px-3.5 py-1.5 rounded-full"
                style={{
                  background: 'rgba(245,240,232,0.1)',
                  border: '1px solid rgba(245,240,232,0.15)',
                  color: 'rgba(245,240,232,0.75)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Star className="w-3 h-3" aria-hidden="true" />
                {experience.difficulty}
              </span>
            )}
            {experience.bestTime && (
              <span
                className="inline-flex items-center gap-2 font-outfit text-xs px-3.5 py-1.5 rounded-full"
                style={{
                  background: 'rgba(245,240,232,0.1)',
                  border: '1px solid rgba(245,240,232,0.15)',
                  color: 'rgba(245,240,232,0.75)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Calendar className="w-3 h-3" aria-hidden="true" />
                {experience.bestTime}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <div className="container py-14 md:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* ── Left column ── */}
          <div className="lg:col-span-2 space-y-14">

            {/* Overview */}
            <section>
              <SectionHeading>Experience Overview</SectionHeading>
              <p className="font-outfit text-base leading-relaxed mb-6" style={{ color: 'rgba(44,36,32,0.72)' }}>
                {experience.description}
              </p>
              {experience.locations && experience.locations.length > 0 && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#D4A76A' }} aria-hidden="true" />
                  <div>
                    <p className="font-outfit text-xs tracking-[0.1em] uppercase font-semibold mb-1" style={{ color: 'rgba(44,36,32,0.45)' }}>
                      Locations
                    </p>
                    <p className="font-outfit text-sm" style={{ color: 'rgba(44,36,32,0.72)' }}>
                      {experience.locations.join(' · ')}
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* Gallery */}
            {images.length > 1 && (
              <section>
                <SectionHeading>Gallery</SectionHeading>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {images.map((img: string, idx: number) => (
                    <figure
                      key={idx}
                      className="rounded-xl overflow-hidden"
                      style={{ aspectRatio: '4/3' }}
                    >
                      <img
                        src={img}
                        alt={`${experience.title} — photo ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </figure>
                  ))}
                </div>
              </section>
            )}

            {/* Itinerary */}
            {experience.itinerary && experience.itinerary.length > 0 && (
              <section>
                <SectionHeading>Itinerary</SectionHeading>
                <ol className="space-y-4">
                  {experience.itinerary.map((day: { title: string; details: string }, idx: number) => (
                    <li key={idx} className="relative flex gap-5">
                      {/* Timeline line */}
                      <div className="flex flex-col items-center">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-outfit text-xs font-bold"
                          style={{
                            background: 'rgba(212,167,106,0.15)',
                            border: '1.5px solid rgba(212,167,106,0.4)',
                            color: '#D4A76A',
                          }}
                        >
                          {idx + 1}
                        </div>
                        {idx < (experience.itinerary?.length ?? 0) - 1 && (
                          <div
                            className="flex-1 w-px mt-2"
                            style={{ background: 'rgba(212,167,106,0.2)' }}
                          />
                        )}
                      </div>
                      {/* Content */}
                      <div
                        className="flex-1 rounded-xl p-5 mb-4"
                        style={{
                          background: 'white',
                          border: '1px solid rgba(212,167,106,0.12)',
                          boxShadow: '0 2px 12px rgba(44,36,32,0.06)',
                        }}
                      >
                        <h3
                          className="font-playfair font-bold mb-2"
                          style={{ color: '#2C2420', fontSize: '1.05rem' }}
                        >
                          {day.title}
                        </h3>
                        <p
                          className="font-outfit text-sm leading-relaxed whitespace-pre-line"
                          style={{ color: 'rgba(44,36,32,0.68)' }}
                        >
                          {day.details}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* FAQ */}
            {experience.faqs && experience.faqs.length > 0 && (
              <section>
                <SectionHeading>Frequently Asked Questions</SectionHeading>
                <div className="space-y-4">
                  {experience.faqs.map((faq: { question: string; answer: string }, idx: number) => (
                    <details
                      key={idx}
                      className="rounded-xl overflow-hidden group"
                      style={{
                        background: 'white',
                        border: '1px solid rgba(212,167,106,0.15)',
                      }}
                    >
                      <summary
                        className="font-playfair font-bold text-base px-6 py-4 cursor-pointer list-none flex items-center justify-between"
                        style={{ color: '#2C2420' }}
                      >
                        {faq.question}
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="w-4 h-4 shrink-0 ml-3 transition-transform duration-200 group-open:rotate-180"
                          style={{ color: '#D4A76A' }}
                          aria-hidden="true"
                        >
                          <path d="M5 8l5 5 5-5" />
                        </svg>
                      </summary>
                      <div
                        className="px-6 pb-5"
                        style={{ borderTop: '1px solid rgba(212,167,106,0.1)' }}
                      >
                        <p
                          className="font-outfit text-sm leading-relaxed pt-4"
                          style={{ color: 'rgba(44,36,32,0.68)' }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Inclusions / Exclusions */}
            {(experience.inclusions || experience.exclusions) && (
              <section>
                <SectionHeading>Good to Know</SectionHeading>
                <div className="grid sm:grid-cols-2 gap-5">
                  {experience.inclusions && experience.inclusions.length > 0 && (
                    <div
                      className="rounded-xl p-6"
                      style={{
                        background: 'rgba(27,58,45,0.05)',
                        border: '1px solid rgba(27,58,45,0.18)',
                      }}
                    >
                      <h4
                        className="font-outfit font-semibold text-xs tracking-[0.14em] uppercase mb-4"
                        style={{ color: '#1B3A2D' }}
                      >
                        What's Included
                      </h4>
                      <ul className="space-y-2.5">
                        {experience.inclusions.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3 font-outfit text-sm" style={{ color: 'rgba(44,36,32,0.72)' }}>
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#1B3A2D' }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {experience.exclusions && experience.exclusions.length > 0 && (
                    <div
                      className="rounded-xl p-6"
                      style={{
                        background: 'rgba(239,68,68,0.04)',
                        border: '1px solid rgba(239,68,68,0.18)',
                      }}
                    >
                      <h4
                        className="font-outfit font-semibold text-xs tracking-[0.14em] uppercase mb-4"
                        style={{ color: '#b91c1c' }}
                      >
                        Not Included
                      </h4>
                      <ul className="space-y-2.5">
                        {experience.exclusions.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3 font-outfit text-sm" style={{ color: 'rgba(44,36,32,0.72)' }}>
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#ef4444' }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>

          {/* ── Right sidebar ── */}
          <aside className="lg:col-span-1 space-y-6">

            {/* Booking card */}
            <div
              className="rounded-2xl p-7 sticky top-24"
              style={{
                background: '#1B3A2D',
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              }}
            >
              <p
                className="font-outfit text-xs tracking-[0.18em] uppercase mb-5"
                style={{ color: '#D4A76A' }}
              >
                Book This Experience
              </p>

              {/* Details */}
              <dl className="space-y-3 mb-6">
                {experience.duration && (
                  <div className="flex items-center justify-between">
                    <dt className="font-outfit text-xs" style={{ color: 'rgba(245,240,232,0.45)' }}>Duration</dt>
                    <dd className="font-outfit text-sm font-semibold" style={{ color: 'rgba(245,240,232,0.85)' }}>{experience.duration}</dd>
                  </div>
                )}
                {experience.difficulty && (
                  <div className="flex items-center justify-between">
                    <dt className="font-outfit text-xs" style={{ color: 'rgba(245,240,232,0.45)' }}>Difficulty</dt>
                    <dd className="font-outfit text-sm font-semibold" style={{ color: 'rgba(245,240,232,0.85)' }}>{experience.difficulty}</dd>
                  </div>
                )}
                {experience.bestTime && (
                  <div className="flex items-center justify-between">
                    <dt className="font-outfit text-xs" style={{ color: 'rgba(245,240,232,0.45)' }}>Best Time</dt>
                    <dd className="font-outfit text-sm font-semibold" style={{ color: 'rgba(245,240,232,0.85)' }}>{experience.bestTime}</dd>
                  </div>
                )}
              </dl>

              <div
                className="mb-5"
                style={{ borderTop: '1px solid rgba(212,167,106,0.15)' }}
              />

              <a
                href="https://wa.me/250785917385"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ember w-full justify-center"
              >
                Book via WhatsApp
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" />
                </svg>
              </a>

              <Link
                href="/contact"
                className="mt-3 w-full flex items-center justify-center font-outfit text-xs font-semibold tracking-[0.1em] uppercase py-3 rounded-full transition-all duration-200 border border-[rgba(245,240,232,0.12)] text-[rgba(245,240,232,0.55)] hover:border-[rgba(212,167,106,0.4)] hover:text-[#D4A76A]"
              >
                Send an Enquiry
              </Link>
            </div>

            {/* Highlights */}
            {experience.highlights && experience.highlights.length > 0 && (
              <div
                className="rounded-2xl p-7"
                style={{
                  background: 'white',
                  border: '1px solid rgba(212,167,106,0.15)',
                  boxShadow: '0 2px 16px rgba(44,36,32,0.07)',
                }}
              >
                <p
                  className="font-outfit text-xs tracking-[0.14em] uppercase font-semibold mb-5"
                  style={{ color: '#D4A76A' }}
                >
                  Highlights
                </p>
                <ul className="space-y-3">
                  {experience.highlights.map((highlight: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 font-outfit text-sm" style={{ color: 'rgba(44,36,32,0.72)' }}>
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#D4A76A' }}
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* ── Mobile sticky CTA ── */}
      <div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center pointer-events-none md:hidden">
        <a
          href="https://wa.me/250785917385"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ember pointer-events-auto shadow-xl"
        >
          Book via WhatsApp
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
            <path d="M4 10h12M11 5l5 5-5 5" />
          </svg>
        </a>
      </div>
    </main>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2
        className="font-playfair font-bold"
        style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', color: '#2C2420' }}
      >
        {children}
      </h2>
      <div
        className="mt-2 h-px"
        style={{ background: 'linear-gradient(90deg, #D4A76A, rgba(212,167,106,0))', width: '3rem' }}
      />
    </div>
  );
}
