import * as ScrollMagic from 'scrollmagic';
import { introductionAnimations } from './introduction-animations.js';

export const scrollDown = (_) => {
  const CTAScroll = document.querySelector('.home__cta-scroll');
  const introduction = document.querySelector('.wrapper--introduction');

  const scrollingToElement = function (el) {
    let offset = el.offsetTop;
    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    });
  };

  CTAScroll.addEventListener('click', function () {
    scrollingToElement(introduction);
  });

  // init controller
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: '.wrapper--introduction',
    triggerHook: 0.8,
  })
    .on('enter', function (e) {
      let offset = introduction.offsetTop;

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });

      setTimeout(() => {
        document.querySelector('html').style.overflow = 'hidden';
        // Secure the view
        window.scrollTo({
          top: offset,
          behavior: 'smooth',
        });
        introductionAnimations();
      }, 700);
    })
    .on('leave', function (e) {})
    .addTo(controller);
};
