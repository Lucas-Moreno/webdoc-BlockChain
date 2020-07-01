import React, { useState } from "react";
import Disclaimers from "./Disclaimer/Disclaimer";
import Information from "./Informations/Informations";
import Credits from "./Credits/Credits";
import Remerciements from "./Remerciements/Remerciements";
import BackArrow from "../../Assets/images/back-arrow.png";
import { Link } from "react-router-dom";
//import Header from '../../Components/Header/Header';

const Apropos = () => {
  const [disclaimer, setDisclaimer] = useState(true);
  const [informations, setInformations] = useState(false);
  const [credit, setCredit] = useState(false);
  const [remerciement, setRemerciement] = useState(false);

  const Disclaimer = () => {
    setDisclaimer(true);
    setInformations(false);
    setCredit(false);
    setRemerciement(false);
  };

  const Informations = () => {
    setInformations(true);
    setDisclaimer(false);
    setCredit(false);
    setRemerciement(false);
  };

  const Credit = () => {
    setCredit(true);
    setDisclaimer(false);
    setRemerciement(false);
    setInformations(false);
  };

  const Remerciement = () => {
    setRemerciement(true);
    setDisclaimer(false);
    setInformations(false);
    setCredit(false);
  };
  return (
    <div className="apropos__container">
      {/* <Header /> */}
      <div className="wrapper wrapper--apropos">
        <div className="container">
          <div className="contents">
            <div className="apropos">
              <div className="apropos__back">
                <Link to="/">
                  <div className="back">
                    <img className="back__arrow" src={BackArrow} alt="" />
                    <span className="back__text">Retour</span>
                  </div>
                </Link>
              </div>
              <div className="apropos__title">
                <h1 className="title">À propos</h1>
              </div>
              <nav className="apropos__navigation">
                <ol className="list">
                  <li
                    className={`item ${disclaimer ? "active" : null}`}
                    onClick={Disclaimer}
                  >
                    Disclaimer
                  </li>
                  <li
                    className={`item ${informations ? "active" : null}`}
                    onClick={Informations}
                  >
                    Informations
                  </li>
                  <li
                    className={`item ${credit ? "active" : null}`}
                    onClick={Credit}
                  >
                    Credits
                  </li>
                  <li
                    className={`item ${remerciement ? "active" : null}`}
                    onClick={Remerciement}
                  >
                    Remerciements
                  </li>
                </ol>
              </nav>
              {disclaimer ? <Disclaimers /> : null}
              {informations ? <Information /> : null}
              {credit ? <Credits /> : null}
              {remerciement ? <Remerciements /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
