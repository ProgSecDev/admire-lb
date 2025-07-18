import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const media = [
  {
    image: require('../assets/Services/animation/Logos-07.jpg'),
    videos: [
      require('../assets/Services/animation/Logos-07-vid/Al-Abbseye.mp4')
    ]
  },
  {
    image: require('../assets/Services/animation/Logos-06.jpg'),
    videos: [
      require('../assets/Services/animation/Logos-06-vid/MEDITOUR.mp4')
    ]
  },
  {
    image: require('../assets/Services/animation/Logos-05.jpg'),
    videos: [
      require('../assets/Services/animation/Logos-05-vid/WhatsApp-Video-2023-09-28-at-13.01.02.mp4'),
      require('../assets/Services/animation/Logos-05-vid/Snapinsta.app_video_10000000_1673872286459483_216883073731739829_n.mp4')
    ]
  },
  {
    image: require('../assets/Services/animation/Logos-04.jpg'),
    videos: [
      require('../assets/Services/animation/Logos-04-vid/balkis-family.mp4'),
      require('../assets/Services/animation/Logos-04-vid/balkis-apple.mp4'),
      require('../assets/Services/animation/Logos-04-vid/balkis-lemons.mp4'),
      require('../assets/Services/animation/Logos-04-vid/balkis-mawardi.mp4'),
      require('../assets/Services/animation/Logos-04-vid/balkis-orange.mp4')
    ]
  },
  {
    image: require('../assets/Services/animation/Logos-03.jpg'),
    videos: [
      require('../assets/Services/animation/Logos-03-vid/achnagal.mp4')
    ]
  },
  {
    image: require('../assets/Services/animation/Logos-02.jpg'),
    videos: [
      require('../assets/Services/animation/Logos-02-vid/f-point.mp4'),
      require('../assets/Services/animation/Logos-02-vid/F-point-group-motors.mp4')
    ]
  },
  {
    image: require('../assets/Services/animation/Logos-01.jpg'),
    videos: [
      require('../assets/Services/animation/Logos-01-vid/foodys.mp4'),
      require('../assets/Services/animation/Logos-01-vid/foodys-2.mp4'),
      require('../assets/Services/animation/Logos-01-vid/Gif-2.mp4'),
      require('../assets/Services/animation/Logos-01-vid/post24-gif.mp4'),
    ]
  },
];

const Animation = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const openModal = (imageIndex) => {
    setSelectedImageIndex(imageIndex);
    setSelectedVideoIndex(0);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setSelectedVideoIndex(0);
  };

  const prevVideo = () => {
    setSelectedVideoIndex((prev) => {
      const videoCount = media[selectedImageIndex].videos.length;
      return (prev - 1 + videoCount) % videoCount;
    });
  };

  const nextVideo = () => {
    setSelectedVideoIndex((prev) => {
      const videoCount = media[selectedImageIndex].videos.length;
      return (prev + 1) % videoCount;
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
              Video {selectedVideoIndex + 1} / {media[selectedImageIndex].videos.length}
            </div>

            <button onClick={closeModal} className="absolute top-4 right-6 text-white hover:text-gray-300 z-50">
              <X className="w-8 h-8" />
            </button>

            {media[selectedImageIndex].videos.length > 1 && (
              <button onClick={prevVideo} className="absolute left-4 text-white hover:text-gray-300 z-50">
                <ArrowLeft className="w-8 h-8" />
              </button>
            )}

            <motion.video
              key={selectedVideoIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={media[selectedImageIndex].videos[selectedVideoIndex]}
              controls
              autoPlay
              className="max-h-[80vh] max-w-[90vw] rounded-lg z-10"
            />

            {media[selectedImageIndex].videos.length > 1 && (
              <button onClick={nextVideo} className="absolute right-4 text-white hover:text-gray-300 z-50">
                <ArrowRight className="w-8 h-8" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Animation;