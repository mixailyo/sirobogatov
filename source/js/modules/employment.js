function employmentInit() {
  let employmentSlider = document.querySelector('.employment__slider');

  if (employmentSlider) {
    const swiper = new Swiper(employmentSlider, {
      // If we need pagination
      pagination: {
        el: '.employment__slider .swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.employment__slider .swiper-navigation__btn--next',
        prevEl: '.employment__slider .swiper-navigation__btn--prev',
      },
    });
  }
}

export { employmentInit }