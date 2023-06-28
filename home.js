const burger = document.querySelector(".burger");
const navBar = document.querySelector("nav");
const mainId = document.querySelector("#main")
const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");
const teamH1 = document.querySelector("#teamH1");
const goToTop = document.querySelector(".goToTop")

burger.addEventListener('click', () => {
  navBar.classList.toggle("open");
  burger.classList.toggle("active");

  if(navBar.classList.contains("open")){
    mainId.style.top = "24rem";
  } else {
    mainId.style.top = "0rem";
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
  
  goToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth'
    });
  });
  

  window.addEventListener('scroll', () => {
    if(window.scrollY == 0){
      goToTop.style.display = "none";
    } else {
      goToTop.style.display = "block";
    }
  })