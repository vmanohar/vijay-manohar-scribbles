
import React, { useEffect, useRef } from 'react';

const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => {
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
    <div ref={itemRef} className="mb-12 fade-in-section">
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
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container-width">
        <h2 ref={sectionRef} className="text-3xl md:text-4xl font-serif mb-12 fade-in-section">About Me</h2>
        
        <div className="space-y-8 mb-16">
          <p className="text-lg fade-in-section">
            I'm Vijay, a writer and curious observer with interests spanning technology, culture, and human behavior. 
            My work explores how we interact with the digital world and how those interactions shape our lives.
          </p>
          <p className="text-lg fade-in-section">
            When I'm not writing, you might find me hiking in the mountains, experimenting with new recipes, 
            or losing myself in a good book. I believe in continuous learning and approaching life with an open mind.
          </p>
        </div>
        
        <h3 className="text-2xl font-serif mb-8 fade-in-section">Timeline</h3>
        
        <div className="mt-8">
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
        
        <div className="mt-16 fade-in-section">
          <h3 className="text-2xl font-serif mb-4">Interests & Values</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Thoughtful technology adoption</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Environmental consciousness</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Long-form storytelling</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Cultural exploration</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Continuous learning</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Community building</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
