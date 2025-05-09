'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CustomButton } from '../../../src/components/ui/custom-button';
import { ChevronLeft, ChevronRight, MapPin, ChevronDown, Calendar, Clock, Users, Activity } from 'lucide-react';
import React, { useState, useEffect, use } from 'react';

const destinationData = [
  {
    slug: 'rwanda',
    name: 'Rwanda',
    images: [
      '/assets/destinations/rwanda-tourism.jpg',
      '/assets/destinations/rwanda-tourism.jpg',
    ],
    description:
      'The land of a thousand hills, home to mountain gorillas and stunning landscapes. Rwanda offers visitors unforgettable experiences from gorilla trekking to vibrant city life.',
    longDescription: 
      'Now is the time to explore Rwanda on your terms with this tour that is affordable for nature enthusiasts. Watch the sunset through the hills of Rwanda, stretch out on the shores of Lake Kivu, and rise at dawn to see the wildlife - trust us, it is worth not hitting snooze. This multi-day tour offers a quick yet intimate introduction to the diversity of East Africa. Unwind with free time to savor local cuisine, meet the local people, and spend the evening with a local family. How is that sound for an authentic cultural experience?',
    highlights: [
      'See mountain gorillas in their natural habitat',
      'Explore Volcanoes National Park',
      'Experience vibrant Kigali city life',
      'Visit Lake Kivu',
      'Discover the Nyungwe Forest National Park',
      'Learn about Rwandan history and culture'
    ],
    faqs: [
      {
        question: 'What is the best time to visit Rwanda?',
        answer: 'June to September and December to February are the best months for wildlife viewing, with less rainfall and comfortable temperatures.'
      },
      {
        question: 'Is Rwanda safe for tourists?',
        answer: 'Yes, Rwanda is considered one of the safest countries in Africa for tourists. The country has made remarkable progress in terms of security and infrastructure.'
      },
      {
        question: 'Do I need a visa to visit Rwanda?',
        answer: 'Citizens of many countries can obtain a visa on arrival or apply online through the Rwanda Immigration website. It is recommended to check the latest requirements before traveling.'
      },
      {
        question: 'What should I pack for gorilla trekking?',
        answer: 'For gorilla trekking, pack lightweight, long-sleeved clothing, sturdy hiking boots, rain gear, gardening gloves for gripping vegetation, insect repellent, and a hat. Neutral colors (green, khaki, brown) are recommended.'
      }
    ],
    location: 'East Africa',
    duration: '4 days - 3 nights',
    travelStyle: {
      title: '1-to-4 Experiences',
      description: 'Fast, fresh, and fun adventures that never slow down; made for young, budget-minded travelers.'
    },
    serviceLevel: {
      title: 'Basic',
      description: 'Simple and clean hotels and hostels; affordable public and private transport; lots of optional activities.'
    },
    physicalRating: {
      level: '2 - Light',
      description: 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.'
    },
    tripType: {
      title: 'Small Group',
      description: 'Small group experience. Max 12, avg 10.'
    },
    activities: ['Wildlife Viewing', 'Hiking', 'Cultural Experiences', 'Photography']
  },
  {
    slug: 'uganda',
    name: 'Uganda',
    images: [
      '/assets/destinations/uganda-tourism.jpg',
      '/assets/destinations/uganda-tourism.jpg',
    ],
    description:
      'The pearl of Africa with diverse wildlife, including gorillas, chimpanzees, and the Big Five.',
    longDescription: 
      'Now is the time to explore Uganda on your terms with this tour that is affordable for adventurous travelers. Watch the sunset over the vast savannahs, encounter magnificent wildlife in their natural habitat, and rise at dawn to trek through lush rainforests - trust us, it is worth the early morning. This journey offers a comprehensive introduction to Uganda is incredible biodiversity. Unwind with free time to connect with locals, taste authentic Ugandan cuisine, and immerse yourself in the vibrant culture. How is that sound for an unforgettable African adventure?',
    highlights: [
      'Track chimpanzees in Kibale Forest',
      'See the source of the Nile',
      'Safari in Queen Elizabeth National Park',
      'Boat cruise on the Kazinga Channel',
      'Visit Murchison Falls National Park',
      'Experience traditional tribal cultures'
    ],
    faqs: [
      {
        question: 'What is Uganda famous for?',
        answer: 'Uganda is famous for its mountain gorillas, diverse wildlife, beautiful lakes, and being home to the source of the Nile River. It also has a rich cultural heritage with over 50 ethnic groups.'
      },
      {
        question: 'Do I need a visa to visit Uganda?',
        answer: 'Most visitors need a visa, which can be obtained online through the official e-visa portal or on arrival at Entebbe International Airport.'
      },
      {
        question: 'What vaccinations do I need for Uganda?',
        answer: 'Yellow fever vaccination is mandatory for all visitors. Other recommended vaccinations include hepatitis A and B, typhoid, meningitis, and routine vaccinations. Malaria prevention is also strongly advised.'
      },
      {
        question: 'What is the best time to visit Uganda?',
        answer: 'The dry seasons (December to February and June to August) are generally the best times to visit for wildlife viewing and gorilla trekking, as trails are less muddy and animals gather around water sources.'
      }
    ],
    location: 'East Africa',
    duration: '5 days - 4 nights',
    travelStyle: {
      title: '1-to-4 Experiences',
      description: 'Fast, fresh, and fun adventures that never slow down; made for young, budget-minded travelers.'
    },
    serviceLevel: {
      title: 'Basic',
      description: 'Simple and clean hotels and hostels; affordable public and private transport; lots of optional activities.'
    },
    physicalRating: {
      level: '3 - Average',
      description: 'Some tours may include light hiking, biking, rafting, or kayaking in addition to walking.'
    },
    tripType: {
      title: 'Small Group',
      description: 'Small group experience. Max 12, avg 10.'
    },
    activities: ['Wildlife Safaris', 'Gorilla Trekking', 'Cultural Tours', 'Boat Cruises']
  },
];

