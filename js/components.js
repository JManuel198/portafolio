const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');

navToggle.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú');
    });
});
