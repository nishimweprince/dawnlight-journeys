'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../../lib/utils';
import { DropdownItem } from './dropdown-menu';

interface MobileExpandableSectionProps {
  title: string;
  href: string;
  items: DropdownItem[];
  onItemClick?: () => void;
  className?: string;
}

export const MobileExpandableSection: React.FC<MobileExpandableSectionProps> = ({
  title,
  href,
  items,
  onItemClick,
  className
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleMainLinkClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  const handleSubItemClick = () => {
    setIsExpanded(false);
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Main section header with expand/collapse button */}
      <div className="flex items-center justify-between">
        <Link
          href={href}
          onClick={handleMainLinkClick}
          className={cn(
            // Base styles with flat design principles
            'flex-1 px-3 py-2 text-sm font-medium transition-colors duration-200',
            // Flat design colors and states
            'text-gray-700 hover:text-orange-600 hover:bg-orange-50',
            // Flat design shape and spacing
            'rounded-md',
            // Remove any shadows or 3D effects for flat design
            'border-0 shadow-none'
          )}
        >
          {title}
        </Link>
        
        <button
          onClick={handleToggle}
          className={cn(
            // Base button styling with flat design
            'p-2 rounded-md transition-colors duration-200',
            // Flat design hover states
            'text-gray-500 hover:text-orange-600 hover:bg-orange-50',
            // Focus states for accessibility
            'focus:outline-none focus:text-orange-600 focus:bg-orange-50',
            // Remove any shadows or 3D effects
            'border-0 shadow-none'
          )}
          aria-expanded={isExpanded}
          aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${title} menu`}
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Expandable content */}
      {isExpanded && (
        <div className={cn(
          // Animation and layout
          "mt-2 ml-4 space-y-1 transition-all duration-200 ease-out",
          // Flat design styling
          "border-l-2 border-orange-100 pl-3"
        )}>
          {items.map((item) => (
            item.children && item.children.length > 0 ? (
              <NestedMobileSection
                key={item.id}
                item={item}
                onItemClick={handleSubItemClick}
              />
            ) : (
              <Link
                key={item.id}
                href={item.href}
                onClick={handleSubItemClick}
                className={cn(
                  // Base link styling with flat design
                  "block px-3 py-2 text-sm transition-colors duration-150",
                  // Flat design hover states
                  "text-gray-600 hover:text-orange-600 hover:bg-orange-50",
                  // Focus states for accessibility
                  "focus:outline-none focus:text-orange-600 focus:bg-orange-50",
                  // Flat design shape
                  "rounded-md",
                  // Remove any shadows or 3D effects
                  "border-0 shadow-none"
                )}
              >
                <div className="font-medium">{item.name}</div>
                {item.description && (
                  <div className="text-xs text-gray-500 mt-1">
                    {item.description}
                  </div>
                )}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
};

// Nested mobile section component for handling nested items
interface NestedMobileSectionProps {
  item: DropdownItem;
  onItemClick: () => void;
}

const NestedMobileSection: React.FC<NestedMobileSectionProps> = ({ item, onItemClick }) => {
  const [isNestedExpanded, setIsNestedExpanded] = useState(false);

  const handleNestedToggle = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsNestedExpanded(!isNestedExpanded);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={onItemClick}
          className={cn(
            'flex-1 px-3 py-2 text-sm font-medium transition-colors duration-200',
            'text-gray-700 hover:text-orange-600 hover:bg-orange-50',
            'rounded-md',
            'border-0 shadow-none'
          )}
        >
          {item.name}
        </Link>
        <button
          onClick={handleNestedToggle}
          className={cn(
            'p-2 rounded-md transition-colors duration-200',
            'text-gray-500 hover:text-orange-600 hover:bg-orange-50',
            'focus:outline-none focus:text-orange-600 focus:bg-orange-50',
            'border-0 shadow-none'
          )}
          aria-expanded={isNestedExpanded}
        >
          {isNestedExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>
      {isNestedExpanded && item.children && (
        <div className={cn(
          "mt-2 ml-4 space-y-1 transition-all duration-200 ease-out",
          "border-l-2 border-orange-100 pl-3"
        )}>
          {item.children.map((child) => (
            <Link
              key={child.id}
              href={child.href}
              onClick={onItemClick}
              className={cn(
                "block px-3 py-2 text-sm transition-colors duration-150",
                "text-gray-600 hover:text-orange-600 hover:bg-orange-50",
                "focus:outline-none focus:text-orange-600 focus:bg-orange-50",
                "rounded-md",
                "border-0 shadow-none"
              )}
            >
              <div className="font-medium">{child.name}</div>
              {child.description && (
                <div className="text-xs text-gray-500 mt-1">
                  {child.description}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};