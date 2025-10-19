'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'United States',
    rating: 5,
    text: 'Our gorilla trekking experience with Dawnlight Journeys was absolutely incredible! The guides were knowledgeable, professional, and made sure we had the trip of a lifetime. Highly recommend!',
    image: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/testimonial-1_abc123',
    trip: 'Rwanda Gorilla Trekking'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Singapore',
    rating: 5,
    text: 'From start to finish, Dawnlight Journeys exceeded our expectations. The attention to detail, the accommodations, and the wildlife sightings were all phenomenal. This was truly a once-in-a-lifetime experience.',
    image: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/testimonial-2_def456',
    trip: 'Uganda Wildlife Safari'
  },
  {
    id: 3,
    name: 'Emma Williams',
    location: 'United Kingdom',
    rating: 5,
    text: 'The cultural immersion experiences were the highlight of our trip. We felt welcomed by the local communities and gained a deep appreciation for Rwandan and Ugandan culture. Thank you, Dawnlight Journeys!',
    image: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/testimonial-3_ghi789',
    trip: 'Cultural Safari Experience'
  },
  {
    id: 4,
    name: 'David Martinez',
    location: 'Spain',
    rating: 5,
    text: 'As a photographer, I couldn\'t have asked for a better safari experience. The guides knew exactly where to position us for the best shots, and the wildlife encounters were extraordinary.',
    image: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/testimonial-4_jkl012',
    trip: 'Photography Safari'
  },
  {
    id: 5,
    name: 'Priya Patel',
    location: 'India',
    rating: 5,
    text: 'Impeccable service, stunning landscapes, and unforgettable memories. Dawnlight Journeys organized everything perfectly, allowing us to fully immerse ourselves in the adventure without any worries.',
    image: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/testimonial-5_mno345',
    trip: 'East Africa Adventure'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4 text-foreground">
            What Our Travelers Say
          </h2>
          <hr className="w-24 h-1 bg-primary mx-auto border-0 mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from adventurers who explored Africa with us
          </p>
        </header>

        {/* Featured Testimonial with Auto-rotation */}
        <article className="max-w-5xl mx-auto mb-16 relative">
          {/* Left Navigation Button */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 bg-white hover:bg-primary hover:text-white text-primary p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 bg-white hover:bg-primary hover:text-white text-primary p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Testimonial Content */}
              <div className="md:col-span-3 p-8 md:p-12 relative">
                <Quote className="absolute top-6 left-6 h-16 w-16 text-primary/10" aria-hidden="true" />

                <div className="relative z-10 space-y-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {/* Author Info */}
                  <footer className="pt-4 border-t border-gray-100">
                    <p className="font-bold text-lg text-foreground">{currentTestimonial.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      <p className="text-sm text-muted-foreground">{currentTestimonial.location}</p>
                    </div>
                    <p className="text-sm text-primary font-semibold mt-2 uppercase tracking-wide">{currentTestimonial.trip}</p>
                  </footer>
                </div>
              </div>

              {/* Image Side */}
              <div className="md:col-span-2 relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="h-16 w-16 text-primary" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 py-6 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary w-12'
                      : 'bg-primary/30 w-2 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </article>

        {/* Trust Badges - Redesigned */}
        <aside className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow border border-primary/10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Star className="h-8 w-8 text-primary fill-primary" aria-hidden="true" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Happy Travelers</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow border border-primary/10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Star className="h-8 w-8 text-primary fill-primary" aria-hidden="true" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">4.9/5</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Average Rating</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow border border-primary/10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Star className="h-8 w-8 text-primary fill-primary" aria-hidden="true" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Satisfaction Rate</p>
            </div>
          </div>
        </aside>

        {/* All Testimonials Grid - Cleaner Cards */}
        <article>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">More Reviews</h3>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
            {testimonials.map((testimonial) => (
              <li
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 text-sm leading-relaxed line-clamp-4">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <footer className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3 text-muted-foreground" aria-hidden="true" />
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <p className="text-xs text-primary font-semibold mt-2 uppercase tracking-wide">{testimonial.trip}</p>
                </footer>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
