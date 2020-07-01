import React from "react";
import rightArrow from '../../../Assets/images/right-arrow.png';
import Illustration from '../../../Assets/images/disclaimerImg.png';

const ChapterFour = () => {
  return (
    <div className="sommaire__contents">
      <div className="illustration">
        <img src={Illustration} alt="" />
      </div>
      <div className="content">
        <h1 className="content__title">Chapitre 4</h1>
        <div className="content__text">
          <p>
            Il est temps d'identifier et de hiérarchiser les différents domaines
            d'intérêt dans les organisations publiques et privées qui peuvent
            bénéficier de la technologie de la blockchain et éduquer le marché
            sur le potentiel de la blockchain.
          </p>
          <p>
            Il est temps d'identifier et de hiérarchiser les différents domaines
            d'intérêt dans les organisations publiques et privées.
          </p>
          <p>
            Il est temps d'identifier et de hiérarchiser les différents domaines
            d'intérêt dans les organisations publiques et privées qui peuvent
            bénéficier de la technologie de la blockchain et éduquer le marché
            sur le potentiel de la blockchain.
          </p>
        </div>
        <div className="content__launch">
          <div className="launch">
            <span className="launch__text">Voir le chapitre 4</span>
            <img className="launch__arrow" src={rightArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterFour;
