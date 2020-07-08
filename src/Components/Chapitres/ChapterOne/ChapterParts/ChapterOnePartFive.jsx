import React from "react";
import { InView } from "react-intersection-observer";
import backgroundElement from "../../../../Assets/images/background-element-chapter-one-part-five.png";
import { ChapterOnePartFiveScript } from "./ChapterOnePartFive.js";
import { Link } from "react-router-dom";

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
                <Link to="/quizz">
                  <div className="button button--quiz">Faite le Quiz</div>
                </Link>
                <div className="button button--next">Prochainement ...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InView>
  );
};

export default ChapterOnePartFive;
