const burger = document.querySelector(".burger");
const navBar = document.querySelector("nav");
const main = document.querySelector(".main");

burger.addEventListener('click', () => {
    navBar.classList.toggle("open");
    burger.classList.toggle("active");

    if(navBar.classList.contains("open")){
      main.style.bottom = "1rem";
    } else {
      main.style.bottom = "15rem";
    }
})
