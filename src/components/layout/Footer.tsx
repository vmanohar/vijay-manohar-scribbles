
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-xs text-muted-foreground border-t">
      <div className="container-width">
        <p className="mb-2">© {currentYear} Vijay Manohar</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="/quotes" className="underline-link text-xs">Quotes</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
