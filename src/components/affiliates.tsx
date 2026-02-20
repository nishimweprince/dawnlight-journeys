const partners = [
  { src: '/assets/partners/cot-logo.png',  alt: 'COT — Council of Tourism' },
  { src: '/assets/partners/rdb-logo.jpg',  alt: 'RDB — Rwanda Development Board' },
  { src: '/assets/partners/rtta-logo.png', alt: 'RTTA — Rwanda Tour & Travel Association' },
  { src: '/assets/partners/utb-logo.webp', alt: 'UTB — Uganda Tourism Board' },
];

export function Affiliates() {
  return (
    <section
      id="affiliates"
      className="relative py-14 md:py-18 bg-dj-cream-topo"
      aria-labelledby="affiliates-heading"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Label */}
          <div className="shrink-0">
            <p className="section-label mb-2">Affiliates &amp; Partners</p>
            <p
              className="font-outfit text-sm max-w-xs leading-relaxed"
              style={{ color: 'rgba(44,36,32,0.55)' }}
            >
              Certified, trusted, and affiliated with the leading tourism boards across East Africa.
            </p>
          </div>

          {/* Logo strip */}
          <article className="flex items-center gap-8 md:gap-12 flex-wrap" role="list">
            {partners.map((partner) => (
              <figure
                key={partner.src}
                className="flex items-center justify-center"
                role="listitem"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="object-contain transition-all duration-300 cursor-default"
                  style={{
                    height: '2.5rem',
                    filter: 'grayscale(100%) opacity(0.55)',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%) opacity(1)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(100%) opacity(0.55)'; }}
                  loading="lazy"
                />
              </figure>
            ))}
          </article>
        </div>

        {/* Thin separator */}
        <div
          className="mt-10"
          style={{ borderTop: '1px solid rgba(212,167,106,0.18)' }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
