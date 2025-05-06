'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { CustomButton } from './ui/custom-button';
import Link from 'next/link';

const safarisDropdown = [
  { label: 'Classic Safari', href: '#safaris' },
  { label: 'Luxury Safari', href: '#safaris' },
  { label: 'Family Safari', href: '#safaris' },
];

const experiencesDropdown = [
  { label: 'Gorilla Trekking', href: '#trekking' },
  { label: 'Hot Air Balloon', href: '#balloon' },
  { label: 'Cultural Tours', href: '#cultural' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdown = (name: string | null) => setOpenDropdown(name);

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
        {/* Logo area */}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="#destinations"
            className="text-sm font-medium px-2.5 py-1.5 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-800"
          >
            Destinations
          </Link>

          {/* Safaris Dropdown */}
          <section className="relative group">
            <button
              className="text-sm font-medium px-2.5 py-1.5 rounded-md flex items-center gap-1 transition-colors hover:bg-orange-50 hover:text-orange-800"
              aria-haspopup="true"
              aria-expanded={openDropdown === 'safaris'}
              tabIndex={0}
              type="button"
            >
              Safaris <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <menu className="absolute left-0 mt-1.5 w-44 bg-white rounded-md shadow-lg border py-1.5 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {safarisDropdown.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </menu>
          </section>

          {/* Experiences Dropdown */}
          <section className="relative group">
            <button
              className="text-sm font-medium px-2.5 py-1.5 rounded-md flex items-center gap-1 transition-colors hover:bg-orange-50 hover:text-orange-800"
              aria-haspopup="true"
              aria-expanded={openDropdown === 'experiences'}
              tabIndex={0}
              type="button"
            >
              Experiences <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <menu className="absolute left-0 mt-1.5 w-44 bg-white rounded-md shadow-lg border py-1.5 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {experiencesDropdown.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </menu>
          </section>
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1.5 rounded-md hover:bg-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </section>

      {/* Mobile Navigation */}
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
            {/* Safaris Dropdown (mobile) */}
            <section>
              <h2 className="text-sm font-semibold px-3 py-1.5">Safaris</h2>
              <menu className="ml-4 flex flex-col space-y-1.5">
                {safarisDropdown.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </menu>
            </section>
            {/* Experiences Dropdown (mobile) */}
            <section>
              <h2 className="text-sm font-semibold px-3 py-1.5">Experiences</h2>
              <menu className="ml-4 flex flex-col space-y-1.5">
                {experiencesDropdown.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </menu>
            </section>
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
