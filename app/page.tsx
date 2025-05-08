import { Hero } from '../src/components/hero';
import { Destinations } from '../src/components/destinations';
import { Safaris } from '../src/components/safaris';
import { Experiences } from '../src/components/experiences';
import { Affiliates } from '../src/components/affiliates';
import { FAQ } from '../src/components/faq';
import { Contact } from '../src/components/contact';
import { ThemeProvider } from '../src/components/theme-provider';
import { FaWhatsapp } from 'react-icons/fa';

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
