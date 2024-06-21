function galleryInit() {
  let gallerySliders = document.querySelectorAll('.gallery__slider:not(.products__gallery)');

  if (gallerySliders.length) {
    gallerySliders.forEach((slider, i) => {
      slider.classList.add(`gallery__slider--${i}`)

      const swiper = new Swiper(slider, {
        spaceBetween: 100,
        // If we need pagination
        pagination: {
          el: `.gallery__slider--${i} .gallery__slide-pagination`,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: `.gallery__slider--${i} .gallery__slide-navigation-btn--next`,
          prevEl: `.gallery__slider--${i} .gallery__slide-navigation-btn--prev`,
        },
      });
    })
  }
}

export { galleryInit }