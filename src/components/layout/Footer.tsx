
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 text-center text-sm text-muted-foreground">
      <div className="container-width">
        <p>© {currentYear} Vijay Manohar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
