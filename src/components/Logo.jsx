import React from 'react';

const Logo = ({ className = "h-12 w-auto" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
      {/* Crown Elements */}
      <path d="M20 50L35 30L50 45L65 30L80 50V70H20V50Z" fill="var(--color-gold, #D4AF37)" />
      {/* Sparkles */}
      <circle cx="50" cy="20" r="4" fill="var(--color-saffron, #F59E0B)" />
      <circle cx="30" cy="20" r="3" fill="var(--color-saffron, #F59E0B)" />
      <circle cx="70" cy="20" r="3" fill="var(--color-saffron, #F59E0B)" />
      {/* Foundation */}
      <rect x="25" y="75" width="50" height="5" fill="var(--color-brown, #3E2723)" rx="2" />
    </svg>
    <div className="flex flex-col justify-center">
      <span className="font-serif font-bold text-xl text-brand-gold leading-none tracking-wide">CHAUHAN'S</span>
      <span className="font-sans text-[10px] uppercase text-brand-cream tracking-widest mt-1 opacity-80">Sweets & Restaurant</span>
    </div>
  </div>
);

export default Logo;
