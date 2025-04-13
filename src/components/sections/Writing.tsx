
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface WritingItemProps {
  title: string;
  description: string;
  link: string;
  date: string;
  platform: string;
}

const WritingItem = ({ title, description, link, date, platform }: WritingItemProps) => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className={`mb-6 pb-6 border-b last:border-0 transition-all duration-500 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
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
            <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-300 flex items-center">
              {title}
              <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </h3>
          </a>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Writing = () => {
  const { ref: sectionRef, hasIntersected } = useIntersectionObserver();

  return (
    <section id="writing" className="py-16">
      <div className="container-width">
        <h2 
          ref={sectionRef as React.RefObject<HTMLHeadingElement>} 
          className={`text-2xl md:text-3xl font-serif mb-8 transition-opacity duration-500 ${hasIntersected ? 'opacity-100' : 'opacity-0'}`}
        >
          Writing
        </h2>
        
        <div className="mt-6">
          <WritingItem 
            title="The Slow Internet Movement" 
            description="Exploring the growing desire for more thoughtful, less overwhelming digital experiences."
            link="https://substack.com" 
            date="May 2024"
            platform="Substack"
          />
          <WritingItem 
            title="Digital Minimalism in Practice" 
            description="How reducing your digital footprint can lead to more meaningful technology use."
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
