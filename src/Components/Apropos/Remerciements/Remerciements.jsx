import React from "react";
import Img from "../../../Assets/images/remerciementsImg.png";

const Remerciements = () => {
  return (
    <div>
      <img src={Img} alt="zbeub" />
      <div>
        <h1>Remerciements</h1>
        <p>
          Au terme de ce travail, nous tenons à exprimer notre profonde
          gratitude à nos professeures et intervenant encadrant pour leur suivi
          et leur énorme soutien, qu’ils n’ont cessé de nous prodiguer tout au
          long de la période du projet. Le projet effectué était pour nous un
          réel challenge dû à son interactivités qui demandait créativité et
          immersions. Nous sommes très fiers de notre projet final et espérons
          qu’il vous plaira tout autant.
        </p>
      </div>
    </div>
  );
};

export default Remerciements;
