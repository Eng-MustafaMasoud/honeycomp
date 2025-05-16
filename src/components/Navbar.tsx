import React, { useState } from 'react';
import { icons } from 'lucide-react'; // Using Honeycomb as a placeholder for Bee icon

const HoneycombIcon = icons['Honeycomb']; // Accessing the icon from the 'icons' map

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Why Us?', href: '#why-us' },
    { name: 'Our Process', href: '#process' },
    { name: 'Products', href: '#products' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Health Hub', href: '#health-hub' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#hero" className="flex items-center text-2xl font-bold text-honey-dark">
          {HoneycombIcon && <HoneycombIcon className="h-8 w-8 mr-2 text-honey" />}
          Golden Nectar
        </a>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-gray-700 hover:text-honey-dark transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-honey-dark focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-gray-700 hover:bg-honey-light/20 hover:text-honey-dark transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
