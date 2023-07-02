const burger = document.querySelector(".burger");
const navBar = document.querySelector("nav");
const main = document.querySelector(".main");
const goToTop = document.querySelector(".goToTop");
const postIt = document.querySelectorAll(".post");
const active = document.querySelector(".post.active");

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

postIt.forEach(item => {
  item.addEventListener('click', () => {
    const expand = item.querySelector('.expand');
    const isActive = item.classList.contains('active');

    if (!isActive) {
      postIt.forEach(post => {
        if (post !== item && post.classList.contains('active')) {
          const otherExpand = post.querySelector('.expand');
          post.classList.remove('active');
          otherExpand.style.display = 'none';
        }
      });
    }

    item.classList.toggle('active');
    expand.style.display = isActive ? 'none' : 'block';
  });
});

