
import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
      aria-label={label}
    >
      <div className="p-3 rounded-full bg-secondary/30 mb-2">
        {icon}
      </div>
      <span className="text-sm">{label}</span>
    </a>
  );
};

const Contact = () => {
  const { ref: sectionRef, hasIntersected } = useIntersectionObserver();

  return (
    <section id="contact" className="py-16">
      <div className="container-width">
        <h2 
          ref={sectionRef as React.RefObject<HTMLHeadingElement>} 
          className={`text-2xl md:text-3xl font-serif mb-8 transition-opacity duration-500 ${hasIntersected ? 'opacity-100' : 'opacity-0'}`}
        >
          Contact
        </h2>
        
        <div className={`transition-all duration-500 delay-100 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg mb-8">
            I'm always open to interesting conversations and collaboration opportunities.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <SocialLink 
              href="mailto:hello@vijaymanohar.com" 
              icon={<Mail className="w-6 h-6" />} 
              label="Email"
            />
            <SocialLink 
              href="https://github.com/vijaymanohar" 
              icon={<Github className="w-6 h-6" />} 
              label="GitHub"
            />
            <SocialLink 
              href="https://linkedin.com/in/vijaymanohar" 
              icon={<Linkedin className="w-6 h-6" />} 
              label="LinkedIn"
            />
            <SocialLink 
              href="https://twitter.com/vijay_manohar" 
              icon={<Twitter className="w-6 h-6" />} 
              label="Twitter"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
