'use client';

import React, { useRef } from 'react';
import logo from './assets/logo.png';
import solarBg from './assets/logo1.jpg';

export default function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Full Background */}
      <div
        className="min-h-screen bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${solarBg})`,
        }}
      >
        {/* Navbar */}
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <img src={logo} alt="BPV Logo" className="h-10 w-10 object-contain" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-900">BPV</span>
                  <span className="text-xs text-gray-600 font-medium">Solar Energy Solutions</span>
                </div>
              </div>

              {/* Nav Buttons */}
              <div className="hidden md:flex items-center space-x-8">
                {[
                  { name: 'Home', ref: homeRef },
                  { name: 'About', ref: aboutRef },
                  { name: 'Services', ref: contactRef },
                  { name: 'Contact', ref: contactRef },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => item.ref && scrollTo(item.ref)}
                    className="text-gray-700 hover:text-green-600 font-medium text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ))}
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium text-sm transition-colors duration-200">
                  Get Started
                </button>
              </div>

              {/* Mobile Menu Icon */}
              <button className="md:hidden text-gray-700">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Home Section - Coming Soon */}
        <section ref={homeRef} className="min-h-screen flex items-center justify-center px-6 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight animate-pulse">
              Coming Soon
            </h1>
        
          
            
         
          </div>
        </section>
      </div>
    </>
  );
}