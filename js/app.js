
// Mobile nav
const toggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) e.target.classList.add('in');
  }
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Back-to-top button (optional if added later)
// Smooth anchor scroll is built-in via CSS scroll-behavior.
