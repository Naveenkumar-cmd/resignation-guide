/* main.js — shared across all pages */

// ── NAV SCROLL ──────────────────────────────────────────────
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('up', window.scrollY > 22);
  }, { passive: true });
}

// ── HAMBURGER / DRAWER ──────────────────────────────────────
const ham  = document.getElementById('ham');
const draw = document.getElementById('drawer');
if (ham && draw) {
  ham.addEventListener('click', () => {
    ham.classList.toggle('x');
    draw.classList.toggle('show');
    document.body.style.overflow = draw.classList.contains('show') ? 'hidden' : '';
  });
  document.addEventListener('click', e => {
    if (!ham.contains(e.target) && !draw.contains(e.target)) {
      ham.classList.remove('x');
      draw.classList.remove('show');
      document.body.style.overflow = '';
    }
  });
  draw.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      ham.classList.remove('x');
      draw.classList.remove('show');
      document.body.style.overflow = '';
    });
  });
}

// ── SCROLL REVEAL ───────────────────────────────────────────
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
