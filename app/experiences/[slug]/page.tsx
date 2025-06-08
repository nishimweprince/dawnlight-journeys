import React from "react";
import { Camera, Coffee, Compass, Users, Star } from "lucide-react";
import { CustomButton } from "../../../src/components/ui/custom-button";
import { notFound } from "next/navigation";
import { experiences } from "../../../src/constants/experiences";

export default function ExperiencePage({ params }: { params: { slug: string } }) {
  const experience = experiences.find((exp) => exp.url.split('/').pop() === params.slug);
  if (!experience) return notFound();
  const Icon = experience.icon;

  return (
    <main className="bg-[#e6efec] min-h-screen py-8">
      <section className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white flex flex-col md:flex-row">
        {/* Left: Hero & Info */}
        <section className="md:w-1/2 relative flex flex-col justify-between min-h-[600px] bg-black/60">
          {/* Hero Image Placeholder */}
          <figure className="absolute inset-0 w-full h-full object-cover z-0">
            <span className="flex items-center justify-center w-full h-full text-[120px] text-white/40 bg-gradient-to-b from-black/60 to-black/30">🖼️</span>
          </figure>
          {/* Overlayed Content */}
          <section className="relative z-10 flex flex-col h-full justify-between p-8 md:p-12">
            <header className="mb-8">
              <span className="uppercase text-sm tracking-widest text-white/80 font-semibold">travel.</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-2 drop-shadow">Experience A Wonderful Vacation You Have Wished For.</h1>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow">{experience.title}</h2>
            </header>
            {/* Info Card */}
            <section className="bg-white/90 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center shadow-lg">
              <section className="flex-1 flex flex-col items-center">
                <span className="text-xs text-muted-foreground mb-1">Best Time to Visit</span>
                <span className="font-semibold text-primary">{experience.bestTime}</span>
              </section>
              <section className="flex-1 flex flex-col items-center">
                <span className="text-xs text-muted-foreground mb-1">Duration</span>
                <span className="font-semibold text-primary">{experience.duration}</span>
              </section>
              <CustomButton variant="primary" size="lg" href="https://wa.me/250785917385" className="w-full md:w-auto">Contact Us</CustomButton>
            </section>
          </section>
        </section>
        {/* Right: Map & Activities */}
        <section className="md:w-1/2 bg-white flex flex-col p-8 md:p-12 gap-8">
          {/* Map Placeholder */}
          <section>
            <header className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-primary">Journey Map</h3>
              <nav className="flex gap-6 text-muted-foreground text-sm">
                <a href="#" className="hover:text-primary">Destinations</a>
                <a href="#" className="hover:text-primary">Services</a>
                <a href="#" className="hover:text-primary">Blog</a>
              </nav>
            </header>
            <figure className="w-full h-56 rounded-xl bg-muted flex items-center justify-center mb-4">
              <span className="text-6xl text-muted-foreground">🗺️</span>
            </figure>
          </section>
          {/* Activities (using highlights as fallback) */}
          <section>
            <h4 className="text-base font-semibold mb-3 text-primary">Highlights for this Experience</h4>
            <ul className="flex gap-4 overflow-x-auto pb-2">
              {(experience.highlights ?? []).map((highlight, i) => (
                <li key={i} className="min-w-[140px] max-w-[160px] bg-muted rounded-xl shadow flex flex-col items-center p-2">
                  <figure className="w-full h-24 rounded-lg bg-white flex items-center justify-center mb-2">
                    <span className="text-4xl text-muted-foreground">🖼️</span>
                  </figure>
                  <span className="text-sm font-medium text-center text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </main>
  );
}
