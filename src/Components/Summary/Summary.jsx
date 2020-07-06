import React, { useState } from "react";
import Chapitre from "./Chapter/Chapter";
import Logo from "../../Assets/images/logo.png";
import BackArrow from "../../Assets/images/back-arrow.png";
import { Link } from "react-router-dom";
import IconSound from "../Icons/IconSound";
const Summary = () => {
  const [active, setActive] = useState("chapterOne");
  const lis = ["chapterOne", "chapterTwo", "chapterThree"];
  const chapter = ["Chapitre 1", "Chapitre 2", "Chapitre 3", "Chapitre 4"];

  const objList = {
    chapterOne: [
      "Les failles d’un système",
      "Il est temps d'identifier et de hiérarchiser les différents domaines d'intérêt dans les organisations publiques et privées qui peuvent bénéficier de la technologie de la blockchain et éduquer le marché sur le potentiel de la blockchain. ",
      "Voir le chapitre 1"
    ],
    chapterTwo: [
      "Chapitre 2",
      "Il est temps d'identifier et de hiérarchiser les différents domaines d'intérêt dans les organisations publiques et privées qui peuvent bénéficier de la technologie de la blockchain et éduquer le marché sur le potentiel de la blockchain. ",
      "Voir le chapitre 2"
    ],
    chapterThree: [
      "Chapitre 3",
      "Il est temps d'identifier et de hiérarchiser les différents domaines d'intérêt dans les organisations publiques et privées qui peuvent bénéficier de la technologie de la blockchain et éduquer le marché sur le potentiel de la blockchain. ",
      "Voir le chapitre 3"
    ]
  };

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
                      className={`item ${active === li ? "active" : null}`}
                      onClick={() => setActive(li)}
                    >
                      {chapter[index]}
                    </li>
                  ))}
                </ol>
              </nav>
              {Object.keys(objList).map((obj, index) => {
                return (
                  <div className="summary__contents">
                    {index === 0 && active === "chapterOne" ? (
                      <Chapitre
                        title={objList.chapterOne[0]}
                        text={objList.chapterOne[1]}
                        button={objList.chapterOne[2]}
                      />
                    ) : null}
                    {index === 1 && active === "chapterTwo" ? (
                      <Chapitre
                        title={objList.chapterTwo[0]}
                        text={objList.chapterTwo[1]}
                        button={objList.chapterTwo[2]}
                      />
                    ) : null}
                    {index === 2 && active === "chapterThree" ? (
                      <Chapitre
                        title={objList.chapterThree[0]}
                        text={objList.chapterThree[1]}
                        button={objList.chapterThree[2]}
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

export default Summary;
