
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Toggle } from "@/components/ui/toggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Enhanced dark mode toggle - Always visible */}
      <div 
        className={cn(
          "fixed top-4 right-4 z-50 p-1.5 rounded-full bg-background/80 backdrop-blur-md shadow-md transition-all duration-300",
          theme === 'dark' 
            ? "border border-white/20 shadow-white/10" 
            : "border border-black/10 shadow-black/5"
        )}
      >
        <Toggle
          pressed={theme === 'dark'}
          onPressedChange={toggleTheme}
          aria-label="Toggle dark mode"
          className="relative h-10 w-10 rounded-full border-none data-[state=on]:bg-transparent data-[state=off]:bg-transparent outline-none ring-0"
        >
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {theme === 'dark' ? (
              <Moon className="h-5 w-5 text-highlight-dark absolute transition-all duration-500 rotate-0 scale-100" />
            ) : (
              <Sun className="h-5 w-5 text-amber-500 absolute transition-all duration-500 rotate-0 scale-100" />
            )}

            {/* Hidden icon for transition animation */}
            <Moon className={cn(
              "h-5 w-5 text-highlight-dark absolute transition-all duration-500",
              theme === 'dark' ? "rotate-0 scale-100" : "rotate-90 scale-0 opacity-0"
            )} />
            <Sun className={cn(
              "h-5 w-5 text-amber-500 absolute transition-all duration-500",
              theme === 'light' ? "rotate-0 scale-100" : "-rotate-90 scale-0 opacity-0"
            )} />
          </div>
        </Toggle>
      </div>

      {/* Mobile Nav */}
      <header 
        className={cn(
          "fixed top-0 right-0 z-50 transition-all duration-300 md:w-auto md:left-auto md:hidden",
          isScrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-4"
        )}
      >
        <div className="container-width flex justify-end items-center md:px-4">
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button 
              className="flex flex-col space-y-1.5 p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span className={cn(
                "w-5 h-0.5 bg-foreground transition-transform duration-300",
                isMobileMenuOpen && "translate-y-2 rotate-45"
              )}></span>
              <span className={cn(
                "w-5 h-0.5 bg-foreground transition-opacity duration-300",
                isMobileMenuOpen && "opacity-0"
              )}></span>
              <span className={cn(
                "w-5 h-0.5 bg-foreground transition-transform duration-300",
                isMobileMenuOpen && "-translate-y-2 -rotate-45"
              )}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed top-[60px] left-0 right-0 bg-background/95 backdrop-blur-md transition-all duration-300 overflow-hidden border-b",
            isMobileMenuOpen ? "max-h-screen py-6" : "max-h-0 py-0 border-none"
          )}
        >
          <nav className="container-width flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-base py-2 underline-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#writing" 
              className="text-base py-2 underline-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Writing
            </a>
            <Link 
              to="/quotes" 
              className="text-base py-2 underline-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Quotes
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
