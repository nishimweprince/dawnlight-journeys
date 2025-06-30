import { Navbar } from '../src/components/navbar';
import { FaWhatsapp } from 'react-icons/fa';
import './globals.css';
import type { Metadata } from 'next';
import { Footer } from '@/src/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    default: 'Dawnlight Journeys',
    template: '%s | Dawnlight Journeys',
  },
  description:
    'Dawnlight Journeys is a travel agency that specializes in providing unforgettable safari experiences in Uganda and Rwanda.',
  icons: {
    icon: '/assets/logos/dawnlight-journeys-logo.svg',
    shortcut: '/assets/logos/dawnlight-journeys-logo.svg',
    apple: '/assets/logos/dawnlight-journeys-logo.svg',
  },
  authors: [
    { name: 'Dawnlight Journeys', url: 'https://dawnlightjourneys.com' },
    { name: 'Nishimwe Prince', url: 'https://github.com/nishimweprince' },
  ],
  openGraph: {
    title: 'Dawnlight Journeys',
    description: 'Unforgettable safaris and adventures in Uganda and Rwanda.',
    url: 'https://dawnlightjourneys.com',
    siteName: 'Dawnlight Journeys',
    images: [
      {
        url: '/assets/logos/dawnlight-journeys-logo.svg',
        width: 512,
        height: 512,
        alt: 'Dawnlight Journeys Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dawnlight Journeys',
    description: 'Unforgettable safaris and adventures in Uganda and Rwanda.',
    site: '@dawnlightjourneys',
    creator: '@pnishimwe',
    images: ['/assets/logos/dawnlight-journeys-logo.svg'],
  },
  themeColor: '#4A6741',
  manifest: '/site.webmanifest',
  category: 'Travel',
  generator: 'Next.js',
  applicationName: 'Dawnlight Journeys',
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
        href="/assets/logos/dawnlight-journeys-logo.svg"
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
        <Link href="/contact" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors">
          Contact Us
        </Link>
      </body>
    </html>
  );
}
