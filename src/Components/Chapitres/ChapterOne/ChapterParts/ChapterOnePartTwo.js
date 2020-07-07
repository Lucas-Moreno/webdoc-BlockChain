import $ from 'jquery';
import { TimelineMax } from 'gsap/all';
import soundOne from '../../../../Assets/audio/chapterOne/part-two-1.mp3';
import soundTwo from '../../../../Assets/audio/chapterOne/part-two-2.mp3';
import soundThree from '../../../../Assets/audio/chapterOne/part-two-3.mp3';

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

      /* Sounds Manager */
      // Chapter One Part Two Sound One
      let audioplaySoundOne = document.createElement('audio');
      audioplaySoundOne.setAttribute('src', soundOne);

      const launchAudioplaySoundOne = (_) => {
        audioplaySoundOne.play();
      };

      // Chapter One Part Two Sound Two
      let audioplaySoundTwo = document.createElement('audio');
      audioplaySoundTwo.setAttribute('src', soundTwo);

      const launchAudioplaySoundTwo = (_) => {
        audioplaySoundTwo.play();
      };

      // Chapter One Part Two Sound Two
      let audioplaySoundThree = document.createElement('audio');
      audioplaySoundThree.setAttribute('src', soundThree);

      const launchAudioplaySoundThree = (_) => {
        audioplaySoundThree.play();
      };

      // Init TimelineMax
      let tl = new TimelineMax({});

      // Start Animation
      tl.call(launchAudioplaySoundOne);
      tl.to(bank, 2.5, { opacity: 1 }); // Apparition du coffre
      tl.to(flask, 2, { opacity: 1 }, 0); // Apparition de la tache gradient
      tl.to(interrogation, 1.5, { opacity: 1 }, 7.5); // Apparition du point d'interrogation
      tl.to(bank, 2, { opacity: 0.5 }, 7.5); // Réduction opacity de la bank
      tl.to(woman, 2, { opacity: 1 }, 10); //  Apparition de la femme
      tl.to(flask, 1.5, { opacity: 0 }, 10); // Disparition de la tache gradient
      tl.to(
        interrogation,
        1.5,
        {
          opacity: 0,
        },
        10
      ); // Disparition du point d'interrogation
      tl.to(bank, 1.5, { opacity: 1 }, 10); // Full opacity bank
      tl.to(man, 2, { opacity: 1 }, 11.5); //  Apparition de l'homme
      tl.to(rounded, 1.5, { opacity: 1 }, 11.5); //  Apparition du rond

      tl.set({}, {}, '+=4'); // Add Delay

      for (let i = 0; i < firstBubbles.length; i++) {
        let bubble = firstBubbles[i];

        tl.to(bubble, 0.1, { opacity: 1 }); // Apparition des bulles
      }

      for (let i = 0; i < secondBubbles.length; i++) {
        let bubble = secondBubbles[i];

        tl.to(bubble, 0.1, { opacity: 1 }); // Apparition des bulles
      }

      tl.set({}, {}, '+=6'); // Add Delay

      for (let i = 0; i < firstBubbles.length; i++) {
        let bubble = firstBubbles[i];

        tl.to(bubble, 0.1, {
          fill: '#ffe419',
        }); // Apparition des bulles
      }

      for (let i = 0; i < secondBubbles.length; i++) {
        let bubble = secondBubbles[i];

        tl.to(bubble, 0.1, {
          fill: '#ffe419',
        }); // Apparition des bulles
      }

      tl.to(man, 1.5, { opacity: 0 }, 31); // Disparition de l'homme
      tl.to(firstBubbles, 1.5, { opacity: 0 }, 31); // Disparition des premieres bulles
      tl.to(secondBubbles, 1.5, { opacity: 0 }, 31); // Disparition des secondes bulles
      tl.to(bank, 1.5, { x: -300, y: 200 }, 31); // Déplacement de la bank

      tl.call(launchAudioplaySoundTwo);

      for (let i = 0; i < secondaryBubbles.length; i++) {
        let bubble = secondaryBubbles[i];

        tl.to(bubble, 0.1, { opacity: 1 }); // Apparition des bulles
      }

      tl.to(commission, 1, { opacity: 1 }, 34); // Apparition du mot "Commission"
      tl.to(loseTime, 1, { opacity: 1 }, 35); // Apparition du mot "Perte de temps"

      for (let i = 0; i < secondaryBubbles.length; i++) {
        let bubble = secondaryBubbles[i];

        tl.to(bubble, 0.2, {
          fill: '#ffe419',
        }); // Changement des couleurs
      }

      for (let i = 0; i < bubblesText.length; i++) {
        let bubble = bubblesText[i];

        tl.to(bubble, 0.2, { opacity: 1 }); // Apparition des bulles de texte
      }

      tl.to(textInBubble, 1, { opacity: 1 }); // Apparition du texte dans la bulle

      tl.set({}, {}, '+=7'); // Add Delay

      tl.call(launchAudioplaySoundThree);

      tl.to(rounded, 1.5, { opacity: 0 }, 45); //  Disparition du rond
      tl.to(bubblesText, 1.5, { opacity: 0 }, 45); //  Disparition du rond Text
      tl.to(textInBubble, 1, { opacity: 0 }, 45); // Apparition du texte dans la bulle
      tl.to(secondaryBubbles, 1, { opacity: 0 }, 45); // Disparition des petites bulles
      for (let i = 0; i < secondaryBubbles.length; i++) {
        let bubble = secondaryBubbles[i];

        tl.to(bubble, 0.1, {
          opacity: 0,
        }); // Init Opacity

        tl.to(bubble, 0.1, {
          fill: '#186fe1',
        }); // Init Color
      }
      tl.to(
        bank,
        1.5,
        {
          x: 100,
          y: -100,
          opacity: 0.5,
          scale: 0.7,
        },
        46
      ); // Déplacement de la bank
      tl.to(man, 1.5, { opacity: 1 }, 46.5); // Ré-apparition de l'homme
      tl.to(secondaryBubbles, 1, { opacity: 1, x: -25, y: -30 }, 49); // Placement et init opacity des petites bulles

      for (let i = 0; i < secondaryBubbles.length; i++) {
        let bubble = secondaryBubbles[i];

        tl.to(bubble, 0.2, {
          fill: '#ffe419',
        }); // Changement des couleurs
      }

      tl.set('html', { overflow: 'unset' }); // Réactive l'overflow

      tl.set(container, {
        attr: { animation: 'is-animated' },
      });

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
