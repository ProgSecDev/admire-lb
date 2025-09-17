import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  require('../assets/Services/social-media/Social-Media-6.jpg'),
  require('../assets/Services/social-media/Social-Media-2.jpg'),
  require('../assets/Services/social-media/Social-Media-3.jpg'),
  require('../assets/Services/social-media/Social-Media-4.jpg'),
  require('../assets/Services/social-media/Social-Media-5.jpg'),
  require('../assets/Services/social-media/MISSING-ONES-27-scaled.jpg'),
  require('../assets/Services/social-media/Social-Media-7-1.jpg'),
  require('../assets/Services/social-media/Social-Media-8-1.jpg'),
  require('../assets/Services/social-media/Social-Media-9.jpg'),
  require('../assets/Services/social-media/Social-Media-10.jpg'),
  require('../assets/Services/social-media/medwaste-social-media.jpg'),
  require('../assets/Services/social-media/Social-Media-11.jpg'),
  require('../assets/Services/social-media/Social-Media-12-1.jpg'),
  require('../assets/Services/social-media/Social-Media-13-1.jpg'),
  require('../assets/Services/social-media/Social-Media-14-1.jpg'),
  require('../assets/Services/social-media/Social-Media-15-1-1.jpg'),
  require('../assets/Services/social-media/Social-Media-16-1.jpg'),
  require('../assets/Services/social-media/isuzu-social-media.jpg'),
];

const SocialMedia = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  const openModal = (index) => {
    setSelectedIndex(index);
    setZoom(1);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto mt-40">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow"
            onClick={() => openModal(i)}
          >
            <img src={img} alt={`Slide ${i}`} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Search className="text-white w-12 h-12" />
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          >
            {/* Controls */}
            <div className="absolute top-4 left-6 text-white text-lg z-50">
              {selectedIndex + 1} / {images.length}
            </div>

            <button
              onClick={closeModal}
              className="absolute top-4 right-6 text-white hover:text-gray-300 z-50"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={() => setZoom((z) => Math.min(z + 0.25, 3))}
              className="absolute top-4 right-20 text-white hover:text-gray-300 z-50"
            >
              <ZoomIn className="w-6 h-6" />
            </button>

            <button
              onClick={() => setZoom((z) => Math.max(z - 0.25, 0.5))}
              className="absolute top-4 right-32 text-white hover:text-gray-300 z-50"
            >
              <ZoomOut className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-gray-300 z-50"
            >
              <ArrowLeft className="w-8 h-8" />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: zoom }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3 }}
              src={images[selectedIndex]}
              alt={`Slide ${selectedIndex}`}
              className="max-h-[80vh] max-w-[90vw] object-contain z-10"
            />

            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-gray-300 z-50"
            >
              <ArrowRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialMedia;