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
  return (
    <div>
      <h1>Sommaire</h1>
      <img src={Logo} alt="Logo" />
      <Link to="/">
        <div>
          <img src={BackArrow} alt="Flèche droite" />
          <span>Retour</span>
        </div>
      </Link>
      <div className="container_button">
        <div className="button_apropos" onClick={() => setActive("chapterOne")}>
          <p className="button_text">Chapitre 1</p>
        </div>
        <div className="button_apropos" onClick={() => setActive("chapterTwo")}>
          <p className="button_text">Chapitre 2</p>
        </div>
        <div
          className="button_apropos"
          onClick={() => setActive("chapterThree")}
        >
          <p className="button_text">Chapitre 3</p>
        </div>
        <div
          className="button_apropos"
          onClick={() => setActive("chapterFour")}
        >
          <p className="button_text">Chapitre 4</p>
        </div>
      </div>
      {active === "chapterOne" ? <ChapitreUn /> : null}
      {active === "chapterTwo" ? <ChapitreDeux /> : null}
      {active === "chapterThree" ? <ChapitreTrois /> : null}
      {active === "chapterFour" ? <ChapitreQuatre /> : null}
    </div>
  );
};

export default Apropos;
