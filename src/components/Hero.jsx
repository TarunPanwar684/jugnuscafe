import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden py-24 lg:py-0">
      {/* Background Image with Parallax Zoom Animation */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1593786257529-688942b109e3?q=80&w=2070&auto=format&fit=crop')`, // Close up macro food shot
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-transparent to-transparent"></div>
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 flex-grow flex flex-col justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mt-20"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.2] mb-6 drop-shadow-lg">
            कुछ स्वाद <span className="text-brand-gold italic font-light block mt-2 text-4xl md:text-6xl lg:text-7xl">याद बन जाते हैं,</span>
            हर निवाले में <span className="text-brand-gold italic font-light">अपनापन।</span>
          </h1>
          <p className="text-white/90 text-lg md:text-2xl mb-12 font-sans font-light leading-relaxed max-w-2xl drop-shadow-md">
            Chauhan's Sweets — a premium little corner for handcrafted Indian sweets, fresh snacks and the kind of chai that feels like a hug.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/918218524305?text=Hello%2C%20I%20want%20to%20order%20from%20Chauhan%27s%20Sweets%20and%20Restaurant" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold shadow-[0_8px_32px_rgba(37,211,102,0.3)] transition-all flex justify-center items-center gap-3 text-lg"
            >
              <MessageCircle size={24} />
              Chat on WhatsApp ↗
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#menu" 
              className="px-8 py-4 bg-transparent border border-white/40 text-white hover:bg-white/10 rounded-full font-bold transition-all flex justify-center items-center gap-3 text-lg"
            >
              Explore the menu ↗
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="w-full mt-12 pb-8 lg:mt-0 lg:pb-0 lg:absolute lg:bottom-6 lg:left-0 lg:right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-white/80 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-brand-gold" />
              Open daily - 8 AM — 10 PM
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-brand-gold" />
              +91 82185 24305
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-brand-gold" />
              Islamnagar Road, Rampur Maniharan
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
