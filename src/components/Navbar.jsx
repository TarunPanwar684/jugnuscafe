import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.home'), href: '#home' },
    { name: t('navbar.menu'), href: '#menu' },
    { name: t('navbar.gallery'), href: '#gallery' },
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.location'), href: '#location' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <motion.a 
            href="#home" 
            className="z-50"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Logo className={isScrolled ? "h-10 transition-all duration-300" : "h-12 transition-all duration-300"} />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-brand-cream hover:text-brand-saffron transition-colors font-medium text-sm uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              onClick={toggleLanguage}
              className="text-brand-cream hover:text-brand-saffron transition-colors font-bold text-sm uppercase tracking-wider border border-brand-brown/50 px-3 py-1 rounded-full"
              title="Toggle Language"
            >
              {i18n.language === 'en' ? 'HI' : 'EN'}
            </button>
            <a 
              href="tel:+918218524305" 
              className="flex items-center gap-2 bg-brand-saffron hover:bg-brand-gold text-brand-dark px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105"
            >
              <PhoneCall size={18} />
              <span>{t('navbar.callNow')}</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <button 
              onClick={toggleLanguage}
              className="text-brand-cream border border-brand-brown/50 px-2.5 py-0.5 rounded-full text-xs font-bold"
            >
              {i18n.language === 'en' ? 'HI' : 'EN'}
            </button>
            <button 
              className="text-brand-cream focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-lg border-b border-brand-brown/30 shadow-xl md:hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl text-center font-serif text-brand-cream hover:text-brand-saffron transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex justify-center mt-4">
                <a 
                  href="tel:+918218524305" 
                  className="flex items-center gap-2 bg-brand-saffron text-brand-dark px-6 py-3 rounded-full font-bold w-max"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <PhoneCall size={20} />
                  <span>+91 821 852 4305</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
