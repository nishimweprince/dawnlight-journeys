'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useIsMobile } from '../../../hooks/use-mobile';

export interface DropdownItem {
  id: number;
  name: string;
  href: string;
  description?: string;
  children?: DropdownItem[];
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
      style={{ overflow: 'visible' }}
    >
      <div
        onClick={isMobile ? handleTriggerClick : undefined}
        className={isMobile ? "cursor-pointer" : ""}
        tabIndex={isMobile ? 0 : -1}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        role={isMobile ? "button" : undefined}
      >
        {trigger}
      </div>

      {isOpen && (
        <menu
          ref={dropdownRef}
          className={cn(
            // Base positioning and layout - responsive for mobile
            isMobile
              ? "fixed inset-x-4 top-20 z-50" // Full width on mobile with margins
              : "absolute top-full left-0 mt-1 w-72 z-[100]", // Standard dropdown on desktop with high z-index
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
          style={{ overflow: 'visible' }}
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

          <ul
            className={cn(
              "py-2",
              isMobile ? "max-h-[80vh] overflow-y-auto" : "overflow-visible"
            )}
            role="none"
            style={{ overflow: isMobile ? 'auto' : 'visible' }}
          >
            {items.map((item) => (
              <NestedDropdownItem
                key={item.id}
                item={item}
                isVisible={isVisible}
                isMobile={isMobile}
                onItemClick={() => {
                  setIsVisible(false);
                  setTimeout(() => setIsOpen(false), 150);
                }}
              />
            ))}
          </ul>
        </menu>
      )}
    </nav>
  );
};

// Nested dropdown item component
interface NestedDropdownItemProps {
  item: DropdownItem;
  isVisible: boolean;
  isMobile: boolean;
  onItemClick: () => void;
}

const NestedDropdownItem: React.FC<NestedDropdownItemProps> = ({
  item,
  isVisible,
  isMobile,
  onItemClick
}) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const hasChildren = item.children && item.children.length > 0;

  const handleMouseEnter = () => {
    if (hasChildren && !isMobile) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsSubmenuOpen(true);
      setIsSubmenuVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (hasChildren && !isMobile) {
      // Add a small delay before closing to allow mouse to move to submenu
      timeoutRef.current = setTimeout(() => {
        setIsSubmenuVisible(false);
        setTimeout(() => setIsSubmenuOpen(false), 150);
      }, 150);
    }
  };

  const handleSubmenuMouseEnter = () => {
    // Cancel close timeout when mouse enters submenu
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleSubmenuMouseLeave = () => {
    if (hasChildren && !isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsSubmenuVisible(false);
        setTimeout(() => setIsSubmenuOpen(false), 150);
      }, 150);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <li
      ref={itemRef}
      role="none"
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ overflow: 'visible' }}
    >
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
          "border-0 shadow-none",
          // Flex layout for nested items
          hasChildren && "flex items-center justify-between"
        )}
        onClick={(e) => {
          if (hasChildren && isMobile) {
            e.preventDefault();
            setIsSubmenuOpen(!isSubmenuOpen);
          } else if (!hasChildren) {
            onItemClick();
          }
        }}
        // Keyboard navigation support
        tabIndex={isVisible ? 0 : -1}
        role="menuitem"
      >
        <span className="font-medium">{item.name}</span>
        {hasChildren && (
          <ChevronRight className="h-4 w-4 ml-2 flex-shrink-0" />
        )}
      </Link>

      {hasChildren && isSubmenuOpen && (
        <div
          ref={submenuRef}
          className={cn(
            // Base positioning - absolute for desktop, relative for mobile
            isMobile
              ? "relative left-0 w-full pl-4 mt-2"
              : "absolute left-full top-0 ml-1 w-64 z-[110]", // Higher z-index for nesting
            // Styling
            isMobile
              ? "bg-gray-50 border-l-2 border-primary/20 rounded-md"
              : "bg-white border border-gray-200 rounded-md shadow-xl",
            "py-2",
            // Animation classes (desktop only)
            !isMobile && "transition-all duration-200 ease-out",
            !isMobile && (isSubmenuVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-2")
          )}
          onMouseEnter={handleSubmenuMouseEnter}
          onMouseLeave={handleSubmenuMouseLeave}
          style={{ overflow: 'visible' }}
        >
          <ul
            role="none"
            className={cn(
              isMobile ? "space-y-1" : "max-h-[70vh] overflow-y-auto"
            )}
            style={!isMobile ? {
              scrollbarWidth: 'thin',
              scrollbarColor: '#d1d5db #f3f4f6'
            } : undefined}
          >
            {item.children!.map((child) => (
              <li key={child.id} role="none">
                <Link
                  href={child.href}
                  className={cn(
                    "block px-4 py-3 text-sm transition-colors duration-150",
                    "text-gray-700 hover:text-primary hover:bg-primary/10",
                    "focus:outline-none focus:text-primary focus:bg-primary/10",
                    "border-0 shadow-none"
                  )}
                  onClick={onItemClick}
                  role="menuitem"
                >
                  <span className="font-medium">{child.name}</span>
                  {child.description && (
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{child.description}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
