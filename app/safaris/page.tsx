import { CustomButton } from '../../src/components/ui/custom-button';
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { safariPackages } from '../../src/constants/safaris';

const SafariFAQ = ({ faqs }: { faqs: { question: string; answer: string }[] }) => (
  <section className="mt-6">
    <h4 className="text-xl font-bold mb-4 text-primary">FAQs</h4>
    <ul className="space-y-3">
      {faqs.map((faq, idx) => (
        <li key={idx} className="rounded-xl bg-white shadow p-4 transition hover:shadow-lg">
          <details className="group">
            <summary className="flex items-center cursor-pointer font-medium text-gray-800 group-open:text-primary transition-colors">
              <ChevronDown className="h-5 w-5 mr-2 group-open:rotate-180 transition-transform duration-300 text-primary" />
              {faq.question}
            </summary>
            <p className="mt-2 text-muted-foreground text-sm pl-7 animate-fade-in">
              {faq.answer}
            </p>
          </details>
        </li>
      ))}
    </ul>
  </section>
);

export default function SafarisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center mb-8 sm:mb-12 overflow-hidden">
        <img
          src="/assets/safaris/gorilla-trekking.jpg"
          alt="Safari Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <section className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <section className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 md:mb-8 drop-shadow-lg">Safari Adventures</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto drop-shadow">
            Discover Africa's most breathtaking wildlife experiences and create memories that last a lifetime.
          </p>
        </section>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 mb-6 sm:mb-8">
        <article className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">Our Safari Packages</h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            At Dawnlight Journeys, we curate exceptional safari experiences that combine adventure, wildlife encounters, and cultural immersion. Our carefully designed packages take you through Uganda and Rwanda's most spectacular landscapes and wildlife reserves.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            From tracking mountain gorillas in their natural habitat to witnessing the Big Five on thrilling game drives, each safari is crafted to provide an unforgettable journey. Our expert guides ensure your safety while maximizing wildlife viewing opportunities.
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            Whether you're seeking a short wildlife excursion or an extended adventure, our diverse range of packages caters to all preferences and durations. Each safari includes comfortable accommodations, experienced guides, and all necessary permits.
          </p>
        </article>
      </section>

      {/* Safari Cards */}
      <section className="container mx-auto px-4 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {safariPackages.map((safari) => (
            <article
              key={safari.id}
              className="group rounded-2xl overflow-hidden shadow-xl border bg-white hover:scale-[1.02] transition-transform flex flex-col"
            >
              <figure className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={safari.image}
                  alt={safari.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
                  <span className="bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-sm sm:text-[15px] font-semibold shadow">
                    {safari.duration}
                  </span>
                </figcaption>
              </figure>
              <header className="p-4 sm:p-6 pb-0">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 text-primary group-hover:underline line-clamp-2">{safari.title}</h2>
                <p className="text-sm sm:text-[15px] text-muted-foreground mb-1 line-clamp-1">{safari.location}</p>
              </header>
              <section className="p-4 sm:p-6 pt-2 flex-1 flex flex-col">
                <p className="mb-4 flex-1 text-sm sm:text-[15px] text-gray-700 line-clamp-3">{safari.description}</p>
                <CustomButton variant="primary" size="sm" href={safari.url} className="w-full mb-4">
                  View Details
                </CustomButton>
                <SafariFAQ faqs={safari.faqs} />
              </section>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
