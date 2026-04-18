import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const DISHES = [
  { name: "Ras Malai", query: "Ras_malai", type: "SWEET" },
  { name: "chilli patato", query: "Paneer_tikka", type: "SAVOURY" },
  { name: "Jalebi", query: "Jalebi", type: "SWEET" },
  { name: "Golgappe", query: "Panipuri", type: "SAVOURY" },
  { name: "Aloo Tikki Chaat", query: "Aloo_tikki", type: "SAVOURY" },
  { name: "Kaju Katli", query: "Kaju_katli", type: "SWEET" },
  { name: "Samosa", query: "Samosa", type: "SAVOURY" },
  { name: "Chole Bhature", query: "Chole_bhature", type: "SAVOURY" },

];

const fetchWikiImage = async (query) => {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${query}&prop=pageimages&format=json&pithumbsize=800&origin=*`;
  const res = await fetch(url);
  const data = await res.json();
  const pages = data.query.pages;
  const page = Object.values(pages)[0];
  return page?.thumbnail?.source || null;
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState(
    DISHES.map(d => ({ ...d, url: null, loading: true }))
  );

  useEffect(() => {
    DISHES.forEach(async (dish, idx) => {
      const url = await fetchWikiImage(dish.query);
      setImages(prev =>
        prev.map((img, i) =>
          i === idx ? { ...img, url, loading: false } : img
        )
      );
    });
  }, []);

  return (
    <section id="gallery" className="py-24 bg-[#F5F2EB]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-brown/60 uppercase tracking-[0.2em] text-xs font-bold mb-4"
            >
              Signature Menu
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif text-[#3E2723]"
            >
              Sweet. Savoury. <span className="italic font-light">Unforgettable.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-brown/70 mt-6 md:mt-0 max-w-sm text-lg"
          >
            Every single dish, handcrafted in small batches — because shortcuts never made anyone say wow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-white rounded-[2rem] p-3 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => { if (image.url) setSelectedImage(image) }}
            >
              <div className="relative overflow-hidden rounded-3xl aspect-square mb-4 bg-[#F5F2EB]">
                {image.loading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-brand-brown/20 border-t-brand-saffron rounded-full animate-spin" />
                  </div>
                ) : image.url ? (
                  <img
                    src={image.url}
                    alt={image.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-brand-brown/40 text-sm">
                    unavailable
                  </div>
                )}
              </div>

              <div className="px-3 pb-2 flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#a8a196] mb-1">
                    {image.type}
                  </p>
                  <h3 className="text-xl font-serif text-[#3E2723]">
                    {image.name}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#F5F2EB] flex justify-center items-center text-[#3E2723] group-hover:bg-[#E8E4D9] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={selectedImage.url}
              alt={selectedImage.name}
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-10 text-3xl font-serif text-brand-gold bg-black/50 px-6 py-2 rounded-full backdrop-blur-md"
            >
              {selectedImage.name}
            </motion.h3>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;