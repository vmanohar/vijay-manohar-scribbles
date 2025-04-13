
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
      aria-label={label}
    >
      <div className="p-3 rounded-full bg-secondary/30 mb-2">
        {icon}
      </div>
      <span className="text-sm">{label}</span>
    </a>
  );
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const { ref: sectionRef, hasIntersected } = useIntersectionObserver();

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
    <section id="contact" className="py-20">
      <div className="container-width">
        <h2 
          ref={sectionRef as React.RefObject<HTMLHeadingElement>} 
          className={`text-2xl md:text-3xl font-serif mb-12 transition-opacity duration-500 ${hasIntersected ? 'opacity-100' : 'opacity-0'}`}
        >
          Contact
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Social Links */}
          <div className={`transition-all duration-500 delay-100 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg mb-8">
              I'm always open to interesting conversations and collaboration opportunities.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <SocialLink 
                href="mailto:hello@vijaymanohar.com" 
                icon={<Mail className="w-6 h-6" />} 
                label="Email"
              />
              <SocialLink 
                href="https://github.com/vijaymanohar" 
                icon={<Github className="w-6 h-6" />} 
                label="GitHub"
              />
              <SocialLink 
                href="https://linkedin.com/in/vijaymanohar" 
                icon={<Linkedin className="w-6 h-6" />} 
                label="LinkedIn"
              />
              <SocialLink 
                href="https://twitter.com/vijay_manohar" 
                icon={<Twitter className="w-6 h-6" />} 
                label="Twitter"
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`transition-all duration-500 delay-200 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                  className="bg-background min-h-[120px]"
                />
              </div>
              <Button 
                type="submit" 
                disabled={loading}
                className="w-full flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
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
