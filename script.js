// script.js

document.addEventListener('DOMContentLoaded', function () {
    loadComponents();
    initPage();
});

function loadComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    // Load header dynamically without a container
    headerPlaceholder.innerHTML = `
        <header class="header">
            <h1>Arfan Rasheed</h1>
            <nav>
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="projects.html">Projects</a>
            </nav>
        </header>
    `;

    // Load footer dynamically
    footerPlaceholder.innerHTML = `
        <footer class="footer">
            <p>
                <a href="https://linkedin.com/in/arfan-rasheed-7197b32a2" target="_blank" rel="noopener noreferrer">
                    <img src="linkedin-logo.png" alt="LinkedIn Logo" class="social-logo"> LinkedIn
                </a>
            </p>
            <p>
                <a href="https://github.com/ArfanRasheed" target="_blank" rel="noopener noreferrer">
                    <img src="github-logo.png" alt="GitHub Logo" class="social-logo"> GitHub
                </a>
            </p>
        </footer>
    `;
}

function initPage() {
    console.log('portfolio loaded successfully.');
}
