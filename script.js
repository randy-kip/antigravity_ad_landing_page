// Simple interactivity for the landing page
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('click', () => {
        // Add a ripple effect
        ctaButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            ctaButton.style.transform = '';
        }, 150);
        
        // Simple alert for demonstration
        alert('Thank you for your interest! This is a demo landing page.');
    });

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});
