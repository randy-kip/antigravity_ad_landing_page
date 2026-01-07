// KiDaFlow Landing Page - Interactive Features
// ============================================

// Smooth Scroll for Navigation Links
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

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Optionally unobserve after revealing
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with scroll-reveal class
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));
});

// Add animation delay to grid items
document.addEventListener('DOMContentLoaded', () => {
    // Problem cards
    const problemCards = document.querySelectorAll('.problem-card');
    problemCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
    });

    // Testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });

    // Stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
    });
});

// Parallax effect for hero section (only on desktop)
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const hero = document.querySelector('.hero');

    // Only apply parallax on screens wider than 768px to prevent button disappearing
    if (hero && scrollY < window.innerHeight && window.innerWidth > 768) {
        hero.style.transform = `translateY(${scrollY * 0.5}px)`;
        hero.style.opacity = 1 - (scrollY / window.innerHeight) * 0.5;
    } else if (hero && window.innerWidth <= 768) {
        // Reset transform and opacity on mobile
        hero.style.transform = 'none';
        hero.style.opacity = '1';
    }

    lastScrollY = scrollY;
}, { passive: true });

// Video lazy loading optimization
document.addEventListener('DOMContentLoaded', () => {
    const iframes = document.querySelectorAll('iframe');

    iframes.forEach(iframe => {
        // Add loading attribute for better performance
        iframe.setAttribute('loading', 'lazy');
    });
});

// Track CTA button clicks (for analytics)
document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.btn-primary');

    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            // You can add analytics tracking here
            console.log('CTA clicked:', button.textContent);

            // Optional: Add a subtle animation feedback
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        });
    });
});

// Calendar embed optimization
document.addEventListener('DOMContentLoaded', () => {
    const calendarContainer = document.querySelector('.calendar-container');

    if (calendarContainer) {
        // Observe when calendar comes into view
        const calObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Calendar is in view - you can trigger analytics here
                    console.log('Calendar viewed');
                    calObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        calObserver.observe(calendarContainer);
    }
});

// Add hover effect to testimonial cards
document.addEventListener('DOMContentLoaded', () => {
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(-4px)';
        });
    });
});

// Prevent layout shift by setting video container height
document.addEventListener('DOMContentLoaded', () => {
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(container => {
        const iframe = container.querySelector('iframe');
        if (iframe) {
            // Ensure 16:9 aspect ratio is maintained
            const resizeObserver = new ResizeObserver(() => {
                const width = container.offsetWidth;
                const height = (width * 9) / 16;
                container.style.height = `${height}px`;
            });

            resizeObserver.observe(container);
        }
    });
});

// Add loading state for page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger initial animations
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '1';
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const handleScroll = debounce(() => {
    // Add any scroll-based logic here
    const scrollPosition = window.scrollY;

    // Example: Add class to body when scrolled
    if (scrollPosition > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
}, 10);

window.addEventListener('scroll', handleScroll, { passive: true });
