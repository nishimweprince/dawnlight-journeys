'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FlatNavItem } from './ui/flat-nav-item';
import { FlatButton } from './ui/flat-button';
import { DropdownMenu } from './ui/dropdown-menu';
import { MobileExpandableSection } from './ui/mobile-expandable-section';
import { safariPackages } from '../constants/safaris';
import { capitalizeString } from '../utils/strings.util';
import type { DropdownItem } from './ui/dropdown-menu';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Check if we're on the homepage
  const isHomePage = pathname === '/';

  // Create nested destinations structure with safaris
  const destinationsDropdownItems: DropdownItem[] = [
    {
      id: 1,
      name: 'Rwanda',
      href: '/destinations/rwanda',
      children: safariPackages
        .filter(safari => safari.destination === 'Rwanda')
        .map(safari => ({
          id: safari.id,
          name: safari.title?.split(' ').map(word => capitalizeString(word)).join(' '),
          href: safari.url
        }))
    },
    {
      id: 2,
      name: 'Uganda',
      href: '/destinations/uganda',
      children: safariPackages
        .filter(safari => safari.destination === 'Uganda')
        .map(safari => ({
          id: safari.id,
          name: safari.title?.split(' ').map(word => capitalizeString(word)).join(' '),
          href: safari.url
        }))
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside tap to close mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleMouseDown = (event: MouseEvent) => handleOutsideClick(event);
    const handleTouchStart = (event: TouchEvent) => handleOutsideClick(event);

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('touchstart', handleTouchStart);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [isMenuOpen]);

  // Determine if navbar should be transparent (only on homepage and not scrolled)
  const isTransparent = isHomePage && !scrolled;

  return (
    <header
      className={
        `sticky top-0 z-50 w-full transition-all duration-300 ` +
        (scrolled || !isHomePage
          ? 'bg-white/80 backdrop-blur border-b shadow-lg rounded-b-xl'
          : 'bg-transparent')
      }
      style={{ overflow: 'visible' }}
    >
      <section className="container flex h-16 items-center justify-between" style={{ overflow: 'visible' }}>
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/dawnlight-journeys-logo_igdyc1"
            alt="Logo"
            className="h-12 w-12 rounded-full"
          />
          <span className={`font-extrabold text-lg tracking-tight transition-colors duration-300 ${
            isTransparent ? 'text-white drop-shadow-lg' : 'text-black-800'
          }`}>
            Dawnlight Journeys
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <FlatNavItem
            href="/"
            className={isTransparent ? 'text-white hover:text-white hover:bg-white/20' : ''}
          >
            Home
          </FlatNavItem>
          <DropdownMenu
            items={destinationsDropdownItems}
            trigger={
              <FlatNavItem
                href="/destinations"
                hasDropdown
                className={isTransparent ? 'text-white hover:text-white hover:bg-white/20' : ''}
              >
                Destinations
              </FlatNavItem>
            }
          />
          <FlatNavItem
            href="/experiences"
            className={isTransparent ? 'text-white hover:text-white hover:bg-white/20' : ''}
          >
            Experiences
          </FlatNavItem>
          <FlatNavItem
            href="/faq"
            className={isTransparent ? 'text-white hover:text-white hover:bg-white/20' : ''}
          >
            FAQ
          </FlatNavItem>
          <FlatNavItem
            href="/contact"
            className={isTransparent ? 'text-white hover:text-white hover:bg-white/20' : ''}
          >
            Contact
          </FlatNavItem>
          <FlatNavItem
            href="/blog"
            className={isTransparent ? 'text-white hover:text-white hover:bg-white/20' : ''}
          >
            Blog
          </FlatNavItem>
          <FlatButton
            href="/safaris"
            variant="primary"
            size="default"
            className="ml-4"
          >
            Plan Trip
          </FlatButton>
        </nav>

        <button
          className={`md:hidden p-1.5 rounded-md transition-colors duration-300 ${
            isTransparent ? 'hover:bg-white/20' : 'hover:bg-accent'
          }`}
          onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {isMenuOpen ? (
            <X className={`h-5 w-5 ${isTransparent ? 'text-white' : ''}`} />
          ) : (
            <Menu className={`h-5 w-5 ${isTransparent ? 'text-white' : ''}`} />
          )}
        </button>
      </section>

      {isMenuOpen && (
        <section className="md:hidden container py-3 pb-5 border-t bg-white/95 rounded-b-xl shadow-lg">
          <nav className="flex flex-col space-y-3">
            <FlatNavItem
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </FlatNavItem>
            <MobileExpandableSection
              title="Destinations"
              href="/destinations"
              items={destinationsDropdownItems}
              onItemClick={() => setIsMenuOpen(false)}
            />
            <FlatNavItem
              href="/experiences"
              onClick={() => setIsMenuOpen(false)}
            >
              Experiences
            </FlatNavItem>
            <FlatNavItem
              href="/faq"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </FlatNavItem>
            <FlatNavItem
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </FlatNavItem>
            <FlatNavItem
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </FlatNavItem>
            <FlatButton
              href="/safaris"
              variant="primary"
              size="lg"
              className="mt-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Plan Trip
            </FlatButton>
          </nav>
        </section>
      )}
    </header>
  );
}
