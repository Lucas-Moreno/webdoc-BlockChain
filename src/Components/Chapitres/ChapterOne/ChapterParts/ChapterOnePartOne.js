import $ from 'jquery';
import { TimelineMax } from 'gsap/all';
import { CountUp } from 'countup.js';

export const ChapterOnePartOneScript = (inView) => {
  if (inView) {
    const html = document.querySelector('html');
    const container = $('.part--one');
    let containerOffsetLeft = container.offset().left;

    // Block Scroll for the first part
    html.style.overflow = 'hidden';

    window.scrollTo({
      left: containerOffsetLeft,
      behavior: 'smooth',
    });

    // Launch Animation Part
    const animationsPartOne = (_) => {
      // Elements
      const illustrationchapterOnePartOne = document.querySelector(
        '.illustrationchapterOnePartOne'
      );
      const woman = document.querySelector('.woman');
      const man = document.querySelector('.man');
      const flask = document.querySelector('.flask');
      const flower = document.querySelector('.flower');
      const money = document.querySelector('.money');
      const bank = document.querySelector('.bank');
      const bubbles = document.querySelectorAll('.bubble');
      const numbers = document.querySelector('.numbers');
      const counterSecondLabel = document.querySelector(
        '.number--second .label'
      );
      const counterDayLabel = document.querySelector('.number--day .label');
      const iconReplay = document.querySelector('.icon--replay');
      const iconSkip = document.querySelector('.icon--skip');

      // Init TimelineMax
      let tl = new TimelineMax({});
      // Start Animation
      tl.to(bank, 2.5, { opacity: 1 }); // Apparition du coffre
      tl.to(flask, 2, { opacity: 1 }, 0); // Apparition de la tache gradient
      tl.to(woman, 1.5, { opacity: 1 }, 1.5); // Apparition de la femme
      tl.to(man, 1.5, { opacity: 1 }, 2); // Apparition de l'homme
      tl.to(flower, 1.5, { opacity: 1 }, 2); // Apparition de la fleur

      for (let i = 0; i < bubbles.length; i++) {
        let bubble = bubbles[i];

        tl.to(bubble, 0.1, { opacity: 1 }); // Apparition des bulles
      }

      for (let i = 0; i < bubbles.length; i++) {
        let bubble = bubbles[i];

        tl.to(bubble, 0.2, {
          fill: '#ffe419',
        }); // Colorations des bulles en jaune
      }

      tl.to(money, 1.5, { opacity: 1, x: 30 }); // Apparition et décalage à droit des billets

      tl.to(illustrationchapterOnePartOne, 1.5, { x: -300, scale: 0.9 }); // Décalage du SVG à gauche et rétrécissement

      const counterSecond = (_) => {
        let countUp = new CountUp('second', 20000);
        countUp.start();
      };

      const counterDay = (_) => {
        let countUp = new CountUp('day', 1728000000);
        countUp.start();
      };

      tl.to(numbers, 0.1, {
        display: 'block',
      }); // Display block Compteurs
      tl.call(counterSecond); // Launch counter second
      tl.to(counterSecondLabel, 2, {
        opacity: 1,
      }); // Apparition du label 'transactions/seconde'
      tl.call(counterDay); // Launch counter day
      tl.to(counterDayLabel, 2, {
        opacity: 1,
      }); // Apparition du label 'transactions/jour'
      tl.set('html', { overflow: 'unset' }); // Réactive l'overflow

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
      animationsPartOne();
    }, 2000);
  }
};
