'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useIsMobile } from '../../../hooks/use-mobile';

export interface DropdownItem {
  id: number;
  name: string;
  href: string;
  description?: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  trigger: React.ReactNode;
  className?: string;
  dropdownClassName?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ 
  items, 
  trigger,
  className,
  dropdownClassName
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Handle mouse enter with slight delay for better UX (desktop only)
  const handleMouseEnter = () => {
    if (isMobile) return; // Disable hover on mobile
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
    // Small delay for fade-in animation
    setTimeout(() => setIsVisible(true), 10);
  };

  // Handle mouse leave with delay to prevent flickering (desktop only)
  const handleMouseLeave = () => {
    if (isMobile) return; // Disable hover on mobile
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      // Wait for fade-out animation before hiding
      setTimeout(() => setIsOpen(false), 150);
    }, 100);
  };

  // Handle tap/click for mobile and desktop
  const handleTriggerClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  // Open dropdown
  const openDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  // Close dropdown
  const closeDropdown = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 150);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      closeDropdown();
    }
  };

  // Handle outside click to close dropdown (mobile)
  useEffect(() => {
    if (!isMobile || !isOpen) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
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
  }, [isMobile, isOpen]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav
      ref={containerRef}
      className={cn("relative", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        onClick={isMobile ? handleTriggerClick : undefined}
        className="w-full text-left bg-transparent border-0 p-0 m-0"
        tabIndex={0}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {trigger}
      </button>
      
      {isOpen && (
        <menu
          ref={dropdownRef}
          className={cn(
            // Base positioning and layout - responsive for mobile
            isMobile 
              ? "fixed inset-x-4 top-20 z-50" // Full width on mobile with margins
              : "absolute top-full left-0 mt-1 w-72 z-50", // Standard dropdown on desktop
            // Flat design styling
            "bg-white border border-gray-200 rounded-md shadow-lg",
            // Animation classes
            "transition-all duration-200 ease-out",
            // Conditional visibility for smooth animations
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-1",
            dropdownClassName
          )}
          // Prevent dropdown from closing when hovering over it
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }}
          role="menu"
        >
          {/* Mobile close button */}
          {isMobile && (
            <header className="flex justify-between items-center px-4 py-2 border-b border-gray-100">
              <span className="text-sm font-medium text-gray-700">Menu</span>
              <button
                onClick={closeDropdown}
                className={cn(
                  "p-1 rounded-md transition-colors duration-200",
                  "text-gray-500 hover:text-primary hover:bg-primary/10",
                  "focus:outline-none focus:text-primary focus:bg-primary/10"
                )}
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </header>
          )}
          
          <ul className="py-2 max-h-[80vh] overflow-y-auto" role="none">
            {items.map((item, index) => (
              <li key={item.id} role="none">
                <Link
                  href={item.href}
                  className={cn(
                    // Base link styling with flat design
                    "block px-4 py-3 text-sm transition-colors duration-150",
                    // Flat design hover states
                    "text-gray-700 hover:text-primary hover:bg-primary/10",
                    // Focus states for accessibility
                    "focus:outline-none focus:text-primary focus:bg-primary/10",
                    // Remove any shadows or 3D effects
                    "border-0 shadow-none"
                  )}
                  onClick={() => {
                    setIsVisible(false);
                    setTimeout(() => setIsOpen(false), 150);
                  }}
                  // Keyboard navigation support
                  tabIndex={isVisible ? 0 : -1}
                  role="menuitem"
                >
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </menu>
      )}
    </nav>
  );
};