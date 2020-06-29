import React, { useState } from "react";
import ChapitreUn from "./ChapterOne/ChapterOne";
import ChapitreDeux from "./ChapterTwo/ChapterTwo";
import ChapitreTrois from "./ChapterThree/ChapterThree";
import ChapitreQuatre from "./ChapterFour/ChapterFour";
import "../../Assets/scss/components/Apropos/_apropos.scss";
import Logo from "../../Assets/images/logo.png";
import BackArrow from "../../Assets/images/back-arrow.png";

const Apropos = () => {
  const [chapterOne, setChapterOne] = useState(true);
  const [chapterTwo, setChapterTwo] = useState(false);
  const [chapterThree, setChapterThree] = useState(false);
  const [chapterFour, setChapterFour] = useState(false);

  const ChapterOne = () => {
    setChapterOne(true);
    setChapterTwo(false);
    setChapterThree(false);
    setChapterFour(false);
  };

  const ChapterTwo = () => {
    setChapterTwo(true);
    setChapterOne(false);
    setChapterThree(false);
    setChapterFour(false);
  };

  const ChapterThree = () => {
    setChapterThree(true);
    setChapterOne(false);
    setChapterFour(false);
    setChapterTwo(false);
  };

  const ChapterFour = () => {
    setChapterFour(true);
    setChapterOne(false);
    setChapterTwo(false);
    setChapterThree(false);
  };
  return (
    <div>
      <h1>Sommaire</h1>
      <img src={Logo} alt="Logo" />
      <div>
        <img src={BackArrow} alt="Flèche droite" />
        <span>Retour</span>
      </div>
      <div className="container_button">
        <div className="button_apropos" onClick={ChapterOne}>
          <p className="button_text">Chapitre 1</p>
        </div>
        <div className="button_apropos" onClick={ChapterTwo}>
          <p className="button_text">Chapitre 2</p>
        </div>
        <div className="button_apropos" onClick={ChapterThree}>
          <p className="button_text">Chapitre 3</p>
        </div>
        <div className="button_apropos" onClick={ChapterFour}>
          <p className="button_text">Chapitre 4</p>
        </div>
      </div>
      {chapterOne ? <ChapitreUn /> : null}
      {chapterTwo ? <ChapitreDeux /> : null}
      {chapterThree ? <ChapitreTrois /> : null}
      {chapterFour ? <ChapitreQuatre /> : null}
    </div>
  );
};

export default Apropos;
