
import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between">
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <a href="/" className="text-white text-2xl font-heading">
          Dawnlight journey
        </a>

        <div className={`
          lg:flex items-center space-x-8
          ${isMenuOpen 
            ? 'absolute top-full left-0 w-full bg-black/95 p-6 flex flex-col space-y-4' 
            : 'hidden'
          }
        `}>
          <a href="/about" className="nav-link">About</a>
          <a href="/destinations" className="nav-link">Destinations</a>
          <a href="/journeys" className="nav-link">Journeys</a>
          <a href="/impact" className="nav-link">Impact</a>
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-white">
            <Search size={20} />
          </button>
          <a href="/plan" className="btn-primary hidden sm:block">
            Plan Your Journey
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
