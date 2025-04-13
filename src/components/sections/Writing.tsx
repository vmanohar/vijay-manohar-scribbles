
import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface WritingItemProps {
  title: string;
  description: string;
  link: string;
  date: string;
  platform: string;
}

const WritingItem = ({ title, description, link, date, platform }: WritingItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div ref={itemRef} className="mb-10 pb-10 border-b last:border-0 fade-in-section">
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="md:w-1/4 mb-2 md:mb-0">
          <span className="text-sm text-muted-foreground">{date}</span>
          <p className="text-xs mt-1">{platform}</p>
        </div>
        <div className="md:w-3/4">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors duration-300 flex items-center">
              {title}
              <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </h3>
          </a>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Writing = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="writing" className="py-20">
      <div className="container-width">
        <h2 ref={sectionRef} className="text-3xl md:text-4xl font-serif mb-12 fade-in-section">Writing</h2>
        
        <div className="mt-8">
          <WritingItem 
            title="The Slow Internet Movement" 
            description="Exploring the growing desire for more thoughtful, less overwhelming digital experiences in our hyper-connected world."
            link="https://substack.com" 
            date="May 2024"
            platform="Substack"
          />
          <WritingItem 
            title="Digital Minimalism in Practice" 
            description="How reducing your digital footprint can lead to more meaningful technology use and improved wellbeing."
            link="https://medium.com" 
            date="February 2024"
            platform="Medium"
          />
          <WritingItem 
            title="The Hidden Costs of Convenience Apps" 
            description="An examination of how our increasing reliance on convenience applications is reshaping urban economies."
            link="https://substack.com" 
            date="November 2023"
            platform="Substack"
          />
          <WritingItem 
            title="Long-form Reading in the Age of Shorts" 
            description="Why deep reading matters more than ever in an era dominated by bite-sized content consumption."
            link="https://medium.com" 
            date="September 2023"
            platform="Medium"
          />
          <WritingItem 
            title="Rediscovering Local Community Through Technology" 
            description="How digital tools can strengthen rather than replace local connections and community engagement."
            link="https://substack.com" 
            date="July 2023"
            platform="Substack"
          />
        </div>
      </div>
    </section>
  );
};

export default Writing;
