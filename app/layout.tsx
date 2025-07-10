import { Navbar } from '../src/components/navbar';
import { FaWhatsapp } from 'react-icons/fa';
import './globals.css';
import type { Metadata } from 'next';
import { Footer } from '@/src/components/footer';
import Link from 'next/link';
import { safariPackages } from '../src/constants/safaris';
import { experiences } from '../src/constants/experiences';

// Select 3 unique random safari images for SEO
const shuffledSafaris = safariPackages.sort(() => 0.5 - Math.random());
const safariImages = Array.from(
  new Set(shuffledSafaris.map((s) => s.image).filter(Boolean))
).slice(0, 3);
const fallbackImage =
  'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/dawnlight-journeys-logo_igdyc1';
const images =
  safariImages.length > 0
    ? [
        'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/hero_image_itvueq',
        ...safariImages,
      ]
    : [fallbackImage];

// Gather all safari and experience titles
const safariTitles = safariPackages.map((s) => s?.title);
const experienceTitles = experiences.map((e) => e?.title);

/**
 * Metadata definitions for the application.
 *
 * - Uses 3 unique random safari images for SEO/social previews.
 * - Includes Open Graph and Twitter metadata for rich link previews.
 * - Sets favicon and app icons.
 * - Provides author and publisher information.
 * - Sets theme color, manifest, and robots directives.
 * - Aggregates keywords from safari and experience titles for SEO.
 */
export const metadata: Metadata = {
  title: {
    default: 'Dawnlight Journeys',
    template: '%s | Dawnlight Journeys',
  },
  description:
    'Dawnlight Journeys is a premier travel agency specializing in unforgettable, tailor-made safari experiences across Uganda and Rwanda. Explore gorilla trekking, wildlife safaris, cultural tours, and luxury adventures with expert guides and personalized service.',
  icons: {
    icon: fallbackImage,
    shortcut: fallbackImage,
    apple: fallbackImage,
  },
  authors: [
    { name: 'Dawnlight Journeys', url: 'https://dawnlightjourneysrwanda.com' },
    { name: 'Nishimwe Prince', url: 'https://github.com/nishimweprince' },
  ],
  publisher: 'Dawnlight Journeys',
  openGraph: {
    title: 'Dawnlight Journeys',
    description:
      'Unforgettable safaris and adventures in Uganda and Rwanda. Experience gorilla trekking, Big Five game drives, cultural encounters, and luxury travel with Dawnlight Journeys.',
    url: 'https://dawnlightjourneysrwanda.com',
    siteName: 'Dawnlight Journeys',
    images: images.map((url) => ({
      url,
      width: 1200,
      height: 630,
      alt: 'Dawnlight Journeys Safari Experience',
    })),
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dawnlight Journeys',
    description:
      'Unforgettable safaris and adventures in Uganda and Rwanda. Experience gorilla trekking, Big Five game drives, cultural encounters, and luxury travel with Dawnlight Journeys.',
    site: '@dawnlightjourneys',
    creator: '@pnishimwe',
    images,
  },
  themeColor: '#4A6741',
  manifest: '/site.webmanifest',
  applicationName: 'Dawnlight Journeys',
  category: 'Travel',
  generator: 'Next.js',
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
  keywords: [
    ...safariTitles,
    ...experienceTitles,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/dawnlight-journeys-logo_igdyc1"
        sizes="any"
      />
      <body>
        <Navbar />
        <main className="flex min-h-screen flex-col">{children}</main>
        <a
          href="https://wa.me/250785917385"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
        <Footer />
        <Link
          href="/contact"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
        >
          Contact Us
        </Link>
      </body>
    </html>
  );
}
