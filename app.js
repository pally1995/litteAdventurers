const burger = document.querySelector(".burger");
const navBar = document.querySelector("nav");
const navImg = document.querySelector("#navImg");
const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");

burger.addEventListener('click', () => {
    navBar.classList.toggle("open");
    burger.classList.toggle("active");

    if(navBar.classList.contains("open")){
      navImg.style.filter = "brightness(0.2)";
      navImg.style.transition = "0.3s all ease-in-out";
    } else {
      navImg.style.filter = "none";
    }
})

slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
  });
  
  let curSlide = 0;
  let maxSlide = slides.length - 1;
  
  function goToNextSlide() {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
  
    updateSlidePosition();
  }
  
  function goToPrevSlide() {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
  
    updateSlidePosition();
  }
  
  function updateSlidePosition() {
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  }
  
  nextSlide.addEventListener("click", goToNextSlide);
  prevSlide.addEventListener("click", goToPrevSlide);
  
  setInterval(goToNextSlide, 5000); // Automatically go to the next slide every 5 seconds
  