function headerInit() {
  let header = document.querySelector('.header')
  let headerHamburger = document.querySelector('.header__hamburger')
  let headerMenu = document.querySelector('.header__menu')
  let headerMenuClose = document.querySelector('.header__menu-close')

  document.documentElement.style.setProperty('--header-height', `${header.clientHeight}px`);

  if (headerHamburger) {
    headerHamburger.addEventListener('click', () => {
      headerMenu.classList.add('is-active')
    })

    headerMenuClose.addEventListener('click', () => {
      headerMenu.classList.remove('is-active')
    })
  }
}

export { headerInit }