
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className={`mb-6 transition-all duration-500 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-2 md:mb-0">
          <span className="text-sm font-medium text-primary">{year}</span>
        </div>
        <div className="md:w-3/4">
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const { ref: sectionRef, hasIntersected } = useIntersectionObserver();

  return (
    <section id="about" className="py-16 bg-secondary/30">
      <div className="container-width">
        <h2 
          ref={sectionRef as React.RefObject<HTMLHeadingElement>}
          className={`text-2xl md:text-3xl font-sohne mb-8 transition-opacity duration-500 ${hasIntersected ? 'opacity-100' : 'opacity-0'}`}
        >
          About Me
        </h2>
        
        <div className="space-y-6 mb-12">
          <p className={`text-lg transition-all duration-500 delay-100 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I'm Vijay, a writer and curious observer with interests spanning technology, culture, and human behavior. 
            My work explores how we interact with the <a href="#" className="link-hover">digital world</a> and how those interactions shape our lives.
          </p>
          <p className={`text-lg transition-all duration-500 delay-200 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            When I'm not writing, you might find me hiking in the mountains, experimenting with new recipes, 
            or losing myself in a <a href="#" className="link-hover">good book</a>. I believe in continuous learning and approaching life with an open mind.
          </p>
        </div>
        
        <h3 className={`text-xl font-sohne mb-6 transition-all duration-500 delay-300 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Timeline
        </h3>
        
        <div className="mt-6">
          <TimelineItem 
            year="2023" 
            title="Started Independent Writing" 
            description="Launched my own writing platform focused on the intersection of technology and everyday life."
          />
          <TimelineItem 
            year="2020 - 2023" 
            title="Senior Content Creator at TechVision" 
            description="Led content strategy and created in-depth analyses of emerging technology trends."
          />
          <TimelineItem 
            year="2018 - 2020" 
            title="Research Contributor" 
            description="Contributed research and insights to various publications on digital transformation."
          />
          <TimelineItem 
            year="2016" 
            title="MSc in Digital Society" 
            description="Explored how technology shapes social structures and human behavior."
          />
        </div>
        
        <div className={`mt-8 transition-all duration-500 delay-400 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-sohne mb-4">Interests & Values</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Thoughtful <a href="#" className="link-hover">technology</a></span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Environmental care</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Long-form <a href="#" className="link-hover">stories</a></span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Cultural exploration</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Continuous learning</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span><a href="#" className="link-hover">Community</a> building</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
