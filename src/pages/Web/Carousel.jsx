import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Shopc from './Shopc';
import '../../assets/css/Carousel.css';

const images = [
  'https://d1z88p83zuviay.cloudfront.net/BannerImages/edaa1f68-5d2a-4d92-963c-77c2705036fc.jpg',
  'https://d1z88p83zuviay.cloudfront.net/BannerImages/08ba997f-0f63-49f6-ac2d-28dc70e8da32.jpg',
  'https://d1z88p83zuviay.cloudfront.net/BannerImages/30d419cb-fb55-46d9-b9fd-01aa385cba23.jpg',
  'https://d1z88p83zuviay.cloudfront.net/BannerImages/72b2744e-8444-4bf2-9d77-5567b9713d22.jpg',
  'https://d1z88p83zuviay.cloudfront.net/BannerImages/422aadd2-e724-4216-8c18-3a3605dc5692.jpg'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000); // Change image every 0.5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div className="relative w-full h-[400px] overflow-hidden mt-1 dark:bg-black">
        <AnimatePresence initial={false}>
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="absolute w-full h-full object-cover mt-2 mb-2  dark:bg-black"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 bg-gray-100 transform -translate-y-1/2 p-2 rounded-full  dark: bg-cyan-700 "
        >
          &#8592;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 bg-gray-100 transform -translate-y-1/2  p-2 rounded-full dark: bg-cyan-700"
        >
          &#8594;
        </button>
      </div>
      <div className="flex items-center justify-center my-5 mt-10 mb-8">
        <div className="flex-1 border border-black/30 mx-4 ml-16 dark: border-gray-400 "></div>
        <div className="text-3xl font-bold text-cyan-900 dark: text-cyan-700  ">Today's Offer</div>
        <div className="flex-1 border border-black/30 mx-4 dark: border-gray-400"></div>
      </div>
      <div className="flex justify-between items-start mt-2 dark:bg-black text-white">
        <motion.img
          src="https://d1z88p83zuviay.cloudfront.net/BannerImages/64ee0a68-ab24-4f60-8da9-26f529f0e37f.jpg"
          alt="Left Image"
          className="w-1/2 h-auto mr-2 ml-1"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', duration: 1 }}
        />
        <motion.img
          src="https://d1z88p83zuviay.cloudfront.net/BannerImages/d02c9b9c-8806-429b-b778-29ac0a2d4f4a.jpg"
          alt="Right Image"
          className="w-1/2 h-auto  mr-10"
          initial={{ x: '100vh' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', duration: 1 }}
        />
      </div>
<Shopc/>
    </div>
  );
}

export default Carousel;
