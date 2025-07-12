import React from 'react';
import { CustomButton } from './ui/custom-button';

export function Hero() {
  return (
    <section className="relative h-[calc(100vh+100px)] top-[-100px] flex items-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img
          src="https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/gorilla-hero_asdfbd"
          alt="African Safari"
          className="w-full h-full object-cover object-center"
          style={{ minHeight: '100vh', minWidth: '100vw' }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 py-16 flex items-center min-h-screen">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Africa's Wonders
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Unforgettable safaris, gorilla trekking, and cultural journeys with
            Dawnlight Journeys.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <CustomButton variant="primary" size="lg" href="#safaris">
              Start Your Adventure
            </CustomButton>
            <CustomButton variant="outline" size="lg" href="#contact">
              Plan My Trip
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}
