import { TimelineMax } from 'gsap/all';

export const introductionAnimations = (_) => {
  const wrapperIntroduction = document.querySelector('.wrapper--introduction');
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
  tl.to(wrapperIntroduction, 0.5, { attr: { animation:'done'}});

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
};
