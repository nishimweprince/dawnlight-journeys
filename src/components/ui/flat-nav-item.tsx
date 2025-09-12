import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { handleSmoothScroll } from '../../lib/smooth-scroll';

interface FlatNavItemProps {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

export const FlatNavItem: React.FC<FlatNavItemProps> = ({ 
  href, 
  children, 
  hasDropdown = false,
  isActive = false,
  className,
  onClick
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Try smooth scrolling first
    if (handleSmoothScroll(href, onClick)) {
      e.preventDefault();
      return;
    }
    
    // If not a hash link, call the original onClick
    if (onClick) onClick();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        // Base styles with flat design principles
        'relative px-3 py-2 text-sm font-medium transition-colors duration-200',
        // Flat design colors and states
        isActive 
          ? 'text-primary bg-primary/10' 
          : 'text-gray-700 hover:text-primary hover:bg-primary/10',
        // Flat design shape and spacing
        'rounded-md flex items-center gap-1',
        // Remove any shadows or 3D effects for flat design
        'border-0 shadow-none',
        className
      )}
    >
      {children}
      {hasDropdown && (
        <ChevronDown className="h-3 w-3 transition-transform duration-200" />
      )}
    </Link>
  );
};