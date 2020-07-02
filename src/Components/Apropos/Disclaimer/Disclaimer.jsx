import React from "react";
import Illustration from "../../../Assets/images/disclaimerImg.png";

const Disclaimer = () => {
  return (
    <div className="apropos__contents">
      <div className="illustration">
        <img src={Illustration} alt="" />
      </div>
      <div className="content">
        <h1 className="content__title">Disclaimer</h1>
        <div className="content__text">
          <p>
            Ce site a été réalisé à des fins pédagogiques dans le cadre du
            cursus Bachelor de l’école HETIC. Les contenus présentés n'ont pas
            fait l'objet d'une demande de droit d'utilisation.{' '}
          </p>
          <p>
            Ce site ne sera en aucun cas exploité à des fins commerciales et ne
            sera pas publié
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
