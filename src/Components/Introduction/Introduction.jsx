import React from 'react';
import IconSound from '../Icons/IconSound.jsx';
import IconReplay from '../Icons/IconReplay.jsx';
import IconSkip from '../Icons/IconSkip.jsx';
import IntroductionDisclaimer from './Disclaimer/Disclaimer';
import IntroductionInformations from './Informations/Informations';
import IntroductionTexts from './Texts/Texts';
import Navigation from '../Navigation/Navigation';

const Introduction = () => {
  return (
    <div className="wrapper wrapper--introduction">
      <div className="container">
        <div className="contents">
          <div className="introduction">
            <IntroductionDisclaimer />
            <IntroductionInformations />
            <IntroductionTexts />
            <Navigation />
          </div>
        </div>
      </div>
      <div className="icons">
        <IconSkip />
        <IconReplay />
        <IconSound />
      </div>
    </div>
  );
};

export default Introduction;
