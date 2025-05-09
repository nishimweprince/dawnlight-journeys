import { Camera, Coffee, Compass, Users } from "lucide-react";
import { CustomButton } from "../../src/components/ui/custom-button";
import React from "react";

const experiences = [
  {
    id: 1,
    title: "Wildlife Photography",
    icon: Camera,
    description: "Capture stunning images of Africa's incredible wildlife with expert guidance.",
    url: "/experiences/photography",
    highlights: [
      "Guided by professional wildlife photographers",
      "Access to exclusive locations",
      "Workshops on camera techniques"
    ]
  },
  {
    id: 2,
    title: "Cultural Immersion",
    icon: Users,
    description: "Connect with local communities and experience authentic African traditions.",
    url: "/experiences/cultural",
    highlights: [
      "Village visits and homestays",
      "Traditional music and dance",
      "Hands-on craft workshops"
    ]
  },
  {
    id: 3,
    title: "Adventure Trekking",
    icon: Compass,
    description: "Explore breathtaking landscapes on foot with experienced local guides.",
    url: "/experiences/trekking",
    highlights: [
      "Mountain and forest treks",
      "Wildlife tracking",
      "Scenic viewpoints"
    ]
  },
  {
    id: 4,
    title: "Culinary Experiences",
    icon: Coffee,
    description: "Taste authentic African cuisine and learn traditional cooking methods.",
    url: "/experiences/culinary",
    highlights: [
      "Cooking classes with local chefs",
      "Market tours",
      "Tasting traditional dishes"
    ]
  },
];

export default function ExperiencesPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <header className="relative h-72 md:h-96 flex items-center justify-center bg-black/60">
        <section className="relative z-10 text-center text-white w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Unforgettable Experiences</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow">Go beyond the ordinary safari with curated adventures that connect you with the heart of Africa.</p>
        </section>
      </header>

      {/* Experiences Grid */}
      <section className="container py-16 md:py-24">
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <li key={exp.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform">
                <figure className="relative h-40 w-full flex items-center justify-center bg-muted">
                  {/* Placeholder for image */}
                  <span className="text-5xl text-muted-foreground">🖼️</span>
                </figure>
                <section className="p-6 flex-1 flex flex-col">
                  <header className="flex items-center mb-3">
                    <span className="bg-primary/10 text-primary rounded-full p-2 mr-3">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="text-xl font-bold">{exp.title}</h2>
                  </header>
                  <p className="text-muted-foreground mb-4 flex-1">{exp.description}</p>
                  <ul className="mb-4 list-disc list-inside text-sm text-muted-foreground">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <footer className="mt-auto flex flex-col gap-2">
                    <CustomButton variant="primary" size="sm" href={exp.url}>Learn More</CustomButton>
                    <CustomButton variant="outline" size="sm" href="https://wa.me/250785917385">Book Now</CustomButton>
                  </footer>
                </section>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Custom Experience Section */}
      <section className="bg-muted py-16">
        <article className="container grid md:grid-cols-2 gap-10 items-center">
          <section>
            <h2 className="text-3xl font-bold mb-4">Create Your Custom Experience</h2>
            <p className="mb-6 text-lg text-muted-foreground">Looking for something unique? We specialize in creating custom experiences tailored to your interests, timeframe, and budget. Let us help you design your dream African adventure.</p>
            <CustomButton variant="primary" size="lg" href="https://wa.me/250785917385">Contact Us to Customize</CustomButton>
          </section>
          <figure className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-muted">
            {/* Placeholder for image */}
            <span className="text-7xl text-muted-foreground">🖼️</span>
          </figure>
        </article>
      </section>
    </main>
  );
}
