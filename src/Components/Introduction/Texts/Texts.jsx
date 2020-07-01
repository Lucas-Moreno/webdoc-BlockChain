import React from 'react';

const IntroductionTexts = () => {
  return (
    <div className="texts">
      <p className="text text--one">
        <span className="color--blue">Une nouvelle technologie</span> insérant
        le monde dans <span className="color--blue">une nouvelle ère</span>.
      </p>
      <p className="text text--two">
        Une innovation permettant un nouveau système d’échange révolutionnaire
        s’alliant aux <span className="color--yellow ">cryptomonnaies</span>.
      </p>
      <div className="questions">
        <p className="question question--one">
          Pourquoi fait-elle trembler de puissants organismes ?
        </p>
        <p className="question question--two">
          Que va-t-elle apporter de nouveau au sein de notre société ?
        </p>
        <p className="question question--three">
          Quelle(s) trace(s) laisse t-elle à l’échelle mondiale ?
        </p>
        <p className="question question--four">
          Comment pourrait-elle influencer notre futur de manière significative
          ?
        </p>
        <p className="question question--five">
          Notre<span className="color--yellow">&nbsp;futur</span>,
          <span className="color--blue">&nbsp;le monde de demain</span>.
        </p>
      </div>
    </div>
  );
};

export default IntroductionTexts;
