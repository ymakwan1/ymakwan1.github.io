document.addEventListener("DOMContentLoaded", function() {
    // Fade out the text after animation
    setTimeout(function() {
        const elements = document.querySelectorAll('.fade-out');
        elements.forEach(function(element) {
            element.style.opacity = '0';
        });
    }, 2000); 

    // Navigate to the About page after fading out
    setTimeout(function() {
        window.location.href = "/about/";
    }, 3500); 
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
