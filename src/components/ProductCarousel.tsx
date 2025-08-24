import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import product1 from '@/assets/product1.jpg';
import product2 from '@/assets/product2.jpg';
import product3 from '@/assets/product3.jpg';
import product4 from '@/assets/product4.jpg';
import product5 from '@/assets/product5.jpg';

const ProductCarousel = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const products = [
    { id: 1, name: "Premium Device", price: "$299", image: product1 },
    { id: 2, name: "Luxury Watch", price: "$599", image: product2 },
    { id: 3, name: "Designer Accessory", price: "$199", image: product3 },
    { id: 4, name: "Tech Gadget", price: "$399", image: product4 },
    { id: 5, name: "Modern Tool", price: "$149", image: product5 },
  ];

  const maxIndex = Math.max(0, products.length - itemsPerView);
  
  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };
  
  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section ref={ref} className="py-20 bg-pure-white" id="products">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-pure-dark mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-medium-grey max-w-2xl mx-auto">
            Discover our carefully curated selection of premium products
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 glass rounded-full p-3 text-pure-dark hover:text-pure-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 glass rounded-full p-3 text-pure-dark hover:text-pure-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Carousel Content */}
          <div className="overflow-hidden px-12">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="modern-card group h-full">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pure-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <motion.div
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <button className="glass rounded-full p-3 text-pure-dark hover:text-pure-white transition-colors duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </motion.div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-pure-dark mb-2">
                          {product.name}
                        </h3>
                        <p className="text-2xl font-bold text-medium-grey">
                          {product.price}
                        </p>
                      </div>

                      <motion.button
                        className="w-full bg-pure-dark text-pure-white rounded-xl py-3 px-6 font-semibold flex items-center justify-center space-x-2 hover:bg-dark-grey transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ShoppingCart className="w-5 h-5" />
                        <span>Add to Cart</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <motion.div
          className="flex justify-center mt-8 space-x-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
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

export default ProductCarousel;