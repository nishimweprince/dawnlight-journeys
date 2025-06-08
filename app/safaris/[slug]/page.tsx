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

import { safariPackages } from '../../../src/constants/safaris';

function getSafariBySlug(slug: string) {
  return safariPackages.find(safari => safari.slug === slug);
}

export default function SafariDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  const safari = getSafariBySlug(slug);
  if (!safari) return notFound();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === (safari?.images?.length || 0) - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? (safari?.images?.length || 0) - 1 : prevIndex - 1
    );
  };

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // FAQs
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen flex flex-col gap-8 pb-12 bg-primary-50">
      {/* Hero Section */}
      <header className="relative w-full flex items-end overflow-hidden h-[60vh] rounded-b-3xl shadow-lg">
        <figure className="absolute inset-0 w-full h-full">
          {safari?.images?.map((image, index) => (
            <img
              key={index}
              src={image || '/assets/placeholders/safari-placeholder.jpg'}
              alt={`${safari.title} - Image ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <figure className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/40 to-transparent" />
        </figure>

        {/* Image navigation controls */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-900/50 hover:bg-primary-900/70 text-white p-3 rounded-full z-20 transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-900/50 hover:bg-primary-900/70 text-white p-3 rounded-full z-20 transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Image indicator dots */}
        <nav className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {safari?.images?.map((_, index) => (
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

        <section className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center p-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            {safari.title}
          </h1>
          <ul className="flex flex-wrap items-center justify-center gap-8 text-lg font-medium">
            <li className="flex items-center gap-2 text-lg font-medium">
              <MapPin className="h-5 w-5" /> {safari.location}
            </li>
            <li className="flex items-center gap-2 text-lg font-medium">
              <Clock className="h-5 w-5" /> {safari.duration}
            </li>
          </ul>
        </section>
      </header>

      {/* Overview Section */}
      <section className="container mx-auto px-4 md:px-8">
        <article className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-900">
            Overview
          </h2>
          <p className="text-base md:text-lg text-primary-800 leading-relaxed">
            {safari.description}
          </p>
        </article>
      </section>

      {/* Snapshot Info Cards */}
      <section className="container mx-auto px-4 md:px-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
          <li>
            <article className="rounded-2xl shadow-lg bg-white p-8 flex flex-col items-center text-center h-full transition-transform hover:scale-105 hover:shadow-2xl">
              <figure className="bg-primary-100 p-3 rounded-full mb-2">
                <Clock className="h-8 w-8 text-primary-700" />
              </figure>
              <h3 className="font-bold text-sm text-primary-600 uppercase tracking-wider">
                Duration
              </h3>
              <span className="text-lg font-medium mt-1 text-primary-900">
                {safari.duration}
              </span>
            </article>
          </li>
          <li>
            <article className="rounded-2xl shadow-lg bg-white p-8 flex flex-col items-center text-center h-full transition-transform hover:scale-105 hover:shadow-2xl">
              <figure className="bg-primary-100 p-3 rounded-full mb-2">
                <MapPin className="h-8 w-8 text-primary-700" />
              </figure>
              <h3 className="font-bold text-sm text-primary-600 uppercase tracking-wider">
                Location
              </h3>
              <span className="text-lg font-medium mt-1 text-primary-900">
                {safari.location}
              </span>
            </article>
          </li>
          <li>
            <article className="rounded-2xl shadow-lg bg-white p-8 flex flex-col items-center text-center h-full transition-transform hover:scale-105 hover:shadow-2xl">
              <figure className="bg-primary-100 p-3 rounded-full mb-2">
                <Calendar className="h-8 w-8 text-primary-700" />
              </figure>
              <h3 className="font-bold text-sm text-primary-600 uppercase tracking-wider">
                Best Time
              </h3>
              <span className="text-lg font-medium mt-1 text-primary-900">
                {safari.bestTime}
              </span>
            </article>
          </li>
          <li>
            <article className="rounded-2xl shadow-lg bg-white p-8 flex flex-col items-center text-center h-full transition-transform hover:scale-105 hover:shadow-2xl">
              <figure className="bg-primary-100 p-3 rounded-full mb-2">
                <Users className="h-8 w-8 text-primary-700" />
              </figure>
              <h3 className="font-bold text-sm text-primary-600 uppercase tracking-wider">
                Group Size
              </h3>
              <span className="text-lg font-medium mt-1 text-primary-900">
                {safari.groupSize}
              </span>
            </article>
          </li>
          <li>
            <article className="rounded-2xl shadow-lg bg-white p-8 flex flex-col items-center text-center h-full transition-transform hover:scale-105 hover:shadow-2xl">
              <figure className="bg-primary-100 p-3 rounded-full mb-2">
                <TrendingUp className="h-8 w-8 text-primary-700" />
              </figure>
              <h3 className="font-bold text-sm text-primary-600 uppercase tracking-wider">
                Difficulty
              </h3>
              <span className="text-lg font-medium mt-1 text-primary-900">
                {safari.difficulty}
              </span>
            </article>
          </li>
        </ul>
      </section>

      {/* Highlights Section */}
      <section className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-900">
          Highlights
        </h2>
        <ul className="flex overflow-x-auto gap-6 py-2 md:grid md:grid-cols-4 md:gap-6">
          {safari?.highlights?.map((highlight, idx) => (
            <li key={idx} className="min-w-[220px]">
              <article className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center h-full transition hover:shadow-xl">
                <figure className="bg-gradient-to-br from-primary-100 to-primary-200 p-3 rounded-full mb-3">
                  <Star className="h-7 w-7 text-primary-700" />
                </figure>
                <h3 className="font-medium text-lg text-primary-800">
                  {highlight}
                </h3>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* Itinerary Section */}
      <section className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8">
          Itinerary
        </h2>
        <article className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <ol className="relative border-l-2 border-primary-200 ml-4 md:ml-6">
            {safari?.itinerary?.map((day, idx) => (
              <li
                key={day.day}
                className="mb-12 last:mb-0 ml-6 md:ml-8 relative"
              >
                <figure className="absolute -left-10 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center border-2 border-primary-200">
                  <span className="text-sm font-semibold text-primary-700">
                    {idx + 1}
                  </span>
                </figure>
                <section className="pt-2">
                  <header className="mb-3">
                    <h3 className="text-xl font-bold text-primary-800">
                      {day.title}
                    </h3>
                  </header>
                  <p className="text-primary-700 text-base leading-relaxed">
                    {day.details}
                  </p>
                </section>
              </li>
            ))}
          </ol>
        </article>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-900 flex items-center gap-2">
          <span>Frequently Asked Questions</span>
          <span className="text-sm font-normal text-primary-600">
            ({safari.faqs.length})
          </span>
        </h2>
        <ul className="space-y-4">
          {safari?.faqs?.map((faq, idx) => (
            <li
              key={idx}
              className={`rounded-xl bg-white shadow border transition-all ${
                activeFaq === idx
                  ? 'border-primary-300 ring-2 ring-primary-200'
                  : 'border-primary-100'
              }`}
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left font-medium text-primary-800 hover:text-primary-900 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center text-sm font-semibold">
                    {idx + 1}
                  </span>
                  <span>{faq.question}</span>
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 text-primary-600 ${
                    activeFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <section
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeFaq === idx
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <article className="p-5 pt-0 text-primary-700 border-t border-primary-100">
                  <p className="leading-relaxed">{faq.answer}</p>
                </article>
              </section>
            </li>
          ))}
        </ul>
      </section>

      {/* Collapsible Sidebar - Booking, Gallery, Features, Help */}
      <aside className="fixed right-8 top-20 w-80 hidden xl:block z-30">
        <nav className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Collapsed State */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              setIsSidebarExpanded(!isSidebarExpanded);
            }}
            className="w-full p-4 flex items-center justify-between bg-primary-600 text-primary hover:bg-primary-700 transition-colors"
          >
            <span className="font-medium">Safari Details</span>
            <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isSidebarExpanded ? 'rotate-180' : ''}`} />
          </button>

          {/* Expanded Content */}
          <nav className={`transition-all duration-300 ease-in-out ${isSidebarExpanded ? 'max-h-[70vh] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'}`}>
            <menu className="p-6 flex flex-col gap-6">
              <article className="flex flex-col items-center">
                <CustomButton
                  variant="primary"
                  size="lg"
                  href="https://wa.me/250785917385"
                >
                  <Send className="h-5 w-5 mr-2" /> Book or Inquire Now
                </CustomButton>
              </article>

              <article>
                <h4 className="text-lg font-bold mb-3 text-primary-900">
                  Gallery Preview
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {safari?.images?.slice(0, 4).map((image, idx) => (
                    <li key={idx}>
                      <img
                        src={image}
                        alt={`Gallery preview ${idx + 1}`}
                        className="rounded-md h-20 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
                        onClick={() => setCurrentImageIndex(idx)}
                      />
                    </li>
                  ))}
                </ul>
              </article>

              <article>
                <h4 className="text-lg font-bold mb-3 text-primary-900">
                  Package Features
                </h4>
                <ul className="space-y-2">
                  {safari?.highlights?.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-primary-800"
                    >
                      <Star className="h-4 w-4 text-primary-700 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                <h4 className="text-lg font-bold mb-2 text-primary-900">
                  Need Help?
                </h4>
                <p className="text-primary-700 mb-4 text-sm">
                  Our safari experts are ready to assist you with any questions
                  about this experience.
                </p>
                <CustomButton
                  variant="outline"
                  size="default"
                  href="tel:+250785917385"
                  className="w-full border-primary-300 text-primary-800 hover:bg-primary-100"
                >
                  Contact Us
                </CustomButton>
              </article>
            </menu>
          </nav>
        </nav>
      </aside>
    </main>
  );
}
