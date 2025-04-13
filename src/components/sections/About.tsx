
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const TimelineItem = ({ year, title, description, link }: { year: string; title: string; description: string; link?: string }) => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });
  
  const titleContent = link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-medium mb-2 hover:text-accent transition-colors duration-300">
      {title}
    </a>
  ) : (
    <h3 className="text-xl font-medium mb-2">{title}</h3>
  );

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
          {titleContent}
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
        
        <div className="space-y-4 text-lg">
          <p className={`transition-all duration-500 delay-100 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I care about clean inputs—whether that's what goes into your body, your routine, or your thinking. That means food and supplements that are actually tested and transparent, not just well-branded.
          </p>
          <p className={`transition-all duration-500 delay-200 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I focus on systems that reduce friction and mental models that help you move through life with more clarity and less noise.
          </p>
          <p className={`transition-all duration-500 delay-300 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I'm especially passionate about transparent, tested CPG brands and rethinking education to actually prepare the next generation through innovative school models.
          </p>
          <p className={`transition-all duration-500 delay-400 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My interests span HYROX, bodybuilding, and multi-day hikes that challenge my limits. I'm deeply committed to meditation and exploring mindfulness to stay grounded.
          </p>
          <p className={`transition-all duration-500 delay-500 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I used to be a full-time nomad. Now I'm settled in Austin, TX, always excited about brands that get things right. And yes, I tried stand-up comedy once—it was chaotic and great. I'd do it again.
          </p>
        </div>
        
        <h3 className={`text-xl font-sohne mb-6 mt-10 transition-all duration-500 delay-300 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Timeline
        </h3>
        
        <div className="mt-6">
          <TimelineItem 
            year="2024 - Present" 
            title="Light Labs, Co-founder" 
            description="Building a healthier food system through lab testing."
            link="https://lightlabs.com"
          />
          <TimelineItem 
            year="2023 - 2024" 
            title="Sabbatical" 
            description="Chilled a lot, moved to Austin, became a decent chef, and a lot of experimenting on what was next (along with a healthy dose of existential dread)."
          />
          <TimelineItem 
            year="2018 - 2023" 
            title="Samsara, Growth and GTM" 
            description="The best education I could have asked for, along for the ride from startup to IPO ($IOT). Lived all over LATAM and Europe."
            link="https://samsara.com"
          />
          <TimelineItem 
            year="2013 - 2017" 
            title="University of Texas at Austin" 
            description="Electrical and Computer Engineering, B.S. Made lifelong friends, studied a lot, realized I didn't want to be an engineer."
          />
        </div>
        
        <div className={`mt-10 transition-all duration-500 delay-400 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-sohne mb-4">Interests & Values</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Transparent food systems – incentive alignment within our food system and consumers</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Meditation & mindfulness – daily practice, mental clarity, and awareness in how I show up</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Rooted living – ancestral habits, shared spaces, and deeper connection to people and place</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Self-experimentation (n=1) – testing habits, routines, and tools to see what actually works</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Physical challenges – HYROX, bodybuilding, and multi-day hikes</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Alternative education – building models that teach real skills, curiosity, and self-awareness</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
