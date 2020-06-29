import React from 'react';
import InformationsPictogramme from '../../../Assets/images/informations-pictogramme.png';

const IntroductionInformations = () => {
  return (
    <div className="informations">
      <div className="informations__pictogramme">
        <img src={InformationsPictogramme} alt="Informations Pictogramme" />
      </div>
      <p className="informations__text">
        Utilisez vos écouteurs pour profiter pleinement de l'expérience.
      </p>
    </div>
  );
};

export default IntroductionInformations;
