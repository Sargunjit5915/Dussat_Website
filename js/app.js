// Mobile nav
(() => {
  const btn   = document.querySelector('.mobile-toggle');
  const links = document.querySelector('header .nav .links');
  if (!btn || !links) return;

  // make sure header can anchor an absolute menu
  document.querySelector('header .nav')?.classList.add('has-mobile-menu');

  const close = () => {
    links.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.setAttribute('aria-expanded', 'false');
  btn.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // close when a link is tapped or when clicking outside
  links.addEventListener('click', e => {
    if (e.target.tagName === 'A') close();
  });
  document.addEventListener('click', e => {
    if (!links.contains(e.target) && e.target !== btn) close();
  });
})();


// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) e.target.classList.add('in');
  }
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Back-to-top button (optional if added later)
// Smooth anchor scroll is built-in via CSS scroll-behavior.
