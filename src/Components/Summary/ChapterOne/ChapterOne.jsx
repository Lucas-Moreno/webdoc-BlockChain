import React from 'react';
import rightArrow from '../../../Assets/images/right-arrow.png';
import Illustration from '../../../Assets/images/disclaimerImg.png';
import { Link } from 'react-router-dom';

const ChapterOne = () => {
  return (
    <div className="summary__contents">
      <div className="illustration">
        <img src={Illustration} alt="" />
      </div>
      <div className="content">
        <h1 className="content__title">Les failles d’un système</h1>
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
          <Link to="/chapitre-un">
            <div className="launch">
              <span className="launch__text">Voir le chapitre 1</span>
              <img className="launch__arrow" src={rightArrow} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChapterOne;