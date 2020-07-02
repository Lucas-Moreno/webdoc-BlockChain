import React from 'react';
import Illustration from '../../../Assets/images/remerciementsImg.png';

const Remerciements = () => {
  return (
    <div className="about__contents">
      <div className="illustration">
        <img src={Illustration} alt="" />
      </div>
      <div className="content">
        <h1 className="content__title">Remerciements</h1>
        <div className="content__text">
          <p>
            Au terme de ce travail, nous tenons à exprimer notre profonde
            gratitude à nos professeurs et intervenants encadrant pour leur
            suivi et leur énorme soutien, qu’ils n’ont cessé de nous prodiguer
            tout au long de la période du projet. Le projet effectué était pour
            nous un réel challenge dû à son interactivités qui demandait
            créativité et immersions. Nous sommes très fiers de notre projet
            final et espérons qu’il vous plaira tout autant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Remerciements;
