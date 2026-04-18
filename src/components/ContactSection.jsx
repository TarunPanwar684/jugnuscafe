import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Instagram, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section id="location" className="py-24 bg-brand-dark relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 text-brand-cream px-4 lg:px-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-4">{t('contact.visitUs')}</h2>
              <div className="h-1 w-16 bg-brand-saffron rounded-full"></div>
            </div>

            <p className="text-brand-cream/70 text-lg">
              {t('contact.desc')}
            </p>

            <motion.ul 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="space-y-6 mt-4"
            >
              <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-start gap-4 text-brand-cream/90 group">
                <div className="mt-1 text-brand-saffron bg-brand-saffron/10 p-3 rounded-full group-hover:bg-brand-saffron group-hover:text-brand-dark transition-all shadow-[0_0_15px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 relative pb-1 inline-block">
                    {t('contact.openHoursLabel')}
                    <span className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-brand-saffron/50 transition-all duration-300 group-hover:w-full"></span>
                  </h4>
                  <p className="text-xl mt-1">{t('contact.openHoursTime')}</p>
                  <p className="text-sm text-brand-cream/60">{t('contact.openHoursSub')}</p>
                </div>
              </motion.li>
              <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-start gap-4 text-brand-cream/90 group">
                <div className="mt-1 text-brand-saffron bg-brand-saffron/10 p-3 rounded-full group-hover:bg-brand-saffron group-hover:text-brand-dark transition-all shadow-[0_0_15px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 relative pb-1 inline-block">
                    {t('contact.locationLabel')}
                    <span className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-brand-saffron/50 transition-all duration-300 group-hover:w-full"></span>
                  </h4>
                  <p>{t('contact.locationAddress')}</p>
                  <a href="https://www.google.com/maps?q=29.807309,77.4468303" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-brand-saffron hover:text-brand-gold text-sm font-bold uppercase tracking-wider transition-colors">
                    {t('contact.openInMap')}
                  </a>
                </div>
              </motion.li>
              
              <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-start gap-4 text-brand-cream/90 group">
                <div className="mt-1 text-brand-saffron bg-brand-saffron/10 p-3 rounded-full group-hover:bg-brand-saffron group-hover:text-brand-dark transition-all shadow-[0_0_15px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 relative pb-1 inline-block">
                    {t('contact.callLabel')}
                    <span className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-brand-saffron/50 transition-all duration-300 group-hover:w-full"></span>
                  </h4>
                  <a href="tel:+918218524305" className="hover:text-brand-gold transition-colors block text-xl">+91 821 852 4305</a>
                </div>
              </motion.li>

              <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-start gap-4 text-brand-cream/90 group">
                <div className="mt-1 text-[#25D366] bg-[#25D366]/10 p-3 rounded-full group-hover:bg-[#25D366] group-hover:text-white transition-all shadow-[0_0_15px_rgba(37,211,102,0.1)] group-hover:shadow-[0_0_25px_rgba(37,211,102,0.4)]">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 relative pb-1 inline-block">
                    {t('contact.whatsappLabel')}
                    <span className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-[#25D366]/50 transition-all duration-300 group-hover:w-full"></span>
                  </h4>
                  <a href="https://wa.me/918218524305?text=Hello%2C%20I%20want%20to%20order%20from%20Chauhan%27s%20Sweets%20and%20Restaurant" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors block text-xl">{t('contact.whatsappAction')}</a>
                </div>
              </motion.li>

              <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-start gap-4 text-brand-cream/90 group">
                <div className="mt-1 text-[#E1306C] bg-[#E1306C]/10 p-3 rounded-full group-hover:bg-[#E1306C] group-hover:text-white transition-all shadow-[0_0_15px_rgba(225,48,108,0.1)] group-hover:shadow-[0_0_25px_rgba(225,48,108,0.4)]">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 relative pb-1 inline-block">
                    {t('contact.followUs')}
                    <span className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-[#E1306C]/50 transition-all duration-300 group-hover:w-full"></span>
                  </h4>
                  <a href="https://www.instagram.com/chauhan_sweets01/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1306C] transition-colors block text-xl">@chauhan_sweets01</a>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-[500px] rounded-3xl overflow-hidden border border-brand-brown/40 shadow-2xl relative"
          >
            {/* Dark overlay specifically for map if needed to match theme */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-brand-dark mix-blend-color z-10"></div>
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.513470761358!2d77.4446416!3d29.807309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ4JzI2LjMiTiA3N8KwMjYnNDguNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Chauhan's Sweets Location"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
