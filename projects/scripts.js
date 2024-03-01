document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.body.style.opacity = 0;
        setTimeout(function() {
            window.location.href = href;
        }, 500); // Adjust the delay time as needed
    });
});
