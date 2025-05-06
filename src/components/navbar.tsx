"use client"

import React from "react"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { CustomButton } from "./ui/custom-button"

const safarisDropdown = [
  { label: "Classic Safari", href: "#classic-safari" },
  { label: "Luxury Safari", href: "#luxury-safari" },
  { label: "Family Safari", href: "#family-safari" },
]

const experiencesDropdown = [
  { label: "Gorilla Trekking", href: "#gorilla-trekking" },
  { label: "Hot Air Balloon", href: "#hot-air-balloon" },
  { label: "Cultural Tours", href: "#cultural-tours" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleDropdown = (name: string | null) => setOpenDropdown(name)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b shadow-lg rounded-b-xl transition-all">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo area */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="Logo"
            className="h-10 w-10 rounded-full shadow"
          />
          <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-amber-600 to-orange-400 bg-clip-text text-transparent">
            Dawnlight Journeys
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#destinations" className="text-base font-medium px-3 py-2 rounded transition-colors hover:bg-orange-50 hover:text-orange-800">
            Destinations
          </a>

          {/* Safaris Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdown("safaris")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <button
              className="text-base font-medium px-3 py-2 rounded flex items-center gap-1 transition-colors hover:bg-orange-50 hover:text-orange-800"
              aria-haspopup="true"
              aria-expanded={openDropdown === "safaris"}
              tabIndex={0}
              type="button"
            >
              Safaris <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "safaris" && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                {safarisDropdown.map((item) => (
                  <a key={item.label} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Experiences Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdown("experiences")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <button
              className="text-base font-medium px-3 py-2 rounded flex items-center gap-1 transition-colors hover:bg-orange-50 hover:text-orange-800"
              aria-haspopup="true"
              aria-expanded={openDropdown === "experiences"}
              tabIndex={0}
              type="button"
            >
              Experiences <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "experiences" && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                {experiencesDropdown.map((item) => (
                  <a key={item.label} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#affiliates" className="text-base font-medium px-3 py-2 rounded transition-colors hover:bg-orange-50 hover:text-orange-800">
            Affiliates
          </a>
          <a href="#contact" className="text-base font-medium px-3 py-2 rounded transition-colors hover:bg-orange-50 hover:text-orange-800">
            Contact
          </a>
          <a href="/blog" className="text-base font-medium px-3 py-2 rounded transition-colors hover:bg-orange-50 hover:text-orange-800">
            Blog
          </a>
          <CustomButton variant="primary" size="sm" href="https://wa.me/1234567890" className="ml-2">
            WhatsApp Us
          </CustomButton>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 pb-6 border-t bg-white/95 rounded-b-xl shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a href="#destinations" className="text-base font-medium px-3 py-2 rounded transition-colors hover:bg-orange-50 hover:text-orange-800" onClick={() => setIsMenuOpen(false)}>
              Destinations
            </a>
            {/* Safaris Dropdown (mobile) */}
            <div>
              <span className="text-base font-semibold px-3 py-2">Safaris</span>
              <div className="ml-4 flex flex-col space-y-2">
                {safarisDropdown.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            {/* Experiences Dropdown (mobile) */}
            <div>
              <span className="text-base font-semibold px-3 py-2">Experiences</span>
              <div className="ml-4 flex flex-col space-y-2">
                {experiencesDropdown.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <a href="#affiliates" className="text-base font-medium px-3 py-2 rounded transition-colors hover:bg-orange-50 hover:text-orange-800" onClick={() => setIsMenuOpen(false)}>
              Affiliates
            </a>
            <a href="#contact" className="text-base font-medium px-3 py-2 rounded transition-colors hover:bg-orange-50 hover:text-orange-800" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <a href="/blog" className="text-base font-medium px-3 py-2 rounded transition-colors hover:bg-orange-50 hover:text-orange-800" onClick={() => setIsMenuOpen(false)}>
              Blog
            </a>
            <CustomButton
              variant="primary"
              size="sm"
              href="https://wa.me/1234567890"
              className="w-full mt-2"
            >
              WhatsApp Us
            </CustomButton>
          </nav>
        </div>
      )}
    </header>
  )
}
