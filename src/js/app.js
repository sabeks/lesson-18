console.log("JavaScript file is linked correctly. Hooray.");
function updateDigitalClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const digitalClock = document.getElementById("digital-clock");
  digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateDigitalClock, 1000);

function initSlider() {
  const slides = document.querySelectorAll(".slide");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  let activeIndex = 0;

  function renderSlides() {
    slides.forEach((slide, index) => {
      if (activeIndex === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  renderSlides();

  function showNext() {
    if (activeIndex === slides.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    renderSlides();
  }

  function showPrev() {
    if (activeIndex === 0) {
      activeIndex = slides.length - 1;
    } else {
      activeIndex--;
    }

    renderSlides();
  }

  next.addEventListener("click", showNext);
  prev.addEventListener("click", showPrev);

  let sliderIntervalId = null;

  function startAutoSliderFn() {
    sliderIntervalId = setInterval(showNext, 4000);
  }

  document.addEventListener("keyup", (e) => {
    // console.log(e);
    if (e.code === "ArrowRight") {
      showNext();
    }
    if (e.code === "ArrowLeft") {
      showPrev();
    }
  });
}

initSlider();

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

slider.addEventListener("mouseenter", stopAutoSlide);
slider.addEventListener("mouseleave", startAutoSlide);

startAutoSlide();
