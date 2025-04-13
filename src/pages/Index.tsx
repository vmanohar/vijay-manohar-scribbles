
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Writing from '@/components/sections/Writing';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { useTheme } from '@/hooks/useTheme';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with the fade-in-section class
    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    // Add structured data for articles
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Vijay Manohar',
      'url': window.location.origin,
      'sameAs': [
        'https://twitter.com/vijay_manohar',
        'https://github.com/vijaymanohar',
        'https://linkedin.com/in/vijaymanohar'
      ],
      'jobTitle': 'Writer',
      'worksFor': {
        '@type': 'Organization',
        'name': 'Independent'
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': window.location.origin
      }
    });
    document.head.appendChild(script);

    return () => {
      observer.disconnect();
      document.head.removeChild(script);
    };
  }, []);

  const { theme } = useTheme();

  return (
    <main className={`min-h-screen ${theme}`}>
      <Navbar />
      <Hero />
      <About />
      <Writing />
      <div className="py-8 text-center text-sm text-muted-foreground border-t">
        <div className="container-width">
          <p>Caffeinated into existence at <a href="https://www.palominocoffee.com/" target="_blank" rel="noopener noreferrer" className="link-hover">Palomino Cafe</a> in Austin, TX</p>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
