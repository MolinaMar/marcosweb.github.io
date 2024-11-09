let currentSlide = 0;
let intervalId; // Variable para almacenar el ID del intervalo

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        if (i === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    const slideContainer = document.querySelector('.carousel-slide');
    slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startCarousel() {
    intervalId = setInterval(() => {
        nextSlide();
    }, 5000); // Cambia la imagen cada 5 segundos (5000 milisegundos)
}

function stopCarousel() {
    clearInterval(intervalId); // Detiene el intervalo
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    startCarousel(); // Inicia el carrusel automáticamente al cargar la página
});
