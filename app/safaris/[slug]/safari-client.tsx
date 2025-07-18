'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Star,
  Send,
  Users,
  Calendar,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { CustomButton } from '../../../src/components/ui/custom-button';
import Head from 'next/head';

export interface SafariPackage {
  id: number;
  title: string;
  location: string;
  duration: string;
  image: string;
  destination: string;
  description: string;
  url: string;
  slug?: string;
  images?: string[];
  highlights?: string[];
  itinerary?: {
    day: number;
    title: string;
    details: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  bestTime?: string;
  groupSize?: string;
  difficulty?: string;
  inclusions?: string[];
  exclusions?: string[];
  packingList?: string[];
}

interface SafariClientProps {
  safari: SafariPackage;
}

export default function SafariClient({ safari }: SafariClientProps) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

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

  const nextCarouselImage = () => {
    setCarouselIndex((prevIndex) =>
      prevIndex === (safari?.images?.length || 0) - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCarouselImage = () => {
    setCarouselIndex((prevIndex) =>
      prevIndex === 0 ? (safari?.images?.length || 0) - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (safari?.images && safari.images.length > 1) {
      const interval = setInterval(nextImage, 5000);
      return () => clearInterval(interval);
    }
  }, [safari?.images]);

  const allImages = safari?.images || [safari?.image];

  return (
    <>
      <Head>
        <title>
          {safari?.title} - Safari Adventure | {safari?.location}
        </title>
        <meta name="description" content={safari?.description} />
        <meta
          name="keywords"
          content={`safari, ${safari?.location}, ${safari?.destination}, wildlife, adventure, travel`}
        />
        <meta
          property="og:title"
          content={`${safari?.title} - Safari Adventure`}
        />
        <meta property="og:description" content={safari?.description} />
        <meta property="og:image" content={safari?.image} />
        <meta property="og:url" content={safari?.url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${safari?.title} - Safari Adventure`}
        />
        <meta name="twitter:description" content={safari?.description} />
        <meta name="twitter:image" content={safari?.image} />
        <link rel="canonical" href={safari?.url} />
        {allImages.map((image, index) => (
          <link key={index} rel="preload" as="image" href={image} />
        ))}
      </Head>

      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="relative">
          {/* Hero Image */}
          <figure className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <img
              src={safari?.image}
              alt={safari?.title}
              className="w-full h-full object-cover"
            />
            <figcaption className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </figure>

          {/* Hero Content */}
          <header className="container mx-auto px-4 py-8 md:py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <section className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-lg text-muted-foreground">
                  {safari?.location}
                </span>
              </section>

              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {safari?.title}
              </h1>

              <p className="text-md md:text-lg mb-8 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {safari?.description}
              </p>

              <section className="flex flex-wrap justify-center gap-4 mb-8">
                <section className="flex items-center gap-2 rounded-full px-4 py-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">
                    {safari?.duration}
                  </span>
                </section>
                <section className="flex items-center gap-2 rounded-full px-4 py-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">
                    {safari?.groupSize}
                  </span>
                </section>
                <section className="flex items-center gap-2 rounded-full px-4 py-2">
                  <Star className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">
                    {safari?.difficulty}
                  </span>
                </section>
              </section>

              <CustomButton
                variant="primary"
                size="lg"
                href="https://wa.me/250785917385"
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4 mr-2" />
                Book This Safari
              </CustomButton>
            </motion.div>
          </header>
        </section>

        {/* Content Sections */}
        <section className="container mx-auto px-4 py-16 space-y-16">
          {/* Safari Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-12"
          >
            <article className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Safari Overview
              </h2>
              <p className="text-md md:text-md text-muted-foreground mb-8 leading-relaxed">
                {safari?.description}
              </p>

              {/* Quick Info */}
              <section className="grid md:grid-cols-2 gap-6 mb-8">
                <article className="rounded-2xl p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Best Time to Visit
                  </h3>
                  <p className="text-muted-foreground">{safari?.bestTime}</p>
                </article>
                <article className="rounded-2xl p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Group Size
                  </h3>
                  <p className="text-muted-foreground">{safari?.groupSize}</p>
                </article>
              </section>
            </article>

            {/* Booking Card */}
            <aside className="lg:col-span-1">
              <aside className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold mb-4">Book This Safari</h3>
                <dl className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Duration:</dt>
                    <dd className="font-semibold">{safari?.duration}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Group Size:</dt>
                    <dd className="font-semibold">{safari?.groupSize}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Difficulty:</dt>
                    <dd className="font-semibold">{safari?.difficulty}</dd>
                  </div>
                </dl>
                <CustomButton
                  variant="primary"
                  size="lg"
                  href="https://wa.me/250785917385"
                  className="w-full"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Get Quote
                </CustomButton>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Contact us for custom pricing and availability
                </p>
              </aside>
            </aside>
          </motion.div>

          {/* Itinerary */}
          {safari?.images && safari.images.length > 1 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center">
                Itinerary
              </h2>
              <article className="bg-white rounded-xl shadow-lg p-4 md:p-8">
                {safari?.itinerary && safari.itinerary.length > 0 ? (
                  <ol className="relative border-l-2 border-primary-200 ml-2 md:ml-6">
                    {safari.itinerary.map((day, idx) => (
                      <li
                        key={idx}
                        className="mb-8 last:mb-0 ml-2 md:ml-4 relative flex flex-col sm:flex-row gap-4 md:gap-6"
                      >
                        {/* Timeline marker */}
                        <figure className="flex flex-row sm:flex-col items-center sm:items-center mb-2 sm:mb-0">
                          {safari?.itinerary &&
                            idx !== safari.itinerary.length - 1 && (
                              <hr className="h-8 w-1 sm:w-1 sm:h-full bg-primary-200 mt-1 mb-1 sm:mt-1 sm:mb-1" />
                            )}
                        </figure>
                        {/* Day content */}
                        <section className="flex-1 bg-primary-50 rounded-lg shadow p-4 md:p-6 transition hover:shadow-xl">
                          <header className="mb-2 md:mb-3">
                            <h3 className="text-lg md:text-xl font-bold text-primary-800">
                              {day.title}
                            </h3>
                          </header>
                          <p className="text-primary-700 text-sm md:text-base leading-relaxed whitespace-pre-line">
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
            </motion.section>
          )}

          {/* Inclusions & Exclusions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <article className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-green-800 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                What's Included
              </h3>
              <ul className="space-y-3">
                {safari?.inclusions?.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-green-700">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-red-800 flex items-center gap-2">
                <XCircle className="h-5 w-5" />
                What's Not Included
              </h3>
              <ul className="space-y-3">
                {safari?.exclusions?.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-red-700">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </motion.section>

          {/* FAQs */}
          {safari?.faqs && safari?.faqs?.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <section className="space-y-4">
                {safari?.faqs?.map((faq, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg p-6"
                  >
                    <h3 className="text-base md:text-lg font-bold mb-3 text-primary">
                      {faq?.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq?.answer}
                    </p>
                  </motion.article>
                ))}
              </section>
            </motion.section>
          )}

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-primary/5 rounded-2xl p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready for Your Safari Adventure?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact us to customize this safari package or get more
              information about availability and pricing.
            </p>
            <CustomButton
              variant="primary"
              size="lg"
              href="https://wa.me/250785917385"
            >
              <Send className="h-4 w-4 mr-2" />
              Contact Us Now
            </CustomButton>
          </motion.section>

          <CustomButton variant="secondary" onClick={() => router.back()}>
            Back
          </CustomButton>
        </section>
      </main>
    </>
  );
}
