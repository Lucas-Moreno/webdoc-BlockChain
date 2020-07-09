import React, { useState, useEffect } from 'react';
import Chapitre from './Chapter/Chapter';
import BackArrow from '../../Assets/images/back-arrow.png';
import { Link } from 'react-router-dom';
import IconSound from '../Icons/IconSound';
import axios from 'axios';
import soundSummary from '../../Assets/audio/sound-summary.mp3';
import Sound from 'react-sound';
import { InView } from 'react-intersection-observer';

const Summary = () => {
  const [active, setActive] = useState('chapterOne');
  const lis = ['chapterOne', 'chapterTwo', 'chapterThree'];
  const chapter = ['Chapitre 1', 'Chapitre 2', 'Chapitre 3', 'Chapitre 4'];

  const url = `https://api-blockchain-backend.herokuapp.com/api/articles`;
  const [contents, setContents] = useState('');

  const [id, setId] = useState(1);

  const [swapSound, setSwapSound] = useState(Sound.status.STOPPED);
  const launchSoundSummary = (inView) => {
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

    axios
      .get(`https://api-blockchain-backend.herokuapp.com/api/articles/${id}`)
      .then((res) => {
        setContents(res.data);
      })
      .catch((err) => {});
  }, [id, url]);

  return (
    <div className="summary__container">
      <InView
        as="div"
        threshold={0.5}
        onChange={(inView, entry) => launchSoundSummary(inView)}
      >
        <Sound
          url={soundSummary}
          playStatus={swapSound}
          loop={true}
          autoLoad={true}
          volume={50}
        />
        <div className="wrapper wrapper--summary">
          <div className="container">
            <div className="contents">
              <div className="summary">
                <div className="summary__back">
                  <Link to="/">
                    <div className="back">
                      <img className="back__arrow" src={BackArrow} alt="" />
                      <span className="back__text">Retour</span>
                    </div>
                  </Link>
                </div>
                <div className="summary__title">
                  <h1 className="title">Sommaire</h1>
                </div>
                <nav className="summary__navigation">
                  <ol className="list">
                    {lis.map((li, index) => (
                      <li
                        className={`item ${active === li ? 'active' : null}`}
                        onClick={() => {
                          setActive(li);
                          setId(index + 1);
                        }}
                      >
                        {chapter[index]}
                      </li>
                    ))}
                  </ol>
                </nav>
                {Object.keys(contents).map((content, index) => {
                  return (
                    <div className="summary__contents">
                      {index === 0 && active === 'chapterOne' ? (
                        <Chapitre
                          title={contents.titleChapter}
                          text={contents.contentChapter}
                          button={contents.textButtonChapter}
                          path="chapitre-un"
                          attrTitle="Voir le Chapitre 1"
                        />
                      ) : null}
                      {index === 1 && active === 'chapterTwo' ? (
                        <Chapitre
                          title={contents.titleChapter}
                          text={contents.contentChapter}
                          button={contents.textButtonChapter}
                          disable={'disable'}
                          attrTitle="Chapitre 2 prochainement disponible"
                        />
                      ) : null}
                      {index === 2 && active === 'chapterThree' ? (
                        <Chapitre
                          title={contents.titleChapter}
                          text={contents.contentChapter}
                          button={contents.textButtonChapter}
                          disable={'disable'}
                          attrTitle="Chapitre 3 prochainement disponible"
                        />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="icons" onClick={setSound}>
          <IconSound />
        </div>
      </InView>
    </div>
  );
};

export default Summary;
