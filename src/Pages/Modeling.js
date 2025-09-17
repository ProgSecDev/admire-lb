import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const media = [
  {
    image: require('../assets/Services/3d-modeling/cysense-logo.jpg'),
    images: [
      require('../assets/Services/3d-modeling/cysense-folder/16.jpg'),
      require('../assets/Services/3d-modeling/cysense-folder/14.jpg'),
      require('../assets/Services/3d-modeling/cysense-folder/13-scaled.jpg'),
      require('../assets/Services/3d-modeling/cysense-folder/12-scaled.jpg'),
      require('../assets/Services/3d-modeling/cysense-folder/10-scaled.jpg'),
      require('../assets/Services/3d-modeling/cysense-folder/2.jpg'),
      require('../assets/Services/3d-modeling/cysense-folder/1-1.jpg'),
      require('../assets/Services/3d-modeling/cysense-folder/4.jpg'),
      require('../assets/Services/3d-modeling/cysense-folder/9-scaled.jpg'),
      require('../assets/Services/3d-modeling/cysense-folder/7-scaled.jpg'),
      require('../assets/Services/3d-modeling/cysense-folder/6-scaled.jpg'),
      require('../assets/Services/3d-modeling/cysense-folder/8-scaled.jpg'),
    ]
  },
  {
    image: require('../assets/Services/3d-modeling/twin-tower-LANDSCAPE-3-01.jpg'),
    images: [
      require('../assets/Services/3d-modeling/twin-tower-folder/1-1.jpg'),
      require('../assets/Services/3d-modeling/twin-tower-folder/2.jpg'),
      require('../assets/Services/3d-modeling/twin-tower-folder/3-2.jpg'),
      require('../assets/Services/3d-modeling/twin-tower-folder/4-1.jpg'),
      require('../assets/Services/3d-modeling/twin-tower-folder/5-1.jpg'),
      require('../assets/Services/3d-modeling/twin-tower-folder/6-1.jpg'),
      require('../assets/Services/3d-modeling/twin-tower-folder/7-2.jpg'),
      require('../assets/Services/3d-modeling/twin-tower-folder/8-2.jpg'),
      require('../assets/Services/3d-modeling/twin-tower-folder/9-1.jpg'),
      require('../assets/Services/3d-modeling/twin-tower-folder/10.jpg')
    ]
  },
  {
    image: require('../assets/Services/3d-modeling/Sky-tower-Logo.jpg'),
    images: [
      require('../assets/Services/3d-modeling/sky-tower-folder/1-3.jpg'),
      require('../assets/Services/3d-modeling/sky-tower-folder/2-2.jpg'),
      require('../assets/Services/3d-modeling/sky-tower-folder/3-4.jpg'),
      require('../assets/Services/3d-modeling/sky-tower-folder/4-3.jpg'),
      require('../assets/Services/3d-modeling/sky-tower-folder/5-3.jpg'),
      require('../assets/Services/3d-modeling/sky-tower-folder/6-3.jpg'),
      require('../assets/Services/3d-modeling/sky-tower-folder/7-4.jpg'),
      require('../assets/Services/3d-modeling/sky-tower-folder/8-4.jpg')
    ]
  },
  {
    image: require('../assets/Services/3d-modeling/royal-hills.jpg'),
    images: [
      require('../assets/Services/3d-modeling/royal-hills-folder/1-4.jpg'),
      require('../assets/Services/3d-modeling/royal-hills-folder/2-3.jpg'),
      require('../assets/Services/3d-modeling/royal-hills-folder/3-5.jpg'),
      require('../assets/Services/3d-modeling/royal-hills-folder/4-4.jpg'),
      require('../assets/Services/3d-modeling/royal-hills-folder/5-4.jpg'),
      require('../assets/Services/3d-modeling/royal-hills-folder/6-4.jpg'),
      require('../assets/Services/3d-modeling/royal-hills-folder/7-5.jpg'),
      require('../assets/Services/3d-modeling/royal-hills-folder/8-5.jpg'),
      require('../assets/Services/3d-modeling/royal-hills-folder/9-2.jpg'),
      require('../assets/Services/3d-modeling/royal-hills-folder/10-1.jpg'),
      require('../assets/Services/3d-modeling/royal-hills-folder/11.jpg'),
      require('../assets/Services/3d-modeling/royal-hills-folder/12.jpg'),
      require('../assets/Services/3d-modeling/royal-hills-folder/13.jpg')
    ]
  }
];

const Modeling = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedModalIndex, setSelectedModalIndex] = useState(0);

  const openModal = (imageIndex) => {
    setSelectedImageIndex(imageIndex);
    setSelectedModalIndex(0);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setSelectedModalIndex(0);
  };

  const prevImage = () => {
    setSelectedModalIndex((prev) => {
      const total = media[selectedImageIndex].images.length;
      return (prev - 1 + total) % total;
    });
  };

  const nextImage = () => {
    setSelectedModalIndex((prev) => {
      const total = media[selectedImageIndex].images.length;
      return (prev + 1) % total;
    });
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto mt-40">
        {media.map((item, i) => (
          <div
            key={i}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow"
            onClick={() => openModal(i)}
          >
            <img src={item.image} alt={`Preview ${i}`} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Search className="text-white w-12 h-12" />
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          >
            <div className="absolute top-4 left-6 text-white text-lg z-50">
              Image {selectedModalIndex + 1} / {media[selectedImageIndex].images.length}
            </div>

            <button onClick={closeModal} className="absolute top-4 right-6 text-white hover:text-gray-300 z-50">
              <X className="w-8 h-8" />
            </button>

            {media[selectedImageIndex].images.length > 1 && (
              <button onClick={prevImage} className="absolute left-4 text-white hover:text-gray-300 z-50">
                <ArrowLeft className="w-8 h-8" />
              </button>
            )}

            <motion.img
              key={selectedModalIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={media[selectedImageIndex].images[selectedModalIndex]}
              alt={`Slide ${selectedModalIndex}`}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg z-10"
            />

            {media[selectedImageIndex].images.length > 1 && (
              <button onClick={nextImage} className="absolute right-4 text-white hover:text-gray-300 z-50">
                <ArrowRight className="w-8 h-8" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modeling;