import { CustomButton } from "../../src/components/ui/custom-button";
import React from "react";
import { experiences } from "../../src/constants/experiences";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unique Experiences | Dawnlight Journeys',
  description: 'Go beyond the ordinary safari with curated adventures that connect you with the heart of Africa. Wildlife photography, cultural immersion, trekking, and more.',
  openGraph: {
    title: 'Unique Experiences | Dawnlight Journeys',
    description: 'Go beyond the ordinary safari with curated adventures that connect you with the heart of Africa. Wildlife photography, cultural immersion, trekking, and more.',
    images: ['/assets/safaris/wildlife-safari.jpg'],
    type: 'website',
    url: 'https://dawnlightjourneys.com/experiences',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unique Experiences | Dawnlight Journeys',
    description: 'Go beyond the ordinary safari with curated adventures that connect you with the heart of Africa. Wildlife photography, cultural immersion, trekking, and more.',
    images: ['/assets/safaris/wildlife-safari.jpg'],
  },
  keywords: [
    'africa experiences',
    'wildlife photography',
    'cultural immersion',
    'adventure trekking',
    'mountain climbing',
    'bird watching',
    'conservation volunteering',
    'uganda experiences',
    'rwanda experiences'
  ],
};

export default function ExperiencesPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <header className="relative h-64 sm:h-72 md:h-96 lg:h-[28rem] flex items-center justify-center bg-black/60">
        <img
          src="/assets/common/placeholder.svg"
          alt="Experiences Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <section className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <section className="relative z-10 text-center text-white w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg">Unforgettable Experiences</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow">Go beyond the ordinary safari with curated adventures that connect you with the heart of Africa.</p>
        </section>
      </header>

      {/* Experiences Grid */}
      <section className="container py-12 sm:py-16 md:py-20 lg:py-24">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <li key={exp.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform">
                <figure className="relative h-40 sm:h-48 w-full overflow-hidden">
                  <img
                    src={exp.image || "/assets/common/placeholder.svg"}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <section className="p-4 sm:p-6 flex-1 flex flex-col">
                  <header className="flex items-center mb-3">
                    <span className="bg-primary/10 text-primary rounded-full p-2 mr-3 flex-shrink-0">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold line-clamp-2">{exp.title}</h2>
                  </header>
                  <p className="text-muted-foreground mb-4 flex-1 text-sm sm:text-base line-clamp-3">{exp.description}</p>
                  <ul className="mb-4 space-y-1">
                    {exp.highlights.slice(0, 3).map((h: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="line-clamp-1">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <footer className="mt-auto flex flex-col gap-2">
                    <CustomButton variant="primary" size="sm" href={exp.url}>Learn More</CustomButton>
                    <CustomButton variant="outline" size="sm" href="https://wa.me/250785917385">Book Now</CustomButton>
                  </footer>
                </section>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Custom Experience Section */}
      <section className="bg-muted py-12 sm:py-16 md:py-20">
        <article className="container grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <section className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Create Your Custom Experience</h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-muted-foreground">Looking for something unique? We specialize in creating custom experiences tailored to your interests, timeframe, and budget. Let us help you design your dream African adventure.</p>
            <CustomButton variant="primary" size="lg" href="https://wa.me/250785917385" className="w-full sm:w-auto">Contact Us to Customize</CustomButton>
          </section>
          <figure className="relative h-48 sm:h-64 md:h-72 w-full rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
            <img
              src="/assets/common/placeholder.svg"
              alt="Custom Experience"
              className="w-full h-full object-cover"
            />
          </figure>
        </article>
      </section>
    </main>
  );
}
