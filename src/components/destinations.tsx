import Link from "next/link";

const highlights = [
  'Mountain Gorilla Trekking',
  'Big Five Wildlife Safaris',
  'Cultural Immersion Experiences',
  'Primate Forest Adventures',
  'Bird Watching Expeditions',
];

export function Destinations() {
  return (
    <section
      id="destinations"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: '#1B3A2D' }}
      aria-labelledby="destinations-heading"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 70% 50%, rgba(212,167,106,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">

          {/* LEFT: Image — takes more width */}
          <figure
            className="relative overflow-hidden order-1 img-zoom-parent"
            style={{ borderRadius: '1.25rem' }}
          >
            <img
              src="/assets/destinations/rwanda-tourism.jpg"
              alt="Rwanda and Uganda safari destinations — mountain gorillas and wild savanna"
              className="w-full object-cover"
              style={{ aspectRatio: '4/3' }}
              loading="lazy"
            />
            {/* Warm image overlay for consistency */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(26,23,20,0.35) 0%, transparent 50%)' }}
            />

            {/* Floating label on image */}
            <div
              className="absolute bottom-6 left-6 right-6 flex items-end justify-between"
            >
              <div>
                <p className="font-outfit text-xs tracking-[0.14em] uppercase mb-1" style={{ color: '#D4A76A' }}>
                  East Africa
                </p>
                <p className="font-playfair font-bold text-white text-xl leading-tight">
                  Rwanda &amp; Uganda
                </p>
              </div>
              <div
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5"
                style={{ background: 'rgba(212,167,106,0.2)', border: '1px solid rgba(212,167,106,0.35)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-dj-gold animate-pulse" style={{ backgroundColor: '#D4A76A' }} />
                <span className="font-outfit text-xs font-medium" style={{ color: '#D4A76A' }}>2 Countries</span>
              </div>
            </div>
          </figure>

          {/* RIGHT: Text content */}
          <article className="space-y-7 order-2">
            <div>
              <p className="section-label mb-4">Destinations</p>
              <span
                style={{ display: 'block', width: '2.5rem', height: '2px', background: 'linear-gradient(90deg, #D4A76A, #D97B2B)', borderRadius: '9999px', marginBottom: '1.5rem' }}
              />
              <h2
                id="destinations-heading"
                className="font-playfair font-bold text-white leading-[1.15]"
                style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)' }}
              >
                Discover Rwanda<br />
                <span style={{ color: '#D4A76A' }}>&amp; Uganda</span>
              </h2>
            </div>

            <p
              className="font-outfit text-base leading-[1.75]"
              style={{ color: 'rgba(245,240,232,0.72)' }}
            >
              Journey through Rwanda's lush thousand hills and Uganda's wild savannas.
              From tracking mountain gorillas in Volcanoes National Park to witnessing
              the Big Five in Queen Elizabeth National Park — every moment is unforgettable.
            </p>

            {/* Elegant dot list */}
            <ul className="space-y-2.5 list-none" role="list">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: '#D4A76A' }}
                    aria-hidden="true"
                  />
                  <span
                    className="font-outfit text-sm font-medium"
                    style={{ color: 'rgba(245,240,232,0.85)' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Animated underline CTA */}
            <div className="pt-2">
              <Link
                href="/destinations"
                className="link-underline font-outfit text-sm font-semibold tracking-wide"
                style={{ color: '#D4A76A' }}
              >
                View All Destinations
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
          </article>
        </div>
      </div>
    </section>
  );
}
