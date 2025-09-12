'use client';

import { Facebook, Instagram, X, Youtube } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { sendNewsletterEmail } from '@/lib/email';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      await sendNewsletterEmail({ email });
      setSubmitMessage('Successfully subscribed to our newsletter!');
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitMessage('Failed to subscribe. Please check your configuration and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer className="py-12 border-t">
      <main className="container">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <article>
            <header className="flex items-center gap-2 mb-4">
              <img
                src="https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/dawnlight-journeys-logo_igdyc1"
                alt="Logo"
                className="h-8 w-8"
              />
              <span className="font-bold text-xl">Dawnlight Journeys</span>
            </header>
            <p className="text-muted-foreground mb-4">
              Unforgettable Dawnlight Journeys in Rwanda and Uganda. Experience
              the magic of Africa.
            </p>
            <nav className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </nav>
          </article>

          <nav>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/destinations"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/safaris"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Safaris
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav>
            <h3 className="font-bold text-lg mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/destinations/rwanda"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Rwanda
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/uganda"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Uganda
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/volcanoes-national-park"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Volcanoes National Park
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/bwindi-impenetrable-forest"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Bwindi Impenetrable Forest
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/queen-elizabeth-national-park"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Queen Elizabeth National Park
                </Link>
              </li>
            </ul>
          </nav>

          <section>
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for travel tips and exclusive offers.
            </p>
            {submitMessage && (
              <div className={`mb-4 p-2 rounded-md text-xs ${
                submitMessage.includes('successfully') || submitMessage.includes('Success')
                  ? 'bg-green-100 text-green-800 border border-green-200'
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {submitMessage}
              </div>
            )}
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </section>
        </section>

        <footer className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Dawnlight Journeys. All rights
            reserved.
          </p>
          <nav className="flex space-x-6">
            <a
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/cookie-policy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Policy
            </a>
          </nav>
        </footer>
      </main>
    </footer>
  );
}
