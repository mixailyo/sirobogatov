function privilegeInit() {
  let privilegeSlider = document.querySelector('.privilege__slider');

  if (privilegeSlider) {
    const swiper = new Swiper(privilegeSlider, {
      // If we need pagination
      pagination: {
        el: '.privilege__slider .swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.privilege__slider .swiper-navigation__btn--next',
        prevEl: '.privilege__slider .swiper-navigation__btn--prev',
      },
    });
  }
}

export { privilegeInit }