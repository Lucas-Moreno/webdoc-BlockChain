import React, { useState } from "react";
import ContentAbout from "./ContentAbout/ContentAbout";
import BackArrow from "../../Assets/images/back-arrow.png";
import { Link } from "react-router-dom";
import IconSound from "../Icons/IconSound.jsx";

const About = () => {
  const [active, setActive] = useState("disclaimer");
  const lis = ["disclaimer", "informations", "credit", "remerciement"];
  const chapter = ["Disclaimer", "Informations", "Credits", "Remerciements"];

  const objList = {
    disclaimer: [
      "disclaimer",
      "Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Bachelor de l’école HETIC. Les contenus présentés n'ont pas fait l'objet d'une demande de droit d'utilisation. Ce site ne sera en aucun cas exploité à des fins commerciales et ne sera pas publié"
    ],
    informations: [
      "informations",
      "Vous êtes mal voyant ou mal entendant ? Notre web documentaire est sous-titrés, accompagné d’une explication oral et comporte des animations illustrant nos propos."
    ],
    credits: [
      "crédits",
      "Réalisé par : MAXIME BARLET - LUCAS MORENO - JEREMY SCHIAPPAPIETRE - LUCAS CUNAULT - REMI TIAB"
    ],
    remerciement: [
      "remerciements",
      "Au terme de ce travail, nous tenons à exprimer notre profonde gratitude à nos professeurs et intervenants encadrant pour leur suivi et leur énorme soutien, qu’ils n’ont cessé de nous prodiguer tout au long de la période du projet. Le projet effectué était pour nous un réel challenge dû à son interactivités qui demandait créativité et immersions. Nous sommes très fiers de notre projet final et espérons qu’il vous plaira tout autant."
    ]
  };

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
                  <div className="about__contents">
                    {index === 0 && active === "disclaimer" ? (
                      <ContentAbout
                        title={objList.disclaimer[0]}
                        text={objList.disclaimer[1]}
                      />
                    ) : null}
                    {index === 1 && active === "informations" ? (
                      <ContentAbout
                        title={objList.informations[0]}
                        text={objList.informations[1]}
                      />
                    ) : null}
                    {index === 2 && active === "credit" ? (
                      <ContentAbout
                        title={objList.credits[0]}
                        text={objList.credits[1]}
                      />
                    ) : null}
                    {index === 3 && active === "remerciement" ? (
                      <ContentAbout
                        title={objList.remerciement[0]}
                        text={objList.remerciement[1]}
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
