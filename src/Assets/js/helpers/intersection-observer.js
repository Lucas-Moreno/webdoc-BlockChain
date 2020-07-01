const setIntersectionObserver = (targetsClass, callbackOnIntersection) => {
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        /* if (entry.intersectionRatio === 0 && entry.boundingClientRect.y <= 0) {
          // second parameter for opacity
          callbackOnIntersection(entry.target, 1);
        } else if (entry.isIntersecting && entry.intersectionRatio !== 0) {
          callbackOnIntersection(entry.target, 0);
        } */

        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          callbackOnIntersection(entry.target);
          /* observer.unobserve(entry.target); */
        }
      });
    },
    {
      rootMargin: '0px',
      threshold: 1
    }
  );

  document.querySelectorAll(targetsClass).forEach(target => {
    observer.observe(target);
  });
};

export { setIntersectionObserver };
