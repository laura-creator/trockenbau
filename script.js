/**
 * Trockenbau Lohmann Website Scripts
 * Handles mobile navigation and header scroll effects.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Elements ---
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.header');
    const navItems = document.querySelectorAll('.nav-links a');

    // --- Mobile Menu Toggle ---
    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            // Toggle the 'active' class to slide menu in/out
            navLinks.classList.toggle('active');
            
            // Optional: Animate burger icon (e.g., turn into X)
            // You would add a class to burgerMenu here to change its CSS
        });
    }

    // --- Close Mobile Menu on Link Click ---
    // Ensures the menu closes when a user clicks a section link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- Header Scroll Effect ---
    // Adds a background and shadow to the header when scaffolding down
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Check initial state in case page loads scrolled down
    handleScroll();

});