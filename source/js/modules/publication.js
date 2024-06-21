function publicationInit() {
  let publicationSlider = document.querySelector('.publication__slider');

  if (publicationSlider) {
    const swiper = new Swiper(publicationSlider, {
      // Navigation arrows
      navigation: {
        nextEl: '.publication__slider .swiper-navigation-btn--next',
        prevEl: '.publication__slider .swiper-navigation-btn--prev',
      },
    });
  }
}

export { publicationInit }