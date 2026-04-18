import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Leaf } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-brand-brown/5 relative overflow-hidden">
      {/* Decorative element background */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-saffron/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-6">Our Story</h2>
            <div className="h-1 w-24 bg-brand-saffron mx-auto rounded-full mb-8"></div>
            
            <p className="text-lg md:text-xl text-brand-cream/90 leading-relaxed font-serif italic mb-6">
              "Building trust through every bite, right here in Rampur Maniharan."
            </p>
            
            <p className="text-brand-cream/70 leading-relaxed mb-8">
              At Chauhan’s Sweets & Restaurant, we believe that food is an emotion. For years, we have been serving the local community of Rampur Maniharan with authentic, mouth-watering street food and premium Indian sweets. We source the freshest local ingredients and prepare everything with the same love and care as you would at home. 
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Heart, title: "Authentic Taste", desc: "Traditional recipes passed down generations." },
              { icon: ShieldCheck, title: "Local Trust", desc: "A beloved name in Rampur Maniharan, Saharanpur." },
              { icon: Leaf, title: "Fresh Ingredients", desc: "Premium quality ingredients, prepared daily." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-[#1c1c1c] to-brand-dark rounded-2xl border border-brand-gold/10 shadow-xl transition-all duration-500 hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)] hover:border-brand-gold/30 group"
              >
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-serif text-brand-gold mb-3 relative pb-2">
                  {feature.title}
                  <span className="absolute bottom-0 left-1/4 w-1/2 h-[1px] bg-brand-gold/40 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </h3>
                <p className="text-brand-cream/60 mt-2">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
