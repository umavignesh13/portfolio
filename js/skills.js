/* Skills category selector behaviour */

document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.skills-tab-btn');
    const skillCards = document.querySelectorAll('.skill-detail-card');
    
    // Setup initial filter based on active tab
    const activeTab = document.querySelector('.skills-tab-btn.active');
    if (activeTab) {
        filterSkills(activeTab.getAttribute('data-category'));
    }
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active classes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter skills
            const category = this.getAttribute('data-category');
            filterSkills(category);
        });
    });
    
    function filterSkills(category) {
        skillCards.forEach(card => {
            const categories = card.getAttribute('data-categories');
            if (categories && categories.includes(category)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }
});
