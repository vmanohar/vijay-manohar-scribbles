
import React from 'react';
import { ArrowDown, Mail, Github, Linkedin, Twitter, BookOpen } from 'lucide-react';
import { Strava } from '../ui/CustomIcons';

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
      aria-label={label}
    >
      <div className="p-2 rounded-full bg-secondary/30 hover:bg-primary/10 transition-colors duration-300">
        {icon}
      </div>
    </a>
  );
};

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
        
        <h1 className="text-xl md:text-2xl font-serif mb-2 animate-fade-in tracking-wide">
          Vijay Manohar
        </h1>
        
        <p className="text-sm md:text-base text-muted-foreground mb-3 max-w-md animate-fade-in">
          Writer, creator, and curious mind exploring the intersections of technology and everyday life.
        </p>
        
        {/* Social Links */}
        <div className="flex space-x-3 mt-4 mb-6 animate-fade-in">
          <SocialLink 
            href="mailto:hello@vijaymanohar.com" 
            icon={<Mail className="w-5 h-5" />} 
            label="Email"
          />
          <SocialLink 
            href="https://github.com/vijaymanohar" 
            icon={<Github className="w-5 h-5" />} 
            label="GitHub"
          />
          <SocialLink 
            href="https://linkedin.com/in/vijaymanohar" 
            icon={<Linkedin className="w-5 h-5" />} 
            label="LinkedIn"
          />
          <SocialLink 
            href="https://twitter.com/vijay_manohar" 
            icon={<Twitter className="w-5 h-5" />} 
            label="Twitter"
          />
          <SocialLink 
            href="https://www.strava.com/athletes/vijaymanohar" 
            icon={<Strava className="w-5 h-5" />} 
            label="Strava"
          />
        </div>
        
        <div className="flex space-x-4 mt-6">
          <a 
            href="#about" 
            className="flex items-center justify-center rounded-md px-4 py-2 border text-sm hover:bg-secondary/50 transition-colors duration-300"
          >
            <ArrowDown className="w-3 h-3 mr-2" />
            About me
          </a>
          
          <a 
            href="#writing" 
            className="flex items-center justify-center rounded-md px-4 py-2 border text-sm hover:bg-secondary/50 transition-colors duration-300"
          >
            <BookOpen className="w-3 h-3 mr-2" />
            My writing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
