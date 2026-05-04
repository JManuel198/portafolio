// Animación de la barra de navegación
const navbar = document.querySelector('.my-nav');
    window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    });
// Animación de la lista de skills
const skillHeaders = document.querySelectorAll('.skills-header');
let skillActivo = null;
for (const header of skillHeaders) {
    header.addEventListener('click', () => {
        const skillItem = header.parentElement;
        if (skillActivo !== null) {
            skillActivo.classList.remove('activo');
        }
        if (skillActivo === skillItem) {
            skillActivo = null;
        }
        else {
            skillItem.classList.add('activo');
            skillActivo = skillItem;
        }
    });
}