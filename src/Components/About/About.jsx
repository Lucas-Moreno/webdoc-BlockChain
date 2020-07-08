import React, { useState, useEffect } from 'react';
import ContentAbout from './ContentAbout/ContentAbout';
import BackArrow from '../../Assets/images/back-arrow.png';
import { Link } from 'react-router-dom';
import IconSound from '../Icons/IconSound.jsx';
import axios from 'axios';
import soundAbout from '../../Assets/audio/sound-about.mp3';
import Sound from 'react-sound';
import { InView } from 'react-intersection-observer';

const About = () => {
  const [active, setActive] = useState('disclaimer');
  const lis = ['disclaimer', 'informations', 'credit', 'remerciement'];
  const chapter = ['Disclaimer', 'Informations', 'Credits', 'Remerciements'];

  const url = `https://api-blockchain-backend.herokuapp.com/api/articles`;
  const [contents, setContents] = useState('');

  const [id, setId] = useState(4);

  const [swapSound, setSwapSound] = useState(Sound.status.STOPPED);
  const launchSoundIntroduction = (inView) => {
    if (inView) {
      setSwapSound(Sound.status.PLAYING);
    }
  };

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
    <div className="about__container">
      <div className="wrapper wrapper--about">
        <div className="container">
          <div className="contents">
            <div className="about">
              <div className="about__back">
                <Link to="/">
                  <div className="back">
                    <img className="back__arrow" src={BackArrow} alt="" />
                    <span className="back__text">Retour</span>
                  </div>
                </Link>
              </div>
              <div className="about__title">
                <h1 className="title">À propos</h1>
              </div>
              <nav className="about__navigation">
                <ol className="list">
                  {lis.map((li, index) => (
                    <li
                      className={`item ${active === li ? 'active' : null}`}
                      onClick={() => {
                        setActive(li);
                        setId(index + 4);
                      }}
                    >
                      {chapter[index]}
                    </li>
                  ))}
                </ol>
              </nav>
              {Object.keys(contents).map((content, index) => {
                return (
                  <div className="about__contents">
                    {index === 0 && active === 'disclaimer' ? (
                      <ContentAbout
                        title={contents.nameChapter}
                        text={contents.contentChapter}
                      />
                    ) : null}
                    {index === 1 && active === 'informations' ? (
                      <ContentAbout
                        title={contents.nameChapter}
                        text={contents.contentChapter}
                      />
                    ) : null}
                    {index === 2 && active === 'credit' ? (
                      <ContentAbout
                        title={contents.nameChapter}
                        text={contents.contentChapter}
                      />
                    ) : null}
                    {index === 3 && active === 'remerciement' ? (
                      <ContentAbout
                        title={contents.nameChapter}
                        text={contents.contentChapter}
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="icons">
        <IconSound />
      </div>
    </div>
  );
};

export default About;
