
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
        
        <div className="space-y-6 mb-12">
          <p className={`text-lg transition-all duration-500 delay-100 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I care about clean inputs—whether that's what goes into your body, your routine, or your thinking. That means food and supplements that are actually tested and transparent, not just well-branded. Systems that reduce friction. And mental models that help you move through life with more clarity and less noise.
          </p>
          <p className={`text-lg transition-all duration-500 delay-200 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I'm especially into transparent, tested CPG brands and rethinking education to actually prepare the next generation through new kinds of schools.
          </p>
          <p className={`text-lg transition-all duration-500 delay-300 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I'm into HYROX, bodybuilding, and multi-day hikes that leave me questioning my life choices. I meditate daily and spend a lot of time exploring mindfulness and how to stay grounded.
          </p>
          <p className={`text-lg transition-all duration-500 delay-400 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I used to be a full-time nomad. Now I'm settled in Austin, TX and always on the lookout for great products. I get weirdly excited when a brand just gets it right.
          </p>
          <p className={`text-lg transition-all duration-500 delay-500 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Also, I tried stand-up once. It was chaotic and great. I'd do it again.
          </p>
        </div>
        
        <h3 className={`text-xl font-sohne mb-6 transition-all duration-500 delay-300 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Timeline
        </h3>
        
        <div className="mt-6">
          <TimelineItem 
            year="2024" 
            title="Light Labs, Co-founder" 
            description="My life's work -- building a healthier food system through lab testing."
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
