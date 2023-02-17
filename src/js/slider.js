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
