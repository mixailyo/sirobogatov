function factsInit() {
  let factsSlider = document.querySelector('.facts__slider')

  if (factsSlider && document.documentElement.clientWidth < 1024) {
    const swiper = new Swiper(factsSlider, {
      // If we need pagination
      pagination: {
        el: `.facts__slider .swiper-pagination`,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.facts__slider .swiper-navigation-btn--next',
        prevEl: '.facts__slider .swiper-navigation-btn--prev',
      },
    })
  }
}

export { factsInit }