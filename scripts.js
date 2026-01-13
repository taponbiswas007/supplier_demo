// script.js

// Initialize Swiper sliders
document.addEventListener('DOMContentLoaded', function() {
    // Hero Swiper
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.hero-next',
            prevEl: '.hero-prev',
        },
    });
    
    // Category Swiper
    const categorySwiper = new Swiper('.category-swiper', {
        loop: true,
        speed: 600,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.category-next',
            prevEl: '.category-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's a link to a page
            if (href.includes('.html')) return;
            
            e.preventDefault();
            
            if (href !== '#') {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send the form data to a server
            // For demo purposes, we'll just show an alert
            alert('Thank you for your message! Our sales team will contact you within 24 hours.');
            contactForm.reset();
        });
    }
    
    // Modal form submission
    const modalForm = document.querySelector('#contactModal form');
    if (modalForm) {
        const modalSubmitBtn = document.querySelector('#contactModal .btn-primary');
        if (modalSubmitBtn) {
            modalSubmitBtn.addEventListener('click', function() {
                // In a real application, you would send the form data to a server
                // For demo purposes, we'll just show an alert and close the modal
                alert('Thank you for your quote request! We will send you pricing information shortly.');
                
                // Close modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
                modal.hide();
                
                // Reset form
                modalForm.reset();
            });
        }
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Product card click handlers for contact buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Prevent the click from bubbling up to the product card
            e.stopPropagation();
            
            const action = this.getAttribute('title');
            const productTitle = this.closest('.product-card').querySelector('.product-title').textContent;
            
            // In a real implementation, these would trigger actual actions
            switch(action) {
                case 'Call':
                    console.log(`Calling about: ${productTitle}`);
                    // window.location.href = 'tel:+18005551234';
                    break;
                case 'WhatsApp':
                    console.log(`Opening WhatsApp about: ${productTitle}`);
                    // window.open('https://wa.me/18005551234', '_blank');
                    break;
                case 'Email':
                    console.log(`Emailing about: ${productTitle}`);
                    // window.location.href = 'mailto:sales@primesource.com?subject=Inquiry about ' + encodeURIComponent(productTitle);
                    break;
                case 'Contact Form':
                    console.log(`Opening contact form for: ${productTitle}`);
                    // Scroll to contact form and pre-fill product info
                    document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'});
                    break;
            }
        });
    });
    
    // Product card click to view details
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Only redirect if the click wasn't on an action button
            if (!e.target.closest('.action-btn') && !e.target.closest('.btn-outline-primary')) {
                console.log('Redirecting to product details page');
                // In a real implementation:
                // window.location.href = 'product-details.html';
            }
        });
    });
});