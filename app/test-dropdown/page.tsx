'use client';

import React from 'react';
import { DropdownMenu } from '../../src/components/ui/dropdown-menu';
import { FlatNavItem } from '../../src/components/ui/flat-nav-item';
import { getDestinationDropdownItems, getExperienceDropdownItems } from '../../src/lib/dropdown-utils';

export default function TestDropdownPage() {
  const destinationItems = getDestinationDropdownItems();
  const experienceItems = getExperienceDropdownItems();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Dropdown Menu Component Test</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Navigation with Dropdowns</h2>
          <nav className="flex items-center gap-6">
            <DropdownMenu
              items={destinationItems}
              trigger={
                <FlatNavItem href="/destinations" hasDropdown>
                  Destinations
                </FlatNavItem>
              }
            />
            
            <DropdownMenu
              items={experienceItems}
              trigger={
                <FlatNavItem href="/experiences" hasDropdown>
                  Experiences
                </FlatNavItem>
              }
            />
            
            <FlatNavItem href="/safaris">
              Safaris
            </FlatNavItem>
            
            <FlatNavItem href="/contact">
              Contact
            </FlatNavItem>
          </nav>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Component Features</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Hover state management with appropriate delays</li>
            <li>✅ Smooth fade-in/fade-out animations</li>
            <li>✅ Flat design styling with no shadows or 3D effects</li>
            <li>✅ Proper positioning and z-index management</li>
            <li>✅ Keyboard navigation support (Escape key)</li>
            <li>✅ Accessibility features (focus states, tabIndex)</li>
            <li>✅ Click handlers for navigation</li>
            <li>✅ Prevents dropdown flickering</li>
          </ul>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Testing Instructions:</h3>
          <ol className="list-decimal list-inside space-y-1 text-blue-700">
            <li>Hover over "Destinations" or "Experiences" to see dropdown</li>
            <li>Move mouse away to see fade-out animation</li>
            <li>Click on dropdown items to navigate</li>
            <li>Press Escape key when dropdown is open to close it</li>
            <li>Use Tab key to navigate through dropdown items</li>
          </ol>
        </div>
      </div>
    </div>
  );
}