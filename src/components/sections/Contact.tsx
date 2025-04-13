
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Contact = () => {
  const { ref: sectionRef, hasIntersected } = useIntersectionObserver();

  return (
    <section id="contact" className="py-12">
      <div className="container-width">
        <h2 
          ref={sectionRef as React.RefObject<HTMLHeadingElement>} 
          className={`text-xl md:text-2xl font-serif mb-6 transition-opacity duration-500 ${hasIntersected ? 'opacity-100' : 'opacity-0'}`}
        >
          Contact
        </h2>
        
        <div className={`transition-all duration-500 delay-100 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-base mb-6">
            I'm always open to interesting conversations and collaboration opportunities. 
            Feel free to reach out through any of the social platforms above or send me an email at{' '}
            <a href="mailto:hello@vijaymanohar.com" className="underline-link">
              hello@vijaymanohar.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
