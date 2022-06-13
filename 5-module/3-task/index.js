function initCarousel() {
  const buttonRight = document.querySelector(
    ".carousel__arrow carousel__arrow_right"
  );

  const buttonLeft = document.querySelector(
    ".carousel__arrow carousel__arrow_left"
  );

  const images = document.querySelector(".carousel__inner");

  const imagesInner = document.querySelectorAll(".carousel__slide");

  let index = 0;

  buttonRight.addEventListener("click", () => {
    index--;
    changeImage();
  });

  buttonLeft.addEventListener("click", () => {
    index++;
    changeImage();
  });

  function changeImage() {
    imagesInner.addEventListener("click", () => {
      imagesInner.style.transform = "translateX(-988px)";
      if (imagesInner.length - 1) {
        carouselArrow.style.display = "none";
      } else carouselArrow.style.display = "";
    });
  }
}
