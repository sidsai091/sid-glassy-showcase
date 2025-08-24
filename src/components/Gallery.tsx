import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import product1 from '@/assets/product1.jpg';
import product2 from '@/assets/product2.jpg';
import product3 from '@/assets/product3.jpg';

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const images = [product1, product2, product3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section ref={ref} className="py-20 bg-light-grey" id="gallery">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-pure-dark mb-6">
            Our Gallery
          </h2>
          <p className="text-xl text-medium-grey max-w-2xl mx-auto">
            Discover our exclusive collection of premium products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Large Image (50%) */}
          <motion.div
            className="relative overflow-hidden rounded-3xl aspect-square"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img
              src={images[currentImageIndex]}
              alt="Featured Product"
              className="w-full h-full object-cover"
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pure-dark/30 to-transparent" />
            <motion.div
              className="absolute bottom-6 left-6 text-pure-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-2">Featured Collection</h3>
              <p className="text-lg opacity-90">Premium Quality Design</p>
            </motion.div>
          </motion.div>

          {/* Small Images Grid (25% each) */}
          <div className="grid grid-cols-1 gap-8">
            <motion.div
              className="relative overflow-hidden rounded-3xl aspect-square"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={images[(currentImageIndex + 1) % images.length]}
                alt="Product 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pure-dark/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="glass rounded-full p-4">
                  <svg className="w-8 h-8 text-pure-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-3xl aspect-square"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={images[(currentImageIndex + 2) % images.length]}
                alt="Product 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pure-dark/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="glass rounded-full p-4">
                  <svg className="w-8 h-8 text-pure-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Image Indicators */}
        <motion.div
          className="flex justify-center mt-12 space-x-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-pure-dark scale-125'
                  : 'bg-medium-grey hover:bg-dark-grey'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;