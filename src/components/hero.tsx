'use client';

import React, { useState, useEffect } from 'react';

const heroImages = [
  {
    url: 'https://res.cloudinary.com/nishimweprince/image/upload/v1757926872/dawnlight-journeys/Hero_qnprrr.jpg',
    alt: 'African Safari Wildlife'
  },
  {
    url: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/gorilla-hero_asdfbd',
    alt: 'Mountain Gorilla Experience'
  },
  {
    url: 'https://res.cloudinary.com/nishimweprince/image/upload/v1752333052/dawnlight-journeys/kibale-safari-5_aupvr9.webp',
    alt: 'Uganda Primate Safari'
  }
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[calc(100vh+50px)] top-[-100px] flex items-center overflow-hidden">
      {/* Hero Background Carousel */}
      <figure className="absolute inset-0 z-0 w-full h-full m-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ minHeight: '100vh', minWidth: '100vw' }}
          />
        ))}
        {/* Enhanced luminance overlay with gradient */}
        <figcaption className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </figure>

      {/* Hero Content */}
      <main className="container relative z-10 py-16 flex items-center justify-center min-h-screen">
        <header className="max-w-4xl text-center text-white space-y-6">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight uppercase">
              Unforgettable Mountain Gorilla Trekking Safaris
              <span className="block mt-2">Rwanda & Uganda</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto">
              Experience the magic of Africa with Dawnlight Journeys. Discover gorilla trekking, wildlife safaris, cultural tours, and luxury adventures in Uganda and Rwanda.
            </p>
          </div>
        </header>
      </main>
    </section>
  );
}
