
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-center items-center pt-16 pb-8">
      <div className="container-width flex flex-col items-center text-center">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-8 animate-fade-in">
          <img 
            src="/placeholder.svg" 
            alt="Vijay Manohar" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 animate-fade-in">
          Vijay Manohar
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl animate-fade-in">
          Writer, creator, and curious mind exploring the intersections of technology and everyday life.
        </p>
        
        <a 
          href="#about" 
          className="flex items-center justify-center w-10 h-10 rounded-full border animate-fade-in hover:border-primary transition-colors duration-300 mt-12"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
