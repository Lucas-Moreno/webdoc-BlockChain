import React, { useState } from 'react';
import ChapitreUn from './ChapterOne/ChapterOne';
import ChapitreDeux from './ChapterTwo/ChapterTwo';
import ChapitreTrois from './ChapterThree/ChapterThree';
import Logo from '../../Assets/images/logo.png';
import BackArrow from '../../Assets/images/back-arrow.png';
import { Link } from 'react-router-dom';
import IconSound from '../Icons/IconSound.jsx';

const Summary = () => {
  const [active, setActive] = useState('chapterOne');
  const lis = ['chapterOne', 'chapterTwo', 'chapterThree'];
  const chapter = ['Chapitre 1', 'Chapitre 2', 'Chapitre 3', 'Chapitre 4'];

  return (
    <div className="summary__container">
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
                      onClick={() => setActive(li)}
                    >
                      {chapter[index]}
                    </li>
                  ))}
                </ol>
              </nav>
              {active === 'chapterOne' ? <ChapitreUn /> : null}
              {active === 'chapterTwo' ? <ChapitreDeux /> : null}
              {active === 'chapterThree' ? <ChapitreTrois /> : null}
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

export default Summary;