import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import product1 from '@/assets/ProductUiam.png';
import product2 from '@/assets/ProductUitm.png';
import product3 from '@/assets/blank.png';
import product4 from '@/assets/blank.png';
import product5 from '@/assets/blank.png';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(3); // Desktop: 3 items
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const products = [
    { id: 1, name: "UIAM", price: "RM69", image: product1 },
    { id: 2, name: "UITM", price: "RM69", image: product2 },
    { id: 3, name: "To be Added", price: "$???", image: product3 },
    { id: 4, name: "To be Added", price: "$???", image: product4 },
    { id: 5, name: "To be Added", price: "$???", image: product5 },
  ];

  const maxIndex = Math.max(0, products.length - itemsPerView);
  
  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };
  
  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-pure-white" id="products">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pure-dark mb-6">
            Featured Products
          </h2>
          <p className="text-lg sm:text-xl text-medium-grey max-w-2xl mx-auto">
            Discover our carefully curated selection of premium products
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 glass rounded-full p-2 sm:p-3 text-pure-dark hover:text-pure-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 glass rounded-full p-2 sm:p-3 text-pure-dark hover:text-pure-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden px-8 sm:px-12">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="modern-card group h-full hover:scale-105 transition-transform duration-300">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pure-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="glass rounded-full p-2 sm:p-3 text-pure-dark hover:text-pure-white transition-colors duration-300">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-pure-dark mb-2">
                          {product.name}
                        </h3>
                        <p className="text-xl sm:text-2xl font-bold text-medium-grey">
                          {product.price}
                        </p>
                      </div>

                      <button className="w-full bg-pure-dark text-pure-white rounded-xl py-2.5 sm:py-3 px-4 sm:px-6 font-semibold flex items-center justify-center space-x-2 hover:bg-dark-grey transition-all duration-300 hover:scale-105">
                        <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base">Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-pure-dark scale-125'
                  : 'bg-medium-grey hover:bg-dark-grey'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;