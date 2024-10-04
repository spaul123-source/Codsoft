// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter Form Submission Alert
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    
    const emailInput = this.querySelector('input[type="email"]');
    alert(`Thank you for subscribing with the email: ${emailInput.value}`);
    
    emailInput.value = ''; // Clear the input after submission
});
