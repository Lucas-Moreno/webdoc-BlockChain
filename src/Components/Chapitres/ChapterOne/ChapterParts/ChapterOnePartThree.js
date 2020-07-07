import $ from 'jquery';
import { TimelineMax } from 'gsap/all';
import soundOne from '../../../../Assets/audio/chapterOne/part-three-1.mp3';
import soundTwo from '../../../../Assets/audio/chapterOne/part-three-2.mp3';
import soundThree from '../../../../Assets/audio/chapterOne/part-three-3.mp3';

export const ChapterOnePartThreeScript = (inView) => {
  if (inView) {
    const html = document.querySelector('html');
    const container = $('.part--three');
    let containerOffsetLeft = container.offset().left;
    const partThree = document.querySelector('.part--three');

    window.scrollTo({
      left: containerOffsetLeft,
      behavior: 'smooth',
    });

    setTimeout(() => {
      if (partThree.hasAttribute('animation')) {
        html.style.overflow = 'unset';
      } else {
        html.style.overflow = 'hidden';
      }
    }, 700);

    // Launch animation part
    const animationsPartThree = (_) => {
      // Elements
      const illustrationchapterOnePartThree = document.querySelector(
        '.illustrationchapterOnePartThree'
      );
      const blockchain = document.querySelector(
        '.illustrationchapterOnePartThree .blockchain'
      );
      const stockage = document.querySelector(
        '.illustrationchapterOnePartThree .stockage'
      );
      const transparent = document.querySelector(
        '.illustrationchapterOnePartThree .transparent'
      );
      const secure = document.querySelector(
        '.illustrationchapterOnePartThree .secure'
      );
      const central = document.querySelector(
        '.illustrationchapterOnePartThree .central'
      );
      const keywords = document.querySelectorAll(
        '.illustrationchapterOnePartThree .keyword'
      );
      const lastCube = document.querySelector(
        '.illustrationchapterOnePartThree .cube-10'
      );
      const lastLine = document.querySelector(
        '.illustrationchapterOnePartThree .inter-line-9'
      );
      const exchanges = document.querySelector(
        '.illustrationchapterOnePartThree .exchanges'
      );
      const dispatchOne = document.querySelector(
        '.illustrationchapterOnePartThree .dispatch-one'
      );
      const dispatchOneValidate = document.querySelector(
        '.illustrationchapterOnePartThree .dispatch-one .validate'
      );
      const dispatchOneComputer = document.querySelector(
        '.illustrationchapterOnePartThree .dispatch-one .computer'
      );
      const dispatchTwo = document.querySelector(
        '.illustrationchapterOnePartThree .dispatch-two'
      );
      const dispatchTwoValidate = document.querySelector(
        '.illustrationchapterOnePartThree .dispatch-two .validate'
      );
      const dispatchTwoComputer = document.querySelector(
        '.illustrationchapterOnePartThree .dispatch-two .computer'
      );
      const dispatchThree = document.querySelector(
        '.illustrationchapterOnePartThree .dispatch-three'
      );
      const dispatchThreeValidate = document.querySelector(
        '.illustrationchapterOnePartThree .dispatch-three .validate'
      );
      const dispatchThreeComputer = document.querySelector(
        '.illustrationchapterOnePartThree .dispatch-three .computer'
      );
      const iconReplay = document.querySelector('.icon--replay');
      const iconSkip = document.querySelector('.icon--skip');

      /* Sounds Manager */
      // Chapter One Part Three Sound One
      let audioplaySoundOne = document.createElement('audio');
      audioplaySoundOne.setAttribute('src', soundOne);

      const launchAudioplaySoundOne = (_) => {
        audioplaySoundOne.play();
      };

      // Chapter One Part Three Sound Two
      let audioplaySoundTwo = document.createElement('audio');
      audioplaySoundTwo.setAttribute('src', soundTwo);

      const launchAudioplaySoundTwo = (_) => {
        audioplaySoundTwo.play();
      };

      // Chapter One Part Three Sound Three
      let audioplaySoundThree = document.createElement('audio');
      audioplaySoundThree.setAttribute('src', soundThree);

      const launchAudioplaySoundThree = (_) => {
        audioplaySoundThree.play();
      };

      // Init TimelineMax
      let tl = new TimelineMax({});

      // Start Animation
      tl.call(launchAudioplaySoundOne);
      tl.to(blockchain, 2.5, { opacity: 1 }); // Apparition des cubes blockchain
      tl.to(stockage, 1, { opacity: 1 }, 3); // Apparition stockage
      tl.to(transparent, 1, { opacity: 1 }, 5); // Apparition transparent
      tl.to(secure, 1, { opacity: 1 }, 6); // Apparition secure
      tl.to(central, 1, { opacity: 1 }, 8); // Apparition central

      tl.set({}, {}, '+=3'); // Add Delay

      for (let i = 0; i < keywords.length; i++) {
        const keyword = keywords[i];

        tl.to(keyword, 0.3, { opacity: 0 }); // Disparition des mots clés
      }

      tl.set({}, {}, '+=2'); // Add Delay

      tl.call(launchAudioplaySoundTwo);

      tl.to(blockchain, 1, { x: -350 }, 15); // Placement sur la gauche des cubes blockchain
      tl.set(exchanges, { x: -350 }); // Placement sur la gauche de la ligne + "1 échange"
      tl.set(dispatchOne, { x: -350 }); // Placement sur la gauche du dispatch one
      tl.set(dispatchTwo, { x: -350 }); // Placement sur la gauche du dispatch two
      tl.set(dispatchThree, { x: -350 }); // Placement sur la gauche du dispatch three
      tl.to(lastLine, 1, { opacity: 1 }, 16); // Apparition de la derniere inter-ligne
      tl.to(lastCube, 1, { opacity: 1 }, 16); // Apparition du dernier cube
      tl.to(exchanges, 1, { opacity: 1 }, 18.5); // Apparition de la ligne + "1 échange"
      tl.to(exchanges, 1, { opacity: 0 }, 23.5); // Disparition de la ligne + "1 échange"
      tl.to(dispatchOne, 1, { opacity: 1 }, 27); // Apparition de dispatch one
      tl.to(dispatchOneComputer, 1, { opacity: 1 }, 27.5); // Apparition de dispatch one computer
      tl.to(dispatchOneValidate, 1, { opacity: 1 }, 28); // Apparition de dispatch one validate
      tl.to(dispatchTwo, 1, { opacity: 1 }, 28.5); // Apparition de dispatch two
      tl.to(dispatchTwoComputer, 1, { opacity: 1 }, 29); // Apparition de dispatch two computer
      tl.to(dispatchTwoValidate, 1, { opacity: 1 }, 29.5); // Apparition de dispatch two validate
      tl.to(dispatchThree, 1, { opacity: 1 }, 30); // Apparition de dispatch three
      tl.to(dispatchThreeComputer, 2, { opacity: 1 }, 30.5); // Apparition de dispatch three computer
      tl.to(dispatchThreeValidate, 2, { opacity: 1 }, 31); // Apparition de dispatch three validate

      tl.set({}, {}, '+=4'); // Add Delay

      tl.call(launchAudioplaySoundThree);

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
      animationsPartThree();
    }, 1500);
  }
};
