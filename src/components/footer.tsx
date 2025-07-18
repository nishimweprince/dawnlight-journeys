import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
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
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
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
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
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
