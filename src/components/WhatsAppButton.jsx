import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      href="https://wa.me/918218524305?text=Hello%2C%20I%20want%20to%20order%20from%20Chauhan%27s%20Sweets%20and%20Restaurant"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-4 bg-brand-dark/90 text-brand-cream px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Order on WhatsApp
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
