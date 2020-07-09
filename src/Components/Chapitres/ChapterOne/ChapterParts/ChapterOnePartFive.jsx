import React from 'react';
import { InView } from 'react-intersection-observer';
import backgroundElement from '../../../../Assets/images/background-element-chapter-one-part-five.png';
import { ChapterOnePartFiveScript } from './ChapterOnePartFive.js';
import MainQuiz from '../../ChapterQuiz/ChapterOne/Quiz.jsx';

const ChapterOnePartFive = () => {
  return (
    <InView
      as="div"
      threshold={0.25}
      onChange={(inView, entry) => ChapterOnePartFiveScript(inView)}
    >
      <div className="part part--five part--last">
        <div className="contents__background-element">
          <img src={backgroundElement} alt="" />
        </div>
        <div className="container-quiz">
          <MainQuiz />
        </div>
        <div className="contents">
          <div className="contents__next-chapter">
            <div className="next-chapter">
              <h2 className="next-chapter__title">Chapitre suivant</h2>
              <h3 className="next-chapter__subtitle">Un rôle précis</h3>
              <p className="next-chapter__text">
                Fiabilité, confidentialité, sécurité, ...<br></br>Découvrez les
                rôles majeurs joués par la blockchain !
              </p>
              <div className="next-chapter__buttons">
                <div className="button button--quiz" title="Faite le Quiz">
                  Faite le Quiz
                </div>
                <div
                  className="button button--next"
                  title="Prochainement le Chapitre 2"
                >
                  Prochainement ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InView>
  );
};

export default ChapterOnePartFive;
