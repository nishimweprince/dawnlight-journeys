import React from 'react';
import Link from 'next/link';
import { safariPackages } from '@/src/constants/safaris';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const blogPosts = {
    'gorilla-trekking-guide': {
      title: 'The Ultimate Guide to Gorilla Trekking in Rwanda',
      description:
        'Discover everything you need to know about gorilla trekking in Rwanda, from permits and packing tips to the best time to visit and what to expect on your adventure.',
      image:
        'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/gorilla-trekking-guide_blog',
    },
    'top-5-uganda-safaris': {
      title: 'Top 5 Safari Experiences in Uganda',
      description:
        'Uganda is a land of breathtaking wildlife and adventure. Explore our top 5 safari experiences, including chimpanzee tracking, boat safaris, and more.',
      image:
        'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/uganda-safari-experiences_blog',
    },
    'cultural-encounters-east-africa': {
      title: 'Cultural Encounters: Meeting the People of East Africa',
      description:
        "Go beyond the wildlife and discover the rich cultures, traditions, and hospitality of East Africa's diverse communities.",
      image:
        'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/cultural-encounters_blog',
    },
  };

  const blogPost = blogPosts[slug as keyof typeof blogPosts];
  if (!blogPost) {
    return {
      title: 'Blog Post Not Found | Dawnlight Journeys',
      description: 'Blog post not found.',
    };
  }

  return {
    title: `${blogPost.title} | Dawnlight Journeys Blog`,
    description: blogPost.description,
    openGraph: {
      title: `${blogPost.title} | Dawnlight Journeys Blog`,
      description: blogPost.description,
      images: [{ url: blogPost.image, width: 1200, height: 630, alt: blogPost.title }],
      type: 'article',
      url: `https://dawnlightjourneysrwanda.com/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blogPost.title} | Dawnlight Journeys Blog`,
      description: blogPost.description,
      images: [blogPost.image],
    },
    robots: { index: true, follow: true },
    alternates: { canonical: `https://dawnlightjourneysrwanda.com/blog/${slug}` },
  };
}

