const ProductCarousel = () => {
  return (
    <div 
      dangerouslySetInnerHTML={{
        __html: `
          <iframe 
            src="/products.html" 
            width="100%" 
            height="800" 
            frameBorder="0"
            style="border: none; overflow: hidden;"
            title="Product Carousel"
          ></iframe>
        `
      }}
    />
  );
};

export default ProductCarousel;