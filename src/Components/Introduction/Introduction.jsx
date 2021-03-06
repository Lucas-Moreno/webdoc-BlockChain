import React, { useEffect, useState } from 'react';
import IconSound from '../Icons/IconSound.jsx';
import IconReplay from '../Icons/IconReplay.jsx';
import IconSkip from '../Icons/IconSkip.jsx';
import IntroductionDisclaimer from './Disclaimer/Disclaimer';
import IntroductionInformations from './Informations/Informations';
import IntroductionTexts from './Texts/Texts';
import Navigation from '../Navigation/Navigation';
import soundIntroduction from '../../Assets/audio/sound-introduction.mp3';
import Sound from 'react-sound';
import { InView } from 'react-intersection-observer';

const Introduction = () => {
  const [swapSound, setSwapSound] = useState(Sound.status.STOPPED);
  const launchSoundIntroduction = (inView) => {
    if (inView) {
      setSwapSound(Sound.status.PLAYING);
    }
  };

  function setSound() {
    const soundLine = document.querySelector('.sound-line');
    if (swapSound === 'PLAYING') {
      setSwapSound(Sound.status.PAUSED);
      soundLine.style.opacity = 0;
    } else {
      setSwapSound(Sound.status.PLAYING);
      soundLine.style.opacity = 1;
    }
  }

  useEffect(() => {
    window.soundManager.setup({ debugMode: false });
  });

  return (
    <div className="wrapper wrapper--introduction">
      <InView
        as="div"
        threshold={0.5}
        onChange={(inView, entry) => launchSoundIntroduction(inView)}
      >
        <Sound
          url={soundIntroduction}
          playStatus={swapSound}
          loop={true}
          autoLoad={true}
          volume={50}
        />
        <div className="container">
          <div className="contents">
            <div className="introduction">
              <IntroductionDisclaimer />
              <IntroductionInformations />
              <IntroductionTexts />
              <Navigation />
            </div>
          </div>
        </div>
        <div className="icons">
          <IconSkip />
          <IconReplay />
          <div onClick={setSound}>
            <IconSound />
          </div>
        </div>
      </InView>
    </div>
  );
};

export default Introduction;
