import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Footer content will go here */}
      <p>&copy; {currentYear} Me & Mrs Jones. All rights reserved.</p>
      {/* Maybe social links or minimal contact info */}
    </footer>
  );
};

export default Footer; 