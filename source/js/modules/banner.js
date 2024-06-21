function bannerInit() {
  let bannerSlider = document.querySelector('.banner__slider');

  if (bannerSlider) {
    const swiper = new Swiper(bannerSlider, {
      // If we need pagination
      pagination: {
        el: '.banner__slider .swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.banner__slider .swiper-navigation__btn--next',
        prevEl: '.banner__slider .swiper-navigation__btn--prev',
      },
    });
  }
}

export { bannerInit }