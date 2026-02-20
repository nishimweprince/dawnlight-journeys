'use client';

import { useState } from 'react';
import { ChevronDown, Mail, Search, X } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    id: 1,
    category: 'Planning',
    question: 'What is the best time to visit Rwanda and Uganda?',
    answer:
      'The best time to visit Rwanda and Uganda is during the dry seasons from June to September and December to February. These periods offer the best conditions for gorilla trekking and wildlife viewing.',
  },
  {
    id: 2,
    category: 'Visa & Travel',
    question: 'Do I need a visa to visit Rwanda and Uganda?',
    answer:
      "Yes, most visitors need a visa to enter Rwanda and Uganda. You can apply for an e-visa online before your trip or get a visa on arrival at the airport. For both countries, you'll need a valid passport with at least 6 months validity.",
  },
  {
    id: 3,
    category: 'Activities',
    question: 'How physically demanding is gorilla trekking?',
    answer:
      'Gorilla trekking can be moderately to highly physically demanding, depending on where the gorillas are located on the day of your trek. Treks can last from 30 minutes to 6+ hours through dense forest and steep terrain. A reasonable level of fitness is recommended.',
  },
  {
    id: 4,
    category: 'Health & Safety',
    question: 'What vaccinations do I need for Rwanda and Uganda?',
    answer:
      'Yellow fever vaccination is mandatory for entry into both Rwanda and Uganda. Other recommended vaccinations include hepatitis A and B, typhoid, tetanus, and polio. Malaria prophylaxis is also strongly advised.',
  },
  {
    id: 5,
    category: 'Planning',
    question: 'Can I customize my safari itinerary?',
    answer:
      'We specialize in creating custom itineraries tailored to your interests, timeframe, and budget. Contact us to start planning your personalized African adventure.',
  },
  {
    id: 6,
    category: 'Pricing',
    question: 'What is included in the safari packages?',
    answer:
      'Our safari packages typically include accommodation, meals as specified, transportation, park entrance fees, guided activities, and the services of an experienced guide. International flights, visas, travel insurance, and personal expenses are usually not included.',
  },
  {
    id: 7,
    category: 'Wildlife',
    question: 'What wildlife can I expect to see on safari?',
    answer:
      'In Rwanda and Uganda, you can encounter mountain gorillas, chimpanzees, golden monkeys, the Big Five (lions, elephants, buffalos, leopards, and rhinos), giraffes, zebras, hippos, crocodiles, and over 1,000 bird species. The specific wildlife depends on your chosen destination and season.',
  },
  {
    id: 8,
    category: 'Accommodation',
    question: 'What types of accommodation are available?',
    answer:
      'We offer a range of accommodations from budget-friendly lodges and guesthouses to mid-range hotels and luxury safari camps. All our selected accommodations are comfortable, safe, and strategically located near major attractions.',
  },
  {
    id: 9,
    category: 'Activities',
    question: 'How much does a gorilla trekking permit cost?',
    answer:
      'Gorilla trekking permits cost $1,500 per person in Rwanda and $700 per person in Uganda. Permits must be booked well in advance as they are limited and in high demand. We handle all permit bookings for our clients.',
  },
  {
    id: 10,
    category: 'Health & Safety',
    question: 'Is it safe to travel to Rwanda and Uganda?',
    answer:
      'Yes, both Rwanda and Uganda are considered safe destinations for tourists. Rwanda is one of the safest countries in Africa, and Uganda has a good safety record in tourist areas. We provide 24/7 support and work with experienced guides to ensure your safety throughout your journey.',
  },
  {
    id: 11,
    category: 'Planning',
    question: 'How far in advance should I book my safari?',
    answer:
      'We recommend booking at least 3-6 months in advance, especially if you plan to do gorilla trekking, as permits sell out quickly. For peak season travel (June-September and December-February), booking 6-12 months ahead is advisable.',
  },
  {
    id: 12,
    category: 'Pricing',
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers, credit cards (Visa, Mastercard), and mobile money payments. A deposit is typically required to secure your booking, with the balance due before your safari begins. We provide instant payment confirmation for all transactions.',
  },
];

