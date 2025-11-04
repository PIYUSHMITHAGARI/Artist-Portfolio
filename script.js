// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    menuToggle.querySelector('.hamburger').textContent =
        mainNav.classList.contains('open') ? '✕' : '☰';
});

// Lightbox functionality
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lbImage = document.getElementById('lbImage');
const lbTitle = document.getElementById('lbTitle');
const lbDesc = document.getElementById('lbDesc');
const closeLb = document.getElementById('closeLb');

function openLightbox(src, title, desc) {
    lbImage.src = src;
    lbImage.alt = title;
    lbTitle.textContent = title;
    lbDesc.textContent = desc;
    lightbox.classList.add('visible');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('visible');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
}

gallery.addEventListener('click', (e) => {
    const fig = e.target.closest('.art-item');
    if (!fig) return;
    openLightbox(fig.dataset.src, fig.dataset.title, fig.dataset.desc);
});

closeLb.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // In a real implementation, you would send this data to a server
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            mainNav.classList.remove('open');
            menuToggle.querySelector('.hamburger').textContent = '☰';

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    fadeInObserver.observe(element);
});

// Update copyright year
document.querySelector('.copyright').innerHTML = `© ${new Date().getFullYear()} Priyanshu Mithagari. All rights reserved.`;
