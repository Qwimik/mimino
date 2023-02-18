new Swiper('.mySwiper', {
  slidesPerView: 2,
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
