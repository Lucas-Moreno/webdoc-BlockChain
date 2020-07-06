import $ from 'jquery';
import { TimelineMax } from 'gsap/all';

export const ChapterOnePartTwoScript = (inView) => {
  if (inView) {
    const html = document.querySelector('html');
    const container = $('.part--two');
    let containerOffsetLeft = container.offset().left;
    const partTwo = document.querySelector('.part--two');

    window.scrollTo({
      left: containerOffsetLeft,
      behavior: 'smooth',
    });

    setTimeout(() => {
      if (partTwo.hasAttribute('animation')) {
        html.style.overflow = 'unset';
      } else {
        html.style.overflow = 'hidden';
      }
    }, 700);

    // Launch animation part
    const animationsPartTwo = (_) => {
      // Elements
      const illustrationchapterOnePartTwo = document.querySelector(
        '.illustrationchapterOnePartTwo'
      );
      const woman = document.querySelector(
        '.illustrationchapterOnePartTwo .woman'
      );
      const rounded = document.querySelector(
        '.illustrationchapterOnePartTwo .rounded'
      );
      const man = document.querySelector('.illustrationchapterOnePartTwo .man');
      const flask = document.querySelector(
        '.illustrationchapterOnePartTwo .flask'
      );
      const interrogation = document.querySelector(
        '.illustrationchapterOnePartTwo .interrogation'
      );
      const bank = document.querySelector(
        '.illustrationchapterOnePartTwo .bank'
      );
      const firstBubbles = document.querySelectorAll(
        '.illustrationchapterOnePartTwo .first-bubbles .bubble'
      );
      const secondBubbles = document.querySelectorAll(
        '.illustrationchapterOnePartTwo .second-bubbles .bubble'
      );
      const secondaryBubbles = document.querySelectorAll(
        '.illustrationchapterOnePartTwo .secondary-bubbles .bubble'
      );
      const commission = document.querySelectorAll(
        '.illustrationchapterOnePartTwo .commission'
      );
      const loseTime = document.querySelectorAll(
        '.illustrationchapterOnePartTwo .lose-time'
      );
      const bubblesText = document.querySelectorAll(
        '.illustrationchapterOnePartTwo .bubbles-text .bubble'
      );
      const textInBubble = document.querySelectorAll(
        '.illustrationchapterOnePartTwo .bubbles-text .text'
      );
      const iconReplay = document.querySelector('.icon--replay');
      const iconSkip = document.querySelector('.icon--skip');

      // Init TimelineMax
      let tl = new TimelineMax({});

      // Start Animation
      tl.to(bank, 2.5, { opacity: 1 }); // Apparition du coffre
      tl.to(flask, 2, { opacity: 1 }, 0); // Apparition de la tache gradient
      tl.to(interrogation, 1.5, {
        opacity: 1,
      }); // Apparition du point d'interrogation
      tl.to(bank, 2, { opacity: 0.5 }, 2); // Réduction opacity de la bank
      tl.to(woman, 2, { opacity: 1 }, 5); //  Apparition de la femme
      tl.to(flask, 1.5, { opacity: 0 }, 5); // Disparition de la tache gradient
      tl.to(
        interrogation,
        1.5,
        {
          opacity: 0,
        },
        5
      ); // Disparition du point d'interrogation
      tl.to(bank, 1.5, { opacity: 1 }, 5); // Full opacity bank
      tl.to(man, 2, { opacity: 1 }, 7); //  Apparition de l'homme
      tl.to(rounded, 1.5, { opacity: 1 }, 7); //  Apparition du rond

      for (let i = 0; i < firstBubbles.length; i++) {
        let bubble = firstBubbles[i];

        tl.to(bubble, 0.1, { opacity: 1 }); // Apparition des bulles
      }

      for (let i = 0; i < secondBubbles.length; i++) {
        let bubble = secondBubbles[i];

        tl.to(bubble, 0.1, { opacity: 1 }); // Apparition des bulles
      }

      tl.to(man, 1.5, { opacity: 0 }, 11.5); // Disparition de l'homme
      tl.to(firstBubbles, 1.5, { opacity: 0 }, 11.5); // Disparition des premieres bulles
      tl.to(secondBubbles, 1.5, { opacity: 0 }, 11.5); // Disparition des secondes bulles
      tl.to(bank, 1.5, { x: -300, y: 200 }, 11.5); // Déplacement de la bank

      for (let i = 0; i < secondaryBubbles.length; i++) {
        let bubble = secondaryBubbles[i];

        tl.to(bubble, 0.1, { opacity: 1 }); // Apparition des bulles
      }

      tl.to(commission, 1, { opacity: 1 }, 14); // Apparition du mot "Commission"
      tl.to(loseTime, 1, { opacity: 1 }, 15); // Apparition du mot "Perte de temps"

      for (let i = 0; i < secondaryBubbles.length; i++) {
        let bubble = secondaryBubbles[i];

        tl.to(bubble, 0.2, { fill: '#ffe419' }); // Apparition des bulles
      }

      for (let i = 0; i < bubblesText.length; i++) {
        let bubble = bubblesText[i];

        tl.to(bubble, 0.2, { opacity: 1 }); // Apparition des bulles de texte
      }

      tl.to(textInBubble, 1, { opacity: 1 }); // Apparition du texte dans la bulle

      tl.set('html', { overflow: 'unset' }); // Réactive l'overflow

      tl.set(container, { attr: { animation: 'is-animated' } });

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
      animationsPartTwo();
    }, 1500);
  }
};
