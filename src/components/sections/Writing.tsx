
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
            <h3 className="text-lg font-medium mb-2 group-hover:text-accent transition-colors duration-300 flex items-center">
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
          className={`text-2xl md:text-3xl font-sohne mb-8 transition-opacity duration-500 ${hasIntersected ? 'opacity-100' : 'opacity-0'}`}
        >
          Writing
        </h2>
        
        <div className="mt-6">
          <WritingItem 
            title="Sprints and fun challenges rather than goals" 
            description="How short-term challenges can be more effective and enjoyable than traditional goal-setting."
            link="https://vijaymanohar.substack.com/p/sprints-and-fun-challenges-rather" 
            date="March 2024"
            platform="Substack"
          />
          <WritingItem 
            title="Questions I'm asking myself at this moment" 
            description="A reflection on personal inquiries that guide our thinking and growth."
            link="https://vijaymanohar.substack.com/p/questions-im-asking-myself-at-this-90b" 
            date="January 2024"
            platform="Substack"
          />
        </div>
      </div>
    </section>
  );
};

export default Writing;
