'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Mail, Phone, Search, X } from 'lucide-react';
import { CustomButton } from '../../src/components/ui/custom-button';
import type { Metadata } from 'next';

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

const categories = ['All', 'Planning', 'Visa & Travel', 'Activities', 'Health & Safety', 'Wildlife', 'Accommodation', 'Pricing'];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  // Filter by category first, then by search query
  const filteredFaqs = faqs
    .filter(faq => selectedCategory === 'All' || faq.category === selectedCategory)
    .filter(faq => {
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
      );
    });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
              <HelpCircle className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Find answers to common questions about traveling to Rwanda and Uganda with Dawnlight Journeys
            </p>

            {/* Search Box */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search FAQs by question or answer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="mt-3 text-sm text-white/80">
                  {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'} found for "{searchQuery}"
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <article
                  key={faq.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
                >
                  <button
                    className="flex w-full justify-between items-center text-left p-6 hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex-1 pr-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-bold text-foreground">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* No Results */}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">No Results Found</h3>
                <p className="text-muted-foreground mb-6">
                  {searchQuery
                    ? `No FAQs found matching "${searchQuery}". Try different keywords or browse all categories.`
                    : 'No FAQs found in this category.'}
                </p>
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Clear Search
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find the answer you're looking for? Our team is here to help you plan your perfect safari adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton
                variant="primary"
                size="lg"
                href="/contact"
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </CustomButton>
              <CustomButton
                variant="secondary"
                size="lg"
                href="https://wa.me/250785917385"
                className="flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call: +250 785 917 385
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center">Helpful Resources</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="/safaris"
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <h4 className="font-bold text-primary mb-2">Browse Safaris</h4>
                <p className="text-sm text-muted-foreground">
                  Explore our safari packages
                </p>
              </a>
              <a
                href="/destinations"
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <h4 className="font-bold text-primary mb-2">Destinations</h4>
                <p className="text-sm text-muted-foreground">
                  Discover Rwanda & Uganda
                </p>
              </a>
              <a
                href="/blog"
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <h4 className="font-bold text-primary mb-2">Travel Blog</h4>
                <p className="text-sm text-muted-foreground">
                  Tips and travel guides
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
