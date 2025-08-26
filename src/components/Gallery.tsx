import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="relative overflow-hidden rounded-3xl aspect-[16/9]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`Gallery Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pure-dark/20 to-transparent" />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass rounded-full p-3 hover:shadow-glow transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-pure-dark" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass rounded-full p-3 hover:shadow-glow transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-pure-dark" />
            </button>
          </motion.div>
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