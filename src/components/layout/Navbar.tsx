import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from '@/hooks/useTheme';
import { Link } from 'react-router-dom';
import { Switch } from "@/components/ui/switch";

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
      {/* Regular switch for dark mode toggle - Always visible */}
      <div 
        className={cn(
          "fixed top-4 right-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur-md shadow-md transition-all duration-200",
          theme === 'dark' 
            ? "border border-white/20 shadow-white/10" 
            : "border border-black/10 shadow-black/5"
        )}
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium">
            {theme === 'light' ? 'Light' : 'Dark'}
          </span>
          <Switch
            checked={theme === 'dark'}
            onCheckedChange={toggleTheme}
            aria-label="Toggle dark mode"
          />
        </div>
      </div>

      {/* Mobile Nav */}
      <header 
        className={cn(
          "fixed top-0 right-0 z-50 transition-all duration-200 md:w-auto md:left-auto md:hidden",
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
