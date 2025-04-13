
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5"
      )}
    >
      <div className="container-width flex justify-between items-center">
        <div className="flex items-center">
          <a href="#top" className="text-lg font-serif font-medium">Vijay Manohar</a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm link-hover">About</a>
          <a href="#writing" className="text-sm link-hover">Writing</a>
          <a href="#contact" className="text-sm link-hover">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={cn(
            "w-6 h-0.5 bg-foreground transition-transform duration-300",
            isMobileMenuOpen && "translate-y-2 rotate-45"
          )}></span>
          <span className={cn(
            "w-6 h-0.5 bg-foreground transition-opacity duration-300",
            isMobileMenuOpen && "opacity-0"
          )}></span>
          <span className={cn(
            "w-6 h-0.5 bg-foreground transition-transform duration-300",
            isMobileMenuOpen && "-translate-y-2 -rotate-45"
          )}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed top-[60px] left-0 right-0 bg-background/95 backdrop-blur-md transition-all duration-300 overflow-hidden border-b",
          isMobileMenuOpen ? "max-h-screen py-6" : "max-h-0 py-0 border-none"
        )}
      >
        <nav className="container-width flex flex-col space-y-4">
          <a 
            href="#about" 
            className="text-base py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#writing" 
            className="text-base py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Writing
          </a>
          <a 
            href="#contact" 
            className="text-base py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
