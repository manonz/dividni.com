
const slides = document.querySelectorAll(".slide");
const progress = document.getElementById("progress");

let currentSlide = 0;

function showSlide(index) {

   if (index < 0) {
      index = slides.length - 1;
   }

   if (index >= slides.length) {
      index = 0;
   }

   slides[currentSlide].classList.remove("active");

   currentSlide = index;

   slides[currentSlide].classList.add("active");

   const percentage =
      ((currentSlide + 1) / slides.length) * 100;

   progress.style.width = percentage + "%";

   window.scrollTo(0, 0);
}

function nextSlide() {
   showSlide(currentSlide + 1);
}

function previousSlide() {
   showSlide(currentSlide - 1);
}

function toggleFullscreen() {

   if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
   }
   else {
      document.exitFullscreen();
   }

}

document.addEventListener("keydown", function (event) {

   switch (event.key) {

      case "ArrowRight":
      case "PageDown":
      case " ":
         event.preventDefault();
         nextSlide();
         break;

      case "ArrowLeft":
      case "PageUp":
         event.preventDefault();
         previousSlide();
         break;

      case "Home":
         event.preventDefault();
         showSlide(0);
         break;

      case "End":
         event.preventDefault();
         showSlide(slides.length - 1);
         break;

      case "f":
      case "F":
         toggleFullscreen();
         break;
   }

});

function addSlideNumbers() {

   slides.forEach((slide, index) => {

      const number = document.createElement("div");

      number.className = "slide-number";
      number.textContent = `${index + 1}/${slides.length}`;

      slide.appendChild(number);

   });

}

addSlideNumbers();
showSlide(0);


