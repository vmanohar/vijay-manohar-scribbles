
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setName('');
      setEmail('');
      setMessage('');
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container-width">
        <h2 ref={sectionRef} className="text-3xl md:text-4xl font-serif mb-12 fade-in-section">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in-section">
            <p className="text-lg mb-8">
              I'm always open to interesting conversations and collaboration opportunities. 
              Feel free to reach out through any of the channels below.
            </p>
            
            <div className="space-y-4 mt-8">
              <SocialLink 
                href="mailto:hello@vijaymanohar.com" 
                icon={<Mail className="w-5 h-5" />} 
                label="hello@vijaymanohar.com"
              />
              <SocialLink 
                href="https://github.com/vijaymanohar" 
                icon={<Github className="w-5 h-5" />} 
                label="github.com/vijaymanohar"
              />
              <SocialLink 
                href="https://linkedin.com/in/vijaymanohar" 
                icon={<Linkedin className="w-5 h-5" />} 
                label="linkedin.com/in/vijaymanohar"
              />
              <SocialLink 
                href="https://twitter.com/vijay_manohar" 
                icon={<Twitter className="w-5 h-5" />} 
                label="twitter.com/vijay_manohar"
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="fade-in-section">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="bg-background min-h-[150px]"
                />
              </div>
              <Button 
                type="submit" 
                disabled={loading}
                className="w-full"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-4">
                This is a demo form. In a real implementation, you would need a backend service to handle form submissions.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
