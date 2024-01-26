let currentSlideIndex = 0;
showSlide(currentSlideIndex);

function shiftSlides(n) {
  showSlide((currentSlideIndex += n));
}

function currentSlide(n) {
  showSlide((currentSlideIndex = n - 1));
}

function showSlide(index) {
  const slides = document.getElementsByClassName("slider-image");
  const dots = document.getElementsByClassName("dot");

  if (index >= slides.length) {
    currentSlideIndex = 0;
  }

  if (index < 0) {
    currentSlideIndex = slides.length - 1;
  }

  //hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //deactivate all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  //display the current slide
  slides[currentSlideIndex].style.display = "block";

  //activate the dot of the current slide
  dots[currentSlideIndex].classList.add("active");
}
