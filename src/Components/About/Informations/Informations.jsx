import React from 'react';
import Illustration from '../../../Assets/images/InformationsImg.png';

const Informations = () => {
  return (
    <div className="about__contents">
      <div className="illustration">
        <img src={Illustration} alt="" />
      </div>
      <div className="content">
        <h1 className="content__title">Informations</h1>
        <div className="content__text">
          <p>Vous êtes mal voyant ou mal entendant ?</p>
          <p>
            Notre web documentaire est sous-titrés, accompagné d’une explication
            oral et comporte des animations illustrant nos propos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Informations;
