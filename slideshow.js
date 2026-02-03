let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function changeSlide(step) {
  showSlide(currentSlide + step);
}

// Auto slide every 4 seconds
setInterval(() => {
  changeSlide(1);
}, 4000);

// Swipe support for phones
let startX = 0;

document.querySelector(".slideshow-container").addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.querySelector(".slideshow-container").addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) changeSlide(1);
  if (endX - startX > 50) changeSlide(-1);
});
