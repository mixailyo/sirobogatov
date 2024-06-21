function animationsInit() {
  const elements = document.querySelectorAll('*');

  const elementsWithAnimation = [];
  
  elements.forEach(element => {
    const computedStyle = getComputedStyle(element);
    const animationOnVisible = computedStyle.getPropertyValue('--animation-on-visible');
  
    if (animationOnVisible !== '') {
      elementsWithAnimation.push(element);
    }
  });

  elementsWithAnimation.forEach(element => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          observer.unobserve(element);
          observer.disconnect();
        }
      });
    });
    
    observer.observe(element);
  })
}

export { animationsInit }