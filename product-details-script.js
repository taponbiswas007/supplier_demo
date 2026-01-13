// product-details-script.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize thumbnail swiper
    const thumbnailSwiper = new Swiper('.product-thumbnail-swiper', {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: false,
        navigation: {
            nextEl: '.thumbnail-next',
            prevEl: '.thumbnail-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 5,
            },
        },
    });
    
    // Initialize related products swiper
    const relatedSwiper = new Swiper('.related-products-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.related-next',
            prevEl: '.related-prev',
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
        },
    });
    
    // Thumbnail image click handler
    document.querySelectorAll('.thumbnail-slide').forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            document.querySelectorAll('.thumbnail-slide').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Get the large image URL from data attribute
            const largeImageUrl = this.getAttribute('data-image');
            
            // Update main product image
            const mainImage = document.getElementById('mainProductImage');
            mainImage.src = largeImageUrl;
        });
    });
    
    // Product quote form submission
    const productQuoteForm = document.getElementById('productQuoteForm');
    const submitQuoteBtn = document.getElementById('submitQuote');
    
    if (submitQuoteBtn && productQuoteForm) {
        submitQuoteBtn.addEventListener('click', function() {
            // Basic form validation
            const name = document.getElementById('quoteName').value;
            const email = document.getElementById('quoteEmail').value;
            const quantity = document.getElementById('quoteQuantity').value;
            
            if (!name || !email || !quantity) {
                alert('Please fill in all required fields (Name, Email, and Quantity).');
                return;
            }
            
            // In a real application, you would send the form data to a server
            // For demo purposes, we'll just show an alert
            alert('Thank you for your quote request! Our sales team will contact you within 24 hours with pricing for the Premium Wireless Earbuds.');
            
            // Close modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
            modal.hide();
            
            // Reset form
            productQuoteForm.reset();
        });
    }
    
    // Share buttons functionality
    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const productUrl = window.location.href;
            const productTitle = document.querySelector('.product-title').textContent;
            
            // Determine which share button was clicked
            if (this.classList.contains('facebook')) {
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`, '_blank');
            } else if (this.classList.contains('twitter')) {
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(productTitle)}&url=${encodeURIComponent(productUrl)}`, '_blank');
            } else if (this.classList.contains('linkedin')) {
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(productUrl)}`, '_blank');
            } else if (this.classList.contains('email')) {
                window.location.href = `mailto:?subject=${encodeURIComponent(productTitle)}&body=${encodeURIComponent(`Check out this product: ${productUrl}`)}`;
            }
        });
    });
    
    // Load more reviews button
    const loadMoreReviewsBtn = document.querySelector('.tab-content button');
    if (loadMoreReviewsBtn && loadMoreReviewsBtn.textContent.includes('Load More')) {
        loadMoreReviewsBtn.addEventListener('click', function() {
            // In a real application, this would load more reviews from a server
            // For demo, we'll just show an alert
            alert('This would load more reviews in a real implementation.');
        });
    }
    
    // Update breadcrumb based on product category
    const categoryLink = document.querySelector('.category-link');
    if (categoryLink) {
        const categoryName = categoryLink.textContent;
        const breadcrumbCategory = document.querySelector('.breadcrumb-item:nth-child(3) a');
        if (breadcrumbCategory) {
            breadcrumbCategory.textContent = categoryName;
        }
    }
});