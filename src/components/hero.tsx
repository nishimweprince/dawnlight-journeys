'use client';

import React, { useState, useEffect } from 'react';
import { CustomButton } from './ui/custom-button';

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
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            style={{ minHeight: '100vh', minWidth: '100vw' }}
          />
        ))}
        {/* Enhanced luminance overlay with gradient */}
        <figcaption className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </figure>

      {/* Hero Content */}
      <main className="container relative z-10 py-16 flex items-center justify-start min-h-screen">
        <header className="max-w-3xl text-white space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Explore Africa's
              <span className="block text-[#D9B166]">Wonders</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-2xl">
              Unforgettable safaris, gorilla trekking, and cultural journeys with
              <span className="font-semibold text-[#D9B166]"> Dawnlight Journeys</span>.
            </p>
          </div>
          <nav aria-label="Hero call to action" className="pt-4">
            <CustomButton variant="primary" size="lg" href="#safaris">
              Get started
            </CustomButton>
          </nav>
        </header>
      </main>
    </section>
  );
}
