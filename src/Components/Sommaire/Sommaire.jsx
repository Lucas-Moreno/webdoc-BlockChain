import React, { useState } from 'react';
import ChapitreUn from './ChapterOne/ChapterOne';
import ChapitreDeux from './ChapterTwo/ChapterTwo';
import ChapitreTrois from './ChapterThree/ChapterThree';
import Logo from '../../Assets/images/logo.png';
import BackArrow from '../../Assets/images/back-arrow.png';
import { Link } from 'react-router-dom';

const Apropos = () => {
  const [active, setActive] = useState('chapterOne');
  const lis = ['chapterOne', 'chapterTwo', 'chapterThree'];

  return (
    <div className="sommaire__container">
      <div className="wrapper wrapper--sommaire">
        <div className="container">
          <div className="contents">
            <div className="sommaire">
              <div className="sommaire__back">
                <Link to="/">
                  <div className="back">
                    <img className="back__arrow" src={BackArrow} alt="" />
                    <span className="back__text">Retour</span>
                  </div>
                </Link>
              </div>
              <div className="sommaire__title">
                <h1 className="title">Sommaire</h1>
              </div>
              <nav className="sommaire__navigation">
                <ol className="list">
                  <li
                    className={`item ${
                      active === 'chapterOne' ? 'active' : null
                    }`}
                    onClick={() => setActive('chapterOne')}
                  >
                    Chapitre 1
                  </li>
                  <li
                    className={`item ${
                      active === 'chapterTwo' ? 'active' : null
                    }`}
                    onClick={() => setActive('chapterTwo')}
                  >
                    Chapitre 2
                  </li>
                  <li
                    className={`item ${
                      active === 'chapterThree' ? 'active' : null
                    }`}
                    onClick={() => setActive('chapterThree')}
                  >
                    Chapitre 3
                  </li>
                </ol>
              </nav>
              {active === 'chapterOne' ? <ChapitreUn /> : null}
              {active === 'chapterTwo' ? <ChapitreDeux /> : null}
              {active === 'chapterThree' ? <ChapitreTrois /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
