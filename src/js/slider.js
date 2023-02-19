new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 25,
  freeMode: true,
  breakpointsBase: 'container',
  loop: true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});

new Swiper('.room-hero-swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});

new Swiper('.details-slider', {
  slidesPerView: 'auto',
  spaceBetween: 86,
  loop: true,
  navigation: {
    nextEl: '.details-btn-next',
    prevEl: '.details-btn-prev',
  },
});
