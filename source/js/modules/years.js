function yearsInit() {
  let yearsPhotoSlider = document.querySelector('.years__photo-slider');
  let yearsNumberSlider = document.querySelector('.years__slide-years');
  let yearsTextSlider = document.querySelector('.years__text-slider');

  if (yearsPhotoSlider && yearsNumberSlider && yearsTextSlider) {
    const swiper3 = new Swiper(yearsTextSlider, {
      effect: "fade",
    });

    const swiper1 = new Swiper(yearsNumberSlider, {
      slidesPerView: 5,
      spaceBetween: 30,

      breakpoints: {
        // when window width is >= 0px
        0: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1920: {
          slidesPerView: 5,
          spaceBetween: 30
        },
      }
    });

    const swiper2 = new Swiper(yearsPhotoSlider, {
      navigation: {
        nextEl: `.years__slide-navigation-btn--next`,
        prevEl: `.years__slide-navigation-btn--prev`,
      },
      thumbs: {
        swiper: swiper1,
      },
      on: {
        activeIndexChange: function () {
          swiper3.slideTo(this.activeIndex)
        },
      }
    });

    swiper1.update()
  }
}

export { yearsInit }