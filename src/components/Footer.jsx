import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-brown/20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <Logo className="h-16 mb-8" />
          
          <p className="max-w-md text-brand-cream/60 mb-8 italic font-serif">
            "Taste That Feels Like Home. Bringing the authentic flavors of Rampur Maniharan."
          </p>
          
          <div className="flex gap-6 mb-12">
            <a href="https://www.instagram.com/chauhan_sweets01/" target="_blank" rel="noopener noreferrer" className="text-brand-cream/40 hover:text-brand-saffron transition-colors">
              Instagram
            </a>
            <a href="https://wa.me/918218524305?text=Hello%2C%20I%20want%20to%20order%20from%20Chauhan%27s%20Sweets%20and%20Restaurant" target="_blank" rel="noopener noreferrer" className="text-brand-cream/40 hover:text-brand-saffron transition-colors">
              WhatsApp
            </a>
            <a href="tel:+918218524305" className="text-brand-cream/40 hover:text-brand-saffron transition-colors">
              Call Now
            </a>
          </div>
          
          <div className="w-full border-t border-brand-brown/20 pt-8 flex flex-col md:flex-row items-center justify-between text-brand-cream/30 text-sm">
            <p>&copy; {new Date().getFullYear()} Chauhan’s Sweets & Restaurant. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed with passion.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
