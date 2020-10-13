$(document).ready(function () {
  let menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', function() {
    document.querySelector(".header__wrapper_mobile").classList.toggle("header__wrapper_mobile_visible")
    document.querySelector("body").classList.toggle("scroll-hidden")
  });
});