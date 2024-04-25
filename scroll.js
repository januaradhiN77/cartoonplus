let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
let touchStartX = 0;
let touchEndX = 0;

function showSlides() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });
}

function nextSlide() {
  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlides();
}

function prevSlide() {
  if (slideIndex === 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
  showSlides();
}

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  if (!touchStartX) {
    return;
  }

  touchEndX = event.touches[0].clientX;
  handleGesture();
}

function handleGesture() {
  const distance = touchEndX - touchStartX;

  if (distance > 0) {
    prevSlide();
  } else {
    nextSlide();
  }

  touchStartX = 0;
  touchEndX = 0;
}

slides.forEach((slide) => {
  slide.addEventListener('touchstart', handleTouchStart);
  slide.addEventListener('touchmove', handleTouchMove);
});

setInterval(nextSlide, 5000); // Geser otomatis setiap 3 detik (ganti 3000 sesuai dengan kebutuhan)

showSlides();
