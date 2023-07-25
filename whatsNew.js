const burger = document.querySelector(".burger");
const navBar = document.querySelector("nav");
const main = document.querySelector(".main");
const goToTop = document.querySelector(".goToTop");
const postIt = document.querySelectorAll(".postContainer");
const active = document.querySelector(".post.active");
const img = document.querySelectorAll("img");

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

const closeActivePosts = () => {
  postIt.forEach((post) => {
    if (post !== activePost && post.classList.contains("active")) {
      post.classList.remove("active");
      resetTopPosition(post.querySelector(".expand"));
      post.querySelector(".expand").style.display = "none";
    }
  });
};

const togglePost = (item, expand, isActive) => {
  if (isActive) {
    // If the clicked post is already active, simply reset its state and return
    item.classList.remove("active");
    resetTopPosition(item);
    expand.style.display = "none";
    activePost = null;
    activeExpand = null;
  } else {
    // If there is an active post, return without opening another one
    if (activePost) return;

    closeActivePosts();
    item.style.top = `${item.offsetTop - item.parentNode.offsetTop + 120}px`;
    item.classList.add("active");
    activePost = item;
    activeExpand = expand;
    expand.style.display = "block";
  }
};

postIt.forEach((item) => {
  item.addEventListener("click", () => {
    const expand = item.querySelector(".expand");
    const isActive = item.classList.contains("active");
    togglePost(item, expand, isActive);
  });
});

