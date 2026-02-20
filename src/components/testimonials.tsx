'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'United States',
    rating: 5,
    text: 'Our gorilla trekking experience with Dawnlight Journeys was absolutely incredible! The guides were knowledgeable, professional, and made sure we had the trip of a lifetime. Highly recommend!',
    trip: 'Rwanda Gorilla Trekking',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Singapore',
    rating: 5,
    text: 'From start to finish, Dawnlight Journeys exceeded our expectations. The attention to detail, the accommodations, and the wildlife sightings were all phenomenal. This was truly a once-in-a-lifetime experience.',
    trip: 'Uganda Wildlife Safari',
  },
  {
    id: 3,
    name: 'Emma Williams',
    location: 'United Kingdom',
    rating: 5,
    text: 'The cultural immersion experiences were the highlight of our trip. We felt welcomed by local communities and gained a deep appreciation for Rwandan and Ugandan culture. Thank you, Dawnlight Journeys!',
    trip: 'Cultural Safari Experience',
  },
  {
    id: 4,
    name: 'David Martinez',
    location: 'Spain',
    rating: 5,
    text: "As a photographer, I couldn't have asked for a better safari experience. The guides knew exactly where to position us for the best shots, and the wildlife encounters were extraordinary.",
    trip: 'Photography Safari',
  },
  {
    id: 5,
    name: 'Priya Patel',
    location: 'India',
    rating: 5,
    text: 'Impeccable service, stunning landscapes, and unforgettable memories. Dawnlight Journeys organized everything perfectly, allowing us to fully immerse ourselves in the adventure without any worries.',
    trip: 'East Africa Adventure',
  },
];

const stats = [
  { value: '500+', label: 'Happy Travelers' },
  { value: '4.9', label: 'Average Rating' },
  { value: '100%', label: 'Satisfaction Rate' },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((currentIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goTo = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 200);
  };

  const prev = () => goTo(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  const next = () => goTo(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-28 overflow-hidden bg-dj-dark grain-overlay"
      aria-labelledby="testimonials-heading"
    >
      {/* Ambient glows */}
      <div
        className="absolute top-0 left-0 w-[30rem] h-[30rem] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,94,60,0.08) 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[30rem] h-[30rem] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(27,58,45,0.1) 0%, transparent 70%)', transform: 'translate(30%, 30%)' }}
        aria-hidden="true"
      />

      <div className="container relative z-10">

        {/* Stats bar */}
        <aside className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="font-playfair font-bold leading-none mb-1"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#D4A76A' }}
              >
                {stat.value}
              </p>
              <p className="font-outfit text-xs tracking-[0.12em] uppercase" style={{ color: 'rgba(245,240,232,0.45)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </aside>

        {/* Section heading */}
        <header className="text-center mb-14">
          <p className="section-label mb-4">Testimonials</p>
          <div className="flex justify-center mb-5">
            <span style={{ display: 'block', width: '2.5rem', height: '2px', background: 'linear-gradient(90deg, #D4A76A, #D97B2B)', borderRadius: '9999px' }} />
          </div>
          <h2
            id="testimonials-heading"
            className="font-playfair font-bold text-white"
            style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)' }}
          >
            What Our Travelers Say
          </h2>
        </header>

        {/* Featured pull-quote carousel */}
        <article className="max-w-3xl mx-auto text-center relative mb-14" aria-live="polite">
          {/* Decorative large quote mark */}
          <div
            className="absolute -top-6 left-1/2 -translate-x-1/2 select-none pointer-events-none font-playfair font-bold leading-none"
            style={{ fontSize: '8rem', color: '#D4A76A', opacity: 0.12, lineHeight: 1 }}
            aria-hidden="true"
          >
            &#8220;
          </div>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-6 relative z-10">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>

          {/* Quote text */}
          <blockquote
            className={`
              font-playfair italic text-white leading-[1.65] relative z-10
              transition-all duration-300
              ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}
            `}
            style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)' }}
          >
            &#8220;{current.text}&#8221;
          </blockquote>

          {/* Author */}
          <footer
            className={`
              mt-8 relative z-10
              transition-all duration-300
              ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}
            `}
          >
            <div
              className="inline-block w-8 h-px mx-auto mb-4"
              style={{ background: '#D4A76A' }}
              aria-hidden="true"
            />
            <p className="font-outfit font-semibold text-white text-base">{current.name}</p>
            <p className="font-outfit text-xs tracking-[0.12em] uppercase mt-1" style={{ color: '#D4A76A' }}>
              {current.location} · {current.trip}
            </p>
          </footer>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10 relative z-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ border: '1px solid rgba(212,167,106,0.35)', color: '#D4A76A' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  role="tab"
                  aria-selected={index === currentIndex}
                  onClick={() => goTo(index)}
                  className="rounded-full transition-all duration-400"
                  style={{
                    width: index === currentIndex ? '1.75rem' : '0.4rem',
                    height: '0.4rem',
                    background: index === currentIndex ? '#D4A76A' : 'rgba(212,167,106,0.3)',
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ border: '1px solid rgba(212,167,106,0.35)', color: '#D4A76A' }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </article>

        {/* Divider */}
        <div
          className="max-w-3xl mx-auto mb-14"
          style={{ borderTop: '1px solid rgba(212,167,106,0.1)' }}
          aria-hidden="true"
        />

        {/* All testimonials mini-cards */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none" role="list">
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.id}
              className="rounded-xl p-6 card-lift"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(212,167,106,0.12)',
              }}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="font-outfit text-sm leading-relaxed mb-5 line-clamp-3" style={{ color: 'rgba(245,240,232,0.65)' }}>
                &#8220;{testimonial.text}&#8221;
              </blockquote>
              <footer style={{ borderTop: '1px solid rgba(212,167,106,0.12)', paddingTop: '1rem' }}>
                <p className="font-outfit font-semibold text-sm" style={{ color: 'rgba(245,240,232,0.9)' }}>
                  {testimonial.name}
                </p>
                <p className="font-outfit text-xs mt-0.5 tracking-wide" style={{ color: '#D4A76A' }}>
                  {testimonial.location}
                </p>
                <p className="font-outfit text-xs mt-1 tracking-[0.1em] uppercase" style={{ color: 'rgba(245,240,232,0.4)' }}>
                  {testimonial.trip}
                </p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
