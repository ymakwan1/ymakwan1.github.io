// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const headingElement = document.getElementById('welcome-heading');
    const heading = "Delighted to see you!";
    let headingIndex = 0;

    // Typewriter effect script for p tag
    const messageElement = document.getElementById('welcome-message');
    const message = "yash@127.0.0.1:~/$: cat welcome.txt \n yash@127.0.0.1:~/$: I am Yash, Nice to meet you!";
    let messageIndex = 0;

    function typeMessage() {
        if (messageIndex < message.length) {
            if (message.charAt(messageIndex) === '\n') {
                messageElement.innerHTML += '<br>'; // Add line break
            } else {
                messageElement.innerHTML += message.charAt(messageIndex);
            }
            messageIndex++;
            setTimeout(typeMessage, 100); // Adjust typing speed here (in milliseconds)
        } else {
            // Fade out the elements after the typewriter effect is complete
            setTimeout(function() {
                headingElement.style.transition = "opacity 1s";
                messageElement.style.transition = "opacity 1s";
                headingElement.style.opacity = "0";
                messageElement.style.opacity = "0";
                // Navigate to the About Me page after fadeout
                setTimeout(function() {
                    // window.location.href = "https://ymakwan1.github.io/about/";
                    window.location.href = "about/";
                }, 1000); // Adjust timing as needed
            }, 2000); // Adjust timing as needed
        }
    }

    // Start the typewriter effect for the message
    typeMessage();
});


document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");
});
