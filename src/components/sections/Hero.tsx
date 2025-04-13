
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="top" className="min-h-[80vh] flex flex-col justify-center items-center pt-10">
      <div className="container-width flex flex-col items-center text-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-4 animate-fade-in">
          <img 
            src="/placeholder.svg" 
            alt="Vijay Manohar" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        <h1 className="text-xl md:text-2xl font-serif mb-2 animate-fade-in">
          Vijay Manohar
        </h1>
        
        <p className="text-sm md:text-base text-muted-foreground mb-3 max-w-md animate-fade-in">
          Writer, creator, and curious mind exploring the intersections of technology and everyday life.
        </p>
        
        <a 
          href="#about" 
          className="flex items-center justify-center w-7 h-7 rounded-full border animate-fade-in hover:border-primary transition-colors duration-300 mt-6"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
