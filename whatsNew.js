const burger = document.querySelector(".burger");
const navBar = document.querySelector("nav");
const main = document.querySelector(".main");
const goToTop = document.querySelector(".goToTop");
const postIt = document.querySelectorAll(".postContainer");
const active = document.querySelector(".post.active");

//buger menu functionaility
burger.addEventListener("click", () => {
  navBar.classList.toggle("open");
  burger.classList.toggle("active");

  if (navBar.classList.contains("open")) {
    main.style.top = "13rem";
  } else {
    main.style.top = "-3rem";
  }
});

//gp to top functionaility
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

/*
  post it note click even functionaility. As a post it note is clicked it will expand to have a width of 100% but remianin in the same position. 
  once clicked again or anoter post it is clicked it will return to original size
*/ 
postIt.forEach((item) => {
  item.addEventListener("click", function () {
    const expand = item.querySelector(".expand");
    const isActive = item.classList.contains("active");
    const active = document.querySelector(".postContainer.active");

    if (!isActive) {
      postIt.forEach((post) => {
        if (post !== item && post.classList.contains("active")) {
          const otherExpand = post.querySelector(".expand");
          post.classList.remove("active");
          otherExpand.style.display = "none";
          otherExpand.style.top = ""; // Reset top position
        }
      });
    } else {
      expand.style.top = ""; // Reset top position
    }

    if (!isActive) {
      const postAreaTop = item.parentNode.offsetTop;
      const postContainerTop = item.offsetTop;

      item.style.top = `${postContainerTop - postAreaTop + 120}px`;
    } else {
      item.style.top = ""; // Reset top position
    }

    item.classList.toggle("active");
    expand.style.display = isActive ? "none" : "block";
  });
});
