// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Product carousel functionality
class ProductCarousel {
    constructor() {
        this.carousel = document.getElementById('productCarousel');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.currentIndex = 0;
        this.cardWidth = 300; // 280px + 20px gap
        this.init();
    }

    init() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        this.updateCarousel();
    }

    prevSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    }

    nextSlide() {
        const maxIndex = this.carousel.children.length - this.getVisibleCards();
        if (this.currentIndex < maxIndex) {
            this.currentIndex++;
            this.updateCarousel();
        }
    }

    getVisibleCards() {
        const containerWidth = this.carousel.parentElement.offsetWidth;
        return Math.floor(containerWidth / this.cardWidth);
    }

    updateCarousel() {
        const translateX = -this.currentIndex * this.cardWidth;
        this.carousel.style.transform = `translateX(${translateX}px)`;
    }
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
    new ProductCarousel();
});

// FAQ accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Animated counters
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    }
    
    updateCounter();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate counters when stats section is visible
            if (entry.target.classList.contains('stats-section')) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                });
            }
        }
    });
}, observerOptions);

// Add animation classes and observe elements
document.addEventListener('DOMContentLoaded', () => {
    // Add animate-on-scroll class to sections
    const sections = document.querySelectorAll('.gallery, .products, .feedback-stats, .collaborators, .faq');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });

    // Observe stats section separately for counter animation
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Gallery image rotation
    const galleryImages = [
        'src/assets/product1.jpg',
        'src/assets/product2.jpg',
        'src/assets/product3.jpg',
        'src/assets/product4.jpg',
        'src/assets/product5.jpg'
    ];

    let currentImageIndex = 0;
    const mainGalleryImg = document.querySelector('.large-card .gallery-image');
    
    function rotateGalleryImages() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        if (mainGalleryImg) {
            mainGalleryImg.src = galleryImages[currentImageIndex];
        }
    }

    // Rotate images every 5 seconds
    setInterval(rotateGalleryImages, 5000);
});

// Mobile menu functionality
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('h3').textContent;
        
        // Simple feedback
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-check"></i> Added!';
        this.style.background = '#28a745';
        
        setTimeout(() => {
            this.innerHTML = originalText;
            this.style.background = '#1a1a1a';
        }, 2000);
        
        console.log(`Added ${productName} to cart`);
    });
});

// Responsive carousel adjustment
window.addEventListener('resize', () => {
    if (window.productCarousel) {
        window.productCarousel.updateCarousel();
    }
});

// Hero CTA button functionality
document.querySelector('.cta-button').addEventListener('click', function() {
    document.getElementById('gallery').scrollIntoView({
        behavior: 'smooth'
    });
});

// View All Collections button
document.querySelector('.view-all-btn').addEventListener('click', function() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
});