$(document).ready(function () {
  let menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', function() {
    document.querySelector(".header__wrapper_mobile").classList.toggle("header__wrapper_mobile_visible")
    document.querySelector("body").classList.toggle("scroll-hidden")
  });

  let flagButton = document.querySelectorAll('.flag');
  flagButton.forEach(elem => elem.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('flag_active')) {
    evt.target.classList.remove('flag_active')
  } else {
    evt.target.classList.add('flag_active')
  }
  }))

  var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: ".photo__pagination",
    bulletClass: "photo__bullet",
    bulletActiveClass: "photo__bullet_active",
    clickable: true,
  },

  autoplay: {
    delay: 2000,
  },

  })
});



