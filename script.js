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

});```

---

### Optional: If you prefer TypeScript (`script.ts`)

If you are using a build tool (like Webpack, Vite, or Parcel) and prefer TypeScript, here is the typed version of the script. **Do not use this if you are just opening `index.html` in a browser.**

```typescript
/**
 * Trockenbau Lohmann Website Scripts (TypeScript Version)
 */

document.addEventListener('DOMContentLoaded', (): void => {
    
    // --- Elements with Type Assertions ---
    const burgerMenu = document.querySelector('.burger-menu') as HTMLElement | null;
    const navLinks = document.querySelector('.nav-links') as HTMLElement | null;
    const header = document.querySelector('.header') as HTMLElement | null;
    const navItems = document.querySelectorAll('.nav-links a');

    // --- Mobile Menu Toggle ---
    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', (): void => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Close Mobile Menu on Link Click ---
    if (navLinks) {
        navItems.forEach((item) => {
            item.addEventListener('click', (): void => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // --- Header Scroll Effect ---
    function handleScroll(): void {
        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
});