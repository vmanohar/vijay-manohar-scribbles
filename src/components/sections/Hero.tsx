
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="top" className="min-h-[80vh] flex flex-col justify-center items-center pt-10">
      <div className="container-width flex flex-col items-center text-center">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-6 animate-fade-in">
          <img 
            src="/placeholder.svg" 
            alt="Vijay Manohar" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        <h1 className="text-2xl md:text-3xl font-serif mb-3 animate-fade-in">
          Vijay Manohar
        </h1>
        
        <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-lg animate-fade-in">
          Writer, creator, and curious mind exploring the intersections of technology and everyday life.
        </p>
        
        <a 
          href="#about" 
          className="flex items-center justify-center w-8 h-8 rounded-full border animate-fade-in hover:border-primary transition-colors duration-300 mt-8"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
