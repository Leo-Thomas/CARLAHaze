let slideIndex = [1, 1, 1, 1];  // Agregar índice para el nuevo carrusel
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"];  // Agregar nuevo carrusel

// Inicializar todos los carruseles al cargar la página
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

// Función para avanzar o retroceder diapositivas
function plusSlides(n, carouselIndex) {
    showSlides(slideIndex[carouselIndex] += n, carouselIndex);
}

// Función para ir a una diapositiva específica
function currentSlide(carouselIndex, n) {
    showSlides(slideIndex[carouselIndex] = n, carouselIndex);
}

// Función para mostrar diapositivas
function showSlides(n, carouselIndex) {
    let i;
    let slides = document.getElementsByClassName(slideId[carouselIndex]);
    let dots = document.getElementsByClassName('dot' + (carouselIndex + 1));

    // Asegurar que el índice se mantenga dentro del rango
    if (n > slides.length) {
        slideIndex[carouselIndex] = 1;
    }
    if (n < 1) {
        slideIndex[carouselIndex] = slides.length;
    }

    // Ocultar todas las diapositivas del carrusel actual
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remover la clase 'active' de todos los puntos de navegación
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Mostrar la diapositiva actual y marcar el punto de navegación correspondiente
    slides[slideIndex[carouselIndex] - 1].style.display = "block";
    if (dots.length > 0) {
        dots[slideIndex[carouselIndex] - 1].className += " active";
    }
}

// Agregar efecto de hover en enlaces
const link = document.querySelector('a');
if (link) {
    link.addEventListener('mouseover', () => {
        link.querySelector('span').style.visibility = 'visible';
        link.querySelector('span').style.transform = 'scaleX(1)';
    });
    link.addEventListener('mouseout', () => {
        link.querySelector('span').style.visibility = 'hidden';
        link.querySelector('span').style.transform = 'scaleX(0)';
    });
}
