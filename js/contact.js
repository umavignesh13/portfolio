/* Contact Form client-side validations and submission behavior */

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Collect fields
            const userName = document.getElementById('userName');
            const userEmail = document.getElementById('userEmail');
            const userMessage = document.getElementById('userMessage');
            
            let isValid = true;
            
            // Clear previous states
            formFeedback.className = 'form-feedback';
            formFeedback.textContent = '';
            userName.classList.remove('invalid');
            userEmail.classList.remove('invalid');
            userMessage.classList.remove('invalid');
            
            // Name validation
            if (!userName.value.trim()) {
                userName.classList.add('invalid');
                isValid = false;
            }
            
            // Email validation
            if (!userEmail.value.trim() || !validateEmail(userEmail.value)) {
                userEmail.classList.add('invalid');
                isValid = false;
            }
            
            // Message validation
            if (!userMessage.value.trim()) {
                userMessage.classList.add('invalid');
                isValid = false;
            }
            
            if (!isValid) {
                formFeedback.classList.add('error');
                formFeedback.textContent = 'Please fill out all required fields with valid values.';
                return;
            }
            
            // Mock dynamic loading states
            const submitBtn = contactForm.querySelector('.form-submit-btn');
            const originalBtnHtml = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            setTimeout(function () {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
                
                formFeedback.classList.add('success');
                formFeedback.textContent = 'Thank you! Your message has been sent successfully.';
                
                // Reset fields
                contactForm.reset();
            }, 1500);
        });
    }
    
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
