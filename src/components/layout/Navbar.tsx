
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from '@/hooks/useTheme';
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from 'lucide-react';

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
    <header 
      className={cn(
        "fixed top-0 right-0 z-50 transition-all duration-300 md:w-auto md:left-auto hidden", // Added hidden for desktop
        isScrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-4"
      )}
    >
      <div className="container-width flex justify-end items-center md:px-4">
        {/* Dark mode toggle */}
        <div className="hidden md:flex items-center space-x-2 mr-4">
          <Switch
            id="dark-mode"
            checked={theme === 'dark'}
            onCheckedChange={toggleTheme}
            aria-label="Toggle dark mode"
          />
          {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="dark-mode-mobile"
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
              aria-label="Toggle dark mode"
            />
            {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </div>
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
          "md:hidden fixed top-[60px] left-0 right-0 bg-background/95 backdrop-blur-md transition-all duration-300 overflow-hidden border-b",
          isMobileMenuOpen ? "max-h-screen py-6" : "max-h-0 py-0 border-none"
        )}
      >
        <nav className="container-width flex flex-col space-y-4">
          <a 
            href="#about" 
            className="text-base py-2 link-hover"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#writing" 
            className="text-base py-2 link-hover"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Writing
          </a>
          <a 
            href="#contact" 
            className="text-base py-2 link-hover"
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
