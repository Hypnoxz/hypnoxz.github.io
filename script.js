// Animación sutil del fondo del hero
const heroBackground = document.querySelector('.hero-background');
let position = 0;

function animateBackground() {
  position -= 0.5;
  heroBackground.style.transform = `translateX(${position}px)`;
  if (position <= -1440) {
    position = 0;
  }
  requestAnimationFrame(animateBackground);
}

animateBackground();

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
