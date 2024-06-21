function geographyInit() {
  let geography = document.querySelector('.geography');
  let geographyMore = document.querySelector('.geography__more');

  if (geographyMore) {
    geographyMore.addEventListener('click', () => {
      geography.classList.toggle('geography--more-is-active');
    })
  }
}

export { geographyInit }