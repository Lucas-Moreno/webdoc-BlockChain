import $ from 'jquery';
import { TimelineMax } from 'gsap/all';
import soundOne from '../../../../Assets/audio/chapterOne/part-four-1.mp3';
import soundTwo from '../../../../Assets/audio/chapterOne/part-four-2.mp3';
import soundThree from '../../../../Assets/audio/chapterOne/part-four-3.mp3';

export const ChapterOnePartFourScript = (inView) => {
  if (inView) {
    const html = document.querySelector('html');
    const container = $('.part--four');
    let containerOffsetLeft = container.offset().left;
    const partFour = document.querySelector('.part--four');

    window.scrollTo({
      left: containerOffsetLeft,
      behavior: 'smooth',
    });

    setTimeout(() => {
      if (partFour.hasAttribute('animation')) {
        html.style.overflow = 'unset';
      } else {
        html.style.overflow = 'hidden';
      }
    }, 700);

    // Launch animation part
    const animationsPartFour = (_) => {
      // Elements
      const illustrationchapterOnePartFour = document.querySelector(
        '.illustrationchapterOnePartFour'
      );
      const book = document.querySelector(
        '.illustrationchapterOnePartFour .book'
      );
      const woman = document.querySelector(
        '.illustrationchapterOnePartFour .woman'
      );
      const pageTurn = document.querySelector(
        '.illustrationchapterOnePartFour .page-turn'
      );
      const pencil = document.querySelector(
        '.illustrationchapterOnePartFour .pencil'
      );
      const text = document.querySelector(
        '.illustrationchapterOnePartFour .text'
      );
      const bubblesText = document.querySelectorAll(
        '.illustrationchapterOnePartFour .bubble-text .bubble'
      );
      const bubblesTextContent = document.querySelectorAll(
        '.illustrationchapterOnePartFour .bubble-text .text'
      );
      const boxes = document.querySelector(
        '.illustrationchapterOnePartFour .boxes'
      );
      const secondaryWoman = document.querySelector(
        '.illustrationchapterOnePartFour .boxes .secondary-woman'
      );
      const man = document.querySelector(
        '.illustrationchapterOnePartFour .boxes .man'
      );
      const speculations = document.querySelector(
        '.illustrationchapterOnePartFour .keywords .speculations'
      );
      const ordonnances = document.querySelector(
        '.illustrationchapterOnePartFour .keywords .ordonnances'
      );
      const interest = document.querySelector(
        '.illustrationchapterOnePartFour .keywords .interest'
      );
      const iconReplay = document.querySelector('.icon--replay');
      const iconSkip = document.querySelector('.icon--skip');

      console.log(bubblesText);

      /* Sounds Manager */
      // Chapter One Part Four Sound One
      let audioplaySoundOne = document.createElement('audio');
      audioplaySoundOne.setAttribute('src', soundOne);

      const launchAudioplaySoundOne = (_) => {
        audioplaySoundOne.play();
      };

      // Chapter One Part Four Sound Two
      let audioplaySoundTwo = document.createElement('audio');
      audioplaySoundTwo.setAttribute('src', soundTwo);

      const launchAudioplaySoundTwo = (_) => {
        audioplaySoundTwo.play();
      };

      // Chapter One Part Four Sound Three
      let audioplaySoundThree = document.createElement('audio');
      audioplaySoundThree.setAttribute('src', soundThree);

      const launchAudioplaySoundThree = (_) => {
        audioplaySoundThree.play();
      };

      // Init TimelineMax
      let tl = new TimelineMax({});

      // Start Animation
      tl.call(launchAudioplaySoundOne);
      tl.to(book, 2, { opacity: 1 }); // Apparition du livre
      tl.to(woman, 2, { opacity: 1 }, 3); // Apparition de la femme
      tl.to(pageTurn, 0.85, { opacity: 1 }, 11); // Apparition de la page tournée
      tl.to(pageTurn, 0.85, { opacity: 0 }, 11.85); // Disparition de la page tournée
      tl.to(pageTurn, 0.85, { opacity: 1 }, 12.7); // Apparition de la page tournée
      tl.to(pageTurn, 0.85, { opacity: 0 }, 13.55); // Disparition de la page tournée
      tl.to(pencil, 1.5, { opacity: 1 }, 15.5); // Apparition du crayon
      tl.to(pencil, 2.5, { x: 200 }, 17.5); // Décalage vers la droite du crayon
      tl.to(pencil, 1.5, { opacity: 0 }, 18.5); // Disparition du crayon
      tl.to(text, 1.5, { opacity: 1 }, 18.5); // Apparition du texte

      tl.set({}, {}, '+=4'); // Add Delay

      tl.to(text, 1.5, { opacity: 0 }, 22.5); // Disparition du texte
      tl.to(book, 1.5, { opacity: 0 }, 22.5); // Disparition du texte

      for (let i = 0; i < bubblesText.length; i++) {
        let bubble = bubblesText[i];

        tl.to(bubble, 0.2, { opacity: 1 }); // Apparition de la bulle de texte
      }

      tl.call(launchAudioplaySoundTwo);

      tl.to(bubblesTextContent, 2, {
        opacity: 1,
      }); // Apparition du texte dans la bulle
      tl.to(boxes, 2, { opacity: 1 }, 29); // Apparition de la boite
      tl.call(launchAudioplaySoundThree);
      tl.to(secondaryWoman, 2, { opacity: 1 }, 30); // Apparition de la femme secondayre
      tl.to(man, 2, { opacity: 1 }, 30); // Apparition de l'homme
      tl.to(speculations, 2, { opacity: 1 }, 34); // Apparition de speculations
      tl.to(ordonnances, 2, { opacity: 1 }, 35); // Apparition de ordonnances
      tl.to(interest, 2, { opacity: 1 }, 43.5); // Apparition de interest

      iconReplay.addEventListener('click', function () {
        window.scrollTo({
          left: containerOffsetLeft,
          behavior: 'smooth',
        });

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

    setTimeout(() => {
      animationsPartFour();
    }, 1500);
  }
};
