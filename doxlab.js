document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(initializeCarousel);

    // Logo hover effect
    const logo = document.querySelector('.logo-container');
    logo.addEventListener('mouseover', () => {
        logo.querySelector('.logo').style.transform = 'scale(1.1)';
    });
    logo.addEventListener('mouseout', () => {
        logo.querySelector('.logo').style.transform = 'scale(1)';
    });

    // Handle main section fade and logo position on scroll
    const mainSection = document.querySelector('.main-section');
    mainSection.style.opacity = 1; // Ensure it's visible initially
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Main section fade only affects main section
        if (scrollPosition < windowHeight) {
            const opacity = Math.max(0, 1 - (scrollPosition / (windowHeight * 0.7)));
            mainSection.style.opacity = opacity;
        }

        // Calculate logo position
        const startTransition = windowHeight * 0.5;
        const endTransition = windowHeight;
        const startTop = 50;
        const endTop = 10;
        
        if (scrollPosition >= startTransition) {
            const progress = Math.min((scrollPosition - startTransition) / (endTransition - startTransition), 1);
            const currentTop = startTop - (progress * (startTop - endTop));
            logo.style.top = `${currentTop}%`;
            logo.style.transform = `translate(-50%, -50%) scale(${1 - (progress * 0.3)})`;
        } else {
            logo.style.top = '50%';
            logo.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    });
});

function initializeCarousel(carousel) {
    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = Math.floor(items.length / 2); // Start from middle item

    // Set initial active states
    updateCarousel(carousel, currentIndex);

    // Add wheel event listener for scrolling
    carousel.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
            currentIndex = Math.min(currentIndex + 1, items.length - 1);
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
        }
        updateCarousel(carousel, currentIndex);
    });

    // Add touch support
    let touchStartY = 0;
    carousel.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });

    carousel.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touchEndY = e.touches[0].clientY;
        const deltaY = touchEndY - touchStartY;

        if (Math.abs(deltaY) > 30) { // Minimum swipe distance
            if (deltaY < 0) {
                currentIndex = Math.min(currentIndex + 1, items.length - 1);
            } else {
                currentIndex = Math.max(currentIndex - 1, 0);
            }
            updateCarousel(carousel, currentIndex);
            touchStartY = touchEndY;
        }
    });

    // Add click handling
    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(carousel, currentIndex);
        });
    });
}

function updateCarousel(carousel, currentIndex) {
    const items = carousel.querySelectorAll('.carousel-item');
    const containerHeight = 400; // Height of the carousel wrapper
    const itemHeight = 70; // Height of each item
    const spacing = 10; // Spacing between items
    const totalItemHeight = itemHeight + spacing;
    const centerPosition = containerHeight / 2 - itemHeight / 2;
    
    // Find custom solution note
    const customNote = carousel.closest('.carousel-section').querySelector('.custom-solution-note');
    
    items.forEach((item, index) => {
        const offset = index - currentIndex;
        item.classList.remove('active');
        
        item.style.transform = `
            translateY(${centerPosition + (offset * totalItemHeight)}px)
            scale(${1 - Math.abs(offset) * 0.05})
            translateZ(${-Math.abs(offset) * 200}px)
        `;
        item.style.opacity = 1 - Math.abs(offset) * 0.2;
        item.style.zIndex = items.length - Math.abs(offset);
        
        if (index === currentIndex) {
            item.classList.add('active');
            // Show/hide custom solution note
            if (customNote && item.dataset.model === 'doxer') {
                customNote.classList.add('visible');
            } else if (customNote) {
                customNote.classList.remove('visible');
            }
        }
    });
}

// Feature showcase animation
const features = document.querySelectorAll('.feature');
features.forEach(feature => {
    // Reset any inline styles that might have been set
    feature.style.opacity = '';
    feature.style.transform = '';
});

// Remove old observers
if (window.sectionObserver) {
    window.sectionObserver.disconnect();
}

// Handle section visibility
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

// Observe main and features sections
document.querySelector('.main-section').classList.add('visible'); // Show main section initially
sectionObserver.observe(document.querySelector('.main-section'));
sectionObserver.observe(document.querySelector('.features-section'));
