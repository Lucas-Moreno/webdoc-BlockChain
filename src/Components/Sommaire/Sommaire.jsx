import React, { useState } from "react";
import ChapitreUn from "./ChapterOne/ChapterOne";
import ChapitreDeux from "./ChapterTwo/ChapterTwo";
import ChapitreTrois from "./ChapterThree/ChapterThree";
import ChapitreQuatre from "./ChapterFour/ChapterFour";
import Logo from "../../Assets/images/logo.png";
import BackArrow from "../../Assets/images/back-arrow.png";
import { Link } from "react-router-dom";

const Apropos = () => {
  const [active, setActive] = useState("chapterOne");
  const lis = ["chapterOne", "chapterTwo", "chapterThree", "chapterFour"];
  const chapter = ["Chapitre 1", "Chapitre 2", "Chapitre 3", "Chapitre 4"];

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
                  {lis.map((li, index) => (
                    <li
                      className={`item ${active === li ? "active" : null}`}
                      onClick={() => setActive(li)}
                    >
                      {chapter[index]}
                    </li>
                  ))}
                </ol>
              </nav>
              {active === "chapterOne" ? <ChapitreUn /> : null}
              {active === "chapterTwo" ? <ChapitreDeux /> : null}
              {active === "chapterThree" ? <ChapitreTrois /> : null}
              {active === "chapterFour" ? <ChapitreQuatre /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
