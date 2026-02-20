'use client';

import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

const metadata: Metadata = {
  title: 'Blog - Safari Stories & Travel Tips | Dawnlight Journeys',
  description:
    'Discover inspiring safari stories, travel tips, and expert advice for your African adventure.',
};

const blogs = [
  {
    id: 1,
    category: 'Gorilla Trekking',
    readTime: '10 min read',
    date: 'Dec 15, 2024',
    title: 'The Ultimate Guide to Gorilla Trekking in Rwanda',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/v1752337228/dawnlight-journeys/gorilla-hero_asdfbd.jpg',
    excerpt:
      'Discover everything you need to know about gorilla trekking in Rwanda, from permits and packing tips to the best time to visit and what to expect on your adventure.',
    url: '/blog/gorilla-trekking-guide',
  },
  {
    id: 2,
    category: 'Wildlife Safari',
    readTime: '8 min read',
    date: 'Nov 22, 2024',
    title: 'Top 5 Safari Experiences in Uganda',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/v1752332362/dawnlight-journeys/lake-mburo-2_i4lpc6.jpg',
    excerpt:
      "Uganda is a land of breathtaking wildlife and adventure. Explore our top 5 safari experiences, including chimpanzee tracking, boat safaris, and more.",
    url: '/blog/top-5-uganda-safaris',
  },
  {
    id: 3,
    category: 'Cultural Travel',
    readTime: '7 min read',
    date: 'Oct 8, 2024',
    title: 'Cultural Encounters: Meeting the People of East Africa',
    image:
      'https://res.cloudinary.com/nishimweprince/image/upload/v1752339224/dawnlight-journeys/cultural-immersion_uhqf3i.jpg',
    excerpt:
      "Go beyond the wildlife and discover the rich cultures, traditions, and hospitality of East Africa's diverse communities.",
    url: '/blog/cultural-encounters-east-africa',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen" style={{ background: '#F5F0E8' }}>

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: '52vh', background: '#1B3A2D' }}
      >
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(212,167,106,0.07) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        {/* Grain texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <div className="container relative z-10 pb-16 pt-32">
          <p
            className="font-outfit text-xs tracking-[0.22em] uppercase mb-5 flex items-center gap-3"
            style={{ color: '#D4A76A' }}
          >
            <span
              className="inline-block h-px w-8"
              style={{ background: '#D4A76A' }}
            />
            Journal
          </p>
          <h1
            className="font-playfair font-bold text-white leading-none mb-5"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
          >
            Safari Stories &amp;<br />
            <span style={{ color: '#D4A76A', fontStyle: 'italic' }}>
              Travel Insights
            </span>
          </h1>
          <p
            className="font-outfit text-base leading-relaxed max-w-xl"
            style={{ color: 'rgba(245,240,232,0.6)' }}
          >
            Expert guides, firsthand tales, and curated advice from the heart of
            East Africa.
          </p>
        </div>

        {/* Diagonal bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom right, transparent 49%, #F5F0E8 50%)',
          }}
          aria-hidden="true"
        />
      </section>

      {/* ── Blog Grid ── */}
      <section className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <article
              key={blog.id}
              className="group flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: 'white',
                boxShadow: '0 2px 20px rgba(44,36,32,0.08)',
              }}
            >
              {/* Image */}
              <Link href={blog.url} className="block overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>

              {/* Body */}
              <div className="flex flex-col flex-1 p-7">
                {/* Category + meta */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="font-outfit text-[0.65rem] tracking-[0.14em] uppercase font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(212,167,106,0.12)',
                      color: '#8B5E3C',
                      border: '1px solid rgba(212,167,106,0.25)',
                    }}
                  >
                    {blog.category}
                  </span>
                  <span
                    className="font-outfit text-xs"
                    style={{ color: 'rgba(44,36,32,0.4)' }}
                  >
                    {blog.readTime}
                  </span>
                </div>

                {/* Title */}
                <Link href={blog.url}>
                  <h2
                    className="font-playfair font-bold leading-snug mb-3 transition-colors duration-200"
                    style={{
                      fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
                      color: '#2C2420',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLHeadingElement).style.color =
                        '#8B5E3C';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLHeadingElement).style.color =
                        '#2C2420';
                    }}
                  >
                    {blog.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p
                  className="font-outfit text-sm leading-relaxed mb-6 flex-1 line-clamp-3"
                  style={{ color: 'rgba(44,36,32,0.58)' }}
                >
                  {blog.excerpt}
                </p>

                {/* Footer: date + read more */}
                <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid rgba(212,167,106,0.15)' }}>
                  <time
                    className="font-outfit text-xs"
                    style={{ color: 'rgba(44,36,32,0.38)' }}
                  >
                    {blog.date}
                  </time>
                  <Link
                    href={blog.url}
                    className="link-underline font-outfit text-xs font-semibold tracking-[0.1em] uppercase inline-flex items-center gap-1.5"
                    style={{ color: '#8B5E3C' }}
                  >
                    Read Article
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5 link-arrow-icon"
                      aria-hidden="true"
                    >
                      <path d="M4 10h12M11 5l5 5-5 5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section
        className="py-16 md:py-20"
        style={{ background: '#1A1714' }}
      >
        <div className="container max-w-2xl text-center">
          <p
            className="font-outfit text-xs tracking-[0.2em] uppercase mb-4"
            style={{ color: '#D4A76A' }}
          >
            Stay Inspired
          </p>
          <h2
            className="font-playfair font-bold text-white mb-4"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
          >
            New Stories, Straight to Your Inbox
          </h2>
          <p
            className="font-outfit text-sm mb-8 leading-relaxed"
            style={{ color: 'rgba(245,240,232,0.5)' }}
          >
            Subscribe to receive our latest safari guides and travel inspiration.
          </p>
          <Link href="/#contact" className="btn-ember">
            Get in Touch
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
        </div>
      </section>
    </main>
  );
}
