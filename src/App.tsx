import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Destinations } from './components/destinations';
import { Safaris } from './components/safaris';
import { Experiences } from './components/experiences';
import { Affiliates } from './components/affiliates';
import { FAQ } from './components/faq';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { ThemeProvider } from './components/theme-provider';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="wildlife-adventures-theme">
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <section className="flex-1">
          <Hero />
          <Destinations />
          <Safaris />
          <Experiences />
          <Affiliates />
          <FAQ />
          <Contact />
        </section>
        <Footer />
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

export default App;
