$(document).ready(function () {
  let menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', function() {
    document.querySelector(".header__wrapper_mobile").classList.toggle("header__wrapper_mobile_visible")
    document.querySelector("body").classList.toggle("scroll-hidden")
  });

  let tabItem = $('.main-info__tab');
  let contentItem = $('.main-info__left');

  tabItem.on('click', function(evt) {
    let activeContent = $(this).attr('data-target');
    tabItem.removeClass('main-info__tab_active')
    contentItem.removeClass('main-info__left_active')
    $(activeContent).addClass('main-info__left_active')
    $(this).addClass('main-info__tab_active')
  })

  let flagButton = document.querySelectorAll('.flag');
  let heartButton = document.querySelectorAll('.heart');
  let likeButton = document.querySelectorAll('.like');
  let dislikeButton = document.querySelectorAll('.dislike');
  flagButton.forEach(elem => elem.onclick = () => elem.classList.toggle('flag_active'))
  heartButton.forEach(elem => elem.onclick = () => elem.classList.toggle('heart_active'))
  likeButton.forEach(elem => elem.onclick = () => elem.classList.toggle('like_active'))
  dislikeButton.forEach(elem => elem.onclick = () => elem.classList.toggle('dislike_active'))

  var mySwiper = new Swiper('.photo-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: ".photo-slider__pagination",
    bulletClass: "photo-slider__bullet",
    bulletActiveClass: "photo-slider__bullet_active",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
  },

  })

  $('.form').validate({
    errorClass: "invalid",
    rules: {
      email: {
        required: true,
      },
    },
    messages: {
      email: {
        required: "Введите e-mail",
        email: "Формат: email@email.ru"
      }
    }
  })

  var mySwiper = new Swiper('.article-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

    // Navigation arrows
  navigation: {
    nextEl: '.article-slider__button_next',
    prevEl: '.article-slider__button_prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  })

  let showComment = $('.comments__button-bottom');
  let hiddenComments = $('.comments__user-comment');
  showComment.on('click', function(evt) {
    hiddenComments.removeClass('comments__user-comment_hidden')
  })

  $('.message').validate({
    errorClass: "error",
    rules: {
      message: {
        required: true,
        minlength: 100,
      },
    },
    messages: {
      message: {
        required: "Введите сообщение",
        minlength: jQuery.validator.format("Не менее {0} символов!")
      }
    }
  })

  let upButton = document.querySelector('.up-button');

  window.onscroll = function () {
  if (window.pageYOffset > 3700) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }
  };
  
  upButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth'});
  };

});



