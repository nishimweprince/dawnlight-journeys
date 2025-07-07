'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  ChevronDown,
  MapPin,
  Clock,
  Star,
  Send,
  Users,
  Calendar,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { CustomButton } from '../../../src/components/ui/custom-button';
import { Button } from '@/components/ui/button';
import type { SafariPackage } from '../../../src/constants/safaris';

interface SafariClientProps {
  safari: SafariPackage;
}

export default function SafariClient({ safari }: SafariClientProps) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === (safari?.images?.length || 0) - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? (safari?.images?.length || 0) - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (safari?.images && safari.images.length > 1) {
      const interval = setInterval(nextImage, 5000);
      return () => clearInterval(interval);
    }
  }, [safari?.images]);

  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={safari.image}
            alt={safari.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-end pb-16">
          <div className="text-white max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">{safari.location}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              {safari.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl opacity-90">
              {safari.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <Clock className="h-4 w-4" />
                <span>{safari.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <Users className="h-4 w-4" />
                <span>{safari.groupSize}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <Star className="h-4 w-4" />
                <span>{safari.difficulty}</span>
              </div>
            </div>
            <CustomButton 
              variant="primary" 
              size="lg" 
              href="https://wa.me/250785917385"
              className="bg-primary hover:bg-primary/90"
            >
              <Send className="h-4 w-4 mr-2" />
              Book This Safari
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-4 py-16 space-y-16">
        {/* Safari Overview */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Safari Overview</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {safari.description}
            </p>
            
            {/* Quick Info */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted rounded-2xl p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Best Time to Visit
                </h3>
                <p className="text-muted-foreground">{safari.bestTime}</p>
              </div>
              <div className="bg-muted rounded-2xl p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Group Size
                </h3>
                <p className="text-muted-foreground">{safari.groupSize}</p>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold mb-4">Book This Safari</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-semibold">{safari.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Group Size:</span>
                  <span className="font-semibold">{safari.groupSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Difficulty:</span>
                  <span className="font-semibold">{safari.difficulty}</span>
                </div>
              </div>
              <CustomButton 
                variant="primary" 
                size="lg" 
                href="https://wa.me/250785917385"
                className="w-full"
              >
                <Send className="h-4 w-4 mr-2" />
                Get Quote
              </CustomButton>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Contact us for custom pricing and availability
              </p>
            </div>
          </div>
        </div>

        {/* Itinerary */}
        {safari.itinerary && safari.itinerary.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Safari Itinerary</h2>
            <div className="space-y-6">
              {safari.itinerary.map((day, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-primary">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {day.day}
                    </div>
                    <h3 className="text-xl font-bold">{day.title}</h3>
                  </div>
                  <p className="text-muted-foreground ml-14 leading-relaxed">{day.details}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Inclusions & Exclusions */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-green-800 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              What's Included
            </h3>
            <ul className="space-y-3">
              {safari.inclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-green-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-red-800 flex items-center gap-2">
              <XCircle className="h-5 w-5" />
              What's Not Included
            </h3>
            <ul className="space-y-3">
              {safari.exclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-red-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQs */}
        {safari.faqs && safari.faqs.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {safari.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Safari Adventure?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us to customize this safari package or get more information about availability and pricing.
          </p>
          <CustomButton variant="primary" size="lg" href="https://wa.me/250785917385">
            <Send className="h-4 w-4 mr-2" />
            Contact Us Now
          </CustomButton>
        </div>
      </section>
    </main>
  );
}
