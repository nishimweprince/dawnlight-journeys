'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={
        `sticky top-0 z-50 w-full transition-all duration-300 ` +
        (scrolled
          ? 'bg-white/80 backdrop-blur border-b shadow-lg rounded-b-xl'
          : 'bg-white/75')
      }
    >
      <section className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/assets/logos/dawnlight-journeys-logo.svg"
            alt="Logo"
            className="h-12 w-12 rounded-full"
          />
          <span className="font-extrabold text-lg tracking-tight text-black-800">
            Dawnlight Journeys
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="/destinations"
            className="text-sm font-medium px-2.5 py-1.5 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-800"
          >
            Destinations
          </Link>
          <Link
            href="/safaris"
            className="text-sm font-medium px-2.5 py-1.5 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-800"
          >
            Safaris
          </Link>
          <Link
            href="/experiences"
            className="text-sm font-medium px-2.5 py-1.5 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-800"
          >
            Experiences
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium px-2.5 py-1.5 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-800"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium px-2.5 py-1.5 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-800"
          >
            Blog
          </Link>
        </nav>

        <button
          className="md:hidden p-1.5 rounded-md hover:bg-accent"
          onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </section>

      {isMenuOpen && (
        <section className="md:hidden container py-3 pb-5 border-t bg-white/95 rounded-b-xl shadow-lg">
          <nav className="flex flex-col space-y-3">
            <a
              href="#destinations"
              className="text-sm font-medium px-3 py-1.5 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </a>
            <a
              href="/safaris"
              className="text-sm font-medium px-3 py-1.5 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Safaris
            </a>
            <a
              href="/experiences"
              className="text-sm font-medium px-3 py-1.5 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Experiences
            </a>
            <a
              href="#affiliates"
              className="text-sm font-medium px-3 py-1.5 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Affiliates
            </a>
            <a
              href="#contact"
              className="text-sm font-medium px-3 py-1.5 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="/blog"
              className="text-sm font-medium px-3 py-1.5 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
          </nav>
        </section>
      )}
    </header>
  );
}
