var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  breakpointsBase: 'container',
  loop: true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
