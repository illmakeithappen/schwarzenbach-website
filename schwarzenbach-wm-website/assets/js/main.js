/**
 * Schwarzenbach Wealth Management - Main JavaScript
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle (if needed in future)
    initMobileMenu();

    // Smooth Scroll for Navigation Links
    initSmoothScroll();

    // Nav shrink on scroll
    initNavShrink();

    // Benefits accordion
    initBenefitsAccordion();
});

/**
 * Shrink navigation on scroll
 */
function initNavShrink() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 60) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

/**
 * Benefits accordion on index page
 */
function initBenefitsAccordion() {
    const items = document.querySelectorAll('.benefits-accordion-item');
    items.forEach(item => {
        const trigger = item.querySelector('.benefits-accordion-trigger');
        const content = item.querySelector('.benefits-accordion-content');
        const icon = item.querySelector('.benefits-accordion-icon');

        if (!trigger || !content) return;

        trigger.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            if (isOpen) {
                item.classList.remove('active');
                content.style.maxHeight = null;
                icon.textContent = '+';
            } else {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.textContent = '+';
            }
        });
    });
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    // Placeholder for mobile menu toggle functionality
    // Can be implemented when hamburger menu is added
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Utility function to check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Add scroll animations (optional - can be enabled later)
 */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

/**
 * FAQ Accordion Functionality
 */
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    const expandAllBtn = document.getElementById('expand-all');
    const collapseAllBtn = document.getElementById('collapse-all');

    // Toggle individual FAQ items
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            if (isOpen) {
                // Close this item
                item.classList.remove('active');
                answer.style.maxHeight = null;
                icon.textContent = '+';
            } else {
                // Open this item
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.textContent = '−';
            }
        });
    });

    // Expand all button
    if (expandAllBtn) {
        expandAllBtn.addEventListener('click', () => {
            faqItems.forEach(item => {
                const answer = item.querySelector('.faq-answer');
                const icon = item.querySelector('.faq-icon');
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.textContent = '−';
            });
        });
    }

    // Collapse all button
    if (collapseAllBtn) {
        collapseAllBtn.addEventListener('click', () => {
            faqItems.forEach(item => {
                const answer = item.querySelector('.faq-answer');
                const icon = item.querySelector('.faq-icon');
                item.classList.remove('active');
                answer.style.maxHeight = null;
                icon.textContent = '+';
            });
        });
    }
}

// Initialize FAQ accordion if on FAQ page
if (document.querySelector('.faq-section')) {
    document.addEventListener('DOMContentLoaded', initFAQAccordion);
}
