import React, { useState } from "react";
import Disclaimers from "./Disclaimer/Disclaimer";
import Information from "./Informations/Informations";
import Credits from "./Credits/Credits";
import Remerciements from "./Remerciements/Remerciements";
import "../../Assets/scss/components/Apropos/_apropos.scss";

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
    <div>
      <h1>a propos</h1>
      <span>Retour</span>
      <div className="container_button">
        <div className="button_apropos" onClick={Disclaimer}>
          <p className="button_text">disclaimer</p>
        </div>
        <div className="button_apropos" onClick={Informations}>
          <p className="button_text">informations</p>
        </div>
        <div className="button_apropos" onClick={Credit}>
          <p className="button_text">credits</p>
        </div>
        <div className="button_apropos" onClick={Remerciement}>
          <p className="button_text">remerciements</p>
        </div>
      </div>
      {disclaimer ? <Disclaimers /> : null}
      {informations ? <Information /> : null}
      {credit ? <Credits /> : null}
      {remerciement ? <Remerciements /> : null}
    </div>
  );
};

export default Apropos;
