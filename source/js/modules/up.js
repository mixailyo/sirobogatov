function upInit() {
  let footerUp = document.querySelector('.footer__up');

  if (footerUp) {
    footerUp.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    })
  }
}

export { upInit }