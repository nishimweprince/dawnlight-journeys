'use client';

import { notFound } from 'next/navigation';
import { CustomButton } from '../../../src/components/ui/custom-button';
import {
  ChevronDown,
  MapPin,
  Clock,
  Star,
  Send,
  Users,
  TrendingUp,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

// Mock safari data (replace with real data fetching in the future)
const safariPackages = [
  {
    slug: 'gorilla-trekking',
    title: 'Gorilla Trekking Adventure',
    location: 'Bwindi Impenetrable Forest, Uganda',
    duration: '5 days',
    images: [
      '/assets/common/placeholder.svg',
      '/assets/common/placeholder.svg',
      '/assets/common/placeholder.svg',
      '/assets/common/placeholder.svg',
    ],
    description:
      'Get up close with endangered mountain gorillas in their natural habitat. This adventure takes you deep into the forests of Uganda, guided by expert trackers, for a once-in-a-lifetime wildlife encounter.',
    highlights: [
      'Guided gorilla trekking experience',
      'Visit local communities and cultural sites',
      'Scenic drives through the Ugandan countryside',
      'All permits and park fees included',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Entebbe',
        details:
          'Arrive at Entebbe International Airport, transfer to your hotel, and meet your guide for a briefing.',
      },
      {
        day: 2,
        title: 'Transfer to Bwindi',
        details:
          'Drive through beautiful landscapes to Bwindi Impenetrable Forest. Evening at leisure.',
      },
      {
        day: 3,
        title: 'Gorilla Trekking',
        details:
          'Early morning trek to find gorilla families. Spend an hour observing them in their natural habitat.',
      },
      {
        day: 4,
        title: 'Community Visit & Relaxation',
        details:
          'Visit a local village or relax at your lodge. Optional nature walks available.',
      },
      {
        day: 5,
        title: 'Return to Entebbe & Departure',
        details: 'Drive back to Entebbe for your onward flight.',
      },
    ],
    faqs: [
      {
        question: 'How difficult is the gorilla trekking?',
        answer:
          'It can be moderately to highly physically demanding, depending on the gorilla location. Treks can last from 30 minutes to 6+ hours.',
      },
      {
        question: 'What should I bring for the trek?',
        answer:
          'Sturdy hiking boots, rain jacket, long pants, gloves, and a camera are recommended.',
      },
      {
        question: 'Are gorilla permits included?',
        answer:
          'Yes, all necessary permits and park fees are included in the package.',
      },
    ],
    bestTime: 'June - September',
    groupSize: '2-8 people',
    difficulty: 'Moderate',
  },
];

function getSafariBySlug(slug: string) {
  return safariPackages?.[0];
}

