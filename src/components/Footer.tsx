import React from 'react';
import { Facebook, Instagram, Linkedin, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white py-16 pt-80 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-16">
          <a href="#" className="bg-[#333333] p-3 rounded-full hover:bg-[#444444] transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="bg-[#333333] p-3 rounded-full hover:bg-[#444444] transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="bg-[#333333] p-3 rounded-full hover:bg-[#444444] transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="bg-[#333333] p-3 rounded-full hover:bg-[#444444] transition-colors">
            <X size={20} />
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-lg font-medium mb-6">About Dawnlight journey</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Impact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Destinations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Botswana</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Namibia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rwanda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Zambia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Zimbabwe</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Journeys & Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Journeys</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Journey Inspiration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dawnlight journey Store</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-16 bg-[#333333]" />

        {/* Logo */}
        <div className="flex justify-center mb-16">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1469041797191-50ace28483c3"
              alt="Dawnlight journey Logo" 
              className="h-24 mx-auto mb-4 object-cover"
            />
            <p className="text-xs text-gray-400 max-w-xs mx-auto">
              Discover Earth's ultimate, untamed Places
            </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex justify-center space-x-6 text-sm text-gray-400 mb-6">
          <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
        
        {/* Copyright Text */}
        <div className="text-center text-sm text-gray-400">
          Copyright ©2024 Dawnlight journey. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
