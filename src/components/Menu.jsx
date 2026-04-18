import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation();
  const menuData = [
    {
      category: t('menu.categories.mainCourse'),
      items: [
        { name: t('menu.items.choleBhature'), loved: true },
        { name: t('menu.items.choleChawal'), loved: false },
        { name: t('menu.items.simpleSamosa'), loved: false },
        { name: t('menu.items.dahiSamosa'), loved: true },
        { name: t('menu.items.cholaSamosa'), loved: false },
      ]
    },
    {
      category: t('menu.categories.chats'),
      items: [
        { name: t('menu.items.tikkiChat'), loved: true },
        { name: t('menu.items.tikkiKhastaChat'), loved: true },
        { name: t('menu.items.thandiChat'), loved: false },
        { name: t('menu.items.rajbhog'), loved: true },
        { name: t('menu.items.golgappe'), loved: true },
        { name: t('menu.items.dahiGolgappe'), loved: false },
      ]
    },
    {
      category: t('menu.categories.fastFood'),
      items: [
        { name: t('menu.items.steamMomo'), loved: false },
        { name: t('menu.items.fryMomo'), loved: true },
        { name: t('menu.items.vegNoodles'), loved: false },
        { name: t('menu.items.paneerNoodles'), loved: true },
        { name: t('menu.items.frenchFries'), loved: false },
        { name: t('menu.items.chilliPotatoes'), loved: false },
        { name: t('menu.items.manchurian'), loved: true },
      ]
    },
    {
      category: t('menu.categories.famousSweets'),
      items: [
        { name: t('menu.items.kajuKatli'), loved: true },
        { name: t('menu.items.gondLaddu'), loved: true },
        { name: t('menu.items.gulabJamun'), loved: false },
        { name: t('menu.items.rasgulla'), loved: false },
        { name: t('menu.items.milkCake'), loved: true },
      ]
    }
  ];

  return (
    <section id="menu" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-brand-gold mb-4"
          >
            {t('menu.title')}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-brand-saffron mx-auto rounded-full"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-cream/70 mt-6 max-w-2xl mx-auto"
          >
            {t('menu.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {menuData.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-[#1c1c1c] to-brand-dark backdrop-blur-md border border-brand-gold/10 shadow-xl rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)] hover:border-brand-gold/30 group/card relative overflow-hidden"
            >
              {/* Subtle texture inside card */}
              <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]"></div>
              
              <h3 className="text-2xl font-serif text-brand-saffron pb-4 mb-6 relative">
                {section.category}
                <span className="absolute bottom-0 left-0 w-12 h-[1px] bg-brand-gold/60 transition-all duration-500 group-hover/card:w-full"></span>
              </h3>
              
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between group">
                    <span className="text-brand-cream text-lg font-medium group-hover:text-brand-gold transition-colors flex items-center gap-2">
                      {item.name}
                      {item.loved && (
                        <span className="flex items-center text-[10px] uppercase tracking-wider bg-brand-saffron/20 text-brand-saffron px-2 py-0.5 rounded-full ml-2">
                          <Star size={10} className="mr-1 inline fill-brand-saffron" />
                          {t('menu.mostLoved')}
                        </span>
                      )}
                    </span>
                    {/* Visual dotted line placeholder for premium look without price */}
                    <div className="flex-grow mx-4 border-b border-dotted border-brand-brown/50 group-hover:border-brand-gold/50 transition-colors"></div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;
