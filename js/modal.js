/* Modal popup operations for CV and Certificates */

document.addEventListener('DOMContentLoaded', function () {
    const resumeModal = document.getElementById('resumeModal');
    const certModal = document.getElementById('certModal');
    
    // Resume Toggles
    const resumeCta = document.getElementById('resumeCta');
    const heroResumeBtn = document.getElementById('heroResumeBtn');
    const closeResumeModal = document.getElementById('closeResumeModal');
    
    // Certifications Toggles
    const certCards = document.querySelectorAll('.cert-card-click');
    const certModalTitle = document.getElementById('certModalTitle');
    const certDisplayTitle = document.getElementById('certDisplayTitle');
    const closeCertModal = document.getElementById('closeCertModal');
    
    // Open Resume Modal
    const openResume = function (e) {
        e.preventDefault();
        if (resumeModal) {
            resumeModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Stop background scroll
        }
    };
    
    if (resumeCta) resumeCta.addEventListener('click', openResume);
    if (heroResumeBtn) heroResumeBtn.addEventListener('click', openResume);
    
    // Close Resume Modal
    if (closeResumeModal) {
        closeResumeModal.addEventListener('click', function () {
            resumeModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Open Certificate Modal
    certCards.forEach(card => {
        card.addEventListener('click', function () {
            const certName = this.getAttribute('data-cert');
            const certIssuer = this.getAttribute('data-issuer') || '';
            const certId = this.getAttribute('data-id') || '';
            const certUrl = this.getAttribute('data-url') || '#';
            
            if (certModal) {
                if (certModalTitle) certModalTitle.textContent = `${certName} - Details`;
                if (certDisplayTitle) certDisplayTitle.textContent = certName;
                
                const issuerEl = document.getElementById('certDisplayIssuer');
                if (issuerEl) issuerEl.textContent = certIssuer;
                
                const idEl = document.getElementById('certDisplayId');
                if (idEl) {
                    idEl.textContent = certId ? `Credential Info: ${certId}` : '';
                }
                
                const verifyBtn = document.getElementById('certVerifyBtn');
                if (verifyBtn) {
                    verifyBtn.setAttribute('href', certUrl);
                    if (certUrl === '#') {
                        verifyBtn.style.display = 'none';
                    } else {
                        verifyBtn.style.display = 'inline-block';
                    }
                }
                
                certModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close Certificate Modal
    if (closeCertModal) {
        closeCertModal.addEventListener('click', function () {
            certModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Click outside backdrop to close
    window.addEventListener('click', function (e) {
        if (e.target === resumeModal) {
            resumeModal.classList.remove('active');
            document.body.style.overflow = '';
        }
        if (e.target === certModal) {
            certModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Press Escape to close
    window.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            if (resumeModal) resumeModal.classList.remove('active');
            if (certModal) certModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
