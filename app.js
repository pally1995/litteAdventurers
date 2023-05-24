const toggleButton = document.querySelector('.nav__toggle');
const navbarLinks = document.querySelector('.navbar-links');
const ul = document.querySelector('.navUl')
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    ul.classList.toggle('active');
    toggleButton.classList.toggle('nav-open');
});