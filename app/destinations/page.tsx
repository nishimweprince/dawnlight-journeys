import { CustomButton } from '../../src/components/ui/custom-button';
import React from 'react';
import Image from 'next/image';
const destinations = [
  {
    id: 1,
    name: 'Rwanda',
    image: '/assets/destinations/rwanda-tourism.jpg',
    description:
      'The land of a thousand hills, home to mountain gorillas and stunning landscapes.',
    url: '/destinations/rwanda',
  },
  {
    id: 2,
    name: 'Uganda',
    image: '/assets/destinations/uganda-tourism.jpg',
    description:
      'The pearl of Africa with diverse wildlife, including gorillas, chimpanzees, and the Big Five.',
    url: '/destinations/uganda',
  },
];

export default function DestinationsPage() {
  return (
    <main className="min-h-screen flex flex-col gap-16 bg-gradient-to-b from-orange-50 to-white pb-16">
      {/* Hero Section */}
      <header className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden px-4 md:px-8 lg:px-16 py-8 md:py-16 lg:py-20">
        <img
          src="/assets/destinations/rwanda-tourism.jpg"
          alt="Destinations Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <section className="py-16 absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <section className="relative py-12 px-6 z-10 text-center text-white max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">Our Destinations</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow px-4 mb-0">
            Explore the breathtaking landscapes and wildlife of Rwanda and Uganda, home to some of Africa's most incredible natural wonders.
          </p>
        </section>
      </header>

      {/* Destinations Cards */}
      <section id="destinations" className="container mx-auto">
        <section className="grid md:grid-cols-2 gap-10 justify-between">
          {destinations.map((destination) => (
            <figure key={destination.id} className="group relative overflow-hidden rounded-xl">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                <p className="text-white/90 mb-4">
                  {destination.description}
                </p>
                <CustomButton variant="primary" size="sm" href={destination.url}>
                  Discover {destination.name}
                </CustomButton>
              </figcaption>
            </figure>
          ))}
        </section>
      </section>
    </main>
  );
} 