import React from 'react';
import { Star, MapPin, Clock, Calendar, Send } from 'lucide-react';
import { CustomButton } from '../../../src/components/ui/custom-button';
import { notFound } from 'next/navigation';
import { experiences } from '../../../src/constants/experiences';
import { motion } from 'framer-motion';

async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const experience = experiences?.find(
    (exp) => exp?.slug === slug || exp?.url?.split('/')?.pop() === slug
  );
  if (!experience) {
    return {
      title: 'Experience Not Found | Dawnlight Journeys',
      description: 'Experience not found.',
      keywords: ['experience', 'uganda', 'rwanda', 'africa', 'adventure'].join(
        ', '
      ),
      openGraph: {
        title: 'Experience Not Found | Dawnlight Journeys',
        description: 'Experience not found.',
        images: ['/assets/common/placeholder.svg'],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Experience Not Found | Dawnlight Journeys',
        description: 'Experience not found.',
        images: ['/assets/common/placeholder.svg'],
      },
    };
  }
  return {
    title: `${experience.title} | Dawnlight Journeys`,
    description: experience.description,
    keywords: [
      experience.title?.toLowerCase(),
      'experience',
      'uganda',
      'rwanda',
      'africa',
      'adventure',
    ].join(', '),
    openGraph: {
      title: `${experience.title} | Dawnlight Journeys`,
      description: experience.description,
      images: [experience.image || '/assets/common/placeholder.svg'],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${experience.title} | Dawnlight Journeys`,
      description: experience.description,
      images: [experience.image || '/assets/common/placeholder.svg'],
    },
  };
}

export default async function ExperiencePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const experience = experiences?.find(
    (exp) => exp?.slug === slug || exp?.url?.split('/')?.pop() === slug
  );
  if (!experience) return notFound();
  const Icon = experience?.icon;
  const images =
    experience?.images || (experience?.image ? [experience.image] : []);

  return (
    <>
      <main className="bg-background min-h-screen">
        {/* Hero Section with Booking Card */}
        <section className="relative">
          <figure className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <img
              src={experience?.image}
              alt={experience?.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            {/* Booking Card floating on hero (desktop) */}
            <aside className="hidden md:block absolute top-8 right-8 z-20 w-80">
              <section className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <dl className="space-y-4 mb-6">
                  {experience?.duration && (
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Duration:</dt>
                      <dd className="font-semibold">{experience?.duration}</dd>
                    </div>
                  )}
                  {experience?.difficulty && (
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Difficulty:</dt>
                      <dd className="font-semibold">
                        {experience?.difficulty}
                      </dd>
                    </div>
                  )}
                  {experience?.bestTime && (
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Best Time:</dt>
                      <dd className="font-semibold">{experience?.bestTime}</dd>
                    </div>
                  )}
                </dl>
                <CustomButton
                  variant="primary"
                  size="lg"
                  href="https://wa.me/250785917385"
                  className="w-full"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Contact Us Now
                </CustomButton>
              </section>
            </aside>
          </figure>
          {/* Hero Content */}
          <header className="container mx-auto px-4 py-8 md:py-12 relative z-10">
            <article className="text-center max-w-4xl mx-auto">
              <header className="flex items-center justify-center mb-4">
                <Icon className="h-12 w-12 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                  {experience?.title}
                </h1>
              </header>
              <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow mb-8">
                {experience?.description}
              </p>
              <nav
                className="flex flex-wrap justify-center gap-4 text-sm mb-8"
                aria-label="Experience quick info"
              >
                {experience?.duration && (
                  <span className="flex items-center bg-white/20 rounded-full px-4 py-2">
                    <Clock className="h-4 w-4 mr-2" />
                    {experience?.duration}
                  </span>
                )}
                {experience?.difficulty && (
                  <span className="flex items-center bg-white/20 rounded-full px-4 py-2">
                    <Star className="h-4 w-4 mr-2" />
                    {experience?.difficulty}
                  </span>
                )}
                {experience?.bestTime && (
                  <span className="flex items-center bg-white/20 rounded-full px-4 py-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {experience?.bestTime}
                  </span>
                )}
              </nav>
              {/* Booking Card for mobile */}
              <aside className="block md:hidden mx-auto max-w-xs mb-8">
                <section className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                  <dl className="space-y-4 mb-6">
                    {experience?.duration && (
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Duration:</dt>
                        <dd className="font-semibold">
                          {experience?.duration}
                        </dd>
                      </div>
                    )}
                    {experience?.difficulty && (
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Difficulty:</dt>
                        <dd className="font-semibold">
                          {experience?.difficulty}
                        </dd>
                      </div>
                    )}
                    {experience?.bestTime && (
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Best Time:</dt>
                        <dd className="font-semibold">
                          {experience?.bestTime}
                        </dd>
                      </div>
                    )}
                  </dl>
                  <CustomButton
                    variant="primary"
                    size="lg"
                    href="https://wa.me/250785917385"
                    className="w-full"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Contact Us Now
                  </CustomButton>
                </section>
              </aside>
            </article>
          </header>
        </section>

        {/* Gallery Section (if multiple images) */}
        {images.length > 1 && (
          <section className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <figure className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${experience.title} image ${idx + 1}`}
                  className="rounded-lg object-cover w-full h-48"
                />
              ))}
            </figure>
          </section>
        )}

        {/* Main Content: Overview, Itinerary, FAQ, Inclusions/Exclusions/Packing */}
        <section className="container mx-auto px-4 py-16 space-y-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Overview, Itinerary, FAQ, Accordions */}
            <main className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <article>
                <h2 className="text-3xl font-bold mb-6">Experience Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {experience?.description}
                </p>
                {experience?.locations && experience?.locations?.length > 0 && (
                  <section className="flex items-start gap-3 mb-6">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Locations</h4>
                      <p className="text-muted-foreground">
                        {experience.locations.join(', ')}
                      </p>
                    </div>
                  </section>
                )}
              </article>
              {/* Itinerary */}
              <section
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                  Itinerary
                </h2>
                <article className="bg-white rounded-xl shadow-lg p-4 md:p-8">
                  {experience?.itinerary && experience.itinerary.length > 0 ? (
                    <ol className="relative border-l-2 border-primary-200 ml-2 md:ml-6">
                      {experience.itinerary.map((day, idx) => (
                        <li
                          key={idx}
                          className="mb-8 last:mb-0 ml-2 md:ml-4 relative flex flex-col sm:flex-row gap-4 md:gap-6"
                        >
                          {/* Timeline marker */}
                          <figure className="flex flex-row sm:flex-col items-center sm:items-center mb-2 sm:mb-0">
                            {experience?.itinerary &&
                              idx !== experience.itinerary.length - 1 && (
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
              </section>
              {/* FAQ */}
              {experience.faqs && experience.faqs.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold mb-8 text-center">
                    Frequently Asked Questions
                  </h2>
                  <section className="space-y-4">
                    {experience.faqs.map((faq, index) => (
                      <article
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-6"
                      >
                        <h3 className="text-lg font-bold mb-3 text-primary">
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </article>
                    ))}
                  </section>
                </section>
              )}
              {/* Inclusions/Exclusions/Packing List Accordions */}
              {(experience.inclusions || experience.exclusions) && (
                <section>
                  <h2 className="text-3xl font-bold mb-8 text-center">
                    Good to Know
                  </h2>
                  <section className="space-y-4">
                    {experience.inclusions &&
                      experience.inclusions.length > 0 && (
                        <details className="bg-green-50 rounded-2xl p-6">
                          <summary className="text-xl font-bold mb-4 text-green-800 cursor-pointer">
                            What's Included
                          </summary>
                          <ul className="space-y-2 mt-4">
                            {experience.inclusions.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-green-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </details>
                      )}
                    {experience.exclusions &&
                      experience.exclusions.length > 0 && (
                        <details className="bg-red-50 rounded-2xl p-6">
                          <summary className="text-xl font-bold mb-4 text-red-800 cursor-pointer">
                            What's Not Included
                          </summary>
                          <ul className="space-y-2 mt-4">
                            {experience.exclusions.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-red-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </details>
                      )}
                  </section>
                </section>
              )}
              {/* Back Button */}
              <nav className="mt-8" aria-label="Back to experiences">
                <CustomButton href="/experiences">
                  Back to Experiences
                </CustomButton>
              </nav>
            </main>
            {/* Right: Highlights Sidebar */}
            <aside className="lg:col-span-1">
              {experience.highlights && experience.highlights.length > 0 && (
                <section className="bg-muted rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-bold mb-4">
                    Experience Highlights
                  </h3>
                  <ul className="space-y-3">
                    {experience.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </aside>
          </div>
        </section>
        {/* Persistent Contact Us button for mobile */}
        <aside className="fixed bottom-4 left-0 right-0 z-50 flex justify-center md:hidden pointer-events-none">
          <nav className="pointer-events-auto" aria-label="Contact Us">
            <CustomButton
              variant="primary"
              size="lg"
              href="https://wa.me/250785917385"
              className="shadow-lg"
            >
              <Send className="h-4 w-4 mr-2" />
              Contact Us
            </CustomButton>
          </nav>
        </aside>
      </main>
    </>
  );
}
