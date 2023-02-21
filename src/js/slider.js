new Swiper('.mySwiper', {
  slidesPerView: '2',
  spaceBetween: 25,
  freeMode: true,
  breakpointsBase: 'container',
  loop: true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});

new Swiper('.roomPageHero', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  navigation: {
    nextEl: '.room-hero-next',
    prevEl: '.room-hero-prev',
  },
});

new Swiper('.detailsSlider', {
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.details-btn-next',
    prevEl: '.details-btn-prev',
  },
});
