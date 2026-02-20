'use client';

import { Facebook, Instagram, X, Youtube } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { sendNewsletterEmail } from '@/lib/email';

const quickLinks = [
  { href: '/destinations', label: 'Destinations' },
  { href: '/safaris', label: 'Safaris' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const destinationLinks = [
  { href: '/destinations/rwanda', label: 'Rwanda' },
  { href: '/destinations/uganda', label: 'Uganda' },
  { href: '/destinations/volcanoes-national-park', label: 'Volcanoes National Park' },
  { href: '/destinations/bwindi-impenetrable-forest', label: 'Bwindi Forest' },
  { href: '/destinations/queen-elizabeth-national-park', label: 'Queen Elizabeth NP' },
];

const socials = [
  { href: '#', label: 'Facebook', Icon: Facebook },
  { href: '#', label: 'X (Twitter)', Icon: X },
  { href: '#', label: 'Instagram', Icon: Instagram },
  { href: '#', label: 'YouTube', Icon: Youtube },
];

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
      setSubmitMessage('Successfully subscribed!');
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitMessage('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /* Shared link style via inline handlers for warm hover */
  const footerLink =
    'font-outfit text-sm leading-relaxed transition-colors duration-200 cursor-pointer';
  const footerLinkColor = { color: 'rgba(245,240,232,0.45)' };

  return (
    <footer
      className="relative overflow-hidden bg-dj-dark grain-overlay"
      style={{ background: '#0F0E0C' }}
    >
      {/* Gold top accent */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(212,167,106,0.4) 50%, transparent 100%)' }}
        aria-hidden="true"
      />

      <div className="container relative z-10 pt-14 pb-8">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand column */}
          <article>
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <img
                src="https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/dawnlight-journeys-logo_igdyc1"
                alt="Dawnlight Journeys logo"
                className="h-9 w-9 rounded-full ring-1 transition-transform group-hover:scale-105"
                style={{ ringColor: 'rgba(212,167,106,0.3)' } as React.CSSProperties}
              />
              <span className="font-playfair font-bold text-base text-white">
                Dawnlight Journeys
              </span>
            </Link>
            <p className="font-outfit text-sm leading-[1.7] mb-6" style={{ color: 'rgba(245,240,232,0.42)' }}>
              Unforgettable safari experiences in Rwanda and Uganda.
              Where the wild heart of Africa awaits.
            </p>
            <nav className="flex gap-3" aria-label="Social media">
              {socials.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    border: '1px solid rgba(212,167,106,0.2)',
                    color: 'rgba(245,240,232,0.4)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = '#D4A76A';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#D4A76A';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(212,167,106,0.2)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,240,232,0.4)';
                  }}
                  aria-label={label}
                >
                  <Icon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </nav>
          </article>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h3 className="font-outfit font-semibold text-xs tracking-[0.14em] uppercase mb-5" style={{ color: '#D4A76A' }}>
              Quick Links
            </h3>
            <ul className="space-y-3 list-none">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={footerLink}
                    style={footerLinkColor}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#D4A76A'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,240,232,0.45)'; }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Destinations */}
          <nav aria-label="Destinations">
            <h3 className="font-outfit font-semibold text-xs tracking-[0.14em] uppercase mb-5" style={{ color: '#D4A76A' }}>
              Destinations
            </h3>
            <ul className="space-y-3 list-none">
              {destinationLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={footerLink}
                    style={footerLinkColor}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#D4A76A'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,240,232,0.45)'; }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <section>
            <h3 className="font-outfit font-semibold text-xs tracking-[0.14em] uppercase mb-5" style={{ color: '#D4A76A' }}>
              Stay Updated
            </h3>
            <p className="font-outfit text-sm leading-relaxed mb-5" style={{ color: 'rgba(245,240,232,0.42)' }}>
              Travel tips, safari insights, and exclusive offers — direct to your inbox.
            </p>
            {submitMessage && (
              <p className="font-outfit text-xs mb-3" style={{ color: submitMessage.includes('successfully') ? '#4ade80' : '#f87171' }}>
                {submitMessage}
              </p>
            )}
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div style={{ borderBottom: '1.5px solid rgba(212,167,106,0.3)' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-transparent py-2 font-outfit text-sm outline-none"
                  style={{ color: 'rgba(245,240,232,0.85)' }}
                  required
                  disabled={isSubmitting}
                  onFocus={(e) => { (e.currentTarget.parentElement as HTMLDivElement).style.borderBottomColor = '#D97B2B'; }}
                  onBlur={(e) => { (e.currentTarget.parentElement as HTMLDivElement).style.borderBottomColor = 'rgba(212,167,106,0.3)'; }}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-outfit text-xs font-semibold tracking-[0.1em] uppercase transition-colors duration-200 disabled:opacity-50"
                style={{ color: '#D4A76A' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#D97B2B'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#D4A76A'; }}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe →'}
              </button>
            </form>
          </section>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(212,167,106,0.1)' }}
        >
          <p className="font-outfit text-xs" style={{ color: 'rgba(245,240,232,0.3)' }}>
            © {new Date().getFullYear()} Dawnlight Journeys. All rights reserved.
          </p>
          <nav className="flex gap-5" aria-label="Legal">
            {[
              { href: '/privacy-policy', label: 'Privacy Policy' },
              { href: '/terms-of-service', label: 'Terms of Service' },
              { href: '/cookie-policy', label: 'Cookie Policy' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-outfit text-xs transition-colors duration-200"
                style={{ color: 'rgba(245,240,232,0.3)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#D4A76A'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,240,232,0.3)'; }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
