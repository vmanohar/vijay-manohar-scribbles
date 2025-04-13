
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="top" className="h-screen flex flex-col justify-center items-center pt-16">
      <div className="container-width flex flex-col items-center text-center">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-8 animate-fade-in">
          <img 
            src="/placeholder.svg" 
            alt="Vijay Manohar" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-serif mb-4 animate-fade-in">
          Vijay Manohar
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-lg animate-fade-in">
          Writer, creator, and curious mind exploring the intersections of technology and everyday life.
        </p>
        
        <a 
          href="#about" 
          className="flex items-center justify-center w-10 h-10 rounded-full border animate-fade-in hover:border-primary transition-colors duration-300 mt-12"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
