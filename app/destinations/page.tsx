import { CustomButton } from '../../src/components/ui/custom-button';
import React from 'react';
import { destinations } from '../../src/constants/destinations';

export default function DestinationsPage() {
  return (
    <main className="min-h-screen flex flex-col gap-16 bg-gradient-to-b from-orange-50 to-white pb-16">
      {/* Hero Section */}
      <header className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/destinations/rwanda-tourism.jpg"
          alt="Destinations Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <section className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <section className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">Our Destinations</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow">
            Explore the breathtaking landscapes and wildlife of Rwanda and Uganda, home to some of Africa's most incredible natural wonders.
          </p>
        </section>
      </header>

      {/* Destinations Cards */}
      <section id="destinations" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col sm:flex-row gap-8 justify-center items-stretch">
          {destinations.map((destination) => (
            <figure key={destination.id} className="flex-1 min-w-0 group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 max-w-xl mx-auto">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 line-clamp-2">{destination.name}</h3>
                <p className="text-white/90 mb-4 text-sm sm:text-base line-clamp-3">
                  {destination.description}
                </p>
                <CustomButton variant="primary" size="sm" href={destination.url} className="w-full sm:w-auto">
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