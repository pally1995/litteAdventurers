const burger = document.querySelector(".burger");
const navBar = document.querySelector("nav");
const mainId = document.querySelector("#main");
const teamH1 = document.querySelector("#teamH1");
const goToTop = document.querySelector(".goToTop");
const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const prevBtn = carousel.querySelector('.prev');
const nextBtn = carousel.querySelector('.next');
const carouselItems = carousel.querySelectorAll('.carousel-item');

//burger menu functionality
burger.addEventListener("click", () => {
  navBar.classList.toggle("open");
  burger.classList.toggle("active");

  if (navBar.classList.contains("open")) {
    mainId.style.top = "35rem";
  } else {
    mainId.style.top = "17rem";
  }
});

let currentIndex = 0;
let itemWidth = carouselItems[0].offsetWidth;
const totalItems = carouselItems.length;

function updateItemWidth() {
  itemWidth = carouselItems[0].offsetWidth;
  scrollToItem(currentIndex); // reposition on resize
}

function scrollToItem(index) {
  const translateX = -index * itemWidth;
  carouselInner.style.transform = `translateX(${translateX}px)`;
}

function scrollNext() {
  currentIndex = (currentIndex + 1) % totalItems;
  scrollToItem(currentIndex);
  resetAutoScroll();
}

function scrollPrev() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  scrollToItem(currentIndex);
  resetAutoScroll();
}

let autoScrollInterval;

function startAutoScroll() {
  autoScrollInterval = setInterval(scrollNext, 4000);
}

function resetAutoScroll() {
  clearInterval(autoScrollInterval);
  startAutoScroll();
}

window.addEventListener('resize', updateItemWidth);
prevBtn.addEventListener('click', scrollPrev);
nextBtn.addEventListener('click', scrollNext);

updateItemWidth();
startAutoScroll();






//Go to top button functionaility
goToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behaviour: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    goToTop.style.display = "none";
  } else {
    goToTop.style.display = "block";
  }
});
