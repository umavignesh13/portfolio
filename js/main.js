/* Main script bundle initialization and preloader dismiss */

window.addEventListener('load', function () {
    // Hide page preloader
    const preloader = document.getElementById('pagePreloader');
    if (preloader) {
        setTimeout(function () {
            preloader.classList.add('hidden');
            setTimeout(function () {
                preloader.remove();
            }, 500);
        }, 500);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Typewriter Subtitle Text animation logic
    const titleElement = document.getElementById('heroSubtitle');
    if (titleElement) {
        const text = titleElement.getAttribute('data-text');
        let index = 0;
        let isDeleting = false;
        
        function typeWriter() {
            if (!isDeleting && index <= text.length) {
                titleElement.textContent = text.slice(0, index);
                index++;
                setTimeout(typeWriter, 120);
            } else if (isDeleting && index >= 0) {
                titleElement.textContent = text.slice(0, index);
                index--;
                setTimeout(typeWriter, 60);
            } else {
                isDeleting = !isDeleting;
                setTimeout(typeWriter, isDeleting ? 2000 : 800);
            }
        }
        
        // Delay starting the typewriter slightly
        setTimeout(typeWriter, 800);
    }
});
