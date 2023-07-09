const burger = document.querySelector(".burger");
const navBar = document.querySelector("nav");
const main = document.querySelector(".main");
const goToTop = document.querySelector(".goToTop");

//Opening burger menu toggle active class
burger.addEventListener("click", () => {
  navBar.classList.toggle("open");
  burger.classList.toggle("active");

  if (navBar.classList.contains("open")) {
    main.style.top = "-1rem";
  } else {
    main.style.top = "-18rem";
  }
});

//go to top functionailty
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
