import React from "react";
import Img from "../../../Assets/images/InformationsImg.png";

const Informations = () => {
  return (
    <div>
      <img src={Img} alt="zbeub" />
      <div>
        <h1>Informations</h1>
        <p>Vous êtes mal voyant ou mal entendant ?</p>
        <p>
          Notre web documentaire est sous-titrés, accompagné d’une explication
          oral et comporte des animations illustrant nos propos.
        </p>
      </div>
    </div>
  );
};

export default Informations;
