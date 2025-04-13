
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-xs text-muted-foreground border-t">
      <div className="container-width">
        <p className="mb-2">
          © {currentYear} Vijay Manohar • Caffeinated into existence at <a href="https://www.palominocoffee.com/" target="_blank" rel="noopener noreferrer" className="link-hover">Palomino Cafe</a> in Austin, TX
        </p>
      </div>
    </footer>
  );
};

export default Footer;
