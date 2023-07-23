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

let activePost = null;
let activeExpand = null;

const resetTopPosition = (item) => item.style.top = "";

const closeActivePosts = () => postIt.forEach((post) => post !== activePost && post.classList.contains("active") ? (post.classList.remove("active"), resetTopPosition(post.querySelector(".expand")), post.querySelector(".expand").style.display = "none") : null);

const togglePost = (item, expand, isActive) => {
  if (activePost && activePost !== item) return;

  if (!isActive) {
    closeActivePosts();
    item.style.top = `${item.offsetTop - item.parentNode.offsetTop + 120}px`;
  } else {
    resetTopPosition(item);
  }

  item.classList.toggle("active");

  [activePost, activeExpand] = isActive ? [null, null] : [item, expand];
  expand.style.display = isActive ? "none" : "block";
};

postIt.forEach((item) => item.addEventListener("click", () => togglePost(item, item.querySelector(".expand"), item.classList.contains("active"))));
