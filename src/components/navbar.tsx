'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { FlatNavItem } from './ui/flat-nav-item';
import { FlatButton } from './ui/flat-button';
import { DropdownMenu } from './ui/dropdown-menu';
import { MobileExpandableSection } from './ui/mobile-expandable-section';
import { getDestinationDropdownItems, getExperienceDropdownItems } from '../lib/dropdown-utils';
import { safariPackages } from '../constants/safaris';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLElement>(null);

  // Get dropdown items
  const destinationItems = getDestinationDropdownItems();
  const experienceItems = getExperienceDropdownItems();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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

  return (
    <header
      className={
        `sticky top-0 z-50 w-full transition-all duration-300 ` +
        (scrolled
          ? 'bg-white/80 backdrop-blur border-b shadow-lg rounded-b-xl'
          : 'bg-white/85')
      }
    >
      <section className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/dawnlight-journeys/dawnlight-journeys-logo_igdyc1"
            alt="Logo"
            className="h-12 w-12 rounded-full"
          />
          <span className="font-extrabold text-lg tracking-tight text-black-800">
            Dawnlight Journeys
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
        <DropdownMenu
            items={safariPackages?.filter(safari => safari.destination === 'Rwanda')?.map(safari => ({
              id: safari.id,
              name: safari.title,
              href: safari.url,
              description: safari.description
            }))}
            trigger={
              <FlatNavItem href="/destinations/rwanda" hasDropdown>
                Rwanda
              </FlatNavItem>
            }
          />
          <DropdownMenu
            items={safariPackages?.filter(safari => safari.destination === 'Uganda')?.map(safari => ({
              id: safari.id,
              name: safari.title,
              href: safari.url,
              description: safari.description
            }))}
            trigger={
              <FlatNavItem href="/destinations/uganda" hasDropdown>
                Uganda
              </FlatNavItem>
            }
          />
          <FlatNavItem href="#experiences">
            Experiences
          </FlatNavItem>
          <FlatNavItem href="#faq">
            FAQ
          </FlatNavItem>
          <FlatNavItem href="#contact">
            Contact
          </FlatNavItem>
          <FlatNavItem href="/blog">
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
            <MobileExpandableSection
              title="Destinations"
              href="/destinations"
              items={destinationItems}
              onItemClick={() => setIsMenuOpen(false)}
            />
            <FlatNavItem 
              href="#experiences"
              onClick={() => setIsMenuOpen(false)}
            >
              Experiences
            </FlatNavItem>
            <FlatNavItem 
              href="#faq"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </FlatNavItem>
            <FlatNavItem 
              href="#contact"
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
