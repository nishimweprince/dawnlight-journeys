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
  const [desktopAlign, setDesktopAlign] = useState<'left' | 'right'>('left');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLMenuElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 150);
    }, 100);
  };

  const handleTriggerClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  const closeDropdown = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 150);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) closeDropdown();
  };

  useEffect(() => {
    if (!isOpen || isMobile || !dropdownRef.current || !containerRef.current) return;

    const setBestAlignment = () => {
      const triggerRect = containerRef.current?.getBoundingClientRect();
      const dropdownRect = dropdownRef.current?.getBoundingClientRect();
      if (!triggerRect || !dropdownRect) return;

      const viewportPadding = 12;
      const wouldOverflowRight = triggerRect.left + dropdownRect.width > window.innerWidth - viewportPadding;
      setDesktopAlign(wouldOverflowRight ? 'right' : 'left');
    };

    setBestAlignment();
    window.addEventListener('resize', setBestAlignment);
    return () => window.removeEventListener('resize', setBestAlignment);
  }, [isOpen, isMobile]);

  useEffect(() => {
    if (!isMobile || !isOpen) return;
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isMobile, isOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav
      ref={containerRef}
      className={cn('relative', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      style={{ overflow: 'visible' }}
    >
      <div
        onClick={isMobile ? handleTriggerClick : undefined}
        className={isMobile ? 'cursor-pointer' : ''}
        tabIndex={isMobile ? 0 : -1}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        role={isMobile ? 'button' : undefined}
      >
        {trigger}
      </div>

      {isOpen && (
        <menu
          ref={dropdownRef}
          className={cn(
            isMobile
              ? 'fixed inset-x-4 top-20 z-50'
              : `absolute top-full mt-2 z-[100] w-[min(18rem,calc(100vw-1rem))] ${
                  desktopAlign === 'right' ? 'right-0' : 'left-0'
                }`,
            /* Dark charcoal panel matching the navbar */
            'rounded-xl border',
            'transition-all duration-200 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1',
            dropdownClassName
          )}
          style={{
            background: '#1A1714',
            border: '1px solid rgba(212,167,106,0.18)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(212,167,106,0.06)',
            overflow: 'visible',
          }}
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          role="menu"
        >
          {/* Gold top accent */}
          <div
            className="h-px w-full rounded-t-xl"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(212,167,106,0.5), transparent)' }}
          />

          {/* Mobile close button */}
          {isMobile && (
            <header
              className="flex justify-between items-center px-4 py-3"
              style={{ borderBottom: '1px solid rgba(212,167,106,0.1)' }}
            >
              <span className="font-outfit text-xs tracking-[0.14em] uppercase" style={{ color: '#D4A76A' }}>
                Destinations
              </span>
              <button
                onClick={closeDropdown}
                className="p-1 rounded-md transition-colors duration-200"
                style={{ color: 'rgba(245,240,232,0.4)' }}
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </header>
          )}

          <ul
            className={cn('py-2', isMobile ? 'max-h-[80vh] overflow-y-auto' : 'overflow-visible')}
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
  onItemClick,
}) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const [openToLeft, setOpenToLeft] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const hasChildren = item.children && item.children.length > 0;

  const handleMouseEnter = () => {
    if (hasChildren && !isMobile) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsSubmenuOpen(true);
      setIsSubmenuVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (hasChildren && !isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsSubmenuVisible(false);
        setTimeout(() => setIsSubmenuOpen(false), 150);
      }, 150);
    }
  };

  const handleSubmenuMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleSubmenuMouseLeave = () => {
    if (hasChildren && !isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsSubmenuVisible(false);
        setTimeout(() => setIsSubmenuOpen(false), 150);
      }, 150);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isSubmenuOpen || isMobile || !itemRef.current || !submenuRef.current) return;

    const setBestDirection = () => {
      const itemRect = itemRef.current?.getBoundingClientRect();
      const submenuWidth = submenuRef.current?.getBoundingClientRect().width || 256;
      if (!itemRect) return;

      const viewportPadding = 12;
      const shouldOpenLeft = itemRect.right + submenuWidth + viewportPadding > window.innerWidth;
      setOpenToLeft(shouldOpenLeft);
    };

    setBestDirection();
    window.addEventListener('resize', setBestDirection);
    return () => window.removeEventListener('resize', setBestDirection);
  }, [isSubmenuOpen, isMobile]);

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
          'flex items-center justify-between px-4 py-3 font-outfit text-sm transition-colors duration-150',
          'border-0 shadow-none focus:outline-none'
        )}
        style={{ color: 'rgba(245,240,232,0.75)' }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = '#D4A76A';
          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(212,167,106,0.06)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,240,232,0.75)';
          (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
        }}
        onClick={(e) => {
          if (hasChildren && isMobile) {
            e.preventDefault();
            setIsSubmenuOpen(!isSubmenuOpen);
          } else if (!hasChildren) {
            onItemClick();
          }
        }}
        tabIndex={isVisible ? 0 : -1}
        role="menuitem"
      >
        <span className="font-medium">{item.name}</span>
        {hasChildren && (
          <ChevronRight
            className="h-3.5 w-3.5 flex-shrink-0"
            style={{ color: 'rgba(212,167,106,0.5)' }}
          />
        )}
      </Link>

      {hasChildren && isSubmenuOpen && (
        <div
          ref={submenuRef}
          className={cn(
            isMobile
              ? 'relative left-0 w-full pl-4 mt-1'
              : `absolute top-0 z-[110] w-[min(16rem,calc(100vw-1.25rem))] ${
                  openToLeft ? 'right-full mr-1' : 'left-full ml-1'
                }`,
            'py-2 rounded-xl',
            !isMobile && 'transition-all duration-200 ease-out',
            !isMobile &&
              (isSubmenuVisible
                ? 'opacity-100 translate-x-0'
                : `opacity-0 ${openToLeft ? 'translate-x-2' : '-translate-x-2'}`)
          )}
          style={
            isMobile
              ? { borderLeft: '1px solid rgba(212,167,106,0.15)', marginLeft: '1rem' }
              : {
                  background: '#1A1714',
                  border: '1px solid rgba(212,167,106,0.18)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.55)',
                  overflow: 'visible',
                }
          }
          onMouseEnter={handleSubmenuMouseEnter}
          onMouseLeave={handleSubmenuMouseLeave}
        >
          {/* Gold accent top */}
          {!isMobile && (
            <div
              className="h-px w-full"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(212,167,106,0.4), transparent)' }}
            />
          )}
          <ul
            role="none"
            className={isMobile ? 'space-y-0.5 py-1' : 'max-h-[70vh] overflow-y-auto py-1'}
            style={
              !isMobile
                ? { scrollbarWidth: 'thin', scrollbarColor: 'rgba(212,167,106,0.3) transparent' }
                : undefined
            }
          >
            {item.children!.map((child) => (
              <li key={child.id} role="none">
                <Link
                  href={child.href}
                  className="block px-4 py-2.5 font-outfit text-sm transition-colors duration-150 focus:outline-none"
                  style={{ color: 'rgba(245,240,232,0.65)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#D4A76A';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(212,167,106,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,240,232,0.65)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                  onClick={onItemClick}
                  role="menuitem"
                >
                  <span className="font-medium">{child.name}</span>
                  {child.description && (
                    <p className="text-xs mt-0.5 line-clamp-1" style={{ color: 'rgba(245,240,232,0.35)' }}>
                      {child.description}
                    </p>
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
