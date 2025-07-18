'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoCall, IoCallSharp, IoChatbox, IoChatboxOutline, IoChevronDown, IoExit } from 'react-icons/io5';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed bottom-6 right-6 z-50" role="navigation" aria-label="Contact options">
      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="mb-4 space-y-2" role="menu">
          {/* WhatsApp */}
          <li role="none">
            <a
              href="https://wa.me/250785917385"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-2 flex items-center justify-center transition-colors group"
              aria-label="Chat on WhatsApp"
              role="menuitem"
            >
              <FaWhatsapp className="w-5 h-10 rounded-full" />
              <span className="absolute right-full mr-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                WhatsApp
              </span>
            </a>
          </li>
          
          {/* Email */}
          <li role="none">
            <a
              href="mailto:info@dawnlightjourneysrwanda.com"
              className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg p-2 flex items-center justify-center transition-colors group"
              aria-label="Send Email"
              role="menuitem"
            >
              <MdEmail className="w-5 h-10 rounded-full" />
              <span className="absolute right-full mr-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Email
              </span>
            </a>
          </li>
        </ul>
      )}
      
      {/* Main Contact Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors`}
        aria-label="Contact Options"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
       {!isOpen ? <IoChatbox className="w-6 h-6" /> : <IoChevronDown className="w-6 h-6" />}
      </button>
    </nav>
  );
} 