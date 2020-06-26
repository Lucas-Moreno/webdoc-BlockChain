import React from "react";
import Img from "../../../Assets/images/creditsImg.png";

const Credits = () => {
  return (
    <div>
      <img src={Img} alt="zbeub" />
      <div>
        <h1>Crédits</h1>
        <p>Réalisé par :</p>
        <p>
          MAXIME BARLET - LUCAS MORENO - JEREMY schiappapietre - LUCAS CUNAULT -
          REMI TIAB
        </p>
      </div>
    </div>
  );
};

export default Credits;