export default function SafariDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const safari = getSafariBySlug(params.slug);
  if (!safari) return notFound();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === safari.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? safari.images.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col gap-8 bg-gradient-to-b from-orange-50 to-white pb-16">
      {/* Hero Section - Enhanced height to minimum 50vh */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-end overflow-hidden mb-0">
        {/* Image Slider */}
        <figure className="absolute inset-0 w-full h-[50vh]">
          {safari.images.map((image, index) => (
            <img
              key={index}
              src={image || '/assets/placeholders/safari-placeholder.jpg'}
              alt={`${safari.title} - Image ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </figure>

        {/* Image navigation controls */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-20 transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-20 transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Image indicator dots */}
        <nav className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {safari.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </nav>

        <mark className="absolute h-[50vh] inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <header className="relative h-[50vh] z-10 p-8 md:p-16 text-white max-w-5xl mx-auto w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            {safari.title}
          </h1>
          <ul className="flex flex-wrap items-center gap-6 mb-2">
            <li className="flex items-center gap-2 text-xl font-medium">
              <MapPin className="h-6 w-6" /> {safari.location}
            </li>
            <li className="flex items-center gap-2 text-xl font-medium">
              <Clock className="h-6 w-6" /> {safari.duration}
            </li>
          </ul>
        </header>
      </section>

      {/* Overview Section - Using semantic article */}
      <section className="container max-w-6xl mx-auto px-4 md:px-8 mt-0 mb-10">
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-14">
          <header>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Overview
            </h2>
          </header>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {safari.description}
          </p>
        </article>
      </section>

      {/* Snapshot Info Cards - Using semantic elements */}
      <section className="container max-w-6xl mx-auto px-4 md:px-8 mb-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Clock className="h-8 w-8 text-teal-600 mb-2" />,
              label: 'Duration',
              value: safari.duration,
              colorClass: 'bg-teal-50 hover:bg-teal-100',
            },
            {
              icon: <MapPin className="h-8 w-8 text-amber-600 mb-2" />,
              label: 'Location',
              value: safari.location,
              colorClass: 'bg-amber-50 hover:bg-amber-100',
            },
            {
              icon: <Calendar className="h-8 w-8 text-indigo-600 mb-2" />,
              label: 'Best Time',
              value: safari.bestTime,
              colorClass: 'bg-indigo-50 hover:bg-indigo-100',
            },
            {
              icon: <Users className="h-8 w-8 text-rose-600 mb-2" />,
              label: 'Group Size',
              value: safari.groupSize,
              colorClass: 'bg-rose-50 hover:bg-rose-100',
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-emerald-600 mb-2" />,
              label: 'Difficulty',
              value: safari.difficulty,
              colorClass: 'bg-emerald-50 hover:bg-emerald-100',
            },
          ].map((item, idx) => (
            <li key={idx}>
              <article
                className={`rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center p-8 text-center h-full ${item.colorClass}`}
              >
                {item.icon}
                <h3 className="font-bold text-sm text-gray-600 uppercase tracking-wider">
                  {item.label}
                </h3>
                <span className="text-lg font-medium mt-1">{item.value}</span>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* Highlights Section - Using semantic elements */}
      <section className="container max-w-6xl mx-auto px-4 md:px-8 mb-12">
        <header>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            Highlights
          </h2>
        </header>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {safari.highlights.map((highlight, idx) => {
            const colors = [
              'bg-amber-50 text-amber-700',
              'bg-teal-50 text-teal-700',
              'bg-indigo-50 text-indigo-700',
              'bg-rose-50 text-rose-700',
            ];
            const iconColors = [
              'text-amber-500',
              'text-teal-500',
              'text-indigo-500',
              'text-rose-500',
            ];
            return (
              <li key={idx}>
                <article
                  className={`${
                    colors[idx % colors.length]
                  } rounded-2xl shadow-lg p-8 flex flex-col items-center text-center h-full`}
                >
                  <Star
                    className={`h-8 w-8 ${
                      iconColors[idx % iconColors.length]
                    } mb-3`}
                  />
                  <h3 className="font-medium text-lg md:text-xl">
                    {highlight}
                  </h3>
                </article>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Improved Itinerary Section - Enhanced timeline with semantic elements */}
      <section className="container max-w-6xl mx-auto px-4 md:px-8 mb-12">
        <header>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            Itinerary
          </h2>
        </header>
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <ol className="relative border-l-4 border-primary/30 ml-4">
            {safari.itinerary.map((day, idx) => {
              // Alternate colors for timeline markers
              const markerColors = [
                'bg-primary',
                'bg-teal-600',
                'bg-amber-600',
                'bg-indigo-600',
                'bg-rose-600',
              ];

              return (
                <li
                  key={day.day}
                  className={`mb-12 flex flex-col ml-6 relative ${
                    idx === safari.itinerary.length - 1 ? 'pb-0' : 'pb-8'
                  }`}
                >
                  <header className="flex items-center gap-4">
                    <figure className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-md font-bold">
                      {day.day}
                    </figure>
                    <h3
                      className={`text-lg font-bold ${
                        idx % 2 === 0
                          ? 'text-primary'
                          : markerColors[idx % markerColors.length].replace(
                              'bg-',
                              'text-'
                            )
                      }`}
                    >
                      {day.title}
                    </h3>
                  </header>
                  <section className="mt-2">
                    <p className="text-gray-700 text-base leading-relaxed">
                      {day.details}
                    </p>
                  </section>
                </li>
              );
            })}
          </ol>
        </article>
      </section>

      {/* Redesigned FAQ Section - More visually appealing with accordions */}
      <section className="container max-w-6xl mx-auto px-4 md:px-8 mb-12">
        <header>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            Frequently Asked Questions
          </h2>
        </header>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {safari.faqs.map((faq, idx) => {
            const accentColors = [
              'from-amber-50 to-amber-100 border-l-amber-500',
              'from-teal-50 to-teal-100 border-l-teal-500',
              'from-indigo-50 to-indigo-100 border-l-indigo-500',
            ];
            const iconColors = [
              'text-amber-600 group-open:text-amber-700',
              'text-teal-600 group-open:text-teal-700',
              'text-indigo-600 group-open:text-indigo-700',
            ];

            return (
              <details
                key={idx}
                className={`group border-b last:border-b-0 border-l-4 ${
                  accentColors[idx % accentColors.length]
                }`}
              >
                <summary
                  className={`flex items-center justify-between cursor-pointer p-6 bg-gradient-to-r ${
                    accentColors[idx % accentColors.length].split(' ')[0]
                  } ${
                    accentColors[idx % accentColors.length].split(' ')[1]
                  } transition-all duration-300`}
                >
                  <h3 className="font-semibold text-lg text-gray-800 group-open:text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 ${
                      iconColors[idx % iconColors.length]
                    } transition-transform duration-300 group-open:rotate-180`}
                  />
                </summary>
                <div className="p-6 bg-white">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            );
          })}
        </div>
      </section>

      {/* Sidebar - Booking, Gallery, Features, Help - Using semantic elements */}
      <aside className="fixed right-8 top-32 w-80 hidden xl:block z-30">
        <section className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8">
          <article className="flex flex-col items-center">
            <CustomButton
              variant="primary"
              size="lg"
              href="https://wa.me/250785917385"
              className="w-full py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Send className="h-5 w-5 mr-2" /> Book or Inquire Now
            </CustomButton>
          </article>
          <article>
            <h4 className="text-xl font-bold mb-4 text-primary">
              Gallery Preview
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {safari.images.slice(0, 4).map((image, idx) => (
                <li key={idx}>
                  <figure>
                    <img
                      src={image}
                      alt={`Gallery preview ${idx + 1}`}
                      className="rounded-lg h-24 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
                      onClick={() => setCurrentImageIndex(idx)}
                    />
                  </figure>
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h4 className="text-xl font-bold mb-4 text-primary">
              Package Features
            </h4>
            <ul className="space-y-3">
              {safari.highlights.map((item, idx) => {
                const starColors = [
                  'text-amber-500',
                  'text-teal-500',
                  'text-indigo-500',
                  'text-rose-500',
                ];
                return (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <Star
                      className={`h-5 w-5 ${
                        starColors[idx % starColors.length]
                      } flex-shrink-0`}
                    />
                    <span className="text-base">{item}</span>
                  </li>
                );
              })}
            </ul>
          </article>
          <article className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl">
            <h4 className="text-xl font-bold mb-2 text-primary">Need Help?</h4>
            <p className="text-gray-700 mb-4">
              Our safari experts are ready to assist you with any questions
              about this experience.
            </p>
            <CustomButton
              variant="outline"
              size="default"
              href="tel:+250785917385"
              className="w-full"
            >
              Contact Us
            </CustomButton>
          </article>
        </section>
      </aside>
    </main>
  );
}
