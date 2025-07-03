'use client';

import { notFound, useRouter } from 'next/navigation';
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
import { motion } from 'framer-motion';

import { safariPackages } from '../../../src/constants/safaris';
import { Button } from '@/components/ui/button';

function getSafariBySlug(slug: string) {
  return safariPackages.find(safari => safari.slug === slug);
}

export default function SafariDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();
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
      {/* Hero Section - Only Image */}
      <header className="relative w-full overflow-hidden h-[50vh] rounded-b-3xl shadow-lg flex items-center justify-center">
        <img
          src={safari.image || '/assets/placeholders/safari-placeholder.jpg'}
          alt={`${safari.title} - Main`}
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
      </header>

      {/* Heading Section */}
      <motion.section
        className="container mx-auto px-4 md:px-8 -mt-16 z-10 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-8 md:p-12 flex flex-col items-center text-center border border-primary-100">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary-900 drop-shadow-lg">
            {safari.title}
          </h1>
          <ul className="flex flex-wrap items-center justify-center gap-8 text-lg font-medium mb-4">
            <li className="flex items-center gap-2 text-lg font-medium text-primary-700">
              <MapPin className="h-5 w-5" /> {safari.location}
            </li>
            <li className="flex items-center gap-2 text-lg font-medium text-primary-700">
              <Clock className="h-5 w-5" /> {safari.duration}
            </li>
          </ul>
          <p className="text-base md:text-lg text-primary-800 leading-relaxed max-w-2xl">
            {safari.description}
          </p>
        </div>
      </motion.section>

      {/* Snapshot Info Cards */}
      <motion.section
        className="container mx-auto px-4 md:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      >
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
      </motion.section>

      {/* Highlights Section */}
      <motion.section
        className="container mx-auto px-4 md:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      >
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
      </motion.section>

      {/* Itinerary Section */}
      <motion.section
        className="container mx-auto px-4 md:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8">
          Itinerary
        </h2>
        <article className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {safari?.itinerary && safari.itinerary.length > 0 ? (
            <ol className="relative border-l-2 border-primary-200 ml-4 md:ml-6">
              {safari.itinerary.map((day, idx) => (
                <li
                  key={day.day}
                  className="mb-12 last:mb-0 ml-6 md:ml-8 relative flex gap-6"
                >
                  {/* Timeline marker */}
                  <div className="flex flex-col items-center">
                    <div className="hover:bg-green-700 cursor-pointer hover:text-white w-10 h-10 rounded-full bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center border-4 border-white shadow-lg z-10">
                      <span className="text-lg font-bold">
                        {idx + 1}
                      </span>
                    </div>
                    {safari?.itinerary && idx !== safari.itinerary.length - 1 && (
                      <div className="w-1 h-full bg-primary-200 mt-1 mb-1" />
                    )}
                  </div>
                  {/* Day content */}
                  <section className="flex-1 bg-primary-50 rounded-lg shadow p-6 transition hover:shadow-xl">
                    <header className="mb-3">
                      <h3 className="text-xl font-bold text-primary-800">
                        {day.title}
                      </h3>
                    </header>
                    <p className="text-primary-700 text-base leading-relaxed whitespace-pre-line">
                      {day.details}
                    </p>
                  </section>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-primary-700">No itinerary available.</p>
          )}
        </article>
        {/* Inclusions, Exclusions, Packing List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {safari.inclusions && safari.inclusions.length > 0 && (
            <article className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold mb-3 text-primary-900">Tour Inclusions</h3>
              <ul className="list-disc pl-5 space-y-1 text-primary-800">
                {safari.inclusions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </article>
          )}
          {safari.exclusions && safari.exclusions.length > 0 && (
            <article className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold mb-3 text-primary-900">Tour Exclusions</h3>
              <ul className="list-disc pl-5 space-y-1 text-primary-800">
                {safari.exclusions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </article>
          )}
          {safari.packingList && safari.packingList.length > 0 && (
            <article className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold mb-3 text-primary-900">Recommended Packing List</h3>
              <ul className="list-disc pl-5 space-y-1 text-primary-800">
                {safari.packingList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </article>
          )}
        </div>
      </motion.section>

      {/* FAQs */}
      <motion.section
        className="container mx-auto px-4 md:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
      >
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
              className={`relative group overflow-hidden bg-white shadow-lg border-l-4 transition-all duration-300 ${
                activeFaq === idx
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-primary-200'
              }`}
            >
              <div>
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className={`w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-primary-900 transition-colors focus:outline-none ${
                    activeFaq === idx ? 'bg-primary-50' : 'bg-white hover:bg-primary-50'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-base font-bold transition-all duration-300 ${activeFaq === idx ? 'bg-primary-600 text-white scale-110 shadow' : 'bg-primary-100 text-primary-800'}`}>
                      {idx + 1}
                    </span>
                    <span className="ml-2 text-md font-medium">{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 ml-2 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-primary-600' : 'text-primary-400 group-hover:text-primary-600'}`}
                  />
                </button>
                <section
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeFaq === idx
                      ? 'max-h-96 opacity-100 bg-primary-50'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <article className="px-6 pb-5 pt-0 text-primary-800 border-t border-primary-100">
                    <div className="flex items-start gap-2 mt-2">
                      <span className="mt-1 text-primary-600">
                        <ChevronDown className="h-4 w-4 rotate-90" />
                      </span>
                      <p className="leading-relaxed text-base font-light">{faq.answer}</p>
                    </div>
                  </article>
                </section>
              </div>
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-fit mt-4 hover:bg-primary-100 hover:text-primary-900" onClick={() => router.back()}>
          Back
        </Button>
      </motion.section>

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
