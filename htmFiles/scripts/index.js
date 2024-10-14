// Load Header
fetch('./header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header-container').innerHTML = data;
});

// Load Footer
fetch('./footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-container').innerHTML = data;
});

// Function to toggle the hamburger menu
function toggleMenu() {
    document.body.classList.toggle('nav-open');
}

document.addEventListener("DOMContentLoaded", function() {
    const codeSample = document.getElementById('code-sample');

    const texts = [
        'print("Hello, World!")',  // English
        'Hello, World',
        'print("Habari, Dunia!")',  // Swahili
        'Habari, Dunia',
        'print("Salve, Mundi!")',  // Latin
        'Salve, Mundi'
    ];

    let currentTextIndex = 0;

    function typeText(text) {
        codeSample.style.visibility = "visible";  // Show the element
        codeSample.textContent = '';  // Clear previous content
        codeSample.style.width = '0';  // Reset the width
        let charIndex = 0;

        const typingInterval = setInterval(() => {
            if (charIndex < text.length) {
                codeSample.textContent += text[charIndex];  // Add one character at a time
                charIndex++;
                codeSample.style.width = `${charIndex}ch`;  // Adjust width dynamically
            } else {
                clearInterval(typingInterval);
                setTimeout(showNextText, 1000);  // Wait 1 second before showing the next language
            }
        }, 100);  // Speed of typing (100ms per character)
    }

    function showNextText() {
        currentTextIndex = (currentTextIndex + 1) % texts.length;  // Cycle through the texts
        typeText(texts[currentTextIndex]);
    }

    typeText(texts[currentTextIndex]);  // Start typing the first text
});
