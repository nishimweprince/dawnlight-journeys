import { Award, Users, Shield, Clock, Headphones, Sparkles } from 'lucide-react';

const features = [
  {
    id: 1,
    num: '01',
    icon: Award,
    title: '24-Hour Trip Planning',
    description:
      'Our expert team works around the clock to plan every detail of your safari adventure, ensuring a seamless and unforgettable experience from start to finish.',
  },
  {
    id: 2,
    num: '02',
    icon: Users,
    title: 'Gorilla Permit Experts',
    description:
      'We handle all complexities of securing gorilla trekking permits in Rwanda and Uganda, guaranteeing your once-in-a-lifetime mountain gorilla encounter.',
  },
  {
    id: 3,
    num: '03',
    icon: Shield,
    title: 'Hassle-Free Travel',
    description:
      'From premium accommodation to private transfers, we take care of everything so you can focus on creating memories and experiencing the wonders of Africa.',
  },
  {
    id: 4,
    num: '04',
    icon: Clock,
    title: 'Instant Payment Proof',
    description:
      'Receive immediate confirmation and payment receipts for all bookings, providing complete transparency and peace of mind throughout your journey.',
  },
  {
    id: 5,
    num: '05',
    icon: Headphones,
    title: '24 / 7 Support',
    description:
      'Our dedicated team is available around the clock to assist before, during, and after your safari — so you always have expert help when you need it.',
  },
  {
    id: 6,
    num: '06',
    icon: Sparkles,
    title: 'Fully Flexible',
    description:
      'We craft bespoke itineraries tailored to your preferences, budget, and schedule, making every African adventure truly unique and deeply personal.',
  },
];

export function WhyTravel() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden bg-dj-cream-topo"
      aria-labelledby="why-travel-heading"
    >
      {/* Decorative large watermark */}
      <span
        className="absolute right-[-2rem] top-[-3rem] select-none pointer-events-none font-playfair font-bold leading-none hidden xl:block"
        style={{ fontSize: '13rem', opacity: 0.024, color: '#1B3A2D' }}
        aria-hidden="true"
      >
        WHY
      </span>

      <div className="container relative z-10">
        {/* Section Header */}
        <header className="mb-16 md:mb-20">
          <p className="section-label mb-4">Our Promise</p>
          <span
            className="gold-line mb-6"
            style={{ display: 'block', width: '3rem', height: '2px', background: 'linear-gradient(90deg, #D4A76A, #D97B2B)', borderRadius: '9999px' }}
          />
          <div className="max-w-xl">
            <h2
              id="why-travel-heading"
              className="font-playfair font-bold leading-[1.15]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#2C2420' }}
            >
              Why Travel With{' '}
              <span style={{ color: '#8B5E3C' }}>Dawnlight Journeys?</span>
            </h2>
            <p className="mt-4 font-outfit text-base leading-relaxed" style={{ color: 'rgba(44,36,32,0.58)' }}>
              Every journey we create is shaped by deep local expertise, genuine care, and an
              obsession with delivering experiences that exceed all expectations.
            </p>
          </div>
        </header>

        {/* Feature grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none" role="list">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <li key={feature.id}>
                <article
                  className="group relative h-full rounded-2xl p-7 shadow-sm hover:shadow-md card-lift overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.72)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(212,167,106,0.18)',
                  }}
                >
                  {/* Large watermark number */}
                  <span
                    className="absolute top-3 right-5 font-playfair font-bold leading-none select-none pointer-events-none"
                    style={{ fontSize: '4rem', opacity: 0.052, color: '#8B5E3C' }}
                    aria-hidden="true"
                  >
                    {feature.num}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: 'linear-gradient(135deg, rgba(212,167,106,0.14), rgba(217,123,43,0.08))',
                      border: '1px solid rgba(212,167,106,0.28)',
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      strokeWidth={1.5}
                      style={{ color: '#D97B2B' }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <h3
                    className="font-outfit font-semibold text-xs uppercase tracking-[0.12em] mb-2.5"
                    style={{ color: '#2C2420' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="font-outfit text-sm leading-relaxed"
                    style={{ color: 'rgba(44,36,32,0.58)' }}
                  >
                    {feature.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
