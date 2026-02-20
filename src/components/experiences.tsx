'use client';

import Link from "next/link";
import { experiences as allExperiences } from "../constants/experiences";
import { motion } from "framer-motion";

const experiences = allExperiences.slice(0, 5);

export function Experiences() {
  const [featured, ...rest] = experiences;

  return (
    <section
      id="experiences"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: '#F5F0E8' }}
      aria-labelledby="experiences-heading"
    >
      {/* Decorative glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,94,60,0.055) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <header className="mb-12">
          <p className="section-label mb-4">Experiences</p>
          <span style={{ display: 'block', width: '2.5rem', height: '2px', background: 'linear-gradient(90deg, #D4A76A, #D97B2B)', borderRadius: '9999px', marginBottom: '1.25rem' }} />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              id="experiences-heading"
              className="font-playfair font-bold leading-tight"
              style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', color: '#2C2420' }}
            >
              East African<br />
              <span style={{ color: '#8B5E3C' }}>Hidden Treasures</span>
            </h2>
            <Link
              href="/experiences"
              className="link-underline font-outfit text-sm font-semibold shrink-0 hidden sm:inline-flex"
              style={{ color: '#8B5E3C' }}
            >
              Discover All Experiences
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 link-arrow-icon" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </Link>
          </div>
        </header>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" role="list">

          {/* Featured card — spans 2 columns on lg */}
          {featured && (
            <motion.div
              className="lg:col-span-2 group relative rounded-2xl overflow-hidden img-zoom-parent"
              style={{ minHeight: '380px' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              role="listitem"
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(26,23,20,0.85) 0%, rgba(26,23,20,0.18) 55%, transparent 100%)' }}
              />
              <div
                className="absolute top-5 left-5 rounded-full px-3 py-1"
                style={{ background: 'rgba(212,167,106,0.18)', border: '1px solid rgba(212,167,106,0.4)', backdropFilter: 'blur(8px)' }}
              >
                <span className="font-outfit text-xs tracking-[0.1em] uppercase font-medium" style={{ color: '#D4A76A' }}>
                  Featured
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="font-playfair font-bold text-white mb-2 leading-snug" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)' }}>
                  {featured.title}
                </h3>
                <p className="font-outfit text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: 'rgba(245,240,232,0.72)' }}>
                  {featured.description}
                </p>
                <Link
                  href={featured.url}
                  className="link-underline font-outfit text-xs font-semibold tracking-[0.1em] uppercase"
                  style={{ color: '#D4A76A' }}
                >
                  Explore
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 link-arrow-icon" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          )}

          {/* Secondary cards */}
          {rest.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="group relative rounded-2xl overflow-hidden img-zoom-parent"
              style={{ minHeight: '200px' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
              role="listitem"
            >
              <img
                src={experience.image}
                alt={experience.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(26,23,20,0.88) 0%, rgba(26,23,20,0.12) 60%, transparent 100%)' }}
              />
              {/* Hover description */}
              <div
                className="absolute inset-0 flex items-center justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(26,23,20,0.65)', backdropFilter: 'blur(2px)' }}
              >
                <p className="font-outfit text-sm text-center leading-relaxed" style={{ color: 'rgba(245,240,232,0.88)' }}>
                  {experience.description}
                </p>
              </div>
              <div
                className="absolute top-4 left-4 rounded-full px-2.5 py-1"
                style={{ background: 'rgba(26,23,20,0.72)', border: '1px solid rgba(212,167,106,0.3)', backdropFilter: 'blur(6px)' }}
              >
                <span className="font-outfit text-[0.6rem] tracking-[0.1em] uppercase font-medium" style={{ color: '#D4A76A' }}>
                  Experience
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-playfair font-bold text-white text-lg leading-snug mb-2">
                  {experience.title}
                </h3>
                <Link
                  href={experience.url}
                  className="link-underline font-outfit text-xs font-semibold tracking-[0.1em] uppercase"
                  style={{ color: 'rgba(212,167,106,0.85)' }}
                  aria-label={`Learn more about ${experience.title}`}
                >
                  Learn More
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 link-arrow-icon" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="flex justify-center mt-10 sm:hidden">
          <Link href="/experiences" className="btn-ember">
            Discover All Experiences
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
