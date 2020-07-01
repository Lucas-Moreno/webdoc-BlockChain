import React, { useState } from "react";
import Disclaimers from "./Disclaimer/Disclaimer";
import Information from "./Informations/Informations";
import Credits from "./Credits/Credits";
import Remerciements from "./Remerciements/Remerciements";
import BackArrow from "../../Assets/images/back-arrow.png";
import { Link } from "react-router-dom";
//import Header from '../../Components/Header/Header';

const Apropos = () => {
  const [active, setActive] = useState("disclaimer");
  const lis = ["disclaimer", "informations", "credits", "remerciements"];

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
                    className={`item ${
                      active === "disclaimer" ? "active" : null
                    }`}
                    onClick={() => setActive("disclaimer")}
                  >
                    Disclaimer
                  </li>
                  <li
                    className={`item ${
                      active === "informations" ? "active" : null
                    }`}
                    onClick={() => setActive("informations")}
                  >
                    Informations
                  </li>
                  <li
                    className={`item ${active === "credit" ? "active" : null}`}
                    onClick={() => setActive("credit")}
                  >
                    Credits
                  </li>
                  <li
                    className={`item ${
                      active === "remerciement" ? "active" : null
                    }`}
                    onClick={() => setActive("remerciement")}
                  >
                    Remerciements
                  </li>
                </ol>
              </nav>
              {active === "disclaimer" ? <Disclaimers /> : null}
              {active === "informations" ? <Information /> : null}
              {active === "credit" ? <Credits /> : null}
              {active === "remerciement" ? <Remerciements /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
