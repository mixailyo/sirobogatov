function productsInit() {
  let productsSlider = document.querySelector('.products__gallery .gallery__slider');
  let productsControls = document.querySelectorAll('.products__control');

  if (productsSlider) {
    const swiper1 = new Swiper(productsSlider, {
      spaceBetween: 100,
      // If we need pagination
      pagination: {
        el: `.products__gallery .gallery__slide-pagination`,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: `.products__gallery .gallery__slide-navigation-btn--next`,
        prevEl: `.products__gallery .gallery__slide-navigation-btn--prev`,
      },

      on: {
        activeIndexChange: function () {
          productsControls[this.activeIndex].classList.add('is-active')

          productsControls.forEach((control, j) => {
            if (j !== this.activeIndex) control.classList.remove('is-active')
          })
        },
      },
    });

    productsControls.forEach((control, i) => {
      control.addEventListener('click', () => {
        swiper1.slideTo(i)

        control.classList.add('is-active')

        productsControls.forEach((control, j) => {
          if (j !== i) control.classList.remove('is-active')
        })
      })
    })
  }
}

export { productsInit }