function getDestinationBySlug(slug: string) {
  return destinationData.find((d) => d.slug === slug);
}

export default function DestinationDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const destination = getDestinationBySlug(slug);
  if (!destination) return notFound();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === destination.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? destination.images.length - 1 : prevIndex - 1
    );
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <header className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-end overflow-hidden">
        {/* Image Slider */}
        <figure className="absolute inset-0 w-full h-full">
          {destination.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${destination.name} - Image ${index + 1}`}
              fill
              priority={index === 0}
              className={`object-cover object-center transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </figure>
        {/* Image navigation controls */}
        <nav className="absolute inset-0 flex items-center justify-between px-4 z-20">
          <button
            onClick={prevImage}
            className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </nav>
        {/* Image indicator dots */}
        <nav className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {destination.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </nav>
        <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" aria-hidden="true" />
        <section className="relative z-10 p-8 md:p-16 text-white max-w-5xl mx-auto w-full pb-24">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            {destination.name}
          </h1>
          <ul className="flex flex-wrap items-center gap-6 mb-6">
            <li className="flex items-center gap-2 text-xl font-medium">
              <MapPin className="h-6 w-6" /> {destination.location}
            </li>
            <li className="flex items-center gap-2 text-xl font-medium">
              <Calendar className="h-6 w-6" /> {destination.duration}
            </li>
          </ul>
          <p className="text-lg md:text-xl max-w-3xl drop-shadow">
            {destination.description}
          </p>
        </section>
      </header>

      <section className="container mx-auto px-4 md:px-8 py-12">
        <section className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <article className="flex-1">
            {/* Tour Details Tabs */}
            <nav className="border-b border-gray-200 mb-8">
              <ul className="flex justify-center space-x-12 -mb-px">
                <li className="relative group">
                  <a 
                    href="#overview" 
                    className="inline-block py-4 px-3 text-lg font-medium text-primary border-b-2 border-primary transition-all duration-300 hover:scale-105"
                  >
                    Overview
                  </a>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-100 transition-transform duration-300" />
                </li>
                <li className="relative group">
                  <a 
                    href="#whats-included" 
                    className="inline-block py-4 px-3 text-lg font-medium text-gray-500 hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    What's Included
                  </a>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </li>
                <li className="relative group">
                  <a 
                    href="#tour-details" 
                    className="inline-block py-4 px-3 text-lg font-medium text-gray-500 hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    Tour Details
                  </a>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </li>
              </ul>
            </nav>

            {/* Overview Section */}
            <section id="overview" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">About {destination.name}</h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                {destination.longDescription}
              </p>

              <h3 className="text-xl font-bold mb-4 text-gray-900">Highlights</h3>
              <ul className="grid md:grid-cols-2 gap-3 mb-8">
                {destination.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <Activity className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Tour Info Section */}
            <section className="mb-12 grid md:grid-cols-2 gap-8">
              <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-3 text-gray-900">
                  <Users className="h-5 w-5 text-primary" />
                  Travel Style: {destination.travelStyle.title}
                </h3>
                <p className="text-gray-600">{destination.travelStyle.description}</p>
              </article>

              <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-3 text-gray-900">
                  <Activity className="h-5 w-5 text-primary" />
                  Physical Rating: {destination.physicalRating.level}
                </h3>
                <p className="text-gray-600">{destination.physicalRating.description}</p>
              </article>

              <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-3 text-gray-900">
                  <Clock className="h-5 w-5 text-primary" />
                  Service Level: {destination.serviceLevel.title}
                </h3>
                <p className="text-gray-600">{destination.serviceLevel.description}</p>
              </article>

              <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-3 text-gray-900">
                  <Users className="h-5 w-5 text-primary" />
                  Trip Type: {destination.tripType.title}
                </h3>
                <p className="text-gray-600">{destination.tripType.description}</p>
              </article>
            </section>

            {/* Activities Section */}
            <section className="mb-12">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Activities</h3>
              <ul className="flex flex-wrap gap-3">
                {destination.activities.map((activity, idx) => (
                  <li key={idx} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {activity}
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQs */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                <span>Frequently Asked Questions</span>
                <span className="text-sm font-normal text-gray-500">({destination.faqs.length} questions)</span>
              </h3>
              <ul className="space-y-4">
                {destination.faqs.map((faq, idx) => (
                  <li 
                    key={idx} 
                    className="rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md hover:border-primary/20"
                  >
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-6 text-left font-medium text-gray-800 hover:text-primary transition-colors group"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                          {idx + 1}
                        </span>
                        <span className="group-hover:text-primary transition-colors">{faq.question}</span>
                      </span>
                      <ChevronDown 
                        className={`h-5 w-5 transition-transform duration-300 text-gray-400 group-hover:text-primary ${
                          activeFaq === idx ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    <section 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                        <p className="leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </section>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="w-full md:w-80 flex-shrink-0">
            <article className="bg-white rounded-2xl shadow-lg sticky top-8 overflow-hidden">
              <figure className="aspect-[4/3] relative">
                <Image
                  src={destination.images[0]}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </figure>
              <section className="p-6">
                <h2 className="text-xl font-bold mb-4">{destination.name} Tour</h2>
                <p className="text-gray-600 mb-4">{destination.duration}</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin className="h-4 w-4 text-primary" /> {destination.location}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Users className="h-4 w-4 text-primary" /> Small group, max 12 people
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Activity className="h-4 w-4 text-primary" /> {destination.physicalRating.level} physical level
                  </li>
                </ul>
                <CustomButton variant="primary" size="lg" href={`/book/${destination.slug}`} className="w-full">
                  Book this tour
                </CustomButton>
              </section>
            </article>
          </aside>
        </section>
      </section>

      {/* Related Tours CTA */}
      <section className="bg-primary/5 py-16">
        <section className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Explore More Destinations</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover our other exciting destinations across Africa and create memories that will last a lifetime.
          </p>
          <CustomButton variant="primary" size="lg" href="/destinations">
            View All Destinations
          </CustomButton>
        </section>
      </section>
    </main>
  );
}