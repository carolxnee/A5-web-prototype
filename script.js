/*hamburger menu links*/
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

/* Mobile menu display*/
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);
