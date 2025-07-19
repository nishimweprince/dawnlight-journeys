import type { Metadata } from 'next';
import { Hero } from '../src/components/hero';
import { Destinations } from '../src/components/destinations';
import { Safaris } from '../src/components/safaris';
import { Experiences } from '../src/components/experiences';
import { Affiliates } from '../src/components/affiliates';
import { FAQ } from '../src/components/faq';
import { Contact } from '../src/components/contact';
import { ThemeProvider } from '../src/components/theme-provider';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Dawnlight Journeys - Unforgettable Safari Adventures in Uganda & Rwanda',
  description: 'Experience the magic of Africa with Dawnlight Journeys. Discover gorilla trekking, wildlife safaris, cultural tours, and luxury adventures in Uganda and Rwanda. Expert guides, personalized service, and unforgettable memories await.',
  keywords: [
    'safari',
    'uganda',
    'rwanda',
    'africa',
    'travel',
    'adventure',
    'wildlife',
    'gorilla trekking',
    'tour',
    'nature',
    'luxury safari',
    'african safari',
    'dawnlight journeys',
    'big five',
    'game drive',
    'cultural tour',
    'bird watching',
    'mountain gorilla',
    'chimpanzee trekking',
    'national park',
    'custom safari',
    'family safari',
    'honeymoon safari',
    'eco-tourism',
    'photography safari',
    'private guide',
    'bespoke travel',
    'luxury lodge',
    'african wildlife',
    'nature reserve',
    'east africa',
    'safari holiday',
    'safari package',
    'safari deals',
    'safari planner',
    'safari booking',
    'safari expert',
    'safari adventure',
    'safari experience',
    'safari destination',
    'safari operator',
    'safari company',
    'safari agency',
    'safari tour',
    'safari trip',
    'safari vacation',
    'safari journey',
    'dawnlight',
    'uganda safari',
    'rwanda safari',
    'east african safari',
    'african adventure',
    'african travel',
    'african tour',
    'african holiday',
    'african nature',
    'african lodge',
    'african wildlife tour',
    'african gorilla',
    'african chimpanzee',
    'african big five',
    'african birding',
    'african culture',
    'african experience',
    'african destination',
    'african operator',
    'african company',
    'african agency',
    'african trip',
    'african vacation',
    'african journey',
  ],
  openGraph: {
    title: 'Dawnlight Journeys - Unforgettable Safari Adventures in Uganda & Rwanda',
    description: 'Experience the magic of Africa with Dawnlight Journeys. Discover gorilla trekking, wildlife safaris, cultural tours, and luxury adventures in Uganda and Rwanda.',
    url: 'https://dawnlightjourneysrwanda.com',
    siteName: 'Dawnlight Journeys',
    images: [
      {
        url: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/gorilla-hero_asdfbd',
        width: 1200,
        height: 630,
        alt: 'Dawnlight Journeys Safari Experience',
      },
      {
        url: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/uganda-primate-experience_abc123',
        width: 1200,
        height: 630,
        alt: 'Uganda Primate Experience',
      },
      {
        url: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/wildlife-safaris_xyz789',
        width: 1200,
        height: 630,
        alt: 'Wildlife Safaris in Africa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dawnlight Journeys - Unforgettable Safari Adventures in Uganda & Rwanda',
    description: 'Experience the magic of Africa with Dawnlight Journeys. Discover gorilla trekking, wildlife safaris, cultural tours, and luxury adventures in Uganda and Rwanda.',
    site: '@dawnlightjourneys',
    creator: '@pnishimwe',
    images: [
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/gorilla-hero_asdfbd',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/uganda-primate-experience_abc123',
      'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/wildlife-safaris_xyz789',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://dawnlightjourneysrwanda.com',
  },
};

export default function Page() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="wildlife-adventures-theme">
      <main className="flex min-h-screen flex-col">
        <section className="flex-1">
          <Hero />
          <Destinations />
          <Safaris />
          <Experiences />
          <Affiliates />
          <FAQ />
          <Contact />
        </section>
        <a
          href="https://wa.me/250785917385"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
      </main>
    </ThemeProvider>
  );
}
