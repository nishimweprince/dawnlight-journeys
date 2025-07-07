import React from "react";
import { Camera, Coffee, Compass, Users, Star, MapPin, Clock, Calendar } from "lucide-react";
import { CustomButton } from "../../../src/components/ui/custom-button";
import { notFound } from "next/navigation";
import { experiences } from "../../../src/constants/experiences";
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const experience = experiences.find((exp) => exp.slug === params.slug || exp.url.split('/').pop() === params.slug);
  
  if (!experience) {
    return {
      title: 'Experience Not Found | Dawnlight Journeys',
    };
  }

  return {
    title: `${experience.title} | Dawnlight Journeys`,
    description: experience.description,
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
    keywords: [experience.title.toLowerCase(), 'experience', 'uganda', 'rwanda', 'africa', 'adventure'],
  };
}

export default function ExperiencePage({ params }: { params: { slug: string } }) {
  const experience = experiences.find((exp) => exp.slug === params.slug || exp.url.split('/').pop() === params.slug);
  if (!experience) return notFound();
  const Icon = experience.icon;

  return (
    <main className="bg-background min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={experience.image || "/assets/common/placeholder.svg"}
          alt={experience.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <section className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <section className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <Icon className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">{experience.title}</h1>
          </div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow mb-8">
            {experience.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {experience.duration && (
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                {experience.duration}
              </div>
            )}
            {experience.difficulty && (
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                {experience.difficulty}
              </div>
            )}
            {experience.bestTime && (
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                {experience.bestTime}
              </div>
            )}
          </div>
        </section>
      </section>

      <section className="container py-16 space-y-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Experience Overview</h2>
            <p className="text-lg text-muted-foreground mb-6">{experience.description}</p>
            <div className="space-y-4">
              {experience.locations && experience.locations.length > 0 && (
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Locations</h4>
                    <p className="text-muted-foreground">{experience.locations.join(', ')}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="bg-muted rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Experience Highlights</h3>
            <ul className="space-y-3">
              {experience.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {experience.itinerary && experience.itinerary.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Experience Itinerary</h2>
            <div className="space-y-6">
              {experience.itinerary.map((day, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-primary">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      {day.day}
                    </div>
                    <h3 className="text-xl font-bold">{day.title}</h3>
                  </div>
                  <p className="text-muted-foreground ml-12">{day.details}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {(experience.inclusions || experience.exclusions) && (
          <div className="grid md:grid-cols-2 gap-8">
            {experience.inclusions && (
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-green-800">What's Included</h3>
                <ul className="space-y-2">
                  {experience.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-green-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {experience.exclusions && (
              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-red-800">What's Not Included</h3>
                <ul className="space-y-2">
                  {experience.exclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-red-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {experience.faqs && experience.faqs.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {experience.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center bg-primary/5 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Adventure?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Contact us to customize this experience or get more information about availability and pricing.
          </p>
          <CustomButton variant="primary" size="lg" href="https://wa.me/250785917385">
            Contact Us Now
          </CustomButton>
        </div>
      </section>
    </main>
  );
}
