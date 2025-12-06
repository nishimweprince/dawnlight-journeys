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
  const [showAllImages, setShowAllImages] = useState(false);

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
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <address className="flex items-center justify-center gap-2 mb-4 not-italic">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-lg text-muted-foreground">
                  {safari?.location}
                </span>
              </address>

              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {safari?.title}
              </h1>

              <p className="text-md md:text-lg mb-8 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {safari?.description}
              </p>

              <nav className="flex flex-wrap justify-center gap-4 mb-8">
                <article className="flex items-center gap-2 rounded-full px-4 py-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">
                    {safari?.duration}
                  </span>
                </article>
                <article className="flex items-center gap-2 rounded-full px-4 py-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">
                    {safari?.groupSize}
                  </span>
                </article>
                <article className="flex items-center gap-2 rounded-full px-4 py-2">
                  <Star className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">
                    {safari?.difficulty}
                  </span>
                </article>
              </nav>

              <CustomButton
                variant="primary"
                size="lg"
                href="https://wa.me/250785917385"
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4 mr-2" />
                Book This Safari
              </CustomButton>
            </motion.article>
          </header>
        </section>

        {/* Content Sections */}
        <main className="container mx-auto px-4 py-16 space-y-16">
          {/* Safari Overview with Highlights and Booking Card */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Main Content - Highlights */}
            <div className="lg:col-span-2 space-y-6">
              {safari?.highlights && safari.highlights.length > 0 && (
                <article className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                    Safari Highlights
                  </h2>
                  <ul className="grid md:grid-cols-2 gap-4 list-none">
                    {safari.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )}
              
              {safari?.bestTime && (
                <article className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Best Time to Visit
                  </h3>
                  <p className="text-muted-foreground">{safari.bestTime}</p>
                </article>
              )}
            </div>

            {/* Booking Card */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-6 text-foreground">Book This Safari</h3>
                <dl className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <article className="flex justify-between items-center">
                    <dt className="text-muted-foreground flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Duration:
                    </dt>
                    <dd className="font-semibold text-foreground">{safari?.duration}</dd>
                  </article>
                  {safari?.groupSize && (
                    <article className="flex justify-between items-center">
                      <dt className="text-muted-foreground flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Group Size:
                      </dt>
                      <dd className="font-semibold text-foreground">{safari.groupSize}</dd>
                    </article>
                  )}
                  {safari?.difficulty && (
                    <article className="flex justify-between items-center">
                      <dt className="text-muted-foreground flex items-center gap-2">
                        <Star className="h-4 w-4" />
                        Difficulty:
                      </dt>
                      <dd className="font-semibold text-foreground">{safari.difficulty}</dd>
                    </article>
                  )}
                </dl>
                <CustomButton
                  variant="primary"
                  size="lg"
                  href="https://wa.me/250785917385"
                  className="w-full mb-4"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Get Quote
                </CustomButton>
                <p className="text-xs text-muted-foreground text-center">
                  Contact us for custom pricing and availability
                </p>
              </div>
            </aside>
          </motion.section>

          {/* Itinerary - Gamified Version */}
          {safari?.itinerary?.length && safari.itinerary.length > 1 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8 max-w-5xl mx-auto"
            >
              <header className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                  Your Safari Journey
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Follow your adventure day by day through this exciting itinerary
                </p>
              </header>

              {/* Progress Bar */}
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Journey Progress</span>
                  <span className="text-sm font-bold text-primary">{safari.itinerary.length} Days</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-primary to-primary/70 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="relative max-w-5xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden sm:block" />

                <ol className="space-y-8 list-none">
                  {safari?.itinerary && safari.itinerary.map((day, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      {/* Day Number Badge */}
                      <div className="flex items-start gap-4 md:gap-6">
                        <div className="flex-shrink-0 relative z-10">
                          <div className="w-16 h-16 ml-2 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-primary/100 flex items-center justify-center shadow-lg border-4 border-white">
                            <div className="text-center">
                              <div className="text-xs font-medium text-white/80 uppercase tracking-wide">Day</div>
                              <div className="text-xl md:text-2xl font-bold text-white">{day.day}</div>
                            </div>
                          </div>
                          {/* Connector dot */}
                          {safari?.itinerary && idx < safari.itinerary.length - 1 && (
                            <div className="absolute left-1/2 -bottom-8 w-2 h-8 bg-primary/30 -translate-x-1/2 hidden sm:block" />
                          )}
                        </div>

                        {/* Day Content Card */}
                        <article className="flex-1 group">
                          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-primary/10 hover:border-primary/30">
                            {/* Card Header */}
                            <header className="bg-gradient-to-r from-primary/5 to-primary/10 px-6 py-4 border-b border-primary/10">
                              <div className="flex items-center justify-between">
                                <h3 className="text-lg md:text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                                  {day.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                                    🎯 Adventure
                                  </span>
                                </div>
                              </div>
                            </header>

                            {/* Card Body */}
                            <div className="px-6 py-5">
                              <p className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line">
                                {day.details}
                              </p>

                              {/* Activity Badges */}
                              <div className="mt-4 flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                                  <CheckCircle className="w-3 h-3" />
                                  Activities Included
                                </span>
                                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                  <MapPin className="w-3 h-3" />
                                  Guided Tour
                                </span>
                              </div>
                            </div>

                            {/* Progress Indicator */}
                            <div className="px-6 pb-4">
                              <div className="flex items-center gap-2">
                                <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                                  <div
                                    className="bg-gradient-to-r from-primary to-primary/70 h-1.5 rounded-full transition-all duration-500"
                                    style={{ width: `${safari?.itinerary ? ((idx + 1) / safari.itinerary.length) * 100 : 0}%` }}
                                  />
                                </div>
                                <span className="text-xs font-semibold text-primary">
                                  {safari?.itinerary ? Math.round(((idx + 1) / safari.itinerary.length) * 100) : 0}%
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </motion.li>
                  ))}
                </ol>

                {/* Journey Complete Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-8 text-center"
                >
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-3 rounded-full shadow-lg">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-bold">Journey Complete!</span>
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {/* Inclusions & Exclusions */}
          {(safari?.inclusions?.length || safari?.exclusions?.length) && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {safari?.inclusions && safari.inclusions.length > 0 && (
                <article className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 md:p-8 border border-green-200/50 shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold mb-6 text-green-800 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6" />
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {safari.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-green-800 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )}

              {safari?.exclusions && safari.exclusions.length > 0 && (
                <article className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-6 md:p-8 border border-red-200/50 shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold mb-6 text-red-800 flex items-center gap-2">
                    <XCircle className="h-6 w-6" />
                    What's Not Included
                  </h3>
                  <ul className="space-y-3">
                    {safari.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-red-800 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )}
            </motion.section>
          )}

          {/* Images Gallery */}
          {safari?.images && safari.images.length > 1 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <header className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Photo Gallery
                </h2>
                <p className="text-muted-foreground">
                  Explore stunning moments from this safari adventure
                </p>
              </header>
              <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 border border-gray-100">
                {safari?.images && safari.images.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {(showAllImages
                        ? safari.images
                        : safari.images.slice(0, 6)
                      ).map((image, index) => (
                        <figure 
                          key={index} 
                          className="relative group aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
                        >
                          <img
                            src={image}
                            alt={`${safari?.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white text-sm font-medium">View Full Image</p>
                          </div>
                        </figure>
                      ))}
                    </div>

                    {safari.images.length > 6 && (
                      <div className="flex justify-center mt-8">
                        <CustomButton
                          variant="secondary"
                          onClick={() => setShowAllImages(!showAllImages)}
                          className="flex items-center gap-2 px-6 py-3"
                        >
                          {showAllImages ? (
                            <>
                              <ChevronLeft className="h-4 w-4" />
                              Show Less
                            </>
                          ) : (
                            <>
                              <ChevronRight className="h-4 w-4" />
                              Show All {safari.images.length} Images
                            </>
                          )}
                        </CustomButton>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-center text-muted-foreground py-8">No images available.</p>
                )}
              </div>
            </motion.section>
          )}

          {/* FAQs */}
          {safari?.faqs && safari?.faqs?.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <header className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Everything you need to know about this safari
                </p>
              </header>
              <div className="space-y-4 max-w-4xl mx-auto">
                {safari?.faqs?.map((faq, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-lg md:text-xl font-bold mb-4 text-primary flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold mt-0.5">
                        Q
                      </span>
                      {faq?.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed pl-9">
                      {faq?.answer}
                    </p>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          )}

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 md:p-12 border border-primary/20 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Ready for Your Safari Adventure?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact us to customize this safari package or get more
              information about availability and pricing. Our expert team is ready to help you plan your perfect African adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CustomButton
                variant="primary"
                size="lg"
                href="https://wa.me/250785917385"
                className="px-8 py-4 text-base"
              >
                <Send className="h-5 w-5 mr-2" />
                Contact Us Now
              </CustomButton>
              <CustomButton
                variant="secondary"
                size="lg"
                onClick={() => router.back()}
                className="px-8 py-4 text-base"
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                Back to Safaris
              </CustomButton>
            </div>
          </motion.section>

        </main>
      </main>
    </>
  );
}
