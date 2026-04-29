// Animación de la barra de navegación
const navbar = document.querySelector('.my-nav');
    window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    });