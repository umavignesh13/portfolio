/* Scroll reveal observer animation triggers */

document.addEventListener('DOMContentLoaded', function () {
    const scrollElements = document.querySelectorAll('.scroll-trigger');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15
    };
    
    const revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Unobserve once revealed
            }
        });
    }, observerOptions);
    
    scrollElements.forEach(element => {
        revealObserver.observe(element);
    });
    
    // Animate Hero elements immediately on load
    const heroReveals = document.querySelectorAll('.animate-reveal, .animate-reveal-right');
    setTimeout(function () {
        heroReveals.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translate(0, 0)';
        });
    }, 400);
});
