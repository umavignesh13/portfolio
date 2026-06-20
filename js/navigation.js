/* Navigation menu toggles, sticky behavior and scroll tracking */

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('#mainNav a');
    
    // Sticky Header Scroll State
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile Navigation Menu Toggle
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function () {
            const isOpen = mainNav.classList.contains('mobile-open');
            if (isOpen) {
                mainNav.classList.remove('mobile-open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            } else {
                mainNav.classList.add('mobile-open');
                navToggle.setAttribute('aria-expanded', 'true');
                navToggle.innerHTML = '<i class="fas fa-times"></i>';
            }
        });
        
        // Close menu on selecting any link in mobile drawer view
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                if (mainNav.classList.contains('mobile-open')) {
                    mainNav.classList.remove('mobile-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }
    
    // Scroll active link highlight tracking
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };
    
    const sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