const categories = [
  'All',
  'Planning',
  'Visa & Travel',
  'Activities',
  'Health & Safety',
  'Wildlife',
  'Accommodation',
  'Pricing',
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const clearSearch = () => setSearchQuery('');

  const filteredFaqs = faqs
    .filter(
      (faq) =>
        selectedCategory === 'All' || faq.category === selectedCategory
    )
    .filter((faq) => {
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
      );
    });

  return (
    <div className="min-h-screen" style={{ background: '#F5F0E8' }}>

      {/* ── Hero ── */}
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

        <div className="container relative z-10 pt-12 pb-20 max-w-3xl">
          <p
            className="font-outfit text-xs tracking-[0.18em] uppercase mb-4"
            style={{ color: '#D4A76A' }}
          >
            Support
          </p>
          <h1
            className="font-playfair font-bold text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="font-outfit text-base leading-relaxed mb-8"
            style={{ color: 'rgba(245,240,232,0.6)' }}
          >
            Find answers to common questions about travelling to Rwanda and
            Uganda with Dawnlight Journeys.
          </p>

          {/* Search input */}
          <div className="relative max-w-xl">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none"
              style={{ color: 'rgba(44,36,32,0.4)' }}
            />
            <input
              type="text"
              placeholder="Search questions…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-11 py-3.5 rounded-full font-outfit text-sm focus:outline-none transition-all duration-200"
              style={{
                background: '#fff',
                border: '2px solid transparent',
                color: '#2C2420',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#D4A76A';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
              }}
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors duration-150"
                style={{ color: 'rgba(44,36,32,0.4)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#1B3A2D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(44,36,32,0.4)';
                }}
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p
              className="mt-3 font-outfit text-xs"
              style={{ color: 'rgba(245,240,232,0.5)' }}
            >
              {filteredFaqs.length}{' '}
              {filteredFaqs.length === 1 ? 'result' : 'results'} for &ldquo;
              {searchQuery}&rdquo;
            </p>
          )}
        </div>

        {/* Diagonal bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom right, transparent 49%, #F5F0E8 50%)',
          }}
          aria-hidden="true"
        />
      </header>

      {/* ── Category Filter ── */}
      <section
        className="sticky top-16 z-40 py-4"
        style={{
          background: '#F5F0E8',
          borderBottom: '1px solid rgba(27,58,45,0.08)',
        }}
      >
        <div className="container flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="font-outfit text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200"
              style={
                selectedCategory === category
                  ? {
                      background: '#1B3A2D',
                      color: '#D4A76A',
                      border: '1px solid rgba(212,167,106,0.3)',
                    }
                  : {
                      background: 'rgba(27,58,45,0.06)',
                      color: 'rgba(44,36,32,0.6)',
                      border: '1px solid rgba(27,58,45,0.1)',
                    }
              }
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* ── FAQ List ── */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => (
              <article
                key={faq.id}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(27,58,45,0.07)',
                  boxShadow: '0 2px 8px rgba(27,58,45,0.04)',
                }}
              >
                <button
                  className="flex w-full justify-between items-start text-left p-5 gap-4 transition-colors duration-150"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex-1">
                    <span
                      className="inline-block font-outfit text-[10px] tracking-[0.1em] uppercase font-semibold px-2.5 py-0.5 rounded-full mb-2"
                      style={{
                        background: 'rgba(212,167,106,0.12)',
                        color: '#8B5E3C',
                        border: '1px solid rgba(212,167,106,0.2)',
                      }}
                    >
                      {faq.category}
                    </span>
                    <h3
                      className="font-playfair font-bold text-base leading-snug"
                      style={{ color: '#2C2420' }}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className="h-4 w-4 flex-shrink-0 mt-1 transition-transform duration-300"
                    style={{
                      color: '#D4A76A',
                      transform:
                        openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openIndex === index ? '500px' : '0',
                    opacity: openIndex === index ? 1 : 0,
                  }}
                >
                  <p
                    className="px-5 pb-5 font-outfit text-sm leading-relaxed"
                    style={{ color: 'rgba(44,36,32,0.7)' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* No results */}
          {filteredFaqs.length === 0 && (
            <div
              className="text-center py-14 rounded-2xl"
              style={{
                background: 'rgba(27,58,45,0.04)',
                border: '1px solid rgba(27,58,45,0.08)',
              }}
            >
              <Search
                className="w-8 h-8 mx-auto mb-4"
                style={{ color: 'rgba(44,36,32,0.25)' }}
              />
              <h3
                className="font-playfair font-bold text-lg mb-2"
                style={{ color: '#2C2420' }}
              >
                No Results Found
              </h3>
              <p
                className="font-outfit text-sm mb-6"
                style={{ color: 'rgba(44,36,32,0.55)' }}
              >
                {searchQuery
                  ? `No FAQs match "${searchQuery}". Try different keywords or browse all categories.`
                  : 'No FAQs found in this category.'}
              </p>
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="inline-flex items-center gap-2 font-outfit text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200"
                  style={{
                    background: 'rgba(27,58,45,0.08)',
                    border: '1px solid rgba(27,58,45,0.15)',
                    color: '#1B3A2D',
                  }}
                >
                  <X className="w-3.5 h-3.5" />
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-14 md:py-20" style={{ background: '#1A1714' }}>
        <div className="container max-w-2xl text-center">
          <p
            className="font-outfit text-xs tracking-[0.18em] uppercase mb-4"
            style={{ color: '#D4A76A' }}
          >
            Still Have Questions?
          </p>
          <h2
            className="font-playfair font-bold text-white mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            Our Team Is Here to Help
          </h2>
          <p
            className="font-outfit text-sm mb-8"
            style={{ color: 'rgba(245,240,232,0.5)' }}
          >
            {"Can't find the answer you're looking for? Reach out and we'll help you plan your perfect safari."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-ember">
              Contact Us
              <Mail className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/250785917385"
              target="_blank"
              rel="noopener noreferrer"
              className="font-outfit text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 border border-[rgba(212,167,106,0.3)] text-[rgba(245,240,232,0.7)] hover:border-[#D4A76A] hover:text-[#D4A76A]"
            >
              WhatsApp: +250 785 917 385
            </a>
          </div>
        </div>
      </section>

      {/* ── Helpful Resources ── */}
      <section className="py-12 container">
        <h3
          className="font-playfair font-bold text-center mb-8"
          style={{
            fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
            color: '#2C2420',
          }}
        >
          Helpful Resources
        </h3>
        <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {[
            {
              href: '/safaris',
              title: 'Browse Safaris',
              body: 'Explore our curated safari packages',
            },
            {
              href: '/destinations',
              title: 'Destinations',
              body: 'Discover Rwanda & Uganda',
            },
            {
              href: '/blog',
              title: 'Travel Journal',
              body: 'Tips, guides, and travel stories',
            },
          ].map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="rounded-2xl p-5 text-center transition-all duration-200 group block"
              style={{
                background: '#fff',
                border: '1px solid rgba(27,58,45,0.08)',
                boxShadow: '0 2px 8px rgba(27,58,45,0.04)',
              }}
            >
              <h4
                className="font-playfair font-bold text-base mb-1.5 transition-colors duration-150 group-hover:text-[#D4A76A]"
                style={{ color: '#1B3A2D' }}
              >
                {r.title}
              </h4>
              <p
                className="font-outfit text-xs"
                style={{ color: 'rgba(44,36,32,0.55)' }}
              >
                {r.body}
              </p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
