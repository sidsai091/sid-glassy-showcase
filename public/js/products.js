// Product Carousel JavaScript
class ProductCarousel {
    constructor() {
        this.currentIndex = 0;
        this.itemsPerView = 3;
        this.totalProducts = 5;
        
        this.carouselTrack = document.getElementById('carouselTrack');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.indicatorsContainer = document.getElementById('indicators');
        
        this.init();
    }
    
    init() {
        this.updateItemsPerView();
        this.createIndicators();
        this.bindEvents();
        this.updateCarousel();
        
        // Listen for window resize
        window.addEventListener('resize', () => {
            this.updateItemsPerView();
            this.updateCarousel();
        });
    }
    
    updateItemsPerView() {
        const width = window.innerWidth;
        
        if (width < 640) {
            this.itemsPerView = 1; // Mobile: 1 item
        } else if (width < 1024) {
            this.itemsPerView = 2; // Tablet: 2 items
        } else {
            this.itemsPerView = 3; // Desktop: 3 items
        }
        
        // Update CSS flex-basis for product cards
        const productCards = document.querySelectorAll('.product-card');
        const percentage = 100 / this.itemsPerView;
        
        productCards.forEach(card => {
            card.style.flex = `0 0 ${percentage}%`;
        });
    }
    
    get maxIndex() {
        return Math.max(0, this.totalProducts - this.itemsPerView);
    }
    
    createIndicators() {
        this.indicatorsContainer.innerHTML = '';
        
        for (let i = 0; i <= this.maxIndex; i++) {
            const dot = document.createElement('button');
            dot.className = `indicator-dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => this.goToSlide(i));
            this.indicatorsContainer.appendChild(dot);
        }
    }
    
    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Add to cart button functionality
        const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
        addToCartBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => this.addToCart(index));
        });
        
        // Favorite button functionality
        const favoriteBtns = document.querySelectorAll('.favorite-btn');
        favoriteBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => this.toggleFavorite(index, btn));
        });
    }
    
    prevSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    }
    
    nextSlide() {
        if (this.currentIndex < this.maxIndex) {
            this.currentIndex++;
            this.updateCarousel();
        }
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }
    
    updateCarousel() {
        // Update transform
        const translateX = -(this.currentIndex * (100 / this.itemsPerView));
        this.carouselTrack.style.transform = `translateX(${translateX}%)`;
        
        // Update navigation buttons
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.maxIndex;
        
        // Update indicators
        const dots = document.querySelectorAll('.indicator-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
        
        // Recreate indicators if needed (when screen size changes)
        if (dots.length !== this.maxIndex + 1) {
            this.createIndicators();
        }
    }
    
    addToCart(productIndex) {
        const products = [
            { id: 1, name: "UIAM", price: "RM69" },
            { id: 2, name: "UITM", price: "RM69" },
            { id: 3, name: "To be Added", price: "$???" },
            { id: 4, name: "To be Added", price: "$???" },
            { id: 5, name: "To be Added", price: "$???" }
        ];
        
        const product = products[productIndex];
        
        // Simple alert for demo - replace with your cart functionality
        if (product.price !== "$???") {
            alert(`Added ${product.name} (${product.price}) to cart!`);
            
            // Add some visual feedback
            const btn = document.querySelectorAll('.add-to-cart-btn')[productIndex];
            const originalText = btn.innerHTML;
            
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
                <span>Added!</span>
            `;
            btn.style.background = '#22c55e';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '#1a1a1a';
            }, 2000);
        } else {
            alert('This product is not available yet!');
        }
    }
    
    toggleFavorite(productIndex, btn) {
        const isActive = btn.classList.contains('active');
        
        if (isActive) {
            btn.classList.remove('active');
            btn.style.color = '#1a1a1a';
            btn.style.background = 'rgba(255, 255, 255, 0.9)';
        } else {
            btn.classList.add('active');
            btn.style.color = '#ef4444';
            btn.style.background = 'rgba(255, 255, 255, 0.9)';
        }
        
        // Simple alert for demo - replace with your favorites functionality
        const products = ["UIAM", "UITM", "To be Added", "To be Added", "To be Added"];
        const action = isActive ? 'removed from' : 'added to';
        alert(`${products[productIndex]} ${action} favorites!`);
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProductCarousel();
});

// Add some additional interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scroll behavior for any anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add intersection observer for fade-in animation
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe the products section
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
        productsSection.style.opacity = '0';
        productsSection.style.transform = 'translateY(50px)';
        productsSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(productsSection);
    }
});