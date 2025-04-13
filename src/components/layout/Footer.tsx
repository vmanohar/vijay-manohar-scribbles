
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-xs text-muted-foreground border-t">
      <div className="container-width">
        <p>© {currentYear} Vijay Manohar</p>
      </div>
    </footer>
  );
};

export default Footer;
