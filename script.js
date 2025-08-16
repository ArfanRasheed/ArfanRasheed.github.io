// script.js

document.addEventListener('DOMContentLoaded', function () {
    loadComponents();
    setTimeout(setActiveNavLink, 0); // Ensure active class is set after header loads
    initPage();
});

function loadComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');

    // Load header dynamically without a container
    headerPlaceholder.innerHTML = `
        <header class="header">
            <h1>Arfan Rasheed</h1>
            <nav>
                <a href="index.html" class="nav-link">Home</a>
                <a href="about.html" class="nav-link">About</a>
                <a href="projects.html" class="nav-link">Projects</a>
            </nav>
        </header>
    `;
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initPage() {
    console.log('portfolio loaded successfully.');
}
