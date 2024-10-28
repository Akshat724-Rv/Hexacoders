alert("hello")
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function changeSlide(direction) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}

// Initialize the first slide as active
slides[0].classList.add("active");

