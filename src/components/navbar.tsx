'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DropdownMenu } from './ui/dropdown-menu';
import { MobileExpandableSection } from './ui/mobile-expandable-section';
import { safariPackages } from '../constants/safaris';
import { capitalizeString } from '../utils/strings.util';
import type { DropdownItem } from './ui/dropdown-menu';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  const destinationsDropdownItems: DropdownItem[] = [
    {
      id: 1,
      name: 'Rwanda',
      href: '/destinations/rwanda',
      children: safariPackages
        .filter((safari) => safari.destination === 'Rwanda')
        .map((safari) => ({
          id: safari.id,
          name: safari.title
            ?.split(' ')
            .map((word) => capitalizeString(word))
            .join(' '),
          href: safari.url,
        })),
    },
    {
      id: 2,
      name: 'Uganda',
      href: '/destinations/uganda',
      children: safariPackages
        .filter((safari) => safari.destination === 'Uganda')
        .map((safari) => ({
          id: safari.id,
          name: safari.title
            ?.split(' ')
            .map((word) => capitalizeString(word))
            .join(' '),
          href: safari.url,
        })),
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, [isMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const isTransparent = isHomePage && !scrolled;

  /* Nav link styles */
  const navLinkBase =
    'relative font-outfit text-[0.82rem] font-medium tracking-wide transition-colors duration-200 px-1 py-1';
  const navLinkTransparent =
    'text-white/85 hover:text-white after:bg-white';
  const navLinkSolid =
    'text-dj-text/80 hover:text-dj-forest after:bg-dj-gold';
  const navLinkUnderline =
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:transition-[width] after:duration-300 hover:after:w-full";

  return (
    <>
      {/* Gold top accent bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px]"
        style={{ background: 'linear-gradient(90deg, #D4A76A, #D97B2B, #D4A76A)' }}
        aria-hidden="true"
      />

      <header
        ref={mobileMenuRef as React.RefObject<HTMLDivElement>}
        className={`
          fixed top-[2px] left-0 right-0 z-50 w-full
          transition-all duration-300 ease-in-out
          ${scrolled || !isHomePage
            ? 'bg-dj-charcoal/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.35)]'
            : 'bg-transparent'}
        `}
      >
        <div className="container flex h-16 items-center justify-between" style={{ overflow: 'visible' }}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <img
              src="https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/dawnlight-journeys-logo_igdyc1"
              alt="Dawnlight Journeys logo"
              className="h-9 w-9 rounded-full ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className={`font-playfair font-bold text-base tracking-tight transition-colors duration-300 hidden sm:block ${
                isTransparent ? 'text-white' : 'text-white'
              }`}
            >
              Dawnlight Journeys
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" style={{ overflow: 'visible' }}>
            {[
              { href: '/', label: 'Home' },
              { href: '/experiences', label: 'Experiences' },
              { href: '/faq', label: 'FAQ' },
              { href: '/contact', label: 'Contact' },
              { href: '/blog', label: 'Blog' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${navLinkBase} ${isTransparent ? navLinkTransparent : navLinkSolid} ${navLinkUnderline}`}
                style={{ color: isTransparent ? undefined : '#F5F0E8' }}
              >
                {label}
              </Link>
            ))}

            {/* Destinations dropdown */}
            <DropdownMenu
              items={destinationsDropdownItems}
              trigger={
                <button
                  className={`${navLinkBase} flex items-center gap-1 ${
                    isTransparent ? 'text-white/85 hover:text-white' : 'hover:text-white'
                  }`}
                  style={{ color: isTransparent ? undefined : '#F5F0E8' }}
                >
                  Destinations
                  <ChevronDown className="h-3 w-3 opacity-70" aria-hidden="true" />
                </button>
              }
            />

            {/* Plan Trip pill CTA */}
            <Link href="/safaris" className="btn-forest-pill ml-3">
              Plan Trip
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden flex items-center justify-center w-9 h-9 rounded-md transition-colors duration-200 ${
              isTransparent ? 'hover:bg-white/15 text-white' : 'hover:bg-white/10 text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* ── Full-screen mobile overlay ── */}
      <div
        className={`
          fixed inset-0 z-40 bg-dj-charcoal flex flex-col
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        aria-hidden={!isMenuOpen}
      >
        {/* Decorative gold accent top */}
        <div
          className="h-[2px] w-full"
          style={{ background: 'linear-gradient(90deg, #D4A76A, #D97B2B, #D4A76A)' }}
        />

        <div className="flex-1 flex flex-col justify-center px-8 py-16">
          <nav className="space-y-1" role="navigation" aria-label="Mobile navigation">
            {[
              { href: '/', label: 'Home', delay: '0.05s' },
              { href: '/experiences', label: 'Experiences', delay: '0.1s' },
              { href: '/faq', label: 'FAQ', delay: '0.15s' },
              { href: '/contact', label: 'Contact', delay: '0.2s' },
              { href: '/blog', label: 'Blog', delay: '0.25s' },
            ].map(({ href, label, delay }) => (
              <div
                key={href}
                className={`transition-all duration-500 ${
                  isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: isMenuOpen ? delay : '0s' }}
              >
                <Link
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-playfair text-4xl font-bold text-white/80 hover:text-white py-3 border-b border-white/8 transition-colors duration-200 tracking-tight"
                >
                  {label}
                </Link>
              </div>
            ))}

            {/* Destinations expandable */}
            <div
              className={`transition-all duration-500 ${
                isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: isMenuOpen ? '0.3s' : '0s' }}
            >
              <MobileExpandableSection
                title="Destinations"
                href="/destinations"
                items={destinationsDropdownItems}
                onItemClick={() => setIsMenuOpen(false)}
              />
            </div>
          </nav>

          {/* Mobile CTA */}
          <div
            className={`mt-12 transition-all duration-500 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: isMenuOpen ? '0.38s' : '0s' }}
          >
            <Link
              href="/safaris"
              onClick={() => setIsMenuOpen(false)}
              className="btn-ember text-base w-full justify-center"
            >
              Plan Your Safari
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </Link>
          </div>

          {/* Decorative contact mini */}
          <div
            className={`mt-8 transition-all duration-500 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '0.44s' : '0s' }}
          >
            <p className="font-outfit text-xs tracking-[0.14em] uppercase text-white/35 mb-2">
              Get in touch
            </p>
            <a
              href="https://wa.me/250785917385"
              className="font-outfit text-sm text-white/60 hover:text-dj-gold transition-colors"
            >
              +250 785 917 385
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
