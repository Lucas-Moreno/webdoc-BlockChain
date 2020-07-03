import { TimelineMax } from 'gsap/all';
import * as ScrollMagic from 'scrollmagic';

export const homeAnimations = (_) => {
  // Introduction animations
  const introductionAnimations = (_) => {
    const wrapperIntroduction = document.querySelector(
      '.wrapper--introduction'
    );
    const disclaimer = document.querySelector('.disclaimer');
    const informations = document.querySelector('.informations');
    const texts = document.querySelector('.texts');
    const textOne = document.querySelector('.text--one');
    const textTwo = document.querySelector('.text--two');
    const questionOne = document.querySelector('.question--one');
    const questionTwo = document.querySelector('.question--two');
    const questionThree = document.querySelector('.question--three');
    const questionFour = document.querySelector('.question--four');
    const questionFive = document.querySelector('.question--five');
    const navigation = document.querySelector('.navigation');
    const itemOne = document.querySelector('.item--one');
    const itemTwo = document.querySelector('.item--two');
    const itemThree = document.querySelector('.item--three');
    const iconReplay = document.querySelector('.icon--replay');
    const iconSkip = document.querySelector('.icon--skip');

    if (wrapperIntroduction) {
      const tl = new TimelineMax({});

      tl.to(disclaimer, 0.1, { display: 'flex' })
        .to(disclaimer, 1.5, { opacity: 1 })
        .to(disclaimer, 1.5, { opacity: 0 }, 4.5)
        .to(disclaimer, 0.1, { display: 'none' });

      tl.to(informations, 0.1, { display: 'flex' })
        .to(informations, 1.5, { opacity: 1 })
        .to(informations, 1.5, { opacity: 0 }, '+=2')
        .to(informations, 0.1, { display: 'none' });

      tl.to(texts, 0.1, { display: 'flex' })
        .to(textOne, 1.5, { opacity: 1 }, '+=1')
        .to(textTwo, 1.5, { opacity: 1 }, '+=1.5')
        .to(questionOne, 0.1, { display: 'flex' })
        .to(questionOne, 1.8, { opacity: 1 }, '+=2')
        .to(questionOne, 0.9, { y: 100, opacity: 0, display: 'none' }, '+=2')
        .to(questionTwo, 0.1, { y: 100, display: 'flex' })
        .to(questionTwo, 1.8, { opacity: 1, y: 0 })
        .to(questionTwo, 0.9, { y: 100, opacity: 0, display: 'none' }, '+=2')
        .to(questionThree, 0.1, { y: 100, display: 'flex' })
        .to(questionThree, 1.8, { opacity: 1, y: 0 })
        .to(questionThree, 0.9, { y: 100, opacity: 0, display: 'none' }, '+=2')
        .to(questionFour, 0.1, { y: 100, display: 'flex' })
        .to(questionFour, 1.8, { opacity: 1, y: 0 })
        .to(questionFour, 0.9, { y: 100, opacity: 0, display: 'none' }, '+=2')
        .to(questionFive, 0.1, { display: 'flex' })
        .to(questionFive, 1.8, { opacity: 1 });

      tl.to(navigation, 0.1, { display: 'flex' })
        .to(itemOne, 0.1, { y: 80, opacity: 0 })
        .to(itemOne, 0.5, { opacity: 1, y: 0 })
        .to(itemTwo, 0.1, { y: 80, opacity: 0 })
        .to(itemTwo, 0.5, { opacity: 1, y: 0 })
        .to(itemThree, 0.1, { y: 80, opacity: 0 })
        .to(itemThree, 0.5, { opacity: 1, y: 0 });

      tl.set('html', { overflow: 'unset' });
      tl.to(wrapperIntroduction, 0.5, { attr: { animation: 'done' } });

      /* Instancie un cookie pour avoir l'animation d'Introduction qu'une seule fois si on recharge la page */
      sessionStorage.setItem('animationIntroduction', 'is-animated');

      if (wrapperIntroduction.hasAttribute('animation')) {
        tl.progress(1, false);
      }

      iconReplay.addEventListener('click', function () {
        window.scrollTo(0, document.body.scrollHeight);
        tl.kill();
        setTimeout(() => {
          tl.progress(0, false);
          document.querySelector('html').style.overflow = 'hidden';
        }, 1000);
      });

      iconSkip.addEventListener('click', function () {
        tl.progress(1, false);
        document.querySelector('html').style.overflow = 'unset';
      });
    }
  };

  // Scroll automatique + launch introduction animations
  const scrollDown = (_) => {
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

  //Loader chargement effect d'apparition Home
  const homeLoader = (_) => {
    const wrapperHome = document.querySelector('.wrapper--home');
    const header = document.querySelector('.header');
    const headerTitle = document.querySelector('.header__title');
    const headerLogo = document.querySelector('.header__logo');
    const home = document.querySelector('.home');
    const homeCarousel = document.querySelector('.home__carousel');
    const homeIllustration = document.querySelector('.home__illustration');
    const homeCTAScroll = document.querySelector('.home__cta-scroll');
    const wrapperIntroduction = document.querySelector(
      '.wrapper--introduction'
    );

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

  homeLoader();
};
