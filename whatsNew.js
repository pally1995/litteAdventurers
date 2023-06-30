const burger = document.querySelector(".burger");
const navBar = document.querySelector("nav");
const main = document.querySelector(".main");
const goToTop = document.querySelector(".goToTop");
const postIt = document.querySelector(".post");
const expand = document.querySelector(".expand");

burger.addEventListener('click', () => {
    navBar.classList.toggle("open");
    burger.classList.toggle("active");

    if(navBar.classList.contains("open")){
      main.style.top = "13rem";
    } else {
      main.style.top = "-3rem";
    }
})

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

postIt.addEventListener('click', () => {
  if (expand.style.display === "none"){
    expand.style.display = "block";
  } else {
    expand.style.display = "none";
  }
})