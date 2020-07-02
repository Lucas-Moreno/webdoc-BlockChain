import React from 'react';
import Illustration from '../../../Assets/images/creditsImg.png';

const Credits = () => {
  return (
    <div className="about__contents">
      <div className="illustration">
        <img src={Illustration} alt="" />
      </div>
      <div className="content">
        <h1 className="content__title">Crédits</h1>
        <div className="content__text">
          <p>Réalisé par :</p>
          <p>
            MAXIME BARLET - LUCAS MORENO - JEREMY schiappapietre - LUCAS CUNAULT
            - REMI TIAB
          </p>
        </div>
      </div>
    </div>
  );
};

export default Credits;