export default function BlogSinglePage() {
  const images = safariPackages.flatMap((safari) => safari.images);
  const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

  return (
    <main className="min-h-screen" style={{ background: '#F5F0E8' }}>

      {/* ── Article Hero ── */}
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

        <div className="container relative z-10 pt-10 pb-16 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8" aria-label="Breadcrumb">
            <Link
              href="/blog"
              className="font-outfit text-xs tracking-[0.12em] uppercase transition-colors duration-200 text-[rgba(212,167,106,0.6)] hover:text-[#D4A76A]"
            >
              Journal
            </Link>
            <span style={{ color: 'rgba(245,240,232,0.2)' }}>›</span>
            <span className="font-outfit text-xs tracking-[0.12em] uppercase" style={{ color: 'rgba(245,240,232,0.35)' }}>
              Gorilla Trekking
            </span>
          </nav>

          {/* Category tag */}
          <span
            className="inline-block font-outfit text-[0.65rem] tracking-[0.16em] uppercase font-semibold px-3 py-1 rounded-full mb-6"
            style={{
              background: 'rgba(212,167,106,0.15)',
              color: '#D4A76A',
              border: '1px solid rgba(212,167,106,0.3)',
            }}
          >
            Gorilla Trekking
          </span>

          <h1
            className="font-playfair font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.2rem)' }}
          >
            The Ultimate Guide to Gorilla Trekking in Rwanda
          </h1>

          {/* Meta row */}
          <div className="flex items-center gap-5" style={{ color: 'rgba(245,240,232,0.45)' }}>
            <span className="font-outfit text-xs">By Dawnlight Journeys</span>
            <span className="w-px h-3" style={{ background: 'rgba(212,167,106,0.3)' }} />
            <time className="font-outfit text-xs">Dec 15, 2024</time>
            <span className="w-px h-3" style={{ background: 'rgba(212,167,106,0.3)' }} />
            <span className="font-outfit text-xs">10 min read</span>
          </div>
        </div>

        {/* Diagonal bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom right, transparent 49%, #F5F0E8 50%)' }}
          aria-hidden="true"
        />
      </header>

      {/* ── Hero image ── */}
      <figure className="container max-w-3xl -mt-4">
        <img
          src={getRandomImage()}
          alt="Gorilla Trekking Rwanda"
          className="w-full rounded-2xl shadow-xl object-cover"
          style={{ aspectRatio: '16/9' }}
        />
      </figure>

      {/* ── Article body ── */}
      <article
        className="container max-w-3xl py-14 space-y-10"
        style={{ color: '#2C2420' }}
      >
        {/* Lead paragraph */}
        <p
          className="font-playfair text-xl leading-relaxed"
          style={{ color: '#2C2420', borderLeft: '3px solid #D4A76A', paddingLeft: '1.5rem' }}
        >
          Rwanda, the land of a thousand hills, offers one of the most
          unforgettable wildlife experiences on earth: gorilla trekking. Nestled
          in the lush Volcanoes National Park, this adventure brings you
          face-to-face with endangered mountain gorillas in their natural habitat.
        </p>

        {/* Body sections */}
        <Section title="What is Gorilla Trekking?">
          <p className="font-outfit text-base leading-relaxed" style={{ color: 'rgba(44,36,32,0.75)' }}>
            Gorilla trekking is a guided hiking experience that takes you into the
            natural habitat of mountain gorillas. These gentle giants, which share
            98% of their DNA with humans, are found only in the dense forests of
            Rwanda, Uganda, and the Democratic Republic of Congo.
          </p>
        </Section>

        <Section title="Why Choose Rwanda for Gorilla Trekking?">
          <p className="font-outfit text-base leading-relaxed" style={{ color: 'rgba(44,36,32,0.75)' }}>
            Rwanda has emerged as the premier destination for gorilla trekking,
            offering unparalleled access to these magnificent creatures while
            maintaining strict conservation standards.
          </p>
        </Section>

        {/* Comparison block */}
        <div
          className="rounded-2xl p-8"
          style={{ background: 'rgba(212,167,106,0.06)', border: '1px solid rgba(212,167,106,0.18)' }}
        >
          <h3 className="font-playfair font-bold text-xl mb-6" style={{ color: '#2C2420' }}>
            Traditional vs. Dawnlight Journeys Approach
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl p-5" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}>
              <h4 className="font-outfit font-semibold text-sm mb-4 tracking-wide" style={{ color: 'rgba(44,36,32,0.7)' }}>
                Traditional Safari
              </h4>
              <ul className="space-y-2.5">
                {['Generic tour packages', 'Limited customization', 'One-size-fits-all approach'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-outfit text-sm" style={{ color: 'rgba(44,36,32,0.65)' }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#ef4444' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-5" style={{ background: 'rgba(27,58,45,0.06)', border: '1px solid rgba(27,58,45,0.18)' }}>
              <h4 className="font-outfit font-semibold text-sm mb-4 tracking-wide" style={{ color: 'rgba(44,36,32,0.7)' }}>
                Dawnlight Journeys
              </h4>
              <ul className="space-y-2.5">
                {['Personalized experiences', 'Expert local guides', 'Tailored to your needs'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-outfit text-sm" style={{ color: 'rgba(44,36,32,0.65)' }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#1B3A2D' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Section title="How to Get a Gorilla Trekking Permit">
          <p className="font-outfit text-base leading-relaxed" style={{ color: 'rgba(44,36,32,0.75)' }}>
            Permits are required and should be booked well in advance, as only a
            limited number are issued each day. The Rwanda Development Board
            manages the process, and permits cost around $1,500 per person. This
            fee supports conservation and local communities.
          </p>
        </Section>

        {/* Inline image */}
        <figure>
          <img
            src={getRandomImage()}
            alt="Mountain Gorillas in Rwanda"
            className="w-full rounded-xl object-cover shadow-lg"
            style={{ aspectRatio: '16/9' }}
          />
          <figcaption className="font-outfit text-xs mt-3 text-center" style={{ color: 'rgba(44,36,32,0.4)' }}>
            Mountain gorilla family in Volcanoes National Park, Rwanda
          </figcaption>
        </figure>

        <Section title="What to Expect on the Trek">
          <p className="font-outfit text-base leading-relaxed" style={{ color: 'rgba(44,36,32,0.75)' }}>
            Treks can last from 1 to 6 hours, depending on the gorillas' location.
            Expect to hike through dense forest and steep terrain. Once you find a
            gorilla family, you'll have one magical hour to observe and photograph
            them up close.
          </p>
        </Section>

        <Section title="Packing Tips">
          <ul className="space-y-3">
            {[
              'Sturdy hiking boots with good ankle support',
              'Long-sleeved shirts and trousers to protect from stinging nettles',
              'Waterproof rain jacket — weather can change quickly',
              'Gloves for handling vegetation',
              'Camera with extra batteries (no flash allowed)',
              'Small backpack with water and snacks',
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3 font-outfit text-sm" style={{ color: 'rgba(44,36,32,0.72)' }}>
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: '#D4A76A' }}
                />
                {tip}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Best Time to Visit">
          <p className="font-outfit text-base leading-relaxed" style={{ color: 'rgba(44,36,32,0.75)' }}>
            The dry seasons (June–September and December–February) are ideal for
            trekking, offering the best trail conditions and visibility. However,
            gorilla trekking is available year-round, and each season offers unique
            experiences.
          </p>
        </Section>

        {/* Summary callout */}
        <aside
          className="rounded-2xl p-8"
          style={{ background: 'rgba(27,58,45,0.07)', border: '1px solid rgba(27,58,45,0.18)' }}
        >
          <h3 className="font-playfair font-bold text-lg mb-3" style={{ color: '#1B3A2D' }}>
            Summary
          </h3>
          <p className="font-outfit text-sm leading-relaxed" style={{ color: 'rgba(44,36,32,0.72)' }}>
            Gorilla trekking in Rwanda offers an unparalleled wildlife experience
            that combines adventure with conservation. With proper planning, the
            right gear, and expert guidance, you can enjoy one of the most
            memorable wildlife encounters on the planet.
          </p>
        </aside>
      </article>

      {/* ── CTA banner ── */}
      <section
        className="py-14 md:py-20"
        style={{ background: '#1A1714' }}
      >
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
            Plan Your Gorilla Trekking Adventure
          </h2>
          <p className="font-outfit text-sm mb-8" style={{ color: 'rgba(245,240,232,0.5)' }}>
            Contact our expert team to start planning your unforgettable journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-ember">
              Start Planning
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="font-outfit text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 border border-[rgba(212,167,106,0.3)] text-[rgba(245,240,232,0.7)] hover:border-[#D4A76A] hover:text-[#D4A76A]"
            >
              ← Back to Journal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── Reusable section block ── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2
        className="font-playfair font-bold mb-4"
        style={{ fontSize: 'clamp(1.25rem, 2vw, 1.6rem)', color: '#2C2420' }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
