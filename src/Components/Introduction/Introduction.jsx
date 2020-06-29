import React from 'react';
import IconSound from '../IconSound/IconSound.jsx';
import IntroductionDisclaimer from './Disclaimer/Disclaimer';
import IntroductionInformations from './Informations/Informations';
import IntroductionTexts from './Texts/Texts';
import Navigation from '../Navigation/Navigation';

const Introduction = () => {
  return (
    <div className="wrapper wrapper--introduction">
      <div className="container">
        <div className="introduction">
          <IntroductionDisclaimer />
          <IntroductionInformations />
          <IntroductionTexts />
          <Navigation />
        </div>
      </div>
      <IconSound />
    </div>
  );
};

export default Introduction;
