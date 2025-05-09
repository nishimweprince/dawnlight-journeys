import React from "react";
import { Camera, Coffee, Compass, Users, Star } from "lucide-react";
import { CustomButton } from "../../../src/components/ui/custom-button";
import { notFound } from "next/navigation";

const experiences = [
  {
    slug: "photography",
    title: "Wildlife Photography",
    location: "Serengeti, Tanzania",
    icon: Camera,
    description: "Capture stunning images of Africa's incredible wildlife with expert guidance.",
    details: "Join our expert-led photography safaris and learn how to capture the perfect shot, from golden sunrises to dramatic wildlife encounters. All skill levels welcome!",
    highlights: [
      "Guided by professional wildlife photographers",
      "Access to exclusive locations",
      "Workshops on camera techniques",
      "Small group sizes for personalized attention"
    ],
    bestTime: "June - September",
    recommendedNights: "3-4 Nights to Stay",
    cta: "Reserve",
    activities: [
      { title: "Game Drive", image: null },
      { title: "Photography Workshop", image: null },
      { title: "Sunset Safari", image: null },
      { title: "Bird Watching", image: null },
    ],
    rating: 4.9,
    reviews: 128,
  },
  {
    slug: "cultural",
    title: "Cultural Immersion",
    icon: Users,
    description: "Connect with local communities and experience authentic African traditions.",
    details: "Experience the warmth of African hospitality. Participate in daily life, learn traditional crafts, and enjoy music and dance with local communities.",
    highlights: [
      "Village visits and homestays",
      "Traditional music and dance",
      "Hands-on craft workshops",
      "Cultural exchange activities"
    ],
    cta: "Start Your Cultural Journey",
  },
  {
    slug: "trekking",
    title: "Adventure Trekking",
    icon: Compass,
    description: "Explore breathtaking landscapes on foot with experienced local guides.",
    details: "Trek through mountains, forests, and savannahs. Our treks are tailored to all fitness levels and offer unforgettable wildlife and scenic encounters.",
    highlights: [
      "Mountain and forest treks",
      "Wildlife tracking",
      "Scenic viewpoints",
      "Expert local guides"
    ],
    cta: "Plan Your Trekking Adventure",
  },
  {
    slug: "culinary",
    title: "Culinary Experiences",
    icon: Coffee,
    description: "Taste authentic African cuisine and learn traditional cooking methods.",
    details: "Savor the flavors of Africa! Join cooking classes, market tours, and tasting sessions with local chefs and foodies.",
    highlights: [
      "Cooking classes with local chefs",
      "Market tours",
      "Tasting traditional dishes",
      "Food storytelling sessions"
    ],
    cta: "Book a Culinary Experience",
  },
];

export default function ExperiencePage({ params }: { params: { slug: string } }) {
  const experience = experiences.find((exp) => exp.slug === params.slug);
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
              <p className="text-lg text-white/90 mb-8 drop-shadow">Destination to</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow">{experience.title}</h2>
              <p className="text-white/80 mb-2">{experience.location}</p>
              <section className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">{experience.rating}</span>
                <span className="text-white/70 text-sm">({experience.reviews} reviews)</span>
              </section>
            </header>
            {/* Info Card */}
            <section className="bg-white/90 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center shadow-lg">
              <section className="flex-1 flex flex-col items-center">
                <span className="text-xs text-muted-foreground mb-1">Best Time to Visit</span>
                <span className="font-semibold text-primary">{experience.bestTime}</span>
              </section>
              <section className="flex-1 flex flex-col items-center">
                <span className="text-xs text-muted-foreground mb-1">Recommended</span>
                <span className="font-semibold text-primary">{experience.recommendedNights}</span>
              </section>
              <CustomButton variant="primary" size="lg" href="https://wa.me/250785917385" className="w-full md:w-auto">{experience.cta}</CustomButton>
            </section>
            {/* Destination Nav */}
            <nav className="mt-8 flex gap-4 justify-center">
              <button className="bg-white/70 rounded-lg px-4 py-2 text-sm font-medium text-primary shadow hover:bg-primary/10 transition">Pattaya, Thailand</button>
              <button className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium shadow">{experience.location}</button>
              <button className="bg-white/70 rounded-lg px-4 py-2 text-sm font-medium text-primary shadow hover:bg-primary/10 transition">Santorini, Greece</button>
            </nav>
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
          {/* Activities */}
          <section>
            <h4 className="text-base font-semibold mb-3 text-primary">Recommended Activities for this Journey</h4>
            <ul className="flex gap-4 overflow-x-auto pb-2">
              {(experience.activities ?? []).map((act, i) => (
                <li key={i} className="min-w-[140px] max-w-[160px] bg-muted rounded-xl shadow flex flex-col items-center p-2">
                  <figure className="w-full h-24 rounded-lg bg-white flex items-center justify-center mb-2">
                    <span className="text-4xl text-muted-foreground">🖼️</span>
                  </figure>
                  <span className="text-sm font-medium text-center text-muted-foreground">{act.title}</span>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </main>
  );
}
