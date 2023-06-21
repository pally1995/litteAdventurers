const burger = document.querySelector(".burger");
const navBar = document.querySelector("nav");
const main = document.querySelector(".main");
const footer = document.querySelector("footer");

burger.addEventListener('click', () => {
    navBar.classList.toggle("open");
    burger.classList.toggle("active");

    if(navBar.classList.contains("open")){
      main.style.top = "15em";
      footer.style.top = "15rem";
    } else {
      main.style.top = "0rem";
      footer.style.top = "0rem";
    }
})
