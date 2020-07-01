import { TimelineMax } from 'gsap/all';
import { scrollDown } from '../home/scroll-down';

export const loaderHome = (_) => {
  const wrapperHome = document.querySelector('.wrapper--home');
  const header = document.querySelector('.header');
  const headerTitle = document.querySelector('.header__title');
  const headerLogo = document.querySelector('.header__logo');
  const home = document.querySelector('.home');
  const homeCarousel = document.querySelector('.home__carousel');
  const homeIllustration = document.querySelector('.home__illustration');
  const homeCTAScroll = document.querySelector('.home__cta-scroll');
  const wrapperIntroduction = document.querySelector('.wrapper--introduction');

  /* Launch Loader only once time */
  if (sessionStorage.getItem('loaderHome') === null) {
    let tl = new TimelineMax({});

    // Positionne le Header au centre du viewport
    tl.set(header, {
      top: '50%',
      left: '50%',
      x: '-50%',
      y: '-50%',
    });

    // Apparition du Background et du block Home
    tl.to(wrapperHome, 2, {
      opacity: 1,
    })
      .to(headerTitle, 1, {
        opacity: 1,
        scale: 1,
      }) // Apparition du titre BlockChain
      .to(headerTitle, 1, { fontSize: 72 }, '+=1') // Rétréssissement de la fontSize
      .to(header, 1, {
        top: '0%',
        y: '0%',
      }) // Replacement Bloc Header au top
      .to(
        headerTitle,
        1,
        {
          opacity: 0,
          display: 'none',
        },
        5
      ) // Disparition du titre BlockChain
      .to(headerLogo, 1, {
        display: 'inline-block',
        opacity: 1,
      }) // Apparition du Logo
      .to(
        header,
        1,
        {
          left: '0%',
          x: '0%',
        },
        7
      ); // Replacement Bloc Header sur la gauche

    tl.to(home, 0.1, { display: 'grid' }, 7) // Affiche le Bloc Home
      .to(homeCarousel, 3, { opacity: 1 }, 7.5) // Apparition du carrousel
      .to(homeIllustration, 3, { opacity: 1 }, 7.5) // Apparition de l'illustration CSS
      .to(homeCTAScroll, 0.1, { display: 'flex' }, 7.9) // Affiche le CTA
      .to(homeCTAScroll, 3, { opacity: 1 }, 8.1); // Apparition de l'icone ScrollDown

    tl.to(wrapperIntroduction, 0.1, { display: 'block' }, 8.2); // Affiche le Bloc Introduction

    /* Instancie un cookie pour avoir l'animation loader home qu'une seule fois */
    sessionStorage.setItem('loaderHome', 'is-animated');

    tl.call(scrollDown);

  } else {
    let tl = new TimelineMax({});

    /* Re-init CSS Elements*/
    tl.set(wrapperHome, { opacity: 1 });
    tl.set(home, { display: 'grid' });
    tl.set(headerTitle, { display: 'none' });
    tl.set(headerLogo, { display: 'inline-block', opacity: 1 });
    tl.set(homeCarousel, { opacity: 1 });
    tl.set(homeIllustration, { opacity: 1 });
    tl.set(homeCTAScroll, { display: 'flex', opacity: 1 });
    tl.set(wrapperIntroduction, { display: 'block' });
    tl.call(scrollDown);
  }
};
