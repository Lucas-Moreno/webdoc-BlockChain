import React, { useState, useCallback, useEffect } from 'react';
import IconSound from '../../Icons/IconSound.jsx';
import { HamburgerCollapse } from 'react-animated-burgers';
import soundChapterOne from '../../../Assets/audio/sound-chapter-one.mp3';
import Sound from 'react-sound';
import { InView } from 'react-intersection-observer';

const ChapterMenu = () => {
  const [swapSound, setSwapSound] = useState(Sound.status.STOPPED);
  const launchSoundChapterOne = (inView) => {
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
  const [isActive, setIsActive] = useState(false);
  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  );

  useEffect(() => {
    window.soundManager.setup({ debugMode: false });
  });

  return (
    <div className="menu">
      <InView
        as="div"
        threshold={0.5}
        onChange={(inView, entry) => launchSoundChapterOne(inView)}
      >
        <Sound
          url={soundChapterOne}
          playStatus={swapSound}
          loop={true}
          autoLoad={true}
          volume={20}
        />
        <div className="menu__burger">
          <HamburgerCollapse barColor="white" {...{ isActive, toggleButton }} />
        </div>
        <div className="menu__sound" onClick={setSound}>
          <IconSound />
        </div>
      </InView>
    </div>
  );
};

export default ChapterMenu;
