import React from 'react';
import InformationsPictogramme from '../../../Assets/images/informations-pictogramme.png';

const IntroductionInformations = () => {
  return (
    <div className="informations">
      <div className="informations__pictogramme">
        <img src={InformationsPictogramme} alt="Informations Pictogramme" />
      </div>
      <p className="informations__text">
        Activez le son de votre appareil<br></br>
        Utilisez vos écouteurs pour profiter pleinement de l'expérience.
      </p>
    </div>
  );
};

export default IntroductionInformations;
